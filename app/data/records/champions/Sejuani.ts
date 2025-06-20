// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion = {
  id: 113,
  key: 'Sejuani',
  name: 'Sejuani',
  title: 'Fury of the North',
  resource: 'Mana',
  attackType: 'Melee',
  stats: {
    health: {
      flat: 630,
      perLevel: 114,
    },
    healthRegen: {
      flat: 8.5,
      perLevel: 1,
    },
    mana: {
      flat: 400,
      perLevel: 40,
    },
    manaRegen: {
      flat: 7,
      perLevel: 0.7,
    },
    armor: {
      flat: 34,
      perLevel: 5.45,
    },
    magicResistance: {
      flat: 32,
      perLevel: 2.05,
    },
    attackDamage: {
      flat: 66,
      perLevel: 4,
    },
    movespeed: {
      flat: 340,
    },
    acquisitionRadius: {
      flat: 800,
    },
    selectionRadius: {
      flat: 140,
    },
    pathingRadius: {
      flat: 50,
    },
    gameplayRadius: {
      flat: 80,
    },
    criticalStrikeDamage: {
      flat: 175,
    },
    criticalStrikeDamageModifier: {
      flat: 1,
    },
    attackSpeed: {
      flat: 0.688,
      perLevel: 3.5,
    },
    attackSpeedRatio: {
      flat: 0.625,
    },
    attackCastTime: {
      flat: 0.3,
    },
    attackTotalTime: {
      flat: 1.6,
    },
    attackRange: {
      flat: 150,
    },
  },
  positions: [
    'Jungle',
  ],
  roles: [
    'Fighter',
    'Tank',
    'Vanguard',
  ],
  attributeRatings: {
    damage: 2,
    toughness: 2,
    control: 3,
    mobility: 2,
    utility: 1,
    abilityReliance: 75,
    difficulty: 2,
  },
  abilities: {
    P: [
      {
        name: 'Fury of the North',
        icon: 'https://cdn.communitydragon.org/latest/champion/Sejuani/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate - Icebreaker:</span> Enemies stunned by Sejuani are marked Frozen for the disable\'s duration. Sejuani\'s next basic attack or ability against a Frozen enemy will consume the mark to deal bonus magic damage equal to 10% of their maximum health, capped at 250 against epic monsters.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate - Frost Armor:</span> Sejuani gains Frost Armor, which lingers for 3 seconds after taking damage from enemy champions, turrets, or large monsters. She restores it after 12 - 6 (based on level) seconds without taking damage from them.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Frost Armor:</span> Sejuani gains slow immunity, cripple immunity, 10 (+ 75% bonus armor) bonus armor, and 10 (+ 75% bonus magic resistance) bonus magic resistance.</p>',
          },
        ],
        targeting: 'Passive',
        affects: 'Self, Enemies',
        spellshieldable: 'unknown',
        damageType: 'Magic damage',
        spellEffects: 'proc',
        notes: 'Gaining Frost Armor does not remove any pre-existing  slows or  cripples.\nIcebreaker will not trigger if the basic attack is  blocked.\nPENDING FOR TEST:: Icebreaker\'s  interactions with  dodging and  blinding effects via basic attack.\nPENDING FOR TEST::  Spell shield interaction with Icebreaker.',
        blurb: 'Innate - Icebreaker: Enemies  stunned by  Sejuani are also marked Frozen at the same time. Her next basic attack or ability against a Frozen target will consume the mark to deal bonus magic damage based on their maximum health.',
      },
    ],
    Q: [
      {
        name: 'Arctic Assault',
        icon: 'https://cdn.communitydragon.org/latest/champion/Sejuani/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Bristle dashes to the target location until he collides with an enemy champion, dealing magic damage to enemies he passes through and knocking them up for 0.5 seconds.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      90,
                      140,
                      190,
                      240,
                      290,
                    ],
                  },
                  {
                    values: [
                      60,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'Arctic Assault can be cast during her other abilities without cancelling them and vice versa.',
          },
        ],
        cost: [
          70,
          75,
          80,
          85,
          90,
        ],
        cooldown: [
          19,
          17.5,
          16,
          14.5,
          13,
        ],
        targeting: 'Location',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'Area of effect',
        notes: 'Champions will slightly be  knocked back, while minions and monsters will instead be slightly  pulled for a fixed distance.\nArctic Assault cannot  knock enemies over terrain.\nCasting  Flash during Arctic Assault will end the dash and affect enemies at the new location.\nUpon colliding with an enemy  champion, Sejuani will attack them.',
        blurb: 'Active:  Sejuani  dashes to the target location, dealing magic damage and briefly  knocking up enemies she passes through. She will stop upon hitting an enemy  champion.',
        speed: '1000',
        castTime: 'none',
        targetRange: '650',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Winter\'s Wrath',
        icon: 'https://cdn.communitydragon.org/latest/champion/Sejuani/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> After 0.25 seconds into the cast time, Sejuani swings her flail in a cone in the target direction that deals physical damage to enemies hit and knocks back minions and monsters hit.</p>',
            leveling: [
              {
                attribute: 'Physical Damage',
                modifiers: [
                  {
                    values: [
                      5,
                      15,
                      25,
                      35,
                      45,
                    ],
                  },
                  {
                    values: [
                      20,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                  {
                    values: [
                      4,
                    ],
                    units: [
                      '% of her maximum health',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'After the cast time, Sejuani lashes out with her flail in a line in the same direction, dealing physical damage to enemies hit and slowing them by 75% for 0.25 seconds.',
            leveling: [
              {
                attribute: 'Physical Damage',
                modifiers: [
                  {
                    values: [
                      5,
                      25,
                      45,
                      65,
                      85,
                    ],
                  },
                  {
                    values: [
                      60,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                  {
                    values: [
                      8,
                    ],
                    units: [
                      '% of her maximum health',
                    ],
                  },
                ],
              },
              {
                attribute: 'Total Physical Damage',
                modifiers: [
                  {
                    values: [
                      10,
                      40,
                      70,
                      100,
                      130,
                    ],
                  },
                  {
                    values: [
                      80,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                  {
                    values: [
                      12,
                    ],
                    units: [
                      '% of her maximum health',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'Sejuani can move during Winter\'s Wrath\'s cast time.',
          },
        ],
        cost: [
          65,
        ],
        cooldown: [
          9,
          8,
          7,
          6,
          5,
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'Special',
        resource: 'Mana',
        damageType: 'Physical damage',
        spellEffects: 'spellaoe',
        projectile: 'FALSE',
        notes: 'Spell shields will block only a single instance of damage - either the swing or the lash.\nThis ability will cast from wherever the caster is at the end of the cast time.\nBoth swings will strike in the cast direction, but the second swing will do so from Sejuani\'s location at the end of the cast time.',
        blurb: 'Active:  Sejuani swings her flail in a cone in the target direction that deals physical damage to enemies hit,  knocking back  minions and  monsters.',
        castTime: '1',
        targetRange: '600',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Permafrost',
        icon: 'https://cdn.communitydragon.org/latest/champion/Sejuani/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Winter\'s Wrath and both Sejuani\'s and nearby allied melee champions\' attacks on-hit apply stacks of Frost to enemy champions, medium or large monsters, and large minions for 5 seconds, refreshing on subsequent applications and stacking up to 4 times, though not applying if the target is Frozen. Enemies hit by Permafrost or Glacial Prison\'s bola have all of their Frost stacks consumed. Enemy champions cannot be affected by Frost for 8 seconds after having it consumed. Sejuani can cast Permafrost against an enemy with 4 stacks.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Sejuani hurls a trap at the visible enemy with 4 stacks of Frost closest to the cursor, which deals magic damage, displaces them slightly, and stuns them for 1 second.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      55,
                      105,
                      155,
                      205,
                      255,
                    ],
                  },
                  {
                    values: [
                      60,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'Permafrost resets Sejuani\'s basic attack timer.',
          },
        ],
        cost: [
          20,
        ],
        cooldown: [
          1.5,
        ],
        targeting: 'Unit',
        affects: 'Enemies, Allies, Self',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'Single target',
        projectile: 'TRUE',
        notes: 'Permafrost\'s targeting prioritizes champions within  50 units of the cursor\'s selection, then non-champions within  50 units of the cursor\'s selection, then champions within  350 units of the cursor\'s selection, then the closest unit to the cursor within  2500 units (the last case strictly applies if there is no target being selected).\nFrost stacks will not be applied if the basic attack is  blocked.\nPENDING FOR TEST:: Permafrost\'s stack application interaction with parrying effects ( dodge,  blind).\n Master Yi\'s  Alpha Strike does not interact with Permafrost.(note)\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but still go on  cooldown and pay its cost.(bug)',
        blurb: 'Passive:  Winter\'s Wrath and both  Sejuani\'s and nearby allied  melee champions\' attacks apply stacks of Frost against  champions, medium / large  monsters and large  minions, which lasts a few seconds and stacks up to a cap. Sejuani can cast Permafrost against an enemy with max stacks.',
        castTime: '0.25',
        effectRadius: '1100',
        targetRange: '600',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'Glacial Prison',
        icon: 'https://cdn.communitydragon.org/latest/champion/Sejuani/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Sejuani throws an ice bola in the target direction that stops upon hitting an enemy champion, dealing magic damage and stunning them for 1 second.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      125,
                      150,
                      175,
                    ],
                  },
                  {
                    values: [
                      40,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'If the bola travels over 400 units, it becomes empowered to detonate upon reaching maximum range or hitting an enemy champion, dealing increased damage and stunning for 1.5 seconds instead. For the same duration, a frost storm is created around the location of the detonation that slows enemies within by 30% and grants sight of the area in a smaller radius.',
            leveling: [
              {
                attribute: 'Increased Damage',
                modifiers: [
                  {
                    values: [
                      200,
                      300,
                      400,
                    ],
                  },
                  {
                    values: [
                      80,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'Afterwards, the storm shatters to deal magic damage to enemies hit and slow them by 80% for 1 second, as well as revealing them and granting sight of the area for 0.5 seconds.',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      200,
                      300,
                      400,
                    ],
                  },
                  {
                    values: [
                      80,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'The enemy hit by the bola is not affected by the storm\'s effects.',
          },
        ],
        cost: [
          100,
        ],
        cooldown: [
          130,
          110,
          90,
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'Special',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'Special',
        projectile: 'TRUE',
        notes: 'Applies  spell damage to the primary target and  area damage to secondary targets in the ice storm.\n Spell shields will block only a single instance of damage.\nThis ability will cast from wherever the caster is at the end of the cast time.\nBoth areas of effect will be centered on the first champion struck, not at the location the missile collided with them.',
        blurb: 'Active:  Sejuani throws an ice bola in the target direction that stops upon hitting an enemy champion, dealing magic damage and briefly  stunning them.',
        speed: '1600',
        width: '240',
        castTime: '0.25',
        targetRange: '1300',
        maxCharges: -1,
      },
    ],
  },
  lore: 'Sejuani is the brutal, unforgiving Iceborn warmother of the Winter\'s Claw, one of the most feared tribes of the Freljord. Her people\'s survival is a constant, desperate battle against the elements, forcing them to raid Noxians, Demacians, and Avarosans alike to survive the harsh winters. Sejuani herself spearheads the most dangerous of these attacks from the saddle of her drüvask boar Bristle, using her True Ice flail to freeze and shatter her enemies.',
}
export default champion