// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion =  {
  "id": 18,
  "key": "Tristana",
  "name": "Tristana",
  "title": "the Yordle Gunner",
  "resource": "Mana",
  "attackType": "Ranged",
  "stats": {
    "health": {
      "flat": 640,
      "perLevel": 102
    },
    "healthRegen": {
      "flat": 4,
      "perLevel": 0.5
    },
    "mana": {
      "flat": 300,
      "perLevel": 32
    },
    "manaRegen": {
      "flat": 7.2,
      "perLevel": 0.45
    },
    "armor": {
      "flat": 30,
      "perLevel": 4
    },
    "magicResistance": {
      "flat": 28,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 60,
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
      "flat": 55
    },
    "criticalStrikeDamage": {
      "flat": 175
    },
    "criticalStrikeDamageModifier": {
      "flat": 1
    },
    "attackSpeed": {
      "flat": 0.656,
      "perLevel": 1.5
    },
    "attackSpeedRatio": {
      "flat": 0.694
    },
    "attackCastTime": {
      "flat": 0.3
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackDelayOffset": {
      "flat": -0.152
    },
    "attackRange": {
      "flat": 550
    }
  },
  "positions": [
    "Bottom",
    "Middle"
  ],
  "roles": [
    "Assassin",
    "Marksman"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 2,
    "mobility": 2,
    "utility": 1,
    "abilityReliance": 20,
    "difficulty": 1
  },
  "abilities": {
    "P": [
      {
        "name": "Draw a Bead",
        "icon": "https://cdn.communitydragon.org/latest/champion/Tristana/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Tristana's basic attacks, Explosive Charge and Buster Shot gain 0 - 150 (based on level) bonus range, for a total of 550 - 700 (based on level).</p>"
          }
        ],
        "targeting": "Passive",
        "affects": "Self",
        "notes": "No additional details.",
        "blurb": "Innate: Based on level,  Tristana gains  bonus range on her basic attacks,  Explosive Charge and  Buster Shot."
      }
    ],
    "Q": [
      {
        "name": "Rapid Fire",
        "icon": "https://cdn.communitydragon.org/latest/champion/Tristana/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Tristana empowers her cannon, gaining bonus attack speed for 7 seconds.</p>",
            "leveling": [
              {
                "attribute": "Bonus Attack Speed",
                "modifiers": [
                  {
                    "values": [
                      60,
                      75,
                      90,
                      105,
                      120
                    ],
                    "units": [
                      "%"
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "cost": [
          30,
          35,
          40,
          45,
          50
        ],
        "cooldown": [
          20,
          19,
          18,
          17,
          16
        ],
        "targeting": "Auto",
        "affects": "Self",
        "resource": "Mana",
        "notes": "Rapid Fire is a non-refreshing buff that will not update on rank-up.",
        "blurb": "Active:  Tristana gains tremendous  bonus attack speed for a few seconds.",
        "castTime": "none",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Rocket Jump",
        "icon": "https://cdn.communitydragon.org/latest/champion/Tristana/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Tristana jumps to the target location. Upon landing, she deals magic damage to nearby enemies and slows them by 40% for 2 seconds.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      70,
                      105,
                      140,
                      175,
                      210
                    ]
                  },
                  {
                    "values": [
                      100
                    ],
                    "units": [
                      "% bonus AD"
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
            "description": "Scoring an enemy champion takedown or detonating Explosive Charge at maximum stacks on a champion will reset Rocket Jump's cooldown."
          },
          {
            "description": "Tristana can cast any of her abilities during the dash."
          }
        ],
        "cost": [
          30,
          35,
          40,
          45,
          50
        ],
        "cooldown": [
          22,
          20,
          18,
          16,
          14
        ],
        "targeting": "Location",
        "affects": "Enemies / Self",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "notes": "Tristana can still use her abilities, summoner spells, and item actives during Rocket Jump.\nRocket Jump's dash speed depends on the distance of the jump. Close-ranged jumps are much shorter while long-ranged jumps leave Tristana in the air significantly longer.\nIf Tristana has less than 850 movement speed, a full-range Rocket Jump (including its cast time) will make her arrive quicker at its destination than walking at this speed could.\nKilling  clones or detonating  Explosive Charge on them also resets Rocket Jump's cooldown.\nThe former may be unintended.",
        "blurb": "Active:  Tristana jumps to the target location. Upon landing, she deals magic damage and  slows nearby enemies for a short time.",
        "speed": "1100",
        "castTime": "0.25",
        "effectRadius": "350",
        "targetRange": "900",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Explosive Charge",
        "icon": "https://cdn.communitydragon.org/latest/champion/Tristana/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Tristana's basic attacks are empowered to trigger an explosion when they kill the target, dealing magic damage to nearby enemies.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      45,
                      60,
                      75,
                      90,
                      105
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
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Tristana tosses an explosive charge at the target enemy that attaches to them for 4 seconds. The charge then detonates, dealing physical damage to nearby enemies. Explosive Charge can target and damage turrets, and explodes in a larger radius on a turret.</p>",
            "leveling": [
              {
                "attribute": "Minimum Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      60,
                      70,
                      80,
                      90,
                      100
                    ]
                  },
                  {
                    "values": [
                      100,
                      110,
                      120,
                      130,
                      140
                    ],
                    "units": [
                      "% bonus AD"
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
            "description": "Tristana's basic attacks on-hit and abilities against the target increase Explosive Charge's damage by 25%, stacking up to 4 times for a maximum 100% increase, upon which the charge also detonates instantly. The charge's total damage is additionally increased by 0% - 75% (based on critical strike chance) (+ 0% - 40% (based on critical strike chance).",
            "leveling": [
              {
                "attribute": "Bonus Damage Per Stack",
                "modifiers": [
                  {
                    "values": [
                      15,
                      17.5,
                      20,
                      22.5,
                      25
                    ]
                  },
                  {
                    "values": [
                      25,
                      27.5,
                      30,
                      32.5,
                      35
                    ],
                    "units": [
                      "% bonus AD"
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
                "attribute": "Full Stack Bonus Damage",
                "modifiers": [
                  {
                    "values": [
                      60,
                      70,
                      80,
                      90,
                      100
                    ]
                  },
                  {
                    "values": [
                      100,
                      110,
                      120,
                      130,
                      140
                    ],
                    "units": [
                      "% bonus AD"
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
                "attribute": "Full Stack Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      120,
                      140,
                      160,
                      180,
                      200
                    ]
                  },
                  {
                    "values": [
                      200,
                      220,
                      240,
                      260,
                      280
                    ],
                    "units": [
                      "% bonus AD"
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
            "description": "If Buster Shot is used to apply the last stack, the detonation will instead be delayed until the end of the knock back or the 4 seconds expire."
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
          16,
          15.5,
          15,
          14.5,
          14
        ],
        "targeting": "Unit",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "spellaoe",
        "projectile": "TRUE",
        "notes": "Explosive Charge's cast time is always 100% of the caster's attack windup time.\nAt base attack speed, Tristana's attack windup is 0.225625 seconds.\nAn easy formula to calculate the cast time is [ 0.14801 seconds divided by total attack speed ].\nReducing Tristana's attack speed via  attack speed reductions also increases Explosive Charge's cast time by the same fraction.\nIt is calculated from Tristana's total attack speed after cap (2.5) and floor (0.2), making the maximum possible cast time 0.759 seconds.\nTristana will be automatically ordered to basic attack the target after the cast time.\nExplosive Charge's initial application deals 0 physical damage, triggering  turret aggro.\nIt also triggers a stack of effects such as  Electrocute.\nAll explosions by Explosive Charge's passive count as the same cast instance. Every cast of the active is a separate cast instance:\nHitting a champion with the passive by killing a nearby unit, casting the active on them (see note above) and landing a basic attack against them triggers  Electrocute.\nHitting a champion with the passive by killing a nearby unit, casting the active on them and hitting them again with the Passive by killing another nearby unit does not trigger  Electrocute.\n Dodge,  block and  blind all prevent Explosive Charge's stack application via basic attacks.\nExplosive Charge's detonation will deal damage to the primary target even if they have become  untargetable.\nExplosive Charge's stacks from basic attacks are applied as an on-hit effect and will therefore interact with  Guinsoo's Rageblade's Phantom Hit and  Runaan's Hurricane's bolts.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
        "blurb": "Passive: Enemies explode when killed by  Tristana's basic attacks, dealing magic damage to nearby enemies.",
        "speed": "2400",
        "castTime": "100% of Tristana's windup time (0.23 at base attack speed)",
        "effectRadius": "300 / 300 / 600",
        "targetRange": "550 : 700 (based on level)",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Buster Shot",
        "icon": "https://cdn.communitydragon.org/latest/champion/Tristana/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Tristana fires a massive cannonball at the target enemy that deals magic damage. They and surrounding enemies are also knocked back and stunned for a duration, during which all targets are revealed.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      225,
                      275,
                      325
                    ]
                  },
                  {
                    "values": [
                      70
                    ],
                    "units": [
                      "% bonus AD"
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
                "attribute": "Knock Back Distance",
                "modifiers": [
                  {
                    "values": [
                      600,
                      800,
                      1000
                    ]
                  }
                ]
              },
              {
                "attribute": "Stun Duration",
                "modifiers": [
                  {
                    "values": [
                      0.4,
                      0.55,
                      0.7
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
          100
        ],
        "cooldown": [
          100
        ],
        "targeting": "Unit",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "special",
        "projectile": "TRUE",
        "notes": "Applies  spell damage to the primary target and deals 0  default damage to secondary targets.\nThe 0 damage to secondary targets triggers  turret aggro, but does not stack  Explosive Charge.\nTristana will attempt to basic attack the target afterwards.\nBuster Shot's  displacement direction is based on Tristana's location at the end of the cast time.\nThe primary target is pushed in a straight line away from that location, but the knockback distance and speed may be impeded by terrain.\nSecondary targets are displaced parallel to the primary target's displacement.\nThe  debuff is removed early when the forced movement stops.\n Displacement immunity will also resist the application of the  stun.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
        "blurb": "Active:  Tristana fires a massive cannonball at the target enemy that deals magic damage. They and surrounding enemies are also briefly  knocked back and  stunned, during which they are  revealed.",
        "speed": "2000 / 1500",
        "castTime": "0.25",
        "effectRadius": "200",
        "targetRange": "550 : 700 (based on level)",
        "maxCharges": -1
      }
    ]
  },
  "lore": "While many other yordles channel their energy into discovery, invention, or just plain mischief-making, Tristana was always inspired by the adventures of great warriors. She had heard much about Runeterra, its factions, and its wars, and believed her kind could become worthy of legend too. Setting foot in the world for the first time, she took up her trusty cannon Boomer, and now leaps into battle with steadfast courage and optimism."
}
    export default champion