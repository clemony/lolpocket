// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3082,
  name: 'Warden\'s Mail',
  description: '40 Armor\n\nRock Solid\nReduce incoming damage from Attacks.',
  noEffects: false,
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
      id: 1029,
      name: 'Cloth Armor',
      gold: 300
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
    },
    {
      id: 3143,
      name: 'Randuin\'s Omen',
      gold: 2700
    }
  ],
  gold: {
    base: 400,
    sell: 700,
    total: 1000
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Rock Solid',
      effects: 'Every first incoming instance of post-mitigation <img src="/img/icons/basic-damage.webp" class="tip-icon " />basic damage per cast instance is reduced by 15, with a <b>maximum</b> of 20% reduction each.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    armor: 40
  }
}
export default item