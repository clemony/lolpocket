// Updated Patch 25.17 - 09/18/2025 02:20:02 AM CDT

const champion: Champion = {
  "id": 63,
  "key": "Brand",
  "name": "Brand",
  "title": "the Burning Vengeance",
  "abilities": [
    {
      "key": "P",
      "name": "Blaze",
      "affects": "Enemies",
      "blurb": "Innate:  Brand's abilities apply a  stack of Ablaze to enemies hit. Subsequent abilities used against a target with Ablaze are empowered. Killing an enemy afflicted with Ablaze or with an ability restores  mana.",
      "damageType": "Magic damage",
      "effectRadius": "475",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Brand's abilities apply a stack of Ablaze to enemies hit for 4 seconds, stacking up to 3 times and refreshing the duration of all stacks with each application. Subsequent abilities used against a target with Ablaze are empowered. Killing an enemy afflicted with Ablaze or any enemy with an ability restores 20 - 40 (based on level) mana.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Ablaze:</span> While afflicted with Ablaze, the target is dealt magic damage equal to[ 2% of their maximum health over 4 seconds. ][ 0.167% of their maximum health every 0.25 seconds over 4 seconds. ]Each stack of Ablaze deals damage to the target individually and applies their damage ticks dependent on the time they were applied, even if the duration of all the stacks are refreshed. Ablaze deals 240% damage per tick to monsters; this damage is capped at[ 10 / 20 / 30 (based on Ablaze stacks) per tick against non-epic monsters and 20 / 40 / 60 (based on Ablaze stacks) per tick against epic monsters. ][ a total of 160 / 320 / 480 (based on Ablaze stacks) against non-epic monsters and 320 / 640 / 960 (based on Ablaze stacks) against epic monsters. ]</p>"
        },
        {
          "description": "Upon applying 3 stacks of Ablaze to a large monster or enemy champion, the fire becomes unstable, causing it form a fiery ring around the target that grants sight within its radius and, after 2 seconds, consumes their stacks to explode. All enemies within the detonation are applied a stack of Ablaze and dealt magic damage equal to 8% - 12% (based on level) (+ 2% per 100 AP) of their maximum health, capped at 270 / 355 / 440 / 525 (based on level) against monsters."
        },
        {
          "description": "Brand cannot stack Ablaze more than once on enemies that have had a ring explode from them in the last 4 seconds."
        },
        {
          "description": "The ring will form even if the target dies to the ability applying the third stack, and will still trigger the explosion if the target dies before it."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Brand/ability-icon/p",
      "notes": "Ablaze is a  debuff that persists through  death.\nAblaze's damage cap against a  monster is applied after the increased monster damage.\nThe explosion is not considered a  tether effect and will not affect  untargetable targets, even if the explosion originated from them.\nGiven the behavior of the stacking mechanic, the damage over time will deal varying amounts of damage based on the time the stacks were applied:\nAt sub-optimal applied times, 2 stacks will deal a minimum of 6% maximum health damage over 4 seconds, but will deal 7% maximum health at optimal applied times.\nAgainst small-medium units 3 stacks will deal a minimum of 9% maximum health at sub-optimal times, but 11% maximum health at optimal times. If these stacks are further refreshed at optimal times they can deal up to 12% maximum health over 4 seconds.\nThe burn is  persistent damage and the explosion is  area damage.",
      "spellEffects": "Special",
      "spellshieldable": "True",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Sear",
      "width": "120",
      "affects": "Enemies",
      "blurb": "Active:  Brand launches a fireball in the target direction that deals magic damage to the first enemy hit.",
      "castTime": "0.25",
      "cooldown": "8 / 7.5 / 7 / 6.5 / 6",
      "cost": "70",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Brand launches a fireball in the target direction that deals magic damage to the first enemy hit.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "70 / 100 / 130 / 160 / 190"
                },
                {
                  "unit": "% AP",
                  "values": "65"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Ablaze Bonus:</span> The target is stunned for 1.5 seconds.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Brand/ability-icon/q",
      "maxCharges": -1,
      "notes": "With an ability haste value of 81 / 70 / 58 / 47 / 36 to 162 / 145 / 129 / 113 / 96 based on the ranges of applications from the target, it is possible to apply the stun without having to use other abilities. Sear will apply before the duration of the pre-applied  Blaze times out.\nThe needed ability haste value if you remained at the same range from the target for both casts would be 114 / 100 / 87 / 74 / 60.\nThis ability will cast from wherever the caster is at the end of the cast time.",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "1600",
      "spellEffects": "spell",
      "spellshieldable": "True",
      "targeting": "Direction"
    },
    {
      "key": "W",
      "name": "Pillar of Flame",
      "affects": "Enemies",
      "blurb": "Active: After a brief delay,  Brand erupts a pillar of flame at the target location that deals magic damage to enemies hit.",
      "castTime": "0.25",
      "cooldown": "10 / 9.5 / 9 / 8.5 / 8",
      "cost": "60 / 70 / 80 / 90 / 100",
      "damageType": "Magic damage",
      "effectRadius": "260",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> After a 0.627 seconds delay, Brand erupts a pillar of flame at the target location that deals magic damage to enemies hit.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "75 / 120 / 165 / 210 / 255"
                },
                {
                  "unit": "% AP",
                  "values": "60"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Ablaze Bonus:</span> The target takes 25% increased damage.</p>",
          "leveling": [
            {
              "attribute": "Increased Damage",
              "modifiers": [
                {
                  "values": "93.75 / 150 / 206.25 / 262.5 / 318.75"
                },
                {
                  "unit": "% AP",
                  "values": "75"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Brand/ability-icon/w",
      "maxCharges": -1,
      "notes": "The delay before the eruption does not include the cast time. The delay would be a total of 0.891 seconds if it included the cast time.",
      "resource": "Mana",
      "spellEffects": "spellaoe",
      "spellshieldable": "True",
      "targeting": "Location",
      "targetRange": "900"
    },
    {
      "key": "E",
      "name": "Conflagration",
      "affects": "Enemies",
      "blurb": "Active:  Brand sets the target enemy aflame, which creates a blast that deals magic damage to them and nearby enemies.",
      "castTime": "0.25",
      "cooldown": "13 / 12 / 11 / 10 / 9",
      "cost": "70 / 75 / 80 / 85 / 90",
      "damageType": "Magic damage",
      "effectRadius": "300 / 600",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Brand sets the target enemy aflame, which creates a blast that deals magic damage to them and causes the flame to spread from the target to nearby enemies, dealing them the same damage.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "55 / 80 / 105 / 130 / 155"
                },
                {
                  "unit": "% AP",
                  "values": "60"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Ablaze Bonus:</span> Conflagration's spread range is doubled.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Brand/ability-icon/e",
      "maxCharges": -1,
      "notes": "The flame spreads to enemies near the primary target at the time of cast.\nEnemies that move out of range after the fact will still be hit, as the flame is spread as homing missiles to each of its targets.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
      "projectile": "FALSE",
      "resource": "Mana",
      "speed": "900",
      "spellEffects": "aoe",
      "spellshieldable": "True",
      "targeting": "Unit",
      "targetRange": "675"
    },
    {
      "key": "R",
      "name": "Pyroclasm",
      "affects": "Enemies",
      "blurb": "Active:  Brand unleashes a devastating torrent of fire that bounces to nearby enemies, dealing magic damage each time it bounces.",
      "castTime": "0.25",
      "cooldown": "100 / 90 / 80",
      "cost": "100",
      "damageType": "Magic damage",
      "effectRadius": "600",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Brand launches a fireball at the target enemy that bounces between nearby enemies and Brand up to four times, dealing magic damage to enemies each time and having a 0.15-second delay between bounces.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "100 / 175 / 250"
                },
                {
                  "unit": "% AP",
                  "values": "25"
                }
              ]
            },
            {
              "attribute": "Total Single-Target Damage",
              "modifiers": [
                {
                  "values": "300 / 525 / 750"
                },
                {
                  "unit": "% AP",
                  "values": "75"
                }
              ]
            }
          ]
        },
        {
          "description": "Pyroclasm prioritizes Ablaze enemy champions, then other enemy champions, then any valid bounce target, then Brand."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Ablaze Bonus:</span> The target is slowed for 0.25 seconds. This can affect the same enemy more than once.</p>",
          "leveling": [
            {
              "attribute": "Slow",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "30 / 45 / 60"
                }
              ]
            }
          ]
        },
        {
          "description": "The target does not have to be visible for the fireball to bounce to them."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Brand/ability-icon/r",
      "maxCharges": -1,
      "notes": "The fireball acquires a new valid, bounce target once the bounce delay finishes.\nIf the target the fireball is in flight towards becomes  untargetable, the fireball missile will be destroyed but a new missile will be formed at the target's location that is able to bounce for up to the remaining bounces of the previous fireball.\nThe new missile is only formed if there is a valid target to bounce to at the time of the previous missile being destroyed.\nThis does not apply if the target is Brand, as the missile would not be destroyed and would bounce from him even if he is untargetable.\nThe fireball will still bounce from the target even if they were dead upon arrival.\nThe fireball may only bounce to valid targets, including Brand.\nIf the initial cast target uses  spell shield, Pyroclasm will not bounce. If the bounce is blocked by an enemy's spell shield it will not deal any damage, but it will keep on bouncing.\nPyroclasm's damage against enemy champions will not aggro nearby enemy minions.(bug)\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "750 - 3000",
      "spellEffects": "spellaoe",
      "spellshieldable": "special",
      "targeting": "Unit",
      "targetRange": "750"
    }
  ],
  "adaptiveType": "Magic damage",
  "attackType": "Ranged",
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 2,
    "mobility": 1,
    "utility": 1,
    "abilityReliance": 100,
    "difficulty": 2
  },
  "faction": "unaffiliated",
  "fullName": "Kegan Rodhe",
  "lore": "Once a tribesman of the icy Freljord named Kegan Rodhe, the creature known as Brand is a lesson in the temptation of greater power. Seeking one of the legendary World Runes, Kegan betrayed his companions and seized it for himself—and, in an instant, the man was no more. His soul burned away, his body a vessel of living flame, Brand now roams Valoran in search of other Runes, swearing revenge for wrongs he could never possibly have suffered in a dozen mortal lifetimes.",
  "patchLastChanged": "25.12",
  "positions": [
    "Jungle",
    "Middle",
    "Support"
  ],
  "price": {
    "blueEssence": 225,
    "rp": 260
  },
  "releaseDate": "2011-04-12",
  "resource": "Mana",
  "roles": [
    "Burst",
    "Mage",
    "Support"
  ],
  "stats": {
    "health": {
      "flat": 570,
      "perLevel": 105
    },
    "healthRegen": {
      "flat": 5.5,
      "perLevel": 0.55
    },
    "mana": {
      "flat": 469,
      "perLevel": 21
    },
    "manaRegen": {
      "flat": 9,
      "perLevel": 0.6
    },
    "armor": {
      "flat": 27,
      "perLevel": 4.2
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 57,
      "perLevel": 3
    },
    "movespeed": {
      "flat": 340
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
      "flat": 0.681,
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
  }
}
export default champion