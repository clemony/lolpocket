// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion =  {
  "id": 147,
  "key": "Seraphine",
  "name": "Seraphine",
  "title": "the Starry-Eyed Songstress",
  "resource": "Mana",
  "attackType": "Ranged",
  "stats": {
    "health": {
      "flat": 570,
      "perLevel": 90
    },
    "healthRegen": {
      "flat": 6.5,
      "perLevel": 0.6
    },
    "mana": {
      "flat": 360,
      "perLevel": 25
    },
    "manaRegen": {
      "flat": 11.5,
      "perLevel": 0.95
    },
    "armor": {
      "flat": 26,
      "perLevel": 4.2
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 50,
      "perLevel": 3
    },
    "movespeed": {
      "flat": 330
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
      "flat": 0.669,
      "perLevel": 2
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
      "flat": -0.113
    },
    "attackRange": {
      "flat": 525
    }
  },
  "positions": [
    "Bottom",
    "Support"
  ],
  "roles": [
    "Burst",
    "Enchanter",
    "Mage",
    "Support"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 3,
    "mobility": 1,
    "utility": 2,
    "abilityReliance": 100,
    "difficulty": 1
  },
  "abilities": {
    "P": [
      {
        "name": "Stage Presence",
        "icon": "https://cdn.communitydragon.org/latest/champion/Seraphine/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Echo:</span> Seraphine's basic ability casts each generate a stack of Echo, stacking up to 2 times. At 2 stacks, Seraphine's next basic ability casts an additional time for 1 mana after a 0.033 seconds delay, consuming all Echo stacks after the cast time of the second cast.Seraphine gains maximum stacks of Echo when the game starts and upon respawning.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Harmony:</span> Seraphine's ability casts grant a Note to herself and nearby allied champions that lasts 6 seconds, refreshes on subsequent Notes and stacks up to 4 times on each unit.</p>"
          },
          {
            "description": "While any amount of Notes are active, Seraphine's next basic attack is empowered to have an uncancellable windup, gain 25 bonus attack range per Note, and fire all Notes at the target, with each one dealing 4 - 25 (based on level) (+ 4% AP) magic damage, reduced by 75% for Notes from allies."
          }
        ],
        "targeting": "Passive",
        "affects": "Self, Allies, Enemies",
        "spellshieldable": "false",
        "damageType": "Magic damage",
        "spellEffects": "proc",
        "projectile": "TRUE",
        "notes": "Echo Details:\n\nEcho's current stacks are represented by a counter under Seraphine's health bar, visible to all players. The last stack is highlighted to indicate that an Echo cast is ready.\nSeraphine's basic abilities alternate their icons between 3 different ones each, depending on the current amount of stacks she has.\nThe additional cast must complete for Echo stacks to be consumed; if the cast time does not finish or does not begin at all, or if the ability fails to cast when there is not enough  mana, Seraphine will keep her stacks.\nThe additional cast does not affect the  cooldown of the mimicked ability.\nThe additional cast counts as a separate cast instance for the purpose of e.g.  Electrocute or  Conqueror.\nHarmony Details:\n\nNotes orbit at a radius of 100 from the center of their holder and they fire from this location.\nThe empowered attack can  critically strike.\nThe empowered attack will not trigger against wards.\nNotes are fired one after another with a short delay.\nSeraphine can grant Notes to more than 4 allied champions.\nHarmony does not grant Notes to  clones.\nHarmony grants Notes even if the ally is  untargetable.\nThe Notes will fire from allies regardless of how far they are away from Seraphine.\nSeraphine gains a faint blue attack range indicator when there are Notes present.\nNotes do not discharge when attacking  wards, allowing Seraphine to attack them from increased range multiple times.\nOther Details:\n\nSeraphine, while alive, will play music if there is at least one ally champion nearby.\nThis is audible to Seraphine and all allied champions that are in range of Harmony, indicative of if they can receive a Note or not.",
        "blurb": "Innate - Echo:  Seraphine's basic ability casts generate stacks of Echo. At max stacks, her next basic ability consumes them all to cast twice in quick succession.",
        "speed": "3000",
        "effectRadius": "800"
      }
    ],
    "Q": [
      {
        "name": "High Note",
        "icon": "https://cdn.communitydragon.org/latest/champion/Seraphine/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Seraphine hurls a soundwave to the target location that quickly expands in a radius upon arrival, dealing magic damage to enemies within the area.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      60,
                      85,
                      110,
                      135,
                      160
                    ]
                  },
                  {
                    "values": [
                      50
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Against champions, the damage is increased by 0% - 75% (based on target's missing health).",
            "leveling": [
              {
                "attribute": "Maximum Champion Damage",
                "modifiers": [
                  {
                    "values": [
                      105,
                      148.75,
                      192.5,
                      236.25,
                      280
                    ]
                  },
                  {
                    "values": [
                      87.5
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "cost": [
          60,
          70,
          80,
          90,
          100
        ],
        "cooldown": [
          8,
          7.5,
          7,
          6.5,
          6
        ],
        "targeting": "Location",
        "affects": "Enemies",
        "spellshieldable": "true",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "projectile": "TRUE",
        "notes": "High Note uses a modified icon for the  second and  third stack of  Stage Presence.\nThe maximum damage of High Note uses a  cosmetic critical strike.\nHigh Note will fire from wherever Seraphine is at the end of the cast time.\nThe impact delay depends solely on the missile speed. It is 0 seconds to 0.75 seconds (after end of cast time) within the standard cast radius, but can be increased further by Seraphine being moved away from the cast location during the cast time.\nPENDING FOR TEST: The area of effect is covered via expansion in several rings (similar to  Frozen Tomb's area of effect) and targets can only be hit once.\nThe range indicator for the target range has a radius of 950 units, but the center of High Note can only be cast up to 900 units. The area indicator shows the proper 350 area of effect radius and cast location.",
        "blurb": "Active:  Seraphine hurls a soundwave to the target location that quickly expands upon arrival, dealing magic damage to enemies within based on their missing health.",
        "speed": "1300",
        "castTime": "0.25",
        "effectRadius": "350",
        "targetRange": "900",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Surround Sound",
        "icon": "https://cdn.communitydragon.org/latest/champion/Seraphine/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Seraphine grants a shield to herself and nearby allied champions for 2.5 seconds. For the same duration, she also gains 20% (+ 2% per 100 AP) decaying bonus movement speed and grants allies 8% (+ 0.8% per 100 AP) bonus movement speed.</p>",
            "leveling": [
              {
                "attribute": "Shield Strength",
                "modifiers": [
                  {
                    "values": [
                      60,
                      80,
                      100,
                      120,
                      140
                    ]
                  },
                  {
                    "values": [
                      20
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "If Seraphine already had a shield at the time of cast, Surround Sound will pulse after the duration, healing herself and nearby allied champions, increased for each ally.",
            "leveling": [
              {
                "attribute": "Heal Per Ally",
                "modifiers": [
                  {
                    "values": [
                      3,
                      3.5,
                      4,
                      4.5,
                      5
                    ],
                    "units": [
                      "% of target's missing health"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Surround Sound's shield and bonus movement speed can stack up to 2 times."
          }
        ],
        "cost": [
          70,
          75,
          80,
          85,
          90
        ],
        "cooldown": [
          22
        ],
        "targeting": "Auto",
        "affects": "Self, Allies",
        "resource": "Mana",
        "projectile": "SPECIAL",
        "notes": "Surround Sound uses a modified icon for the  second and  third stack of  Stage Presence.\nAll effects are gained at the start of the cast time.\nSeraphine can move during the cast time.\nSurround Sound's  shield buff can have up to 2 stacks, for a total of 200% shield strength at a time.\nMost shields in the game can only have one stack, refreshing their shield strength when reapplied.\nSurround Sound will empower from any  shield that Seraphine has. It does not have to be sourced from Surround Sound.\nCasting Surround Sound during the 2.5-second delay refreshes the delay.\nThe  heal affects  clones and counts them for increasing the missing health percentage.\nA large indicator similar to  Redemption's signals the heal area of effect and delay.\nThe heal will be canceled and the indicator disappears when Seraphine dies.\nThe heal occurs instantly on Seraphine and all nearby allied champions once the delay ends.\nThere is a missile that flows through all allied champions which can be blocked by  Wind Wall. The heal is unaffected by this.\nSurround Sound will affect  untargetable allies.",
        "blurb": "Active:  Seraphine  shields herself and nearby allied champions for a short time. She also gains a burst of  movement speed and grants allies  bonus movement speed.",
        "castTime": "0.25",
        "effectRadius": "800",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Beat Drop",
        "icon": "https://cdn.communitydragon.org/latest/champion/Seraphine/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Seraphine fires a heavy soundwave in the target direction that deals magic damage to enemies hit, reduced to 70% against minions, and slows them by 99% for a few seconds.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      70,
                      100,
                      130,
                      160,
                      190
                    ]
                  },
                  {
                    "values": [
                      50
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Minion Damage",
                "modifiers": [
                  {
                    "values": [
                      49,
                      70,
                      91,
                      112,
                      133
                    ]
                  },
                  {
                    "values": [
                      35
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Disable Duration",
                "modifiers": [
                  {
                    "values": [
                      1.1,
                      1.2,
                      1.3,
                      1.4,
                      1.5
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
            "description": "Enemies that are already slowed are also rooted for the same duration."
          },
          {
            "description": "Enemies that are immobilized or grounded are also stunned for the same duration."
          }
        ],
        "cost": [
          60
        ],
        "cooldown": [
          11,
          10.5,
          10,
          9.5,
          9
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "true",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "projectile": "TRUE",
        "notes": "Beat Drop will only be empowered from  slows,  immobilizes, and  grounding effects applied by herself or her allies.\nBeat Drop uses a modified icon for the  second and  third stack of  Stage Presence.\nBeat Drop may still be empowered even if the disable ends shortly after the ability hits.\nThe  root and the  stun cannot apply at the same time.\nThe root will only apply if the target is  slowed and not  immobilized or  grounded.\nThe stun will apply as normal; it does not consider if the target is  slowed.\nThe root will be overridden by the stun if the target is hit by Beat Drop again while they were rooted by it.\nA quarter note will appear next to an enemy  champion while they are  slowed and two quarter notes tied will appear if they are  immobilized or  grounded.\nThis indicates if Beat Drop will apply an additional crowd control effect if it strikes the target.\nThis ability will cast from wherever the caster is at the end of the cast time.",
        "blurb": "Active:  Seraphine fires a heavy soundwave in the target direction that deals magic damage and briefly  slows enemies hit.",
        "speed": "1200",
        "width": "140",
        "castTime": "0.25",
        "targetRange": "1300",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Encore",
        "icon": "https://cdn.communitydragon.org/latest/champion/Seraphine/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Seraphine projects a captivating force in the target direction that deals magic damage to enemies hit, charms them, during which they are revealed, and slows them by 40% for a duration, increasing by 15% every 0.25 seconds over the duration up to 99%.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      150,
                      200,
                      250
                    ]
                  },
                  {
                    "values": [
                      40
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Disable Duration",
                "modifiers": [
                  {
                    "values": [
                      1.25,
                      1.5,
                      1.75
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
            "description": "Encore's projectile resets its remaining travel distance whenever it hits an allied or enemy champion, excluding Seraphine. Allied champions hit gain 4 Notes."
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
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "true",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "projectile": "TRUE",
        "notes": "Encore has two cast times. Both last 0.5 seconds. The wave will always project after the first cast time, and the second cast time only serves as a  lock out for Seraphine.\nSeraphine cannot buffer casts during the first cast time, but she may do so during the second cast time.\n Clones also count for Encore's extension.\nEncore will not extend on enemy champions that are  untargetable, but will do so for allied champions.\n Spell shield will also prevent Encore from extending.\nThis ability will cast from wherever the caster is at the end of the cast time.\nEncore fires from Seraphine's location at the end of the initial cast time.\nThere is no limit as to how many times the wave can extend.\nEach Encore cast cannot extend from the same  champion more than once.\nPENDING FOR TEST::  Champions that died, clearing marker buffs",
        "blurb": "Active:  Seraphine projects a captivating force in the target direction that deals magic damage to enemies hit, briefly  charming,  slowing, and  revealing them.",
        "speed": "1600",
        "width": "320",
        "castTime": "0.5",
        "targetRange": "1200",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Born in Piltover to Zaunite parents, Seraphine can hear the souls of others—the world sings to her, and she sings back. Though these sounds overwhelmed her in her youth, she now draws on them for inspiration, turning the chaos into a symphony. She performs for the sister cities to remind their citizens that they're not alone, that they're stronger together, and that, in her eyes, their potential is limitless."
}
    export default champion