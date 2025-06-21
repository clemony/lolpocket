// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion = {
  id: 43,
  key: 'Karma',
  name: 'Karma',
  title: 'the Enlightened One',
  fullName: 'Darha',
  resource: 'Mana',
  attackType: 'Ranged',
  stats: {
    health: {
      flat: 630,
      perLevel: 109,
    },
    healthRegen: {
      flat: 5.5,
      perLevel: 0.55,
    },
    mana: {
      flat: 374,
      perLevel: 40,
    },
    manaRegen: {
      flat: 13,
      perLevel: 0.8,
    },
    armor: {
      flat: 28,
      perLevel: 5,
    },
    magicResistance: {
      flat: 30,
      perLevel: 1.3,
    },
    attackDamage: {
      flat: 51,
      perLevel: 3.3,
    },
    movespeed: {
      flat: 335,
    },
    acquisitionRadius: {
      flat: 525,
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
      flat: 0.625,
      perLevel: 2.3,
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
    attackDelayOffset: {
      flat: -0.139,
    },
    attackRange: {
      flat: 525,
    },
  },
  positions: [
    'Middle',
    'Support',
    'Top',
  ],
  roles: [
    'Burst',
    'Enchanter',
    'Mage',
    'Support',
  ],
  attributeRatings: {
    damage: 2,
    toughness: 1,
    control: 2,
    mobility: 1,
    utility: 2,
    abilityReliance: 100,
    difficulty: 1,
  },
  abilities: {
    P: [
      {
        name: 'Gathering Fire',
        icon: 'https://cdn.communitydragon.org/latest/champion/Karma/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Mantra\'s current cooldown is reduced by 4 seconds for each enemy champion hit by Karma\'s damaging abilities.</p>',
          },
        ],
        targeting: 'Passive',
        affects: 'Self',
        notes: 'Inner Flame /  Soulflare reduces  Mantra\'s cooldown per champion hit by either damage instance (up to a maximum total reduction of 40 seconds if 5 enemy champions are hit by both instances of damage).\n Focused Resolve /  Renewal reduces  Mantra\'s cooldown when initially cast and again after the duration for the tether has expired (for a total reduction of 8 seconds).',
        blurb: 'Innate:  Mantra\'s current cooldown is  reduced by a few seconds for each enemy champion hit by  Karma\'s damaging abilities.',
      },
    ],
    Q: [
      {
        name: 'Inner Flame',
        icon: 'https://cdn.communitydragon.org/latest/champion/Karma/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Karma fires a bolt in the target direction that explodes on the first enemy hit, dealing magic damage to nearby enemies and slowing them by 40% for 1.5 seconds.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      60,
                      110,
                      160,
                      210,
                      260,
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
                ],
              },
            ],
          },
        ],
        cost: [
          40,
          50,
          60,
          70,
          80,
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
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'Area of effect',
        projectile: 'TRUE',
        notes: 'Spell shield will block the initial impact from Inner Flame.\nThis ability will cast from wherever the caster is at the end of the cast time.\nInner Flame\'s effect radius is centered around the location of the missile as it collides.',
        blurb: 'Active:  Karma fires a bolt in the target direction that explodes on the first enemy hit, dealing magic damage to nearby enemies and briefly  slowing them.',
        speed: '1700',
        width: '120',
        castTime: '0.25',
        effectRadius: '280',
        targetRange: '950 /  890',
        maxCharges: -1,
      },
      {
        name: 'Soulflare',
        icon: 'https://cdn.communitydragon.org/latest/champion/Karma/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Mantra Bonus:</span> Inner Flame deals increased damage, and fires a larger bolt that also explodes at maximum range.</p>',
            leveling: [
              {
                attribute: 'Bonus Magic Damage',
                modifiers: [
                  {
                    values: [
                      40,
                      100,
                      160,
                      220,
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
                attribute: 'Total Magic Damage',
                modifiers: [
                  {
                    values: [
                      60,
                      110,
                      160,
                      210,
                      260,
                    ],
                  },
                  {
                    values: [
                      40,
                      100,
                      160,
                      220,
                    ],
                  },
                  {
                    values: [
                      100,
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
            description: 'The explosion creates a field for 1.5 seconds that slows enemies within by 50%, which then ruptures to deal magic damage.',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      40,
                      130,
                      220,
                      310,
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
                attribute: 'Total Bonus Damage',
                modifiers: [
                  {
                    values: [
                      80,
                      230,
                      380,
                      530,
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
                attribute: 'Total Damage',
                modifiers: [
                  {
                    values: [
                      60,
                      110,
                      160,
                      210,
                      260,
                    ],
                  },
                  {
                    values: [
                      80,
                      230,
                      380,
                      530,
                    ],
                  },
                  {
                    values: [
                      150,
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
            description: 'Soulflare scales with Mantra\'s rank.',
          },
        ],
        cost: [
          40,
          50,
          60,
          70,
          80,
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
        damageType: 'Magic damage',
        spellEffects: 'spellaoe',
        projectile: 'TRUE',
        notes: 'Spell shield will block the initial impact from either ability but will not block Soulflare\'s field damage.\nSoulflare\'s detonation radius is centered around the location of the missile as it collides, while the lingering field will always be created at the impacted enemy\'s center instead.\nSoulflare will cast from wherever Karma is at the end of the cast time.',
        blurb: 'Mantra Bonus: Inner Flame deals increased damage, and fires a larger bolt that also explodes at max range.',
        width: '160',
        effectRadius: '280',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Focused Resolve',
        icon: 'https://cdn.communitydragon.org/latest/champion/Karma/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Karma deals magic damage to the target enemy champion, monster or pet and forms a tether between her and them for 2 seconds, during which they are revealed.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      40,
                      65,
                      90,
                      115,
                      140,
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
          {
            description: 'If the tether is not broken by the end of its duration, the target is dealt the same magic damage again and is rooted for a duration, during which they are revealed.',
            leveling: [
              {
                attribute: 'Total Magic Damage',
                modifiers: [
                  {
                    values: [
                      80,
                      130,
                      180,
                      230,
                      280,
                    ],
                  },
                  {
                    values: [
                      90,
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
                      1.6,
                      1.7,
                      1.8,
                      1.9,
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
          12,
        ],
        targeting: 'Unit',
        affects: 'Enemies / Self',
        spellshieldable: 'Special',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'spell',
        projectile: 'FALSE',
        notes: 'Spell shield will block the tether\'s application and damage but not the aftereffects of one already applied.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).',
        blurb: 'Active:  Karma deals magic damage and  tethers to the target enemy  champion,  monster or  pet.',
        tetherRadius: '825',
        castTime: '0.25',
        targetRange: '675',
        maxCharges: -1,
      },
      {
        name: 'Renewal',
        icon: 'https://cdn.communitydragon.org/latest/champion/Karma/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Mantra Bonus:</span> Focused Resolve\'s root duration is increased. Karma heals for 17% (+ 1% per 100 AP) of her missing health once on-cast, and again once the tether lasts its full duration or the target dies while tethered.</p>',
            leveling: [
              {
                attribute: 'Root Duration Increase',
                modifiers: [
                  {
                    values: [
                      0.5,
                      0.75,
                      1,
                      1.25,
                    ],
                    units: [
                      ' seconds',
                    ],
                  },
                ],
              },
              {
                attribute: 'Total Root Duration',
                modifiers: [
                  {
                    values: [
                      1.6,
                      1.7,
                      1.8,
                      1.9,
                      2,
                    ],
                    units: [
                      '  seconds',
                    ],
                  },
                  {
                    values: [
                      0.5,
                      0.75,
                      1,
                      1.25,
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'Renewal scales with Mantra\'s rank.',
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
          12,
        ],
        targeting: 'Unit',
        affects: 'Enemies / Self',
        spellshieldable: 'Special',
        damageType: 'Magic damage',
        spellEffects: 'spell',
        projectile: 'FALSE',
        notes: 'Spell shield will block the tether\'s application and damage but not the aftereffects of one already applied.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).',
        blurb: 'Mantra Bonus:\nFocused Resolve\'s  root is increased.',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Inspire',
        icon: 'https://cdn.communitydragon.org/latest/champion/Karma/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Karma grants a shield to herself or the target allied champion for 2.5 seconds as well as 40% bonus movement speed for 2 seconds.</p>',
            leveling: [
              {
                attribute: 'Shield Strength',
                modifiers: [
                  {
                    values: [
                      80,
                      130,
                      180,
                      230,
                      280,
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
        ],
        cost: [
          50,
          55,
          60,
          65,
          70,
        ],
        cooldown: [
          10,
          9.5,
          9,
          8.5,
          8,
        ],
        targeting: 'Unit',
        affects: 'Allies',
        resource: 'Mana',
        notes: 'Inspire has a  forgiveness radius of 175 units.',
        blurb: 'Active:  Karma applies a  shield on herself or the target allied champion for a short time, which briefly grants  bonus movement speed.',
        castTime: 'none',
        targetRange: '800',
        maxCharges: -1,
      },
      {
        name: 'Defiance',
        icon: 'https://cdn.communitydragon.org/latest/champion/Karma/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Mantra - Active:</span> Inspire\'s shield strength is increased. Inspire spreads to surrounding allied champions, granting them a shield equal to Defiance\'s bonus shield and[ Inspire\'s bonus movement speed at 37.5% effectiveness. ][ 15% bonus movement speed. ]</p>',
            leveling: [
              {
                attribute: 'Bonus Shield/Secondary Target Shield',
                modifiers: [
                  {
                    values: [
                      50,
                      100,
                      150,
                      200,
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
                attribute: 'Primary Target Total Shield',
                modifiers: [
                  {
                    values: [
                      80,
                      130,
                      180,
                      230,
                      280,
                    ],
                  },
                  {
                    values: [
                      50,
                      100,
                      150,
                      200,
                    ],
                  },
                  {
                    values: [
                      105,
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
            description: 'Defiance scales with Mantra\'s rank.',
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
          10,
          9.5,
          9,
          8.5,
          8,
        ],
        targeting: 'Unit',
        affects: 'Allies',
        resource: 'Mana',
        notes: 'Defiance has a  forgiveness radius of 175 units.',
        blurb: 'Mantra Bonus:\nInspire\'s shield is increased, and Inspire spreads to surrounding allied champions at reduced power.',
        castTime: 'none',
        effectRadius: '700',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'Mantra',
        icon: 'https://cdn.communitydragon.org/latest/champion/Karma/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Karma empowers her next basic ability within 8 seconds for an additional effect. Mantra can be used while affected by cast-inhibiting crowd control.</p>',
          },
          {
            description: 'Karma begins the game with one rank in Mantra. Her empowered abilities scale based on Mantra\'s rank.',
          },
        ],
        cost: [
          0,
        ],
        cooldown: [
          40,
          38,
          36,
          34,
        ],
        targeting: 'Auto',
        affects: 'Self',
        blurb: 'Active:  Karma empowers her next ability within a period to apply an additional effect.',
        castTime: 'none',
        maxCharges: -1,
      },
    ],
  },
  lore: 'No mortal exemplifies the spiritual traditions of Ionia more than Karma. She is the living embodiment of an ancient soul reincarnated countless times, carrying all her accumulated memories into each new life, and blessed with power that few can comprehend. She has done her best to guide her people in recent times of crisis, though she knows that peace and harmony may come only at a considerable cost—both to her, and to the land she holds most dear.',
}
export default champion