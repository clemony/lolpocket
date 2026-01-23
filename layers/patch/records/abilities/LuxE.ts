// Updated Patch 15.24.1 - 12/26/2025 07:04:01 PM CST

const ability: Ability = {
  key: 'E',
  name: 'Lucent Singularity',
  affects: 'Enemies',
  blurb: 'Active:  Lux sends a lucent singularity to the target location that lasts for a few seconds and slows enemies within.',
  castTime: '0.25',
  cooldown: '10 / 9.5 / 9 / 8.5 / 8',
  cost: '70 / 80 / 90 / 100 / 110',
  damageType: 'Magic damage',
  effectRadius: '310 / 650',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Lux sends a lucent singularity to the target location, remaining there for 5 seconds to grant sight of the area and slow nearby enemies.</p>',
      leveling: [
        {
          attribute: 'Slow',
          modifiers: [
            {
              unit: '%',
              values: '25 / 30 / 35 / 40 / 45'
            }
          ]
        }
      ]
    },
    {
      description: 'Lucent Singularity can be recast at any time while it is in flight or within the duration, and does so automatically after the duration.'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Lux detonates the singularity, dealing magic damage to enemies within. If Lucent Singularity was recast while in flight, it will detonate upon arrival.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '65 / 115 / 165 / 215 / 265'
            },
            {
              unit: '% AP',
              values: '80'
            }
          ]
        }
      ]
    },
    {
      description: 'The slow lingers for 1 second after leaving the area. Enemies hit by Lucent Singularity\'s detonation are also slowed by the same amount for 1 second.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Lux/ability-icon/e',
  notes: 'The initial cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nThe manual recast does not.\nLucent Singularity grants  sight while also in flight.\nThe ability will not preserve the caster\'s facing direction when using  Flash and similar effects.',
  projectile: 'TRUE',
  resource: 'Mana',
  speed: '1200',
  spellEffects: 'Area of effect',
  spellshieldable: 'True',
  targeting: 'Location / Auto',
  targetRange: '1100'
}
export default ability
