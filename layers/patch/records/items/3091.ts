// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3091,
  name: 'Wit\'s End',
  buildsFrom: [
    {
      id: 1043,
      name: 'Recurve Bow',
      gold: 700
    },
    {
      id: 1057,
      name: 'Negatron Cloak',
      gold: 850
    },
    {
      id: 1043,
      name: 'Recurve Bow',
      gold: 700
    }
  ],
  description: '50% Attack Speed\n45 Magic Resist\n20% Tenacity\n\nFray\nAttacks deal bonus magic damage On-Hit.',
  gold: {
    base: 550,
    sell: 1960,
    total: 2800
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
      name: 'Fray',
      effects: 'Basic attacks deal 45 <b>bonus</b> magic damage on-hit.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    attackSpeed: 50,
    magicResistance: 45,
    tenacity: 20
  }
}
export default item