// Updated Patch 25.15 - 07/31/2025 07:16:02 AM CDT

const champion: Champion =  {
  "id": 233,
  "key": "Briar",
  "name": "Briar",
  "title": "the Restrained Hunger",
  "resource": "Frenzy",
  "attackType": "Melee",
  "stats": {
    "health": {
      "flat": 625,
      "perLevel": 95
    },
    "armor": {
      "flat": 30,
      "perLevel": 4.2
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 60,
      "perLevel": 2.5
    },
    "movespeed": {
      "flat": 340
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
      "flat": 0.644,
      "perLevel": 2
    },
    "attackSpeedRatio": {
      "flat": 0.669
    },
    "attackCastTime": {
      "flat": 0.3
    },
    "attackTotalTime": {
      "flat": 1.553
    },
    "attackRange": {
      "flat": 125
    }
  },
  "positions": [
    "Jungle"
  ],
  "roles": [
    "Assassin",
    "Diver",
    "Fighter"
  ],
  "attributeRatings": {
    "damage": 2,
    "toughness": 2,
    "control": 3,
    "mobility": 3,
    "utility": 1,
    "abilityReliance": 10,
    "difficulty": 2
  },
  "abilities": {
    "P": [
      {
        "name": "Crimson Curse",
        "icon": "https://cdn.communitydragon.org/latest/champion/Briar/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Briar's basic attacks and abilities inflict a bleed against enemies for 5 seconds, refreshing on subsequent applications, stacking up to 7 times and dealing 25% damage for stacks beyond the first. The bleed deals[ 10 - 50 (based on level) (+ 50% bonus AD) total physical damage over the duration, increased by 2.5 - 12.5 (based on level) (+ 12.5% bonus AD) for each subsequent stack and up to a maximum of 25 - 125 (based on level) (+ 125% bonus AD). ][ 1 - 5 (based on level) (+ 5% bonus AD) physical damage every 0.5 seconds, increased by 0.25 - 1.25 (based on level) (+ 1.25% bonus AD) for each subsequent stack and up to a maximum of 2.5 - 12.5 (based on level) (+ 12.5% bonus AD) per tick. ]Briar heals herself equal to 25% of the pre-mitigation damage dealt. If a target dies while bleeding, she will heal herself equal to 125% of the remaining bleed damage.</p>"
          },
          {
            "description": "Briar has no base health regeneration, but she increases healing from all sources by 0% - 40% (based on missing health) (+ 0% - 2.5% (based on missing health) per 100 bonus health)."
          }
        ],
        "targeting": "Passive",
        "affects": "Enemies, Self",
        "spellshieldable": "true",
        "damageType": "Physical damage",
        "spellEffects": "default",
        "notes": "Blood Frenzy's area of effect damage around the target does not apply bleed stacks.",
        "blurb": "Innate:  Briar has no  base health regeneration but she gains increased healing from other sources based on her missing health."
      }
    ],
    "Q": [
      {
        "name": "Head Rush",
        "icon": "https://cdn.communitydragon.org/latest/champion/Briar/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Briar leaps to the target unit. If the target is an enemy, she deals magic damage, applies on-hit effects, triggers on-attack effects, stuns them for 0.85 seconds, and reduces their armor and magic resistance for 5 seconds.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      60,
                      90,
                      120,
                      150,
                      180
                    ]
                  },
                  {
                    "values": [
                      80
                    ],
                    "units": [
                      "% bonus AD"
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
              },
              {
                "attribute": "Resistances Reduction",
                "modifiers": [
                  {
                    "values": [
                      10,
                      12.5,
                      15,
                      17.5,
                      20
                    ],
                    "units": [
                      "%"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Head Rush resets Briar's basic attack timer."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          13,
          12,
          11,
          10,
          9
        ],
        "targeting": "Unit",
        "affects": "Enemies, Self",
        "spellshieldable": "true",
        "resource": "Current health",
        "damageType": "Magic damage",
        "spellEffects": "spell",
        "notes": "Head Rush can be cast on jungle plants, wards, and traps.\nIt cannot be cast on structures.\nHead Rush's damage benefits from life steal.\nHead Rush is a non-following dash.\nIt picks its dash destination ~100 units in front of enemy targets, 75 units in front of enemy targets when already very close to them, 75 units in front of allied targets.\nIf already within 75 units of her target, she dashes to her current location, which takes 0 time but still triggers dash effects such as  Sudden Impact.\nIt does not force the target's resistance values to update immediately outside of the natural stat update cycle, which means it will typically still be mitigated by the unreduced magic resistance value.",
        "blurb": "Active:  Briar  leaps to the target unit. If the target is an enemy, she deals magic damage,  stuns them briefly, and additionally reduces their  armor and  magic resistance for a few seconds.",
        "speed": "600 : 900 (based on distance)",
        "castTime": "none",
        "targetRange": "475",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Blood Frenzy",
        "icon": "https://cdn.communitydragon.org/latest/champion/Briar/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Briar dashes in the target direction. If there is a nearby enemy upon her arrival, she gains Blood Frenzy for 5 seconds, during which she can cast Snack Attack.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Blood Frenzy:</span> Briar breaks free from her pillory, causing her to become forced to basic attack the nearest enemy. She reveals the target and gains ghosting, bonus attack speed and bonus movement speed, as well as empowering her basic attacks to have an uncancelable windup and deal physical damage to enemies surrounding her target. This damage is affected by critical strike modifiers.</p>",
            "leveling": [
              {
                "attribute": "Bonus Attack Speed",
                "modifiers": [
                  {
                    "values": [
                      55,
                      65,
                      75,
                      85,
                      95
                    ],
                    "units": [
                      "%"
                    ]
                  }
                ]
              },
              {
                "attribute": "Bonus Movement Speed",
                "modifiers": [
                  {
                    "values": [
                      24,
                      33,
                      42,
                      51,
                      60
                    ],
                    "units": [
                      "%"
                    ]
                  }
                ]
              },
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      60,
                      70,
                      80,
                      90,
                      100
                    ],
                    "units": [
                      "% AD"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Briar prioritizes attacking champions, then large monsters or minions, and then any other unit. If she casts Head Rush on a non-champion, she will shift her target priority to large monsters or minions, then champions, and then any other unit."
          },
          {
            "description": "Blood Frenzy causes Briar to become unable to receive movement and attack commands. The frenzy ends early if there are no longer any nearby valid targets or Chilling Scream is cast. Blood Frenzy resets Briar's basic attack timer. Head Rush and Certain Death can be cast during the dash."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          14,
          13,
          12,
          11,
          10
        ],
        "targeting": "Location",
        "affects": "Enemies, Self",
        "resource": "Current health",
        "damageType": "Physical damage",
        "spellEffects": "default",
        "notes": "Blood Frenzy acquires targets regardless of if they are visible or not.\nThis does not apply to  stealthed targets.\nIf the main attack  critically strikes, the cleave damage will do so as well.\nBriar uses  Frenzy as a resource to indicate the remaining duration of the frenzy, in seconds.\nThe following table refers for interactions while Briar is in her frenzy:\nWhile in the frenzy, Briar cannot control her movement nor declare who she attacks. She will automatically acquire a nearby enemy as her attack target based on a priority system, becoming forced to basic attack the target and consequently move into her attack range of them to do so.\n Disarming crowd control as well as any other lockout that would disable basic attacking will disable the forced attacks.\n Forced action crowd control will cause her forced attacks to be either overridden or disabled, depending on the actions being forced by the debuff.\n\n\nAttacking\n\nUncontrollable\n\n\nAbilities\n\n Head Rush can only be cast on targets within its radius.  Chilling Scream interrupts the frenzy.  Certain Death can be cast during the frenzy without interrupting it.\n\n\nMovement\n\nUncontrollable\n\n\nItems\n\nUsable\n\nAll items are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
        "blurb": "Active:  Briar  dashes and senses her surroundings. If there is a nearby enemy upon her arrival, she gains Blood Frenzy for a few seconds, during which she can cast  Snack Attack.",
        "speed": "1200",
        "castTime": "none",
        "effectRadius": "1000 / 275",
        "targetRange": "75 - 300 / 650",
        "maxCharges": -1
      },
      {
        "name": "Snack Attack",
        "icon": "https://cdn.communitydragon.org/latest/champion/Briar/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Briar empowers her next basic attack within 5 seconds during Blood Frenzy to take a bite out of the target enemy, gaining 50 bonus range, dealing bonus physical damage and healing her for 5% of her maximum health plus a percentage of the post-mitigation damage dealt.</p>",
            "leveling": [
              {
                "attribute": "Bonus Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      5,
                      20,
                      35,
                      50,
                      65
                    ]
                  },
                  {
                    "values": [
                      5
                    ],
                    "units": [
                      "% AD"
                    ]
                  },
                  {
                    "values": [
                      9
                    ],
                    "units": [
                      "% (+ 2.5% per 100 bonus AD) of the target's missing health"
                    ]
                  }
                ]
              },
              {
                "attribute": "Heal Percentage",
                "modifiers": [
                  {
                    "values": [
                      24,
                      28,
                      32,
                      36,
                      40
                    ],
                    "units": [
                      "%"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Snack Attack deals 110% damage against minions and monsters, with the damage based on the target's health ratio being capped at 400.",
            "leveling": [
              {
                "attribute": "Non-Champion Bonus Damage",
                "modifiers": [
                  {
                    "values": [
                      5.5,
                      22,
                      38.5,
                      55,
                      71.5
                    ]
                  },
                  {
                    "values": [
                      5.5
                    ],
                    "units": [
                      "% AD"
                    ]
                  },
                  {
                    "values": [
                      9.9
                    ],
                    "units": [
                      "% (+ 2.75% per 100 bonus AD) of the target's missing health"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Snack Attack resets Briar's basic attack timer."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          14,
          13,
          12,
          11,
          10
        ],
        "targeting": "Auto",
        "affects": "Enemies, Self",
        "spellshieldable": "false",
        "damageType": "Physical damage",
        "spellEffects": "proc",
        "notes": "Snack Attack can only be used during  Blood Frenzy; if the frenzy ends at any point, the empowered attack will be lost immediately.\nSnack Attack can be cast while Briar is  charmed or  taunted.(bug)",
        "blurb": "Active:  Briar empowers her next attack during  Blood Frenzy to take a bite out of the target enemy. The attack gains increased  range, deals bonus physical damage based on the target's missing health and  heals Briar for a portion of the damage dealt.",
        "castTime": "none",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Chilling Scream",
        "icon": "https://cdn.communitydragon.org/latest/champion/Briar/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Briar prepares to unleash a scream in the target direction, charging for up to 1 second, during which she increases Chilling Scream's damage and range, and gains 35% damage reduction and heals herself every 0.25 seconds.</p>",
            "leveling": [
              {
                "attribute": "Heal Per Tick",
                "modifiers": [
                  {
                    "values": [
                      2.5,
                      2.875,
                      3.25,
                      3.625,
                      4
                    ],
                    "units": [
                      "% maximum health"
                    ]
                  }
                ]
              },
              {
                "attribute": "Maximum Heal",
                "modifiers": [
                  {
                    "values": [
                      10,
                      11.5,
                      13,
                      14.5,
                      16
                    ],
                    "units": [
                      "% maximum health"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Chilling Scream can be recast within the duration, and does so automatically afterwards. Chilling Scream's charge cannot be interrupted by crowd control."
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Briar unleashes the scream in the direction she targeted at the time of cast, dealing magic damage to enemies hit and slowing them by 80% for 0.5 seconds.</p>",
            "leveling": [
              {
                "attribute": "Maximum Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      80,
                      115,
                      150,
                      185,
                      220
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
                      100
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Minimum Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      2,
                      2.875,
                      3.75,
                      4.625,
                      5.5
                    ]
                  },
                  {
                    "values": [
                      2.5
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  },
                  {
                    "values": [
                      2.5
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
            "description": "If Chilling Scream was charged for its full duration, enemies hit are also knocked back 575 units. If they collide with terrain, they will rebound to take bonus magic damage and become knocked up for 0.5 seconds and stunned for 1.5 seconds.",
            "leveling": [
              {
                "attribute": "Bonus Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      140,
                      215,
                      290,
                      365,
                      440
                    ]
                  },
                  {
                    "values": [
                      240
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  },
                  {
                    "values": [
                      240
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
                      220,
                      330,
                      440,
                      550,
                      660
                    ]
                  },
                  {
                    "values": [
                      340
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  },
                  {
                    "values": [
                      340
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
          16
        ],
        "targeting": "Direction / Auto",
        "affects": "Enemies, Self",
        "spellshieldable": "true",
        "resource": "Current health",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "projectile": "TRUE",
        "notes": "Chilling Scream increases its damage by its minimum every 0.025 seconds over the duration.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe following table refers for interactions while Briar is  channeling:\n\n\nType\n\nCharge channel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled, but can still use trinkets\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall\n\n\nInterrupted by\n\n Hexflash (Recasts)\n\n\nInterrupted by\n\nDeath",
        "speed": "1900 / 1800",
        "width": "380",
        "castTime": "None / 0.15",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Certain Death",
        "icon": "https://cdn.communitydragon.org/latest/champion/Briar/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Briar kicks her pillory's hemolith in the target direction, briefly granting sight of its surroundings as it travels and marking the first enemy champion hit as her prey. The mark's application disrupts the target's ongoing channels. While the target is marked, they are revealed.</p>"
          },
          {
            "description": "If a target is hit, Briar cleanses herself from all crowd control and becomes immune to them over a cast time, afterwards dashing to them with displacement immunity. Upon arrival, she creates an explosion around the marked target that deals magic damage to them and nearby enemies and fears all non-marked targets for 1.5 seconds, during which they are slowed by 35%. She then enters a state of Hematomania.",
            "leveling": [
              {
                "attribute": "Magic Damage",
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
                      50
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  },
                  {
                    "values": [
                      120
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
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Hematomania:</span> Briar gains all effects of Blood Frenzy as well as bonus armor and bonus magic resistance equal to 20% AD, life steal, and additional bonus movement speed.</p>",
            "leveling": [
              {
                "attribute": "Life Steal",
                "modifiers": [
                  {
                    "values": [
                      10,
                      15,
                      20
                    ],
                    "units": [
                      "%"
                    ]
                  }
                ]
              },
              {
                "attribute": "Additional Bonus Movement Speed",
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
              }
            ]
          },
          {
            "description": "While in the empowered frenzy, Briar prioritizes attacking the marked target over all other units and regardless of range. If that target becomes invalid, she will shift back to her normal targeting priority until the marked target can be attacked again. Hematomania lasts until the mark is dispelled by any means, including Briar's or the target's death."
          },
          {
            "description": "Casting Chilling Scream removes the target's mark and ends Hematomania early. Head Rush's cast does not shift her targeting priority during Hematomania."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          120,
          100,
          80
        ],
        "targeting": "Direction",
        "affects": "Enemies, Self",
        "spellshieldable": "true",
        "resource": "Current health",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "projectile": "TRUE",
        "notes": "Briar will track the target with the  dash if they change locations.\nShe will not stop tracking the target until she reaches them, as there is no maximum tracking distance.\nBriar lands 100 units in front of her target at the end of the dash.\nBriar will not initiate the second cast if she is being  suppressed, is under  resurrection, or is in the  Realm of Death when her target is hit by the missile in the normal realm.\nSince Certain Death cleanses herself from all crowd control when the first cast hits, she will be able to start the second cast due to removing the suppression effect.\nBriar will still dash to the target even if they die before she reaches them.\nBriar will transition from having  total crowd control immunity during the cast time of the dash, to having  displacement immunity during the dash.\nBriar will place herself onto the ground and interrupt  displacements affecting her upon starting the second cast time.\nHematomania's targeting priorities differ slightly from that of  Blood Frenzy's:\nShe will prioritize the marked target regardless of range and over all other units as long as it can be attacked.\nIf the marked target is not available, then she shifts her priority to the nearest other champion, then large monster or minion, and then any other unit.\nIf neither the marked target is valid or any other valid targets are close nearby, then she will prioritize targeting the nearest other champion, then large monster or minion, and then any other unit within a global radius.\nStarting the second cast interrupts any spells that Briar is  channeling.\nThe mark will expire if Hematomania's buff is dispelled.\nCasting  Blood Frenzy during Hematomania will not grant any additional bonuses nor will it override Hematomania's effects.\nGaining Hematomania while Blood Frenzy is active will override the previous buff.\nThe  disrupt is 'wrapped' into a status effect that says the target is  Silenced for 0.3 seconds, but it does not actually silence. It however makes sure that the disrupt is prevented by  immunity to silences.\nThis ability will cast from wherever the caster is at the start of the cast time.\nThe following table refers for interactions while Briar is in either the first or second cast time:\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection\n\nThe following table refers for interactions while Briar is dashing:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath\n\nThe following table refers for interactions while Briar is in Hematomania:\n\n\nAttacking\n\nUncontrollable\n\n\nAbilities\n\n Head Rush can only be cast on targets within its radius.  Chilling Scream interrupts the frenzy.  Certain Death is disabled.\n\n\nMovement\n\nUncontrollable\n\n\nItems\n\nUsable\n\nAll items are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
        "speed": "2000 / 2500 : 5000",
        "width": "320",
        "castTime": "1 / 1.25",
        "effectRadius": "Global /  1500 /  575",
        "maxCharges": -1
      }
    ]
  },
  "lore": "A failed experiment by the Black Rose, Briar's uncontrollable bloodlust required a special pillory to focus her frenzied mind. After years of confinement, this living weapon broke free from her restraints and unleashed herself into the world. Now she's controlled by no one—following only her hunger for knowledge and blood—and relishes the opportunities to let loose, even if reining back the frenzy isn't easy."
}
    export default champion