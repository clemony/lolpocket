// Updated Patch 25.17 - 09/18/2025 02:20:02 AM CDT

const champion: Champion = {
  "id": 120,
  "key": "Hecarim",
  "name": "Hecarim",
  "title": "the Shadow of War",
  "abilities": [
    {
      "key": "P",
      "name": "Warpath",
      "affects": "Self",
      "blurb": "Innate:  Hecarim gains  bonus attack damage equal to a portion of his  bonus movement speed.",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Hecarim gains bonus attack damage equal to 12% - 24% (based on level) of his bonus movement speed.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Hecarim/ability-icon/p",
      "notes": "Warpath's bonus attack damage will adjust itself to any temporary movement speed buffs and debuffs Hecarim is affected by.\nSince this only affects bonus values Hecarim will not dip below his regular attack damage if he is  slowed below his base movement speed.\nThe amount of movement speed scaling to bonus attack damage is refreshed every 0.25 seconds.",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Rampage",
      "affects": "Self, Enemies",
      "blurb": "Active:  Hecarim cleaves his glaive to deal physical damage to nearby enemies.",
      "castTime": "none",
      "cooldown": "4",
      "cost": "28 / 26 / 24 / 22 / 20",
      "damageType": "Physical damage",
      "effectRadius": "375",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Hecarim cleaves his glaive around himself, dealing physical damage to nearby enemies, reduced to 60% against minions.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "60 / 85 / 110 / 135 / 160"
                },
                {
                  "unit": "% bonus AD",
                  "values": "90"
                }
              ]
            },
            {
              "attribute": "Minion damage",
              "modifiers": [
                {
                  "values": "36 / 51 / 66 / 81 / 96"
                },
                {
                  "unit": "% bonus AD",
                  "values": "54"
                }
              ]
            }
          ]
        },
        {
          "description": "If this damages an enemy, Hecarim gains a stack of Rampage for 8 seconds, refreshing on subsequent damage and stacking up to 3 times. Each stack increases Rampage's damage by 3% (+ 4% per 100 bonus AD) and reduces its base cooldown by 0.75 seconds, up to a 9% (+ 12% per 100 bonus AD) damage increase and a 2.25-second reduction of the base cooldown at maximum stacks. Stacks expire by one every 1 second when the duration ends."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Hecarim/ability-icon/q",
      "maxCharges": -1,
      "notes": "No additional notes.",
      "resource": "Mana",
      "spellEffects": "spellaoe",
      "spellshieldable": "True",
      "targeting": "Auto"
    },
    {
      "key": "W",
      "name": "Spirit of Dread",
      "affects": "Self, Enemies",
      "blurb": "Active:  Hecarim continually deals magic damage to nearby enemies for a short time.",
      "castTime": "none",
      "cooldown": "14",
      "cost": "50 / 55 / 60 / 65 / 70",
      "damageType": "Magic damage",
      "effectRadius": "525",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Hecarim surrounds himself with the Spirit of Dread for 4 seconds, dealing magic damage every second to nearby enemies.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage Per Tick",
              "modifiers": [
                {
                  "values": "20 / 30 / 40 / 50 / 60"
                },
                {
                  "unit": "% AP",
                  "values": "20"
                }
              ]
            },
            {
              "attribute": "Total Magic Damage",
              "modifiers": [
                {
                  "values": "100 / 150 / 200 / 250 / 300"
                },
                {
                  "unit": "% AP",
                  "values": "100"
                }
              ]
            }
          ]
        },
        {
          "description": "While active, Hecarim gains bonus armor and bonus magic resistance and is healed for 25% of the post-mitigation damage dealt to enemies within the area from all sources, halved to 12.5% for damage dealt by allies. The healing is capped against minions and monsters.",
          "leveling": [
            {
              "attribute": "Bonus Resistances",
              "modifiers": [
                {
                  "values": "5 / 10 / 15 / 20 / 25"
                }
              ]
            },
            {
              "attribute": "Capped Healing",
              "modifiers": [
                {
                  "values": "120 / 150 / 180 / 210 / 240"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Hecarim/ability-icon/w",
      "maxCharges": -1,
      "notes": "The healing cap against minions accounts for every single one regardless of how many are present and/or affected by Spirit of Dread at the time of cast.",
      "resource": "Mana",
      "spellEffects": "AoeDoT",
      "spellshieldable": "False",
      "targeting": "Auto"
    },
    {
      "key": "E",
      "name": "Devastating Charge",
      "affects": "Self",
      "blurb": "Active:  Hecarim becomes  ghosted and builds up  bonus movement speed over a short time.",
      "castTime": "none",
      "cooldown": "20 / 19 / 18 / 17 / 16",
      "cost": "60",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Hecarim becomes ghosted and gains 25% - 65% (based on time active) bonus total movement speed for 4 seconds.</p>"
        },
        {
          "description": "During this time, Hecarim empowers his next basic attack to gain 50 - 250 (based on distance traveled) bonus range and cause him to dash in the target's direction, revealing them for 1 second. If the target remains nearby during the dash, the ghosting and bonus movement speed ends prematurely and Hecarim knocks them back 150 - 350 (based on distance traveled) units, though not through terrain, stuns them for 0.25 seconds, and deals them modified physical damage, increased by 0% - 100% (based on distance traveled).",
          "leveling": [
            {
              "attribute": "Minimum Physical Damage",
              "modifiers": [
                {
                  "values": "30 / 45 / 60 / 75 / 90"
                },
                {
                  "unit": "% bonus AD",
                  "values": "50"
                }
              ]
            },
            {
              "attribute": "Maximum Physical Damage",
              "modifiers": [
                {
                  "values": "60 / 90 / 120 / 150 / 180"
                },
                {
                  "unit": "% bonus AD",
                  "values": "100"
                }
              ]
            }
          ]
        },
        {
          "description": "Devastating Charge can critically strike for (75% + 40%) AD bonus physical damage."
        },
        {
          "description": "Devastating Charge resets Hecarim's basic attack timer. Hecarim can cast any of his abilities during the dash. Devastating Charge's duration is paused during Onslaught of Shadows."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Hecarim/ability-icon/e",
      "maxCharges": -1,
      "notes": "Hecarim can cast any of his abilities while  dashing.\n Onslaught of Shadows will interrupt the dash.\nIf the target does not remain nearby during the dash, Devastating Charge's effect will not be consumed.\nThe bonus movement speed  stacks multiplicatively with other sources of movement speed boosts.\nThe bonus attack range stacks additively with  Rapid Firecannon.\nDevastating Charge will still apply its effects to the target even if the  dash is  interrupted, but not if he goes into  resurrection.\nDevastating Charge's damage will apply  life steal and will affect structures.\n\"Distance traveled\" can be simple movement as well as  dashing and  blinking.\nDevastating Charge's damage will not bypass  block or  dodge but the  knock back will still be applied.\nDevastating Charge will still deal damage while  blinded.\nWhile  grounded or  rooted, Hecarim loses the  bonus attack range from Devastating Charge.\nHecarim will not use the empowered attack while  rooted.\nThe  dash does not follow targets. The target's position at the time of the enhanced attack is the direction Hecarim will leap to.\n Displacement immunity will not resist the application of the  stun.",
      "resource": "Mana",
      "spellEffects": "spell",
      "spellshieldable": "True",
      "targeting": "Auto"
    },
    {
      "key": "R",
      "name": "Onslaught of Shadows",
      "width": "80 / 480",
      "blurb": "Active:  Hecarim summons spectral riders and  charges in the target direction, dealing magic damage to enemies they pass through.",
      "castTime": "none",
      "cooldown": "140 / 120 / 100",
      "cost": "100",
      "damageType": "Magic damage",
      "effectRadius": "315",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Hecarim dashes with displacement immunity to the target location and summons 5 spectral riders in an arrow formation that charge alongside him in the target direction, dealing magic damage to all enemies in their path and revealing them for 2.5 seconds.</p>",
          "leveling": [
            {
              "attribute": "Magic damage",
              "modifiers": [
                {
                  "values": "150 / 250 / 350"
                },
                {
                  "unit": "% AP",
                  "values": "100"
                }
              ]
            }
          ]
        },
        {
          "description": "Upon arrival, he fears nearby enemies for 0.75 - 1.5 (based on distance traveled) seconds and slows them by 0% - 99% (based on distance from Hecarim)."
        },
        {
          "description": "The wave of spectral riders travels independently of Hecarim and will always charge at the same distance."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Hecarim/ability-icon/r",
      "maxCharges": -1,
      "notes": "The spectral rider missiles originate at Hecarim's location, 145 units behind and 100 units to either side of him, and 290 units behind and 200 units to either side. They travel 1510 units forward parallel to Hecarim from their origin each.\nOnly the spectral riders deal damage to enemies they pierce, Hecarim only dashes and fears enemies at the end of it.\nThe slow strength cannot be reduced by  slow resist.",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "1100",
      "spellEffects": "spellaoe",
      "spellshieldable": "True",
      "targeting": "Location",
      "targetRange": "300 / 1000"
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
    "abilityReliance": 65,
    "difficulty": 2
  },
  "faction": "shadow-isles",
  "lore": "Hecarim is a spectral fusion of man and beast, cursed to ride down the souls of the living for all eternity. When the Blessed Isles fell into shadow, this proud knight was obliterated by the destructive energies of the Ruination, along with all his cavalry and their mounts. Now, whenever the Black Mist reaches out across Runeterra, he leads their devastating charge, reveling in the slaughter and crushing the foe beneath his armored hooves.",
  "patchLastChanged": "14.24",
  "positions": [
    "Jungle"
  ],
  "price": {
    "blueEssence": 2400,
    "rp": 880
  },
  "releaseDate": "2012-04-18",
  "resource": "Mana",
  "roles": [
    "Diver",
    "Fighter",
    "Tank"
  ],
  "stats": {
    "health": {
      "flat": 625,
      "perLevel": 106
    },
    "healthRegen": {
      "flat": 7,
      "perLevel": 0.75
    },
    "mana": {
      "flat": 280,
      "perLevel": 40
    },
    "manaRegen": {
      "flat": 7,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 32,
      "perLevel": 5.45
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 66,
      "perLevel": 3.7
    },
    "movespeed": {
      "flat": 345
    },
    "acquisitionRadius": {
      "flat": 800
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
      "flat": 0.67,
      "perLevel": 2.5
    },
    "attackSpeedRatio": {
      "flat": 0.67
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
      "flat": 175
    }
  }
}
export default champion