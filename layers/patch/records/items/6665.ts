// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 6665,
  name: 'Jak\'Sho, The Protean',
  nicknames: [
    'Jak\'Sho, The Protean'
  ],
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
  description: '350 Health\n45 Armor\n45 Magic Resist\n\nVoidborn Resilience\nAfter 5 seconds of champion combat, increase your bonus Armor and Magic Resist by 30% until end of combat.\n\n',
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
  noEffects: false,
  passives: [
    {
      name: 'Voidborn Resilience',
      effects: 'Gain a stack for each second in combat with enemy champions, stacking up to 5 times. At <b>maximum</b> stacks, increase your <b>bonus</b> armor and <b>bonus</b> magic resistance by 30% until the end of combat.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    armor: 45,
    health: 350,
    magicResistance: 45
  }
}
export default item