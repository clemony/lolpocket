const item: Item = {
  name: 'Gargoyle Stoneplate',
  id: 443193,
  rank: 'Special',
  specialRecipe: 220007,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3193_tank_t3_gargoylestoneplate.png',
  active: [
    {
      name: 'Unbreakable',
      unique: true,
      effects: 'Gain a <img src="/img/icons/shield.webp" class="tip-icon" />shield for 300 (+100% <b>bonus</b> health) that decays over 5 seconds, and 25% increased size for the same duration.'
    }
  ],
  stats: {
    armor: 65,
    magicResistance: 65,
    percentMovespeed: 10,
    abilityHaste: 15
  },
  shop: {
    prices: {
      total: 0,
      combined: 1000,
      sell: 0
    },
    tags: [
      'TANK'
    ]
  },
  maps: [
    30
  ]
}
export default item