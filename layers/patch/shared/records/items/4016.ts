// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 4016,
  name: 'Wordless Promise',
  description: '50 Ability Power\n25% Heal and Shield Power\n25 Ability Haste\n\nPromise\nGain 20% of your Promised ally\'s Ability Power, and grant your Promised ally 20% of your Ability Haste.\n\nACTIVE (0s)\nPromise\nMake a Promise to an ally.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  active: [
    {
      name: 'Promise',
      effects: 'Make a <i>Promise</i> to the target allied champion, forming a <img src="/img/icons/tether.webp" class="tip-icon " />tether between you and them.',
      unique: true
    }
  ],
  gold: {
    base: 2500,
    sell: 1250,
    total: 2500
  },
  maps: [
    30
  ],
  passives: [
    {
      name: 'Promise',
      effects: 'While your <i>Promised</i> ally is tethered to you, gain ability power equal to 20% of <i>Promised</i> ally\'s AP, and grant your <i>Promised</i> ally ability haste equal to 20% of your ability haste. <i>Increases and decreases to each teammate\'s stats recalculate this effect.</i>',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 25,
    abilityPower: 50,
    healAndShieldPower: 25
  }
}
export default item