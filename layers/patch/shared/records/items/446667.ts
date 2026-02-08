// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 446667,
  name: 'Radiant Virtue',
  nicknames: [
    'rv'
  ],
  description: '400 Health\n35 Armor\n35 Magic Resist\n12% Heal and Shield Power\n\nGuiding Light\nUpon casting your Ultimate you Transcend, increasing your Max Health by  for 9s. While Transcended, you and allies within 1200 range of you heal for  () over the duration (0s).',
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
      name: 'Guiding Light',
      cooldown: '30',
      effects: 'Upon casting your ultimate, you <i>Transcend</i> for 9 seconds. While <i>Transcended</i>, increase your <b>maximum</b> health by 12.5% and cause you and all allies within 1200 units to <img src="/img/icons/heal.webp" class="tip-icon light:invert" />heal for 3% of your <b>maximum</b> health upon you <i>Transcending</i> and every 3 seconds thereafter, for a total healing of 12% of your <b>maximum</b> health.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    armor: 35,
    healAndShieldPower: 12,
    health: 400,
    magicResistance: 35
  }
}
export default item