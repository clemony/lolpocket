// Updated Patch 25.17 - 09/14/2025 05:55:13 PM CDT

const champion: Champion = {
  "id": 89,
  "key": "Leona",
  "name": "Leona",
  "title": "the Radiant Dawn",
  "resource": "Mana",
  "attackType": "Melee",
  "adaptiveType": "Physical damage",
  "stats": {
    "health": {
      "flat": 646,
      "perLevel": 101
    },
    "healthRegen": {
      "flat": 8.5,
      "perLevel": 0.85
    },
    "mana": {
      "flat": 302,
      "perLevel": 40
    },
    "manaRegen": {
      "flat": 6,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 43,
      "perLevel": 4.8
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 60,
      "perLevel": 3
    },
    "movespeed": {
      "flat": 335
    },
    "acquisitionRadius": {
      "flat": 400
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
      "perLevel": 2.9
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
      "flat": -0.071
    },
    "attackRange": {
      "flat": 125
    }
  },
  "positions": [
    "Support"
  ],
  "roles": [
    "Support",
    "Tank",
    "Vanguard"
  ],
  "attributeRatings": {
    "damage": 1,
    "toughness": 3,
    "control": 3,
    "mobility": 1,
    "utility": 1,
    "abilityReliance": 90,
    "difficulty": 1
  },
  "abilities": [
    {
      "name": "Sunlight",
      "key": "P",
      "icon": "https://cdn.communitydragon.org/latest/champion/Leona/ability-icon/p",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Leona's abilities mark enemies hit for 2.5 seconds, refreshing on subsequent hits. Allied champions' damaging attacks and abilities against a marked target will consume the mark to deal 32 - 151 (based on level) bonus magic damage.</p>"
        }
      ],
      "targeting": "Passive",
      "affects": "Enemies",
      "spellshieldable": "true",
      "damageType": "Magic damage",
      "spellEffects": "spell",
      "notes": "Sunlight's damage respects  enchantment redirection.\n Zyra has a hidden passive that grants her 10% increased size for 33 seconds after having Sunlight applied to her.",
      "blurb": "Innate:  Leona's abilities briefly mark enemies hit."
    },
    {
      "name": "Shield of Daybreak",
      "key": "Q",
      "icon": "https://cdn.communitydragon.org/latest/champion/Leona/ability-icon/q",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Leona illuminates her shield, empowering her next basic attack within 6 seconds to have a 0.25-second cast time, gain 50 bonus range, deal bonus magic damage and stun the target for 1 second.</p>",
          "leveling": [
            {
              "attribute": "Bonus Magic Damage",
              "modifiers": [
                {
                  "values": "10 / 35 / 60 / 85 / 110"
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
          "description": "Shield of Daybreak resets Leona's basic attack timer."
        }
      ],
      "cost": "30 / 35 / 40 / 45 / 50",
      "cooldown": "5",
      "targeting": "Auto",
      "affects": "Enemies",
      "spellshieldable": "True",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "spell",
      "notes": "The enhanced attack will apply other  on-hit effects and can  critically strike as normal.\n Critical strikes do not interact with Shield of Daybreak's bonus damage.\nPENDING FOR TEST:: Shield of Daybreak's interactions with  dodging,  blocking.\nShield of Daybreak's attack can  miss, nullifying its effects entirely.\nShield of Daybreak's attack does not put Leona's basic attack on cooldown.\nThis effectively performs a second  attack reset.\nThis is unlike other empowered attacks (including those which, similar to Shield of Daybreak, use a more unconventional spell cast rather than an attack override).\nLeona will wait out Shield of Daybreak's wind-down before automatically attacking, anyway. The player must issue the next attack themselves to gain the full benefit of the second reset.\nIf the target becomes  untargetable,  dies, or is too far away during the empowered attack's cast time, it is cancelled but not consumed.\nThe empowered attack will not trigger against structures.",
      "blurb": "Active:  Leona illuminates her shield, causing her next basic attack within a few seconds to deal bonus magic damage and briefly  stun the target.",
      "castTime": "none",
      "maxCharges": -1
    },
    {
      "name": "Eclipse",
      "key": "W",
      "icon": "https://cdn.communitydragon.org/latest/champion/Leona/ability-icon/w",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Leona raises her guard for 3 seconds, gaining flat damage reduction of up to 50% of the damage instance and bonus armor and bonus magic resistance.</p>",
          "leveling": [
            {
              "attribute": "Flat Damage Reduction",
              "modifiers": [
                {
                  "values": "8 / 12 / 16 / 20 / 24"
                }
              ]
            },
            {
              "attribute": "Bonus Armor",
              "modifiers": [
                {
                  "values": "20 / 27.5 / 35 / 42.5 / 50"
                },
                {
                  "values": "20",
                  "unit": "% bonus armor"
                }
              ]
            },
            {
              "attribute": "Bonus Magic Resistance",
              "modifiers": [
                {
                  "values": "20 / 27.5 / 35 / 42.5 / 50"
                },
                {
                  "values": "20",
                  "unit": "% bonus magic resistance"
                }
              ]
            }
          ]
        },
        {
          "description": "Her shield detonates after the duration, dealing magic damage to nearby enemies. If this hits an enemy, Leona's guard is extended for an additional 3 seconds.",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "55 / 85 / 115 / 145 / 175"
                },
                {
                  "values": "40",
                  "unit": "% AP"
                }
              ]
            }
          ]
        }
      ],
      "cost": "60",
      "cooldown": "14 / 13 / 12 / 11 / 10",
      "targeting": "Auto",
      "affects": "Self, Enemies",
      "spellshieldable": "special",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "spellaoe",
      "notes": "Neither the cast nor detonation of Eclipse interrupts any of Leona's previous orders or ongoing attack windups.\nThe resistance scaling will factor from all other sources, excluding Eclipse's flat bonus. This will recalculate over the duration.\n Spell shield will block the damage but Eclipse's extended duration will not be prevented.",
      "blurb": "Active:  Leona raises her guard for a short time, gaining flat damage reduction,  bonus armor and  bonus magic resistance.",
      "castTime": "none",
      "effectRadius": "450",
      "maxCharges": -1
    },
    {
      "name": "Zenith Blade",
      "key": "E",
      "icon": "https://cdn.communitydragon.org/latest/champion/Leona/ability-icon/e",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Leona projects her sword in the target direction that deals magic damage to enemies hit.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "50 / 90 / 130 / 170 / 210"
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
          "description": "If she hits at least one enemy champion, she will dash 225 units behind the last one struck within 3000 range and root them for 0.5 seconds."
        },
        {
          "description": "Leona is unable to move or attack while Zenith Blade is in flight. She can cast any of her abilities during the dash."
        }
      ],
      "cost": "40 / 45 / 50 / 55 / 60",
      "cooldown": "12 / 10.5 / 9 / 7.5 / 6",
      "targeting": "Direction",
      "affects": "Enemies",
      "spellshieldable": "true",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "aoe",
      "projectile": "TRUE",
      "notes": "Leona will be ordered to basic attack the target.\n Spell shield will block Zenith Blade's effects, and prevent Leona from dashing to the target.\nThis ability will cast from wherever the caster is at the end of the cast time.",
      "blurb": "Active:  Leona projects her sword in the target direction that deals magic damage to enemies hit.",
      "speed": "2000",
      "width": "140",
      "castTime": "0.25",
      "targetRange": "900",
      "maxCharges": -1
    },
    {
      "name": "Solar Flare",
      "key": "R",
      "icon": "https://cdn.communitydragon.org/latest/champion/Leona/ability-icon/r",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Leona calls down a solar flare that strikes upon the target location after 0.625 seconds, granting sight of the area before impact and for another 3 seconds afterwards. Enemies hit are dealt magic damage.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "150 / 225 / 300"
                },
                {
                  "values": "80",
                  "unit": "% AP"
                }
              ]
            }
          ]
        },
        {
          "description": "Targets are also slowed by 80% for 1.75 seconds, or stunned for the same duration if they are hit by the epicenter."
        }
      ],
      "cost": "100",
      "cooldown": "90 / 75 / 60",
      "targeting": "Location",
      "affects": "Enemies",
      "spellshieldable": "True",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "aoe",
      "notes": "Solar Flare's visual effects are only visible to enemies if they have  sight of the area it was cast upon.\nThe cast indicator shows 300 radius for the area of effect and 120 radius for the epicenter, however the actual hitbox radii are larger than those values.\nThe revealed radius is not obstructed by terrain or  brush.",
      "blurb": "Active:  Leona calls down a solar flare that strikes upon the target location, dealing magic damage to enemies hit.",
      "innerRadius": "100",
      "castTime": "0.25",
      "effectRadius": "325 / 175 / 800",
      "targetRange": "1200",
      "maxCharges": -1
    }
  ],
  "lore": "Imbued with the fire of the sun, Leona is a holy warrior of the Solari who defends Mount Targon with her Zenith Blade and the Shield of Daybreak. Her skin shimmers with starfire while her eyes burn with the power of the celestial Aspect within her. Armored in gold and bearing a terrible burden of ancient knowledge, Leona brings enlightenment to some, death to others.",
  "faction": "mount-targon",
  "releaseDate": "2011-07-13",
  "patchLastChanged": "25.09",
  "price": {
    "blueEssence": 225,
    "rp": 260
  }
}
export default champion