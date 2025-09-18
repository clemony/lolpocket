// Updated Patch 25.17 - 09/18/2025 02:20:04 AM CDT

const champion: Champion = {
  "id": 48,
  "key": "Trundle",
  "name": "Trundle",
  "title": "the Troll King",
  "abilities": [
    {
      "key": "P",
      "name": "King's Tribute",
      "affects": "Self",
      "blurb": "Innate: Enemies that die near  Trundle cause him to  heal based on their maximum health.",
      "effectRadius": "1400",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Whenever a nearby enemy dies, Trundle heals himself for 1.8% - 5.5% (based on level) of the target's maximum health.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Trundle/ability-icon/p",
      "notes": "King's Tribute does not trigger when an enemy structure is destroyed.",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Chomp",
      "affects": "Self, Enemies",
      "blurb": "Active:  Trundle's next basic attack within a few seconds will deal bonus physical damage and briefly  slow the target.",
      "castTime": "none",
      "cooldown": "3.5",
      "cost": "20",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Trundle empowers his next basic attack within 7 seconds to have an uncancellable windup, gain 25 bonus range, deal bonus physical damage and slow the target by 75% for 0.1 seconds.</p>",
          "leveling": [
            {
              "attribute": "Bonus Physical Damage",
              "modifiers": [
                {
                  "values": "10 / 30 / 50 / 70 / 90"
                },
                {
                  "tooltip": "Scaling per rank:\n15 / 25 / 35 / 45 / 55% AD",
                  "unit": "% AD",
                  "values": "15 - 55"
                }
              ]
            }
          ]
        },
        {
          "description": "After using the empowered attack, Trundle gains bonus attack damage for 5 seconds and reduces the target's bonus attack damage by half that amount for the same duration.",
          "leveling": [
            {
              "attribute": "Bonus Attack Damage",
              "modifiers": [
                {
                  "values": "20 / 25 / 30 / 35 / 40"
                }
              ]
            },
            {
              "attribute": "Attack Damage Reduction",
              "modifiers": [
                {
                  "values": "10 / 12.5 / 15 / 17.5 / 20"
                }
              ]
            }
          ]
        },
        {
          "description": "Chomp resets Trundle's basic attack timer."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Trundle/ability-icon/q",
      "maxCharges": -1,
      "notes": "Chomp will still incur the  attack damage increase for Trundle even if the attack is  dodged,  blocked, missed while he is  blinded, or it is blocked by  spell shield.\n Spell shield will only block the attack damage reduction and  slow.",
      "resource": "Mana",
      "spellEffects": "spell",
      "spellshieldable": "special",
      "targeting": "Auto"
    },
    {
      "key": "W",
      "name": "Frozen Domain",
      "affects": "Self",
      "blurb": "Active:  Trundle coats the target location in ice for a period. While he is within the area, he gains  bonus attack speed,  bonus movement speed, and increased  healing from all sources.",
      "castTime": "none",
      "cooldown": "18 / 17 / 16 / 15 / 14",
      "cost": "40",
      "effectRadius": "775",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Trundle coats the target location in ice for 8 seconds. While he is within the area, he gains bonus attack speed, bonus movement speed, and 25% increased healing from all sources.</p>",
          "leveling": [
            {
              "attribute": "Bonus Attack Speed",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "30 / 50 / 70 / 90 / 110"
                }
              ]
            },
            {
              "attribute": "Bonus Movement Speed",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "20 / 28 / 36 / 44 / 52"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Trundle/ability-icon/w",
      "maxCharges": -1,
      "notes": "No additional details.",
      "resource": "Mana",
      "targeting": "Location",
      "targetRange": "750"
    },
    {
      "key": "E",
      "name": "Pillar of Ice",
      "affects": "Enemies",
      "blurb": "Active:  Trundle erects an ice pillar at the target location that remains for a few seconds, which  knocks back units hit. The pillar acts as terrain and  slows nearby enemies.",
      "castTime": "0.25",
      "cooldown": "21 / 19.5 / 18 / 16.5 / 15",
      "cost": "75",
      "effectRadius": "360 / 225",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Trundle erects a pillar of ice at the target location for 6 seconds, which knocks back units hit to 225 units from its center. The pillar acts as terrain and slows nearby enemies.</p>",
          "leveling": [
            {
              "attribute": "Slow",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "34 / 38 / 42 / 46 / 50"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Trundle/ability-icon/e",
      "maxCharges": -1,
      "notes": "Pillar of Ice displaces allied units away from the area but does not render them  airborne.\nAllied  channels (e.g.  Recall,  Teleport) will be  interrupted however.\nPillar of Ice cannot be placed inside impassable terrain. Attempting to do so will cause the pillar to spawn in the nearest available spot of accessible terrain.\nPillar Of Ice triggers effects such as drawing turret aggro,  Sudden Impact and applying  Elixir of Sorcery by dealing 0  proc  true damage.",
      "resource": "Mana",
      "spellshieldable": "False",
      "targeting": "Location",
      "targetRange": "1000"
    },
    {
      "key": "R",
      "name": "Subjugate",
      "affects": "Enemies",
      "blurb": "Active:  Trundle drains the life force of the target enemy champion, dealing magic damage based on their maximum health and  healing for the same amount. He also steals a portion of their  armor and  magic resist, and increases in  size while reducing their  size.",
      "castTime": "0.25",
      "cooldown": "120 / 100 / 80",
      "cost": "100",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Trundle drains the life force out of the target enemy champion, dealing magic damage and healing himself for the same amount. He also steals 40% of their current armor and magic resistance, and increases in size by 18% while reducing the target's size by 9.9%.</p>",
          "leveling": [
            {
              "attribute": "Total Magic Damage",
              "modifiers": [
                {
                  "unit": "%  of the target's maximum health",
                  "values": "20 / 25 / 30"
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
          "description": "Half of the total damage and stealing are applied instantly, and the other half, as well as the size modifiers, are applied every second over the next 4 seconds, even if the target has died.",
          "leveling": [
            {
              "attribute": "Initial Magic Damage",
              "modifiers": [
                {
                  "unit": "%  of the target's maximum health",
                  "values": "10 / 12.5 / 15"
                },
                {
                  "unit": "% per 100 AP",
                  "values": "1"
                }
              ]
            },
            {
              "attribute": "Magic Damage Per Second",
              "modifiers": [
                {
                  "unit": "%  of the target's maximum health",
                  "values": "2.5 / 3.13 / 3.75"
                },
                {
                  "unit": "% per 100 AP",
                  "values": "0.25"
                }
              ]
            }
          ]
        },
        {
          "description": "The armor and magic resistance will remain stolen for 4 seconds after the drain has ended."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Trundle/ability-icon/r",
      "maxCharges": -1,
      "notes": "The total value of armor and magic resist stolen and damage dealt is determined at the time of cast. The stolen stats do not update dynamically relative to the target's stats at any point during the effect, as the steal is applied to the current value of armor and magic resistance.\nTrundle gains 11.7 extra  range on his  basic attacks (relative to his and enemy center) as a consequence of his increased  size.\nSo do his enemies.\nHe gains 3.78 to 6.255 range against the target he subjugated, depending on their base size, and so does the target against him.\nThe debuff on the target also persists through death.\nTrundle will lose the buff if the target loses the debuff, for example if it enters  resurrection.(note)\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
      "resource": "Mana",
      "spellEffects": "dot",
      "spellshieldable": "True",
      "targeting": "Unit",
      "targetRange": "650"
    }
  ],
  "adaptiveType": "Physical damage",
  "attackType": "Melee",
  "attributeRatings": {
    "damage": 2,
    "toughness": 3,
    "control": 1,
    "mobility": 1,
    "utility": 2,
    "abilityReliance": 20,
    "difficulty": 1
  },
  "faction": "freljord",
  "lore": "Trundle is a hulking and devious troll with a particularly vicious streak, and there is nothing he cannot bludgeon into submission—not even the Freljord itself. Fiercely territorial, he chases down anyone foolish enough to enter his domain. Then, his massive club of True Ice at the ready, he chills his enemies to the bone and impales them with jagged, frozen pillars, laughing as they bleed out onto the tundra.",
  "patchLastChanged": "25.07",
  "positions": [
    "Jungle",
    "Top"
  ],
  "price": {
    "blueEssence": 1575,
    "rp": 790
  },
  "releaseDate": "2010-12-01",
  "resource": "Mana",
  "roles": [
    "Fighter",
    "Juggernaut",
    "Tank"
  ],
  "stats": {
    "health": {
      "flat": 650,
      "perLevel": 110
    },
    "healthRegen": {
      "flat": 6,
      "perLevel": 0.75
    },
    "mana": {
      "flat": 340,
      "perLevel": 45
    },
    "manaRegen": {
      "flat": 7.5,
      "perLevel": 0.6
    },
    "armor": {
      "flat": 37,
      "perLevel": 3.9
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 68,
      "perLevel": 4
    },
    "movespeed": {
      "flat": 350
    },
    "acquisitionRadius": {
      "flat": 400
    },
    "selectionRadius": {
      "flat": 135
    },
    "pathingRadius": {
      "flat": 25.767
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
      "perLevel": 2.9
    },
    "attackSpeedRatio": {
      "flat": 0.67
    },
    "attackCastTime": {
      "flat": 0.3
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackDelayOffset": {
      "flat": -0.092
    },
    "attackRange": {
      "flat": 175
    }
  }
}
export default champion