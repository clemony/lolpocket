// Updated Patch 15.24.1 - 12/26/2025 07:04:14 PM CST

const ability: Ability = {
  key: 'E',
  name: 'Nevermove',
  width: '180',
  affects: 'Enemies',
  blurb: 'Active:  Swain launches a demonic wave in the target direction.',
  castTime: '0.25',
  cooldown: '12 / 11.5 / 11 / 10.5 / 10',
  cost: '50 / 55 / 60 / 65 / 70',
  damageType: 'Magic damage',
  effectRadius: '100 / Global',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Swain launches a demonic wave in the target direction.</p>'
    },
    {
      description: 'At maximum range, the wave homes back to Swain and detonates upon the first enemy hit, dealing magic damage to nearby enemies and rooting them for 1.5 seconds, during which they are revealed. Nevermove can be recast while champions hit are rooted.',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '90 / 130 / 170 / 210 / 250'
            },
            {
              unit: '% AP',
              values: '70'
            }
          ]
        }
      ]
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Swain pulls the rooted champions over 290 units and collects a Soul Fragment from each of them. If the targets would be brought past Swain, they are instead knocked back the excess distance.</p>'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Swain/ability-icon/e',
  notes: 'Nevermove\'s missiles have their speed update to accelerate at specific times by the server. The client applies these speed increases after additional specified delays, while the hitbox behaviour itself only uses the timings noted above.\nNevermove\'s recast can be used during the cast time of other spells.\n Spell shield will block either the detonation on the first cast or the pull from the recast.\nIf the recast is blocked, the target will also prevent a Soul Fragment being collected from them.\nIf the root is not applied to or is removed from all champions, the recast does not become available.\nThe pull will interrupt  channels at the very beginning, but does not keep the target stunned for the rest of the movement.\n Channels can be started successfully during the pull, provided the previous crowd control does not prevent them still.\nThis ability will cast from wherever the caster is at the start of the cast time.',
  projectile: 'TRUE',
  resource: 'Mana',
  speed: '1125 : 1800 (based on seconds in flight) / 2000 : 2800 (based on seconds in flight)',
  spellEffects: 'Area of effect',
  spellshieldable: 'special',
  targeting: 'Direction / Auto',
  targetRange: '850'
}
export default ability
