// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3024,
  name: 'Glacial Buckler',
  description: '25 Armor\n300 Mana\n10 Ability Haste\n\n',
  noEffects: true,
  rank: 'Epic',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 1029,
      name: 'Cloth Armor',
      gold: 300
    },
    {
      id: 1027,
      name: 'Sapphire Crystal',
      gold: 300
    },
    {
      id: 2022,
      name: 'Glowing Mote',
      gold: 250
    }
  ],
  buildsInto: [
    {
      id: 3110,
      name: 'Frozen Heart',
      gold: 2500
    },
    {
      id: 323110,
      name: 'Frozen Heart',
      gold: 2700
    }
  ],
  gold: {
    base: 50,
    sell: 630,
    total: 900
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  stats: {
    abilityHaste: 10,
    armor: 25,
    mana: 300
  }
}
export default item