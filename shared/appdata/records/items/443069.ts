const item: Item = {
  id: 443069,
  name: 'Hamstringer',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3069_hamstringer.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'Scour',
      effects:
        '<img src="/img/icons/critical-strike.webp" class="tip-icon" />Critical strikes inflict a bleed on the target for 2 seconds, dealing <b>bonus</b> physical damage equal to 5 – 20 (based on level) plus 6.25% of the pre-mitigation critical strike instance every 0.5 seconds, as well as applies a 7% <img src="/img/icons/slow.webp" class="tip-icon" />slow for the same duration. The bleed\'s damage is affected by <img src="/img/icons/critical-strike.webp" class="tip-icon" />critical strike modifiers and stacks infinitely; the slow stacks up to 35%.',
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
    tags: ['MARKSMAN'],
  },
  specialRecipe: 220007,
  stats: {
    attackDamage: 45,
    attackSpeed: 40,
    criticalStrikeChance: 25,
  },
}
export default item
