// Updated Patch 25.11 - 06/06/2025 12:19:16 PM CDT

const champion: Champion =  {
  "id": 254,
  "key": "Vi",
  "name": "Vi",
  "title": "the Piltover Enforcer",
  "fullName": "Violet",
  "resource": "Mana",
  "attackType": "Melee",
  "stats": {
    "health": {
      "flat": 655,
      "perLevel": 99
    },
    "healthRegen": {
      "flat": 10,
      "perLevel": 1
    },
    "mana": {
      "flat": 295,
      "perLevel": 65
    },
    "manaRegen": {
      "flat": 8,
      "perLevel": 0.65
    },
    "armor": {
      "flat": 30,
      "perLevel": 4.7
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
      "flat": 0.644,
      "perLevel": 2
    },
    "attackSpeedRatio": {
      "flat": 0.644
    },
    "attackCastTime": {
      "flat": 0.36
    },
    "attackTotalTime": {
      "flat": 1.6
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
    "mobility": 2,
    "utility": 1,
    "abilityReliance": 55,
    "difficulty": 1
  },
  "abilities": {
    "P": [
      {
        "name": "Blast Shield",
        "icon": "https://cdn.communitydragon.org/latest/champion/Vi/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Periodically, Vi's next ability hit grants her a shield equal to 14% of her maximum health for 3 seconds.</p>"
          },
          {
            "description": "Blast Shield's cooldown is reduced by 4 seconds each time Denting Blows is consumed."
          }
        ],
        "targeting": "Passive",
        "affects": "Self",
        "spellEffects": "Shield",
        "notes": "Denting Blows will not activate Blast Shield.",
        "blurb": "Innate: Periodically,  Vi's next ability hit will generate a  shield by a portion of her maximum health for a short time."
      }
    ],
    "Q": [
      {
        "name": "Vault Breaker",
        "icon": "https://cdn.communitydragon.org/latest/champion/Vi/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Vi charges while being slowed by 15% for up to 4 seconds to increase Vault Breaker's range, speed, and damage over the first 1.25 seconds of the channel.</p>"
          },
          {
            "description": "Vault Breaker can be recast within the duration. If the charge completes without reactivation, Vault Breaker is cancelled, 50% of the mana cost is refunded, and it is placed on full cooldown. If the charge is interrupted, 50% of the mana cost is refunded and it is placed on a 3-second cooldown."
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Vi dashes in the target direction to deal physical damage to enemies within her path, increased by 0% - 150% (based on channel time), and pull all non-champions hit towards her.</p>",
            "leveling": [
              {
                "attribute": "Minimum Physical Damage",
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
                  }
                ]
              },
              {
                "attribute": "Maximum Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      100,
                      150,
                      200,
                      250,
                      300
                    ]
                  },
                  {
                    "values": [
                      150
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
            "description": "She stops upon hitting an enemy champion, knocking them back over 0.75 seconds."
          },
          {
            "description": "Relentless Force and Cease and Desist can be cast during the dash."
          }
        ],
        "cost": [
          50,
          60,
          70,
          80,
          90
        ],
        "cooldown": [
          12,
          10.5,
          9,
          7.5,
          6
        ],
        "targeting": "Auto / Direction",
        "affects": "Enemies, Self",
        "spellshieldable": "true",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "aoe",
        "notes": "Vault Breaker's dash range extends up to 50 units when going through a wall.\nTargets will be hit as soon as they come into contact with Vi.\nThe knockback direction will be toward Vi's facing direction regardless of where she hit the target.\nCasting  Flash during the dash will cause enemies at the destination to be hit by Vault Breaker.\nAs  Flash updates Vi's facing direction, affected champions will be knocked back in the direction the summoner spell was cast in.\nVi may cast spells that change her facing direction during the dash, including certain item actives and her own  Cease and Desist, to knock champions she collides with in a different direction.(note)\nItems that also initiate their own  dash immediately without delay can only redirect targets struck at Vault Breaker's maximum range. These items include:\n Hextech Rocketbelt\nStuck targets (including those that block Vault Breaker with a  spell shield) are briefly immune to being affected again by Vault Breaker from this player, for about 1.25 seconds.\nThe following table refers for interactions while Vi is  channeling:\n\n\nType\n\nCharge channel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled, but can still use trinkets.\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall\n\n\nInterrupted by\n\n Hexflash (Recasts)\n\n\nInterrupted by\n\nDeath Grounding effects Immobilizing effects Cast-inhibiting effects",
        "speed": "1450 : 1540 (based on channel time)",
        "castTime": "none",
        "targetRange": "250 : 725 (based on channel time)",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Denting Blows",
        "icon": "https://cdn.communitydragon.org/latest/champion/Vi/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Vi's basic attacks on-hit and Vault Breaker apply a stack of Denting Blows to enemies hit for 4 seconds, refreshing on subsequent applications and stacking up to 3 times. The third stack consumes them all to deal bonus physical damage, capped at 300 against non-champions, and inflict 20% armor reduction for 4 seconds.</p>",
            "leveling": [
              {
                "attribute": "Bonus Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      4,
                      5.5,
                      7,
                      8.5,
                      10
                    ],
                    "units": [
                      "%  of target's maximum health"
                    ]
                  },
                  {
                    "values": [
                      2.86
                    ],
                    "units": [
                      "% per 100 bonus AD"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "After consuming Denting Blows, Vi gains bonus attack speed for 4 seconds, which refreshes on subsequent triggers.",
            "leveling": [
              {
                "attribute": "Bonus Attack Speed",
                "modifiers": [
                  {
                    "values": [
                      30,
                      37.5,
                      45,
                      52.5,
                      60
                    ],
                    "units": [
                      "%"
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
          0
        ],
        "targeting": "Passive",
        "affects": "Self, Enemies",
        "spellshieldable": "False",
        "damageType": "Physical damage",
        "spellEffects": "Proc",
        "notes": "The armor penetration will apply after the triggering damage.\nThe enhanced attack applies other  on-hit effects and can both  critically strike as normal as well as apply  life steal (the bonus damage cannot do either).\nDenting Blows can be  blocked but cannot be  dodged nor missed while Vi is  blinded.\nThe attacks do not affect structures nor wards.",
        "blurb": "Passive:  Vi's basic attacks and  Vault Breaker apply a stack of Denting Blows.",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Relentless Force",
        "icon": "https://cdn.communitydragon.org/latest/champion/Vi/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Vi empowers her next basic attack within 6 seconds to have an uncancellable windup, gain 50 bonus range and trigger a blast in the target's direction that deals modified physical damage to enemies hit in a cone.Relentless Force can critically strike for (90% + 48%) AD bonus physical damage against the primary target. Secondary targets take the same damage but do not count as being critically struck.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      0,
                      15,
                      30,
                      45,
                      60
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
                      100
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
            "description": "Vi periodically stocks a Relentless Force charge, up to a maximum of 2."
          },
          {
            "description": "Relentless Force resets Vi's basic attack timer."
          }
        ],
        "cost": [
          26,
          32,
          38,
          44,
          50
        ],
        "cooldown": [
          1
        ],
        "targeting": "Auto",
        "affects": "Enemies",
        "spellshieldable": "true",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "special",
        "notes": "Applies  spell damage to the primary target, applies  basic damage required effects on the primary target, and applies  area damage to secondary targets.\nThe empowered attack has the same windup time as Vi's basic attacks.\nRelentless Force will only apply a stack of  Denting Blows to the primary target.\nIf the Relentless Force buff is about to run out as Vi starts the attack windup, the duration will be updated and extended to allow Vi to still sucessfully attack.",
        "blurb": "Active:  Vi's next basic attack gains  bonus range and deals modified physical damage to enemies hit in a cone.",
        "rechargeRate": [
          12,
          11,
          10,
          9,
          8
        ],
        "castTime": "none",
        "effectRadius": "600",
        "maxCharges": 2
      }
    ],
    "R": [
      {
        "name": "Cease and Desist",
        "icon": "https://cdn.communitydragon.org/latest/champion/Vi/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Vi singles out the target enemy champion, dashing with displacement immunity towards them and revealing them. Upon approaching within 300 units of the target, she dashes through and grabs them over 1.05 seconds, knocking them up for 1.3 seconds and dealing physical damage after 0.75 seconds into the grab duration.</p>",
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
                      90
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
            "description": "Enemies she dashes through are dealt the same damage, knocked aside by 350 units over 0.25 seconds, and stunned for 0.75 seconds."
          }
        ],
        "cost": [
          100
        ],
        "cooldown": [
          140,
          115,
          90
        ],
        "targeting": "Unit",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "spell",
        "notes": "Vi will track the target if they change locations.\nShe will stop dashing if the target is too far away or moves beyond 1500 units.\nVi will land to the opposite side of the target from the dash after the grab ends.\nShe will not dash through the target if she would not be able to land to the opposite side of them, such as by terrain.\nSecondary targets will be affected as soon as they come into contact with Vi, and cannot be affected by this again for ~4 seconds.\nThe  airborne debuff cannot be overridden.\nThe dash will not be overridden if Vi  blinks during it.\nVi's  displacement immunity and the target's  reveal both last until the grab ends.\nIf the dash ends from entering resurrection or the target being too far away, the displacement immunity will remain for 7 seconds, and will otherwise be lost.(bug)\nThe dash speed increases with time travelled.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).\nThis will also occur for when Vi enters  resurrection during the cast time.\nIf the target becomes untargetable during the dash, Vi ends the dash prematurely and moves towards the target briefly, ignoring any movement commands. If Vi enters grabbing range, she will apply the  airborne effect but not deal any damage.\nCease and Desist will cancel and go on full cooldown if Vi is affected by  Fear Beyond Death's recast during the cast time.\n Displacement immunity will not resist the application of the  stun.\nThe following table refers for interactions while Vi is  dashing and has grabbed the target:\n Flash cannot be used during the grab.\nThis lockout is removed as soon as the grab ends, after which the the target's remaining  airborne time will be 0.25 seconds.\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Relentless Force is usable.  Vault Breaker is disabled.\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash  Hexflash\n\n\nDisabled\n\n Teleport  Recall\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
        "blurb": "Active:  Vi  reveals the target enemy champion and  dashes to them with  displacement immunity, dealing physical damage to enemies she passes through and briefly  knocking aside and  stunning them.",
        "speed": "800",
        "castTime": "0.25",
        "targetRange": "800",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Raised on the mean streets of Zaun, Vi is a hotheaded, impulsive, and fearsome woman with very little respect for authority. She has always been a shrewd survivor, both from her youthful troublemaking topside and an unfairly long stint in Stillwater Hold. Now working with the Piltover Enforcers to keep the peace instead of breaking it, she wields mighty hextech gauntlets that can punch through walls—and criminals—with equal ease."
}
    export default champion