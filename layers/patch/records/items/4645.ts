// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 4645,
  name: 'Shadowflame',
  buildsFrom: [
    {
      id: 3145,
      name: 'Hextech Alternator',
      gold: 1100
    },
    {
      id: 1058,
      name: 'Needlessly Large Rod',
      gold: 1200
    }
  ],
  description: '110 Ability Power\n15 Magic Penetration\n\nCinderbloom\nMagic and true damage Critically Strikes enemies below 40% Health, dealing 20% increased damage. ',
  gold: {
    base: 900,
    sell: 2240,
    total: 3200
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  noEffects: false,
  passives: [
    {
      name: 'Cinderbloom',
      effects: 'Your magic damage and true damage damage will <img src="/img/icons/critical-strike.webp" class="tip-icon" />critically strike for 120% damage against enemies below 40% <b>maximum</b> health.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityPower: 110,
    flatMagicPenetration: 15
  }
}
export default item