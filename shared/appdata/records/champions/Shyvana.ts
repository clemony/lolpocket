// Updated Patch 25.17 - 09/18/2025 02:20:04 AM CDT

const champion: Champion = {
  "id": 102,
  "key": "Shyvana",
  "name": "Shyvana",
  "title": "the Half-Dragon",
  "abilities": [
    {
      "key": "P",
      "name": "Fury of the Dragonborn",
      "affects": "Self",
      "blurb": "Innate:  Shyvana gains  bonus armor and  bonus magic resist, which is permanently increased for every  elemental drake and  Elder Dragon her team slays.",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Shyvana gains 5 bonus armor and 5 bonus magic resistance, which are each increased by 5 for every elemental drake and Elder Dragon her team slays.</p>"
        },
        {
          "description": "Additionally, Shyvana deals 20% increased damage to Dragons."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Shyvana/ability-icon/p",
      "notes": "Fury of the Dragonborn's increased damage modifier to  Dragons does not affect true damage.",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Twin Bite",
      "affects": "Enemies",
      "angle": "180°",
      "blurb": "Active:  Shyvana's next basic attack within a few seconds will cause her to quickly strike again, dealing bonus physical damage.",
      "castTime": "none",
      "cooldown": "8 / 7.5 / 7 / 6.5 / 6",
      "cost": "0",
      "damageType": "Physical damage",
      "effectRadius": "325 /  250",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Shyvana empowers her next basic attack within 6 seconds to gain 25 bonus range, deal 100% AD (+ 50% AP) physical damage, and cause her to strike again after 0.25 seconds to deal bonus physical damage.The second strike applies on-hit effects, triggers on-attack effects, and can critically strike for (175% + 40%) damage if the triggering attack does.</p>",
          "leveling": [
            {
              "attribute": "Bonus Physical Damage",
              "modifiers": [
                {
                  "unit": "% AD",
                  "values": "20 / 40 / 60 / 80 / 100"
                },
                {
                  "unit": "% AP",
                  "values": "25"
                }
              ]
            }
          ]
        },
        {
          "description": "After consuming the empowered attack, her next two basic attacks within 5 seconds gain bonus attack speed.",
          "leveling": [
            {
              "attribute": "Bonus Attack Speed",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "50 / 55 / 60 / 65 / 70"
                }
              ]
            }
          ]
        },
        {
          "description": "Basic attacks reduce Twin Bite's current cooldown by 0.5 seconds on-hit."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Dragon Form Bonus:</span> Shyvana attacks enemies in a cone in front of her and additionally applies the second strike to enemies surrounding the primary target. Both the attack and the strike occur at the same time and each of them apply Twin Bite's respective effects to all targets hit, with the exception of the second strike not triggering on-attack effects for secondary targets struck. The attack is affected by critical strike modifiers, applies on-hit effects to all enemies hit, and triggers on-attack effects for every target hit. Additionally, Twin Bite's empowered attack has an uncancellable windup.</p>"
        },
        {
          "description": "Twin Bite resets Shyvana's basic attack timer."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Shyvana/ability-icon/q",
      "maxCharges": -1,
      "notes": "Applies  spell damage and procs  basic damage required effects.\nDragon Form's Twin Bite only applies the attack to enemies that would be hit by the second strike.\nIn Dragon Form, both strikes belong to the same cast instance. In Human Form, they belong in separate ones.\nSince the second strike applies after the ability goes on cooldown, it will reduce its own cooldown.\nUnlike most on-hit effects, the one reducing the cooldown of Twin Bite also triggers against  structures.\nIn Dragon Form, Twin Bite consumes an additional stack of  Hail of Blades. (bug)",
      "spellEffects": "special",
      "spellshieldable": "True",
      "targeting": "Auto"
    },
    {
      "key": "W",
      "name": "Burnout",
      "affects": "Enemies",
      "blurb": "Active:  Shyvana creates a flame aura, gaining a burst of  movement speed and continually dealing magic damage to nearby enemies.",
      "castTime": "none",
      "cooldown": "12",
      "cost": "0",
      "damageType": "Magic damage",
      "effectRadius": "162.5 / 350 / 365 / 380",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Shyvana surrounds herself in flames for 3 seconds, gaining decaying bonus movement speed and dealing magic damage every 0.5 seconds to nearby enemies.</p>",
          "leveling": [
            {
              "attribute": "Bonus Movement Speed",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "30 / 35 / 40 / 45 / 50"
                },
                {
                  "unit": "% per 100 AP",
                  "values": "10"
                }
              ]
            },
            {
              "attribute": "Bonus Movement Speed Decay",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "4.5 / 5.25 / 6 / 6.75 / 7.5"
                }
              ]
            },
            {
              "attribute": "Magic Damage Per Tick",
              "modifiers": [
                {
                  "values": "10 / 15 / 20 / 25 / 30"
                },
                {
                  "unit": "% bonus AD",
                  "values": "10"
                }
              ]
            }
          ]
        },
        {
          "description": "During this time, Shyvana's basic attacks deal bonus magic damage on-hit to surrounding enemies and extend the duration of Burnout by 1 second, which can occur up to 4 times for a total of 4 additional seconds.",
          "leveling": [
            {
              "attribute": "Bonus Magic Damage",
              "modifiers": [
                {
                  "values": "5 / 7 / 9 / 11 / 13"
                },
                {
                  "unit": "% bonus AD",
                  "values": "5"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Dragon Form Bonus:</span> Burnout's radius increases, scaling with Dragon's Descent's rank.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Shyvana/ability-icon/w",
      "maxCharges": -1,
      "notes": "Magic damage on-hit can be dodged with  dodging effects.\nPENDING FOR TEST:: Magic damage on-hit's interactions with  blocking and  blinding effects.",
      "spellEffects": "aoedot",
      "spellshieldable": "False",
      "targeting": "Auto"
    },
    {
      "key": "E",
      "name": "Flame Breath",
      "width": "120",
      "affects": "Enemies",
      "blurb": "Active:  Shyvana unleashes a fireball in the target direction that stops upon hitting an enemy  champion. The fireball deals magic damage to enemies hit and marks them for a few seconds.",
      "castTime": "0.25 / 0.3333",
      "cooldown": "12 / 11 / 10 / 9 / 8",
      "cost": "0",
      "damageType": "Magic damage",
      "effectRadius": "345",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Shyvana unleashes a fireball in the target direction that stops upon hitting an enemy champion, dealing magic damage to all enemies hit and marking them for 5 seconds.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "85 / 125 / 165 / 205 / 245"
                },
                {
                  "unit": "% bonus AD",
                  "values": "50"
                },
                {
                  "unit": "% AP",
                  "values": "70"
                }
              ]
            }
          ]
        },
        {
          "description": "Shyvana's basic attacks against marked enemies are empowered to deal bonus magic damage on-hit equal to 3% (+ 1% per 100 bonus AD) of the target's maximum health, capped at 150 against monsters."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Dragon Form Bonus:</span> The fireball explodes upon hitting an enemy champion or reaching the target location, dealing increased magic damage and creating a scorched field for 4 seconds. Enemies within the field are marked once and dealt 20 - 50 (based on level) (+ 7.5% bonus AD) (+ 10% AP) magic damage every 0.5 seconds.</p>",
          "leveling": [
            {
              "attribute": "Increased Damage",
              "modifiers": [
                {
                  "values": "75 / 78.53 / 82.06 / 85.59 / 89.12 / 92.65 / 96.18 / 99.71 / 103.24 / 106.76 / 110.29 / 113.82 / 117.35 / 120.88 / 124.41 / 127.94 / 131.47 / 135"
                },
                {
                  "values": "85 / 125 / 165 / 205 / 245"
                },
                {
                  "unit": "% bonus AD",
                  "values": "100"
                },
                {
                  "unit": "% AP",
                  "values": "90"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Shyvana/ability-icon/e",
      "maxCharges": -1,
      "notes": "The fireball applies  area damage and the on-hit effect against marked targets deals  proc damage.\nIn Dragon Form, the fiery explosion applies  area damage and the burning scorch deals  persistent area damage to all enemies within the area of effect.\nIn Dragon Form, both areas of effect will be centered on the first champion struck, not at the location the missile collided with them.\nThis ability will cast from wherever the caster is at the end of the cast time.\nIn Dragon Form, the visual mark will not be applied to non-champions, but the debuff will still be applied for gameplay purposes.(bug)\nMagic damage on-hit can be dodged by  dodging effects.\nPENDING FOR TEST:: Magic damage on-hit's interactions with  blocking and  blinding effects.",
      "projectile": "TRUE",
      "speed": "1600 / 1575",
      "spellEffects": "special",
      "spellshieldable": "True",
      "targeting": "Direction / Location",
      "targetRange": "925"
    },
    {
      "key": "R",
      "name": "Dragon's Descent",
      "affects": "Enemies, Self",
      "castTime": "0.25",
      "cooldown": "0",
      "cost": "0",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive - Fury:</span> Dragon's Descent requires 100 Fury to be cast. Shyvana generates Fury per second while alive and in Human form and 2 Fury per basic attack on-hit in either form. Shyvana gains 100 Fury upon learning Dragon's Descent.</p>",
          "leveling": [
            {
              "attribute": "Fury Generation per Second",
              "modifiers": [
                {
                  "values": "1 / 1.5 / 2"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Shyvana transforms into Dragon Form and dashes with displacement immunity to the target location, dealing magic damage to enemies she passes through and carrying them alongside her.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "150 / 250 / 350"
                },
                {
                  "unit": "% AP",
                  "values": "100"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Dragon Form:</span> Shyvana gains bonus health, bonus attack range, and increased size. Her abilities are also empowered to apply an additional effect. She maintains Dragon Form at a recurring cost of Fury, returning to Human Form once all Fury has been depleted.</p>",
          "leveling": [
            {
              "attribute": "Bonus Health",
              "modifiers": [
                {
                  "values": "150 / 250 / 350"
                }
              ]
            },
            {
              "attribute": "Bonus Range",
              "modifiers": [
                {
                  "values": "50 / 65 / 80"
                }
              ]
            },
            {
              "attribute": "Size Increase",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "0 / 8.5 / 16"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Shyvana/ability-icon/r",
      "maxCharges": -1,
      "notes": "Dragon Descent's  displacement immunity begins from the start of the cast time.\nDragon's Descent has a 100 / 80 / 66.67 / 57.14 / 50 seconds effective cooldown when not attacking and not dead.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
      "resource": "Fury",
      "spellEffects": "aoe",
      "spellshieldable": "True",
      "targeting": "Location",
      "targetRange": "850"
    }
  ],
  "adaptiveType": "Physical damage",
  "attackType": "Melee",
  "attributeRatings": {
    "damage": 2,
    "toughness": 2,
    "control": 1,
    "mobility": 2,
    "utility": 1,
    "abilityReliance": 55,
    "difficulty": 1
  },
  "faction": "demacia",
  "lore": "Shyvana is a creature with the magic of a rune shard burning within her heart. Though she often appears humanoid, she can take her true form as a fearsome dragon, incinerating her foes with fiery breath. Having saved the life of the crown prince Jarvan IV, Shyvana now serves uneasily in his royal guard, struggling to find acceptance among the suspicious people of Demacia.",
  "patchLastChanged": "14.23",
  "positions": [
    "Jungle"
  ],
  "price": {
    "blueEssence": 1575,
    "rp": 790
  },
  "releaseDate": "2011-11-01",
  "resource": "Fury",
  "roles": [
    "Fighter",
    "Juggernaut",
    "Mage"
  ],
  "stats": {
    "health": {
      "flat": 665,
      "perLevel": 104
    },
    "healthRegen": {
      "flat": 8.5,
      "perLevel": 0.8
    },
    "mana": {
      "flat": 100
    },
    "manaRegen": {
      "flat": 0
    },
    "armor": {
      "flat": 38,
      "perLevel": 4.55
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 1.5
    },
    "attackDamage": {
      "flat": 66,
      "perLevel": 3
    },
    "movespeed": {
      "flat": 350
    },
    "acquisitionRadius": {
      "flat": 600
    },
    "selectionRadius": {
      "flat": 100
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
      "flat": -0.103
    },
    "attackRange": {
      "flat": 125
    }
  }
}
export default champion