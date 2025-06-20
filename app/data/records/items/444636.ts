const item: Item = {
  name: 'Night Harvester',
  id: 444636,
  rank: 'Special',
  specialRecipe: 220007,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4636_mage_t4_nightharvester.png',
  nicknames: [
    'dark',
    'scythe',
  ],
  passives: [
    {
      name: 'Soulrend',
      unique: true,
      effects: 'Damaging an enemy champion with a basic attack or ability damage deals 125 (+15% AP) <b>bonus</b> magic damage and grants you 40% <b>bonus</b> movement speed for 1.5 seconds, with the duration extending on subsequent triggers (10 second cooldown per champion).',
    },
  ],
  stats: {
    abilityPower: 90,
    health: 300,
    abilityHaste: 25,
  },
  shop: {
    prices: {
      total: 0,
      combined: 1000,
      sell: 0,
    },
    tags: [
      'MAGE',
    ],
  },
  maps: [
    30,
  ],
}
export default item