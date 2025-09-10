const item: Item = {
  name: 'Guardian\'s Dirk',
  id: 223185,
  rank: 'Starter',
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3181_sanguineblade.png',
  passives: [
    {
      name: 'Agricultural Reaper',
      unique: true,
      effects: 'Increases the effects of 20px|link= <i>Power Flowers</i> by 20%. Additionally, dealing damage to a <i>Power Flower</i> grants you 100 <b>bonus</b> movement speed for 3 seconds.'
    }
  ],
  stats: {
    attackDamage: 25,
    lethality: 11,
    abilityHaste: 10
  },
  shop: {
    prices: {
      total: 500,
      combined: 500,
      sell: 200
    },
    tags: [
      'FIGHTER',
      'ASSASSIN'
    ]
  },
  maps: [
    30
  ]
}
export default item