// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 4005,
  name: 'Imperial Mandate',
  nicknames: [
    'banner of command',
    'flag'
  ],
  description: '60 Ability Power\n20 Ability Haste\n125% Base Mana Regen\n\nCoordinated Fire (0s) per target\nSlowing or Immobilizing an enemy champion marks them for 5 seconds. Ally champion damage detonates the mark, dealing magic damage equal to 10% of current health. ',
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
      id: 4642,
      name: 'Bandleglass Mirror',
      gold: 900
    }
  ],
  gold: {
    base: 500,
    sell: 1575,
    total: 2250
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Coordinated Fire',
      effects: 'Abilities that <img src="/img/icons/slow.webp" class="tip-icon " />slow or <img src="/img/icons/immobilize.webp" class="tip-icon " />immobilize enemy champions mark them for 5 seconds. Allied champions that damage marked enemies consume the mark to deal 10% of the target\'s <b>current</b> health <b>bonus</b> magic damage (9 second cooldown per target, starts upon mark application).',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 20,
    abilityPower: 60,
    manaRegen: 125
  }
}
export default item