// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion = {
  id: 35,
  key: 'Shaco',
  name: 'Shaco',
  title: 'the Demon Jester',
  resource: 'Mana',
  attackType: 'Melee',
  stats: {
    health: {
      flat: 630,
      perLevel: 99,
    },
    healthRegen: {
      flat: 8.5,
      perLevel: 0.55,
    },
    mana: {
      flat: 297,
      perLevel: 40,
    },
    manaRegen: {
      flat: 6,
      perLevel: 0.35,
    },
    armor: {
      flat: 30,
      perLevel: 4,
    },
    magicResistance: {
      flat: 32,
      perLevel: 2.05,
    },
    attackDamage: {
      flat: 63,
      perLevel: 3,
    },
    movespeed: {
      flat: 345,
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
      flat: 0.694,
      perLevel: 3,
    },
    attackSpeedRatio: {
      flat: 0.694,
    },
    attackCastTime: {
      flat: 0.3,
    },
    attackTotalTime: {
      flat: 1.6,
    },
    attackDelayOffset: {
      flat: -0.078,
    },
    attackRange: {
      flat: 125,
    },
  },
  positions: [
    'Jungle',
    'Support',
  ],
  roles: [
    'Assassin',
  ],
  attributeRatings: {
    damage: 3,
    toughness: 1,
    control: 2,
    mobility: 2,
    utility: 2,
    abilityReliance: 45,
    difficulty: 2,
  },
  abilities: {
    P: [
      {
        name: 'Backstab',
        icon: 'https://cdn.communitydragon.org/latest/champion/Shaco/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Shaco\'s basic attacks are empowered to deal 20 - 35 (based on level) (+ 30% bonus AD) bonus physical damage when hitting an enemy from behind. Backstab is affected by critical strike modifiers.</p>',
          },
          {
            description: 'Deceive and Two-Shiv Poison have additional effects when they hit an enemy from behind.',
          },
        ],
        targeting: 'Passive',
        affects: 'Enemies',
        spellshieldable: 'False',
        damageType: 'Physical damage',
        spellEffects: 'basic',
        notes: 'Backstab\'s bonus damage adds to the damage instance of the original basic attack.\nThe attacks do not deal the bonus damage against structures.',
        blurb: 'Innate:  Shaco\'s basic attacks deal bonus physical damage when hitting an enemy from behind.',
      },
    ],
    Q: [
      {
        name: 'Deceive',
        icon: 'https://cdn.communitydragon.org/latest/champion/Shaco/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Shaco becomes invisible for a duration, and after a 0.125-second delay, he blinks to the target location.</p>',
            leveling: [
              {
                attribute: 'Invisibility Duration',
                modifiers: [
                  {
                    values: [
                      2.5,
                      2.75,
                      3,
                      3.25,
                      3.5,
                    ],
                    units: [
                      ' seconds',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'Deceive\'s invisibility breaks when Shaco uses a basic attack or casts Two-Shiv Poison or Recall, but not from casting Jack in the Box or Hallucinate.',
          },
          {
            description: 'After breaking the invisibility, Shaco empowers his next basic attack within 0.25 seconds to deal bonus physical damage, which is affected by critical strike modifiers.',
            leveling: [
              {
                attribute: 'Bonus Physical Damage',
                modifiers: [
                  {
                    values: [
                      25,
                      35,
                      45,
                      55,
                      65,
                    ],
                  },
                  {
                    values: [
                      65,
                    ],
                    units: [
                      '% bonus AD',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Backstab Bonus:</span> The attack will critically strike for (155% + 40%) damage.</p>',
          },
        ],
        cost: [
          40,
        ],
        cooldown: [
          12,
          11.5,
          11,
          10.5,
          10,
        ],
        targeting: 'Location',
        affects: 'Self',
        resource: 'Mana',
        damageType: 'Physical damage',
        spellEffects: 'basic',
        notes: 'If the attack would have already  critically struck based on Shaco\'s critical strike chance, the base  Backstab critical damage modifier will be overridden by the default critical damage modifier.\nDeceive\'s bonus damage adds directly to the damage instance of the basic attack.\nUsing a basic attack breaks the stealth at the end of the attack windup.',
        blurb: 'Active:  Shaco becomes  invisible for a short time and  blinks to the target location.',
        castTime: 'none',
        targetRange: '400',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Jack in the Box',
        icon: 'https://cdn.communitydragon.org/latest/champion/Shaco/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Shaco summons a box at the target location that becomes stealthed after arming over 2 seconds, lasting for up to 40 (+ 10% AP) seconds. The box is invulnerable and untargetable to enemies while stealthed.</p>',
          },
          {
            description: 'The box will spring out upon enemy contact, fearing nearby enemies for a duration, modified to 2.2 seconds against non-champions, and rooting them for a duration, modified to a 1 second root against non-champions. After a 0.15-second delay of the box\'s activation, enemies hit also have their movement speed reduced. Enemy champions have their movement speed set to a static 100, while non-champions are set to a static 60. The movement speed reduction lasts for the same duration as the fear plus 0.3 seconds.',
            leveling: [
              {
                attribute: 'Fear Duration',
                modifiers: [
                  {
                    values: [
                      0.5,
                      0.75,
                      1,
                      1.25,
                      1.5,
                    ],
                    units: [
                      ' seconds',
                    ],
                  },
                ],
              },
              {
                attribute: 'Root Duration',
                modifiers: [
                  {
                    values: [
                      0.5,
                      0.75,
                      1,
                      1,
                      1,
                    ],
                    units: [
                      ' seconds',
                    ],
                  },
                ],
              },
              {
                attribute: 'Slow Duration',
                modifiers: [
                  {
                    values: [
                      0.8,
                      1.05,
                      1.3,
                      1.55,
                      1.8,
                    ],
                    units: [
                      ' seconds',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'Once sprung, the box will remain for 5 seconds, during which it will automatically fire at nearby visible enemies every 0.5 seconds, dealing magic damage with each attack. If the box attacks only one target, it deals increased damage. Boxes deal bonus magic damage to monsters and 50% reduced damage to structures.',
            leveling: [
              {
                attribute: 'Magic Damage',
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
                      12,
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
                      25,
                      40,
                      55,
                      70,
                      85,
                    ],
                  },
                  {
                    values: [
                      18,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Bonus Monster Damage',
                modifiers: [
                  {
                    values: [
                      20,
                      35,
                      50,
                      65,
                      80,
                    ],
                  },
                ],
              },
              {
                attribute: 'Total Monster Damage',
                modifiers: [
                  {
                    values: [
                      30,
                      50,
                      70,
                      90,
                      110,
                    ],
                  },
                  {
                    values: [
                      12,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Increased Monster Damage',
                modifiers: [
                  {
                    values: [
                      45,
                      75,
                      105,
                      135,
                      165,
                    ],
                  },
                  {
                    values: [
                      18,
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
            description: 'See Pets for more details about boxes.',
          },
        ],
        cost: [
          70,
          65,
          60,
          55,
          50,
        ],
        cooldown: [
          15,
        ],
        targeting: 'Location',
        affects: 'Enemies',
        spellshieldable: 'true',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'aoe',
        notes: 'The root and fear are applied at the same time. The target cannot be forced to move by the fear during the root.\nThe target is however allowed to move despite being rooted for the first 0.1 seconds of the root. They can be forced to move by the fear during this time.\nStatic movement speed cannot be modified (e.g. with  slow resist or  bonus movement speed).\nThis effect can be negated if the target is  slow-immune.\nThe box is  untargetable and  invulnerable so long as it is in  stealth. Effects that reveal  stealthed traps will render the box targetable and vulnerable while it can be seen.',
        blurb: 'Active:  Shaco summons a box at the target location that becomes  stealthed after a short time.',
        castTime: '0.25',
        targetRange: '500',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Two-Shiv Poison',
        icon: 'https://cdn.communitydragon.org/latest/champion/Shaco/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Shaco\'s basic attacks slow enemies for 2 seconds while Two-Shiv Poison is not on cooldown.</p>',
            leveling: [
              {
                attribute: 'Slow',
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
                ],
              },
            ],
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Shaco throws a dagger at the target enemy that deals magic damage, increased by 50% if they are below 30% of their maximum health, and slows them for 3 seconds.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      70,
                      95,
                      120,
                      145,
                      170,
                    ],
                  },
                  {
                    values: [
                      80,
                    ],
                    units: [
                      '% bonus AD',
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
                attribute: 'Increased Damage',
                modifiers: [
                  {
                    values: [
                      105,
                      142.5,
                      180,
                      217.5,
                      255,
                    ],
                  },
                  {
                    values: [
                      120,
                    ],
                    units: [
                      '% bonus AD',
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
                attribute: 'Slow',
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
                ],
              },
            ],
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Backstab Bonus:</span> The dagger deals an additional 15 - 50 (based on level) (+ 10% AP) bonus magic damage, increased to 22.5 - 75 (based on level) (+ 15% AP) if the target is below 30% of their maximum health.</p>',
          },
        ],
        cost: [
          75,
        ],
        cooldown: [
          8,
        ],
        targeting: 'Unit',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'Spell',
        projectile: 'TRUE',
        notes: 'Shaco replicates the last attack animation he performed for Two-Shiv Poison\'s animation.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).',
        blurb: 'Passive: While Two-Shiv Poison is not on cooldown,  Shaco\'s basic attacks will  slow enemies for a short time.',
        castTime: '0.25',
        targetRange: '625',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'Hallucinate',
        icon: 'https://cdn.communitydragon.org/latest/champion/Shaco/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Shaco vanishes for 0.5 seconds and blinks in the target direction while creating a clone of himself that is summoned in the opposite direction, remaining within control range of him as a controllable clone for up to 18 seconds. Hallucinate can be recast at any time while the clone is alive, and can be used while affected by cast-inhibiting crowd control.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Shaco commands the clone to move to the target location.</p>',
          },
          {
            description: 'The clone will explode upon dying or expiring to deal magic damage to nearby enemies and deploy three mini-boxes that activate instantly, fearing nearby enemies for 1 second, increased to 2.2 seconds against non-champions, and rooting them for 0.5 seconds, increased to 0.6 seconds against monsters and 1 second against minions. After a 0.15-second delay of the boxes\' activation, enemies hit also have their movement speed reduced. Enemy champions have their movement speed set to a static 100, while non-champions are set to a static 60. The movement speed reduction lasts for the same duration as the fear plus 0.3 seconds.',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      150,
                      225,
                      300,
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
            description: 'The boxes possess Jack in the Box\'s effects, except they have a doubled, but shared health, and deal modified magic damage with each attack, increased when attacking a single unit. They are also invulnerable for 0.5 seconds after deployment.',
            leveling: [
              {
                attribute: 'Modified Magic Damage',
                modifiers: [
                  {
                    values: [
                      10,
                      20,
                      30,
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
                attribute: 'Increased Modified Damage',
                modifiers: [
                  {
                    values: [
                      25,
                      50,
                      75,
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
            description: 'See Pets for more details about Shaco\'s clone.',
          },
        ],
        cost: [
          100,
        ],
        cooldown: [
          100,
          90,
          80,
        ],
        targeting: 'Direction / Location',
        affects: 'Self',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'Special',
        notes: 'If the explosion hits at least one minion, the boxes will fear all enemies regardless of their unit type for 2.2 seconds, causing enemy champions to be feared for the non-champion fear duration.(bug)\nThe root and fear are applied at the same time. The target cannot be forced to move by the fear during the root.\nThe target is however allowed to move despite being rooted for the first 0.15 seconds of the root. They can be forced to move by the fear during this time.\nShaco and the Hallucination will face each other the moment of their appearance.\nThe explosion and the boxes apply  area damage, while the clone deals  pet damage.\nHallucinate will cast from wherever Shaco is at the end of the cast time.\nWhen Shaco dies, the clone will automatically target the closest visible enemy champion within 1500 units.\nThe clone will always spawn in the opposite direction of the cursor.\nIf Deceive and Hallucinate are used in quick succession, the clone will spawn in the direction of the cursor instead.',
        blurb: 'Active:  Shaco briefly  vanishes and  blinks in the target direction, creating a  clone of himself for some time.',
        castTime: '0.25',
        effectRadius: '250',
        maxCharges: -1,
      },
    ],
  },
  lore: 'Crafted long ago as a plaything for a lonely prince, the enchanted marionette Shaco now delights in murder and mayhem. Corrupted by dark magic and the loss of his beloved charge, the once-kind puppet finds pleasure only in the misery of the poor souls he torments. He uses toys and simple tricks to deadly effect, finding the results of his bloody “games” hilarious—and for those who hear a dark chuckle in the dead of night, the Demon Jester may have marked them as his next plaything.',
}
export default champion