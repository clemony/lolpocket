// Updated Patch 25.15 - 07/31/2025 07:16:02 AM CDT

const champion: Champion =  {
  "id": 36,
  "key": "DrMundo",
  "name": "Dr. Mundo",
  "title": "the Madman of Zaun",
  "fullName": "'Doctor' Mundo",
  "resource": "Health",
  "attackType": "Melee",
  "stats": {
    "health": {
      "flat": 640,
      "perLevel": 103
    },
    "healthRegen": {
      "flat": 7,
      "perLevel": 0.5
    },
    "armor": {
      "flat": 32,
      "perLevel": 3.7
    },
    "magicResistance": {
      "flat": 29,
      "perLevel": 2.3
    },
    "attackDamage": {
      "flat": 61,
      "perLevel": 2.5
    },
    "movespeed": {
      "flat": 345
    },
    "acquisitionRadius": {
      "flat": 600
    },
    "selectionRadius": {
      "flat": 135
    },
    "pathingRadius": {
      "flat": 50
    },
    "gameplayRadius": {
      "flat": 80
    },
    "criticalStrikeDamage": {
      "flat": 175
    },
    "criticalStrikeDamageModifier": {
      "flat": 1
    },
    "attackSpeed": {
      "flat": 0.67,
      "perLevel": 3.3
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
      "flat": -0.14
    },
    "attackRange": {
      "flat": 125
    }
  },
  "positions": [
    "Top"
  ],
  "roles": [
    "Fighter",
    "Juggernaut",
    "Tank"
  ],
  "attributeRatings": {
    "damage": 2,
    "toughness": 3,
    "control": 1,
    "mobility": 1,
    "utility": 1,
    "abilityReliance": 55,
    "difficulty": 1
  },
  "abilities": {
    "P": [
      {
        "name": "Goes Where He Pleases",
        "icon": "https://cdn.communitydragon.org/latest/champion/DrMundo/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Dr. Mundo regenerates an additional[ 0.4% - 2.3% (based on level) of his maximum health every 5 seconds. ][ 0.04% - 0.23% (based on level) of his maximum health every 0.5 seconds. ]</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Periodically, Dr. Mundo gains immunity to the next hostile immobilizing effect to affect him. Upon resisting one, Dr. Mundo pays a health cost equal to 4% of his current health and propels a canister that lands 525 units in the general direction of its source, remaining on the ground for 7 seconds.</p>"
          },
          {
            "description": "Dr. Mundo can move near the canister to consume it, healing himself for 4% of his maximum health and reducing the cooldown of Goes Where He Pleases by 15 seconds. Enemy champions can move near it to destroy it."
          },
          {
            "description": "Goes Where He Pleases' cooldown resets upon respawning."
          }
        ],
        "targeting": "Passive",
        "affects": "Self",
        "projectile": "FALSE",
        "notes": "Upon being triggered by a hostile  immobilizing effect, Goes Where He Pleases will also grant Dr. Mundo immunity to additional immobilizing effects from the same cast instance.\nAbilities where non-immobilizing effects and damage are nested into immobilizing ones will have them also prevented. Non-immobilizing effects and damage applied separately (the vast majority of cases) are not prevented.\n Spell shield and  Black Shield take priority over Goes Where He Pleases.\nThe canister, whether in flight and on the ground, will transition in and out of  Mordekaiser's  Realm of Death alongside Dr. Mundo.(note)\nThe canister cannot be interacted with while  untargetable.",
        "blurb": "Innate:  Dr. Mundo  regenerates an additional portion of his maximum health."
      }
    ],
    "Q": [
      {
        "name": "Infected Bonesaw",
        "icon": "https://cdn.communitydragon.org/latest/champion/DrMundo/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Dr. Mundo throws an infected bonesaw in the target direction that deals magic damage to the first enemy hit and slows them by 40% for 2 seconds.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      20,
                      22.5,
                      25,
                      27.5,
                      30
                    ],
                    "units": [
                      "% of target's current health"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Infected Bonesaw has a minimum damage threshold, and is capped against monsters.",
            "leveling": [
              {
                "attribute": "Minimum Damage",
                "modifiers": [
                  {
                    "values": [
                      80,
                      130,
                      180,
                      230,
                      280
                    ]
                  }
                ]
              },
              {
                "attribute": "Capped Monster Damage",
                "modifiers": [
                  {
                    "values": [
                      350,
                      425,
                      500,
                      575,
                      650
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "If the bonesaw hits an enemy, Dr. Mundo heals for 50% of the health cost, increased to 100% against champions or monsters."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          4
        ],
        "targeting": "Direction",
        "affects": "Self, Enemies",
        "spellshieldable": "true",
        "resource": "Health",
        "damageType": "Magic damage",
        "spellEffects": "spell",
        "projectile": "TRUE",
        "notes": "This ability will cast from wherever the caster is at the start of the cast time.\n Spell shield blocking the ability's effects on the enemy does not prevent Dr. Mundo from receiving the health cost refund.",
        "blurb": "Active:  Dr. Mundo throws an infected bonesaw in the target direction that deals magic damage and  slows the first enemy hit.",
        "speed": "2000",
        "width": "120",
        "castTime": "0.25",
        "targetRange": "1050 /  990",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Heart Zapper",
        "icon": "https://cdn.communitydragon.org/latest/champion/DrMundo/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Dr. Mundo charges up a defibrillator for up to 3 seconds, dealing magic damage every 0.25 seconds to nearby enemies and storing 80% - 95% (based on level) of post-mitigation damage he takes as grey health on his health bar, reduced to 25% after the first 0.75 seconds.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage per Tick",
                "modifiers": [
                  {
                    "values": [
                      5,
                      8.75,
                      12.5,
                      16.25,
                      20
                    ]
                  }
                ]
              },
              {
                "attribute": "Total Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      80,
                      140,
                      200,
                      260,
                      320
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Heart Zapper can be recast after 0.5 seconds within the duration, and does so automatically after the duration."
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Dr. Mundo detonates the defibrillator, dealing magic damage to nearby enemies and healing for 50% of grey health, increased to 100% if at least one enemy champion or large monster is hit.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      20,
                      35,
                      50,
                      65,
                      80
                    ]
                  },
                  {
                    "values": [
                      7
                    ],
                    "units": [
                      "% bonus health"
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
          17,
          16.5,
          16,
          15.5,
          15
        ],
        "targeting": "Auto",
        "affects": "Self, Enemies",
        "spellshieldable": "special",
        "resource": "Current health",
        "damageType": "Magic damage",
        "spellEffects": "special",
        "notes": "The charge up applies  persistent area damage and the detonation deals  area damage.\n Spell shield will only block the detonation.\nHeart Zapper will occasionally deal an additional tick of damage.(bug)\nHeart Zapper and its recast will buffer and cast at the end of  Infected Bonesaw's cast time if attempted to cast during it.\nAs with all buffering of this type, another input such as a movement command can override the buffering of the spell again.",
        "blurb": "Active:  Dr. Mundo charges up a defibrillator for a few seconds, continually dealing magic damage to nearby enemies and storing a portion of the post-mitigation damage he takes.",
        "castTime": "None / None",
        "effectRadius": "325",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Blunt Force Trauma",
        "icon": "https://cdn.communitydragon.org/latest/champion/DrMundo/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Dr. Mundo gains bonus attack damage.</p>",
            "leveling": [
              {
                "attribute": "Bonus Attack Damage",
                "modifiers": [
                  {
                    "values": [
                      2,
                      2.2,
                      2.4,
                      2.6,
                      2.8
                    ],
                    "units": [
                      "% maximum health"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Dr. Mundo empowers his next basic attack within 4 seconds to have an uncancellable windup, gain 50 bonus range, and deal bonus physical damage, increased by 0% - 40% (based on Dr. Mundo's missing health). If the target dies or is a small monster, they are sent flying away in a line, though not through terrain, causing all enemies they pass through to take 100% AD physical damage plus Blunt Force Trauma's minimum bonus damage.</p>",
            "leveling": [
              {
                "attribute": "Minimum Bonus Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      5,
                      15,
                      25,
                      35,
                      45
                    ]
                  },
                  {
                    "values": [
                      7
                    ],
                    "units": [
                      "% bonus health"
                    ]
                  }
                ]
              },
              {
                "attribute": "Maximum Bonus Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      7,
                      21,
                      35,
                      49,
                      63
                    ]
                  },
                  {
                    "values": [
                      9.8
                    ],
                    "units": [
                      "% bonus health"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Blunt Force Trauma as well as the triggering attack's damage is increased to 140% against minions and 200% against monsters."
          },
          {
            "description": "Blunt Force Trauma resets Dr. Mundo's basic attack timer."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          9,
          8.25,
          7.5,
          6.75,
          6
        ],
        "targeting": "Auto",
        "spellshieldable": "false",
        "resource": "Health",
        "damageType": "Physical damage",
        "spellEffects": "special",
        "notes": "Blunt Force Trauma's attack deals deals  basic damage but also triggers spell effects by also being tagged as  spell damage, while the target's body being shoved deals  area damage to enemies it passes through.\nThe basic attack itself is also considered a part of Blunt Force Trauma.\nBlunt Force Trauma's attack works against structures, consuming the buff and dealing its full damage.\nBlunt Force Trauma cannot knock back  wards, structures or epic  monsters it kills, nor champions that enter a  zombie state upon dying.\nTargets flung away are rendered  untargetable in the process.\nThe damage of the enemy's corpse colliding with enemies does not benefit from Blunt Force Trauma's attack  critically striking.",
        "blurb": "Passive:  Dr. Mundo gains  bonus attack damage based on his maximum health.",
        "castTime": "none",
        "effectRadius": "155",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Maximum Dosage",
        "icon": "https://cdn.communitydragon.org/latest/champion/DrMundo/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Dr. Mundo injects himself with chemicals to become enhanced for 10 seconds, gaining increased base health, bonus movement speed, and bonus health regeneration.</p>",
            "leveling": [
              {
                "attribute": "Increased Base Health",
                "modifiers": [
                  {
                    "values": [
                      15,
                      20,
                      25
                    ],
                    "units": [
                      "% missing health"
                    ]
                  }
                ]
              },
              {
                "attribute": "Bonus Movement Speed",
                "modifiers": [
                  {
                    "values": [
                      15,
                      25,
                      35
                    ],
                    "units": [
                      "%"
                    ]
                  }
                ]
              },
              {
                "attribute": "Bonus Health Regeneration",
                "modifiers": [
                  {
                    "values": [
                      10,
                      20,
                      30
                    ],
                    "units": [
                      "% maximum health"
                    ]
                  }
                ]
              },
              {
                "attribute": "Health Regenerated per 0.5 Seconds",
                "modifiers": [
                  {
                    "values": [
                      1,
                      2,
                      3
                    ],
                    "units": [
                      "% maximum health"
                    ]
                  }
                ]
              },
              {
                "attribute": "Total Health Regenerated",
                "modifiers": [
                  {
                    "values": [
                      20,
                      40,
                      60
                    ],
                    "units": [
                      "% maximum health"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "At rank 3, Maximum Dosage's increased base health and bonus health regeneration are both increased by 5% for each enemy champion within 1200 units at the time of cast."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          120
        ],
        "targeting": "Auto",
        "affects": "Self",
        "notes": "The health regeneration granted by Maximum Dosage adjusts dynamically to Dr. Mundo's maximum health.\nThe health regeneration granted by Maximum Dosage is special cased to be increased by  Axiom Arcanist.\nMaximum Dosage will end prematurely upon entering  resurrection.\nAgainst 5 champions, Rank 3 Maximum Dosage will heal 85% Maximum health regeneration & 50% Missing Bonus health",
        "blurb": "Active:  Dr. Mundo injects himself with chemicals, gaining  increased base health and  bonus movement speed, in addition to  regenerating health over the duration.",
        "castTime": "none",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Utterly mad, tragically homicidal, and horrifyingly purple, Dr. Mundo is what keeps many of Zaun's citizens indoors on particularly dark nights. Now a self-proclaimed physician, he was once a patient of Zaun's most infamous asylum. After \"curing\" the entire staff, Dr. Mundo established his practice in the empty wards that once treated him and began mimicking the highly unethical procedures he had so often experienced himself. With a full cabinet of medicines and zero medical knowledge, he now makes himself more monstrous with each injection and terrifies the hapless \"patients\" who wander near his office."
}
    export default champion