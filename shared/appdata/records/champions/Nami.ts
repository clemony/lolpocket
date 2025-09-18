// Updated Patch 25.17 - 09/18/2025 02:20:03 AM CDT

const champion: Champion = {
  "id": 267,
  "key": "Nami",
  "name": "Nami",
  "title": "the Tidecaller",
  "abilities": [
    {
      "key": "P",
      "name": "Surging Tides",
      "affects": "Allies",
      "blurb": "Innate:  Nami's abilities grant a burst of  movement speed to allied champions hit. The bonus is doubled from  Tidal Wave.",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Nami's abilities grant 100 (+ 25% AP) bonus movement speed to allied champions hit, decaying over 1.5 seconds. The bonus is[ doubled ][ increased to 200 (+ 50% AP) ]from Tidal Wave.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Nami/ability-icon/p",
      "notes": "Tidal Wave uses a separate empowered buff that has priority over the normal buff, and it will be used even if the full/current strength of the empowered buff is weaker than the full-strength normal buff.\nIf the normal buff remains ongoing when the empowered buff expires, it will then begin with full strength and completely decay over its remaining duration.",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Aqua Prison",
      "affects": "Enemies",
      "blurb": "Active:  Nami tosses a bubble that lands at the target location, dealing magic damage to enemies within as well as briefly  revealing and  suspending them.",
      "castTime": "0.25",
      "cooldown": "12 / 11 / 10 / 9 / 8",
      "cost": "60",
      "damageType": "Magic damage",
      "effectRadius": "200 / 225",
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
                  "unit": "% AP",
                  "values": "50"
                }
              ]
            }
          ]
        },
        {
          "description": "Allied champions are granted Surging Tides in a slightly larger area."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Nami/ability-icon/q",
      "maxCharges": -1,
      "notes": "The combined time from the start of the cast time to the bubble landing is 0.264 seconds + 0.726 seconds = 0.99 seconds.\nAqua Prison provides the status effect that allows  Last Breath to be cast.[2]",
      "projectile": "TRUE",
      "resource": "Mana",
      "spellEffects": "Area of effect",
      "spellshieldable": "True",
      "targeting": "Location",
      "targetRange": "850*"
    },
    {
      "key": "W",
      "name": "Ebb and Flow",
      "affects": "Enemies, Allies",
      "blurb": "Active:  Nami unleashes a stream of water onto the target champion or herself, which then bounces to nearby champions up to twice, alternating between enemies and allies and Nami.",
      "castTime": "0.25",
      "cooldown": "10",
      "cost": "70 / 75 / 80 / 85 / 90",
      "damageType": "Magic damage",
      "effectRadius": "800",
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
                  "unit": "% AP",
                  "values": "40"
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
                  "unit": "% AP",
                  "values": "32"
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
                  "unit": "% AP",
                  "values": "50"
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
                  "unit": "% AP",
                  "values": "40"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Nami/ability-icon/w",
      "maxCharges": -1,
      "notes": "If cast on an enemy with a  spell shield they will not take damage but Ebb and Flow will still continue to bounce, and the target who blocked the ability may be targeted again by the final bounce.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "2500 / 1500",
      "spellEffects": "aoe",
      "spellshieldable": "True",
      "targeting": "Unit",
      "targetRange": "725"
    },
    {
      "key": "E",
      "name": "Tidecaller's Blessing",
      "affects": "Self, Allies",
      "blurb": "Active:  Nami blesses herself or an allied champion for a few seconds, empowering their next three basic attacks or abilities to deal bonus magic damage and briefly  slow enemies.",
      "castTime": "none",
      "cooldown": "11",
      "cost": "55 / 60 / 65 / 70 / 75",
      "damageType": "Magic damage",
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
                  "unit": "% AP",
                  "values": "20"
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
                  "unit": "% AP",
                  "values": "60"
                }
              ]
            },
            {
              "attribute": "Slow",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "15 / 20 / 25 / 30 / 35"
                },
                {
                  "unit": "% per 100 AP",
                  "values": "5"
                }
              ]
            }
          ]
        },
        {
          "description": "Empowered abilities that apply area damage only deal 33% - 66% (based on level) of the bonus damage to non-champions."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Nami/ability-icon/e",
      "maxCharges": -1,
      "notes": "Tidecaller's Blessing has a  forgiveness radius of 175 units.\nThe effect will not trigger against structures nor wards.\nThe empowerment given to allies respects  enchantment redirection.\nDamage instances of Tidecaller's Blessing beyond the first do not count as separate applications for the purposes of  Electrocute and  Phase Rush.",
      "resource": "Mana",
      "spellEffects": "proc",
      "spellshieldable": "False",
      "targeting": "Unit",
      "targetRange": "800"
    },
    {
      "key": "R",
      "name": "Tidal Wave",
      "width": "500",
      "affects": "Enemies",
      "castTime": "0.5",
      "cooldown": "120 / 110 / 100",
      "cost": "100",
      "damageType": "Magic damage",
      "effectRadius": "750",
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
                  "unit": "% AP",
                  "values": "60"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Nami/ability-icon/r",
      "maxCharges": -1,
      "notes": "This ability will cast from wherever the caster is at the end of the cast time.\n Surging Tides will trigger immediately on Nami on-cast.\nThe wave travels over 3.267 seconds.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "850",
      "spellEffects": "spellaoe",
      "spellshieldable": "True",
      "targeting": "Direction",
      "targetRange": "2750"
    }
  ],
  "adaptiveType": "Magic damage",
  "attackType": "Ranged",
  "attributeRatings": {
    "damage": 1,
    "toughness": 1,
    "control": 3,
    "mobility": 1,
    "utility": 2,
    "abilityReliance": 90,
    "difficulty": 2
  },
  "faction": "unaffiliated",
  "lore": "A headstrong young vastaya of the seas, Nami was the first of the Marai tribe to leave the waves and venture onto dry land, when their ancient accord with the Targonians was broken. With no other option, she took it upon herself to complete the sacred ritual that would ensure the safety of her people. Amidst the chaos of this new age, Nami faces an uncertain future with grit and determination, using her Tidecaller staff to summon the strength of the oceans themselves.",
  "patchLastChanged": "14.24",
  "positions": [
    "Support"
  ],
  "price": {
    "blueEssence": 1575,
    "rp": 790
  },
  "releaseDate": "2012-12-07",
  "resource": "Mana",
  "roles": [
    "Enchanter",
    "Mage",
    "Support"
  ],
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
  }
}
export default champion