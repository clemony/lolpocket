// Updated Patch 15.24.1 - 12/26/2025 07:03:51 PM CST

const ability: Ability = {
  key: 'Q',
  name: 'Soulflare',
  width: '160',
  affects: 'Enemies',
  blurb: 'Mantra Bonus: Inner Flame deals increased damage, and fires a larger bolt that also explodes at max range.',
  cooldown: '9 / 8 / 7 / 6 / 5',
  cost: '40 / 50 / 60 / 70 / 80',
  damageType: 'Magic damage',
  effectRadius: '280',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Mantra Bonus:</span> Inner Flame deals increased damage, and fires a larger bolt that also explodes at maximum range.</p>',
      leveling: [
        {
          attribute: 'Bonus Magic Damage',
          modifiers: [
            {
              values: '40 / 100 / 160 / 220'
            },
            {
              unit: '% AP',
              values: '30'
            }
          ]
        },
        {
          attribute: 'Total Magic Damage',
          modifiers: [
            {
              values: '60 / 110 / 160 / 210 / 260'
            },
            {
              values: '40 / 100 / 160 / 220'
            },
            {
              unit: '% AP',
              values: '100'
            }
          ]
        }
      ]
    },
    {
      description: 'The explosion creates a field for 1.5 seconds that slows enemies within by 50%, which then ruptures to deal magic damage.',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '40 / 130 / 220 / 310'
            },
            {
              unit: '% AP',
              values: '50'
            }
          ]
        },
        {
          attribute: 'Total Bonus Damage',
          modifiers: [
            {
              values: '80 / 230 / 380 / 530'
            },
            {
              unit: '% AP',
              values: '80'
            }
          ]
        },
        {
          attribute: 'Total Damage',
          modifiers: [
            {
              values: '60 / 110 / 160 / 210 / 260'
            },
            {
              values: '80 / 230 / 380 / 530'
            },
            {
              unit: '% AP',
              values: '150'
            }
          ]
        }
      ]
    },
    {
      description: 'Soulflare scales with Mantra\'s rank.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Karma/ability-icon/q',
  notes: 'Spell shield will block the initial impact from either ability but will not block Soulflare\'s field damage.\nSoulflare\'s detonation radius is centered around the location of the missile as it collides, while the lingering field will always be created at the impacted enemy\'s center instead.\nSoulflare will cast from wherever Karma is at the end of the cast time.',
  projectile: 'TRUE',
  spellEffects: 'spellaoe',
  spellshieldable: 'Special',
  targeting: 'Direction'
}
export default ability
