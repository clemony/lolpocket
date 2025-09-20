const item: Item = {
  id: 444636,
  name: 'Night Harvester',
  nicknames: ['dark', 'scythe'],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4636_mage_t4_nightharvester.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'Soulrend',
      effects:
        'Damaging an enemy champion with a basic attack or ability damage deals 125 (+15% AP) <b>bonus</b> magic damage and grants you 40% <b>bonus</b> movement speed for 1.5 seconds, with the duration extending on subsequent triggers (10 second cooldown per champion).',
      unique: true,
    },
  ],
  rank: 'Special',
  removed: false,
  shop: {
    prices: {
      combined: 1000,
      sell: 0,
      total: 0,
    },
    tags: ['MAGE'],
  },
  specialRecipe: 220007,
  stats: {
    abilityHaste: 25,
    abilityPower: 90,
    health: 300,
  },
}
export default item
