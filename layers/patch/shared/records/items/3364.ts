// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3364,
  name: 'Oracle Lens',
  nicknames: [
    'red',
    'lens',
    'spinny',
    'sweeper',
    'totem',
    'trinket'
  ],
  description: 'Active (160 - 100s, max 2 charges)\nReveals enemy Stealth Wards and traps around you for 8 seconds.',
  noEffects: false,
  rank: 'Trinket',
  removed: false,
  specialRecipe: 0,
  active: [
    {
      effects: 'Consume one charge to summon a <img src="/img/icons/sweeper-drone.webp" class="tip-icon " />Sweeper Drone that escorts you for the next 8 seconds, detecting nearby enemies that are not <img src="/img/icons/sight.webp" class="tip-icon light:invert" />visible.',
      range: 0,
      unique: false
    }
  ],
  gold: {
    base: 0,
    sell: 0,
    total: 0
  },
  maps: [
    11,
    21
  ],
  stats: {}
}
export default item