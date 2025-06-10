// Updated Patch 25.11 - 06/08/2025 12:01:46 PM CDT

const champion: Champion =  {
  "id": 16,
  "key": "Soraka",
  "name": "Soraka",
  "title": "the Starchild",
  "resource": "Mana",
  "attackType": "Ranged",
  "stats": {
    "health": {
      "flat": 605,
      "perLevel": 88
    },
    "healthRegen": {
      "flat": 2.5,
      "perLevel": 0.5
    },
    "mana": {
      "flat": 425,
      "perLevel": 40
    },
    "manaRegen": {
      "flat": 11.5,
      "perLevel": 0.4
    },
    "armor": {
      "flat": 32,
      "perLevel": 5
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 50,
      "perLevel": 3
    },
    "movespeed": {
      "flat": 325
    },
    "acquisitionRadius": {
      "flat": 600
    },
    "selectionRadius": {
      "flat": 110
    },
    "pathingRadius": {
      "flat": 44.2
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
      "perLevel": 2.14
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
      "flat": -0.113
    },
    "attackRange": {
      "flat": 550
    }
  },
  "positions": [
    "Support"
  ],
  "roles": [
    "Enchanter",
    "Mage",
    "Support"
  ],
  "attributeRatings": {
    "damage": 1,
    "toughness": 1,
    "control": 2,
    "mobility": 1,
    "utility": 3,
    "abilityReliance": 100,
    "difficulty": 1
  },
  "abilities": {
    "P": [
      {
        "name": "Salvation",
        "icon": "https://cdn.communitydragon.org/latest/champion/Soraka/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Soraka gains 90% bonus movement speed while facing nearby allied champions that are below 40% of their maximum health.</p>"
          }
        ],
        "targeting": "Passive",
        "affects": "Self",
        "notes": "Soraka will see an arrow indicating the direction in which she can gain the bonus movement speed.",
        "blurb": "Innate:  Soraka gains tremendous  bonus movement speed while facing nearby allied  champions that are at low health.",
        "effectRadius": "2500"
      }
    ],
    "Q": [
      {
        "name": "Starcall",
        "icon": "https://cdn.communitydragon.org/latest/champion/Soraka/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Soraka calls down a star upon the target location that grants sight of the area before landing after 0.25 - 1 (based on target range) seconds, dealing magic damage to enemies hit and slowing them by 30% for 1.5 seconds.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      85,
                      120,
                      155,
                      190,
                      225
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
            "description": "If this hits at least one enemy champion, the star dust returns to Soraka to grant her Rejuvenation for 2.5 seconds. While Soraka has Rejuvenation, Astral Infusion will also grant the effects of Rejuvenation to the target ally for the same duration."
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Rejuvenation:</span> The target heals every 0.5 seconds and gains bonus movement speed that decays over the duration.</p>",
            "leveling": [
              {
                "attribute": "Total Heal",
                "modifiers": [
                  {
                    "values": [
                      60,
                      75,
                      90,
                      105,
                      120
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
                "attribute": "Heal per Tick",
                "modifiers": [
                  {
                    "values": [
                      12,
                      15,
                      18,
                      21,
                      24
                    ]
                  },
                  {
                    "values": [
                      6
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Bonus Movement Speed",
                "modifiers": [
                  {
                    "values": [
                      20,
                      22.5,
                      25,
                      27.5,
                      30
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
          45,
          50,
          55,
          60,
          65
        ],
        "cooldown": [
          8,
          7,
          6,
          5,
          4
        ],
        "targeting": "Location",
        "affects": "Self, Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "projectile": "TRUE",
        "notes": "Starcall counts as hitting even if it gets blocked by  spell shield, granting Rejuvenation.\nBoth the initial hit and the Rejuvenation projectile can be  intercepted.\nRejuvenation heals over 12 ticks, with the first 4 each healing for about 15% of the heal, the next 4 ticks for about 5.5% each, and the last 4 for about 4.5% each.\nRejuvenation won't be granted to Soraka and she won't be able to make use of the health cost reduction on  Astral Infusion until the projectile gets to her, but she is able to Rejuvenate allies as soon as the target is hit.",
        "blurb": "Active:  Soraka calls down a star upon the target location that deals magic damage and briefly  slows enemies hit. If this hits at least one enemy  champion, the star dust returns to Soraka to grant her Rejuvenation for a short time.",
        "castTime": "0.25",
        "effectRadius": "265",
        "targetRange": "800",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Astral Infusion",
        "icon": "https://cdn.communitydragon.org/latest/champion/Soraka/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Soraka heals the target allied champion.</p>",
            "leveling": [
              {
                "attribute": "Heal",
                "modifiers": [
                  {
                    "values": [
                      90,
                      110,
                      130,
                      150,
                      170
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
            "description": "If cast while under Rejuvenation, the health cost will be reduced by a percentage.",
            "leveling": [
              {
                "attribute": "Health Cost Reduction",
                "modifiers": [
                  {
                    "values": [
                      80,
                      85,
                      90,
                      95,
                      100
                    ],
                    "units": [
                      "%"
                    ]
                  }
                ]
              },
              {
                "attribute": "Reduced Health Cost",
                "modifiers": [
                  {
                    "values": [
                      2,
                      1.5,
                      1,
                      0.5,
                      0
                    ],
                    "units": [
                      "% of maximum health"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Astral Infusion cannot be cast if Soraka is below 5% of her maximum health."
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
          6,
          5,
          4,
          3,
          2
        ],
        "targeting": "Unit",
        "affects": "Allies / Self",
        "resource": "Other",
        "spellEffects": "Heal",
        "projectile": "FALSE",
        "notes": "Astral Infusion can also be targeted on allied  decoys.\nAstral Infusion can be cast even if Soraka doesn't have the sufficient amount of health to pay for the health cost while above  5% of her maximum health.\nAs with all abilities with health costs, Astral Infusion will not reduce Soraka's health below 1.\n Spirit Visage will only increase the health donated to allies if the target ally possesses it, although owning it will boost the heal that Soraka receives from  Starcall and  Wish.\nAstral Infusion's effects occur before the cast time.\nAstral Infusion has a  forgiveness radius of 175 units.",
        "blurb": "Active:  Soraka consumes a portion of her maximum health to  heal the target allied champion.",
        "castTime": "0.25",
        "targetRange": "550",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Equinox",
        "icon": "https://cdn.communitydragon.org/latest/champion/Soraka/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Soraka creates a celestial zone at the target location that deals magic damage to enemy champions within at the time of cast. The zone then persists for 1.5 seconds and silences enemies within.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      70,
                      95,
                      120,
                      145,
                      170
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
            "description": "Afterwards, the zone erupts to deal the same damage to enemy champions within and root them for a duration.",
            "leveling": [
              {
                "attribute": "Total Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      140,
                      190,
                      240,
                      290,
                      340
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
              },
              {
                "attribute": "Root Duration",
                "modifiers": [
                  {
                    "values": [
                      1,
                      1.25,
                      1.5,
                      1.75,
                      2
                    ],
                    "units": [
                      " seconds"
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "cost": [
          70,
          75,
          80,
          85,
          90
        ],
        "cooldown": [
          20,
          19,
          18,
          17,
          16
        ],
        "targeting": "Location",
        "affects": "Enemies",
        "spellshieldable": "special",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "notes": "Equinox's  silence is marked as non-dispellable, so it is not removed by most  cleanses. It is however allowed to be removed by cleanses that also grant immunity to it, such as  Olaf's  Ragnarok.\n Spell shield will not block the  silence.",
        "blurb": "Active:  Soraka creates a celestial zone at the target location that deals magic damage to enemy champions within upon casting. The zone then persists for a brief moment and  siliences enemies within.",
        "castTime": "0.25",
        "effectRadius": "260",
        "targetRange": "925",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Wish",
        "icon": "https://cdn.communitydragon.org/latest/champion/Soraka/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Soraka calls upon the stars, healing herself and all allied champions, increased by 50% on targets below 40% of their maximum health.</p>",
            "leveling": [
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
                      50
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Increased Heal",
                "modifiers": [
                  {
                    "values": [
                      225,
                      375,
                      525
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
          }
        ],
        "cost": [
          100
        ],
        "cooldown": [
          150,
          135,
          120
        ],
        "targeting": "Auto",
        "affects": "Allies",
        "resource": "Mana",
        "spellEffects": "Heal",
        "notes": "Due to several character stats needing to be recalculated each time a character spawns, casting Wish immediately upon respawning will cause its cooldown to be unaffected by ability haste, and the healing will not be increased by Soraka's ability power. (bug)\n Untargetability does not invalidate the targeting of the heal.\nWish will not credit Soraka for assisting in a champion kill if the target ally is at full health.\nWish will apply heal effects (such as  Summon Aery) prioritizing targets based on the Spawn ID, which is the order in which units were added to an ongoing game. For  champions, this is the order they appear in from left to right in the loading screen.\nWish's effects occur before the cast time.\nWish will apply to units that are affected by Mordekaiser's R even if Soraka is not in the same realm.",
        "blurb": "Active:  Soraka calls upon the stars,  healing herself and all allied  champions, regardless of distance. The healing is increased on targets at low health.",
        "castTime": "0.25",
        "effectRadius": "Global",
        "maxCharges": -1
      }
    ]
  },
  "lore": "A wanderer from the celestial dimensions beyond Mount Targon, Soraka gave up her immortality to protect the mortal races from their own more violent instincts. She endeavors to spread the virtues of compassion and mercy to everyone she meets—even healing those who would wish harm upon her. And, for all Soraka has seen of this world's struggles, she still believes the people of Runeterra have yet to reach their full potential."
}
    export default champion