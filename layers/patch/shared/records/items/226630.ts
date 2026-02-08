// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 226630,
  name: 'Goredrinker',
  nicknames: [
    'slurp'
  ],
  description: '55 Attack Damage\n400 Health\n20 Ability Haste\n10% Omnivamp\n\nActive - Thirsting Slash: Deal damage to nearby enemies. Restore Health for each champion hit.',
  noEffects: false,
  rank: 'Special',
  removed: false,
  specialRecipe: 220007,
  active: [
    {
      name: 'Thirsting Slash',
      effects: 'Deal 175% <b>base</b> AD physical damage to enemies in a 450 radius centered around you. <img src="/img/icons/heal.webp" class="tip-icon light:invert" />Heal for 20% AD (+8% of your <b>missing</b> health) for each enemy champion hit.',
      unique: true
    }
  ],
  gold: {
    base: 1000,
    sell: 400,
    total: 1000
  },
  maps: [
    30
  ],
  stats: {
    abilityHaste: 20,
    attackDamage: 55,
    health: 400,
    omnivamp: 10
  }
}
export default item