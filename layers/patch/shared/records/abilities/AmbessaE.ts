// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'E',
  name: 'Lacerate',
  affects: 'Enemies',
  blurb: 'Active:  Ambessa spins her twin drakehounds around her, dealing physical damage to enemies hit and  slowing them briefly.',
  castTime: 'none',
  cooldown: '13 / 12 / 11 / 10 / 9',
  cost: '70',
  damageType: 'Physical damage',
  effectRadius: '325',
  icon: 'https://cdn.communitydragon.org/latest/champion/Ambessa/ability-icon/e',
  notes: 'Ambessa will cast the second spin of Lacerate from wherever she is at the end of the dash.\nShe will spin a second time even if the dash is interrupted.\nThe following table refers for interactions while Ambessa is locked out:\n\n\nAttacking\n\nRegisters input for  Drakehound\'s Step.\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nRegisters input for  Drakehound\'s Step.\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nN/A',
  resource: 'Energy',
  spellEffects: 'spellaoe',
  spellshieldable: 'true',
  targeting: 'Auto',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Ambessa enters a 0.225-second lockout and spins her twin drakehounds around her to deal physical damage to nearby enemies and slow them by 99% decaying over 1 second. Drakehound\'s Step\'s dash may be buffered during the lockout or initiated within 0.275 seconds of the lockout ending; in either case, she will spin a second time at the end of the dash to apply the same effects at no additional cost.</p>',
      leveling: [
        {
          attribute: 'Physical Damage',
          modifiers: [
            {
              values: '40 / 60 / 80 / 100 / 120'
            },
            {
              unit: '% bonus AD',
              values: '50'
            }
          ]
        },
        {
          attribute: 'Total Physical Damage',
          modifiers: [
            {
              values: '80 / 120 / 160 / 200 / 240'
            },
            {
              unit: '% bonus AD',
              values: '100'
            }
          ]
        }
      ]
    }
  ]
}
export default ability
