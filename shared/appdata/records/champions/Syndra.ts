// Updated Patch 25.17 - 09/14/2025 05:55:14 PM CDT

const champion: Champion = {
  "id": 134,
  "key": "Syndra",
  "name": "Syndra",
  "title": "the Dark Sovereign",
  "resource": "Mana",
  "attackType": "Ranged",
  "adaptiveType": "Magic damage",
  "stats": {
    "health": {
      "flat": 563,
      "perLevel": 104
    },
    "healthRegen": {
      "flat": 6.5,
      "perLevel": 0.6
    },
    "mana": {
      "flat": 480,
      "perLevel": 40
    },
    "manaRegen": {
      "flat": 8,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 25,
      "perLevel": 4.6
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 54,
      "perLevel": 2.9
    },
    "movespeed": {
      "flat": 330
    },
    "acquisitionRadius": {
      "flat": 575
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
      "perLevel": 2
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
    "Middle"
  ],
  "roles": [
    "Burst",
    "Mage"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 2,
    "mobility": 1,
    "utility": 1,
    "abilityReliance": 100,
    "difficulty": 3
  },
  "abilities": [
    {
      "name": "Transcendent",
      "key": "P",
      "icon": "https://cdn.communitydragon.org/latest/champion/Syndra/ability-icon/p",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Syndra collects Splinters of Wrath that enhance each of her abilities based on the number of them collected, stacking up to 120 times. She gains Splinters of Wrath from the following:</p>\nPeriodically dealing two instances of ability damage to an enemy champion within 4 seconds grants 1 / 2 / 3 (based on level) Splinters .\nRanking up an ability with any skill points beyond level 1 grants 5 Splinters, up to 85.\nKilling a large minion grants 1 Splinter."
        },
        {
          "description": "Collecting a Splinter of Wrath from an enemy restores 20 - 215 (based on level) mana. Splinters of Wrath are brought to Syndra from enemies over 0.6 seconds."
        },
        {
          "description": "At 120 Splinters of Wrath, Syndra achieves Transcendence, increasing her ability power by 15%."
        },
        {
          "description": "Syndra can collect Splinters of Wrath from enemies even if she is at maximum stacks. These Splinters do not grant any stacks, but will still restore mana for Syndra."
        }
      ],
      "targeting": "Passive",
      "affects": "Self",
      "notes": "Syndra's abilities gain additional visual effects when they reach their Splinter of Wrath thresholds. Her spells will also gain a red colored tint outlining the VFX.\n Dark Sphere will cause fractures to appear in the earth when it is used.",
      "blurb": "Innate:  Syndra collects Splinters of Wrath that enhance her  abilities based on the number of them collected, up to a maximum amount. She can collect them from dealing damage to enemy  champions, ranking up her abilities, and killing large  minions."
    },
    {
      "name": "Dark Sphere",
      "key": "Q",
      "icon": "https://cdn.communitydragon.org/latest/champion/Syndra/ability-icon/q",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Syndra conjures a Dark Sphere at the target location that appears after a 0.6-second delay, dealing magic damage to nearby enemies. The Dark Sphere then remains on the ground for 6 seconds.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "75 / 110 / 145 / 180 / 215"
                },
                {
                  "values": "60",
                  "unit": "% AP"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Transcendent Bonus:</span> Collecting 40 Splinters of Wrath causes Syndra to periodically stock a Dark Sphere charge, up to a maximum of 2.</p>"
        }
      ],
      "cost": "40 / 45 / 50 / 55 / 60",
      "cooldown": "7",
      "targeting": "Location",
      "affects": "Enemies",
      "spellshieldable": "True",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "Aoe",
      "notes": "Dark Sphere can be conjured inside terrain, but cannot be thrown there with  Force of Will.\nThere is no limit as to how many Dark Spheres can be active at a time.\nAfter Syndra gains the  Transcendent bonus, the number of Dark Sphere charges available is represented by small Sphere icons under her health bar, visible to the player only.",
      "blurb": "Active: After a brief delay,  Syndra conjures a Dark Sphere at the target location that deals magic damage to nearby enemies. The Dark Sphere then remains on the ground for a few seconds.",
      "rechargeRate": "7 / 7 / 7 / 7 / 7",
      "castTime": "none",
      "effectRadius": "210",
      "targetRange": "800",
      "maxCharges": -1
    },
    {
      "name": "Force of Will",
      "key": "W",
      "icon": "https://cdn.communitydragon.org/latest/champion/Syndra/ability-icon/w",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Syndra grabs the nearest Dark Sphere, enemy minion or non-epic monster within 500 units from the target location, and holds the target for 5 seconds. If a Dark Sphere is grabbed, its duration is refreshed; if a minion or monster is grabbed, it is put in stasis. She prioritizes grabbing the nearest unit, then Dark Spheres.</p>"
        },
        {
          "description": "Force of Will can be recast while the target is being held."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Syndra throws the grabbed target towards the target location, granting sight of their surroundings as they fall and dealing magic damage to them and nearby enemies. All targets hit are slowed by 25% for 1.5 seconds.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "70 / 105 / 140 / 175 / 210"
                },
                {
                  "values": "65",
                  "unit": "% AP"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Transcendent Bonus:</span> Collecting 60 Splinters of Wrath enhances Force of Will to deal 12% (+ 2% per 100 AP) bonus true damage.</p>",
          "leveling": [
            {
              "attribute": "Bonus Damage",
              "modifiers": [
                {
                  "values": "8.4 / 12.6 / 16.8 / 21 / 25.2"
                },
                {
                  "values": "9.2 - 12",
                  "unit": "% AP",
                  "tooltip": "Scaling per rank:\n9.2 / 9.9 / 10.6 / 11.3 / 12% AP"
                }
              ]
            },
            {
              "attribute": "Total Mixed Damage",
              "modifiers": [
                {
                  "values": "78.4 / 117.6 / 156.8 / 196 / 235.2"
                },
                {
                  "values": "74.2 - 77",
                  "unit": "% AP",
                  "tooltip": "Scaling per rank:\n74.2 / 74.9 / 75.6 / 76.3 / 77% AP"
                }
              ]
            }
          ]
        }
      ],
      "cost": "60 / 70 / 80 / 90 / 100",
      "cooldown": "12 / 11 / 10 / 9 / 8",
      "targeting": "Unit / Location",
      "affects": "Enemies",
      "spellshieldable": "True",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "Aoe",
      "projectile": "FALSE",
      "notes": "The initial cast does not count as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nDetonating the ability manually does.\nIf the ability is not recast within the duration, Syndra will release the unit or Dark Sphere that she is holding.\nForce of Will does not destroy in-flight  projectiles for the  minion or  monster grabbed.\nForce of Will  cleanses the target  minion or  monster grabbed from all  crowd control.\nForce of Will prevents non-sphere targets from dying when picking them up.\nForce of Will cannot grab units that are being  Teleported on.\nSyndra can grab  pets, such as  Shaco's  Jack in the Box.\nCasting  Teleport or  Recall will cause Syndra to cancel Force of Will autonomously and drop anything she is holding.\nGrabbing prioritizes Dark Spheres.\nEnemy  pets that passively have an effect on their surroundings will continue to affect the area around them while they are being held. For example,  Annie's  Tibbers will continue to inflict burn damage on surrounding units while being held.\nGrabbing a  Dark Sphere will cause the duration on it to refresh, but only on the first cast, not when it is thrown.\nForce of Will has additional effects when targeting the  Blue Sentinel and  Red Brambleback. Throwing the former will refund 10  mana to Syndra upon cast and will reduce the  cooldown of Force of Will by 1 second, while throwing the latter will apply the  Crest of Cinders burn to any affected units in the area of effect.\nForce of Will's first cast uses a  modified icon while it has the  Transcendent bonus.",
      "blurb": "Active:  Syndra grabs the nearest  Dark Sphere, enemy  minion or non-epic  monster from the target location, and holds it for a few seconds.",
      "castTime": "none",
      "effectRadius": "225",
      "targetRange": "925 / 950 / 500",
      "maxCharges": -1
    },
    {
      "name": "Scatter the Weak",
      "key": "E",
      "icon": "https://cdn.communitydragon.org/latest/champion/Syndra/ability-icon/e",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Syndra propels a wave of force in a cone in the target direction that deals magic damage to enemies hit and knocks them back for 400 units and up to 800 units away from Syndra based on proximity, though not through terrain.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "60 / 95 / 130 / 165 / 200"
                },
                {
                  "values": "60",
                  "unit": "% AP"
                }
              ]
            }
          ]
        },
        {
          "description": "Dark Spheres can be knocked back for 950 units and up to 1200 units away from Syndra based on proximity, knocking back enemies they hit over 70 units, though not through terrain. Targets hit are also stunned for 1.25 seconds, during which they are also revealed, and dealt Scatter the Weak's damage if they were not damaged by the initial cast."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Transcendent Bonus:</span> Collecting 80 Splinters of Wrath enhances Scatter the Weak to have an increased scatter angle and slow enemies hit by 70% for 1.25 seconds starting after the knock back ends or if the target was hit by a pushed Dark Sphere, after the stun has ended.</p>"
        }
      ],
      "cost": "50",
      "cooldown": "17",
      "targeting": "Direction",
      "affects": "Enemies",
      "spellshieldable": "True",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "Aoe",
      "projectile": "SPECIAL",
      "notes": "Scatter the Weak is blocked by the portion of  Wind Wall it collides with. Spheres thrown will stop upon colliding with the wall.\nSpheres spawned at close range of the ability are more likely to be hit.\nEnemies and spheres will be knocked into the direction directly away from Syndra, and the knock back has no dispersion.\nScatter the Weak will knock back Spheres even farther if they are inside terrain, up until they reach open space. If the terrain they're inside in cannot be surpassed, the Spheres will be knocked in the opposite direction.\nScatter the Weak will delay the expiration of a Sphere until after it finishes being knocked back.\nThis ability will cast from wherever the caster is at the end of the cast time.\nOnce Scatter the Weak has been learned, an arrow directly in front of every  Dark Sphere will appear to signify the direction the sphere will be knocked towards, each one corresponding to Syndra's position. This is only visible to Syndra.",
      "blurb": "Active:  Syndra propels a wave of force in a cone in the target direction that deals magic damage and  knocks back enemies hit based on proximity.",
      "collisionRadius": "70",
      "speed": "2500 / 2000",
      "width": "120 / 200",
      "angle": "56° / 84°",
      "castTime": "0.25",
      "maxCharges": -1
    },
    {
      "name": "Unleashed Power",
      "key": "R",
      "icon": "https://cdn.communitydragon.org/latest/champion/Syndra/ability-icon/r",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Dark Sphere gains ability haste.</p>",
          "leveling": [
            {
              "attribute": "Ability Haste",
              "modifiers": [
                {
                  "values": "10 / 20 / 30"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Syndra enters a 0.264 seconds cast time, creating 3 Dark Spheres and grabbing up to 4 nearby Dark Spheres that were last spawned. Afterwards, the collected Dark Spheres are barraged at the target enemy champion, each dealing magic damage upon hit.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage per Sphere",
              "modifiers": [
                {
                  "values": "90 / 130 / 170"
                },
                {
                  "values": "20",
                  "unit": "% AP"
                }
              ]
            },
            {
              "attribute": "Minimum Magic Damage",
              "modifiers": [
                {
                  "values": "270 / 390 / 510"
                },
                {
                  "values": "60",
                  "unit": "% AP"
                }
              ]
            },
            {
              "attribute": "Maximum Magic Damage",
              "modifiers": [
                {
                  "values": "630 / 910 / 1190"
                },
                {
                  "values": "140",
                  "unit": "% AP"
                }
              ]
            }
          ]
        },
        {
          "description": "The Dark Spheres will then remain on the ground for 6 seconds."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Transcendent Bonus:</span> Collecting 100 Splinters of Wrath enhances Unleashed Power to execute the target if it would damage them to below 15% of their maximum health.</p>"
        }
      ],
      "cost": "100",
      "cooldown": "120 / 100 / 80",
      "targeting": "Unit",
      "affects": "Enemies",
      "spellshieldable": "Special",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "spell",
      "projectile": "TRUE",
      "notes": "Unleashed Power makes Syndra enter a brief cast time, but the initial cast is completed instantly. If she dies during this cast time, Unleashed Power will still complete the remaining effect.\nCasting Unleashed Power on a target that becomes  untargetable while the spheres are in flight will not destroy them but cause them to deal no damage instead.\nSpheres already in flight will still travel if Syndra's target dies, but any remaining spheres will not. However, their duration will still get reset.\nA Dark Sphere summoned very shortly before Unleashed Power will be used as one of the spheres that get thrown.\nDepending on how many spheres are on the map and how far away the enemy is upon casting Unleashed Power it is possible that Syndra would conjure the sphere behind her as if she was going to throw it, but she won't.\nUnleashed Power will not add a Sphere that Syndra is holding with  Force of Will.\nSpheres that are being pushed by  Scatter the Weak (normally ones that were made late during the push) will not get picked up for Unleashed Power.\n Spell shield will only block the damage of a single sphere.",
      "blurb": "Active:  Syndra creates a few  Dark Spheres and grabs a few more nearby, then barrages them at the target enemy champion. Each sphere deals magic damage upon hit, and remains on the ground for a few seconds.",
      "castTime": "none",
      "effectRadius": "3000",
      "targetRange": "675",
      "maxCharges": -1
    }
  ],
  "lore": "Syndra is a fearsome Ionian mage with incredible power at her command. As a child, she disturbed the village elders with her reckless and wild magic. She was sent away to be taught greater control, but eventually discovered her supposed mentor was restraining her abilities. Forming her feelings of betrayal and hurt into dark spheres of energy, Syndra has sworn to destroy all who would try to control her.",
  "faction": "ionia",
  "releaseDate": "2012-09-13",
  "patchLastChanged": "25.08",
  "price": {
    "blueEssence": 1575,
    "rp": 790
  }
}
export default champion