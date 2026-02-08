// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3076,
  name: 'Bramble Vest',
  nicknames: [
    'grievous wounds'
  ],
  description: '30 Armor\n\nThorns\nWhen hit by an Attack, deal  magic damage to the attacker and apply 40% Wounds for 3 seconds if they are a champion.',
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
      id: 323075,
      name: 'Thornmail',
      gold: 2650
    },
    {
      id: 3075,
      name: 'Thornmail',
      gold: 2450
    }
  ],
  gold: {
    base: 200,
    sell: 560,
    total: 800
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Thorns',
      effects: 'When struck by a basic attack on-hit, deal 10 magic damage to the attacker and, if they are a champion, inflict them with <img src="/img/icons/grievous-wounds.webp" class="tip-icon " />Grievous Wounds for 3 seconds.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    armor: 30
  }
}
export default item