// Updated Patch 25.11 - 06/08/2025 12:01:46 PM CDT

const champion: Champion =  {
  "id": 40,
  "key": "Janna",
  "name": "Janna",
  "title": "the Storm's Fury",
  "fullName": "Janna Windforce",
  "resource": "Mana",
  "attackType": "Ranged",
  "stats": {
    "health": {
      "flat": 570,
      "perLevel": 90
    },
    "healthRegen": {
      "flat": 5.5,
      "perLevel": 0.55
    },
    "mana": {
      "flat": 360,
      "perLevel": 50
    },
    "manaRegen": {
      "flat": 11.5,
      "perLevel": 0.4
    },
    "armor": {
      "flat": 28,
      "perLevel": 4.5
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 47,
      "perLevel": 2.5
    },
    "movespeed": {
      "flat": 325
    },
    "acquisitionRadius": {
      "flat": 550
    },
    "selectionRadius": {
      "flat": 125
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
      "flat": 0.625,
      "perLevel": 3
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
      "flat": 550
    }
  },
  "positions": [
    "Support"
  ],
  "roles": [
    "Enchanter",
    "Mage",
    "Support"
  ],
  "attributeRatings": {
    "damage": 1,
    "toughness": 1,
    "control": 3,
    "mobility": 1,
    "utility": 3,
    "abilityReliance": 100,
    "difficulty": 1
  },
  "abilities": {
    "P": [
      {
        "name": "Tailwind",
        "icon": "https://cdn.communitydragon.org/latest/champion/Janna/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Janna grants 6% bonus movement speed to nearby allied champions that are facing in the direction of her location.</p>"
          },
          {
            "description": "Janna's basic attacks on-hit and Zephyr deal bonus magic damage equal to 30% of her bonus movement speed."
          }
        ],
        "targeting": "Passive",
        "affects": "Self",
        "spellEffects": "proc",
        "notes": "No additional notes.",
        "blurb": "Innate: Nearby allied champions gain  bonus movement speed while moving toward  Janna.",
        "effectRadius": "1200"
      }
    ],
    "Q": [
      {
        "name": "Howling Gale",
        "icon": "https://cdn.communitydragon.org/latest/champion/Janna/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Janna summons a whirlwind at her current location that charges up over 3 seconds, increasing its range, speed, damage, and knock up duration every second over the duration. Howling Gale's direction is determined by this cast.</p>",
            "leveling": [
              {
                "attribute": "Minimum Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      55,
                      90,
                      125,
                      160,
                      195
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
              },
              {
                "attribute": "Bonus Damage Per Second",
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
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Maximum Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      85,
                      135,
                      185,
                      235,
                      285
                    ]
                  },
                  {
                    "values": [
                      80
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
            "description": "Howling Gale can be recast at any time within the duration, and does so automatically after the duration."
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Janna launches the whirlwind in the direction she targeted over 1.25 seconds, dealing magic damage to enemies hit and knocking them up for 0.5 - 1.25 (based on seconds charged) seconds.</p>"
          }
        ],
        "cost": [
          90,
          95,
          100,
          105,
          110
        ],
        "cooldown": [
          14
        ],
        "targeting": "Direction / Auto",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "area of effect",
        "projectile": "TRUE",
        "notes": "The initial cast and the manual recast count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nThe storm does not interact with enemy units that stand on top of it while it is charging.",
        "blurb": "Active:  Janna summons a whirlwind at her current location that matures over a short time, increasing its range, speed, damage, and knock up duration.",
        "speed": "880 : 1408 (based on seconds charged)",
        "width": "240",
        "castTime": "none",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Zephyr",
        "icon": "https://cdn.communitydragon.org/latest/champion/Janna/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Janna is ghosted and gains bonus movement speed.</p>",
            "leveling": [
              {
                "attribute": "Bonus Movement Speed",
                "modifiers": [
                  {
                    "values": [
                      6,
                      7,
                      8,
                      9,
                      10
                    ],
                    "units": [
                      "%"
                    ]
                  },
                  {
                    "values": [
                      2
                    ],
                    "units": [
                      "% per 100 AP"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Janna sends an air elemental at the target enemy that deals magic damage and slows them for 2 seconds, capped at 99%.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      55,
                      85,
                      115,
                      145,
                      175
                    ]
                  },
                  {
                    "values": [
                      50
                    ],
                    "units": [
                      "% AP"
                    ]
                  },
                  {
                    "values": [
                      30
                    ],
                    "units": [
                      "% bonus movement speed"
                    ]
                  }
                ]
              },
              {
                "attribute": "Slow",
                "modifiers": [
                  {
                    "values": [
                      20,
                      24,
                      28,
                      32,
                      36
                    ],
                    "units": [
                      "%"
                    ]
                  },
                  {
                    "values": [
                      6
                    ],
                    "units": [
                      "% per 100 AP"
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "cost": [
          50,
          55,
          60,
          65,
          70
        ],
        "cooldown": [
          8,
          7.5,
          7,
          6.5,
          6
        ],
        "targeting": "Unit",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spell",
        "projectile": "TRUE",
        "notes": "The maximum slow (99%) is reached with 1316.67 / 1250 / 1183.33 / 1116.67 / 1050 ability power.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
        "blurb": "Passive:  Janna gains  bonus movement speed and becomes permanently  ghosted.",
        "speed": "1600",
        "castTime": "0.245",
        "targetRange": "550",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Eye of the Storm",
        "icon": "https://cdn.communitydragon.org/latest/champion/Janna/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Whenever Janna's abilities slow or knock up at least one enemy champion, 20% of Eye of the Storm's cooldown is refunded. This may occur once per spell cast.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Janna grants the target allied champion or turret, or herself, a shield for 4 seconds.</p>",
            "leveling": [
              {
                "attribute": "Shield Strength",
                "modifiers": [
                  {
                    "values": [
                      80,
                      120,
                      160,
                      200,
                      240
                    ]
                  },
                  {
                    "values": [
                      55
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
            "description": "While the shield holds, the target gains bonus attack damage.",
            "leveling": [
              {
                "attribute": "Bonus Attack Damage",
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
                      "% AP"
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
          16,
          15,
          14,
          13,
          12
        ],
        "targeting": "Unit",
        "affects": "Allies, Allied turrets, Self",
        "resource": "Mana",
        "spellEffects": "Shield",
        "notes": "Eye of the Storm has a  forgiveness radius of 175 units.\n Attack speed slows applied to enemy champions by Janna (e.g.  Frozen Heart) also trigger the passive.(note)\nJanna receives kill credit on enemy champions that are killed by turrets shielded by Eye of the Storm.\nAllied turrets will benefit from the bonus attack damage when targeted by Eye of the Storm.",
        "blurb": "Whenever  Janna's abilities  slow or  knock up at least one enemy  champion, she refunds a portion of  Eye of the Storm's cooldown.",
        "castTime": "none",
        "targetRange": "800",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Monsoon",
        "icon": "https://cdn.communitydragon.org/latest/champion/Janna/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Janna unleashes a blast that knocks back all nearby enemies to up to 875 units over 0.5 seconds based on their proximity, though not through terrain.</p>"
          },
          {
            "description": "Janna also channels for up to 3 seconds, healing herself and nearby allies every 0.25 seconds.",
            "leveling": [
              {
                "attribute": "Heal Per Tick",
                "modifiers": [
                  {
                    "values": [
                      25,
                      37.5,
                      50
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
                "attribute": "Total Heal",
                "modifiers": [
                  {
                    "values": [
                      300,
                      450,
                      600
                    ]
                  },
                  {
                    "values": [
                      150
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
          100
        ],
        "cooldown": [
          130,
          115,
          100
        ],
        "targeting": "Auto",
        "affects": "Enemies, Allies",
        "spellshieldable": "true",
        "resource": "Mana",
        "notes": "The following table refers for interactions while Janna is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nInterrupts\n\n\nAbilities\n\nInterrupts\n\n\nMovement\n\nInterrupts\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
        "castTime": "none",
        "effectRadius": "700",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Armed with the power of Runeterra's gales, Janna is a mysterious, elemental wind spirit who protects the dispossessed of Zaun. Some believe she was brought into existence by the pleas of Runeterra's sailors who prayed for fair winds as they navigated treacherous waters and braved rough tempests. Her favor and protection has since been called into the depths of Zaun, where Janna has become a beacon of hope to those in need. No one knows where or when she will appear, but more often than not, she's come to help."
}
    export default champion