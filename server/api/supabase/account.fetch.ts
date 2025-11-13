import * as v from "valibot"
import type { Account, Pocket, Settings } from "~~/shared/schema"
import {
  AccountSchema,
  getEmptyAccount,
  getEmptySettings,
  PocketSchema,
  SettingsSchema,
} from "~~/shared/schema"
import { createSupabaseClient } from "../client.supabase"

interface UserProfileResponse {
  account: Account | null
  pockets: Pocket[] | null
  settings: Settings | null
}

export default defineEventHandler(async (event) => {
  const { user, client } = await createSupabaseClient(event)
  if (!user) return

  try {
    const { data, error } = await client
      .rpc("get_user_profile")
      .single<UserProfileResponse>()

    if (error)
      throw createError({
        statusCode: 500,
        statusMessage: "RPC failed",
        data: error,
      })

    if (!data)
      throw createError({ statusCode: 404, statusMessage: "Profile not found" })

    const accountParse = v.safeParse(AccountSchema, data.account)
    const settingsParse = v.safeParse(SettingsSchema, data.settings)

    const userPockets: Pocket[] = []
    data.pockets.forEach((pocket) => {
      const p = v.safeParse(PocketSchema, pocket)
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
      success: true,
      data: {
        account: userAccount,
        settings: userSettings,
        pockets: userPockets,
      },
    }
  } catch (err) {
    console.error("Unexpected error in hydrateUser:", err)
    throw createError({
      statusCode: 500,
      statusMessage: "Unexpected server error",
    })
  }
})
