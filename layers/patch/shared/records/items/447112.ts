// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 447112,
  name: 'Flesheater',
  description: '70 Adaptive Force\n500 Health\n20 Ability Haste\n\nHack the Meat\nDealing damage shreds 3 Armor and Magic Resist for 5 seconds, stacking up to 10 times. Applying stacks has a 1 second cooldown per Ability.\n\nCannibalize\nOn Champion Takedown, Heal yourself and your ally for 18% of the Target\'s Max Health.',
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
      name: 'Hack the Meat',
      effects: 'Dealing damage reduces the target\'s armor and magic resistance by 3 for 5 seconds, stacking up to 10 times for a total resistances reduction of 30. Stacks can be applied to each enemy only once every second.',
      mythic: false,
      unique: true
    },
    {
      name: 'Cannibalize',
      effects: 'If you or the allied champion on your team score a <img src="/img/icons/takedown.webp" class="tip-icon light:invert" />takedown against an enemy champion, you are both <img src="/img/icons/heal.webp" class="tip-icon light:invert" />healed for 18% of the taken down target\'s <b>maximum</b> health.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 20,
    health: 500
  }
}
export default item