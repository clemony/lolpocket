// Updated Patch 15.24.1 - 12/26/2025 07:04:14 PM CST

const ability: Ability = {
  key: 'Q',
  name: 'Upheaval',
  width: '180',
  affects: 'Enemies',
  blurb: 'Active: Skarner ends Shattered Earth by throwing his boulder, which explodes upon colliding with the first enemy hit, mimicking the final attack\'s damage and effects.',
  castTime: '0.25 / none',
  cooldown: '8 / 6.75 / 5.5 / 4.25 / 3',
  cost: '45',
  damageType: 'Physical damage',
  effectRadius: '300',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Skarner ends Shattered Earth by throwing his boulder in the target direction. It explodes upon colliding with the first enemy hit, applying the same damage and slow to the target and surrounding enemies as the final attack would.</p>',
      leveling: [
        {
          attribute: 'Physical Damage',
          modifiers: [
            {
              values: '10 / 20 / 30 / 40 / 50'
            },
            {
              unit: '% bonus AD',
              values: '90'
            },
            {
              unit: '% of his bonus health',
              values: '3'
            },
            {
              unit: '% of target\'s maximum health',
              values: '9'
            }
          ]
        },
        {
          attribute: 'Maximum Monster Damage',
          modifiers: [
            {
              values: '150 / 200 / 250 / 300 / 350'
            },
            {
              unit: '% bonus AD',
              values: '90'
            },
            {
              unit: '% of his bonus health',
              values: '3'
            }
          ]
        }
      ]
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Skarner/ability-icon/q',
  notes: 'General\nWhile Upheaval can deal damage to structures, the missile can\'t directly hit them. They have to be within the radius of the explosion.\n Spell shield will not prevent the explosion from occurring.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe direction of cast will be updated to go toward the cast location.\nThe  slow applied by Shattered Earth is a generic slow debuff.\nKnown Issues\nIf Upheaval hits an enemy while a new instance of Shattered Earth is active, Shattered Earth\'s effects are immediately lost.(bug)',
  projectile: 'TRUE',
  speed: '1600',
  spellEffects: 'spellaoe',
  spellshieldable: 'special',
  targeting: 'Direction'
}
export default ability
