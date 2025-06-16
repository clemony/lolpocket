// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion =  {
  "id": 33,
  "key": "Rammus",
  "name": "Rammus",
  "title": "the Armordillo",
  "resource": "Mana",
  "attackType": "Melee",
  "stats": {
    "health": {
      "flat": 675,
      "perLevel": 94
    },
    "healthRegen": {
      "flat": 8,
      "perLevel": 0.55
    },
    "mana": {
      "flat": 310,
      "perLevel": 33
    },
    "manaRegen": {
      "flat": 7.85,
      "perLevel": 0.5
    },
    "armor": {
      "flat": 35,
      "perLevel": 4.5
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 65,
      "perLevel": 2.75
    },
    "movespeed": {
      "flat": 335
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
      "flat": 0.7,
      "perLevel": 2.215
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
      "flat": -0.071
    },
    "attackRange": {
      "flat": 125
    }
  },
  "positions": [
    "Jungle"
  ],
  "roles": [
    "Fighter",
    "Tank",
    "Vanguard"
  ],
  "attributeRatings": {
    "damage": 2,
    "toughness": 3,
    "control": 3,
    "mobility": 2,
    "utility": 1,
    "abilityReliance": 65,
    "difficulty": 1
  },
  "abilities": {
    "P": [
      {
        "name": "Spiked Shell",
        "icon": "https://cdn.communitydragon.org/latest/champion/Rammus/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Rammus gains bonus attack damage equal to the sum of 15% total armor and 15% total magic resistance.</p>"
          }
        ],
        "targeting": "Passive",
        "affects": "Self",
        "notes": "No additional details.",
        "blurb": "Innate:  Rammus gains bonus AD equal to a percentage of his total armor and total magic resistance."
      }
    ],
    "Q": [
      {
        "name": "Powerball",
        "icon": "https://cdn.communitydragon.org/latest/champion/Rammus/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Rammus channels for up to 6 seconds to roll into a ball, gaining 25% - 39.17% (based on level) bonus total movement speed per second over the duration, up to a maximum of 150% - 235% (based on level). Powerball can be recast after 1 second within the duration, and does so automatically afterwards or upon casting Defensive Ball Curl.</p>"
          },
          {
            "description": "Rammus stops rolling upon colliding with an enemy, dealing magic damage to all nearby enemies and knocking them back 125 units, though not through terrain. Enemies hit are then stunned and revealed for 0.4 seconds, as well as slowed for 1 second.",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      80,
                      120,
                      160,
                      200,
                      240
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
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Rammus ends Powerball.</p>"
          }
        ],
        "cost": [
          60
        ],
        "cooldown": [
          12,
          10.5,
          9,
          7.5,
          6
        ],
        "targeting": "Auto",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "Area of effect",
        "notes": "The initial cast and the manual recast count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nIf the ability is not manually recasted, the secondary effect will trigger without being considered as an ability activation.\nThe bonus movement speed  stacks multiplicatively with other sources of movement speed boosts.\nPowerball will still collide with enemies if Rammus is  ghosted.\nFor the purpose of moving closer to an enemy when right clicking them, Powerball also reduces Rammus'  attack range[ to 0 ][ by 125 ]for the duration.\nRegardless of this, during Powerball Rammus will also always attempt to path towards his target's center instead.\nRammus will ignore unit collision for the purpose of pathfinding during Powerball.\nRammus acts as if he were  ghosted for the duration of Powerball.\nPowerball is not a movement channel, and so will not be  interrupted by  root and  ground.\n Displacement immunity will also resist the application of the  stun.\nThe following table refers for interactions while Rammus is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Defensive Ball Curl interrupts.  Frenzying Taunt is disabled.  Soaring Slam modifies this ability. This ability recasts to end channel.\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
        "collisionRadius": "75",
        "castTime": "none",
        "effectRadius": "250",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Defensive Ball Curl",
        "icon": "https://cdn.communitydragon.org/latest/champion/Rammus/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Rammus enters a defensive stance for 7 seconds, gaining bonus armor and bonus magic resistance. While active, enemies that use a basic attack on-hit against Rammus are dealt 15 (+ 10% total armor) (+ 10% total magic resistance) magic damage.</p>",
            "leveling": [
              {
                "attribute": "Bonus Armor",
                "modifiers": [
                  {
                    "values": [
                      27
                    ]
                  },
                  {
                    "values": [
                      30,
                      37.5,
                      45,
                      52.5,
                      60
                    ],
                    "units": [
                      "% total armor"
                    ]
                  }
                ]
              },
              {
                "attribute": "Bonus Magic Resistance",
                "modifiers": [
                  {
                    "values": [
                      27
                    ]
                  },
                  {
                    "values": [
                      30,
                      37.5,
                      45,
                      52.5,
                      60
                    ],
                    "units": [
                      "% total magic resistance"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Defensive Ball Curl can be recast after 1 second within the duration, and does so automatically upon casting Powerball or Soaring Slam."
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Rammus ends Defensive Ball Curl.</p>"
          }
        ],
        "cost": [
          40
        ],
        "cooldown": [
          7
        ],
        "targeting": "Auto",
        "affects": "Self, Enemies",
        "spellshieldable": "False",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "aoe",
        "notes": "The initial cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nDeactivating the ability manually does not.\nDefensive Ball Curl ends immediately if  Powerball is cast.\nDefensive Ball Curl will return damage from attacks and/or abilities that apply on-hit effects ( Mystic Shot) as well as from  Runaan's Hurricane's Wind's Fury (will not return damage from turrets,  H-28G Evolution Turret, or  Jack in the Box).\nThe resistance scaling will factor from all sources, including Defensive Ball Curl's flat bonus. This will recalculate over the duration.",
        "blurb": "Active:  Rammus enters a defensive stance for a few seconds, gaining  bonus armor and  bonus magic resist. During this time, enemies that land a basic attack against Rammus are dealt magic damage.",
        "castTime": "none",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Frenzying Taunt",
        "icon": "https://cdn.communitydragon.org/latest/champion/Rammus/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Rammus taunts the target enemy champion or monster for a duration. Monsters are additionally dealt magic damage upon being affected.</p>",
            "leveling": [
              {
                "attribute": "Taunt Duration",
                "modifiers": [
                  {
                    "values": [
                      1.2,
                      1.4,
                      1.6,
                      1.8,
                      2
                    ],
                    "units": [
                      " seconds"
                    ]
                  }
                ]
              },
              {
                "attribute": "Monster Magic Damage",
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
                      70
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
          50
        ],
        "cooldown": [
          12
        ],
        "targeting": "Unit",
        "affects": "Enemies, Self",
        "spellshieldable": "True",
        "resource": "Mana",
        "notes": "Frenzying Taunt, despite being usable on  monsters, does not force them to attack Rammus. He does not draw aggro since the ability does not deal damage.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
        "blurb": "Active:  Rammus briefly  taunts the target enemy  champion or  monster.",
        "castTime": "0.25",
        "targetRange": "325",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Soaring Slam",
        "icon": "https://cdn.communitydragon.org/latest/champion/Rammus/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Rammus leaps to the target location with immunity to crowd control. Upon arrival, he creates an impact that deals magic damage to nearby enemies and slows them for 1.5 seconds.</p>",
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
                      60
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
            "description": "If Soaring Slam was cast during Powerball, enemies within the epicenter are also knocked up for 0.75 seconds and are dealt Powerball's damage. Powerball will not collide with enemies during the dash, and its channel will be maintained for the dash and end afterwards."
          },
          {
            "description": "The impact causes 3 aftershocks to burst from the area over 3.5 seconds, each one applying and refreshing the duration of the initial slow."
          },
          {
            "description": "Soaring Slam's damage affects structures and is doubled against turrets."
          }
        ],
        "cost": [
          100
        ],
        "cooldown": [
          90
        ],
        "targeting": "Location",
        "affects": "Enemies",
        "spellshieldable": "special",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "AoE",
        "notes": "Spell shield will block the impact (including with  Powerball) but not each aftershock.\nRammus is required to have had at least 461.5 movement speed average over the last second to be able to cast Soaring Slam further than its minimum cast range and thereby deal the increased damage at the epicenter.\nThe maximum increased center damage is reachable once  Rammus has had at least 1307.69 movement speed average for the past second.\nSoaring Slam will not impact nor generate aftershocks if the dash is interrupted.\nThe following table refers for interactions while Rammus is dashing:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
        "blurb": "Active:  Rammus  leaps to the target location with  Cc-immunity, dealing magic damage to nearby enemies and briefly  slowing them.",
        "speed": "900 / 2000",
        "castTime": "None",
        "effectRadius": "400 / 200 / 400",
        "targetRange": "800 OR 150% movement speed",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Idolized by many, dismissed by some, mystifying to all, the curious being Rammus is an enigma. Protected by a spiked shell, he inspires increasingly disparate theories on his origin wherever he goes—from demigod, to sacred oracle, to a mere beast transformed by magic. Whatever the truth may be, Rammus keeps his own counsel and stops for no one as he roams the Shuriman desert."
}
    export default champion