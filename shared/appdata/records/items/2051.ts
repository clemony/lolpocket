const item: Item = {
  name: 'Guardian\'s Horn',
  id: 2051,
  rank: 'Starter',
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/2051_aram_t1_guardianshorn.png',
  simpleDescription: 'Good starting item for tanks',
  nicknames: [
    'Golden Arm of Kobe',
    'Golden Bicep of Kobe',
    'Horn',
    'Horn of the ManWolf',
    'ManWolf',
  ],
  passives: [
    {
      name: 'Undaunted',
      unique: true,
      effects:
        'Reduces all sources of incoming champion damage by 15 <i>(3.75 against damage over time abilities)</i>.',
    },
  ],
  stats: {
    health: 150,
    healthRegen: 20,
  },
  shop: {
    prices: {
      total: 950,
      combined: 950,
      sell: 380,
    },
    tags: ['FIGHTER', 'TANK', 'SUPPORT'],
  },
  maps: [12, 35],
}
export default item
