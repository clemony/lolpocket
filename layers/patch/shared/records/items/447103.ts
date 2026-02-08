// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 447103,
  name: 'Hemomancer\'s Helm',
  nicknames: [
    'Omnivamp'
  ],
  description: '70 Attack Damage\n30 Ability Haste\n15% Omnivamp\n\nScarlet Allegiance\nThreshold 30% Lifesteal/Omnivamp: Gain 500 Max Health. Drain 10% of all damage nearby enemies take.',
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
      name: 'Scarlet Allegiance',
      effects: 'If your <img src="/img/icons/life-steal.webp" class="tip-icon" />life steal and <img src="/img/icons/omnivamp.webp" class="tip-icon" />omnivamp sum to at least 30%, gain 500 <b>bonus</b> health and <img src="/img/icons/heal.webp" class="tip-icon light:invert" />heal yourself equal to 10% of the damage that enemy champions in a 525 units radius around you take from all sources.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 30,
    attackDamage: 70,
    omnivamp: 15
  }
}
export default item