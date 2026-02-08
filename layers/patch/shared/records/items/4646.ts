// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 4646,
  name: 'Stormsurge',
  description: '90 Ability Power\n15 Magic Penetration\n6% Move Speed\n\nStormraider\nDealing 25% of a champion\'s maximum Health within 2.5s applies Squall to them.\n\nSquall\nAfter 2 seconds, deal magic damage. If the target dies before Squall triggers, it damages nearby enemies.',
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
      id: 3113,
      name: 'Aether Wisp',
      gold: 900
    }
  ],
  gold: {
    base: 800,
    sell: 1960,
    total: 2800
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Stormraider',
      effects: 'Dealing damage to an enemy champion equal to 25% of their <b>maximum</b> health within 2.5 seconds inflicts them with <i>Squall</i> (30 second cooldown, starts on <i>Squall\'s</i> application).',
      mythic: false,
      unique: true
    },
    {
      name: 'Squall',
      effects: 'After 2 seconds of having applied <i>Squall</i>, strike the target with lightning, dealing 125 magic damage (+10% AP) magic damage to them. If the target dies before being struck, they emit an electric field instantly that shocks all enemy champions in a 600 radius, dealing them the same damage.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityPower: 90,
    flatMagicPenetration: 15,
    percentMovespeed: 6
  }
}
export default item