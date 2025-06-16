// Updated Patch 25.11 - 06/16/2025 01:01:43 PM CDT

const champion: Champion =  {
  "id": 498,
  "key": "Xayah",
  "name": "Xayah",
  "title": "the Rebel",
  "resource": "Mana",
  "attackType": "Ranged",
  "stats": {
    "health": {
      "flat": 630,
      "perLevel": 107
    },
    "healthRegen": {
      "flat": 3.25,
      "perLevel": 0.75
    },
    "mana": {
      "flat": 340,
      "perLevel": 40
    },
    "manaRegen": {
      "flat": 8.25,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 25,
      "perLevel": 4.2
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 60,
      "perLevel": 3.5
    },
    "movespeed": {
      "flat": 330
    },
    "acquisitionRadius": {
      "flat": 800
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
      "perLevel": 3.9
    },
    "attackSpeedRatio": {
      "flat": 0.658
    },
    "attackCastTime": {
      "flat": 0.283
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackRange": {
      "flat": 525
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
    "toughness": 2,
    "control": 3,
    "mobility": 1,
    "utility": 1,
    "abilityReliance": 30,
    "difficulty": 2
  },
  "abilities": {
    "P": [
      {
        "name": "Clean Cuts",
        "icon": "https://cdn.communitydragon.org/latest/champion/Xayah/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Feathers shot by Xayah will linger and be planted in the ground at maximum range for 6 seconds.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Xayah's ability casts generate 3 stacks of Clean Cuts, lasting for 8 seconds, refreshing on subsequent casts, and stacking up to 5 times. Xayah's basic attacks are empowered to each consume a stack on-attack to instead shoot a Feather that deals the triggering attack's damage to the primary target and 30 / 40 / 50% (based on level) AD physical damage to other enemies hit. The secondary target damage can critically strike for (175% + 40%) damage if the triggering attack does.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Lover's Leap:</span> If either Xayah or Rakan is channeling Recall, the other may move nearby and channel their own to join alongside them. Both reach base at the time of which the initiator's Recall completes.</p>"
          }
        ],
        "targeting": "Passive",
        "affects": "Enemies",
        "spellshieldable": "False",
        "damageType": "Physical damage",
        "spellEffects": "special",
        "projectile": "SPECIAL",
        "notes": "Deals  basic damage to the primary target and  area damage to secondary targets.\nFeathers will stop upon being intercepted by  projectile-blocking effects.\nPENDING FOR TEST::  Missile popping before and after striking the primary target.\nAfter striking their target, the attack will proceed in a line in the same direction it was already flying.\nIf the target is more than 1000 units from Xayah when the empowered attack hits them, the attack will not keep flying in a line and drop the Feather at their location immediately.\nUnlike similar effects, the homing and line trajectories use the same missile.\nAll her Feathers on the ground will be destroyed when Xayah  dies, and while she is dead, missiles that are still in flight will not spawn new ones, either.\nClean Cut's feathers will spawn even if the basic attack is  blocked.\nClean Cut's hit can be  dodged by or  missed against the primary target.\nThis will not prevent the missile from continuing on its path nor from dealing damage to secondary targets. The damage cannot be dodged as or missed against a secondary target.\nThe empowered attack will not trigger against structures nor wards.\nThe duration will be refreshed when starting the attack windup against them.\nThe number of Clean Cuts stacks available is represented by a  feather counter in her ammo bar, visible to the player only.",
        "blurb": "Innate: Feathers shot by  Xayah will linger in the ground at max range for a few seconds.",
        "speed": "4000",
        "width": "120",
        "effectRadius": "1000"
      }
    ],
    "Q": [
      {
        "name": "Double Daggers",
        "icon": "https://cdn.communitydragon.org/latest/champion/Xayah/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Xayah barrages two Feathers in the target direction that each deal physical damage to enemies hit.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage Per Hit",
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
                      50
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
                      90,
                      120,
                      150,
                      180,
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
                  }
                ]
              }
            ]
          },
          {
            "description": "Targets hit after the first take 50% reduced damage.",
            "leveling": [
              {
                "attribute": "Reduced Damage per Hit",
                "modifiers": [
                  {
                    "values": [
                      22.5,
                      30,
                      37.5,
                      45,
                      52.5
                    ]
                  },
                  {
                    "values": [
                      25
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  }
                ]
              },
              {
                "attribute": "Total Reduced Damage",
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
                      50
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
          50
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
        "spellEffects": "spellaoe",
        "projectile": "SPECIAL",
        "notes": "Daggers shoot from Xayah's left and right side.\nBecause of the usual tick intervals of the server, Double Daggers' minimum cast time is typically reached at 168.58% bonus attack speed already, for a cast time of 0.132 seconds (from the default 0.264 seconds), or the duration of 4 game ticks.\nIf the first 3 game ticks happen to be slightly longer than normal, the minimum cast time of 0.1 seconds can actually be reached in very rare cases because of that.\nXayah is unable to declare basic attacks for a set duration during the cast time of Double Daggers. The lock out duration is reduced by [ 0.007 seconds per every 1% bonus attack speed ][ 1 second per every 140% bonus attack speed ].\nThe Feathers will stop upon being intercepted by  projectile-blocking effects.\nAs the feathers are forming, they will deal damage in a small area around Xayah's before firing.\n Spell shield will only block a single instance of damage.\nThis ability will cast from wherever the caster is at the end of the cast time.",
        "blurb": "Active:  Xayah barrages out two Feathers that each deal physical damage to enemies hit.",
        "width": "100 (plus offset)",
        "castTime": "0.25 : 0.1 (based on bonus attack speed)",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Deadly Plumage",
        "icon": "https://cdn.communitydragon.org/latest/champion/Xayah/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Xayah enters a frenzy for 4 seconds, gaining bonus attack speed and empowering her basic attacks to fire an additional smaller feather at the target on-hit that deals 25% damage of the triggering attack's damage.</p>",
            "leveling": [
              {
                "attribute": "Bonus Attack Speed",
                "modifiers": [
                  {
                    "values": [
                      35,
                      40,
                      45,
                      50,
                      55
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
            "description": "Whenever Xayah hits an enemy champion with the strike, she gains 30% bonus movement speed for 1.5 seconds."
          },
          {
            "description": "If Rakan is nearby upon cast, he also becomes empowered, and gains the bonus movement speed at the same time as Xayah."
          }
        ],
        "cost": [
          60,
          55,
          50,
          45,
          40
        ],
        "cooldown": [
          20,
          19,
          18,
          17,
          16
        ],
        "targeting": "Auto",
        "affects": "Self, Rakan",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "periodic",
        "projectile": "TRUE",
        "notes": "The additional missile is visually a smaller feather than the normal feather missiles that are fired by Xayah's basic attacks and does not technically count as a Feather for  Clean Cuts.\nThe additional missile is fired as soon as the triggering basic attack's missile has hit the target, or more accurately  on-hit of the triggering basic attack.\nSince the additional missile's damage is based on a percentage of the triggering attack's damage, it will also benefit from the increased damage of triggering attacks that  critically strike.\nThe additional missile itself however cannot  critically strike.\n Runaan's Hurricane's Wind's Fury interacts with Deadly Plumage by causing the additional bolts to fire their own additional missile that deals a percentage of the triggering bolt's damage.\nDeadly Plumage does not interact with  Guinsoo's Rageblade's Phantom Hit.\nThe empowered attack will not trigger against wards.\nThe additional missile is not fired if the triggering basic attack misses while Xayah is  blinded.\nPENDING FOR TEST: Interactions with  dodge and  block.",
        "blurb": "Active:  Xayah empowers herself for a few seconds, gaining  bonus attack speed and causing her basic attacks to strike a second time, dealing reduced damage.",
        "speed": "3000",
        "castTime": "none",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Bladecaller",
        "icon": "https://cdn.communitydragon.org/latest/champion/Xayah/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Xayah recalls all planted Feathers to shoot back to her, each dealing physical damage to enemies hit, increased by 0% - 75% (based on critical strike chance). Bladecaller deals 50% damage to minions.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage Per Feather",
                "modifiers": [
                  {
                    "values": [
                      55,
                      65,
                      75,
                      85,
                      95
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
                "attribute": "Minion Damage Per Feather",
                "modifiers": [
                  {
                    "values": [
                      27.5,
                      32.5,
                      37.5,
                      42.5,
                      47.5
                    ]
                  },
                  {
                    "values": [
                      30
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
            "description": "An enemy takes 100% - 10% (based on previous feathers hit) damage from a Feather."
          },
          {
            "description": "A target hit by at least three Feathers is rooted for 1.25 seconds."
          },
          {
            "description": "A planted Feather is required to cast this ability. Enemies can be hit by an individual Feather only once per pass."
          }
        ],
        "cost": [
          30
        ],
        "cooldown": [
          12,
          11,
          10,
          9,
          8
        ],
        "targeting": "Auto",
        "affects": "Enemies",
        "spellshieldable": "special",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "spellaoe",
        "projectile": "TRUE",
        "notes": "Feathers that are 'in flight' will be called to Xayah too, but only once they've landed normally first.\n Spell shield will only block a single instance of damage.\nThis ability cannot be ranked at Level 1.\nThe damage dealt by Bladecaller follows a diminishing returns formula not mentioned in the ability's description, successively reducing extra damage from feathers beyond the first.\nThis formula is:\nFor feathers <=19: Damage of one feather × (n − 0.05 × (n − 1) ÷ 2 × n) where n stands for the number of feathers hit.\nFor feathers >=20: Damage of one feather × (19 − 0.05 × (19 − 1) ÷ 2 × 19 + 0.1 × (n − 19)) where n stands for the number of feathers hit.\nFor example, at rank 1 Bladecaller deals 55 : 574.75 (based on feathers hit).\nBladecaller cannot be cast without a Feather on the ground.",
        "blurb": "Active:  Xayah recalls all Feathers to shoot back to her, each dealing physical damage to enemies hit based on her  critical strike chance.",
        "speed": "4000",
        "width": "160",
        "castTime": "none",
        "effectRadius": "Global",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Featherstorm",
        "icon": "https://cdn.communitydragon.org/latest/champion/Xayah/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Xayah leaps into the air, becoming ghosted and untargetable for 1.5 seconds. After 1 second, she shoots 5 Feathers in a cone in the target direction that deal physical damage to enemies hit.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      200,
                      300,
                      400
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
          },
          {
            "description": "Xayah is unable to basic attack or cast abilities during Featherstorm, but can still move."
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
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "spellaoe",
        "projectile": "SPECIAL",
        "notes": "The individual missiles have 1100 range but start slightly behind Xayah, reducing their total range.\nThe following table refers for interactions while Xayah is in Featherstorm:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\nAll summoner spells are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
        "blurb": "Active:  Xayah leaps into the air and briefly becomes  ghosted and  untargetable, then throws five Feathers in a cone in the target direction that each deal physical damage to enemies hit.",
        "angle": "30°",
        "castTime": "none",
        "effectRadius": "1060 /  1000",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Deadly and precise, Xayah is a vastayan revolutionary waging a personal war to save her people. She uses her speed, guile, and razor-sharp feather blades to cut down anyone who stands in her way. Xayah fights alongside her partner and lover, Rakan, to protect their dwindling tribe, and restore their race to her vision of its former glory."
}
    export default champion