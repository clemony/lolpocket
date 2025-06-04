 export const Irelia: Champion =  {
  "id": 39,
  "key": "Irelia",
  "name": "Irelia",
  "title": "the Blade Dancer",
  "fullName": "Xan Irelia",
  "resource": "Mana",
  "attackType": "Melee",
  "stats": {
    "health": {
      "flat": 630,
      "perLevel": 115
    },
    "healthRegen": {
      "flat": 6,
      "perLevel": 0.85
    },
    "mana": {
      "flat": 350,
      "perLevel": 50
    },
    "manaRegen": {
      "flat": 8,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 36,
      "perLevel": 4.7
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 65,
      "perLevel": 3.5
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
      "flat": 0.656,
      "perLevel": 2.5
    },
    "attackSpeedRatio": {
      "flat": 0.656
    },
    "attackCastTime": {
      "flat": 0.3
    },
    "attackTotalTime": {
      "flat": 1.525
    },
    "attackRange": {
      "flat": 200
    }
  },
  "positions": [
    "Middle",
    "Top"
  ],
  "roles": [
    "Assassin",
    "Diver",
    "Fighter"
  ],
  "attributeRatings": {
    "damage": 2,
    "toughness": 2,
    "control": 2,
    "mobility": 3,
    "utility": 2,
    "abilityReliance": 30,
    "difficulty": 2
  },
  "abilities": {
    "P": [
      {
        "name": "Ionian Fervor",
        "icon": "https://cdn.communitydragon.org/latest/champion/Irelia/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Irelia generates a stack of Ionian Fervor for each enemy champion hit by her abilities, or if she hits at least one non-champion, lasting for 6 seconds, refreshing on basic attacks and ability hits against enemy champions, large monsters, and structures, and stacking up to 4 times.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Ionian Fervor:</span> For each stack, Irelia gains 7.5% - 25% (based on level) bonus attack speed, up to a maximum of 30% - 100% (based on level). At maximum stacks, Irelia's basic attacks are empowered to deal 10 - 61 (based on level) (+ 20% bonus AD) bonus magic damage on-hit, reduced to[ 50% ][ 5 - 30.5 (based on level) (+ 10% bonus AD) ]against structures.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Unsteady:</span> Enemy champions and large monsters hit by Flawless Duet and Vanguard's Edge's initial barrage are marked as Unsteady for 5 seconds. The mark can be consumed by Bladesurge.</p>"
          }
        ],
        "targeting": "Passive",
        "affects": "Self",
        "damageType": "Magic damage",
        "spellEffects": "Proc",
        "notes": "PENDING FOR TEST:: Parry interactions ( block,  dodge, and  blind).\nIonian Fervor stacks are represented by a counter under Irelia's health bar. It is highlighted while the ability is at its maximum effect.",
        "blurb": "Innate:  Irelia's abilities generate a stack of Ionian Fervor for each enemy champion hit, as well as one stack if she hits at least one non-champion. Basic attacks against enemy  champions and large  monsters will also refresh the duration."
      }
    ],
    "Q": [
      {
        "name": "Bladesurge",
        "icon": "https://cdn.communitydragon.org/latest/champion/Irelia/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Irelia dashes 100 units through the target enemy's location, and upon collision or dash completion, she deals physical damage, applies on-hit effects, and heals herself. Bladesurge deals 50 - 237 (based on level) bonus physical damage to minions.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      5,
                      25,
                      45,
                      65,
                      85
                    ]
                  },
                  {
                    "values": [
                      70
                    ],
                    "units": [
                      "% AD"
                    ]
                  }
                ]
              },
              {
                "attribute": "Heal",
                "modifiers": [
                  {
                    "values": [
                      9,
                      10,
                      11,
                      12,
                      13
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
            "description": "Bladesurge's current cooldown is reduced to 0.2 seconds upon collision of targets marked as Unsteady, and is reset if the target dies to or during Bladesurge's dash."
          },
          {
            "description": "Flawless Duet can be cast during the dash."
          }
        ],
        "cost": [
          15
        ],
        "cooldown": [
          10,
          9,
          8,
          7,
          6
        ],
        "targeting": "Unit",
        "affects": "Enemies, Self",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "Special",
        "notes": "Bladesurge will be buffered and cast when the cooldown ends or is reset if the player attempts to cast it within 0.5 seconds of the cooldown ending/resetting.\nBladesurge deals  basic damage, but also triggers spell effects by also being tagged as  spell damage.\nIf the target dies during Bladesurge's dash, the cooldown is fully refunded and Irelia may also cast her other abilities during the dash.\nIf the target dies to Bladesurge and was also marked, the cooldown is still fully refunded.\nBladesurge will only allow Irelia to dash through walls if there is enough space for her on the other side.\nBladesurge deals its damage and consumes marks when Irelia collides with the target, or at the end of the dash if the target moves away.\nBladesurge will not deal damage if the  dash is  interrupted beforehand.\nThe damage will be dealt if the target is in collision range when the dash is interrupted however.\n Flash will interrupt the  dash but Irelia will still collide with and deal damage to her target if the blink leaves her in contact with it at the new location.\nIrelia will complete her remaining dash distance even if the damage is dealt earlier.\nIf the target is  untargetable, Bladesurge will instead deals its damage at the end of the dash, rather than on collision.\nIrelia will automatically be ordered to acquire and attack Bladesurge's target as soon as the dash completes.\nIf a different target than Bladesurge's is selected during the dash, she will acquire that different target instead.",
        "blurb": "Active:  Irelia  dashes through the target enemy, dealing physical damage, applying  on-hit effects, and  healing herself.",
        "speed": "1400 + 100% movement speed",
        "castTime": "none",
        "targetRange": "600",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Defiant Dance",
        "icon": "https://cdn.communitydragon.org/latest/champion/Irelia/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Irelia charges for up to 1.5 seconds, during which she increases Defiant Dance's damage over the first 0.75 seconds of the channel and reduces incoming physical damage by 40% - 70% (based on level) (+ 7% per 100 AP) and incoming magic damage by 20% - 35% (based on level) (+ 3.5% per 100 AP).</p>"
          },
          {
            "description": "Defiant Dance can be recast within the duration, and does so automatically afterwards. Defiant Dance's charge cannot be interrupted by crowd control."
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Irelia swipes her blades in the target direction, dealing physical damage to enemies around her and within a line, increased by 0% - 200% (based on channel time). She also retains the damage reduction for 0.5 seconds.</p>",
            "leveling": [
              {
                "attribute": "Minimum Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      10,
                      20,
                      30,
                      40,
                      50
                    ]
                  },
                  {
                    "values": [
                      40
                    ],
                    "units": [
                      "% AD"
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
                "attribute": "Maximum Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      30,
                      60,
                      90,
                      120,
                      150
                    ]
                  },
                  {
                    "values": [
                      120
                    ],
                    "units": [
                      "% AD"
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
            "description": "Defiant Dance's recast can be used while affected by cast-inhibiting crowd control. Ionian Fervor's duration is paused during the charge; if Ionian Fervor has less than 1 second remaining when the charge starts, it is set to 1 second when the charge ends."
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
          20,
          18,
          16,
          14,
          12
        ],
        "targeting": "Auto / Direction",
        "affects": "Self / Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "spellaoe",
        "projectile": "FALSE",
        "notes": "Enemies around Irelia will be dealt the damage once the recast's cast time ends, while enemies within the line are dealt the damage via a missile that reaches the furthest targets after a 0.066 seconds delay after the recast's cast time.\nQuick Casting utilizes hold-and-release for the two casts.\nDefiant Dance reaches 100% physical damage reduction at 857.14 : 428.57 (based on level) AP.\nDefiant Dance reaches 100% magic damage reduction at 2285.71 : 1857.14 (based on level) AP.\nDefiant Dance will also recast automatically upon entering  resurrection.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThis refers to the recast.\nThe following table refers for interactions while Irelia is  channeling:\n\n\nType\n\nCharge channel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled, but can still use trinkets\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall\n\n\nInterrupted by\n\n Hexflash (Recasts)\n\n\nInterrupted by\n\nDeath",
        "width": "240",
        "castTime": "None / 0.25",
        "effectRadius": "300 /  120",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Flawless Duet",
        "icon": "https://cdn.communitydragon.org/latest/champion/Irelia/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Irelia sends a blade to the target location for 3.5 seconds. Flawless Duet can be recast after 0.15 seconds while the blade is active, and does so automatically at the end of its duration, though not if she is unable to cast abilities.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Irelia sends a second blade to the target location, or to her current position if Flawless Duet was recast automatically.</p>"
          },
          {
            "description": "Once both blades have been placed, they fly toward each other regardless of distance and converge over 0.25 seconds, afterwards dealing magic damage to all enemies within a line between them and stunning them for 0.75 seconds, during which they are revealed.",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      70,
                      110,
                      150,
                      190,
                      230
                    ]
                  },
                  {
                    "values": [
                      80
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
            "description": "Flawless Duet's recast can be used during Bladesurge and the cast time of Vanguard's Edge. Each of the blades' travel times are 0.264 seconds. Flawless Duet will cast at max range if cast beyond that."
          }
        ],
        "cost": [
          50
        ],
        "cooldown": [
          16,
          15,
          14,
          13,
          12
        ],
        "targeting": "Location",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "Area of effect",
        "projectile": "TRUE",
        "notes": "Both casts count as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nIf the ability is not manually recasted, the secondary effect will trigger and it will be considered as an ability activation. This is the only ability with this interaction in the game.\nFlawless Duet will recast automatically at its end during  Defiant Dance despite being disabled.\nFlawless Duet will also recast automatically upon entering  resurrection.\nThe outgoing blades will stop flight upon touching  projectile blocking effects. The converging blades will instead be destroyed upon contact with such effects.\nThe blades will not stun nor deal damage if they fail to converge (i.e  Yasuo's  Wind Wall).\nBoth of Flawless Duet's casts will be buffered and cast when their cooldowns end if the player attempts to cast each within 0.3 seconds of their cooldown ending.",
        "blurb": "Active:  Irelia sends a blade to the target location for a short time.\nFlawless Duet can be recast within the duration, and does so automatically after the duration. The recast cannot be  interrupted.",
        "speed": "2000",
        "width": "Convergence hit width",
        "castTime": "none",
        "effectRadius": "Global",
        "targetRange": "775",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Vanguard's Edge",
        "icon": "https://cdn.communitydragon.org/latest/champion/Irelia/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Irelia launches a barrage of blades in the target direction, expanding outward upon hitting an enemy champion, dealing magic damage to all enemies hit and revealing them for 1 second.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      125,
                      200,
                      275
                    ]
                  },
                  {
                    "values": [
                      70
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
            "description": "After expanding, the blades drop on the ground, knocking all enemy units away from them, though not rendering them airborne, and forming a spade-shaped perimeter around the enemy champion hit for 2.5 seconds that grants sight of its surroundings. Enemies that pass through the blades for the first time are dealt the same magic damage and are slowed by 90% for 1.5 seconds."
          },
          {
            "description": "The perimeter will point at the same angle Irelia casted it from, but based on the target's center."
          }
        ],
        "cost": [
          100
        ],
        "cooldown": [
          125,
          105,
          85
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "special",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "projectile": "TRUE",
        "notes": "Enemies that cross the perimeter are not marked Unsteady.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe blades will still expand if the champion hit by the blades is protected by a  spell shield.\nThe  sight is granted in a 1350 unit radius at the location of the enemy champion at the time of being hit and can be blocked by terrain.",
        "blurb": "Active:  Irelia launches a barrage of blades in the target direction that expand outward upon hitting an enemy champion, dealing magic damage to enemies hit.",
        "speed": "2000",
        "width": "320",
        "castTime": "0.4",
        "targetRange": "1000",
        "maxCharges": -1
      }
    ]
  },
  "lore": "The Noxian occupation of Ionia produced many heroes, none more unlikely than young Irelia of Navori. Trained in the ancient dances of her province, she adapted her art for war, using the graceful and carefully practised movements to levitate a host of deadly blades. After proving herself as a fighter, she was thrust into the role of resistance leader and figurehead, and to this day remains dedicated to the preservation of her homeland."
}
