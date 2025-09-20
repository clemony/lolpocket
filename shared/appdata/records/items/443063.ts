const item: Item = {
  id: 443063,
  name: 'Eleisa\'s Miracle',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3063_elishasmiracle.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'Enduring Vitality',
      effects:
        'Gain <img src="/img/icons/hsp.webp" class="tip-icon" />hsp per 100 <b>current</b> health you are missing, up to 60% at 2400 <b>current</b> health missing.',
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
    tags: ['SUPPORT'],
  },
  specialRecipe: 220007,
  stats: {
    abilityHaste: 25,
    armor: 50,
    magicResistance: 50,
  },
}
export default item
