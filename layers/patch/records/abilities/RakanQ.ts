// Updated Patch 15.24.1 - 12/26/2025 07:04:13 PM CST

const ability: Ability = {
  key: 'Q',
  name: 'Gleaming Quill',
  width: '130',
  affects: 'Enemies / Allies',
  blurb: 'Active:  Rakan slings an enchanted feather in the target direction that deals magic damage to the first enemy hit.',
  castTime: '0.25',
  cooldown: '11 / 10 / 9 / 8 / 7',
  cost: '45',
  damageType: 'Magic damage',
  effectRadius: '200',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Rakan slings an enchanted feather in the target direction that deals magic damage to the first enemy hit.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '70 / 115 / 160 / 205 / 250'
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
      description: 'If the target was an enemy champion or epic monster, a radius is marked around Rakan. After 3 seconds or if an allied champion enters the radius, Rakan heals himself and nearby allied champions for 40 - 210 (based on level) (+ 55% AP).'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Rakan/ability-icon/q',
  notes: 'The trigger radius is slightly smaller than the heal radius.\n Spell shield will not prevent the marked area from being formed.\nThe heal can activate immediately after the projectile hits the target, before the healing return animation completes.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe heal will trigger and affect Rakan even if he is  untargetable.',
  projectile: 'TRUE',
  resource: 'Mana',
  speed: '1850',
  spellEffects: 'spell',
  spellshieldable: 'Special',
  targeting: 'Direction',
  targetRange: '900'
}
export default ability
