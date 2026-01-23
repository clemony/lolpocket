// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
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
  active: [
    {
      effects: 'Consume one charge to summon a <img src="/img/icons/sweeper-drone.webp" class="tip-icon" />Sweeper Drone that escorts you for the next 8 seconds, detecting nearby enemies that are not <img src="/img/icons/sight.webp" class="tip-icon" />visible.',
      range: 0,
      unique: false
    }
  ],
  description: 'Active (160 - 100s, max 2 charges)\nReveals enemy Stealth Wards and traps around you for 8 seconds.',
  gold: {
    base: 0,
    sell: 0,
    total: 0
  },
  maps: [
    11,
    21
  ],
  noEffects: false,
  rank: 'Trinket',
  removed: false,
  specialRecipe: 0,
  stats: {}
}
export default item