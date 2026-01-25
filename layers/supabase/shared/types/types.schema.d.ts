declare global {

export type Settings = v.InferOutput<typeof settingsSchema>

export type UsernameSchema = v.InferOutput<typeof usernameSchema>
export type EmailSchema = v.InferOutput<typeof emailSchema>
export type Account = v.InferOutput<typeof accountSchema>

export type RuneSet = v.InferOutput<typeof RuneSetSchema>

export type ItemSet = v.InferOutput<typeof ItemSetSchema>
export type SpellSet = v.InferOutput<typeof SpellSetSchema>
export type RunesPrimary = v.InferOutput<typeof RunesPrimarySchema>
export type RunesSecondary = v.InferOutput<typeof RunesSecondarySchema>
export type Pocket = v.InferOutput<typeof pocketSchema>


export type SummonerSearch = v.InferOutput<typeof summonerSearchSchema>

export type Inbox = v.InferOutput<typeof InboxSchema>
export type InboxItem = v.InferOutput<typeof InboxItemSchema>
export type InboxMessage = v.InferOutput<typeof InboxMessageSchema>

export type Card = v.InferOutput<typeof CardSchema>

}