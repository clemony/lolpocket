// Updated Patch 25.17 - 09/18/2025 02:20:04 AM CDT

const champion: Champion = {
  "id": 33,
  "key": "Rammus",
  "name": "Rammus",
  "title": "the Armordillo",
  "abilities": [
    {
      "key": "P",
      "name": "Spiked Shell",
      "affects": "Self",
      "blurb": "Innate:  Rammus gains bonus AD equal to a percentage of his total armor and total magic resistance.",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Rammus gains bonus attack damage equal to the sum of 15% total armor and 15% total magic resistance.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Rammus/ability-icon/p",
      "notes": "No additional details.",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Powerball",
      "affects": "Enemies",
      "castTime": "none",
      "collisionRadius": "75",
      "cooldown": "12 / 10.5 / 9 / 7.5 / 6",
      "cost": "60",
      "damageType": "Magic damage",
      "effectRadius": "250",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Rammus channels for up to 6 seconds to roll into a ball, gaining 25% - 39.17% (based on level) bonus total movement speed per second over the duration, up to a maximum of 150% - 235% (based on level). Powerball can be recast after 1 second within the duration, and does so automatically afterwards or upon casting Defensive Ball Curl.</p>"
        },
        {
          "description": "Rammus stops rolling upon colliding with an enemy, dealing magic damage to all nearby enemies and knocking them back 125 units, though not through terrain. Enemies hit are then stunned and revealed for 0.4 seconds, as well as slowed for 1 second.",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "80 / 120 / 160 / 200 / 240"
                },
                {
                  "unit": "% AP",
                  "values": "100"
                }
              ]
            },
            {
              "attribute": "Slow",
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
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Rammus ends Powerball.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Rammus/ability-icon/q",
      "maxCharges": -1,
      "notes": "The initial cast and the manual recast count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nIf the ability is not manually recasted, the secondary effect will trigger without being considered as an ability activation.\nThe bonus movement speed  stacks multiplicatively with other sources of movement speed boosts.\nPowerball will still collide with enemies if Rammus is  ghosted.\nFor the purpose of moving closer to an enemy when right clicking them, Powerball also reduces Rammus'  attack range[ to 0 ][ by 125 ]for the duration.\nRegardless of this, during Powerball Rammus will also always attempt to path towards his target's center instead.\nRammus will ignore unit collision for the purpose of pathfinding during Powerball.\nRammus acts as if he were  ghosted for the duration of Powerball.\nPowerball is not a movement channel, and so will not be  interrupted by  root and  ground.\n Displacement immunity will also resist the application of the  stun.\nThe following table refers for interactions while Rammus is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Defensive Ball Curl interrupts.  Frenzying Taunt is disabled.  Soaring Slam modifies this ability. This ability recasts to end channel.\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
      "resource": "Mana",
      "spellEffects": "Area of effect",
      "spellshieldable": "True",
      "targeting": "Auto"
    },
    {
      "key": "W",
      "name": "Defensive Ball Curl",
      "affects": "Self, Enemies",
      "blurb": "Active:  Rammus enters a defensive stance for a few seconds, gaining  bonus armor and  bonus magic resist. During this time, enemies that land a basic attack against Rammus are dealt magic damage.",
      "castTime": "none",
      "cooldown": "7",
      "cost": "40",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Rammus enters a defensive stance for 7 seconds, gaining bonus armor and bonus magic resistance. While active, enemies that use a basic attack on-hit against Rammus are dealt 15 (+ 10% total armor) (+ 10% total magic resistance) magic damage.</p>",
          "leveling": [
            {
              "attribute": "Bonus Armor",
              "modifiers": [
                {
                  "values": "27 / 32 / 37 / 42 / 47"
                },
                {
                  "tooltip": "Scaling per rank:\n30 / 37.5 / 45 / 52.5 / 60% total armor",
                  "unit": "% total armor",
                  "values": "30 - 60"
                }
              ]
            },
            {
              "attribute": "Bonus Magic Resistance",
              "modifiers": [
                {
                  "values": "27 / 32 / 37 / 42 / 47"
                },
                {
                  "tooltip": "Scaling per rank:\n30 / 37.5 / 45 / 52.5 / 60% total magic resistance",
                  "unit": "% total magic resistance",
                  "values": "30 - 60"
                }
              ]
            }
          ]
        },
        {
          "description": "Defensive Ball Curl can be recast after 1 second within the duration, and does so automatically upon casting Powerball or Soaring Slam."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Rammus ends Defensive Ball Curl.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Rammus/ability-icon/w",
      "maxCharges": -1,
      "notes": "The initial cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nDeactivating the ability manually does not.\nDefensive Ball Curl ends immediately if  Powerball is cast.\nDefensive Ball Curl will return damage from attacks and/or abilities that apply on-hit effects ( Mystic Shot) as well as from  Runaan's Hurricane's Wind's Fury (will not return damage from turrets,  H-28G Evolution Turret, or  Jack in the Box).\nThe resistance scaling will factor from all sources, including Defensive Ball Curl's flat bonus. This will recalculate over the duration.",
      "resource": "Mana",
      "spellEffects": "aoe",
      "spellshieldable": "False",
      "targeting": "Auto"
    },
    {
      "key": "E",
      "name": "Frenzying Taunt",
      "affects": "Enemies, Self",
      "blurb": "Active:  Rammus briefly  taunts the target enemy  champion or  monster.",
      "castTime": "0.25",
      "cooldown": "12",
      "cost": "50",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Rammus taunts the target enemy champion or monster for a duration. Monsters are additionally dealt magic damage upon being affected.</p>",
          "leveling": [
            {
              "attribute": "Taunt Duration",
              "modifiers": [
                {
                  "unit": " seconds",
                  "values": "1.2 / 1.4 / 1.6 / 1.8 / 2"
                }
              ]
            },
            {
              "attribute": "Monster Magic Damage",
              "modifiers": [
                {
                  "values": "80 / 100 / 120 / 140 / 160"
                },
                {
                  "unit": "% AP",
                  "values": "70"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Rammus/ability-icon/e",
      "maxCharges": -1,
      "notes": "Frenzying Taunt, despite being usable on  monsters, does not force them to attack Rammus. He does not draw aggro since the ability does not deal damage.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
      "resource": "Mana",
      "spellshieldable": "True",
      "targeting": "Unit",
      "targetRange": "325"
    },
    {
      "key": "R",
      "name": "Soaring Slam",
      "affects": "Enemies",
      "blurb": "Active:  Rammus  leaps to the target location with  Cc-immunity, dealing magic damage to nearby enemies and briefly  slowing them.",
      "castTime": "None",
      "cooldown": "120 / 105 / 90",
      "cost": "100",
      "damageType": "Magic damage",
      "effectRadius": "400 / 200 / 400",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Rammus leaps to the target location with immunity to crowd control. Upon arrival, he creates an impact that deals magic damage to nearby enemies and slows them for 1.5 seconds.</p>",
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
            },
            {
              "attribute": "Slow",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "30 / 40 / 50"
                }
              ]
            }
          ]
        },
        {
          "description": "If Soaring Slam was cast during Powerball, enemies within the epicenter are also knocked up for 0.75 seconds and are dealt Powerball's damage. Powerball will not collide with enemies during the dash, and its channel will be maintained for the dash and end afterwards."
        },
        {
          "description": "The impact causes 3 aftershocks to burst from the area over 3.5 seconds, each one applying and refreshing the duration of the initial slow."
        },
        {
          "description": "Soaring Slam's damage affects structures and is doubled against turrets."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Rammus/ability-icon/r",
      "maxCharges": -1,
      "notes": "Spell shield will block the impact (including with  Powerball) but not each aftershock.\nRammus is required to have had at least 461.5 movement speed average over the last second to be able to cast Soaring Slam further than its minimum cast range and thereby deal the increased damage at the epicenter.\nThe maximum increased center damage is reachable once  Rammus has had at least 1307.69 movement speed average for the past second.\nSoaring Slam will not impact nor generate aftershocks if the dash is interrupted.\nThe following table refers for interactions while Rammus is dashing:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
      "resource": "Mana",
      "speed": "900 / 2000",
      "spellEffects": "AoE",
      "spellshieldable": "special",
      "targeting": "Location",
      "targetRange": "800 OR 150% movement speed"
    }
  ],
  "adaptiveType": "Physical damage",
  "attackType": "Melee",
  "attributeRatings": {
    "damage": 2,
    "toughness": 3,
    "control": 3,
    "mobility": 2,
    "utility": 1,
    "abilityReliance": 65,
    "difficulty": 1
  },
  "faction": "shurima",
  "lore": "Idolized by many, dismissed by some, mystifying to all, the curious being Rammus is an enigma. Protected by a spiked shell, he inspires increasingly disparate theories on his origin wherever he goes—from demigod, to sacred oracle, to a mere beast transformed by magic. Whatever the truth may be, Rammus keeps his own counsel and stops for no one as he roams the Shuriman desert.",
  "patchLastChanged": "25.13",
  "positions": [
    "Jungle"
  ],
  "price": {
    "blueEssence": 675,
    "rp": 585
  },
  "releaseDate": "2009-07-10",
  "resource": "Mana",
  "roles": [
    "Fighter",
    "Tank",
    "Vanguard"
  ],
  "stats": {
    "health": {
      "flat": 675,
      "perLevel": 100
    },
    "healthRegen": {
      "flat": 8,
      "perLevel": 0.55
    },
    "mana": {
      "flat": 310,
      "perLevel": 33
    },
    "manaRegen": {
      "flat": 7.85,
      "perLevel": 0.5
    },
    "armor": {
      "flat": 35,
      "perLevel": 4.5
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 65,
      "perLevel": 2.75
    },
    "movespeed": {
      "flat": 335
    },
    "acquisitionRadius": {
      "flat": 600
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
      "flat": 0.7,
      "perLevel": 2.215
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
      "flat": -0.071
    },
    "attackRange": {
      "flat": 125
    }
  }
}
export default champion