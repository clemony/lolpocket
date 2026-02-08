// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3508,
  name: 'Essence Reaver',
  nicknames: [
    'er',
    'Spellblade'
  ],
  description: '55 Attack Damage\n20 Ability Haste\n25% Critical Strike Chance\n\nSpellblade\nAfter using an Ability, your next Attack deals bonus physical damage and grants Mana On-Hit.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 3057,
      name: 'Sheen',
      gold: 900
    },
    {
      id: 3133,
      name: 'Caulfield\'s Warhammer',
      gold: 1050
    },
    {
      id: 1018,
      name: 'Cloak of Agility',
      gold: 600
    }
  ],
  gold: {
    base: 350,
    sell: 2030,
    total: 2900
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Spellblade',
      effects: 'After using an ability, your next basic attack within 10 seconds deals 125% <b>base</b> AD (+50% critical strike chance) <b>bonus</b> physical damage on-hit and restores mana equal to 50% of that amount(1.5 second cooldown, starts after using the empowered attack).',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 20,
    attackDamage: 50,
    criticalStrikeChance: 25
  }
}
export default item