// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3363,
  name: 'Farsight Alteration',
  nicknames: [
    'blue',
    'totem',
    'trinket'
  ],
  description: 'Active (198 - 99s)\nReveals a distant area for 2 seconds and leaves a Ward that expires upon spotting an enemy champion.',
  noEffects: false,
  rank: 'Trinket',
  removed: false,
  specialRecipe: 0,
  active: [
    {
      name: 'Trinket',
      effects: 'Places a visible <img src="/img/icons/farsight-ward.webp" class="tip-icon " />Farsight Ward at the target location that grants <img src="/img/icons/sight.webp" class="tip-icon light:invert" />sight of the surrounding area, including over terrain and through brush and lasting indefinitely. Also grants sight of the area in a 800 radius for 2 seconds. Upon detecting an enemy champion, the ward will increase its sight radius to 800 units and destroy itself after 3 seconds.',
      range: 4000,
      unique: true
    }
  ],
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
  stats: {}
}
export default item