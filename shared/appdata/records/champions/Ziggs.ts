// Updated Patch 25.19 - 10/07/2025 08:16:14 AM CDT

const champion: Champion = {
  "id": 115,
  "key": "Ziggs",
  "name": "Ziggs",
  "title": "the Hexplosives Expert",
  "abilities": [
    {
      "key": "P",
      "name": "Short Fuse",
      "affects": "Enemies",
      "blurb": "Innate: Periodically,  Ziggs' next basic attack will deal bonus magic damage, increased against structures.",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Periodically, Ziggs empowers his next basic attack to deal 20 - 160 (based on level) (+ 50% AP) bonus magic damage,[ increased by 75% against structures. ][ increased to 35 - 280 (based on level) (+ 87.5% AP) against structures. ]</p>"
        },
        {
          "description": "Short Fuse's cooldown is reduced by 4 / 5 / 6 (based on level) seconds whenever Ziggs casts an ability."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Ziggs/ability-icon/p",
      "notes": "The empowered attack will not trigger against wards.\nPENDING FOR TEST:: Short Fuse's interactions with  dodging,  blocking, and  blinding effects.",
      "speed": "1500",
      "spellEffects": "Proc",
      "spellshieldable": "False",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Bouncing Bomb",
      "affects": "Enemies",
      "blurb": "Active:  Ziggs throws a bomb to the target location that bounces twice forward. It will explode upon hitting an enemy, terrain, or the final bounce, dealing magic damage to nearby enemies.",
      "castTime": "0.25",
      "collisionRadius": "180",
      "cooldown": "6 / 5.5 / 5 / 4.5 / 4",
      "cost": "50 / 55 / 60 / 65 / 70",
      "damageType": "Magic damage",
      "effectRadius": "240",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ziggs throws a bomb to the target location that bounces forward up to two times, with the distance traveled each time being based on how far it was originally thrown.</p>"
        },
        {
          "description": "The bomb explodes upon landing near an enemy, within terrain, or the final bounce, dealing magic damage to nearby enemies.",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "80 / 130 / 180 / 230 / 280"
                },
                {
                  "tooltip": "Scaling per rank:\n60 / 65 / 70 / 75 / 80% AP",
                  "unit": "% AP",
                  "values": "60 - 80"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Ziggs/ability-icon/q",
      "maxCharges": -1,
      "notes": "Bouncing Bomb can be thrown or bounce over units/terrain.\n Spell shield will block the damage of the explosion, but the explosion can still damage other targets in the radius.\nZiggs will throw the bomb from his location at the end of the cast time, towards the pre-clamped cast location, causing the bounces to adjust their angle accordingly.",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "1700 / Fixed time",
      "spellEffects": "spellaoe",
      "spellshieldable": "true",
      "targeting": "Location",
      "targetRange": "850"
    },
    {
      "key": "W",
      "name": "Satchel Charge",
      "affects": "Enemies / Self",
      "blurb": "Active:  Ziggs hurls a charge to the target location that remains for a few seconds. Satchel Charge can be recast within the duration, and does so automatically afterwards.",
      "castTime": "0.25",
      "cooldown": "20 / 18 / 16 / 14 / 12",
      "cost": "80",
      "damageType": "Magic damage",
      "effectRadius": "325 /  400",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ziggs hurls a charge to the target location, remaining there for 4 seconds and granting sight of the area. Satchel Charge can be recast within the duration, and does so automatically afterwards. If recast while in flight, the charge will explode immediately upon landing.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Ziggs detonates the charge, causing it to explode to deal magic damage to nearby enemies and knock them back over 0.5 seconds up to 500 units away from the center of the explosion, though not through terrain. If this hits Ziggs, he will dash up to 825 units away from the center.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "70 / 105 / 140 / 175 / 210"
                },
                {
                  "unit": "% AP",
                  "values": "50"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Turret Explosion:</span> The explosion also executes enemy turrets within that are below a maximum health threshold.</p>",
          "leveling": [
            {
              "attribute": "Demolition Threshold",
              "modifiers": [
                {
                  "unit": "% of turret's maximum health",
                  "values": "25 / 27.5 / 30 / 32.5 / 35"
                }
              ]
            }
          ]
        },
        {
          "description": "Ziggs does not dash if he is immobilized or grounded. He can cast any of his abilities during the dash."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Ziggs/ability-icon/w",
      "maxCharges": -1,
      "notes": "The initial cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nDetonating the ability manually does not.\nDeals  area damage to non-turrets and  raw damage to turrets.\nSatchel Charge's distance increases with proximity to the charge, resulting in being knocked straight up when aligned directly on top of it.\nZiggs will not dash from Satchel Charge's detonation while  Teleporting but he will while  Recalling.",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "1750",
      "spellEffects": "special",
      "spellshieldable": "True",
      "targeting": "Location / Auto",
      "targetRange": "1000"
    },
    {
      "key": "E",
      "name": "Hexplosive Minefield",
      "affects": "Enemies",
      "blurb": "Active:  Ziggs scatters proximity mines over the target location that remain a period. Each mine will explode upon contact with an enemy or terrain, dealing magic damage and briefly  slowing them.",
      "castTime": "0.25",
      "cooldown": "16",
      "cost": "70 / 80 / 90 / 100 / 110",
      "damageType": "Magic damage",
      "effectRadius": "335 /  135",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ziggs scatters a cluster of 11 proximity mines over the target location that grant sight of the area for 2 seconds, arming after 0.5 seconds and lasting for up to 10 seconds.</p>"
        },
        {
          "description": "Each mine within the area explodes upon contact with terrain or an enemy, dealing magic damage and slowing them for 1.5 seconds, as well as granting sight of the area around the explosion for 2 seconds. An enemy takes 40% damage from subsequent mines.",
          "leveling": [
            {
              "attribute": "Magic Damage per Mine",
              "modifiers": [
                {
                  "values": "30 / 70 / 110 / 150 / 190"
                },
                {
                  "tooltip": "Scaling per rank:\n25 / 30 / 35 / 40 / 45% AP",
                  "unit": "% AP",
                  "values": "25 - 45"
                }
              ]
            },
            {
              "attribute": "Reduced Damage per Mine",
              "modifiers": [
                {
                  "values": "12 / 28 / 44 / 60 / 76"
                },
                {
                  "tooltip": "Scaling per rank:\n10 / 12 / 14 / 16 / 18% AP",
                  "unit": "% AP",
                  "values": "10 - 18"
                }
              ]
            },
            {
              "attribute": "Maximum Total Magic Damage",
              "modifiers": [
                {
                  "values": "150 / 350 / 550 / 750 / 950"
                },
                {
                  "tooltip": "Scaling per rank:\n125 / 150 / 175 / 200 / 225% AP",
                  "unit": "% AP",
                  "values": "125 - 225"
                }
              ]
            },
            {
              "attribute": "Slow",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "10 / 20 / 30 / 40 / 50"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Ziggs/ability-icon/e",
      "maxCharges": -1,
      "notes": "The mine cluster is built of 2 rings, with 3 mines in the inner ring (radius pending for test) and 8 mines on the other ring (200 radius), all equally spaced.\nThe angular offset is randomized on each cast.\nBecause of the  135 detonation radius of each mine, the total possible range of a mine from the minefield hitting an enemy from the cast location is  335 units. It will often be slightly less as the minefield is not guaranteed to be angled the right way for this.\nMines will not explode upon contact with player-generated terrain.\n Spell shield will block the effects of a single detonation.",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "1550",
      "spellEffects": "spellaoe",
      "spellshieldable": "Special",
      "targeting": "Location",
      "targetRange": "900"
    },
    {
      "key": "R",
      "name": "Mega Inferno Bomb",
      "affects": "Enemies",
      "blurb": "Active:  Ziggs catapults the Mega Inferno Bomb to the target location that deals magic damage to enemies hit, increased at the epicenter.",
      "castTime": "0.375",
      "cooldown": "120 / 95 / 70",
      "cost": "100",
      "damageType": "Magic damage",
      "effectRadius": "525",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ziggs catapults the Mega Inferno Bomb to the target location, granting sight within a 600 radius around its destination for 4 seconds.</p>"
        },
        {
          "description": "The bomb explodes upon arrival to deal magic damage to enemies hit, reduced to 65% against those outside of the epicenter.",
          "leveling": [
            {
              "attribute": "Epicenter Magic Damage",
              "modifiers": [
                {
                  "values": "300 / 500 / 700"
                },
                {
                  "unit": "% AP",
                  "values": "100"
                }
              ]
            },
            {
              "attribute": "Reduced Damage",
              "modifiers": [
                {
                  "values": "195 / 325 / 455"
                },
                {
                  "unit": "% AP",
                  "values": "65"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Ziggs/ability-icon/r",
      "innerRadius": "250",
      "maxCharges": -1,
      "notes": "Allies cannot see Mega Inferno Bomb's area indicator until shortly before the blast.\nMega Inferno Bomb takes 2.64 seconds from the start of the cast time to land when Ziggs casts at maximum range (reduced to 1.617 seconds from the start of the cast time when casting within 2700 units).\nWhen cast within 2700 units, Mega Inferno Bomb has a fixed travel time. Beyond that, the travel time is equal to the cast distance divided by the now-fixed missile speed.\nThe area reveal on the target location begins as soon as the cast time is completed and can see into  brush and across terrain.",
      "projectile": "FALSE",
      "resource": "Mana",
      "speed": "2250",
      "spellEffects": "aoe",
      "spellshieldable": "True",
      "targeting": "Location",
      "targetRange": "5000"
    }
  ],
  "adaptiveType": "Magic damage",
  "attackType": "Ranged",
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 2,
    "mobility": 2,
    "utility": 1,
    "abilityReliance": 90,
    "difficulty": 1
  },
  "faction": "zaun",
  "fullName": "Zigmund",
  "lore": "With a love of big bombs and short fuses, the yordle Ziggs is an explosive force of nature. As an inventor's assistant in Piltover, he was bored by his predictable life and befriended a mad, blue-haired bomber named Jinx. After a wild night on the town, Ziggs took her advice and moved to Zaun, where he now explores his fascinations more freely, terrorizing the chem-barons and regular citizens alike in his never ending quest to blow stuff up.",
  "patchLastChanged": "25.14",
  "positions": [
    "Bottom",
    "Middle"
  ],
  "price": {
    "blueEssence": 2400,
    "rp": 880
  },
  "releaseDate": "2012-02-01",
  "resource": "Mana",
  "roles": [
    "Artillery",
    "Mage"
  ],
  "stats": {
    "health": {
      "flat": 606,
      "perLevel": 106
    },
    "healthRegen": {
      "flat": 6.5,
      "perLevel": 0.6
    },
    "mana": {
      "flat": 480,
      "perLevel": 23.5
    },
    "manaRegen": {
      "flat": 8,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 21,
      "perLevel": 4.7
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 55,
      "perLevel": 3.1
    },
    "movespeed": {
      "flat": 325
    },
    "acquisitionRadius": {
      "flat": 800
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
      "flat": 0.656,
      "perLevel": 2
    },
    "attackSpeedRatio": {
      "flat": 0.656
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
  }
}
export default champion