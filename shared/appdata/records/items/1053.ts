const item: Item = {
  id: 1053,
  name: 'Vampiric Scepter',
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
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1053_fighter_t2_vampiricscepter.png',
  maps: [11, 12, 21, 35],
  noEffects: true,
  rank: 'Epic',
  removed: false,
  shop: {
    prices: {
      combined: 550,
      sell: 360,
      total: 900,
    },
    tags: ['FIGHTER', 'MARKSMAN', 'ASSASSIN'],
  },
  simpleDescription: 'Basic attacks restore Health',
  specialRecipe: 0,
  stats: {
    attackDamage: 15,
    lifesteal: 7,
  },
}
export default item
