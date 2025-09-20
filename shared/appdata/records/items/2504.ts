const item: Item = {
  id: 2504,
  name: 'Kaenic Rookern',
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
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/2504_kaenicrookern.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Magebane',
      effects:
        'After not taking magic damage for 15 seconds, gain a <img src="/img/icons/shield.webp" class="tip-icon" />shield that absorbs magic damage equal to 15% of <b>maximum</b> health until destroyed.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 800,
      sell: 1160,
      total: 2900,
    },
    tags: ['TANK'],
  },
  specialRecipe: 0,
  stats: {
    health: 400,
    healthRegen: 100,
    magicResistance: 80,
  },
}
export default item
