// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'R',
  name: 'Chum the Waters',
  affects: 'Enemies',
  blurb: 'Active:  Fizz tosses a lure in the target direction that lands on the ground, attracting a shark that erupts after a short delay, dealing magic damage to nearby enemies,  knocking them back and  slowing them.The farther the lure flies, the larger the shark that is attracted, increasing the effects.',
  castTime: '0.25',
  cooldown: '120 / 100 / 80',
  cost: '100',
  damageType: 'Magic damage',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Fizz throws down a lure at the target location that attracts a shark, granting sight of the area before it emerges to chomp at the lure after 2 seconds, dealing magic damage to nearby enemies, knocking them back, though not through terrain, and slowing them for 2 seconds. The further the lure travels in its initial flight, the larger the shark that is attracted; increasing Chum the Waters\' damage, slow, eruption radius and knock back distance.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Guppy (<455):</span> 40% slow, 200 eruption radius and 150 unit knock back distance.</p>',
      leveling: [
        {
          attribute: 'Guppy Damage',
          modifiers: [
            {
              values: '180 / 300 / 420'
            },
            {
              unit: '% AP',
              values: '60'
            }
          ]
        }
      ]
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Chomper (455-910):</span> 125% damage, 60% slow, 325 eruption radius and 250 unit knock back distance.</p>',
      leveling: [
        {
          attribute: 'Chomper Damage',
          modifiers: [
            {
              values: '225 / 375 / 525'
            },
            {
              unit: '% AP',
              values: '75'
            }
          ]
        }
      ]
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Gigalodon (>910):</span> 150% damage, 80% slow, 450 eruption radius and 350 unit knock back distance.</p>',
      leveling: [
        {
          attribute: 'Gigalodon Damage',
          modifiers: [
            {
              values: '270 / 450 / 630'
            },
            {
              unit: '% AP',
              values: '90'
            }
          ]
        }
      ]
    },
    {
      description: 'Enemy champions can intercept the lure while it is in flight, which attaches to them upon contact and causes the shark to emerge at their position after the same delay. The lure\'s holder is slowed and revealed for the duration and afterwards is impacted by the eruption but is knocked up for 1 second instead of knocked back.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Fizz/ability-icon/r',
  notes: 'Chum the Waters will not attach the lure to an enemy champion if they have a  spell shield as well as against an enemy  Malzahar with his  Void Shift active (mitigation effect is consumed in both cases).\nThe area of effect for the eruption will be at the target\'s location at the time of the attachment being blocked; the target will intercept the lure without getting attached to it.\nChum the Waters\'  lure missile will stop its movement upon colliding with  Samira\'s  Blade Whirl or  Yasuo\'s  Wind Wall specifically, creating the area of effect for the eruption prematurely without destroying the missile. Collision with  Mel\'s  Rebuttal will destroy it altogether, however.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe targeted area does not change unless the ability was cast beyond maximum range.\nIf the lure attaches to an enemy champion, a countdown will appear at their position to signify when the shark is about to emerge. The countdown begins from 4, and ticks down by one every 0.5 seconds.',
  projectile: 'SPECIAL',
  resource: 'Mana',
  speed: '1300',
  spellEffects: 'spellaoe',
  spellshieldable: 'special',
  targeting: 'Location',
  targetRange: '1300'
}
export default ability
