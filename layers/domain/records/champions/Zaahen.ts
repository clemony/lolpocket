// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const champion: Champion = {
  "id": 904,
  "key": "Zaahen",
  "name": "Zaahen",
  "title": "the Unsundered",
  "abilities": [
    {
      "key": "P",
      "name": "Cultivation of War",
      "affects": "Self",
      "blurb": "Innate:  Zaahen's  basic attacks and  abilities against enemy  champions grant him  stacks of Determination, refreshing on subsequent damage to champions and stacking up to 12 times.",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Zaahen generates a stack of Determination for each enemy champion damaged by his basic attacks and abilities, lasting for 5 seconds, refreshing on subsequent triggers, and stacking up to 12 times. After the duration, the stacks expire by 1 / 2 / 3 / 4 / 5 (based on seconds elapsed) every 0.5 seconds.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Determination:</span> For each stack, Zaahen gains bonus attack damage equal to 1.5% - 2.8% (based on level) AD. At maximum stacks, this is doubled to 36% - 67.2% (based on level) AD.Periodically, if Zaahen would take lethal damage while at maximum stacks of Determination, he refreshes its duration and enters resurrection for 4 seconds: becoming invulnerable, untargetable, and unable to act. Additionally, he restores[ 30% - 75% (based on level) of his maximum health ][ 0.94% - 2.34% (based on level) of his maximum health every 0.125 seconds ]over the duration. Afterwards, he revives himself and refreshes the duration of Determination.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Zaahen/ability-icon/p",
      "notes": "Determination stacks are generated per damage instance per champion damaged with Zaahen's attacks and abilities.\n The Darkin Glaive's initial cast empowered attack can generate a stack for each strike.\nBoth passes of  Dreaded Return can generate a stack.\nBoth  Aureate Rush's swing and  Grim Deliverance's shockwave generate a stack for every champion hit.\nDuring the resurrection's health restoration, Zaahen's  current health is set to a percentage of his maximum health equal to the cumulative amount of health restored on that restoration tick, for every single tick.\nIn other words, his current health will always be overridden by the percentage of health he is supposed to have restored on every restoration tick, to prevent him from healing or restoring health by other sources.\nUpon the resurrection being triggered, all summoner spells that are not already on cooldown are placed on a 5-second  cooldown.\nThe  untargetability from the resurrection does not  destroy in-flight  projectiles.\nCultivation of War's resurrection takes priority over  Guardian Angel's Rebirth, but grants priority to  Zilean's  Chronoshift.\nThe resurrection does not activate if Zaahen is killed by the  Nexus Obelisk.\n Spell shield will not prevent stacks from being generated, even if no damage is dealt.(bug)\nDetermination stacks are displayed in a secondary resource bar under Zaahen's health bar.\nThe bar is white at <4 stacks, yellow at ≥4 stacks and orange at ≥9 stacks.\nAt maximum stacks, if the revive is available, the bar will be red and will remain red after Zaahen revives until he loses stacks again.(note)\nThe following table refers for interactions while Zaahen is locked out during the resurrection:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash  Mark  Dash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
      "spellshieldable": "false",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "The Darkin Glaive",
      "affects": "Self, Enemies",
      "blurb": "Active:  Zaahen's next  basic attack strikes twice, dealing modified physical damage, applying  on-hit effects and  healing him based on his maximum health.",
      "castTime": "none",
      "cooldown": "9 / 8 / 7 / 6 / 5",
      "cost": "25",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Zaahen empowers his next basic attack within 5 seconds to have an uncancelable windup and gain 25 bonus range. On-attack, he strikes the target twice and heals himself. The strikes deal modified physical damage and the heal is reduced to 50% against non-champions.Each strike applies on-hit effects and can critically strike for[ (37.5% + 20%) ][ 50% bonus critical damage ]AD bonus physical damage.</p>",
          "leveling": [
            {
              "attribute": "Total Physical Damage",
              "modifiers": [
                {
                  "values": "15 / 30 / 45 / 60 / 75"
                },
                {
                  "unit": "% AD",
                  "values": "100"
                },
                {
                  "tooltip": "Scaling per rank:\n20 / 30 / 40 / 50 / 60% bonus AD",
                  "unit": "% bonus AD",
                  "values": "20 - 60"
                }
              ]
            },
            {
              "attribute": "Physical Damage per Hit",
              "modifiers": [
                {
                  "values": "7.5 / 15 / 22.5 / 30 / 37.5"
                },
                {
                  "unit": "% AD",
                  "values": "50"
                },
                {
                  "tooltip": "Scaling per rank:\n10 / 15 / 20 / 25 / 30% bonus AD",
                  "unit": "% bonus AD",
                  "values": "10 - 30"
                }
              ]
            },
            {
              "attribute": "Champion Healing",
              "modifiers": [
                {
                  "unit": "% of his maximum health",
                  "values": "5 / 6 / 7 / 8 / 9"
                }
              ]
            },
            {
              "attribute": "Non-Champion Healing",
              "modifiers": [
                {
                  "unit": "% of his maximum health",
                  "values": "2.5 / 3 / 3.5 / 4 / 4.5"
                }
              ]
            }
          ]
        },
        {
          "description": "After 1.5 seconds of using the empowered attack, The Darkin Glaive can be recast within the next 5 seconds at no additional cost, modifying it with a new effect."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Zaahen empowers his next basic attack within 5 seconds to have an uncancelable windup, gain 25 bonus range, deal bonus physical damage and knock up the target for 0.75 seconds.</p>",
          "leveling": [
            {
              "attribute": "Bonus Physical Damage",
              "modifiers": [
                {
                  "values": "25 / 50 / 75 / 100 / 125"
                },
                {
                  "tooltip": "Scaling per rank:\n20 / 30 / 40 / 50 / 60% AD",
                  "unit": "% AD",
                  "values": "20 - 60"
                }
              ]
            }
          ]
        },
        {
          "description": "The Darkin Glaive deals 150% damage against monsters."
        },
        {
          "description": "Both casts of The Darkin Glaive reset Zaahen's basic attack timer."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Zaahen/ability-icon/q",
      "notes": "Spell shield will only block the knock up from the recast.\nSince the healing is granted on-attack, parrying effects will not prevent Zaahen from gaining the heal. Otherwise, parrying effects will negate all other aspects of The Darkin Glaive's attacks while consuming them.\nThe first cast's double-strike attack:\nRolls  critical strike once for both strikes.\nDoes not cause Zaahen to attack twice.\nEffects that trigger on-attack or interact with the attack windup will only trigger once and thus do not interact with The Darkin Glaive. (e.g.  Lethal Tempo,  Hail of Blades).\nWill consume  Bone Plating once.(bug)\nIf the first strike triggers the rune, the second one will get blocked by it.\nIf the first strike is blocked by the rune, the second one will not.\nPENDING FOR TEST: Is the 1.5-second delay is \"fuzzy\" (may take up to another 0.25 seconds) so it syncs up perfectly with  Sheen like  Camille's  Precision Protocol?",
      "resource": "Mana",
      "spellEffects": "spell",
      "spellshieldable": "special",
      "targeting": "Auto"
    },
    {
      "key": "W",
      "name": "Dreaded Return",
      "width": "70",
      "affects": "Enemies",
      "blurb": "Active:  Zaahen extends his glaive in the target direction, dealing physical damage to enemies hit. Upon reaching maximum range, all enemies in the area are dealt physical damage,  stunned briefly, and  pulled toward Zaahen.",
      "castTime": "0.5",
      "cooldown": "16 / 15 / 14 / 13 / 12",
      "cost": "50",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Zaahen extends his glaive in the target direction, dealing physical damage to enemies hit. Upon reaching maximum range, all enemies hit are dealt the same physical damage, stunned for 0.25 seconds, and pulled 225 units toward Zaahen.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "40 / 60 / 80 / 100 / 120"
                },
                {
                  "unit": "% bonus AD",
                  "values": "50"
                }
              ]
            },
            {
              "attribute": "Total Physical Damage",
              "modifiers": [
                {
                  "values": "80 / 120 / 160 / 200 / 240"
                },
                {
                  "unit": "% bonus AD",
                  "values": "100"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Zaahen/ability-icon/w",
      "notes": "Spell shield will block both passes, as well as the second one individually if circumstances permit.\n Intercepting the initial projectile will instantly trigger Dreaded Return's pull.\n Displacement immunity will not resist the application of the  stun.\nThe projectile is shown on the minimap and Dreaded Return can be cast targeting the minimap.\nThis ability will cast from wherever the caster is at the end of the cast time.\nDreaded Return's end point will not move in relation to Zaahen if he moves during the cast time.",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "2900 / 900",
      "spellEffects": "spellaoe",
      "spellshieldable": "true",
      "targeting": "Direction",
      "targetRange": "850"
    },
    {
      "key": "E",
      "name": "Aureate Rush",
      "affects": "Self, Enemies",
      "blurb": "Active:  Zaahen  dashes to the target location. Upon arrival, he flourishes his glaive to deal physical damage to nearby enemies.",
      "castTime": "none",
      "cooldown": "10 / 9.5 / 9 / 8.5 / 8",
      "cost": "40",
      "damageType": "Other damage",
      "effectRadius": "200 / 375",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Zaahen dashes to the target location. Upon arrival, he flourishes his glaive to deal physical damage to nearby enemies.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "40 / 60 / 80 / 100 / 120"
                },
                {
                  "unit": "% bonus AD",
                  "values": "50"
                }
              ]
            }
          ]
        },
        {
          "description": "Enemies hit by the outer edge are dealt increased physical damage and bonus magic damage, with the latter capped at 400 against monsters.",
          "leveling": [
            {
              "attribute": "Increased Physical Damage",
              "modifiers": [
                {
                  "values": "60 / 90 / 120 / 150 / 180"
                },
                {
                  "unit": "% bonus AD",
                  "values": "100"
                }
              ]
            },
            {
              "attribute": "Bonus Magic Damage",
              "modifiers": [
                {
                  "unit": "% of the target's maximum health",
                  "values": "4 / 5 / 6 / 7 / 8"
                }
              ]
            }
          ]
        },
        {
          "description": "Aureate Rush deals 50 bonus physical damage against monsters."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Zaahen/ability-icon/e",
      "notes": "The dash does not have a minimum cast distance.\nThe following table refers for interactions while Zaahen is dashing:\nIf the dash is interrupted, Zaahen will not proceed to deal damage.\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n The Darkin Glaive and its  recast are usable.  Dreaded Return and  Grim Deliverance are disabled.\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nAll the other item-actives are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Hextech Rocketbelt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Teleport  Recall  Mark  Dash\n\n\nDisabled\n\n Hexflash\n\n\nInterrupted by\n\n Flash\n\n\nInterrupted by\n\nDeath",
      "resource": "Mana",
      "speed": "900",
      "spellEffects": "spellaoe",
      "spellshieldable": "true",
      "targeting": "Location",
      "targetRange": "350"
    },
    {
      "key": "R",
      "name": "Grim Deliverance",
      "affects": "Self, Enemies",
      "blurb": "Passive:  Zaahen gains  armor penetration.",
      "castTime": "0.5",
      "cooldown": "110 / 95 / 80",
      "cost": "100",
      "damageType": "Physical damage",
      "effectRadius": "550",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Zaahen gains armor penetration.</p>",
          "leveling": [
            {
              "attribute": "Armor Penetration",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "10 / 20 / 30"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Zaahen launches into the air to the target location. He then slams his glaive down after a 0.6-second delay, unleashing a shockwave that deals physical damage to nearby enemies and heals himself for each champion hit.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "250 / 400 / 550"
                },
                {
                  "unit": "% bonus AD",
                  "values": "200"
                }
              ]
            },
            {
              "attribute": "Healing per Champion hit",
              "modifiers": [
                {
                  "values": "82.5 / 132 / 181.5"
                },
                {
                  "unit": "% bonus AD",
                  "values": "66"
                }
              ]
            }
          ]
        },
        {
          "description": "Zaahen is unable to act and gains crowd control immunity and 50% damage reduction from the start of the cast time. He retains these effects until 0.9 seconds after the dash."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Zaahen/ability-icon/r",
      "notes": "The healing per champion is equal to 33% of the damage numbers, not the damage dealt.(note)\n Spell shield will block the damage but not the heal.(bug)\nThe damage is dealt before the lockout ends.(note)\nIf Zaahen  blinks or is  knock down while ascending into the air, or if the nexus explodes during this time, Grim Deliverance's effects are canceled; he will not slam the ground and will not update his animations correctly, additionally, he will be able to move during the lockout.(bug)\nThis also happens if the nexus explodes\nIf Zaahen moves during the 0.6-second delay, he will slam down at his new location despite the indicator not moving.(bug)\nThe following table refers for interactions while Zaahen is in cast time and during the lockout:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
      "resource": "Mana",
      "speed": "2800",
      "spellEffects": "spellaoe",
      "spellshieldable": "special",
      "targeting": "Location",
      "targetRange": "10 / 600"
    }
  ],
  "adaptiveType": "Physical damage",
  "attackType": "Melee",
  "attributeRatings": {
    "damage": 2,
    "toughness": 2,
    "control": 2,
    "mobility": 2,
    "utility": 1,
    "abilityReliance": 30,
    "difficulty": 1
  },
  "lore": "A fallen god wielding both divine and profane power, Zaahen hunts his fellow Darkin while defying the corruption that threatens to consume him. Once willingly sealed within his glaive to stave off madness, he now walks free, noble in heart and vicious in purpose. Zaahen fights an eternal war within—but so long as he endures, he will rise above all who seek to bring Runeterra to ruin.",
  "patchLastChanged": "25.23",
  "positions": [
    "Top"
  ],
  "price": {
    "blueEssence": 3150,
    "rp": 975
  },
  "releaseDate": "2025-11-19",
  "resource": "Mana",
  "roles": [
    "Assassin",
    "Fighter",
    "Skirmisher"
  ],
  "stats": {
    "health": {
      "flat": 640,
      "perLevel": 114
    },
    "healthRegen": {
      "flat": 7.5,
      "perLevel": 0.8
    },
    "mana": {
      "flat": 350,
      "perLevel": 55
    },
    "manaRegen": {
      "flat": 8.15,
      "perLevel": 0.75
    },
    "armor": {
      "flat": 36,
      "perLevel": 5
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 63,
      "perLevel": 4
    },
    "movespeed": {
      "flat": 345
    },
    "acquisitionRadius": {
      "flat": 600
    },
    "selectionRadius": {
      "flat": 100
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
      "flat": 0.625
    },
    "attackCastTime": {
      "flat": 0.25
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackDelayOffset": {
      "flat": 0
    },
    "attackRange": {
      "flat": 175
    }
  }
}
export default champion