// Updated Patch 25.11 - 06/06/2025 12:19:16 PM CDT

const champion: Champion =  {
  "id": 4,
  "key": "TwistedFate",
  "name": "Twisted Fate",
  "title": "the Card Master",
  "fullName": "Tobias Felix",
  "resource": "Mana",
  "attackType": "Ranged",
  "stats": {
    "health": {
      "flat": 604,
      "perLevel": 108
    },
    "healthRegen": {
      "flat": 5.5,
      "perLevel": 0.6
    },
    "mana": {
      "flat": 333,
      "perLevel": 39
    },
    "manaRegen": {
      "flat": 8,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 24,
      "perLevel": 4.35
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 52,
      "perLevel": 2.5
    },
    "movespeed": {
      "flat": 330
    },
    "acquisitionRadius": {
      "flat": 800
    },
    "selectionRadius": {
      "flat": 110
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
      "flat": 0.651
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
      "flat": 525
    }
  },
  "positions": [
    "Bottom",
    "Middle",
    "Top"
  ],
  "roles": [
    "Burst",
    "Mage",
    "Marksman"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 2,
    "mobility": 2,
    "utility": 2,
    "abilityReliance": 65,
    "difficulty": 2
  },
  "abilities": {
    "P": [
      {
        "name": "Loaded Dice",
        "icon": "https://cdn.communitydragon.org/latest/champion/TwistedFate/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Whenever Twisted Fate kills an enemy, he generates 1 - 6 (based on probability). He also has a chance equal to his critical strike chance to generate an additional 1 - 6 (based on probability).</p>"
          },
          {
            "description": "As you'd expect, Twisted Fate plays with loaded dice. His initial dice roll is weighted to have an increased chance of granting 6, while his critical dice roll is weighted against him and has an increased chance of granting 1."
          }
        ],
        "targeting": "Passive",
        "affects": "Self",
        "notes": "The expected bonus gold gained per unit killed is  4.\nThe expected additional gold due to critical strike chance is  3.",
        "blurb": "Innate: Whenever  Twisted Fate kills an enemy, he generates a small amount of  bonus gold based on chance."
      }
    ],
    "Q": [
      {
        "name": "Wild Cards",
        "icon": "https://cdn.communitydragon.org/latest/champion/TwistedFate/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Twisted Fate throws a fan of three cards in a cone in the target direction that each deal magic damage to enemies hit.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      70,
                      115,
                      160,
                      205,
                      250
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
                      85
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
            "description": "Enemies can be damaged only once per pass."
          }
        ],
        "cost": [
          60,
          70,
          80,
          90,
          100
        ],
        "cooldown": [
          6,
          5.75,
          5.5,
          5.25,
          5
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "Area of effect",
        "projectile": "TRUE",
        "notes": "This ability will cast from wherever the caster is at the end of the cast time.",
        "blurb": "Active:  Twisted Fate throws a fan of three cards in the target direction that each deal magic damage to enemies hit.",
        "speed": "1000",
        "angle": "56°",
        "castTime": "0.25",
        "targetRange": "1450",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Pick a Card",
        "icon": "https://cdn.communitydragon.org/latest/champion/TwistedFate/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Twisted Fate cycles through three cards for 6 seconds, hovering each for 0.5 seconds at a time. Pick a Card can be recast within the duration, which selects the current card hovered.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Twisted Fate empowers his next basic attack within 6 seconds to have a 0.25-second cast time, deal modified magic damage, and apply an additional effect based on the card selected. This damage cannot critically strike but is increased based on critical strike chance.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Blue Card Bonus:</span> Deals magic damage, increased by 0% - 57.5% (based on critical strike chance), and restores mana.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      40,
                      60,
                      80,
                      100,
                      120
                    ]
                  },
                  {
                    "values": [
                      100
                    ],
                    "units": [
                      "% AD"
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
                "attribute": "Mana Restored",
                "modifiers": [
                  {
                    "values": [
                      70,
                      90,
                      110,
                      130,
                      150
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Red Card Bonus:</span> Deals magic damage to the target and surrounding enemies, increased by 0% - 35% (based on critical strike chance). All targets hit are slowed for 2.5 seconds.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
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
                      100
                    ],
                    "units": [
                      "% AD"
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
                "attribute": "Slow",
                "modifiers": [
                  {
                    "values": [
                      30,
                      35,
                      40,
                      45,
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
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Gold Card Bonus:</span> Deals magic damage, increased by 0% - 25% (based on critical strike chance), and stuns the target for a duration.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      15,
                      22.5,
                      30,
                      37.5,
                      45
                    ]
                  },
                  {
                    "values": [
                      100
                    ],
                    "units": [
                      "% AD"
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
                "attribute": "Stun Duration",
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
          50,
          55,
          60,
          65,
          70
        ],
        "cooldown": [
          6
        ],
        "targeting": "Auto",
        "affects": "Enemies, Self",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spell",
        "projectile": "TRUE",
        "notes": "The initial cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nRecasting the ability does not.\nThe first card shown is random but the order always remains the same ( Blue Card,  Red Card,  Gold Card, repeat).\nUpon activation, an indicator visible to allies and enemies appears above Twisted Fate to show him shuffling his deck of cards while remaining in the same order, the card he can choose at every moment glows over the others. The selected card is specified for the duration of the enhanced attack.\nPENDING FOR TEST: The interval until the next card is hovered is 0.528 seconds every time, instead of some times 0.528 and other times 0.495.\nIf the target becomes  untargetable,  dies, or is too far away during the empowered attack's cast time, it is cancelled but not consumed.\nThe empowered attack will trigger against structures and buildings but not wards and plants.",
        "blurb": "Active:  Twisted Fate cycles through three cards over the next few seconds. Pick a Card can be recast within the duration, which selects the current card hovered.",
        "speed": "1500",
        "castTime": "none",
        "effectRadius": "325",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Stacked Deck",
        "icon": "https://cdn.communitydragon.org/latest/champion/TwistedFate/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Twisted Fate gains bonus attack speed. His basic attacks on-hit generate a stack of Stacked Deck, stacking up to 3 times. At 3 stacks, his next basic attack is empowered to consume them all to deal bonus magic damage, reduced to 50% against structures.Twisted Fate gains maximum stacks of Stacked Deck upon respawning.</p>",
            "leveling": [
              {
                "attribute": "Bonus Attack Speed",
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
              },
              {
                "attribute": "Bonus Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      65,
                      90,
                      115,
                      140,
                      165
                    ]
                  },
                  {
                    "values": [
                      20
                    ],
                    "units": [
                      "% bonus AD"
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
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          0
        ],
        "targeting": "Passive",
        "affects": "Enemies, Self",
        "spellshieldable": "false",
        "damageType": "Magic damage",
        "spellEffects": "proc",
        "projectile": "TRUE",
        "notes": "Stacked Deck can be  dodged and/or missed if Twisted Fate is  blinded (the on-hit effect is not consumed in either case) but cannot be  blocked (the enhanced attack is consumed and the bonus damage is still applied).\nAs of patch V14.2, Twisted Fate is intended to gain maximum stacks of Stacked Deck upon learning the ability, but currently does not.(bug)\nThe empowered attack will trigger against structures but not wards.",
        "blurb": "Passive:  Twisted Fate gains  bonus attack speed. His basic attacks  on-hit generate stacks of Stacked Deck, which stacks up to a cap.",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Destiny",
        "icon": "https://cdn.communitydragon.org/latest/champion/TwistedFate/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Twisted Fate marks all targetable enemy champions, revealing them for a duration. Destiny can be recast after 0.5 seconds within the duration.</p>",
            "leveling": [
              {
                "attribute": "Effect Duration",
                "modifiers": [
                  {
                    "values": [
                      6,
                      8,
                      10
                    ],
                    "units": [
                      " seconds"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast - Gate:</span> Twisted Fate channels for 1.5 seconds before blinking to the target location, destroying all projectiles targeting him in the process.</p>"
          }
        ],
        "cost": [
          100
        ],
        "cooldown": [
          180,
          150,
          120
        ],
        "targeting": "Auto / Location",
        "affects": "Enemies, Allies, Self",
        "spellshieldable": "True",
        "resource": "Mana",
        "notes": "Both casts count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nTwisted Fate cannot recast Destiny while  grounded or  rooted.\nThe  nearsight from  Paranoia will overpower the  reveal from Destiny regardless of which one was cast first (enemy champions can still be revealed by Destiny after Paranoia ends if durations permit).\nUsing the recast will inform allies with a ping.\nBoth allies and enemies can see an indicator at the targeted location of where Twisted Fate will appear.\nThe following table refers for interactions while Twisted Fate is  channeling:\nItem actives with cast times as well as  Titanic Hydra are disabled during the channel.\nTrying to cast a disabled item active will buffer it to cast at the completion of the channel.\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Pick a Card is usable.  Wild Cards is disabled.\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nAll the other item-actives are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Zhonya's Hourglass\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll summoner spells are disabled\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath Grounding effects Immobilizing effects Cast-inhibiting effects",
        "castTime": "none",
        "effectRadius": "Global",
        "targetRange": "5500",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Twisted Fate is an infamous cardsharp and swindler who has gambled and charmed his way across much of the known world, earning the enmity and admiration of the rich and foolish alike. He rarely takes things seriously, greeting each day with a mocking smile and an insouciant swagger. In every possible way, Twisted Fate always has an ace up his sleeve."
}
    export default champion