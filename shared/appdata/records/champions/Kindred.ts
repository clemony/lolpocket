// Updated Patch 25.16 - 08/14/2025 07:55:49 PM CDT

const champion: Champion =  {
  "id": 203,
  "key": "Kindred",
  "name": "Kindred",
  "title": "The Eternal Hunters",
  "fullName": "Lamb and Wolf",
  "resource": "Mana",
  "attackType": "Ranged",
  "stats": {
    "health": {
      "flat": 595,
      "perLevel": 104
    },
    "healthRegen": {
      "flat": 7,
      "perLevel": 0.55
    },
    "mana": {
      "flat": 300,
      "perLevel": 35
    },
    "manaRegen": {
      "flat": 7,
      "perLevel": 0.4
    },
    "armor": {
      "flat": 29,
      "perLevel": 4.7
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 65,
      "perLevel": 3.25
    },
    "movespeed": {
      "flat": 325
    },
    "acquisitionRadius": {
      "flat": 525
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
      "flat": 0.625,
      "perLevel": 3.5
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
      "flat": -0.125
    },
    "attackRange": {
      "flat": 500
    }
  },
  "positions": [
    "Jungle"
  ],
  "roles": [
    "Marksman"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 2,
    "mobility": 3,
    "utility": 2,
    "abilityReliance": 20,
    "difficulty": 3
  },
  "abilities": {
    "P": [
      {
        "name": "Mark of the Kindred",
        "icon": "https://cdn.communitydragon.org/latest/champion/Kindred/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Both Lamb and Wolf mark targets to hunt. Scoring a takedown against a hunted target collects a stack of Mark of the Kindred. Mark of the Kindred: Lamb gains 75 - 250 (based on marks) bonus range on her basic attacks and Mounting Dread.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Lamb:</span> Lamb is offered a selection of enemy champions to hunt if she has not been in combat with them in the last 6 seconds. Once selected, the mark is applied after an 8-second delay and thereafter it can be collected by Kindred. Lamb gains the ability to select a new target every 75 seconds. Targets successfully hunted cannot be marked again for 4 minutes.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Wolf:</span> Starting at 3 - 15, Wolf periodically marks a random large monster within the enemy team's jungle for 180 seconds. The hunted camp is highlighted on the mini map to both teams. Once the hunted target is slain or the mark expires, Wolf will wait 45 seconds before selecting a new target. The type of monster that Wolf can mark changes based on Kindred's current Mark of the Kindred stacks:</p>\n<p class=\"ability-effect\"><span class=\"ability-header\">0 :</span> Rift Scuttler</p>\n<p class=\"ability-effect\"><span class=\"ability-header\">1 - 3:</span> Rift Scuttler, Crimson Raptor, Gromp</p>\n<p class=\"ability-effect\"><span class=\"ability-header\">4 - 7:</span> Ancient Krug, Blue Sentinel, Greater Murk Wolf, or Red Brambleback</p>\n<p class=\"ability-effect\"><span class=\"ability-header\">8 + :</span> Rift Herald or Baron Nashor, Dragon or Elder Dragon</p>"
          }
        ],
        "targeting": "Passive",
        "affects": "Self, Enemies",
        "notes": "The selection of enemy champions to mark is offered through a special menu in the HUD that displays the portraits of up to 5 enemy champions. The player can mark an enemy by  clicking on their portrait or via the Champion Specific Interaction hotkeys (default: Shift+F1:F5).\nMarked enemies have a trim around their portrait. Unavailable selections are greyed out.\nThe portraits are ordered based on their spawn ID.\n Takedowns on  monsters occur if Kindred had damaged them within the last 6 seconds.\nThis only includes if the monster was slain by Kindred or an ally.\nOnly killing the large monster is required to claim Wolf's mark.\nGaining stacks from champions that would change what constitutes a valid target for Wolf will not affect Kindred's ability to claim Wolf's current target.\nWolf cannot mark monsters that have been slain, even if Kindred's team doesn't know that the camp has been slain.\nWolf's cooldown is not displayed in-game. Combined with the above point and the target restrictions, Wolf may go extended periods of time without seeming to do anything.\nWolf's marked target will always have its mark removed from the map 15 seconds after dying for both teams, regardless of whether they have vision of it or not.",
        "blurb": "Innate: Both  Lamb and  Wolf mark targets to hunt. Scoring a  takedown against a hunted target collects a permanent stack of Mark of the Kindred. Lamb can select an enemy  champion to hunt, and Wolf automatically selects a large  monster to hunt.",
        "onTargetCdStatic": "240"
      }
    ],
    "Q": [
      {
        "name": "Dance of Arrows",
        "icon": "https://cdn.communitydragon.org/latest/champion/Kindred/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Lamb dashes toward the target location, gaining 35% (+ 5% per mark) bonus attack speed for 4 seconds and firing an arrow at up to 3 nearby visible enemies that deals physical damage. Her current attack target within any proximity will be prioritized by one of the arrows.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      40,
                      65,
                      90,
                      115,
                      140
                    ]
                  },
                  {
                    "values": [
                      75
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Dance of Arrows' total cooldown is reduced to an amount while Lamb is within the area of Wolf's Frenzy. Casting Wolf's Frenzy reduces Dance of Arrows' current cooldown to the same amount.",
            "leveling": [
              {
                "attribute": "Static Cooldown",
                "modifiers": [
                  {
                    "values": [
                      4,
                      3.5,
                      3,
                      2.5,
                      2
                    ],
                    "units": [
                      " seconds"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Dance of Arrows resets Lamb's basic attack timer. Lamb can cast any of her abilities during the dash."
          }
        ],
        "cost": [
          35
        ],
        "cooldown": [
          9
        ],
        "targeting": "Location",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "Area of effect",
        "projectile": "TRUE",
        "notes": "The  dash distance can be extended to up to 400 units when dashing across terrain.\nThe  cooldown will not be modified if it cannot be reduced (the current cooldown would have to be less than the reduction amount in this case).",
        "blurb": "Active:  Lamb  dashes toward the target location, gaining  bonus attack speed for a few seconds. She then fires at up to three nearby enemies, dealing physical damage.",
        "speed": "500 + 100% movement speed",
        "castTime": "none",
        "effectRadius": "Kindred's  attack range",
        "targetRange": "300",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Wolf's Frenzy",
        "icon": "https://cdn.communitydragon.org/latest/champion/Kindred/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Lamb generates 1 stack of Hunter's Vigor for every 27 units she travels by any means and 5 stacks on-attack, up to a maximum of 100 stacks. At maximum stacks, her next basic attack heals her for 0% - 100% (based on Kindred's missing health) of 47 - 81 (based on level). The heal is not triggered if Kindred is at full health.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Wolf dashes to the target location, then claims the surrounding area as his territory for the next 8.5 seconds, separating from Lamb. He automatically attacks the closest nearby visible enemy within the area, prioritizing the last enemy Lamb has attacked, then enemy champions, then non-champions.</p>"
          },
          {
            "description": "Wolf's attacks deal magic damage and the rate at which he attacks scale with 25% of Kindred's bonus attack speed. Against monsters, his attacks deal 150% damage and slow the target by 50% for 2 seconds. The damage based on the target's health ratio is capped at 112.5 (+ 15 per mark) against monsters.",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      25,
                      30,
                      35,
                      40,
                      45
                    ]
                  },
                  {
                    "values": [
                      20
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  },
                  {
                    "values": [
                      20
                    ],
                    "units": [
                      "% AP"
                    ]
                  },
                  {
                    "values": [
                      1.5
                    ],
                    "units": [
                      "% (+ 1% per mark) of target's current health"
                    ]
                  }
                ]
              },
              {
                "attribute": "Monster Damage",
                "modifiers": [
                  {
                    "values": [
                      37.5,
                      45,
                      52.5,
                      60,
                      67.5
                    ]
                  },
                  {
                    "values": [
                      30
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  },
                  {
                    "values": [
                      30
                    ],
                    "units": [
                      "% AP"
                    ]
                  },
                  {
                    "values": [
                      2.25
                    ],
                    "units": [
                      "% (+ 1.5% per mark) of target's current health"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Wolf's Frenzy ends immediately if Lamb leaves the area or dies."
          }
        ],
        "cost": [
          40
        ],
        "cooldown": [
          18,
          17,
          16,
          15,
          14
        ],
        "targeting": "Location",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "Area of effect",
        "projectile": "FALSE",
        "notes": "Hunter's Vigor's heal is not triggered on attacks against structures and wards.\nWolf is  untargetable and  ghosted but he cannot move through terrain other than the initial dash on activation.\nWolf is not able to re-target  Rift Scuttler if he loses  sight of her while he's attacking it.\nWolf grants the same  vision as a  champion.\nWolf's Frenzy does not end if Lamb enters  resurrection.\nWolf's Frenzy applies ability haste to its cooldown post-effect.\nGiven a base cooldown of 14 seconds at rank 5 with 100 ability haste, casting the ability and then ending it after 4 seconds will result in a remaining cooldown of (14−4)×0.5=5 seconds, where 0.5 is derived from ability haste.\nBecause of this, there will always be some cooldown time remaining post-effect regardless of the amount of ability haste, unlike certain other abilities with cooldowns that start on-cast.\nPENDING FOR TEST:: Interaction with enemy vision and spectator mode.",
        "blurb": "Passive: As  Kindred move and attack, they build up stacks of Hunter's Vigor. At full stacks,  Lamb's next basic attack  heals her.",
        "speed": "1400",
        "castTime": "none",
        "effectRadius": "800",
        "targetRange": "500",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Mounting Dread",
        "icon": "https://cdn.communitydragon.org/latest/champion/Kindred/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Lamb fires a shot at the target enemy that slows them by 30% (+ 5% per 100 AP) for 1 second and marks them for 4 seconds. Her basic attacks against the marked target each apply a stack, refreshing the duration and stacking up to 3 times.</p>"
          },
          {
            "description": "The third stack directs Wolf to pounce on the target, consuming all stacks to deal additional physical damage, capped at 300 against monsters.",
            "leveling": [
              {
                "attribute": "Additional Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      80,
                      110,
                      140,
                      170,
                      200
                    ]
                  },
                  {
                    "values": [
                      100
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  },
                  {
                    "values": [
                      5
                    ],
                    "units": [
                      "% (+ 0.5% per Mark) of target's missing health"
                    ]
                  }
                ]
              },
              {
                "attribute": "Enhanced damage below threshold",
                "modifiers": [
                  {
                    "values": [
                      80,
                      110,
                      140,
                      170,
                      200
                    ]
                  },
                  {
                    "values": [
                      100
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  },
                  {
                    "values": [
                      7.5
                    ],
                    "units": [
                      "% (+ 2%) (+ 0.75% (+ 0.2%) per Mark) of target's missing health"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "The missing health portion of the additional damage will critically strike for (150% + 40%) damage if the target is below 25% - 75% (based on critical strike chance) of their maximum health and cannot critically strike otherwise. The base damage of the pounce can independently critically strike for (175% + 40%) damage."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          14,
          12.5,
          11,
          9.5,
          8
        ],
        "targeting": "Unit",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "spell",
        "projectile": "TRUE",
        "notes": "If the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel and not pay its cost but still go on  cooldown.(bug)\nThis ability cannot target a unit with Mounting Dread stacks.\nMounting Dread will prioritize casting on the closest champion within  100 radius of the cursor, even if other eligible targets are closer.\nAs a consequence of this mechanic, Mounting Dread can still be cast on champions with Mounting Dread stacks.(bug)\nReapplying Mounting Dread through this method will apply the slow, but will not reset the stack count.\nPENDING FOR TEST: Reapplying Mounting Dread against  disguised  Neeko will reset the stack count.(bug)",
        "blurb": "Active:  Lamb fires a shot at the target enemy that briefly  slows them applies a  stack of Mounting Dread. Lamb's  basic attacks against this target stack Mounting Dread up to a cap.",
        "castTime": "0.25",
        "targetRange": "500 : 750 (based on Marks)",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Lamb's Respite",
        "icon": "https://cdn.communitydragon.org/latest/champion/Kindred/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Lamb blesses the ground underneath herself and enters a 0.264 seconds cast time, creating a sacred zone at her location at the time of cast that lasts for 4 seconds. All units inside the zone gain a minimum health threshold equal to 10% of their maximum health, and will also become invulnerable while remaining in the area when they reach or are at the threshold, during which they also cannot be healed, but can still regenerate health.</p>"
          },
          {
            "description": "All targetable units within the zone are healed when the blessing ends.",
            "leveling": [
              {
                "attribute": "Heal",
                "modifiers": [
                  {
                    "values": [
                      225,
                      300,
                      375
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "cost": [
          100
        ],
        "cooldown": [
          160,
          140,
          120
        ],
        "targeting": "Auto",
        "affects": "Self, Allies, Enemies",
        "resource": "Mana",
        "notes": "Lamb's Respite will affect all  champions,  minions, and  monsters, but not  wards,  turrets, or jungle plants.\nLamb's Respite will affect  untargetable units but does not grant them the  heal at the end of the blessing.\nIt will specifically not affect champions that are  resurrecting from  Guardian Angel.\n Health costs will ignore Lamb's Respite's threshold.\nThe cost will not be paid if the caster is below the threshold.\nLamb's Respite has no effect on  zombie state or  clone units.\nThe effects are applied before the cast time.\nPENDING FOR TEST: Lamb's Respite will have no effect if cast while Kindred is  untargetable.",
        "blurb": "Active:  Lamb blesses the ground under herself for a few seconds. Any unit inside the area will become  invulnerable upon reaching  low health.",
        "castTime": "None",
        "effectRadius": "535",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Separate, but never parted, Kindred represents the twin essences of death. Lamb's bow offers a swift release from the mortal realm for those who accept their fate. Wolf hunts down those who run from their end, delivering violent finality within his crushing jaws. Though interpretations of Kindred's nature vary across Runeterra, every mortal must choose the true face of their death."
}
    export default champion