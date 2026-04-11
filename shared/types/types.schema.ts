import type {
  accountSchema,
  cardSchema,
  emailSchema,
  itemSetSchema,
  pocketSchema,
  reportSchema,
  runeSetSchema,
  runesPrimarySchema,
  runesSecondarySchema,
  settingsSchema,
  spellSetSchema,
  summonerSearchSchema,
  usernameSchema,
} from "#shared/schema"
import type * as v from "valibot"

export type Settings = v.InferOutput<typeof settingsSchema>

export type UsernameSchema = v.InferOutput<typeof usernameSchema>
export type EmailSchema = v.InferOutput<typeof emailSchema>
export type Account = v.InferOutput<typeof accountSchema>
export type ReportSchema = v.InferOutput<typeof reportSchema>
export type RuneSet = v.InferOutput<typeof runeSetSchema>

export type ItemSet = v.InferOutput<typeof itemSetSchema>
export type SpellSet = v.InferOutput<typeof spellSetSchema>
export type RunesPrimary = v.InferOutput<typeof runesPrimarySchema>
export type RunesSecondary = v.InferOutput<typeof runesSecondarySchema>
export type Pocket = v.InferOutput<typeof pocketSchema>

export type SummonerSearch = v.InferOutput<typeof summonerSearchSchema>

export type Card = v.InferOutput<typeof cardSchema>
