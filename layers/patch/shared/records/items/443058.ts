// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 443058,
  name: 'Shield of Molten Stone',
  description: '300 Health\n100 Armor\n\nImmovable as the Earth\nIncrease your armor by 20%, and gain Block Chance based on your Armor.',
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
      name: 'Immovable as the Earth',
      effects: 'Increase your <b>total</b> armor by 20% armor. Additionally, basic attacks that hit you have a chance of being <img src="/img/icons/block.webp" class="tip-icon " />blocked equal to 5% per 200 <b>total</b> armor, up to a maximum of 50% chance.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    armor: 100,
    health: 300
  }
}
export default item