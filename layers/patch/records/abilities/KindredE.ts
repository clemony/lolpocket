// Updated Patch 15.24.1 - 12/26/2025 07:03:52 PM CST

const ability: Ability = {
  key: 'E',
  name: 'Mounting Dread',
  affects: 'Enemies',
  blurb: 'Active:  Lamb fires a shot at the target enemy that briefly  slows them applies a  stack of Mounting Dread. Lamb\'s  basic attacks against this target stack Mounting Dread up to a cap.',
  castTime: '0.25',
  cooldown: '14 / 12.5 / 11 / 9.5 / 8',
  cost: '0',
  damageType: 'Physical damage',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Lamb fires a shot at the target enemy that slows them by 30% (+ 5% per 100 AP) for 1 second and marks them for 4 seconds. Her basic attacks against the marked target each apply a stack, refreshing the duration and stacking up to 3 times.</p>'
    },
    {
      description: 'The third stack directs Wolf to pounce on the target, consuming all stacks to deal additional physical damage, capped at 300 against monsters.',
      leveling: [
        {
          attribute: 'Additional Physical Damage',
          modifiers: [
            {
              values: '80 / 110 / 140 / 170 / 200'
            },
            {
              unit: '% bonus AD',
              values: '100'
            },
            {
              unit: '% (+ 0.5% per Mark) of target\'s missing health',
              values: '5'
            }
          ]
        },
        {
          attribute: 'Enhanced damage below threshold',
          modifiers: [
            {
              values: '80 / 110 / 140 / 170 / 200'
            },
            {
              unit: '% bonus AD',
              values: '100'
            },
            {
              unit: '% (+ 2%) (+ 0.75% (+ 0.2%) per Mark) of target\'s missing health',
              values: '7.5'
            }
          ]
        }
      ]
    },
    {
      description: 'The missing health portion of the additional damage will critically strike for (150% + 40%) damage if the target is below 25% - 75% (based on critical strike chance) of their maximum health and cannot critically strike otherwise. The base damage of the pounce can independently critically strike for (175% + 40%) damage.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Kindred/ability-icon/e',
  notes: 'If the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel and not pay its cost but still go on  cooldown.(bug)\nThis ability cannot target a unit with Mounting Dread stacks.\nMounting Dread will prioritize casting on the closest champion within  100 radius of the cursor, even if other eligible targets are closer.\nAs a consequence of this mechanic, Mounting Dread can still be cast on champions with Mounting Dread stacks.(bug)\nReapplying Mounting Dread through this method will apply the slow, but will not reset the stack count.\nPENDING FOR TEST: Reapplying Mounting Dread against  disguised  Neeko will reset the stack count.(bug)',
  projectile: 'TRUE',
  resource: 'Mana',
  spellEffects: 'spell',
  spellshieldable: 'True',
  targeting: 'Unit',
  targetRange: '500 : 750 (based on Marks)'
}
export default ability
