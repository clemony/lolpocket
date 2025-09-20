const item: Item = {
  id: 443193,
  name: 'Gargoyle Stoneplate',
  active: [
    {
      name: 'Unbreakable',
      effects:
        'Gain a <img src="/img/icons/shield.webp" class="tip-icon" />shield for 300 (+100% <b>bonus</b> health) that decays over 5 seconds, and 25% increased size for the same duration.',
      unique: true,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3193_tank_t3_gargoylestoneplate.png',
  maps: [30],
  noEffects: false,
  rank: 'Special',
  removed: false,
  shop: {
    prices: {
      combined: 1000,
      sell: 0,
      total: 0,
    },
    tags: ['TANK'],
  },
  specialRecipe: 220007,
  stats: {
    abilityHaste: 15,
    armor: 65,
    magicResistance: 65,
    percentMovespeed: 10,
  },
}
export default item
