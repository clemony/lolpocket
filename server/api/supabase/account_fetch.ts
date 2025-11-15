import { accountSchema, pocketSchema, settingsSchema } from "#shared"
import * as v from "valibot"
import { createSupabaseClient } from "../client.supabase"
interface UserProfileResponse {
  account: Account | null
  pockets: Pocket[] | null
  settings: Settings | null
}

export default defineEventHandler(async (event) => {
  const { client, user } = await createSupabaseClient(event)
  if (!user) return

  try {
    const { data, error } = await client
      .rpc("get_user_profile")
      .single<UserProfileResponse>()

    if (error) {
      throw createError({
        data: error,
        statusCode: 500,
        statusMessage: "RPC failed",
      })
    }

    if (!data)
      throw createError({ statusCode: 404, statusMessage: "Profile not found" })

    const accountParse = v.safeParse(accountSchema, data.account)
    console.log("📎 - accountParse:", accountParse)
    const settingsParse = v.safeParse(settingsSchema, data.settings)

    const userPockets: Pocket[] = []
    data.pockets.forEach((pocket) => {
      const p = v.safeParse(pocketSchema, pocket)
      if (p.success) userPockets.push(p.output)
      else console.log(p.issues)
    })

    const userAccount =
      accountParse.success ? accountParse.output : getEmptyAccount()

    const userSettings =
      settingsParse.success ? settingsParse.output : getEmptySettings()

    // optional logging, only for local dev
    if (!accountParse.success)
      console.warn("🚫 Account validation failed:", accountParse.issues)
    if (!settingsParse.success)
      console.warn("🚫 Settings validation failed:", settingsParse.issues)

    return {
      data: {
        account: userAccount,
        pockets: userPockets,
        settings: userSettings,
      },
      error,
    }
  } catch (err) {
    console.error("Unexpected error in hydrateUser:", err)
    throw createError({
      statusCode: 500,
      statusMessage: "Unexpected server error",
    })
  }
})
