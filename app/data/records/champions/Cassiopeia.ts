// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion = {
  id: 69,
  key: 'Cassiopeia',
  name: 'Cassiopeia',
  title: 'the Serpent\'s Embrace',
  fullName: 'Cassiopeia Du Couteau',
  resource: 'Mana',
  attackType: 'Ranged',
  stats: {
    health: {
      flat: 630,
      perLevel: 104,
    },
    healthRegen: {
      flat: 5.5,
      perLevel: 0.5,
    },
    mana: {
      flat: 400,
      perLevel: 40,
    },
    manaRegen: {
      flat: 8,
      perLevel: 0.8,
    },
    armor: {
      flat: 18,
      perLevel: 4.7,
    },
    magicResistance: {
      flat: 32,
      perLevel: 1.3,
    },
    attackDamage: {
      flat: 53,
      perLevel: 3,
    },
    movespeed: {
      flat: 328,
    },
    acquisitionRadius: {
      flat: 600,
    },
    selectionRadius: {
      flat: 120,
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
      flat: 0.647,
      perLevel: 1.5,
    },
    attackSpeedRatio: {
      flat: 0.647,
    },
    attackCastTime: {
      flat: 0.3,
    },
    attackTotalTime: {
      flat: 1.6,
    },
    attackDelayOffset: {
      flat: -0.108,
    },
    attackRange: {
      flat: 550,
    },
  },
  positions: [
    'Middle',
  ],
  roles: [
    'Battlemage',
    'Mage',
  ],
  attributeRatings: {
    damage: 3,
    toughness: 1,
    control: 3,
    mobility: 1,
    utility: 1,
    abilityReliance: 100,
    difficulty: 3,
  },
  abilities: {
    P: [
      {
        name: 'Serpentine Grace',
        icon: 'https://cdn.communitydragon.org/latest/champion/Cassiopeia/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Cassiopeia gains 4 - 72 (based on level) bonus movement speed, but she cannot purchase Boots items.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Blessing of Noxus Bonus:</span> Serpentine Grace\'s bonus movement speed is increased by 1 - 18 (based on level), for a total of 5 - 90 (based on level).</p>',
          },
        ],
        targeting: 'Passive',
        affects: 'Self',
        notes: 'The movement speed from Serpentine Grace is worth  48 per level, up to a maximum of  864 at level 18.\nWithout other movement speed modifiers taken into account, Serpentine Grace grants Cassiopeia a total of 332 : 400 (based on level)  movement speed.\nAs  Magical Footwear grants boots, the rune will be replaced with  Cash Back.',
        blurb: 'Innate:  Cassiopeia gains  Movement Speed per level, but she cannot purchase  Boots items.',
      },
    ],
    Q: [
      {
        name: 'Noxious Blast',
        icon: 'https://cdn.communitydragon.org/latest/champion/Cassiopeia/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Cassiopeia creates a blast at the target location that explodes after a 0.4-second delay. Enemies within the blast are poisoned for 3 seconds, taking magic damage every 0.429 seconds over the duration.</p>',
            leveling: [
              {
                attribute: 'Total Magic Damage',
                modifiers: [
                  {
                    values: [
                      75,
                      110,
                      145,
                      180,
                      215,
                    ],
                  },
                  {
                    values: [
                      65,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Magic Damage Per Tick',
                modifiers: [
                  {
                    values: [
                      10.71,
                      15.71,
                      20.71,
                      25.71,
                      30.71,
                    ],
                  },
                  {
                    values: [
                      9.29,
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
            description: 'If Noxious Blast hits an enemy champion, Cassiopeia gains bonus movement speed that decays over 3 seconds.',
            leveling: [
              {
                attribute: 'Bonus Movement Speed',
                modifiers: [
                  {
                    values: [
                      30,
                      35,
                      40,
                      45,
                      50,
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
          3.5,
        ],
        targeting: 'Location',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'aoedot',
        notes: 'Noxious Blast always uses quick cast, regardless of player settings.\nThe damage inflicted by Noxious Blast is calculated as follows: damage / 7 ticks rounded down to the nearest integer.\nFor example: with 0 bonus AP Noxious Blast inflicts 75 damages over 7 ticks of damage, so 75/7 (≈10.71) deals first of all 10 damage, then (2 × 75/7)  −  10 (≈11.43) deals in a second time 11 damages, then (3 × 75/7)  −  10  −  11 (≈11.14) deals in a third time 11 damages, and so on.\nThe damage displayed for Noxious Blast DOT (Damage_over_time) always remains constant and corresponds to the previously mentioned formula: damage / 7 ticks rounded down to the nearest integer. It\'s important not to confuse the consistent displayed damage with the actual damage, which is updated with each tick, see tick and updates.\nWith the same example as above, the damage displayed is always 10.\nOccasionally, Noxious Blast may not deal the displayed damage. This discrepancy occurs when the calculated damage falls between 0.5 and 1. In such cases, rounding to the nearest integer, specifically rounding up, creates a 1-point difference. It\'s important to note that the damage is rounded down to the nearest integer.\nFor example: with a  Blasting Wand\'s, Noxious Blast shows  so rounded to the nearest integer 116 magic damage, but really deals using the formula above 115 magic damage.\n(bug) When Cassiopeia has precisely 20 bonus AP or 40 bonus AP. In this scenario, Noxious Blast may inflict 1 less damage than intended. Importantly, this bug occurs independently of rounding considerations.\nPENDING FOR TEST: Enemies within the blast of Noxious Blast are  poisoned for something between 3.2 and 3.3 seconds.',
        blurb: 'Active:  Cassiopeia blasts an area with  Poison after a brief delay, dealing magic damage over time to enemies hit. She gains  bonus movement speed if she hits an enemy  champion.',
        castTime: '0.25',
        effectRadius: '200',
        targetRange: '850',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Miasma',
        icon: 'https://cdn.communitydragon.org/latest/champion/Cassiopeia/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Cassiopeia spews forth 7 bolts of venom in an arc at the target location, creating toxic clouds at the area for 5 seconds.</p>',
          },
          {
            description: 'Enemies within the clouds are poisoned to take magic damage every 0.263 seconds and become grounded and slowed by an amount that decays over the area\'s duration.',
            leveling: [
              {
                attribute: 'Magic Damage Per Second',
                modifiers: [
                  {
                    values: [
                      20,
                      25,
                      30,
                      35,
                      40,
                    ],
                  },
                  {
                    values: [
                      10,
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
                      100,
                      125,
                      150,
                      175,
                      200,
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
                attribute: 'Slow',
                modifiers: [
                  {
                    values: [
                      40,
                      50,
                      60,
                      70,
                      80,
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
          70,
          75,
          80,
          85,
          90,
        ],
        cooldown: [
          24,
          22,
          20,
          18,
          16,
        ],
        targeting: 'Location',
        affects: 'Enemies',
        spellshieldable: 'False',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'aoedot',
        projectile: 'TRUE',
        notes: 'Miasma\'s  slow and  ground debuffs are each marked as non-dispellable, so they are not removed by most  cleanses. Each is however allowed to be removed by cleanses that also grant immunity to the debuff type, such as  Olaf\'s  Ragnarok.\nIf a target becomes  untargetable while affected by the  ground, the debuff will refresh to 0.25 seconds.\n Wind Wall will block the portion of Miasma it destroys.\nMiasma inflicts 5 / 6.25 / 7.5 / 8.75 / 10 (+ 2.5% AP) magic damage per tick, and in fact because there is 19 ticks and not 20 ticks, the total magic damage is currently not 100 / 125 / 150 / 175 / 200 (+ 50% AP) but 95 / 118.75 / 142.5 / 166.25 / 190 (+ 47.5% AP).\nSometimes Miasma randomly inflicts only 18 ticks of damage.(bug)',
        blurb: 'Active:  Cassiopeia spews several clouds of  Poison that linger, continually dealing magic damage to enemies within. They are also  slowed and  grounded.',
        speed: '3000',
        castTime: '0.25',
        effectRadius: '200',
        targetRange: '700',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Twin Fang',
        icon: 'https://cdn.communitydragon.org/latest/champion/Cassiopeia/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Cassiopeia launches her fangs at the target enemy that deal 52 - 120 (based on level) (+ 10% AP) magic damage. If this kills the target, Twin Fang\'s mana cost is refunded.</p>',
          },
          {
            description: 'Against a poisoned target, Twin Fang deals bonus magic damage and heals Cassiopeia. The heal is reduced by 75% against minions and small and medium monsters.',
            leveling: [
              {
                attribute: 'Bonus Magic Damage',
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
                      55,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Total Enhanced Damage',
                modifiers: [
                  {
                    values: [
                      52,
                      56,
                      60,
                      64,
                      68,
                      72,
                      76,
                      80,
                      84,
                      88,
                      92,
                      96,
                      100,
                      104,
                      108,
                      112,
                      116,
                      120,
                    ],
                  },
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
                      65,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Heal',
                modifiers: [
                  {
                    values: [
                      10,
                      11.5,
                      13,
                      14.5,
                      16,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Reduced Heal',
                modifiers: [
                  {
                    values: [
                      2.5,
                      2.875,
                      3.25,
                      3.625,
                      4,
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
          40,
        ],
        cooldown: [
          0.75,
        ],
        targeting: 'Unit',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'spell',
        projectile: 'TRUE',
        notes: 'Upon reaching the target, Twin Fang will wait for an ongoing  Noxious Blast to explode before dealing its damage.\nTwin Fang\'s damage against poisoned targets:\nWhen maxed first: 72 : 220 (based on level) (+ 70% AP).\nWhen maxed second: 72 : 220 (based on level) (+ 70% AP).\nWhen maxed last: 72 : 220 (based on level) (+ 70% AP).\nTwin Fang\'s cast indicator is incorrectly adding her own radius to the range like an  edge range ability, and is therefore slightly larger than the actual cast range Twin Fang can cast at.\nUsing Twin Fang on an out-of-range target after completing a movement order causes Cassiopeia to move back to her original location after casting, if no other order is issued during the entire process.(note)\nThis may be a consequence of Twing Fang being a "Walk in range of the target" ability that does not interrupt movement.\nIf an out-of-range target becomes invalid, Cassiopeia continues to walk toward their last known location.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).',
        blurb: 'Active:  Cassiopeia launches an attack at the target enemy that deals magic damage. If this attack kills the target, the  mana cost is refunded.',
        speed: '2500',
        castTime: '0.125',
        targetRange: '700',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'Petrifying Gaze',
        icon: 'https://cdn.communitydragon.org/latest/champion/Cassiopeia/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Cassiopeia blasts enemies in a cone in the target direction, dealing magic damage to enemies struck within and slowing them by 40% for 2 seconds. Enemies with their facing direction towards her are instead stunned for the same duration.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      150,
                      250,
                      350,
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
            ],
          },
        ],
        cost: [
          100,
        ],
        cooldown: [
          120,
          100,
          80,
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'spellaoe',
        projectile: 'FALSE',
        notes: 'This ability will cast from wherever the caster is at the end of the cast time.\nCassiopeia will turn to face the target direction over the cast time.\nPetrifying Gaze\'s target direction will change if Cassiopeia\'s facing direction changes during the cast time (i.e. through  knockbacks).\nThe visual effect will not follow changes in Cassiopeia\'s facing direction and may not portray Petrifying Gaze\'s target direction accurately.(bug)\nThe facing direction of champions whose abilities/animations cause them to lock their facing or spin is always the direction they are moving in. For abilities that cause the champion to spin in place (e.g.  Death Lotus,  Judgment) it will factor the direction they were facing on cast.\n Lucian\'s  The Culling is an exception and his facing direction is actually considered to be the direction he is facing.',
        blurb: 'Active:  Cassiopeia blasts in a cone, dealing magic damage to enemies hit and  stunning any that are facing her, while  slowing any others with their back turned.',
        angle: '80°',
        castTime: '0.5',
        effectRadius: '850',
        maxCharges: -1,
      },
    ],
  },
  lore: 'Cassiopeia is a deadly creature bent on manipulating others to her sinister will. Youngest and most beautiful daughter of the noble Du Couteau family of Noxus, she ventured deep into the crypts beneath Shurima in search of ancient power. There, she was bitten by a gruesome tomb guardian, whose venom transformed her into a viper-like predator. Cunning and agile, Cassiopeia now slithers under the veil of night, petrifying her enemies with her baleful gaze.',
}
export default champion