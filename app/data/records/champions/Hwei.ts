// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion = {
  id: 910,
  key: 'Hwei',
  name: 'Hwei',
  title: 'the Visionary',
  resource: 'Mana',
  attackType: 'Ranged',
  stats: {
    health: {
      flat: 580,
      perLevel: 109,
    },
    healthRegen: {
      flat: 5.5,
      perLevel: 0.55,
    },
    mana: {
      flat: 480,
      perLevel: 30,
    },
    manaRegen: {
      flat: 7.5,
      perLevel: 0.75,
    },
    armor: {
      flat: 21,
      perLevel: 4.7,
    },
    magicResistance: {
      flat: 30,
      perLevel: 1.3,
    },
    attackDamage: {
      flat: 54,
      perLevel: 3.3,
    },
    movespeed: {
      flat: 330,
    },
    acquisitionRadius: {
      flat: 600,
    },
    selectionRadius: {
      flat: 135,
    },
    pathingRadius: {
      flat: 35,
    },
    gameplayRadius: {
      flat: 65,
    },
    criticalStrikeDamage: {
      flat: 175,
    },
    criticalStrikeDamageModifier: {
      flat: 1,
    },
    attackSpeed: {
      flat: 0.69,
      perLevel: 2.5,
    },
    attackSpeedRatio: {
      flat: 0.658,
    },
    attackCastTime: {
      flat: 0.28,
    },
    attackTotalTime: {
      flat: 1.495,
    },
    attackRange: {
      flat: 550,
    },
  },
  positions: [
    'Middle',
    'Support',
  ],
  roles: [
    'Artillery',
    'Mage',
    'Support',
  ],
  attributeRatings: {
    damage: 3,
    toughness: 1,
    control: 3,
    mobility: 1,
    utility: 2,
    abilityReliance: 90,
    difficulty: 3,
  },
  abilities: {
    P: [
      {
        name: 'Signature of the Visionary',
        icon: 'https://cdn.communitydragon.org/latest/champion/Hwei/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Hwei\'s damaging abilities mark enemies hit for 4 seconds. Subsequent damaging abilities against marked targets consume the mark to create an explosion beneath them, dealing 35 - 230 (based on level) (+ 30% AP) bonus magic damage to enemies in the area after a 0.85-second delay.</p>',
          },
        ],
        targeting: 'Passive',
        affects: 'Self, Enemies',
        spellshieldable: 'true',
        damageType: 'Magic damage',
        spellEffects: 'aoe',
        notes: 'The ability that consumes the mark cannot apply it on the same cast instance.\nThe mark cannot be triggered from the same cast instance of an ability, even if the triggering ability was empowered by  Stirring Lights.\nThe explosion occurs around the marked target from where they were when the ability damaged them to consume the mark.\nIn other words, the explosion is at the location of where they were hit, not where they are at the end of the delay.\nThe target who had their mark consumed is able to escape the area of the explosion within the delay period.\nEnemies can be damaged by multiple explosions at once.\n Spell shield will block both the mark and its consumption as well as the detonation.\nThe indicator for the effect telegraphs an unusually smaller radius than it actually hits.(bug)',
        blurb: 'Innate:  Hwei\'s damaging abilities mark enemies hit for a short time. Damaging them with a different ability consumes the mark to create an explosion at their location that deals magic damage in an area.',
        effectRadius: '285',
      },
    ],
    Q: [
      {
        name: 'Subject: Disaster',
        icon: 'https://cdn.communitydragon.org/latest/champion/Hwei/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Hwei enters a disastrous mood, gaining access to its abilities as well as Wash Brush. He will exit the mood upon casting any of them.</p>',
          },
        ],
        cost: [
          80,
          90,
          100,
          110,
          120,
        ],
        cooldown: [
          10,
          9,
          8,
          7,
          6,
        ],
        targeting: 'Auto',
        resource: 'Mana',
        notes: 'Hwei cannot rank up this ability while he is in a mood.',
        blurb: 'Active: Hwei enters a disastrous mood, gaining access to its abilities as well as  Wash Brush. He will exit the mood upon casting any of them.\n Devastating Fire (QQ)\n Severing Bolt (QW)\n Molten Fissure (QE)',
        castTime: 'none',
        maxCharges: -1,
      },
      {
        name: 'Devastating Fire',
        icon: 'https://cdn.communitydragon.org/latest/champion/Hwei/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active - QQ:</span> Hwei slings a fireball in the target direction that explodes upon colliding with the first enemy or reaching maximum range, dealing magic damage to all nearby enemies. The damage based on the target\'s health ratio is capped at 250 against monsters.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      50,
                      80,
                      110,
                      140,
                      170,
                    ],
                  },
                  {
                    values: [
                      70,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                  {
                    values: [
                      3,
                      4,
                      5,
                      6,
                      7,
                    ],
                    units: [
                      '% of target\'s maximum health',
                    ],
                  },
                ],
              },
            ],
          },
        ],
        cost: [
          80,
          90,
          100,
          110,
          120,
        ],
        cooldown: [
          10,
          9,
          8,
          7,
          6,
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'true',
        damageType: 'Magic damage',
        spellEffects: 'spellaoe',
        projectile: 'TRUE',
        notes: 'This ability will cast from wherever the caster is at the end of the cast time.',
        blurb: 'Active - QQ:  Hwei slings a fireball in the target direction, dealing magic damage to enemies hit.',
        speed: '2000',
        width: '140',
        castTime: '0.25',
        effectRadius: '175',
        maxCharges: -1,
      },
      {
        name: 'Severing Bolt',
        icon: 'https://cdn.communitydragon.org/latest/champion/Hwei/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active - QW:</span> Hwei calls upon a lightning bolt to strike at the target location after 1 second, dealing magic damage to enemies within the area.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      60,
                      85,
                      110,
                      135,
                      160,
                    ],
                  },
                  {
                    values: [
                      25,
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
            description: 'If Severing Bolt hits only one enemy or immobilized enemies, it deals increased damage based on the target\'s missing health. This bonus damage is capped at 300 against monsters.',
            leveling: [
              {
                attribute: 'Maximum Damage Increase',
                modifiers: [
                  {
                    values: [
                      200,
                      237.5,
                      275,
                      312.5,
                      350,
                    ],
                    units: [
                      '%',
                    ],
                  },
                ],
              },
              {
                attribute: 'Maximum Damage',
                modifiers: [
                  {
                    values: [
                      120,
                      201.875,
                      302.5,
                      421.875,
                      560,
                    ],
                  },
                  {
                    values: [
                      50,
                      59.375,
                      68.75,
                      78.125,
                      87.5,
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
            description: 'Severing Bolt deals 50% damage to minions and non-epic monsters.',
          },
        ],
        cost: [
          80,
          90,
          100,
          110,
          120,
        ],
        cooldown: [
          10,
          9,
          8,
          7,
          6,
        ],
        targeting: 'Location',
        affects: 'Enemies',
        spellshieldable: 'true',
        damageType: 'Magic damage',
        spellEffects: 'spellaoe',
        notes: 'Severing Bolt\'s damage against immobilized or isolated enemies is increased based on both its rank and a target\'s missing health. The list below shows the total damage multiplier at various thresholds as a percentage of the base/non-increased damage.\nRank 1: 100% : 200%\nRank 2: 100% : 237.5%\nRank 3: 100% : 275%\nRank 4: 100% : 312.5%\nRank 5: 100% : 350%',
        blurb: 'Active - QW:  Hwei strikes the target area with a lightning bolt, dealing magic damage to enemies within the area. Isolated or  immobilized enemies are dealt  increased damage based on their missing health.',
        castTime: '0.5',
        effectRadius: '225',
        targetRange: '1900',
        maxCharges: -1,
      },
      {
        name: 'Molten Fissure',
        icon: 'https://cdn.communitydragon.org/latest/champion/Hwei/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active - QE:</span> Hwei marks a blazing path in the target direction. After 0.6 seconds, the path erupts into volcanic explosions every 0.2 seconds from the point of cast. Each explosion creates a shockwave that deals magic damage to nearby enemies.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      20,
                      40,
                      60,
                      80,
                      100,
                    ],
                  },
                  {
                    values: [
                      30,
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
            description: 'Each explosion also leaves a lava fissure in its wake. A fissure lasts for 2.5 seconds, dealing magic damage every 0.25 seconds to enemies within the area and slowing them by 30%.',
            leveling: [
              {
                attribute: 'Magic Damage per Tick',
                modifiers: [
                  {
                    values: [
                      5,
                      10,
                      15,
                      20,
                      25,
                    ],
                  },
                  {
                    values: [
                      5,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Total Fissure Magic Damage',
                modifiers: [
                  {
                    values: [
                      50,
                      100,
                      150,
                      200,
                      250,
                    ],
                  },
                  {
                    values: [
                      50,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Total Magic Damage',
                modifiers: [
                  {
                    values: [
                      70,
                      140,
                      210,
                      280,
                      350,
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
            description: 'Molten Fissure\'s damage is reduced to 60% against minions and increased to 135% against monsters.',
          },
        ],
        cost: [
          80,
          90,
          100,
          110,
          120,
        ],
        cooldown: [
          10,
          9,
          8,
          7,
          6,
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'special',
        damageType: 'Magic damage',
        spellEffects: 'special',
        projectile: 'TRUE',
        notes: 'Applies  area damage for the explosions and deals  persistent area damage for the lava.\nThe shockwaves can only hit each enemy once.\nEnemies will take damage over time for each lava fissure they are standing in.\n Spell shield will block an explosion but not the persistent lava damage.\nThis ability will cast from wherever the caster is at the start of the cast time.',
        blurb: 'Active - QE:  Hwei marks a blazing path in a direction that erupts after a delay into explosions. Each explosion deals magic damage and leaves behind a volcanic fissure that continually deals magic damage and  slows enemies within.',
        width: '225',
        castTime: '0.35',
        effectRadius: '225',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Subject: Serenity',
        icon: 'https://cdn.communitydragon.org/latest/champion/Hwei/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Hwei enters a serene mood, gaining access to its abilities as well as Wash Brush. He will exit the mood upon casting any of them.</p>',
          },
        ],
        cost: [
          90,
          95,
          100,
          105,
          110,
        ],
        cooldown: [
          18,
          17.5,
          17,
          16.5,
          16,
        ],
        targeting: 'Auto',
        resource: 'Mana',
        notes: 'Hwei cannot rank up this ability while he is in a mood.',
        blurb: 'Active: Hwei enters a serene mood, gaining access to its abilities as well as  Wash Brush. He will exit the mood upon casting any of them.\n Fleeting Current (WQ)\n Pool of Reflection (WW)\n Stirring Lights (WE)',
        castTime: 'none',
        maxCharges: -1,
      },
      {
        name: 'Fleeting Current',
        icon: 'https://cdn.communitydragon.org/latest/champion/Hwei/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active - WQ:</span> Hwei forms a current of water in the target direction, creating a path for a duration that grants him and allied champions bonus movement speed and ghosting for 0.5 seconds, with the bonus refreshing every 0.125 seconds while they remain in the area.</p>',
            leveling: [
              {
                attribute: 'Path Duration',
                modifiers: [
                  {
                    values: [
                      4,
                      4.5,
                      5,
                      5.5,
                      6,
                    ],
                    units: [
                      ' seconds',
                    ],
                  },
                ],
              },
              {
                attribute: 'Bonus Movement Speed',
                modifiers: [
                  {
                    values: [
                      20,
                      22.5,
                      25,
                      27.5,
                      30,
                    ],
                    units: [
                      '%',
                    ],
                  },
                  {
                    values: [
                      2,
                    ],
                    units: [
                      '% per 100 AP',
                    ],
                  },
                ],
              },
            ],
          },
        ],
        cost: [
          90,
          95,
          100,
          105,
          110,
        ],
        cooldown: [
          18,
          17.5,
          17,
          16.5,
          16,
        ],
        targeting: 'Direction',
        affects: 'Self, Allies',
        projectile: 'FALSE',
        notes: 'This ability will cast from wherever the caster is at the start of the cast time.',
        blurb: 'Active - WQ:  Hwei forms a current of water in the target direction that grants him and allied  champions  bonus movement speed and  ghosting while within it.',
        width: '225',
        castTime: '0.25',
        maxCharges: -1,
      },
      {
        name: 'Pool of Reflection',
        icon: 'https://cdn.communitydragon.org/latest/champion/Hwei/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active - WW:</span> Hwei summons a pool of water at the target location, creating a protective zone for 3 seconds that grants him and allied champions a shield at the start of the cast time and for 0.5 seconds while within the area. The shield refreshes and increases in strength by an amount every 0.264 seconds over the duration while they remain in the area.</p>',
            leveling: [
              {
                attribute: 'Initial Shield Strength',
                modifiers: [
                  {
                    values: [
                      50,
                      62.5,
                      75,
                      87.5,
                      100,
                    ],
                  },
                  {
                    values: [
                      30,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Bonus Shield per Tick',
                modifiers: [
                  {
                    values: [
                      8.33,
                      10.42,
                      12.5,
                      14.58,
                      16.67,
                    ],
                  },
                  {
                    values: [
                      5,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Total Maximum Shield',
                modifiers: [
                  {
                    values: [
                      100,
                      125,
                      150,
                      175,
                      200,
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
            description: 'Pool of Reflection\'s shield strength is reduced to 75% for allies.',
            leveling: [
              {
                attribute: 'Ally Initial Shield',
                modifiers: [
                  {
                    values: [
                      37.5,
                      46.875,
                      56.25,
                      65.625,
                      75,
                    ],
                  },
                  {
                    values: [
                      22.5,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Ally Bonus Shield per Tick',
                modifiers: [
                  {
                    values: [
                      6.25,
                      7.81,
                      9.38,
                      10.94,
                      12.5,
                    ],
                  },
                  {
                    values: [
                      3.75,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Ally Total Maximum Shield',
                modifiers: [
                  {
                    values: [
                      75,
                      93.75,
                      112.5,
                      131.25,
                      150,
                    ],
                  },
                  {
                    values: [
                      45,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
            ],
          },
        ],
        cost: [
          90,
          95,
          100,
          105,
          110,
        ],
        cooldown: [
          18,
          17.5,
          17,
          16.5,
          16,
        ],
        targeting: 'Location',
        affects: 'Self, Allies',
        notes: 'The pool is summoned at the start of the cast time.\nThe maximum shield defines the cap for the strength, and it takes approximately 1.5 seconds to gain the full shield.\nThe shield will be regenerated back to its cap if it mitigates damage.\nThe total amount of shield that can be generated given damage mitigated is far greater than this cap.\nThe initial shield amount is inconsistent due to one or two ticks of the bonus shield being granted on-cast.',
        blurb: 'Active - WW:  Hwei summons a protective water pool at the target location that grants him and allied  champions a  shield for a few seconds that increases in strength if they remain within it.',
        castTime: '0.3',
        effectRadius: '350',
        targetRange: '650',
        maxCharges: -1,
      },
      {
        name: 'Stirring Lights',
        icon: 'https://cdn.communitydragon.org/latest/champion/Hwei/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active - WE:</span> Hwei surrounds himself in swirling flares that empower his next 3 basic attacks or ability hits within 9 seconds to each deal bonus magic damage and restore mana.</p>',
            leveling: [
              {
                attribute: 'Bonus Magic Damage',
                modifiers: [
                  {
                    values: [
                      20,
                      30,
                      40,
                      50,
                      60,
                    ],
                  },
                  {
                    values: [
                      15,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Maximum Magic Damage',
                modifiers: [
                  {
                    values: [
                      60,
                      90,
                      120,
                      150,
                      180,
                    ],
                  },
                  {
                    values: [
                      45,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Mana Restore',
                modifiers: [
                  {
                    values: [
                      45,
                      50,
                      55,
                      60,
                      65,
                    ],
                  },
                ],
              },
              {
                attribute: 'Total Mana Restore',
                modifiers: [
                  {
                    values: [
                      135,
                      150,
                      165,
                      180,
                      195,
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'Stirring Lights\' bonus damage is reduced to 50% against minions or monsters if applied by his area of effect abilities.',
            leveling: [
              {
                attribute: 'Reduced Bonus Damage',
                modifiers: [
                  {
                    values: [
                      10,
                      15,
                      20,
                      25,
                      30,
                    ],
                  },
                  {
                    values: [
                      7.5,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
            ],
          },
        ],
        cost: [
          90,
          95,
          100,
          105,
          110,
        ],
        cooldown: [
          18,
          17.5,
          17,
          16.5,
          16,
        ],
        targeting: 'Auto',
        affects: 'Self, Enemies',
        spellshieldable: 'false',
        damageType: 'Magic damage',
        spellEffects: 'proc',
        notes: 'Stirring Lights\'  bonus damage to non-champions is reduced if applied by  Devastating Fire,  Severing Bolt,  Molten Fissure,  Crushing Maw, or  Spiraling Despair.\n Spell shield will not block the bonus damage even if it is applied by an ability.(bug)',
        blurb: 'Active - WE:  Hwei surrounds himself in swirling flares that empower his next 3 basic attacks or abilities to deal bonus magic damage and restore  mana.',
        castTime: 'none',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Subject: Torment',
        icon: 'https://cdn.communitydragon.org/latest/champion/Hwei/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Hwei enters a tumultuous mood, gaining access to its abilities as well as Wash Brush. He will exit the mood upon casting any of them.</p>',
          },
        ],
        cost: [
          50,
          55,
          60,
          65,
          70,
        ],
        cooldown: [
          13,
          12.5,
          12,
          11.5,
          11,
        ],
        targeting: 'Auto',
        resource: 'Mana',
        notes: 'Hwei cannot rank up this ability while he is in a mood.',
        blurb: 'Active: Hwei enters a tumultuous mood, gaining access to its abilities as well as  Wash Brush. He will exit the mood upon casting any of them.\n Grim Visage (EQ)\n Gaze of the Abyss (EW)\n Crushing Maw (EE)',
        castTime: 'none',
        maxCharges: -1,
      },
      {
        name: 'Grim Visage',
        icon: 'https://cdn.communitydragon.org/latest/champion/Hwei/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active - EQ:</span> Hwei launches a terrifying grin in the target direction that deals magic damage to the first enemy hit, knocks them down, and fears them for a duration, as well as slows them by 60% for the same duration.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      70,
                      110,
                      150,
                      190,
                      230,
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
              {
                attribute: 'Disable Duration',
                modifiers: [
                  {
                    values: [
                      1,
                      1.125,
                      1.25,
                      1.375,
                      1.5,
                    ],
                    units: [
                      ' seconds',
                    ],
                  },
                ],
              },
            ],
          },
        ],
        cost: [
          50,
          55,
          60,
          65,
          70,
        ],
        cooldown: [
          13,
          12.5,
          12,
          11.5,
          11,
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'true',
        damageType: 'Magic damage',
        spellEffects: 'spell',
        projectile: 'TRUE',
        notes: 'This ability will cast from wherever the caster is at the end of the cast time.',
        blurb: 'Active - EQ:  Hwei launches a terrifying grin in the target direction that deals magic damage to the first enemy hit,  knocking them down and  fearing and  slowing them.',
        speed: '1300',
        width: '70',
        castTime: '0.25',
        maxCharges: -1,
      },
      {
        name: 'Gaze of the Abyss',
        icon: 'https://cdn.communitydragon.org/latest/champion/Hwei/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active - EW:</span> Hwei tosses an eyeball to the target location. Upon arrival, it expands over 0.2 seconds into a dark gaze lasting 3 seconds, granting sight in a larger area. After 0.7 seconds of being placed, the eye locks onto the nearest visible enemy champion or otherwise remains there until an enemy champion is in range. Once locked on, the eye launches itself at the target after 0.3 seconds and collides with the first enemy hit to deal magic damage, reveal them for 2.5 seconds, and root them for a duration.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      70,
                      110,
                      150,
                      190,
                      230,
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
              {
                attribute: 'Root Duration',
                modifiers: [
                  {
                    values: [
                      1.2,
                      1.4,
                      1.6,
                      1.8,
                      2,
                    ],
                    units: [
                      ' seconds',
                    ],
                  },
                ],
              },
            ],
          },
        ],
        cost: [
          50,
          55,
          60,
          65,
          70,
        ],
        cooldown: [
          13,
          12.5,
          12,
          11.5,
          11,
        ],
        targeting: 'Location',
        affects: 'Enemies',
        spellshieldable: 'true',
        damageType: 'Magic damage',
        spellEffects: 'spell',
        projectile: 'TRUE',
        notes: 'The target that the eye locks onto and launches towards is  revealed during the missile\'s flight.\nThe lock-on missile\'s path is indicated by a dashed line.\nIts launch range is about as wide as its vision range.\nThis is not to be confused with the eye\'s border which is the trigger range.',
        blurb: 'Active - EW:  Hwei tosses an eyeball to the target location that expands into a dark gaze, granting  sight in a larger area and locking onto the nearest visible enemy  champion. The eye then launches itself at the locked-on target, dealing magic damage to the first enemy it collides with,  rooting and  revealing them.',
        speed: '1700',
        castTime: '0.25',
        effectRadius: '350 / 600 / 450',
        targetRange: '900',
        maxCharges: -1,
      },
      {
        name: 'Crushing Maw',
        icon: 'https://cdn.communitydragon.org/latest/champion/Hwei/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active - EE:</span> Hwei conjures a jaw at the target location that snaps after 0.6 seconds, dealing magic damage to enemies in the area and slowing them by an amount that decays over 1.25 seconds. Enemies that are not standing at the center when the jaw snaps are pulled there.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      70,
                      110,
                      150,
                      190,
                      230,
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
              {
                attribute: 'Slow',
                modifiers: [
                  {
                    values: [
                      40,
                      47.5,
                      55,
                      62.5,
                      70,
                    ],
                    units: [
                      '%',
                    ],
                  },
                ],
              },
            ],
          },
        ],
        cost: [
          50,
          55,
          60,
          65,
          70,
        ],
        cooldown: [
          13,
          12.5,
          12,
          11.5,
          11,
        ],
        targeting: 'Location',
        affects: 'Enemies',
        spellshieldable: 'true',
        damageType: 'Magic damage',
        spellEffects: 'spellaoe',
        notes: 'Enemies that are pulled will be slowed after the displacement ends.\nThe jaws are made of two rectangles in an angle of each other.',
        blurb: 'Active - EE:  Hwei summons a jaw at the target location that snaps, dealing magic damage to all enemies in the area and applying a decaying  slow to them. Enemies that are not standing at the center of the jaw when it snaps are  pulled there.',
        width: '340',
        castTime: '0.35',
        targetRange: '800',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'Spiraling Despair',
        icon: 'https://cdn.communitydragon.org/latest/champion/Hwei/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Hwei launches a globule of pure despair in the target direction that collides with the first enemy champion hit, afflicting them with an aura that grows over 3 seconds, reveals the target, and grants sight within its radius. Enemies within are both dealt magic damage and applied a stack of Despair every 0.25 seconds.</p>',
            leveling: [
              {
                attribute: 'Magic Damage per Tick',
                modifiers: [
                  {
                    values: [
                      2.5,
                      5,
                      7.5,
                    ],
                  },
                  {
                    values: [
                      1.25,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Total Magic Damage',
                modifiers: [
                  {
                    values: [
                      30,
                      60,
                      90,
                    ],
                  },
                  {
                    values: [
                      15,
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
            description: '<p class="ability-effect"><span class="ability-header">Despair:</span> For each stack, the target is slowed by 10% for 0.25 seconds, stacking up to 12 times.</p>',
          },
          {
            description: 'At the end of the duration or when the target dies, the aura explodes to deal magic damage to enemies within and remove all Despair stacks from affected enemies.',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      200,
                      325,
                      450,
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
              {
                attribute: 'Maximum Total Damage',
                modifiers: [
                  {
                    values: [
                      230,
                      385,
                      540,
                    ],
                  },
                  {
                    values: [
                      95,
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
            description: 'Spiraling Despair can only be cast if Hwei has not entered a mood.',
          },
        ],
        cost: [
          100,
        ],
        cooldown: [
          140,
          115,
          80,
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'special',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'special',
        projectile: 'TRUE',
        notes: 'Applies  persistent area damage for the aura and deals  area damage for the explosion.\n Spell shield can block the aura, explosion, and the application of the first Despair stack.\nThis ability will cast from wherever the caster is at the end of the cast time.',
        blurb: 'Active:  Hwei launches a globule in the target direction that collides with the first enemy  champion hit, afflicting them with an aura that grows over a few seconds. Enemies within are continually dealt magic damage and gradually  slowed.',
        speed: '1400',
        width: '180',
        castTime: '0.25',
        effectRadius: '500',
        maxCharges: -1,
      },
      {
        name: 'Wash Brush',
        icon: 'https://cdn.communitydragon.org/latest/champion/Hwei/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active - QR, WR, ER:</span> Hwei exits his current mood without incurring its ability cost or cooldown.</p>',
          },
          {
            description: 'Wash Brush can only be cast if Hwei has entered a mood, and can be used while affected by cast-inhibiting crowd control.',
          },
        ],
        cost: [
          100,
        ],
        cooldown: [
          140,
          115,
          80,
        ],
        targeting: 'Auto',
        affects: 'Self',
        blurb: 'Active:  Hwei exits his current mood without incurring its ability cost or cooldown.',
        castTime: 'none',
        maxCharges: -1,
      },
    ],
  },
  lore: 'Hwei is a brooding painter who creates brilliant art in order to confront Ionia\'s criminals and comfort their victims. Beneath his melancholy roils a torn, emotional mind—haunted by both the vibrant visions of his imagination and the gruesome memories of his temple\'s massacre. Hwei seeks to understand this light and dark, which drives him inevitably toward the artist who unraveled him. With paintbrush and palette, Hwei shapes endless possibilities as he draws ever closer to earning closure or embracing despair.',
}
export default champion