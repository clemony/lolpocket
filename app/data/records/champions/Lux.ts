// Updated Patch 25.15 - 08/06/2025 11:23:41 PM CDT

const champion: Champion =  {
  "id": 99,
  "key": "Lux",
  "name": "Lux",
  "title": "the Lady of Luminosity",
  "fullName": "Luxanna Crownguard",
  "resource": "Mana",
  "attackType": "Ranged",
  "stats": {
    "health": {
      "flat": 580,
      "perLevel": 99
    },
    "healthRegen": {
      "flat": 5.5,
      "perLevel": 0.55
    },
    "mana": {
      "flat": 480,
      "perLevel": 23.5
    },
    "manaRegen": {
      "flat": 7,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 21,
      "perLevel": 5.2
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 54,
      "perLevel": 3.3
    },
    "movespeed": {
      "flat": 330
    },
    "acquisitionRadius": {
      "flat": 625
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
      "flat": 0.669,
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
      "flat": -0.144
    },
    "attackRange": {
      "flat": 550
    }
  },
  "positions": [
    "Middle",
    "Support"
  ],
  "roles": [
    "Artillery",
    "Burst",
    "Mage",
    "Support"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 2,
    "mobility": 1,
    "utility": 2,
    "abilityReliance": 90,
    "difficulty": 1
  },
  "abilities": {
    "P": [
      {
        "name": "Illumination",
        "icon": "https://cdn.communitydragon.org/latest/champion/Lux/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Lux's abilities apply a mark to enemies hit for 6 seconds, refreshing on subsequent hits. Lux's basic attacks and Final Spark consume the mark to deal 30 - 200 (based on level) (+ 30% AP) bonus magic damage.</p>"
          }
        ],
        "targeting": "Passive",
        "affects": "Enemies",
        "spellshieldable": "special",
        "damageType": "Magic damage",
        "spellEffects": "Proc",
        "notes": "Starting an attack windup against a target with a mark that is about to expire refreshes its duration to 0.25 seconds. Casting  Final Spark refreshes the marks of all marked enemies to 1.25 seconds if they are within 5000 units of the ability's casting position and have a mark with a remaining duration of less than 1 second.\n Spell shield prevents  Final Spark from consuming the mark.\nThe on-hit damage from Illumination via basic attack cannot be blocked by spell shield.\nIllumination's trigger from a basic attack can be  blocked (bonus damage is negated and the mark will still be consumed).\nPENDING FOR TEST:: Parry interactions ( dodge,  blind).",
        "blurb": "Innate:  Lux's abilities apply a mark to enemies hit for a few seconds. Her basic attacks and  Final Spark consume the mark to deal bonus magic damage."
      }
    ],
    "Q": [
      {
        "name": "Light Binding",
        "icon": "https://cdn.communitydragon.org/latest/champion/Lux/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Lux shoots a sphere of light in the target direction that deals magic damage to the first two enemies hit and roots them for 2 seconds.</p>",
            "leveling": [
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
                      65
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
          50
        ],
        "cooldown": [
          11,
          10.5,
          10,
          9.5,
          9
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "Area of effect",
        "projectile": "TRUE",
        "notes": "Targets immune to the  root still count towards Light Binding's two-target limit.\nThis ability will cast from wherever the caster is at the end of the cast time.\nLight Binding spawns an additional missile at the same location and vector as the main missile. This additional \"Dummy\" missile has the same visual effects as the main missile and gets destroyed when it hits a single enemy, thereby making the surviving VFX of the single missile weaker in intensity.\nPENDING FOR TEST: This hacky solution also causes Lux Q to count as two skillshots for things such as \"skillshots dodged\" Eternals.",
        "blurb": "Active:  Lux shoots a sphere of light in the target direction that deals magic damage to the first two enemies hit and  roots them for a short time.",
        "speed": "1200",
        "width": "140",
        "castTime": "0.25",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Prismatic Barrier",
        "icon": "https://cdn.communitydragon.org/latest/champion/Lux/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Lux throws her wand in the target direction that homes back to her after reaching maximum range. Allied champions hit by the wand gain a shield for 2.5 seconds, which can stack up to 2 times, stacking with the previous shield and refreshing its duration.</p>",
            "leveling": [
              {
                "attribute": "Shield Strength",
                "modifiers": [
                  {
                    "values": [
                      40,
                      55,
                      70,
                      85,
                      100
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
                "attribute": "Maximum Shield",
                "modifiers": [
                  {
                    "values": [
                      80,
                      110,
                      140,
                      170,
                      200
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
            "description": "Lux gains the shield upon throwing and upon retrieving the wand."
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
          14,
          13,
          12,
          11,
          10
        ],
        "targeting": "Direction",
        "affects": "Allies",
        "resource": "Mana",
        "projectile": "SPECIAL",
        "notes": "Each pass of the wand grants a shield to each target once.\nPrismatic Barrier may only stack up to 2 times. Subsequent instances of passing through the wand have no effect on the shield's strength nor duration.\nThe shield will also be granted to allies near the wand's return location.\nBoth passes of Prismatic Barrier cannot hit units whose  center is beyond the missile range or behind its origin, even if their  hitbox radius overlaps.\nAt the return location, this behaviour is overridden by an additional center check with the same diameter as the missile width.\nIf Lux  dies before her wand returns it will fizzle upon reaching maximum range.\nThere is an additional circle check at the end of the missile's length that allows it to hit the edge of an ally's radius. This is intended.\nLux's wand decelerates on the way out and accelerates on the way back.\nThis ability will cast from wherever the caster is at the start of the cast time.\nPrismatic Barrier is destroyed by  Wind Wall and  Blade Whirl but not  Unbreakable.",
        "blurb": "Active:  Lux throws her wand in the target direction that homes back to her after reaching maximum range.",
        "speed": "2400",
        "width": "220",
        "castTime": "0.25",
        "effectRadius": "110",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Lucent Singularity",
        "icon": "https://cdn.communitydragon.org/latest/champion/Lux/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Lux sends a lucent singularity to the target location, remaining there for 5 seconds to grant sight of the area and slow nearby enemies.</p>",
            "leveling": [
              {
                "attribute": "Slow",
                "modifiers": [
                  {
                    "values": [
                      25,
                      30,
                      35,
                      40,
                      45
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
            "description": "Lucent Singularity can be recast at any time while it is in flight or within the duration, and does so automatically after the duration."
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Lux detonates the singularity, dealing magic damage to enemies within. If Lucent Singularity was recast while in flight, it will detonate upon arrival.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      65,
                      115,
                      165,
                      215,
                      265
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
            "description": "The slow lingers for 1 second after leaving the area. Enemies hit by Lucent Singularity's detonation are also slowed by the same amount for 1 second."
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
          10,
          9.5,
          9,
          8.5,
          8
        ],
        "targeting": "Location / Auto",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "Area of effect",
        "projectile": "TRUE",
        "notes": "The initial cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nThe manual recast does not.\nLucent Singularity grants  sight while also in flight.\nThe ability will not preserve the caster's facing direction when using  Flash and similar effects.",
        "blurb": "Active:  Lux sends a lucent singularity to the target location that lasts for a few seconds and slows enemies within.",
        "speed": "1200",
        "castTime": "0.25",
        "effectRadius": "310 / 650",
        "targetRange": "1100",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Final Spark",
        "icon": "https://cdn.communitydragon.org/latest/champion/Lux/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Lux fires a massive light beam in a line in the target direction that deals magic damage to enemies hit and reveals them for 1.5 seconds, as well as grants sight of the surrounding area.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      300,
                      400,
                      500
                    ]
                  },
                  {
                    "values": [
                      120
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
          60,
          50,
          40
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "Area of effect",
        "projectile": "FALSE",
        "notes": "Final Spark grants sight of its surroundings during the cast time and for 0.5 seconds afterwards.\nThis ability will cast from wherever the caster is at the start of the cast time.\nThe ability will not preserve the caster's facing direction when using  Flash and similar effects.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Lucent Singularity can only be recast if it is present.  Light Binding and  Prismatic Barrier are disabled.\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
        "width": "200",
        "castTime": "1",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Luxanna Crownguard hails from Demacia, an insular realm where magical abilities are viewed with fear and suspicion. Able to bend light to her will, she grew up dreading discovery and exile, and was forced to keep her power secret, in order to preserve her family's noble status. Nonetheless, Lux's optimism and resilience have led her to embrace her unique talents, and she now covertly wields them in service of her homeland."
}
    export default champion