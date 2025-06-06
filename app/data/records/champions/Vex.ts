// Updated Patch 25.11 - 06/06/2025 12:19:16 PM CDT

const champion: Champion =  {
  "id": 711,
  "key": "Vex",
  "name": "Vex",
  "title": "the Gloomist",
  "resource": "Mana",
  "attackType": "Ranged",
  "stats": {
    "health": {
      "flat": 590,
      "perLevel": 104
    },
    "healthRegen": {
      "flat": 6.5,
      "perLevel": 0.6
    },
    "mana": {
      "flat": 490,
      "perLevel": 32
    },
    "manaRegen": {
      "flat": 6,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 23,
      "perLevel": 4.45
    },
    "magicResistance": {
      "flat": 28,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 54,
      "perLevel": 2.75
    },
    "movespeed": {
      "flat": 335
    },
    "acquisitionRadius": {
      "flat": 750
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
      "flat": 0.669,
      "perLevel": 1
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
      "flat": -0.144
    },
    "attackRange": {
      "flat": 550
    }
  },
  "positions": [
    "Middle"
  ],
  "roles": [
    "Burst",
    "Mage"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 2,
    "control": 2,
    "mobility": 2,
    "utility": 1,
    "abilityReliance": 90,
    "difficulty": 2
  },
  "abilities": {
    "P": [
      {
        "name": "Doom 'n Gloom",
        "icon": "https://cdn.communitydragon.org/latest/champion/Vex/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive - Doom:</span> Periodically, Vex empowers her next basic ability to knock down and fear enemies hit for 0.75 / 1 / 1.25 / 1.5 (based on level) seconds, during which they are slowed by 60% - 99% (based on distance from Vex). If Looming Darkness triggers Doom, enemies hit will flee from the epicenter instead.Doom's cooldown resets upon respawning.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Gloom:</span> Nearby enemy champions and monsters that dash or blink will be marked with Gloom for 6 seconds. Vex's next basic attack, which becomes non-projectile, or basic ability hit against an enemy with Gloom will detonate the mark. Looming Darkness will also inflict Gloom, but cannot detonate it.</p>"
          },
          {
            "description": "Gloom's detonation deals 40 - 150 (based on level) (+ 25% AP) bonus magic damage and refunds 25% of Doom's cooldown. Against non-champions, this instead deals 40 / 45 / 50 / 55 / 60% (based on level) damage and refunds 10% of Doom's cooldown."
          }
        ],
        "targeting": "Passive",
        "affects": "Self, Enemies",
        "spellshieldable": "special",
        "damageType": "Magic damage",
        "spellEffects": "proc",
        "projectile": "FALSE",
        "notes": "Gloom will mark  Rift Herald and  Rift Scuttler when they use their dashes.\nGloom can mark  clones, but not other  pets.\nGloom's mark has a very brief cooldown and refreshes on subsequent dashes or blinks nearby enemies use.\nGloom's mark duration will refresh to 0.5 seconds when Vex starts an attack windup against a target that has a mark which is about to expire.\nGloom will mark enemies even if they are  untargetable.\nGloom will mark enemies that are inside the detection radius when they blink, but will not mark those that blink inside from far away.(note)\nDoom's cooldown starts as soon as the basic ability is cast.\nNon-champions (e.g.  Rift Scuttler) are not  knocked down by the fear-empowered ability.(note)\n Spell shield will block all of Doom's effects but not Gloom's empowered attack nor mark.\nNearby enemies that become displaced do not count for being marked by Gloom.\nVex's basic abilities use a different icon when Doom is ready:\n Mistral Bolt\n Personal Space\n Looming Darkness",
        "blurb": "Passive - Doom: Periodically,  Vex empowers her next basic ability to  knock down and briefly  fear enemies hit.",
        "effectRadius": "1600"
      }
    ],
    "Q": [
      {
        "name": "Mistral Bolt",
        "icon": "https://cdn.communitydragon.org/latest/champion/Vex/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Vex launches a wave of mist in the target direction that deals magic damage to enemies hit. After travelling 500 units, the wave accelerates but also narrows itself.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      70,
                      115,
                      160,
                      205,
                      250
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
          }
        ],
        "cost": [
          45,
          50,
          55,
          60,
          65
        ],
        "cooldown": [
          8,
          7,
          6,
          5,
          4
        ],
        "targeting": "Direction",
        "affects": "Ememies",
        "spellshieldable": "true",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "projectile": "TRUE",
        "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nMistral Bolt will fire from wherever Vex is at the end of the cast time, towards the originally targeted location or 1200 units in the originally targeted direction if cast beyond that.",
        "blurb": "Active:  Vex launches a wave of mist in the target direction that deals magic damage to enemies hit. After a short delay, the wave accelerates but also narrows.",
        "speed": "600 / 3200",
        "width": "360 / 160",
        "castTime": "0.15",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Personal Space",
        "icon": "https://cdn.communitydragon.org/latest/champion/Vex/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Vex emits a shockwave around her before the cast time, dealing magic damage to nearby enemies and granting herself a shield for 2.5 seconds.</p>",
            "leveling": [
              {
                "attribute": "Shield Strength",
                "modifiers": [
                  {
                    "values": [
                      50,
                      75,
                      100,
                      125,
                      150
                    ]
                  },
                  {
                    "values": [
                      75
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Magic Damage",
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
                      30
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
            "description": "Vex can move during Personal Space's cast time."
          }
        ],
        "cost": [
          75
        ],
        "cooldown": [
          16,
          15,
          14,
          13,
          12
        ],
        "targeting": "Auto",
        "affects": "Self, Enemies",
        "spellshieldable": "true",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "notes": "Personal Space can be buffered 0.1 seconds before it comes off cooldown or becomes available otherwise.",
        "blurb": "Active:  Vex emits a shockwave, dealing magic damage to nearby enemies and  shielding herself for a short time.",
        "castTime": "0.25",
        "effectRadius": "475 / 550",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Looming Darkness",
        "icon": "https://cdn.communitydragon.org/latest/champion/Vex/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Vex tosses her Shadow to explode at the target location, dealing magic damage to enemies hit and slowing them for 2 seconds. The explosion's radius increases based on cast distance.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      50,
                      70,
                      90,
                      110,
                      130
                    ]
                  },
                  {
                    "values": [
                      40,
                      45,
                      50,
                      55,
                      60
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Slow",
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
                  }
                ]
              }
            ]
          },
          {
            "description": "Killing an enemy with Looming Darkness refunds 10% of Doom's cooldown, increased to 25% for champion kills."
          },
          {
            "description": "Looming Darkness will cast at max range if cast beyond that."
          }
        ],
        "cost": [
          70,
          80,
          90,
          100,
          110
        ],
        "cooldown": [
          13
        ],
        "targeting": "Location",
        "affects": "Enemies",
        "spellshieldable": "true",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "projectile": "TRUE",
        "notes": "No additional details.",
        "blurb": "Active:  Vex tosses her Shadow to explode at the target location, dealing magic damage and  slowing enemies hit for a short time. The explosion widens based on cast distance.",
        "speed": "1300",
        "castTime": "0.25",
        "effectRadius": "200 : 300 (based on cast distance)",
        "targetRange": "800",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Shadow Surge",
        "icon": "https://cdn.communitydragon.org/latest/champion/Vex/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Vex sends her Shadow in the target direction that grants sight around its trajectory and deals magic damage to enemies hit.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      75,
                      125,
                      175
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
            "description": "Shadow stops upon hitting an enemy champion to mark them for 4 seconds, during which they are revealed. Shadow Surge can be recast while the target is marked."
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Vex dashes towards the marked target with displacement immunity. Upon arrival, she consumes their mark and deals magic damage.</p>",
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
                      50
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
                      225,
                      375,
                      525
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
            "description": "If the target dies within 6 seconds of being marked, Vex can cast Shadow Surge again within 12 seconds at no cost after 0.5 seconds."
          }
        ],
        "cost": [
          100
        ],
        "cooldown": [
          140,
          120,
          100
        ],
        "targeting": "Direction / Auto",
        "affects": "Self, Enemies",
        "spellshieldable": "true",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spell",
        "projectile": "TRUE",
        "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nVex's dash will track the target if they change locations.\nShe will not stop tracking the target until she reaches them, as there is no maximum tracking distance.\nShadow Surge grants sight of the area along its path for 0.4 seconds each.\nShadow Surge cannot be recast while  grounded or  rooted, or if the target is  untargetable.\nShadow Surge may also be recast if the target died to the ability.\nThe following table refers for interactions while Vex is dashing:\nAll movement spells are disabled during the first 0.25 seconds of the dash.\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nAll the other item-actives are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Hextech Rocketbelt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Teleport  Recall\n\n\nDisabled\n\n Hexflash\n\n\nInterrupted by\n\n Flash\n\n\nInterrupted by\n\nDeath",
        "blurb": "Active:  Vex sends her Shadow in the target direction that deals magic damage to enemies hit. Shadow stops upon hitting an enemy  champion, marking and  revealing them for a few seconds. Shadow Surge can be recast while the target is marked.",
        "speed": "1600 / 2200",
        "width": "260",
        "castTime": "0.25 / None",
        "effectRadius": "650 / Global",
        "maxCharges": -1
      }
    ]
  },
  "lore": "In the black heart of the Shadow Isles, a lone yordle trudges through the spectral fog, content in its murky misery. With an endless supply of teen angst and a powerful shadow in tow, Vex lives in her own self-made slice of gloom, far from the revolting cheer of the “normie” world. Though she lacks ambition, she is quick to strike down color and happiness, stopping all would-be interlopers with her magical malaise."
}
    export default champion