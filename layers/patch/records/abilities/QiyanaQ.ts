// Updated Patch 15.24.1 - 12/26/2025 07:04:12 PM CST

const ability: Ability = {
  key: 'Q',
  name: 'Elemental Wrath',
  width: '250 / 200',
  affects: 'Enemies, Self',
  blurb: 'Active:  Qiyana hurls her blade in the target direction that blasts in a line upon hitting an enemy or max range, dealing physical damage, reduced against enemies beyond the closest. This consumes the current Element to empower the blade with an additional effect.\nBrush: The blade creates a grass field around Qiyana that lasts a short time, granting her  invisibility and  bonus movement speed until she attacks or exits the field.\nRiver: The blast briefly  roots enemies hit, then briefly  slows them.\nTerrain: The blast deals  bonus damage against enemies below half health.',
  cooldown: '7',
  cost: '35',
  damageType: 'Physical damage',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Qiyana hurls her blade in the target direction that blasts in a line upon hitting an enemy or maximum range, consuming the current Element to empower the blade with an additional effect.</p>'
    },
    {
      description: 'Enemies hit are dealt Edge of Ixtal\'s damage, reduced to 75% against subsequent enemies beyond the closest. Elemental Wrath deals 175% damage against monsters.',
      leveling: [
        {
          attribute: 'Physical Damage',
          modifiers: [
            {
              values: '70 / 100 / 130 / 160 / 190'
            },
            {
              unit: '% bonus AD',
              values: '85'
            }
          ]
        },
        {
          attribute: 'Reduced Damage',
          modifiers: [
            {
              values: '67.5 / 86.25 / 105 / 123.75 / 142.5'
            },
            {
              unit: '% bonus AD',
              values: '63.75'
            }
          ]
        }
      ]
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Brush:</span> The blade creates a grass field around Qiyana that lasts for up to 3 seconds, granting her invisibility and 20% bonus movement speed until she attacks, casts an ability other than Terrashape, or exits the field.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">River:</span> The blast roots enemies hit for 0.5 seconds, then slows them by 20% for 1 second.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Terrain:</span> The blast deals 60% increased damage against enemies below 50% of their maximum health. Subsequent targets beyond the closest that are below the threshold take 35% increased damage instead.</p>',
      leveling: [
        {
          attribute: 'Increased Damage',
          modifiers: [
            {
              values: '112 / 160 / 208 / 256 / 304'
            },
            {
              unit: '% bonus AD',
              values: '136'
            }
          ]
        },
        {
          attribute: 'Subsequent Increased Damage',
          modifiers: [
            {
              values: '94.5 / 135 / 175.5 / 216 / 256.5'
            },
            {
              unit: '% bonus AD',
              values: '114.75'
            }
          ]
        }
      ]
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Qiyana/ability-icon/q',
  notes: 'This ability will cast from wherever the caster is at the end of the cast time.\nUsing a basic attack breaks the stealth at the start of the attack windup.',
  projectile: 'TRUE',
  speed: '1600 / 2000',
  spellEffects: 'Area of effect',
  spellshieldable: 'true',
  targeting: 'Direction'
}
export default ability
