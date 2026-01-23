// Updated Patch 15.24.1 - 12/26/2025 07:04:07 PM CST

const ability: Ability = {
  key: 'P',
  name: 'Darkness Rise',
  affects: 'Self / Enemies',
  blurb: 'Innate:  Mordekaiser\'s basic attacks deal bonus magic damage.',
  damageType: 'Magic damage',
  effectRadius: '375',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Mordekaiser\'s basic attacks are empowered to deal 40% AP bonus magic damage on-hit.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Mordekaiser generates a stack for each enemy champion or large monster damaged by his basic attacks or basic abilities, lasting for 4 seconds, refreshing on subsequent triggers, and stacking up to 3 times. At 3 stacks, he gains Darkness Rise.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Darkness Rise:</span> Mordekaiser gains 3% / 6% / 9% (based on level) bonus movement speed and deals[ 5 (+ 30% AP) (+ 1% - 5% (based on level) of target\'s maximum health) magic damage every second ][ 0.625 (+ 3.75% AP) (+ 0.13% - 0.63% (based on level) of target\'s maximum health) magic damage every 0.125 seconds ]to nearby enemies. Against monsters, the damage is capped at[ 40 - 200 (based on level) per second. ][ 5 - 25 (based on level) per 0.125 seconds. ]</p>'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Mordekaiser/ability-icon/p',
  notes: 'Mordekaiser has a stack counter under his health bar that is not visible to other champions. It will light up when the maximum effect is active.\nDarkness Rise\'s area damage alone does not refresh Darkness Rise\'s buff.\nIf Darkness Rise is activated through either  Obliterate or  Death\'s Grasp, it will be treated as the same cast instance as the triggering spell.(bug)\nUnder these conditions, Darkness Rise will fail to interact with effects such as  Conqueror, but will interact with effects such as  Focused Will, which would normally not interact with innate abilities.(bug)[3]\nDarkness Rise\'s damage will be grouped with the triggering spell\'s damage in the death recap.(bug)[4]',
  spellEffects: 'aoedot',
  targeting: 'Passive'
}
export default ability
