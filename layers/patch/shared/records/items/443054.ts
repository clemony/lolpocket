// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 443054,
  name: 'Darksteel Talons',
  nicknames: [
    'bloodrazor',
    'kitae'
  ],
  description: '50% Attack Speed\n55 Armor\n5% Move Speed\n\nGash\nAttacks apply  true damage on hit.',
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
      name: 'Gash',
      effects: 'Basic attacks on-hit deal (<img src="/img/icons/melee.webp" class="inline-icon" />20 – 40 /<img src="/img/icons/ranged.webp" class="inline-icon" />10 – 20) true damage (+(<img src="/img/icons/melee.webp" class="inline-icon" />25% /<img src="/img/icons/ranged.webp" class="inline-icon" />20%) <b>bonus</b> armor) <b>bonus</b> true damage.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    armor: 55,
    attackSpeed: 50,
    percentMovespeed: 5
  }
}
export default item