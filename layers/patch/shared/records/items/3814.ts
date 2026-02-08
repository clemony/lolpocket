// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3814,
  name: 'Edge of Night',
  nicknames: [
    'eon',
    'lethality',
    'spellshield',
    'spell shield'
  ],
  description: '50 Attack Damage\n15 Lethality\n250 Health\n\nAnnul\nGrants a Spell Shield that blocks the next enemy Ability.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 3134,
      name: 'Serrated Dirk',
      gold: 1000
    },
    {
      id: 2021,
      name: 'Tunneler',
      gold: 1150
    }
  ],
  gold: {
    base: 850,
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
      name: 'Annul',
      effects: 'Grants a <img src="/img/icons/spell-shield.webp" class="tip-icon light:invert" />spell shield that blocks the next hostile ability (40 second cooldown, timer restarts upon taking damage from champions).',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    attackDamage: 50,
    health: 250,
    lethality: 15
  }
}
export default item