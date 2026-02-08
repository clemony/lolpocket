// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 446632,
  name: 'Divine Sunderer',
  nicknames: [
    'Spellblade',
    'devourer'
  ],
  description: '55 Attack Damage\n350 Health\n20 Ability Haste\n\nSpellblade\nAfter using an Ability, your next Attack is enhanced with additional damage. If the target is a champion, also heal.\n\n',
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
      name: 'Spellblade',
      effects: 'After using an ability, your next basic attack within 10 seconds deals 180% <b>base</b> AD (+(<img src="/img/icons/melee.webp" class="inline-icon" />4% /<img src="/img/icons/ranged.webp" class="inline-icon" />2%) of target\'s <b>maximum</b> health) as <b>bonus</b> physical damage on-hit, for a <b>minimum</b> of 180% <b>base</b> AD. If the target is a champion, <img src="/img/icons/heal.webp" class="tip-icon light:invert" />heal for 99% <b>base</b> AD (+(2.2% /1.1%) of target\'s <b>maximum</b> health)(1.5 second cooldown, starts after using the empowered attack).',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 20,
    attackDamage: 55,
    health: 350
  }
}
export default item