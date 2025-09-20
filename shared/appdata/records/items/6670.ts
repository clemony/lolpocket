const item: Item = {
  id: 6670,
  name: 'Noonquiver',
  buildsFrom: [
    {
      id: 1036,
      name: 'Long Sword',
      gold: 350,
    },
    {
      id: 1018,
      name: 'Cloak of Agility',
      gold: 600,
    },
  ],
  buildsInto: [
    {
      id: 6673,
      name: 'Immortal Shieldbow',
      gold: 3000,
    },
    {
      id: 3095,
      name: 'Stormrazor',
      gold: 3100,
    },
    {
      id: 3036,
      name: 'Lord Dominik\'s Regards',
      gold: 3100,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6670_marksman_t2_noonquiver.png',
  maps: [11, 12, 21, 35],
  noEffects: true,
  rank: 'Epic',
  removed: false,
  shop: {
    prices: {
      combined: 350,
      sell: 520,
      total: 1300,
    },
    tags: ['MARKSMAN', 'ONHIT_EFFECTS'],
  },
  specialRecipe: 0,
  stats: {
    attackDamage: 15,
    criticalStrikeChance: 20,
  },
}
export default item
