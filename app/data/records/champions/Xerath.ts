 export const Xerath: Champion =  {
  "id": 101,
  "key": "Xerath",
  "name": "Xerath",
  "title": "the Magus Ascendant",
  "resource": "Mana",
  "attackType": "Ranged",
  "stats": {
    "health": {
      "flat": 596,
      "perLevel": 106
    },
    "healthRegen": {
      "flat": 5.5,
      "perLevel": 0.55
    },
    "mana": {
      "flat": 400,
      "perLevel": 22
    },
    "manaRegen": {
      "flat": 6.85,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 22,
      "perLevel": 4.7
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 55,
      "perLevel": 3
    },
    "movespeed": {
      "flat": 340
    },
    "acquisitionRadius": {
      "flat": 600
    },
    "selectionRadius": {
      "flat": 120
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
      "perLevel": 1.36
    },
    "attackSpeedRatio": {
      "flat": 0.625
    },
    "attackCastTime": {
      "flat": 0.3
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackDelayOffset": {
      "flat": -0.1
    },
    "attackRange": {
      "flat": 525
    }
  },
  "positions": [
    "Middle",
    "Support"
  ],
  "roles": [
    "Artillery",
    "Mage",
    "Support"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 2,
    "mobility": 1,
    "utility": 1,
    "abilityReliance": 90,
    "difficulty": 2
  },
  "abilities": {
    "P": [
      {
        "name": "Mana Surge",
        "icon": "https://cdn.communitydragon.org/latest/champion/Xerath/ability-icon/p",
        "effects": [
          {
            "description": "<span class=\"ability-header\">Innate:</span> Periodically, Xerath empowers his next basic attack to restore 30 - 195 (based on level) mana, doubled to 60 - 390 (based on level) against enemy champions."
          },
          {
            "description": "Mana Surge's cooldown is reduced by 3.5 seconds whenever Xerath kills an enemy."
          },
          {
            "description": "Mana Surge does not trigger if Xerath would restore above his maximum mana."
          }
        ],
        "targeting": "Passive",
        "affects": "Self",
        "notes": "Mana Surge triggers against structures.\nMana Surge will trigger even if the attack is  blocked.\nThe empowered attack will not trigger against structures.\nPENDING FOR TEST:: Mana Surge's  interactions with  dodging, and  blinding effects.",
        "blurb": "Innate: Periodically,  Xerath's next basic attack restores  mana, doubled against an enemy  champion."
      }
    ],
    "Q": [
      {
        "name": "Arcanopulse",
        "icon": "https://cdn.communitydragon.org/latest/champion/Xerath/ability-icon/q",
        "effects": [
          {
            "description": "<span class=\"ability-header\">Active:</span> Xerath charges while being slowed by 0% - 40% (based on channel time) for up to 3 seconds to increase Arcanopulse's range over the first 1.5 to 1.75 seconds of the channel."
          },
          {
            "description": "Arcanopulse can be recast within the duration. If the charge is interrupted or completes without reactivation, Arcanopulse is cancelled and refunds half the mana cost.",
            "leveling": [
              {
                "attribute": "Mana Refunded",
                "modifiers": [
                  {
                    "values": [
                      40,
                      45,
                      50,
                      55,
                      60
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "<span class=\"ability-header\">Recast:</span> Xerath becomes unable to act for 0.528 seconds and afterwards fires a beam of energy in a line in the target direction that deals magic damage to enemies hit.",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      75,
                      115,
                      155,
                      195,
                      235
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
          }
        ],
        "cost": [
          80,
          90,
          100,
          110,
          120
        ],
        "cooldown": [
          9,
          8,
          7,
          6,
          5
        ],
        "targeting": "Direction",
        "affects": "Self, Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "projectile": "FALSE",
        "notes": "The onset of Arcanopulse's self- slow and first range increase is at a random interval of 0 to 0.25 seconds. The real time to maximum self-slow and range is thus 1.5 to 1.75 seconds.\nThe rectangle hitbox's minimum range is  0, right through Xerath's center.\nArcanopulse will not fire and deal damage if Xerath dies during the 0.528 seconds recast delay.(bug)\nThe following table refers for interactions while Xerath is  channeling:\n\n\nType\n\nCharge channel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled, but can still use trinkets.\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall\n\n\nInterrupted by\n\n Hexflash (Recasts)\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects\n\nThe following table refers for interactions while Xerath is locked out during the 0.528 seconds recast delay:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
        "width": "145",
        "castTime": "none"
      }
    ],
    "W": [
      {
        "name": "Eye of Destruction",
        "icon": "https://cdn.communitydragon.org/latest/champion/Xerath/ability-icon/w",
        "effects": [
          {
            "description": "<span class=\"ability-header\">Active:</span> Xerath casts down a blast of arcane energy that strikes the target location after 0.528 seconds, briefly granting sight of the area and dealing magic damage to enemies hit and slowing them by 25% for 2.5 seconds.",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      50,
                      85,
                      120,
                      155,
                      190
                    ]
                  },
                  {
                    "values": [
                      65
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
            "description": "Enemies in the epicenter take 66.7% increased damage and are slowed by a greater amount, decaying to 25% over the duration.",
            "leveling": [
              {
                "attribute": "Increased Damage",
                "modifiers": [
                  {
                    "values": [
                      83.35,
                      141.695,
                      200.04,
                      258.385,
                      316.73
                    ]
                  },
                  {
                    "values": [
                      108.355
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Increased Slow",
                "modifiers": [
                  {
                    "values": [
                      60,
                      65,
                      70,
                      75,
                      80
                    ],
                    "units": [
                      "%"
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "cost": [
          80,
          90,
          100,
          110,
          120
        ],
        "cooldown": [
          14,
          13,
          12,
          11,
          10
        ],
        "targeting": "Location",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "Area of effect",
        "notes": "Xerath's location gets  revealed to the enemy (400 radius for 4.5 seconds) if Eye of Destruction's cast location is within 100 units of a valid enemy at the start of the cast time due to something related to targeting types.(bug)\nEye of Destruction's targeting indicator appears on the player's minimap, despite the ability not having the longer range of others with this quality.\nEye of Destruction will not fire and deal damage if Xerath dies during the 0.25s cast time.(note)",
        "blurb": "Active:  Xerath casts down a blast of energy that strikes the target location after a brief delay, dealing magic damage and  slowing enemies hit. The effects are increased against enemies in the epicenter.",
        "castTime": "0.25",
        "effectRadius": "275 / 125 / 250",
        "targetRange": "1000"
      }
    ],
    "E": [
      {
        "name": "Shocking Orb",
        "icon": "https://cdn.communitydragon.org/latest/champion/Xerath/ability-icon/e",
        "effects": [
          {
            "description": "<span class=\"ability-header\">Active:</span> Xerath fires an orb of energy in the target direction that deals magic damage to the first enemy hit and stuns them for 0.75 - 2.25 (based on orb travel distance) seconds.",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      70,
                      100,
                      130,
                      160,
                      190
                    ]
                  },
                  {
                    "values": [
                      45
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "cost": [
          60,
          65,
          70,
          75,
          80
        ],
        "cooldown": [
          13,
          12.5,
          12,
          11.5,
          11
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "Single target",
        "projectile": "TRUE",
        "notes": "This ability will cast from wherever the caster is at the end of the cast time.",
        "blurb": "Active:  Xerath fires an orb of energy in the target direction that deals magic damage to the first enemy hit,  stunning them based on travel distance.",
        "speed": "1400",
        "width": "120",
        "castTime": "0.25"
      }
    ],
    "R": [
      {
        "name": "Rite of the Arcane",
        "icon": "https://cdn.communitydragon.org/latest/champion/Xerath/ability-icon/r",
        "effects": [
          {
            "description": "<span class=\"ability-header\">Active:</span> Xerath channels for up to 10 seconds, gaining the ability to recast Rite of the Arcane multiple times after 0.5 seconds within the duration. If Rite of the Arcane ends without any of the recasts being used, half of its cooldown is refunded.",
            "leveling": [
              {
                "attribute": "Number of Recasts",
                "modifiers": [
                  {
                    "values": [
                      4,
                      5,
                      6
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "<span class=\"ability-header\">Recast - Arcane Barrage:</span> Xerath catapults an arcane missile that strikes the target location after a 0.627 seconds delay, briefly granting sight of the area and dealing magic damage to enemies hit. Each cast has a static cooldown of 0.5 seconds.",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      170,
                      220,
                      270
                    ]
                  },
                  {
                    "values": [
                      45
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Total Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      680,
                      1100,
                      1620
                    ]
                  },
                  {
                    "values": [
                      180,
                      225,
                      270
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
            "description": "Hitting at least one enemy champion grants a stack of Arcane Perfection during the channel, stacking up to a maximum amount. Each stack increases Arcane Barrage's damage.",
            "leveling": [
              {
                "attribute": "Maximum Stacks",
                "modifiers": [
                  {
                    "values": [
                      3,
                      4,
                      5
                    ]
                  }
                ]
              },
              {
                "attribute": "Increased Damage per Stack",
                "modifiers": [
                  {
                    "values": [
                      20,
                      25,
                      30
                    ]
                  },
                  {
                    "values": [
                      5
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
            "description": "Xerath will reveal himself if a missile strikes near an enemy.",
            "leveling": [
              {
                "attribute": "Distance",
                "modifiers": [
                  {
                    "values": [
                      175,
                      200,
                      225
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Rite of the Arcane's recast will cast at max range if cast beyond that."
          }
        ],
        "cost": [
          100
        ],
        "cooldown": [
          130,
          115,
          100
        ],
        "targeting": "Auto / Location",
        "affects": "Self, Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "projectile": "FALSE",
        "notes": "Each cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nArcane Barrage will not apply its increased damage per stack to the cast that granted the stack.\nOnly successive casts of the ability will benefit from the damage increase.\nA circular indicator will be displayed at the target location to signify that the area will be blasted.\nA circle indicating the ability's maximum range forms on the map over 1 second (starting small and rapidly expanding to the maximum range over the delay) for the channel's duration.\nThe maximum-range indicator is visible to both allies and enemies and is color coded for friendly (blue) or hostile (red).\nRite of the Arcane uses a barrage system so that it can be recast multiple times within a given period at no additional cost.\nXerath will turn to face toward the direction of the target location after using a recast.\nXerath gains a wider field of view during Rite of the Arcane.\nXerath can use  Dark Passage while channeling.\nThe following table refers for interactions while Xerath is  channeling:\n Teleport and  Recall are disabled for the first 1.25 seconds and otherwise interrupt the channel if they are used.\n\n\nType\n\nChannel\n\n\nAttacking\n\nInterrupts\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled for the first 1.25 seconds, otherwise, interrupts.\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Hexflash\n\n\nInterrupted by\n\n Teleport  Recall\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
        "castTime": "none",
        "effectRadius": "200",
        "targetRange": "5000",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Xerath is an Ascended Magus of ancient Shurima, a being of arcane energy writhing in the broken shards of a magical sarcophagus. For millennia, he was trapped beneath the desert sands, but the rise of Shurima freed him from his ancient prison. Driven insane with power, he now seeks to take what he believes is rightfully his and replace the upstart civilizations of the world with one fashioned in his image."
}
