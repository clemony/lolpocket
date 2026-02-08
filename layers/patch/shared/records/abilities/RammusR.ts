// Updated Patch 16.1 - 01/29/2026 04:27:02 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'R',
  name: 'Soaring Slam',
  affects: 'Enemies',
  blurb: 'Active:  Rammus  leaps to the target location with  Cc-immunity, dealing magic damage to nearby enemies and briefly  slowing them.',
  castTime: 'None',
  cooldown: '120 / 105 / 90',
  cost: '100',
  damageType: 'Magic damage',
  effectRadius: '400 / 200 / 400',
  icon: 'https://cdn.communitydragon.org/latest/champion/Rammus/ability-icon/r',
  notes: 'Spell shield will block the impact (including with  Powerball) but not each aftershock.\nRammus is required to have had at least 461.5 movement speed average over the last second to be able to cast Soaring Slam further than its minimum cast range and thereby deal the increased damage at the epicenter.\nThe maximum increased center damage is reachable once  Rammus has had at least 1307.69 movement speed average for the past second.\nSoaring Slam will not impact nor generate aftershocks if the dash is interrupted.\nThe following table refers for interactions while Rammus is dashing:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath',
  resource: 'Mana',
  speed: '900 / 2000',
  spellEffects: 'AoE',
  spellshieldable: 'special',
  targeting: 'Location',
  targetRange: '800 OR 150% movement speed',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Rammus leaps to the target location with immunity to crowd control. Upon arrival, he creates an impact that deals magic damage to nearby enemies and slows them for 1.5 seconds.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '150 / 250 / 350'
            },
            {
              unit: '% AP',
              values: '60'
            }
          ]
        },
        {
          attribute: 'Slow',
          modifiers: [
            {
              unit: '%',
              values: '30 / 40 / 50'
            }
          ]
        }
      ]
    },
    {
      description: 'If Soaring Slam was cast during Powerball, enemies within the epicenter are also knocked up for 0.75 seconds and are dealt Powerball\'s damage. Powerball will not collide with enemies during the dash, and its channel will be maintained for the dash and end afterwards.'
    },
    {
      description: 'The impact causes 3 aftershocks to burst from the area over 3.5 seconds, each one applying and refreshing the duration of the initial slow.'
    },
    {
      description: 'Soaring Slam\'s damage affects structures and is doubled against turrets.'
    }
  ]
}
export default ability
