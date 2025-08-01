// Updated Patch 25.15 - 07/31/2025 07:16:02 AM CDT

const champion: Champion =  {
  "id": 245,
  "key": "Ekko",
  "name": "Ekko",
  "title": "the Boy Who Shattered Time",
  "resource": "Mana",
  "attackType": "Melee",
  "stats": {
    "health": {
      "flat": 655,
      "perLevel": 99
    },
    "healthRegen": {
      "flat": 9,
      "perLevel": 0.9
    },
    "mana": {
      "flat": 280,
      "perLevel": 70
    },
    "manaRegen": {
      "flat": 7,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 32,
      "perLevel": 4.2
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 58,
      "perLevel": 3
    },
    "movespeed": {
      "flat": 340
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
      "flat": 0.688,
      "perLevel": 3.3
    },
    "attackSpeedRatio": {
      "flat": 0.625
    },
    "attackCastTime": {
      "flat": 0.26
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackRange": {
      "flat": 125
    }
  },
  "positions": [
    "Jungle",
    "Middle"
  ],
  "roles": [
    "Assassin",
    "Mage"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 2,
    "control": 2,
    "mobility": 3,
    "utility": 1,
    "abilityReliance": 75,
    "difficulty": 2
  },
  "abilities": {
    "P": [
      {
        "name": "Z-Drive Resonance",
        "icon": "https://cdn.communitydragon.org/latest/champion/Ekko/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Resonance:</span> Ekko's basic attacks on-hit and damaging abilities apply a stack of Resonance to enemies hit for 4 seconds, refreshing on subsequent hits and stacking up to 3 times. The third stack consumes them all to deal 30 - 140 (based on level) (+ 90% AP) bonus magic damage. Z-Drive Resonance deals 300% damage against monsters.</p>"
          },
          {
            "description": "Resonance cannot affect the same target more than once every few seconds."
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Stolen Time:</span> Triggering Resonance against a champion grants Ekko 50% / 60% / 70% / 80% (based on level) bonus movement speed for 2 / 2.5 / 3 (based on level) seconds.</p>"
          }
        ],
        "targeting": "Passive",
        "affects": "Enemies / Self",
        "spellshieldable": "True",
        "damageType": "Magic damage",
        "spellEffects": "Single target",
        "notes": "Ekko's basic attacks have different animations based on how many stacks his target has. His attack pattern is as follows:\nDownwards → Upwards → Sideways\nIf the target has already been affected by Resonance, Ekko's basic attack animations will kick or attack the target sideways.\nResonance stacks will not be applied nor consumed if the basic attack is  dodged or  blocked or if the attack  misses.",
        "blurb": "Innate:  Ekko's  basic attacks  on-hit and damaging  abilities apply  stacks, the third stack deals bonus magic damage. If the target was a  champion, this grants  bonus movement speed to Ekko.",
        "onTargetCdStatic": "5"
      }
    ],
    "Q": [
      {
        "name": "Timewinder",
        "icon": "https://cdn.communitydragon.org/latest/champion/Ekko/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ekko throws a temporal grenade in the target direction that deals magic damage to enemies hit.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      80,
                      95,
                      110,
                      125,
                      140
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
            "description": "At 700 units or upon hitting an enemy champion, the grenade slows down for 1.75 seconds to gradually expand into a Temporal Sickness field that slows nearby enemies, travelling for another 190 units.",
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
            "description": "Afterwards, the grenade contracts and homes back to Ekko at an increased speed, dealing magic damage to enemies hit.",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      40,
                      65,
                      90,
                      115,
                      140
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
                "attribute": "Total Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      120,
                      160,
                      200,
                      240,
                      280
                    ]
                  },
                  {
                    "values": [
                      90
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
          50,
          60,
          70,
          80,
          90
        ],
        "cooldown": [
          9,
          8.5,
          8,
          7.5,
          7
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "Special",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "projectile": "TRUE",
        "notes": "Spell shield will block only a single instance of damage.\nThis ability will cast from wherever the caster is at the end of the cast time.",
        "blurb": "Active:  Ekko throws a temporal grenade that deals magic damage to enemies hit. It expands at max range or upon hitting an enemy  champion,  slowing nearby enemies.",
        "speed": "1650 / 200 / 2300",
        "width": "120 / 200",
        "castTime": "0.25",
        "effectRadius": "160 : 210",
        "targetRange": "1100",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Parallel Convergence",
        "icon": "https://cdn.communitydragon.org/latest/champion/Ekko/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Ekko's basic attacks deal bonus magic damage equal to 3% (+ 3% per 100 AP) of the target's missing health against enemies below 30% of their maximum health. The damage has a minimum threshold of 15 and is capped at 150 against minions and monsters.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ekko creates an afterimage of himself that, after 2 seconds, bats a device to the target location and grants sight of the area for 2.5 seconds. After travelling over 1.25 seconds, the device expands into a chronosphere that is visible for 1.5 seconds and which slows enemies within by 40%.</p>"
          },
          {
            "description": "If Ekko enters the sphere within 2 seconds of its creation, it detonates to grant him a shield for 2 seconds and stun enemies within for 2.25 seconds.",
            "leveling": [
              {
                "attribute": "Shield Strength",
                "modifiers": [
                  {
                    "values": [
                      100,
                      120,
                      140,
                      160,
                      180
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
              }
            ]
          },
          {
            "description": "Enemies can see the indicator for Parallel Convergence 2 seconds after casting."
          }
        ],
        "cost": [
          30,
          35,
          40,
          45,
          50
        ],
        "cooldown": [
          22,
          20,
          18,
          16,
          14
        ],
        "targeting": "Location",
        "spellshieldable": "True",
        "resource": "Mana",
        "projectile": "FALSE",
        "notes": "Applies  proc damage for the passive.\nThe passive will proc with the attack that triggers the final stack of  Resonance if it reduces a target's health below the 30% threshold.\nEkko can detonate the expansion even while  untargetable (i.e.  Chronobreak's dash), but not if he is  resurrecting.\nParallel Convergence will continue to  slow enemies even if its expansion is detonated.",
        "blurb": "Passive:  Ekko's basic attacks deal bonus magic damage against a low-health target, increased based on their missing health.",
        "castTime": "0.25",
        "effectRadius": "375",
        "targetRange": "1600",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Phase Dive",
        "icon": "https://cdn.communitydragon.org/latest/champion/Ekko/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ekko dashes in the target direction, then empowers his next basic attack within 3 seconds to have a 0.25-second cast time, gain 300 bonus range, cause him to blink within 125 range of the target, and deal bonus magic damage.</p>",
            "leveling": [
              {
                "attribute": "Bonus Magic Damage",
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
                      40
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
            "description": "Phase Dive resets Ekko's basic attack timer. Ekko can cast any of his abilities during the dash."
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
          9,
          8.5,
          8,
          7.5,
          7
        ],
        "targeting": "Direction",
        "affects": "Self",
        "spellshieldable": "true",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "Spell",
        "notes": "The  dash distance can be extended to up-to 550 units when targeting across terrain. It will only extend for the distance needed to cross the wall.\nWhile  grounded or  rooted, Ekko loses the  bonus attack range from Phase Dive.\nPhase Drive's attack can  miss and be  blocked and  dodged, consuming the basic attack without dealing any damage.\nIf the target becomes  untargetable,  dies, or is too far away during the empowered attack's cast time, it is cancelled but not consumed.",
        "blurb": "Active:  Ekko  rolls in the target direction, gaining  bonus attack range.",
        "castTime": "none",
        "targetRange": "325 / 550",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Chronobreak",
        "icon": "https://cdn.communitydragon.org/latest/champion/Ekko/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Upon learning Chronobreak or if its current cooldown is lower than 4 seconds, Ekko reveals a time-delayed afterimage of himself that constantly tracks where he was 4 seconds ago.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ekko enters stasis at the start of the cast time, and afterwards heals himself and dashes to his afterimage's location at the time of cast over 0.5 seconds. Upon arrival, the stasis ends and he creates an explosion that deals magic damage to nearby enemies.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      200,
                      350,
                      500
                    ]
                  },
                  {
                    "values": [
                      175
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
                      100,
                      150,
                      200
                    ]
                  },
                  {
                    "values": [
                      60
                    ],
                    "units": [
                      "% AP"
                    ]
                  },
                  {
                    "values": [
                      3
                    ],
                    "units": [
                      "% per 1% of health lost in the past 4 seconds"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Ekko is immune to all displacements during Chronobreak."
          }
        ],
        "cost": [
          100
        ],
        "cooldown": [
          110,
          80,
          50
        ],
        "targeting": "Auto",
        "affects": "Enemies / Self",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "notes": "Ekko will attempt to basic attack the closest target after appearing at the cast location, but can do so quicker if he manually attack commands after the dash, except if  Phase Dive is primed.\nThe afterimage's location will explode even if Ekko's  dash is interrupted.\nA link can also be seen between the afterimage and Ekko that traces along his path.\nThe link follows the same visibility rules as the afterimage.\nUpon activation, Ekko travels full distance through the link, and thus will detonate  Parallel Convergence that the link passes through.\n Quicksilver incurs a 1-second  cooldown upon casting Chronobreak.",
        "blurb": "Passive:  Ekko reveals a time-delayed afterimage of himself that tracks where he was 4 seconds ago.",
        "castTime": "0.5",
        "effectRadius": "375 / Global",
        "maxCharges": -1
      }
    ]
  },
  "lore": "A prodigy from the rough streets of Zaun, Ekko is able to manipulate time to twist any situation to his advantage. He uses his own invention, the Z-Drive, to explore the branching possibilities of reality, crafting the perfect moment to seemingly achieve the impossible the first time, every time. Though Ekko revels in this freedom, when there's a threat to those he cares about, he and the Firelights will do anything to defend them."
}
    export default champion