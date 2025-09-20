const item: Item = {
  id: 223185,
  name: 'Guardian\'s Dirk',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3181_sanguineblade.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'Agricultural Reaper',
      effects:
        'Increases the effects of 20px|link= <i>Power Flowers</i> by 20%. Additionally, dealing damage to a <i>Power Flower</i> grants you 100 <b>bonus</b> movement speed for 3 seconds.',
      unique: true,
    },
  ],
  rank: 'Starter',
  removed: false,
  shop: {
    prices: {
      combined: 500,
      sell: 200,
      total: 500,
    },
    tags: ['FIGHTER', 'ASSASSIN'],
  },
  specialRecipe: 0,
  stats: {
    abilityHaste: 10,
    attackDamage: 25,
    lethality: 11,
  },
}
export default item
