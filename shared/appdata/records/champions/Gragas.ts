// Updated Patch 25.19 - 10/07/2025 08:16:12 AM CDT

const champion: Champion = {
  "id": 79,
  "key": "Gragas",
  "name": "Gragas",
  "title": "the Rabble Rouser",
  "abilities": [
    {
      "key": "P",
      "name": "Happy Hour",
      "affects": "Self",
      "blurb": "Innate: Every few seconds,  Gragas will  heal a portion of his maximum health upon casting an ability.",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Periodically, after casting an ability, Gragas heals himself for 5.5% of his maximum health.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Gragas/ability-icon/p",
      "notes": "No additional details.",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Barrel Roll",
      "affects": "Enemies",
      "blurb": "Active:  Gragas rolls a cask to the target location that lingers for a short time before exploding. Barrel Roll can be recast within the duration once it fully travels.",
      "castTime": "0.25",
      "cooldown": "10 / 9 / 8 / 7 / 6",
      "cost": "80",
      "damageType": "Magic damage",
      "effectRadius": "250",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Gragas rolls a cask to the target location, remaining there for 4 seconds and granting sight of the area. Upon arrival, the cask starts to ferment over the first 2 seconds of its duration to increase its damage and the effectiveness of its slow, up to a maximum of 150% of their initial values. Barrel Roll can be recast at any time within its duration after the cask has fully travelled, and does so automatically after its duration ends.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Gragas detonates the cask, dealing magic damage to nearby enemies, reduced by 30% against minions, and slowing them for 2 seconds.</p>",
          "leveling": [
            {
              "attribute": "Minimum Magic Damage",
              "modifiers": [
                {
                  "values": "80 / 120 / 160 / 200 / 240"
                },
                {
                  "unit": "% AP",
                  "values": "80"
                }
              ]
            },
            {
              "attribute": "Maximum Magic Damage",
              "modifiers": [
                {
                  "values": "120 / 180 / 240 / 300 / 360"
                },
                {
                  "unit": "% AP",
                  "values": "120"
                }
              ]
            },
            {
              "attribute": "Minimum Minion Damage",
              "modifiers": [
                {
                  "values": "56 / 84 / 112 / 140 / 168"
                },
                {
                  "unit": "% AP",
                  "values": "56"
                }
              ]
            },
            {
              "attribute": "Maximum Minion Damage",
              "modifiers": [
                {
                  "values": "84 / 126 / 168 / 210 / 252"
                },
                {
                  "unit": "% AP",
                  "values": "84"
                }
              ]
            },
            {
              "attribute": "Minimum Slow",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "40 / 45 / 50 / 55 / 60"
                }
              ]
            },
            {
              "attribute": "Maximum Slow",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "60 / 67.5 / 75 / 82.5 / 90"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Gragas/ability-icon/q",
      "maxCharges": -1,
      "notes": "The initial cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nDeactivating the ability manually does not.\nThe cask ignores unit and terrain collision therefore it will only stop once it reaches the target location.\nOn arrival the cask will begin to glow ever brighter as it ferments until it turns bright red.\nBarrel Roll has an internal cooldown while traveling so that Gragas may only make it explode on arrival.\nThe charge-up countdown will only start once the cask stops rolling.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe ability will not preserve the caster's facing direction when using  Flash and similar effects.",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "1000",
      "spellEffects": "Area of effect",
      "spellshieldable": "True",
      "targeting": "Location / Auto",
      "targetRange": "850"
    },
    {
      "key": "W",
      "name": "Drunken Rage",
      "affects": "Enemies, Self",
      "castTime": "none",
      "cooldown": "5",
      "cost": "30",
      "damageType": "Magic damage",
      "effectRadius": "250",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Gragas channels for 0.75 seconds, drinking out of his brew, and gains damage reduction for 2.5 seconds.</p>",
          "leveling": [
            {
              "attribute": "Damage Reduction",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "10 / 12 / 14 / 16 / 18"
                },
                {
                  "unit": "% per 100 AP",
                  "values": "4"
                }
              ]
            }
          ]
        },
        {
          "description": "Upon completing the channel, Gragas empowers his next basic attack within 5 seconds to have an uncancellable windup, gain 50 bonus range and deal bonus magic damage to the target and nearby enemies, reduced to 50% against structures and capped at 300 against monsters.",
          "leveling": [
            {
              "attribute": "Bonus Magic Damage",
              "modifiers": [
                {
                  "values": "20 / 50 / 80 / 110 / 140"
                },
                {
                  "unit": "% of target's maximum health",
                  "values": "7"
                },
                {
                  "unit": "% AP",
                  "values": "70"
                }
              ]
            },
            {
              "attribute": "Capped Monster Damage",
              "modifiers": [
                {
                  "values": "320 / 350 / 380 / 410 / 440"
                },
                {
                  "unit": "% AP",
                  "values": "70"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Gragas/ability-icon/w",
      "maxCharges": -1,
      "notes": "The enhanced attack will apply other on-hit effects and can  critically strike as normal.\nThe empowered attack will trigger against structures.\nThe empowered attack will trigger against wards but not be consumed nor apply its effects against wards.\nThe following table refers for interactions while Gragas is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
      "resource": "Mana",
      "spellEffects": "spellaoe",
      "spellshieldable": "True",
      "targeting": "Auto"
    },
    {
      "key": "E",
      "name": "Body Slam",
      "affects": "Enemies",
      "blurb": "Passive:  Gragas  charges in the target direction, stopping upon the first enemy hit, which deals magic damage to nearby enemies,  knocks them back, and  stuns them.",
      "castTime": "none",
      "cooldown": "14 / 13.5 / 13 / 12.5 / 12",
      "cost": "50",
      "damageType": "Magic damage",
      "effectRadius": "180 /  180",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Gragas charges in the target direction and stops upon colliding with an enemy, dealing magic damage to all nearby enemies, knocking them back, though not through terrain, and stunning them for 1 second.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "80 / 125 / 170 / 215 / 260"
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
          "description": "Body Slam's current cooldown is reduced by 40% if Gragas hits an enemy."
        },
        {
          "description": "Barrel Roll and Explosive Cask can be cast during the dash."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Gragas/ability-icon/e",
      "maxCharges": -1,
      "notes": "Flash can be casted during Body Slam, instantly ending it and affecting enemies at the flash location.\nUnits hit by Body Slam turn away from Gragas.\n Displacement immunity will not resist the application of the  stun.",
      "resource": "Mana",
      "speed": "910",
      "spellEffects": "spellaoe",
      "spellshieldable": "True",
      "targeting": "Direction",
      "targetRange": "600"
    },
    {
      "key": "R",
      "name": "Explosive Cask",
      "affects": "Enemies",
      "blurb": "Active:  Gragas hurls a cask to the target location that explodes upon impact, dealing magic damage to nearby enemies and  knocking them back.",
      "castTime": "0.25",
      "cooldown": "100 / 85 / 70",
      "cost": "100",
      "damageType": "Magic damage",
      "effectRadius": "400",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Gragas hurls a cask that travels to the target location over 0.5 seconds, exploding on impact to deal magic damage to all enemies within the area and knock them back 900 units, though not through terrain, from the epicenter of the explosion, as well as granting sight of the area for 1 second.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "200 / 300 / 400"
                },
                {
                  "unit": "% AP",
                  "values": "80"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Gragas/ability-icon/r",
      "maxCharges": -1,
      "notes": "This ability will cast from wherever the caster is at the end of the cast time.",
      "projectile": "TRUE",
      "resource": "Mana",
      "spellEffects": "Area of effect",
      "spellshieldable": "True",
      "targeting": "Location",
      "targetRange": "1000"
    }
  ],
  "adaptiveType": "Magic damage",
  "attackType": "Melee",
  "attributeRatings": {
    "damage": 2,
    "toughness": 3,
    "control": 3,
    "mobility": 2,
    "utility": 1,
    "abilityReliance": 90,
    "difficulty": 2
  },
  "faction": "freljord",
  "lore": "Equal parts jolly and imposing, Gragas is a massive, rowdy brewmaster who's always on the lookout for new ways to raise everyone's spirits. Hailing from parts unknown, he searches for ingredients among the unblemished wastes of the Freljord to help him perfect his latest concoction. He is impulsive, headstrong, and renowned for the brawls he starts, which often end in all-night parties and widespread property damage. Any appearance from Gragas must surely foreshadow merriment and destruction—in that order.",
  "patchLastChanged": "25.09",
  "positions": [
    "Jungle",
    "Middle",
    "Top"
  ],
  "price": {
    "blueEssence": 1575,
    "rp": 790
  },
  "releaseDate": "2010-02-02",
  "resource": "Mana",
  "roles": [
    "Fighter",
    "Mage",
    "Vanguard"
  ],
  "stats": {
    "health": {
      "flat": 640,
      "perLevel": 115
    },
    "healthRegen": {
      "flat": 5.5,
      "perLevel": 0.5
    },
    "mana": {
      "flat": 400,
      "perLevel": 47
    },
    "manaRegen": {
      "flat": 6,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 38,
      "perLevel": 5
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 64,
      "perLevel": 3.5
    },
    "movespeed": {
      "flat": 330
    },
    "acquisitionRadius": {
      "flat": 600
    },
    "selectionRadius": {
      "flat": 140
    },
    "pathingRadius": {
      "flat": 50
    },
    "gameplayRadius": {
      "flat": 80
    },
    "criticalStrikeDamage": {
      "flat": 175
    },
    "criticalStrikeDamageModifier": {
      "flat": 1
    },
    "attackSpeed": {
      "flat": 0.675,
      "perLevel": 2.05
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
      "flat": -0.05
    },
    "attackRange": {
      "flat": 125
    }
  }
}
export default champion