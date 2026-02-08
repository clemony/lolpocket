// Updated Patch 16.1 - 01/29/2026 04:27:14 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'P',
  name: 'Living Vengeance',
  affects: 'Self',
  blurb: 'Innate: When  Varus kills an enemy, he gains  bonus attack speed,  bonus attack damage, and  ability power for a few seconds. The amount is based on his other sources of  bonus attack speed, and is increased on an enemy  champion  takedown.',
  icon: 'https://cdn.communitydragon.org/latest/champion/Varus/ability-icon/p',
  notes: 'Living Vengeance\'s buff can be refreshed and is triggered when Varus kills any unit.\nThe increased bonus gained from taking down an enemy champion takes priority over the lesser bonus. That bonus can only be refreshed by scoring another takedown.',
  targeting: 'Passive',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> When Varus kills an enemy, he gains 10% / 15% / 20% (based on level) bonus attack speed as well as bonus attack damage and ability power equal to 10% bonus attack speed for 5 / 7 / 9 / 11 (based on level) seconds.</p>'
    },
    {
      description: 'This is increased to 50% bonus attack speed and bonus attack damage and ability power equal to 25% bonus attack speed upon scoring a champion takedown.'
    },
    {
      description: 'While Living Vengeance\'s bonus is active, Varus\' attack speed cap is increased to 3.33.'
    }
  ]
}
export default ability
