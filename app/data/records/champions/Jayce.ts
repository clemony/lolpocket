// Updated Patch 25.16 - 08/14/2025 07:55:49 PM CDT

const champion: Champion =  {
  "id": 126,
  "key": "Jayce",
  "name": "Jayce",
  "title": "the Defender of Tomorrow",
  "fullName": "Jayce Talis",
  "resource": "Mana",
  "attackType": "Ranged",
  "stats": {
    "health": {
      "flat": 590,
      "perLevel": 109
    },
    "healthRegen": {
      "flat": 6,
      "perLevel": 0.6
    },
    "mana": {
      "flat": 375,
      "perLevel": 45
    },
    "manaRegen": {
      "flat": 6,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 22,
      "perLevel": 5
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 59,
      "perLevel": 4.25
    },
    "movespeed": {
      "flat": 335
    },
    "acquisitionRadius": {
      "flat": 200
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
      "perLevel": 3
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
      "flat": -0.205
    },
    "attackRange": {
      "flat": 125
    }
  },
  "positions": [
    "Middle",
    "Top"
  ],
  "roles": [
    "Artillery",
    "Fighter",
    "Marksman"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 1,
    "mobility": 2,
    "utility": 2,
    "abilityReliance": 45,
    "difficulty": 3
  },
  "abilities": {
    "P": [
      {
        "name": "Hextech Capacitor",
        "icon": "https://cdn.communitydragon.org/latest/champion/Jayce/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Whenever Jayce switches between either Hammer Stance or Cannon Stance, he gains ghosting and 40 bonus movement speed for 0.75 seconds.</p>"
          }
        ],
        "targeting": "Passive",
        "affects": "Self",
        "notes": "No additional details.",
        "blurb": "Innate: Whenever  Jayce switches between  Hammer Stance and  Cannon Stance, he briefly gains  bonus movement speed and  ignores unit collision."
      }
    ],
    "Q": [
      {
        "name": "To the Skies!",
        "icon": "https://cdn.communitydragon.org/latest/champion/Jayce/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jayce leaps to the target enemy's location over 0.5 seconds. Upon arrival, he smashes his hammer to the ground to deal physical damage to all enemies within an area and slow them for 2 seconds.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      60,
                      105,
                      150,
                      195,
                      240,
                      285
                    ]
                  },
                  {
                    "values": [
                      135
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
                      35,
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
            "description": "Lightning Field can be cast during the dash."
          }
        ],
        "cost": [
          40
        ],
        "cooldown": [
          16,
          14,
          12,
          10,
          8,
          6
        ],
        "targeting": "Unit",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "spellaoe",
        "notes": "To The Skies! will always direct Jayce linearly to his target's location.",
        "blurb": "Active:  Jayce leaps to the target enemy's location and smashes his hammer to the ground, dealing physical damage and  slowing nearby enemies.",
        "castTime": "none",
        "effectRadius": "300",
        "targetRange": "600",
        "maxCharges": -1
      },
      {
        "name": "Shock Blast",
        "icon": "https://cdn.communitydragon.org/latest/champion/Jayce/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jayce fires an electric bolt in the target direction that detonates upon hitting an enemy or reaching maximum range, dealing physical damage to nearby enemies and granting sight of the area for 1.25 seconds.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      60,
                      110,
                      160,
                      210,
                      260,
                      310
                    ]
                  },
                  {
                    "values": [
                      140
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
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">If the bolt passes through Acceleration Gate, it becomes supercharged:</span> increasing its damage by 40% as well as its speed, range and explosion radius.</p>",
            "leveling": [
              {
                "attribute": "Increased Damage",
                "modifiers": [
                  {
                    "values": [
                      84,
                      154,
                      224,
                      294,
                      364,
                      434
                    ]
                  },
                  {
                    "values": [
                      196
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
          40
        ],
        "cooldown": [
          16,
          14,
          12,
          10,
          8,
          6
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "true",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "aoe",
        "projectile": "TRUE",
        "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nUpon touching  Acceleration Gate, the enhanced missile gains its remaining range equal to [ 1600 units - travelled distance of the standard missile ].\nThis means that the range of the enhanced Shock Blast is always the same, regardless of how early or late it interacted with Acceleration Gate.\nSupercharging the Shock Blast as soon as possible, however, will improve its average speed significantly.\nFor this, Jayce must stand inside or very close to the Acceleration Gate, or place it very close to himself right after Shock Blast's cast time.\nShock Blast's effect radius is centered around the location of the missile as it collides.\nShock Blast will always damage the enemy it collided with, even if it is so large that it is outside the effect radius.\nThe non-enhanced Shock Blast detonation has a slightly smaller sight radius than the radius in which it deals damage.(note)",
        "blurb": "Active:  Jayce fires an electric bolt in the target direction that detonates upon hitting an enemy or max range, dealing physical damage to nearby enemies.",
        "speed": "1450 / 2350",
        "width": "140",
        "castTime": "0.2143",
        "effectRadius": "170 / 250 /  160 / 250",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Lightning Field",
        "icon": "https://cdn.communitydragon.org/latest/champion/Jayce/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Jayce's basic attacks restore mana on-hit.</p>",
            "leveling": [
              {
                "attribute": "Mana Restored",
                "modifiers": [
                  {
                    "values": [
                      15,
                      17,
                      19,
                      21,
                      23,
                      25
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jayce surrounds himself with an electric field for 4 seconds that deals magic damage every second to nearby enemies.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage Per Tick",
                "modifiers": [
                  {
                    "values": [
                      35,
                      50,
                      65,
                      80,
                      95,
                      110
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
                      140,
                      200,
                      260,
                      320,
                      380,
                      440
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
          }
        ],
        "cost": [
          40
        ],
        "cooldown": [
          10
        ],
        "targeting": "Auto",
        "affects": "Self, Enemies",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "aoedot",
        "notes": "The  mana restore triggers on structures.",
        "blurb": "Passive:  Jayce's basic attacks restore  mana.",
        "castTime": "none",
        "effectRadius": "350",
        "maxCharges": -1
      },
      {
        "name": "Hyper Charge",
        "icon": "https://cdn.communitydragon.org/latest/champion/Jayce/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jayce empowers his next 3 basic attacks within 4 seconds to deal modified physical damage and gain 360% bonus attack speed.Hyper Charge's total damage is affected by critical strike modifiers.</p>",
            "leveling": [
              {
                "attribute": "Damage Modifier",
                "modifiers": [
                  {
                    "values": [
                      70,
                      78,
                      86,
                      94,
                      102,
                      110
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
            "description": "Hyper Charge resets Jayce's basic attack timer."
          }
        ],
        "cost": [
          40
        ],
        "cooldown": [
          10
        ],
        "targeting": "Auto",
        "affects": "Self",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "Proc",
        "notes": "The last basic attack is checked on-hit rather than on-attack.\nIf  Runaan's Hurricane or  Guinsoo's Rageblade hit the target before the basic attack does, the basic attack damage will not be modified.",
        "blurb": "Active:  Jayce gains a massive burst of  bonus attack speed on his next few basic attacks, each one dealing modified physical damage.",
        "castTime": "none",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Thundering Blow",
        "icon": "https://cdn.communitydragon.org/latest/champion/Jayce/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jayce roots the target enemy over the cast time, then swings his hammer at them to deal magic damage, capped against monsters, and knock them back 600 units.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      8,
                      10.8,
                      13.6,
                      16.4,
                      19.2,
                      22
                    ],
                    "units": [
                      "% of target's maximum health"
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
                "attribute": "Maximum Monster Damage",
                "modifiers": [
                  {
                    "values": [
                      200,
                      300,
                      400,
                      500,
                      600,
                      700
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Jayce is unable to cast To the Skies! or Shock Blast for 0.4 seconds after Thundering Blow's cast time."
          }
        ],
        "cost": [
          55
        ],
        "cooldown": [
          20,
          18,
          16,
          14,
          12,
          10
        ],
        "targeting": "Unit",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "single",
        "notes": "If the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
        "blurb": "Active:  Jayce swings his hammer at the target enemy, dealing magic damage based on the target's maximum health and  knocking them back.",
        "castTime": "0.25",
        "targetRange": "240",
        "maxCharges": -1
      },
      {
        "name": "Acceleration Gate",
        "icon": "https://cdn.communitydragon.org/latest/champion/Jayce/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jayce deploys an energy gate centered at the target location, lasting for 4 seconds and granting sight of its surroundings. Jayce and all allied champions can move through it to gain bonus movement speed that decays over 3 seconds.</p>",
            "leveling": [
              {
                "attribute": "Bonus Movement Speed",
                "modifiers": [
                  {
                    "values": [
                      35,
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
            "description": "The buff is continuously refreshed while inside the gate."
          }
        ],
        "cost": [
          55
        ],
        "cooldown": [
          20,
          18,
          16,
          14,
          12,
          10
        ],
        "targeting": "Location",
        "affects": "Allies",
        "resource": "Mana",
        "notes": "The Gate grants the bonus in an area  750 units wide and  100 units thick.",
        "blurb": "Active:  Jayce deploys an energy gate centered at the target location for a few seconds. All allied champions that touch the gate will gain a burst of  movement speed.",
        "width": "750",
        "castTime": "none",
        "targetRange": "650",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Transform Mercury Cannon",
        "icon": "https://cdn.communitydragon.org/latest/champion/Jayce/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jayce transforms into Cannon Stance, receiving access to its abilities, becoming ranged with 500 attack range, and empowering his next basic attack to reduce the target's armor and magic resistance by 10% / 15% / 20% / 25% (based on level) for 5 seconds.</p>"
          },
          {
            "description": "Jayce begins the game with Transform but cannot increase its rank. Instead, his basic abilities each have 6 ranks."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          6
        ],
        "targeting": "Auto",
        "affects": "Self",
        "notes": "Transformations do not count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nThe resistance reduction does not apply to structures.\nBoth Transform on-hit effects have no set duration and will only be consumed when Jayce either lands a basic attack or switches stances.\nThe enhanced attack will not be consumed if it is parried ( dodge,  block,  blind, and  Riposte).\nThe empowered attack will not trigger against structures nor wards.",
        "blurb": "Active:  Jayce transforms into  Cannon Stance, becoming  ranged with greater  attack range and gaining new abilities.",
        "castTime": "none",
        "maxCharges": -1
      },
      {
        "name": "Transform Mercury Hammer",
        "icon": "https://cdn.communitydragon.org/latest/champion/Jayce/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jayce transforms into Hammer Stance, receiving access to its abilities, becoming melee with 125 attack range, gaining 5 / 15 / 25 / 35 (based on level) (+ 7.5% bonus AD) bonus armor and bonus magic resistance, and empowering his next basic attack to deal 25 / 60 / 95 / 130 (based on level) (+ 30% bonus AD) bonus magic damage.</p>"
          },
          {
            "description": "Jayce begins the game with Transform but cannot increase its rank. Instead, his basic abilities each have 6 ranks."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          6
        ],
        "targeting": "Auto",
        "affects": "Self",
        "notes": "Transformations do not count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nThe enhanced attack will not be consumed if it is parried ( dodge,  block,  blind, and  Riposte).\nThe Mercury Hammer's bonus damage can affect structures.\nBoth Transform on-hit effects have no set duration and will only be consumed when Jayce either lands a basic attack or switches stances.\nThe empowered attack will not trigger against wards.",
        "blurb": "Active:  Jayce transforms into  Hammer Stance, becoming  melee and gaining new abilities.",
        "castTime": "none",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Jayce Talis is a brilliant inventor who, along with his friend Viktor, made the first great discoveries in the field of hextech. Celebrated across Piltover, he tries to live up to his reputation as \"the Man of Progress,\" but often struggles with the expectations placed upon him. Because of this, Jayce has begun to see the ways in which his invention has furthered the division between Piltover and Zaun—and armed with his hextech hammer, he stands ready to defend tomorrow."
}
    export default champion