// Updated Patch 25.17 - 09/01/2025 05:26:14 PM CDT

const champion: Champion = {
  "id": 80,
  "key": "Pantheon",
  "name": "Pantheon",
  "title": "the Unbreakable Spear",
  "fullName": "Atreus",
  "resource": "Mana",
  "attackType": "Melee",
  "adaptiveType": "Physical damage",
  "stats": {
    "health": {
      "flat": 650,
      "perLevel": 109
    },
    "healthRegen": {
      "flat": 6,
      "perLevel": 0.65
    },
    "mana": {
      "flat": 317,
      "perLevel": 31
    },
    "manaRegen": {
      "flat": 7.35,
      "perLevel": 0.45
    },
    "armor": {
      "flat": 40,
      "perLevel": 4.95
    },
    "magicResistance": {
      "flat": 28,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 64,
      "perLevel": 3.3
    },
    "movespeed": {
      "flat": 345
    },
    "acquisitionRadius": {
      "flat": 600
    },
    "selectionRadius": {
      "flat": 125
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
      "flat": 0.658,
      "perLevel": 2.95
    },
    "attackSpeedRatio": {
      "flat": 0.658
    },
    "attackCastTime": {
      "flat": 0.3
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackDelayOffset": {
      "flat": -0.11
    },
    "attackRange": {
      "flat": 175
    }
  },
  "positions": [
    "Jungle",
    "Middle",
    "Support",
    "Top"
  ],
  "roles": [
    "Assassin",
    "Diver",
    "Fighter"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 2,
    "control": 2,
    "mobility": 2,
    "utility": 1,
    "abilityReliance": 75,
    "difficulty": 1
  },
  "abilities": {
    "P": [
      {
        "name": "Mortal Will",
        "icon": "https://cdn.communitydragon.org/latest/champion/Pantheon/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Pantheon generates a stack of Mortal Will whenever he lands a basic attack on-hit or casts an ability, stacking up to 5 times. At 5 stacks, Pantheon's next basic ability consumes the stacks to become empowered with an additional effect.</p>"
          },
          {
            "description": "Pantheon gains maximum stacks of Mortal Will upon starting the game, completing a Recall channel, and respawning."
          }
        ],
        "targeting": "Passive",
        "affects": "Self",
        "notes": "The current number of Mortal Will stacks is represented by a counter under Pantheon's health bar, visible to all players. It will light up when he reaches maximum stacks and the empowered effect is ready.",
        "blurb": "Innate:  Pantheon generates  stacks of Mortal Will whenever he lands a  basic attack  on-hit or casts an  ability. At max stacks, his next basic ability consumes them to become empowered with an additional effect."
      }
    ],
    "Q": [
      {
        "name": "Comet Spear",
        "icon": "https://cdn.communitydragon.org/latest/champion/Pantheon/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Pantheon charges while being slowed by 10% for up to 4 seconds to increase Comet Spear's range after 0.35 seconds of channeling. Comet Spear can be recast within the duration.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Pantheon hurls his spear in the target direction that deals physical damage to enemies hit, increased against enemies below 20% of their maximum health but reduced by 50% against enemies beyond the first.</p>",
            "leveling": [
              {
                "attribute": "Hurl Physical Damage",
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
                      115
                    ],
                    "units": [
                      "% bonus AD"
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
                "attribute": "Increased Hurl Damage",
                "modifiers": [
                  {
                    "values": [
                      155,
                      230,
                      305,
                      380,
                      455
                    ]
                  },
                  {
                    "values": [
                      230
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
                "attribute": "Hurl Secondary Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      35,
                      50,
                      65,
                      80,
                      95
                    ]
                  },
                  {
                    "values": [
                      57.5
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  },
                  {
                    "values": [
                      25
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Increased Hurl Secondary Damage",
                "modifiers": [
                  {
                    "values": [
                      77.5,
                      115,
                      152.5,
                      190,
                      227.5
                    ]
                  },
                  {
                    "values": [
                      115
                    ],
                    "units": [
                      "% bonus AD"
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
            "description": "Releasing the ability within 0.35 seconds causes Pantheon to instead thrust his spear in the target direction, dealing physical damage to enemies hit, increased against enemies below 20% of their maximum health, and refunding 60% of Comet Spear's cooldown. The thrust's damage is not reduced against enemies beyond the first.",
            "leveling": [
              {
                "attribute": "Thrust Physical Damage",
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
                      115
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  }
                ]
              },
              {
                "attribute": "Increased Thrust Damage",
                "modifiers": [
                  {
                    "values": [
                      155,
                      230,
                      305,
                      380,
                      455
                    ]
                  },
                  {
                    "values": [
                      230
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
            "description": "Comet Spear's total damage is reduced to 90% against monsters and to 70% against minions."
          },
          {
            "description": "If the charge is interrupted or completes without reactivation, Comet Spear is cancelled and the ability is put on full cooldown but refunds half the mana cost."
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Mortal Will:</span> Comet Spear deals 20 - 240 (based on level) (+ 115% bonus AD) bonus physical damage, affected by the previous damage reductions. Consumes the stacks upon recasting.</p>"
          }
        ],
        "cost": [
          25
        ],
        "cooldown": [
          11,
          10.25,
          9.5,
          8.75,
          8
        ],
        "targeting": "Auto / Direction",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "spellaoe",
        "projectile": "SPECIAL",
        "notes": "Only the ranged version of Comet Spear can be  intercepted.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe following table refers for interactions while Pantheon is  channeling:\nItem actives that interrupt and those with cast times as well as  Titanic Hydra,  Hexflash, and  Recall will cause Comet Spear to recast automatically and the active or spell to buffer to cast afterwards.\n Teleport will cancel the channel entirely.\n\n\nType\n\nCharge channel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\nAll the other item-actives are usable\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\n Zhonya's Hourglass\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Teleport  Recall  Hexflash (Recasts)\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
        "speed": "2700",
        "width": "120 / 110",
        "castTime": "0.2",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Shield Vault",
        "icon": "https://cdn.communitydragon.org/latest/champion/Pantheon/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Pantheon leaps to the front of the target enemy's location. If the target is within 800 units upon arrival, he deals physical damage and stuns them for 1 second. Against minions and monsters, Shield Vault has a minimum damage of 60 and is capped at 200.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      6,
                      6.5,
                      7,
                      7.5,
                      8
                    ],
                    "units": [
                      "% of target's maximum health"
                    ]
                  },
                  {
                    "values": [
                      1.5
                    ],
                    "units": [
                      "% per 100 AP"
                    ]
                  },
                  {
                    "values": [
                      0.4
                    ],
                    "units": [
                      "% per 100 Pantheon's bonus health"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Mortal Will:</span> Pantheon empowers his next basic attack within 4 seconds to have a cast time and strike the target 3 times over a brief period, dealing 40% - 55% (based on level) AD physical damage per hit, up to 120% - 165% (based on level) AD. Each hit is affected by critical strike modifiers and applies on-hit effects.</p>"
          },
          {
            "description": "Empowered Shield Vault resets Pantheon's basic attack timer. Pantheon will attempt to basic attack the target at the end of the leap."
          }
        ],
        "cost": [
          55
        ],
        "cooldown": [
          13,
          12,
          11,
          10,
          9
        ],
        "targeting": "Unit",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "special",
        "notes": "Applies  spell damage on the initial vault. Deals  basic damage on all the attacks from the empowered ability.\nThe empowered attack rolls a  critical strike once for all strikes; either all will critically strike, or none will. If  Sundered Sky's Lightshield Strike is ready, all three strikes will critically strike.\nDespite the multi-hit attack only having a hidden 0.375-second cast time, Pantheon will remain  unable to act until the last strike has been dealt.\nThe empowered attack's total time is affected by Pantheon's  attack speed.\nPENDING FOR TEST: The attack's total time is the cast time plus Pantheon's attack windup time.\nThe 3 strikes that occurs after Empowered Shield Vault each apply a stack of  Mortal Will, even if the attacks are  dodged,  blocked, or missed while Pantheon is  blinded.\nThe empowered attack will not trigger against structures.",
        "blurb": "Active:  Pantheon  leaps to the target enemy, dealing physical damage and briefly  stunning them.",
        "castTime": "none",
        "targetRange": "600",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Aegis Assault",
        "icon": "https://cdn.communitydragon.org/latest/champion/Pantheon/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Pantheon braces his shield in the target direction and channels for 1.5 seconds, during which he becomes invulnerable to non- turret damage dealt by enemies from the target direction. He also continually performs strikes in a cone in front of him, dealing 8.3% AD physical damage every 0.125 seconds to enemies hit, reduced by 50% against minions and up to 100% AD total physical damage.</p>"
          },
          {
            "description": "Aegis Assault can be recast after 0.3 seconds, and does so automatically after the duration. Aegis Assault's channel cannot be interrupted by crowd control."
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Pantheon slams with his shield in a cone in front of him, dealing physical damage to enemies hit.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      55,
                      105,
                      155,
                      205,
                      255
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
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Mortal Will:</span> After recasting, Pantheon gains 5 - 30 (based on level) (+ 2.5% bonus health) bonus armor and bonus magic resistance for 4 seconds as well as 60% bonus movement speed for 1.5 seconds.</p>"
          }
        ],
        "cost": [
          80
        ],
        "cooldown": [
          22,
          21,
          20,
          19,
          18
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "special",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "aoe",
        "projectile": "FALSE",
        "notes": "The initial cast count as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nDetonating the ability manually is not.\nPantheon retains his  invulnerability during the recast's cast time.\nThis ability will cast from wherever the caster is at the start of the cast time.** Pantheon will slam from wherever he was at the start of the recast's' cast time.\n Spell shield will only block the slam's damage.\nThe following table refers for interactions while Pantheon is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\nAll the other item-actives are usable\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash  Teleport\n\n\nDisabled\n\n Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
        "angle": "60°",
        "castTime": "None / 0.25",
        "effectRadius": "525",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Grand Starfall",
        "icon": "https://cdn.communitydragon.org/latest/champion/Pantheon/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Pantheon gains armor penetration.</p>",
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
              }
            ]
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Pantheon channels for 2 seconds, then leaps high into the air, vanishing and becoming immune to crowd control until he reappears. While in the air, Pantheon channels again for 2.25 seconds and grants sight around the target location 0.5 seconds into the channel.</p>"
          },
          {
            "description": "After 0.8 seconds into the channel, Pantheon prepares for landing by hurling his spear to the target location over 0.2 seconds that deals 40 - 190 (based on Comet Spear's rank) (+ 115% bonus AD) (+ 50% AP) physical damage to enemies near its landing point and slows them by 50% for 2 seconds."
          },
          {
            "description": "Over the remaining 1.25 seconds, Pantheon crashes down after 0.55 seconds and creates a shockwave alongside himself that travels toward the target location over 0.7 seconds, dealing magic damage to enemies hit, reduced by up to 50% for those hit at the edge of the area. Upon completion of the channel, Pantheon reappears at the target location and gains maximum stacks of Mortal Will.",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      300,
                      500,
                      700
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
                "attribute": "Reduced Damage",
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
                      "% AP"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Grand Starfall is placed on a 30-second cooldown if the first channel is canceled."
          }
        ],
        "cost": [
          100
        ],
        "cooldown": [
          180,
          165,
          150
        ],
        "targeting": "Location",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Other damage",
        "spellEffects": "spellaoe",
        "projectile": "FALSE",
        "notes": "Grand Starfall's first channel can be interrupted by  cast-inhibiting crowd control, but its second channel cannot because Pantheon gains crowd control immunity during it.\nThe spear's damage is not empowered by  Mortal Will, nor increased against enemies below 20% of their maximum health.\nDuring the second channel, Pantheon gains a  minimum health threshold of 1.\nPantheon will instantly die upon reappearing if he reaches this threshold.\nAbilities that target Pantheon will redirect to the last location.\nPinging the ability will inform allies in chat which  visible enemy champions are in range of Grand Starfall.\nPantheon is considered to be in his original casting position even after leaping, but he will  blink to the target location the moment the second channel completes.\nUsing Grand Starfall will inform allies with a ping.\nThe following table refers for interactions while Pantheon is  channeling (first channel):\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll summoner spells are disabled\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath Grounding effects Immobilizing effects Cast-inhibiting effects\n\nThe cast time and second channel have the same interactions except they can only be interrupted by  death.\nGrand Starfall's first channel will also be interrupted if he enters the  Realm of Death.",
        "innerRadius": "225 / 450",
        "castTime": "0.1",
        "effectRadius": "450 / 125",
        "targetRange": "5500 / 1350 + 450",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Once an unwilling host to the Aspect of War, Atreus survived when the celestial power within him was slain, refusing to succumb to a blow that tore stars from the heavens. In time, he learned to embrace the power of his own mortality, and the stubborn resilience that goes along with it. Atreus now opposes the divine as Pantheon reborn, his unbreakable will fueling the fallen Aspect's weapons on the field of battle.",
  "faction": "mount-targon",
  "releaseDate": "2010-02-02",
  "patchLastChanged": "25.15",
  "price": {
    "blueEssence": 675,
    "rp": 585
  }
}
export default champion