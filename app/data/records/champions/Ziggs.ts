// Updated Patch 25.11 - 06/06/2025 12:19:17 PM CDT

const champion: Champion =  {
  "id": 115,
  "key": "Ziggs",
  "name": "Ziggs",
  "title": "the Hexplosives Expert",
  "fullName": "Zigmund",
  "resource": "Mana",
  "attackType": "Ranged",
  "stats": {
    "health": {
      "flat": 606,
      "perLevel": 106
    },
    "healthRegen": {
      "flat": 6.5,
      "perLevel": 0.6
    },
    "mana": {
      "flat": 480,
      "perLevel": 23.5
    },
    "manaRegen": {
      "flat": 8,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 21,
      "perLevel": 4.7
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 55,
      "perLevel": 3.1
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
      "perLevel": 2
    },
    "attackSpeedRatio": {
      "flat": 0.656
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
      "flat": 550
    }
  },
  "positions": [
    "Bottom",
    "Middle"
  ],
  "roles": [
    "Artillery",
    "Mage"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 2,
    "mobility": 2,
    "utility": 1,
    "abilityReliance": 90,
    "difficulty": 2
  },
  "abilities": {
    "P": [
      {
        "name": "Short Fuse",
        "icon": "https://cdn.communitydragon.org/latest/champion/Ziggs/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Periodically, Ziggs empowers his next basic attack to deal 20 - 160 (based on level) (+ 50% AP) bonus magic damage,[ increased by 75% against structures. ][ increased to 35 - 280 (based on level) (+ 87.5% AP) against structures. ]</p>"
          },
          {
            "description": "Short Fuse's cooldown is reduced by 4 / 5 / 6 (based on level) seconds whenever Ziggs casts an ability."
          }
        ],
        "targeting": "Passive",
        "affects": "Enemies",
        "spellshieldable": "False",
        "damageType": "Magic damage",
        "spellEffects": "Proc",
        "notes": "The empowered attack will not trigger against wards.\nPENDING FOR TEST:: Short Fuse's interactions with  dodging,  blocking, and  blinding effects.",
        "blurb": "Innate: Periodically,  Ziggs' next basic attack will deal bonus magic damage, increased against structures.",
        "speed": "1500"
      }
    ],
    "Q": [
      {
        "name": "Bouncing Bomb",
        "icon": "https://cdn.communitydragon.org/latest/champion/Ziggs/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ziggs throws a bomb to the target location that bounces forward up to two times, with the distance traveled each time being based on how far it was originally thrown.</p>"
          },
          {
            "description": "The bomb explodes upon landing near an enemy, within terrain, or the final bounce, dealing magic damage to nearby enemies.",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      85,
                      135,
                      185,
                      235,
                      285
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
          },
          {
            "description": "Bouncing Bomb will cast at max range if cast beyond that."
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
          6,
          5.5,
          5,
          4.5,
          4
        ],
        "targeting": "Location",
        "affects": "Enemies",
        "spellshieldable": "true",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "projectile": "TRUE",
        "notes": "Bouncing Bomb can be thrown or bounce over units/terrain.\n Spell shield will block the damage of the explosion, but the explosion can still damage other targets in the radius.\nZiggs will throw the bomb from his location at the end of the cast time, towards the pre-clamped cast location, causing the bounces to adjust their angle accordingly.",
        "blurb": "Active:  Ziggs throws a bomb to the target location that bounces twice forward. It will explode upon hitting an enemy, terrain, or the final bounce, dealing magic damage to nearby enemies.",
        "collisionRadius": "180",
        "speed": "1700 / Fixed time",
        "castTime": "0.25",
        "effectRadius": "240",
        "targetRange": "850",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Satchel Charge",
        "icon": "https://cdn.communitydragon.org/latest/champion/Ziggs/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ziggs hurls a charge to the target location, remaining there for 4 seconds and granting sight of the area. Satchel Charge can be recast within the duration, and does so automatically afterwards. If recast while in flight, the charge will explode immediately upon landing.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Ziggs detonates the charge, causing it to explode to deal magic damage to nearby enemies and knock them back over 0.5 seconds up to 500 units away from the center of the explosion, though not through terrain. If this hits Ziggs, he will dash up to 825 units away from the center.</p>",
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
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Turret Explosion:</span> The explosion also executes enemy turrets within that are below a maximum health threshold.</p>",
            "leveling": [
              {
                "attribute": "Demolition Threshold",
                "modifiers": [
                  {
                    "values": [
                      25,
                      27.5,
                      30,
                      32.5,
                      35
                    ],
                    "units": [
                      "% of turret's maximum health"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Ziggs does not dash if he is immobilized or grounded. He can cast any of his abilities during the dash."
          }
        ],
        "cost": [
          80
        ],
        "cooldown": [
          20,
          18,
          16,
          14,
          12
        ],
        "targeting": "Location / Auto",
        "affects": "Enemies / Self",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "special",
        "projectile": "TRUE",
        "notes": "The initial cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nDetonating the ability manually does not.\nDeals  area damage to non-turrets and  raw damage to turrets.\nSatchel Charge's distance increases with proximity to the charge, resulting in being knocked straight up when aligned directly on top of it.\nZiggs will not dash from Satchel Charge's detonation while  Teleporting but he will while  Recalling.",
        "blurb": "Active:  Ziggs hurls a charge to the target location that remains for a few seconds. Satchel Charge can be recast within the duration, and does so automatically afterwards.",
        "speed": "1750",
        "castTime": "0.25",
        "effectRadius": "325 /  400",
        "targetRange": "1000",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Hexplosive Minefield",
        "icon": "https://cdn.communitydragon.org/latest/champion/Ziggs/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ziggs scatters a cluster of 11 proximity mines over the target location that grant sight of the area for 2 seconds, arming after 0.5 seconds and lasting for up to 10 seconds.</p>"
          },
          {
            "description": "Each mine within the area explodes upon contact with terrain or an enemy, dealing magic damage and slowing them for 1.5 seconds, as well as granting sight of the area around the explosion for 2 seconds. An enemy takes 40% damage from subsequent mines.",
            "leveling": [
              {
                "attribute": "Magic Damage per Mine",
                "modifiers": [
                  {
                    "values": [
                      30,
                      70,
                      110,
                      150,
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
              },
              {
                "attribute": "Reduced Damage per Mine",
                "modifiers": [
                  {
                    "values": [
                      12,
                      28,
                      44,
                      60,
                      76
                    ]
                  },
                  {
                    "values": [
                      12
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Maximum Total Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      150,
                      350,
                      550,
                      750,
                      950
                    ]
                  },
                  {
                    "values": [
                      150
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Slow",
                "modifiers": [
                  {
                    "values": [
                      10,
                      20,
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
          16
        ],
        "targeting": "Location",
        "affects": "Enemies",
        "spellshieldable": "Special",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "projectile": "TRUE",
        "notes": "The mine cluster is built of 2 rings, with 3 mines in the inner ring (radius pending for test) and 8 mines on the other ring (200 radius), all equally spaced.\nThe angular offset is randomized on each cast.\nBecause of the  135 detonation radius of each mine, the total possible range of a mine from the minefield hitting an enemy from the cast location is  335 units. It will often be slightly less as the minefield is not guaranteed to be angled the right way for this.\nMines will not explode upon contact with player-generated terrain.\n Spell shield will block the effects of a single detonation.",
        "blurb": "Active:  Ziggs scatters proximity mines over the target location that remain a period. Each mine will explode upon contact with an enemy or terrain, dealing magic damage and briefly  slowing them.",
        "speed": "1550",
        "castTime": "0.25",
        "effectRadius": "335 /  135",
        "targetRange": "900",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Mega Inferno Bomb",
        "icon": "https://cdn.communitydragon.org/latest/champion/Ziggs/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ziggs catapults the Mega Inferno Bomb to the target location, granting sight within a 600 radius around its destination for 4 seconds.</p>"
          },
          {
            "description": "The bomb explodes upon arrival to deal magic damage to enemies hit, increased by 50% against those in the epicenter.",
            "leveling": [
              {
                "attribute": "Magic Damage",
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
                      73.33
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Increased Damage",
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
                      110
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
          120,
          95,
          70
        ],
        "targeting": "Location",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "aoe",
        "projectile": "FALSE",
        "notes": "Allies cannot see Mega Inferno Bomb's area indicator until shortly before the blast.\nMega Inferno Bomb takes 2.64 seconds from the start of the cast time to land when Ziggs casts at maximum range (reduced to 1.617 seconds from the start of the cast time when casting within 2700 units).\nWhen cast within 2700 units, Mega Inferno Bomb has a fixed travel time. Beyond that, the travel time is equal to the cast distance divided by the now-fixed missile speed.\nThe area reveal on the target location begins as soon as the cast time is completed and can see into  brush and across terrain.",
        "blurb": "Active:  Ziggs catapults the Mega Inferno Bomb to the target location that deals magic damage to enemies hit, increased at the epicenter.",
        "innerRadius": "250",
        "speed": "2250",
        "castTime": "0.375",
        "effectRadius": "525",
        "targetRange": "5000",
        "maxCharges": -1
      }
    ]
  },
  "lore": "With a love of big bombs and short fuses, the yordle Ziggs is an explosive force of nature. As an inventor's assistant in Piltover, he was bored by his predictable life and befriended a mad, blue-haired bomber named Jinx. After a wild night on the town, Ziggs took her advice and moved to Zaun, where he now explores his fascinations more freely, terrorizing the chem-barons and regular citizens alike in his never ending quest to blow stuff up."
}
    export default champion