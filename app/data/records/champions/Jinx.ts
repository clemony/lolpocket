// Updated Patch 25.11 - 06/08/2025 12:01:46 PM CDT

const champion: Champion =  {
  "id": 222,
  "key": "Jinx",
  "name": "Jinx",
  "title": "the Loose Cannon",
  "fullName": "Powder",
  "resource": "Mana",
  "attackType": "Ranged",
  "stats": {
    "health": {
      "flat": 630,
      "perLevel": 105
    },
    "healthRegen": {
      "flat": 3.75,
      "perLevel": 0.5
    },
    "mana": {
      "flat": 260,
      "perLevel": 50
    },
    "manaRegen": {
      "flat": 6.7,
      "perLevel": 1
    },
    "armor": {
      "flat": 26,
      "perLevel": 4.7
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 59,
      "perLevel": 3.25
    },
    "movespeed": {
      "flat": 325
    },
    "acquisitionRadius": {
      "flat": 550
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
      "perLevel": 1.4
    },
    "attackSpeedRatio": {
      "flat": 0.625
    },
    "attackCastTime": {
      "flat": 0.27
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
    "toughness": 1,
    "control": 2,
    "mobility": 1,
    "utility": 1,
    "abilityReliance": 10,
    "difficulty": 2
  },
  "abilities": {
    "P": [
      {
        "name": "Get Excited!",
        "icon": "https://cdn.communitydragon.org/latest/champion/Jinx/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Whenever Jinx scores a takedown against an enemy champion, epic monster, turret, or inhibitor within 3 seconds of damaging them, she gains 175% bonus movement speed decaying over 6 seconds.</p>"
          },
          {
            "description": "Additionally, she is allowed to exceed the attack speed cap and gains a stack of Get Excited! for the same duration, stacking up to 5 times. Only takedowns against enemy champions can grant stacks beyond the first."
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Get Excited!:</span> For each stack, Jinx gains 25% total attack speed, up to a maximum of 125%.</p>"
          }
        ],
        "targeting": "Passive",
        "affects": "Self",
        "notes": "Jinx's attack speed cap is increased to 90.0 for the duration, however this value is already beyond the technical limit for attack speed.\nJinx will still trigger Get Excited from killing a summoned  Rift Herald.\nJinx will fail to trigger Get Excited in the specific circumstance of killing  Baron Nashor while more than ~2500 distance away.(bug)",
        "blurb": "Innate: Whenever  Jinx scores a  takedown against an enemy  champion, epic  monster,  turret, or inhibitor shortly after damaging them, she gains a burst of  movement speed for a few seconds."
      }
    ],
    "Q": [
      {
        "name": "Switcheroo!",
        "icon": "https://cdn.communitydragon.org/latest/champion/Jinx/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Toggle:</span> Jinx switches between Pow-Pow, her minigun, and Fishbones, her rocket launcher.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Pow-Pow:</span> Basic attacks with Pow-Pow generate a stack of Rev'd up for 2.5 seconds, refreshing on subsequent attacks with Pow-Pow and stacking up to 3 times. Each stack of Rev'd up grants bonus attack speed, with all stacks beyond the first one being 50% effective. Stacks expire by one when the duration ends.</p>",
            "leveling": [
              {
                "attribute": "Bonus Attack Speed",
                "modifiers": [
                  {
                    "values": [
                      15,
                      27.5,
                      40,
                      52.5,
                      65
                    ],
                    "units": [
                      "%"
                    ]
                  }
                ]
              },
              {
                "attribute": "Attack Speed per Subsequent Stack",
                "modifiers": [
                  {
                    "values": [
                      7.5,
                      13.75,
                      20,
                      26.25,
                      32.5
                    ],
                    "units": [
                      "%"
                    ]
                  }
                ]
              },
              {
                "attribute": "Maximum Attack Speed",
                "modifiers": [
                  {
                    "values": [
                      30,
                      55,
                      80,
                      105,
                      130
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
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Fishbones:</span> Basic attacks with Fishbones cost mana on-attack to deal 110% AD modified physical damage to the target and nearby enemies. The damage is affected by critical strike modifiers. While Fishbones is equipped, Jinx gains bonus range but loses 10% of her bonus attack speed.</p>",
            "leveling": [
              {
                "attribute": "Bonus Range",
                "modifiers": [
                  {
                    "values": [
                      80,
                      110,
                      140,
                      170,
                      200
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Only the first attack after switching to Fishbones will benefit from Rev'd up."
          }
        ],
        "cost": [
          20
        ],
        "cooldown": [
          0.9
        ],
        "targeting": "Auto",
        "affects": "Self",
        "spellshieldable": "False",
        "resource": "Other",
        "damageType": "Physical damage",
        "spellEffects": "special",
        "notes": "Toggle abilities do not count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nJinx's first attack after switching to  Fishbones can be triggered after 0.4 seconds, instead of using the attack timer.\nDespite Jinx starting the game using  Pow-Pow she doesn't receive any bonus attack speed until Switcheroo! has been learned.\n Fishbones splash damage affects structures (minions will target Jinx) but does not affect targets if Jinx's attacks are  blocked,  dodged, or  missed.\nWith  Runaan's Hurricane  Pow-Pow generates one stack per enemy hit.\nEach of  Runaan's Hurricane's additional bolts apply  Fishbones' splash damage, which stacks with each other.\nBoth weapons deal  basic damage to their primary target (this includes the increased damage of  Fishbones), which applies  life steal based on the damage dealt (post-mitigation) as usual.\nThe splash damage of  Fishbones is based on the pre-mitigation damage done to the primary target (which includes critical strikes), and is not considered modified physical damage. It deals  default damage: It doesn't apply  life steal or on-hit effects.\n Fishbones damage: 110% AD (100% + 10%).\n Fishbones critical strike damage: 192.5% AD ((100% + 10%) × 1.75).\n Fishbones critical strike damage with  Infinity Edge: 236.5% AD ((100% + 10%) × 2.15).\n Fishbones  bolt damage: 60.5% AD ((100% + 10%) ×  0.55).\n Fishbones  bolt critical strike damage: 105.875% AD ((100% + 10%) ×  0.55 × 1.75).\n Fishbones  bolt critical strike damage with  Infinity Edge: 130.075% AD ((100% + 10%) ×  0.55 × 2.15).\n Fishbones potential damage on stacked enemies with  Runaan's Hurricane: 231% AD (110% + 60,5% + 60,5%).\n Fishbones potential critical strike damage on stacked enemies with  Runaan's Hurricane: 404.25% AD ((110% + 60,5% + 60,5%) × 1.75).\n Fishbones potential critical strike damage on stacked enemies with  Runaan's Hurricane and  Infinity Edge: 496.65% AD ((110% + 60,5% + 60,5%) × 2.15).",
        "blurb": "Toggle:  Jinx switches between Pow-Pow, her minigun, and Fishbones, her rocket launcher.",
        "castTime": "none",
        "effectRadius": "250",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Zap!",
        "icon": "https://cdn.communitydragon.org/latest/champion/Jinx/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jinx fires a shock blast in the target direction that deals physical damage to the first enemy it hits and reveals and slows them for 2 seconds.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      10,
                      60,
                      110,
                      160,
                      210
                    ]
                  },
                  {
                    "values": [
                      140
                    ],
                    "units": [
                      "% AD"
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
          8,
          7,
          6,
          5,
          4
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "Single target",
        "projectile": "TRUE",
        "notes": "This ability will cast from wherever the caster is at the start of the cast time.",
        "blurb": "Active:  Jinx fires a shock bolt in the target direction that deals physical damage to the first enemy hit,  slowing and  revealing them for a short time.",
        "speed": "3300",
        "width": "120",
        "castTime": "0.6 : 0.4 (based on bonus attack speed)",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Flame Chompers!",
        "icon": "https://cdn.communitydragon.org/latest/champion/Jinx/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jinx tosses out 3 Chompers centered at the target location, landing after 0.4 seconds, arming after 0.75 seconds, and exploding after 5 seconds to deal magic damage to nearby enemies.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      70,
                      120,
                      170,
                      220,
                      270
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
            "description": "Each Chomper explodes on contact with an enemy champion, knocking them down and rooting them for 1.5 seconds. Enemy champions can be affected by only one Chomper."
          },
          {
            "description": "Flame Chompers! will cast at max range if cast beyond that."
          }
        ],
        "cost": [
          90
        ],
        "cooldown": [
          24,
          20.5,
          17,
          13.5,
          10
        ],
        "targeting": "Location",
        "affects": "Enemies",
        "spellshieldable": "special",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "projectile": "SPECIAL",
        "notes": "Chompers will halt when encountering  Wind Wall and  Unbreakable.\n Spell shield does not negate the explosion.\nEach Chomper gives vision of its surrounding area.",
        "blurb": "Active:  Jinx tosses a line of Chompers at the target location that explode after a few seconds, dealing magic damage.",
        "collisionRadius": "115",
        "castTime": "none",
        "effectRadius": "225",
        "targetRange": "925",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Super Mega Death Rocket!",
        "icon": "https://cdn.communitydragon.org/latest/champion/Jinx/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jinx fires a massive rocket in the target direction, briefly granting sight of its surroundings and exploding upon colliding with an enemy champion. The explosion deals physical damage to nearby enemies and grants sight of the area for 2 seconds.</p>"
          },
          {
            "description": "Super Mega Death Rocket! deals 10% - 100% (based on distance traveled) damage. This does not affect the bonus damage based on the target's missing health.",
            "leveling": [
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
                      155
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  },
                  {
                    "values": [
                      25,
                      30,
                      35
                    ],
                    "units": [
                      "% of target's missing health"
                    ]
                  }
                ]
              },
              {
                "attribute": "Minimum Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      30,
                      45,
                      60
                    ]
                  },
                  {
                    "values": [
                      15.5
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  },
                  {
                    "values": [
                      25,
                      30,
                      35
                    ],
                    "units": [
                      "% of target's missing health"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Enemies surrounding the primary target take 80% damage. The bonus damage based on the target's missing health is capped at 1200 against monsters.",
            "leveling": [
              {
                "attribute": "Maximum Secondary Damage",
                "modifiers": [
                  {
                    "values": [
                      240,
                      360,
                      480
                    ]
                  },
                  {
                    "values": [
                      124
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  },
                  {
                    "values": [
                      20,
                      24,
                      28
                    ],
                    "units": [
                      "% of target's missing health"
                    ]
                  }
                ]
              },
              {
                "attribute": "Minimum Secondary Damage",
                "modifiers": [
                  {
                    "values": [
                      24,
                      36,
                      48
                    ]
                  },
                  {
                    "values": [
                      12.4
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  },
                  {
                    "values": [
                      20,
                      24,
                      28
                    ],
                    "units": [
                      "% of target's missing health"
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
          85,
          65,
          45
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "special",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "Area of effect",
        "projectile": "TRUE",
        "notes": "Spell shield will not prevent the explosion.\nSuper Mega Death Rocket's projectile has an  icon on the mini-map while it is in flight. It can be seen by only Jinx and her allies.\nThe bonus damage based on missing health is based on each unit's own missing health and not the primary target's.\nUnlike similar spells, Super Mega Death Rocket will not increase it's damage when ranked up while the missile is in flight.(note)\nThis is because the base damage is fixed at a multiple of the damage the rocket initially started with.\nThe bonus AD ratio will still update when AD is gained or lost between the cast and hit of the missile.\nThis ability will cast from wherever the caster is at the start of the cast time.",
        "blurb": "Active:  Jinx fires a rocket in the target direction that explodes upon the first enemy champion hit, dealing physical damage to the target and surrounding enemies.",
        "speed": "1700 / 2200",
        "width": "280",
        "castTime": "0.6",
        "effectRadius": "400 /  1000 / 1000",
        "targetRange": "Global",
        "maxCharges": -1
      }
    ]
  },
  "lore": "An unhinged and impulsive criminal from the undercity, Jinx is haunted by the consequences of her past—but that doesn't stop her from bringing her own chaotic brand of pandemonium to Piltover and Zaun. She uses her arsenal of DIY weapons to devastating effect, unleashing torrents of colorful explosions and gunfire, inspiring the disenfranchised to rebellion and resistance with the mayhem she leaves in her wake."
}
    export default champion