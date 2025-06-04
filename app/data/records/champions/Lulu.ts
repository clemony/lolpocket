 export const Lulu: Champion =  {
  "id": 117,
  "key": "Lulu",
  "name": "Lulu",
  "title": "the Fae Sorceress",
  "resource": "Mana",
  "attackType": "Ranged",
  "stats": {
    "health": {
      "flat": 565,
      "perLevel": 92
    },
    "healthRegen": {
      "flat": 6,
      "perLevel": 0.6
    },
    "mana": {
      "flat": 350,
      "perLevel": 55
    },
    "manaRegen": {
      "flat": 11,
      "perLevel": 0.6
    },
    "armor": {
      "flat": 26,
      "perLevel": 4.6
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 47,
      "perLevel": 2.6
    },
    "movespeed": {
      "flat": 330
    },
    "acquisitionRadius": {
      "flat": 625
    },
    "selectionRadius": {
      "flat": 100
    },
    "pathingRadius": {
      "flat": 30
    },
    "gameplayRadius": {
      "flat": 55
    },
    "criticalStrikeDamage": {
      "flat": 175
    },
    "criticalStrikeDamageModifier": {
      "flat": 1
    },
    "attackSpeed": {
      "flat": 0.625,
      "perLevel": 2.25
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
      "flat": -0.112
    },
    "attackRange": {
      "flat": 550
    }
  },
  "positions": [
    "Support"
  ],
  "roles": [
    "Enchanter",
    "Mage",
    "Support"
  ],
  "attributeRatings": {
    "damage": 2,
    "toughness": 1,
    "control": 2,
    "mobility": 1,
    "utility": 3,
    "abilityReliance": 80,
    "difficulty": 2
  },
  "abilities": {
    "P": [
      {
        "name": "Pix, Faerie Companion",
        "icon": "https://cdn.communitydragon.org/latest/champion/Lulu/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Lulu is assisted by Pix, an untargetable faerie, who follows her around and fires a barrage of 3 bolts towards her target whenever she uses a basic attack on-attack. Each bolt deals 5 - 39 (based on level) (+ 5% AP) magic damage to the first enemy it collides with, for a total of 15 - 117 (based on level) (+ 15% AP) on hitting a single target with all three bolts.</p>"
          },
          {
            "description": "Casting Help, Pix! on an ally champion transfers Pix's help to them, causing him to fire the bolts dependent on their basic attacks."
          },
          {
            "description": "Pix snaps back to Lulu if she is too far away."
          }
        ],
        "targeting": "Passive",
        "affects": "Self",
        "damageType": "Magic damage",
        "spellEffects": "default",
        "projectile": "TRUE",
        "notes": "Pix's bolts do not fire alongside abilities that apply  on-hit effects (e.g.  Runaan's Hurricane).\nPix does not fire if the target dies.\nPix fires from his own location and not from the unit he is following.\nWhen on an ally champion, Pix's damage respects  enchantment redirection.\nThe empowered attack does not trigger against structures nor wards.\nNeither of them will intercept Pix's bolts.",
        "blurb": "Innate:  Lulu is assisted by Pix, whom follows her around. Whenever Lulu basic attacks, Pix fires 3 bolts that deal magic damage to the first enemy hit.",
        "speed": "900 - 2600",
        "width": "60"
      }
    ],
    "Q": [
      {
        "name": "Glitterlance",
        "icon": "https://cdn.communitydragon.org/latest/champion/Lulu/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Lulu and Pix each fire a magic bolt towards the target point, each one dealing magic damage to enemies hit, reduced to 70% against minions, and slowing them by 80% decaying over 2 seconds.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      60,
                      95,
                      130,
                      165,
                      200
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
                "attribute": "Minion Damage",
                "modifiers": [
                  {
                    "values": [
                      42,
                      66.5,
                      91,
                      115.5,
                      140
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
              }
            ]
          },
          {
            "description": "Enemies take 50% damage from a second bolt.",
            "leveling": [
              {
                "attribute": "Reduced Damage",
                "modifiers": [
                  {
                    "values": [
                      30,
                      47.5,
                      65,
                      82.5,
                      100
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
                "attribute": "Total Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      90,
                      142.5,
                      195,
                      247.5,
                      300
                    ]
                  },
                  {
                    "values": [
                      75
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Reduced Minion Damage",
                "modifiers": [
                  {
                    "values": [
                      21,
                      33.25,
                      45.5,
                      57.75,
                      70
                    ]
                  },
                  {
                    "values": [
                      17.5
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Total Minion Damage",
                "modifiers": [
                  {
                    "values": [
                      63,
                      99.75,
                      136.5,
                      173.25,
                      210
                    ]
                  },
                  {
                    "values": [
                      52.5
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
          50,
          55,
          60,
          65,
          70
        ],
        "cooldown": [
          7
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "Area of effect",
        "projectile": "TRUE",
        "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nPix fires his bolt from wherever he is when Lulu casts Glitterlance. Lulu's bolt will fire from wherever she is at the end of the cast time.\nDepending on cursor position both bolts can either crossfire, fire in parallel, or in opposite directions.",
        "blurb": "Active:  Lulu and  Pix each fire a magic bolt toward the target location, dealing magic damage and  slowing enemies hit for a short time.",
        "speed": "1450",
        "width": "120",
        "castTime": "0.25",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Whimsy",
        "icon": "https://cdn.communitydragon.org/latest/champion/Lulu/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Lulu can cast Whimsy on herself or a champion.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Enemy Cast:</span> Lulu launches a spell onto the target enemy champion that polymorphs them into a harmless critter for a duration, during which their base movement speed is reduced by 60, and disarms them for the same duration.</p>",
            "leveling": [
              {
                "attribute": "Disable Duration",
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
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Self / Ally Cast:</span> Lulu instantly casts erratic magic upon the target allied champion or herself, granting the target bonus attack speed and 25% (+ 5% per 100 AP) bonus movement speed for a duration.</p>",
            "leveling": [
              {
                "attribute": "Bonus Attack Speed",
                "modifiers": [
                  {
                    "values": [
                      20,
                      22.5,
                      25,
                      27.5,
                      30
                    ],
                    "units": [
                      "%"
                    ]
                  }
                ]
              },
              {
                "attribute": "Effect Duration",
                "modifiers": [
                  {
                    "values": [
                      3,
                      3.25,
                      3.5,
                      3.75,
                      4
                    ],
                    "units": [
                      " seconds"
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "cost": [
          65
        ],
        "cooldown": [
          18
        ],
        "targeting": "Unit",
        "affects": "Enemies / Allies / Self",
        "spellshieldable": "True",
        "resource": "Mana",
        "projectile": "TRUE",
        "notes": "Whimsy's movement speed reduction is not affected by  slow resist.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but still go on  cooldown and pay its cost.(bug)\nThis only applies to the enemy cast.",
        "blurb": "Active:  Lulu can cast Whimsy on herself or the target champion.",
        "speed": "2250",
        "castTime": "0.2419 / None",
        "targetRange": "650",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Help, Pix!",
        "icon": "https://cdn.communitydragon.org/latest/champion/Lulu/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Lulu can cast Help, Pix! on herself or an ally or enemy.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Enemy Cast:</span> Lulu sends Pix to the far side of the target enemy for 4 seconds, dealing magic damage and revealing them for the same duration.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
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
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Self / Ally Cast:</span> Lulu sends Pix to the target ally for 6.25 seconds. If the target is a champion, they are granted a shield for 2.5 seconds.</p>",
            "leveling": [
              {
                "attribute": "Shield Strength",
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
                      55
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
          60,
          65,
          70,
          75,
          80
        ],
        "cooldown": [
          8
        ],
        "targeting": "Unit",
        "affects": "Enemies / Allies / Self",
        "spellshieldable": "special",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spell",
        "projectile": "FALSE",
        "notes": "Help, Pix! can be self-cast.\nIf the player casts Help, Pix! on a non-champion target, the spell script will first search for a targetable allied or enemy champion within  75 radius around the target. If there is at least one, it'll apply the effects to the closest one instead of the initial target.\nPENDING FOR TEST: Allies or enemies or proximity take priortity?\nThis effect does not respect that the champion may not be visible to Lulu and not a valid target for normal selection for this reason. Therefore it can for instance apply the effects to stealthed enemy champions this way.(bug)\nSince the original cast did not target the champion, some effects (such as  Guardian) may behave incorrectly.(bug)\nIt is not known in which patch this effect was added.\n Spell shield and  Riposte will block the damage but Pix will still follow regardless.\nPix will continue to assist the target ally for the full duration even if the shield breaks (the same applies for the shield if the target ally leaves Pix's leash range).\nPix's  Glitterlance bolt can be fired while he is away from Lulu from his location and towards the cursor (effectively extending  Glitterlance's range).",
        "blurb": "Active:  Lulu can cast Help, Pix! on herself or a unit.",
        "castTime": "none",
        "targetRange": "650",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Wild Growth",
        "icon": "https://cdn.communitydragon.org/latest/champion/Lulu/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Lulu enlarges herself or the target allied champion, knocking up nearby enemies for 1 second. For the next 7 seconds, the target gains bonus health and 40% increased size and slows nearby enemies, which lingers for 0.25 seconds.</p>",
            "leveling": [
              {
                "attribute": "Bonus Health",
                "modifiers": [
                  {
                    "values": [
                      275,
                      425,
                      575
                    ]
                  },
                  {
                    "values": [
                      55
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
                      45,
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
          100
        ],
        "cooldown": [
          120,
          100,
          80
        ],
        "targeting": "Unit",
        "affects": "Allies / Self, Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "notes": "Wild Growth's size increase scales additively with other size increases.",
        "blurb": "Active:  Lulu enchants herself or the target allied champion,  knocking up surrounding enemies.",
        "castTime": "none",
        "effectRadius": "400 / 400",
        "targetRange": "900",
        "maxCharges": -1
      }
    ]
  },
  "lore": "The yordle mage Lulu is known for conjuring dreamlike illusions and fanciful creatures as she roams Runeterra with her fairy companion Pix. Lulu shapes reality on a whim, warping the fabric of the world, and what she views as the constraints of this mundane, physical realm. While others might consider her magic at best unnatural, and at worst dangerous, she believes everyone could use a touch of enchantment."
}
