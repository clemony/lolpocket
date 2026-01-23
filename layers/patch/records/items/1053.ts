// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 1053,
  name: 'Vampiric Scepter',
  buildsFrom: [
    {
      id: 1036,
      name: 'Long Sword',
      gold: 350
    }
  ],
  buildsInto: [
    {
      id: 3139,
      name: 'Mercurial Scimitar',
      gold: 3200
    },
    {
      id: 3146,
      name: 'Hextech Gunblade',
      gold: 3000
    },
    {
      id: 3072,
      name: 'Bloodthirster',
      gold: 3400
    },
    {
      id: 3074,
      name: 'Ravenous Hydra',
      gold: 3300
    },
    {
      id: 4403,
      name: 'The Golden Spatula',
      gold: 7187
    },
    {
      id: 3153,
      name: 'Blade of The Ruined King',
      gold: 3200
    }
  ],
  description: '15 Attack Damage\n7% Life Steal\n\n',
  gold: {
    base: 550,
    sell: 630,
    total: 900
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
    attackDamage: 15,
    lifesteal: 7
  }
}
export default item