// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3363,
  name: 'Farsight Alteration',
  nicknames: [
    'blue',
    'totem',
    'trinket'
  ],
  active: [
    {
      name: 'Trinket',
      effects: 'Places a visible <img src="/img/icons/farsight-ward.webp" class="tip-icon" />Farsight Ward at the target location that grants <img src="/img/icons/sight.webp" class="tip-icon" />sight of the surrounding area, including over terrain and through brush and lasting indefinitely. Also grants sight of the area in a 800 radius for 2 seconds. Upon detecting an enemy champion, the ward will increase its sight radius to 800 units and destroy itself after 3 seconds.',
      range: 4000,
      unique: true
    }
  ],
  description: 'Active (198 - 99s)\nReveals a distant area for 2 seconds and leaves a Ward that expires upon spotting an enemy champion.',
  gold: {
    base: 0,
    sell: 0,
    total: 0
  },
  maps: [
    11,
    12,
    21
  ],
  noEffects: false,
  rank: 'Trinket',
  removed: false,
  specialRecipe: 0,
  stats: {}
}
export default item