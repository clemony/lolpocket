// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3173,
  name: 'Chainlaced Crushers',
  nicknames: [
    'boots'
  ],
  description: '30 Magic Resist\n45 Move Speed\n30% Tenacity\n\nNoxian Persistence (0s)\nAfter taking magic damage from a Champion, gain a  magic shield for 5 seconds.',
  noEffects: false,
  rank: 'Boots',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 3111,
      name: 'Mercury\'s Treads',
      gold: 1250
    }
  ],
  gold: {
    base: 0,
    sell: 875,
    total: 1250
  },
  maps: [
    11
  ],
  passives: [
    {
      name: 'Noxian Persistence',
      cooldown: '15',
      effects: 'Taking magic damage from champions grants you a <img src="/img/icons/shield.webp" class="tip-icon light:invert" />shield that absorbs 10 – 120 (based on level) (+10% <b>maximum</b> health) magic damage for 5 seconds.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    flatMovespeed: 45,
    magicResistance: 30,
    tenacity: 30
  }
}
export default item