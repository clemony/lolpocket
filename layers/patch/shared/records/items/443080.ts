// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 443080,
  name: 'Twin Mask',
  description: 'Unanimity\nGain a percent of your teammate\'s Health, Armor, Magic Resist, Attack Damage, Ability Power, Attack Speed, and Ability Haste, increased significantly if they also have Twin Mask and are alive.',
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
      name: 'Unanimity',
      effects: 'Gain 20% of your teammate\'s attack damage, ability power, <b>total</b> attack speed, <b>maximum</b> health, armor, magic resistance, and ability haste, increased to 35% if they also have <b>Twin Mask</b> and are alive.',
      mythic: false,
      unique: true
    }
  ],
  stats: {}
}
export default item