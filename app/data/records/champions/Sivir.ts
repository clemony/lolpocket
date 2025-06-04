 export const Sivir: Champion =  {
  "id": 15,
  "key": "Sivir",
  "name": "Sivir",
  "title": "the Battle Mistress",
  "resource": "Mana",
  "attackType": "Ranged",
  "stats": {
    "health": {
      "flat": 600,
      "perLevel": 104
    },
    "healthRegen": {
      "flat": 3.25,
      "perLevel": 0.55
    },
    "mana": {
      "flat": 340,
      "perLevel": 45
    },
    "manaRegen": {
      "flat": 6,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 30,
      "perLevel": 4.45
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 60,
      "perLevel": 2.5
    },
    "movespeed": {
      "flat": 335
    },
    "acquisitionRadius": {
      "flat": 500
    },
    "selectionRadius": {
      "flat": 115
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
      "perLevel": 2
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
      "flat": -0.18
    },
    "attackRange": {
      "flat": 500
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
    "mobility": 1,
    "utility": 2,
    "abilityReliance": 10,
    "difficulty": 2
  },
  "abilities": {
    "P": [
      {
        "name": "Fleet of Foot",
        "icon": "https://cdn.communitydragon.org/latest/champion/Sivir/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Sivir's basic attacks and ability hits against enemy champions grant her 55 - 75 (based on level) bonus movement speed decaying over 1.5 seconds, refreshing on subsequent hits.</p>"
          }
        ],
        "targeting": "Passive",
        "affects": "Self",
        "notes": "No additional details.",
        "blurb": "Innate:  Sivir's basic attacks and damaging abilities against enemy  champions briefly grant her a burst of  move speed."
      }
    ],
    "Q": [
      {
        "name": "Boomerang Blade",
        "icon": "https://cdn.communitydragon.org/latest/champion/Sivir/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Sivir hurls her crossblade in the target direction, dealing physical damage to enemies within its path, increased by 0% - 50% (based on critical strike chance).</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      60,
                      85,
                      110,
                      135,
                      160
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
                      60
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
            "description": "Boomerang Blade's damage is reduced by 0% - 60% (based on non-champions hit). Upon reaching maximum range, the crossblade returns to her, resetting the damage modifier and dealing the same damage to enemies on its way back.",
            "leveling": [
              {
                "attribute": "Minimum Damage",
                "modifiers": [
                  {
                    "values": [
                      24,
                      34,
                      44,
                      54,
                      64
                    ]
                  },
                  {
                    "values": [
                      40
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  },
                  {
                    "values": [
                      24
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Total Maximum Champion Damage",
                "modifiers": [
                  {
                    "values": [
                      120,
                      170,
                      220,
                      270,
                      320
                    ]
                  },
                  {
                    "values": [
                      200
                    ],
                    "units": [
                      "% bonus AD"
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
            "description": "Enemies can be hit only once per pass."
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
          10,
          9.5,
          9,
          8.5,
          8
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "Special",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "AoE",
        "projectile": "TRUE",
        "notes": "Due to the cast time effectively rounding up to full game ticks, at undesturbed game tick interval times the technical minimum cast time is 0.198 seconds reached at 99.8% bonus attack speed.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe damage reduction per unit hit resets back to full damage upon changing direction.\nBoomerang Blade will still return to Sivir even if she dies before it changes direction.\n Spell shield only blocks one instance of damage.",
        "blurb": "Active:  Sivir hurls her crossblade in the target direction that deals physical damage to enemies hit.",
        "speed": "1450 / 1200",
        "width": "180 / 200",
        "castTime": "0.25 : 0.1 (based on bonus attack speed)",
        "targetRange": "1250",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Ricochet",
        "icon": "https://cdn.communitydragon.org/latest/champion/Sivir/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Sivir empowers her crossblade for the next 4 seconds, gaining bonus attack speed and causing her basic attacks to bounce to additional surrounding enemies, dealing them physical damage. If the triggering attack critically strikes, the bounces will do so as well for (175% + 40%) damage. Ricochet deals 65% damage against minions and executes them if they would be left below 15 health.</p>",
            "leveling": [
              {
                "attribute": "Bonus Attack Speed",
                "modifiers": [
                  {
                    "values": [
                      20,
                      25,
                      30,
                      35,
                      40
                    ],
                    "units": [
                      "%"
                    ]
                  }
                ]
              },
              {
                "attribute": "Bounce Damage",
                "modifiers": [
                  {
                    "values": [
                      40,
                      42.5,
                      45,
                      47.5,
                      50
                    ],
                    "units": [
                      "% AD"
                    ]
                  }
                ]
              },
              {
                "attribute": "Bounce Critical Damage",
                "modifiers": [
                  {
                    "values": [
                      70,
                      74.375,
                      78.75,
                      83.125,
                      87.5
                    ],
                    "units": [
                      "% AD"
                    ]
                  }
                ]
              },
              {
                "attribute": "Minion Bounce Damage",
                "modifiers": [
                  {
                    "values": [
                      26,
                      27.625,
                      29.25,
                      30.875,
                      32.5
                    ],
                    "units": [
                      "% AD"
                    ]
                  }
                ]
              },
              {
                "attribute": "Minion Bounce Critical Damage",
                "modifiers": [
                  {
                    "values": [
                      45.5,
                      48.34375,
                      51.1875,
                      54.03125,
                      56.875
                    ],
                    "units": [
                      "% AD"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Bounces occur only up to 8 times and can target each enemy up to one additional time per empowered attack. They prioritize the nearest new target, then the nearest target if no new targets are available."
          },
          {
            "description": "Ricochet resets Sivir's basic attack timer. The target does not have to be visible to be bounced to."
          }
        ],
        "cost": [
          60
        ],
        "cooldown": [
          12
        ],
        "targeting": "Auto",
        "affects": "Self",
        "spellshieldable": "False",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "default",
        "projectile": "TRUE",
        "notes": "Ricochet-enhanced basic attacks can bounce from structures onto secondary targets but not from nearby units onto structures.\nPENDING FOR TEST:: Ricochet's  interactions with  dodging,  blocking, and  blinding effects.\nRicochet do not apply to additional targets with  Runaan's Hurricane.",
        "blurb": "Active:  Sivir gains  bonus attack speed for a few seconds. During this time, her basic attacks create projectiles that repeatedly bounce to nearby surrounding enemies, dealing physical damage.",
        "speed": "1750 / 1000",
        "castTime": "none",
        "effectRadius": "500",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Spell Shield",
        "icon": "https://cdn.communitydragon.org/latest/champion/Sivir/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Sivir gains a spell shield for 1.5 seconds. Upon successfully blocking a hostile effect, she heals herself and activates Fleet of Foot after 0.25 seconds.</p>",
            "leveling": [
              {
                "attribute": "Heal",
                "modifiers": [
                  {
                    "values": [
                      60,
                      65,
                      70,
                      75,
                      80
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
              }
            ]
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          24,
          22.5,
          21,
          19.5,
          18
        ],
        "targeting": "Auto",
        "affects": "Self",
        "notes": "Spell Shield will heal and activate  Fleet of Foot if any effect is blocked. This includes effects such as champion abilities, item effects,  Dragon's basic attacks, as well as the abilities of  Baron Nashor and  Rift Herald.\nSpell Shield will still block abilities that have already been applied to Sivir if the delayed effects of that ability is area of effect (e.g.  Blaze's explosion,  Chum the Waters, and  Time Bomb).",
        "blurb": "Active:  Sivir briefly gains a  spell shield.",
        "castTime": "none",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "On the Hunt",
        "icon": "https://cdn.communitydragon.org/latest/champion/Sivir/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Sivir gains On the Hunt for a duration and grants it to nearby allied champions for the remaining duration.</p>",
            "leveling": [
              {
                "attribute": "Buff Duration",
                "modifiers": [
                  {
                    "values": [
                      8,
                      10,
                      12
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
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">On the Hunt:</span> Gain bonus movement speed.</p>",
            "leveling": [
              {
                "attribute": "Bonus Movement Speed",
                "modifiers": [
                  {
                    "values": [
                      20,
                      25,
                      30
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
            "description": "While active, Sivir's basic attacks on-attack reduce her basic abilities' current cooldowns by 0.5 seconds each."
          },
          {
            "description": "Sivir can refresh the duration of her On the Hunt buff whenever she scores a takedown against an enemy champion within 3 seconds of damaging them."
          }
        ],
        "cost": [
          100
        ],
        "cooldown": [
          120,
          100,
          80
        ],
        "targeting": "Auto",
        "affects": "Allies",
        "resource": "Mana",
        "notes": "No additional notes.",
        "blurb": "Active:  Sivir gains On the Hunt for a period, and creates an aura that grants allied champions On the Hunt for the remaining duration. Sivir can refresh her duration whenever she scores an enemy  takedown within a short time of damaging them.",
        "castTime": "none",
        "effectRadius": "1000",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Sivir is a renowned fortune hunter and mercenary captain who plies her trade in the deserts of Shurima. Armed with her legendary jeweled crossblade, she has fought and won countless battles for those who can afford her exorbitant price. Known for her fearless resolve and endless ambition, she prides herself on recovering buried treasures from the perilous tombs of Shurima—for a generous bounty. With ancient forces stirring the very bones of Shurima, Sivir finds herself torn between conflicting destinies."
}
