// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'W',
  name: 'Heart Zapper',
  affects: 'Self, Enemies',
  blurb: 'Active:  Dr. Mundo charges up a defibrillator for a few seconds, continually dealing magic damage to nearby enemies and storing a portion of the post-mitigation damage he takes.',
  castTime: 'None / None',
  cooldown: '17 / 16.5 / 16 / 15.5 / 15',
  cost: '0',
  damageType: 'Magic damage',
  effectRadius: '325',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Dr. Mundo charges up a defibrillator for up to 3 seconds, dealing magic damage every 0.25 seconds to nearby enemies and storing 80% - 95% (based on level) of post-mitigation damage he takes as grey health on his health bar, reduced to 25% after the first 0.75 seconds.</p>',
      leveling: [
        {
          attribute: 'Magic Damage per Tick',
          modifiers: [
            {
              values: '5 / 8.75 / 12.5 / 16.25 / 20'
            }
          ]
        },
        {
          attribute: 'Total Magic Damage',
          modifiers: [
            {
              values: '80 / 140 / 200 / 260 / 320'
            }
          ]
        }
      ]
    },
    {
      description: 'Heart Zapper can be recast after 0.5 seconds within the duration, and does so automatically after the duration.'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Dr. Mundo detonates the defibrillator, dealing magic damage to nearby enemies and healing for 50% of grey health, increased to 100% if at least one enemy champion or large monster is hit.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '20 / 35 / 50 / 65 / 80'
            },
            {
              unit: '% bonus health',
              values: '7'
            }
          ]
        }
      ]
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/DrMundo/ability-icon/w',
  notes: 'The charge up applies  persistent area damage and the detonation deals  area damage.\n Spell shield will only block the detonation.\nHeart Zapper will occasionally deal an additional tick of damage.(bug)\nHeart Zapper and its recast will buffer and cast at the end of  Infected Bonesaw\'s cast time if attempted to cast during it.\nAs with all buffering of this type, another input such as a movement command can override the buffering of the spell again.',
  resource: 'Current health',
  spellEffects: 'special',
  spellshieldable: 'special',
  targeting: 'Auto'
}
export default ability
