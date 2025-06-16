// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion =  {
  "id": 81,
  "key": "Ezreal",
  "name": "Ezreal",
  "title": "the Prodigal Explorer",
  "resource": "Mana",
  "attackType": "Ranged",
  "stats": {
    "health": {
      "flat": 600,
      "perLevel": 102
    },
    "healthRegen": {
      "flat": 4,
      "perLevel": 0.65
    },
    "mana": {
      "flat": 375,
      "perLevel": 70
    },
    "manaRegen": {
      "flat": 8.5,
      "perLevel": 1
    },
    "armor": {
      "flat": 24,
      "perLevel": 4.2
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 60,
      "perLevel": 2.75
    },
    "movespeed": {
      "flat": 325
    },
    "acquisitionRadius": {
      "flat": 550
    },
    "selectionRadius": {
      "flat": 115
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
      "perLevel": 2.5
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
      "flat": -0.112
    },
    "attackRange": {
      "flat": 550
    }
  },
  "positions": [
    "Bottom"
  ],
  "roles": [
    "Mage",
    "Marksman"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 1,
    "mobility": 3,
    "utility": 1,
    "abilityReliance": 45,
    "difficulty": 1
  },
  "abilities": {
    "P": [
      {
        "name": "Rising Spell Force",
        "icon": "https://cdn.communitydragon.org/latest/champion/Ezreal/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Ezreal generates a stack of Rising Spell Force for each enemy hit by his abilities, lasting for 6 seconds, refreshing on subsequent hits, and stacking up to 5 times.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Rising Spell Force:</span> For each stack, Ezreal gains 10% bonus attack speed, up to a maximum of 50%.</p>"
          }
        ],
        "targeting": "Passive",
        "affects": "Self",
        "notes": "Rising Spell Force will stack even if the abilities hit were blocked by  spell shields.",
        "blurb": "Innate:  Ezreal's abilities generate stacks of Rising Spell Force for each enemy hit, up to a cap."
      }
    ],
    "Q": [
      {
        "name": "Mystic Shot",
        "icon": "https://cdn.communitydragon.org/latest/champion/Ezreal/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ezreal fires a bolt of energy in the target direction that deals physical damage to the first enemy hit, applying on-hit effects and triggering on-attack effects.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      20,
                      45,
                      70,
                      95,
                      120
                    ]
                  },
                  {
                    "values": [
                      130
                    ],
                    "units": [
                      "% AD"
                    ]
                  },
                  {
                    "values": [
                      15
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
            "description": "If Mystic Shot successfully hits an enemy, the current cooldowns of Ezreal's abilities, including Mystic Shot's, are reduced by 1.5 seconds."
          }
        ],
        "cost": [
          28,
          31,
          34,
          37,
          40
        ],
        "cooldown": [
          5.5,
          5.25,
          5,
          4.75,
          4.5
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "special",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "special",
        "projectile": "TRUE",
        "notes": "Mystic Shot deals  basic damage, but also triggers spell effects by also being tagged as  spell damage.\nMystic Shot benefits from life steal, omnivamp, and physical vamp, but not spell vamp.\nEven if the ability is blocked by  spell shield it will still trigger the cooldown reduction.\nThis ability will cast from wherever the caster is at the end of the cast time.\nMystic Shot will be buffered and cast when the cooldown ends if the player attempts to cast it within 0.05 seconds of the cooldown ending.",
        "blurb": "Active:  Ezreal fires a bolt of energy that deals physical damage to the first enemy hit.",
        "speed": "2000",
        "width": "120",
        "castTime": "0.25",
        "targetRange": "1200",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Essence Flux",
        "icon": "https://cdn.communitydragon.org/latest/champion/Ezreal/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ezreal fires an orb in the target direction that marks the first enemy champion, epic monster, or structure hit for 4 seconds.</p>"
          },
          {
            "description": "His next basic attack or ability against the target detonates the mark to deal them bonus magic damage.",
            "leveling": [
              {
                "attribute": "Bonus Magic Damage",
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
                      100
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  },
                  {
                    "values": [
                      70,
                      75,
                      80,
                      85,
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
            "description": "If the mark was detonated with an ability, Ezreal restores 60 mana plus the mana cost of that ability."
          }
        ],
        "cost": [
          50
        ],
        "cooldown": [
          8
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "Special",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spell",
        "projectile": "TRUE",
        "notes": "The application of Essence Flux deals 0  proc damage.\nThis triggers in-combat effects such as drawing turret aggro and drawing monster aggression.\nIt also triggers  Sudden Impact and applies  Elixir of Sorcery.\nIt does not trigger  Cheap Shot, however, as  proc damage doesn't trigger  Cheap Shot.\n Block and  Dodge prevents the mark from being triggered by a basic attack.\n Spell shield prevents the mark from being triggered by an ability. If the mark is triggered by a basic attack, spell shield will prevent Essence Flux's damage.\nThis ability will cast from wherever the caster is at the end of the cast time.",
        "blurb": "Active:  Ezreal fires an orb that shortly marks the first enemy  champion, epic  monster, or  structure hit.",
        "speed": "1700",
        "width": "160",
        "castTime": "0.25",
        "targetRange": "1200",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Arcane Shift",
        "icon": "https://cdn.communitydragon.org/latest/champion/Ezreal/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ezreal blinks from his current location to up to 475 units towards the target location, then fires a homing bolt towards the nearest enemy that deals magic damage and reveals them for 1 second.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      80,
                      130,
                      180,
                      230,
                      280
                    ]
                  },
                  {
                    "values": [
                      50
                    ],
                    "units": [
                      "% bonus AD"
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
            "description": "Arcane Shift prioritizes firing at the nearest enemy marked by Essence Flux."
          },
          {
            "description": "The target does not have to be visible to be hit by this ability."
          }
        ],
        "cost": [
          70
        ],
        "cooldown": [
          26,
          23,
          20,
          17,
          14
        ],
        "targeting": "Location",
        "affects": "Enemies, Self",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spell",
        "projectile": "TRUE",
        "notes": "If Ezreal is moved during the cast time, his range to blink will update accordingly. This does not exceed the maximum target range.\nThe target is revealed as soon as Ezreal fires the missile at them.",
        "blurb": "Active:  Ezreal  blinks to the target location and fires a bolt that strikes the nearest enemy, dealing magic damage.",
        "speed": "2000",
        "castTime": "0.25",
        "effectRadius": "750",
        "targetRange": "475",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Trueshot Barrage",
        "icon": "https://cdn.communitydragon.org/latest/champion/Ezreal/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ezreal fires an arc of energy in the target direction that briefly grants sight of its surroundings and deals magic damage to enemies hit.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      350,
                      550,
                      750
                    ]
                  },
                  {
                    "values": [
                      100
                    ],
                    "units": [
                      "% bonus AD"
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
            "description": "Minions and non-epic monsters take 50% reduced damage.",
            "leveling": [
              {
                "attribute": "Reduced Damage",
                "modifiers": [
                  {
                    "values": [
                      175,
                      275,
                      375
                    ]
                  },
                  {
                    "values": [
                      50
                    ],
                    "units": [
                      "% bonus AD"
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
          100
        ],
        "cooldown": [
          120,
          105,
          90
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "projectile": "TRUE",
        "notes": "Trueshot Barrage's projectile has an  icon on the mini-map while it is in flight. It can be seen by only Ezreal and his allies.\nThis ability will cast from wherever the caster is at the start of the cast time.",
        "blurb": "Active:  Ezreal winds up to fire a powerful bolt of energy that deals magic damage to enemies hit.",
        "speed": "2000",
        "width": "320",
        "castTime": "1",
        "targetRange": "Global",
        "maxCharges": -1
      }
    ]
  },
  "lore": "A dashing adventurer, unknowingly gifted in the magical arts, Ezreal raids long-lost catacombs, tangles with ancient curses, and overcomes seemingly impossible odds with ease. His courage and bravado knowing no bounds, he prefers to improvise his way out of any situation, relying partially on his wits, but mostly on his mystical Shuriman gauntlet, which he uses to unleash devastating arcane blasts. One thing is for sure—whenever Ezreal is around, trouble isn't too far behind. Or ahead. Probably everywhere."
}
    export default champion