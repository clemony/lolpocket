// Updated Patch 25.17 - 09/14/2025 05:55:11 PM CDT

const champion: Champion = {
  "id": 122,
  "key": "Darius",
  "name": "Darius",
  "title": "the Hand of Noxus",
  "resource": "Mana",
  "attackType": "Melee",
  "adaptiveType": "Physical damage",
  "stats": {
    "health": {
      "flat": 652,
      "perLevel": 114
    },
    "healthRegen": {
      "flat": 10,
      "perLevel": 0.95
    },
    "mana": {
      "flat": 263,
      "perLevel": 58
    },
    "manaRegen": {
      "flat": 6.6,
      "perLevel": 0.35
    },
    "armor": {
      "flat": 37,
      "perLevel": 5.2
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 64,
      "perLevel": 5
    },
    "movespeed": {
      "flat": 340
    },
    "acquisitionRadius": {
      "flat": 400
    },
    "selectionRadius": {
      "flat": 120
    },
    "pathingRadius": {
      "flat": 25.767
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
      "perLevel": 1
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
      "flat": -0.1
    },
    "attackRange": {
      "flat": 175
    }
  },
  "positions": [
    "Top"
  ],
  "roles": [
    "Fighter",
    "Juggernaut",
    "Tank"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 2,
    "control": 2,
    "mobility": 1,
    "utility": 1,
    "abilityReliance": 55,
    "difficulty": 2
  },
  "abilities": [
    {
      "name": "Hemorrhage",
      "key": "P",
      "icon": "https://cdn.communitydragon.org/latest/champion/Darius/ability-icon/p",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Darius' damaging basic attacks and abilities apply a stack of Hemorrhage to enemies for 5 seconds, refreshing on subsequent applications and stacking up to 5 times.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Hemorrhage:</span> For each stack, the target is dealt[ 13 - 30 (based on level) (+ 30% bonus AD) total physical damage over the duration, ][ 3.25 - 7.5 (based on level) (+ 7.5% bonus AD) physical damage every 1.25 seconds over the duration, ]up to a maximum of[ 65 - 150 (based on level) (+ 150% bonus AD) total physical damage over the duration. ][ 16.25 - 37.5 (based on level) (+ 37.5% bonus AD) physical damage with each tick. ]Hemorrhage deals 200% damage against monsters.</p>"
        },
        {
          "description": "When Darius kills a champion with Noxian Guillotine, or applies 5 stacks on an enemy champion, he becomes empowered with Noxian Might for 5 seconds."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Noxian Might:</span> Darius gains 30 - 230 (based on level) bonus attack damage and instantly applies 5 Hemorrhage stacks through his usual means.</p>"
        }
      ],
      "targeting": "Passive",
      "affects": "Enemies",
      "spellshieldable": "special",
      "damageType": "Physical damage",
      "spellEffects": "default",
      "notes": "If Hemorrhage's total post-mitigation damage is higher than the target's current health, a small area of  sight is granted around the target for the duration of Hemorrhage and for another 2 seconds after it ends.\nHemorrhage does not apply to  structures nor  wards.\nDarius' attacks and abilities have to deal damage to apply Hemorrhage.\nHemorrhage cannot be applied to/refreshed against  invulnerable targets.\nHemorrhage can be applied to and refreshed against  shielded targets.\nHemorrhage can also be applied  on-hit, but will specifically not do so if the target is invulnerable.\n Spell shield prevents Hemorrhage's application from abilities only.",
      "blurb": "Innate:  Darius'  basic attacks and damaging  abilities apply a  stack of Hemorrhage, stacking up to a cap."
    },
    {
      "name": "Decimate",
      "key": "Q",
      "icon": "https://cdn.communitydragon.org/latest/champion/Darius/ability-icon/q",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Darius becomes ghosted for 1 second and hefts his axe for 0.75 seconds, afterward swinging it around himself to deal physical damage to nearby enemies. Enemies within the inner radius take 35% damage.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage (Blade)",
              "modifiers": [
                {
                  "values": "50 / 80 / 110 / 140 / 170"
                },
                {
                  "values": "100 - 140",
                  "unit": "% AD",
                  "tooltip": "Scaling per rank:\n100 / 110 / 120 / 130 / 140% AD"
                }
              ]
            },
            {
              "attribute": "Reduced Damage (Handle)",
              "modifiers": [
                {
                  "values": "17.5 / 28 / 38.5 / 49 / 59.5"
                },
                {
                  "values": "35 - 49",
                  "unit": "% AD",
                  "tooltip": "Scaling per rank:\n35 / 38.5 / 42 / 45.5 / 49% AD"
                }
              ]
            }
          ]
        },
        {
          "description": "Against champions and large monsters hit, Darius heals for 17% - 51% (based on number of targets hit by the outer radius) of his missing health. Enemies hit by the inner radius do not refresh the duration of or gain a new stack of Hemorrhage."
        },
        {
          "description": "Darius can move during Decimate, but is unable to declare basic attacks or cast Apprehend or Noxian Guillotine."
        }
      ],
      "cost": "25 / 30 / 35 / 40 / 45",
      "cooldown": "9 / 8 / 7 / 6 / 5",
      "targeting": "Auto",
      "affects": "Enemies",
      "spellshieldable": "True",
      "resource": "Mana",
      "damageType": "Physical damage",
      "spellEffects": "spellaoe",
      "notes": "Decimate will cancel if Darius enters  stasis or uses  Dash during the delay.\nAfter the delay, Decimate will be placed on a 1-second cooldown.",
      "blurb": "Active:  Darius briefly winds up to spin his axe in a circle while  ghosted, dealing physical damage to enemies hit.",
      "castTime": "none",
      "effectRadius": "240 / 460",
      "maxCharges": -1
    },
    {
      "name": "Crippling Strike",
      "key": "W",
      "icon": "https://cdn.communitydragon.org/latest/champion/Darius/ability-icon/w",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Darius empowers his next basic attack within 4 seconds to have an uncancellable windup, gain 25 bonus range, deal bonus physical damage and slow the target by 90% for 1 second. This damage is affected by critical strike modifiers.</p>",
          "leveling": [
            {
              "attribute": "Bonus Physical Damage",
              "modifiers": [
                {
                  "values": "40 / 45 / 50 / 55 / 60",
                  "unit": "% AD"
                }
              ]
            }
          ]
        },
        {
          "description": "If this attack kills the target, half of Crippling Strike's cooldown is reduced and its mana cost is refunded."
        },
        {
          "description": "Crippling Strike resets Darius' basic attack timer."
        }
      ],
      "cost": "40",
      "cooldown": "5",
      "targeting": "Auto",
      "affects": "Enemies, Structures",
      "spellshieldable": "special",
      "resource": "Mana",
      "damageType": "Physical damage",
      "spellEffects": "Special",
      "notes": "Crippling Strike deals  basic damage but will also trigger spell effects by also being tagged as  spell damage.\nThis includes the basic attack itself.\n Spell shield will not block the damage.\nThe attack's animation can be cancelled by casting  Decimate, but the attack will still land.\nDespite its name, Crippling Strike does not  cripple anymore.",
      "blurb": "Active:  Darius' next basic attack within a few seconds deals increased physical damage and  slows the target.",
      "castTime": "none",
      "maxCharges": -1
    },
    {
      "name": "Apprehend",
      "key": "E",
      "icon": "https://cdn.communitydragon.org/latest/champion/Darius/ability-icon/e",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Darius gains armor penetration.</p>",
          "leveling": [
            {
              "attribute": "Armor Penetration",
              "modifiers": [
                {
                  "values": "20 / 25 / 30 / 35 / 40",
                  "unit": "%"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Darius sweeps his axe in a cone in the target direction, granting sight of the area for 1 second while pulling enemies hit towards him. Upon arrival, they rebound 150 units off of him, remaining airborne and becoming slowed by 40% for 1 second.</p>"
        },
        {
          "description": "Darius is unable to move or cast Decimate or Noxian Guillotine for 0.4 seconds after Apprehend's cast time."
        }
      ],
      "cost": "70 / 60 / 50 / 40 / 30",
      "cooldown": "26 / 23.5 / 21 / 18.5 / 16",
      "targeting": "Direction",
      "affects": "Enemies",
      "spellshieldable": "True",
      "resource": "Mana",
      "projectile": "FALSE",
      "notes": "Enemies hit by Apprehend will quickly be dragged to Darius before rebounding over a longer period.\nThe  slow duration starts as soon as the target rebounds off of Darius.\nPENDING FOR TEST:: The rebound location is determined when the target reaches Darius' location.\nThe rebound's forced movement's duration is roughly 0.5 seconds, finishing before the  airborne duration ends.\nPENDING FOR TEST:: There is no  stun applied for the same duration of the  airborne, meaning  brittle cannot extend the disable duration. It will not increase the  slow duration in most situations because of the negative tenacity falling off before the slow is applied.\nAfter the pull, Darius will attempt to basic attack the closest pulled target, prioritizing enemy champions.\nThe armor penetration  stacks multiplicatively with other forms of percentage armor penetration.\nThis ability will cast from wherever the caster is at the end of the cast time.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
      "angle": "50°",
      "castTime": "0.25",
      "effectRadius": "535",
      "maxCharges": -1
    },
    {
      "name": "Noxian Guillotine",
      "key": "R",
      "icon": "https://cdn.communitydragon.org/latest/champion/Darius/ability-icon/r",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Darius attempts to execute the target enemy champion, leaping towards them to deal true damage, increased by 0% - 100% (based on target's Hemorrhage stacks), and granting sight of the area around them for 2.5 seconds from the start of the cast time.</p>",
          "leveling": [
            {
              "attribute": "True Damage",
              "modifiers": [
                {
                  "values": "125 / 250 / 375"
                },
                {
                  "values": "75",
                  "unit": "% bonus AD"
                }
              ]
            },
            {
              "attribute": "Bonus Damage Per Stack",
              "modifiers": [
                {
                  "values": "25 / 50 / 75"
                },
                {
                  "values": "15",
                  "unit": "% bonus AD"
                }
              ]
            },
            {
              "attribute": "Maximum True Damage",
              "modifiers": [
                {
                  "values": "250 / 500 / 750"
                },
                {
                  "values": "150",
                  "unit": "% bonus AD"
                }
              ]
            }
          ]
        },
        {
          "description": "If the target dies within 0.15 seconds after being hit by Noxian Guillotine, Darius fears nearby minions and monsters for 3 seconds, during which they are gradually slowed by up to 99% over the duration. He can also recast the ability within 20 seconds at no cost, which refreshes on further executions."
        },
        {
          "description": "At rank 3, Noxian Guillotine has no mana cost and recast timer."
        },
        {
          "description": "Darius is unable to cast Decimate or Apprehend for 0.25 seconds after Noxian Guillotine's cast time."
        }
      ],
      "cost": "100 / 100 / 0",
      "cooldown": "120 / 100 / 80",
      "targeting": "Unit",
      "affects": "Enemies",
      "spellshieldable": "True",
      "resource": "Mana",
      "damageType": "True damage",
      "spellEffects": "spell",
      "notes": "Noxian Guillotine's cooldown after the recast or recast window is calculated by taking the values at the end, and using this formula: (Noxian Guillotine's Cooldown - time since first cast) × 100 ÷ (100 +  AH).\nNoxian Guillotine applies  Hemorrhage after the damage.\nDarius will only leap towards the target if it is at range, or leap backwards if it is very close.\nThis leap can pass very thin terrain and will otherwise not be able to. In any case, Darius will still hit the target.\nThe ability is disabled while  grounded or  rooted even if Darius is in the range in which he does not leap.\nNoxian Guillotine will not reset nor trigger  Noxian Might if used to kill a  clone or a target protected by  resurrection.\nNoxian Guillotine will reset but not trigger  Noxian Might if it finishes off a target that is in a  zombie state.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
      "blurb": "Active:  Darius  leaps to an enemy champion and strikes a lethal blow, dealing true damage based on the target's current  Hemorrhage stacks.",
      "castTime": "0.3667",
      "targetRange": "475",
      "maxCharges": -1
    }
  ],
  "lore": "There is no greater symbol of Noxian might than Darius, the nation's most feared and battle-hardened commander. Rising from humble origins to become the Hand of Noxus, he cleaves through the empire's enemies—many of them Noxians themselves. Knowing that he never doubts his cause is just, and never hesitates once his axe is raised, those who stand against the leader of the Trifarian Legion can expect no mercy.",
  "faction": "noxus",
  "releaseDate": "2012-05-23",
  "patchLastChanged": "25.14",
  "price": {
    "blueEssence": 225,
    "rp": 260
  }
}
export default champion