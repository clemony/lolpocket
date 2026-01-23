// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'E',
  name: 'Shuriken Flip',
  width: '120',
  affects: 'Enemies, Self',
  blurb: 'Active:  Akali  dashes backward and throws a shuriken forward that deals magic damage and marks the first enemy or  smoke cloud hit for a short time.',
  castTime: '0.4 / 0.25',
  cooldown: '16 / 14.5 / 13 / 11.5 / 10',
  cost: '30',
  damageType: 'Magic damage',
  effectRadius: 'Global',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Akali flips backward and, after the cast time, throws a shuriken in the target direction that deals magic damage to the first enemy hit.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '21 / 42 / 63 / 84 / 105'
            },
            {
              unit: '% AD',
              values: '30'
            },
            {
              unit: '% AP',
              values: '33'
            }
          ]
        }
      ]
    },
    {
      description: 'The shuriken marks and reveals the enemy or the last smoke section hit for 3 seconds, during which Shuriken Flip can be recast to consume the mark.'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Akali dashes towards the marked target or smoke section. Against enemies she deals magic damage upon arrival.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '49 / 98 / 147 / 196 / 245'
            },
            {
              unit: '% AD',
              values: '70'
            },
            {
              unit: '% AP',
              values: '77'
            }
          ]
        },
        {
          attribute: 'Total Magic Damage',
          modifiers: [
            {
              values: '70 / 140 / 210 / 280 / 350'
            },
            {
              unit: '% AD',
              values: '100'
            },
            {
              unit: '% AP',
              values: '110'
            }
          ]
        }
      ]
    },
    {
      description: 'Akali will not flip backwards if she is immobilized or grounded during the cast time. Twilight Shroud and Perfect Execution can be cast during the recast\'s dash.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Akali/ability-icon/e',
  notes: 'Akali will track the target if they change locations.\nShe will not stop tracking the target until she reaches them, as there is no maximum tracking distance.\nBoth casts count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nShuriken Flip does not interrupt Akali\'s previous move or attack orders.\nThe recast does.\nShuriken Flip cannot be recast if the target is  untargetable or is in another realm.\nAkali will be ordered to basic attack the target after the recast\'s dash ends.\nAkali will dash backwards up-to 400 units in a straight line. This dash can cross terrain if the end point is beyond it. If she would end the dash inside terrain, she will instead look for a location  in either direction left or right that is outside of terrain and dash there. If there is no such location, she will dash only up to the wall at her normal speed, ending the dash early.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe shuriken missile will fire from wherever Akali is at the end of the cast time (usually mid-dash), but always towards and reaching the location that was 825 units in front of her at the start of cast. The only exception is if she moves via  Flash, in which case the range of the missile is decreased relative to the distance she blinked.\nKilling an enemy with the shuriken will still mark the last area of the  shroud hit.\nAttempting to cast  Five Point Strike during either dash will buffer it to cast as soon as the dash ends.\nThis ability\'s damage is calculated based on the caster\'s stats at the time of its application.\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Twilight Shroud is usable.  Shuriken Flip is disabled for 10 seconds and then interrupts. Both dashes of  Perfect Execution interrupt.\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nAll the other item-actives are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Hextech Rocketbelt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Teleport  Recall\n\n\nDisabled\n\n Hexflash\n\n\nInterrupted by\n\n Flash\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects',
  projectile: 'TRUE',
  resource: 'Energy',
  speed: '1800 / 1500',
  spellEffects: 'spell',
  spellshieldable: 'True',
  targeting: 'Direction / Auto',
  targetRange: '825'
}
export default ability
