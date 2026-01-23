// Updated Patch 15.24.1 - 12/26/2025 07:03:48 PM CST

const ability: Ability = {
  key: 'Q',
  name: 'Howling Gale',
  width: '240',
  affects: 'Enemies',
  blurb: 'Active:  Janna summons a whirlwind at her current location that matures over a short time, increasing its range, speed, damage, and knock up duration.',
  castTime: 'none',
  cooldown: '14',
  cost: '90 / 95 / 100 / 105 / 110',
  damageType: 'Magic damage',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Janna summons a whirlwind at her current location that charges up over 3 seconds, increasing its range, speed, damage, and knock up duration every second over the duration. Howling Gale\'s direction is determined by this cast.</p>',
      leveling: [
        {
          attribute: 'Minimum Magic Damage',
          modifiers: [
            {
              values: '55 / 90 / 125 / 160 / 195'
            },
            {
              unit: '% AP',
              values: '50'
            }
          ]
        },
        {
          attribute: 'Bonus Damage Per Second',
          modifiers: [
            {
              values: '10 / 15 / 20 / 25 / 30'
            },
            {
              unit: '% AP',
              values: '10'
            }
          ]
        },
        {
          attribute: 'Maximum Magic Damage',
          modifiers: [
            {
              values: '85 / 135 / 185 / 235 / 285'
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
      description: 'Howling Gale can be recast at any time within the duration, and does so automatically after the duration.'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Janna launches the whirlwind in the direction she targeted over 1.25 seconds, dealing magic damage to enemies hit and knocking them up for 0.5 - 1.25 (based on seconds charged) seconds.</p>'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Janna/ability-icon/q',
  notes: 'The initial cast and the manual recast count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nThe storm does not interact with enemy units that stand on top of it while it is charging.',
  projectile: 'TRUE',
  resource: 'Mana',
  speed: '880 : 1408 (based on seconds charged)',
  spellEffects: 'area of effect',
  spellshieldable: 'True',
  targeting: 'Direction / Auto'
}
export default ability
