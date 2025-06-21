const item: Item = {
  name: 'Spectral Cutlass',
  id: 224004,
  rank: 'Legendary',
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4004_assassin_t3_spectralcutlass.png',
  active: [
    {
      name: 'Soul Anchor',
      unique: true,
      effects: 'Mark your current location. After 5 seconds, you automatically <img src="/img/icons/blink.webp" class="tip-icon" />blink to the marked location. <i>Soul Anchor</i> may be recast within its duration to manually blink to the marked location (15 second cooldown, starts after the blink).',
      cooldown: 15,
    },
  ],
  stats: {
    attackDamage: 55,
    lethality: 21,
  },
  shop: {
    prices: {
      total: 2500,
      combined: 2500,
      sell: 1000,
    },
    tags: [
      'ASSASSIN',
    ],
  },
  maps: [
    30,
  ],
}
export default item