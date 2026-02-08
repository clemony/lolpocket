// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 6665,
  name: 'Jak\'Sho, The Protean',
  nicknames: [
    'Jak\'Sho, The Protean'
  ],
  description: '350 Health\n45 Armor\n45 Magic Resist\n\nVoidborn Resilience\nAfter 5 seconds of champion combat, increase your bonus Armor and Magic Resist by 30% until end of combat.\n\n',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 1011,
      name: 'Giant\'s Belt',
      gold: 900
    },
    {
      id: 1031,
      name: 'Chain Vest',
      gold: 800
    },
    {
      id: 1057,
      name: 'Negatron Cloak',
      gold: 850
    }
  ],
  gold: {
    base: 650,
    sell: 2240,
    total: 3200
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Voidborn Resilience',
      effects: 'Gain a stack for each second in combat with enemy champions, stacking up to 5 times. At <b>maximum</b> stacks, increase your <b>bonus</b> armor and <b>bonus</b> magic resistance by 30% until the end of combat.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    armor: 45,
    health: 350,
    magicResistance: 45
  }
}
export default item