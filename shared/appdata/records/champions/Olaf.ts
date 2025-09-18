// Updated Patch 25.17 - 09/18/2025 02:20:03 AM CDT

const champion: Champion = {
  "id": 2,
  "key": "Olaf",
  "name": "Olaf",
  "title": "the Berserker",
  "abilities": [
    {
      "key": "P",
      "name": "Berserker Rage",
      "affects": "Self",
      "blurb": "Innate:  Olaf gains  bonus attack speed and  life steal based on his missing health.",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Olaf gains bonus attack speed and life steal based on his missing health, up to 50% - 100% (based on level) bonus attack speed and 8% - 25% (based on level) life steal at 70% missing health.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Olaf/ability-icon/p",
      "notes": "No additional details.",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Undertow",
      "width": "180",
      "affects": "Enemies",
      "blurb": "Active:  Olaf throws an axe to the target location that deals physical damage to enemies it passes through, briefly  slowing them based on distance travelled. Enemy  champions hit also have  reduced armor for a few seconds.",
      "castTime": "0.25",
      "cooldown": "9",
      "cost": "50 / 55 / 60 / 65 / 70",
      "damageType": "Physical damage",
      "effectRadius": "100 / 250 / 300",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Olaf throws an axe to the target location that deals physical damage to enemies it passes through and slows them for 1.5 - 2.5 (based on distance traveled) seconds. Enemy champions hit are also inflicted with 20% armor reduction for 4 seconds.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "60 / 110 / 160 / 210 / 260"
                },
                {
                  "unit": "% bonus AD",
                  "values": "100"
                }
              ]
            },
            {
              "attribute": "Slow",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "25 / 30 / 35 / 40 / 45"
                }
              ]
            }
          ]
        },
        {
          "description": "Undertow deals bonus physical damage against monsters.",
          "leveling": [
            {
              "attribute": "Monster Bonus Physical Damage",
              "modifiers": [
                {
                  "values": "10 / 25 / 40 / 55 / 70"
                }
              ]
            },
            {
              "attribute": "Total Monster Damage",
              "modifiers": [
                {
                  "values": "70 / 135 / 200 / 265 / 330"
                },
                {
                  "unit": "% bonus AD",
                  "values": "100"
                }
              ]
            }
          ]
        },
        {
          "description": "The axe remains in place for a duration equal to Undertow's cooldown, granting sight of its surroundings for 0.5 seconds. Olaf can pick up the axe to reduce Undertow's current cooldown to 2.5 - 0 (based on seconds elapsed since axe landed)."
        },
        {
          "description": "Nearby monsters are granted ghosting for 5 seconds upon Undertow's cast."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Olaf/ability-icon/q",
      "maxCharges": -1,
      "notes": "Undertow may hit additional targets upon landing, but not targets already struck in-flight.\nThe axe will land approximately 50 units further than Undertow's target range if cast below maximum range.\nProjectile-intercepting effects (e.g.  Wind Wall,  Unbreakable) cannot destroy the axe, they will instead cause it to stop prematurely and remain on the ground upon collision.\nThe timer for how long an axe stays on the ground does not begin until it has landed, thus it is possible to throw another axe before retrieving the first.\nOlaf cannot pick up an enemy Olaf's axe on the ground.\nThis ability will cast from wherever the caster is at the start of the cast time.",
      "projectile": "SPECIAL",
      "resource": "Mana",
      "speed": "1600",
      "spellEffects": "Aoe",
      "spellshieldable": "True",
      "targeting": "Location",
      "targetRange": "425 / 1000"
    },
    {
      "key": "W",
      "name": "Tough It Out",
      "affects": "Self",
      "blurb": "Active:  Olaf gains tremendous  bonus attack speed for a few seconds, and  shields himself based on his missing health for a short time.",
      "castTime": "none",
      "cooldown": "16 / 15 / 14 / 13 / 12",
      "cost": "50",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Olaf gains bonus attack speed for 5 seconds.</p>",
          "leveling": [
            {
              "attribute": "Bonus Attack Speed",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "40 / 50 / 60 / 70 / 80"
                }
              ]
            }
          ]
        },
        {
          "description": "He also grants himself a shield for 2.5 seconds for an amount that is capped at 70% missing health.",
          "leveling": [
            {
              "attribute": "Shield Strength",
              "modifiers": [
                {
                  "values": "10 / 40 / 70 / 100 / 130"
                },
                {
                  "unit": "% missing health",
                  "values": "17.5"
                }
              ]
            }
          ]
        },
        {
          "description": "Gaining Tough It Out's attack speed buff resets Olaf's basic attack timer."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Olaf/ability-icon/w",
      "maxCharges": -1,
      "notes": "Olaf's attack timer will only reset from casting Tough It Out if the attack speed buff was not already active on him. Refreshing the buff will not grant an attack reset.(bug)",
      "resource": "Mana",
      "targeting": "Auto"
    },
    {
      "key": "E",
      "name": "Reckless Swing",
      "affects": "Enemies",
      "blurb": "Active:  Olaf consumes  health to strike thunder onto the target enemy, dealing true damage. If this kills the target, Olaf  heals the  health cost.",
      "castTime": "0.25 : 0.175 (based on bonus attack speed)",
      "cooldown": "11 / 10 / 9 / 8 / 7",
      "cost": "0",
      "damageType": "True damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Olaf strikes thunder onto the target enemy, dealing true damage.</p>",
          "leveling": [
            {
              "attribute": "True Damage",
              "modifiers": [
                {
                  "values": "70 / 115 / 160 / 205 / 250"
                },
                {
                  "unit": "% AD",
                  "values": "50"
                }
              ]
            }
          ]
        },
        {
          "description": "If Reckless Swing kills the target, Olaf heals himself equal to the health cost."
        },
        {
          "description": "Basic attacks reduce Reckless Swing's cooldown by 1 second, increased to 2 against monsters."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Olaf/ability-icon/e",
      "maxCharges": -1,
      "notes": "The health cost is equal to 30% of the total damage dealt by the ability.\nReckless Swing can be cast even if Olaf doesn't have the sufficient amount of health to pay for the health cost.\nAs with all abilities with health costs, Reckless Swing will not reduce Olaf's health below 1.\nReckless Swing's health refund is considered a  heal therefore it is affected by healing modifiers.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).\nOlaf will also not receive the benefits from killing an enemy if this canceling takes place very shortly before the attack hits the invalidated target, but Reckless Swing's effect will be consumed.(bug)",
      "resource": "Health",
      "spellEffects": "spell",
      "spellshieldable": "True",
      "targeting": "Unit",
      "targetRange": "325"
    },
    {
      "key": "R",
      "name": "Ragnarok",
      "affects": "Self",
      "blurb": "Passive:  Olaf gains  bonus armor and  bonus magic resist.",
      "castTime": "none",
      "cooldown": "100 / 90 / 80",
      "cost": "100",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Olaf gains bonus armor and bonus magic resistance.</p>",
          "leveling": [
            {
              "attribute": "Bonus Resistances",
              "modifiers": [
                {
                  "values": "10 / 15 / 20"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Olaf becomes enraged for 3 seconds, cleansing himself of all crowd control and becoming immune to them, as well as gaining bonus attack damage and 10% increased size. For the first second of Ragnarok, he also gains bonus movement speed while facing visible enemy champions within 2000 units.</p>",
          "leveling": [
            {
              "attribute": "Bonus Attack Damage",
              "modifiers": [
                {
                  "values": "10 / 20 / 30"
                },
                {
                  "unit": "% AD",
                  "values": "25"
                }
              ]
            },
            {
              "attribute": "Bonus Movement Speed",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "20 / 45 / 70"
                }
              ]
            }
          ]
        },
        {
          "description": "Ragnarok's duration is increased by and up to 2.5 seconds for each basic attack on-hit or cast of Reckless Swing against an enemy champion."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Olaf/ability-icon/r",
      "maxCharges": -1,
      "notes": "Ragnarok removes the underlying  stun from  airborne effects, but not the forced displacement, which requires him to use a  blink or  dash ability to override it.\nRagnarok does not negate any debuffs other than  crowd control from being applied unless absolutely necessary.\nThe bonus attack damage updates dynamically over the duration; Increases or reductions in attack damage after the effect has been applied will still be amplified.\nThe 25% attack damage scaling amplifies the flat attack damage bonus as well.\nRagnarok will not expire during  Reckless Swing's cast time.\nRagnarok's duration will not be increased if the basic attack is  dodged.\nRagnarok's duration will be increased if the basic attack is  blocked.",
      "resource": "Mana",
      "targeting": "Auto"
    }
  ],
  "adaptiveType": "Physical damage",
  "attackType": "Melee",
  "attributeRatings": {
    "damage": 2,
    "toughness": 2,
    "control": 2,
    "mobility": 1,
    "utility": 1,
    "abilityReliance": 30,
    "difficulty": 1
  },
  "faction": "freljord",
  "lore": "An unstoppable force of destruction, the axe-wielding Olaf wants nothing but to die in glorious combat. Hailing from the brutal Freljordian peninsula of Lokfar, he once received a prophecy foretelling his peaceful passing—a coward's fate, and a great insult among his people. Seeking death, and fueled by rage, he rampaged across the land, slaughtering scores of great warriors and legendary beasts in search of any opponent who could stop him. Now a brutal enforcer for the Winter's Claw, he seeks his end in the great wars to come.",
  "patchLastChanged": "25.07",
  "positions": [
    "Top"
  ],
  "price": {
    "blueEssence": 1575,
    "rp": 790
  },
  "releaseDate": "2010-06-09",
  "resource": "Mana",
  "roles": [
    "Diver",
    "Fighter",
    "Tank"
  ],
  "stats": {
    "health": {
      "flat": 645,
      "perLevel": 119
    },
    "healthRegen": {
      "flat": 6.5,
      "perLevel": 0.6
    },
    "mana": {
      "flat": 316,
      "perLevel": 50
    },
    "manaRegen": {
      "flat": 7.5,
      "perLevel": 0.6
    },
    "armor": {
      "flat": 35,
      "perLevel": 4.2
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 68,
      "perLevel": 4.7
    },
    "movespeed": {
      "flat": 350
    },
    "acquisitionRadius": {
      "flat": 400
    },
    "selectionRadius": {
      "flat": 111.111
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
      "flat": 0.694,
      "perLevel": 2.7
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
      "flat": -0.066
    },
    "attackRange": {
      "flat": 125
    }
  }
}
export default champion