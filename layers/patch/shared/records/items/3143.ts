// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3143,
  name: 'Randuin\'s Omen',
  description: '350 Health\n75 Armor\n\nResilience\nReceive 30% less damage from Critical Strikes.\nHumility\nSlow nearby enemies by 70% for 2 seconds.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  active: [
    {
      name: 'Humility',
      effects: 'Unleash a shockwave around you that <img src="/img/icons/slow.webp" class="tip-icon " />slows nearby enemies by 70% for 2 seconds.',
      range: 0,
      unique: true
    }
  ],
  buildsFrom: [
    {
      id: 3082,
      name: 'Warden\'s Mail',
      gold: 1000
    },
    {
      id: 1011,
      name: 'Giant\'s Belt',
      gold: 900
    }
  ],
  gold: {
    base: 800,
    sell: 1890,
    total: 2700
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Resilience',
      effects: 'Reduces incoming damage from <img src="/img/icons/critical-strike.webp" class="tip-icon " />critical strikes by 30%.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    armor: 75,
    health: 350
  }
}
export default item