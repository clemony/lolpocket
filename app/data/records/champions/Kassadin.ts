// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion = {
  id: 38,
  key: 'Kassadin',
  name: 'Kassadin',
  title: 'the Void Walker',
  resource: 'Mana',
  attackType: 'Melee',
  stats: {
    health: {
      flat: 646,
      perLevel: 119,
    },
    healthRegen: {
      flat: 6,
      perLevel: 0.5,
    },
    mana: {
      flat: 400,
      perLevel: 87,
    },
    manaRegen: {
      flat: 6,
      perLevel: 0.8,
    },
    armor: {
      flat: 21,
      perLevel: 4,
    },
    magicResistance: {
      flat: 30,
      perLevel: 1.3,
    },
    attackDamage: {
      flat: 59,
      perLevel: 3.9,
    },
    movespeed: {
      flat: 335,
    },
    acquisitionRadius: {
      flat: 400,
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
      flat: 0.64,
      perLevel: 3.7,
    },
    attackSpeedRatio: {
      flat: 0.64,
    },
    attackCastTime: {
      flat: 0.3,
    },
    attackTotalTime: {
      flat: 1.6,
    },
    attackDelayOffset: {
      flat: -0.15,
    },
    attackRange: {
      flat: 150,
    },
  },
  positions: [
    'Middle',
  ],
  roles: [
    'Assassin',
    'Mage',
  ],
  attributeRatings: {
    damage: 3,
    toughness: 2,
    control: 1,
    mobility: 3,
    utility: 1,
    abilityReliance: 90,
    difficulty: 2,
  },
  abilities: {
    P: [
      {
        name: 'Void Stone',
        icon: 'https://cdn.communitydragon.org/latest/champion/Kassadin/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Kassadin is permanently ghosted and takes 10% reduced magic damage.</p>',
          },
        ],
        targeting: 'Passive',
        affects: 'Self',
        notes: 'No additional details.',
        blurb: 'Innate: Kassadin is permanently  ghosted and takes reduced  magic damage.',
      },
    ],
    Q: [
      {
        name: 'Null Sphere',
        icon: 'https://cdn.communitydragon.org/latest/champion/Kassadin/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Kassadin fires an orb of void energy at the target enemy that deals magic damage and disrupts their ongoing channels.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      65,
                      95,
                      125,
                      155,
                      185,
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
            description: 'He also gains a shield that absorbs magic damage for 1.5 seconds.',
            leveling: [
              {
                attribute: 'Magic Shield Strength',
                modifiers: [
                  {
                    values: [
                      80,
                      110,
                      140,
                      170,
                      200,
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
        ],
        cost: [
          60,
          65,
          70,
          75,
          80,
        ],
        cooldown: [
          10,
          9.5,
          9,
          8.5,
          8,
        ],
        targeting: 'Unit',
        affects: 'Enemies, Self',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'spell',
        projectile: 'TRUE',
        notes: 'The  disrupt is \'wrapped\' into a status effect that says the target is  Silenced for 0.25 seconds, but it does not actually silence. It however makes sure that the disrupt is prevented by  immunity to silences.\nThe shield is granted at the start of the cast time.',
        blurb: 'Active:  Kassadin fires an orb of void energy at the target enemy that deals magic damage and  disrupts their ongoing  channels.',
        speed: '1400',
        castTime: '0.25',
        targetRange: '650',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Nether Blade',
        icon: 'https://cdn.communitydragon.org/latest/champion/Kassadin/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Kassadin\'s basic attacks deal 20 (+ 10% AP) bonus magic damage on-hit.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Kassadin empowers his next basic attack within 5 seconds to have an uncancellable windup, gain 50 bonus range, deal increased bonus magic damage, and restore mana, with the restoration amount quintupled against champions.</p>',
            leveling: [
              {
                attribute: 'Increased Bonus Magic Damage',
                modifiers: [
                  {
                    values: [
                      50,
                      75,
                      100,
                      125,
                      150,
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
                attribute: 'Mana Restored',
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
                      '% of missing mana',
                    ],
                  },
                ],
              },
              {
                attribute: 'Mana Restored Against Champions',
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
                      '% of missing mana',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'Nether Blade resets Kassadin\'s basic attack timer.',
          },
        ],
        cost: [
          1,
        ],
        cooldown: [
          7,
        ],
        targeting: 'Auto',
        affects: 'Self',
        spellshieldable: 'Special',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'special',
        notes: 'The passive damage applies  proc damage and the active damage applies  spell damage.\nThe enhanced attack will apply other on-hit effects and can  critically strike as normal.\nNether Blade will not grant mana if the attack is  dodged or if it  misses, but will do so if the attack is  blocked. In all cases the damage is parried.\n Spell shield will block the active damage but not the passive one.\nThe passive bonus damage applies to structures.\nThe empowered attack will trigger but not be consumed nor apply its effects against structures.',
        blurb: 'Passive:  Kassadin\'s basic attacks deal bonus magic damage.',
        castTime: 'none',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Force Pulse',
        icon: 'https://cdn.communitydragon.org/latest/champion/Kassadin/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Each time Kassadin or a nearby champion casts an ability, Force Pulse\'s current cooldown is reduced by 0.75 seconds.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Kassadin emits a pulse of void energy in a cone in the target direction that deals magic damage to enemies hit and slows them for 1 second.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      70,
                      100,
                      130,
                      160,
                      190,
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
                attribute: 'Slow',
                modifiers: [
                  {
                    values: [
                      50,
                      60,
                      70,
                      80,
                      90,
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
          60,
          65,
          70,
          75,
          80,
        ],
        cooldown: [
          21,
          20,
          19,
          18,
          17,
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'Area of effect',
        projectile: 'FALSE',
        notes: 'Untargetable champions do not reduce Force Pulse\'s cooldown upon ability activations.\nToggle abilities and transformation abilities do not count as ability activations and will not reduce Force Pulse\'s cooldown.\nThis ability will cast from wherever the caster is at the end of the cast time.',
        blurb: 'Passive: Ability casts reduce the cooldown of this ability.',
        angle: '78°',
        castTime: '0.25',
        effectRadius: '600 / 1800',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'Riftwalk',
        icon: 'https://cdn.communitydragon.org/latest/champion/Kassadin/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Kassadin blinks toward the target location, dealing magic damage to all nearby enemies upon arrival. He then gains a stack of Riftwalk for 15 seconds, refreshing on subsequent casts and stacking up to 4 times.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      70,
                      90,
                      110,
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
                  {
                    values: [
                      2,
                    ],
                    units: [
                      '% maximum mana',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Riftwalk:</span> For each stack, Riftwalk deals bonus magic damage at an increased mana cost.</p>',
            leveling: [
              {
                attribute: 'Bonus Damage Per Stack',
                modifiers: [
                  {
                    values: [
                      35,
                      45,
                      55,
                    ],
                  },
                  {
                    values: [
                      7,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                  {
                    values: [
                      1,
                    ],
                    units: [
                      '% maximum mana',
                    ],
                  },
                ],
              },
              {
                attribute: 'Maximum Bonus Damage',
                modifiers: [
                  {
                    values: [
                      140,
                      180,
                      220,
                    ],
                  },
                  {
                    values: [
                      28,
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
                      '% maximum mana',
                    ],
                  },
                ],
              },
              {
                attribute: 'Maximum Magic Damage',
                modifiers: [
                  {
                    values: [
                      210,
                      270,
                      330,
                    ],
                  },
                  {
                    values: [
                      78,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                  {
                    values: [
                      6,
                    ],
                    units: [
                      '% maximum mana',
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
          5,
          3.5,
          2,
        ],
        targeting: 'Location',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'Area of effect',
        notes: 'Flash can be used during the cast time, allowing Kassadin to blink further away.',
        blurb: 'Active: Kassadin  blinks toward the target location, dealing magic damage to all nearby enemies upon arrival. He then gains a stack of Riftwalk, stacking up to a cap.',
        castTime: '0.25',
        effectRadius: '270',
        targetRange: '500',
        maxCharges: -1,
      },
    ],
  },
  lore: 'Cutting a burning swath through the darkest places of the world, Kassadin knows his days are numbered. A widely traveled Shuriman guide and adventurer, he had chosen to raise a family among the peaceful southern tribes—until the day his village was consumed by the Void. He vowed vengeance, combining a number of arcane artifacts and forbidden technologies for the struggle ahead. Finally, Kassadin set out for the wastelands of Icathia, ready to face any monstrous Void-construct in his search for their self-proclaimed prophet, Malzahar.',
}
export default champion