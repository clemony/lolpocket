// Updated Patch 25.11 - 06/08/2025 12:01:46 PM CDT

const champion: Champion =  {
  "id": 13,
  "key": "Ryze",
  "name": "Ryze",
  "title": "the Rune Mage",
  "resource": "Mana",
  "attackType": "Ranged",
  "stats": {
    "health": {
      "flat": 645,
      "perLevel": 124
    },
    "healthRegen": {
      "flat": 8,
      "perLevel": 0.8
    },
    "mana": {
      "flat": 300,
      "perLevel": 70
    },
    "manaRegen": {
      "flat": 8,
      "perLevel": 1
    },
    "armor": {
      "flat": 22,
      "perLevel": 4.2
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 58,
      "perLevel": 3
    },
    "movespeed": {
      "flat": 340
    },
    "acquisitionRadius": {
      "flat": 575
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
      "flat": 0.658,
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
    "attackDelayOffset": {
      "flat": -0.1
    },
    "attackRange": {
      "flat": 550
    }
  },
  "positions": [
    "Middle"
  ],
  "roles": [
    "Battlemage",
    "Fighter",
    "Mage"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 2,
    "mobility": 2,
    "utility": 2,
    "abilityReliance": 100,
    "difficulty": 2
  },
  "abilities": {
    "P": [
      {
        "name": "Arcane Mastery",
        "icon": "https://cdn.communitydragon.org/latest/champion/Ryze/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Ryze increases his maximum mana by (10% per 100 AP).</p>"
          }
        ],
        "targeting": "Passive",
        "affects": "Self",
        "notes": "The increase in maximum mana differenciates between base and bonus mana, similar to  Overgrowth. The product base off of base mana does not count as bonus mana.\nWith  Rabadon's Deathcap, a total of (40% AP) ability power and (14% AP)% maximum mana is gained.\nArcane Mastery together with  Archangel's Staff or  Seraph's Embrace creates a recursive stat loop:  ability power giving  mana and so on.\nAnother way to create a recursive stat loop, is to have any converter of  mana to  health ( Winter's Approach,  Fimbulwinter or the U.R.F. buff) and  Riftmaker. The first converter giving  mana to  health,  Riftmaker giving  health to  ability power and Arcane Mastery giving  ability power to  mana.",
        "blurb": "Innate:  Ryze gains  maximum mana based on his  ability power."
      }
    ],
    "Q": [
      {
        "name": "Overload",
        "icon": "https://cdn.communitydragon.org/latest/champion/Ryze/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Ryze's other basic ability casts reset Overload's cooldown and charge a Rune stack for 4 seconds, refreshing on subsequent casts and stacking up to 2 times.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ryze unleashes a runic blast in the target direction that deals magic damage to the first enemy hit and consumes all Rune stacks.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      75,
                      95,
                      115,
                      135,
                      155
                    ]
                  },
                  {
                    "values": [
                      55
                    ],
                    "units": [
                      "% AP"
                    ]
                  },
                  {
                    "values": [
                      2
                    ],
                    "units": [
                      "% bonus mana"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "If Ryze consumed 2 stacks, he gains bonus movement speed for 2 seconds.",
            "leveling": [
              {
                "attribute": "Bonus Movement Speed",
                "modifiers": [
                  {
                    "values": [
                      28,
                      32,
                      36,
                      40,
                      44
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
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Flux Bonus:</span> Overload deals 25 / 50 / 75 / 100% (based on Realm Warp's Rank) increased damage and spreads to surrounding Fluxed enemies.</p>"
          }
        ],
        "cost": [
          40,
          38,
          36,
          34,
          32
        ],
        "cooldown": [
          5
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "Special",
        "projectile": "TRUE",
        "notes": "Overload can be buffered 0.5 seconds before it comes off cooldown.\nOverload can be buffered while casting either  Spell Flux or  Rune Prison to cast immediately after the previous spell's cast time.\nApplies  spell damage to the primary target and  area damage to secondary targets affected by  Flux.\nThis ability will cast from wherever the caster is at the start of the cast time.",
        "blurb": "Passive:  Ryze's other basic ability casts  reset Overload's cooldown and generate a  Rune stack, stacking up to 2 times.",
        "speed": "1700",
        "width": "110",
        "castTime": "0.25",
        "targetRange": "1000",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Rune Prison",
        "icon": "https://cdn.communitydragon.org/latest/champion/Ryze/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ryze seizes the target enemy, dealing magic damage and slowing them by 50% for 1.5 seconds.</p>",
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
                      70
                    ],
                    "units": [
                      "% AP"
                    ]
                  },
                  {
                    "values": [
                      4
                    ],
                    "units": [
                      "% bonus mana"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Flux Bonus:</span> The target is rooted instead of slowed.</p>"
          }
        ],
        "cost": [
          40,
          55,
          70,
          85,
          100
        ],
        "cooldown": [
          11,
          10.5,
          10,
          9.5,
          9
        ],
        "targeting": "Unit",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "Single target",
        "notes": "Rune Prison can be buffered 0.5 seconds before it comes off cooldown.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
        "blurb": "Active:  Ryze seizes the target enemy, dealing magic damage and briefly  slowing them.",
        "castTime": "0.25",
        "targetRange": "550",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Spell Flux",
        "icon": "https://cdn.communitydragon.org/latest/champion/Ryze/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ryze projects an orb upon the target enemy that deals magic damage.</p>\nThe target and surrounding enemies are also marked with Flux for 4 seconds. Ryze's basic abilities against Flux targets consume the mark to become empowered with an additional effect.",
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
                      70
                    ],
                    "units": [
                      "% AP"
                    ]
                  },
                  {
                    "values": [
                      4
                    ],
                    "units": [
                      "% bonus mana"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Flux Bonus:</span> Spell Flux spreads farther.</p>"
          }
        ],
        "cost": [
          35,
          45,
          55,
          65,
          75
        ],
        "cooldown": [
          3.5,
          3.25,
          3,
          2.75,
          2.5
        ],
        "targeting": "Unit",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spell",
        "projectile": "SPECIAL",
        "notes": "Spell Flux's second cast on a target will apply a new Flux debuff as well as triggering the previous one (effectively refreshing the duration).\nThe \"main\" missile of Spell Flux is blocked by  projectile-intercepting effects, while the spreading bounce missiles are not.\nPENDING FOR TEST: bounce range  to-edge or  to-center?\nGame data notes additional range checks of 400 (bounce range) and 500 (Q damage bounce range) against 'large' enemies.\nSpell Flux can be buffered 0.5 seconds before it comes off cooldown.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
        "blurb": "Active:  Ryze projects an orb upon the target enemy that deals magic damage.",
        "speed": "4000 / 1500",
        "castTime": "0.25",
        "effectRadius": "350",
        "targetRange": "550",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Realm Warp",
        "icon": "https://cdn.communitydragon.org/latest/champion/Ryze/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Overload's Flux empowered damage is increased.</p>",
            "leveling": [
              {
                "attribute": "Bonus Overload Damage",
                "modifiers": [
                  {
                    "values": [
                      50,
                      75,
                      100
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
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ryze channels for 2 seconds to open a portal beneath him, marking the target location as its destination and granting sight of the area. Ryze is able to act while channeling, but the portal will cancel if he is interrupted.</p>"
          },
          {
            "description": "Upon completion, Ryze and allied units within will blink to the location and become rooted, disarmed, silenced and untargetable for 0.75 seconds."
          },
          {
            "description": "Realm Warp will cast at max range if cast beyond that."
          }
        ],
        "cost": [
          100
        ],
        "cooldown": [
          180,
          160,
          140
        ],
        "targeting": "Location",
        "affects": "Allies",
        "resource": "Mana",
        "notes": "Realm Warp will try to predict whether an ally is trying to run out of it or not and will not teleport allies that are very near the edge and move click outside of it.\nBlinked units retain the same relative positions to one another upon arrival.\nRealm Warp will teleport allies even if they are in a  zombie state, are  untargetable, or are affected by  crowd control.\nRealm Warp will not teleport allies that are using an ability that preloads UnstoppableForceMarker or are being affected by another ally's Realm Warp first.\nRealm Warp will still teleport an allied  Rift Herald that is winding up its leap.\nRealm Warp has various interactions with  channeled abilities that are being performed by an ally. Some channels will prevent their caster from being teleported and others will not.\nFor channels that do not prevent the teleport, Realm Warp will specifically not apply its  silence to the caster.\nCast times will not prevent the teleport.\nThe following channels will prevent the teleport:\n Caitlyn's  Ace in the Hole\n Galio's  Hero's Entrance\n Kayn's  Umbral Trespass\n Jhin's  Curtain Call\n Warwick's  Jaws of the Beast\n Xerath's  Rite of the Arcane\n Recall /  Empowered Recall\n Teleport /  Unleashed Teleport\nThe following table refers for interactions while Ryze is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nAllowed\n\n\nAbilities\n\nAllowed\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\nAll the other item-actives are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Zhonya's Hourglass\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\nAll summoner spells are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection Grounding effects Immobilizing effects Cast-inhibiting effects",
        "castTime": "none",
        "effectRadius": "365 / 465 /  515",
        "targetRange": "3000 / 1000",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Widely considered one of the most adept sorcerers on Runeterra, Ryze is an ancient, hard-bitten archmage with an impossibly heavy burden to bear. Armed with immense arcane power and a boundless constitution, he tirelessly hunts for World Runes—fragments of the raw magic that once shaped the world from nothingness. He must retrieve these artifacts before they fall into the wrong hands, for Ryze understands the horrors they could unleash on Runeterra."
}
    export default champion