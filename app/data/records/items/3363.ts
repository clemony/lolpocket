const item: Item = {
  name: 'Farsight Alteration',
  id: 3363,
  rank: 'Consumable',
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3363_class_t1_farsightalteration.png',
  simpleDescription: 'Grants increased range and reveals the targetted area',
  nicknames: [
    'blue',
    'totem',
    'trinket',
  ],
  active: [
    {
      name: 'Trinket',
      unique: true,
      effects: 'Places a visible <img src="/img/icons/farsight-ward.webp" class="tip-icon" />Farsight Ward at the target location that grants <img src="/img/icons/sight.webp" class="tip-icon" />sight of the surrounding area, including over terrain and through brush and lasting indefinitely. Also grants sight of the area in a 800 radius for 2 seconds. Upon detecting an enemy champion, the ward will increase its sight radius to 800 units and destroy itself after 3 seconds.',
      range: 4000,
    },
  ],
  stats: {},
  shop: {
    prices: {
      total: 0,
      combined: 0,
      sell: 0,
    },
  },
  maps: [
    11,
    12,
    21,
  ],
}
export default item