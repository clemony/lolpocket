import { pathRecord } from "#shared/constants/runes/pathRecord"
import { shardRegistry } from "#shared/constants/runes/shards"
import { keystoneIndex } from "~~/shared/constants/runes/keystoneIndex"
import { runeToPath } from "~~/shared/constants/runes/runeToPath"

const primaryRuneSlots = [1, 2, 3] as const

function getRuneIds(path: number | null | undefined, slot: number): number[] {
  return (
    pathRecord[path ?? 0]?.slots?.[slot]?.runes.map((rune) => rune.id) ?? []
  )
}

function getRandomRune(path: number | null | undefined, slot: number) {
  return getRandomValue(getRuneIds(path, slot)) ?? 0
}

export function generateRuneSet(set: RuneSet): RuneSet {
  const keystone = getRandomValue(keystoneIndex)
  const primaryPath = keystone == null ? null : runeToPath[keystone]
  const secondaryPath = getRandomValue(
    Object.keys(pathRecord)
      .map(Number)
      .filter((path) => path !== primaryPath)
  )
  const secondarySlots = sampleUnique(primaryRuneSlots, 2)
  const [firstSecondarySlot = 1, secondSecondarySlot = 2] = secondarySlots

  return {
    ...set,
    keystone,
    primary: {
      ...set.primary,
      path: primaryPath ?? 0,
      runes: primaryRuneSlots.map((slot) => getRandomRune(primaryPath, slot))
    },
    secondary: {
      ...set.secondary,
      path: secondaryPath ?? 0,
      runes: [
        getRandomRune(secondaryPath, firstSecondarySlot),
        getRandomRune(secondaryPath, secondSecondarySlot)
      ]
    },
    shards: shardRegistry.map(
      (tier) => getRandomValue(tier.shards.map((shard) => shard.id)) ?? 0
    )
  }
}
