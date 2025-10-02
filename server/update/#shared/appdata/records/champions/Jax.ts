// Updated Patch 25.19 - 09/27/2025 06:08:57 PM CDT

const champion: Champion = {
  "id": 24,
  "key": "Jax",
  "name": "Jax",
  "title": "Grandmaster at Arms",
  "abilities": [
    {
      "key": "P",
      "name": "Relentless Assault",
      "affects": "Enemies, Self",
      "blurb": "Innate:  Jax's  basic attacks generate  stacks, up to a cap. Stacks expire one at a time.",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Jax's basic attacks generate a stack of Relentless Assault on-attack for 2.5 seconds, refreshing on subsequent attacks and stacking up to 8 times. Stacks expire by one every 0.25 seconds when the duration ends.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Relentless Assault:</span> For each stack, Jax gains 5% - 12.5% (based on level) bonus attack speed, up to a maximum of 40% - 100% (based on level).</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Grandmaster at Angling:</span> While out-of-combat with champions and idle in the river for 10 seconds, Jax will occasionally catch a fish, granting him 1 and 1 ability power for 5 seconds. He catches a fish at an average rate of one every 15 seconds. He also has a 5% chance to catch a rare fish that grants 10 and 10 ability power for 5 seconds.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Jax/ability-icon/p",
      "notes": "Jax will start fishing while idle in the river if he is in-combat with only monsters (e.g. any of the three Epic monsters).(bug)\nJax catching a fish is a random event and will play a special animation.\nThe total number of fish caught during the game is displayed when fishing as  Grandmaster at Angling passive.",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Leap Strike",
      "affects": "Enemies",
      "blurb": "Active:  Jax  dashes to the target unit. If they are an enemy, he deals physical damage.",
      "castTime": "false",
      "cooldown": "8 / 7.5 / 7 / 6.5 / 6",
      "cost": "65",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jax dashes to the target unit's location.</p>"
        },
        {
          "description": "If the target is an enemy and they are in range upon arrival, Jax deals physical damage to them.",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "65 / 105 / 145 / 185 / 225"
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
          "description": "Jax can cast any of his abilities during the dash."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Jax/ability-icon/q",
      "maxCharges": -1,
      "notes": "Leap Strike cannot be cast on structures.\nIf the target is an enemy champion, Jax will be ordered to basic attack them after the dash ends.\n Spell shield will block the damage, including when  empowered.",
      "resource": "Mana",
      "spellEffects": "single",
      "spellshieldable": "true",
      "targeting": "Unit",
      "targetRange": "700"
    },
    {
      "key": "W",
      "name": "Empower",
      "affects": "Self, Enemies",
      "blurb": "Active:  Jax empowers his next basic attack or  Leap Strike against an enemy to deal bonus magic damage.",
      "castTime": "none",
      "cooldown": "7 / 6 / 5 / 4 / 3",
      "cost": "30",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jax empowers his next basic attack or Leap Strike against an enemy within 10 seconds to deal bonus magic damage, reduced to 50% against structures. If Empower is used on a basic attack, it will gain 50 bonus range and have an uncancellable windup.</p>",
          "leveling": [
            {
              "attribute": "Bonus Magic Damage",
              "modifiers": [
                {
                  "values": "50 / 85 / 120 / 155 / 190"
                },
                {
                  "unit": "% AP",
                  "values": "60"
                }
              ]
            }
          ]
        },
        {
          "description": "Empower resets Jax's basic attack timer."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Jax/ability-icon/w",
      "maxCharges": -1,
      "resource": "Mana",
      "spellEffects": "spell",
      "spellshieldable": "true",
      "targeting": "Auto"
    },
    {
      "key": "E",
      "name": "Counter Strike",
      "affects": "Self, Enemies",
      "blurb": "Active:  Jax enters Evasion for a short time: a defensive stance that causes him to  dodge all incoming non- turret basic attacks and take reduced damage from all  area of effect abilities from  champions.",
      "castTime": "None",
      "cooldown": "17 / 15 / 13 / 11 / 9",
      "cost": "50 / 60 / 70 / 80 / 90",
      "damageType": "Magic damage",
      "effectRadius": "375",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jax enters Evasion for 2 seconds: a defensive stance that causes him to dodge all incoming non- turret basic attacks and take 25% reduced damage from all area of effect abilities from champions. Counter Strike can be recast after 1 second, and does so automatically after the duration.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Jax deals magic damage to nearby enemies, with the total damage increased by 20% for each attack dodged, up to a 100% increase, and stuns them for 1 second.</p>",
          "leveling": [
            {
              "attribute": "Minimum Magic Damage",
              "modifiers": [
                {
                  "values": "40 / 70 / 100 / 130 / 160"
                },
                {
                  "unit": "% AP",
                  "values": "70"
                },
                {
                  "unit": "% of target's maximum health",
                  "values": "3.5"
                }
              ]
            },
            {
              "attribute": "Maximum Magic Damage",
              "modifiers": [
                {
                  "values": "80 / 140 / 200 / 260 / 320"
                },
                {
                  "unit": "% AP",
                  "values": "140"
                },
                {
                  "unit": "% of target's maximum health",
                  "values": "7"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Jax/ability-icon/e",
      "maxCharges": -1,
      "notes": "The initial cast and the manual recast count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nCounter Strike will also dodge abilities that can trigger on-hit effects ( Parrrley,  Mystic Shot) which will count towards Counter Strike's increased damage. There are exceptions of abilities that Counter Strike will not dodge but will dodge the damage from on-hit effects that they trigger ( Alpha Strike,  Piercing Darkness).",
      "resource": "Mana",
      "spellEffects": "aoe",
      "spellshieldable": "True",
      "targeting": "Auto"
    },
    {
      "key": "R",
      "name": "Grandmaster-at-Arms",
      "affects": "Enemies, Self",
      "blurb": "Passive:  Jax's  basic attacks generate  stacks. At max stacks, he consumes them to deal bonus magic damage.",
      "castTime": "0.25",
      "cooldown": "110 / 100 / 90",
      "cost": "100",
      "damageType": "Magic damage",
      "effectRadius": "375",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Jax's basic attacks generate a stack of Grandmaster-at-Arms on-hit for 2.5 seconds, refreshing on subsequent hits and stacking up to 2 times. At 2 stacks, his next basic attack on-hit is empowered to have an uncancellable windup and consume all stacks to deal bonus magic damage, reduced to 50% against structures. While Grandmaster-at-Arms is active, the empowered attack triggers at 1 stack instead.</p>",
          "leveling": [
            {
              "attribute": "Bonus Magic Damage",
              "modifiers": [
                {
                  "values": "75 / 130 / 185"
                },
                {
                  "unit": "% AP",
                  "values": "60"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jax swings his lantern around, dealing magic damage to nearby enemies. If this hits a champion, he gains bonus armor, increased for each champion hit beyond the first, and bonus magic resistance equal to 60% of that amount as well as 10% increased size for 8 seconds.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "100 / 175 / 250"
                },
                {
                  "unit": "% AP",
                  "values": "100"
                }
              ]
            },
            {
              "attribute": "Bonus Armor",
              "modifiers": [
                {
                  "values": "25 / 50 / 75"
                },
                {
                  "unit": "% bonus AD",
                  "values": "40"
                }
              ]
            },
            {
              "attribute": "Bonus Magic Resistance",
              "modifiers": [
                {
                  "values": "15 / 30 / 45"
                },
                {
                  "unit": "% bonus AD",
                  "values": "24"
                }
              ]
            },
            {
              "attribute": "Bonus Armor per Champion Hit",
              "modifiers": [
                {
                  "values": "20 / 25 / 30"
                },
                {
                  "unit": "% bonus AD",
                  "values": "10"
                }
              ]
            },
            {
              "attribute": "Bonus Magic Resistance per Champion Hit",
              "modifiers": [
                {
                  "values": "12 / 15 / 18"
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
          "description": "Jax can move during Grandmaster-at-Arms' cast time."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Jax/ability-icon/r",
      "maxCharges": -1,
      "notes": "The attack bonus deals  proc damage. The swing deals  area damage.\nThe bonus resistances are represented by a glowing aura around Jax that grows with each enemy champion hit beyond the first.\nThe bonus magic damage can be  dodged and  blocked but it cannot  miss.\n Spell shield will only block the bonus damage from the third attack if it is  empowered.\nThe empowered attack will trigger but not be consumed nor apply its effects against wards.\nStacks will still be generated when attacking them.\n\nThis ability will cast from wherever the caster is at the end of the cast time.",
      "resource": "Mana",
      "spellEffects": "special",
      "spellshieldable": "special",
      "targeting": "Auto"
    }
  ],
  "adaptiveType": "Physical damage",
  "attackType": "Melee",
  "attributeRatings": {
    "damage": 3,
    "toughness": 2,
    "control": 2,
    "mobility": 2,
    "utility": 1,
    "abilityReliance": 10,
    "difficulty": 1
  },
  "faction": "unaffiliated",
  "fullName": "Saijax Cail-Rynx Kohari Icath’un",
  "lore": "Unmatched in both his skill with unique armaments and his biting sarcasm, Jax is the last known weapons master of Icathia. After his homeland was laid low by its own hubris in unleashing the Void, Jax and his kind vowed to protect what little remained. As magic now rises in the world, this slumbering threat stirs once more, and Jax roams Valoran, wielding the last light of Icathia and testing all warriors he meets to see if any are strong enough to stand beside him...",
  "patchLastChanged": "25.12",
  "positions": [
    "Jungle",
    "Top"
  ],
  "price": {
    "blueEssence": 675,
    "rp": 585
  },
  "releaseDate": "2009-02-21",
  "resource": "Mana",
  "roles": [
    "Assassin",
    "Fighter",
    "Skirmisher"
  ],
  "stats": {
    "health": {
      "flat": 665,
      "perLevel": 103
    },
    "healthRegen": {
      "flat": 8.5,
      "perLevel": 0.55
    },
    "mana": {
      "flat": 339,
      "perLevel": 52
    },
    "manaRegen": {
      "flat": 8.2,
      "perLevel": 0.7
    },
    "armor": {
      "flat": 36,
      "perLevel": 4.2
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 68,
      "perLevel": 4.25
    },
    "movespeed": {
      "flat": 350
    },
    "acquisitionRadius": {
      "flat": 400
    },
    "selectionRadius": {
      "flat": 120
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
      "flat": 0.638,
      "perLevel": 3.4
    },
    "attackSpeedRatio": {
      "flat": 0.638
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
      "flat": 125
    }
  }
}
export default champion