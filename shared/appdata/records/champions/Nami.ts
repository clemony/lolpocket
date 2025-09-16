// Updated Patch 25.17 - 09/14/2025 05:55:13 PM CDT

const champion: Champion = {
  "id": 267,
  "key": "Nami",
  "name": "Nami",
  "title": "the Tidecaller",
  "resource": "Mana",
  "attackType": "Ranged",
  "adaptiveType": "Magic damage",
  "stats": {
    "health": {
      "flat": 560,
      "perLevel": 88
    },
    "healthRegen": {
      "flat": 5.5,
      "perLevel": 0.55
    },
    "mana": {
      "flat": 365,
      "perLevel": 43
    },
    "manaRegen": {
      "flat": 11.5,
      "perLevel": 0.4
    },
    "armor": {
      "flat": 29,
      "perLevel": 5.2
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 54,
      "perLevel": 3.1
    },
    "movespeed": {
      "flat": 335
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
      "flat": 0.644,
      "perLevel": 2.61
    },
    "attackSpeedRatio": {
      "flat": 0.644
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
    "control": 3,
    "mobility": 1,
    "utility": 2,
    "abilityReliance": 90,
    "difficulty": 2
  },
  "abilities": [
    {
      "name": "Surging Tides",
      "key": "P",
      "icon": "https://cdn.communitydragon.org/latest/champion/Nami/ability-icon/p",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Nami's abilities grant 100 (+ 25% AP) bonus movement speed to allied champions hit, decaying over 1.5 seconds. The bonus is[ doubled ][ increased to 200 (+ 50% AP) ]from Tidal Wave.</p>"
        }
      ],
      "targeting": "Passive",
      "affects": "Allies",
      "notes": "Tidal Wave uses a separate empowered buff that has priority over the normal buff, and it will be used even if the full/current strength of the empowered buff is weaker than the full-strength normal buff.\nIf the normal buff remains ongoing when the empowered buff expires, it will then begin with full strength and completely decay over its remaining duration.",
      "blurb": "Innate:  Nami's abilities grant a burst of  movement speed to allied champions hit. The bonus is doubled from  Tidal Wave."
    },
    {
      "name": "Aqua Prison",
      "key": "Q",
      "icon": "https://cdn.communitydragon.org/latest/champion/Nami/ability-icon/q",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nami launches a bubble at the target location that lands after 0.726 seconds, dealing magic damage to enemies hit and suspending them for 1.5 seconds, during which they are revealed.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "90 / 145 / 200 / 255 / 310"
                },
                {
                  "values": "50",
                  "unit": "% AP"
                }
              ]
            }
          ]
        },
        {
          "description": "Allied champions are granted Surging Tides in a slightly larger area."
        }
      ],
      "cost": "60",
      "cooldown": "12 / 11 / 10 / 9 / 8",
      "targeting": "Location",
      "affects": "Enemies",
      "spellshieldable": "True",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "Area of effect",
      "projectile": "TRUE",
      "notes": "The combined time from the start of the cast time to the bubble landing is 0.264 seconds + 0.726 seconds = 0.99 seconds.\nAqua Prison provides the status effect that allows  Last Breath to be cast.[2]",
      "blurb": "Active:  Nami tosses a bubble that lands at the target location, dealing magic damage to enemies within as well as briefly  revealing and  suspending them.",
      "castTime": "0.25",
      "effectRadius": "200 / 225",
      "targetRange": "850*",
      "maxCharges": -1
    },
    {
      "name": "Ebb and Flow",
      "key": "W",
      "icon": "https://cdn.communitydragon.org/latest/champion/Nami/ability-icon/w",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nami unleashes a stream of water onto the target champion or herself, which then bounces to nearby unaffected champions up to twice, alternating between enemies and allies and Nami.</p>"
        },
        {
          "description": "Ebb and Flow heals allies and deals magic damage to enemies, with each bounce modifying the effectiveness of the next by -10% (+ 10% per 100 AP).",
          "leveling": [
            {
              "attribute": "Heal",
              "modifiers": [
                {
                  "values": "55 / 80 / 105 / 130 / 155"
                },
                {
                  "values": "40",
                  "unit": "% AP"
                }
              ]
            },
            {
              "attribute": "Minimum Heal",
              "modifiers": [
                {
                  "values": "44 / 64 / 84 / 104 / 124"
                },
                {
                  "values": "32",
                  "unit": "% AP"
                }
              ]
            },
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "60 / 95 / 130 / 165 / 200"
                },
                {
                  "values": "50",
                  "unit": "% AP"
                }
              ]
            },
            {
              "attribute": "Minimum Damage",
              "modifiers": [
                {
                  "values": "48 / 76 / 104 / 132 / 160"
                },
                {
                  "values": "40",
                  "unit": "% AP"
                }
              ]
            }
          ]
        }
      ],
      "cost": "70 / 75 / 80 / 85 / 90",
      "cooldown": "10",
      "targeting": "Unit",
      "affects": "Enemies, Allies",
      "spellshieldable": "True",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "aoe",
      "projectile": "TRUE",
      "notes": "If cast on an enemy with a  spell shield they will not take damage but Ebb and Flow will still continue to bounce, and the target who blocked the ability may be targeted again by the final bounce.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
      "blurb": "Active:  Nami unleashes a stream of water onto the target champion or herself, which then bounces to nearby champions up to twice, alternating between enemies and allies and Nami.",
      "speed": "2500 / 1500",
      "castTime": "0.25",
      "effectRadius": "800",
      "targetRange": "725",
      "maxCharges": -1
    },
    {
      "name": "Tidecaller's Blessing",
      "key": "E",
      "icon": "https://cdn.communitydragon.org/latest/champion/Nami/ability-icon/e",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nami blesses herself or an allied champion for 6 seconds, empowering their next 3 basic attacks or abilities to each deal bonus magic damage and slow enemies for 1 second.</p>",
          "leveling": [
            {
              "attribute": "Bonus Magic Damage Per Hit",
              "modifiers": [
                {
                  "values": "20 / 30 / 40 / 50 / 60"
                },
                {
                  "values": "20",
                  "unit": "% AP"
                }
              ]
            },
            {
              "attribute": "Total Bonus Magic Damage",
              "modifiers": [
                {
                  "values": "60 / 90 / 120 / 150 / 180"
                },
                {
                  "values": "60",
                  "unit": "% AP"
                }
              ]
            },
            {
              "attribute": "Slow",
              "modifiers": [
                {
                  "values": "15 / 20 / 25 / 30 / 35",
                  "unit": "%"
                },
                {
                  "values": "5",
                  "unit": "% per 100 AP"
                }
              ]
            }
          ]
        },
        {
          "description": "Empowered abilities that apply area damage only deal 33% - 66% (based on level) of the bonus damage to non-champions."
        }
      ],
      "cost": "55 / 60 / 65 / 70 / 75",
      "cooldown": "11",
      "targeting": "Unit",
      "affects": "Self, Allies",
      "spellshieldable": "False",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "proc",
      "notes": "Tidecaller's Blessing has a  forgiveness radius of 175 units.\nThe effect will not trigger against structures nor wards.\nThe empowerment given to allies respects  enchantment redirection.\nDamage instances of Tidecaller's Blessing beyond the first do not count as separate applications for the purposes of  Electrocute and  Phase Rush.",
      "blurb": "Active:  Nami blesses herself or an allied champion for a few seconds, empowering their next three basic attacks or abilities to deal bonus magic damage and briefly  slow enemies.",
      "castTime": "none",
      "targetRange": "800",
      "maxCharges": -1
    },
    {
      "name": "Tidal Wave",
      "key": "R",
      "icon": "https://cdn.communitydragon.org/latest/champion/Nami/ability-icon/r",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nami surges a tidal wave in the target direction, granting sight around its trajectory as it travels, dealing magic damage to enemies hit, knocking them up for 0.5 seconds, and slowing them by 70% for 2 - 4 (based on distance traveled) seconds.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "150 / 250 / 350"
                },
                {
                  "values": "60",
                  "unit": "% AP"
                }
              ]
            }
          ]
        }
      ],
      "cost": "100",
      "cooldown": "120 / 110 / 100",
      "targeting": "Direction",
      "affects": "Enemies",
      "spellshieldable": "True",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "spellaoe",
      "projectile": "TRUE",
      "notes": "This ability will cast from wherever the caster is at the end of the cast time.\n Surging Tides will trigger immediately on Nami on-cast.\nThe wave travels over 3.267 seconds.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
      "speed": "850",
      "width": "500",
      "castTime": "0.5",
      "effectRadius": "750",
      "targetRange": "2750",
      "maxCharges": -1
    }
  ],
  "lore": "A headstrong young vastaya of the seas, Nami was the first of the Marai tribe to leave the waves and venture onto dry land, when their ancient accord with the Targonians was broken. With no other option, she took it upon herself to complete the sacred ritual that would ensure the safety of her people. Amidst the chaos of this new age, Nami faces an uncertain future with grit and determination, using her Tidecaller staff to summon the strength of the oceans themselves.",
  "faction": "unaffiliated",
  "releaseDate": "2012-12-07",
  "patchLastChanged": "14.24",
  "price": {
    "blueEssence": 1575,
    "rp": 790
  }
}
export default champion