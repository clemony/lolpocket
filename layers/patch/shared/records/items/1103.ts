// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 1103,
  name: 'Mosstomper Seedling',
  nicknames: [
    'jungle',
    'green',
    'salamander',
    'lizard',
    'frog'
  ],
  description: 'Jungle Companions\nSummon a Jungle Pet that assists you against monsters.\n\nMosstomper\'s Courage\nThe companion grows as you hunt monsters, empowering your Smite. When fully grown, it completes your Jungle Quest. ',
  noEffects: false,
  rank: 'Starter',
  removed: false,
  specialRecipe: 0,
  gold: {
    base: 450,
    sell: 0,
    total: 450
  },
  maps: [
    11,
    21
  ],
  passives: [
    {
      name: 'Jungle Companions',
      effects: 'Summon a <i>Mosstomper Seedling</i> companion to assist you in combat against monsters.',
      mythic: false,
      unique: true
    },
    {
      name: 'Mosstomper\'s Courage',
      effects: 'Feed your companion enough treats to evolve it and upgrade your <img src="/img/icons/smite.webp" class="tip-icon" />Smite. Upon the companion reaching its final evolution, this item is consumed, granting you the {{bi|Mosstomper&#039;s Courage|Mosstomper&#039;s Courage}} buff.',
      mythic: false,
      unique: true
    }
  ],
  stats: {}
}
export default item