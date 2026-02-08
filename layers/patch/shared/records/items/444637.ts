// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 444637,
  name: 'Demonic Embrace',
  nicknames: [
    'helmet'
  ],
  description: '80 Ability Power\n700 Health\n\nSinister Pact\nGain +1.5% Ability Power and 1.5% Move Speed per 100 Missing Health, up to 45%.',
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
      name: 'Sinister Pact',
      effects: 'Increase your ability power by 1.5% ap and gain 1.5% <b>bonus</b> movement speed for every 100 <b>current</b> health you are missing, up to an increase of 45% ability power and 45% <b>bonus</b> movement speed at 3000 <b>current</b> health missing.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityPower: 80,
    health: 700
  }
}
export default item