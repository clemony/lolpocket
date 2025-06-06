// Updated Patch 25.11 - 06/06/2025 12:19:16 PM CDT

const champion: Champion =  {
  "id": 161,
  "key": "Velkoz",
  "name": "Vel'Koz",
  "title": "the Eye of the Void",
  "resource": "Mana",
  "attackType": "Ranged",
  "stats": {
    "health": {
      "flat": 590,
      "perLevel": 102
    },
    "healthRegen": {
      "flat": 5.5,
      "perLevel": 0.55
    },
    "mana": {
      "flat": 469,
      "perLevel": 21
    },
    "manaRegen": {
      "flat": 8,
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
      "perLevel": 3.142
    },
    "movespeed": {
      "flat": 340
    },
    "acquisitionRadius": {
      "flat": 575
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
      "flat": 0.643,
      "perLevel": 1.59
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
    "abilityReliance": 100,
    "difficulty": 2
  },
  "abilities": {
    "P": [
      {
        "name": "Organic Deconstruction",
        "icon": "https://cdn.communitydragon.org/latest/champion/Velkoz/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Vel'Koz's abilities apply a stack of Deconstruction to enemies hit for 7 seconds, refreshing on basic attacks and subsequent applications and stacking up to 3 times.</p>"
          },
          {
            "description": "The third stack consumes them all to deal 35 - 180 (based on level) (+ 60% AP) bonus true damage."
          }
        ],
        "targeting": "Passive",
        "affects": "Enemies / Self",
        "spellshieldable": "True",
        "damageType": "True damage",
        "spellEffects": "Proc",
        "notes": "No additional notes.",
        "blurb": "Innate:  Vel'Koz's abilities apply a stack of Deconstruction to enemies hit for a few seconds."
      }
    ],
    "Q": [
      {
        "name": "Plasma Fission",
        "icon": "https://cdn.communitydragon.org/latest/champion/Velkoz/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Vel'Koz fires a plasma bolt in the target direction that deals magic damage to the first enemy hit and slows them by 70% decaying over a duration.</p>\nPlasma Fission can be recast after 0.25 seconds while the bolt is in flight, and does so automatically upon hitting an enemy or reaching maximum range.",
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
                      90
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Slow Duration",
                "modifiers": [
                  {
                    "values": [
                      1,
                      1.4,
                      1.8,
                      2.2,
                      2.6
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
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Vel'Koz splits the bolt in two over 0.25 seconds, each part firing perpendicularly in opposite directions and applying the same effects to enemies hit.</p>"
          },
          {
            "description": "Whenever Plasma Fission kills an enemy, Vel'Koz restores mana.",
            "leveling": [
              {
                "attribute": "Mana Restored per Kill",
                "modifiers": [
                  {
                    "values": [
                      20,
                      22.5,
                      25,
                      27.5,
                      30
                    ]
                  }
                ]
              },
              {
                "attribute": "Maximum Mana Restored",
                "modifiers": [
                  {
                    "values": [
                      60,
                      67.5,
                      75,
                      82.5,
                      90
                    ]
                  }
                ]
              }
            ]
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
          7
        ],
        "targeting": "Direction / Auto",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "Area of Effect",
        "projectile": "TRUE",
        "notes": "The initial cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nDetonating the ability manually does not.\nPlasma Fission's damage applies after  Organic Deconstruction's.\nAs such the  mana restoration may be lost if the latter kills the target due to its consumption via Plasma Fission.(note)\nAn enemy cannot be hit by multiple bolts even when having blocked one with a  spell shield.\nThe split occurs at a location 55 units in front of the primary bolt's final location.\nPlasma Fission can reach a maximum 1595 units diagonally (ignoring the split missile's width and enemy hitbox radius), reaching this distance after a total of about ~1.65 seconds.\nThis ability will cast from wherever the caster is at the end of the cast time.",
        "blurb": "Active:  Vel'Koz fires a plasma bolt that deals magic damage to the first enemy hit,  slowing them for a short time.\nPlasma Fission can be recast while the bolt is in flight, and does so automatically upon hitting an enemy or reaching max range.",
        "speed": "1300 / 2100",
        "width": "100 / 90",
        "castTime": "0.25",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Void Rift",
        "icon": "https://cdn.communitydragon.org/latest/champion/Velkoz/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Vel'Koz cracks a rift in the target direction that opens after a 0.25-second delay, cascading through the area over 0.65 seconds to deal magic damage to enemies within.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      30,
                      50,
                      70,
                      90,
                      110
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
            "description": "After 0.75 seconds, the rift violently collapses, dealing magic damage to enemies within and granting sight of the surrounding area for 0.25 seconds.",
            "leveling": [
              {
                "attribute": "Magic Damage",
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
                      25
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
                      75,
                      125,
                      175,
                      225,
                      275
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
          },
          {
            "description": "Vel'Koz periodically stocks a Void Rift charge, up to a maximum of 2."
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
          1.5
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "special",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "projectile": "SPECIAL",
        "notes": "Unbreakable and  Wind Wall will block the ripple and prevent the rift from forming further, but they will not destroy the section that was created already.\n Spell shield only blocks one instance of damage.",
        "blurb": "Active:  Vel'Koz cracks a rift in the target direction that opens after a brief delay, cascading through the area to deal magic damage to enemies within.",
        "rechargeRate": [
          19,
          18,
          17,
          16,
          15
        ],
        "speed": "1700",
        "width": "175 / 175",
        "castTime": "none",
        "maxCharges": 2
      }
    ],
    "E": [
      {
        "name": "Tectonic Disruption",
        "icon": "https://cdn.communitydragon.org/latest/champion/Velkoz/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Vel'Koz hurls a disruptive anomaly that lands to the target location after 0.25 - 0.55 (based on cast distance) seconds, dealing magic damage to enemies hit and knocking them up and stunning them for 0.75 seconds, as well as granting sight of the area briefly.</p>",
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
            "description": "If Tectonic Disruption is cast in close proximity of Vel'Koz, the anomaly will also slightly knock back enemies hit in the direction of the cast."
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
          14,
          13.5,
          13,
          12.5,
          12
        ],
        "targeting": "Location",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "projectile": "SPECIAL",
        "notes": "The required proximity for the  knock back is relative to Vel'Koz's position when casting and not his current one.\nWhile the effect is fully prevented by blocking the missile (e.g. with  Unbreakable and  Wind Wall), the missile may not be destroyed visually.(bug)\nThe area of effect indicator appears at the end of the cast time.\nIt will persist even if the cast cancels (e.g. Vel'Koz dies before cast time completes) despite the projectile not firing.\n Displacement immunity will also resist the application of the  stun.\nThis ability will cast from wherever the caster is at the start of the cast time.",
        "blurb": "Active:  Vel'Koz hurls a disruptive anomaly at the target location that deals magic damage to enemies hit, briefly  knocks them up and  stuns them.",
        "castTime": "0.25",
        "effectRadius": "225",
        "targetRange": "800",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Life Form Disintegration Ray",
        "icon": "https://cdn.communitydragon.org/latest/champion/Velkoz/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive - Researched:</span> Applying 3 Deconstruction stacks to an enemy champion marks them as Researched for 7 seconds, refreshing on basic attacks and ability hits against them.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> After a 0.2-second delay, Vel'Koz channels for up to 2.6 seconds to project an energy beam, during which he can steer the beam in the target direction. Life Form Disintegration Ray can be recast after 1 second during the channel, and does so automatically after the duration.</p>"
          },
          {
            "description": "The beam deals magic damage to enemies hit every 0.2 seconds, and slows them by 20%, lingering for 1 second. Deconstruction is applied every 0.7 seconds to enemies hit. Researched enemies take true damage instead.",
            "leveling": [
              {
                "attribute": "Damage Per Tick",
                "modifiers": [
                  {
                    "values": [
                      34.62,
                      48.08,
                      61.54
                    ]
                  },
                  {
                    "values": [
                      9.62
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Maximum Damage",
                "modifiers": [
                  {
                    "values": [
                      450,
                      625,
                      800
                    ]
                  },
                  {
                    "values": [
                      125
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
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Vel'Koz ends Life Form Disintegration Ray.</p>"
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
        "targeting": "Direction",
        "affects": "Enemies",
        "resource": "Mana",
        "damageType": "Mixed damage",
        "spellEffects": "aoedot",
        "projectile": "FALSE",
        "notes": "Life Form Disintegration Ray's direction updates gradually (moving the cursor from one side of Vel'Koz to the other will not make him rotate instantly).\nVel'Koz will  reveal himself if the ray is near an enemy champion.\nThe beam hits in a rectangular shape, intersecting with the edge of an enemy  gameplay radius.\nBecause of this, the effect will hit enemies whose center location is to the sides and/or slightly behind Vel'Koz, as long as their radius intersects with the area.\nThe following table refers for interactions while Vel'Koz is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Hexflash\n\n\nInterrupted by\n\n Teleport  Recall\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
        "width": "175",
        "castTime": "none",
        "maxCharges": -1
      }
    ]
  },
  "lore": "It is unclear if Vel'Koz was the first Void-spawn to emerge on Runeterra, but there has certainly never been another to match his level of cruel, calculating sentience. While his kin devour or defile everything around them, he seeks instead to scrutinize and study the physical realm—and the strange, warlike beings that dwell there—for any weakness the Void might exploit. But Vel'Koz is far from a passive observer, striking back at threats with deadly plasma, or by disrupting the very fabric of the world itself."
}
    export default champion