const item: Item = {
  name: 'Fulmination',
  id: 443055,
  rank: 'Special',
  specialRecipe: 220007,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3055_fulmination.png',
  passives: [
    {
      name: 'Energized',
      unique: true,
      effects: 'Moving and basic attacking generates <i>Energize</i> stacks, up to 100.'
    },
    {
      name: 'Polarity',
      unique: true,
      effects: 'Your <img src="/img/icons/energized.webp" class="tip-icon" />Energized attacks against targets not hit by your previous <i>Energized</i> attack do not consume any <i>Energize</i> stacks on-hit.'
    },
    {
      name: 'Dynamo',
      unique: true,
      effects: 'When fully <img src="/img/icons/energized.webp" class="tip-icon" />Energized, your next basic attack deals <b>bonus</b> magic damage on-hit equal to 10% of the target\'s <b>current</b> health.'
    }
  ],
  stats: {
    attackDamage: 55,
    attackSpeed: 45,
    percentMovespeed: 15
  },
  shop: {
    prices: {
      total: 0,
      combined: 1000,
      sell: 0
    },
    tags: [
      'MARKSMAN'
    ]
  },
  maps: [
    30
  ]
}
export default item