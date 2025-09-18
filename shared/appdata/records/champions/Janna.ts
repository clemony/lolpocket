// Updated Patch 25.17 - 09/18/2025 02:20:03 AM CDT

const champion: Champion = {
  "id": 40,
  "key": "Janna",
  "name": "Janna",
  "title": "the Storm's Fury",
  "abilities": [
    {
      "key": "P",
      "name": "Tailwind",
      "affects": "Self",
      "blurb": "Innate: Nearby allied champions gain  bonus movement speed while moving toward  Janna.",
      "effectRadius": "1200",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Janna grants 6% bonus movement speed to nearby allied champions that are facing in the direction of her location.</p>"
        },
        {
          "description": "Janna's basic attacks on-hit and Zephyr deal bonus magic damage equal to 30% of her bonus movement speed."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Janna/ability-icon/p",
      "notes": "No additional notes.",
      "spellEffects": "proc",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Howling Gale",
      "width": "240",
      "affects": "Enemies",
      "blurb": "Active:  Janna summons a whirlwind at her current location that matures over a short time, increasing its range, speed, damage, and knock up duration.",
      "castTime": "none",
      "cooldown": "14",
      "cost": "90 / 95 / 100 / 105 / 110",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Janna summons a whirlwind at her current location that charges up over 3 seconds, increasing its range, speed, damage, and knock up duration every second over the duration. Howling Gale's direction is determined by this cast.</p>",
          "leveling": [
            {
              "attribute": "Minimum Magic Damage",
              "modifiers": [
                {
                  "values": "55 / 90 / 125 / 160 / 195"
                },
                {
                  "unit": "% AP",
                  "values": "50"
                }
              ]
            },
            {
              "attribute": "Bonus Damage Per Second",
              "modifiers": [
                {
                  "values": "10 / 15 / 20 / 25 / 30"
                },
                {
                  "unit": "% AP",
                  "values": "10"
                }
              ]
            },
            {
              "attribute": "Maximum Magic Damage",
              "modifiers": [
                {
                  "values": "85 / 135 / 185 / 235 / 285"
                },
                {
                  "unit": "% AP",
                  "values": "80"
                }
              ]
            }
          ]
        },
        {
          "description": "Howling Gale can be recast at any time within the duration, and does so automatically after the duration."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Janna launches the whirlwind in the direction she targeted over 1.25 seconds, dealing magic damage to enemies hit and knocking them up for 0.5 - 1.25 (based on seconds charged) seconds.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Janna/ability-icon/q",
      "maxCharges": -1,
      "notes": "The initial cast and the manual recast count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nThe storm does not interact with enemy units that stand on top of it while it is charging.",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "880 : 1408 (based on seconds charged)",
      "spellEffects": "area of effect",
      "spellshieldable": "True",
      "targeting": "Direction / Auto"
    },
    {
      "key": "W",
      "name": "Zephyr",
      "affects": "Enemies",
      "blurb": "Passive:  Janna gains  bonus movement speed and becomes permanently  ghosted.",
      "castTime": "0.245",
      "cooldown": "8 / 7.5 / 7 / 6.5 / 6",
      "cost": "50 / 55 / 60 / 65 / 70",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Janna is ghosted and gains bonus movement speed.</p>",
          "leveling": [
            {
              "attribute": "Bonus Movement Speed",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "6 / 7 / 8 / 9 / 10"
                },
                {
                  "unit": "% per 100 AP",
                  "values": "2"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Janna sends an air elemental at the target enemy that deals magic damage and slows them for 2 seconds, capped at 99%.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "55 / 85 / 115 / 145 / 175"
                },
                {
                  "unit": "% AP",
                  "values": "50"
                },
                {
                  "unit": "% bonus movement speed",
                  "values": "30"
                }
              ]
            },
            {
              "attribute": "Slow",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "20 / 24 / 28 / 32 / 36"
                },
                {
                  "unit": "% per 100 AP",
                  "values": "6"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Janna/ability-icon/w",
      "maxCharges": -1,
      "notes": "The maximum slow (99%) is reached with 1316.67 / 1250 / 1183.33 / 1116.67 / 1050 ability power.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "1600",
      "spellEffects": "spell",
      "spellshieldable": "True",
      "targeting": "Unit",
      "targetRange": "550"
    },
    {
      "key": "E",
      "name": "Eye of the Storm",
      "affects": "Allies, Allied turrets, Self",
      "blurb": "Passive: Whenever  Janna's abilities  slow or  knock up at least one enemy  champion, she  refunds a portion of  Eye of the Storm's cooldown.",
      "castTime": "none",
      "cooldown": "16 / 15 / 14 / 13 / 12",
      "cost": "70 / 75 / 80 / 85 / 90",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Whenever Janna's abilities slow or knock up at least one enemy champion, 20% of Eye of the Storm's cooldown is refunded. This may occur once per spell cast.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Janna grants the target allied champion or turret, or herself, a shield for 4 seconds.</p>",
          "leveling": [
            {
              "attribute": "Shield Strength",
              "modifiers": [
                {
                  "values": "80 / 120 / 160 / 200 / 240"
                },
                {
                  "unit": "% AP",
                  "values": "55"
                }
              ]
            }
          ]
        },
        {
          "description": "While the shield holds, the target gains bonus attack damage.",
          "leveling": [
            {
              "attribute": "Bonus Attack Damage",
              "modifiers": [
                {
                  "values": "10 / 15 / 20 / 25 / 30"
                },
                {
                  "unit": "% AP",
                  "values": "10"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Janna/ability-icon/e",
      "maxCharges": -1,
      "notes": "Eye of the Storm has a  forgiveness radius of 175 units.\nJanna receives kill credit on enemy champions that are killed by turrets shielded by Eye of the Storm.\nAllied turrets will benefit from the bonus attack damage when targeted by Eye of the Storm.",
      "resource": "Mana",
      "targeting": "Unit",
      "targetRange": "800"
    },
    {
      "key": "R",
      "name": "Monsoon",
      "affects": "Enemies, Allies",
      "castTime": "none",
      "cooldown": "130 / 115 / 100",
      "cost": "100",
      "effectRadius": "700",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Janna unleashes a blast that knocks back all nearby enemies to up to 875 units over 0.5 seconds based on their proximity, though not through terrain.</p>"
        },
        {
          "description": "Janna also channels for up to 3 seconds, healing herself and nearby allies every 0.25 seconds.",
          "leveling": [
            {
              "attribute": "Heal Per Tick",
              "modifiers": [
                {
                  "values": "25 / 37.5 / 50"
                },
                {
                  "unit": "% AP",
                  "values": "12.5"
                }
              ]
            },
            {
              "attribute": "Total Heal",
              "modifiers": [
                {
                  "values": "300 / 450 / 600"
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
      "icon": "https://cdn.communitydragon.org/latest/champion/Janna/ability-icon/r",
      "maxCharges": -1,
      "notes": "The following table refers for interactions while Janna is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nInterrupts\n\n\nAbilities\n\nInterrupts\n\n\nMovement\n\nInterrupts\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
      "resource": "Mana",
      "spellshieldable": "true",
      "targeting": "Auto"
    }
  ],
  "adaptiveType": "Magic damage",
  "attackType": "Ranged",
  "attributeRatings": {
    "damage": 1,
    "toughness": 1,
    "control": 3,
    "mobility": 1,
    "utility": 3,
    "abilityReliance": 100,
    "difficulty": 1
  },
  "faction": "zaun",
  "fullName": "Janna Windforce",
  "lore": "Armed with the power of Runeterra's gales, Janna is a mysterious, elemental wind spirit who protects the dispossessed of Zaun. Some believe she was brought into existence by the pleas of Runeterra's sailors who prayed for fair winds as they navigated treacherous waters and braved rough tempests. Her favor and protection has since been called into the depths of Zaun, where Janna has become a beacon of hope to those in need. No one knows where or when she will appear, but more often than not, she's come to help.",
  "patchLastChanged": "14.20",
  "positions": [
    "Support"
  ],
  "price": {
    "blueEssence": 675,
    "rp": 585
  },
  "releaseDate": "2009-09-02",
  "resource": "Mana",
  "roles": [
    "Enchanter",
    "Mage",
    "Support"
  ],
  "stats": {
    "health": {
      "flat": 570,
      "perLevel": 90
    },
    "healthRegen": {
      "flat": 5.5,
      "perLevel": 0.55
    },
    "mana": {
      "flat": 360,
      "perLevel": 50
    },
    "manaRegen": {
      "flat": 11.5,
      "perLevel": 0.4
    },
    "armor": {
      "flat": 28,
      "perLevel": 4.5
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 47,
      "perLevel": 2.5
    },
    "movespeed": {
      "flat": 325
    },
    "acquisitionRadius": {
      "flat": 550
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
      "flat": 0.625,
      "perLevel": 3
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
      "flat": -0.1
    },
    "attackRange": {
      "flat": 550
    }
  }
}
export default champion