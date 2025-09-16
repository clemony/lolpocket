// Updated Patch 25.17 - 09/14/2025 05:55:14 PM CDT

const champion: Champion = {
  "id": 37,
  "key": "Sona",
  "name": "Sona",
  "title": "Maven of the Strings",
  "fullName": "Sona Buvelle",
  "resource": "Mana",
  "attackType": "Ranged",
  "adaptiveType": "Magic damage",
  "stats": {
    "health": {
      "flat": 550,
      "perLevel": 91
    },
    "healthRegen": {
      "flat": 5.5,
      "perLevel": 0.55
    },
    "mana": {
      "flat": 340,
      "perLevel": 45
    },
    "manaRegen": {
      "flat": 11.5,
      "perLevel": 0.4
    },
    "armor": {
      "flat": 26,
      "perLevel": 4.2
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 49,
      "perLevel": 3
    },
    "movespeed": {
      "flat": 325
    },
    "acquisitionRadius": {
      "flat": 800
    },
    "selectionRadius": {
      "flat": 110
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
      "flat": 0.644,
      "perLevel": 2.3
    },
    "attackSpeedRatio": {
      "flat": 0.644
    },
    "attackCastTime": {
      "flat": 0.3
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackDelayOffset": {
      "flat": -0.128
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
    "utility": 2,
    "abilityReliance": 90,
    "difficulty": 1
  },
  "abilities": [
    {
      "name": "Power Chord",
      "key": "P",
      "icon": "https://cdn.communitydragon.org/latest/champion/Sona/ability-icon/p",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Accelerando:</span> Sona generates a stack of Accelerando each time she hits an enemy champion with Hymn of Valor and each time she mitigates sufficient damage or heals damaged allies with Aria of Perseverance, stacking up to 120 times. At maximum stacks, she instead reduces the current cooldown of Crescendo by 1.5 seconds each time.</p>\n<p class=\"ability-effect\"><span class=\"ability-header\"> Accelerando:</span> For each stack, Sona gains 0.5 basic ability haste, up to 60 at maximum stacks.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Melody:</span> Whenever Sona casts a basic ability, her other basic abilities incur a 0.5-second global cooldown and she generates a unique aura for 3 seconds that empowers herself and nearby allied champions.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Power Chord:</span> Sona's basic abilities generate a stack of Power Chord, stacking up to 3 times. At 3 stacks, her next basic attack is empowered to consume them all to have an uncancellable windup, deal 20 - 240 (based on level) (+ 20% AP) bonus magic damage, and apply an additional effect based on the last basic ability she cast.</p>\n<p class=\"ability-effect\"><span class=\"ability-header\"> Hymn of Valor - Staccato:</span> Bonus damage is modified to 30 - 360 (based on level) (+ 30% AP).</p>\n<p class=\"ability-effect\"><span class=\"ability-header\"> Aria of Perseverance - Diminuendo:</span> Reduces the target's size by 8% and damage dealt by 25% (+ 4% per 100 AP) for 3 seconds.</p>\n<p class=\"ability-effect\"><span class=\"ability-header\"> Song of Celerity - Tempo:</span> Slows the target by 50% (+ 4% per 100 AP) for 2 seconds, capped at 99%.</p>"
        },
        {
          "description": "Gaining Power Chord's empowered attack resets Sona's basic attack timer."
        }
      ],
      "targeting": "Passive",
      "affects": "Self",
      "spellshieldable": "True",
      "damageType": "Magic damage",
      "spellEffects": "proc",
      "notes": "Power Chord stacks are represented by a counter under Sona's health bar, visible to the player only. It will light up when the empowered effect is available.\nWhen Power Chord is ready, Sona gains a ring around her. This ring will have a different color depending on the last ability used ( blue,  green or  purple).\nThe effect does not change if abilities are used while the projectile is in motion.\nThe triggering attack will apply other  on-hit effects and can  critically strike as normal.\nSona retains Power Chord's stacks when entering  resurrection.\nThe empowered attack will trigger but not be consumed nor apply its effects against  wards and jungle plants.",
      "blurb": "Innate - Accelerando:  Sona gains a permanent  stack of Accelerando each time she hits an enemy champion with  Hymn of Valor and each time she mitigates sufficient damage or heals damaged allies with  Aria of Perseverance. If she has max stacks, she instead  reduces the cooldown of  Crescendo each time."
    },
    {
      "name": "Hymn of Valor",
      "key": "Q",
      "icon": "https://cdn.communitydragon.org/latest/champion/Sona/ability-icon/q",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Sona sends out bolts of sound to the two nearest visible enemies, prioritizing champions. Each bolt deals magic damage and grants sight of the area around the target for 1 second.Sona gains a stack of Accelerando for each bolt that hits an enemy champion.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "50 / 85 / 120 / 155 / 190"
                },
                {
                  "values": "40",
                  "unit": "% AP"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Melody Bonus:</span> Sona and tagged allied champions deal bonus magic damage on their next basic attack within 5 seconds.</p>",
          "leveling": [
            {
              "attribute": "Bonus Magic Damage",
              "modifiers": [
                {
                  "values": "10 / 15 / 20 / 25 / 30"
                },
                {
                  "values": "10",
                  "unit": "% of Sona's AP"
                }
              ]
            }
          ]
        }
      ],
      "cost": "50 / 55 / 60 / 65 / 70",
      "cooldown": "8",
      "targeting": "Auto",
      "affects": "Enemies",
      "spellshieldable": "True",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "aoe",
      "projectile": "TRUE",
      "notes": "Sight of the targets' area is granted on-cast.\nThe Melody empowerment given to tagged allies respects  enchantment redirection.\nThe empowered attack will trigger but not be consumed against wards.",
      "blurb": "Active:  Sona projects sound bolts to the two nearest enemies that each deal magic damage, and she gains a stack of  Accelerando for each bolt that damages an enemy  champion.",
      "speed": "1300",
      "castTime": "none",
      "effectRadius": "825 /  400",
      "maxCharges": -1
    },
    {
      "name": "Aria of Perseverance",
      "key": "W",
      "icon": "https://cdn.communitydragon.org/latest/champion/Sona/ability-icon/w",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Sona heals herself and sends out a tone to heal the most wounded allied champion nearby.</p>",
          "leveling": [
            {
              "attribute": "Heal",
              "modifiers": [
                {
                  "values": "30 / 45 / 60 / 75 / 90"
                },
                {
                  "values": "30",
                  "unit": "% AP"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Melody Bonus:</span> Sona and tagged allied champions are granted a shield for 1.5 seconds.</p>",
          "leveling": [
            {
              "attribute": "Shield Strength",
              "modifiers": [
                {
                  "values": "25 / 45 / 65 / 85 / 105"
                },
                {
                  "values": "25",
                  "unit": "% of Sona's AP"
                }
              ]
            }
          ]
        },
        {
          "description": "Sona gains a stack of Accelerando whenever she heals a wounded ally or shields a minimum amount of damage for an ally with Aria of Perseverance.",
          "leveling": [
            {
              "attribute": "Minimum Damage Mitigated",
              "modifiers": [
                {
                  "values": "25 / 45 / 65 / 85 / 105"
                }
              ]
            }
          ]
        }
      ],
      "cost": "80 / 85 / 90 / 95 / 100",
      "cooldown": "10",
      "targeting": "Auto",
      "affects": "Self, Allies",
      "resource": "Mana",
      "projectile": "TRUE",
      "notes": "If no one is injured, Aria of Perseverance will target the closest allied champion.\nThe projectile of Aria of Perseverance will follow an ally in stealth but will not reveal them.",
      "blurb": "Active:  Sona  heals herself and projects a sound bolt that heals the most wounded allied champion nearby.",
      "speed": "1300",
      "castTime": "none",
      "effectRadius": "1000 /  400",
      "maxCharges": -1
    },
    {
      "name": "Song of Celerity",
      "key": "E",
      "icon": "https://cdn.communitydragon.org/latest/champion/Sona/ability-icon/e",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Sona gains 20% (+ 2% per 100 AP) bonus movement speed for 7 seconds. If she takes damage during this time, the duration ends prematurely once or if 3 seconds have elapsed.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Melody Bonus:</span> Tagged allied champions gain bonus movement speed for 3 seconds.</p>",
          "leveling": [
            {
              "attribute": "Bonus Movement Speed",
              "modifiers": [
                {
                  "values": "10 / 12 / 14 / 16 / 18",
                  "unit": "%"
                },
                {
                  "values": "2",
                  "unit": "% per 100 of Sona's AP"
                }
              ]
            }
          ]
        }
      ],
      "cost": "65",
      "cooldown": "14",
      "targeting": "Auto",
      "affects": "Self, Allies",
      "resource": "Mana",
      "notes": "To achieve a 99%  slow with the empowered attack via  Power Chord, it would require at least 1475 AP.",
      "blurb": "Active:  Sona gains  bonus movement speed for a short time, which is extended to a few seconds if she does not take damage during this time.",
      "castTime": "none",
      "effectRadius": "400",
      "maxCharges": -1
    },
    {
      "name": "Crescendo",
      "key": "R",
      "icon": "https://cdn.communitydragon.org/latest/champion/Sona/ability-icon/r",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Sona strikes an irresistible chord in the target direction that deals magic damage to enemies hit and stuns them for 1.5 seconds.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "150 / 250 / 350"
                },
                {
                  "values": "50",
                  "unit": "% AP"
                }
              ]
            }
          ]
        }
      ],
      "cost": "100",
      "cooldown": "140 / 120 / 100",
      "targeting": "Direction",
      "affects": "Enemies",
      "spellshieldable": "True",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "spellaoe",
      "projectile": "TRUE",
      "notes": "This ability will cast from wherever the caster is at the start of the cast time.\nWhile stunned by Crescendo, enemies will perform their Dance emote.",
      "blurb": "Active:  Sona strikes an irresistible chord in the target direction that deals magic damage to enemies hit and briefly  stuns them.",
      "speed": "2400",
      "width": "280",
      "castTime": "0.25",
      "maxCharges": -1
    }
  ],
  "lore": "Sona is Demacia's foremost virtuoso of the stringed etwahl, speaking only through her graceful chords and vibrant arias. This genteel manner has endeared her to the highborn, though others suspect her spellbinding melodies to actually emanate magic—a Demacian taboo. Silent to outsiders but somehow understood by close companions, Sona plucks her harmonies not only to soothe injured allies, but also to strike down unsuspecting enemies.",
  "faction": "demacia",
  "releaseDate": "2010-09-21",
  "patchLastChanged": "25.08",
  "price": {
    "blueEssence": 225,
    "rp": 260
  }
}
export default champion