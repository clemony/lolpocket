// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3174,
  name: 'Armored Advance',
  nicknames: [
    'boots'
  ],
  description: '35 Armor\n45 Move Speed\n\nPlating\nReduces incoming damage from Attacks by 10%.\n\nNoxian Endurance (0s)\nAfter taking physical damage from a Champion, gain a  physical shield for 5 seconds.',
  noEffects: false,
  rank: 'Boots',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 3047,
      name: 'Plated Steelcaps',
      gold: 1200
    }
  ],
  gold: {
    base: 0,
    sell: 840,
    total: 1200
  },
  maps: [
    11
  ],
  passives: [
    {
      name: 'Plating',
      effects: 'Reduces all incoming <img src="/img/icons/basic-damage.webp" class="tip-icon " />basic damage by 10% (<i>excluding from turret attacks</i>).',
      mythic: false,
      unique: true
    },
    {
      name: 'Noxian Endurance',
      cooldown: '15',
      effects: 'Taking physical damage from champions grants you a <img src="/img/icons/shield.webp" class="tip-icon light:invert" />shield that absorbs 10 – 120 (based on level) (+10% <b>maximum</b> health) physical damage for 5 seconds.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    armor: 35,
    flatMovespeed: 45
  }
}
export default item