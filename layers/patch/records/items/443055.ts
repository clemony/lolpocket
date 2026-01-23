// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 443055,
  name: 'Fulmination',
  nicknames: [
    'energize'
  ],
  description: '55 Attack Damage\n45% Attack Speed\n15% Move Speed\n\nPolarity\nOn Attack, if the target is different from the target you most recently triggered an Energized Attack on, ready Energize. \n\nDynamo\nEnergized Attacks deal an additional magic damage based on the Target\'s Current Health.',
  gold: {
    base: 1000,
    sell: 400,
    total: 1000
  },
  maps: [
    30
  ],
  noEffects: false,
  passives: [
    {
      name: 'Energized',
      effects: 'Moving and basic attacking generates <i>Energize</i> stacks, up to 100.',
      mythic: false,
      unique: true
    },
    {
      name: 'Polarity',
      effects: 'Your <img src="/img/icons/energized.webp" class="tip-icon" />Energized attacks against targets not hit by your previous <i>Energized</i> attack do not consume any <i>Energize</i> stacks on-hit.',
      mythic: false,
      unique: true
    },
    {
      name: 'Dynamo',
      effects: 'When fully <img src="/img/icons/energized.webp" class="tip-icon" />Energized, your next basic attack deals <b>bonus</b> magic damage on-hit equal to 13% of the target\'s <b>current</b> health.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Special',
  removed: false,
  specialRecipe: 220007,
  stats: {
    attackDamage: 55,
    attackSpeed: 45,
    percentMovespeed: 15
  }
}
export default item