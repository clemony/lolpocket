import { abilityIdToName } from "#shared/constants/champions/abilityIdToName"
import { champKeyToRole } from "#shared/constants/champions/champKeyToRole"
import { championIndex } from "#shared/constants/champions/championIndex"
import { itemIndex } from "#shared/constants/items/itemIndex"
import { itemRank } from "#shared/constants/items/itemRank"
import { itemRankColor } from "#shared/constants/items/itemRankColor"
import { mapIndex } from "#shared/constants/misc/map-index"
import { patchIndex } from "#shared/constants/patch-index"
import { pathIndex } from "#shared/constants/runes/pathIndex"
import { pathToColor } from "#shared/constants/runes/pathToColor"
import { runeIndex } from "#shared/constants/runes/runeIndex"
import { shardRegistry } from "#shared/constants/runes/shards"
import { spellIndex } from "~~/shared/constants/misc/spell-index"

//
// champions

export function championById(id: number) {
  return championIndex.find((c) => c.id === id)
}

export function championByKey(key: string) {
  return championIndex.find((c) => c.key === key)
}

export function champIdByKey(key: string) {
  return championIndex.find((c) => c.key === key)?.id
}

export function champIdByName(name: string) {
  return championIndex.find((c) => c.name === name)?.id
}

export function champKeyById(id: number) {
  return championIndex.find((c) => c.id === id)?.key
}

export function champKeyByName(name: string) {
  return championIndex.find((c) => c.name === name)?.key
}

export function champNameById(id: number) {
  return championIndex.find((c) => c.id === id)?.name
}

export function champNameByKey(key: string) {
  return championIndex.find((c) => c.key === key)?.name
}

// abilities

export const abilityNameById = (id: string) => abilityIdToName[id]

// items

export const itemById = (id: number) => itemIndex.find((i) => i.id === id)

export function itemIdByName(name: string) {
  return itemIndex.find((i) => i.name === name)?.id
}

export function itemNameById(id: number) {
  return itemIndex.find((i) => i.id === id)?.name
}

export const itemColorByTier = (id: number) => {
  const rank = itemRank[id]
  const colors = itemRankColor as Record<string, string>
  return rank ? colors[rank] : undefined
}

export const supportnumbers = [3869, 3870, 3871, 3876, 3877]

// runes

export const runeById = (id: number) => runeIndex.find((r) => r.id === id)

export function runeNameById(id: number) {
  return runeIndex.find((r) => r.id === id)?.name
}

export function shardById(id: number) {
  return shardRegistry.flatMap((s) => s.shards).find((s) => s.id === id)
}

export function pathColorByName(name: string) {
  return pathToColor[name]
}

export function pathNameById(id: number) {
  return pathIndex[id]?.name
}

export function pathIdByName(name: string) {
  return Object.values(pathIndex).find((p) => p.name === name)?.id
}

// misc

export const spellNameById = (id: number) => spellIndex[id]?.name

export function currentPatch(): string {
  return patchIndex[0] ?? ""
}
export function currentPatchNormalized(): string {
  return (normalizePatchNumber(String(patchIndex[0])) + 10).toString() ?? ""
}

export function mapIdById(id: number) {
  return mapIndex.find((m) => m.id === id)?.mapStringId
}

export function mapNameById(id: number) {
  return mapIndex.find((m) => m.id === id)?.name
}
