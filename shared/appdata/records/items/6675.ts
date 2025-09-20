const item: Item = {
  id: 6675,
  name: 'Navori Flickerblade',
  buildsFrom: [
    {
      id: 1042,
      name: 'Dagger',
      gold: 250,
    },
    {
      id: 3086,
      name: 'Zeal',
      gold: 1200,
    },
    {
      id: 1042,
      name: 'Dagger',
      gold: 250,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6675_navoriflickerblade.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Transcendence',
      effects:
        'Basic attacks on-attack reduce the <b>remaining</b> cooldowns of your basic abilities by 15%.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 950,
      sell: 1060,
      total: 2650,
    },
    tags: ['MARKSMAN'],
  },
  specialRecipe: 0,
  stats: {
    attackSpeed: 40,
    criticalStrikeChance: 25,
    percentMovespeed: 4,
  },
}
export default item
