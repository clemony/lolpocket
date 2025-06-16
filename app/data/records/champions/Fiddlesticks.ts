// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion =  {
  "id": 9,
  "key": "Fiddlesticks",
  "name": "Fiddlesticks",
  "title": "the Ancient Fear",
  "resource": "Mana",
  "attackType": "Ranged",
  "stats": {
    "health": {
      "flat": 650,
      "perLevel": 106
    },
    "healthRegen": {
      "flat": 5.5,
      "perLevel": 0.6
    },
    "mana": {
      "flat": 500,
      "perLevel": 28
    },
    "manaRegen": {
      "flat": 8,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 34,
      "perLevel": 4.7
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 55,
      "perLevel": 2.65
    },
    "movespeed": {
      "flat": 335
    },
    "acquisitionRadius": {
      "flat": 520
    },
    "selectionRadius": {
      "flat": 135
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
      "perLevel": 2.11
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
    "attackRange": {
      "flat": 480
    }
  },
  "positions": [
    "Jungle"
  ],
  "roles": [
    "Mage",
    "Specialist",
    "Support"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 3,
    "mobility": 1,
    "utility": 1,
    "abilityReliance": 100,
    "difficulty": 2
  },
  "abilities": {
    "P": [
      {
        "name": "A Harmless Scarecrow",
        "icon": "https://cdn.communitydragon.org/latest/champion/Fiddlesticks/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Scarecrow Effigy:</span> Fiddlesticks begins the game with an exclusive Scarecrow Effigy, which permanently occupies the trinket slot. Fiddlesticks can pretend to be an Effigy by standing still and not acting nor being acted upon for 2 seconds, during which it adjusts its body into a scarecrow and extends its arm out to expose its lantern.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - A Harmless Scarecrow:</span> From level 6 onward, placing an Effigy also summons a Sweeper Drone at the location for 6 seconds.</p>"
          }
        ],
        "targeting": "Vector",
        "affects": "Self",
        "notes": "Scarecrow Effigies are unavailable on ARAM until Fiddlesticks uses or sells its  Poro-Snax.\nThe process of or the act of pretending to be an Effigy will be interrupted if Fiddlesticks:\nMoves.\nTakes damage.\nDeclares an attack.\nCasts any ability or spell.\nStarts  channeling.\nIs hit by an ability.\nIs affected by a  crowd control effect.\nEffigies will mimic Fiddlesticks'  idle animations and their health bars are hidden until they fake an action.\nIf Fiddlesticks pretends to be an Effigy, its health bar stays hidden until the pose is interrupted.\nEffigies are considered  clones.\nThey are not valid targets to direction, ground, and auto-targeted effects for first 1.5 seconds of their lifespan.\nThe trinket slot can still be temporarily replaced by  Eye of the Herald.\nFiddlesticks can still purchase Support Quest items, as they do not affect the trinket slot.\n -  Surprise Party Fiddlesticks has a special icon for this ability.",
        "blurb": "Innate:  Fiddlesticks has a  Scarecrow Effigy in place of a trinket, which will imitate Fiddlesticks. Fiddlesticks can impersonate an effigy by remaining idle out of combat.",
        "effectRadius": "900"
      }
    ],
    "Q": [
      {
        "name": "Terrify",
        "icon": "https://cdn.communitydragon.org/latest/champion/Fiddlesticks/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> While Fiddlesticks has been out of combat for at least 2.5 seconds and is not visible to the enemy team, or is pretending to be an Effigy, its next damaging ability will additionally fear targets hit for a duration.</p>",
            "leveling": [
              {
                "attribute": "Fear Duration",
                "modifiers": [
                  {
                    "values": [
                      1.2,
                      1.4,
                      1.6,
                      1.8,
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
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Fiddlesticks launches a crow at the target enemy that deals magic damage and fears them for a duration. Terrify has a minimum damage threshold and is capped at 400 against monsters.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      4,
                      4.5,
                      5,
                      5.5,
                      6
                    ],
                    "units": [
                      "%  of target's current health"
                    ]
                  },
                  {
                    "values": [
                      3
                    ],
                    "units": [
                      "% per 100 AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Minimum Damage",
                "modifiers": [
                  {
                    "values": [
                      40,
                      60,
                      80,
                      100,
                      120
                    ]
                  }
                ]
              },
              {
                "attribute": "Fear Duration",
                "modifiers": [
                  {
                    "values": [
                      1.2,
                      1.4,
                      1.6,
                      1.8,
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
            "description": "Targets feared by Fiddlesticks by any means cannot be affected by it again for a duration equal to Terrify's cooldown. Against these targets, Terrify's damage and minimum threshold are doubled.",
            "leveling": [
              {
                "attribute": "Increased Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      8,
                      9,
                      10,
                      11,
                      12
                    ],
                    "units": [
                      "%  of target's current health"
                    ]
                  },
                  {
                    "values": [
                      6
                    ],
                    "units": [
                      "% per 100 AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Increased Minimum Damage",
                "modifiers": [
                  {
                    "values": [
                      80,
                      120,
                      160,
                      200,
                      240
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Terrify slows affected targets by 90%."
          }
        ],
        "cost": [
          65
        ],
        "cooldown": [
          15,
          14.5,
          14,
          13.5,
          13
        ],
        "targeting": "Unit",
        "affects": "Enemies",
        "spellshieldable": "true",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "Spell",
        "projectile": "TRUE",
        "notes": "The fear-immunity timer is not refreshed by subsequent attempts to fear the target.\nThe  fear is applied at the end of the cast time, regardless of the target's distance.\nThe missile cannot be destroyed except by  projectile-interception effects.\nFiddlesticks is considered \"seen\" if it is visible and is inside an enemy champion's sight radius. Vision from  minions,  wards, and  turrets will not prevent Fiddlesticks from  fearing if there are no nearby enemy champions.\nThere is a very brief grace period after being seen or when entering combat. This can allow for multiple spells to inflict  fear.\n Monsters are feared by Fiddlesticks's abilities when Fiddlesticks is out of combat, with some exceptions.\nIf Fiddlesticks has recently damaged a monster from a camp with a basic attack or abilities (including  Smite but not item active abilities), monsters in that camp will not be feared by his other abilities.\n Bountiful Harvest will not fear monsters unless Fiddlesticks is pretending to be an  Effigy or is not visible to them.\n Minions are always feared if Fiddlesticks is not attacking them and there is no enemy champion in its view.\nThe passive portion does not currently communicate any information to Fiddlesticks, its allies nor its enemies. There is no indicator to say that Fiddlesticks is out of combat; and no indicator or debuff icon on affected enemies.\nA visual indicator will circle around all enemy champions while Fiddlesticks is channeling  Crowstorm if it is unseen. This is only visible to Fiddlesticks.\nThe fear immunity applies even if the target is  crowd control immune. It is not applied if it is blocked by  spell shield.\nTerrify will still cast and affect the target even if Fiddlesticks dies or loses  sight of them during the cast time.\nTerrify will still cast but not affect the target if they die or become  untargetable during the cast time. There is no compensation.\nThe player's screen will have a visual effect when successfully  feared by Terrify.\n -  Surprise Party Fiddlesticks has a special icon for this ability.\n Crowstorm will not fear enemy champions if cast while they have vision of Fiddlesticks, even if Fiddlesticks is pretending to be an  Effigy.",
        "blurb": "Passive: While  Fiddlesticks is unseen or impersonating an  effigy, its next damaging ability will briefly  fear targets hit.",
        "castTime": "0.35",
        "targetRange": "575",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Bountiful Harvest",
        "icon": "https://cdn.communitydragon.org/latest/champion/Fiddlesticks/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Fiddlesticks forms a tether between itself and each nearby enemy over the cast time, then channels for up to 2 seconds to harvest their souls, revealing them in the process.</p>"
          },
          {
            "description": "While Fiddlesticks is channeling, the tethered enemies are dealt magic damage every 0.25 seconds, with the final tick at the end of the channel dealing additional magic damage. Bountiful Harvest deals 135% damage against monsters and 50% damage against minions.",
            "leveling": [
              {
                "attribute": "Damage per second",
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
                      40
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Damage per Instance",
                "modifiers": [
                  {
                    "values": [
                      15,
                      22.5,
                      30,
                      37.5,
                      45
                    ]
                  },
                  {
                    "values": [
                      10
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Last Tick of Damage",
                "modifiers": [
                  {
                    "values": [
                      15,
                      22.5,
                      30,
                      37.5,
                      45
                    ]
                  },
                  {
                    "values": [
                      10
                    ],
                    "units": [
                      "% AP"
                    ]
                  },
                  {
                    "values": [
                      12,
                      14.5,
                      17,
                      19.5,
                      22
                    ],
                    "units": [
                      "% of target's missing health"
                    ]
                  }
                ]
              },
              {
                "attribute": "Total Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      120,
                      180,
                      240,
                      300,
                      360
                    ]
                  },
                  {
                    "values": [
                      80
                    ],
                    "units": [
                      "% AP"
                    ]
                  },
                  {
                    "values": [
                      12,
                      14.5,
                      17,
                      19.5,
                      22
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
            "description": "Fiddlesticks heals itself for a portion of the pre-mitigation damage dealt, modified to 45% against monsters and 15% against minions.",
            "leveling": [
              {
                "attribute": "Champion Heal Portion",
                "modifiers": [
                  {
                    "values": [
                      25,
                      32.5,
                      40,
                      47.5,
                      55
                    ],
                    "units": [
                      "%"
                    ]
                  }
                ]
              },
              {
                "attribute": "Total Heal per Champion",
                "modifiers": [
                  {
                    "values": [
                      30,
                      58.5,
                      96,
                      142.5,
                      198
                    ]
                  },
                  {
                    "values": [
                      20,
                      26,
                      32,
                      38,
                      44
                    ],
                    "units": [
                      "% AP"
                    ]
                  },
                  {
                    "values": [
                      3,
                      4.7125,
                      6.8,
                      9.2625,
                      12.1
                    ],
                    "units": [
                      "% of target's missing health"
                    ]
                  }
                ]
              },
              {
                "attribute": "Total Heal per Monster",
                "modifiers": [
                  {
                    "values": [
                      72.9,
                      109.35,
                      145.8,
                      182.25,
                      218.7
                    ]
                  },
                  {
                    "values": [
                      48.6
                    ],
                    "units": [
                      "% AP"
                    ]
                  },
                  {
                    "values": [
                      7.29,
                      8.80875,
                      10.3275,
                      11.84625,
                      13.365
                    ],
                    "units": [
                      "% of target's missing health"
                    ]
                  }
                ]
              },
              {
                "attribute": "Total Heal per Minion",
                "modifiers": [
                  {
                    "values": [
                      9,
                      13.5,
                      18,
                      22.5,
                      27
                    ]
                  },
                  {
                    "values": [
                      6
                    ],
                    "units": [
                      "% AP"
                    ]
                  },
                  {
                    "values": [
                      0.9,
                      1.0875,
                      1.275,
                      1.4625,
                      1.65
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
            "description": "Bountiful Harvest ends if all targets have died or broken their tethers. If the channel was not interrupted, 60% of the current cooldown is refunded."
          },
          {
            "description": "A nearby enemy is required to cast this ability. The target does not have to be visible to be tethered by this ability."
          }
        ],
        "cost": [
          60,
          65,
          70,
          75,
          80
        ],
        "cooldown": [
          10,
          9.5,
          9,
          8.5,
          8
        ],
        "targeting": "Proximity",
        "affects": "Enemies",
        "spellshieldable": "Special",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "aoedot",
        "notes": "Spell shield will block the tether's application but not the damage of one already applied.\n -  Surprise Party Fiddlesticks has a special icon for this ability.\nThe following table refers for interactions while Fiddlesticks is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nInterrupts\n\n\nAbilities\n\nInterrupts\n\n\nMovement\n\nInterrupts\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Flash  Teleport  Recall  Hexflash  Mark  Dash\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
        "tetherRadius": "725",
        "castTime": "0.25",
        "effectRadius": "650",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Reap",
        "icon": "https://cdn.communitydragon.org/latest/champion/Fiddlesticks/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Fiddlesticks slashes the target location with its scythe, dealing magic damage to enemies within the area and slowing them for 1.25 seconds.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      70,
                      105,
                      140,
                      175,
                      210
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
                "attribute": "Slow",
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
              }
            ]
          },
          {
            "description": "Enemies hit in the center of the area are also silenced for 1.25 seconds."
          }
        ],
        "cost": [
          40,
          45,
          50,
          55,
          60
        ],
        "cooldown": [
          10,
          9,
          8,
          7,
          6
        ],
        "targeting": "Location",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "AoE",
        "notes": "-  Surprise Party Fiddlesticks has a special icon for this ability.",
        "blurb": "Active:  Fiddlesticks slashes the target area, dealing magic damage and  slowing enemies hit.",
        "castTime": "0.4",
        "targetRange": "850",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Crowstorm",
        "icon": "https://cdn.communitydragon.org/latest/champion/Fiddlesticks/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Fiddlesticks channels for 1.5 seconds, then blinks to the target location upon completion with a murder of crows flying wildly around it for 5 seconds, dealing magic damage every 0.25 seconds to nearby enemies.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage per Tick",
                "modifiers": [
                  {
                    "values": [
                      37.5,
                      62.5,
                      87.5
                    ]
                  },
                  {
                    "values": [
                      12.5
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
                      750,
                      1250,
                      1750
                    ]
                  },
                  {
                    "values": [
                      250
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
          100
        ],
        "cooldown": [
          140,
          110,
          80
        ],
        "targeting": "Location",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "aoe",
        "notes": "Roots do not  interrupt the ability despite being a movement channel.\nFiddlesticks will always  blink to its intended location even if its position changes during the  channel without being interrupted (e.g. by  Realm Warp).\n -  Surprise Party Fiddlesticks has a special icon for this ability.\nThe following table refers for interactions while Fiddlesticks is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath Grounding effects Cast-inhibiting effects",
        "castTime": "none",
        "effectRadius": "600",
        "targetRange": "800",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Something has awoken in Runeterra. Something ancient. Something terrible. The ageless horror known as Fiddlesticks stalks the edges of mortal society, drawn to areas thick with paranoia where it feeds upon terrorized victims. Wielding a jagged scythe, the haggard, makeshift creature reaps fear itself, shattering the minds of those unlucky enough to survive in its wake. Beware the sounding of the crow, or the whispering of the shape that appears <i>almost</i> human… Fiddlesticks has returned."
}
    export default champion