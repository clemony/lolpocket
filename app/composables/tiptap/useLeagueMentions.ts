import { championIndex } from "#shared/constants/champions/championIndex"
import { itemIndex } from "#shared/constants/items/itemIndex"
import { runeIndex } from "#shared/constants/runes/runeIndex"
import { spellIndex } from "~~/shared/constants/misc/spell-index"

export function getLeagueMentionData() {
  return {
    groups: [
      {
        name: "Champions",
        icon: "lol:champ",
        items: championIndex,
      },
      {
        name: "Items",
        icon: "bow",
        items: itemIndex,
      },
      {
        name: "Runes",
        icon: "lol:runes",
        items: runeIndex,
      },
      {
        name: "Spells",
        icon: "role:mage",
        items: Object.values(spellIndex),
      },
    ],
    items: [
      ...championIndex,
      ...itemIndex,
      ...runeIndex,
      ...Object.values(spellIndex),
    ],
  }
}
