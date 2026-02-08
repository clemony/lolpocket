// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3170,
  name: 'Swiftmarch',
  nicknames: [
    'boots'
  ],
  description: '65 Move Speed\n\nFleetfooted\nReduce the effectiveness of Slows by 40%.\n\nNoxian Fervor\nGain 5% of your Move Speed as Adaptive Force.',
  noEffects: false,
  rank: 'Boots',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 3009,
      name: 'Boots of Swiftness',
      gold: 1000
    }
  ],
  gold: {
    base: 0,
    sell: 700,
    total: 1000
  },
  maps: [
    11
  ],
  passives: [
    {
      name: 'Fleetfooted',
      effects: 'Gain 40% slow resist.',
      mythic: false,
      unique: true
    },
    {
      name: 'Noxian Fervor',
      effects: 'Gain <img src="/img/icons/adaptive-force.webp" class="tip-icon " />adaptive force equal to 5% of your <b>total</b> movement speed.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    flatMovespeed: 65
  }
}
export default item