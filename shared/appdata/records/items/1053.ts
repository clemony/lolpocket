const item: Item = {
  name: 'Vampiric Scepter',
  id: 1053,
  rank: 'Epic',
  buildsFrom: [
    {
      id: 1036,
      name: 'Long Sword',
      gold: 350,
    },
  ],
  buildsInto: [
    {
      id: 3139,
      name: 'Mercurial Scimitar',
      gold: 3200,
    },
    {
      id: 3072,
      name: 'Bloodthirster',
      gold: 3400,
    },
    {
      id: 3074,
      name: 'Ravenous Hydra',
      gold: 3300,
    },
    {
      id: 3153,
      name: 'Blade of The Ruined King',
      gold: 3200,
    },
    {
      id: 4403,
      name: 'The Golden Spatula',
      gold: 7187,
    },
  ],
  specialRecipe: 0,
  noEffects: true,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1053_fighter_t2_vampiricscepter.png',
  simpleDescription: 'Basic attacks restore Health',
  stats: {
    attackDamage: 15,
    lifesteal: 7,
  },
  shop: {
    prices: {
      total: 900,
      combined: 550,
      sell: 360,
    },
    tags: ['FIGHTER', 'MARKSMAN', 'ASSASSIN'],
  },
  maps: [11, 12, 21, 35],
}
export default item
