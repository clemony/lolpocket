import { championIndex } from "#shared/constants/champions/championIndex"
import { itemIndex } from "#shared/constants/items/itemIndex"
import { spells } from "#shared/constants/misc/spells"
import { runeIndex } from "#shared/constants/runes/runeIndex"

export function getLeagueMentionData() {
  return {
    groups: [
      {
        name: 'Champions',
        icon: 'lol:champ',
        items: championIndex,
      },
      {
        name: 'Items',
        icon: 'bow',
        items: itemIndex,
      },
      {
        name: 'Runes',
        icon: 'lol:runes',
        items: runeIndex,
      },
      {
        name: 'Spells',
        icon: 'role:mage',
        items: Object.values(spells),
      },
    ],
    items: [
      ...championIndex,
      ...itemIndex,
      ...runeIndex,
      ...Object.values(spells),
    ],
  }
}
