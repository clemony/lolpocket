import { regionKeys } from '#shared/appdata'
import * as v from 'valibot'

export const summonerSearchSchema = v.object({
  query: v.pipe(v.string(), v.minLength(1, 'Summoner name is required')),
  region: v.picklist(regionKeys, 'Invalid region'),
  tag: v.pipe(v.string(), v.maxLength(3, 'tag has a min length of 3'), v.maxLength(5, 'tag has a max length of 5')),
})

export type SummonerSearch = v.InferOutput<typeof summonerSearchSchema>
