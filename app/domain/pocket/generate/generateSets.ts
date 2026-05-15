import { skinIndex } from "#shared/constants/champions/skin-index"
import { newSpellSet } from "~/domain/pocket/addPocketModules"
import { getSkinKey } from "~/domain/utils/img"
import { modeIndex } from "~~/shared/constants/misc/mode-index"
import { spellIndex } from "~~/shared/constants/misc/spell-index"

export function generateSpellSet(map: MapKey): SpellSet {
  const index = computed<number[]>(() => {
    const mode = Object.values(modeIndex).find((m) => m.mapId === map)?.modeKey

    const spells = Object.values(spellIndex).filter((s) =>
      s.modes?.includes(String(mode))
    )

    return spells.map((s) => s.id) as number[]
  })

  const set = newSpellSet()
  const b = getRandom(index.value)
  set.d = b
  set.f = getRandom(
    Object.values(spellIndex)
      .map((s) => s.id)
      .filter((s) => s !== b)
  )
  return set
}

export function generateSkinKey(): SkinKey | null {
  const skinSets = Object.values(skinIndex)
  const a = skinSets[getRandomInt(skinSets.length)]
  if (!a?.length) return null
  const b = a[getRandomInt(a.length)]
  const key = getKeyByValue(skinIndex, a)
  return key && b ? getSkinKey(key, b) : null
}
