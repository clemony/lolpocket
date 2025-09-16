const item: Item = {
  name: 'Kaenic Rookern',
  id: 2504,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 3211,
      name: 'Spectre\'s Cowl',
      gold: 1250,
    },
    {
      id: 1057,
      name: 'Negatron Cloak',
      gold: 850,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/2504_kaenicrookern.png',
  passives: [
    {
      name: 'Magebane',
      unique: true,
      effects:
        'After not taking magic damage for 15 seconds, gain a <img src="/img/icons/shield.webp" class="tip-icon" />shield that absorbs magic damage equal to 15% of <b>maximum</b> health until destroyed.',
    },
  ],
  stats: {
    health: 400,
    healthRegen: 100,
    magicResistance: 80,
  },
  shop: {
    prices: {
      total: 2900,
      combined: 800,
      sell: 1160,
    },
    tags: ['TANK'],
  },
  maps: [11, 12, 21, 35],
}
export default item
