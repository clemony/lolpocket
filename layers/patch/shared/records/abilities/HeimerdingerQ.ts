// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'Q',
  name: 'H-28Q Apex Turret',
  affects: 'Enemies',
  blurb: 'UPGRADE:  Heimerdinger instead deploys a slow-fire turret that attacks a nearby enemy champion, dealing magic damage and  slowing nearby enemies.',
  castTime: '0.25',
  cooldown: '1',
  cost: '20',
  damageType: 'Magic damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Heimerdinger/ability-icon/q',
  notes: 'The H-28Q Apex Turret has a  sight radius of 900.\nThe H-28Q Apex Turret\'s stats update every second to reflect rank ups, level ups, and changes in Heimerdinger\'s ability power.',
  projectile: 'TRUE',
  spellEffects: 'spellaoe',
  spellshieldable: 'False',
  targeting: 'Location',
  targetRange: '450',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">UPGRADE!!! - Active:</span> Heimerdinger deploys a H-28Q Apex Turret at the target location, which lasts for 8 seconds.</p>'
    },
    {
      description: 'H-28Q Apex Turret scales with UPGRADE!!!\'s rank.'
    },
    {
      description: 'See Pets for more details about the H-28Q Apex Turret.'
    }
  ]
}
export default ability
