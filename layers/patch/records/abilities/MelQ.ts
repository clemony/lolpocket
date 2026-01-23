// Updated Patch 15.24.1 - 12/26/2025 07:04:04 PM CST

const ability: Ability = {
  key: 'Q',
  name: 'Radiant Volley',
  affects: 'Enemies',
  blurb: 'Active:  Mel concentrates a bombardment of luminous bolts that explode in an area, dealing magic damage.',
  castTime: '0.25',
  cooldown: '10 / 9 / 8 / 7 / 6',
  cost: '70 / 80 / 90 / 100 / 110',
  damageType: 'Magic damage',
  effectRadius: '220 /  100',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Mel launches a barrage of luminous bolts at the target location over 0.7 seconds which distribute evenly in the area. Each bolt explodes upon landing to deal magic damage to nearby enemies, reduced to 75% against minions.</p>',
      leveling: [
        {
          attribute: 'Magic Damage per Explosion',
          modifiers: [
            {
              values: '13 / 15.5 / 18 / 20.5 / 23'
            },
            {
              unit: '% AP',
              values: '8.5'
            }
          ]
        },
        {
          attribute: 'Minion Damage per Explosion',
          modifiers: [
            {
              values: '9.75 / 11.63 / 13.5 / 15.38 / 17.25'
            },
            {
              unit: '% AP',
              values: '6.38'
            }
          ]
        },
        {
          attribute: 'Number of Bolts',
          modifiers: [
            {
              values: '6 / 7 / 8 / 9 / 10'
            }
          ]
        },
        {
          attribute: 'Total Magic Damage',
          modifiers: [
            {
              values: '78 / 108.5 / 144 / 184.5 / 230'
            },
            {
              tooltip: 'Scaling per rank:\n51 / 59.5 / 68 / 76.5 / 85% AP',
              unit: '% AP',
              values: '51 - 85'
            }
          ]
        },
        {
          attribute: 'Total Minion Damage',
          modifiers: [
            {
              values: '58.5 / 81.38 / 108 / 138.38 / 172.5'
            },
            {
              tooltip: 'Scaling per rank:\n38.25 / 44.63 / 51 / 57.38 / 63.75% AP',
              unit: '% AP',
              values: '38.25 - 63.75'
            }
          ]
        }
      ]
    },
    {
      description: 'The bolts momentarily grant sight during their travel, while the explosions grant sight over their target area. Both can see through brush and terrain.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Mel/ability-icon/q',
  notes: 'Spell shield will only block a single explosion.\nFor the given number of Radiant Volley bolts, the spread will result in the same individual areas being affected over the duration invariably.\nEach individual missile is explicitly assigned an explosion location at a small offset from the cast location. This varies by missile, which results in their combined area of effect distributing over a total radius of [explosion radius + maximum spread] = 220 + 60 = 280 units.\nThis means that the distribution area is not random.\nThe order of bolts however, which will determine the order of individual areas to be affected per explosion, is random.\nMel launching the missiles in the same arcing motion for every Radiant Volley cast does not correlate with which missile is being fired at the time.\nNote that the combined area of effect may not always be the maximum possible; this drawback diminishes with a higher number of bolts.\nThis ability will cast from wherever the caster is at the end of the cast time.',
  projectile: 'TRUE',
  resource: 'Mana',
  speed: '4500',
  spellEffects: 'spellaoe',
  spellshieldable: 'special',
  targeting: 'Location',
  targetRange: '950'
}
export default ability
