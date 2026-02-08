// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 6676,
  name: 'The Collector',
  nicknames: [
    'deathblade',
    'gun',
    'lethality'
  ],
  description: '50 Attack Damage\n10 Lethality\n25% Critical Strike Chance\n\nDeath\nYour damage executes champions that are below 5% Health.\n\nTaxes\nChampion kills grant 25 bonus gold.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875
    },
    {
      id: 3134,
      name: 'Serrated Dirk',
      gold: 1000
    },
    {
      id: 1018,
      name: 'Cloak of Agility',
      gold: 600
    }
  ],
  gold: {
    base: 525,
    sell: 2100,
    total: 3000
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Death',
      effects: 'If you deal post-mitigation damage that would leave a champion below 5% of their <b>maximum</b> health, <img src="/img/icons/execute.webp" class="tip-icon " />execute them.',
      mythic: false,
      unique: true
    },
    {
      name: 'Taxes',
      effects: 'Killing a champion grants you an additional <img src="/img/icons/gold-coin.webp" class="inline-icon" />25.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    attackDamage: 50,
    criticalStrikeChance: 25,
    lethality: 10
  }
}
export default item