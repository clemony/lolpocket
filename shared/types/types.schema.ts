import type { accountSchema, CardSchema, emailSchema, ItemSetSchema, pocketSchema, reportSchema, RuneSetSchema, RunesPrimarySchema, RunesSecondarySchema, settingsSchema, SpellSetSchema, summonerSearchSchema, usernameSchema } from '#shared/schema'
import type * as v from 'valibot'

export type Settings = v.InferOutput<typeof settingsSchema>

export type UsernameSchema = v.InferOutput<typeof usernameSchema>
export type EmailSchema = v.InferOutput<typeof emailSchema>
export type Account = v.InferOutput<typeof accountSchema>
export type ReportSchema = v.InferOutput<typeof reportSchema>
export type RuneSet = v.InferOutput<typeof RuneSetSchema>

export type ItemSet = v.InferOutput<typeof ItemSetSchema>
export type SpellSet = v.InferOutput<typeof SpellSetSchema>
export type RunesPrimary = v.InferOutput<typeof RunesPrimarySchema>
export type RunesSecondary = v.InferOutput<typeof RunesSecondarySchema>
export type Pocket = v.InferOutput<typeof pocketSchema>

export type SummonerSearch = v.InferOutput<typeof summonerSearchSchema>

export type Card = v.InferOutput<typeof CardSchema>
