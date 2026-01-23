// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'W',
  name: 'Repudiation',
  affects: 'Enemies',
  blurb: 'Active:  Ambessa briefly braces herself, then smashes the ground beneath her. If she performs  Drakehound\'s Step\'s  dash during Repudiation, she will smash the ground at her destination instead.',
  castTime: 'none',
  cooldown: '18 / 17 / 16 / 15 / 14',
  cost: '70',
  damageType: 'Physical damage',
  effectRadius: '325',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Ambessa braces herself for up to 0.5 seconds, during which in the first 0.225 seconds she is unable to act. After Ambessa finishes bracing, she smashes the ground beneath her, dealing physical damage to nearby enemies. Drakehound\'s Step\'s dash may be buffered during the lockout or initiated within 0.25 seconds of the lockout ending.</p>',
      leveling: [
        {
          attribute: 'Physical Damage',
          modifiers: [
            {
              values: '50 / 75 / 100 / 125 / 150'
            },
            {
              unit: '% bonus AD',
              values: '50'
            }
          ]
        }
      ]
    },
    {
      description: 'Additionally, Ambessa shields herself at the time of cast for 50 - 320 (based on level) (+ 150% bonus AD) for 1.5 seconds. If the shield mitigates any amount of damage taken from champions, large monsters, or turrets before Ambessa smashes the ground, Repudiation\'s damage is increased by 50%.',
      leveling: [
        {
          attribute: 'Increased Physical Damage',
          modifiers: [
            {
              values: '75 / 112.5 / 150 / 187.5 / 225'
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
      description: 'Ambessa will smash the ground at the end of Drakehound\'s Step\'s dash if she would finish bracing during it, and otherwise always smashes the ground from wherever she is at the end of the bracing time.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Ambessa/ability-icon/w',
  notes: 'Repudiation\'s bracing time is unaffected by the initiation of  Drakehound\'s Step dash.\nAmbessa will smash the ground from wherever she is at the end of the bracing time even if the dash ends or completes its travel before the brace is finished.\nShe will remain in place until the brace is finished in this case.\nIf the brace would however finish during the dash, due to the specific timing of the dash\'s initiation, Ambessa will smash the ground at the end of the dash instead.\nThis would apply in cases where the dash is initiated right before or shortly before the bracing is finished.\nRepudiation\'s shield buff and shield health on the health bar UI are not granted to and displayed on the caster on-cast, but rather only after a very short, inconsistent delay from the time of cast.(bug)\nThe following table refers for interactions while Ambessa is locked out:\nAmbessa will smash the ground instantly upon entering  resurrection.\n\n\nAttacking\n\nRegisters input for  Drakehound\'s Step.\n\n\nAbilities\n\nOther abilities may be cast in the last 0.275 seconds of the brace after the lockout and are otherwise disabled in the first 0.225 seconds. If  Drakehound\'s Step\'s dash was buffered during the lockout, casting other abilities overrides the buffer with the new cast input.\n\n\nMovement\n\nRegisters input for  Drakehound\'s Step.\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection',
  resource: 'Energy',
  spellEffects: 'spellaoe',
  spellshieldable: 'true',
  targeting: 'Auto'
}
export default ability
