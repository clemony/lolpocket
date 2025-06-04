 export const Talon: Champion =  {
  "id": 91,
  "key": "Talon",
  "name": "Talon",
  "title": "the Blade's Shadow",
  "fullName": "Talon Du Couteau",
  "resource": "Mana",
  "attackType": "Melee",
  "stats": {
    "health": {
      "flat": 658,
      "perLevel": 109
    },
    "healthRegen": {
      "flat": 8.5,
      "perLevel": 0.75
    },
    "mana": {
      "flat": 400,
      "perLevel": 37
    },
    "manaRegen": {
      "flat": 7.6,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 30,
      "perLevel": 4.7
    },
    "magicResistance": {
      "flat": 36,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 68,
      "perLevel": 3.1
    },
    "movespeed": {
      "flat": 335
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
      "flat": 0.625,
      "perLevel": 2.9
    },
    "attackSpeedRatio": {
      "flat": 0.625
    },
    "attackCastTime": {
      "flat": 0.198
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackRange": {
      "flat": 125
    }
  },
  "positions": [
    "Jungle"
  ],
  "roles": [
    "Assassin"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 1,
    "mobility": 2,
    "utility": 1,
    "abilityReliance": 65,
    "difficulty": 2
  },
  "abilities": {
    "P": [
      {
        "name": "Blade's End",
        "icon": "https://cdn.communitydragon.org/latest/champion/Talon/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Talon's abilities apply a stack of Wound to enemy champions and large monsters hit for 6 seconds, refreshing on basic attacks and subsequent applications and stacking up to 3 times.</p>"
          },
          {
            "description": "Talon's next basic attack against an enemy with 3 Wound stacks is empowered to consume them all to cause the target to bleed, dealing[ 80 - 280 (based on level) (+ 210% bonus AD) total physical damage over 2 seconds, ][ 5 - 17.5 (based on level) (+ 13.125% bonus AD) physical damage every 0.125 seconds over 2 seconds, ]increased to 110% damage against monsters. The target cannot gain Wound stacks during this time."
          }
        ],
        "targeting": "Passive",
        "affects": "Enemies",
        "spellshieldable": "Special",
        "damageType": "Physical damage",
        "spellEffects": "default",
        "notes": "Blade End's enhanced attack will still trigger if  blocked, but not if they are  dodged or missed while Talon is  blinded.\nDuration of the stacks is not refreshed if the attack is dodged or missed.\nBoth passes of  Rake and  Shadow Assault apply a stack of Wound.\n Spell shield prevents Wound stacks from being applied.\n Spell shield prevents Blade End's enhanced attack from triggering though still consuming all Wound stacks.",
        "blurb": "Innate: Each time  Talon's abilities deal physical damage to  champions and large  monsters, they apply a stack of Wound, stacking up to a cap."
      }
    ],
    "Q": [
      {
        "name": "Noxian Diplomacy",
        "icon": "https://cdn.communitydragon.org/latest/champion/Talon/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Talon dashes toward the target enemy, stabbing the target upon arrival to deal physical damage. If cast within close range, Talon dashes to the target over the cast time instead and Noxian Diplomacy critically strikes for (150% + 40%) damage, as well as grants him 75 bonus attack range on his next basic attack within 1 second.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      65,
                      85,
                      105,
                      125,
                      145
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
              },
              {
                "attribute": "Critical Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      97.5,
                      127.5,
                      157.5,
                      187.5,
                      217.5
                    ]
                  },
                  {
                    "values": [
                      150
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
            "description": "If Noxian Diplomacy kills the target, Talon heals for 9 - 55 (based on level) and the ability's cooldown is reduced by 50%."
          },
          {
            "description": "Noxian Diplomacy resets Talon's basic attack timer. Shadow Assault can be cast during the dash."
          }
        ],
        "cost": [
          40
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
        "damageType": "Physical damage",
        "spellEffects": "spell",
        "notes": "Talon will track the target if they change locations with the ranged version of Noxian Diplomacy, landing at an offset of 100 units before reaching them.\nHe will dash to the target's previous location while still dealing damage if the target is too far away or moves beyond 800 units.\nWhen cast in close range, Noxian Diplomacy deals its damage at the completion of the cast time, rather than at the dash's completion.\nThe damage will be dealt even if Talon's dash is interrupted, so long as the cast time is completed.\nTalon will be ordered to basic attack the target at the end of the dash.\nWhile  grounded or  rooted, Noxian Diplomacy can only be cast within close range.\nTalon will still dash to the target in both cases.\nNoxian Diplomacy will also grant the heal if the target dies upon Talon's completion of the dash.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).\nThis only applies to the close dash attack.",
        "blurb": "Active:  Talon  leaps to the target enemy, dealing physical damage. If the target is within melee range, Talon instead  critically strikes the target.",
        "speed": "1400",
        "castTime": "None / Attack Windup Time",
        "targetRange": "575 /  170",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Rake",
        "icon": "https://cdn.communitydragon.org/latest/champion/Talon/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Talon throws a fan of daggers in a cone in the target direction that deals physical damage to enemies hit.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      50,
                      60,
                      70,
                      80,
                      90
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
              }
            ]
          },
          {
            "description": "At maximum range, the daggers linger for 0.7 seconds before homing back to Talon, dealing physical damage to enemies hit and slowing them for 1 second.",
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
                "attribute": "Total Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      110,
                      150,
                      190,
                      230,
                      270
                    ]
                  },
                  {
                    "values": [
                      130
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  }
                ]
              },
              {
                "attribute": "Slow",
                "modifiers": [
                  {
                    "values": [
                      40,
                      45,
                      50,
                      55,
                      60
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
            "description": "Enemies can be hit only once per pass."
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
          9,
          8.5,
          8,
          7.5,
          7
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "spellaoe",
        "projectile": "TRUE",
        "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nCasting Rake when an enemy is within 650 radius and 26° angle in front of Talon will reveal him from the fog of war like a targeted cast.(bug)\nThis is because of Rake's internal Cone targeting type, which defaults to \"targeting\" all units in the preset area and thereby trigger revealing the caster if not toggled off for the spell.\nIf Talon dies while Rake is mid-air, the projectiles will still complete their travel.\nThe blades each will fail to return to Talon if he is somehow too far from them after the delay.\nThis maximum distance is 5000 units at ranks 1-4 of Rake, or 20000 units at rank 5 of Rake.(bug)\nThe latter distance is barely achievable between fountains on Summoner's Rift.",
        "blurb": "Active:  Talon throws a fan of daggers in the target direction that deals physical damage to enemies hit.",
        "speed": "2571 / 2429 / 3000",
        "width": "150",
        "angle": "22°",
        "castTime": "0.25",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Assassin's Path",
        "icon": "https://cdn.communitydragon.org/latest/champion/Talon/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Talon dashes up to 800 units over the target area of terrain, during which he gains unobstructed vision.</p>"
          },
          {
            "description": "Talon cannot cast Assassin's Path on the same area of terrain for a set duration."
          },
          {
            "description": "Shadow Assault can be cast during the dash."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          0
        ],
        "targeting": "Direction",
        "affects": "Self",
        "notes": "Assassin's Path can interact with player-generated terrain.\nTalon will stop dashing upon entering  stasis but will continue to do so afterwards.\nTalon will reveal himself for 0.6 seconds upon casting Assassin's Path if he is visible to an enemy champion or there is a nearby enemy champion or minion within 400 units of the landing position.",
        "blurb": "Active:  Talon  vaults over the target terrain.",
        "speed": "100% movement speed",
        "castTime": "none",
        "targetRange": "725",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Shadow Assault",
        "icon": "https://cdn.communitydragon.org/latest/champion/Talon/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Talon disperses a ring of blades around him that deals physical damage to enemies hit and lingers at maximum range for up to 2.5 seconds, during which he gains invisibility and bonus movement speed.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      90,
                      135,
                      180
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
              },
              {
                "attribute": "Bonus Movement Speed",
                "modifiers": [
                  {
                    "values": [
                      40,
                      55,
                      70
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
            "description": "Shadow Assault can be recast after 1 second within the duration, and does so automatically after the duration or if Talon breaks stealth."
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Talon breaks stealth and converges the blades to him, dealing the same physical damage to enemies hit. Breaking stealth with a basic attack or Noxian Diplomacy will converge the blades to the target instead.</p>",
            "leveling": [
              {
                "attribute": "Total Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      180,
                      270,
                      360
                    ]
                  },
                  {
                    "values": [
                      200
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
          100,
          80,
          60
        ],
        "targeting": "Auto",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "spellaoe",
        "projectile": "TRUE",
        "notes": "Shadow Assault casts a total of 12 blades evenly distributed in all directions. 4 of them travel down the cardinal directions (Relative to the map, not relative to Talon), while all blades have an angle of 30° to one another.\n Spell shield will block a single pass.\nShadow Assault does not cancel Talon's basic attacks.\nShadow Assault has a minimum lifetime of 0.8 seconds before convergence.\nThe blades each will fail to converge on their target (Talon or the attacked target) if the target is more than 20000 units from them.(bug)\nThis distance is barely achievable between fountains on Summoner's Rift.\nUsing a basic attack breaks the stealth at the end of the attack windup.",
        "blurb": "Active:  Talon disperses a ring of blades around him that deals physical damage to enemies it passes through and lingers for a short time, during which he gains  invisibility and  bonus move speed.",
        "speed": "2400 / 4000",
        "width": "280",
        "castTime": "none",
        "effectRadius": "550",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Talon is the knife in the darkness, a merciless killer able to strike without warning and escape before any alarm is raised. He carved out a dangerous reputation on the brutal streets of Noxus, where he was forced to fight, kill, and steal to survive. Adopted by the notorious Du Couteau family, he now plies his deadly trade at the empire's command, assassinating enemy leaders, captains, and heroes… as well as any Noxian foolish enough to earn the scorn of their masters."
}
