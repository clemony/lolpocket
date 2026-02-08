// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 8020,
  name: 'Abyssal Mask',
  description: '350 Health\n45 Magic Resist\n15 Ability Haste\n\nUnmake\nNearby enemy champions take 12% more magic damage.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 3067,
      name: 'Kindlegem',
      gold: 800
    },
    {
      id: 1057,
      name: 'Negatron Cloak',
      gold: 850
    }
  ],
  gold: {
    base: 1000,
    sell: 1855,
    total: 2650
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Unmake',
      effects: 'Enemy champions within 700 units of you become cursed, causing them to receive 12% increased magic damage from all sources.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 15,
    health: 350,
    magicResistance: 45
  }
}
export default item