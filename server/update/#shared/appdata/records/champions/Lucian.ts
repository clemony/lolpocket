// Updated Patch 25.19 - 09/27/2025 06:08:58 PM CDT

const champion: Champion = {
  "id": 236,
  "key": "Lucian",
  "name": "Lucian",
  "title": "the Purifier",
  "abilities": [
    {
      "key": "P",
      "name": "Lightslinger",
      "affects": "Enemies",
      "blurb": "Innate: After casting an ability,  Lucian's next basic attack within a few seconds fires a second attack that deals reduced physical damage.",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> After casting an ability, Lucian's next basic attack within 3.5 seconds fires an additional shot on-attack after 0.25 seconds, which deals 50% / 55% / 60% (based on level) AD physical damage, increased to 100% AD against minions. He will shoot the same target, else another target within 50 units beyond his basic attack range automatically.</p>"
        },
        {
          "description": "The second shot applies on-hit effects, triggers on-attack effects, and is affected by critical strike modifiers."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Vigilance:</span> Whenever Lucian is healed or shielded by an ally, or an enemy champion within 1000 units is immobilized, his next two shots within 6 seconds are empowered to deal 15 (+ 20% AD) bonus magic damage on-hit. He can store up to 4 empowered shots at a time.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Lucian/ability-icon/p",
      "notes": "Lightslinger is triggered and consumed by the first attack, even if no target can be found upon firing the second attack.\nThe second attack, if the initial target was killed, will prioritize enemy champions regardless of having  sight of them or not and enemy  minions with  low health.\nLucian can perform actions freely while firing Lightslinger's second attack.\nThe second attack has special movement animations depending on the direction Lucian is moving while firing.\nThe second attack counts as a separate hit for effects such as  Electrocute,  Muramana's Shock, and  Eclipse's Ever Rising Moon.\nThe second attack separately rolls a  critical strike.\nThe second attack does not trigger  Sundered Sky's Lightshield Strike.(note)\nThe empowered shots will apply against structures.",
      "spellEffects": "attack",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Piercing Light",
      "width": "120",
      "affects": "Enemies",
      "blurb": "Active:  Lucian fires a laser in a line in the direction of the target enemy, dealing physical damage to enemies hit.",
      "castTime": "0.4 : 0.25 (based on level)",
      "cooldown": "9 / 8 / 7 / 6 / 5",
      "cost": "48 / 56 / 64 / 72 / 80",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Lucian fires a laser in a line in the direction of the target enemy that deals physical damage to enemies hit.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "85 / 115 / 145 / 175 / 205"
                },
                {
                  "tooltip": "Scaling per rank:\n60 / 75 / 90 / 105 / 120% bonus AD",
                  "unit": "% bonus AD",
                  "values": "60 - 120"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Lucian/ability-icon/q",
      "maxCharges": -1,
      "notes": "Piercing Light will attempt to lead the target if it is moving but does not adjust further during the cast time (enemies can dodge the laser if they change their position by a sufficient amount during the cast time).\nLucian can buffer  Ardent Blaze or  The Culling during the cast time.  Relentless Pursuit is locked out.\nThis is why Lucian can use them early if the cast time prematurely ends.\nPiercing Light's cast time ends prematurely if the initial target dies, allowing Lucian to attack and move freely, or to immediately begin casting either  Ardent Blaze or  The Culling.(note)",
      "projectile": "FALSE",
      "resource": "Mana",
      "spellEffects": "AoE",
      "spellshieldable": "True",
      "targeting": "Unit",
      "targetRange": "500"
    },
    {
      "key": "W",
      "name": "Ardent Blaze",
      "width": "110",
      "affects": "Enemies / Self, Allies",
      "blurb": "Active:  Lucian fires a missile in the target direction that explodes in a cross pattern upon hitting an enemy or maximum range, dealing magic damage and marking enemies hit.",
      "castTime": "0.25",
      "cooldown": "14 / 13 / 12 / 11 / 10",
      "cost": "60",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Lucian fires a missile in the target direction that explodes in a cross pattern upon hitting an enemy or reaching maximum range, dealing magic damage to enemies hit and granting sight of the area for 1 second.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "75 / 110 / 145 / 180 / 215"
                },
                {
                  "unit": "% AP",
                  "values": "90"
                }
              ]
            }
          ]
        },
        {
          "description": "Enemies hit are marked for 6 seconds."
        },
        {
          "description": "Lucian gains bonus movement speed for 1 second when he or allied champions damage a marked target. Allied champions triggering this effect grant Lucian Vigilance.",
          "leveling": [
            {
              "attribute": "Bonus Movement Speed",
              "modifiers": [
                {
                  "values": "60 / 65 / 70 / 75 / 80"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Lucian/ability-icon/w",
      "maxCharges": -1,
      "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nLike most missiles, it will not collide with enemies whose center is beyond the maximum range (not behind Lucian), but this determines only the center and timing of the explosion.\nArdent Blaze will cast from wherever Lucian is at the end of the cast time.\nLucian will not gain Ardent Blaze's bonus movement speed if attacks on marked targets are  dodged,  blocked, or if missed while the attacker is  blinded.\n DoTs will proc Ardent Blaze only once.\n Spell shield will not prevent the mark.",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "1600",
      "spellEffects": "spellaoe",
      "spellshieldable": "special",
      "targeting": "Direction"
    },
    {
      "key": "E",
      "name": "Relentless Pursuit",
      "affects": "Self",
      "blurb": "Passive: Relentless Pursuit's cooldown is  reduced for each  Lightslinger shot hit, doubled against enemy  champions.",
      "castTime": "none",
      "cooldown": "18 / 17 / 16 / 15 / 14",
      "cost": "40 / 30 / 20 / 10 / 0",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Relentless Pursuit's current cooldown is reduced by 1 second for each Lightslinger shot hit, doubled to 2 seconds against enemy champions.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Lucian dashes in the target direction.</p>"
        },
        {
          "description": "Relentless Pursuit resets Lucian's basic attack timer. Lucian can cast any of his abilities during the dash. Relentless Pursuit can be cast during Ardent Blaze's cast time and during The Culling's channel."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Lucian/ability-icon/e",
      "maxCharges": -1,
      "notes": "Additional on-hits during Lightslinger are not considered for the cooldown reduction (i.e  Runaan's Hurricane,  Guinsoo's Rageblade).\nUnlike some dashes, Lucian's dash speed does not scale with his movement speed.\nRelentless Pursuit's dash can go through terrain, but will not be extended further if the target location is within terrain, unlike other dashes, like  Ekko's  Phase Dive.\nCasting Relentless Pursuit directly after attacking with Lightslinger will reduce Relentless Pursuit's cooldown when the projectiles hit the target.\nRelentless Pursuit can be cast during  Recall's cast time.\nIf Relentless Pursuit is cast just as the cast time ends, Lucian will not perform his Recall animation, instead staying idle. This allows Lucian to use his emotes during his Recall.",
      "resource": "Mana",
      "speed": "1350",
      "targeting": "Location",
      "targetRange": "200 / 425"
    },
    {
      "key": "R",
      "name": "The Culling",
      "width": "220 (plus offset)",
      "affects": "Self, Enemies",
      "castTime": "none",
      "cooldown": "110 / 100 / 90",
      "cost": "100",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Lucian channels for up to 3 seconds, rapidly firing up to 22 (+ 1 per 4% critical strike chance) shots in the target direction. Each shot deals physical damage to the first enemy hit, doubled against minions. The Culling can be recast after 0.75 seconds during the channel, and does so automatically when the channel ends.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage Per Shot",
              "modifiers": [
                {
                  "values": "15 / 30 / 45"
                },
                {
                  "unit": "% AD",
                  "values": "25"
                },
                {
                  "unit": "% AP",
                  "values": "15"
                }
              ]
            },
            {
              "attribute": "Additional Damage per 20% Crit Chance",
              "modifiers": [
                {
                  "values": "75 / 150 / 225"
                },
                {
                  "unit": "% AD",
                  "values": "125"
                },
                {
                  "unit": "% AP",
                  "values": "75"
                }
              ]
            },
            {
              "attribute": "Total Physical Damage",
              "modifiers": [
                {
                  "unit": "  ",
                  "values": "330 / 660 / 990"
                },
                {
                  "unit": "   per 4% critical strike chance",
                  "values": "15 / 30 / 45"
                },
                {
                  "unit": "% AD",
                  "values": "550"
                },
                {
                  "unit": "% AP",
                  "values": "330"
                },
                {
                  "unit": "% AD",
                  "values": "25"
                },
                {
                  "unit": "% AP",
                  "values": "15"
                }
              ]
            },
            {
              "attribute": "Minion Damage Per Shot",
              "modifiers": [
                {
                  "values": "30 / 60 / 90"
                },
                {
                  "unit": "% AD",
                  "values": "50"
                },
                {
                  "unit": "% AP",
                  "values": "30"
                }
              ]
            },
            {
              "attribute": "Additional Minion Damage per 20% Crit Chance",
              "modifiers": [
                {
                  "values": "150 / 300 / 450"
                },
                {
                  "unit": "% AD",
                  "values": "250"
                },
                {
                  "unit": "% AP",
                  "values": "150"
                }
              ]
            },
            {
              "attribute": "Total Minion Damage",
              "modifiers": [
                {
                  "unit": "  ",
                  "values": "660 / 1320 / 1980"
                },
                {
                  "unit": "   per 4% critical strike chance",
                  "values": "30 / 60 / 90"
                },
                {
                  "unit": "% AD",
                  "values": "1100"
                },
                {
                  "unit": "% AP",
                  "values": "660"
                },
                {
                  "unit": "% AD",
                  "values": "50"
                },
                {
                  "unit": "% AP",
                  "values": "30"
                }
              ]
            }
          ]
        },
        {
          "description": "While channeling, Lucian is ghosted and may still move."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Lucian ends The Culling.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Lucian/ability-icon/r",
      "maxCharges": -1,
      "notes": "At 100% critical strike chance, The Culling fires up to 25 additional shots, for a total of 47 shots.\nThe total damage at the maximum number of shots (at 100% critical strike chance) is 705 / 1057.5 / 1410 / 1762.5 / 2115 (+ 1175% AD) (+ 705% AP) physical damage.\nAgainst minions, this is increased to 1410 / 2115 / 2820 / 3525 / 4230 (+ 2350% AD) (+ 1410% AP).\nThe fire rate increases with the number of shots.\nDuring The Culling, Lucian's facing direction is in the direction that he is firing.\nLucian can interact with  Dark Passage or allied  Devour without  interrupting The Culling.\nThe Culling creates the shots at an offset of 35 units to the front plus 35 units towards each side of Lucian (sides alternating, first shot fired from Lucian's right gun), unlike the missiles of most abilities.\nThe damage dealt by each bullet of The Culling is calculated when the bullet reaches a target, just like single missile abilities.\n Spell shield only blocks one instance of damage.\nThe following table refers for interactions while Lucian is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Relentless Pursuit is usable.  Piercing Light and  Ardent Blaze are disabled. This ability recasts to end channel.\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\nAll the other item-actives are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Zhonya's Hourglass\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash  Teleport\n\n\nDisabled\n\n Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "2800",
      "spellEffects": "aoedot",
      "spellshieldable": "Special",
      "targeting": "Direction / Auto"
    }
  ],
  "adaptiveType": "Physical damage",
  "attackType": "Ranged",
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 1,
    "mobility": 3,
    "utility": 1,
    "abilityReliance": 30,
    "difficulty": 2
  },
  "faction": "unaffiliated",
  "lore": "Lucian, a Sentinel of Light, is a grim hunter of wraiths and specters, pursuing them relentlessly and annihilating them with his twin relic pistols. After the specter Thresh slew his wife, Lucian embarked on the path of vengeance—but even with her return to life, his rage is undiminished. Merciless and single-minded, Lucian will stop at nothing to protect the living from the long-dead horrors of the Black Mist.",
  "patchLastChanged": "25.11",
  "positions": [
    "Bottom"
  ],
  "price": {
    "blueEssence": 675,
    "rp": 585
  },
  "releaseDate": "2013-08-22",
  "resource": "Mana",
  "roles": [
    "Assassin",
    "Marksman"
  ],
  "stats": {
    "health": {
      "flat": 641,
      "perLevel": 100
    },
    "healthRegen": {
      "flat": 3.75,
      "perLevel": 0.65
    },
    "mana": {
      "flat": 320,
      "perLevel": 43
    },
    "manaRegen": {
      "flat": 7,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 28,
      "perLevel": 4.2
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 60,
      "perLevel": 2.9
    },
    "movespeed": {
      "flat": 335
    },
    "acquisitionRadius": {
      "flat": 800
    },
    "selectionRadius": {
      "flat": 100
    },
    "pathingRadius": {
      "flat": 40.68
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
      "flat": 0.638,
      "perLevel": 3.3
    },
    "attackSpeedRatio": {
      "flat": 0.638
    },
    "attackCastTime": {
      "flat": 0.3
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackDelayOffset": {
      "flat": -0.15
    },
    "attackRange": {
      "flat": 500
    }
  }
}
export default champion