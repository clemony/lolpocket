 export const Orianna: Champion =  {
  "id": 61,
  "key": "Orianna",
  "name": "Orianna",
  "title": "the Lady of Clockwork",
  "fullName": "Orianna Reveck",
  "resource": "Mana",
  "attackType": "Ranged",
  "stats": {
    "health": {
      "flat": 585,
      "perLevel": 110
    },
    "healthRegen": {
      "flat": 7,
      "perLevel": 0.55
    },
    "mana": {
      "flat": 418,
      "perLevel": 25
    },
    "manaRegen": {
      "flat": 8,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 20,
      "perLevel": 4.2
    },
    "magicResistance": {
      "flat": 26,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 44,
      "perLevel": 2.6
    },
    "movespeed": {
      "flat": 325
    },
    "acquisitionRadius": {
      "flat": 525
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
      "perLevel": 3.5
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
      "flat": 525
    }
  },
  "positions": [
    "Middle"
  ],
  "roles": [
    "Burst",
    "Mage",
    "Support"
  ],
  "attributeRatings": {
    "damage": 2,
    "toughness": 1,
    "control": 2,
    "mobility": 1,
    "utility": 2,
    "abilityReliance": 90,
    "difficulty": 2
  },
  "abilities": {
    "P": [
      {
        "name": "Clockwork Windup",
        "icon": "https://cdn.communitydragon.org/latest/champion/Orianna/ability-icon/p",
        "effects": [
          {
            "description": "<span class=\"ability-header\">Innate - The Ball:</span> Orianna is accompanied by The Ball, which she commands with her abilities. The Ball incurs a 0.01-second global cooldown on all of her abilities when she casts any ability. Additionally, The Ball attaches to Orianna if she is near it, and snaps back to her if she moves too far away from it, which incurs a 0.75-second cooldown on Command: Shockwave."
          },
          {
            "description": "<span class=\"ability-header\">Innate:</span> Orianna's basic attacks generate a stack of Clockwork Winding for 4 seconds, refreshing on subsequent attacks and stacking up to 2 times. All stacks are lost when attacking a new enemy.\n<span class=\"ability-header\">Clockwork Winding:</span> Orianna's basic attacks are empowered to deal 10 - 50 (based on level) (+ 15% AP) bonus magic damage on-hit, increased by[ 20% ][ 2 - 10 (based on level) (+ 3% AP) ]per stack, up to 14 - 70 (based on level) (+ 21% AP) total bonus magic damage."
          },
          {
            "description": "See Pets for more details about The Ball."
          }
        ],
        "targeting": "Passive",
        "affects": "Enemies, Self",
        "damageType": "Magic damage",
        "spellEffects": "Proc",
        "notes": "Clockwork Winding's stack count can be seen in Orianna's buff bar.\nThe Ball will not incur its global cooldown from a  Command: Protect cast that is used on a target already attached to it.\nThe attacks do not deal the bonus damage against structures.\n Runaan's Hurricane's extra bolts will cause Clockwork Winding to reset its stacks, as she hits targets other than her latest one on-hit.(bug)",
        "blurb": "Innate:  Orianna is accompanied by  The Ball, which she commands with her abilities. The Ball attaches to Orianna when she approaches it, and snaps back to her when she moves too far away. The Ball incurs a  brief cooldown on Orianna's abilities whenever it moves.",
        "effectRadius": "1290 / 1355 / 135"
      }
    ],
    "Q": [
      {
        "name": "Command: Attack",
        "icon": "https://cdn.communitydragon.org/latest/champion/Orianna/ability-icon/q",
        "effects": [
          {
            "description": "<span class=\"ability-header\">Active:</span> Orianna commands The Ball to fly to the target location and remain there, dealing magic damage to enemies it passes through and nearby enemies upon arrival, reduced to 70% against those hit beyond the first.",
            "leveling": [
              {
                "attribute": "Magic Damage",
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
                      55
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Reduced Damage",
                "modifiers": [
                  {
                    "values": [
                      42,
                      63,
                      84,
                      105,
                      126
                    ]
                  },
                  {
                    "values": [
                      38.5
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
          35
        ],
        "cooldown": [
          6,
          5.25,
          4.5,
          3.75,
          3
        ],
        "targeting": "Location",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "Spellaoe",
        "projectile": "SPECIAL",
        "notes": "If The Ball is currently on Orianna herself, Command: Attack will have it cast to fly at least 150 units if the player attempts to cast it closer.\nThe Ball does not grant  sight while in flight, but the sound effect of striking an enemy is audible through the Fog of War.\nOrianna cannot use  Command: Protect while The Ball is in transit with Command: Attack but she may buffer  Command: Dissonance and  Command: Shockwave to cast once it has reached the location.\nThe Ball will remain at the target location until Orianna retrieves it or if she goes beyond its leash range.\nOrianna will attempt to walk to Command: Attack's cast point if it lies outside cast range (The Ball will never exceed its leash range regardless of target direction).\nPENDING FOR TEST: The Ball will drop to the ground upon colliding with  Yasuo's  Wind Wall but not with  Braum's  Unbreakable.\n Samira's  Blade Whirl?",
        "blurb": "Active:  Orianna commands  The Ball to fly to the target location and remain there, dealing magic damage to enemies it passes through and nearby enemies upon arrival.",
        "speed": "1400",
        "width": "160",
        "castTime": "None",
        "effectRadius": "175",
        "targetRange": "825",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Command: Dissonance",
        "icon": "https://cdn.communitydragon.org/latest/champion/Orianna/ability-icon/w",
        "effects": [
          {
            "description": "<span class=\"ability-header\">Active:</span> Orianna commands The Ball to emit an electric pulse that deals magic damage to nearby enemies.",
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
                      70
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
            "description": "The pulse leaves behind an electric field that last 3 seconds, granting bonus movement speed to Orianna and her allies when they move within. Enemies that move within the field are slowed by the same amount, decaying over 2 seconds after leaving.",
            "leveling": [
              {
                "attribute": "Movement Speed Modifier",
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
              }
            ]
          }
        ],
        "cost": [
          60,
          65,
          70,
          75,
          80
        ],
        "cooldown": [
          7
        ],
        "targeting": "Auto",
        "affects": "Enemies, Allies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "Area of effect",
        "notes": "No additional notes.",
        "blurb": "Active:  Orianna commands  The Ball to emit an electric pulse that deals magic damage to nearby enemies.",
        "castTime": "none",
        "effectRadius": "225",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Command: Protect",
        "icon": "https://cdn.communitydragon.org/latest/champion/Orianna/ability-icon/e",
        "effects": [
          {
            "description": "<span class=\"ability-header\">Passive:</span> The Ball grants bonus armor and bonus magic resistance to the unit it is attached to.",
            "leveling": [
              {
                "attribute": "Bonus Resistances",
                "modifiers": [
                  {
                    "values": [
                      6,
                      12,
                      18,
                      24,
                      30
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "<span class=\"ability-header\">Active:</span> Orianna commands The Ball to fly to herself or the target allied champion and attach itself to the target, dealing magic damage to enemies it passes through and granting the target a shield for 2.5 seconds upon arrival.",
            "leveling": [
              {
                "attribute": "Magic Damage",
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
                      30
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Shield Strength",
                "modifiers": [
                  {
                    "values": [
                      55,
                      90,
                      125,
                      160,
                      195
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
          }
        ],
        "cost": [
          60
        ],
        "cooldown": [
          9
        ],
        "targeting": "Unit",
        "affects": "Enemies, Allies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "aoe",
        "projectile": "TRUE",
        "notes": "The Ball does not grant  sight while in flight, but the sound effect of striking an enemy is audible through the Fog of War.\nOrianna cannot cast her other abilities while the The Ball is moving to the target with Command: Protect.\nOrianna gains Command: Protect's bonus resistances whenever The Ball is attached to her (even if she didn't self-cast).\nThe Ball will remain where Command: Protect's target ally died or, if they died or became  untargetable before The Ball reaches them, it will instead snap back to Orianna.\nThe Ball will return to Orianna if Command: Protect's target ally moves too far away from her (The Ball will always respect its leash range, which is increased by 100 when attached to allied champions).\nThe Ball will join Command: Protect's target ally in  stealth if they are affected by it when Orianna targets them.\nThe Ball snaps back to Orianna upon being intercepted by  projectile-blocking effects.\nCommand: Protect has a  forgiveness radius of 175 units.",
        "blurb": "Passive:  The Ball grants bonus  armor and  magic resist to the unit it is attached to.",
        "speed": "1850",
        "width": "160",
        "castTime": "none",
        "targetRange": "1120",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Command: Shockwave",
        "icon": "https://cdn.communitydragon.org/latest/champion/Orianna/ability-icon/r",
        "effects": [
          {
            "description": "<span class=\"ability-header\">Active:</span> Orianna commands The Ball to unleash a shockwave that deals magic damage to nearby enemies, stuns them for 0.75 seconds, and pulls them over 325 units, though not through terrain.",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      250,
                      400,
                      550
                    ]
                  },
                  {
                    "values": [
                      95
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
          110,
          95,
          80
        ],
        "targeting": "Auto",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "Area of effect",
        "notes": "Command: Shockwave tosses enemies a set distance (those on the edge of the flinging area will be tossed to the center while those close to the middle will go over The Ball towards the edge) and can send them through walls.\nThis ability will cast from wherever the caster is at the end of the cast time.\nCommand: Shockwave will cast from wherever the unit the The Ball is attached to is at the end of the cast time, even if the unit exceeds max tether range.\n Displacement immunity will not resist the application of the  stun.",
        "blurb": "Active:  Orianna commands  The Ball to unleash a shockwave that deals magic damage to nearby enemies, briefly  stunning and  pulling them inward.",
        "castTime": "0.5",
        "effectRadius": "415",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Once a curious girl of flesh and blood, Orianna is now a technological marvel comprised entirely of clockwork. She became gravely ill after an accident in the lower districts of Zaun, and her failing body had to be replaced with exquisite artifice, piece by piece. Accompanied by an extraordinary brass sphere she built for companionship and protection, Orianna is now free to explore the wonders of Piltover, and beyond."
}
