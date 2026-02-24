// shared/schemas/user.ts
import type { Account, Settings } from "#shared/types"
import * as v from "valibot"
import { pocketTitleIndex } from "~/domain/lp/content/pocket-title-index"

// username
export const usernameSchema = v.union([
  v.undefined(),
  v.pipe(v.string(), v.trim(), v.maxLength(16, "Max length of 16 characters.")),
])

// title
export const titleSchema = v.nullable(
  v.pipe(
    v.string(),
    v.picklist(
      pocketTitleIndex.map((t) => t.title),
      "Not a valid title!"
    ),
    v.trim()
  )
)

// Account
export const accountSchema = v.object({
  puuid: v.nullable(v.string()),
  title: titleSchema,
  username: usernameSchema,
  uuid: v.pipe(v.string(), v.uuid("invalid uuid")),
  //
  created: v.nullable(
    v.pipe(v.string(), v.isoTimestamp("incorrect date format"))
  ),
  peer_messages: v.fallback(v.boolean(), false),
  public_pockets: v.nullable(v.array(v.pipe(v.string(), v.uuid()))),
  splash: v.nullable(v.string()),
  locale: v.nullable(v.string()),
  updated: v.nullable(
    v.pipe(v.string(), v.isoTimestamp("incorrect date format"))
  ),
})

// email
export const emailSchema = v.pipe(
  v.string(),
  v.nonEmpty("Please enter your email."),
  v.email("The email is badly formatted."),
  v.maxLength(30, "Your email is too long.")
)

// Settings
export const settingsSchema = v.object({
  locale: v.fallback(v.string(), "en"),
  pin_sidebar: v.fallback(v.boolean(), false),
  favorite_pockets: v.fallback(v.array(v.pipe(v.string(), v.uuid())), []),
  favorite_summoners: v.fallback(v.array(v.pipe(v.string(), v.uuid())), []),
  instant_trash: v.fallback(v.boolean(), false),
  motion: v.fallback(v.boolean(), true),
  once: v.fallback(v.record(v.string(), v.boolean()), {}), // new
  ping_delete_pocket: v.fallback(v.boolean(), true),
  ping_new_pocket: v.fallback(v.boolean(), true),
  show_allies: v.fallback(v.boolean(), true),
  show_flex: v.fallback(v.boolean(), true),
  show_solo: v.fallback(v.boolean(), true),
  theme: v.fallback(v.string(), "daylight"),
  updated: v.pipe(v.string(), v.isoTimestamp("incorrect date format")),
})

export const getEmptyAccount = () => v.getDefaults(accountSchema)
export const getEmptySettings = () => v.getDefaults(settingsSchema)
