// Updated Patch 25.17 - 09/01/2025 05:26:16 PM CDT

const champion: Champion = {
  "id": 804,
  "key": "Yunara",
  "name": "Yunara",
  "title": "the Unbroken Faith",
  "resource": "Mana",
  "attackType": "Ranged",
  "adaptiveType": "Physical damage",
  "stats": {
    "health": {
      "flat": 600,
      "perLevel": 110
    },
    "healthRegen": {
      "flat": 4,
      "perLevel": 0.55
    },
    "mana": {
      "flat": 275,
      "perLevel": 45
    },
    "manaRegen": {
      "flat": 7.5,
      "perLevel": 0.75
    },
    "armor": {
      "flat": 25,
      "perLevel": 4.4
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 56,
      "perLevel": 2.5
    },
    "movespeed": {
      "flat": 325
    },
    "acquisitionRadius": {
      "flat": 800
    },
    "selectionRadius": {
      "flat": 100
    },
    "pathingRadius": {
      "flat": 30
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
      "flat": 0.65,
      "perLevel": 2
    },
    "attackSpeedRatio": {
      "flat": 0.65
    },
    "attackCastTime": {
      "flat": 0.25
    },
    "attackTotalTime": {
      "flat": 1.538
    },
    "attackRange": {
      "flat": 575
    }
  },
  "positions": [
    "Bottom"
  ],
  "roles": [
    "Marksman"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 1,
    "mobility": 2,
    "utility": 0,
    "abilityReliance": 35,
    "difficulty": 2
  },
  "abilities": {
    "P": [
      {
        "name": "Vow of the First Lands",
        "icon": "https://cdn.communitydragon.org/latest/champion/Yunara/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Yunara's critical strikes deal 10% (+ 10% per 100 AP) bonus magic damage.</p>"
          }
        ],
        "targeting": "Passive",
        "affects": "Self, Enemies",
        "damageType": "Magic damage",
        "spellEffects": "proc",
        "blurb": "Innate:  Yunara's  critical strikes deal bonus magic damage."
      }
    ],
    "Q": [
      {
        "name": "Cultivation of Spirit",
        "icon": "https://cdn.communitydragon.org/latest/champion/Yunara/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Yunara's basic attacks deal bonus magic damage on-hit. While this ability is inactive, her basic attacks on-attack generate a stack of Unleash for 6 seconds, increased to 2 stacks against champions. The stacks refresh on subsequent attacks, stack up to 8 times, and expire by one every 0.5 seconds after the duration.</p>",
            "leveling": [
              {
                "attribute": "Passive Bonus Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      5,
                      10,
                      15,
                      20,
                      25
                    ]
                  },
                  {
                    "values": [
                      20
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
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Yunara unleashes for 5 seconds: gaining bonus attack speed, dealing additional bonus magic damage on-hit, and augmenting her basic attacks to fly faster, have a 40% lower windup time, and spread to each enemy near the target, dealing 30% AD physical damage.Each spread attack applies on-hit effects, with on-hit damage reduced to 30% effectiveness, and will critically strike if the triggering attack does. Spread attacks deal 250% damage against minions below 30% maximum health.</p>",
            "leveling": [
              {
                "attribute": "Bonus Attack Speed",
                "modifiers": [
                  {
                    "values": [
                      25,
                      35,
                      45,
                      55,
                      65
                    ],
                    "units": [
                      "%"
                    ]
                  }
                ]
              },
              {
                "attribute": "Active Bonus Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      5,
                      10,
                      15,
                      20,
                      25
                    ]
                  },
                  {
                    "values": [
                      20
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Combined Bonus Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      10,
                      20,
                      30,
                      40,
                      50
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
              },
              {
                "attribute": "Active Increased Minion Damage",
                "modifiers": [
                  {
                    "values": [
                      12.5,
                      25,
                      37.5,
                      50,
                      62.5
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
                "attribute": "Combined Increased Minion Damage",
                "modifiers": [
                  {
                    "values": [
                      25,
                      50,
                      75,
                      100,
                      125
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
            "description": "Cultivation of Spirit resets Yunara's basic attack timer. Targets do not have to be visible to be hit by this ability."
          }
        ],
        "cost": [
          30
        ],
        "cooldown": [
          0
        ],
        "targeting": "Auto",
        "affects": "Self, Enemies",
        "spellshieldable": "false",
        "resource": "Other",
        "damageType": "Other damage",
        "spellEffects": "special",
        "projectile": "UNKNOWN",
        "notes": "Cultivation of Spirit's damage classifications:\n Proc damage for the passive and active on-hit damage.\nApplies  spell effects on-hit against the main target.(bug)\n Basic damage for the spread attack damage.\nSpread attacks will still deal damage even if Yunara misses her basic attack due to  blind.\nPENDING FOR TEST: Spread attack interaction with parrying effects ( dodge,  block)\nPENDING FOR TEST: Spread attack interaction with projectile-interception effects ( Unbreakable,  Wind Wall,  Rebuttal,  Blade Whirl)\nThere is no limit to the number of enemies the empowered attacks can spread to.\nYunara's secondary resource bar gives various context for Cultivation of Spirit. It is visible to the player only.\nWhile Cultivation of Spirit is not active, the bar shows her current Unleash stacks. It is colored white while below maximum stacks and yellow while at maximum stacks.\nAfter Cultivation of Spirit is cast, the bar counts down the buff's duration.\nThis is also true during  Transcend One's Self, which means that the bar effectively also counts down the duration of her Transcendent State.\nIf Yunara begins an attack windup toward the end of the active effects' duration and its launch would take place after it, the effects' duration is extended equal to the attack's windup time, once at most.\nSince the buff ends right after launching Cultivation of Spirit's attack and its effects have already been determined, this allows it to both spread to nearby enemies and generate a stack of Unleash.\nEach bolt from  Runaan's Hurricane's Wind's Fury may trigger its own spread attack (despite the spread attacks not being an on-hit effect).\nBecause Unleash stacks are generated  on-attack,  Runaan's Hurricane's Wind's Fury's bolts will not generate any.",
        "blurb": "Passive:  Yunara's  basic attacks deal bonus magic damage  on-hit and generate  stacks of Unleash  on-attack, stacking up to a cap upon which she can cast Cultivation of Spirit.",
        "speed": "10000 / 2000",
        "castTime": "none",
        "effectRadius": "300",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Arc of Judgment",
        "icon": "https://cdn.communitydragon.org/latest/champion/Yunara/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Yunara launches a spinning prayer bead in the target direction that briefly grants sight of its surroundings as it travels. The bead slows down significantly while colliding with an enemy, lingering as it travels and resetting its remaining duration; upon reaching maximum range, it will expand and linger in place for 1 second regardless of enemies hit.The initial hit against each enemy before the bead's expansion deals magic damage and slows them by 99% decaying over 1.5 seconds. While lingering, the bead deals magic damage to nearby enemies every 0.25 seconds.</p>",
            "leveling": [
              {
                "attribute": "Initial Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      5,
                      30,
                      55,
                      80,
                      105
                    ]
                  },
                  {
                    "values": [
                      85
                    ],
                    "units": [
                      "% AD"
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
                "attribute": "Linger Magic Damage per Tick",
                "modifiers": [
                  {
                    "values": [
                      1.25,
                      5,
                      8.75,
                      12.5,
                      16.25
                    ]
                  },
                  {
                    "values": [
                      10
                    ],
                    "units": [
                      "% AD"
                    ]
                  },
                  {
                    "values": [
                      6.25
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Total Expanded Damage",
                "modifiers": [
                  {
                    "values": [
                      5,
                      20,
                      35,
                      50,
                      65
                    ]
                  },
                  {
                    "values": [
                      40
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
            "description": "Arc of Judgment deals 50% / 75% / 100% (based on level) damage against minions and executes them if they would be killed by 6 more damage instances from the linger effect."
          }
        ],
        "cost": [
          60
        ],
        "cooldown": [
          10
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "special",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "special",
        "projectile": "UNKNOWN",
        "notes": "Applies  area damage for the initial hit and  persistent area damage for the lingering effect.\n Spell shield can block either the initial hit or one damage tick of the lingering effect.\nThis ability will cast from wherever the caster is at the end of the cast time.\nArc of Judgment can hit an enemy more than once with the initial damage as well with the lingering effect (both while not expanded and while expanded).\nThe bead can hit an enemy multiple times if they collide with it again while it is in flight.",
        "blurb": "Active:  Yunara launches a spinning prayer bead that briefly slows down upon hitting an enemy. The initial hit against each enemy deals magic damage and  slows the target, and the bead continually deals magic damage to nearby enemies.",
        "speed": "2150 / 150",
        "width": "120",
        "castTime": "0.45 : 0.225 (based on bonus attack speed)",
        "effectRadius": "150",
        "maxCharges": -1
      },
      {
        "name": "Arc of Ruin",
        "icon": "https://cdn.communitydragon.org/latest/champion/Yunara/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Yunara fires a beam of spirit magic in the target direction that deals 50 / 200 / 350 (based on Transcend One's Self's Rank) (+ 175% AD) (+ 75% AP) magic damage to enemies hit and slows them by 99% decaying over 1 second, as well as granting sight of the surrounding area.</p>"
          },
          {
            "description": "This ability benefits from ultimate ability effects and is the upgraded version of Arc of Judgment during Transcendent State."
          }
        ],
        "cost": [
          60
        ],
        "cooldown": [
          10
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "true",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "projectile": "FALSE",
        "notes": "Arc of Ruin grants  sight of its surroundings during the cast time and for 0.3 seconds afterwards.\nThis ability will cast from wherever the caster is at the end of the cast time.\nArc of Ruin does not trigger ultimate cast effects, such as  Experimental Hexplate's Overdrive,  Zeke's Convergence's Frostfire Tempest and  Cloud Dragon Soul's increased movement speed. This is intended.",
        "blurb": "Active:  Yunara fires a beam of spirit magic in the target direction that deals magic damage to enemies and  slows them for a short duration.",
        "width": "120",
        "castTime": "0.6 : 0.45 (based on bonus attack speed)",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Kanmei's Steps",
        "icon": "https://cdn.communitydragon.org/latest/champion/Yunara/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Yunara becomes ghosted and gains bonus movement speed decaying over a few seconds. The movement speed is 50% more effective while facing a nearby visible enemy champion.</p>",
            "leveling": [
              {
                "attribute": "Bonus Move Speed",
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
              },
              {
                "attribute": "Increased Bonus Move Speed",
                "modifiers": [
                  {
                    "values": [
                      75,
                      82.5,
                      90,
                      97.5,
                      105
                    ],
                    "units": [
                      "%"
                    ]
                  }
                ]
              },
              {
                "attribute": "Duration",
                "modifiers": [
                  {
                    "values": [
                      1.5,
                      1.75,
                      2,
                      2.25,
                      2.5
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
          40
        ],
        "cooldown": [
          7.5
        ],
        "targeting": "auto",
        "affects": "Self",
        "resource": "Mana",
        "blurb": "Active:  Yunara briefly becomes  ghosted and gains decaying  bonus move speed, increased while facing an enemy  champion.",
        "castTime": "none",
        "effectRadius": "2000",
        "maxCharges": -1
      },
      {
        "name": "Untouchable Shadow",
        "icon": "https://cdn.communitydragon.org/latest/champion/Yunara/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Yunara dashes in the target direction.Untouchable Shadow resets Yunara's basic attack timer. Arc of Ruin can be cast during the dash. This ability benefits from ultimate ability effects and is the upgraded version of Kanmei's Steps during Transcendent State.</p>"
          }
        ],
        "cost": [
          40
        ],
        "cooldown": [
          7.5
        ],
        "targeting": "Location",
        "affects": "Self",
        "notes": "Untouchable Shadow does not trigger ultimate cast effects, such as  Experimental Hexplate's Overdrive,  Zeke's Convergence's Frostfire Tempest and  Cloud Dragon Soul's increased movement speed. This is intended.",
        "blurb": "Active:  Yunara  dashes in the target direction.",
        "speed": "1350 / 1500 / 1650 (based on  Transcend One's Self's Rank)",
        "castTime": "none",
        "targetRange": "225 : 450 / 550",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Transcend One's Self",
        "icon": "https://cdn.communitydragon.org/latest/champion/Yunara/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Arc of Ruin's base damage and Untouchable Shadow's dash speed scale with Transcend One's Self's rank.</p>",
            "leveling": [
              {
                "attribute": "Arc of Ruin Base Damage",
                "modifiers": [
                  {
                    "values": [
                      50,
                      200,
                      350
                    ]
                  }
                ]
              },
              {
                "attribute": "Untouchable Shadow Dash Speed",
                "modifiers": [
                  {
                    "values": [
                      1350,
                      1500,
                      1650
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Yunara enters Transcendent State for 15 seconds, during which each of her basic abilities is empowered:</p>\n<p class=\"ability-effect\"><span class=\"ability-header\"> Cultivation of Spirit:</span> Automatically becomes active at no cost, with the duration increased to Transcendent State's.</p>\n<p class=\"ability-effect\"><span class=\"ability-header\"> Arc of Judgment:</span> Upgraded into Arc of Ruin, which has no cost and has its remaining cooldown reduced by 80% upon both entering and exiting the state.</p>\n<p class=\"ability-effect\"><span class=\"ability-header\"> Kanmei's Steps:</span> Upgraded into Untouchable Shadow, which has no cost and has its cooldown reset upon both entering and exiting the state.</p>"
          }
        ],
        "cost": [
          100
        ],
        "cooldown": [
          100,
          90,
          80
        ],
        "targeting": "Auto",
        "affects": "Self",
        "resource": "Mana",
        "notes": "An ongoing  Kanmei's Steps' effect is not lost when quickly replaced by  Untouchable Shadow.\n Cultivation of Spirit is cast alongside Transcend One's Self. If the former was not already active, this will also grant its  attack reset.\nThe attack reset does not originate from Transcend One's Self nor is Transcend One's Self tagged as granting one itself (e.g. for the purposes of  Hail of Blades).\nTranscend One's Self cannot be cast again while active.",
        "blurb": "Passive:  Arc of Ruin's damage and  Untouchable Shadow's dash speed are increased.",
        "castTime": "none",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Unwavering in her devotion to Ionia, Yunara has spent centuries cloistered away in the spirit realm honing her skills with the Aion Er'na, a legendary Kinkou relic. Despite all she has sacrificed, Yunara's vow to rid the land of disharmony and strife remains unbroken, as does her faith. But the world that now awaits her—and the shadow of an ancient threat risen once more—will test every ounce of her resolve.",
  "faction": "ionia",
  "releaseDate": "2025-07-16",
  "patchLastChanged": "25.14",
  "price": {
    "blueEssence": 3150,
    "rp": 975
  }
}
export default champion