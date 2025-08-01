// Updated Patch 25.15 - 07/31/2025 07:16:02 AM CDT

const champion: Champion =  {
  "id": 24,
  "key": "Jax",
  "name": "Jax",
  "title": "Grandmaster at Arms",
  "fullName": "Saijax Cail-Rynx Kohari Icath’un",
  "resource": "Mana",
  "attackType": "Melee",
  "stats": {
    "health": {
      "flat": 665,
      "perLevel": 103
    },
    "healthRegen": {
      "flat": 8.5,
      "perLevel": 0.55
    },
    "mana": {
      "flat": 339,
      "perLevel": 52
    },
    "manaRegen": {
      "flat": 8.2,
      "perLevel": 0.7
    },
    "armor": {
      "flat": 36,
      "perLevel": 4.2
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 68,
      "perLevel": 4.25
    },
    "movespeed": {
      "flat": 350
    },
    "acquisitionRadius": {
      "flat": 400
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
      "flat": 0.638,
      "perLevel": 3.4
    },
    "attackSpeedRatio": {
      "flat": 0.638
    },
    "attackCastTime": {
      "flat": 0.3
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackDelayOffset": {
      "flat": -0.092
    },
    "attackRange": {
      "flat": 125
    }
  },
  "positions": [
    "Jungle",
    "Top"
  ],
  "roles": [
    "Assassin",
    "Fighter",
    "Skirmisher"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 2,
    "control": 2,
    "mobility": 2,
    "utility": 1,
    "abilityReliance": 10,
    "difficulty": 1
  },
  "abilities": {
    "P": [
      {
        "name": "Relentless Assault",
        "icon": "https://cdn.communitydragon.org/latest/champion/Jax/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Jax's basic attacks generate a stack of Relentless Assault on-attack for 2.5 seconds, refreshing on subsequent attacks and stacking up to 8 times. Stacks expire by one every 0.25 seconds when the duration ends.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Relentless Assault:</span> For each stack, Jax gains 5% - 12.5% (based on level) bonus attack speed, up to a maximum of 40% - 100% (based on level).</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Grandmaster at Angling:</span> While out-of-combat with champions and idle in the river for 10 seconds, Jax will occasionally catch a fish, granting him 1 and 1 ability power for 5 seconds. He catches a fish at an average rate of one every 15 seconds. He also has a 5% chance to catch a rare fish that grants 10 and 10 ability power for 5 seconds.</p>"
          }
        ],
        "targeting": "Passive",
        "affects": "Enemies, Self",
        "notes": "Jax will start fishing while idle in the river if he is in-combat with only monsters (e.g. any of the three Epic monsters).(bug)\nJax catching a fish is a random event and will play a special animation.\nThe total number of fish caught during the game is displayed when fishing as  Grandmaster at Angling passive.",
        "blurb": "Innate:  Jax's  basic attacks generate  stacks, up to a cap. Stacks expire one at a time."
      }
    ],
    "Q": [
      {
        "name": "Leap Strike",
        "icon": "https://cdn.communitydragon.org/latest/champion/Jax/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jax dashes to the target unit's location.</p>"
          },
          {
            "description": "If the target is an enemy and they are in range upon arrival, Jax deals physical damage to them.",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      65,
                      105,
                      145,
                      185,
                      225
                    ]
                  },
                  {
                    "values": [
                      100
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
            "description": "Jax can cast any of his abilities during the dash."
          }
        ],
        "cost": [
          65
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
        "spellshieldable": "true",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "single",
        "notes": "Leap Strike cannot be cast on structures.\nIf the target is an enemy champion, Jax will be ordered to basic attack them after the dash ends.\n Spell shield will block the damage, including when  empowered.",
        "blurb": "Active:  Jax  dashes to the target unit. If they are an enemy, he deals physical damage.",
        "castTime": "false",
        "targetRange": "700",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Empower",
        "icon": "https://cdn.communitydragon.org/latest/champion/Jax/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jax empowers his next basic attack or Leap Strike against an enemy within 10 seconds to deal bonus magic damage, reduced to 50% against structures. If Empower is used on a basic attack, it will gain 50 bonus range and have an uncancellable windup.</p>",
            "leveling": [
              {
                "attribute": "Bonus Magic Damage",
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
                      60
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
            "description": "Empower resets Jax's basic attack timer."
          }
        ],
        "cost": [
          30
        ],
        "cooldown": [
          7,
          6,
          5,
          4,
          3
        ],
        "targeting": "Auto",
        "affects": "Self, Enemies",
        "spellshieldable": "true",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spell",
        "blurb": "Active:  Jax empowers his next basic attack or  Leap Strike against an enemy to deal bonus magic damage.",
        "castTime": "none",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Counter Strike",
        "icon": "https://cdn.communitydragon.org/latest/champion/Jax/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jax enters Evasion for 2 seconds: a defensive stance that causes him to dodge all incoming non- turret basic attacks and take 25% reduced damage from all area of effect abilities from champions. Counter Strike can be recast after 1 second, and does so automatically after the duration.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Jax deals magic damage to nearby enemies, with the total damage increased by 20% for each attack dodged, up to a 100% increase, and stuns them for 1 second.</p>",
            "leveling": [
              {
                "attribute": "Minimum Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      40,
                      70,
                      100,
                      130,
                      160
                    ]
                  },
                  {
                    "values": [
                      70
                    ],
                    "units": [
                      "% AP"
                    ]
                  },
                  {
                    "values": [
                      3.5
                    ],
                    "units": [
                      "% of target's maximum health"
                    ]
                  }
                ]
              },
              {
                "attribute": "Maximum Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      80,
                      140,
                      200,
                      260,
                      320
                    ]
                  },
                  {
                    "values": [
                      140
                    ],
                    "units": [
                      "% AP"
                    ]
                  },
                  {
                    "values": [
                      7
                    ],
                    "units": [
                      "% of target's maximum health"
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "cost": [
          50,
          60,
          70,
          80,
          90
        ],
        "cooldown": [
          17,
          15,
          13,
          11,
          9
        ],
        "targeting": "Auto",
        "affects": "Self, Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "aoe",
        "notes": "The initial cast and the manual recast count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nCounter Strike will also dodge abilities that can trigger on-hit effects ( Parrrley,  Mystic Shot) which will count towards Counter Strike's increased damage. There are exceptions of abilities that Counter Strike will not dodge but will dodge the damage from on-hit effects that they trigger ( Alpha Strike,  Piercing Darkness).",
        "blurb": "Active:  Jax enters Evasion for a short time: a defensive stance that causes him to  dodge all incoming non- turret basic attacks and take reduced damage from all  area of effect abilities from  champions.",
        "castTime": "None",
        "effectRadius": "375",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Grandmaster-at-Arms",
        "icon": "https://cdn.communitydragon.org/latest/champion/Jax/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Jax's basic attacks generate a stack of Grandmaster-at-Arms on-hit for 2.5 seconds, refreshing on subsequent hits and stacking up to 2 times. At 2 stacks, his next basic attack on-hit is empowered to have an uncancellable windup and consume all stacks to deal bonus magic damage, reduced to 50% against structures. While Grandmaster-at-Arms is active, the empowered attack triggers at 1 stack instead.</p>",
            "leveling": [
              {
                "attribute": "Bonus Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      75,
                      130,
                      185
                    ]
                  },
                  {
                    "values": [
                      60
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
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jax swings his lantern around, dealing magic damage to nearby enemies. If this hits a champion, he gains bonus armor, increased for each champion hit beyond the first, and bonus magic resistance equal to 60% of that amount as well as 10% increased size for 8 seconds.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      100,
                      175,
                      250
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
              },
              {
                "attribute": "Bonus Armor",
                "modifiers": [
                  {
                    "values": [
                      25,
                      50,
                      75
                    ]
                  },
                  {
                    "values": [
                      40
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  }
                ]
              },
              {
                "attribute": "Bonus Magic Resistance",
                "modifiers": [
                  {
                    "values": [
                      15,
                      30,
                      45
                    ]
                  },
                  {
                    "values": [
                      24
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  }
                ]
              },
              {
                "attribute": "Bonus Armor per Champion Hit",
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
                      10
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  }
                ]
              },
              {
                "attribute": "Bonus Magic Resistance per Champion Hit",
                "modifiers": [
                  {
                    "values": [
                      12,
                      15,
                      18
                    ]
                  },
                  {
                    "values": [
                      6
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
            "description": "Jax can move during Grandmaster-at-Arms' cast time."
          }
        ],
        "cost": [
          100
        ],
        "cooldown": [
          110,
          100,
          90
        ],
        "targeting": "Auto",
        "affects": "Enemies, Self",
        "spellshieldable": "special",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "special",
        "notes": "The attack bonus deals  proc damage. The swing deals  area damage.\nThe bonus resistances are represented by a glowing aura around Jax that grows with each enemy champion hit beyond the first.\nThe bonus magic damage can be  dodged and  blocked but it cannot  miss.\n Spell shield will only block the bonus damage from the third attack if it is  empowered.\nThe empowered attack will trigger but not be consumed nor apply its effects against wards.\nStacks will still be generated when attacking them.\n\nThis ability will cast from wherever the caster is at the end of the cast time.",
        "blurb": "Passive:  Jax's  basic attacks generate  stacks. At max stacks, he consumes them to deal bonus magic damage.",
        "castTime": "0.25",
        "effectRadius": "375",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Unmatched in both his skill with unique armaments and his biting sarcasm, Jax is the last known weapons master of Icathia. After his homeland was laid low by its own hubris in unleashing the Void, Jax and his kind vowed to protect what little remained. As magic now rises in the world, this slumbering threat stirs once more, and Jax roams Valoran, wielding the last light of Icathia and testing all warriors he meets to see if any are strong enough to stand beside him..."
}
    export default champion