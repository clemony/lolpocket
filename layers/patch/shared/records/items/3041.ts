// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3041,
  name: 'Mejai\'s Soulstealer',
  nicknames: [
    'book'
  ],
  description: '20 Ability Power\n100 Health\n\nGlory\nTakedowns grant Glory, up to 25. 10 Glory is lost on death.\nGain 5 Ability Power per Glory and 10% Move Speed at 10 or higher Glory.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 1082,
      name: 'Dark Seal',
      gold: 350
    }
  ],
  gold: {
    base: 1150,
    sell: 1050,
    total: 1500
  },
  maps: [
    11
  ],
  passives: [
    {
      name: 'Glory',
      effects: 'Gain 4 stacks for each champion kill and 2 stacks for each assist, up to a <b>maximum</b> of 25 stacks. For every stack, gain 5 ability power, up to 125 AP at <b>maximum</b> stacks. If you have at least 10 stacks, also gain 10% <b>bonus</b> movement speed. Lose 10 stacks on death. Stacks are preserved from <img src="/img/icons/dark-seal.webp" class="tip-icon" />Dark Seal.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityPower: 20,
    health: 100
  }
}
export default item