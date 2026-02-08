// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 4628,
  name: 'Horizon Focus',
  nicknames: [
    'lock on',
    'snipe'
  ],
  description: '75 Ability Power\n25 Ability Haste\n\nHypershot\nDealing Ability damage to champions at 600 range or greater Reveals them for 6 seconds. \n\nFocus\nWhen Hypershot is triggered, Reveal all other enemy champions within 1400 range of them for 3 seconds.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 3108,
      name: 'Fiendish Codex',
      gold: 850
    },
    {
      id: 3108,
      name: 'Fiendish Codex',
      gold: 850
    },
    {
      id: 1052,
      name: 'Amplifying Tome',
      gold: 400
    }
  ],
  gold: {
    base: 600,
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
      name: 'Hypershot',
      effects: 'Dealing ability damage to a champion with a champion ability at 600 or more units away from the cast position marks them for 6 seconds, <img src="/img/icons/standard-sight.webp" class="tip-icon light:invert" />revealing them and increasing your damage dealt to them by 10%.',
      mythic: false,
      unique: true
    },
    {
      name: 'Focus',
      cooldown: '30',
      effects: 'Upon triggering <i>Hypershot</i>, grant <img src="/img/icons/sight.webp" class="tip-icon light:invert" />sight of the area 1400 units around the target for 2 seconds and apply <i>Hypershot\'s</i> mark to enemy champions within the area for 3 seconds.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 25,
    abilityPower: 75
  }
}
export default item