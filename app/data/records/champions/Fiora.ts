// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion =  {
  "id": 114,
  "key": "Fiora",
  "name": "Fiora",
  "title": "the Grand Duelist",
  "fullName": "Fiora Laurent",
  "resource": "Mana",
  "attackType": "Melee",
  "stats": {
    "health": {
      "flat": 620,
      "perLevel": 99
    },
    "healthRegen": {
      "flat": 8.5,
      "perLevel": 0.55
    },
    "mana": {
      "flat": 300,
      "perLevel": 60
    },
    "manaRegen": {
      "flat": 8,
      "perLevel": 0.7
    },
    "armor": {
      "flat": 33,
      "perLevel": 4.7
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 66,
      "perLevel": 3.3
    },
    "movespeed": {
      "flat": 345
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
      "perLevel": 3.2
    },
    "attackSpeedRatio": {
      "flat": 0.69
    },
    "attackCastTime": {
      "flat": 0.2
    },
    "attackTotalTime": {
      "flat": 1.45
    },
    "attackRange": {
      "flat": 150
    }
  },
  "positions": [
    "Top"
  ],
  "roles": [
    "Assassin",
    "Fighter",
    "Skirmisher"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 2,
    "control": 2,
    "mobility": 2,
    "utility": 2,
    "abilityReliance": 20,
    "difficulty": 2
  },
  "abilities": {
    "P": [
      {
        "name": "Duelist's Dance",
        "icon": "https://cdn.communitydragon.org/latest/champion/Fiora/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Fiora identifies the Vitals of nearby visible enemy champions, marked as an arc around them in North-, East-, South- or Westward direction. Vitals take 1.75 seconds to become targetable and linger for 13.25 seconds afterwards while Fiora remains near the target, otherwise the Vital will disappear. After a Vital ends, Fiora identifies a new one on her target.</p>"
          },
          {
            "description": "Dealing damage in the direction of a Vital will trigger it to deal bonus true damage equal to 3% (+ 4% per 100 bonus AD) of target's maximum health, heal Fiora for 35 - 100 (based on level), and grant her 20 / 30 / 40 / 50% (based on Grand Challenge's Rank) bonus movement speed that decays over 1.85 seconds."
          }
        ],
        "targeting": "Passive",
        "affects": "Enemies",
        "spellshieldable": "False",
        "damageType": "True damage",
        "spellEffects": "Proc",
        "notes": "Vitals can be triggered by any source of damage Fiora deals, except those with  default damage and  reactive damage types.\nThe Vitals are visible to all units.\nA Vital's angle is fixed to the champion's model and doesn't interact with its orientation.\nVitals spawn directions alternate in a Northeast-Southwest pattern. Other than that, they have a 50% chance to spawn North or East, or South or West, respectively.\nPENDING FOR TEST: The direction of the first Vital upon Fiora and her enemy encountering one another in the game for the first time is always South- or Westward. This is regardless of whether Fiora is in the Blue or Red team.\nVitals will not trigger if the attack is  dodged or missed while Fiora is  blinded.\n Block will not prevent a trigger.\nIf the Vital is triggered by  Lunge, it can be  dodged, but it can't be  blocked and will trigger even if Fiora is  blinded.",
        "blurb": "Innate:  Fiora challenges nearby enemy champions, calling out a direction from which she will try to strike their Vitals. A new Vital is called out after some time or if one is struck.",
        "angle": "90°",
        "effectRadius": "1200  1350 /  250"
      }
    ],
    "Q": [
      {
        "name": "Lunge",
        "icon": "https://cdn.communitydragon.org/latest/champion/Fiora/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Fiora dashes in the target direction, then stabs a nearby enemy. Lunge can hit structures and wards. Stabbing a target reduces Lunge's cooldown by 50%.</p>"
          },
          {
            "description": "The stab deals physical damage and applies on-hit effects.",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      70,
                      80,
                      90,
                      100,
                      110
                    ]
                  },
                  {
                    "values": [
                      90,
                      95,
                      100,
                      105,
                      110
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
            "description": "Fiora can cast any of her abilities during the dash. The target does not have to be visible to be hit by this ability, unless it is a ward."
          }
        ],
        "cost": [
          20
        ],
        "cooldown": [
          13,
          11.25,
          9.5,
          7.75,
          6
        ],
        "targeting": "Location",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "Special",
        "notes": "Lunge's dash speed is modified by her bonus movement speed at the time of cast:\n1100 + 350% bonus movement speed, capped at 1600 maximum dash speed if bonus movement speed is positive.\n1100 + 300% bonus movement speed, capped at 850 minimum dash speed if bonus movement speed is negative.\nFiora does not stab if the  dash is  interrupted.\n Flash gets sealed during the dash so Fiora cannot interrupt herself with it. This also means she cannot buffer Flash during the dash for it to be cast right afterward, however.\nFiora can cast  Hextech Rocketbelt during the dash, potentially interrupting it based on the timing, preventing the stab if it does.\nThe dash can pass through walls.\nThe dash has no forgiveness mechanic to clear distant or wider walls with. Any wall wider than 400 units is not crossable.\nThe stab searches for targets in its radius and prioritizes in order of:\nNearest enemy champion affected by  Grand Challenge with a Vital facing Fiora.\nNearest enemy champion Vital facing Fiora.\nNearest enemy champion affected by  Grand Challenge\nEnemy champion with the lowest percent health out of all champions <20% remaining health.\nNearest enemy champion, minion, or monster within 60% of the radius ( 252) with current health below Lunge's raw damage.\nNearest enemy champion in the radius check.\nNearest champion in a  rectangular check with 160 width and 450 units length backwards from Fiora's current facting direction, ignoring the normal radius check.\nTurning Fiora's facing direction during the dash (e.g. by casting  Riposte) can create some very long range hits opposite to her new facing direction, especially against targets with a large gameplay radius.(bug)\nNearest enemy minion with current health below Lunge's raw damage.\nAny nearest enemy minion or monster.\nStructures.\nVisible wards.\nLunge will not attempt to strike jungle plants.\nLunge deals  basic damage, but also triggers spell effects by also being tagged as  spell damage.\nLunge cannot  critically strike.\nLunge won't deal damage, if the spell is  dodged or  blocked, but will deal damage if Fiora is  blinded.\nLunge does not apply on-attack effects apart from certain exceptions.\nIt does apply  Energized as if it was an  on-hit effect.\nIt does not stack  Guinsoo's Rageblade nor trigger Phantom Hit.",
        "blurb": "Active:  Fiora  dashes in the target direction and then stabs a nearby enemy, dealing physical damage and applying  on-hit effects.",
        "speed": "See notes",
        "castTime": "none",
        "targetRange": "50 / 400",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Riposte",
        "icon": "https://cdn.communitydragon.org/latest/champion/Fiora/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Fiora enters a defensive stance for 0.75 seconds, becoming unable to act, preventing all incoming non- turret damage, and gaining debuff immunity and crowd control immunity.</p>"
          },
          {
            "description": "Additionally, over the first 0.5 seconds of the duration, Fiora poises to strike, after which she sends a shock with her sword in a line in the target direction, dealing magic damage to all enemies hit until colliding with an enemy champion.",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      110,
                      150,
                      190,
                      230,
                      270
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
            "description": "The enemy champion struck is also slowed and crippled by 25% for 2 seconds. If Riposte negates at least one hostile immobilizing effect, Fiora stuns the target for the same duration instead."
          }
        ],
        "cost": [
          50
        ],
        "cooldown": [
          24,
          22,
          20,
          18,
          16
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "true",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "projectile": "TRUE",
        "notes": "Riposte is not  invulnerability but instead reduces any damage to her by 100% late into the damage event. Because of this, it interacts differently with effects triggered from damage:\n Life steal and  Healing based on damage dealt (Vamp) will still have effect even if the damage is ultimately ignored by Riposte.\n Shields will absorb damage before Riposte takes effect.\nFiora cannot be  executed by  Pyke's  Death from Below during Riposte but she can by  Aspect of the Dragon.\nRiposte will not negate allied  crowd control.\nRiposte will not negate  nearsight.\n Immobilizing effects include those from  Blast Cone (only if triggered by an enemy) and  epic monsters.\nDebuff immunity includes summoner spells, such as  Exhaust and  Ignite, as well as damage over time and other effects.\nRiposte is and is not prioritized over certain effects:\nRiposte will block effects before  spell shields.\n Black Shield will negate  crowd control before Riposte.\nRiposte will not be able to apply its  stun, as it requires Riposte to negate the  immobilize and not any other external source to do so.\n Spell shield will also prevent Vitals from being triggered by Riposte.\nThe shock missile will be fired from wherever Fiora is after the first 0.5 seconds of Riposte.\nIn the last 0.25 seconds of Riposte's duration, Fiora cannot be targeted by unit-targeted effects from champions (including allies) nor can she be clicked on by any player (becomes unclickable with LMB and RMB).\nThe following table refers for interactions while Fiora is performing Riposte:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
        "blurb": "Active:  Fiora briefly parries all incoming damage, debuffs, and  disables, then stabs in a direction, dealing magic damage to enemies hit.",
        "speed": "3200",
        "width": "140",
        "castTime": "none",
        "targetRange": "900",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Bladework",
        "icon": "https://cdn.communitydragon.org/latest/champion/Fiora/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Fiora empowers her next two basic attacks on-attack within 4 seconds to gain 25 bonus range and bonus attack speed.</p>",
            "leveling": [
              {
                "attribute": "Bonus Attack Speed",
                "modifiers": [
                  {
                    "values": [
                      50,
                      60,
                      70,
                      80,
                      90
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
            "description": "The first attack slows the target by 30% for 1 second but cannot critically strike. The second attack will critically strike for modified critical damage, including to structures.",
            "leveling": [
              {
                "attribute": "Critical damage",
                "modifiers": [
                  {
                    "values": [
                      160,
                      170,
                      180,
                      190,
                      200
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
            "description": "Bladework resets Fiora's basic attack timer."
          }
        ],
        "cost": [
          40
        ],
        "cooldown": [
          11,
          10,
          9,
          8,
          7
        ],
        "targeting": "Auto",
        "affects": "Self",
        "spellshieldable": "special",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "spell",
        "notes": "Spell shield will only block the slow from the first hit.\n Sundered Sky's Lightshield Strike's critical damage will override Bladework's if the resulting damage would be higher.\nThis does not account for any critical damage bonuses that may affect Lightshield Strike.\nBladework's first basic attack will slow even if it is  dodged,  blocked or  missed.\nNeither Bladework attack will deal damage if it is  dodged,  blocked or  missed.",
        "blurb": "Active:  Fiora gains  bonus range and  bonus attack speed for the next two attacks.",
        "castTime": "none",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Grand Challenge",
        "icon": "https://cdn.communitydragon.org/latest/champion/Fiora/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Duelist's Dance's bonus movement speed is increased.</p>",
            "leveling": [
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
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Fiora challenges the target enemy champion for 8 seconds, highlighting all four of their Vitals after a 0.5-second delay. While in effect, Duelist's Dance does not identify new Vitals on Fiora's target.</p>"
          },
          {
            "description": "While near the target, Fiora gains Duelist's Dance's bonus movement speed."
          },
          {
            "description": "If Fiora triggers at least one Vital before the target dies, or triggers all four, she creates a Victory Zone at their location for 2 - 5 (based on Vitals hit) seconds, which heals Fiora and all allies within the area every second.",
            "leveling": [
              {
                "attribute": "Heal per Tick",
                "modifiers": [
                  {
                    "values": [
                      75,
                      100,
                      125
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
                "attribute": "Maximum Heal",
                "modifiers": [
                  {
                    "values": [
                      375,
                      500,
                      625
                    ]
                  },
                  {
                    "values": [
                      300
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
            "description": "Unlike Duelist's Dance, the Vitals will continue to linger even if Fiora is not nearby."
          }
        ],
        "cost": [
          100
        ],
        "cooldown": [
          110,
          90,
          70
        ],
        "targeting": "Unit",
        "affects": "Self, Enemies",
        "spellshieldable": "false",
        "resource": "Mana",
        "notes": "Grand Challenge is dispelled instantly if targeting a decoy.\nGrand Challenge can't be cast on  Sion's  Glory in Death.\nThe damage of this ability scales with  Duelist's Dance.\nEven if Fiora dies, the  Victory Zone will trigger so long as she hit at least one Vital and they die before the Vitals wear off.\n Resurrection effects will not prevent the activation of the  Victory Zone.\nThe  Victory Zone will not heal  untargetable units.\nFiora will automatically attack the target upon casting if the target was selected while they weren't in range of the ability.",
        "blurb": "Passive:  Duelist's Dance's  bonus movement speed is increased.",
        "castTime": "none",
        "effectRadius": "550 / 500",
        "targetRange": "500",
        "maxCharges": -1
      }
    ]
  },
  "lore": "The most feared duelist in all Valoran, Fiora is as renowned for her brusque manner and cunning mind as she is for the speed of her bluesteel rapier. Born to House Laurent in the kingdom of Demacia, Fiora took control of the family from her father in the wake of a scandal that nearly destroyed them. House Laurent's reputation was sundered, but Fiora bends her every effort to restore her family's honor and return them to their rightful place among the great and good of Demacia."
}
    export default champion