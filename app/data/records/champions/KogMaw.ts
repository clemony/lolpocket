// Updated Patch 25.11 - 06/08/2025 12:01:46 PM CDT

const champion: Champion =  {
  "id": 96,
  "key": "KogMaw",
  "name": "Kog'Maw",
  "title": "the Mouth of the Abyss",
  "resource": "Mana",
  "attackType": "Ranged",
  "stats": {
    "health": {
      "flat": 635,
      "perLevel": 99
    },
    "healthRegen": {
      "flat": 3.75,
      "perLevel": 0.55
    },
    "mana": {
      "flat": 325,
      "perLevel": 40
    },
    "manaRegen": {
      "flat": 8.75,
      "perLevel": 0.7
    },
    "armor": {
      "flat": 24,
      "perLevel": 4.45
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 61,
      "perLevel": 3.1
    },
    "movespeed": {
      "flat": 330
    },
    "acquisitionRadius": {
      "flat": 900
    },
    "selectionRadius": {
      "flat": 130
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
      "flat": 0.665,
      "perLevel": 2.65
    },
    "attackSpeedRatio": {
      "flat": 0.665
    },
    "attackCastTime": {
      "flat": 0.3
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackDelayOffset": {
      "flat": -0.134
    },
    "attackRange": {
      "flat": 500
    }
  },
  "positions": [
    "Bottom"
  ],
  "roles": [
    "Mage",
    "Marksman"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 1,
    "mobility": 1,
    "utility": 1,
    "abilityReliance": 10,
    "difficulty": 2
  },
  "abilities": {
    "P": [
      {
        "name": "Icathian Surprise",
        "icon": "https://cdn.communitydragon.org/latest/champion/KogMaw/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Upon taking fatal damage, Kog'Maw enters a zombie state for 4 seconds, becoming ghosted and gaining 10% bonus movement speed that increases up to 50% over the duration. At the end of the duration, he explodes to deal 140 - 650 (based on level) true damage to nearby enemies.</p>"
          },
          {
            "description": "While under this state, Kog'Maw becomes invulnerable, untargetable, and immune to crowd control, but is also rendered unable to declare basic attacks, cast abilities, use summoner spells, and activate items."
          }
        ],
        "targeting": "Passive",
        "affects": "Enemies",
        "spellshieldable": "True",
        "damageType": "True damage",
        "spellEffects": "Area of effect",
        "notes": "Icathian Surprise grants 3.125% bonus movement speed every 0.264 seconds over the duration, up to the maximum of 50%. However, as a result of the ticks being rounded up from 0.25 seconds, the movement speed only reaches up to 40.625%.\nIcathian Surprise's  untargetability does not  destroy in-flight  projectiles.\nIcathian Surprise will still trigger if Kog'Maw is killed by the  Nexus Obelisk.\nIf Kog'Maw has the missile from a basic attack in-flight at the same time that he's moving while he dies, as long as the missile hits the target after Icathian Surprise has started, Kog'Maw will be able to use a basic attack once during Icathian Surprise.\nKog'Maw's usable summoner spells will be placed on a 5 second cooldown upon becoming a zombie.\nDuring Icathian Surprise, Kog'Maw's  attack range is reduced[ to 0 ][ by 500 ], making him automatically path near enemies he is trying to target.\nZombie states trigger upon taking  lethal damage.\n Raw damage effects will not prevent zombie states from triggering.\nAll  resurrection effects will take precedence over effects that reanimate as a zombie.\nA champion that enters a zombie state will start their death timer upon triggering the effect.\nMost buffs and debuffs will be lost upon transitioning into a zombie state.\nThose that persist through death, such as  Brand's  Blaze, will remain.\nUndisplayed marker buffs, such as those imposed by  Veigar's  Event Horizon and  Viktor's  Gravity Field to prevent being affected multiple times by the same effect, will be lost.(bug)\nThis does not apply when transitioning from one zombie state to another zombie state.(bug)\nUnits within a zombie state cannot:\nUse  Recall or  Refillable Potion.\nActivate  resurrection effects.\nTake  Dark Passage, Catapult, or gates.\nPick up the  Eye of the Herald.\nBe targeted by the following:\n Bailout\n Chronoshift\n Umbral Trespass.\nBe affected by the following:\n Curse of the Black Mist\n Fear Beyond Death's chain missile\n Test of Spirit's initial missile\n Lamb's Respite\n Realm of Death\nFountain health restore",
        "blurb": "Innate: Upon  dying,  Kog'Maw enters an  untargetable  zombie state for a few seconds, gradually gaining  bonus movement speed. He explodes at the end of the duration, dealing true damage to nearby enemies.",
        "effectRadius": "400"
      }
    ],
    "Q": [
      {
        "name": "Caustic Spittle",
        "icon": "https://cdn.communitydragon.org/latest/champion/KogMaw/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Kog'Maw gains bonus attack speed.</p>",
            "leveling": [
              {
                "attribute": "Bonus Attack Speed",
                "modifiers": [
                  {
                    "values": [
                      10,
                      15,
                      20,
                      25,
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
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kog'Maw ejects a wad of spittle in the target direction that deals magic damage to the first enemy hit and reduces their armor and magic resistance for 4 seconds.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      80,
                      125,
                      170,
                      215,
                      260
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
              },
              {
                "attribute": "Resistances Reduction",
                "modifiers": [
                  {
                    "values": [
                      16,
                      20,
                      24,
                      28,
                      32
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
          40
        ],
        "cooldown": [
          7
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "Single target",
        "projectile": "TRUE",
        "notes": "This ability will cast from wherever the caster is at the start of the cast time.",
        "blurb": "Passive:  Kog'Maw gains  bonus attack speed.",
        "speed": "1650",
        "width": "140",
        "castTime": "Basic attack timer",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Bio-Arcane Barrage",
        "icon": "https://cdn.communitydragon.org/latest/champion/KogMaw/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kog'Maw empowers his basic attacks for the next 8 seconds to gain bonus attack range and deal bonus magic damage on-hit, capped at 100 against minions and monsters.</p>",
            "leveling": [
              {
                "attribute": "Bonus Attack Range",
                "modifiers": [
                  {
                    "values": [
                      130,
                      150,
                      170,
                      190,
                      210
                    ]
                  }
                ]
              },
              {
                "attribute": "Bonus Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      3,
                      3.75,
                      4.5,
                      5.25,
                      6
                    ],
                    "units": [
                      "%  of target's maximum health"
                    ]
                  },
                  {
                    "values": [
                      1
                    ],
                    "units": [
                      "% per 100 AP"
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "cost": [
          40
        ],
        "cooldown": [
          17
        ],
        "targeting": "Auto",
        "spellshieldable": "false",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "Proc",
        "notes": "The attacks do not deal the bonus damage against structures.",
        "blurb": "Active:  Kog'Maw empowers his basic attacks for a period, gaining  bonus attack range and dealing bonus magic damage based on the target's maximum health.",
        "castTime": "none",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Void Ooze",
        "icon": "https://cdn.communitydragon.org/latest/champion/KogMaw/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kog'Maw spews a gob of ooze in the target direction that deals magic damage to enemies hit.</p>",
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
                      65
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
            "description": "A field of ooze is created in its wake for 3 seconds, slowing enemies every 0.25 seconds.",
            "leveling": [
              {
                "attribute": "Slow",
                "modifiers": [
                  {
                    "values": [
                      40,
                      45,
                      50,
                      55,
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
          40,
          55,
          70,
          85,
          100
        ],
        "cooldown": [
          12
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "Area of effect",
        "projectile": "TRUE",
        "notes": "This ability will cast from wherever the caster is at the start of the cast time.\nPENDING FOR TEST:: The missile leaves a blob of ooze on the ground every 125 units traveled.",
        "blurb": "Active:  Kog'Maw spews a gob of ooze in the target direction that deals magic damage to enemies hit. It leaves a field of ooze in its wake for a few seconds that  slows enemies.",
        "speed": "1400",
        "width": "240",
        "castTime": "0.25",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Living Artillery",
        "icon": "https://cdn.communitydragon.org/latest/champion/KogMaw/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kog'Maw spits a globule of acid into the air that drops to the target location after 0.6 seconds, granting sight of the area before dealing magic damage to enemies hit and revealing them for 2 seconds. Living Artillery's damage is increased by 0% - 50% (based on target's missing health), or instead by 100% if the target is below 40% maximum health.</p>",
            "leveling": [
              {
                "attribute": "Minimum Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      100,
                      140,
                      180
                    ]
                  },
                  {
                    "values": [
                      75
                    ],
                    "units": [
                      "% bonus AD"
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
                "attribute": "Maximum Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      200,
                      280,
                      360
                    ]
                  },
                  {
                    "values": [
                      150
                    ],
                    "units": [
                      "% bonus AD"
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
            "description": "Kog'Maw then gains a stack of Living Artillery for 8 seconds, refreshing on subsequent casts and stacking up to 9 times."
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Living Artillery:</span> For each stack, Living Artillery's mana cost is increased by 40.</p>"
          }
        ],
        "cost": [
          40
        ],
        "cooldown": [
          2,
          1.5,
          1
        ],
        "targeting": "Location",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "Area of effect",
        "notes": "Living Artillery will not reveal  stealthed champions.",
        "blurb": "Active:  Kog'Maw spits a globule of acid into the air that drops to the target location, dealing magic damage to enemies hit based on their missing health. The damage is further  doubled against enemies at low health.",
        "castTime": "0.25",
        "effectRadius": "240",
        "targetRange": "1300 / 1425 / 1550 / 1675 / 1800",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Belched forth from a rotting Void incursion deep in the wastelands of Icathia, Kog'Maw is an inquisitive yet putrid creature with a caustic, gaping mouth. This particular Void-spawn needs to gnaw and drool on anything within reach to truly understand it. Though not inherently evil, Kog'Maw's beguiling naiveté is dangerous, as it often precedes a feeding frenzy—not for sustenance, but to satisfy its unending curiosity."
}
    export default champion