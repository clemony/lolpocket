const item: Item = {
  id: 443055,
  name: 'Fulmination',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3055_fulmination.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'Energized',
      effects:
        'Moving and basic attacking generates <i>Energize</i> stacks, up to 100.',
      unique: true,
    },
    {
      name: 'Polarity',
      effects:
        'Your <img src="/img/icons/energized.webp" class="tip-icon" />Energized attacks against targets not hit by your previous <i>Energized</i> attack do not consume any <i>Energize</i> stacks on-hit.',
      unique: true,
    },
    {
      name: 'Dynamo',
      effects:
        'When fully <img src="/img/icons/energized.webp" class="tip-icon" />Energized, your next basic attack deals <b>bonus</b> magic damage on-hit equal to 10% of the target\'s <b>current</b> health.',
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
    attackDamage: 55,
    attackSpeed: 45,
    percentMovespeed: 15,
  },
}
export default item
