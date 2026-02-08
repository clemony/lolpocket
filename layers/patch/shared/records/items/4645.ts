// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 4645,
  name: 'Shadowflame',
  description: '110 Ability Power\n15 Magic Penetration\n\nCinderbloom\nMagic and true damage Critically Strikes enemies below 40% Health, dealing 20% increased damage. ',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
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
  passives: [
    {
      name: 'Cinderbloom',
      effects: 'Your magic damage and true damage damage will <img src="/img/icons/critical-strike.webp" class="tip-icon " />critically strike for 120% damage against enemies below 40% <b>maximum</b> health.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityPower: 110,
    flatMagicPenetration: 15
  }
}
export default item