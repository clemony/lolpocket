// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3340,
  name: 'Stealth Ward',
  nicknames: [
    'yellow',
    'sweeper',
    'totem',
    'trinket'
  ],
  active: [
    {
      name: 'Trinket',
      effects: 'Consume a charge to place an invisible <img src="/img/icons/totem-ward.webp" class="tip-icon" />Totem Ward at the target location, which grants <img src="/img/icons/sight.webp" class="tip-icon" />sight of the surrounding area for 90 – 120 (based on average champion level) seconds.',
      range: 600,
      unique: true
    }
  ],
  description: 'Active (170 - 90s, max 2 charges)\nPlaces an Invisible Stealth Ward that grants vision for 90-120 seconds.',
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