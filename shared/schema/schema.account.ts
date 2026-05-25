// shared/schemas/user.ts

import * as v from "valibot"
import { pocketTitleIndex } from "~/domain/lp/content/pocket-title-index"

// username
export const usernameSchema = v.union([
  v.undefined(),
  v.pipe(v.string(), v.trim(), v.maxLength(16, "Max length of 16 characters."))
])

// title
export const titleSchema = v.nullable(
  v.pipe(
    v.string(),
    v.picklist(Object.keys(pocketTitleIndex), "Not a valid title!"),
    v.trim()
  )
)
const newTag = () => {
  const array = new Int8Array(5)
  return crypto.getRandomValues(array)
}
// Account
export const accountSchema = v.object({
  puuid: v.nullable(v.string()),
  title: titleSchema,
  username: usernameSchema,
  tag: v.fallback(
    v.pipe(v.string(), v.minLength(3), v.maxLength(5)),
    newTag().toString()
  ),
  uuid: v.pipe(v.string(), v.uuid("invalid uuid")),
  //
  created: v.nullable(
    v.pipe(v.string(), v.isoTimestamp("incorrect date format"))
  ),
  peer_messages: v.fallback(v.boolean(), false),
  public_pockets: v.nullable(v.array(v.pipe(v.string(), v.uuid()))),
  skin: v.fallback(v.nullable(v.string()), null),
  color: v.fallback(v.string(), "insp"),
  updated: v.nullable(
    v.pipe(v.string(), v.isoTimestamp("incorrect date format"))
  )
})

// email
export const emailSchema = v.pipe(
  v.string(),
  v.nonEmpty("Please enter your email."),
  v.email("The email is badly formatted."),
  v.maxLength(30, "Your email is too long.")
)

const feedCategorySchema = v.fallback(v.array(v.string()), feedKeys)

export const folderSchema = v.object({
  id: v.pipe(v.string(), v.uuid("folder uuid malformed")),
  label: v.fallback(v.string(), ""),
  iconKey: v.fallback(v.string(), ""),
  location: v.fallback(v.string(), ""),
  order: v.fallback(v.number(), 0)
})

// Settings
export const settingsSchema = v.object({
  locale: v.fallback(v.string(), "en"),
  folders: v.fallback(v.array(folderSchema), []),
  theme: v.fallback(v.string(), "system"),
  //
  default_role: v.fallback(v.string(), "all"),
  default_map: v.fallback(v.number(), 0),
  //
  //new
  pocket_tags: v.fallback(v.array(v.string()), []),
  pinned_pockets: v.fallback(v.array(v.pipe(v.string(), v.uuid())), []),
  favorite_pockets: v.fallback(v.array(v.pipe(v.string(), v.uuid())), []),
  favorite_summoners: v.fallback(v.array(v.pipe(v.string(), v.uuid())), []),
  blocked_users: v.fallback(v.array(v.pipe(v.string(), v.uuid())), []),
  //
  ping_delete_pocket: v.fallback(v.boolean(), true),
  ping_new_pocket: v.fallback(v.boolean(), true),
  ping_new_friend: v.fallback(v.boolean(), true),
  ping_new_message: v.fallback(v.boolean(), true),
  ping_pocket_comment: v.fallback(v.boolean(), true),
  //
  fast_trash_pocket: v.fallback(v.boolean(), false),
  fast_trash_message: v.fallback(v.boolean(), false),
  //
  feed_categories: feedCategorySchema,
  feed_spoilers: v.fallback(v.boolean(), true),
  feed_spoiler_safeguard: v.fallback(v.boolean(), true),
  //
  reduce_motion: v.fallback(v.boolean(), true),
  muted: v.fallback(v.boolean(), true),
  once: v.fallback(v.record(v.string(), v.boolean()), {}),
  updated: v.pipe(v.string(), v.isoTimestamp("incorrect date format"))
})

export const getEmptyAccount = (): Partial<Account> =>
  v.getDefaults(accountSchema)
export const getEmptySettings = () => v.getDefaults(settingsSchema)

export type Settings = v.InferOutput<typeof settingsSchema>
export type OptionKey<T extends string> = Partial<
  keyof Omit<Settings, "updated"> & keyof Omit<Account, "updated">
>
export type OptionValue = Partial<
  Settings[OptionKey<string>] & Account[OptionKey<string>]
>

export type UsernameSchema = v.InferOutput<typeof usernameSchema>
export type EmailSchema = v.InferOutput<typeof emailSchema>
export type Account = v.InferOutput<typeof accountSchema>
export type FolderSchema = v.InferOutput<typeof folderSchema>
