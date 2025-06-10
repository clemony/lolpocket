// Updated Patch 25.11 - 06/08/2025 12:01:46 PM CDT

const champion: Champion =  {
  "id": 104,
  "key": "Graves",
  "name": "Graves",
  "title": "the Outlaw",
  "fullName": "Malcolm Graves",
  "resource": "Mana",
  "attackType": "Ranged",
  "stats": {
    "health": {
      "flat": 625,
      "perLevel": 106
    },
    "healthRegen": {
      "flat": 8,
      "perLevel": 0.7
    },
    "mana": {
      "flat": 325,
      "perLevel": 40
    },
    "manaRegen": {
      "flat": 8,
      "perLevel": 0.7
    },
    "armor": {
      "flat": 33,
      "perLevel": 4.6
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 68,
      "perLevel": 4
    },
    "movespeed": {
      "flat": 340
    },
    "acquisitionRadius": {
      "flat": 800
    },
    "selectionRadius": {
      "flat": 110
    },
    "pathingRadius": {
      "flat": 10
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
      "flat": 0.475,
      "perLevel": 3
    },
    "attackSpeedRatio": {
      "flat": 0.49
    },
    "attackCastTime": {
      "flat": 0.3
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackDelayOffset": {
      "flat": -0.295
    },
    "attackRange": {
      "flat": 425
    }
  },
  "positions": [
    "Jungle"
  ],
  "roles": [
    "Marksman",
    "Specialist"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 2,
    "control": 1,
    "mobility": 2,
    "utility": 2,
    "abilityReliance": 20,
    "difficulty": 2
  },
  "abilities": {
    "P": [
      {
        "name": "New Destiny",
        "icon": "https://cdn.communitydragon.org/latest/champion/Graves/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Double Barrel:</span> Graves' basic attacks fire his shotgun to consume ammunition within 2 shells. He will reload over a few seconds immediately after expending all shells or withholding leftover shells for a while. The reload time is reduced by Graves' level and bonus attack speed, and can be interrupted by declaring an attack or casting an ability.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - 12-Gauge:</span> Graves' basic attack sprays 4 pellets in a cone, each colliding with the first enemy unit in their path, dealing 70% - 100.01% (based on level) AD physical damage plus[ 23.31% - 33.3% (based on level) AD additional physical damage ][ about one-third of the damage ]for each subsequent pellet hitting the same target, up to 139.93% - 199.92% (based on level) AD total physical damage against a single target. Pellets deal 25% reduced damage against structures.</p>"
          },
          {
            "description": "Critical strikes spray 6 pellets over a 25% wider cone, with each pellet dealing[ (33.75% + 18%) increased damage, ][ increased damage equal to 45% bonus critical damage, ]resulting in[ 178.312% (+ 23.997%) total damage ][ 249.52% - 356.48% (based on level) (+ 33.58% - 47.97% (based on level)) AD total physical damage ]if all pellets hit a single target."
          },
          {
            "description": "Pellets apply life steal at 100% effectiveness. Only the first pellet to hit each enemy applies on-hit effects."
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Buckshot:</span> Non-champion units hit by more than one pellet are knocked back, though not through terrain.</p>"
          }
        ],
        "targeting": "Passive",
        "affects": "Self, Enemies",
        "spellshieldable": "False",
        "damageType": "Physical damage",
        "spellEffects": "special",
        "projectile": "TRUE",
        "notes": "Graves takes 2.08 seconds to reload 2 shells (when the clip is empty) and 1.3 seconds to reload 1 shell. He must idle with 1 shell for 2.08 seconds before he starts reloading. These values can be improved with bonus attack speed.\nValues of bonus attack speed between 150% and 200% have a negative effect on Graves'  reload speed.(bug)[2]\nAttack speed growth will always have a positive effect on Graves'  reload speed and is not counted toward the 150% and 200% attack speed thresholds. For example, Graves gains 51% bonus attack speed from attack speed growth at level 18; meaning the thresholds at level 18 are at 201% and 251% respectively.\nMaximum reload speed is 0.651 : 0.891 (based on level), which equates to a reload timer of 1.54 : 1.12 (based on level) seconds, which is the shortest reload time at the 150% threshold.\nGraves can hit multiple individual enemies with a single shot from his basic attack. The first pellet hitting an enemy:\nDeals the highest damage out of all other pellets.\nApplies and triggers  on-hit effects.\n\"Single-use\" on-hit effects such as  Spellblade items will be applied to the very first enemy hit by a pellet (closest one in this case).\nApplies  basic damage, while all additional pellets deal  default damage.\nIs reduced by  Warden's Mail's Rock Solid.\nGraves' attack windup is based on such a low value that it will always take only 1 game tick, even at the lowest possible attack speed of 0.2.\nWhen Graves has his attack range increased by 35% to  573.75 via  Rapid Firecannon's Sharpshooter, it has special effects on the cone spread of his basic attack:\nThe reach of the individual missiles is also increased by 35% to  843.75 /  783.75.\nThe spread of the individual missiles is decreased by 35% (angle  ×  1/1.35) to 17.7° / 22.2°.\nPellets will not hit  wards nor jungle plants.\nWhen Graves performs a basic attack against these units, he will fire a standard ranged homing missile at the target to successfully hit it.\nThis same missile is also used for when his basic attack is empowered by an  Energized effect.\nPellets can be  dodged and  blocked, but not missed while Graves is  blinded.\nWhile Graves is  blinded, the pellets are special cased to fire in a random direction that is always away from the primary target of his basic attack.\nEnemies within range of the pellets in their randomly fired direction will be hit as the pellets cannot be missed.\nStructures can be hit by multiple pellets, as with other valid targets.\nIf Graves'  basic attack  critically strikes against an enemy behind their structure, and this structure is hit by all pellets, the damage dealt to the structure is increased by 33.3%.\nOn-attack effects such as  Help, Pix! and  Runaan's Hurricane's Wind's Fury will be triggered as usual from the completion of Graves'  basic attack windup. They will obey their standard target-acquisition rules in spite of Graves'  special basic attack behavior.\n Runaan's Hurricane's Wind's Fury can still fire its bolts at secondary targets even if they were already hit by the pellets of Graves'  basic attack.\n Black Cleaver's Carve will be applied for the physical damage dealt by each pellet, meaning that each of Graves'  basic attacks can apply up to 4 stacks of the effect, increased to the maximum of 5 with a  critical strike.\n Sundered Sky's Lightshield Strike will function normally with Graves'  basic attacks, causing the pellets to critically strike if the primary target was also a target of the item's effect.\nIf none of the pellets hit the target of Lightshield Strike's effect, however, the item's effect will not be consumed on the target thus not triggering the heal nor applying the on-target-cooldown, but still causing Graves'  basic attack to critically strike as if the effect was successfully consumed.\nHis basic attacks against the marked target will be guaranteed to critically strike until the item's effect has been consumed by at least one pellet hitting them.\nPellets will not consume the item's effect on secondary targets that are also targets of the item's effect; they will not consume the mark of enemies near the primary target that are marked by Lightshield Strike.\n Randuin's Omen's Resilience will reduce the critical damage dealt by every pellet, resulting in each pellet dealing less damage than if they were to not critically strike.\n Kraken Slayer's Bring It Down VFX for its missile appears to fire at the primary target, but will always collide with the target hit by the first pellet.\nThe in-game HUD for the champion's stat panel incorrectly displays Graves \"reload speed\" for reloading 2 shells as his attack speed, instead of displaying his actual attack speed which behaves normally like any other champion. This displayed value more accurately represents his reloads per second, and not attacks per second as the attack speed tooltip in the HUD would suggest.",
        "blurb": "Innate:  Graves' basic attacks consume up to 2 shells before needing to reload. The reload speed is reduced based on his  bonus attack speed.",
        "speed": "3800 / 3000 / 3400",
        "width": "40",
        "angle": "24° / 30°",
        "targetRange": "425"
      }
    ],
    "Q": [
      {
        "name": "End of the Line",
        "icon": "https://cdn.communitydragon.org/latest/champion/Graves/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Graves fires a round in the target direction that deals physical damage to enemies it passes through and leaves behind a powder trail.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      45,
                      65,
                      85,
                      105,
                      125
                    ]
                  },
                  {
                    "values": [
                      80
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
            "description": "After 2 seconds, or 0.231 seconds upon colliding with terrain, the round detonates to deal physical damage to enemies within a wide perpendicular area and in a reverse wave along the powder trail.",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      85,
                      120,
                      155,
                      190,
                      225
                    ]
                  },
                  {
                    "values": [
                      40,
                      65,
                      90,
                      115,
                      140
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  }
                ]
              },
              {
                "attribute": "Total Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      130,
                      185,
                      240,
                      295,
                      350
                    ]
                  },
                  {
                    "values": [
                      120,
                      145,
                      170,
                      195,
                      220
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "cost": [
          80
        ],
        "cooldown": [
          13,
          11.25,
          9.5,
          7.75,
          6
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "Special",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "spellaoe",
        "projectile": "SPECIAL",
        "notes": "Spell shields can only block one instance of the ability's damage.\n Wind Wall will destroy the projectile entirely and mitigate all effects, including the trail on the ground.\n Unbreakable is considered to be terrain for the purposes of the projectile, triggering its second effect.\nThis ability will cast from wherever the caster is at the end of the cast time.",
        "blurb": "Active:  Graves fires an explosive shell that deals physical damage to enemies it passes through.",
        "width": "80 / 500 / 200",
        "castTime": "0.25",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Smoke Screen",
        "icon": "https://cdn.communitydragon.org/latest/champion/Graves/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Graves fires a smoke canister at the target location that upon impact deals magic damage to enemies within the area and slows them by 50% for 0.5 seconds.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      60,
                      110,
                      160,
                      210,
                      260
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
              }
            ]
          },
          {
            "description": "The canister creates a cloud of smoke for 4 seconds that applies nearsight of outside the area to all enemies within every 0.25 seconds, reducing their sight radius relative to the center."
          }
        ],
        "cost": [
          70,
          75,
          80,
          85,
          90
        ],
        "cooldown": [
          26,
          24,
          22,
          20,
          18
        ],
        "targeting": "Location",
        "affects": "Enemies",
        "spellshieldable": "Special",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "projectile": "TRUE",
        "notes": "Smoke Screen will nearsight  untargetable units.\n Spell shields will block the instance of damage and  slow, but will not mitigate the persistent area of effect.\n Crowd control immunity and  cleanses have no effect on the user's  sight radius reduction despite the  nearsight being resisted / removed. Loss of allied vision will still be affected.(note)\nRemoving or resisting the nearsight will prevent it from being reapplied while staying inside the area (leaving and coming back inside will not).\nThe nearsight debuff applies to non-champions but it does not inherently stop them from performing actions that require  sight, such as basic attacking.\nThis ability will cast from wherever the caster is at the end of the cast time.",
        "blurb": "Active:  Graves fires a smoke canister at the target location that creates a cloud of smoke upon impact, dealing magic damage and  slowing nearby enemies.",
        "speed": "1500",
        "castTime": "0.25",
        "effectRadius": "200",
        "targetRange": "950",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Quickdraw",
        "icon": "https://cdn.communitydragon.org/latest/champion/Graves/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Graves dashes to the target location, reloading one shell while generating a stack of True Grit for 4 seconds, stacking up to 8 times. Dashing towards an enemy champion generates 2 stacks of True Grit.</p>"
          },
          {
            "description": "Quickdraw's current cooldown is reduced by 0.5 seconds for every pellet impacting an enemy."
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">True Grit:</span> For each stack, Graves gains bonus armor. Subsequent casts of Quickdraw and attacks versus non- minions will refresh the duration of True Grit.</p>",
            "leveling": [
              {
                "attribute": "Bonus Armor",
                "modifiers": [
                  {
                    "values": [
                      4,
                      7,
                      10,
                      13,
                      16
                    ]
                  }
                ]
              },
              {
                "attribute": "Maximum Bonus Armor",
                "modifiers": [
                  {
                    "values": [
                      32,
                      56,
                      80,
                      104,
                      128
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Quickdraw resets Graves' basic attack timer. If Graves dashes while reloading, he can cast any of his abilities during the dash.(bug) Quickdraw will cast at max range if cast beyond that."
          }
        ],
        "cost": [
          40
        ],
        "cooldown": [
          16,
          15,
          14,
          13,
          12
        ],
        "targeting": "Location",
        "affects": "Self",
        "resource": "Mana",
        "notes": "Graves gains the one additional stack of True Grit from Quickdraw if at any point during the dash a  visible enemy champion is in front of Graves within  1300 distance.\nEnemy champions have to be targetable to grant the additional stack.\nThe additional stack of True Grit is gained when dashing towards  clones just like actual champions.\nThis check never happens if Graves dashes 0 distance (impossible outside of bugs), and will not always repeat a final time at the very end of the dash. Otherwise, it occurs continously while Graves is dashing.\nThis works for a 180 degree sector from Graves to the Champion, as such dashing parallel to the champ will also give a bonus stack.",
        "blurb": "Active:  Graves  dashes in the target direction and reloads 1 shell. He also gains a stack of True Grit, doubled if he dashed toward an enemy  champion.",
        "castTime": "none",
        "targetRange": "375 / 275",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Collateral Damage",
        "icon": "https://cdn.communitydragon.org/latest/champion/Graves/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Graves fires an explosive shell in the target direction that deals physical damage to enemies hit and causes him to recoil 400 units in the opposite direction.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
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
            "description": "Upon hitting an enemy champion or reaching the end of its range, the shell explodes in a cone to deal reduced damage to additional enemies.",
            "leveling": [
              {
                "attribute": "Reduced Damage",
                "modifiers": [
                  {
                    "values": [
                      200,
                      320,
                      440
                    ]
                  },
                  {
                    "values": [
                      120
                    ],
                    "units": [
                      "% bonus AD"
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
          100,
          80,
          60
        ],
        "targeting": "Direction",
        "affects": "Enemies / Self",
        "spellshieldable": "special",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "Special",
        "projectile": "TRUE",
        "notes": "Applies  spell damage to the target hit by the shell (including to non-champions struck before exploding(bug)) and  area damage to targets within the explosion cone.\nThe projectile will still explode early if the champion hit by the shell is protected by a  spell shield.\nThe explosion cone is anchored on the location of the shell missile when it collided with a champion, or otherwise its maximum cast range.\nThe cone damage is always located 150 units behind, based off its direction\nCollateral Damage is not disabled while  grounded or  rooted, but Graves will not dash after the cast time while affected by them.\nGraves will not  dash after the cast time if he is  airborne.\nThis ability will cast from wherever the caster is at the end of the cast time.",
        "blurb": "Active:  Graves  recoils backward and fires an explosive shell in the target direction that deals physical damage to enemies it passes through.",
        "speed": "2100",
        "width": "200",
        "angle": "60°",
        "castTime": "0.25",
        "effectRadius": "740",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Malcolm Graves is a renowned mercenary, gambler, and thief—a wanted man in every city and empire he has visited. Even though he has an explosive temper, he possesses a strict sense of criminal honor, often enforced at the business end of his double-barreled shotgun Destiny. In recent years, he has reconciled a troubled partnership with Twisted Fate, and together they have prospered once more in the turmoil of Bilgewater's criminal underbelly."
}
    export default champion