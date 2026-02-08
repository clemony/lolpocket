// Updated Patch 16.1 - 01/29/2026 04:26:59 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'E',
  name: 'Command: Protect',
  width: '160',
  affects: 'Enemies, Allies',
  blurb: 'Passive:  The Ball grants bonus  armor and  magic resist to the unit it is attached to.',
  castTime: 'none',
  cooldown: '9',
  cost: '60',
  damageType: 'Magic damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Orianna/ability-icon/e',
  notes: 'The Ball does not grant  sight while in flight, but the sound effect of striking an enemy is audible through the Fog of War.\nOrianna cannot cast her other abilities while the The Ball is moving to the target with Command: Protect.\nOrianna gains Command: Protect\'s bonus resistances whenever The Ball is attached to her (even if she didn\'t self-cast).\nThe Ball will remain where Command: Protect\'s target ally died or, if they died or became  untargetable before The Ball reaches them, it will instead snap back to Orianna.\nThe Ball will return to Orianna if Command: Protect\'s target ally moves too far away from her (The Ball will always respect its leash range, which is increased by 100 when attached to allied champions).\nThe Ball will join Command: Protect\'s target ally in  stealth if they are affected by it when Orianna targets them.\nThe Ball snaps back to Orianna upon being intercepted by  projectile-blocking effects.\nCommand: Protect has a  forgiveness radius of 175 units.',
  projectile: 'TRUE',
  resource: 'Mana',
  speed: '1850',
  spellEffects: 'aoe',
  spellshieldable: 'True',
  targeting: 'Unit',
  targetRange: '1120',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Passive:</span> The Ball grants bonus armor and bonus magic resistance to the unit it is attached to.</p>',
      leveling: [
        {
          attribute: 'Bonus Resistances',
          modifiers: [
            {
              values: '6 / 12 / 18 / 24 / 30'
            }
          ]
        }
      ]
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Orianna commands The Ball to fly to herself or the target allied champion and attach itself to the target, dealing magic damage to enemies it passes through and granting the target a shield for 2.5 seconds upon arrival.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '60 / 90 / 120 / 150 / 180'
            },
            {
              unit: '% AP',
              values: '30'
            }
          ]
        },
        {
          attribute: 'Shield Strength',
          modifiers: [
            {
              values: '55 / 90 / 125 / 160 / 195'
            },
            {
              unit: '% AP',
              values: '45'
            }
          ]
        }
      ]
    }
  ]
}
export default ability
