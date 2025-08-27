// Updated Patch 25.16 - 08/14/2025 07:55:49 PM CDT

const champion: Champion =  {
  "id": 145,
  "key": "Kaisa",
  "name": "Kai'Sa",
  "title": "Daughter of the Void",
  "resource": "Mana",
  "attackType": "Ranged",
  "stats": {
    "health": {
      "flat": 640,
      "perLevel": 102
    },
    "healthRegen": {
      "flat": 4,
      "perLevel": 0.55
    },
    "mana": {
      "flat": 345,
      "perLevel": 40
    },
    "manaRegen": {
      "flat": 8.2,
      "perLevel": 0.7
    },
    "armor": {
      "flat": 27,
      "perLevel": 4.2
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 59,
      "perLevel": 2.6
    },
    "movespeed": {
      "flat": 335
    },
    "acquisitionRadius": {
      "flat": 800
    },
    "selectionRadius": {
      "flat": 100
    },
    "pathingRadius": {
      "flat": 40.68
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
      "flat": 0.644,
      "perLevel": 1.8
    },
    "attackSpeedRatio": {
      "flat": 0.644
    },
    "attackCastTime": {
      "flat": 0.25
    },
    "attackTotalTime": {
      "flat": 1.552
    },
    "attackRange": {
      "flat": 525
    }
  },
  "positions": [
    "Bottom"
  ],
  "roles": [
    "Mage",
    "Marksman"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 1,
    "mobility": 3,
    "utility": 1,
    "abilityReliance": 10,
    "difficulty": 3
  },
  "abilities": {
    "P": [
      {
        "name": "Second Skin",
        "icon": "https://cdn.communitydragon.org/latest/champion/Kaisa/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Living Weapon:</span> Kai'Sa can evolve each of her basic abilities by gaining a set amount of permanent stats from items and stat growth, granting them additional effects. Evolving an ability causes her to enter a 2-second cast time. The upgrade is lost if the stat requirement is no longer met.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Plasma:</span> Kai'Sa's basic attacks on-hit and Void Seeker apply stacks of Plasma to enemies for 4 seconds, refreshing on subsequent applications and stacking up to 5 times. Basic attacks each apply 1 stack and Void Seeker applies 2 stacks, increased to 3 if it is evolved. Her and nearby allies' immobilizing effects and polymorphs against enemy champions will also apply a stack of Plasma.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Caustic Wounds:</span> Plasma stacks applied by Kai'Sa's basic attacks or Void Seeker deal 4 - 24 (based on level) (+ 1 - 6 (based on level) per Plasma stack before application) (+ 12% - 24% (based on Plasma stacks before application) AP) bonus magic damage. The fifth stack against a target consumes them all to deal additional bonus magic damage equal to 15% (+ 6% per 100 AP) of the target's missing health, capped at 400 against monsters.</p>"
          }
        ],
        "targeting": "Passive",
        "affects": "Self, Enemies",
        "spellshieldable": "special",
        "damageType": "Magic damage",
        "spellEffects": "Proc",
        "notes": "adaptive force from items does not count toward evolutions.\nKai'Sa may receives an evolution even if she dies during its  lockout.\nKai'Sa can evolve an ability even if she hasn't learned it yet.\nThe bonus missing health damage is evaluated after the initial damage from Caustic Wounds is evaluated, and after  Void Seeker's damage if triggered by it, but before a triggering basic attack's is.\nThis effectively increases the \"flat\" Caustic Wounds damage preceding the expunge proc and (if applicable)  Void Seeker damage and any potential preceding on-hit damage (usually not possible to acquire due to buff slot order) by 15% (+ 6% per 100 AP) divided by (1+the target's MR post penetration/100).\nPlasma stacks that exceed the rupture are reapplied normally.\n Spell shield will block the Plasma application from  Void Seeker only.\nWith  Void Seeker, if the stacks detonate Plasma, any remaining stacks are reapplied afterwards.  Void Seeker also deals Caustic Wounds' damage based on Plasma stacks on the target. This damage is calculated as if each stack was applied successively.",
        "blurb": "Innate - Living Weapon:  Kai'Sa can permanently evolve each of her basic abilities by obtaining  attack damage,  ability power, and  attack speed, respectively.",
        "effectRadius": "2750"
      }
    ],
    "Q": [
      {
        "name": "Icathian Rain",
        "icon": "https://cdn.communitydragon.org/latest/champion/Kaisa/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kai'Sa releases a swarm of 6 missiles that evenly distributes among nearby visible enemies, each one hitting their target after 0.4 seconds to deal physical damage. Minions below 35% health take double damage.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage Per Missile",
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
                      55
                    ],
                    "units": [
                      "% bonus AD"
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
            "description": "Non-minions take 25% damage from missiles beyond their first.",
            "leveling": [
              {
                "attribute": "Reduced Damage Per Missile",
                "modifiers": [
                  {
                    "values": [
                      10,
                      13.75,
                      17.5,
                      21.25,
                      25
                    ]
                  },
                  {
                    "values": [
                      13.75
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  },
                  {
                    "values": [
                      5
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Total Single-Target Damage",
                "modifiers": [
                  {
                    "values": [
                      90,
                      123.75,
                      157.5,
                      191.25,
                      225
                    ]
                  },
                  {
                    "values": [
                      123.75
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
              }
            ]
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Evolution:</span> Requires[ 100 - 56 (based on level) attack damage from items ][ 100 attack damage from items and stat growth ]to upgrade : Icathian Rain instead fires 12 missiles.</p>",
            "leveling": [
              {
                "attribute": "Total Evolved Single-Target Damage",
                "modifiers": [
                  {
                    "values": [
                      150,
                      206.25,
                      262.5,
                      318.75,
                      375
                    ]
                  },
                  {
                    "values": [
                      206.25
                    ],
                    "units": [
                      "% bonus AD"
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
              }
            ]
          },
          {
            "description": "A nearby enemy is required to cast this ability."
          }
        ],
        "cost": [
          55
        ],
        "cooldown": [
          10,
          9,
          8,
          7,
          6
        ],
        "targeting": "Proximity",
        "affects": "Enemies",
        "spellshieldable": "Special",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "special",
        "projectile": "TRUE",
        "notes": "The first missile on a target applies  area damage, while the rest on the same target apply  persistent area damage.\n Spell shields only block the damage from a single missile.\nIcathian Rain acquires its targets upon cast. Moving will not change its targets.\nCharging  Supercharge will not stop the missiles from firing.\nIt takes 1 second for all missiles to fire at a single target.",
        "blurb": "Active:  Kai'Sa shoots a swarm of missiles that evenly seek out nearby enemies, dealing physical damage.",
        "castTime": "none",
        "targetRange": "600",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Void Seeker",
        "icon": "https://cdn.communitydragon.org/latest/champion/Kaisa/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kai'Sa fires a void bolt in the target direction that briefly grants sight around its trajectory as it travels, deals magic damage to the first enemy hit, applies 2 Plasma, and reveals them for 4 seconds.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      30,
                      55,
                      80,
                      105,
                      130
                    ]
                  },
                  {
                    "values": [
                      130
                    ],
                    "units": [
                      "% AD"
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
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Evolution:</span> Requires 100 ability power from items to upgrade : Void Seeker applies 3 Plasma instead and refunds 75% of its cooldown if it hits an enemy champion.</p>"
          }
        ],
        "cost": [
          55,
          60,
          65,
          70,
          75
        ],
        "cooldown": [
          22,
          20,
          18,
          16,
          14
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "Single",
        "projectile": "TRUE",
        "notes": "This ability will cast from wherever the caster is at the end of the cast time.",
        "blurb": "Active:  Kai'Sa fires a void bolt in the target direction that grants  sight around its trajectory as it travels and deals magic damage to the first enemy hit,  revealing them for a few seconds.",
        "speed": "1750",
        "width": "200",
        "castTime": "0.4",
        "targetRange": "3000",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Supercharge",
        "icon": "https://cdn.communitydragon.org/latest/champion/Kaisa/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kai'Sa charges up over the cast time, during which she is still able to move, becoming ghosted and gaining bonus movement speed for the duration, with the effectiveness increased by 0% - 100% (based on bonus attack speed).</p>",
            "leveling": [
              {
                "attribute": "Minimum Movement Speed",
                "modifiers": [
                  {
                    "values": [
                      55,
                      60,
                      65,
                      70,
                      75
                    ],
                    "units": [
                      "%"
                    ]
                  }
                ]
              },
              {
                "attribute": "Maximum Movement Speed",
                "modifiers": [
                  {
                    "values": [
                      110,
                      120,
                      130,
                      140,
                      150
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
            "description": "After completing the charge, she gains bonus attack speed for 4 seconds, during which her attacks have a lower windup of 6.44% and an increased missile speed.",
            "leveling": [
              {
                "attribute": "Bonus Attack Speed",
                "modifiers": [
                  {
                    "values": [
                      40,
                      50,
                      60,
                      70,
                      80
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
            "description": "Supercharge's current cooldown is reduced by 0.5 seconds on-attack."
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Evolution:</span> Requires[ 100% - 70% (based on level) attack speed from items ][ 100% attack speed from items and stat growth ]to upgrade : Supercharge grants invisibility at the start of the cast time for 0.5 seconds.</p>"
          }
        ],
        "cost": [
          30
        ],
        "cooldown": [
          16,
          14.5,
          13,
          11.5,
          10
        ],
        "targeting": "Auto",
        "affects": "Self",
        "resource": "Mana",
        "notes": "Her attack commands during this time are switched to movement commands instead. Upon finishing the charge and if an attack command was issued, Kai'Sa will continue walking toward her target.\nKai'Sa behaves normally if attack move click was issued not on a target during the cast time, stopping at attack range of the closest target and starts attacking when charged up.",
        "blurb": "Active:  Kai'Sa briefly becomes  ghosted and gains  bonus move speed during the cast time, then gains  bonus attack speed for a few seconds.",
        "castTime": "1.2 : 0.6 (based on bonus attack speed)",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Killer Instinct",
        "icon": "https://cdn.communitydragon.org/latest/champion/Kaisa/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kai'Sa grants herself a shield for 2 seconds and dashes to a target location near a visible enemy champion that was affected by Plasma within the last 4 seconds. The shield's duration is refreshed when the dash ends.</p>",
            "leveling": [
              {
                "attribute": "Shield Strength",
                "modifiers": [
                  {
                    "values": [
                      70,
                      90,
                      110
                    ]
                  },
                  {
                    "values": [
                      90,
                      135,
                      180
                    ],
                    "units": [
                      "% AD"
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
          },
          {
            "description": "An enemy champion within range and affected by Plasma is required to cast this ability. Killer Instinct resets Kai'Sa's basic attack timer. Kai'Sa can cast any of her abilities during the dash."
          }
        ],
        "cost": [
          100
        ],
        "cooldown": [
          120,
          90,
          60
        ],
        "targeting": "Location",
        "affects": "Self",
        "resource": "Mana",
        "notes": "Kai'Sa will issue a movement command to the targeted location regardless of whether the target location is valid. The dash is not buffered during this movement command. Kai'Sa will not dash if the targeted location becomes valid by walking in range or a nearby enemy champion becomes affected by Plasma.\nIf the targeted location is not valid, the range indicator will glow.\nThe enemy champion recently affected by Plasma must be in range of Kai'Sa for the targeted location to be valid, and not the targeted location itself.\nThe basic attack reset is not considered one for  Hail of Blades.",
        "blurb": "Active:  Kai'Sa briefly  shields herself and  dashes near an enemy champion affected by Plasma.",
        "castTime": "none",
        "effectRadius": "525",
        "targetRange": "2000 / 2250 / 2500 / 2750 / 3000",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Claimed by the Void when she was only a child, Kai'Sa managed to survive through sheer tenacity and strength of will. Her experiences have made her a deadly hunter and, to some, the harbinger of a future they would rather not live to see. Having entered into an uneasy symbiosis with a living Void carapace, the time will soon come when she must decide whether to forgive those mortals who would call her a monster, and defeat the coming darkness together… or simply to forget, as the Void consumes the world that left her behind."
}
    export default champion