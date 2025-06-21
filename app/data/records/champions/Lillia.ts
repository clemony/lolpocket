// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion = {
  id: 876,
  key: 'Lillia',
  name: 'Lillia',
  title: 'the Bashful Bloom',
  resource: 'Mana',
  attackType: 'Melee',
  stats: {
    health: {
      flat: 605,
      perLevel: 105,
    },
    healthRegen: {
      flat: 2.5,
      perLevel: 0.55,
    },
    mana: {
      flat: 410,
      perLevel: 50,
    },
    manaRegen: {
      flat: 11.5,
      perLevel: 0.95,
    },
    armor: {
      flat: 22,
      perLevel: 4.5,
    },
    magicResistance: {
      flat: 32,
      perLevel: 1.55,
    },
    attackDamage: {
      flat: 61,
      perLevel: 3.1,
    },
    movespeed: {
      flat: 330,
    },
    acquisitionRadius: {
      flat: 400,
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
      flat: 0.625,
      perLevel: 2.7,
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
      flat: -0.153,
    },
    attackRange: {
      flat: 325,
    },
  },
  positions: [
    'Jungle',
  ],
  roles: [
    'Fighter',
    'Mage',
    'Skirmisher',
  ],
  attributeRatings: {
    damage: 3,
    toughness: 1,
    control: 2,
    mobility: 2,
    utility: 2,
    abilityReliance: 80,
    difficulty: 3,
  },
  abilities: {
    P: [
      {
        name: 'Dream-Laden Bough',
        icon: 'https://cdn.communitydragon.org/latest/champion/Lillia/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Lillia\'s abilities apply Dream Dust to enemies hit, which deals[ 5% (+ 1.25% per 100 AP) of the target\'s maximum health total magic damage over 3 seconds, capped at 65 against monsters. ][ 0.83% (+ 0.2083% per 100 AP) of the target\'s maximum health magic damage every 0.5 seconds over 3 seconds, capped at 10.83 per tick against monsters. ]</p>',
          },
          {
            description: 'Lillia heals herself for[ 39 (+ 15% AP) against large monsters and 6 - 90 (based on level) (+ 30% AP) against champions ][ 6.5 (+ 2.5% AP) against large monsters and 1 - 15 (based on level) (+ 5% AP) against champions every 0.5 seconds ]over the duration of Dream Dust, reduced to 15% effectiveness for each target afflicted beyond the first. She may only heal against 1 monster at a time.',
          },
        ],
        targeting: 'Passive',
        affects: 'Enemies',
        spellshieldable: 'true',
        damageType: 'Magic damage',
        spellEffects: 'dot',
        notes: 'Lilting Lullaby\'s application does not apply Dream Dust, but its triggering damage does.\nDream Dust is applied even if the target takes no damage from an ability, e.g. by being  shielded or  invulnerable, but not when the ability hit is prevented in the first place (e.g.  spell shield).',
        blurb: 'Innate:  Lillia\'s abilities apply Dream Dust to enemies hit, which continually deals magic damage based on the target\'s maximum health over a short time, and  heals her for the same duration.',
      },
    ],
    Q: [
      {
        name: 'Blooming Blows',
        icon: 'https://cdn.communitydragon.org/latest/champion/Lillia/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Whenever Lillia\'s abilities hit at least one enemy, she generates a stack of Prance for 6.5 seconds, refreshing on subsequent hits and stacking up to 4 times. Stacks expire by one every 1.5 seconds when the duration ends.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Prance:</span> For each stack, Lillia gains bonus movement speed.</p>',
            leveling: [
              {
                attribute: 'Bonus Movement Speed per Stack',
                modifiers: [
                  {
                    values: [
                      3,
                      4,
                      5,
                      6,
                      7,
                    ],
                    units: [
                      '%',
                    ],
                  },
                  {
                    values: [
                      3,
                    ],
                    units: [
                      '% per 100 AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Maximum Bonus Movement Speed',
                modifiers: [
                  {
                    values: [
                      12,
                      16,
                      20,
                      24,
                      28,
                    ],
                    units: [
                      '%',
                    ],
                  },
                  {
                    values: [
                      12,
                    ],
                    units: [
                      '% per 100 AP',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Lillia swings her censer around her, dealing magic damage to nearby enemies. Enemies hit within the outer edge of the area additionally take the same amount as bonus true damage.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      35,
                      45,
                      55,
                      65,
                      75,
                    ],
                  },
                  {
                    values: [
                      35,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Total Mixed Damage',
                modifiers: [
                  {
                    values: [
                      70,
                      90,
                      110,
                      130,
                      150,
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
          {
            description: 'Lillia can move during Blooming Blows\' cast time.',
          },
        ],
        cost: [
          65,
        ],
        cooldown: [
          6,
          5.5,
          5,
          4.5,
          4,
        ],
        targeting: 'Auto',
        affects: 'Self, Enemies',
        spellshieldable: 'true',
        resource: 'Mana',
        damageType: 'Mixed damage',
        spellEffects: 'aoe',
        notes: 'Spell shield will not prevent Lillia from gaining a Prance stack.\nFor the purpose of aim-assist, Lillia\'s  attack range is reduced[ to 275 ][ by 50 ]during Blooming Blows\'s cast time.',
        blurb: 'Passive: Whenever  Lillia\'s abilities hit at least one enemy, she generates a stack of Prance, up to a cap.',
        castTime: '0.25',
        effectRadius: '225 / 485',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Watch Out! Eep!',
        icon: 'https://cdn.communitydragon.org/latest/champion/Lillia/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Lillia dashes to 150 units in front of the target location over 0.759 seconds, though not through terrain, and deals magic damage in an area around the target spot. Enemies hit within the epicenter are dealt 200% increased damage.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      80,
                      100,
                      120,
                      140,
                      160,
                    ],
                  },
                  {
                    values: [
                      35,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Increased Damage',
                modifiers: [
                  {
                    values: [
                      240,
                      300,
                      360,
                      420,
                      480,
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
            description: 'Watch Out! Eep! deals 50% damage to minions.',
            leveling: [
              {
                attribute: 'Minion Damage',
                modifiers: [
                  {
                    values: [
                      40,
                      50,
                      60,
                      70,
                      80,
                    ],
                  },
                  {
                    values: [
                      17.5,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Increased Minion Damage',
                modifiers: [
                  {
                    values: [
                      120,
                      150,
                      180,
                      210,
                      240,
                    ],
                  },
                  {
                    values: [
                      52.5,
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
        ],
        cooldown: [
          14,
          13,
          12,
          11,
          10,
        ],
        targeting: 'Location',
        affects: 'Enemies',
        spellshieldable: 'true',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'aoe',
        notes: 'Lillia dashes to her target location over 0.627 to 0.759 seconds, but cannot move before the strike goes off at 0.759 seconds, regardless.\nLillia can hop over the edges of certain walls despite the ability being unable to traverse terrain.',
        blurb: 'Active:  Lillia  dashes toward the target area and smashes her censer, dealing magic damage to enemies hit. Enemies hit within the epicenter are dealt  increased damage.',
        castTime: 'None',
        effectRadius: '65 /  250',
        targetRange: '500 / 350',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Swirlseed',
        icon: 'https://cdn.communitydragon.org/latest/champion/Lillia/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Lillia lobs a seed at the target location that rolls forward indefinitely. The seed detonates upon hitting an enemy or terrain while on the ground, dealing magic damage to enemies in a cone, slowing them by 40% for 3 seconds and revealing them for 2 seconds.</p>',
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
          70,
        ],
        cooldown: [
          12,
        ],
        targeting: 'Location',
        affects: 'Enemies',
        spellshieldable: 'special',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'aoe',
        projectile: 'SPECIAL',
        notes: 'Swirlseed\'s origin is determined from Lillia\'s position at the start of cast, the rolling direction is determined from Lillia\'s position at the end of cast (when the projectile is created, not when the seed starts rolling).\n Spell shield does not prevent the seed from detonating thus striking nearby targets.\n Projectile destroying effects will still make the rolling seed detonate upon colliding with them, but not when the initial arcing missile is destroyed.\nIf  Braum\'s  Unbreakable blocks the initial projectile, it is destroyed and deals 0 damage to him, as well as not triggering the cone-shaped area of effect.\nThe spot at which the seed will collide with terrain is highlighted while it is rolling.\nCollision indicator',
        blurb: 'Active:  Lillia lobs a seed at the target area that rolls forward indefinitely. The seed detonates upon hitting an enemy or terrain, dealing magic damage to enemies in a cone,  slowing and  revealing them for a short time.',
        speed: '5000 / 1400',
        width: '120',
        castTime: '0.4',
        effectRadius: '150',
        targetRange: '700 / Global',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'Lilting Lullaby',
        icon: 'https://cdn.communitydragon.org/latest/champion/Lillia/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Lillia casts a magical lullaby over all enemy champions affected by Dream Dust, which arrives after 0.3 seconds and renders them drowsy for 1.5 seconds, slowing them by 10%. After the duration, they fall asleep for 2 seconds.</p>',
          },
          {
            description: 'The next instance of non- persistent damage that a sleeping target takes from champions, large monsters or turrets consumes the debuff to deal additional magic damage.',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      100,
                      150,
                      200,
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
            description: 'An enemy champion affected by Dream Dust is required to cast this ability.',
          },
        ],
        cost: [
          50,
        ],
        cooldown: [
          150,
          130,
          110,
        ],
        targeting: 'Auto',
        affects: 'Enemies',
        spellshieldable: 'special',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'spell',
        projectile: 'TRUE',
        notes: 'Spell shield will not prevent falling  asleep nor block the wake-up damage.\nThe lullaby\'s  drowsy application will be blocked.\nLillia can move during Lilting Lullaby\'s cast time.\nThe additional magic damage dealt is accredited to Lillia and benefits from her  magic penetration.\nLilting Lullaby\'s missile will not hit if the target becomes  untargetable during the cast time or while it is travelling.\nLilting Lullaby\'s application does not trigger aggro from  turrets, only its triggering damage does.\n Dream Dust\'s persistent damage will still cause Lillia to trigger turret aggro, unless she casts Lilting Lullaby right before it runs out.\n Dream Dust will mark targets if Lilting Lullaby is learned.',
        blurb: 'Active:  Lillia casts a magical lullaby over all enemy  champions affected by  Dream Dust, making them  drowsy before falling  asleep for a few seconds.',
        castTime: '0.4',
        targetRange: 'Global',
        maxCharges: -1,
      },
    ],
  },
  lore: 'Intensely shy, the fae fawn Lillia skittishly wanders Ionia\'s forests. Hiding just out of sight of mortals—whose mysterious natures have long captivated, but intimidated, her—Lillia hopes to discover why their dreams no longer reach the ancient Dreaming Tree. She now travels Ionia with a magical branch in hand, in an effort to find people\'s unrealized dreams. Only then can Lillia herself bloom and help others untangle their fears to find the sparkle within. Eep!',
}
export default champion