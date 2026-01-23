// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 2020,
  name: 'The Brutalizer',
  nicknames: [
    'Bloodstone'
  ],
  buildsFrom: [
    {
      id: 2022,
      name: 'Glowing Mote',
      gold: 250
    },
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875
    }
  ],
  buildsInto: [
    {
      id: 6696,
      name: 'Axiom Arc',
      gold: 2750
    },
    {
      id: 2520,
      name: 'Bastionbreaker',
      gold: 3200
    },
    {
      id: 6698,
      name: 'Profane Hydra',
      gold: 2850
    },
    {
      id: 6699,
      name: 'Voltaic Cyclosword',
      gold: 3000
    }
  ],
  description: '25 Attack Damage\n10 Ability Haste\n5 Lethality\n\n',
  gold: {
    base: 212,
    sell: 936,
    total: 1337
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  noEffects: true,
  rank: 'Epic',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 10,
    attackDamage: 25,
    lethality: 5
  }
}
export default item