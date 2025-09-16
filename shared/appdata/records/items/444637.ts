const item: Item = {
  name: 'Demonic Embrace',
  id: 444637,
  rank: 'Special',
  specialRecipe: 220007,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4637_mage_t3_demonicembrace.png',
  nicknames: ['helmet'],
  passives: [
    {
      name: 'Sinister Pact',
      unique: true,
      effects:
        'Increase your ability power by 1.5% ap and gain 1.5% <b>bonus</b> movement speed for every 100 <b>current</b> health you are missing, up to an increase of 45% ability power and 45% <b>bonus</b> movement speed at 3000 <b>current</b> health missing.',
    },
  ],
  stats: {
    abilityPower: 80,
    health: 700,
  },
  shop: {
    prices: {
      total: 0,
      combined: 1000,
      sell: 0,
    },
    tags: ['MAGE'],
  },
  maps: [30],
}
export default item
