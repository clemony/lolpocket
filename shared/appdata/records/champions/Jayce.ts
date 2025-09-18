// Updated Patch 25.17 - 09/18/2025 02:20:03 AM CDT

const champion: Champion = {
  "id": 126,
  "key": "Jayce",
  "name": "Jayce",
  "title": "the Defender of Tomorrow",
  "abilities": [
    {
      "key": "P",
      "name": "Hextech Capacitor",
      "affects": "Self",
      "blurb": "Innate: Whenever  Jayce switches between  Hammer Stance and  Cannon Stance, he briefly gains  bonus movement speed and  ignores unit collision.",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Whenever Jayce switches between either Hammer Stance or Cannon Stance, he gains ghosting and 40 bonus movement speed for 0.75 seconds.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Jayce/ability-icon/p",
      "notes": "No additional details.",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "To the Skies!",
      "affects": "Enemies",
      "blurb": "Active:  Jayce leaps to the target enemy's location and smashes his hammer to the ground, dealing physical damage and  slowing nearby enemies.",
      "castTime": "none",
      "cooldown": "16 / 14 / 12 / 10 / 8 / 6",
      "cost": "40",
      "damageType": "Physical damage",
      "effectRadius": "300",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jayce leaps to the target enemy's location over 0.5 seconds. Upon arrival, he smashes his hammer to the ground to deal physical damage to all enemies within an area and slow them for 2 seconds.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "60 / 105 / 150 / 195 / 240 / 285"
                },
                {
                  "unit": "% bonus AD",
                  "values": "135"
                }
              ]
            },
            {
              "attribute": "Slow",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "35 / 40 / 45 / 50 / 55 / 60"
                }
              ]
            }
          ]
        },
        {
          "description": "Lightning Field can be cast during the dash."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Jayce/ability-icon/q",
      "maxCharges": -1,
      "notes": "To The Skies! will always direct Jayce linearly to his target's location.",
      "resource": "Mana",
      "spellEffects": "spellaoe",
      "spellshieldable": "True",
      "targeting": "Unit",
      "targetRange": "600"
    },
    {
      "key": "Q",
      "name": "Shock Blast",
      "width": "140",
      "affects": "Enemies",
      "blurb": "Active:  Jayce fires an electric bolt in the target direction that detonates upon hitting an enemy or max range, dealing physical damage to nearby enemies.",
      "castTime": "0.2143",
      "cooldown": "16 / 14 / 12 / 10 / 8 / 6",
      "cost": "40",
      "damageType": "Physical damage",
      "effectRadius": "170 / 250 /  160 / 250",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jayce fires an electric bolt in the target direction that detonates upon hitting an enemy or reaching maximum range, dealing physical damage to nearby enemies and granting sight of the area for 1.25 seconds.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "60 / 110 / 160 / 210 / 260 / 310"
                },
                {
                  "unit": "% bonus AD",
                  "values": "140"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">If the bolt passes through Acceleration Gate, it becomes supercharged:</span> increasing its damage by 40% as well as its speed, range and explosion radius.</p>",
          "leveling": [
            {
              "attribute": "Increased Damage",
              "modifiers": [
                {
                  "values": "84 / 154 / 224 / 294 / 364 / 434"
                },
                {
                  "unit": "% bonus AD",
                  "values": "196"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Jayce/ability-icon/q",
      "maxCharges": -1,
      "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nUpon touching  Acceleration Gate, the enhanced missile gains its remaining range equal to [ 1600 units - travelled distance of the standard missile ].\nThis means that the range of the enhanced Shock Blast is always the same, regardless of how early or late it interacted with Acceleration Gate.\nSupercharging the Shock Blast as soon as possible, however, will improve its average speed significantly.\nFor this, Jayce must stand inside or very close to the Acceleration Gate, or place it very close to himself right after Shock Blast's cast time.\nShock Blast's effect radius is centered around the location of the missile as it collides.\nShock Blast will always damage the enemy it collided with, even if it is so large that it is outside the effect radius.\nThe non-enhanced Shock Blast detonation has a slightly smaller sight radius than the radius in which it deals damage.(note)",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "1450 / 2350",
      "spellEffects": "aoe",
      "spellshieldable": "true",
      "targeting": "Direction"
    },
    {
      "key": "W",
      "name": "Lightning Field",
      "affects": "Self, Enemies",
      "blurb": "Passive:  Jayce's basic attacks restore  mana.",
      "castTime": "none",
      "cooldown": "10",
      "cost": "40",
      "damageType": "Magic damage",
      "effectRadius": "350",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Jayce's basic attacks restore mana on-hit.</p>",
          "leveling": [
            {
              "attribute": "Mana Restored",
              "modifiers": [
                {
                  "values": "15 / 17 / 19 / 21 / 23 / 25"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jayce surrounds himself with an electric field for 4 seconds that deals magic damage every second to nearby enemies.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage Per Tick",
              "modifiers": [
                {
                  "values": "35 / 50 / 65 / 80 / 95 / 110"
                },
                {
                  "unit": "% AP",
                  "values": "25"
                }
              ]
            },
            {
              "attribute": "Total Magic Damage",
              "modifiers": [
                {
                  "values": "140 / 200 / 260 / 320 / 380 / 440"
                },
                {
                  "unit": "% AP",
                  "values": "100"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Jayce/ability-icon/w",
      "maxCharges": -1,
      "notes": "The  mana restore triggers on structures.",
      "resource": "Mana",
      "spellEffects": "aoedot",
      "targeting": "Auto"
    },
    {
      "key": "W",
      "name": "Hyper Charge",
      "affects": "Self",
      "blurb": "Active:  Jayce gains a massive burst of  bonus attack speed on his next few basic attacks, each one dealing modified physical damage.",
      "castTime": "none",
      "cooldown": "10",
      "cost": "40",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jayce empowers his next 3 basic attacks within 4 seconds to deal modified physical damage and gain 360% bonus attack speed.Hyper Charge's total damage is affected by critical strike modifiers.</p>",
          "leveling": [
            {
              "attribute": "Damage Modifier",
              "modifiers": [
                {
                  "unit": "% AD",
                  "values": "70 / 78 / 86 / 94 / 102 / 110"
                }
              ]
            }
          ]
        },
        {
          "description": "Hyper Charge resets Jayce's basic attack timer."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Jayce/ability-icon/w",
      "maxCharges": -1,
      "notes": "The last basic attack is checked on-hit rather than on-attack.\nIf  Runaan's Hurricane or  Guinsoo's Rageblade hit the target before the basic attack does, the basic attack damage will not be modified.",
      "resource": "Mana",
      "spellEffects": "Proc",
      "targeting": "Auto"
    },
    {
      "key": "E",
      "name": "Thundering Blow",
      "affects": "Enemies",
      "blurb": "Active:  Jayce swings his hammer at the target enemy, dealing magic damage based on the target's maximum health and  knocking them back.",
      "castTime": "0.25",
      "cooldown": "20 / 18 / 16 / 14 / 12 / 10",
      "cost": "55",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jayce roots the target enemy over the cast time, then swings his hammer at them to deal magic damage, capped against monsters, and knock them back 600 units.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "unit": "% of target's maximum health",
                  "values": "8 / 10.8 / 13.6 / 16.4 / 19.2 / 22"
                },
                {
                  "unit": "% bonus AD",
                  "values": "100"
                }
              ]
            },
            {
              "attribute": "Maximum Monster Damage",
              "modifiers": [
                {
                  "values": "200 / 300 / 400 / 500 / 600 / 700"
                }
              ]
            }
          ]
        },
        {
          "description": "Jayce is unable to cast To the Skies! or Shock Blast for 0.4 seconds after Thundering Blow's cast time."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Jayce/ability-icon/e",
      "maxCharges": -1,
      "notes": "If the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
      "resource": "Mana",
      "spellEffects": "single",
      "spellshieldable": "True",
      "targeting": "Unit",
      "targetRange": "240"
    },
    {
      "key": "E",
      "name": "Acceleration Gate",
      "width": "750",
      "affects": "Allies",
      "blurb": "Active:  Jayce deploys an energy gate centered at the target location for a few seconds. All allied champions that touch the gate will gain a burst of  movement speed.",
      "castTime": "none",
      "cooldown": "20 / 18 / 16 / 14 / 12 / 10",
      "cost": "55",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jayce deploys an energy gate centered at the target location, lasting for 4 seconds and granting sight of its surroundings. Jayce and all allied champions can move through it to gain bonus movement speed that decays over 3 seconds.</p>",
          "leveling": [
            {
              "attribute": "Bonus Movement Speed",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "35 / 40 / 45 / 50 / 55 / 60"
                }
              ]
            }
          ]
        },
        {
          "description": "The buff is continuously refreshed while inside the gate."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Jayce/ability-icon/e",
      "maxCharges": -1,
      "notes": "The Gate grants the bonus in an area  750 units wide and  100 units thick.",
      "resource": "Mana",
      "targeting": "Location",
      "targetRange": "650"
    },
    {
      "key": "R",
      "name": "Transform Mercury Cannon",
      "affects": "Self",
      "blurb": "Active:  Jayce transforms into  Cannon Stance, becoming  ranged with greater  attack range and gaining new abilities.",
      "castTime": "none",
      "cooldown": "6",
      "cost": "0",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jayce transforms into Cannon Stance, receiving access to its abilities, becoming ranged with 500 attack range, and empowering his next basic attack to reduce the target's armor and magic resistance by 10% / 15% / 20% / 25% (based on level) for 5 seconds.</p>"
        },
        {
          "description": "Jayce begins the game with Transform but cannot increase its rank. Instead, his basic abilities each have 6 ranks."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Jayce/ability-icon/r",
      "maxCharges": -1,
      "notes": "Transformations do not count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nThe resistance reduction does not apply to structures.\nBoth Transform on-hit effects have no set duration and will only be consumed when Jayce either lands a basic attack or switches stances.\nThe enhanced attack will not be consumed if it is parried ( dodge,  block,  blind, and  Riposte).\nThe empowered attack will not trigger against structures nor wards.",
      "targeting": "Auto"
    },
    {
      "key": "R",
      "name": "Transform Mercury Hammer",
      "affects": "Self",
      "blurb": "Active:  Jayce transforms into  Hammer Stance, becoming  melee and gaining new abilities.",
      "castTime": "none",
      "cooldown": "6",
      "cost": "0",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jayce transforms into Hammer Stance, receiving access to its abilities, becoming melee with 125 attack range, gaining 5 / 15 / 25 / 35 (based on level) (+ 7.5% bonus AD) bonus armor and bonus magic resistance, and empowering his next basic attack to deal 25 / 60 / 95 / 130 (based on level) (+ 30% bonus AD) bonus magic damage.</p>"
        },
        {
          "description": "Jayce begins the game with Transform but cannot increase its rank. Instead, his basic abilities each have 6 ranks."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Jayce/ability-icon/r",
      "maxCharges": -1,
      "notes": "Transformations do not count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nThe enhanced attack will not be consumed if it is parried ( dodge,  block,  blind, and  Riposte).\nThe Mercury Hammer's bonus damage can affect structures.\nBoth Transform on-hit effects have no set duration and will only be consumed when Jayce either lands a basic attack or switches stances.\nThe empowered attack will not trigger against wards.",
      "targeting": "Auto"
    }
  ],
  "adaptiveType": "Physical damage",
  "attackType": "Ranged",
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 1,
    "mobility": 2,
    "utility": 2,
    "abilityReliance": 45,
    "difficulty": 3
  },
  "faction": "piltover",
  "fullName": "Jayce Talis",
  "lore": "Jayce Talis is a brilliant inventor who, along with his friend Viktor, made the first great discoveries in the field of hextech. Celebrated across Piltover, he tries to live up to his reputation as \"the Man of Progress,\" but often struggles with the expectations placed upon him. Because of this, Jayce has begun to see the ways in which his invention has furthered the division between Piltover and Zaun—and armed with his hextech hammer, he stands ready to defend tomorrow.",
  "patchLastChanged": "25.14",
  "positions": [
    "Middle",
    "Top"
  ],
  "price": {
    "blueEssence": 2400,
    "rp": 880
  },
  "releaseDate": "2012-07-07",
  "resource": "Mana",
  "roles": [
    "Artillery",
    "Fighter",
    "Marksman"
  ],
  "stats": {
    "health": {
      "flat": 590,
      "perLevel": 109
    },
    "healthRegen": {
      "flat": 6,
      "perLevel": 0.6
    },
    "mana": {
      "flat": 375,
      "perLevel": 45
    },
    "manaRegen": {
      "flat": 6,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 22,
      "perLevel": 5
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 59,
      "perLevel": 4.25
    },
    "movespeed": {
      "flat": 335
    },
    "acquisitionRadius": {
      "flat": 200
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
      "flat": 0.658,
      "perLevel": 3
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
      "flat": -0.205
    },
    "attackRange": {
      "flat": 125
    }
  }
}
export default champion