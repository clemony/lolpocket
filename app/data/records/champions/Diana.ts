// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion = {
  id: 131,
  key: 'Diana',
  name: 'Diana',
  title: 'Scorn of the Moon',
  resource: 'Mana',
  attackType: 'Melee',
  stats: {
    health: {
      flat: 640,
      perLevel: 109,
    },
    healthRegen: {
      flat: 6.5,
      perLevel: 0.85,
    },
    mana: {
      flat: 375,
      perLevel: 25,
    },
    manaRegen: {
      flat: 8,
      perLevel: 0.8,
    },
    armor: {
      flat: 31,
      perLevel: 4.3,
    },
    magicResistance: {
      flat: 32,
      perLevel: 2.05,
    },
    attackDamage: {
      flat: 57,
      perLevel: 3,
    },
    movespeed: {
      flat: 345,
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
      flat: 0.625,
      perLevel: 2,
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
      flat: -0.092,
    },
    attackRange: {
      flat: 150,
    },
  },
  positions: [
    'Jungle',
    'Middle',
  ],
  roles: [
    'Assassin',
    'Diver',
    'Fighter',
  ],
  attributeRatings: {
    damage: 3,
    toughness: 2,
    control: 2,
    mobility: 2,
    utility: 1,
    abilityReliance: 65,
    difficulty: 1,
  },
  abilities: {
    P: [
      {
        name: 'Moonsilver Blade',
        icon: 'https://cdn.communitydragon.org/latest/champion/Diana/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Diana gains 15% - 35% (based on level) bonus attack speed. After casting an ability, this bonus is tripled to 45% - 105% (based on level) for 5 seconds.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate - Moonsilver Blade:</span> Diana\'s basic attacks generate a stack of Moonsilver Blade for 5 seconds, refreshing on subsequent attacks and stacking up to 2 times. At 2 stacks, Diana empowers her next basic attack to consume the stacks on-hit to additionally cleave nearby enemies, dealing them 20 - 220 (based on level) (+ 50% AP) magic damage. Moonsilver Blade deals 260% damage against monsters.</p>',
          },
        ],
        targeting: 'Passive',
        affects: 'Self / Enemies',
        spellshieldable: 'true',
        damageType: 'Magic damage',
        spellEffects: 'spellaoe',
        notes: 'Moonsilver Blade will affect structures.\nEach attack has a distinct animation and she will glow when the empowered attack is ready.\nSometimes, the empowered basic attack will not consume the stacks.(bug)\nIn this case, the attack will also not deal its damage.',
        blurb: 'Innate:  Diana gains  attack speed, increased shortly after casting an ability.',
        effectRadius: '175',
      },
    ],
    Q: [
      {
        name: 'Crescent Strike',
        icon: 'https://cdn.communitydragon.org/latest/champion/Diana/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Diana unleashes a bolt of lunar energy that travels in a counter-clockwise arc before exploding at the target location, granting sight of the area for 0.5 seconds and dealing magic damage to enemies hit and afflicting them with Moonlight for 3 seconds, during which they are revealed.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      70,
                      105,
                      140,
                      175,
                      210,
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
            description: 'Lunar Rush interacts with Moonlight.',
          },
        ],
        cost: [
          50,
        ],
        cooldown: [
          8,
          7.5,
          7,
          6.5,
          6,
        ],
        targeting: 'Location',
        affects: 'Enemies',
        spellshieldable: 'special',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'aoe',
        projectile: 'TRUE',
        notes: 'Even if the target  spell shields the bolt, they may still be damaged by the explosion. Moonlight is not applied to the protected target if blocked.\nThis ability will cast from wherever the caster is at the end of the cast time.\nIf the ability is cast at max range and she is moved backwards while casting, the bolt will travel to the target location with increased distance.(bug)',
        blurb: 'Active:  Diana unleashes a bolt of lunar energy that deals magic damage to enemies hit in an arc before exploding at the target location.',
        speed: '1900 / 2100',
        castTime: '0.25',
        targetRange: '900',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Pale Cascade',
        icon: 'https://cdn.communitydragon.org/latest/champion/Diana/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Diana grants herself a shield for up to 5 seconds and creates three spheres that orbit her counterclockwise for the same duration, detonating upon contact with an enemy to deal magic damage to nearby enemies.</p>',
            leveling: [
              {
                attribute: 'Shield Strength',
                modifiers: [
                  {
                    values: [
                      45,
                      60,
                      75,
                      90,
                      105,
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
                  {
                    values: [
                      9,
                    ],
                    units: [
                      '% bonus health',
                    ],
                  },
                ],
              },
              {
                attribute: 'Magic Damage per Orb',
                modifiers: [
                  {
                    values: [
                      20,
                      32,
                      44,
                      56,
                      68,
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
                attribute: 'Total Magic Damage',
                modifiers: [
                  {
                    values: [
                      60,
                      96,
                      132,
                      168,
                      204,
                    ],
                  },
                  {
                    values: [
                      54,
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
            description: 'If all three spheres detonate, Pale Cascade\'s shield is reapplied, stacking with its original shield and refreshing the duration.',
            leveling: [
              {
                attribute: 'Maximum Shield Strength',
                modifiers: [
                  {
                    values: [
                      90,
                      120,
                      150,
                      180,
                      210,
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
                      18,
                    ],
                    units: [
                      '% bonus health',
                    ],
                  },
                ],
              },
            ],
          },
        ],
        cost: [
          40,
          45,
          50,
          55,
          60,
        ],
        cooldown: [
          15,
          13.5,
          12,
          10.5,
          9,
        ],
        targeting: 'Auto',
        affects: 'Self, Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'spellaoe',
        projectile: 'TRUE',
        notes: 'On the second application of Pale Cascade\'s shield,  Shield Power will apply to both the new shield amount and the shield amount remaining from the first shield, which has already benefited from shield power.\nBecause of this, shield power effectively applies to the second shield twice, but with reduced efficiency, for up to an increase of 50% of shield power (maximum benefit if no damage was mitigated by the first shield). With 10% shield power, the second shield\'s total amount will be increased by up to an additional 5%, for a total of 15.5% bonus shield.\nThe formula for the total amount of shield Diana will receive from both shield applications is:\nTotal Shield = (((Shield Amount × (1 + Shield Power)) - Damage Blocked by Shield) + Shield Amount) × (1 + Shield Power)',
        blurb: 'Active:  Diana  shields herself, creating three orbiting spheres that detonate on contact with enemies to deal magic damage in an area.',
        castTime: 'none',
        effectRadius: '200',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Lunar Rush',
        icon: 'https://cdn.communitydragon.org/latest/champion/Diana/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Diana dashes to the target enemy\'s location, and upon completion, she deals them magic damage and consumes Moonlight from all enemies. If the target is within 400 range, Diana will dash through their location.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      50,
                      70,
                      90,
                      110,
                      130,
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
            description: 'If Moonlight is consumed from the target, Lunar Rush\'s current cooldown is reduced to 0.25 seconds.',
          },
          {
            description: 'Diana can cast any of her abilities during the dash.',
          },
        ],
        cost: [
          40,
          45,
          50,
          55,
          60,
        ],
        cooldown: [
          22,
          20,
          18,
          16,
          14,
        ],
        targeting: 'Unit',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'Single target',
        notes: 'Diana will attempt to basic attack the target. This will not grant a stack of  Conqueror,  Electrocute, or  Phase Rush.\nLunar Rush\'s cooldown will also be reset if the target dies during the dash while being affected by Moonlight.\nLunar Rush consumes Moonlight upon ending the dash (even if  interrupted).\nLunar Rush will still deal damage even if the target is  untargetable by the end of the dash.\nIf Lunar Rush is blocked by  spell shield the Moonlight debuff is still consumed but Lunar Rush\'s cooldown is not reset.',
        blurb: 'Active:  Diana  dashes to an enemy and deals magic damage.',
        castTime: 'none',
        targetRange: '825',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'Moonfall',
        icon: 'https://cdn.communitydragon.org/latest/champion/Diana/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Diana pulls in all nearby enemies, during which they are revealed, then slows them for 2 seconds.</p>',
            leveling: [
              {
                attribute: 'Slow',
                modifiers: [
                  {
                    values: [
                      40,
                      50,
                      60,
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
            description: 'If an enemy champion is pulled in, she calls down a beam of moonlight to strike upon the area around her after 1 second, dealing magic damage to all nearby enemies, increased for each champion pulled beyond the first.',
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
                      60,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Bonus Damage Per Champion',
                modifiers: [
                  {
                    values: [
                      35,
                      60,
                      85,
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
                attribute: 'Total Damage Vs. 5 Champions',
                modifiers: [
                  {
                    values: [
                      340,
                      540,
                      740,
                    ],
                  },
                  {
                    values: [
                      120,
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
          100,
          90,
          80,
        ],
        targeting: 'Auto',
        affects: 'Self, Enemies',
        spellshieldable: 'special',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'spellaoe',
        notes: 'Enemies stay in the area for a maximum of approximately 0.5 seconds while being pulled.\n Crowd control immunity and  displacement immunity still count as being "pulled in" by the ability.\n Clones count as champions for increasing this ability\'s damage.\nMoonfall\'s additional damage is not capped at 4 champions.\nThe beam of moonlight does not crash down if champions hit blocked the initial effect with  spell shield.\nEnemy champions protected by spell shield do not count towards the damage increase.\nThis ability will cast from wherever the caster is at the end of the cast time.\nA lunar phase of the moon will appear above Diana while she is casting Moonfall, each phase is based on the number of enemy  champions pulled:\n\n\n\n\nNew Moon: 1 Enemy Champion Pulled\n\n\n\n\n\n\nWaning Crescent: 2 Enemy Champions Pulled\n\n\n\n\n\n\nThird Quarter: 3 Enemy Champions Pulled\n\n\n\n\n\n\nWaning Gibbous: 4 Enemy Champions Pulled\n\n\n\n\n\n\nFull Moon: 5 Enemy Champions Pulled',
        blurb: 'Active:  Diana  draws in and  slows nearby enemies.',
        castTime: '0.25',
        effectRadius: '475 / 225',
        maxCharges: -1,
      },
    ],
  },
  lore: 'Bearing her crescent moonblade, Diana fights as a warrior of the Lunari—a faith all but quashed in the lands around Mount Targon. Clad in shimmering armor the color of winter snow at night, she is a living embodiment of the silver moon\'s power. Imbued with the essence of an Aspect from beyond Targon\'s towering summit, Diana is no longer wholly human, and struggles to understand her power and purpose in this world.',
}
export default champion