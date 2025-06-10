// Updated Patch 25.11 - 06/08/2025 12:01:46 PM CDT

const champion: Champion =  {
  "id": 799,
  "key": "Ambessa",
  "name": "Ambessa",
  "title": "Matriarch of War",
  "fullName": "Ambessa Medarda",
  "resource": "Energy",
  "attackType": "Melee",
  "stats": {
    "health": {
      "flat": 630,
      "perLevel": 110
    },
    "healthRegen": {
      "flat": 8.5,
      "perLevel": 0.75
    },
    "mana": {
      "flat": 200
    },
    "manaRegen": {
      "flat": 50
    },
    "armor": {
      "flat": 35,
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
      "flat": 335
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
      "flat": 0.625,
      "perLevel": 2.5
    },
    "attackSpeedRatio": {
      "flat": 0.625
    },
    "attackCastTime": {
      "flat": 0.25
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackRange": {
      "flat": 125
    }
  },
  "positions": [
    "Top"
  ],
  "roles": [
    "Assassin",
    "Diver",
    "Fighter",
    "Skirmisher"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 2,
    "control": 1,
    "mobility": 3,
    "utility": 1,
    "abilityReliance": 55,
    "difficulty": 3
  },
  "abilities": {
    "P": [
      {
        "name": "Drakehound's Step",
        "icon": "https://cdn.communitydragon.org/latest/champion/Ambessa/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> During the lockout of Ambessa's abilities, inputting an attack or movement command causes her to dash to or towards the target or location, respectively, after the lockout ends. This dash cannot pass through terrain.Ambessa cannot dash while immobilized or grounded.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Whenever Ambessa casts an ability, she generates a stack of Medarda Maxim after the ability's respective lockout for 4 seconds, refreshing with subsequent casts and stacking up to 3 times. Basic attacks consume one stack each to become empowered.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Medarda Maxim:</span> Ambessa's next basic attack on-attack is empowered to have an uncancellable windup, gain 75 bonus range and 50% bonus attack speed, and deal 5 - 30 (based on level) (+ 30% bonus AD) bonus physical damage and restore 40 / 55 / 70 (based on level) energy.</p>"
          }
        ],
        "targeting": "Passive",
        "affects": "Self, Enemies",
        "spellshieldable": "false",
        "damageType": "Physical damage",
        "spellEffects": "proc",
        "notes": "If an Attack command has been queued during an ability lockout and both:\nthe player issues a Hold (default J) or Stop (default S) command, and\nthe acquired target is within Ambessa's  attack range after the end of the lockout\nthen Ambessa's dash will cancel.\nIf Ambessa is  immobilized or  grounded during an ability's lockout, any attack or movement commands inputted during the lockout will not be buffered to cast at the end of the lockout, even if the crowd control has worn off by the time she is able to move (and thus dash).\nThis also applies vice versa where she has successfully buffered an inputted attack or movement command but is afterwards affected with the aforementioned crowd control types during the remaining lockout time. This causes the buffer to be cancelled and the dash to fail to trigger as a consequence.\nAttack commands will not be buffered to cast at the end of the lockout even while  grounded.\nIf multiple attack and movement commands are inputted during the lockout of an ability, the most recent one is used for the dash's targeting.\nIf the most recent input is not an attack or movement command, the dash will not trigger.\nIn this case, the buffer for the previous attack/movement command was cancelled by a new non-attack/movement command such as an input for an ability cast.\nDuring Drakehound's Step, a visual indicator is visible to Ambessa displaying the eventual dash's direction and destination location.\nThe number of available attacks empowered by Medarda Maxim are visible as pips under Ambessa's health bar, only visible to the player.\nThe following table refers for interactions while Ambessa is  dashing:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nAll the other item-actives are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Hextech Rocketbelt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Teleport  Recall\n\n\nDisabled\n\n Hexflash\n\n\nInterrupted by\n\n Flash\n\n\nInterrupted by\n\nDeath",
        "blurb": "Innate: During any of  Ambessa's ability  lockouts, the player may right-click to select a location or target to  dash toward after the lockout ends. An indicator appears on the ground denoting the direction and destination location.",
        "speed": "770 / 830 / 890 / 950 (based on level) + 100% movement speed",
        "targetRange": "175 / 350"
      }
    ],
    "Q": [
      {
        "name": "Cunning Sweep",
        "icon": "https://cdn.communitydragon.org/latest/champion/Ambessa/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ambessa enters a 0.225-second lockout, at the end of which she slashes with her twin drakehounds in a cone in the target direction, dealing physical damage to enemies hit. The damage is doubled against enemies hit by the outer edge. Drakehound's Step's dash may be buffered during the lockout or initiated within 0.275 seconds of the lockout ending, and Ambessa will perform the dash after her slash completes.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      20,
                      30,
                      40,
                      50,
                      60
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
                      1,
                      1.5,
                      2,
                      2.5,
                      3
                    ],
                    "units": [
                      "% (+ 1.5% per 100 bonus AD) of the target's maximum health"
                    ]
                  }
                ]
              },
              {
                "attribute": "Increased Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      40,
                      60,
                      80,
                      100,
                      120
                    ]
                  },
                  {
                    "values": [
                      60
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  },
                  {
                    "values": [
                      2,
                      3,
                      4,
                      5,
                      6
                    ],
                    "units": [
                      "% (+ 3% per 100 bonus AD) of the target's maximum health"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "If this hits at least one enemy, Ambessa can cast Sundering Slam within the next 4 seconds."
          },
          {
            "description": "Against monsters, Cunning Sweep deals 125 bonus physical damage and the damage based on their health ratio is capped at 100 - 300 (based on level)."
          }
        ],
        "cost": [
          70
        ],
        "cooldown": [
          14,
          13,
          12,
          11,
          10
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "true",
        "resource": "Energy",
        "damageType": "Physical damage",
        "spellEffects": "spellaoe",
        "projectile": "FALSE",
        "notes": "Cunning Sweep will slash from wherever Ambessa is at the end of the lockout.\nIf her facing direction changes before the lockout completes, the slash will be performed towards the new direction.\nThe following table refers for interactions while Ambessa is locked out:\n\n\nAttacking\n\nRegisters input for  Drakehound's Step.\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nRegisters input for  Drakehound's Step.\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
        "blurb": "Active:  Ambessa slashes with her twin drakehounds in the target direction, dealing physical damage to enemies hit. The damage is  increased against enemies hit by the outer edge.",
        "angle": "180°",
        "castTime": "none",
        "effectRadius": "275 / 135 / 400",
        "maxCharges": -1
      },
      {
        "name": "Sundering Slam",
        "icon": "https://cdn.communitydragon.org/latest/champion/Ambessa/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ambessa enters a 0.225-second lockout, at the end of which she slams her twin drakehounds in a line in the target direction, dealing physical damage to enemies hit. The damage is doubled against the first enemy hit. Drakehound's Step's dash may be buffered during the lockout or initiated within 0.275 seconds of the lockout ending, and Ambessa will perform the dash after her slam completes.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      25,
                      37.5,
                      50,
                      62.5,
                      75
                    ]
                  },
                  {
                    "values": [
                      45
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  },
                  {
                    "values": [
                      1,
                      1.5,
                      2,
                      2.5,
                      3
                    ],
                    "units": [
                      "% (+ 2% per 100 bonus AD) of the target's maximum health"
                    ]
                  }
                ]
              },
              {
                "attribute": "Increased Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      50,
                      75,
                      100,
                      125,
                      150
                    ]
                  },
                  {
                    "values": [
                      90
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  },
                  {
                    "values": [
                      2,
                      3,
                      4,
                      5,
                      6
                    ],
                    "units": [
                      "% (+ 4% per 100 bonus AD) of the target's maximum health"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Against monsters, Sundering Slam deals 125 bonus physical damage and the damage based on their health ratio is capped at 100 - 300 (based on level)."
          }
        ],
        "cost": [
          70
        ],
        "cooldown": [
          14,
          13,
          12,
          11,
          10
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "true",
        "resource": "Energy",
        "damageType": "Physical damage",
        "spellEffects": "spellaoe",
        "projectile": "FALSE",
        "notes": "Sundering Slam will slam from wherever Ambessa is at the end of the lockout.\nIf her facing direction changes before the lockout completes, the slam will be performed towards the new direction.\nThe following table refers for interactions while Ambessa is locked out:\n\n\nAttacking\n\nRegisters input for  Drakehound's Step.\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nRegisters input for  Drakehound's Step.\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
        "blurb": "Active:  Ambessa slams her twin drakehounds in a line in the target direction, dealing physical damage to enemies hit. The damage is  increased against the first enemy.",
        "width": "40",
        "castTime": "none",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Repudiation",
        "icon": "https://cdn.communitydragon.org/latest/champion/Ambessa/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ambessa braces herself for up to 0.5 seconds, during which in the first 0.225 seconds she is unable to act. After Ambessa finishes bracing, she smashes the ground beneath her, dealing physical damage to nearby enemies. Drakehound's Step's dash may be buffered during the lockout or initiated within 0.25 seconds of the lockout ending.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      50,
                      75,
                      100,
                      125,
                      150
                    ]
                  },
                  {
                    "values": [
                      50
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
            "description": "Additionally, Ambessa shields herself at the time of cast for 50 - 320 (based on level) (+ 150% bonus AD) for 1.5 seconds. If the shield mitigates any amount of damage taken from champions, large monsters, or turrets before Ambessa smashes the ground, Repudiation's damage is increased by 50%.",
            "leveling": [
              {
                "attribute": "Increased Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      75,
                      112.5,
                      150,
                      187.5,
                      225
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
            "description": "Ambessa will smash the ground at the end of Drakehound's Step's dash if she would finish bracing during it, and otherwise always smashes the ground from wherever she is at the end of the bracing time."
          }
        ],
        "cost": [
          70
        ],
        "cooldown": [
          18,
          17,
          16,
          15,
          14
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "true",
        "resource": "Energy",
        "damageType": "Physical damage",
        "spellEffects": "spellaoe",
        "notes": "Repudiation's bracing time is unaffected by the initiation of  Drakehound's Step dash.\nAmbessa will smash the ground from wherever she is at the end of the bracing time even if the dash ends or completes its travel before the brace is finished.\nShe will remain in place until the brace is finished in this case.\nIf the brace would however finish during the dash, due to the specific timing of the dash's initiation, Ambessa will smash the ground at the end of the dash instead.\nThis would apply in cases where the dash is initiated right before or shortly before the bracing is finished.\nRepudiation's shield buff and shield health on the health bar UI are not granted to and displayed on the caster on-cast, but rather only after a very short, inconsistent delay from the time of cast.(bug)\nThe following table refers for interactions while Ambessa is locked out:\nAmbessa will smash the ground instantly upon entering  resurrection.\n\n\nAttacking\n\nRegisters input for  Drakehound's Step.\n\n\nAbilities\n\nOther abilities may be cast in the last 0.275 seconds of the brace after the lockout and are otherwise disabled in the first 0.225 seconds. If  Drakehound's Step's dash was buffered during the lockout, casting other abilities overrides the buffer with the new cast input.\n\n\nMovement\n\nRegisters input for  Drakehound's Step.\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
        "blurb": "Active:  Ambessa briefly braces herself, then smashes the ground beneath her. If she performs  Drakehound's Step's  dash during Repudiation, she will smash the ground at her destination instead.",
        "castTime": "none",
        "effectRadius": "325",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Lacerate",
        "icon": "https://cdn.communitydragon.org/latest/champion/Ambessa/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ambessa enters a 0.225-second lockout and spins her twin drakehounds around her to deal physical damage to nearby enemies and slow them by 99% decaying over 1 second. Drakehound's Step's dash may be buffered during the lockout or initiated within 0.275 seconds of the lockout ending; in either case, she will spin a second time at the end of the dash to apply the same effects at no additional cost.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      40,
                      60,
                      80,
                      100,
                      120
                    ]
                  },
                  {
                    "values": [
                      40,
                      45,
                      50,
                      55,
                      60
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  }
                ]
              },
              {
                "attribute": "Total Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      80,
                      120,
                      160,
                      200,
                      240
                    ]
                  },
                  {
                    "values": [
                      80,
                      90,
                      100,
                      110,
                      120
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "cost": [
          70
        ],
        "cooldown": [
          13,
          12,
          11,
          10,
          9
        ],
        "targeting": "Auto",
        "affects": "Enemies",
        "spellshieldable": "true",
        "resource": "Energy",
        "damageType": "Physical damage",
        "spellEffects": "spellaoe",
        "notes": "Ambessa will cast the second spin of Lacerate from wherever she is at the end of the dash.\nShe will spin a second time even if the dash is interrupted.\nThe following table refers for interactions while Ambessa is locked out:\n\n\nAttacking\n\nRegisters input for  Drakehound's Step.\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nRegisters input for  Drakehound's Step.\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nN/A",
        "blurb": "Active:  Ambessa spins her twin drakehounds around her, dealing physical damage to enemies hit and  slowing them briefly.",
        "castTime": "none",
        "effectRadius": "325",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Public Execution",
        "icon": "https://cdn.communitydragon.org/latest/champion/Ambessa/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Ambessa gains armor penetration and heals herself for a percentage of the post-mitigation damage she deals to enemies with her active abilities. The healing effectiveness is reduced to 25% against minions and 40% against monsters.</p>",
            "leveling": [
              {
                "attribute": "Armor Penetration",
                "modifiers": [
                  {
                    "values": [
                      10,
                      20,
                      30
                    ],
                    "units": [
                      "%"
                    ]
                  }
                ]
              },
              {
                "attribute": "Healing Percentage",
                "modifiers": [
                  {
                    "values": [
                      10,
                      12.5,
                      15
                    ],
                    "units": [
                      "%"
                    ]
                  },
                  {
                    "values": [
                      50
                    ],
                    "units": [
                      "% life steal"
                    ]
                  }
                ]
              },
              {
                "attribute": "Minion Healing Percentage",
                "modifiers": [
                  {
                    "values": [
                      2.5,
                      3.125,
                      3.75
                    ],
                    "units": [
                      "%"
                    ]
                  },
                  {
                    "values": [
                      12.5
                    ],
                    "units": [
                      "% life steal"
                    ]
                  }
                ]
              },
              {
                "attribute": "Monster Healing Percentage",
                "modifiers": [
                  {
                    "values": [
                      4,
                      5,
                      6
                    ],
                    "units": [
                      "%"
                    ]
                  },
                  {
                    "values": [
                      20
                    ],
                    "units": [
                      "% life steal"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ambessa prepares a strike in a line in the target direction, then blinks behind the farthest enemy champion within the area and seizes them. If she successfully seizes the target, Ambessa attaches them to herself and suppresses them for 0.75 seconds. While the target is suppressed, they are revealed and Ambessa picks them up off the ground before crashing them back down, afterwards dealing physical damage and stunning them for 0.4 seconds.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      150,
                      250,
                      350
                    ]
                  },
                  {
                    "values": [
                      80
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
            "description": "Ambessa is displacement immune and unable to act during the cast time and while the target is suppressed, lingering for 0.1 seconds afterwards. Drakehound's Step's dash may be buffered during the cast time or lockout, as well as initiated within 0.275 seconds of the lockout ending."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          130,
          115,
          100
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "true",
        "damageType": "Physical damage",
        "spellEffects": "spell",
        "notes": "Public Execution's attachment depends on the application of the  suppression; if the suppression is not applied, neither is the attachment. Similarly, if the suppression is removed, so is the attachment.\nIf the target resists the suppression by being  immune to crowd control,  displacement immune, or having a  spell shield, Ambessa will not attach them to herself.\nShe will be unable to apply the damage and stun in this case since the suppression was not applied in the first place.\nShe will still  blink to the target in this case.\nIf the target removes the suppression by any means, including with an applicable  cleanse effect or  dispel, they will instantly detach themselves from Ambessa, which causes the ability to cancel immediately.\nShe will fail to apply the damage and stun to the target since the suppression was removed from them early in this case.\nHer lockout and displacement immunity also ends prematurely in this case.\nIf Ambessa would blink inside the  attack range of an enemy  turret, including the Nexus Obelisk, Public Execution will instead attempt to position her outside of it.\nAmbessa will  reveal herself during the cast time if there is an enemy champion nearby.\nAmbessa will search for enemies in the direction she is facing at the end of cast time.\nThis direction can be changed by  Seraphine's  Encore.(bug)\nIf Ambessa successfully seizes a target, any regular movement commands issued before doing so are discarded upon the lockout ending.\nThis does not affect movement orders issued during the lockout.\nThe following table refers for interactions while Ambessa is in cast time and during the lockout:\nThe cast time is not interrupted by entering  resurrection.\n\n\nAttacking\n\nRegisters input for  Drakehound's Step.\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nRegisters input for  Drakehound's Step.\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
        "blurb": "Passive:  Ambessa gains  armor penetration and  heals for a percentage of the damage dealt by .",
        "width": "65",
        "castTime": "0.55",
        "maxCharges": -1
      }
    ]
  },
  "lore": "All who know the name Medarda respect and fear the family's leader, Ambessa. As a Noxian general, she embodies a deadly combination of ruthless strength and fearless resolve in battle. Her role as matriarch is no different, requiring great cunning to empower the Medardas while leaving no room for failure or compassion. Embracing the merciless ways of the Wolf, Ambessa will do whatever it takes to protect her family's legacy, even at the cost of her own children's love."
}
    export default champion