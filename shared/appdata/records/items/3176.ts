const item: Item = {
  name: 'Forever Forward',
  id: 3176,
  rank: 'Boots',
  buildsFrom: [
    {
      id: 3013,
      name: 'Synchronized Souls',
      gold: 900
    }
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/boots_tier3_syncronisedsouls_64.png',
  passives: [
    {
      name: 'Voidborn',
      unique: true,
      effects: 'Gain <img src="/img/icons/empowered-recall.webp" class="tip-icon" />Empowered Recall.'
    },
    {
      name: 'Noxian Synchrony',
      unique: true,
      effects: 'Gain 45 (+8% <b>total</b> movement speed) <b>bonus</b> movement speed while out-of-combat.'
    }
  ],
  stats: {
    flatMovespeed: 55
  },
  shop: {
    prices: {
      total: 1400,
      combined: 500,
      sell: 560
    }
  },
  maps: [
    11
  ]
}
export default item