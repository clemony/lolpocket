// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 443059,
  name: 'Cloak of Starry Night',
  description: '300 Health\n100 Magic Resist\n\nLimitless as the Stars\nIncrease your Magic Resist by 20%. Reduce all damage you take from non-Basic Attack sources by a percentage, scaling with your Magic Resist up to a cap of 50%.',
  noEffects: false,
  rank: 'Special',
  removed: false,
  specialRecipe: 220007,
  gold: {
    base: 1000,
    sell: 400,
    total: 1000
  },
  maps: [
    30
  ],
  passives: [
    {
      name: 'Limitless as the Stars',
      effects: 'Increase your <b>total</b> magic resistance by 20% mr. Additionally, reduce all incoming damage received from non-basic attack sources by 5% per 200 <b>total</b> magic resistance, up to a maximum of 50% damage reduction.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    health: 300,
    magicResistance: 100
  }
}
export default item