const item: Item = {
  id: 444637,
  name: 'Demonic Embrace',
  nicknames: ['helmet'],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4637_mage_t3_demonicembrace.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'Sinister Pact',
      effects:
        'Increase your ability power by 1.5% ap and gain 1.5% <b>bonus</b> movement speed for every 100 <b>current</b> health you are missing, up to an increase of 45% ability power and 45% <b>bonus</b> movement speed at 3000 <b>current</b> health missing.',
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
    abilityPower: 80,
    health: 700,
  },
}
export default item
