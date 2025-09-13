// Updated Patch 25.17 - 09/12/2025 02:39:56 PM CDT

const champion: Champion = {
  "id": 127,
  "key": "Lissandra",
  "name": "Lissandra",
  "title": "the Ice Witch",
  "resource": "Mana",
  "attackType": "Ranged",
  "adaptiveType": "Magic damage",
  "stats": {
    "health": {
      "flat": 620,
      "perLevel": 110
    },
    "healthRegen": {
      "flat": 7,
      "perLevel": 0.55
    },
    "mana": {
      "flat": 475,
      "perLevel": 30
    },
    "manaRegen": {
      "flat": 8,
      "perLevel": 0.4
    },
    "armor": {
      "flat": 22,
      "perLevel": 4.9
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 55,
      "perLevel": 2.7
    },
    "movespeed": {
      "flat": 325
    },
    "acquisitionRadius": {
      "flat": 600
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
      "flat": 0.656,
      "perLevel": 1.5
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
    "control": 3,
    "mobility": 2,
    "utility": 1,
    "abilityReliance": 100,
    "difficulty": 2
  },
  "abilities": [
    {
      "name": "Iceborn Subjugation",
      "key": "P",
      "icon": "https://cdn.communitydragon.org/latest/champion/Lissandra/ability-icon/p",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Whenever a nearby enemy champion dies, Lissandra spawns a Frozen Thrall from their corpse.Frozen Thralls are ice spirits that have 33.48 - 325 (based on seconds alive) movement speed and slow nearby enemies by 25%. They will chase nearby visible enemies for 4 seconds, prioritizing champions, after which they shatter to deal 120 - 520 (based on level) (+ 50% AP) magic damage to nearby enemies.</p>"
        }
      ],
      "targeting": "Passive",
      "affects": "Enemies",
      "spellshieldable": "true",
      "damageType": "Magic damage",
      "spellEffects": "spellaoe",
      "notes": "Thralls are units that are considered champions (they are  clones) and they take the form of the champion they arise from.\nAdditionally, near the end of their life span, they will cue that champion's basic attack animation.\nThey cannot be teleported by an allied  Realm Warp.\nThralls are  untargetable and  invulnerable.\nThralls are revealed to enemies through the fog of war.\nThralls will continue to chase their target even if they enter a  brush.\nIceborn Subjugation will not summon a Thrall against enemy champions that enter a  zombie state, and will instead summon one after they've left the state.",
      "blurb": "Innate: Whenever an enemy champion dies while  Lissandra is nearby, she spawns a Frozen Thrall from their corpse.",
      "effectRadius": "1350 /  450"
    },
    {
      "name": "Ice Shard",
      "key": "Q",
      "icon": "https://cdn.communitydragon.org/latest/champion/Lissandra/ability-icon/q",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Lissandra launches a shard of ice in the target direction that deals magic damage and slows enemies hit for 1.5 seconds.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                "80 / 115 / 150 / 185 / 220",
                "75% AP"
              ]
            },
            {
              "attribute": "Slow",
              "modifiers": [
                "20 / 24 / 28 / 32 / 36%"
              ]
            }
          ]
        },
        {
          "description": "If Ice Shard hits an enemy, it will shatter, increasing its width and maximum range."
        }
      ],
      "cost": "55 / 60 / 65 / 70 / 75",
      "cooldown": "8 / 7 / 6 / 5 / 4",
      "targeting": "Direction",
      "affects": "Enemies",
      "spellshieldable": "Special",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "aoe",
      "projectile": "TRUE",
      "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nIce Shard picks a location 950 units away in the direction of the cast for the shattered missile to end up at.\nThe initial Ice Shard missile has a range of 700 units which it arrives at after 0.33 seconds. If it hasn't collided with an enemy in this path when it does, it checks for enemies in a  100 radius around the point 25 units in front of it.\nColliding or hitting an enemy in either fashion creates a new \"shattered\" missile with the same speed but greater width that continues to travel along the same line to the designated point 950 units from the cast's original position, originating at the location at which the initial missile collided at.\n Spell shield will block the damage and the slow but will not stop the projectile from shattering.",
      "blurb": "Active:  Lissandra throws a spear of ice in the target direction that  slows the first target hit and deals magic damage to all enemies it passes through.",
      "speed": "2200",
      "width": "150 / 180",
      "castTime": "0.25",
      "maxCharges": -1
    },
    {
      "name": "Ring of Frost",
      "key": "W",
      "icon": "https://cdn.communitydragon.org/latest/champion/Lissandra/ability-icon/w",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Lissandra freezes nearby enemies, dealing magic damage and rooting them for a duration.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                "70 / 105 / 140 / 175 / 210",
                "70% AP"
              ]
            },
            {
              "attribute": "Root Duration",
              "modifiers": [
                "1.25 / 1.35 / 1.45 / 1.55 / 1.65 seconds"
              ]
            }
          ]
        }
      ],
      "cost": "40",
      "cooldown": "10 / 9.5 / 9 / 8.5 / 8",
      "targeting": "Auto",
      "affects": "Enemies",
      "spellshieldable": "True",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "spellaoe",
      "notes": "No additional information.",
      "blurb": "Active:  Lissandra freezes nearby enemies, dealing magic damage and briefly  rooting them.",
      "castTime": "none",
      "effectRadius": "275",
      "maxCharges": -1
    },
    {
      "name": "Glacial Path",
      "key": "E",
      "icon": "https://cdn.communitydragon.org/latest/champion/Lissandra/ability-icon/e",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Lissandra sends a claw of ice in the target direction that deals magic damage to enemies it passes through, decelerating over 1.25 seconds. Glacial Path can be recast after 0.5 seconds while the claw is active.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                "70 / 105 / 140 / 175 / 210",
                "60% AP"
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Lissandra consumes the claw and blinks to its current location.</p>"
        }
      ],
      "cost": "80 / 85 / 90 / 95 / 100",
      "cooldown": "24 / 21 / 18 / 15 / 12",
      "targeting": "Direction / Auto",
      "affects": "Enemies, Self",
      "spellshieldable": "True",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "aoe",
      "projectile": "TRUE",
      "notes": "Both casts count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nLissandra can reactivate Glacial Path for the duration (plus another 0.2-0.3 seconds after the claw 'sinks' into the ground).\nThe Claw can also hit enemies near the end point at this time, shortly after the missile has reached its maximum range.\nGlacial Path allows Lissandra to surpass through every single wall in all maps, so long as the claw is at least halfway through them.\nGlacial Path cannot be recast while  grounded or  rooted.\nGlacial Path's endpoint shows through terrain, fog of war and  brush to enemies within 600 range of it.",
      "blurb": "Active:  Lissandra sends a claw of ice in the target direction that deals magic damage to enemies it passes through. Glacial Path can be recast while the claw is active.",
      "speed": "1200 / 640",
      "width": "250",
      "castTime": "0.25",
      "maxCharges": -1
    },
    {
      "name": "Frozen Tomb",
      "key": "R",
      "icon": "https://cdn.communitydragon.org/latest/champion/Lissandra/ability-icon/r",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Lissandra can cast Frozen Tomb on herself or an enemy champion.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Enemy Cast:</span> Lissandra freezes the target enemy champion, knocking them down and stunning them for 1.5 seconds.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Self Cast:</span> Lissandra instantly entombs herself in ice, entering stasis for 2.5 seconds and healing herself every 0.25 seconds over the duration. The healing is increased by 0% - 100% (based on missing health at the time of cast).</p>",
          "leveling": [
            {
              "attribute": "Minimum Heal per Tick",
              "modifiers": [
                "10 / 15 / 20",
                "5.5% AP"
              ]
            },
            {
              "attribute": "Maximum Heal per Tick",
              "modifiers": [
                "20 / 30 / 40",
                "11% AP"
              ]
            },
            {
              "attribute": "Minimum Total Heal",
              "modifiers": [
                "100 / 150 / 200",
                "55% AP"
              ]
            },
            {
              "attribute": "Maximum Total Heal",
              "modifiers": [
                "200 / 300 / 400",
                "110% AP"
              ]
            }
          ]
        },
        {
          "description": "Frozen Tomb creates a field of ice that spreads out from the target over 1.5 seconds and covers the surrounding area for 3 seconds, dealing magic damage to enemies and slowing them for 0.5 seconds, refreshing every 0.25 seconds while they remain.",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                "150 / 250 / 350",
                "75% AP"
              ]
            },
            {
              "attribute": "Slow",
              "modifiers": [
                "45 / 60 / 75%"
              ]
            }
          ]
        }
      ],
      "cost": "100",
      "cooldown": "120 / 100 / 80",
      "targeting": "Unit",
      "affects": "Enemies, Self",
      "spellshieldable": "special",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "spellaoe",
      "notes": "Enemies can only be damaged by the field of ice once every 4 seconds.\nUnder normal circumstances, this means once per cast of Frozen Tomb.\nEnemies who come in contact with Frozen Tomb's slow field will be damaged and a small visual and sound effect will play.\n Spell shield will block the single-targeted portion and the radiating ice damage, but will not stop it from spreading.\nIf the target becomes  untargetable,  dies, or is too far away during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost.\nThis only applies to the enemy cast.",
      "blurb": "Active:  Lissandra can cast Frozen Tomb on herself or an enemy champion.",
      "castTime": "0.375 / None",
      "effectRadius": "550",
      "targetRange": "550",
      "maxCharges": -1
    }
  ],
  "lore": "Lissandra's magic twists the pure power of ice into something dark and terrible. With the force of her black ice, she does more than freeze—she impales and crushes those who oppose her. To the terrified denizens of the north, she is known only as ''The Ice Witch.'' The truth is much more sinister: Lissandra is a corruptor of nature who plots to unleash an ice age on the world.",
  "faction": "freljord",
  "releaseDate": "2013-04-30",
  "patchLastChanged": "25.06",
  "price": {
    "blueEssence": 2400,
    "rp": 880
  }
}
export default champion