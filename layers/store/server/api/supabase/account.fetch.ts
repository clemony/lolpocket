import {
  accountSchema,
  getEmptyAccount,
  getEmptySettings,
  pocketSchema,
  settingsSchema,
} from "#shared/schema"
import type { Account, Settings } from "#shared/types"
import * as v from "valibot"
import { createSupabaseClient } from "../client.supabase"

export default defineEventHandler(
  async (event): Promise<UserProfileResponse> => {
    const { client, user } = await createSupabaseClient(event)
    if (!user) {
      return {
        account: null,
        pockets: [],
        settings: null,
      }
    }

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

      if (!data) {
        throw createError({
          statusCode: 404,
          statusMessage: "Profile not found",
        })
      }

      const accountParse = v.safeParse(accountSchema, data.account)
      const settingsParse = v.safeParse(settingsSchema, data.settings)

      const userPockets: Pocket[] = []
      ;(data.pockets ?? []).forEach((pocket) => {
        const p = v.safeParse(pocketSchema, pocket)
        if (p.success) userPockets.push(p.output)
        else console.log(p.issues)
      })

      const userAccount: Account =
        accountParse.success ?
          accountParse.output
        : (getEmptyAccount() as unknown as Account)

      const userSettings: Settings =
        settingsParse.success
          ? settingsParse.output
          : (getEmptySettings() as unknown as Settings)

      return {
        settings: userSettings,
        account: userAccount,
        pockets: userPockets,
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
