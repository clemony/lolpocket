// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion =  {
  "id": 432,
  "key": "Bard",
  "name": "Bard",
  "title": "the Wandering Caretaker",
  "fullName": "Bard",
  "resource": "Mana",
  "attackType": "Ranged",
  "stats": {
    "health": {
      "flat": 630,
      "perLevel": 103
    },
    "healthRegen": {
      "flat": 5.5,
      "perLevel": 0.55
    },
    "mana": {
      "flat": 350,
      "perLevel": 50
    },
    "manaRegen": {
      "flat": 6,
      "perLevel": 0.45
    },
    "armor": {
      "flat": 34,
      "perLevel": 5
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 52,
      "perLevel": 3
    },
    "movespeed": {
      "flat": 335
    },
    "acquisitionRadius": {
      "flat": 600
    },
    "selectionRadius": {
      "flat": 130
    },
    "pathingRadius": {
      "flat": 35
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
      "flat": 0.658,
      "perLevel": 2
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
      "flat": -0.1
    },
    "attackRange": {
      "flat": 500
    }
  },
  "positions": [
    "Support"
  ],
  "roles": [
    "Catcher",
    "Mage",
    "Support"
  ],
  "attributeRatings": {
    "damage": 1,
    "toughness": 1,
    "control": 3,
    "mobility": 2,
    "utility": 3,
    "abilityReliance": 65,
    "difficulty": 3
  },
  "abilities": {
    "P": [
      {
        "name": "Traveler's Call",
        "icon": "https://cdn.communitydragon.org/latest/champion/Bard/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Ancient Chimes:</span> Bard's presence causes sacred Chimes to appear at random locations on the map, lingering for up to 10 minutes. Collecting a Chime restores 12% maximum mana and grants Bard 20 + (1 per minute after 5 minutes) experience, as well as 24% bonus movement speed out of combat for 20 seconds, which stacks up to 10 times. Each Chime collected beyond the first instead grants an additional 14% bonus movement speed, up to a total of 150% bonus movement speed. Bard empowers his Meeps each time he collects 5 Chimes.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Meeps:</span> Bard's presence attracts Meeps, which are small spirits that come to his side. While he has Meeps, his basic attacks are empowered to each consume a Meep on-attack to deal 35 (+ 10 per 5 Chimes collected) (+ 40% AP) bonus magic damage.</p>\nAt 5 Chimes, Meeps slow damaged enemies by 25% - 75% (based on number of Chimes) for 1 second.\nAt 15 Chimes, Meeps deal the damage to enemies within 150 units of the primary target as well as those in a cone behind them.\nAt 35 Chimes, the cone's radius increases."
          },
          {
            "description": "Bard can have up to 1 - 9 (based on number of Chimes) Meeps at a time."
          }
        ],
        "targeting": "Passive",
        "affects": "Enemies",
        "spellshieldable": "Special",
        "damageType": "Magic damage",
        "spellEffects": "mixed",
        "projectile": "TRUE",
        "notes": "Chime spawns are weighted towards the areas of the map that Bard is currently present in and spawn in pairs, with the only exception being the second and third spawns on  Summoner's Rift, which spawn only one.\nChimes will not spawn in either team's base and will not spawn in the enemy team's jungle before the 5 minute mark.\nThe first Chime pair spawns at:\n0:15 in all  Summoner's Rift modes.\n0:50 in all  Howling Abyss modes.\nThe damage from Meeps:\nApplies as  spell damage on the primary target.\nApplies as  area damage on secondary target(s).\nMeeps grant additional stacks of  Electrocute,  Phase Rush and  Conqueror.\nOnly Bard can see a Chime that is in the fog of war. All other players must have  sight of a chime for it to be visible to them.\nOnly Bard can see a minimap icon for an uncollected Chime, regardless of whether other players have vision on it or not. The minimap icon will turn red when the chime is one minute away from expiration.\nBard cannot see Chimes while  nearsighted.\nOnly Meep cone attacks are absorbed by  spell shields. Those that deal damage together with the basic attack don't.\nIf a Meep empowered auto attack is  dodged,  blocked or when Bard is  blinded, the basic attack itself will deal no damage, but the Meep damage will still be applied.\nThe empowered attack will not trigger against structures and wards.\n\n\nMinimum Time\n\nChimes\n\nEffects\n\nBase Damage\n\n\n3:20\n5\n Meeps now  Slow by 25%.\n45\n\n\n5:00\n10\nMeep limit increased to 2.\n55\n\n\n7:30\n15\n Meeps now deal splash damage.\n65\n\n\n9:10\n20\nRecharge time reduced to 7 seconds.\n75\n\n\n11:40\n25\n Slow increased to 35%.\n85\n\n\n13:20\n30\nMeep limit increased to 3.\n95\n\n\n15:50\n35\nSplash damage area increased.\n105\n\n\n17:30\n40\nRecharge time reduced to 6 seconds.\n115\n\n\n20:00\n45\n Slow increased to 45%.\n125\n\n\n21:40\n50\nMeep limit increased to 4.\n135\n\n\n24:10\n55\nRecharge time reduced to 5 seconds.\n145\n\n\n25:50\n60\n Slow increased to 55%.\n155\n\n\n28:20\n65\nMeep limit increased to 5.\n165\n\n\n30:00\n70\nRecharge time reduced to 4 seconds.\n175\n\n\n32:30\n75\n Slow increased to 65%.\n185\n\n\n34:10\n80\nMeep limit increased to 6.\n195\n\n\n36:40\n85\n Slow increased to 75%.\n205\n\n\n38:20\n90\nMeep limit increased to 7.\n215\n\n\n40:50\n95\nMeep limit increased to 8.\n225\n\n\n42:30\n100\nMeep limit increased to 9.\n235\n\n\nEvery 5 thereafter only grants 10 bonus damage.",
        "blurb": "blurb2"
      },
      {
        "name": "Traveler's Call",
        "icon": "https://cdn.communitydragon.org/latest/champion/Bard/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Ancient Chimes:</span> Bard's presence causes sacred Chimes to appear at random locations on the map, lingering for up to 10 minutes. Collecting a Chime restores 12% maximum mana and grants Bard 20 + (1 per minute after 5 minutes) experience, as well as 24% bonus movement speed out of combat for 20 seconds, which stacks up to 10 times. Each Chime collected beyond the first instead grants an additional 14% bonus movement speed, up to a total of 150% bonus movement speed. Bard empowers his Meeps each time he collects 5 Chimes.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Meeps:</span> Bard's presence attracts Meeps, which are small spirits that come to his side. While he has Meeps, his basic attacks are empowered to each consume a Meep on-attack to deal 35 (+ 10 per 5 Chimes collected) (+ 40% AP) bonus magic damage.</p>\nAt 5 Chimes, Meeps slow damaged enemies by 25% - 75% (based on number of Chimes) for 1 second.\nAt 15 Chimes, Meeps deal the damage to enemies within 150 units of the primary target as well as those in a cone behind them.\nAt 35 Chimes, the cone's radius increases."
          },
          {
            "description": "Bard can have up to 1 - 9 (based on number of Chimes) Meeps at a time."
          }
        ],
        "targeting": "Passive",
        "affects": "Enemies",
        "spellshieldable": "Special",
        "damageType": "Magic damage",
        "spellEffects": "mixed",
        "projectile": "TRUE",
        "notes": "Chime spawns are weighted towards the areas of the map that Bard is currently present in and spawn in pairs, with the only exception being the second and third spawns on  Summoner's Rift, which spawn only one.\nChimes will not spawn in either team's base and will not spawn in the enemy team's jungle before the 5 minute mark.\nThe first Chime pair spawns at:\n0:15 in all  Summoner's Rift modes.\n0:50 in all  Howling Abyss modes.\nThe damage from Meeps:\nApplies as  spell damage on the primary target.\nApplies as  area damage on secondary target(s).\nMeeps grant additional stacks of  Electrocute,  Phase Rush and  Conqueror.\nOnly Bard can see a Chime that is in the fog of war. All other players must have  sight of a chime for it to be visible to them.\nOnly Bard can see a minimap icon for an uncollected Chime, regardless of whether other players have vision on it or not. The minimap icon will turn red when the chime is one minute away from expiration.\nBard cannot see Chimes while  nearsighted.\nOnly Meep cone attacks are absorbed by  spell shields. Those that deal damage together with the basic attack don't.\nIf a Meep empowered auto attack is  dodged,  blocked or when Bard is  blinded, the basic attack itself will deal no damage, but the Meep damage will still be applied.\nThe empowered attack will not trigger against structures and wards.\n\n\nMinimum Time\n\nChimes\n\nEffects\n\nBase Damage\n\n\n3:20\n5\n Meeps now  Slow by 25%.\n49\n\n\n5:00\n10\nMeep limit increased to 2.\n63\n\n\n7:30\n15\n Meeps now deal splash damage.\n77\n\n\n9:10\n20\nRecharge time reduced to 7 seconds.\n91\n\n\n11:40\n25\n Slow increased to 35%.\n105\n\n\n13:20\n30\nMeep limit increased to 3.\n119\n\n\n15:50\n35\nSplash damage area increased.\n133\n\n\n17:30\n40\nRecharge time reduced to 6 seconds.\n147\n\n\n20:00\n45\n Slow increased to 45%.\n161\n\n\n21:40\n50\nMeep limit increased to 4.\n175\n\n\n24:10\n55\nRecharge time reduced to 5 seconds.\n189\n\n\n25:50\n60\n Slow increased to 55%.\n203\n\n\n28:20\n65\nMeep limit increased to 5.\n217\n\n\n30:00\n70\nRecharge time reduced to 4 seconds.\n231\n\n\n32:30\n75\n Slow increased to 65%.\n245\n\n\n34:10\n80\nMeep limit increased to 6.\n259\n\n\n36:40\n85\n Slow increased to 75%.\n273\n\n\n38:20\n90\nMeep limit increased to 7.\n287\n\n\n40:50\n95\nMeep limit increased to 8.\n301\n\n\n42:30\n100\nMeep limit increased to 9.\n315\n\n\nEvery 5 thereafter only grants 14 bonus damage.",
        "blurb": "blurb2"
      }
    ],
    "Q": [
      {
        "name": "Cosmic Binding",
        "icon": "https://cdn.communitydragon.org/latest/champion/Bard/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Bard fires an energy bolt in the target direction that deals magic damage to the first enemy hit and slows them by 60% for a duration.</p>",
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
                      80
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Disable Duration",
                "modifiers": [
                  {
                    "values": [
                      1,
                      1.2,
                      1.4,
                      1.6,
                      1.8
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
            "description": "After Cosmic Binding hits an enemy, the bolt continues behind them for 300 units. If the bolt hits terrain or a second enemy, it stuns both targets for the same duration, dealing the same damage to the secondary target."
          }
        ],
        "cost": [
          60
        ],
        "cooldown": [
          11,
          10,
          9,
          8,
          7
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "Special",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "aoe",
        "projectile": "TRUE",
        "notes": "Cosmic Binding's interaction with  spell shields:\nIf the first target has a spell shield, they will block the damage but the bolt will still pass through them.\nIf the bolt hits a second target, only they will be stunned.\nIf the bolt hits terrain, the first target will be stunned.\nIf the second target has a spell shield, they will block the stun and damage.\nThe first target will still be stunned.\nIf the first target gains a spell shield after being hit, the stun will not be blocked.\nThe  stun will apply even if the first target becomes  untargetable.\nCosmic Binding can interact with player-generated terrain.\nThe  stun is still applied even if the first or second target dies to the ability itself or before the projectile can bind them.\nCosmic Binding does not grant  sight of enemies hit, but a hit can be seen and heard to indicate that at least one enemy is there.\nThis ability will cast from wherever the caster is at the end of the cast time.",
        "blurb": "Active:  Bard fires an energy bolt in the target direction that deals magic damage and  slows the first enemy hit.",
        "speed": "1500",
        "width": "60",
        "castTime": "0.25",
        "targetRange": "850",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Caretaker's Shrine",
        "icon": "https://cdn.communitydragon.org/latest/champion/Bard/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Bard conjures a shrine at the target location that gathers power over 5 seconds and grants sight of its surroundings for 1.8 seconds. Shrines last until they are consumed by champions moving over them. Up to 3 shrines may be active at a time.</p>"
          },
          {
            "description": "If the champion was an ally or Bard himself, they are healed for an amount based on the shrine's power and gain stacking bonus movement speed for each Shrine that decays over 1.5 seconds.",
            "leveling": [
              {
                "attribute": "Minimum Heal",
                "modifiers": [
                  {
                    "values": [
                      25,
                      50,
                      75,
                      100,
                      125
                    ]
                  },
                  {
                    "values": [
                      30
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Maximum Heal",
                "modifiers": [
                  {
                    "values": [
                      50,
                      87.5,
                      125,
                      162.5,
                      200
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
                "attribute": "Bonus Movement Speed",
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
                  },
                  {
                    "values": [
                      5
                    ],
                    "units": [
                      "% per 100 AP"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Bard periodically stocks a Caretaker's Shrine charge, up to a maximum of 2."
          }
        ],
        "cost": [
          70
        ],
        "cooldown": [
          0
        ],
        "targeting": "Location / Unit",
        "affects": "Allies",
        "resource": "Mana",
        "notes": "Caretaker's Shrine can be cast directly on an ally and it will be treated as a unit-targeted ability for effects such as  Guardian. This version also has a  forgiveness radius of 175 units.\nIf Bard has 3 shrines on the map and creates a new one that is cast directly on himself or an ally, the oldest shrine will not be destroyed. This is because the shrine is used as an actual targeted heal on himself or someone else, and not a permanent shrine, so the other 3 may stay.\nThe spell indicator of Caretaker's Shrine shows the area in which it can be used as a targeted heal. After a shrine has been placed on the ground its activation area becomes smaller: allies or enemies have to step directly on the shrine to use it or destroy it.\nLeveling up Caretaker's Shrine will update the healing of existing shrines.",
        "blurb": "Active:  Bard conjures a shrine which powers up over a period, disappearing when a champion steps on it.",
        "rechargeRate": [
          18,
          18,
          18,
          18,
          18
        ],
        "castTime": "0.25",
        "targetRange": "800",
        "maxCharges": 2
      }
    ],
    "E": [
      {
        "name": "Magical Journey",
        "icon": "https://cdn.communitydragon.org/latest/champion/Bard/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Bard opens a one-way magical corridor through a piece of terrain in the target direction for 10 seconds.</p>"
          },
          {
            "description": "A champion can pass through the corridor by selecting it while within proximity of it, becoming revealed during the travel. Bard and allies travel through the portal at 33% increased speed."
          },
          {
            "description": "A valid piece of terrain within the target range is required to cast this ability. Magical Journey cannot be taken while immobilized or grounded."
          }
        ],
        "cost": [
          30
        ],
        "cooldown": [
          22,
          20.5,
          19,
          17.5,
          16
        ],
        "targeting": "Direction",
        "affects": "Self, Allies, Enemies",
        "resource": "Mana",
        "projectile": "FALSE",
        "notes": "Terrain also includes structures.\nMagical Journey's tunnel has a max range of 2600 units (about two screens long)[3].\nMagical Journey will score assists for Bard if an ally that uses it scores a kill or assist shortly after.\nBard can cast Magical Journey while  grounded or  rooted.\nThere is no limit to how many times a given instance of Magical Journey may be used.\nMagical Journey cannot interact with player-created terrain due to its short lifespan.[4]\nAny abilities that continue during normal movement, such as point blank area of effects and various forms of  stealth, will continue during the travel within Magical Journey.\nIf a champion's  dash is  interrupted while inside terrain using Magical Journey, they will be immediately displaced out to the nearest open space, but are not rendered  airborne.\nTaking Magical Journey is considered a  dash, and so will interact with effects such as  Sudden Impact and  knockdown.",
        "blurb": "Active:  Bard opens a one-way portal through nearby terrain. Champions can enter by moving into the portal, however allies will be faster.",
        "speed": "900 / 1197",
        "castTime": "0.25",
        "targetRange": "900",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Tempered Fate",
        "icon": "https://cdn.communitydragon.org/latest/champion/Bard/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Bard sends magical energy arcing to the target location, granting sight of the area during travel. Upon impact, it puts all units within into stasis for 2.5 seconds, as well as stunning all enemy champions, minions, and turrets struck for the same duration. Enemies hit are revealed for the duration.</p>"
          },
          {
            "description": "Epic monsters and turrets are affected by Tempered Fate despite being immune to crowd control."
          }
        ],
        "cost": [
          100
        ],
        "cooldown": [
          110,
          95,
          80
        ],
        "targeting": "Location",
        "spellshieldable": "True",
        "resource": "Mana",
        "projectile": "FALSE",
        "notes": "Tempered Fate's  stun is affected by  Tenacity.\nThe  stasis is unaffected.\nTempered Fate will affect all targetable  champions,  minions,  monsters,  turrets,  wards, and jungle plants.\nTempered Fate has no effect on enemies that have  displacement immunity or  total crowd control immunity, and allies that are immune from using an ability that preloads UnstoppableForceMarker.\nThe only exceptions are the crowd control immunity that  turrets and epic  monsters have.\nAll  champions (including allies) during the  stasis are prohibited from activating  cleansing effects for its duration.\nIt will not disable  Quicksilver and instead put it on a 3-second  cooldown.\nTempered Fate deals 0  proc  true damage, which triggers in-combat effects such as drawing turret and monster aggression,  Sudden Impact or applying  Elixir of Sorcery.\n Elixir of Sorcery deals damage before the target is put into stasis.\nTempered Fate's travel time varies between ~0.65 at point blank and ~1.8 at max range, resulting in an overall delay of ~1.15-2.3 seconds including the cast time depending on distance covered.",
        "blurb": "Active:  Bard sends spirit energy arcing to a location, putting all  champions,  minions,  monsters, and  turrets hit into  stasis for a short time.",
        "castTime": "0.5",
        "effectRadius": "350",
        "targetRange": "3400",
        "maxCharges": -1
      }
    ]
  },
  "lore": "A traveler from beyond the stars, Bard is an agent of serendipity who fights to maintain a balance where life can endure the indifference of chaos. Many Runeterrans sing songs that ponder his extraordinary nature, yet they all agree that the cosmic vagabond is drawn to artifacts of great magical power. Surrounded by a jubilant choir of helpful spirit meeps, it is impossible to mistake his actions as malevolent, as Bard always serves the greater good... in his own odd way."
}
    export default champion