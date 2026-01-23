// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 443060,
  name: 'Sword of the Divine',
  nicknames: [
    'sotd'
  ],
  description: '110 Adaptive Force\n50% Critical Strike Chance\n\nExcoriate\nEach Critical strike deals random bonus Critical Strike Damage, scaling up to 50% of your Critical Strike Chance.',
  gold: {
    base: 1000,
    sell: 400,
    total: 1000
  },
  maps: [
    30
  ],
  noEffects: false,
  passives: [
    {
      name: 'Excoriate',
      effects: 'Gain a random amount of <b>bonus</b> critical strike damage that scales up to 50% of your critical strike chance, with the value of this amount changing every 0.25 seconds.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Special',
  removed: false,
  specialRecipe: 220007,
  stats: {
    criticalStrikeChance: 50
  }
}
export default item