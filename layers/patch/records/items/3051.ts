// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3051,
  name: 'Hearthbound Axe',
  nicknames: [
    'blue arrow'
  ],
  buildsFrom: [
    {
      id: 1036,
      name: 'Long Sword',
      gold: 350
    },
    {
      id: 1042,
      name: 'Dagger',
      gold: 250
    },
    {
      id: 1036,
      name: 'Long Sword',
      gold: 350
    }
  ],
  buildsInto: [
    {
      id: 3302,
      name: 'Terminus',
      gold: 3000
    },
    {
      id: 3078,
      name: 'Trinity Force',
      gold: 3333
    },
    {
      id: 6672,
      name: 'Kraken Slayer',
      gold: 3000
    }
  ],
  description: '20 Attack Damage\n20% Attack Speed\n\n',
  gold: {
    base: 250,
    sell: 840,
    total: 1200
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
    attackDamage: 20,
    attackSpeed: 20
  }
}
export default item