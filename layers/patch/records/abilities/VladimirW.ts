// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  key: 'W',
  name: 'Sanguine Pool',
  affects: 'Self, Enemies',
  blurb: 'Active:  Vladimir sinks into a pool of blood for a short time, becoming  untargetable,  ghosted, and gaining  bonus movement speed that decays over a shorter duration. He cannot use basic attacks and abilities, but can still move.',
  castTime: 'none',
  cooldown: '28 / 25 / 22 / 19 / 16',
  cost: '0',
  damageType: 'Magic damage',
  effectRadius: '350',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Vladimir sinks into a pool of blood, becoming untargetable and ghosted for 2 seconds. He also gains 37.5% bonus movement speed that decays exponentially over 1 second.</p>'
    },
    {
      description: 'Enemies within the pool are dealt magic damage every 0.5 seconds over the duration and are slowed by 40%. Vladimir heals himself for 30% of the pre-mitigation damage dealt, reduced to 18% against minions.',
      leveling: [
        {
          attribute: 'Magic Damage Per Tick',
          modifiers: [
            {
              values: '20 / 33.75 / 47.5 / 61.25 / 75'
            },
            {
              unit: '% bonus health',
              values: '3.75'
            }
          ]
        },
        {
          attribute: 'Total Magic Damage',
          modifiers: [
            {
              values: '80 / 135 / 190 / 245 / 300'
            },
            {
              unit: '% bonus health',
              values: '15'
            }
          ]
        }
      ]
    },
    {
      description: 'Vladimir cannot use basic attacks nor abilities during Sanguine Pool, but he can still move. If Tides of Blood is charging at the time of Sanguine Pool\'s activation, that ability may still be recast.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Vladimir/ability-icon/w',
  notes: 'The first tick damages immediately so the final one occurs 0.5 seconds before Vladimir becomes targetable again.\nThere is an extra damage tick for 0 damage when Vladimir becomes targetable again, triggering the same spell effects as the normal ticks (except those which require damage greater than 0 being dealt).\nThis will trigger turret aggro onto Vladimir if an enemy champion is still within the effect radius when Sanguine Pool ends.\nThe  slow ends immediately once affected enemies get out of range.\nVladimir can still use summoner spells and item actives during Sanguine Pool.\nWhile unable to attack, Vladimir can still input attack commands - causing him to follow his attack target.\nVladimir\'s  attack range is reduced[ to 0 ][ by 450 ]while pooled - causing him to attempt to move right up to his attack target.',
  resource: 'Current health',
  spellEffects: 'aoedot',
  targeting: 'Auto'
}
export default ability
