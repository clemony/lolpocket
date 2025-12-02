// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const champion: Champion = {
  "id": 887,
  "key": "Gwen",
  "name": "Gwen",
  "title": "The Hallowed Seamstress",
  "abilities": [
    {
      "key": "P",
      "name": "A Thousand Cuts",
      "affects": "Self, Enemies",
      "blurb": "Innate:  Gwen's  basic attacks  on-hit and damaging abilities deal bonus magic damage equal to a portion of the target's maximum health and  heal her for a portion of this damage dealt against  champions.",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Gwen's basic attacks on-hit, the center of Snip Snip!, and Needlework deal bonus magic damage equal to 1% (+ 0.6% per 100 AP) of the target's maximum health.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">A Thousand Cuts is modified based on the target:</span></p>\n Heals Gwen for 50% of post-mitigation damage dealt against champions, capped at 10 - 25 (based on level) (+ 6.5% AP) per instance.\nDeals an additional 8 - 30 (based on level) bonus magic damage against minions that are below 40% health.\nDeals a maximum of 5 (+ 10% AP) magic damage against monsters."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Gwen/ability-icon/p",
      "notes": "The attacks do not deal the bonus damage against  structures.",
      "spellEffects": "proc",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Snip Snip!",
      "width": "75 / 360 /  25",
      "affects": "Enemies",
      "blurb": "Passive:  Gwen's  basic attacks  on-hit generate  stacks of Snippy, up to a cap.",
      "castTime": "0.5",
      "cooldown": "6.5 / 5.75 / 5 / 4.25 / 3.5",
      "cost": "40",
      "damageType": "Other damage",
      "effectRadius": "-50 : 465",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Gwen's basic attacks generate a stack of Snippy on-hit for 6 seconds, stacking up to 4 times and refreshing on subsequent attacks.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Gwen snips at least twice with her scissors in a cone in the target direction over the cast time, dealing magic damage per snip to all enemies within the area, with the final snip dealing increased damage. The center of each snip converts 50% of the damage to true damage, then applies A Thousand Cuts. Snip Snip! deals 75% damage against minions, and executes them on the first damage instance if they are below 20% health.</p>",
          "leveling": [
            {
              "attribute": "Damage per Snip",
              "modifiers": [
                {
                  "values": "10 / 15 / 20 / 25 / 30"
                },
                {
                  "unit": "% AP",
                  "values": "5"
                }
              ]
            },
            {
              "attribute": "Center Damage per Snip",
              "modifiers": [
                {
                  "values": "10 / 15 / 20 / 25 / 30"
                },
                {
                  "unit": "% AP",
                  "values": "5"
                },
                {
                  "unit": "% (+ 0.6% per 100 AP) of the target's maximum health",
                  "values": "1"
                }
              ]
            },
            {
              "attribute": "Final Snip Damage",
              "modifiers": [
                {
                  "values": "60 / 85 / 110 / 135 / 160"
                },
                {
                  "unit": "% AP",
                  "values": "35"
                }
              ]
            },
            {
              "attribute": "Final Snip Center Damage",
              "modifiers": [
                {
                  "values": "60 / 85 / 110 / 135 / 160"
                },
                {
                  "unit": "% AP",
                  "values": "35"
                },
                {
                  "unit": "% (+ 0.6% per 100 AP) of the target's maximum health",
                  "values": "1"
                }
              ]
            }
          ]
        },
        {
          "description": "If Gwen has any Snippy stacks, she consumes them to snip an additional time for each.",
          "leveling": [
            {
              "attribute": "Minimum Damage",
              "modifiers": [
                {
                  "values": "70 / 100 / 130 / 160 / 190"
                },
                {
                  "unit": "% AP",
                  "values": "40"
                }
              ]
            },
            {
              "attribute": "Minimum Center Damage",
              "modifiers": [
                {
                  "values": "70 / 100 / 130 / 160 / 190"
                },
                {
                  "unit": "% AP",
                  "values": "40"
                },
                {
                  "unit": "% (+ 1.2% per 100 AP) of the target's maximum health",
                  "values": "2"
                }
              ]
            },
            {
              "attribute": "Maximum Damage",
              "modifiers": [
                {
                  "values": "110 / 160 / 210 / 260 / 310"
                },
                {
                  "unit": "% AP",
                  "values": "60"
                }
              ]
            },
            {
              "attribute": "Maximum Center Damage",
              "modifiers": [
                {
                  "values": "110 / 160 / 210 / 260 / 310"
                },
                {
                  "unit": "% AP",
                  "values": "60"
                },
                {
                  "unit": "% (+ 3.6% per 100 AP) of the target's maximum health",
                  "values": "6"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Gwen/ability-icon/q",
      "notes": "Snip Snip!'s total hitbox uses the intersection of a trapezoid and a circle. Enemies are hit by Snip Snip! only when their hitbox overlaps with both of those areas, or with Gwen's  gameplay radius.\nSubsequent basic attacks on-hit also refresh the duration of Snippy stacks.\nThe amount of Snippy stacks Gwen has is indicated below her health bar.\n Spell shield blocks only one snip.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe first snip happens at 0.13 seconds, the last one at the end of the cast time.\nBonus snips from Snippy stacks each happen at 0.45, 0.4, 0.35 and 0.23 seconds into the cast time.",
      "resource": "Mana",
      "spellEffects": "aoe",
      "spellshieldable": "special",
      "targeting": "Direction"
    },
    {
      "key": "W",
      "name": "Hallowed Mist",
      "affects": "Self",
      "blurb": "Active:  Gwen summons the Hallowed Mist upon her current location for a few seconds. Hallowed Mist can be recast within this time, and does so automatically if she attempts to leave the area.",
      "castTime": "none",
      "cooldown": "22 / 21 / 20 / 19 / 18",
      "cost": "60",
      "effectRadius": "480",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Gwen summons the Hallowed Mist upon her current location, lasting for 4 seconds. Hallowed Mist can be recast after 0.5 seconds, and does so automatically if Gwen attempts to leave the area.</p>"
        },
        {
          "description": "While inside the mist, Gwen becomes ghosted, gains bonus armor and bonus magic resistance and is untargetable to all enemies (except turrets and monsters) outside of the mist.",
          "leveling": [
            {
              "attribute": "Bonus Resistances",
              "modifiers": [
                {
                  "values": "22 / 24 / 26 / 28 / 30"
                },
                {
                  "unit": "% AP",
                  "values": "7"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Gwen commands the mist to move to her current location.</p>"
        },
        {
          "description": "Gwen negates all attacks by monsters outside of the mist."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Gwen/ability-icon/w",
      "notes": "Hallowed Mist's  untargetability does not apply to  monsters nor  turrets, meaning they are allowed to gain aggro against Gwen and attack her regardless of being in the mist or not.\nHowever, Gwen will not take damage from monsters that hit her and are outside of the mist.\nHallowed Mist does not grant untargetability against enemy  pets inside the zone even if their source is not.\nAll  projectiles targeted at Gwen by enemy champions outside the mist are  destroyed upon attempting to pass through the mist or being inside the mist.\nTargeted projectiles sourced by minions or monsters will not be destroyed and can still hit Gwen even if they are outside of the zone.\nIf Gwen  dashes out of the area, the mist will automatically move to the dash's destination instead of Gwen's location.\nThe mist will stop moving immediately if the dash is interrupted.\nThe recast will move the mist's center 75 units through Gwen's location at the time.\nIf she is  dashing, the mist will move 75 units through her dash destination instead.\nThe mist will teleport to Gwen's location if she  blinks a far distance.\nEnemy champions outside the mist are indicated with a broken sword.\nHallowed Mist will indicate that Gwen is Immune whenever an effect attempts to hit Gwen.",
      "resource": "Mana",
      "speed": "2000",
      "targeting": "Auto"
    },
    {
      "key": "E",
      "name": "Skip 'n Slash",
      "affects": "Self",
      "blurb": "Active:  Gwen  dashes to the target location, and afterwards empowers her  basic attacks for a duration, gaining  bonus attack speed, magic damage, and  range.",
      "castTime": "none",
      "cooldown": "13 / 12.5 / 12 / 11.5 / 11",
      "cost": "35",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Gwen dashes to the target location, then empowers her basic attacks within the next 4 seconds to deal 15 (+ 20% AP) bonus magic damage on-hit and gain bonus attack speed and 75 bonus attack range.</p>",
          "leveling": [
            {
              "attribute": "Bonus Attack Speed",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "20 / 35 / 50 / 65 / 80"
                }
              ]
            }
          ]
        },
        {
          "description": "Gwen's first basic attack within the duration refunds a percentage of Skip 'n Slash's cooldown.",
          "leveling": [
            {
              "attribute": "Cooldown Refund",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "25 / 35 / 45 / 55 / 65"
                }
              ]
            }
          ]
        },
        {
          "description": "Skip 'n Slash resets Gwen's basic attack timer, and can be cast during any of her abilities, and vice versa."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Gwen/ability-icon/e",
      "notes": "Skip 'n Slash has no minimum dash range.\nThe basic attack reset is not considered one for  Hail of Blades.(note)",
      "resource": "Mana",
      "spellEffects": "proc",
      "targeting": "Location",
      "targetRange": "350 / 450"
    },
    {
      "key": "R",
      "name": "Needlework",
      "width": "240 to 30",
      "affects": "Enemies",
      "blurb": "First Cast:  Gwen launches a needle in the target direction that deals magic damage and  slows enemies hit. Needlework can be recast up to two more times.",
      "castTime": "0.25 / 0.5",
      "cooldown": "120 / 100 / 80",
      "cost": "100",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Gwen launches a needle in the target direction that deals magic damage to enemies hit and slows them for 1.5 seconds.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage per Needle",
              "modifiers": [
                {
                  "values": "35 / 65 / 95"
                },
                {
                  "unit": "% AP",
                  "values": "10"
                }
              ]
            },
            {
              "attribute": "Damage with A Thousand Cuts",
              "modifiers": [
                {
                  "values": "35 / 65 / 95"
                },
                {
                  "unit": "% AP",
                  "values": "10"
                },
                {
                  "unit": "% (+ 0.6% per 100 AP) of the target's maximum health",
                  "values": "1"
                }
              ]
            },
            {
              "attribute": "Slow",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "30 / 45 / 60"
                }
              ]
            }
          ]
        },
        {
          "description": "Needlework can be recast twice more within 8 seconds of the activation at no additional cost, with a 1-second static cooldown between casts. Each subsequent cast refreshes the duration and increases the number of needles launched by 2. Needle hits beyond the first apply a slow against each individual target.",
          "leveling": [
            {
              "attribute": "Subsequent Slow",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "15 / 20 / 25"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Gwen mimics the first cast's effects, while barraging three needles on the second cast and five on the third cast.</p>",
          "leveling": [
            {
              "attribute": "Second Cast Total Damage",
              "modifiers": [
                {
                  "values": "105 / 195 / 285"
                },
                {
                  "unit": "% AP",
                  "values": "30"
                },
                {
                  "unit": "% (+ 1.8% per 100 AP) of the target's maximum health",
                  "values": "3"
                }
              ]
            },
            {
              "attribute": "Third Cast Total Damage",
              "modifiers": [
                {
                  "values": "175 / 325 / 475"
                },
                {
                  "unit": "% AP",
                  "values": "50"
                },
                {
                  "unit": "% (+ 3% per 100 AP) of the target's maximum health",
                  "values": "5"
                }
              ]
            },
            {
              "attribute": "Maximum Total Damage",
              "modifiers": [
                {
                  "values": "315 / 585 / 855"
                },
                {
                  "unit": "% AP",
                  "values": "90"
                },
                {
                  "unit": "% (+ 5.4% per 100 AP) of the target's maximum health",
                  "values": "9"
                }
              ]
            }
          ]
        },
        {
          "description": "Gwen can move during Needlework's cast times."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Gwen/ability-icon/r",
      "notes": "Dying during the cast time will prevent the remaining needles of the cast from being launched.\nThe first cast's cast time is 0.25 seconds, and the second and third's cast times are each 0.5 seconds. Gwen launches the needles during the cast times.\nFor the second cast, the first needle launches 0.264 seconds after the start of the cast, the second needle launches after 0.132 seconds, and the third needle launches 0.231 seconds after the first.\nFor the third cast, the first needle launches 0.264 seconds after the start of the cast. Each additional needle launches 0.066 seconds seconds after the previous one.\nThe needles of each cast will fire based on Gwen's location at 0.264 seconds into each cast time (in case of the first cast, this is at the end of the cast time).\nThe needles fire from 100 units behind the cast location.\nThe width of all needle missiles decreases with their distance travelled, forming an approximately triangular missile hitbox.\nNeedles of the same cast all travel the same line at a slight delay after one another. The visual origins are offset (by 70 and 110 units to either side from the center missile spawn location), but the actual hitting missiles all follow the central line.\n Spell shield blocks only one needle.",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "1800",
      "spellEffects": "aoe",
      "spellshieldable": "special",
      "targeting": "Direction"
    }
  ],
  "adaptiveType": "Magic damage",
  "attackType": "Melee",
  "attributeRatings": {
    "damage": 3,
    "toughness": 2,
    "control": 1,
    "mobility": 3,
    "utility": 1,
    "abilityReliance": 50,
    "difficulty": 2
  },
  "lore": "A former doll transformed and brought to life by magic, Gwen wields the very tools that once created her. She carries the weight of her maker's love with every step, taking nothing for granted. At her command is the Hallowed Mist, an ancient and protective magic that has blessed Gwen's scissors, needles, and sewing thread. So much is new to her, but Gwen remains joyfully determined to fight for the good that survives in a broken world.",
  "patchLastChanged": "25.21",
  "positions": [
    "Jungle",
    "Top"
  ],
  "price": {
    "blueEssence": 2400,
    "rp": 880
  },
  "releaseDate": "2021-04-15",
  "resource": "Mana",
  "roles": [
    "Assassin",
    "Fighter",
    "Skirmisher"
  ],
  "stats": {
    "health": {
      "flat": 620,
      "perLevel": 115
    },
    "healthRegen": {
      "flat": 9,
      "perLevel": 0.9
    },
    "mana": {
      "flat": 330,
      "perLevel": 40
    },
    "manaRegen": {
      "flat": 7.5,
      "perLevel": 0.7
    },
    "armor": {
      "flat": 39,
      "perLevel": 4.9
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 63,
      "perLevel": 3
    },
    "movespeed": {
      "flat": 340
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
      "flat": 0.69,
      "perLevel": 2.25
    },
    "attackSpeedRatio": {
      "flat": 0.69
    },
    "attackCastTime": {
      "flat": 0.3
    },
    "attackTotalTime": {
      "flat": 1.525
    },
    "attackDelayOffset": {
      "flat": 0
    },
    "attackRange": {
      "flat": 150
    }
  }
}
export default champion