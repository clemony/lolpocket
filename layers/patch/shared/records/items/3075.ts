// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3075,
  name: 'Thornmail',
  nicknames: [
    'grievous wounds'
  ],
  description: '150 Health\n75 Armor\n\nThorns\nWhen struck by an Attack, deal magic damage to the attacker and apply 40% Wounds for 3 seconds if they are a champion.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 3076,
      name: 'Bramble Vest',
      gold: 800
    },
    {
      id: 1031,
      name: 'Chain Vest',
      gold: 800
    },
    {
      id: 1028,
      name: 'Ruby Crystal',
      gold: 400
    }
  ],
  gold: {
    base: 450,
    sell: 1715,
    total: 2450
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
      effects: 'When struck by a basic attack on-hit, deal 20 (+10% <b>bonus</b> armor) magic damage to the attacker and, if they are a champion, inflict them with <img src="/img/icons/grievous-wounds.webp" class="tip-icon " />Grievous Wounds for 3 seconds.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    armor: 75,
    health: 150
  }
}
export default item