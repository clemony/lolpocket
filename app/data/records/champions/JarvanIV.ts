// Updated Patch 25.15 - 07/31/2025 07:16:02 AM CDT

const champion: Champion =  {
  "id": 59,
  "key": "JarvanIV",
  "name": "Jarvan IV",
  "title": "the Exemplar of Demacia",
  "fullName": "Jarvan Lightshield IV",
  "resource": "Mana",
  "attackType": "Melee",
  "stats": {
    "health": {
      "flat": 640,
      "perLevel": 104
    },
    "healthRegen": {
      "flat": 8,
      "perLevel": 0.7
    },
    "mana": {
      "flat": 300,
      "perLevel": 55
    },
    "manaRegen": {
      "flat": 6.5,
      "perLevel": 0.45
    },
    "armor": {
      "flat": 36,
      "perLevel": 5.2
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 64,
      "perLevel": 3
    },
    "movespeed": {
      "flat": 340
    },
    "acquisitionRadius": {
      "flat": 600
    },
    "selectionRadius": {
      "flat": 125
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
      "perLevel": 2.5
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
      "flat": 175
    }
  },
  "positions": [
    "Jungle"
  ],
  "roles": [
    "Diver",
    "Fighter",
    "Tank"
  ],
  "attributeRatings": {
    "damage": 2,
    "toughness": 2,
    "control": 2,
    "mobility": 2,
    "utility": 2,
    "abilityReliance": 55,
    "difficulty": 1
  },
  "abilities": {
    "P": [
      {
        "name": "Martial Cadence",
        "icon": "https://cdn.communitydragon.org/latest/champion/JarvanIV/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Jarvan IV's basic attacks are empowered to deal bonus physical damage equal to 8% of the target's current health, with a minimum threshold of 20 and capped at 400 against non- champion targets.</p>"
          },
          {
            "description": "This effect cannot occur on the same target more than once every few seconds."
          }
        ],
        "targeting": "Passive",
        "affects": "Enemies",
        "spellshieldable": "False",
        "damageType": "Physical damage",
        "spellEffects": "Proc",
        "notes": "Martial Cadence's damage is based on the current health of the target before any damage of the attack has been dealt.\nMartial Cadence's damage is dealt after the main attack damage.\nIf the target dies to the main attack damage, the additional damage will not be dealt.\nThe empowered attack will not trigger against structures.",
        "blurb": "Innate:  Jarvan IV's basic attacks deal bonus physical damage equal to a portion of the target's current health.",
        "onTargetCdStatic": "6 / 5 / 4 / 3 (based on level)"
      }
    ],
    "Q": [
      {
        "name": "Dragon Strike",
        "icon": "https://cdn.communitydragon.org/latest/champion/JarvanIV/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jarvan IV extends his lance in the target direction, dealing physical damage to enemies hit and inflicting them with armor reduction for 3 seconds.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
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
                      145
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  }
                ]
              },
              {
                "attribute": "Armor Reduction",
                "modifiers": [
                  {
                    "values": [
                      10,
                      14,
                      18,
                      22,
                      26
                    ],
                    "units": [
                      "% of target's armor"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "If the lance connects with a deployed Demacian Standard, Jarvan IV dashes to its location, knocking up nearby enemies around him and along his path for 0.75 seconds."
          },
          {
            "description": "Jarvan IV can cast any of his abilities during the dash."
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
          10,
          9,
          8,
          7,
          6
        ],
        "targeting": "Direction",
        "affects": "Self, Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "Aoe",
        "notes": "The armor reduction is applied after the damage. The damage dealt does not benefit from it in this case.\nThis ability will cast from wherever the caster is at the end of the cast time.\nDragon Strike will still pull Jarvan IV to  Demacian Standard even if he is  immobilized or  grounded.\n Flash will interrupt the  dash to a  Demacian Standard but Jarvan IV will still  knock up and damage enemies he comes in contact with at the new location.\nCasting Flash right before the dash begins will cause Jarvan IV to be pulled to the flag from the new position.\nEnemies already hit by Dragon Strike cannot be affected more than once.\nThe  knockup also slightly moves the target, landing 50-100 units in a random direction.",
        "blurb": "Active:  Jarvan IV extends his lance in the target direction, dealing physical damage to enemies hit and  reducing their armor for a short time.",
        "collisionRadius": "180",
        "width": "136 /  300",
        "castTime": "0.4",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Golden Aegis",
        "icon": "https://cdn.communitydragon.org/latest/champion/JarvanIV/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jarvan IV slows all nearby enemies for 2 seconds.</p>",
            "leveling": [
              {
                "attribute": "Slow",
                "modifiers": [
                  {
                    "values": [
                      15,
                      20,
                      25,
                      30,
                      35
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
            "description": "Jarvan IV also grants himself a shield for 4 seconds, increased by 1.3% of his maximum health for each enemy champion hit by Golden Aegis.",
            "leveling": [
              {
                "attribute": "Shield Strength",
                "modifiers": [
                  {
                    "values": [
                      60,
                      80,
                      100,
                      120,
                      140
                    ]
                  },
                  {
                    "values": [
                      70
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "cost": [
          30
        ],
        "cooldown": [
          9
        ],
        "targeting": "Auto",
        "affects": "Self, Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "notes": "Golden Aegis  deals no damage and thus does not trigger  turret aggro, or effects such as  Elixir of Sorcery and  Sudden Impact's activation.\nGolden Aegis will activate combat status despite not dealing any damage.",
        "blurb": "Active:  Jarvan IV  slows nearby enemies for a short time.",
        "castTime": "none",
        "effectRadius": "600",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Demacian Standard",
        "icon": "https://cdn.communitydragon.org/latest/champion/JarvanIV/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Jarvan IV gains bonus attack speed.</p>",
            "leveling": [
              {
                "attribute": "Bonus Attack Speed",
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
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jarvan IV throws a Demacian flag to the target location, dealing magic damage to enemies within the area.</p>",
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
            "description": "The flag then remains for 8 seconds, granting sight of its surroundings and providing an aura that grants Demacian Standard's passive bonus attack speed to all nearby allied champions as well as Jarvan IV himself."
          }
        ],
        "cost": [
          55
        ],
        "cooldown": [
          12,
          11.5,
          11,
          10.5,
          10
        ],
        "targeting": "Location",
        "affects": "Self, Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "Aoe",
        "notes": "The attack speed granted from a deployed Demacian Standard  stacks additively with Demacian Standard's passive permanent bonus attack speed to Jarvan IV, but the aura from multiple Demacian Standards does not stack.\nJarvan IV gains a total of 40 / 45 / 50 / 55 / 60% bonus attack speed from Demacian Standard while near the flag.\nThe flag has a 13.6  pathing radius and a 65  gameplay radius.\nThe gameplay radius matters to  Dragon Strike.\nDemacian Standard can be targeted by allied abilities ( Teleport,  Safeguard). The target type is the same as a  minion.\nDemacian Standard is  untargetable to enemies.",
        "blurb": "Passive:  Jarvan IV gains  bonus attack speed.",
        "castTime": "none",
        "effectRadius": "200 / 1000 / 700",
        "targetRange": "860",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Cataclysm",
        "icon": "https://cdn.communitydragon.org/latest/champion/JarvanIV/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jarvan IV leaps with displacement immunity to the target enemy champion's location over 0.35 seconds, dealing physical damage to all nearby enemies upon arrival.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      200,
                      325,
                      450
                    ]
                  },
                  {
                    "values": [
                      180
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Upon impact, he creates a circle of impassable terrain that knocks aside enemies within the perimeter over 0.15 seconds, knocking them out of the circle if they are on the outer edge and pulling them in otherwise. The terrain lasts for 3.5 seconds and grants sight of the area. Cataclysm can be recast after 0.75 seconds while the terrain is present."
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Jarvan IV destroys the terrain created by Cataclysm.</p>"
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
        "targeting": "Unit",
        "affects": "Self, Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "Aoe",
        "notes": "The initial cast and the manual recast count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nIf the ability is not manually recasted, the secondary effect will trigger without being considered as an ability activation.\nCataclysm will not deal damage, generate terrain, nor refund its cooldown if Jarvan IV is killed while  leaping.\nThe perimeter is made up of 24 units with 95  pathing radius, 65  gameplay radius and 1350  sight radius each. Only every other unit is rendered visible.\n Searing Charge will not destroy the whole ring but only the part that  Ornn collides with.",
        "blurb": "Active:  Jarvan IV  leaps  Unstoppably to the target enemy champion's location, dealing physical damage to nearby enemies upon impact.",
        "speed": "Varies",
        "castTime": "none",
        "effectRadius": "350 / 1700",
        "targetRange": "650",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Prince Jarvan, scion of the Lightshield dynasty, is heir apparent to the throne of Demacia. Raised to be a paragon of his nation's greatest virtues, he is forced to balance the heavy expectations placed upon him with his own desire to fight on the front lines. Jarvan inspires his troops with his fearsome courage and selfless determination, raising his family's colors high and revealing his true strength as a future leader of his people."
}
    export default champion