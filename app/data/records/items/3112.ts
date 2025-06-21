const item: Item = {
  name: 'Guardian\'s Orb',
  id: 3112,
  rank: 'Starter',
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3112_aram_t1_guardiansorb.png',
  simpleDescription: 'Good starting item for mages',
  passives: [
    {
      name: 'Recovery',
      unique: true,
      effects: 'Gain 10 <b>bonus</b> mana regeneration. Manaless champions gain 15 <b>bonus</b> health regeneration instead.',
    },
  ],
  stats: {
    abilityPower: 50,
    health: 150,
  },
  shop: {
    prices: {
      total: 950,
      combined: 950,
      sell: 380,
    },
    tags: [
      'MAGE',
      'TANK',
      'SUPPORT',
      'MANA_AND_REG',
    ],
  },
  maps: [
    12,
    35,
  ],
}
export default item