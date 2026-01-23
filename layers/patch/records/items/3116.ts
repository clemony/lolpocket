// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3116,
  name: 'Rylai\'s Crystal Scepter',
  nicknames: [
    'rylais'
  ],
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
  description: '65 Ability Power\n400 Health\n\nRimefrost\nDamaging Abilities Slow enemies by 30% for 1 second.',
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
  noEffects: false,
  passives: [
    {
      name: 'Rimefrost',
      effects: 'Dealing ability damage <img src="/img/icons/slow.webp" class="tip-icon" />slows affected units by 30% for 1 second.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityPower: 65,
    health: 400
  }
}
export default item