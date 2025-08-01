// Updated Patch 25.15 - 07/31/2025 07:16:02 AM CDT

const champion: Champion =  {
  "id": 84,
  "key": "Akali",
  "name": "Akali",
  "title": "the Rogue Assassin",
  "fullName": "Akali Jhomen Tethi",
  "resource": "Energy",
  "attackType": "Melee",
  "stats": {
    "health": {
      "flat": 600,
      "perLevel": 119
    },
    "healthRegen": {
      "flat": 9,
      "perLevel": 0.9
    },
    "mana": {
      "flat": 200
    },
    "manaRegen": {
      "flat": 50
    },
    "armor": {
      "flat": 23,
      "perLevel": 4.7
    },
    "magicResistance": {
      "flat": 37,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 62,
      "perLevel": 3.3
    },
    "movespeed": {
      "flat": 345
    },
    "acquisitionRadius": {
      "flat": 400
    },
    "selectionRadius": {
      "flat": 100
    },
    "pathingRadius": {
      "flat": 30
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
      "perLevel": 3.2
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
      "flat": -0.161
    },
    "attackRange": {
      "flat": 125
    }
  },
  "positions": [
    "Middle",
    "Top"
  ],
  "roles": [
    "Assassin"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 1,
    "mobility": 3,
    "utility": 1,
    "abilityReliance": 65,
    "difficulty": 3
  },
  "abilities": {
    "P": [
      {
        "name": "Assassin's Mark",
        "icon": "https://cdn.communitydragon.org/latest/champion/Akali/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> When Akali damages an enemy champion with an ability, she creates a ring around them for 4 seconds, refreshing on subsequent damaging abilities against champions. For 2 seconds, she gains 30% / 40% / 50% / 60% (based on level) bonus movement speed while moving away from the center of the ring. Only one ring may be active at a time.</p>"
          },
          {
            "description": "When Akali exits the ring, for 2 seconds, she regains the bonus movement speed while facing nearby enemy champions and becomes empowered with Swinging Kama for 4 seconds, during which she cannot create another ring."
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Swinging Kama:</span> Akali's next basic attack is empowered to have its range doubled and deal 35 - 182 (based on level) (+ 60% bonus AD) (+ 55% AP) bonus magic damage.</p>"
          }
        ],
        "targeting": "Passive",
        "affects": "Self, Enemies",
        "spellshieldable": "false",
        "damageType": "Magic damage",
        "spellEffects": "spell",
        "notes": "Enemies cannot see the ring, but can see the empower effect.\nSwinging Kama gives a static bonus range which doesn't change if Akali's range changes during it (i.e  Rapid Firecannon):\nIf Rapid Firecannon fully charges within Swinging Kama's duration, Akali's total range increases to 337.5.\nIf Rapid Firecannon fully charges before gaining Swinging Kama, Akali's total range is increased to 395.\nThe ring will be created around the last target hit by  Five Point Strike.\nThe ring's center is offset 120 units away from the enemy's center, towards Akali.\nThe empowered attack can be  dodged and  blocked, and will be mitigated by  blinds.\nThe empowered attack will trigger but not be consumed nor apply its effects against structures and wards.\nThis ability's damage is calculated based on the caster's stats at the time of its application.",
        "blurb": "Innate:  Akali's damage with abilities against a champion create a ring around them for a few seconds, and she gains  move speed while moving away from the ring.",
        "effectRadius": "500"
      }
    ],
    "Q": [
      {
        "name": "Five Point Strike",
        "icon": "https://cdn.communitydragon.org/latest/champion/Akali/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Akali unleashes kunai in a cone in the target direction, dealing magic damage to enemies hit. Targets beyond a certain range are also slowed by 50% for 0.5 seconds.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      45,
                      70,
                      95,
                      120,
                      145
                    ]
                  },
                  {
                    "values": [
                      65
                    ],
                    "units": [
                      "% AD"
                    ]
                  },
                  {
                    "values": [
                      60
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
          110,
          100,
          90,
          80,
          70
        ],
        "cooldown": [
          1.5
        ],
        "targeting": "Direction",
        "affects": "Enemies, Self",
        "spellshieldable": "True",
        "resource": "Energy",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "projectile": "TRUE",
        "notes": "Five Point Strike will hit enemies after only 0.188 / 0.169 / 0.15 / 0.131 (based on level) seconds (75% of cast time) into the cast time.\nDue to any actions only starting on integer game ticks, the effective cast time rounds up to 0.264 / 0.231 / 0.231 / 0.198 (based on level) and the hit will occur at 0.198 / 0.198 / 0.165 / 0.132 (based on level) seconds into it.\nThis ability's damage is calculated based on the caster's stats at the time of its initial application and does not change dynamically.\nThis ability will cast from wherever the caster is at the end of the cast time.",
        "blurb": "Active:  Akali throws out a cone of kunai that deals magic damage to enemies hit. Targets hit at maximum range are briefly  slowed.",
        "width": "350",
        "angle": "20°",
        "castTime": "0.25 / 0.225 / 0.2 / 0.175 (based on level)",
        "targetRange": "500 / 120",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Twilight Shroud",
        "icon": "https://cdn.communitydragon.org/latest/champion/Akali/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Akali restores 100 energy over 0.4 seconds and gains bonus movement speed that decays over 2 seconds. She also detonates a smoke bomb a fixed distance away in the target direction, creating a circular shroud that expands over the next 5 seconds into a ring. The shroud does not permeate terrain, and will expand toward nearby enemy champions. While the shroud is active, Akali's maximum energy is increased by 100.</p>",
            "leveling": [
              {
                "attribute": "Bonus Movement Speed",
                "modifiers": [
                  {
                    "values": [
                      30,
                      35,
                      40,
                      45,
                      50
                    ],
                    "units": [
                      "%"
                    ]
                  }
                ]
              },
              {
                "attribute": "Shroud Duration",
                "modifiers": [
                  {
                    "values": [
                      5,
                      5.5,
                      6,
                      6.5,
                      7
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
            "description": "Entering the shroud renders Akali invisible, unless she is dashing."
          },
          {
            "description": "Declaring a basic attack or casting an ability will break the invisibility and prevent Akali from entering it for 1 - 0.625 (based on minutes) seconds, refreshing on subsequent attacks and casts."
          },
          {
            "description": "The marked section of Twilight Shroud will linger for the mark's duration, even after the shroud ends."
          },
          {
            "description": "Akali can move during Twilight Shroud's cast time."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          20,
          19,
          18,
          17,
          16
        ],
        "targeting": "Direction",
        "affects": "Self, Enemies",
        "notes": "Akali will also not gain the  invisibility if she is  Recalling.\nIt is possible for Akali to detonate the smoke bomb on the far side of terrain from her current location.\nTwilight Shroud's effects begin at the start of the cast time.\nUsing a basic attack breaks the stealth at the start of the attack windup.",
        "blurb": "Active:  Akali restores  energy and gains a brief burst of  move speed. She also drops a smoke shroud that makes her  invisible, attacking or using abilities will briefly reveal her.",
        "castTime": "0.25",
        "effectRadius": "350 / 1175",
        "targetRange": "250",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Shuriken Flip",
        "icon": "https://cdn.communitydragon.org/latest/champion/Akali/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Akali flips backward and, after the cast time, throws a shuriken in the target direction that deals magic damage to the first enemy hit.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      21,
                      42,
                      63,
                      84,
                      105
                    ]
                  },
                  {
                    "values": [
                      30
                    ],
                    "units": [
                      "% AD"
                    ]
                  },
                  {
                    "values": [
                      33
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
            "description": "The shuriken marks and reveals the enemy or the last smoke section hit for 3 seconds, during which Shuriken Flip can be recast to consume the mark."
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Akali dashes towards the marked target or smoke section. Against enemies she deals magic damage upon arrival.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      49,
                      98,
                      147,
                      196,
                      245
                    ]
                  },
                  {
                    "values": [
                      70
                    ],
                    "units": [
                      "% AD"
                    ]
                  },
                  {
                    "values": [
                      77
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Total Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      70,
                      140,
                      210,
                      280,
                      350
                    ]
                  },
                  {
                    "values": [
                      100
                    ],
                    "units": [
                      "% AD"
                    ]
                  },
                  {
                    "values": [
                      110
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
            "description": "Akali will not flip backwards if she is immobilized or grounded during the cast time. Twilight Shroud and Perfect Execution can be cast during the recast's dash."
          }
        ],
        "cost": [
          30
        ],
        "cooldown": [
          16,
          14.5,
          13,
          11.5,
          10
        ],
        "targeting": "Direction / Auto",
        "affects": "Enemies, Self",
        "spellshieldable": "True",
        "resource": "Energy",
        "damageType": "Magic damage",
        "spellEffects": "spell",
        "projectile": "TRUE",
        "notes": "Akali will track the target if they change locations.\nShe will not stop tracking the target until she reaches them, as there is no maximum tracking distance.\nBoth casts count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nShuriken Flip does not interrupt Akali's previous move or attack orders.\nThe recast does.\nShuriken Flip cannot be recast if the target is not  visible or is  untargetable.\nAkali will be ordered to basic attack the target after the recast's dash ends.\nAkali will dash backwards up-to 400 units in a straight line. This dash can cross terrain if the end point is beyond it. If she would end the dash inside terrain, she will instead look for a location  in either direction left or right that is outside of terrain and dash there. If there is no such location, she will dash only up to the wall at her normal speed, ending the dash early.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe shuriken missile will fire from wherever Akali is at the end of the cast time (usually mid-dash), but always towards and reaching the location that was 825 units in front of her at the start of cast. The only exception is if she moves via  Flash, in which case the range of the missile is decreased relative to the distance she blinked.\nKilling an enemy with the shuriken will still mark the last area of the  shroud hit.\nAttempting to cast  Five Point Strike during either dash will buffer it to cast as soon as the dash ends.\nThis ability's damage is calculated based on the caster's stats at the time of its application.\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Twilight Shroud is usable.  Shuriken Flip is disabled for 10 seconds and then interrupts. Both dashes of  Perfect Execution interrupt.\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nAll the other item-actives are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Hextech Rocketbelt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Teleport  Recall\n\n\nDisabled\n\n Hexflash\n\n\nInterrupted by\n\n Flash\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
        "blurb": "Active:  Akali  dashes backward and throws a shuriken forward that deals magic damage and marks the first enemy or  smoke cloud hit for a short time.",
        "speed": "1800 / 1500",
        "width": "120",
        "castTime": "0.4 / 0.25",
        "effectRadius": "Global",
        "targetRange": "825",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Perfect Execution",
        "icon": "https://cdn.communitydragon.org/latest/champion/Akali/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Akali dashes 750 units in the direction of the target enemy champion, dealing magic damage to enemies she passes through. If this hits an enemy, she flips over them to continue the dash up to the normal range but for at least another 150 units.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      110,
                      220,
                      330
                    ]
                  },
                  {
                    "values": [
                      50
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
                  }
                ]
              }
            ]
          },
          {
            "description": "Perfect Execution can be recast after a 2.5-second static cooldown within 10 seconds of the first activation."
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Akali dashes 800 units in the target direction, dealing magic damage to enemies she passes through, increased by 0% - 200% (based on target's missing health).</p>",
            "leveling": [
              {
                "attribute": "Minimum Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      70,
                      140,
                      210
                    ]
                  },
                  {
                    "values": [
                      30
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Maximum Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      210,
                      420,
                      630
                    ]
                  },
                  {
                    "values": [
                      90
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
          0
        ],
        "cooldown": [
          120,
          90,
          60
        ],
        "targeting": "Unit / Direction",
        "affects": "Enemies",
        "spellshieldable": "True",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "notes": "Both casts count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nWith the first cast, Akali can dash up to a maximum of 900 units if the first enemy she hit was at the maximum dash range.\nCasting  Flash during either dashes will interrupt them, but Akali will deal damage to any enemies she comes in contact with at the new location.\nEnemies already hit by either of Perfect Execution's casts cannot be affected more than once by the same cast.\n Shuriken Flip can be used during the initial dash if it is cast after Perfect Execution's cast time finishes.\nThis ability's damage is calculated based on the caster's stats at the start of cast and does not change dynamically.\nAkali is  unable to cast her other abilities for 0.25 seconds after starting the initial cast's dash.",
        "blurb": "Active:  Akali  dashes in the direction of the target enemy champion, dealing physical damage to enemies she passes through.",
        "collisionRadius": "110",
        "speed": "1500 / 3000",
        "castTime": "None",
        "targetRange": "675",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Abandoning the Kinkou Order and her title of the Fist of Shadow, Akali now strikes alone, ready to be the deadly weapon her people need. Though she holds onto all she learned from her master Shen, she has pledged to defend Ionia from its enemies, one kill at a time. Akali may strike in silence, but her message will be heard loud and clear: fear the assassin with no master."
}
    export default champion