// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'P',
  name: 'Flurry',
  affects: 'Self',
  blurb: 'Innate: After  Lee Sin casts an ability, his next 2  basic attacks within a short time gain  bonus attack speed and restore  energy.',
  icon: 'https://cdn.communitydragon.org/latest/champion/LeeSin/ability-icon/p',
  targeting: 'Passive',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> After casting an ability, Lee Sin\'s next 2 basic attacks on-hit within 3 seconds gain 40% bonus attack speed and restore energy.The first attack restores 20 / 30 / 40 (based on level) energy and the second attack restores[ 10 / 15 / 20 (based on level) energy. ][ half of the previous amount. ]</p>'
    }
  ]
}
export default ability
