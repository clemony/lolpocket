// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 4632,
  name: 'Verdant Barrier',
  nicknames: [
    'necklace'
  ],
  description: '40 Ability Power\n25 Magic Resist\n\nAnnul\nGrants a Spell Shield that blocks the next enemy Ability.',
  noEffects: false,
  rank: 'Epic',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 1052,
      name: 'Amplifying Tome',
      gold: 400
    },
    {
      id: 1033,
      name: 'Null-Magic Mantle',
      gold: 400
    },
    {
      id: 1052,
      name: 'Amplifying Tome',
      gold: 400
    }
  ],
  buildsInto: [
    {
      id: 3102,
      name: 'Banshee\'s Veil',
      gold: 3000
    }
  ],
  gold: {
    base: 400,
    sell: 1120,
    total: 1600
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
      effects: 'Grants a <img src="/img/icons/spell-shield.webp" class="tip-icon light:invert" />spell shield that blocks the next hostile ability (60 second cooldown, timer restarts upon taking damage from champions).',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityPower: 40,
    magicResistance: 25
  }
}
export default item