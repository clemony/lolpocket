// shared/schemas/user.ts
import * as v from "valibot"
import { pocketTitleIndex } from "~/domain/lp/content/pocket-title-index"

// username
export const usernameSchema = v.nullable(
  v.pipe(v.string(), v.trim(), v.maxLength(16, "Max length of 16 characters."))
)

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
  peer_messages: v.fallback(v.boolean(), false),
  public_pockets: v.nullable(v.array(v.pipe(v.string(), v.uuid()))),
  splash: v.nullable(v.string()),
  //
  created: v.nullable(
    v.pipe(v.string(), v.isoTimestamp("incorrect date format"))
  ),
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

// --- Types ---
export type UsernameSchema = v.InferOutput<typeof usernameSchema>
export type EmailSchema = v.InferOutput<typeof emailSchema>
export type Account = v.InferOutput<typeof accountSchema>

// Settings
export const settingsSchema = v.object({
  pin_sidebar: v.fallback(v.boolean(), false),
  favorite_pockets: v.fallback(v.array(v.pipe(v.string(), v.uuid())), []),
  favorite_summoners: v.fallback(v.array(v.pipe(v.string(), v.uuid())), []),
  instant_trash: v.fallback(v.boolean(), false),
  language: v.fallback(v.string(), "en"),
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

// --- Types ---
export type Settings = v.InferOutput<typeof settingsSchema>

// --- Helpers ---
export const getEmptyAccount = () => <Account>v.getDefaults(accountSchema)
export const getEmptySettings = () => <Settings>v.getDefaults(settingsSchema)
