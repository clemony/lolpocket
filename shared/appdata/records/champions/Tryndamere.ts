// Updated Patch 25.17 - 09/14/2025 05:55:15 PM CDT

const champion: Champion = {
  "id": 23,
  "key": "Tryndamere",
  "name": "Tryndamere",
  "title": "the Barbarian King",
  "resource": "Fury",
  "attackType": "Melee",
  "adaptiveType": "Physical damage",
  "stats": {
    "health": {
      "flat": 696,
      "perLevel": 108
    },
    "healthRegen": {
      "flat": 8.5,
      "perLevel": 0.9
    },
    "mana": {
      "flat": 100
    },
    "armor": {
      "flat": 33,
      "perLevel": 4.8
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 66,
      "perLevel": 4
    },
    "movespeed": {
      "flat": 345
    },
    "acquisitionRadius": {
      "flat": 400
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
      "flat": 0.67,
      "perLevel": 3.4
    },
    "attackSpeedRatio": {
      "flat": 0.694
    },
    "attackCastTime": {
      "flat": 0.3
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackDelayOffset": {
      "flat": -0.11
    },
    "attackRange": {
      "flat": 175
    }
  },
  "positions": [
    "Top"
  ],
  "roles": [
    "Assassin",
    "Fighter",
    "Skirmisher"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 2,
    "control": 1,
    "mobility": 2,
    "utility": 1,
    "abilityReliance": 10,
    "difficulty": 1
  },
  "abilities": [
    {
      "name": "Battle Fury",
      "key": "P",
      "icon": "https://cdn.communitydragon.org/latest/champion/Tryndamere/ability-icon/p",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Tryndamere generates 5 Fury on his basic attacks, and 10 Fury on critical strikes and each time he kills an enemy. After 8 seconds without dealing or taking damage, Tryndamere loses 5 Fury per second.</p>"
        },
        {
          "description": "Tryndamere gains 0% - 50% (based on Fury) critical strike chance."
        }
      ],
      "targeting": "Passive",
      "affects": "Self",
      "notes": "Fury generation stacks additively: if the given action triggers multiple ways of generating Fury, all of them apply.\nKilling an enemy with a basic attack basic attack generates 15 Fury (5 Fury from the basic attack + 10 Fury from the kill).\nKilling an enemy with a  critical strike generates 20 Fury (10 Fury from the  critical strike + 10 Fury from the kill).\nThe Fury gain for killing an enemy also stacks with  Spinning Slash's Fury generation per enemy hit.\nAttacks against  structures will not grant bonus Fury, but will still reset the timer on Fury decay.\nAttacks against  wards behave like attacks on normal enemies, generating 5 Fury and resetting the decay timer. Attacks against wards can  critically strike, generating 10 Fury.\nAttacks against jungle plants will generate 5 Fury and reset the decay timer. Attacks can also  critically strike, generating 10 Fury. Additionally,  Honeyfruit drops restore 5 Fury for each pod collected and reset the decay timer.\nAttacking an  Honeyfruit and collecting the pods generates 30 Fury, or 35 Fury if the plant was hit by a  critical strike.\nFury is only granted if the basic attack hits and will not be granted if Tryndamere cancels his basic attack windup.",
      "blurb": "Innate:  Tryndamere generates  Fury on his basic attacks,  critical strikes, and enemy kills. His Fury begins to decay after a period without dealing or taking damage."
    },
    {
      "name": "Bloodlust",
      "key": "Q",
      "icon": "https://cdn.communitydragon.org/latest/champion/Tryndamere/ability-icon/q",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Tryndamere gains bonus attack damage, plus an additional amount based on his missing health.</p>",
          "leveling": [
            {
              "attribute": "Bonus Attack Damage",
              "modifiers": [
                {
                  "values": "5 / 10 / 15 / 20 / 25"
                }
              ]
            },
            {
              "attribute": "Additional Bonus AD",
              "modifiers": [
                {
                  "values": "0.15 / 0.25 / 0.35 / 0.45 / 0.55",
                  "unit": " per 1% missing health"
                }
              ]
            },
            {
              "attribute": "Maximum Total Bonus AD",
              "modifiers": [
                {
                  "values": "20 / 35 / 50 / 65 / 80"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Tryndamere consumes all of his Fury to heal himself, increased for every point of Fury consumed.</p>",
          "leveling": [
            {
              "attribute": "Minimum Heal",
              "modifiers": [
                {
                  "values": "30 / 40 / 50 / 60 / 70"
                },
                {
                  "values": "30",
                  "unit": "% AP"
                }
              ]
            },
            {
              "attribute": "Heal Per 1 Fury",
              "modifiers": [
                {
                  "values": "0.5 / 0.95 / 1.4 / 1.85 / 2.3"
                },
                {
                  "values": "1.2",
                  "unit": "% AP"
                }
              ]
            },
            {
              "attribute": "Maximum Heal",
              "modifiers": [
                {
                  "values": "80 / 135 / 190 / 245 / 300"
                },
                {
                  "values": "150",
                  "unit": "% AP"
                }
              ]
            }
          ]
        }
      ],
      "cost": "0",
      "cooldown": "12",
      "targeting": "Auto",
      "affects": "Self",
      "resource": "Fury",
      "notes": "Bloodlust can still be activated even if Tryndamere does not have any Fury.\nBloodlust can be activated at any point of Tryndamere's basic attack.\nNote that if an basic attack will  critically strike is determined when the basic attack starts.\nThis means that if  Bloodlust is cast during Tryndamere's basic attack windup, the attack will use the  critical strike chance given by the Fury before the  Bloodlust cast.\nFurthermore, the Fury for that basic attack will be given once the windup completes. This lets Tryndamere start building Fury immediately.",
      "blurb": "Passive:  Tryndamere gains  bonus attack damage, increased based on his missing health.",
      "castTime": "none",
      "maxCharges": -1
    },
    {
      "name": "Mocking Shout",
      "key": "W",
      "icon": "https://cdn.communitydragon.org/latest/champion/Tryndamere/ability-icon/w",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Tryndamere reduces the bonus attack damage of nearby enemy champions for 4 seconds.</p>",
          "leveling": [
            {
              "attribute": "Attack Damage Reduction",
              "modifiers": [
                {
                  "values": "20 / 35 / 50 / 65 / 80"
                }
              ]
            }
          ]
        },
        {
          "description": "Targets facing in the opposite direction of Tryndamere are also slowed for the duration.",
          "leveling": [
            {
              "attribute": "Slow",
              "modifiers": [
                {
                  "values": "30 / 37.5 / 45 / 52.5 / 60",
                  "unit": "%"
                }
              ]
            }
          ]
        },
        {
          "description": "A nearby enemy champion is required to cast this ability. The target does not have to be visible to be targeted by this ability."
        }
      ],
      "cost": "0",
      "cooldown": "14",
      "targeting": "Proximity",
      "affects": "Enemies",
      "spellshieldable": "True",
      "notes": "Mocking Shout very briefly  reveals Tryndamere if he uses it while in the fog of war to enemies.",
      "blurb": "Active:  Tryndamere reduces the  attack damage of nearby champions for a few seconds. Targets facing away from him are also  slowed.",
      "castTime": "0.3",
      "effectRadius": "850",
      "maxCharges": -1
    },
    {
      "name": "Spinning Slash",
      "key": "E",
      "icon": "https://cdn.communitydragon.org/latest/champion/Tryndamere/ability-icon/e",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Tryndamere dashes to the target location, dealing physical damage to enemies hit and generating 2 Fury per enemy hit, increased to 5 Fury against champions.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "75 / 105 / 135 / 165 / 195"
                },
                {
                  "values": "130",
                  "unit": "% bonus AD"
                },
                {
                  "values": "80",
                  "unit": "% AP"
                }
              ]
            }
          ]
        },
        {
          "description": "Critical strikes on-hit reduce Spinning Slash's current cooldown by 0.75 seconds, doubled to 1.5 seconds against champions."
        },
        {
          "description": "Bloodlust and Undying Rage can be cast during the dash."
        }
      ],
      "cost": "0",
      "cooldown": "12 / 11 / 10 / 9 / 8",
      "targeting": "Location",
      "affects": "Enemies",
      "spellshieldable": "True",
      "damageType": "Physical damage",
      "spellEffects": "aoe",
      "notes": "Spinning Slash's  Fury generation stacks additively with  Battle Fury's Fury generation on kill.\nKilling an minion with Spinning Slash grants 12 Fury (2 Fury from enemy hit + 10 Fury from the kill).\nKilling an champion with Spinning Slash grants 15 Fury (5 Fury from champion hit + 10 Fury from the kill).\nThere is no cooldown on Fury generation on kill with Spinning Slash.\nSpinning Slash has no minimum dash range.\n Flash will interrupt the  dash but Spinning Slash will deal damage to enemies at the new location instantly.\nEnemies already hit by Spinning Slash cannot be damaged more than once.\nTo ensure Spinning Slash deals damage when dashing away from an enemy champion, Tryndamere needs to move r-35 units towards the enemy beyond the distance he can basic attack at, where r represents the enemy's radius and 35 is the distance in units beyond Tryndamere's basic attack range that Spinning Slash can reach.\nThe cooldown reduction upon  critically striking triggers on  wards and jungle plants.\nThe cooldown reduction upon  critically striking triggers even if the attack is  blocked.\nPENDING FOR TEST:: Cooldown reduction on  critical strike interaction with parrying effects ( dodge,  blind).",
      "blurb": "Active:  Tryndamere  dashes to the target location, dealing physical damage and generating  Fury per enemy hit.",
      "castTime": "none",
      "effectRadius": "225",
      "targetRange": "660",
      "maxCharges": -1
    },
    {
      "name": "Undying Rage",
      "key": "R",
      "icon": "https://cdn.communitydragon.org/latest/champion/Tryndamere/ability-icon/r",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Tryndamere becomes enraged, instantly gaining Fury and a minimum health threshold for 5 seconds.</p>",
          "leveling": [
            {
              "attribute": "Fury Gained",
              "modifiers": [
                {
                  "values": "50 / 75 / 100"
                }
              ]
            },
            {
              "attribute": "Minimum Health Threshold",
              "modifiers": [
                {
                  "values": "30 / 50 / 70"
                }
              ]
            }
          ]
        },
        {
          "description": "Undying Rage can be used while affected by cast-inhibiting crowd control."
        }
      ],
      "cost": "0",
      "cooldown": "120 / 100 / 80",
      "targeting": "Auto",
      "affects": "Self",
      "notes": "Undying Rage will prevent  Mel's  Overwhelm's stacks from being consumed.",
      "blurb": "Active:  Tryndamere becomes enraged, gaining  Fury and a  minimum health threshold for a few seconds.",
      "castTime": "none",
      "maxCharges": -1
    }
  ],
  "lore": "Fueled by unbridled fury and rage, Tryndamere once carved his way through the Freljord, openly challenging the greatest warriors of the north to prepare himself for even darker days ahead. The wrathful barbarian has long sought revenge for the annihilation of his clan, though more recently he has found companionship with Ashe, the Avarosan warmother, and a home with her people. His almost inhuman strength and fortitude is legendary, and has delivered him and his new allies countless victories against the greatest of odds.",
  "faction": "freljord",
  "releaseDate": "2009-05-01",
  "patchLastChanged": "14.20",
  "price": {
    "blueEssence": 675,
    "rp": 585
  }
}
export default champion