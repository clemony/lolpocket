const item: Item = {
  name: 'Symbiotic Soles',
  id: 3010,
  rank: 'Boots',
  buildsFrom: [
    {
      id: 1001,
      name: 'Boots',
      gold: 300,
    },
  ],
  buildsInto: [
    {
      id: 3013,
      name: 'Synchronized Souls',
      gold: 900,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3010_voidboots.png',
  simpleDescription: 'Spend Mana to recover Health',
  nicknames: ['boots'],
  passives: [
    {
      name: 'Synchrony',
      unique: true,
      effects: 'Gain 10 <b>bonus</b> movement speed while out-of-combat.',
    },
    {
      name: 'Symbiosis',
      unique: true,
      effects:
        'After moving a total of 150,000 units of distance, capped at 500 units at a time for <img src="/img/icons/dash.webp" class="tip-icon" />dashes and <img src="/img/icons/blink.webp" class="tip-icon" />blinks, upgrade this item to <img src="/img/icons/synchronized-souls.webp" class="tip-icon" />Synchronized Souls.',
    },
  ],
  stats: {
    flatMovespeed: 40,
  },
  shop: {
    prices: {
      total: 900,
      combined: 600,
      sell: 360,
    },
  },
  maps: [11, 21],
}
export default item
