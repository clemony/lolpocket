// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'P',
  name: 'Hextech Affinity',
  affects: 'Self',
  blurb: 'Innate:  Heimerdinger gains  bonus movement speed while near allied  towers and  turrets he deploys.',
  effectRadius: '300',
  icon: 'https://cdn.communitydragon.org/latest/champion/Heimerdinger/ability-icon/p',
  notes: 'No additional details.',
  targeting: 'Passive',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Heimerdinger gains 20% bonus movement speed while near an allied turret or a H-28G Evolution Turret or H-28Q Apex Turret deployed by him.</p>'
    }
  ]
}
export default ability
