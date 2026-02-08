// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 444644,
  name: 'Crown of the Shattered Queen',
  description: '85 Ability Power\n350 Health\n600 Mana\n25 Ability Haste\n\nSafeguard\nYou are Safeguarded, reducing incoming champion damage by 50%. Safeguard persists for 3 seconds after taking champion damage. (0s). \n\nItem Cooldown is restarted when damage is taken from champions.',
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
      name: 'Safeguard',
      effects: 'Become <i>Safeguarded</i> to reduce incoming champion damage by 50%, lingering for 3 seconds after taking damage from a champion (30 second cooldown, timer restarts upon taking damage from champions).',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 25,
    abilityPower: 85,
    health: 350,
    mana: 600
  }
}
export default item