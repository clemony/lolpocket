// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion =  {
  "id": 31,
  "key": "Chogath",
  "name": "Cho'Gath",
  "title": "the Terror of the Void",
  "resource": "Mana",
  "attackType": "Melee",
  "stats": {
    "health": {
      "flat": 644,
      "perLevel": 94
    },
    "healthRegen": {
      "flat": 9,
      "perLevel": 0.85
    },
    "mana": {
      "flat": 270,
      "perLevel": 60
    },
    "manaRegen": {
      "flat": 7.2,
      "perLevel": 0.45
    },
    "armor": {
      "flat": 38,
      "perLevel": 4.5
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 69,
      "perLevel": 4.2
    },
    "movespeed": {
      "flat": 345
    },
    "acquisitionRadius": {
      "flat": 500
    },
    "selectionRadius": {
      "flat": 130
    },
    "pathingRadius": {
      "flat": 50
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
      "flat": 0.658,
      "perLevel": 1.44
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
      "flat": -0.081
    },
    "attackRange": {
      "flat": 125
    }
  },
  "positions": [
    "Top"
  ],
  "roles": [
    "Mage",
    "Specialist",
    "Tank"
  ],
  "attributeRatings": {
    "damage": 2,
    "toughness": 3,
    "control": 2,
    "mobility": 1,
    "utility": 1,
    "abilityReliance": 65,
    "difficulty": 1
  },
  "abilities": {
    "P": [
      {
        "name": "Carnivore",
        "icon": "https://cdn.communitydragon.org/latest/champion/Chogath/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Whenever Cho'Gath kills an enemy, it heals for 18 - 52 (based on level) and restores 4.72 - 9.48 (based on level) mana.</p>"
          }
        ],
        "targeting": "Passive",
        "affects": "Self",
        "notes": "Carnivore will also trigger when Cho'Gath destroys a  turret, but not from other structures.\nCarnivore does not trigger upon destroying  wards and possibly other similar units.",
        "blurb": "Innate: Whenever  Cho'Gath kills an enemy, it  heals and restores  mana."
      }
    ],
    "Q": [
      {
        "name": "Rupture",
        "icon": "https://cdn.communitydragon.org/latest/champion/Chogath/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Cho'Gath ruptures the target location after a 0.627 seconds delay, granting sight of the area before dealing magic damage to enemies within and knocking them up for 1 second, and afterwards slowing them by 60% for 1.5 seconds.</p>",
            "leveling": [
              {
                "attribute": "Magic damage",
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
          6
        ],
        "targeting": "Location",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "notes": "The delay before the rupture does not include the cast time.\nThe animation is visible in  brush and in fog of war.\n Cleansing the  airborne will not prevent the  slow.\nThe slow itself can also not be blocked by  spell shield, but will always be prevented if the airborne was.\nThe area will still rupture even if Cho'Gath dies during the delay.",
        "blurb": "Active:  Cho'Gath ruptures the target location, dealing magic damage and  knocking up enemies within,  slowing them upon landing.",
        "castTime": "0.5",
        "effectRadius": "250",
        "targetRange": "950",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Feral Scream",
        "icon": "https://cdn.communitydragon.org/latest/champion/Chogath/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Cho'Gath roars in a cone in the target direction, dealing magic damage to enemies hit.</p>",
            "leveling": [
              {
                "attribute": "Magic damage",
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
            "description": "Enemy champions and Rift Scuttlers hit are also silenced for a duration.",
            "leveling": [
              {
                "attribute": "Silence Duration",
                "modifiers": [
                  {
                    "values": [
                      1.6,
                      1.7,
                      1.8,
                      1.9,
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
          11,
          10.5,
          10,
          9.5,
          9
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "projectile": "FALSE",
        "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nFeral Scream uses  edge range for enemy targets only; Its range is center-to-edge.",
        "blurb": "Active:  Cho'Gath roars in a cone, dealing magic damage and  silencing enemies hit.",
        "angle": "60°",
        "castTime": "0.5",
        "targetRange": "650",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Vorpal Spikes",
        "icon": "https://cdn.communitydragon.org/latest/champion/Chogath/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Cho'Gath empowers its next 3 basic attacks within 6 seconds to gain 50 bonus range and launch a blast of spikes on-attack in the target's direction. Enemies struck are dealt magic damage and slowed by an amount that decays over 1.5 seconds. The damage based on the target's health ratio is capped at 200 against monsters.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      20,
                      40,
                      60,
                      80,
                      100
                    ]
                  },
                  {
                    "values": [
                      30
                    ],
                    "units": [
                      "% AP"
                    ]
                  },
                  {
                    "values": [
                      2.5,
                      2.85,
                      3.2,
                      3.55,
                      3.9
                    ],
                    "units": [
                      "% (+ 0.5% per Feast stack) of target's maximum health"
                    ]
                  }
                ]
              },
              {
                "attribute": "Total Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      60,
                      120,
                      180,
                      240,
                      300
                    ]
                  },
                  {
                    "values": [
                      90
                    ],
                    "units": [
                      "% AP"
                    ]
                  },
                  {
                    "values": [
                      7.5,
                      8.55,
                      9.6,
                      10.65,
                      11.7
                    ],
                    "units": [
                      "% (+ 1.5% per Feast stack) of target's maximum health"
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
            "description": "The width of the blast of spikes increases based on Cho'Gath's character size modifier when they launch, including but not limited to the bonus from Feast stacks."
          },
          {
            "description": "Vorpal Spikes resets Cho'Gath's basic attack timer."
          }
        ],
        "cost": [
          30
        ],
        "cooldown": [
          8,
          7,
          6,
          5,
          4
        ],
        "targeting": "Auto",
        "affects": "Self / Enemies",
        "spellshieldable": "False",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "aoe",
        "projectile": "TRUE",
        "notes": "The missiles are launched from an offset 25 units in front of Cho'Gath and towards the target's location on-attack-complete.\nWhen attacking enemies within 25 units center-to-center of Cho'Gath, the missile will fire in the opposite direction.\nCho'Gath's size factors into the wideness of the hitbox Vorpal Spikes has. External size modifiers ( Wild Growth) contribute to this.\nAt certain size thresholds, the missile gets replaced by a different one with a different width. At each step, the width grows by 30, except for the 3rd missile, where it only grows by 10.(note)\nSome of the size thresholds are placed very weird.(note)\nThe missile range is unchanged.\nThe empowered attack will trigger but not apply its effects against structures.",
        "blurb": "Active:  Cho'Gath's next few basic attacks launch forth deadly spikes, dealing magic damage to enemies hit based on  Feast stacks and each target's maximum health, and  slowing them.",
        "width": "340 : 500 (based on bonus size)",
        "castTime": "none",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Feast",
        "icon": "https://cdn.communitydragon.org/latest/champion/Chogath/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Cho'Gath attempts to eat the target enemy, dealing them true damage. Against non- champions, the base damage is modified.</p>",
            "leveling": [
              {
                "attribute": "Champion True Damage",
                "modifiers": [
                  {
                    "values": [
                      300,
                      475,
                      650
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
                      10
                    ],
                    "units": [
                      "% bonus health"
                    ]
                  }
                ]
              },
              {
                "attribute": "Non-Champion True Damage",
                "modifiers": [
                  {
                    "values": [
                      1200
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
                      10
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
            "description": "If the target is killed, Cho'Gath gains a stack of Feast. Only 6 stacks can be gained from non-epic monsters or minions."
          },
          {
            "description": "Each stack of Feast increases the cast range of the ability by 2.5, for a maximum increase of 25 at 10 stacks, and grants Cho'Gath bonus health as well as bonus attack range and increased size, capping at 75 bonus attack range and 100% increased size.",
            "leveling": [
              {
                "attribute": "Bonus Health Per Stack",
                "modifiers": [
                  {
                    "values": [
                      80,
                      120,
                      160
                    ]
                  }
                ]
              },
              {
                "attribute": "Bonus Attack Range Per Stack",
                "modifiers": [
                  {
                    "values": [
                      4.7,
                      6.2,
                      7.7
                    ]
                  }
                ]
              },
              {
                "attribute": "Bonus Size Per Stack",
                "modifiers": [
                  {
                    "values": [
                      6,
                      8,
                      10
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
          100
        ],
        "cooldown": [
          80,
          70,
          60
        ],
        "targeting": "Unit",
        "affects": "Enemies / Self",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "True damage",
        "spellEffects": "spell",
        "notes": "The increased size stacks additively with other size increases.\nThe name of the bonus health buff is \"Feast\".\nThe bonus attack range and increase size cap at respectively 16.25 / 13.93 / 12.19 / 10.83 / 9.75 and 16.67 / 14.29 / 12.5 / 11.11 / 10 stacks, with the last stack being effective as the decimal part of the value (no decimal meaning 100% as effective).\nEach stack of Feast increases the damage by 8 / 12 / 16.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).\nIf an enemy  champion has health below the amount of true damage Feast deals, they will be marked for execution. This indicator does not consider  shields or  invulnerability.\nConsuming any additional  Voidgrubs from the same spawn group will be tracked as a \"monster eaten\" for Feast's buff, but will neither grant any bonuses nor count towards the 6-stack limit.(bug)\nWhile not on  cooldown, Feast's ability icon on the HUD can be pinged to announce its damage to  monsters in the ally chat.\nThis indicator is only visible to Cho'Gath.",
        "blurb": "Active:  Cho'Gath devours an enemy, dealing true damage based on Cho'Gath's bonus health. If this attack kills the target, Cho'Gath gains a permanent Feast stack that infinitely stacks.",
        "castTime": "0.25",
        "targetRange": "175",
        "maxCharges": -1
      }
    ]
  },
  "lore": "From the moment Cho'Gath first emerged into the harsh light of Runeterra's sun, the beast was driven by the most pure and insatiable hunger. A perfect expression of the Void's desire to consume all life, Cho'Gath's complex biology quickly converts matter into new bodily growth—increasing its muscle mass and density, or hardening its outer carapace like organic diamond. When growing larger does not suit the Void-spawn's needs, it vomits out the excess material as razor-sharp spines, leaving prey skewered and ready to feast upon later."
}
    export default champion