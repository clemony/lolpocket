// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3901,
  name: '<rarityLegendary>Fire at Will</rarityLegendary><br><subtitleLeft><silver>500 Silver Serpents</silver></subtitleLeft>',
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
      name: 'Fire at Will',
      effects: '{{ai|Cannon Barrage|Gangplank|Gangplank}} fires 2 additional clusters of 3 waves over the duration at an increased rate of fire (1 cluster per 1.33 seconds), for a total of 18 waves over the 8 seconds.',
      mythic: false,
      unique: true
    }
  ],
  stats: {}
}
export default item