// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3330,
  name: 'Scarecrow Effigy',
  nicknames: [
    'yellow',
    'totem',
    'trinket'
  ],
  description: 'Cannot be sold\n\nActive - Trinket: Places an effigy that lasts for  seconds and appears exactly as Fiddlesticks does to enemies. Stores one charge every  seconds, up to maximum 2 charges.\n\nEnemy champions approaching an effigy will activate it, causing the effigy to fake a random action, after which the effigy will fall apart.',
  noEffects: false,
  rank: 'Trinket',
  removed: false,
  requiredChampion: 'FiddleSticks',
  specialRecipe: 0,
  active: [
    {
      name: 'Trinket',
      effects: 'Consume a charge to place a visible <img src="/img/icons/effigy.webp" class="tip-icon " />Effigy at the target location, which grants <img src="/img/icons/sight.webp" class="tip-icon light:invert" />sight over the surrounding area for 130 – 300 (based on level) seconds. For enemies, it visually appears identical to {{ci|Fiddlesticks|Fiddlesticks}} (including on the minimap) and has no visible health bar until it <i>activates</i>. Enemy <img src="/img/icons/champion.webp" class="tip-icon light:invert" />champions that approach it will activate it, causing it to automatically sound a Danger ping to its allies as well as fake a random action for up to 2 seconds. If not destroyed by that time, it will deal 1 damage to itself.',
      range: 625,
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
    21,
    30,
    35
  ],
  stats: {}
}
export default item