// Updated Patch 25.17 - 09/14/2025 05:55:13 PM CDT

const champion: Champion = {
  "id": 800,
  "key": "Mel",
  "name": "Mel",
  "title": "the Soul's Reflection",
  "fullName": "Mel Medarda",
  "resource": "Mana",
  "attackType": "Ranged",
  "adaptiveType": "Magic damage",
  "stats": {
    "health": {
      "flat": 630,
      "perLevel": 93
    },
    "healthRegen": {
      "flat": 6,
      "perLevel": 0.55
    },
    "mana": {
      "flat": 480,
      "perLevel": 28
    },
    "manaRegen": {
      "flat": 9,
      "perLevel": 0.9
    },
    "armor": {
      "flat": 21,
      "perLevel": 5.2
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 54,
      "perLevel": 3.3
    },
    "movespeed": {
      "flat": 330
    },
    "acquisitionRadius": {
      "flat": 625
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
      "perLevel": 2.5
    },
    "attackSpeedRatio": {
      "flat": 0.4
    },
    "attackCastTime": {
      "flat": 0.3
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackDelayOffset": {
      "flat": -0.144
    },
    "attackRange": {
      "flat": 550
    }
  },
  "positions": [
    "Middle",
    "Support"
  ],
  "roles": [
    "Artillery",
    "Mage",
    "Support"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 2,
    "mobility": 1,
    "utility": 1,
    "abilityReliance": 100,
    "difficulty": 2
  },
  "abilities": [
    {
      "name": "Searing Brilliance",
      "key": "P",
      "icon": "https://cdn.communitydragon.org/latest/champion/Mel/ability-icon/p",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Mel's damaging basic attacks and abilities apply a stack of Overwhelm to enemies for 5 seconds, refreshing on subsequent applications and stacking infinitely.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Overwhelm:</span> Store 50 / 60 / 70 / 80 (based on Golden Eclipse's rank) (+ 10% AP) magic damage on the affected enemy with the first stack, reduced[ to 60% ][ to 30 / 36 / 42 / 48 (based on Golden Eclipse's rank) (+ 6% AP) ]against minions. For each stack, store an additional 2 / 3 / 4 / 5 (based on Golden Eclipse's rank) (+ 0.75% AP) magic damage on the target. If the total post-mitigation damage stored exceeds the target's current health and shields, the next stack will consume them all to deal the damage.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Searing Brilliance:</span> Mel's ability casts each generate 3 stacks of Searing Brilliance for 5 seconds, refreshing on subsequent casts and stacking up to 9 times. Her next basic attack consumes all stacks of Searing Brilliance to additionally fire an equal number of blazing projectiles at the target. Each projectile deals 8 - 25 (based on level) (+ 1% AP) magic damage.</p>"
        }
      ],
      "targeting": "Passive",
      "affects": "Self, Enemies",
      "spellshieldable": "false",
      "damageType": "Magic damage",
      "spellEffects": "proc",
      "projectile": "TRUE",
      "notes": "The first stack also benefits from the per-stack bonus stored damage.\nA threshold indicator for the currently stored damage is placed on a target's health bar, as well as a mark above their head, while any Overwhelm stacks are active. These are visible to Mel and her target(s).\nWhenever  Golden Eclipse's damage would put them below Overwhelm's threshold, the mark will darken and glow more prominently.\nJust before Overwhelm stacks are consumed, targets have 5 additional stacks applied to them.(bug)\nThese stacks are consumed immediately.\nOverwhelm stacks will not be consumed against  Tryndamere's  Undying Rage.",
      "blurb": "Innate - Overwhelm:  Mel's damaging  basic attacks and  abilities apply a  stack of Overwhelm to enemies hit for a few seconds, stacking infinitely. Each stack stores magic damage; if the total stored damage would kill the target, the next stack will consume them all to detonate the damage."
    },
    {
      "name": "Radiant Volley",
      "key": "Q",
      "icon": "https://cdn.communitydragon.org/latest/champion/Mel/ability-icon/q",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Mel launches a barrage of luminous bolts at the target location over 0.7 seconds which distribute evenly in the area. Each bolt explodes upon landing to deal magic damage to nearby enemies, reduced to 75% against minions.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage per Explosion",
              "modifiers": [
                {
                  "values": "13 / 15.5 / 18 / 20.5 / 23"
                },
                {
                  "values": "8.5",
                  "unit": "% AP"
                }
              ]
            },
            {
              "attribute": "Minion Damage per Explosion",
              "modifiers": [
                {
                  "values": "9.75 / 11.63 / 13.5 / 15.38 / 17.25"
                },
                {
                  "values": "6.38",
                  "unit": "% AP"
                }
              ]
            },
            {
              "attribute": "Number of Bolts",
              "modifiers": [
                {
                  "values": "6 / 7 / 8 / 9 / 10"
                }
              ]
            },
            {
              "attribute": "Total Magic Damage",
              "modifiers": [
                {
                  "values": "78 / 108.5 / 144 / 184.5 / 230"
                },
                {
                  "values": "51 - 85",
                  "unit": "% AP",
                  "tooltip": "Scaling per rank:\n51 / 59.5 / 68 / 76.5 / 85% AP"
                }
              ]
            },
            {
              "attribute": "Total Minion Damage",
              "modifiers": [
                {
                  "values": "58.5 / 81.38 / 108 / 138.38 / 172.5"
                },
                {
                  "values": "38.25 - 63.75",
                  "unit": "% AP",
                  "tooltip": "Scaling per rank:\n38.25 / 44.63 / 51 / 57.38 / 63.75% AP"
                }
              ]
            }
          ]
        },
        {
          "description": "The bolts momentarily grant sight during their travel, while the explosions grant sight over their target area. Both can see through brush and terrain."
        }
      ],
      "cost": "70 / 80 / 90 / 100 / 110",
      "cooldown": "10 / 9 / 8 / 7 / 6",
      "targeting": "Location",
      "affects": "Enemies",
      "spellshieldable": "special",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "spellaoe",
      "projectile": "TRUE",
      "notes": "Spell shield will only block a single explosion.\nFor the given number of Radiant Volley bolts, the spread will result in the same individual areas being affected over the duration invariably.\nEach individual missile is explicitly assigned an explosion location at a small offset from the cast location. This varies by missile, which results in their combined area of effect distributing over a total radius of [explosion radius + maximum spread] = 220 + 60 = 280 units.\nThis means that the distribution area is not random.\nThe order of bolts however, which will determine the order of individual areas to be affected per explosion, is random.\nMel launching the missiles in the same arcing motion for every Radiant Volley cast does not correlate with which missile is being fired at the time.\nNote that the combined area of effect may not always be the maximum possible; this drawback diminishes with a higher number of bolts.\nThis ability will cast from wherever the caster is at the end of the cast time.",
      "blurb": "Active:  Mel concentrates a bombardment of luminous bolts that explode in an area, dealing magic damage.",
      "speed": "4500",
      "castTime": "0.25",
      "effectRadius": "220 /  100",
      "targetRange": "950",
      "maxCharges": -1
    },
    {
      "name": "Rebuttal",
      "key": "W",
      "icon": "https://cdn.communitydragon.org/latest/champion/Mel/ability-icon/w",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Mel forms a protective barrier around herself for 0.75 seconds, becoming invulnerable to non- turret damage and gaining 30% decaying bonus movement speed. All hostile non-turret projectiles that collide with the barrier will be destroyed instantly before Mel fires the same projectiles as her own, either toward or in the direction of the original sources, or toward herself.</p>"
        },
        {
          "description": "Replicated projectiles have the same features that the original ones do, but they retain a ratio of the damage that the original ones would deal, and all of their damage is converted to magic.",
          "leveling": [
            {
              "attribute": "Replicated Projectile Damage Modifier",
              "modifiers": [
                {
                  "values": "40 / 45 / 50 / 55 / 60",
                  "unit": "%  of the original damage"
                },
                {
                  "values": "5",
                  "unit": "% per 100 AP"
                }
              ]
            }
          ]
        }
      ],
      "cost": "80 / 60 / 40 / 20 / 0",
      "cooldown": "35 / 32 / 29 / 26 / 23",
      "targeting": "Auto",
      "affects": "Self",
      "spellshieldable": "special",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "special",
      "projectile": "SPECIAL",
      "notes": "Rebuttal's barrier will also instantly destroy missiles that are already within its radius when the ability is cast.\nThe replicated missile will mimic all of the original missile's properties, which includes its range, width, speed, acceleration, angle (if a cone), height, and sight radius.\nSpell effects, as well as interactions with  spell shield and  projectile-interception effects, all vary based on the original missile that was replicated.\nThe only exception to this is the copied missile's path, or trajectory, which is based on the targeting paradigm that the original missile used when fired by its source. The replicated missile acquires the original missile source as the target.\nIf the original missile was fired by a unit or auto-targeted effect, the replicated missile will be fired as a homing missile with the target being the original missile source.\nHealing projectiles, such as  Soraka's  Rejuvenation and  Sona's  Aria of Perseverance, will instead target Mel.\nIf the original missile was fired via any other targeting paradigm, the replicated missile will by default fire in the direction of the original missile source at the time of replication. This includes vector-targeted projectiles (currently only  Viktor's  Hextech Ray), for which the origin will always be Mel's center (since she cannot control the cast point).\nThe replicated missile will mimic all of the functions of and copy the behavior of the original missile, unless otherwise stated. This includes every aspect and effect of the missile conforming to the attack or spell from which the missile originated.\nThe scaling of the effects of the copied missile is calculated using the original missile source's attributes (namely their stats). The damage of the missile only benefits from Mel's damage modifiers and magic penetration, and not the original source's.\nThe following missiles are destroyed, but not replicated:\n Draven's  Whirling Death on its way back to him.\n Gnar's  Boomerang Throw on its way back to him.\n Illaoi's  Test of Spirit\n Sivir's  Boomerang Blade on its way back to her.\n Sylas'  Hijack\n Xayah's  Bladecaller and  Featherstorm\n Zac's  Stretching Strikes\n Azir's  Emperor's Divide Soldiers will end their charge prematurely upon colliding with Rebuttal.\n Syndra's  Spheres thrown with  Syndra's  Scatter the Weak will only stop upon colliding with Mel.\nMel may occasionally fail to attribute  Echoes of Helia's Soul Siphon's damage projectile to herself.(bug)\nThis can cause the enemy to be able to kill their own allies, and gain all the kill's rewards.\nKilling  Elemental Drakes and  Elder Dragon with a reflected projectile grant Mel massively increased  Dragon Slayer effects.(bug)[2]",
      "blurb": "Active:  Mel forms a protective barrier around herself for 0.75 seconds, becoming  invulnerable to non- turret damage and gaining decaying  bonus move speed.",
      "castTime": "none",
      "maxCharges": -1
    },
    {
      "name": "Solar Snare",
      "key": "E",
      "icon": "https://cdn.communitydragon.org/latest/champion/Mel/ability-icon/e",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Mel fires an orb in the target direction that grants sight of its surroundings for 0.25 seconds as it travels. Enemies hit by the orb are dealt magic damage and rooted for a duration.</p>",
          "leveling": [
            {
              "attribute": "Orb Magic Damage",
              "modifiers": [
                {
                  "values": "60 / 105 / 150 / 195 / 240"
                },
                {
                  "values": "60",
                  "unit": "% AP"
                }
              ]
            },
            {
              "attribute": "Orb Root Duration",
              "modifiers": [
                {
                  "values": "1.25 / 1.5 / 1.75 / 2 / 2.25",
                  "unit": " seconds"
                }
              ]
            }
          ]
        },
        {
          "description": "The orb emanates a field of solar radiation that additionally expands after a 0.5-second delay. Enemies within the field are dealt magic damage and slowed by 30% every 0.125 seconds, lingering for 0.75 seconds after exiting.",
          "leveling": [
            {
              "attribute": "Field Magic Damage per Tick",
              "modifiers": [
                {
                  "values": "2 / 4 / 6 / 8 / 10"
                },
                {
                  "values": "1",
                  "unit": "% AP"
                }
              ]
            },
            {
              "attribute": "Field Magic Damage per Second",
              "modifiers": [
                {
                  "values": "16 / 32 / 48 / 64 / 80"
                },
                {
                  "values": "8",
                  "unit": "% AP"
                }
              ]
            }
          ]
        },
        {
          "description": "Both the orb and the field of Solar Snare deal 50% damage against minions.",
          "leveling": [
            {
              "attribute": "Orb Minion Magic Damage",
              "modifiers": [
                {
                  "values": "30 / 52.5 / 75 / 97.5 / 120"
                },
                {
                  "values": "30",
                  "unit": "% AP"
                }
              ]
            },
            {
              "attribute": "Field Minion Magic Damage per Tick",
              "modifiers": [
                {
                  "values": "1 / 2 / 3 / 4 / 5"
                },
                {
                  "values": "0.5",
                  "unit": "% AP"
                }
              ]
            },
            {
              "attribute": "Field Magic Damage per Second",
              "modifiers": [
                {
                  "values": "8 / 16 / 24 / 32 / 40"
                },
                {
                  "values": "4",
                  "unit": "% AP"
                }
              ]
            }
          ]
        }
      ],
      "cost": "50 / 55 / 60 / 65 / 70",
      "cooldown": "12 / 11.5 / 11 / 10.5 / 10",
      "targeting": "Direction",
      "affects": "Enemies",
      "spellshieldable": "special",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "special",
      "projectile": "TRUE",
      "notes": "Spell shield will only block the orb ( root portion).\nThe initial impact of Solar Snare deals  area damage, while the lingering damage over time deals  persistent area damage.\nThe slow debuff lasts for the same duration as its tick rate (0.125 seconds).\nThis ability will cast from wherever the caster is at the end of the cast time.",
      "blurb": "Active:  Mel fires an orb that deals magic damage to enemies hit and  roots them for a moment.",
      "speed": "1000",
      "castTime": "0.25",
      "effectRadius": "80 / 80 / 260",
      "maxCharges": -1
    },
    {
      "name": "Golden Eclipse",
      "key": "R",
      "icon": "https://cdn.communitydragon.org/latest/champion/Mel/ability-icon/r",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Overwhelm stacks store more damage.</p>",
          "leveling": [
            {
              "attribute": "Increased Stored Damage",
              "modifiers": [
                {
                  "values": "10 / 20 / 30"
                }
              ]
            },
            {
              "attribute": "Stored Damage Increase per Stack",
              "modifiers": [
                {
                  "values": "1 / 2 / 3"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Mel unleashes a radiant blast on all enemies affected by Overwhelm, dealing magic damage to each. Enemies are also revealed for 1 second from the start of the cast time.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "100 / 150 / 200"
                },
                {
                  "values": "30",
                  "unit": "% AP"
                },
                {
                  "values": "4 - 10",
                  "unit": " (+ 3.5% AP) per Overwhelm stack on the target",
                  "tooltip": "Scaling per rank:\n4 / 7 / 10 (+ 3.5% AP) per Overwhelm stack on the target"
                }
              ]
            }
          ]
        },
        {
          "description": "An enemy champion affected by Overwhelm is required to cast this ability. The target does not have to be visible to be hit by this ability."
        }
      ],
      "cost": "100",
      "cooldown": "120 / 100 / 80",
      "targeting": "Auto",
      "affects": "Enemies",
      "spellshieldable": "true",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "spell",
      "notes": "Golden Eclipse can be cast even if all affected targets are  untargetable.(note)\nGolden Eclipse does not deal damage to enemies that are  untargetable by the time the cast time completes.\nWhenever Golden Eclipse's damage would put a target below  Overwhelm's threshold, it will use a  different icon.\nGolden Eclipse will display the number of total stacks affecting all enemy champions in the HUD.\nGolden Eclipse sets the duration of  Overwhelm stacks to 0.75 seconds if they would run out during the cast time.",
      "blurb": "Passive:  Overwhelm stores more damage.",
      "castTime": "0.75",
      "targetRange": "Global",
      "maxCharges": -1
    }
  ],
  "lore": "Mel Medarda is the presumed heir of the Medarda family, once one of the most powerful in Noxus. In appearance she is a graceful aristocrat, but beneath the surface lies a skilled politician who makes it her business to know everything about everyone she meets. After an encounter with the mysterious Black Rose, Mel discovered the depths of her mother's deception and, for once, faced a situation potentially beyond her control. With newly awakened magical abilities, she sailed home in search of answers—and though many still seek to temper the light within her, Mel's soul remains forever defiant.",
  "faction": "noxus",
  "releaseDate": "2025-01-23",
  "patchLastChanged": "25.14",
  "price": {
    "blueEssence": 3150,
    "rp": 975
  }
}
export default champion