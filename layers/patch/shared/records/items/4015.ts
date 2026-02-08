// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 4015,
  name: 'Perplexity',
  description: '60 Ability Power\n5% Move Speed\n22% Armor Penetration\n30% Magic Penetration\n\nGiant Slayer\nDeal up to 15% bonus damage against champions with greater max Health than you.\n\nMax damage increase reached when Health difference is greater than 2500.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  gold: {
    base: 2500,
    sell: 1250,
    total: 2500
  },
  maps: [
    30
  ],
  passives: [
    {
      name: 'Giant Slayer',
      effects: 'Deal 0% – 15% (based on maximum health difference) increased damage against enemy champions with greater <b>maximum</b> health than you.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityPower: 60,
    armorPenetration: 22,
    percentMagicPenetration: 30,
    percentMovespeed: 5
  }
}
export default item