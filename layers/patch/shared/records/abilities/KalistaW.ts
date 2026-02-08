// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'W',
  name: 'Sentinel',
  affects: 'Enemies',
  blurb: 'Passive - Soul-Marked: While  Kalista and her  Oathsworn are  tethered, their basic attacks and  Pierce apply a Soul-Mark to their targets for a few seconds. If both Soul-Marks are applied to the same target, they take bonus magic damage.',
  castTime: '0.5',
  cooldown: '30',
  cost: '0',
  damageType: 'Magic damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Kalista/ability-icon/w',
  notes: 'The damage is dealt  on-attack of Kalista\'s basic attack if she applies the second mark. If the Oathsworn does so instead, the damage is dealt on-hit of their basic attack.\nSoul-Marked\'s bonus damage is credited to Kalista and will benefit from both her  magic penetration and spell effects.\nIf her  Oathsworn ally scores a kill using Soul-Marked\'s bonus damage they will get a message stating \'Kill Secured\' in place of the usual gold pop-up (the gold itself is credited to Kalista).\nThe Sentinel\'s  sight reveal on enemy  champions is accredited for assists and potentially kills (if they die shortly after being spotted).\nIt does not reveal  stealthed targets.\nSentinel will cast from wherever Kalista is at the end of the cast time.\nPENDING FOR TEST: Soul Mark\'s interaction with parrying effects ( dodge,  block,  blind).\nPENDING FOR TEST: If Pierce kills the target by Soul-Mark\'s additional damage, it will/will not continue.',
  onTargetCdStatic: '10',
  rechargeRate: '90 / 80 / 70 / 60 / 50',
  spellEffects: 'proc',
  targeting: 'Location',
  targetRange: '1400 / 5000',
  tetherRadius: '1100',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Passive - Soul-Marked:</span> While Kalista and her Oathsworn are tethered, their basic attacks and Pierce apply a Soul-Mark to the target hit for 4 seconds.</p>'
    },
    {
      description: 'If both Kalista\'s and the Oathsworn\'s Soul-Mark are applied to the same enemy, the marks are consumed to deal magic damage to the target, capped against non-champions. Soul-Mark cannot affect an enemy more than once every few seconds.',
      leveling: [
        {
          attribute: 'Bonus Magic Damage',
          modifiers: [
            {
              unit: '% of target\'s maximum health',
              values: '10 / 12 / 14 / 16 / 18'
            }
          ]
        },
        {
          attribute: 'Maximum Non-Champion Damage',
          modifiers: [
            {
              values: '100 / 125 / 150 / 175 / 200'
            }
          ]
        }
      ]
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Kalista summons a Sentinel that patrols back and forth on a path along the target direction, granting sight of its surroundings as it travels.</p>'
    },
    {
      description: 'Kalista periodically stocks a Sentinel charge, up to a maximum of 2.'
    },
    {
      description: 'See Pets for more details about Sentinels.'
    }
  ]
}
export default ability
