// Updated Patch 25.11 - 06/08/2025 12:01:46 PM CDT

const champion: Champion =  {
  "id": 246,
  "key": "Qiyana",
  "name": "Qiyana",
  "title": "Empress of the Elements",
  "resource": "Mana",
  "attackType": "Melee",
  "stats": {
    "health": {
      "flat": 590,
      "perLevel": 124
    },
    "healthRegen": {
      "flat": 8,
      "perLevel": 0.9
    },
    "mana": {
      "flat": 375,
      "perLevel": 60
    },
    "manaRegen": {
      "flat": 8,
      "perLevel": 0.7
    },
    "armor": {
      "flat": 31,
      "perLevel": 4.7
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 66,
      "perLevel": 3.1
    },
    "movespeed": {
      "flat": 335
    },
    "acquisitionRadius": {
      "flat": 800
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
      "flat": 0.688,
      "perLevel": 2.1
    },
    "attackSpeedRatio": {
      "flat": 0.625
    },
    "attackCastTime": {
      "flat": 0.23
    },
    "attackTotalTime": {
      "flat": 1.5
    },
    "attackRange": {
      "flat": 150
    }
  },
  "positions": [
    "Middle"
  ],
  "roles": [
    "Assassin",
    "Fighter"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 2,
    "mobility": 2,
    "utility": 1,
    "abilityReliance": 70,
    "difficulty": 3
  },
  "abilities": {
    "P": [
      {
        "name": "Royal Privilege",
        "icon": "https://cdn.communitydragon.org/latest/champion/Qiyana/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Qiyana's basic attacks and basic abilities deal 15 - 83 (based on level) (+ 30% bonus AD) (+ 30% AP) additional physical damage. This effect cannot occur on the same target more than once every few seconds.</p>"
          },
          {
            "description": "Gathering an Element with Terrashape resets Royal Privilege's per-target cooldown for enemies affected by Royal Privilege using a different Element (or no Element)."
          }
        ],
        "targeting": "Passive",
        "affects": "Enemies",
        "damageType": "Physical damage",
        "spellEffects": "proc",
        "notes": "Royal Privilege's trigger from a basic attack can be  blocked (bonus damage is negated and the on-target cooldown does not apply).\nRoyal Privilege will not apply a cooldown to targets that are hit with an  Elemental Wrath that has a different  Element than the  Element Qiyana currently holds.\nThis does not occur if a new  Elemental Wrath with a different  Element is cast before the first one lands.\nThe effect will not trigger against structures nor wards.\nPENDING FOR TEST:: Royal Privilege's interaction with parrying effects ( dodge,  blind).",
        "blurb": "Innate:  Qiyana's basic attacks and basic abilities deal additional physical damage.",
        "onTargetCdStatic": "25"
      }
    ],
    "Q": [
      {
        "name": "Edge of Ixtal",
        "icon": "https://cdn.communitydragon.org/latest/champion/Qiyana/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Qiyana slashes forward in the target direction, dealing physical damage to enemies in a line, reduced to 75% damage against targets beyond the first. Edge of Ixtal deals 175% damage against monsters.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      60,
                      90,
                      120,
                      150,
                      180
                    ]
                  },
                  {
                    "values": [
                      90
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  }
                ]
              },
              {
                "attribute": "Reduced Damage",
                "modifiers": [
                  {
                    "values": [
                      45,
                      67.5,
                      90,
                      112.5,
                      135
                    ]
                  },
                  {
                    "values": [
                      67.5
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
            "description": "Gathering an Element with Terrashape resets Edge of Ixtal's cooldown and upgrades it into Elemental Wrath."
          },
          {
            "description": "If cast during Audacity's dash towards an enemy champion and the target is within 150 units of Qiyana at the end of the dash, Edge of Ixtal will autonomously aim at the target."
          }
        ],
        "cost": [
          35
        ],
        "cooldown": [
          7
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "true",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "Area of effect",
        "projectile": "FALSE",
        "notes": "If cast during  Audacity and the target uses a dash or blink or is no longer in vision, Edge of Ixtal will aim at the target's last location prior to them starting the dash or blink or being in vision.\nThis ability will cast from wherever the caster is at the end of the cast time.",
        "blurb": "Active:  Qiyana slashes forward in the target direction, dealing physical damage to enemies hit in a line.",
        "width": "140",
        "castTime": "0.25"
      },
      {
        "name": "Elemental Wrath",
        "icon": "https://cdn.communitydragon.org/latest/champion/Qiyana/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Qiyana hurls her blade in the target direction that blasts in a line upon hitting an enemy or maximum range, consuming the current Element to empower the blade with an additional effect.</p>"
          },
          {
            "description": "Enemies hit are dealt Edge of Ixtal's damage, reduced to 75% against subsequent enemies beyond the closest. Elemental Wrath deals 175% damage against monsters.",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      60,
                      90,
                      120,
                      150,
                      180
                    ]
                  },
                  {
                    "values": [
                      90
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  }
                ]
              },
              {
                "attribute": "Reduced Damage",
                "modifiers": [
                  {
                    "values": [
                      45,
                      67.5,
                      90,
                      112.5,
                      135
                    ]
                  },
                  {
                    "values": [
                      67.5
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
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Brush:</span> The blade creates a grass field around Qiyana that lasts for up to 3 seconds, granting her invisibility and 20% bonus movement speed until she attacks, casts an ability other than Terrashape, or exits the field.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">River:</span> The blast roots enemies hit for 0.5 seconds, then slows them by 20% for 1 second.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Terrain:</span> The blast deals 60% increased damage against enemies below 50% of their maximum health. Subsequent targets beyond the closest that are below the threshold take 35% increased damage instead.</p>",
            "leveling": [
              {
                "attribute": "Increased Damage",
                "modifiers": [
                  {
                    "values": [
                      96,
                      144,
                      192,
                      240,
                      288
                    ]
                  },
                  {
                    "values": [
                      144
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  }
                ]
              },
              {
                "attribute": "Subsequent Increased Damage",
                "modifiers": [
                  {
                    "values": [
                      81,
                      121.5,
                      162,
                      202.5,
                      243
                    ]
                  },
                  {
                    "values": [
                      121.5
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "cost": [
          35
        ],
        "cooldown": [
          7
        ],
        "targeting": "Direction",
        "affects": "Enemies, Self",
        "spellshieldable": "true",
        "damageType": "Physical damage",
        "spellEffects": "Area of effect",
        "projectile": "TRUE",
        "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nUsing a basic attack breaks the stealth at the start of the attack windup.",
        "blurb": "Active:  Qiyana hurls her blade in the target direction that blasts in a line upon hitting an enemy or max range, dealing physical damage, reduced against enemies beyond the closest. This consumes the current Element to empower the blade with an additional effect.\nBrush: The blade creates a grass field around Qiyana that lasts a short time, granting her  invisibility and  bonus movement speed until she attacks or exits the field.\nRiver: The blast briefly  roots enemies hit, then briefly  slows them.\nTerrain: The blast deals  bonus damage against enemies below half health.",
        "speed": "1600 / 2000",
        "width": "250 / 200"
      }
    ],
    "W": [
      {
        "name": "Terrashape",
        "icon": "https://cdn.communitydragon.org/latest/champion/Qiyana/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> While holding an Element, Qiyana gains bonus attack speed, 25 bonus attack range and bonus magic damage on her basic attacks on-hit and basic abilities. While out-of-combat and moving near the Element currently being held, she gains bonus movement speed.</p>",
            "leveling": [
              {
                "attribute": "Bonus Attack Speed",
                "modifiers": [
                  {
                    "values": [
                      5,
                      10,
                      15,
                      20,
                      25
                    ],
                    "units": [
                      "%"
                    ]
                  }
                ]
              },
              {
                "attribute": "Bonus Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      8,
                      16,
                      24,
                      32,
                      40
                    ]
                  },
                  {
                    "values": [
                      20
                    ],
                    "units": [
                      "% bonus AD"
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
                "attribute": "Bonus Movement Speed",
                "modifiers": [
                  {
                    "values": [
                      3,
                      5,
                      7,
                      9,
                      11
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
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Qiyana dashes up to 300 units towards the target location to gather the Element of the nearest Brush, River or Terrain she targeted.</p>"
          },
          {
            "description": "A target Element is required to cast this ability."
          },
          {
            "description": "Once Terrashape has been learned, Qiyana is automatically given the Terrain element upon respawning."
          },
          {
            "description": "Qiyana can cast any of her abilities during the dash."
          }
        ],
        "cost": [
          25,
          30,
          35,
          40,
          45
        ],
        "cooldown": [
          7
        ],
        "targeting": "Location",
        "affects": "Self",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "proc",
        "notes": "Terrashape does not interact with player-generated terrain.\nThe water puddles formed by the  Ocean Rift on  Summoner's Rift count as valid terrain for obtaining the  River element.\nThe  brushes grown by  Ivern's  Brushmaker count for gathering the  Brush element.\nPassive bonus damage from basic attacks can be  blocked.\nThe passive damage works with  Guinsoo's Rageblade's Phantom Hit.\nPENDING FOR TEST:: Passive bonus damage interaction with parrying effects ( dodge,  blind).",
        "blurb": "Passive: While holding an Element,  Qiyana gains bonus  attack speed and  attack range, as well as bonus magic damage on her basic attacks and basic abilities. Qiyana gains  bonus movement speed speed while moving near the current Element.",
        "speed": "440 + 100% movement speed",
        "castTime": "none",
        "effectRadius": "366",
        "targetRange": "1100"
      }
    ],
    "E": [
      {
        "name": "Audacity",
        "icon": "https://cdn.communitydragon.org/latest/champion/Qiyana/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Qiyana dashes a fixed distance in the direction of the target enemy. If they are in range upon arrival, she deals physical damage.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      50,
                      90,
                      130,
                      170,
                      210
                    ]
                  },
                  {
                    "values": [
                      50
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
            "description": "Qiyana can cast any of her abilities during the dash."
          }
        ],
        "cost": [
          40,
          45,
          50,
          55,
          60
        ],
        "cooldown": [
          11,
          10,
          9,
          8,
          7
        ],
        "targeting": "Unit",
        "affects": "Enemies, Self",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "Single",
        "notes": "Audacity only damages targets if within 250 range upon completion of the dash.",
        "blurb": "Active:  Qiyana  dashes toward the target enemy and deals physical damage upon arrival.",
        "speed": "600 + 100% movement speed",
        "castTime": "none",
        "targetRange": "650"
      }
    ],
    "R": [
      {
        "name": "Supreme Display of Talent",
        "icon": "https://cdn.communitydragon.org/latest/champion/Qiyana/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Qiyana sweeps a windblast in the target direction that knocks back enemies hit, though not through terrain, and stops upon hitting Terrain.</p>"
          },
          {
            "description": "The windblast creates a cascading shockwave across any River or Brush it passes through, as well as around the borders of Terrain it reaches, dealing physical damage to enemies hit, stunning them for 0.5 - 1 (based on proximity) seconds, and briefly granting sight of the area along its path. The damage based on the target's health ratio is capped against monsters.",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      100,
                      200,
                      300
                    ]
                  },
                  {
                    "values": [
                      125
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  },
                  {
                    "values": [
                      10
                    ],
                    "units": [
                      "% of target's maximum health"
                    ]
                  }
                ]
              },
              {
                "attribute": "Capped Monster Health Damage",
                "modifiers": [
                  {
                    "values": [
                      500,
                      750,
                      1000
                    ]
                  },
                  {
                    "values": [
                      125
                    ],
                    "units": [
                      "% bonus AD"
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
          120
        ],
        "targeting": "Direction",
        "affects": "Enemies, Terrain",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "spellaoe",
        "projectile": "SPECIAL",
        "notes": "The windblast needs only to reach near terrain to trigger the terrain shockwave.\nThe shockwave grants sight along each part of its path for 0.75 seconds.\nArtificial terrain (e.g,  Anivia's  Crystallize,  Taliyah's  Weaver's Wall,  Trundle's  Pillar of Ice) touching map terrain will be treated as a single piece of terrain, even when bridging two pieces of map terrain together; the shockwave will wrap around all connecting terrain. The shockwave's path is determined once it initially spreads; any expired terrain will be treated as if it were still there.\n Projectile-intercepting effects will block the windblast but not the shockwave.\nThis ability will cast from wherever the caster is at the end of the cast time.",
        "blurb": "Active:  Qiyana sweeps a windblast in the target direction that  knocks back enemies hit and stops upon hitting Terrain.",
        "speed": "2000 / 2840",
        "width": "280 / 120",
        "castTime": "0.25",
        "effectRadius": "11000",
        "targetRange": "875"
      }
    ]
  },
  "lore": "In the jungle city of Ixaocan, Qiyana plots her own ruthless path to the high seat of the Yun Tal. Last in line to succeed her parents, she faces those who stand in her way with brash confidence and unprecedented mastery over elemental magic. With the land itself obeying her every command, Qiyana sees herself as the greatest elementalist in the history of Ixaocan—and by that right, deserving of not only a city, but an empire."
}
    export default champion