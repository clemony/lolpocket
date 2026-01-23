// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'P',
  name: 'Blaze',
  affects: 'Enemies',
  blurb: 'Innate:  Brand\'s  abilities apply a  stack of Ablaze to enemies hit. Subsequent abilities used against a target with Ablaze are empowered. Killing an enemy afflicted with Ablaze or with an ability restores  mana.',
  damageType: 'Magic damage',
  effectRadius: '475',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Brand\'s abilities apply a stack of Ablaze to enemies hit for 4 seconds, stacking up to 3 times and refreshing the duration of all stacks with each application. Subsequent abilities used against a target with Ablaze are empowered. Killing an enemy afflicted with Ablaze or any enemy with an ability restores 20 - 40 (based on level) mana.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Ablaze:</span> While afflicted with Ablaze, the target is dealt magic damage equal to[ 2% of their maximum health over 4 seconds. ][ 0.167% of their maximum health every 0.25 seconds over 4 seconds. ]Each stack of Ablaze deals damage to the target individually and applies their damage ticks dependent on the time they were applied, even if the duration of all the stacks are refreshed. Ablaze deals 265% damage per tick to monsters; this damage is capped at[ 10 / 20 / 30 (based on Ablaze stacks) per tick against non-epic monsters and 20 / 40 / 60 (based on Ablaze stacks) per tick against epic monsters. ][ a total of 160 / 320 / 480 (based on Ablaze stacks) against non-epic monsters and 320 / 640 / 960 (based on Ablaze stacks) against epic monsters. ]</p>'
    },
    {
      description: 'Upon applying 3 stacks of Ablaze to a large monster or enemy champion, the fire becomes unstable, causing it form a fiery ring around the target that grants sight within its radius and, after 2 seconds, consumes their stacks to explode. All enemies within the detonation are applied a stack of Ablaze and dealt magic damage equal to 8% - 12% (based on level) (+ 2% per 100 AP) of their maximum health, capped at 270 / 355 / 440 / 525 (based on level) against monsters.'
    },
    {
      description: 'Brand cannot stack Ablaze more than once on enemies that have had a ring explode from them in the last 4 seconds.'
    },
    {
      description: 'The ring will form even if the target dies to the ability applying the third stack, and will still trigger the explosion if the target dies before it.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Brand/ability-icon/p',
  notes: 'Ablaze is a  debuff that persists through  death.\nAblaze\'s damage cap against a  monster is applied after the increased monster damage.\nThe explosion is not considered a  tether effect and will not affect  untargetable targets, even if the explosion originated from them.\nGiven the behavior of the stacking mechanic, the damage over time will deal varying amounts of damage based on the time the stacks were applied:\nAt sub-optimal applied times, 2 stacks will deal a minimum of 6% maximum health damage over 4 seconds, but will deal 7% maximum health at optimal applied times.\nAgainst small-medium units 3 stacks will deal a minimum of 9% maximum health at sub-optimal times, but 11% maximum health at optimal times. If these stacks are further refreshed at optimal times they can deal up to 12% maximum health over 4 seconds.\nThe burn is  persistent damage and the explosion is  area damage.',
  spellEffects: 'Special',
  spellshieldable: 'True',
  targeting: 'Passive'
}
export default ability
