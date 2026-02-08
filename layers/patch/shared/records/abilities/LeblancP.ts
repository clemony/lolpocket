// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'P',
  name: 'Mirror Image',
  affects: 'Self',
  blurb: 'Innate: When  LeBlanc reaches low health, she creates a  clone of herself and together they enter brief  invisibility.',
  icon: 'https://cdn.communitydragon.org/latest/champion/Leblanc/ability-icon/p',
  notes: 'The  clone has a leash range.\nUsing a basic attack breaks the stealth at the end of the attack windup.',
  targeting: 'Passive',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Periodically, when LeBlanc is damaged to 40% maximum health, she creates a clone of herself, after which they both instantly become invisible for 1 second.</p>'
    },
    {
      description: 'The clone can cast basic attacks with no effect and lasts 8 seconds. Upon spawning, it starts moving up to 1900 units toward a random direction in front of LeBlanc\'s movement, determined at the moment of its spawning.'
    },
    {
      description: 'See Pets for more details about LeBlanc\'s clone.'
    }
  ]
}
export default ability
