// Updated Patch 25.19 - 10/07/2025 08:16:13 AM CDT

const champion: Champion = {
  "id": 27,
  "key": "Singed",
  "name": "Singed",
  "title": "the Mad Chemist",
  "abilities": [
    {
      "key": "P",
      "name": "Noxious Slipstream",
      "affects": "Self",
      "blurb": "Innate: Whenever  Singed moves near a  champion, he gains  bonus movement speed for a short time, which refreshes on subsequent passes and  stacks up to a cap.",
      "effectRadius": "225",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Whenever Singed moves near a champion, he gains a stack of Noxious Slipstream for 2 seconds, refreshing on subsequent passes and stacking up to 25 times.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Noxious Slipstream:</span> For each stack, Singed gains 25% bonus movement speed, up to a maximum of 625%.</p>"
        },
        {
          "description": "This effect cannot occur on the same target more than once every few seconds."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Singed/ability-icon/p",
      "notes": "No additional details.",
      "onTargetCdStatic": "8",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Poison Trail",
      "affects": "Enemies",
      "blurb": "Toggle:  Singed continually creates a toxic cloud that shortly lingers in his wake, which continually inflicts  poison to enemies within.",
      "castTime": "none",
      "cooldown": "0",
      "cost": "13",
      "damageType": "Magic damage",
      "effectRadius": "180",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Toggle:</span> Singed continually creates a toxic cloud in his wake that lingers for 3.25 seconds. The cloud inflicts poison to enemies within, and resets the duration every 0.5 seconds while they remain.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">poison:</span> The target takes magic damage every 0.25 seconds over 2 seconds. Subsequent inflictions refresh the duration.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage per Tick",
              "modifiers": [
                {
                  "values": "5 / 7.5 / 10 / 12.5 / 15"
                },
                {
                  "unit": "% AP",
                  "values": "10.63"
                }
              ]
            },
            {
              "attribute": "Total Magic Damage",
              "modifiers": [
                {
                  "values": "40 / 60 / 80 / 100 / 120"
                },
                {
                  "unit": "% AP",
                  "values": "85"
                }
              ]
            }
          ]
        },
        {
          "description": "Singed earns the kill credit of enemy minions that are poisoned and would die to the damage of allied minions within the time before the next damage instance."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Singed/ability-icon/q",
      "maxCharges": -1,
      "notes": "Toggle abilities do not count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nThe clouds check for enemy targets in the area immediately upon being spawned. After a 0.25-0.5 second delay, they check every 0.25 seconds again until they fade.\nTargets already with the DoT can have the debuff refreshed only every 0.5 seconds.\nDue to the inconsistent offset between the first and future ticks is it possible for a static target to miss out on one refresh of the debuff, equal to 3 ticks of damage.\nIf Singed has moved less than 90 units since spawning the last poison cloud, it will spawn 35 units in front of him. They also only spawn every 1 second in this case.\nWhen Singed is moving faster than that, the poison clouds spawn more frequently and on top of himself.",
      "resource": "Mana per second",
      "spellEffects": "AoEDoT",
      "targeting": "Auto"
    },
    {
      "key": "W",
      "name": "Mega Adhesive",
      "affects": "Enemies",
      "blurb": "Active:  Singed creates a field of adhesive at the target location for a short time that  grounds and  slows enemies within.",
      "castTime": "0.25",
      "cooldown": "17 / 16 / 15 / 14 / 13",
      "cost": "60 / 70 / 80 / 90 / 100",
      "effectRadius": "265",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Singed spills a potent adhesive that lands at the target location after 0.375 seconds, creating a field for 3 seconds that grounds enemies within and slows them.</p>",
          "leveling": [
            {
              "attribute": "Slow",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "50 / 55 / 60 / 65 / 70"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Singed/ability-icon/w",
      "maxCharges": -1,
      "notes": "The goo missile is VFX only, to convey which location Singed threw the adhesive at. It has a fixed travel time but is independent from when the zone is established. It is not destructible by effects such as  Wind Wall.\nMega Adhesive's  slow and  ground debuffs are each marked as non-dispellable, so they are not removed by most  cleanses. Each is however allowed to be removed by cleanses that also grant immunity to the debuff type, such as  Olaf's  Ragnarok.",
      "projectile": "TRUE",
      "resource": "Mana",
      "spellshieldable": "false",
      "targeting": "Location",
      "targetRange": "1000"
    },
    {
      "key": "E",
      "name": "Fling",
      "affects": "Enemies",
      "blurb": "Active:  Singed  flings the target enemy, dealing magic damage based on their maximum health.",
      "castTime": "0.25",
      "cooldown": "10 / 9.5 / 9 / 8.5 / 8",
      "cost": "60 / 70 / 80 / 90 / 100",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Singed flings the target enemy 550 units over himself over 0.693 seconds, dealing magic damage. The damage based on the target's health ratio is capped at 300 against minions and monsters.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "50 / 60 / 70 / 80 / 90"
                },
                {
                  "unit": "% of target's maximum health",
                  "values": "6 / 6.5 / 7 / 7.5 / 8"
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
          "description": "If the target lands on Mega Adhesive's area of effect after the displacement, they are rooted for a duration.",
          "leveling": [
            {
              "attribute": "Root Duration",
              "modifiers": [
                {
                  "unit": " seconds",
                  "values": "1 / 1.25 / 1.5 / 1.75 / 2"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Singed/ability-icon/e",
      "maxCharges": -1,
      "notes": "Fling can throw enemies over walls (circumstances permitting).\n Slow-immune enemies will not be  rooted when flung into  Mega Adhesive.\nFling is special cased to not  fling  Warwick while Singed is  suppressed by  Infinite Duress after the cast time.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
      "resource": "Mana",
      "spellEffects": "Spell",
      "spellshieldable": "True",
      "targeting": "Unit",
      "targetRange": "125"
    },
    {
      "key": "R",
      "name": "Insanity Potion",
      "affects": "Self",
      "blurb": "Active:  Singed empowers himself for some time with  bonus ability power,  bonus armor,  bonus magic resist,  bonus movement speed,  bonus health regen, and  bonus mana regen.",
      "castTime": "none",
      "cooldown": "100",
      "cost": "100",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Singed empowers himself for 25 seconds with ability power, bonus armor, bonus magic resistance, bonus movement speed, bonus health regeneration, and bonus mana regeneration.</p>",
          "leveling": [
            {
              "attribute": "Bonus Stats",
              "modifiers": [
                {
                  "values": "25 / 60 / 95"
                }
              ]
            },
            {
              "attribute": "HP/Mana Regenerated per 0.5 Seconds",
              "modifiers": [
                {
                  "values": "2.5 / 6 / 9.5"
                }
              ]
            },
            {
              "attribute": "Total HP/Mana Regeneration (per 5 Seconds)",
              "modifiers": [
                {
                  "values": "125 / 300 / 475"
                }
              ]
            }
          ]
        },
        {
          "description": "During this time, Poison Trail additionally applies Grievous Wounds for 1 second, which refreshes every 0.25 seconds while the poison persists."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Singed/ability-icon/r",
      "maxCharges": -1,
      "notes": "No additional notes.",
      "resource": "Mana",
      "targeting": "Auto"
    }
  ],
  "adaptiveType": "Magic damage",
  "attackType": "Melee",
  "attributeRatings": {
    "damage": 2,
    "toughness": 3,
    "control": 2,
    "mobility": 2,
    "utility": 1,
    "abilityReliance": 100,
    "difficulty": 2
  },
  "faction": "zaun",
  "fullName": "Corin Reveck",
  "lore": "Singed is a brilliant alchemist of dubious morality, whose experiments would turn the stomach of even the most cutthroat criminal. Selling his skills to the highest bidder, he cares little for how his noxious concoctions are used, with the ensuing chaos an experiment in itself. His most infamous work is “shimmer”, which enabled the chembarons to turn Zaun into their personal playground—but fueled by madness, Singed is always working on something new, with each endeavor more depraved than the last...",
  "patchLastChanged": "25.08",
  "positions": [
    "Top"
  ],
  "price": {
    "blueEssence": 2400,
    "rp": 260
  },
  "releaseDate": "2009-04-18",
  "resource": "Mana",
  "roles": [
    "Mage",
    "Specialist",
    "Tank"
  ],
  "stats": {
    "health": {
      "flat": 650,
      "perLevel": 96
    },
    "healthRegen": {
      "flat": 9.5,
      "perLevel": 0.55
    },
    "mana": {
      "flat": 330,
      "perLevel": 45
    },
    "manaRegen": {
      "flat": 7.5,
      "perLevel": 0.55
    },
    "armor": {
      "flat": 34,
      "perLevel": 4.2
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 63,
      "perLevel": 3.4
    },
    "movespeed": {
      "flat": 345
    },
    "acquisitionRadius": {
      "flat": 300
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
      "flat": 0.7,
      "perLevel": 1.9
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
      "flat": 125
    }
  }
}
export default champion