// Updated Patch 25.17 - 09/18/2025 02:20:04 AM CDT

const champion: Champion = {
  "id": 875,
  "key": "Sett",
  "name": "Sett",
  "title": "the Boss",
  "abilities": [
    {
      "key": "P",
      "name": "Pit Grit",
      "affects": "Self, Enemies",
      "blurb": "Innate - Heart of the Half-Beast:  Sett  regenerates additional health based on his missing health.",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Heart of the Half-Beast:</span> Sett regenerates[ an additional 0.075 / 0.25 / 0.5 / 1 (based on level) health every 0.5 seconds per 5% of his missing health. ][ up-to an additional 1.425 / 4.75 / 9.5 / 19 (based on level) health per 0.5 seconds, with the maximum reached at the threshold of 95% missing health. ]</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Heavy Hands:</span> Sett's basic attacks alternate between his Left Punch and a Right Punch on-attack. Sett begins attacking with his Left Punch, and will reset back to it after 2 seconds of not performing a Right Punch.</p>"
        },
        {
          "description": "Sett's Right Punch is empowered to gain 50 bonus range (unless Knuckle Down is active), attack at 8 times the Left Punch's attack speed, and deal 5 - 90 (based on level) (+ 55% bonus AD) bonus physical damage."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Sett/ability-icon/p",
      "notes": "Alternatively, Pit Grit grants Sett 0.75 / 2.5 / 5 / 10 (based on level) bonus health regeneration for every 5% missing health, up to 14.25 / 47.5 / 95 / 190 (based on level) at the cap of 95% missing health.\nThe Right Punch does not grant  bonus attack speed, rather its windup is sped up and fixed at [ 12.5% of a Left Punch's windup time. ][ 800% of a Left Punch's windup speed. ]\nThe windup is still affected by  cripples and attack speed buffs that were not already active for the previous Left Punch's.\nThe bonus physical damage from the Right Punch benefits from  life steal.",
      "spellEffects": "Proc",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Knuckle Down",
      "affects": "Self, Enemies",
      "blurb": "Active:  Sett empowers his next two basic attacks within a few seconds to gain  bonus range and deal bonus physical damage based on the target's maximum health.",
      "castTime": "none",
      "cooldown": "9 / 8 / 7 / 6 / 5",
      "cost": "0",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Sett empowers his next two basic attacks within 5 seconds to gain 50 bonus range and deal bonus physical damage, capped at 400 total damage of each attack against monsters.</p>",
          "leveling": [
            {
              "attribute": "Bonus Physical Damage",
              "modifiers": [
                {
                  "values": "10 / 20 / 30 / 40 / 50"
                },
                {
                  "unit": "% (+ 1 / 1.5 / 2 / 2.5 / 3% per 100 AD) of target's maximum health",
                  "values": "1"
                }
              ]
            },
            {
              "attribute": "Total Bonus Physical Damage",
              "modifiers": [
                {
                  "values": "20 / 40 / 60 / 80 / 100"
                },
                {
                  "unit": "% (+ 2 / 3 / 4 / 5 / 6% per 100 AD) of target's maximum health",
                  "values": "2"
                }
              ]
            }
          ]
        },
        {
          "description": "For 1.5 seconds, Sett also gains 30% bonus movement speed while facing visible enemy champions within 2000 units."
        },
        {
          "description": "Knuckle Down resets Sett's basic attack timer. The empowered attacks are guaranteed to be a Left Punch followed by a Right Punch, resetting Sett's current Pit Grit state (if applicable) and ignoring the usual time-out period for a follow-up Right Punch."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Sett/ability-icon/q",
      "maxCharges": -1,
      "notes": "The bonus movement speed buff is named Looking For a Fight.\nKnuckle Down can be  dodged,  blocked or missed while Sett is  blinded.",
      "spellEffects": "spell",
      "spellshieldable": "False",
      "targeting": "Auto"
    },
    {
      "key": "W",
      "name": "Haymaker",
      "width": "300 / 620 /  70",
      "affects": "Self, Enemies",
      "blurb": "Passive:  Sett stores Grit equal to damage taken, which gradually expires after a few seconds.",
      "castTime": "0.75",
      "cooldown": "18 / 16.5 / 15 / 13.5 / 12",
      "cost": "0",
      "damageType": "Other damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Sett stores 100% of post-mitigation damage taken as Grit on his resource bar, up to a cap of 50% of his maximum health. Each instance of stored Grit decays in value by 30% every second after 4 seconds.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Sett charges up a strike over the cast time. Additionally, he immediately consumes all of his stored Grit to grant himself a shield at the start of the cast time that is equal to the expended Grit for 3 seconds, decaying in strength over the duration after 0.75 seconds.</p>"
        },
        {
          "description": "After the cast time, he unleashes a massive blast in an area in the target direction, dealing physical damage to enemies hit; those hit in a line in the middle are dealt true damage instead.",
          "leveling": [
            {
              "attribute": "Damage",
              "modifiers": [
                {
                  "values": "80 / 100 / 120 / 140 / 160"
                },
                {
                  "unit": "% (+ 25% per 100 bonus AD) of expended Grit",
                  "values": "25"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Sett/ability-icon/w",
      "maxCharges": -1,
      "notes": "Haymaker's total hitbox uses the intersection of a trapezoid and a cone. Enemies are hit by Haymaker only when their hitbox overlaps with both of those areas.\nThe trapezoid and the rectangle both register the edge of enemies'  hitbox.\nThe shield is granted at the start of the cast time and will decay afterwards.\nThe buff for the shield is named Down But Not Out.\nSett does not store Grit from damage that was mitigated by  shields.\nThis ability will cast from wherever the caster is at the end of the cast time.\nSett will turn towards the target direction at the start of the cast time.\nSett will glow when attaining 90% Grit. Casting Haymaker at this amount has a different visual and audio effect.\nSett will turn golden (base skin).",
      "projectile": "FALSE",
      "resource": "Grit",
      "spellEffects": "aoe",
      "spellshieldable": "True",
      "targeting": "Direction"
    },
    {
      "key": "E",
      "name": "Facebreaker",
      "width": "280",
      "affects": "Enemies",
      "castTime": "0.25",
      "cooldown": "16 / 14.5 / 13 / 11.5 / 10",
      "cost": "0",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Sett pulls in enemies at his front and back along the target direction, dealing physical damage and slowing them by 70% for 0.5 seconds. Facebreaker deals 100 bonus physical damage to monsters.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "50 / 70 / 90 / 110 / 130"
                },
                {
                  "unit": "% AD",
                  "values": "60"
                }
              ]
            },
            {
              "attribute": "Monster Physical Damage",
              "modifiers": [
                {
                  "values": "150 / 170 / 190 / 210 / 230"
                },
                {
                  "unit": "% AD",
                  "values": "60"
                }
              ]
            }
          ]
        },
        {
          "description": "If Facebreaker affects at least one enemy on each side, all enemies are stunned for 1 second upon landing."
        },
        {
          "description": "Sett becomes unable to move or attack for 0.25 seconds after Facebreaker's cast time."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Sett/ability-icon/e",
      "maxCharges": -1,
      "notes": "Sett will afterwards attempt to basic attack the closest target picked up by Facebreaker, prioritising champions and prioritising those in front of him.\nIf Facebreaker does not hit an enemy,  Haymaker is also unable to be cast for 0.25 seconds after the cast time.\nTargets will be pulled towards Sett's location in a straight line and rebound to 150 units from him back in the same line.\nThe spell indicator is slightly shorter than the actual hitbox' rectangle length, and slightly wider than the width (note that the effects are edge-range from the hitbox rectangle).\nTargets protected by  spell shields don't count toward the requirement to  stun.\nThis ability will cast from wherever the caster is at the end of the cast time.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
      "projectile": "FALSE",
      "spellEffects": "aoe",
      "spellshieldable": "true",
      "targeting": "Direction"
    },
    {
      "key": "R",
      "name": "The Show Stopper",
      "affects": "Enemies",
      "blurb": "Active:  Sett  carries the target enemy  champion and  dashes through the air with  displacement immunity, then slams them into the ground to deal physical damage to nearby enemies based on the target's bonus health. Enemies hit are also briefly  slowed.",
      "castTime": "none",
      "cooldown": "120 / 100 / 80",
      "cost": "0",
      "damageType": "Physical damage",
      "effectRadius": "600",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Sett suppresses and reveals the target enemy champion while dashing with displacement immunity to their location and attaching them to himself upon arrival. He leaps another 600 units in the same direction to slam the target into the ground, creating a massive shockwave and quickly sliding forward 250 units beyond the impact.</p>"
        },
        {
          "description": "Enemies within the epicenter take physical damage, and other enemies hit by the shockwave take physical damage that is reduced by up to 75% based on proximity. All targets hit are slowed by 99% for 1 second.",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "200 / 300 / 400"
                },
                {
                  "unit": "% bonus AD",
                  "values": "120"
                },
                {
                  "tooltip": "Scaling per rank:\n40 / 50 / 60% of primary target's bonus health",
                  "unit": "% of primary target's bonus health",
                  "values": "40 - 60"
                }
              ]
            },
            {
              "attribute": "Reduced Damage",
              "modifiers": [
                {
                  "values": "50 / 75 / 100"
                },
                {
                  "unit": "% bonus AD",
                  "values": "30"
                },
                {
                  "tooltip": "Scaling per rank:\n10 / 12.5 / 15% of primary target's bonus health",
                  "unit": "% of primary target's bonus health",
                  "values": "10 - 15"
                }
              ]
            }
          ]
        },
        {
          "description": "The leap will end and create the impact prematurely upon encountering terrain that cannot be dashed through, whether by distance or invalid space."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Sett/ability-icon/r",
      "maxCharges": -1,
      "notes": "The Show Stopper's attachment depends on the  suppression; if the target does not remain suppressed by the end of the dash, they are not attached to Sett when he arrives to them. Similarly, if the suppression is removed, so is the attachment.\nSett will still dash to the target and leap forward from them to trigger the shockwave afterwards even if he fails to attach the target to him.\nIf the target resists the suppression by being  immune to crowd control,  displacement immune, or having a  spell shield, Sett will not attach them to himself.\nIf the target removes the suppression by any means, including with an applicable  cleanse effect or  dispel, they will instantly detach themselves from Sett.\nNeither his dash nor leap are interrupted in this case.\nSett's slide dash after completing the leap dash cannot pass through terrain.\nSett is  displacement immune during both the initial dash and the leap after that dash, as well as for a short duration during his slide beyond on the impact.\nThe target is  revealed specifically while they are suppressed.\nIf the target is  untargetable when Sett completes their dash to them, The Show Stopper will be cancelled immediately.\nIn this case, Sett will not leap forward nor attach to the target to himself and the suppression is removed from the target.\nIf the target moves 2000 units or more away from their location at the time of The Show Stopper's cast before Sett completes their dash to them, Sett will fail to attach the target to him.\nThe target will remain suppressed for 5 seconds if this occurs.(bug)\nThe Show Stopper will be cancelled if either Sett's dash or leap is cancelled during the ability by any means.\nThe former causes Sett to not leap forward nor attach to the target to himself and the suppression to be removed from the target.\nThe latter causes Sett to detach the target from himself instantly and the suppression to be removed from the target.\nThe Show Stopper will not be cancelled if the target dies or enters  resurrection during the effect.\nAt maximum cast range and if the dash is not shortened due to terrain in Sett's way, The Show Stopper's movement takes 1.5 seconds, causing the slam within 1.23 seconds.\nIf Sett enters  resurrection right before completing his initial dash, he will still leap forward from the target.(bug)\nThe \"crater\" VFX originates from the target's landing, which inaccurately illustrates the damage's area of effect (from Sett).(note)",
      "spellEffects": "aoe",
      "spellshieldable": "true",
      "targeting": "Unit",
      "targetRange": "400"
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
    "abilityReliance": 40,
    "difficulty": 2
  },
  "faction": "ionia",
  "fullName": "Settrigh",
  "lore": "A leader of Ionia's growing criminal underworld, Sett rose to prominence in the wake of the war with Noxus. Though he began as a humble challenger in the fighting pits of Navori, he quickly gained notoriety for his savage strength, and his ability to take seemingly endless amounts of punishment. Now, having climbed through the ranks of local combatants, Sett has muscled to the top, reigning over the pits he once fought in.",
  "patchLastChanged": "25.14",
  "positions": [
    "Top"
  ],
  "price": {
    "blueEssence": 675,
    "rp": 585
  },
  "releaseDate": "2020-01-14",
  "resource": "Grit",
  "roles": [
    "Fighter",
    "Juggernaut",
    "Tank"
  ],
  "stats": {
    "health": {
      "flat": 670,
      "perLevel": 114
    },
    "healthRegen": {
      "flat": 7,
      "perLevel": 0.5
    },
    "mana": {
      "flat": 0
    },
    "manaRegen": {
      "flat": 0
    },
    "armor": {
      "flat": 33,
      "perLevel": 4.7
    },
    "magicResistance": {
      "flat": 28,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 60,
      "perLevel": 4
    },
    "movespeed": {
      "flat": 340
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
      "perLevel": 1.75
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
      "flat": -0.086
    },
    "attackRange": {
      "flat": 125
    }
  }
}
export default champion