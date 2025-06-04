 export const Shyvana: Champion =  {
  "id": 102,
  "key": "Shyvana",
  "name": "Shyvana",
  "title": "the Half-Dragon",
  "resource": "Fury",
  "attackType": "Melee",
  "stats": {
    "health": {
      "flat": 665,
      "perLevel": 104
    },
    "healthRegen": {
      "flat": 8.5,
      "perLevel": 0.8
    },
    "mana": {
      "flat": 100
    },
    "armor": {
      "flat": 38,
      "perLevel": 4.55
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 1.5
    },
    "attackDamage": {
      "flat": 66,
      "perLevel": 3
    },
    "movespeed": {
      "flat": 350
    },
    "acquisitionRadius": {
      "flat": 600
    },
    "selectionRadius": {
      "flat": 100
    },
    "pathingRadius": {
      "flat": 35
    },
    "gameplayRadius": {
      "flat": 65
    },
    "criticalStrikeDamage": {
      "flat": 175
    },
    "criticalStrikeDamageModifier": {
      "flat": 1
    },
    "attackSpeed": {
      "flat": 0.658,
      "perLevel": 2.5
    },
    "attackSpeedRatio": {
      "flat": 0.658
    },
    "attackCastTime": {
      "flat": 0.3
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackDelayOffset": {
      "flat": -0.103
    },
    "attackRange": {
      "flat": 125
    }
  },
  "positions": [
    "Jungle"
  ],
  "roles": [
    "Fighter",
    "Juggernaut",
    "Mage"
  ],
  "attributeRatings": {
    "damage": 2,
    "toughness": 2,
    "control": 1,
    "mobility": 2,
    "utility": 1,
    "abilityReliance": 55,
    "difficulty": 1
  },
  "abilities": {
    "P": [
      {
        "name": "Fury of the Dragonborn",
        "icon": "https://cdn.communitydragon.org/latest/champion/Shyvana/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Shyvana gains 5 bonus armor and 5 bonus magic resistance, which are each increased by 5 for every elemental drake and Elder Dragon her team slays.</p>"
          },
          {
            "description": "Additionally, Shyvana deals 20% increased damage to Dragons."
          }
        ],
        "targeting": "Passive",
        "affects": "Self",
        "notes": "Fury of the Dragonborn's increased damage modifier to  Dragons does not affect true damage.",
        "blurb": "Innate:  Shyvana gains  bonus armor and  bonus magic resist, which is permanently increased for every  elemental drake and  Elder Dragon her team slays."
      }
    ],
    "Q": [
      {
        "name": "Twin Bite",
        "icon": "https://cdn.communitydragon.org/latest/champion/Shyvana/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Shyvana empowers her next basic attack within 6 seconds to gain 25 bonus range, deal 100% AD (+ 50% AP) physical damage, and cause her to strike again after 0.25 seconds to deal bonus physical damage.The second strike applies on-hit effects, triggers on-attack effects, and can critically strike for (175% + 40%) damage if the triggering attack does.</p>",
            "leveling": [
              {
                "attribute": "Bonus Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      20,
                      40,
                      60,
                      80,
                      100
                    ],
                    "units": [
                      "% AD"
                    ]
                  },
                  {
                    "values": [
                      25
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "After consuming the empowered attack, her next two basic attacks within 5 seconds gain bonus attack speed.",
            "leveling": [
              {
                "attribute": "Bonus Attack Speed",
                "modifiers": [
                  {
                    "values": [
                      50,
                      55,
                      60,
                      65,
                      70
                    ],
                    "units": [
                      "%"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Basic attacks reduce Twin Bite's current cooldown by 0.5 seconds on-hit."
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Dragon Form Bonus:</span> Shyvana attacks enemies in a cone in front of her and additionally applies the second strike to enemies surrounding the primary target. Both the attack and the strike occur at the same time and each of them apply Twin Bite's respective effects to all targets hit, with the exception of the second strike not triggering on-attack effects for secondary targets struck. The attack is affected by critical strike modifiers, applies on-hit effects to all enemies hit, and triggers on-attack effects for every target hit. Additionally, Twin Bite's empowered attack has an uncancellable windup.</p>"
          },
          {
            "description": "Twin Bite resets Shyvana's basic attack timer."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          8,
          7.5,
          7,
          6.5,
          6
        ],
        "targeting": "Auto",
        "affects": "Enemies",
        "spellshieldable": "True",
        "damageType": "Physical damage",
        "spellEffects": "special",
        "notes": "Applies  spell damage and procs  basic damage required effects.\nDragon Form's Twin Bite cannot apply  Tiamat's Cleave on each target hit because of Cleave's internal 0.05 seconds interval during which it cannot be applied on a different target.\nDragon Form's Twin Bite only applies the attack to enemies that would be hit by the second strike.\nIn Dragon Form, both strikes belong to the same cast instance. In Human Form, they belong in separate ones.\nSince the second strike applies after the ability goes on cooldown, it will reduce its own cooldown.\nUnlike most on-hit effects, the one reducing the cooldown of Twin Bite also triggers against  structures.\nIn Dragon Form, Twin Bite consumes an additional stack of  Hail of Blades. (bug)",
        "blurb": "Active:  Shyvana's next basic attack within a few seconds will cause her to quickly strike again, dealing bonus physical damage.",
        "angle": "180°",
        "castTime": "none",
        "effectRadius": "325 /  250",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Burnout",
        "icon": "https://cdn.communitydragon.org/latest/champion/Shyvana/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Shyvana surrounds herself in flames for 3 seconds, gaining decaying bonus movement speed and dealing magic damage every 0.5 seconds to nearby enemies.</p>",
            "leveling": [
              {
                "attribute": "Bonus Movement Speed",
                "modifiers": [
                  {
                    "values": [
                      30,
                      35,
                      40,
                      45,
                      50
                    ],
                    "units": [
                      "%"
                    ]
                  },
                  {
                    "values": [
                      10
                    ],
                    "units": [
                      "% per 100 AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Bonus Movement Speed Decay",
                "modifiers": [
                  {
                    "values": [
                      4.5,
                      5.25,
                      6,
                      6.75,
                      7.5
                    ],
                    "units": [
                      "%"
                    ]
                  }
                ]
              },
              {
                "attribute": "Magic Damage Per Tick",
                "modifiers": [
                  {
                    "values": [
                      10,
                      15,
                      20,
                      25,
                      30
                    ]
                  },
                  {
                    "values": [
                      10
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "During this time, Shyvana's basic attacks deal bonus magic damage on-hit to surrounding enemies and extend the duration of Burnout by 1 second, which can occur up to 4 times for a total of 4 additional seconds.",
            "leveling": [
              {
                "attribute": "Bonus Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      5,
                      7,
                      9,
                      11,
                      13
                    ]
                  },
                  {
                    "values": [
                      5
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Dragon Form Bonus:</span> Burnout's radius increases, scaling with Dragon's Descent's rank.</p>"
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          12
        ],
        "targeting": "Auto",
        "affects": "Enemies",
        "spellshieldable": "False",
        "damageType": "Magic damage",
        "spellEffects": "aoedot",
        "notes": "Magic damage on-hit can be dodged with  dodging effects.\nPENDING FOR TEST:: Magic damage on-hit's interactions with  blocking and  blinding effects.",
        "blurb": "Active:  Shyvana creates a flame aura, gaining a burst of  movement speed and continually dealing magic damage to nearby enemies.",
        "castTime": "none",
        "effectRadius": "162.5 / 350 / 365 / 380",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Flame Breath",
        "icon": "https://cdn.communitydragon.org/latest/champion/Shyvana/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Shyvana unleashes a fireball in the target direction that stops upon hitting an enemy champion, dealing magic damage to all enemies hit and marking them for 5 seconds.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      85,
                      125,
                      165,
                      205,
                      245
                    ]
                  },
                  {
                    "values": [
                      50
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  },
                  {
                    "values": [
                      70
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Shyvana's basic attacks against marked enemies are empowered to deal bonus magic damage on-hit equal to 3% (+ 1% per 100 bonus AD) of the target's maximum health, capped at 150 against monsters."
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Dragon Form Bonus:</span> The fireball explodes upon hitting an enemy champion or reaching the target location, dealing increased magic damage and creating a scorched field for 4 seconds. Enemies within the field are marked once and dealt 20 - 50 (based on level) (+ 7.5% bonus AD) (+ 10% AP) magic damage every 0.5 seconds.</p>",
            "leveling": [
              {
                "attribute": "Increased Damage",
                "modifiers": [
                  {
                    "values": [
                      75,
                      78.52941176470588,
                      82.05882352941177,
                      85.58823529411765,
                      89.11764705882354,
                      92.64705882352942,
                      96.17647058823529,
                      99.70588235294117,
                      103.23529411764706,
                      106.76470588235294,
                      110.29411764705883,
                      113.8235294117647,
                      117.35294117647058,
                      120.88235294117646,
                      124.41176470588235,
                      127.94117647058823,
                      131.47058823529412,
                      135
                    ]
                  },
                  {
                    "values": [
                      85,
                      125,
                      165,
                      205,
                      245
                    ]
                  },
                  {
                    "values": [
                      100
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  },
                  {
                    "values": [
                      90
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Flame Breath while in Dragon Form will cast at max range if cast beyond that."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          12,
          11,
          10,
          9,
          8
        ],
        "targeting": "Direction / Location",
        "affects": "Enemies",
        "spellshieldable": "True",
        "damageType": "Magic damage",
        "spellEffects": "special",
        "projectile": "TRUE",
        "notes": "The fireball applies  area damage and the on-hit effect against marked targets deals  proc damage.\nIn Dragon Form, the fiery explosion applies  area damage and the burning scorch deals  persistent area damage to all enemies within the area of effect.\nIn Dragon Form, both areas of effect will be centered on the first champion struck, not at the location the missile collided with them.\nThis ability will cast from wherever the caster is at the end of the cast time.\nIn Dragon Form, the visual mark will not be applied to non-champions, but the debuff will still be applied for gameplay purposes.(bug)\nMagic damage on-hit can be dodged by  dodging effects.\nPENDING FOR TEST:: Magic damage on-hit's interactions with  blocking and  blinding effects.",
        "blurb": "Active:  Shyvana unleashes a fireball in the target direction that stops upon hitting an enemy  champion. The fireball deals magic damage to enemies hit and marks them for a few seconds.",
        "speed": "1600 / 1575",
        "width": "120",
        "castTime": "0.25 / 0.3333",
        "effectRadius": "345",
        "targetRange": "925",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Dragon's Descent",
        "icon": "https://cdn.communitydragon.org/latest/champion/Shyvana/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive - Fury:</span> Dragon's Descent requires 100 Fury to be cast. Shyvana generates Fury per second while alive and in Human form and 2 Fury per basic attack on-hit in either form. Shyvana gains 100 Fury upon learning Dragon's Descent.</p>",
            "leveling": [
              {
                "attribute": "Fury Generation per Second",
                "modifiers": [
                  {
                    "values": [
                      1,
                      1.5,
                      2
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Shyvana transforms into Dragon Form and dashes with displacement immunity to the target location, dealing magic damage to enemies she passes through and carrying them alongside her.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      150,
                      250,
                      350
                    ]
                  },
                  {
                    "values": [
                      100
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Dragon Form:</span> Shyvana gains bonus health, bonus attack range, and increased size. Her abilities are also empowered to apply an additional effect. She maintains Dragon Form at a recurring cost of Fury, returning to Human Form once all Fury has been depleted.</p>",
            "leveling": [
              {
                "attribute": "Bonus Health",
                "modifiers": [
                  {
                    "values": [
                      150,
                      250,
                      350
                    ]
                  }
                ]
              },
              {
                "attribute": "Bonus Range",
                "modifiers": [
                  {
                    "values": [
                      50,
                      65,
                      80
                    ]
                  }
                ]
              },
              {
                "attribute": "Size Increase",
                "modifiers": [
                  {
                    "values": [
                      0,
                      8.5,
                      16
                    ],
                    "units": [
                      "%"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Dragon's Descent will cast at max range if cast beyond that."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          0
        ],
        "targeting": "Location",
        "affects": "Enemies, Self",
        "spellshieldable": "True",
        "resource": "Fury",
        "damageType": "Magic damage",
        "spellEffects": "aoe",
        "notes": "Dragon Descent's  displacement immunity begins from the start of the cast time.\nDragon's Descent has a 100 / 80 / 66.67 / 57.14 / 50 seconds effective cooldown when not attacking and not dead.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
        "castTime": "0.25",
        "targetRange": "850",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Shyvana is a creature with the magic of a rune shard burning within her heart. Though she often appears humanoid, she can take her true form as a fearsome dragon, incinerating her foes with fiery breath. Having saved the life of the crown prince Jarvan IV, Shyvana now serves uneasily in his royal guard, struggling to find acceptance among the suspicious people of Demacia."
}
