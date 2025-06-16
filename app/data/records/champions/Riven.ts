// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion =  {
  "id": 92,
  "key": "Riven",
  "name": "Riven",
  "title": "the Exile",
  "fullName": "Konte Riven",
  "resource": "None",
  "attackType": "Melee",
  "stats": {
    "health": {
      "flat": 630,
      "perLevel": 100
    },
    "healthRegen": {
      "flat": 8.5,
      "perLevel": 0.5
    },
    "armor": {
      "flat": 33,
      "perLevel": 4.4
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 64,
      "perLevel": 3
    },
    "movespeed": {
      "flat": 340
    },
    "acquisitionRadius": {
      "flat": 600
    },
    "selectionRadius": {
      "flat": 130
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
      "perLevel": 3.5
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
      "flat": -0.133
    },
    "attackRange": {
      "flat": 125
    }
  },
  "positions": [
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
    "mobility": 3,
    "utility": 1,
    "abilityReliance": 75,
    "difficulty": 2
  },
  "abilities": {
    "P": [
      {
        "name": "Runic Blade",
        "icon": "https://cdn.communitydragon.org/latest/champion/Riven/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Riven's ability casts generate a stack of Charge for 6 seconds, refreshing on subsequent casts and stacking up to 3 times. Riven's basic attacks are empowered to each consume a stack to deal bonus physical damage equal to 30% - 60% (based on level) AD, reduced to[ 50% ][ 15% - 30% (based on level) AD ]against structures.</p>"
          },
          {
            "description": "The bonus damage is affected by critical strike modifiers and applies life steal at 100% effectiveness."
          }
        ],
        "targeting": "Passive",
        "affects": "Enemies",
        "damageType": "Physical damage",
        "spellEffects": "Proc",
        "notes": "Runic Blade's duration also refreshes when Riven consumes a stack.\nThe empowered attack will not trigger against wards.\nThe number of empowered attacks available is represented by a counter under her health bar, only visible to the player.",
        "blurb": "Innate:  Riven's ability casts generate stacks of Charge, which stacks up to a cap. Riven's basic attacks consume a stack to deal bonus physical damage."
      }
    ],
    "Q": [
      {
        "name": "Broken Wings",
        "icon": "https://cdn.communitydragon.org/latest/champion/Riven/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Riven can activate Broken Wings three times before the ability goes on cooldown, with a 0.3125-second static cooldown between casts. If Riven does not recast the ability within 4 seconds of the previous cast, it goes on cooldown.</p>"
          },
          {
            "description": "Riven slashes with her sword for each of the three casts, dealing physical damage to enemies struck within an area, resetting her basic attack timer, and ordering her to basic attack the target of Broken Wings if there are any.",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      45,
                      75,
                      105,
                      135,
                      165
                    ]
                  },
                  {
                    "values": [
                      65,
                      70,
                      75,
                      80,
                      85
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  }
                ]
              },
              {
                "attribute": "Total Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      135,
                      225,
                      315,
                      405,
                      495
                    ]
                  },
                  {
                    "values": [
                      195,
                      210,
                      225,
                      240,
                      255
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
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">First Cast:</span> Riven dashes 225 units in the direction she is currently facing, or up to 225 units towards the target enemy, striking enemies in the target area 100 units away. This cast cannot cross terrain.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Second Cast:</span> Riven mimics the first cast's effects.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Third Cast:</span> Riven mimics the first cast's effects in a larger area while also knocking back enemies hit 75 units over 0.5 seconds. This cast can cross terrain.</p>"
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          13
        ],
        "targeting": "Auto / Unit",
        "affects": "Enemies",
        "spellshieldable": "true",
        "damageType": "Physical damage",
        "spellEffects": "spellaoe",
        "notes": "Each cast counts as a single ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nThe basic attack reset is not considered one for  Hail of Blades.\nMoving after using Broken Wings allows Riven to do other actions faster.\nThe Third Cast prevents Riven from using basic attacks and abilities for longer than the other 2 casts.\nThe Third Cast may have an extended dash range when crossing terrain.",
        "blurb": "Active:  Riven can cast this ability up to three times in quick succession, dealing physical damage to enemies hit.\nFirst Cast: Riven  dashes forward and slashes her sword in a circle.\nSecond Cast: Riven mimics the first cast.\nThird Cast: Riven mimics the first cast's dash, but now slams her sword in a larger circle, briefly  knocking back enemies hit as well.",
        "castTime": "none",
        "effectRadius": "150 / 250 / 200 / 300",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Ki Burst",
        "icon": "https://cdn.communitydragon.org/latest/champion/Riven/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Riven emits a flash of runic energy from the start of the cast time, dealing physical damage to nearby enemies and stunning them for 0.75 seconds.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      65,
                      95,
                      125,
                      155,
                      185
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
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          11,
          10,
          9,
          8,
          7
        ],
        "targeting": "Auto",
        "affects": "Enemies",
        "spellshieldable": "True",
        "damageType": "Physical damage",
        "spellEffects": "spellaoe",
        "notes": "Riven is briefly unable to basic attack after the cast time.\n Broken Wings may be cast while basic attacking briefly after casting Ki Burst.(bug)",
        "blurb": "Active: Riven emits a flash of runic energy, dealing physical damage and briefly  stunning nearby enemies.",
        "castTime": "0.25",
        "effectRadius": "300 / 360",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Valor",
        "icon": "https://cdn.communitydragon.org/latest/champion/Riven/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Riven dashes in the target direction, though not through terrain, while granting herself a shield for 1.5 seconds.</p>",
            "leveling": [
              {
                "attribute": "Shield Strength",
                "modifiers": [
                  {
                    "values": [
                      70,
                      95,
                      120,
                      145,
                      170
                    ]
                  },
                  {
                    "values": [
                      110
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
            "description": "Riven can cast any of her abilities during the dash. Valor will cast at max range if cast beyond that."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          10,
          9,
          8,
          7,
          6
        ],
        "targeting": "Direction",
        "affects": "Self",
        "notes": "Broken Wings may be cast during  Ki Burst or  Blade of the Exile cast times if they're used at the end or briefly after the dash.(bug)",
        "blurb": "Active:  Riven  dashes in the target direction and gains a brief  shield.",
        "castTime": "none",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Blade of the Exile",
        "icon": "https://cdn.communitydragon.org/latest/champion/Riven/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Riven empowers her blade for 15 seconds, gaining 25% AD bonus attack damage, 75 bonus attack range, and increased range on Broken Wings and Ki Burst. After 0.5 seconds, she can cast Wind Slash within the duration.</p>"
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          120,
          90,
          60
        ],
        "targeting": "Auto",
        "affects": "Self",
        "notes": "All bonuses are gained after 0.5 seconds of the ability starting its cast.\nThe bonus attack damage amount is factored upon cast, and does not change.\nIf Riven has a basic attack buffered before the end of Blade of the Exile's cast time, the buffered basic attack will start 0.33 seconds after the end of the cast time.\nThe delay will not apply to basic attack commands input after Blade of the Exile's cast time.",
        "blurb": "Active:  Riven empowers her blade for some time, gaining  bonus attack damage and increased  range on her basic attacks,  Broken Wings and  Ki Burst.",
        "castTime": "0.25",
        "maxCharges": -1
      },
      {
        "name": "Wind Slash",
        "icon": "https://cdn.communitydragon.org/latest/champion/Riven/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Riven unleashes a wave of energy in a cone in the target direction that deals physical damage to enemies hit, increased by 0% - 200% (based on target's missing health).</p>",
            "leveling": [
              {
                "attribute": "Minimum Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      100,
                      150,
                      200
                    ]
                  },
                  {
                    "values": [
                      60
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  }
                ]
              },
              {
                "attribute": "Maximum Physical Damage",
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
                      180
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
          0
        ],
        "cooldown": [
          120,
          90,
          60
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "True",
        "damageType": "Physical damage",
        "spellEffects": "aoe",
        "projectile": "TRUE",
        "notes": "Wind Slash counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nThis ability will cast from wherever the caster is at the end of the cast time.\nWind Slash's wave is made up of three individual missiles spread in a cone.\nEach enemy can be damaged by only one missile.\nIf Wind Slash hits an enemy while Riven is not visible, it will briefly grant  sight of the area around her to enemies.\nIf Riven has a basic attack buffered before the end of Wind Slash's cast time, the buffered basic attack will start 0.528 seconds after the end of the cast time.\nThe delay is not applied if a basic attack command is input after the cast time.",
        "blurb": "Active:  Riven unleashes a wave of energy in a cone in the target direction that deals physical damage to enemies hit based on their missing health.",
        "speed": "1600",
        "width": "200",
        "angle": "18°",
        "castTime": "0.25",
        "targetRange": "1100",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Once a swordmaster in the warhosts of Noxus, Riven is an expatriate in a land she previously tried to conquer. She rose through the ranks on the strength of her conviction and brutal efficiency, and was rewarded with a legendary runic blade and a warband of her own. However, on the Ionian front, Riven's faith in her homeland was tested and ultimately broken. Having severed all ties to the empire, she now seeks to find her place in a shattered world, even as rumors abound that Noxus itself has been reforged..."
}
    export default champion