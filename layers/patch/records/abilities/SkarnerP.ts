// Updated Patch 15.24.1 - 12/26/2025 07:04:14 PM CST

const ability: Ability = {
  key: 'P',
  name: 'Threads of Vibration',
  affects: 'Enemies',
  blurb: 'Innate:  Skarner\'s  basic attacks  on-hit,  Shattered Earth,  Upheaval, and  Impale apply a  stack of Quaking to enemies hit for 4 seconds, refreshing on subsequent applications and stacking up to 3 times. Enemies afflicted with 3 stacks take magic damage based on their maximum health.',
  damageType: 'Magic damage',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Skarner\'s basic attacks on-hit, Shattered Earth, Upheaval, and Impale apply a stack of Quaking to enemies hit for 4 seconds, refreshing on subsequent applications and stacking up to 3 times. Enemies afflicted with 3 stacks take magic damage equal to [ 5% - 9% (based on level) of their maximum health over the duration, capped at 100 - 300 (based on level) against monsters. ][ 0.63% - 1.13% (based on level) of their maximum health every 0.5 seconds over the duration, capped at 12.5 - 37.5 (based on level) per tick against monsters. ]</p>'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Skarner/ability-icon/p',
  notes: 'Basic attacks that are  dodged by the target or missed while Skarner is  blinded do not apply stacks of Quake.  Blocked attacks will still apply stacks.\n Spell shield prevents Quaking\'s application from  Upheaval and  Impale only.',
  spellEffects: 'proc',
  spellshieldable: 'special',
  targeting: 'Passive'
}
export default ability
