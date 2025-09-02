// Updated Patch 25.17 - 09/01/2025 05:26:16 PM CDT

const champion: Champion = {
  "id": 44,
  "key": "Taric",
  "name": "Taric",
  "title": "the Shield of Valoran",
  "resource": "Mana",
  "attackType": "Melee",
  "adaptiveType": "Physical damage",
  "stats": {
    "health": {
      "flat": 645,
      "perLevel": 99
    },
    "healthRegen": {
      "flat": 6,
      "perLevel": 0.5
    },
    "mana": {
      "flat": 300,
      "perLevel": 60
    },
    "manaRegen": {
      "flat": 8.5,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 40,
      "perLevel": 4.3
    },
    "magicResistance": {
      "flat": 28,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 55,
      "perLevel": 3.5
    },
    "movespeed": {
      "flat": 340
    },
    "acquisitionRadius": {
      "flat": 350
    },
    "selectionRadius": {
      "flat": 135
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
      "perLevel": 2
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
      "flat": -0.12
    },
    "attackRange": {
      "flat": 150
    }
  },
  "positions": [
    "Middle",
    "Support"
  ],
  "roles": [
    "Enchanter",
    "Support",
    "Tank",
    "Warden"
  ],
  "attributeRatings": {
    "damage": 1,
    "toughness": 2,
    "control": 2,
    "mobility": 1,
    "utility": 3,
    "abilityReliance": 75,
    "difficulty": 2
  },
  "abilities": {
    "P": [
      {
        "name": "Bravado",
        "icon": "https://cdn.communitydragon.org/latest/champion/Taric/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> After casting an ability, Taric empowers his next two basic attacks within 5 seconds to each gain 100% total attack speed, deal 25 - 93 (based on level) (+ 15% bonus armor) bonus magic damage, and reduce the remaining cooldowns of his basic abilities by 1 - 2 (based on ability haste)</p>\nseconds."
          }
        ],
        "targeting": "Passive",
        "affects": "Self",
        "damageType": "Magic damage",
        "spellEffects": "proc",
        "notes": "The first attack refreshes Bravado's duration.\nThe bonus damage will not apply against  structures.\nBravado can be  dodged and  blocked but it cannot miss if Taric is  blinded. The cooldown reduction cannot be negated in any case.",
        "blurb": "Innate: After casting an ability,  Taric empowers his next two basic attacks to gain tremendous  total attack speed, deal bonus magic damage based on his bonus armor, and  reduce the cooldowns of his basic abilities."
      }
    ],
    "Q": [
      {
        "name": "Starlight's Touch",
        "icon": "https://cdn.communitydragon.org/latest/champion/Taric/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Taric heals himself and nearby allied champions for 25 (+ 15% AP) (+ 1% of his maximum health) per charge of Starlight's Touch that he periodically stocks, up to a maximum amount. Bravado's empowered attacks each grant one charge.</p>",
            "leveling": [
              {
                "attribute": "Maximum Charges",
                "modifiers": [
                  {
                    "values": [
                      1,
                      2,
                      3,
                      4,
                      5
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Starlight's Touch can heal up to a maximum of 125 (+ 75% AP) (+ 5% of Taric's maximum health) at 5 charges."
          }
        ],
        "cost": [
          60
        ],
        "cooldown": [
          3
        ],
        "targeting": "Auto",
        "affects": "Allies",
        "resource": "Mana",
        "notes": "The healing will apply heal effects (such as  Summon Aery) prioritizing targets in Taric's circle, based on proximity to him, then in the  Bastioned ally's circle, based on proximity to that ally (including it).",
        "blurb": "Active:  Taric  heals himself and nearby allied champions based on his maximum health per charge of Starlight's Touch that he periodically stocks, up to a cap.  Bravado-empowered attacks each grant one charge.",
        "rechargeRate": [
          15,
          15,
          15,
          15,
          15
        ],
        "castTime": "0.25",
        "effectRadius": "325",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Bastion",
        "icon": "https://cdn.communitydragon.org/latest/champion/Taric/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Taric gains bonus armor and forms a tether between him and the ally bound by Bastion. While the tether persists, the ally also gains the bonus armor and Taric's abilities are mimicked to them, though the effects do not stack.</p>",
            "leveling": [
              {
                "attribute": "Bonus Armor",
                "modifiers": [
                  {
                    "values": [
                      6,
                      7,
                      8,
                      9,
                      10
                    ],
                    "units": [
                      "% of Taric's armor"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Taric grants himself and the target allied champion a shield for 2.5 seconds, binding them with Bastion.</p>",
            "leveling": [
              {
                "attribute": "Shield Strength",
                "modifiers": [
                  {
                    "values": [
                      7,
                      8,
                      9,
                      10,
                      11
                    ],
                    "units": [
                      "% of target's maximum health"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Taric can also self-cast to shield himself; if he self-casts and is untethered, he will become tethered to the nearest ally. Similarly, if he is tethered to an ally and self-casts, both he and the ally will be shielded. Only one ally can be bound at a time, and selecting a new ally overrides the previous bind."
          }
        ],
        "cost": [
          60
        ],
        "cooldown": [
          15
        ],
        "targeting": "Unit",
        "affects": "Self, Allies",
        "resource": "Mana",
        "notes": "The mimicked abilities will still complete even if Taric dies or leaves range.\nAbilities are not mimicked to the bound ally if they are  vanished via  Alpha Strike,  Hallucinate,  Rappel, or  Void Rush.\nMimicked abilities will also cancel if they vanish as above.\nBastion has a  forgiveness radius of 175 units.",
        "blurb": "Passive:  Taric gains  bonus armor and forms a  tether to the ally bound by Bastion. While the tether persists, the ally gains the bonus armor and Taric's abilities are mimicked to them.",
        "tetherRadius": "1300",
        "castTime": "0.25",
        "targetRange": "800",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Dazzle",
        "icon": "https://cdn.communitydragon.org/latest/champion/Taric/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Taric winds up over 1 second, granting ghosting to nearby units, then projects a beam of starlight in the target direction that deals magic damage to enemies hit and stuns them for 1.5 seconds.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      90,
                      130,
                      170,
                      210,
                      250
                    ]
                  },
                  {
                    "values": [
                      50
                    ],
                    "units": [
                      "% AP"
                    ]
                  },
                  {
                    "values": [
                      50
                    ],
                    "units": [
                      "% bonus armor"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Taric can move during Dazzle."
          }
        ],
        "cost": [
          40
        ],
        "cooldown": [
          16,
          15,
          14,
          13,
          12
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "Area of effect",
        "projectile": "FALSE",
        "notes": "Dazzle will aim towards the target direction on-cast when firing from both his and his  Bastion's positions.",
        "blurb": "Active:  Taric winds up over a brief moment, then projects a beam of starlight in the target direction that briefly  stuns enemies hit, dealing magic damage based on his bonus armor.",
        "width": "140",
        "castTime": "none",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Cosmic Radiance",
        "icon": "https://cdn.communitydragon.org/latest/champion/Taric/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Taric calls down a star from above that descends to him over 2.5 seconds. Afterwards, he and nearby allied champions become invulnerable for 2.5 seconds.</p>"
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
        "targeting": "Auto",
        "affects": "Allies",
        "resource": "Mana",
        "notes": "Cosmic Radiance has no effect on  untargetable allies.\nIt will affect the primary unit (the one the star is falling down on) even if they are untargetable.",
        "blurb": "Active:  Taric calls down a star that descends to him over a short time. Afterwards, he and nearby allied champions become  invulnerable for a short time.",
        "castTime": "0.25",
        "effectRadius": "400",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Taric is the Aspect of the Protector, wielding incredible power as Runeterra's guardian of life, love, and beauty. Shamed by a dereliction of duty and exiled from his homeland Demacia, Taric ascended Mount Targon to find redemption, only to discover a higher calling among the stars. Imbued with the might of ancient Targon, the Shield of Valoran now stands ever vigilant against the insidious corruption of the Void.",
  "faction": "mount-targon",
  "releaseDate": "2009-08-19",
  "patchLastChanged": "14.21",
  "price": {
    "blueEssence": 675,
    "rp": 585
  }
}
export default champion