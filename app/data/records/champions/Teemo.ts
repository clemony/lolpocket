 export const Teemo: Champion =  {
  "id": 17,
  "key": "Teemo",
  "name": "Teemo",
  "title": "the Swift Scout",
  "resource": "Mana",
  "attackType": "Ranged",
  "stats": {
    "health": {
      "flat": 615,
      "perLevel": 104
    },
    "healthRegen": {
      "flat": 5.5,
      "perLevel": 0.65
    },
    "mana": {
      "flat": 334,
      "perLevel": 25
    },
    "manaRegen": {
      "flat": 9.6,
      "perLevel": 0.45
    },
    "armor": {
      "flat": 24,
      "perLevel": 4.95
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 54,
      "perLevel": 3
    },
    "movespeed": {
      "flat": 330
    },
    "acquisitionRadius": {
      "flat": 500
    },
    "selectionRadius": {
      "flat": 100
    },
    "pathingRadius": {
      "flat": 30
    },
    "gameplayRadius": {
      "flat": 55
    },
    "criticalStrikeDamage": {
      "flat": 175
    },
    "criticalStrikeDamageModifier": {
      "flat": 1
    },
    "attackSpeed": {
      "flat": 0.69,
      "perLevel": 3.38
    },
    "attackSpeedRatio": {
      "flat": 0.69
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
      "flat": 500
    }
  },
  "positions": [
    "Jungle",
    "Support",
    "Top"
  ],
  "roles": [
    "Mage",
    "Marksman",
    "Specialist"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 2,
    "mobility": 1,
    "utility": 2,
    "abilityReliance": 30,
    "difficulty": 1
  },
  "abilities": {
    "P": [
      {
        "name": "Guerrilla Warfare",
        "icon": "https://cdn.communitydragon.org/latest/champion/Teemo/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Teemo gains invisibility after 1.5 seconds without moving, taking damage, performing actions that break stealth, channeling, or being in stasis. Teemo will maintain stealth so long as he remains idle and is not displaced. While in brush, Teemo gains the stealth even while moving and can move without breaking stealth.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Element of Surprise:</span> When Teemo breaks the stealth, he gains 20 / 40 / 60 / 80% (based on level) bonus attack speed for 5 seconds.</p>"
          }
        ],
        "targeting": "Passive",
        "affects": "Self",
        "notes": "If Teemo triggers Element of Surprise twice in less than 5 seconds he will only refresh the bonus attack speed's duration (it will not stack with itself).\n Charm,  Flee, and  Taunt will force him out of  stealth.\nIf Teemo is in a  brush while stealthed, only  Taunt will break it.\nGuerilla Warfare's stealth is special-cased to be interrupted whenever Teemo moves from his location by any means (whether by  dashing,  blinking, being  displaced, or simply moving), thus, performing actions that do not normally break stealth which also involve movement will cause the  invisibility to break. Notably,  Flash and  Teleport. If Teemo is in a  brush the aforementioned spells do not end the stealth so long as his exact destination is still inside brush.\nStarting  Teleport's channel will not break Guerilla Warfare, only the  blink upon completing the channel will (with the exception stated above).\nGuerilla Warfare will not activate while  Recalling.\nUsing a basic attack breaks the stealth at the end of the attack windup.",
        "blurb": "Innate:  Teemo becomes  invisible after a brief moment remaining idle without taking damage, and will maintain so long as he remains idle or not  displaced."
      }
    ],
    "Q": [
      {
        "name": "Blinding Dart",
        "icon": "https://cdn.communitydragon.org/latest/champion/Teemo/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Teemo shoots a dart at the target enemy that deals magic damage and blinds them for a duration.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      80,
                      125,
                      170,
                      215,
                      260
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
              },
              {
                "attribute": "Blind Duration",
                "modifiers": [
                  {
                    "values": [
                      2,
                      2.25,
                      2.5,
                      2.75,
                      3
                    ],
                    "units": [
                      " seconds"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "The duration of the blind is doubled against minions and monsters.",
            "leveling": [
              {
                "attribute": "Increased Blind Duration",
                "modifiers": [
                  {
                    "values": [
                      4,
                      4.5,
                      5,
                      5.5,
                      6
                    ],
                    "units": [
                      " seconds"
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "cost": [
          70,
          75,
          80,
          85,
          90
        ],
        "cooldown": [
          7
        ],
        "targeting": "Unit",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "Single target",
        "projectile": "TRUE",
        "notes": "Blinding Dart will not make abilities that can trigger on-hit effects ( Parrrley,  Mystic Shot) miss.\nWhen blinded, enemies have a green tint on their screen.\nBecause Blinding Dart uses  center range, it has 45 to 70 more range than his basic attacks, which use  edge range, against other  champions.\nThis bonus becomes lower if Teemo or his target have size bonuses.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
        "blurb": "Active:  Teemo shoots a dart at the target enemy that deals magic damage and  blinds them for a short time.",
        "speed": "2500",
        "castTime": "0.25",
        "targetRange": "680",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Move Quick",
        "icon": "https://cdn.communitydragon.org/latest/champion/Teemo/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Teemo gains bonus movement speed after 5 seconds without taking damage from enemy champions or turrets.</p>",
            "leveling": [
              {
                "attribute": "Bonus Movement Speed",
                "modifiers": [
                  {
                    "values": [
                      12,
                      16,
                      20,
                      24,
                      28
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
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Teemo doubles the bonus movement speed for 3 seconds, preventing it from being removed for the duration.</p>",
            "leveling": [
              {
                "attribute": "Enhanced Bonus Movement Speed",
                "modifiers": [
                  {
                    "values": [
                      24,
                      32,
                      40,
                      48,
                      56
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
            "description": "Casting Move Quick does not interrupt Guerrilla Warfare."
          }
        ],
        "cost": [
          40
        ],
        "cooldown": [
          14
        ],
        "targeting": "Auto",
        "affects": "Self",
        "resource": "Mana",
        "notes": "When Move Quick's active bonus movement speed ends Teemo will not regain the passive one if he was damaged during the active's duration.\nMove Quick's passive will be disabled even if the damage is blocked with a  spell shield.",
        "blurb": "Passive:  Teemo gains  bonus movement speed after a few seconds without taking damage from enemy  champions or  turrets.",
        "castTime": "none",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Toxic Shot",
        "icon": "https://cdn.communitydragon.org/latest/champion/Teemo/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Teemo's basic attacks are empowered to deal bonus magic damage on-hit and inflict poison.</p>\n<p class=\"ability-effect\"><span class=\"ability-header\"> poison:</span> The target takes magic damage every second over 4 seconds. Subsequent inflictions refresh the duration.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage On-Hit",
                "modifiers": [
                  {
                    "values": [
                      9,
                      23,
                      37,
                      51,
                      65
                    ]
                  },
                  {
                    "values": [
                      30
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Magic Damage per Tick",
                "modifiers": [
                  {
                    "values": [
                      6,
                      12,
                      18,
                      24,
                      30
                    ]
                  },
                  {
                    "values": [
                      10
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Total Poison Damage",
                "modifiers": [
                  {
                    "values": [
                      24,
                      48,
                      72,
                      96,
                      120
                    ]
                  },
                  {
                    "values": [
                      40
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
            "description": "Toxic Shot deals 145% damage against monsters.",
            "leveling": [
              {
                "attribute": "Monster Damage On-Hit",
                "modifiers": [
                  {
                    "values": [
                      13.05,
                      33.35,
                      53.65,
                      73.95,
                      94.25
                    ]
                  },
                  {
                    "values": [
                      43.5
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Monster Damage per Tick",
                "modifiers": [
                  {
                    "values": [
                      8.7,
                      17.4,
                      26.1,
                      34.8,
                      43.5
                    ]
                  },
                  {
                    "values": [
                      14.5
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Total Monster Poison Damage",
                "modifiers": [
                  {
                    "values": [
                      34.8,
                      69.6,
                      104.4,
                      139.2,
                      174
                    ]
                  },
                  {
                    "values": [
                      58
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
          0
        ],
        "cooldown": [
          0
        ],
        "targeting": "Passive",
        "affects": "Self",
        "spellshieldable": "False",
        "damageType": "Magic damage",
        "spellEffects": "proc",
        "notes": "The initial hit from Toxic Shot will consume  Manaflow Band if it is available.\nThe attacks do not affect structures nor wards.\nDespite dealing  proc damage, the damage over time is special-cased to trigger  Dark Harvest and not to trigger  Summon Aery.\nThe damage over time from Toxic Shot counts as proc damage for all other interactions.",
        "blurb": "Passive:  Teemo's basic attacks deal bonus magic damage and inflict  poison.",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Noxious Trap",
        "icon": "https://cdn.communitydragon.org/latest/champion/Teemo/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Teemo tosses a poisonous mushroom to the target location that becomes stealthed after arming over 1 second, lasting for up to 5 minutes and granting sight of its surroundings. If the mushroom lands on an already-placed one, it will bounce forward again for its cast distance, up to a cap, which can happen repeatedly.</p>",
            "leveling": [
              {
                "attribute": "Bounce Distance Cap",
                "modifiers": [
                  {
                    "values": [
                      350,
                      450,
                      550
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Teemo periodically stocks a Noxious Trap charge, up to a maximum amount.",
            "leveling": [
              {
                "attribute": "Maximum Charges",
                "modifiers": [
                  {
                    "values": [
                      3,
                      4,
                      5
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "The mushroom will explode upon enemy contact, inflicting poison to nearby enemies and slowing them for 4 seconds, as well as revealing them.",
            "leveling": [
              {
                "attribute": "Slow",
                "modifiers": [
                  {
                    "values": [
                      30,
                      40,
                      50
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
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">poison:</span> The target takes magic damage every second over 4 seconds. Subsequent inflictions refresh the duration.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage per Tick",
                "modifiers": [
                  {
                    "values": [
                      50,
                      81.25,
                      112.5
                    ]
                  },
                  {
                    "values": [
                      12.5
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
                      200,
                      325,
                      450
                    ]
                  },
                  {
                    "values": [
                      50
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
            "description": "A mushroom has 6 maximum health and can only be damaged by champion basic attacks (2 damage from ranged and 3 from melee)."
          }
        ],
        "cost": [
          75,
          55,
          35
        ],
        "cooldown": [
          0.25
        ],
        "targeting": "Location",
        "affects": "Enemies",
        "spellshieldable": "Special",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "aoedot",
        "projectile": "TRUE",
        "notes": "The bounce can occur an indefinite amount of times while Teemo is alive. If Teemo dies before Noxious Trap bounces on another, the trap will disappear.\n Rift Scuttler will not trigger Noxious Trap's explosion if it is not being attacked.\nEnemies who step on multiple Noxious Traps will only refresh the duration of the damage over time and slow.\nNoxious Trap's damage is determined when it detonates and not when planted, meaning if Teemo's  ability power changes, the scaling is also altered to affect the active damage of all Noxious Traps so long as they do not explode.\n Spell shield will prevent the damage over time and slow for all units but will not prevent the detonation itself.",
        "blurb": "Active:  Teemo tosses a poisonous mushroom to the target location that becomes  stealthed and lasts for a while. It will bounce forward upon landing on another mushroom.",
        "rechargeRate": [
          35,
          30,
          25
        ],
        "collisionRadius": "160 / 150",
        "castTime": "0.25",
        "effectRadius": "450",
        "targetRange": "600 / 675 / 750 / 825 / 900",
        "maxCharges": 3
      }
    ]
  },
  "lore": "Undeterred by even the most dangerous and threatening of obstacles, Teemo scouts the world with boundless enthusiasm and a cheerful spirit. A yordle with an unwavering sense of morality, he takes pride in following the Bandle Scout's Code, sometimes with such eagerness that he is unaware of the broader consequences of his actions. Though some say the existence of the Scouts is questionable, one thing is for certain: Teemo's conviction is nothing to be trifled with."
}
