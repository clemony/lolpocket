import { rankToItem } from '~~/shared/constants'

export function getTierGroup(id: number) {
  return Object.entries(rankToItem).find(([_, ids]) =>
    ids.includes(id),
  )?.[0]
}
