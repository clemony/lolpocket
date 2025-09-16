// Updated Patch 25.17 - 09/14/2025 05:55:13 PM CDT

const champion: Champion = {
  "id": 25,
  "key": "Morgana",
  "name": "Morgana",
  "title": "the Fallen",
  "resource": "Mana",
  "attackType": "Ranged",
  "adaptiveType": "Magic damage",
  "stats": {
    "health": {
      "flat": 630,
      "perLevel": 104
    },
    "healthRegen": {
      "flat": 5.5,
      "perLevel": 0.4
    },
    "mana": {
      "flat": 340,
      "perLevel": 60
    },
    "manaRegen": {
      "flat": 11,
      "perLevel": 0.4
    },
    "armor": {
      "flat": 25,
      "perLevel": 5
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 56,
      "perLevel": 3.5
    },
    "movespeed": {
      "flat": 335
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
      "flat": 0.625,
      "perLevel": 1.53
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
      "flat": -0.16
    },
    "attackRange": {
      "flat": 450
    }
  },
  "positions": [
    "Support"
  ],
  "roles": [
    "Catcher",
    "Mage",
    "Support"
  ],
  "attributeRatings": {
    "damage": 2,
    "toughness": 1,
    "control": 3,
    "mobility": 1,
    "utility": 2,
    "abilityReliance": 100,
    "difficulty": 1
  },
  "abilities": [
    {
      "name": "Soul Siphon",
      "key": "P",
      "icon": "https://cdn.communitydragon.org/latest/champion/Morgana/ability-icon/p",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Morgana heals herself for 18% of the post-mitigation damage dealt by her abilities against champions, large minions, and medium and large monsters.</p>"
        }
      ],
      "targeting": "Passive",
      "affects": "Self",
      "notes": "No additional details.",
      "blurb": "Innate:  Morgana  heals herself for a portion of the damage dealt by her abilities against  champions, large  minions, and medium and large  monsters."
    },
    {
      "name": "Dark Binding",
      "key": "Q",
      "icon": "https://cdn.communitydragon.org/latest/champion/Morgana/ability-icon/q",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Morgana throws a sphere of dark magic in the target direction that deals magic damage to the first enemy hit and roots them for a duration.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "80 / 135 / 190 / 245 / 300"
                },
                {
                  "values": "90",
                  "unit": "% AP"
                }
              ]
            },
            {
              "attribute": "Root Duration",
              "modifiers": [
                {
                  "values": "2 / 2.25 / 2.5 / 2.75 / 3",
                  "unit": " seconds"
                }
              ]
            }
          ]
        }
      ],
      "cost": "50 / 55 / 60 / 65 / 70",
      "cooldown": "10",
      "targeting": "Direction",
      "affects": "Enemies",
      "spellshieldable": "True",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "Single target",
      "projectile": "TRUE",
      "notes": "This ability will cast from wherever the caster is at the start of the cast time.",
      "blurb": "Active:  Morgana throws a sphere of dark magic in the target direction that deals magic damage to the first enemy hit and  roots them for a \"short time\".",
      "speed": "1200",
      "width": "140",
      "castTime": "0.25",
      "maxCharges": -1
    },
    {
      "name": "Tormented Shadow",
      "key": "W",
      "icon": "https://cdn.communitydragon.org/latest/champion/Morgana/ability-icon/w",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Tormented Shadow's current cooldown is reduced by 5% of its total cooldown whenever Soul Siphon triggers. Simultaneous triggers from multiple targets will stack the cooldown reduction.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Morgana torments the soil at the target location, causing the area to become desecrated for 5 seconds. Enemies within take magic damage on-cast and every 0.5 seconds, increased by 0% - 170% (based on target's missing health). Tormented Shadow deals 170% damage against monsters.</p>",
          "leveling": [
            {
              "attribute": "Minimum Damage Per Tick",
              "modifiers": [
                {
                  "values": "6 / 11.5 / 17 / 22.5 / 28"
                },
                {
                  "values": "8.5",
                  "unit": "% AP"
                }
              ]
            },
            {
              "attribute": "Maximum Damage Per Tick",
              "modifiers": [
                {
                  "values": "16.2 / 31.05 / 45.9 / 60.75 / 75.6"
                },
                {
                  "values": "22.95",
                  "unit": "% AP"
                }
              ]
            },
            {
              "attribute": "Minimum Total Damage",
              "modifiers": [
                {
                  "values": "60 / 115 / 170 / 225 / 280"
                },
                {
                  "values": "85",
                  "unit": "% AP"
                }
              ]
            },
            {
              "attribute": "Maximum Total Damage",
              "modifiers": [
                {
                  "values": "162 / 310.5 / 459 / 607.5 / 756"
                },
                {
                  "values": "229.5",
                  "unit": "% AP"
                }
              ]
            }
          ]
        }
      ],
      "cost": "70 / 80 / 90 / 100 / 110",
      "cooldown": "12",
      "targeting": "Location",
      "affects": "Enemies",
      "spellshieldable": "False",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "aoedot",
      "notes": "Damage from multiple Tormented Shadows does not stack.",
      "blurb": "Passive: Tormented Shadow's current cooldown is  reduced whenever  Soul Siphon triggers.",
      "castTime": "0.25",
      "effectRadius": "280",
      "targetRange": "900",
      "maxCharges": -1
    },
    {
      "name": "Black Shield",
      "key": "E",
      "icon": "https://cdn.communitydragon.org/latest/champion/Morgana/ability-icon/e",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Morgana grants a shield to the target allied champion or herself for 5 seconds, which absorbs incoming magic damage and grants crowd control immunity while it holds.</p>",
          "leveling": [
            {
              "attribute": "Magic Shield Strength",
              "modifiers": [
                {
                  "values": "100 / 155 / 210 / 265 / 320"
                },
                {
                  "values": "70",
                  "unit": "% AP"
                }
              ]
            }
          ]
        }
      ],
      "cost": "80",
      "cooldown": "26 / 23.5 / 21 / 18.5 / 16",
      "targeting": "Unit",
      "affects": "Self, Allies",
      "resource": "Mana",
      "notes": "Black Shield will not resist self nor allied  crowd control (including e.g. an allied  Tempered Fate).\nBlack Shield will not resist  nearsight.\nBlack Shield negates  crowd control effects before any magic damage is absorbed; even if the shield is broken by an enemy dealing enough damage, its associated disables will not apply. Shield-destroying effects bypass this however, since they destroy the shield before applying their effects.\nBlack Shield will not prevent effects other than  crowd control from triggering (e.g.  Malzahar's  Nether Grasp will not  suppress a target protected by Black Shield but the  tether still applies).\nAlthough not considered a crowd control effect, Black Shield is special-cased to block  Illaoi's  Test of Spirit's spirit pull.\nBlack Shield takes priority over other sources of  crowd control immunity and those that grant immunity to specific types of crowd control ( displacement immunity and  slow immunity).\n Spell shield will take priority over Black Shield.\nBlack Shield will always take priority over regular  shields. If used in conjunction with Lifeline, the most recently-applied one will have priority however.\nBlack Shield has a  forgiveness radius of 175 units.",
      "blurb": "Active:  Morgana  shields the target allied champion or herself for a few seconds, which absorbs magic damage and grants  crowd control immunity while the shield holds.",
      "castTime": "none",
      "targetRange": "800",
      "maxCharges": -1
    },
    {
      "name": "Soul Shackles",
      "key": "R",
      "icon": "https://cdn.communitydragon.org/latest/champion/Morgana/ability-icon/r",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Morgana latches chains of energy onto nearby enemy champions over the cast time, dealing magic damage and forming a tether between herself and each target for 3 seconds, during which she gains bonus movement speed and the targets are revealed and slowed by 20%.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "200 / 275 / 350"
                },
                {
                  "values": "80",
                  "unit": "% AP"
                }
              ]
            },
            {
              "attribute": "Total Magic Damage",
              "modifiers": [
                {
                  "values": "400 / 550 / 700"
                },
                {
                  "values": "160",
                  "unit": "% AP"
                }
              ]
            },
            {
              "attribute": "Bonus Movement Speed",
              "modifiers": [
                {
                  "values": "20 / 40 / 60",
                  "unit": "%"
                }
              ]
            }
          ]
        },
        {
          "description": "If a target does not break their tether by the end of its duration, they are dealt the same magic damage again and become stunned for a duration, during which they are revealed.",
          "leveling": [
            {
              "attribute": "Stun Duration",
              "modifiers": [
                {
                  "values": "1.5 / 1.75 / 2",
                  "unit": " seconds"
                }
              ]
            }
          ]
        },
        {
          "description": "An enemy champion within 575 units is required to cast this ability. The target does not have to be visible to be tethered by this ability."
        }
      ],
      "cost": "100",
      "cooldown": "120 / 110 / 100",
      "targeting": "Proximity",
      "affects": "Enemies",
      "spellshieldable": "Special",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "aoe",
      "projectile": "FALSE",
      "notes": "Spell shield will block the tether's application and initial damage but not the aftereffects of one already applied.\nMorgana will turn to face southeast upon casting Soul Shackles.\nA circle indicator for Soul Shackles' maximum tether range is visible to Morgana and her tethered targets only.",
      "blurb": "Active:  Morgana latches chains of energy onto nearby enemy champions, dealing magic damage and forming a  tether between herself and each target for a short time, during which the targets are  revealed and  slowed, and Morgana gains  bonus movement speed.",
      "tetherRadius": "625",
      "castTime": "0.35",
      "effectRadius": "625",
      "maxCharges": -1
    }
  ],
  "lore": "Conflicted between her celestial and mortal natures, Morgana bound her wings to embrace humanity, and inflicts her pain and bitterness upon the dishonest and the corrupt. She rejects laws and traditions she believes are unjust, and fights for truth from the shadows of Demacia—even as others seek to repress it—by casting shields and chains of dark fire. More than anything else, Morgana truly believes that even the banished and outcast may one day rise again.",
  "faction": "demacia",
  "releaseDate": "2009-02-21",
  "patchLastChanged": "25.09",
  "price": {
    "blueEssence": 675,
    "rp": 585
  }
}
export default champion