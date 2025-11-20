import { itemFilters } from '~~/shared/filters'

export function getTierGroup(id: number) {
  return Object.entries(itemFilters.rank).find(([_, ids]) =>
    ids.includes(id),
  )?.[0]
}
