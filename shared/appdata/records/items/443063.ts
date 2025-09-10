const item: Item = {
  name: 'Eleisa\'s Miracle',
  id: 443063,
  rank: 'Special',
  specialRecipe: 220007,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3063_elishasmiracle.png',
  passives: [
    {
      name: 'Enduring Vitality',
      unique: true,
      effects: 'Gain <img src="/img/icons/hsp.webp" class="tip-icon" />hsp per 100 <b>current</b> health you are missing, up to 60% at 2400 <b>current</b> health missing.'
    }
  ],
  stats: {
    armor: 50,
    magicResistance: 50,
    abilityHaste: 25
  },
  shop: {
    prices: {
      total: 0,
      combined: 1000,
      sell: 0
    },
    tags: [
      'SUPPORT'
    ]
  },
  maps: [
    30
  ]
}
export default item