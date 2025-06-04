 export const AurelionSol: Champion =  {
  "id": 136,
  "key": "AurelionSol",
  "name": "Aurelion Sol",
  "title": "The Star Forger",
  "resource": "Mana",
  "attackType": "Ranged",
  "stats": {
    "health": {
      "flat": 600,
      "perLevel": 90
    },
    "healthRegen": {
      "flat": 5.5,
      "perLevel": 0.55
    },
    "mana": {
      "flat": 530,
      "perLevel": 40
    },
    "manaRegen": {
      "flat": 8,
      "perLevel": 0.75
    },
    "armor": {
      "flat": 22,
      "perLevel": 4
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 58,
      "perLevel": 3.2
    },
    "movespeed": {
      "flat": 335
    },
    "acquisitionRadius": {
      "flat": 400
    },
    "selectionRadius": {
      "flat": 150
    },
    "pathingRadius": {
      "flat": 35
    },
    "gameplayRadius": {
      "flat": 80
    },
    "criticalStrikeDamage": {
      "flat": 175
    },
    "criticalStrikeDamageModifier": {
      "flat": 1
    },
    "attackSpeed": {
      "flat": 0.625,
      "perLevel": 1.5
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
      "flat": 550
    }
  },
  "positions": [
    "Middle"
  ],
  "roles": [
    "Battlemage",
    "Mage"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 2,
    "mobility": 2,
    "utility": 1,
    "abilityReliance": 100,
    "difficulty": 3
  },
  "abilities": {
    "P": [
      {
        "name": "Cosmic Creator",
        "icon": "https://cdn.communitydragon.org/latest/champion/AurelionSol/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Aurelion Sol's damaging abilities against enemies generate him permanent stacks of Stardust, which gradually augments his abilities.</p>\n<p class=\"ability-effect\"><span class=\"ability-header\"> Breath of Light:</span> Bursts deal bonus magic damage based on the target's maximum health.</p>\n<p class=\"ability-effect\"><span class=\"ability-header\"> Astral Flight:</span> Range is increased equal to 62.5% Stardust.</p>\n<p class=\"ability-effect\"><span class=\"ability-header\"> Singularity:</span> Outer and inner radius increased equal to 15% Stardust, and the execution threshold is increased.</p>\n<p class=\"ability-effect\"><span class=\"ability-header\"> Falling Star / The Skies Descend:</span> Impact radius increased equal to 15% Stardust.</p>"
          }
        ],
        "targeting": "Passive",
        "affects": "Self",
        "notes": "Singularity's relative size and ratio stays the same when affected by Cosmic Creator's size modifier.",
        "blurb": "Innate:  Aurelion Sol's damaging abilities against enemies generate him permanent stacks of Stardust, which gradually augments his abilities.\n Breath of Light's bursts deal bonus magic damage based on the target's maximum health.\n Astral Flight's distance is increased.\n Singularity's area and execute threshold are increased.\n Falling Star/ The Skies Descend has increased impact area."
      }
    ],
    "Q": [
      {
        "name": "Breath of Light",
        "icon": "https://cdn.communitydragon.org/latest/champion/AurelionSol/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Aurelion Sol charges for up to 3.25 seconds to exhale a beam of starfire, during which he can steer the beam in the target direction. The beam collides with the first enemy hit to reveal them and deal magic damage every 0.125 seconds, reduced to 50% for other surrounding enemies hit by the beam.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage per Tick",
                "modifiers": [
                  {
                    "values": [
                      5.625,
                      7.5,
                      9.375,
                      11.25,
                      13.125
                    ]
                  },
                  {
                    "values": [
                      6.875
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Reduced Damage per Tick",
                "modifiers": [
                  {
                    "values": [
                      2.8125,
                      3.75,
                      4.6875,
                      5.625,
                      6.5625
                    ]
                  },
                  {
                    "values": [
                      3.4375
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Total Maximum Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      146.25,
                      195,
                      243.75,
                      292.5
                    ]
                  },
                  {
                    "values": [
                      178.75
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
            "description": "The beam will deal a burst of bonus magic damage for each full second that it damages the same enemy, and generates 2 Stardust if the target is a champion. The damage based on the target's health ratio is capped at 300 against monsters.",
            "leveling": [
              {
                "attribute": "Bonus Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      55,
                      65,
                      75,
                      85,
                      95
                    ],
                    "units": [
                      "  (+ (3.1% Stardust)% of target's maximum health"
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
            "description": "Breath of Light can be recast within the duration, and does so automatically afterwards."
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Aurelion Sol ends Breath of Light early.</p>"
          },
          {
            "description": "At rank 5, Breath of Light's channel duration is increased to 160 seconds."
          }
        ],
        "cost": [
          35,
          40,
          45,
          50,
          55
        ],
        "cooldown": [
          3
        ],
        "targeting": "Direction",
        "affects": "Self, Enemies",
        "spellshieldable": "special",
        "resource": "Other",
        "damageType": "Magic damage",
        "spellEffects": "special",
        "projectile": "FALSE",
        "notes": "Applies  spell damage on the burst and  persistent area damage on the beam.\nBreath of Light's bursts against an enemy champion will aggro nearby enemy minions.\nBreath of Light places a timer on each target, which ticks in 0.2 second intervals. Thus, at [ 5 completed intervals ][ 1 full second ], the burst damage is procced.\nThe timer's visuals themselves otherwise serve no other purpose than gameplay clarity.\nThe timer falls off and resets to zero immediately upon no longer damaging affected targets.\n Spell shield will only block the burst damage.\nThe following table refers to interactions while Aurelion Sol is  charging.\n\n\nType\n\nChannel\n\n\nAttacking\n\nInterrupts\n\n\nAbilities\n\nInterrupts\n\n\nMovement\n\nInterrupts\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Teleport\n\n\nInterrupted by\n\n Flash  Recall  Hexflash\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
        "castTime": "none",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Astral Flight",
        "icon": "https://cdn.communitydragon.org/latest/champion/AurelionSol/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Aurelion Sol dashes in the target direction and resets Breath of Light's cooldown. During flight, he has unobstructed vision and Breath of Light has no cooldown and maximum channel duration and its flat damage is increased, but Astral Flight's dash speed is reduced by 50% during its channel.</p>",
            "leveling": [
              {
                "attribute": "Breath of Light Flat Damage Modifier",
                "modifiers": [
                  {
                    "values": [
                      108,
                      109,
                      110,
                      111,
                      112
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
            "description": "Aurelion Sol will be knocked down by any immobilizing crowd control during the dash."
          },
          {
            "description": "Astral Flight can be recast after 0.5 seconds during the dash, and does so automatically upon arrival."
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Aurelion Sol ends Astral Flight.</p>"
          },
          {
            "description": "Scoring a champion takedown within 3 seconds of damaging them reduces Astral Flight's current cooldown by 90% of its total cooldown."
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
          0
        ],
        "targeting": "Direction",
        "affects": "Self",
        "resource": "Mana",
        "notes": "If a  takedown is scored while Astral Flight is active, the cooldown will be reduced after it ends.\nAstral Flight cannot be used in the first 15 seconds of the game.\nThe following table refers for interactions while Aurelion Sol is  dashing:\n\n\nAttacking\n\nInterrupts\n\n\nAbilities\n\nAllowed\n\n\nMovement\n\nInterrupts\n\n\nItems\n\nUsable\n\nAll the other item-actives are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Zhonya's Hourglass  Hextech Rocketbelt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Hexflash\n\n\nDisabled\n\n Teleport  Recall\n\n\nInterrupted by\n\n Flash\n\n\nInterrupted by\n\nDeath Immobilizing effects",
        "blurb": "Active:  Aurelion Sol  flies in the target direction. During flight, he can cast any of his abilities, and  Breath of Light has no  cooldown, no maximum channel duration, and its flat damage is increased.  Aurelion Sol flies at a reduced speed while channeling  Breath of Light.",
        "speed": "335 + 100% movement speed / 167.5 + 50% movement speed",
        "castTime": "0.4",
        "targetRange": "1500 (+ 7.5  ×  Stardust)",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Singularity",
        "icon": "https://cdn.communitydragon.org/latest/champion/AurelionSol/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Aurelion Sol conjures a black hole at the target location after a 0.5-second delay that lasts for 5 seconds, granting sight of the area and dealing magic damage every 0.25 seconds to enemies within.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage per Tick",
                "modifiers": [
                  {
                    "values": [
                      2.5,
                      3.75,
                      5,
                      6.25,
                      7.5
                    ]
                  },
                  {
                    "values": [
                      3
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
                      50,
                      75,
                      100,
                      125,
                      150
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
            "description": "Enemies in the black hole are dragged inward until they reach the center, and minions and monsters also have their movement speed reduced to 0. Enemies within the center are executed below 5% (+ 2.6% Stardust)% of their maximum health, excluding epic monsters."
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">After Singularity ends, it generates 1 Stardust for each full second that enemy champions were inside it, as well as varying amounts for enemy units that were killed while being within the area:</span></p>\nChampions and epic monsters grant 2 Stardust.\nLarge minions and monsters grant 2 Stardust.\nSmall minions and monsters grant 1 Stardust."
          },
          {
            "description": "Singularity will cast at max range if cast within 200 units beyond. During Astral Flight, it will cast at max range if cast at any range beyond."
          }
        ],
        "cost": [
          90
        ],
        "cooldown": [
          12
        ],
        "targeting": "Location",
        "affects": "Enemies",
        "spellshieldable": "special",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "aoedot",
        "notes": "The damage area hits targets by their  edge, while the  kinematics area hits targets by their  center. This makes a slight fringe where targets may be damaged without displacing them.\n Spell shield will block a single instance of damage.\nSingularity's execute against an enemy champion will aggro nearby enemy minions.",
        "blurb": "Active:  Aurelion Sol conjures a black hole at the target location for a few seconds that continually deals magic damage to enemies within. Enemies in the black hole are  dragged toward the center. Enemies within the center are  executed at low health.",
        "innerRadius": "√(137.5² + 8.46²  ×  Stardust)",
        "castTime": "0.2",
        "effectRadius": "√(275² + 16.93²  ×  Stardust)",
        "targetRange": "750 : 920 (based on level)",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Falling Star",
        "icon": "https://cdn.communitydragon.org/latest/champion/AurelionSol/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Aurelion Sol calls down a star that strikes the target location after 1.25 seconds, dealing magic damage to enemies hit and stunning them for 1 second. This generates 5 Stardust for each enemy champion hit.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      150,
                      250,
                      350
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
            "description": "Once Falling Star has been learned, gathering 75 Stardust causes the next cast of Falling Star to transform into The Skies Descend, empowering the impact with new effects."
          },
          {
            "description": "Falling Star will cast at max range if cast within 200 units beyond that. During Astral Flight, it will do so at any range beyond the max."
          }
        ],
        "cost": [
          100
        ],
        "cooldown": [
          120,
          110,
          100
        ],
        "targeting": "Location",
        "affects": "Enemies",
        "spellshieldable": "true",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "projectile": "FALSE",
        "notes": "Aurelion Sol will transform Falling Star into  The Skies Descend each time he gathers 75 Stardust from the last time he used the empowered cast, or once he has gathered that amount after learning the ability.\nStardust required for transformation is denoted by a progress bar over Falling Star in the HUD.",
        "blurb": "Active:  Aurelion Sol calls down a star that strikes the target location, dealing magic damage and briefly  stunning enemies hit. This generates Stardust for each enemy champion hit.",
        "castTime": "none",
        "effectRadius": "√(275² + 16.93²  ×  Stardust)",
        "targetRange": "1250",
        "maxCharges": -1
      },
      {
        "name": "The Skies Descend",
        "icon": "https://cdn.communitydragon.org/latest/champion/AurelionSol/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Aurelion Sol calls down a giant star that strikes the target location after 2 seconds, dealing 25% increased damage in a larger area and knocking up enemies hit for 1 second.</p>",
            "leveling": [
              {
                "attribute": "Empowered Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      187.5,
                      312.5,
                      437.5
                    ]
                  },
                  {
                    "values": [
                      93.75
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
            "description": "Additionally, the impact sends a massive shockwave that rapidly expands from the area over 3 seconds, dealing magic damage to enemy champions and epic monsters hit, slowing all enemies hit by 50% for 1 second, and revealing them for 1.5 seconds.",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      135,
                      225,
                      315
                    ]
                  },
                  {
                    "values": [
                      67.5
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
            "description": "The Skies Descend will cast at max range if cast within 200 units beyond that. During Astral Flight, it will do so at any range beyond the max. Enemies hit by the star are immune to the shockwave."
          }
        ],
        "cost": [
          100
        ],
        "cooldown": [
          120,
          110,
          100
        ],
        "targeting": "Location",
        "affects": "Enemies",
        "spellshieldable": "true",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "projectile": "FALSE",
        "notes": "The shockwave radius and path are globally visible on the minimap.\nThe shockwave's radius is fixed.\nThe shockwave is not blocked.",
        "blurb": "Active:  Aurelion Sol calls down a giant star that strikes the target location, dealing  increased magic damage in a larger area and briefly   knocking up enemies hit.",
        "innerRadius": "√(388.91² + 21.85²  ×  Stardust)",
        "effectRadius": "5000",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Aurelion Sol once graced the vast emptiness of the cosmos with celestial wonders of his own devising. Now, he is forced to wield his awesome power at the behest of a space-faring empire that tricked him into servitude. Desiring a return to his star-forging ways, Aurelion Sol will drag the very stars from the sky, if he must, in order to regain his freedom."
}
