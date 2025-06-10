// Updated Patch 25.11 - 06/08/2025 12:01:46 PM CDT

const champion: Champion =  {
  "id": 67,
  "key": "Vayne",
  "name": "Vayne",
  "title": "the Night Hunter",
  "fullName": "Shauna Vayne",
  "resource": "Mana",
  "attackType": "Ranged",
  "stats": {
    "health": {
      "flat": 550,
      "perLevel": 103
    },
    "healthRegen": {
      "flat": 3.5,
      "perLevel": 0.55
    },
    "mana": {
      "flat": 232,
      "perLevel": 35
    },
    "manaRegen": {
      "flat": 7,
      "perLevel": 0.4
    },
    "armor": {
      "flat": 23,
      "perLevel": 4.6
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 60,
      "perLevel": 2.35
    },
    "movespeed": {
      "flat": 330
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
      "flat": 0.658,
      "perLevel": 3.3
    },
    "attackSpeedRatio": {
      "flat": 0.658
    },
    "attackCastTime": {
      "flat": 0.3
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackDelayOffset": {
      "flat": -0.125
    },
    "attackRange": {
      "flat": 550
    }
  },
  "positions": [
    "Bottom",
    "Top"
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
    "abilityReliance": 0,
    "difficulty": 2
  },
  "abilities": {
    "P": [
      {
        "name": "Night Hunter",
        "icon": "https://cdn.communitydragon.org/latest/champion/Vayne/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Vayne gains 30 bonus movement speed while facing a nearby visible enemy champion, increased to 90 while under the effects of Final Hour.</p>"
          }
        ],
        "targeting": "Passive",
        "affects": "Self",
        "notes": "The bonus movement speed persists for 2 seconds after Vayne loses  sight of an enemy champion.",
        "blurb": "Innate:  Vayne gains  bonus movement speed while facing a nearby enemy champion, significantly increased during  Final Hour.",
        "effectRadius": "2000"
      }
    ],
    "Q": [
      {
        "name": "Tumble",
        "icon": "https://cdn.communitydragon.org/latest/champion/Vayne/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Vayne dashes a fixed distance in the target direction, though not through terrain, and empowers her next basic attack within 3 seconds to have an uncancelable windup and deal bonus physical damage.</p>",
            "leveling": [
              {
                "attribute": "Bonus Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      75,
                      85,
                      95,
                      105,
                      115
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
          },
          {
            "description": "Tumble resets Vayne's basic attack timer."
          }
        ],
        "cost": [
          30
        ],
        "cooldown": [
          6,
          5,
          4,
          3,
          2
        ],
        "targeting": "Direction",
        "affects": "Self",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "spell",
        "notes": "The bonus damage applies  life steal.\nAlthough Tumble will reset the basic attack timer, Vayne cannot attack until the animation is complete.\nVayne can cast  Final Hour during Tumble. She does not become  invisible during the dash.",
        "blurb": "Active:  Vayne  dashes in the target direction. Her next basic attack within a few seconds will deal bonus physical damage.",
        "speed": "500 + total movement speed",
        "castTime": "none",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Silver Bolts",
        "icon": "https://cdn.communitydragon.org/latest/champion/Vayne/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Vayne's basic attacks on-hit and Condemn apply a stack of Silver Bolts for 3.5 seconds, refreshing on subsequent applications, expiring upon attacking a new enemy, and stacking up to 3 times.</p>"
          },
          {
            "description": "The third stack consumes them all to deal bonus true damage, with a minimum threshold. This damage is capped at 200 against monsters.",
            "leveling": [
              {
                "attribute": "Bonus True Damage",
                "modifiers": [
                  {
                    "values": [
                      6,
                      7,
                      8,
                      9,
                      10
                    ],
                    "units": [
                      "% of target's maximum health"
                    ]
                  }
                ]
              },
              {
                "attribute": "Minimum Bonus Damage",
                "modifiers": [
                  {
                    "values": [
                      50,
                      65,
                      80,
                      95,
                      110
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
          0
        ],
        "targeting": "Passive",
        "affects": "Enemies",
        "spellshieldable": "False",
        "damageType": "True damage",
        "spellEffects": "Proc",
        "notes": "Stacks are not removed if Vayne switches to attacking a target immune to Silver Bolts ( structures,  wards).\nSilver Bolts do not apply to additional targets with  Runaan's Hurricane.\nThe stacks can be consumed even if the target is in  stasis.\nThe attacks do not affect structures nor wards.",
        "blurb": "Passive:  Vayne's basic attacks and  Condemn will apply a stack of Silver Bolts, which expires upon attacking a new enemy.",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Condemn",
        "icon": "https://cdn.communitydragon.org/latest/champion/Vayne/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Vayne fires a heavy bolt at the target enemy that deals physical damage and knocks them back 475 units, though not through terrain.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      50,
                      85,
                      120,
                      155,
                      190
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
            "description": "If the target collides with terrain, they take bonus physical damage and become stunned for 1.5 seconds.",
            "leveling": [
              {
                "attribute": "Bonus Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      75,
                      127.5,
                      180,
                      232.5,
                      285
                    ]
                  },
                  {
                    "values": [
                      75
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
                      125,
                      212.5,
                      300,
                      387.5,
                      475
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
          90
        ],
        "cooldown": [
          20,
          18,
          16,
          14,
          12
        ],
        "targeting": "Unit",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "spell",
        "projectile": "TRUE",
        "notes": "Condemn's  displacement direction is determined at the end of the cast time.\nBecause of this, Vayne may use  Flash during the cast time to create a better angle.\n Cleansing the  knock back will also end the displacement early.\nThe spell indicator for this ability also displays the direction for the knock back relative to Vayne's position.\nCondemn's  stun duration starts when Vayne's target collides with a wall (they can be immobilized for up to 2 seconds depending on  displacement duration based on distance traveled).\nCondemn's missile will fail to fire if Vayne is  suppressed during the cast time.(note)\nCondemn can interact with player-generated terrain.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
        "blurb": "Active:  Vayne fires a heavy bolt at the target enemy that deals physical damage and  knocks them back.",
        "speed": "2200 / 2000",
        "castTime": "0.25",
        "targetRange": "550",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Final Hour",
        "icon": "https://cdn.communitydragon.org/latest/champion/Vayne/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Vayne equips her crossbow, gaining bonus attack damage for a duration.</p>",
            "leveling": [
              {
                "attribute": "Effect Duration",
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
              },
              {
                "attribute": "Bonus Attack Damage",
                "modifiers": [
                  {
                    "values": [
                      35,
                      50,
                      65
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "While active, Final Hour empowers Night Hunter to have tripled bonus movement speed and Tumble to have a reduced cooldown. Additionally, Tumble's cast grants Vayne invisibility for 1 second. Attacking or casting abilities ends the stealth immediately.",
            "leveling": [
              {
                "attribute": "Tumble Cooldown Reduction",
                "modifiers": [
                  {
                    "values": [
                      30,
                      40,
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
            "description": "Scoring an enemy champion takedown within 3 seconds of damaging them will extend Final Hour's duration by 4 seconds, up to its original duration."
          }
        ],
        "cost": [
          80
        ],
        "cooldown": [
          100,
          85,
          70
        ],
        "targeting": "Auto",
        "affects": "Self",
        "resource": "Mana",
        "notes": "Vayne's animations and basic attack projectiles change slightly during Final Hour.\nTumble's visual effects can be seen by enemies upon Vayne becoming invisible.\nUsing a basic attack breaks the stealth at the start of the attack windup.",
        "blurb": "Active:  Vayne equips her crossbow for a long duration, gaining  attack damage.",
        "castTime": "none",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Shauna Vayne is a deadly, remorseless Demacian monster hunter, who has dedicated her life to finding and destroying the demon that murdered her family. Armed with a wrist-mounted crossbow and a heart full of vengeance, she is only truly happy when slaying practitioners or creations of the dark arts, striking from the shadows with a flurry of silver bolts."
}
    export default champion