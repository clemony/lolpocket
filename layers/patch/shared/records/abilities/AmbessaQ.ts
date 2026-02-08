// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'Q',
  name: 'Sundering Slam',
  width: '40',
  affects: 'Enemies',
  blurb: 'Active:  Ambessa slams her twin drakehounds in a line in the target direction, dealing physical damage to enemies hit. The damage is  increased against the first enemy.',
  castTime: 'none',
  cooldown: '14 / 13 / 12 / 11 / 10',
  cost: '70',
  damageType: 'Physical damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Ambessa/ability-icon/q',
  notes: 'Sundering Slam will slam from wherever Ambessa is at the end of the lockout.\nIf her facing direction changes before the lockout completes, the slam will be performed towards the new direction.\nThe following table refers for interactions while Ambessa is locked out:\n\n\nAttacking\n\nRegisters input for  Drakehound\'s Step.\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nRegisters input for  Drakehound\'s Step.\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection',
  projectile: 'FALSE',
  resource: 'Energy',
  spellEffects: 'spellaoe',
  spellshieldable: 'true',
  targeting: 'Direction',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Ambessa enters a 0.225-second lockout, at the end of which she slams her twin drakehounds in a line in the target direction, dealing physical damage to enemies hit. The damage is doubled against the first enemy hit. Drakehound\'s Step\'s dash may be buffered during the lockout or initiated within 0.275 seconds of the lockout ending, and Ambessa will perform the dash after her slam completes.</p>',
      leveling: [
        {
          attribute: 'Physical Damage',
          modifiers: [
            {
              values: '25 / 37.5 / 50 / 62.5 / 75'
            },
            {
              unit: '% bonus AD',
              values: '45'
            },
            {
              tooltip: 'Scaling per rank:\n1 / 1.5 / 2 / 2.5 / 3% (+ 2% per 100 bonus AD) of the target\'s maximum health',
              unit: '% (+ 2% per 100 bonus AD) of the target\'s maximum health',
              values: '1 - 3'
            }
          ]
        },
        {
          attribute: 'Increased Physical Damage',
          modifiers: [
            {
              values: '50 / 75 / 100 / 125 / 150'
            },
            {
              unit: '% bonus AD',
              values: '90'
            },
            {
              tooltip: 'Scaling per rank:\n2 / 3 / 4 / 5 / 6% (+ 4% per 100 bonus AD) of the target\'s maximum health',
              unit: '% (+ 4% per 100 bonus AD) of the target\'s maximum health',
              values: '2 - 6'
            }
          ]
        }
      ]
    },
    {
      description: 'Against monsters, Sundering Slam deals 150 bonus physical damage and the damage based on their health ratio is capped at 100 - 300 (based on level).'
    }
  ]
}
export default ability
