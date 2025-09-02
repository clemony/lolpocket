// Updated Patch 25.17 - 09/01/2025 05:26:16 PM CDT

const champion: Champion = {
  "id": 8,
  "key": "Vladimir",
  "name": "Vladimir",
  "title": "the Crimson Reaper",
  "resource": "Crimson rush",
  "attackType": "Ranged",
  "adaptiveType": "Magic damage",
  "stats": {
    "health": {
      "flat": 607,
      "perLevel": 110
    },
    "healthRegen": {
      "flat": 7,
      "perLevel": 0.6
    },
    "mana": {
      "flat": 2
    },
    "armor": {
      "flat": 27,
      "perLevel": 4.5
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 55,
      "perLevel": 3
    },
    "movespeed": {
      "flat": 330
    },
    "acquisitionRadius": {
      "flat": 600
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
      "perLevel": 2
    },
    "attackSpeedRatio": {
      "flat": 0.658
    },
    "attackCastTime": {
      "flat": 0.3
    },
    "attackTotalTime": {
      "flat": 1.52
    },
    "attackDelayOffset": {
      "flat": -0.072
    },
    "attackRange": {
      "flat": 450
    }
  },
  "positions": [
    "Middle",
    "Top"
  ],
  "roles": [
    "Battlemage",
    "Fighter",
    "Mage"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 2,
    "control": 1,
    "mobility": 1,
    "utility": 1,
    "abilityReliance": 100,
    "difficulty": 3
  },
  "abilities": {
    "P": [
      {
        "name": "Crimson Pact",
        "icon": "https://cdn.communitydragon.org/latest/champion/Vladimir/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Vladimir gains (3.3% bonus health) as ability power and (160% AP) as bonus health. These two bonuses do not stack with each other.</p>"
          }
        ],
        "targeting": "Passive",
        "affects": "Self",
        "notes": "Crimson Pact only affects Vladimir's maximum health and will not increase Vladimir's current health to prevent Vladimir from restoring health whenever his AP fluctuates.\nVladimir's current health can decrease to match his maximum health if Crimson Pact's bonus health is lost.\nCrimson Pact's bonus ability power  stacks multiplicatively with other sources of % ability power but its bonus health  stacks additively with other sources of bonus health. With  Rabadon's Deathcap's Magical Opus, the total is (35% AP + 4.49955% bonus health) bonus ability power and (216% AP + 1.86648% bonus health) bonus health.",
        "blurb": "Innate:  Vladimir gains  ability power based on his bonus health, and  bonus health based on his ability power."
      }
    ],
    "Q": [
      {
        "name": "Transfusion",
        "icon": "https://cdn.communitydragon.org/latest/champion/Vladimir/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Vladimir drains blood from the target enemy, dealing magic damage and healing himself. He then generates 1 point of Crimson Rush over the cooldown.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      80,
                      100,
                      120,
                      140,
                      160
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
              },
              {
                "attribute": "Heal",
                "modifiers": [
                  {
                    "values": [
                      20,
                      25,
                      30,
                      35,
                      40
                    ]
                  },
                  {
                    "values": [
                      35
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
            "description": "At 2 points of Crimson Rush, Vladimir surges, gaining 10% / 20% / 30% / 40% (based on level) bonus movement speed decaying over 0.5 seconds while the Crimson Rush depletes over 2.5 seconds. Crimson Rush depletes 75% slower during Sanguine Pool, Tides of Blood, or stasis."
          },
          {
            "description": "Casting Transfusion during the surge consumes all Crimson Rush to deal 85% increased damage and heal Vladimir for an additional 30 - 200 (based on level) (+ 5% (+ 4% per 100 AP) of his missing health). The bonus healing is reduced to[ 35% ][ 10.5 - 70 (based on level) (+ 1.75% (+ 1.4% per 100 AP) of his missing health) ]against minions.",
            "leveling": [
              {
                "attribute": "Increased Damage",
                "modifiers": [
                  {
                    "values": [
                      148,
                      185,
                      222,
                      259,
                      296
                    ]
                  },
                  {
                    "values": [
                      111
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
          9,
          7.9,
          6.8,
          5.7,
          4.6
        ],
        "targeting": "Unit",
        "affects": "Self, Enemies",
        "spellshieldable": "True",
        "damageType": "Magic damage",
        "spellEffects": "Single target",
        "projectile": "FALSE",
        "notes": "Even though the healing effect is visualized as a projectile, the healing itself triggers instantly.\nVladimir's resource bar indicates his current  Crimson Rush and changes colors depending on the charge-up stage of his surge.\nWhite while generating the first stack and while at 1 stack (there is no time-out period).\nOrange while generating the second stack.\nRed while he is surging (Crimson Rush will deplete over 2.5 seconds once triggered).\nEach stack generates over-time (Transfusion's cooldown).\nVladimir can cast  Sanguine Pool and  Hemoplague during Transfusion's cast time.\nThe  Crimson Rush depletes normally while under  resurrection effects.",
        "blurb": "Active:  Vladimir drains blood from the target enemy, dealing magic damage and  healing himself. He then generates 1 point of  Crimson Rush over the  cooldown.",
        "castTime": "0.25",
        "targetRange": "600",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Sanguine Pool",
        "icon": "https://cdn.communitydragon.org/latest/champion/Vladimir/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Vladimir sinks into a pool of blood, becoming untargetable and ghosted for 2 seconds. He also gains 37.5% bonus movement speed that decays exponentially over 1 second.</p>"
          },
          {
            "description": "Enemies within the pool are dealt magic damage every 0.5 seconds over the duration and are slowed by 40%. Vladimir heals himself for 30% of the pre-mitigation damage dealt, reduced to 18% against minions.",
            "leveling": [
              {
                "attribute": "Magic Damage Per Tick",
                "modifiers": [
                  {
                    "values": [
                      20,
                      33.75,
                      47.5,
                      61.25,
                      75
                    ]
                  },
                  {
                    "values": [
                      3.75
                    ],
                    "units": [
                      "% bonus health"
                    ]
                  }
                ]
              },
              {
                "attribute": "Total Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      80,
                      135,
                      190,
                      245,
                      300
                    ]
                  },
                  {
                    "values": [
                      15
                    ],
                    "units": [
                      "% bonus health"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Vladimir cannot use basic attacks nor abilities during Sanguine Pool, but he can still move. If Tides of Blood is charging at the time of Sanguine Pool's activation, that ability may still be recast."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          28,
          25,
          22,
          19,
          16
        ],
        "targeting": "Auto",
        "affects": "Self, Enemies",
        "resource": "Current health",
        "damageType": "Magic damage",
        "spellEffects": "aoedot",
        "notes": "The first tick damages immediately so the final one occurs 0.5 seconds before Vladimir becomes targetable again.\nThere is an extra damage tick for 0 damage when Vladimir becomes targetable again, triggering the same spell effects as the normal ticks (except those which require damage greater than 0 being dealt).\nThis will trigger turret aggro onto Vladimir if an enemy champion is still within the effect radius when Sanguine Pool ends.\nThe  slow ends immediately once affected enemies get out of range.\nVladimir can still use summoner spells and item actives during Sanguine Pool.\nWhile unable to attack, Vladimir can still input attack commands - causing him to follow his attack target.\nVladimir's  attack range is reduced[ to 0 ][ by 450 ]while pooled - causing him to attempt to move right up to his attack target.",
        "blurb": "Active:  Vladimir sinks into a pool of blood for a short time, becoming  untargetable,  ghosted, and gaining  bonus movement speed that decays over a shorter duration. He cannot use basic attacks and abilities, but can still move.",
        "castTime": "none",
        "effectRadius": "350",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Tides of Blood",
        "icon": "https://cdn.communitydragon.org/latest/champion/Vladimir/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Vladimir charges for up to 1.5 seconds, during which he increases Tides of Blood's damage over the first second of the channel, and becomes slowed by 20% afterwards for the remaining duration. Tides of Blood can be recast within the duration, and does so automatically afterwards or if it is interrupted.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Vladimir unleashes a nova of 15 blood bolts around himself that each deal magic damage to the first enemy hit, increased based on charge time up to the first second.</p>",
            "leveling": [
              {
                "attribute": "Minimum Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      30,
                      45,
                      60,
                      75,
                      90
                    ]
                  },
                  {
                    "values": [
                      1.5
                    ],
                    "units": [
                      "% maximum health"
                    ]
                  },
                  {
                    "values": [
                      35
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Maximum Magic Damage",
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
                      6
                    ],
                    "units": [
                      "% maximum health"
                    ]
                  },
                  {
                    "values": [
                      80
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
            "description": "If Tides of Blood was charged for at least 1 second, enemies hit are also slowed for 0.5 seconds.",
            "leveling": [
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
            "description": "Enemies can intercept multiple bolts, but can be damaged only once."
          },
          {
            "description": "If Vladimir is below 12% of his maximum health, Tides of Blood will not cost any health."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          13,
          11,
          9,
          7,
          5
        ],
        "targeting": "Auto",
        "affects": "Self, Enemies",
        "spellshieldable": "True",
        "resource": "Maximum health",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "projectile": "TRUE",
        "notes": "The spell indicator shows 11 equally spaced missile indicators when hovering the ability in the HUD, however the spell actually casts 15 equally spaced missiles.\nThe health cost may still drop Vladimir below the specified amount if he is above it. This is verified for every tick of health cost, i.e if the first tick drops him below it, the next ones will stop affecting him if he remains below it.\nThe following table refers for interactions while Vladimir is  channeling:\n\n\nType\n\nCharge channel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Sanguine Pool is usable.  Transfusion and  Hemoplague both interrupt after 0.25 seconds.\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
        "speed": "4000",
        "width": "120",
        "castTime": "none",
        "effectRadius": "600",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Hemoplague",
        "icon": "https://cdn.communitydragon.org/latest/champion/Vladimir/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Vladimir spreads a virulent plague at the target location that infects enemies hit for 4 seconds, increasing the damage they take from all sources by 10%.</p>"
          },
          {
            "description": "After the duration, the infection bursts to deal magic damage to all affected targets and, after a 0.4-second delay, heal Vladimir for each infected champion, reduced by 40% for champions beyond the first.",
            "leveling": [
              {
                "attribute": "Magic damage",
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
                      70
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Heal",
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
                      70
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Reduced Heal",
                "modifiers": [
                  {
                    "values": [
                      60,
                      100,
                      140
                    ]
                  },
                  {
                    "values": [
                      28
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Maximum Total Heal",
                "modifiers": [
                  {
                    "values": [
                      390,
                      650,
                      910
                    ]
                  },
                  {
                    "values": [
                      182
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
          120
        ],
        "targeting": "Location",
        "affects": "Self, Enemies",
        "spellshieldable": "special",
        "damageType": "Magic damage",
        "spellEffects": "Area of effect",
        "projectile": "FALSE",
        "notes": "Hemoplague will amplify almost all sources and types of damage, even including damage from neutral monsters.\n True damage will however not be amplified.(bug)\nHemoplague's effect  stacks multiplicatively with other damage modifiers.\nHemoplague amplifies itself for an actual damage of 165 / 220 / 275 / 330 / 385 (+ 77% AP).\nHemoplague's modifier to incoming damage stacks additively with  Alistar's  Unbreakable Will for a total damage reduction of 45 / 55 / 65%.(note)\n Spell shield does not negate the detonation.",
        "blurb": "Active:  Vladimir unleashes a plague at the target location that infects nearby enemies hit for a few seconds, increasing the damage they take from all sources.",
        "castTime": "none",
        "effectRadius": "375",
        "targetRange": "625",
        "maxCharges": -1
      }
    ]
  },
  "lore": "A fiend with a thirst for mortal blood, Vladimir has influenced the affairs of Noxus since the empire's earliest days. In addition to unnaturally extending his life, his mastery of hemomancy allows him to control the minds and bodies of others as easily as his own. In the flamboyant salons of the Noxian aristocracy, this has enabled him to build a fanatical cult of personality around himself—while in the lowest back alleys, it allows him to bleed his enemies dry.",
  "faction": "noxus",
  "releaseDate": "2010-07-27",
  "patchLastChanged": "25.11",
  "price": {
    "blueEssence": 1575,
    "rp": 790
  }
}
export default champion