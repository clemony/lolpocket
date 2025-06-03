 export const Yorick: Champion =  {
  "id": 83,
  "key": "Yorick",
  "name": "Yorick",
  "title": "Shepherd of Souls",
  "fullName": "Yorick Mori",
  "resource": "Mana",
  "attackType": "Melee",
  "stats": {
    "health": {
      "flat": 650,
      "perLevel": 114
    },
    "healthRegen": {
      "flat": 8,
      "perLevel": 0.8
    },
    "mana": {
      "flat": 300,
      "perLevel": 60
    },
    "manaRegen": {
      "flat": 7.5,
      "perLevel": 0.75
    },
    "armor": {
      "flat": 39,
      "perLevel": 4.5
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 62,
      "perLevel": 5
    },
    "movespeed": {
      "flat": 340
    },
    "acquisitionRadius": {
      "flat": 400
    },
    "selectionRadius": {
      "flat": 125
    },
    "pathingRadius": {
      "flat": 50
    },
    "gameplayRadius": {
      "flat": 80
    },
    "criticalStrikeDamage": {
      "flat": 175
    },
    "criticalStrikeDamageModifier": {
      "flat": 1
    },
    "attackSpeed": {
      "flat": 0.625,
      "perLevel": 2
    },
    "attackSpeedRatio": {
      "flat": 0.625
    },
    "attackCastTime": {
      "flat": 0.33
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackRange": {
      "flat": 175
    }
  },
  "positions": [
    "Top"
  ],
  "roles": [
    "Fighter",
    "Juggernaut",
    "Tank"
  ],
  "attributeRatings": {
    "damage": 2,
    "toughness": 2,
    "control": 2,
    "mobility": 1,
    "utility": 2,
    "abilityReliance": 55,
    "difficulty": 2
  },
  "abilities": {
    "P": [
      {
        "name": "Shepherd of Souls",
        "icon": "https://cdn.communitydragon.org/latest/champion/Yorick/ability-icon/p",
        "effects": [
          {
            "description": "<span class=\"ability-header\">Innate - Final Service:</span> Whenever Yorick uses Last Rites to score the killing blow on any enemy or damage an enemy champion or large monster, he raises a grave at their location. Additionally, a grave is passively raised for every 8th : 2nd (based on level) enemy that dies otherwise near him. Up to 4 graves can exist at once, lasting until Yorick exits the general area or dies, with the furthest one always being replaced by the newest upon raising one over the limit."
          },
          {
            "description": "Yorick can use Awakening and Mourning Mist's mark to raise 1 Mist Walker from each grave after a 1-second delay, consuming the graves in the process."
          },
          {
            "description": "<span class=\"ability-header\">Innate - The Cursed Horde:</span> Up to 4 Mist Walkers can be active at once near Yorick or near The Maiden, with the nearest one always being replaced by the newest upon raising one over the limit."
          },
          {
            "description": "See Pets for more details about Mist Walkers."
          }
        ],
        "targeting": "Passive",
        "affects": "Self",
        "notes": "Damaging a large monster or champion with  Last Rites will only spawn 1 grave, even if it kills them.",
        "blurb": "Innate- Final Service: Enemies that die near  Yorick will leave a grave, as well as those he kills or damages with  Last Rites. Yorick can use  Awakening and  Mourning Mist to turn all graves into Mist Walkers that assist him in combat.",
        "effectRadius": "1000 / 2500"
      }
    ],
    "Q": [
      {
        "name": "Last Rites",
        "icon": "https://cdn.communitydragon.org/latest/champion/Yorick/ability-icon/q",
        "effects": [
          {
            "description": "<span class=\"ability-header\">Active:</span> Yorick empowers his next basic attack within 5 seconds to have an uncancellable windup, gain 50 bonus range, deal bonus physical damage, and heal him. The heal is reduced by 50% against non-champions.",
            "leveling": [
              {
                "attribute": "Bonus Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      30,
                      55,
                      80,
                      105,
                      130
                    ]
                  },
                  {
                    "values": [
                      50
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
                      10,
                      13.411764705882353,
                      16.823529411764707,
                      20.235294117647058,
                      23.647058823529413,
                      27.058823529411764,
                      30.470588235294116,
                      33.88235294117647,
                      37.294117647058826,
                      40.705882352941174,
                      44.11764705882353,
                      47.529411764705884,
                      50.94117647058823,
                      54.35294117647059,
                      57.76470588235294,
                      61.17647058823529,
                      64.58823529411765,
                      68
                    ]
                  },
                  {
                    "values": [
                      6,
                      7,
                      8,
                      9,
                      10
                    ],
                    "units": [
                      "% of his missing health"
                    ]
                  }
                ]
              },
              {
                "attribute": "Non-Champion Heal",
                "modifiers": [
                  {
                    "values": [
                      5,
                      6.705882352941177,
                      8.411764705882353,
                      10.117647058823529,
                      11.823529411764707,
                      13.529411764705882,
                      15.235294117647058,
                      16.941176470588236,
                      18.647058823529413,
                      20.352941176470587,
                      22.058823529411764,
                      23.764705882352942,
                      25.470588235294116,
                      27.176470588235293,
                      28.88235294117647,
                      30.588235294117645,
                      32.294117647058826,
                      34
                    ]
                  },
                  {
                    "values": [
                      3,
                      3.5,
                      4,
                      4.5,
                      5
                    ],
                    "units": [
                      "% of his missing health"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "While there are at least 3 graves nearby and Last Rites is active or on cooldown, Yorick can cast Awakening."
          },
          {
            "description": "Last Rites resets Yorick's basic attack timer."
          }
        ],
        "cost": [
          20
        ],
        "cooldown": [
          6,
          5.5,
          5,
          4.5,
          4
        ],
        "targeting": "Auto",
        "affects": "Self, Enemies",
        "spellshieldable": "False",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "spell",
        "notes": "No additional notes.",
        "blurb": "Active:  Yorick's next basic attack within a few seconds will gain  bonus range, deal bonus physical damage, and  heal him. The heal is increased while below half health.",
        "castTime": "none",
        "maxCharges": -1
      },
      {
        "name": "Awakening",
        "icon": "https://cdn.communitydragon.org/latest/champion/Yorick/ability-icon/q",
        "effects": [
          {
            "description": "<span class=\"ability-header\">Active:</span> Yorick exhumes a Mist Walker under his command from each nearby grave."
          }
        ],
        "cost": [
          20
        ],
        "cooldown": [
          6,
          5.5,
          5,
          4.5,
          4
        ],
        "targeting": "Auto",
        "affects": "Self",
        "notes": "Awakening counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nMist Walkers update their statistics correspondingly to Yorick's  during the periodic stat update, with the exception of their maximum health.\nAwakening cannot be cast without enough graves in range.",
        "blurb": "Active:  Yorick summons Mist Walkers from the graves around him.",
        "castTime": "none",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Dark Procession",
        "icon": "https://cdn.communitydragon.org/latest/champion/Yorick/ability-icon/w",
        "effects": [
          {
            "description": "<span class=\"ability-header\">Active:</span> Yorick summons a ring of spirits around the target location that arises after a 0.75-second delay, knocking aside enemies hit over 0.25 seconds, though not through terrain. Within 210-units, they are pulled inside; otherwise they are pushed away. The ring remains for 4 seconds as impassible terrain against enemies, granting sight inside the ring."
          },
          {
            "description": "Dark Procession can only be targeted by enemy champion basic attacks and turrets. The wall takes 1 damage per attack from champions and is destroyed instantly from turret attacks.",
            "leveling": [
              {
                "attribute": "Wall Health",
                "modifiers": [
                  {
                    "values": [
                      2,
                      2,
                      3,
                      3,
                      4
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
          20,
          18,
          16,
          14,
          12
        ],
        "targeting": "Location",
        "affects": "Enemies",
        "spellshieldable": "false",
        "resource": "Mana",
        "notes": "Dark Procession has a  turret prioritization value of 6, equal to that of  super minions.\nYorick's other  pets each have a lower prioritization value, allowing him to delay the turret from targeting the  The Maiden or a Mist Walker for one attack.\nDark Procession deals 0  proc  true damage to enemies it knocks aside, which triggers in-combat effects such as drawing turret and monster aggression,  Sudden Impact or applying  Elixir of Sorcery.\nThe perimeter is made up of 18 units with 100  pathing radius and 20  gameplay radius each.\nRepeatedly while the cage persists, all enemy  champions inside it become marked for Yorick to gain an  assist on them should they perish within the standard 10 seconds assist time.",
        "blurb": "Active:  Yorick summons a destructible ring of spirits at the target location that  knocks aside enemies hit. It remains as terrain against enemies for a few seconds,",
        "castTime": "none",
        "effectRadius": "225 / 200",
        "targetRange": "600",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Mourning Mist",
        "icon": "https://cdn.communitydragon.org/latest/champion/Yorick/ability-icon/e",
        "effects": [
          {
            "description": "<span class=\"ability-header\">Active:</span> Yorick hurls a globule of Black Mist that splashes across an area at the target location, dealing magic damage to enemies hit, down to a minimum threshold against minions, and capped against monsters. Enemy champions and monsters hit are slowed by 30% for 1.5 seconds and marked as Cursed for 4 seconds.",
            "leveling": [
              {
                "attribute": "Magic Damage",
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
                      "%  of target's maximum health"
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
                "attribute": "Minimum Minion Damage",
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
                      100
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Capped Monster Damage",
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
            "description": "<span class=\"ability-header\">Cursed:</span> The target is revealed, has reduced armor, and continually raises a Mist Walker from each nearby grave, up to a maximum of 4.\nYorick, Mist Walkers and the The Maiden gain bonus movement speed while facing nearby Cursed enemies. Mist Walkers will leap to nearby Cursed enemy champions and large monsters, attacking them upon arrival.",
            "leveling": [
              {
                "attribute": "Armor Reduction",
                "modifiers": [
                  {
                    "values": [
                      13,
                      16,
                      19,
                      22,
                      25
                    ],
                    "units": [
                      "% of target's armor"
                    ]
                  }
                ]
              },
              {
                "attribute": "Bonus Movement Speed",
                "modifiers": [
                  {
                    "values": [
                      18,
                      21,
                      24,
                      27,
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
            "description": "Mourning Mist will cast at max range if cast beyond that."
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
          12,
          11,
          10,
          9,
          8
        ],
        "targeting": "Location",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "projectile": "TRUE",
        "notes": "Yorick will snap his facing direction towards the target location at the start of the cast time.\nThe speed boost toward marked targetes does not require  sight of them.\nThe Mist Walkers do not  leap if they are  immobilized or  grounded, or if the marked target is  untargetable.",
        "blurb": "Active:  Yorick hurls a globule of Black Mist that splashes at the target location dealing magic damage to enemies. Enemy  champions and  monsters hit are also shortly  slowed, and marked Cursed for a few seconds.",
        "castTime": "0.25",
        "effectRadius": "1500",
        "targetRange": "700",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Eulogy of the Isles",
        "icon": "https://cdn.communitydragon.org/latest/champion/Yorick/ability-icon/r",
        "effects": [
          {
            "description": "<span class=\"ability-header\">Active:</span> Yorick summons the Maiden of the Mist over 1.5 seconds, along with a number of Mist Walkers surrounding her at the target location, which remain on the battlefield until she or Yorick dies. Eulogy of the Isles can be recast once while the Maiden is alive after 10 seconds of the activation.",
            "leveling": [
              {
                "attribute": "Mist Walkers",
                "modifiers": [
                  {
                    "values": [
                      2,
                      3,
                      4
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "<span class=\"ability-header\">Recast:</span> Yorick sets the Maiden free, allowing her to push the nearest lane until she dies."
          },
          {
            "description": "See Pets for more details about The Maiden of the Mist. Eulogy of the Isles will cast at max range if cast beyond that."
          }
        ],
        "cost": [
          100
        ],
        "cooldown": [
          160,
          130,
          100
        ],
        "targeting": "Location",
        "affects": "Self",
        "resource": "Mana",
        "notes": "See the Pets section below for more details about The Maiden of the Mist and Mist Walkers.\nThe extra Mist Walkers spawn 250 units from the Maiden summon location.\nThe Maiden updates her stats when Yorick's stats change, and as Eulogy of the Isles is ranked up.\nWhen Yorick dies, The Maiden rapidly loses portions of her maximum health over 3 seconds until she dies.\nThe loss of maximum health occurs in 0.6-second intervals, in which she loses 20% on the first, 25% on the second, 33.3% on the third, 50% on the fourth, and 100% on the fifth.\nYorick will snap his facing direction towards the target location at the start of the cast time.",
        "blurb": "Active:  Yorick summons the  Maiden of the Mist and a few Mist Walkers at the target location. The Maiden will automatically raise Mist Walkers from dead enemies, and mark her attack target with Touch of the Maiden.",
        "castTime": "0.5",
        "targetRange": "600",
        "maxCharges": -1
      }
    ]
  },
  "lore": "The last survivor of a long-forgotten religious order, Yorick is both blessed and cursed with power over the dead. Trapped on the Shadow Isles, his only companions are the rotting corpses and shrieking wraiths that he gathers to him. Yorick's monstrous actions belie his noble purpose: to free his home from the curse of the Ruination."
}
