// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  key: 'W',
  name: 'Purge',
  affects: 'Enemies',
  blurb: 'Passive:  Urgot\'s other abilities mark enemy  champions hit for a few seconds, only one enemy can be marked at a time. At max rank, Purge lasts indefinitely and becomes a toggled ability.',
  castTime: 'none',
  cooldown: '12 / 9 / 6 / 3 / 0',
  cost: '40 / 30 / 20 / 10 / 0',
  damageType: 'Physical damage',
  effectRadius: '490',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Urgot\'s other abilities mark enemy champions hit for 5 seconds. Only one enemy can be marked at a time. Additionally, at maximum rank, Purge lasts indefinitely and becomes a toggled ability.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Urgot equips his machine gun for 4 seconds, granting ghosting to minions and non-epic monsters around him and autonomously firing at the nearest enemy at a fixed 3.0 attack speed, prioritizing marked enemy champions and refreshing the mark with every attack. While firing, Urgot is able to move and gains 40% slow resist, but his base movement speed is reduced by 125.</p>'
    },
    {
      description: 'Attacks with Purge deal modified physical damage, with a minimum threshold of 50 against monsters and minions, and cannot critically strike. Each attack applies on-hit effects, with on-hit damage reduced to 50% effectiveness, and triggers on-attack effects. Urgot cannot perform attacks while affected by disarming crowd control.',
      leveling: [
        {
          attribute: 'Modified Physical Damage',
          modifiers: [
            {
              values: '12'
            },
            {
              tooltip: 'Scaling per rank:\n20 / 23.5 / 27 / 30.5 / 34% AD',
              unit: '% AD',
              values: '20 - 34'
            }
          ]
        }
      ]
    },
    {
      description: 'Purge can be recast after 0.5 seconds within the duration, and does so automatically afterwards.'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Urgot ends Purge.</p>'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Urgot/ability-icon/w',
  notes: 'Autonomous attack range scales with bonus attack range.\nPurge uses  edge range for enemy targets only; Its range is center-to-edge.\nUrgot\'s  size increasing does not increase its range.\nThe initial cast and the manual recast count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nBefore maximum rank, if Purge is not manually recasted, the effect will end without being considered as an ability activation.\nUrgot\'s facing direction during Purge is in the direction he\'s moving and not in the direction of his attack target.\nBefore maximum rank, if continuously attacking without being interrupted or interrupting or canceling the cast, Urgot will attack 13 times.\nThe bolts are considered basic attacks and thus apply  life steal at full efficiency.\nDuring Purge, Urgot\'s  attack range is reduced[ to 150 ][ by 200 ]and his attack commands instead issue movement commands to walk into the respective range of his target.\n Slow resist does not modify flat reductions in movement speed.\nPercentage  slows apply after the flat movement reduction.\nPurge\'s attacks do not interact with Urgot\'s  basic attack timer.\nAfter ending Purge, he can usually attack again immediately.\nIf Urgot is  berserked or  taunted, he will fire at the unit he is forced to attack.\nPurge will fire while Urgot is  dashing (e.g. while taking  Thresh\'s  Dark Passage), with the exception of  Disdain\'s dash.\nEach shot counts as a separate hit for effects such as  Electrocute,  Muramana\'s Shock, and  Eclipse\'s Ever Rising Moon.\nPurge will apply  Runaan\'s Hurricane on every shot at 100% of the listed damage.\nOn-hit damage applied by the bolts are still reduced by Purge.\nThe movement speed stat tooltip erroneously reads that the bonus movement speed is being reduced before base movement speed.(note)',
  projectile: 'TRUE',
  resource: 'Mana',
  speed: '2500',
  spellEffects: 'basic',
  spellshieldable: 'false',
  targeting: 'Auto'
}
export default ability
