// Updated Patch 16.1 - 01/29/2026 04:27:08 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'E',
  name: 'Facebreaker',
  width: '280',
  affects: 'Enemies',
  castTime: '0.25',
  cooldown: '16 / 14.5 / 13 / 11.5 / 10',
  cost: '0',
  damageType: 'Physical damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Sett/ability-icon/e',
  notes: 'Sett will afterwards attempt to basic attack the closest target picked up by Facebreaker, prioritising champions and prioritising those in front of him.\nIf Facebreaker does not hit an enemy,  Haymaker is also unable to be cast for 0.25 seconds after the cast time.\nTargets will be pulled towards Sett\'s location in a straight line and rebound to 150 units from him back in the same line.\nThe spell indicator is slightly shorter than the actual hitbox\' rectangle length, and slightly wider than the width (note that the effects are edge-range from the hitbox rectangle).\nTargets protected by  spell shields don\'t count toward the requirement to  stun.\nThis ability will cast from wherever the caster is at the end of the cast time.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection',
  projectile: 'FALSE',
  spellEffects: 'aoe',
  spellshieldable: 'true',
  targeting: 'Direction',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Sett pulls in enemies at his front and back along the target direction, dealing physical damage and slowing them by 70% for 0.5 seconds. Facebreaker deals 125 - 250 (based on level) bonus physical damage to monsters.</p>',
      leveling: [
        {
          attribute: 'Physical Damage',
          modifiers: [
            {
              values: '50 / 70 / 90 / 110 / 130'
            },
            {
              unit: '% AD',
              values: '60'
            }
          ]
        }
      ]
    },
    {
      description: 'If Facebreaker affects at least one enemy on each side, all enemies are stunned for 1 second upon landing.'
    },
    {
      description: 'Sett becomes unable to move or attack for 0.25 seconds after Facebreaker\'s cast time.'
    }
  ]
}
export default ability
