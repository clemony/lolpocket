const item: Item = {
  id: 224004,
  name: 'Spectral Cutlass',
  active: [
    {
      name: 'Soul Anchor',
      cooldown: 45,
      effects:
        'Mark your current location. After 4 seconds, you automatically <img src="/img/icons/blink.webp" class="tip-icon" />blink to the marked location after a 0.5-second delay. <i>Soul Anchor</i> may be recast within its duration to manually blink to the marked location after the same delay (45 second cooldown, starts after the blink).',
      unique: true,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4004_assassin_t3_spectralcutlass.png',
  maps: [30],
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 2500,
      sell: 1120,
      total: 2800,
    },
    tags: ['ASSASSIN'],
  },
  specialRecipe: 0,
  stats: {
    attackDamage: 50,
    lethality: 15,
    percentMovespeed: 4,
  },
}
export default item
