// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'E',
  name: 'Wall Dive',
  affects: 'Enemies',
  blurb: 'Active:  Camille  dashes, dealing physical damage to enemies near the landing location. Dash range is doubled towards enemy  champions.',
  castTime: 'none',
  cooldown: '16 / 15 / 14 / 13 / 12',
  cost: '70',
  damageType: 'Physical damage',
  effectRadius: '130',
  icon: 'https://cdn.communitydragon.org/latest/champion/Camille/ability-icon/e',
  notes: 'Wall Dive count as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nDespite what one might assume from a wall-jumping ability, Wall Dive can be used to go through terrain (including the terrain she is bound to).\nCasting  Flash during Wall Dive\'s dash will interrupt it but Camille will affect enemies around the new location.\nWall Dive is disabled while  grounded or  rooted.\nWall Dive will not automatically cast from movement or attack commands in both cases. While grounded, however, Camille is able to move while bound. She may still dash away from her current location once the grounding finishes.\nCamille will only gain a range indicator towards each valid champion within the extended dash range (800), but will still gain the extended dash range without the indicator against enemies within the 1400 range.\nShe does not have to  see any enemy champions to gain the range indicator or extended range.\n Displacement immunity will not resist the application of the  stun.\nIf  Tactical Sweep is cast during Wall Dive\'s dash on its opposite direction, the target wil be  knockback further and to a different direction.(bug)\nThe following table refers for interactions while Camille is bound to terrain:\nWhen Camille is interrupted, she will automatically cast Wall Dive. The only exception is if she was interrupted by casting  Flash or  Recall, in which case Wall Dive cancels.\n\n\nAttacking\n\nInitiates the dash towards attack target.\n\n\nAbilities\n\n Precision Protocol and  Tactical Sweep are usable.  The Hextech Ultimatum is disabled.\n\n\nMovement\n\nInitiates the dash towards the commanded location.\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\nAll items interrupt\n\n\nConsumables\n\nInterrupts\n\n\nSpells\n\nUsable\n\nN/A\n\n\nDisabled\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Teleport  Hexflash\n\n\nInterrupted by\n\n Flash  Recall\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects',
  speed: '1050 + 100% movement speed',
  spellEffects: 'spellaoe',
  spellshieldable: 'true',
  targeting: 'Direction',
  targetRange: '400 / 800',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Camille dashes in the target direction, dealing physical damage to enemies near the landing location. Wall Dive\'s range is doubled towards enemy champions within 1400 units. Camille grants ghosting to non-champions she passes through for 4 seconds.</p>',
      leveling: [
        {
          attribute: 'Physical Damage',
          modifiers: [
            {
              values: '60 / 90 / 120 / 150 / 180'
            },
            {
              unit: '% bonus AD',
              values: '75'
            }
          ]
        }
      ]
    },
    {
      description: 'Camille stops prematurely upon colliding with an enemy champion, knocking back all nearby enemy champions, though not through terrain, as well as stunning them for 0.75 seconds, while also gaining bonus attack speed for 5 seconds.',
      leveling: [
        {
          attribute: 'Bonus Attack Speed',
          modifiers: [
            {
              unit: '%',
              values: '40 / 45 / 50 / 55 / 60'
            }
          ]
        }
      ]
    },
    {
      description: 'Wall Dive may be also cast with movement or attack commands. Other abilities besides The Hextech Ultimatum can be cast while grappled or during the dash.'
    }
  ]
}
export default ability
