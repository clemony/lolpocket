// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3047,
  name: 'Plated Steelcaps',
  nicknames: [
    'boots',
    'ninja tabi'
  ],
  description: '25 Armor\n45 Move Speed\n\nPlating\nReduces incoming damage from Attacks by 10%.',
  noEffects: false,
  rank: 'Boots',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 1001,
      name: 'Boots',
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
      id: 3174,
      name: 'Armored Advance',
      gold: 1200
    }
  ],
  gold: {
    base: 600,
    sell: 840,
    total: 1200
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Plating',
      effects: 'Reduces all incoming <img src="/img/icons/basic-damage.webp" class="tip-icon " />basic damage by 10% (<i>excluding from turret attacks</i>).',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    armor: 25,
    flatMovespeed: 45
  }
}
export default item