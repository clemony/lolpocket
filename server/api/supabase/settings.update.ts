import type { Settings } from "#shared/schema"
import { getEmptySettings, settingsSchema } from "#shared/schema"
import { nowInstantString } from "#shared/utils"
import * as v from "valibot"
import { requireUser } from "../client.supabase"

const RPC_SETTING_KEYS = [
  "locale",
  "theme",
  "default_role",
  "default_map",
  "pocket_tags",
  "favorite_pockets",
  "favorite_summoners",
  "blocked_users",
  "ping_delete_pocket",
  "ping_new_pocket",
  "ping_new_friend",
  "ping_new_message",
  "ping_pocket_comment",
  "fast_trash_pocket",
  "fast_trash_message",
  "reduce_motion"
] as const satisfies readonly (keyof Settings)[]

export default defineEventHandler(async (event): Promise<Settings> => {
  const { client } = await requireUser(event)

  const body = await readBody<{ settings?: Partial<Settings> }>(event)
  const requestedSettings = body.settings ?? {}

  const unsupportedKeys = Object.keys(requestedSettings).filter(
    (key) =>
      !RPC_SETTING_KEYS.includes(key as (typeof RPC_SETTING_KEYS)[number])
  )

  if (unsupportedKeys.length) {
    throw createError({
      statusCode: 400,
      statusMessage: `Unsupported settings keys: ${unsupportedKeys.join(", ")}`
    })
  }

  const parsed = v.safeParse(settingsSchema, {
    ...getEmptySettings(),
    ...requestedSettings,
    updated: nowInstantString()
  })

  if (!parsed.success) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid settings payload",
      data: parsed.issues
    })
  }

  const patch = Object.fromEntries(
    RPC_SETTING_KEYS.flatMap((key) =>
      key in requestedSettings ? [[key, parsed.output[key]]] : []
    )
  )

  if (!Object.keys(patch).length) {
    throw createError({
      statusCode: 400,
      statusMessage: "No supported settings updates provided"
    })
  }

  const { data, error } = await client.rpc("update_settings", {
    p_patch: patch
  })

  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message })
  }

  return data as Settings
})
