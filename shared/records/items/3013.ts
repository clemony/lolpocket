const item: Item = {
  id: 3013,
  name: 'Synchronized Souls',
  nicknames: ['boots'],
  buildsFrom: [
    {
      id: 3010,
      name: 'Symbiotic Soles',
      gold: 900,
    },
  ],
  buildsInto: [
    {
      id: 3176,
      name: 'Forever Forward',
      gold: 1400,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3010_voidwalkers.png',
  maps: [11, 21],
  noEffects: false,
  passives: [
    {
      name: 'Voidborn',
      effects:
        'Gain <img src="/img/icons/empowered-recall.webp" class="tip-icon" />Empowered Recall.',
      unique: true,
    },
    {
      name: 'Synchrony',
      effects: 'Gain 45 <b>bonus</b> movement speed while out-of-combat.',
      unique: true,
    },
  ],
  rank: 'Boots',
  removed: false,
  shop: {
    prices: {
      combined: 0,
      sell: 360,
      total: 900,
    },
    purchasable: false,
  },
  specialRecipe: 0,
  stats: {
    flatMovespeed: 45,
  },
}
export default item
