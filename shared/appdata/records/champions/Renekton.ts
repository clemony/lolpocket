// Updated Patch 25.17 - 09/18/2025 02:20:04 AM CDT

const champion: Champion = {
  "id": 58,
  "key": "Renekton",
  "name": "Renekton",
  "title": "the Butcher of the Sands",
  "abilities": [
    {
      "key": "P",
      "name": "Reign of Anger",
      "affects": "Self",
      "blurb": "Innate:  Renekton's basic attacks and ability hits generate  Fury on-hit, which continually expires after a period without fighting. He generates bonus Fury while below half health.",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Renekton's basic attacks against any enemy except structures generate 5 Fury on-hit. After 12 seconds of not generating any Fury, he loses 1 Fury every 0.25 seconds.</p>"
        },
        {
          "description": "While Renekton has at least 50 Fury, his next basic ability consumes 50 Fury to become empowered with an additional effect. Empowered abilities do not generate Fury."
        },
        {
          "description": "Renekton generates 50% bonus Fury from all sources while below 50% of his maximum health."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Renekton/ability-icon/p",
      "notes": "Renekton can generate Fury by collecting  Honeyfruit and Health Relics (interacts with Reign of Anger's bonus generation).",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Cull the Meek",
      "affects": "Enemies / Self",
      "blurb": "Active:  Renekton cleaves around himself, dealing physical damage to nearby enemies. He also generates Fury and  heals for each enemy hit, increased against  champions.",
      "castTime": "none",
      "cooldown": "7",
      "cost": "0",
      "damageType": "Physical damage",
      "effectRadius": "400 / 480",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Renekton cleaves around himself, dealing physical damage to nearby enemies and healing himself for each enemy hit, up to a cap.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "60 / 90 / 120 / 150 / 180"
                },
                {
                  "unit": "% bonus AD",
                  "values": "100"
                }
              ]
            },
            {
              "attribute": "Enhanced Damage",
              "modifiers": [
                {
                  "values": "90 / 135 / 180 / 225 / 270"
                },
                {
                  "unit": "% bonus AD",
                  "values": "140"
                }
              ]
            },
            {
              "attribute": "Healing Cap",
              "modifiers": [
                {
                  "values": "50 / 75 / 100 / 125 / 150"
                }
              ]
            },
            {
              "attribute": "Enhanced Healing Cap",
              "modifiers": [
                {
                  "values": "200 / 300 / 400 / 500 / 600"
                }
              ]
            },
            {
              "attribute": "Non-Champion Healing",
              "modifiers": [
                {
                  "values": "2 / 3 / 4 / 5 / 6"
                },
                {
                  "unit": "% bonus AD",
                  "values": "2"
                }
              ]
            },
            {
              "attribute": "Enhanced Non-Champion Healing",
              "modifiers": [
                {
                  "values": "6 / 9 / 12 / 15 / 18"
                },
                {
                  "unit": "% bonus AD",
                  "values": "6"
                }
              ]
            }
          ]
        },
        {
          "description": "Against champions, the healing is increased.",
          "leveling": [
            {
              "attribute": "Champion Healing",
              "modifiers": [
                {
                  "values": "12 / 20 / 28 / 36 / 44"
                },
                {
                  "unit": "% bonus AD",
                  "values": "17"
                }
              ]
            },
            {
              "attribute": "Enhanced Champion Healing",
              "modifiers": [
                {
                  "values": "36 / 60 / 84 / 108 / 132"
                },
                {
                  "unit": "% bonus AD",
                  "values": "51"
                }
              ]
            }
          ]
        },
        {
          "description": "Renekton generates 2.5 Fury for each non-champion hit and 10 Fury for each champion hit, up to 30 total per cast."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Reign of Anger Bonus:</span> Cull the Meek has increased damage, tripled total healing, and a quadrupled healing cap.</p>"
        },
        {
          "description": "Renekton cannot basic attack nor cast Slice, Dice, or Dominus for 0.25 seconds after Cull the Meek's activation."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Renekton/ability-icon/q",
      "maxCharges": -1,
      "notes": "Healing modifiers such as  Spirit Visage and  Grievous Wounds take effect after Cull the Meek's healing cap.",
      "spellEffects": "spellaoe",
      "spellshieldable": "True",
      "targeting": "Auto"
    },
    {
      "key": "W",
      "name": "Ruthless Predator",
      "affects": "Enemies / Self",
      "blurb": "Active:  Renekton's next basic attack within a few seconds will strike twice, dealing modified physical damage and briefly  stunning the target.",
      "castTime": "none",
      "cooldown": "16 / 14 / 12 / 10 / 8",
      "cost": "0",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Renekton empowers his next basic attack within 7 seconds to have a 0.2-second cast time, have 175 range and strike the target twice, dealing modified physical damage and stunning them for 0.75 seconds. Each strike applies on-hit effects and generates Fury. Hitting an enemy champion generates 10 bonus Fury.</p>",
          "leveling": [
            {
              "attribute": "Total Physical Damage",
              "modifiers": [
                {
                  "values": "10 / 40 / 70 / 100 / 130"
                },
                {
                  "unit": "% AD",
                  "values": "150"
                }
              ]
            },
            {
              "attribute": "Physical Damage Per Hit",
              "modifiers": [
                {
                  "values": "5 / 20 / 35 / 50 / 65"
                },
                {
                  "unit": "% AD",
                  "values": "75"
                }
              ]
            }
          ]
        },
        {
          "description": "Ruthless Predator's first strike can critically strike for (75% + 40%) AD bonus physical damage."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Reign of Anger Bonus:</span> Renekton instead strikes 3 times, completely destroying damage-mitigating shields on the target upon the first strike if they are not a monster, as well as increasing the stun duration to 1.5 seconds.</p>",
          "leveling": [
            {
              "attribute": "Total Physical Damage",
              "modifiers": [
                {
                  "values": "15 / 60 / 105 / 150 / 195"
                },
                {
                  "unit": "% AD",
                  "values": "225"
                }
              ]
            }
          ]
        },
        {
          "description": "Ruthless Predator resets Renekton's basic attack timer. After Ruthless Predator's standard and empowered attack cast time, Renekton cannot move nor cast Cull the Meek, Slice, nor Dice for 0.528 seconds. Casting Dominus ends this lockout prematurely."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Renekton/ability-icon/w",
      "maxCharges": -1,
      "notes": "Each strike of Ruthless Predator deals  basic damage, but the first strike also triggers spell effects by also being tagged as  spell damage.\nIf the target becomes  untargetable or  dies during the empowered attack's cast time, it is cancelled but not consumed.\nThe empowered attack will not trigger against structures.\nThe first two attacks of the  empowered version will generate fury.(bug)\nThe third attack will remove any fury gained this way.\nThis will fail to remove fury gained through  Guinsoo's Rageblade's phantom hit on the first attack.(bug)",
      "spellEffects": "Special",
      "spellshieldable": "True",
      "targeting": "Auto"
    },
    {
      "key": "E",
      "name": "Slice",
      "affects": "Enemies",
      "blurb": "Active:  Renekton  dashes in the target direction, dealing physical damage to enemies he passes through.",
      "castTime": "none",
      "cooldown": "16 / 14.5 / 13 / 11.5 / 10",
      "cost": "0",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Renekton dashes a fixed distance in the target direction, dealing physical damage to enemies he passes through.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "40 / 70 / 100 / 130 / 160"
                },
                {
                  "unit": "% bonus AD",
                  "values": "90"
                }
              ]
            }
          ]
        },
        {
          "description": "If Renekton hits an enemy, he can cast Dice within the next 4 seconds."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Renekton/ability-icon/e",
      "maxCharges": -1,
      "notes": "No additional details.",
      "speed": "760 + 100% movement speed",
      "spellEffects": "spellaoe",
      "spellshieldable": "True",
      "targeting": "Direction"
    },
    {
      "key": "E",
      "name": "Dice",
      "affects": "Enemies",
      "blurb": "Active:  Renekton  dashes in the target direction, dealing physical damage to enemies he passes through.",
      "cooldown": "16 / 14.5 / 13 / 11.5 / 10",
      "cost": "0",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Renekton dashes a fixed distance in the target direction, dealing the same physical damage to enemies he passes through.</p>",
          "leveling": [
            {
              "attribute": "Total Physical Damage",
              "modifiers": [
                {
                  "values": "80 / 140 / 200 / 260 / 320"
                },
                {
                  "unit": "% bonus AD",
                  "values": "180"
                }
              ]
            }
          ]
        },
        {
          "description": "Both Slice and Dice generate 2 Fury for each non-champion hit and 10 Fury for each champion hit, up to 30 total per cast."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Reign of Anger Bonus:</span> Dice deals bonus physical damage and inflicts armor reduction to enemies hit for 4 seconds.</p>",
          "leveling": [
            {
              "attribute": "Bonus Physical Damage",
              "modifiers": [
                {
                  "values": "30 / 45 / 60 / 75 / 90"
                },
                {
                  "unit": "% bonus AD",
                  "values": "45"
                }
              ]
            },
            {
              "attribute": "Total Bonus Damage",
              "modifiers": [
                {
                  "values": "70 / 115 / 160 / 205 / 250"
                },
                {
                  "unit": "% bonus AD",
                  "values": "135"
                }
              ]
            },
            {
              "attribute": "Total Physical Damage",
              "modifiers": [
                {
                  "values": "110 / 185 / 260 / 335 / 410"
                },
                {
                  "unit": "% bonus AD",
                  "values": "225"
                }
              ]
            },
            {
              "attribute": "Armor Reduction",
              "modifiers": [
                {
                  "unit": "% of target's armor",
                  "values": "25 / 27.5 / 30 / 32.5 / 35"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Renekton/ability-icon/e",
      "maxCharges": -1,
      "notes": "No additional details.",
      "spellEffects": "spellaoe",
      "spellshieldable": "True",
      "targeting": "Direction"
    },
    {
      "key": "R",
      "name": "Dominus",
      "affects": "Enemies / Self",
      "blurb": "Active:  Renekton empowers himself for some time, gaining Fury,  bonus health, bonus size,  bonus attack range, and increased area on  Cull the Meek.",
      "castTime": "0.25",
      "cooldown": "120 / 100 / 80",
      "cost": "0",
      "damageType": "Magic damage",
      "effectRadius": "375",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Renekton empowers himself for 15 seconds, gaining bonus health, 20% increased size, 25 bonus attack range, and 20 Fury, as well as increasing Cull the Meek's effect radius.</p>",
          "leveling": [
            {
              "attribute": "Bonus Health",
              "modifiers": [
                {
                  "values": "300 / 500 / 700"
                }
              ]
            }
          ]
        },
        {
          "description": "During this time, he deals magic damage every 0.5 seconds to nearby enemies and generates 5 Fury per second, up to a maximum of 75 Fury.",
          "leveling": [
            {
              "attribute": "Magic Damage Per Tick",
              "modifiers": [
                {
                  "values": "30 / 75 / 120"
                },
                {
                  "unit": "% bonus AD",
                  "values": "5"
                },
                {
                  "unit": "% AP",
                  "values": "5"
                }
              ]
            },
            {
              "attribute": "Total Magic Damage",
              "modifiers": [
                {
                  "values": "900 / 2250 / 3600"
                },
                {
                  "unit": "% bonus AD",
                  "values": "150"
                },
                {
                  "unit": "% AP",
                  "values": "150"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Renekton/ability-icon/r",
      "maxCharges": -1,
      "notes": "Dominus'  cooldown is not refunded if Renekton  dies during the cast animation.\nDominus' bonus health gain does not interact with  Spirit Visage or  Grievous Wounds.\nRenekton retains Dominus' bonus health (if not over his normal maximum) once the duration ends.",
      "spellEffects": "aoedot",
      "spellshieldable": "False",
      "targeting": "Auto"
    }
  ],
  "adaptiveType": "Physical damage",
  "attackType": "Melee",
  "attributeRatings": {
    "damage": 2,
    "toughness": 2,
    "control": 2,
    "mobility": 2,
    "utility": 1,
    "abilityReliance": 45,
    "difficulty": 1
  },
  "faction": "shurima",
  "lore": "Renekton is a terrifying, rage-fueled Ascended being from the scorched deserts of Shurima. Once, he was his empire's most esteemed warrior, leading the nation's armies to countless victories. However, after the empire's fall, Renekton was entombed beneath the sands, and slowly, as the world turned and changed, he succumbed to insanity. Now free once more, he is utterly consumed with finding and killing his brother, Nasus, who he blames, in his madness, for the centuries he spent in darkness.",
  "patchLastChanged": "25.08",
  "positions": [
    "Top"
  ],
  "price": {
    "blueEssence": 2400,
    "rp": 880
  },
  "releaseDate": "2011-01-18",
  "resource": "Fury",
  "roles": [
    "Diver",
    "Fighter",
    "Tank"
  ],
  "stats": {
    "health": {
      "flat": 660,
      "perLevel": 111
    },
    "healthRegen": {
      "flat": 8,
      "perLevel": 0.75
    },
    "mana": {
      "flat": 100
    },
    "manaRegen": {
      "flat": 0
    },
    "armor": {
      "flat": 35,
      "perLevel": 5.2
    },
    "magicResistance": {
      "flat": 28,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 69,
      "perLevel": 4.15
    },
    "movespeed": {
      "flat": 345
    },
    "acquisitionRadius": {
      "flat": 600
    },
    "selectionRadius": {
      "flat": 125
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
      "flat": 0.665,
      "perLevel": 2.75
    },
    "attackSpeedRatio": {
      "flat": 0.665
    },
    "attackCastTime": {
      "flat": 0.3
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackDelayOffset": {
      "flat": -0.123
    },
    "attackRange": {
      "flat": 125
    }
  }
}
export default champion