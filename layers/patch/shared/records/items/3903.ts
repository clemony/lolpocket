// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3903,
  name: '<rarityLegendary>Raise Morale</rarityLegendary><br><subtitleLeft><silver>500 Silver Serpents</silver></subtitleLeft>',
  description: 'Allies in the Cannon Barrage gain bonus Move Speed.',
  noEffects: false,
  removed: false,
  requiredChampion: 'Gangplank',
  specialRecipe: 0,
  gold: {
    base: 0,
    purchasable: false,
    sell: 0,
    total: 0
  },
  maps: [
    11,
    12,
    21,
    30,
    35
  ],
  passives: [
    {
      name: 'Raise Morale',
      effects: '{{ci|Gangplank|Gangplank}} and his allies within {{ai|Cannon Barrage|Gangplank|Gangplank}} gain 40% <b>bonus</b> movement speed, which persists for 2 seconds after leaving the area.',
      mythic: false,
      unique: true
    }
  ],
  stats: {}
}
export default item