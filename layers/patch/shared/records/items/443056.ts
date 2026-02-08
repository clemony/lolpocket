// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 443056,
  name: 'Demon King\'s Crown',
  description: 'Supremacy\nIncreases your Health, Armor, Magic Resist, Attack Damage, Ability Power, Attack Speed, and Ability Haste by 26%, increased by 0% per round win and -3% each round lost after acquiring this item.',
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
      name: 'Supremacy',
      effects: 'Increase your <b>total</b> attack damage, ability power, attack speed, <b>maximum</b> health, armor, magic resistance, and ability haste by 26%, further increased by 1.2% for each round you win and reduced by 3% for each round you lose.',
      mythic: false,
      unique: true
    }
  ],
  stats: {}
}
export default item