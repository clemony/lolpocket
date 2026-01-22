import {
  accountSchema,
  getEmptyAccount,
  getEmptySettings,
  pocketSchema,
  settingsSchema,
} from "@constants"
import * as v from "valibot"
import { createSupabaseClient } from "../client.supabase"

export default defineEventHandler(
  async (event): Promise<UserProfileResponse> => {
    const { client, user } = await createSupabaseClient(event)
    if (!user) return

    try {
      const { data, error } = await client
        .rpc("get_user_account")
        .single<UserProfileResponse>()

      if (error) {
        throw createError({
          data: error,
          statusCode: 500,
          statusMessage: "RPC failed",
        })
      }

      if (!data)
        throw createError({
          statusCode: 404,
          statusMessage: "Profile not found",
        })

      const accountParse = v.safeParse(accountSchema, data.account)
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

      return {
        account: userAccount,
        pockets: userPockets,
        settings: userSettings,
      }
    } catch (err) {
      console.error("Unexpected error in hydrateUser:", err)
      throw createError({
        statusCode: 500,
        statusMessage: "Unexpected server error",
      })
    }
  }
)
