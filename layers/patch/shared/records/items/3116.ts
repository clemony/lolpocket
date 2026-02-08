// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3116,
  name: 'Rylai\'s Crystal Scepter',
  nicknames: [
    'rylais'
  ],
  description: '65 Ability Power\n400 Health\n\nRimefrost\nDamaging Abilities Slow enemies by 30% for 1 second.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 1026,
      name: 'Blasting Wand',
      gold: 850
    },
    {
      id: 1011,
      name: 'Giant\'s Belt',
      gold: 900
    },
    {
      id: 1052,
      name: 'Amplifying Tome',
      gold: 400
    }
  ],
  gold: {
    base: 450,
    sell: 1820,
    total: 2600
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Rimefrost',
      effects: 'Dealing ability damage <img src="/img/icons/slow.webp" class="tip-icon " />slows affected units by 30% for 1 second.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityPower: 65,
    health: 400
  }
}
export default item