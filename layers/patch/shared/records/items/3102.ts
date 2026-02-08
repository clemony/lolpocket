// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3102,
  name: 'Banshee\'s Veil',
  nicknames: [
    'bv',
    'spellshield',
    'spell shield'
  ],
  description: '105 Ability Power\n40 Magic Resist\n\nAnnul\nGrants a Spell Shield that blocks the next enemy Ability.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 1058,
      name: 'Needlessly Large Rod',
      gold: 1200
    },
    {
      id: 4632,
      name: 'Verdant Barrier',
      gold: 1600
    }
  ],
  gold: {
    base: 200,
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
    abilityPower: 105,
    magicResistance: 40
  }
}
export default item