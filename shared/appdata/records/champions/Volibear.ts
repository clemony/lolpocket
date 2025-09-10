// Updated Patch 25.17 - 09/01/2025 05:26:16 PM CDT

const champion: Champion = {
  id: 106,
  key: 'Volibear',
  name: 'Volibear',
  title: 'the Relentless Storm',
  resource: 'Mana',
  attackType: 'Melee',
  adaptiveType: 'Physical damage',
  stats: {
    health: {
      flat: 650,
      perLevel: 104
    },
    healthRegen: {
      flat: 9,
      perLevel: 0.75
    },
    mana: {
      flat: 350,
      perLevel: 70
    },
    manaRegen: {
      flat: 6.25,
      perLevel: 0.5
    },
    armor: {
      flat: 31,
      perLevel: 5.2
    },
    magicResistance: {
      flat: 32,
      perLevel: 2.05
    },
    attackDamage: {
      flat: 60,
      perLevel: 3.5
    },
    movespeed: {
      flat: 340
    },
    acquisitionRadius: {
      flat: 400
    },
    selectionRadius: {
      flat: 125
    },
    pathingRadius: {
      flat: 50
    },
    gameplayRadius: {
      flat: 80
    },
    criticalStrikeDamage: {
      flat: 175
    },
    criticalStrikeDamageModifier: {
      flat: 1
    },
    attackSpeed: {
      flat: 0.625,
      perLevel: 2
    },
    attackSpeedRatio: {
      flat: 0.7
    },
    attackCastTime: {
      flat: 0.3
    },
    attackTotalTime: {
      flat: 1.6
    },
    attackRange: {
      flat: 150
    }
  },
  positions: [
    'Jungle',
    'Top'
  ],
  roles: [
    'Fighter',
    'Juggernaut',
    'Tank'
  ],
  attributeRatings: {
    damage: 2,
    toughness: 3,
    control: 2,
    mobility: 2,
    utility: 1,
    abilityReliance: 30,
    difficulty: 1
  },
  abilities: {
    P: [
      {
        name: 'The Relentless Storm',
        icon: 'https://cdn.communitydragon.org/latest/champion/Volibear/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Whenever Volibear damages at least one enemy with a basic attack or ability, he generates a stack of The Relentless Storm for 6 seconds, refreshing on subsequent damage and stacking up to 5 times. At 5 stacks, Volibear gains Lightning Claws.</p>'
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">The Relentless Storm:</span> For each stack, Volibear gains 5% (+ 4% per 100 AP) bonus attack speed, up to 25% (+ 20% per 100 AP).</p>'
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Lightning Claws:</span> Volibear\'s claws ignite with lightning, empowering his basic attacks on-hit to deal 11 - 60 (based on level) (+ 50% AP) bonus magic damage to the target and the nearest visible enemy within 450 units of the target, chaining up to 4 subsequent targets.</p>'
          }
        ],
        targeting: 'Passive',
        affects: 'Self, Enemies',
        spellshieldable: 'false',
        damageType: 'Magic damage',
        spellEffects: 'periodic',
        projectile: 'FALSE',
        notes: 'Volibear\'s spikes visually grow as The Relentless Storm stacks.\nStacks of The Relentless Storm are also granted  on-hit, but will specifically not be if the target is  invulnerable.\nWhile at four stacks, the next attack or ability on-hit reaching the fifth stack will be empowered by Lightning Claws.\nA stack of The Relentless Storm is not gained if the attack is  dodged and/or missed if Volibear is  blinded. A stack is granted even if the attack is  blocked. In all cases, Lightning Claws will not apply (on-hit damage is parried and the bounce is prevented).\nSince  Frenzied Maul cannot be missed while Volibear is  blinded, gaining stacks from The Relentless Storm and applying Lighting Claws from the ability will not be prevented from that parry effect.\nVolibear has a hidden passive that grants him 1 armor for every enemy  Zilean within 800 range of him.\nLikewise,  Zilean gains 1 ability power for every nearby Volibear.\nNeither Volibear nor  Zilean need  sight of one another to gain these bonuses.\nThe empowered attacks do not affect  structures nor  wards.',
        blurb: 'Innate:  Volibear\'s  basic attacks and  ability hits generate a  stack of The Relentless Storm, which stacks up to 5 times. At 5 stacks, he gains Lightning Claws.',
        effectRadius: '450'
      }
    ],
    Q: [
      {
        name: 'Thundering Smash',
        icon: 'https://cdn.communitydragon.org/latest/champion/Volibear/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Volibear drops on all fours, becoming ghosted and gaining bonus movement speed for 4 seconds, doubled while facing a nearby visible enemy champion.</p>',
            leveling: [
              {
                attribute: 'Bonus Movement Speed',
                modifiers: [
                  {
                    values: [
                      12,
                      16,
                      20,
                      24,
                      28
                    ],
                    units: [
                      '%'
                    ]
                  }
                ]
              },
              {
                attribute: 'Increased Bonus Movement Speed',
                modifiers: [
                  {
                    values: [
                      24,
                      32,
                      40,
                      48,
                      56
                    ],
                    units: [
                      '%'
                    ]
                  }
                ]
              }
            ]
          },
          {
            description: 'During this time, Volibear\'s next basic attack is empowered to have an uncancellable windup, gain 25 bonus range, and pounce on the target, dealing bonus physical damage and stunning them for 1 second. This damage applies life steal at 100% effectiveness.',
            leveling: [
              {
                attribute: 'Bonus Physical Damage',
                modifiers: [
                  {
                    values: [
                      10,
                      30,
                      50,
                      70,
                      90
                    ]
                  },
                  {
                    values: [
                      120
                    ],
                    units: [
                      '% bonus AD'
                    ]
                  }
                ]
              }
            ]
          },
          {
            description: 'If Volibear becomes immobilized or polymorphed by an enemy during Thundering Smash, the effect ends prematurely and the cooldown is reset.'
          },
          {
            description: 'Thundering Smash resets Volibear\'s basic attack timer.'
          }
        ],
        cost: [
          50
        ],
        cooldown: [
          14,
          13,
          12,
          11,
          10
        ],
        targeting: 'Auto',
        affects: 'Self, Enemies',
        spellshieldable: 'true',
        resource: 'Mana',
        damageType: 'Physical damage',
        spellEffects: 'Special',
        notes: 'Thundering Smash\'s empowered attack scales with Volibear\'s  attack speed.\nThundering Smash deals  basic damage, but also triggers spell effects by also being tagged as  spell damage.\nThundering Smash will still apply its effects to the target even if the  dash is  interrupted, but not if he goes into  resurrection.\nThundering Smash\'s attack triggers against  structures and  wards, consuming the effect but dealing its bonus damage, if applicable.\nThe windup for the attack completes even if the target becomes  untargetable but the  stun and damage do not apply.\nThe player\'s screen will flash red briefly and cue a sound effect when Volibear becomes  immobilized while Thundering Smash is active.\nThundering Smash\'s attack does not put Volibear\'s basic attack on cooldown.\nThis results in the same functionality as  Leona\'s  Shield of Daybreak, effectively being a double attack reset.\nIf Thundering Smash\'s buff appears as the first on the buff bar, the empowered attack will fail against  structures.(bug)',
        blurb: 'Active:  Volibear becomes  ghosted and gains  bonus movement speed for a few seconds, increased while facing an enemy champion.',
        castTime: 'none',
        effectRadius: '2000',
        maxCharges: -1
      }
    ],
    W: [
      {
        name: 'Frenzied Maul',
        icon: 'https://cdn.communitydragon.org/latest/champion/Volibear/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Volibear slashes the target enemy with his claws to deal physical damage, apply on-hit effects, trigger on-attack effects, and mark the target Wounded for 8 seconds.</p>',
            leveling: [
              {
                attribute: 'Physical Damage',
                modifiers: [
                  {
                    values: [
                      5,
                      30,
                      55,
                      80,
                      105
                    ]
                  },
                  {
                    values: [
                      100
                    ],
                    units: [
                      '% AD'
                    ]
                  },
                  {
                    values: [
                      6
                    ],
                    units: [
                      '% of his bonus health'
                    ]
                  }
                ]
              }
            ]
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Wounded Bonus:</span> If the target is already Wounded, Volibear takes a bite out of them instead, dealing 50% (+ 15% per 100 bonus AD) increased damage and healing himself. The heal is halved against minions.</p>',
            leveling: [
              {
                attribute: 'Heal',
                modifiers: [
                  {
                    values: [
                      20,
                      35,
                      50,
                      65,
                      80
                    ]
                  },
                  {
                    values: [
                      8,
                      11,
                      14,
                      17,
                      20
                    ],
                    units: [
                      '% of his missing health'
                    ]
                  }
                ]
              },
              {
                attribute: 'Minion Heal',
                modifiers: [
                  {
                    values: [
                      10,
                      17.5,
                      25,
                      32.5,
                      40
                    ]
                  },
                  {
                    values: [
                      4,
                      5.5,
                      7,
                      8.5,
                      10
                    ],
                    units: [
                      '% of his missing health'
                    ]
                  }
                ]
              }
            ]
          },
          {
            description: 'Frenzied Maul applies life steal at 100% effectiveness.'
          }
        ],
        cost: [
          30,
          35,
          40,
          45,
          50
        ],
        cooldown: [
          5
        ],
        targeting: 'Unit',
        affects: 'Enemies, Self',
        spellshieldable: 'true',
        resource: 'Mana',
        damageType: 'Physical damage',
        spellEffects: 'Special',
        notes: 'Volibear will be ordered to basic attack the target after casting Frenzied Maul.\nFrenzied Maul deals  basic damage, but also triggers spell effects by also being tagged as  spell damage.\nFrenzied Maul\'s bite  heals even if it is blocked by  spell shield.\nFrenzied Maul\'s strike can be  dodged and  blocked, but it cannot miss if Volibear is  blinded. The Wound mark does not apply if  dodged, but will otherwise do so regardless.\nThe bite can be  blocked but Volibear still heals. It does not heal nor deal damage if the bite is  dodged. The bite cannot miss if Volibear is  blinded.\nFrenzied Maul deals bonus damage and heals if the target is still Wounded after the cast time. If the mark wears off before the cast time completes, the ability\'s animation will appear as if the bite was applied but there is no bonus damage or heal.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).',
        blurb: 'Active:  Volibear strikes the target enemy to deal physical damage based on his bonus health, apply  on-hit and  on-attack effects, and mark them Wounded for a period.',
        castTime: '0.25',
        targetRange: '325 / 350',
        maxCharges: -1
      }
    ],
    E: [
      {
        name: 'Sky Splitter',
        icon: 'https://cdn.communitydragon.org/latest/champion/Volibear/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Volibear summons a lightning bolt to strike at the target location after a 2-second delay, granting sight of the area for 1 second after the first second of the delay. If Volibear is within the strike, he gains a shield equal to 14% of his maximum health (+ 75% AP) for 3 seconds.</p>'
          },
          {
            description: 'The bolt deals magic damage to enemies hit, capped at 650 against non- champions, and slows them by 40% for 2 seconds.',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      80,
                      110,
                      140,
                      170,
                      200
                    ]
                  },
                  {
                    values: [
                      80
                    ],
                    units: [
                      '% AP'
                    ]
                  },
                  {
                    values: [
                      11,
                      12,
                      13,
                      14,
                      15
                    ],
                    units: [
                      '% of target\'s maximum health'
                    ]
                  }
                ]
              }
            ]
          }
        ],
        cost: [
          60
        ],
        cooldown: [
          14
        ],
        targeting: 'Location',
        affects: 'Enemies, Self',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'spellaoe',
        notes: 'Enemies cannot see the location of the cast for the first second, but they can already tell that the spell is underway by noticing Volibear\'s cast animation.\nVolibear can cast Sky Splitter during the movement speed boost from Thundering Smash to prevent the animation from playing.\nVolibear will receive the  shield even if he is  untargetable.',
        blurb: 'Active:  Volibear conjures a lightning bolt that shortly strikes the target location to deal magic damage to enemies hit based on their maximum health,  slowing them for a short time.',
        castTime: 'none',
        effectRadius: '325 / 425',
        targetRange: '1200',
        maxCharges: -1
      }
    ],
    R: [
      {
        name: 'Stormbringer',
        icon: 'https://cdn.communitydragon.org/latest/champion/Volibear/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Volibear gains Stormbringer for 12 seconds and leaps to the target location with displacement immunity over 1 second, granting sight of the area in a 500 radius during the travel.</p>'
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Stormbringer:</span> Volibear gains ghosting, bonus health, 50 bonus attack range, 25 increased range on Frenzied Maul, and 35% increased size.</p>',
            leveling: [
              {
                attribute: 'Bonus Health',
                modifiers: [
                  {
                    values: [
                      175,
                      350,
                      525
                    ]
                  }
                ]
              }
            ]
          },
          {
            description: 'Volibear impacts after 1 second, slowing nearby enemies by 50% decaying over 1 second. Enemies within the epicenter are also dealt physical damage.',
            leveling: [
              {
                attribute: 'Physical Damage',
                modifiers: [
                  {
                    values: [
                      300,
                      500,
                      700
                    ]
                  },
                  {
                    values: [
                      250
                    ],
                    units: [
                      '% bonus AD'
                    ]
                  },
                  {
                    values: [
                      125
                    ],
                    units: [
                      '% AP'
                    ]
                  }
                ]
              }
            ]
          },
          {
            description: 'Volibear also disables enemy turrets in an area for a duration, rendering them unable to attack, as well as dealing them the same damage.',
            leveling: [
              {
                attribute: 'Turret Disable Duration',
                modifiers: [
                  {
                    values: [
                      2,
                      3,
                      4
                    ],
                    units: [
                      ' seconds'
                    ]
                  }
                ]
              }
            ]
          },
          {
            description: 'Thundering Smash\'s duration will be paused for the leap.'
          }
        ],
        cost: [
          100
        ],
        cooldown: [
          160,
          135,
          110
        ],
        targeting: 'Location',
        affects: 'Enemies, Self',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Physical damage',
        spellEffects: 'spellaoe',
        notes: 'Stormbringer will disable any turret that is not the  Nexus Obelisk, even if it is  untargetable.\nStormbringer will not deal damage to untargetable turrets.\nVolibear grows to his new size over 1.25 seconds, starting 0.25 seconds after landing, and shrinks back to his normal size over 0.5 seconds after Stormbinger\'s status ends, respectively.\nVolibear  leaps over 1 second regardless of distance or  movement speed.\nVolibear impacts immediately at his current location if Stormbringer is cast over terrain he cannot pass through (due to not being able to cover the distance required).(bug)\nThe additional bonuses are granted on-cast.\nThe turret disable debuff is named Ohmwrecker.\nDisabling a  turret does not prevent aggro of the current target it is locked onto. The increased turret shot damage from  Ohmwrecker is also reset.\nTurrets maintain the same targeting behavior even when disabled; damaging an enemy champion will still draw turret aggro. However, if the turret\'s desired target leaves range or has become an invalid target, it will lock onto the most previous target it was going to attack prior to becoming disabled, or instead, find a new one if that condition is not applicable.\nThe following table refers for interactions while Volibear is dashing:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath',
        blurb: 'Active:  Volibear gains Stormbringer and  leaps with  Cc-immunity to the target location. The impact deals physical damage to enemies hit in the epicenter, and briefly  slows nearby enemies.',
        speed: '750',
        castTime: 'none',
        effectRadius: '300 / 500 / 700',
        targetRange: '700',
        maxCharges: -1
      }
    ]
  },
  lore: 'To those who still revere him, the Volibear is the storm made manifest. Destructive, wild, and stubbornly resolute, he existed before mortals walked the Freljord\'s tundra, and is fiercely protective of the lands that he and his demi-god kin created. Cultivating a deep hatred of civilization and the weakness it brought with it, he now fights to return to the old ways—when the land was untamed, and blood spilled freely—and eagerly battles all who oppose him, with tooth, claw, and thundering domination.',
  faction: 'freljord',
  releaseDate: '2011-11-29',
  patchLastChanged: '25.07',
  price: {
    blueEssence: 675,
    rp: 585
  }
}
export default champion