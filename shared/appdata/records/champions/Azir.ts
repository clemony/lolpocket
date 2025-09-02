// Updated Patch 25.17 - 09/01/2025 05:26:11 PM CDT

const champion: Champion = {
  "id": 268,
  "key": "Azir",
  "name": "Azir",
  "title": "the Emperor of the Sands",
  "fullName": "Omah Azir",
  "resource": "Mana",
  "attackType": "Ranged",
  "adaptiveType": "Magic damage",
  "stats": {
    "health": {
      "flat": 575,
      "perLevel": 119
    },
    "healthRegen": {
      "flat": 7,
      "perLevel": 0.75
    },
    "mana": {
      "flat": 320,
      "perLevel": 40
    },
    "manaRegen": {
      "flat": 8,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 25,
      "perLevel": 5
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 56,
      "perLevel": 3.5
    },
    "movespeed": {
      "flat": 330
    },
    "acquisitionRadius": {
      "flat": 700
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
      "flat": 0.625,
      "perLevel": 5.5
    },
    "attackSpeedRatio": {
      "flat": 0.694
    },
    "attackCastTime": {
      "flat": 0.25
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackDelayOffset": {
      "flat": -0.15
    },
    "attackRange": {
      "flat": 525
    }
  },
  "positions": [
    "Middle"
  ],
  "roles": [
    "Mage",
    "Marksman",
    "Specialist"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 2,
    "mobility": 2,
    "utility": 1,
    "abilityReliance": 45,
    "difficulty": 3
  },
  "abilities": {
    "P": [
      {
        "name": "Shurima's Legacy",
        "icon": "https://cdn.communitydragon.org/latest/champion/Azir/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Whenever a turret outside the enemy team's base is destroyed, a marker is placed above its ruins which can be targeted by Azir.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Disc of the Sun:</span> Azir can select a marker to construct the Sun Disc above the ruins after a 0.5-second cast time. The Sun Disc will activate after being assembled over 5 seconds.</p>"
          },
          {
            "description": "The Sun Disc functions the same as a standard inner turret but deals magic damage, gains 40% AP bonus attack damage, and grants its kill credit to Azir. The Sun Disc's health decays over 45 seconds and loses 100 armor and 100 magic resistance while Azir is not alive or is too far away."
          },
          {
            "description": "Azir cannot construct a Sun Disc with the marker while he is unable to cast abilities."
          },
          {
            "description": "See Pets for more details about the Sun Disc."
          }
        ],
        "targeting": "Unit",
        "affects": "Turret ruins",
        "spellshieldable": "False",
        "damageType": "Physical damage",
        "spellEffects": "spell",
        "projectile": "FALSE",
        "notes": "No additional notes.",
        "blurb": "Innate:  Azir periodically can summon the Disc of the Sun from the ruins of allied or enemy  turrets.",
        "tetherRadius": "2000",
        "targetRange": "700"
      }
    ],
    "Q": [
      {
        "name": "Conquering Sands",
        "icon": "https://cdn.communitydragon.org/latest/champion/Azir/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Azir orders all Sand Soldiers to dash toward the target location, dealing magic damage to all enemies they pass through as well as those in front of them upon arrival, and slowing them by 25% for 1 second.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      60,
                      80,
                      100,
                      120,
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
            "description": "Enemies hit by subsequent soldiers take no additional damage and are instead slowed by an additional 25% per soldier."
          },
          {
            "description": "A summoned Sand Soldier is required to cast this ability."
          }
        ],
        "cost": [
          70,
          80,
          90,
          100,
          110
        ],
        "cooldown": [
          14,
          12,
          10,
          8,
          6
        ],
        "targeting": "Location",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "projectile": "SPECIAL",
        "notes": "Sand Soldiers dash about 50 units further away from Azir than the target location, making them stab targets slightly further away.\nSand Soldiers will stop their movement upon colliding with  Wind Wall or  Rebuttal, but not  Unbreakable.\nSand Soldiers will automatically turn to face nearby enemy champions after the dash.\nThis happens even if they're in  stealth.(bug)",
        "blurb": "Active:  Azir sends all Sand Soldiers to dash towards a location. They deal magic damage and  slow enemies they pass through.",
        "castTime": "0.25",
        "effectRadius": "150",
        "targetRange": "740",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Arise!",
        "icon": "https://cdn.communitydragon.org/latest/champion/Azir/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Azir summons a Sand Soldier at the target location that is untargetable, lasts 10 seconds, and grants sight of its surroundings. The Sand Soldier expires twice as fast while within range of an enemy turret, and does so instantly if Azir is too far away.Azir periodically stocks a Sand Soldier, up to a maximum of 2.</p>"
          },
          {
            "description": "When Azir declares a basic attack against an enemy in a soldier's attack range, the Sand Soldier attacks in his stead, thrusting their spear in the target's direction to deal magic damage to enemies struck in a line, applying on-hit effects to the primary target, with on-hit damage reduced to 50% effectiveness, and triggering on-attack effects once. Targets hit beyond the closest take 25% / 50% / 75% / 100% (based on level) damage. Subsequent Sand Soldiers against the same target deal 25% damage.",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      0,
                      2.6470588235294117,
                      5.294117647058823,
                      7.9411764705882355,
                      10.588235294117647,
                      13.235294117647058,
                      15.882352941176471,
                      18.52941176470588,
                      21.176470588235293,
                      23.823529411764707,
                      26.470588235294116,
                      29.11764705882353,
                      31.764705882352942,
                      34.411764705882355,
                      37.05882352941176,
                      39.705882352941174,
                      42.35294117647059,
                      45
                    ]
                  },
                  {
                    "values": [
                      50,
                      65,
                      80,
                      95,
                      110
                    ]
                  },
                  {
                    "values": [
                      45,
                      50,
                      55,
                      60,
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
            "description": "Sand Soldiers cannot attack structures, wards, nor traps."
          },
          {
            "description": "See Pets for more details about Sand Soldiers."
          }
        ],
        "cost": [
          40,
          35,
          30,
          25,
          20
        ],
        "cooldown": [
          1.5
        ],
        "targeting": "Location",
        "affects": "Enemies",
        "spellshieldable": "false",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "aoe",
        "projectile": "FALSE",
        "notes": "Nearsighting effects will only allow Azir to perform attacks from soldiers within his own sight radius.\nAzir must rank Arise! as his first ability, and will do so automatically if he reaches level 2 before ranking an ability.\nAzir can only command his soldiers to attack if he is able to declare basic attack commands himself, meaning  crowd control effects that disable attacking, such as  disarm, do not allow him to order his soldiers to attack in his stead.\nDamage to enemy champions from Sand Soldier stabs will draw minion aggro even if the enemy champion was not the primary target.(note)\nCommanding a soldier to attack will trigger  on-attack effects, but will not apply any of these effects to the target hit.\nSand Soldiers will attack the closest enemy to Azir when using attack move (or A + RMB / Shift + RMB) or  auto-attack.\nAn exclamation mark (!) will appear above the Sand Soldier's head when within the range of an enemy  turret.",
        "blurb": "Active:  Azir summons a Sand Soldier to attack nearby targets for him, replacing his  basic attacks against enemies within their range. Their attacks deal magic damage to enemies in a line.",
        "rechargeRate": [
          10,
          9,
          8,
          7,
          6
        ],
        "tetherRadius": "660",
        "castTime": "0.25",
        "targetRange": "525",
        "maxCharges": 2
      }
    ],
    "E": [
      {
        "name": "Shifting Sands",
        "icon": "https://cdn.communitydragon.org/latest/champion/Azir/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Azir grants himself a shield for 1.5 seconds and dashes to the Sand Soldier closest to the cursor, dealing magic damage to enemies within his path.</p>",
            "leveling": [
              {
                "attribute": "Shield Strength",
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
                      60
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      60,
                      100,
                      140,
                      180,
                      220
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
              }
            ]
          },
          {
            "description": "If Azir dashes into an enemy champion, he stops and gains a charge of Arise!."
          },
          {
            "description": "A summoned Sand Soldier is required to cast this ability. Azir can cast of any of his abilities during the dash."
          }
        ],
        "cost": [
          60
        ],
        "cooldown": [
          22,
          20.5,
          19,
          17.5,
          16
        ],
        "targeting": "Unit",
        "affects": "Self, Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "notes": "Azir will track the Sand Soldier if they change locations, such as by  Conquering Sands.",
        "blurb": "Active:  Azir  shields himself and  dashes to the target Sand Soldier, dealing magic damage to enemies he passes through.",
        "castTime": "none",
        "targetRange": "1100",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Emperor's Divide",
        "icon": "https://cdn.communitydragon.org/latest/champion/Azir/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Azir calls forth a phalanx of soldiers from 175 units behind him, catching enemies from up to 325 units behind him and charging forward 575 units in the target direction.</p>",
            "leveling": [
              {
                "attribute": "Width",
                "modifiers": [
                  {
                    "values": [
                      6,
                      7,
                      8
                    ],
                    "units": [
                      " soldiers"
                    ]
                  }
                ]
              },
              {
                "attribute": "Width (charge)",
                "modifiers": [
                  {
                    "values": [
                      620,
                      720,
                      820
                    ]
                  }
                ]
              },
              {
                "attribute": "Width (impassable wall)",
                "modifiers": [
                  {
                    "values": [
                      750,
                      850,
                      950
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Enemies impacted by the charge are dealt magic damage and knocked away over 1 second to a line 650 units in front of Azir.",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      200,
                      400,
                      600
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
              }
            ]
          },
          {
            "description": "Upon finishing their charge, the soldiers stand as a wall for 5 seconds, acting as impassible terrain against enemies and granting sight of their surroundings. Azir and his allies can move through these soldiers."
          }
        ],
        "cost": [
          100
        ],
        "cooldown": [
          120,
          105,
          90
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "projectile": "SPECIAL",
        "notes": "The soldier units are spawned only 175 units behind Azir, but do not control the  knock back directly. Each comes with a missile that travels the same path and conveys the damage and knockback effect.\nThe furthest area (from 325 to 175 units behind Azir) is covered by a separate set of missiles with the same effects.\nAll of the soldiers and their missiles will end the charge prematurely when one encounters  Wind Wall /  Unbreakable /  Blade Whirl /  Rebuttal or upon colliding with terrain that they cannot charge through.\nThe charge starts at 0.25 seconds into the cast time.\nThis ability will cast from wherever the caster is at the start of the cast time.\nWhen the dash of the soldiers comes to a halt, all not-yet-affected enemies on top of the soldiers' landing locations (125 radius) are also knocked back.\nEmperor's Divide will not be canceled if Azir dies during the cast time.\nWhile the soldiers are charging forward, the wall is not impassable terrain.\nThis means enemies that are immune to  airborne effects can pass through the wall while its moving.\nThe wall will count as terrain for the purposes of 'into terrain' effects (e.g.  Condemn,  Dredge Line,  Heroic Charge). This will only affect enemies, allies will pass through the wall in all circumstances, even if knocked into it by an enemy.",
        "blurb": "Active:  Azir summons a wall of soldiers that charges forward, dealing magic damage and  knocking back enemies hit.",
        "speed": "1000 / 1400",
        "castTime": "0.5",
        "effectRadius": "125",
        "targetRange": "400 / -325",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Azir was a mortal emperor of Shurima in a far distant age, a proud man who stood at the cusp of immortality. His hubris saw him betrayed and murdered at the moment of his greatest triumph, but now, millennia later, he has been reborn as an Ascended being of immense power. With his buried city risen from the sand, Azir seeks to restore Shurima to its former glory.",
  "faction": "shurima",
  "releaseDate": "2014-09-16",
  "patchLastChanged": "25.14",
  "price": {
    "blueEssence": 2400,
    "rp": 880
  }
}
export default champion