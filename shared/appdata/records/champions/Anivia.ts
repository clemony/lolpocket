// Updated Patch 25.19 - 10/07/2025 08:16:12 AM CDT

const champion: Champion = {
  "id": 34,
  "key": "Anivia",
  "name": "Anivia",
  "title": "the Cryophoenix",
  "abilities": [
    {
      "key": "P",
      "name": "Rebirth",
      "affects": "Self",
      "blurb": "Innate: Periodically, upon  dying,  Anivia will instead revert into an egg. If the egg can survive for a few seconds, she is gloriously  reborn.",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Periodically, upon taking fatal damage, Anivia enters resurrection for 6 seconds and restores all of her health.</p>"
        },
        {
          "description": "While under resurrection, Anivia is unable to act and gains -40 - 20 (based on level) bonus armor and bonus magic resistance."
        },
        {
          "description": "If Anivia remains alive by the end of the duration, she is revived with her current health."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Anivia/ability-icon/p",
      "notes": "Triggering Rebirth will break  tethers on Anivia.\n Chronoshift and  Guardian Angel will take priority over Rebirth.\nIf Rebirth triggers while Anivia is channeling  Teleport, her channel won't be interrupted.\nAll other  channels will be interrupted upon triggering Rebirth.\nThe following refers for interactions while Anivia is resurrecting:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll summoner spells are disabled\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Flash Frost",
      "width": "220",
      "affects": "Enemies",
      "blurb": "Active:  Anivia launches a chunk of ice that deals magic damage and  slows enemies hit.",
      "castTime": "0.25",
      "cooldown": "12 / 11 / 10 / 9 / 8",
      "cost": "80 / 85 / 90 / 95 / 100",
      "damageType": "Magic damage",
      "effectRadius": "225",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Anivia launches a chunk of ice in the target direction that deals magic damage to enemies hit and slows them by 20% - 40% (based on Glacial Storm's Rank) for 3 seconds.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "50 / 70 / 90 / 110 / 130"
                },
                {
                  "unit": "% AP",
                  "values": "25"
                }
              ]
            }
          ]
        },
        {
          "description": "Flash Frost can be recast while the ice is in flight after its cast time, and does so automatically at maximum range."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Anivia shatters the ice, dealing magic damage to nearby enemies and stunning them for a duration, as well as refreshing the slow.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "60 / 95 / 130 / 165 / 200"
                },
                {
                  "unit": "% AP",
                  "values": "45"
                }
              ]
            },
            {
              "attribute": "Total Magic Damage",
              "modifiers": [
                {
                  "values": "110 / 165 / 220 / 275 / 330"
                },
                {
                  "unit": "% AP",
                  "values": "70"
                }
              ]
            },
            {
              "attribute": "Stun Duration",
              "modifiers": [
                {
                  "unit": " seconds",
                  "values": "1.1 / 1.2 / 1.3 / 1.4 / 1.5"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Anivia/ability-icon/q",
      "maxCharges": -1,
      "notes": "The initial cast and the manual recast count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nIf the ability is not manually recasted, the secondary effect will trigger without being considered as an ability activation.\nFlash Frost can only proc  Conqueror once even if it damages the same target twice.\nFlash Frost will fire from wherever Anivia was at the start of the cast time.\n Spell shield can only prevent either the collision hit or recast from affecting the target.",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "950",
      "spellEffects": "spellaoe",
      "spellshieldable": "Special",
      "targeting": "Direction / Auto"
    },
    {
      "key": "W",
      "name": "Crystallize",
      "affects": "Enemies",
      "blurb": "Active:  Anivia  erects a wall of ice that lingers for a few seconds, blocking movement.",
      "castTime": "0.25",
      "cooldown": "17",
      "cost": "70",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Anivia summons a wall of ice at the target location perpendicular to her facing, knocking all units away from it, though not through terrain. The wall lingers as impassable terrain for 5 seconds.</p>",
          "leveling": [
            {
              "attribute": "Width",
              "modifiers": [
                {
                  "unit": " units",
                  "values": "600 / 700 / 800 / 900 / 1000"
                }
              ]
            },
            {
              "attribute": "Number of ice segments",
              "modifiers": [
                {
                  "unit": " chunks of ice",
                  "values": "4 / 5 / 6 / 7 / 8"
                }
              ]
            },
            {
              "attribute": "Distance between outermost segments",
              "modifiers": [
                {
                  "unit": " units",
                  "values": "400 / 500 / 600 / 700 / 800"
                }
              ]
            },
            {
              "attribute": "Distance between individual segments",
              "modifiers": [
                {
                  "unit": " units",
                  "values": "133.33 / 125 / 120 / 116.67 / 114.29"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Anivia/ability-icon/w",
      "maxCharges": -1,
      "notes": "Crystallize's displacement triggers in-combat effects by dealing 0  proc  true damage, such as drawing turret aggro,  Sudden Impact and applying  Elixir of Sorcery.\nIndividual ice chunks have both 100 units  pathing radius and  gameplay radius.\n Champions are knocked 120 units to either side of a wall segment, non-champions 250 units.\nPENDING FOR TEST: Knockback speed?\nPlayer-generated terrain such as Crystallize does not block  sight.",
      "resource": "Mana",
      "spellshieldable": "false",
      "targeting": "Location",
      "targetRange": "1000 / 100"
    },
    {
      "key": "E",
      "name": "Frostbite",
      "affects": "Enemies",
      "blurb": "Active:  Anivia blasts a freezing wind at the target enemy that deals magic damage.",
      "castTime": "0.25",
      "cooldown": "4",
      "cost": "50",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Enemies hit by Flash Frost or a fully formed Glacial Storm become Chilled for 3 seconds, refreshing on subsequent hits.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Anivia blasts a freezing wind at the target enemy that deals magic damage, doubled if they were Chilled.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "50 / 75 / 100 / 125 / 150"
                },
                {
                  "unit": "% AP",
                  "values": "55"
                }
              ]
            },
            {
              "attribute": "Enhanced Damage",
              "modifiers": [
                {
                  "values": "100 / 150 / 200 / 250 / 300"
                },
                {
                  "unit": "% AP",
                  "values": "110"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Anivia/ability-icon/e",
      "maxCharges": -1,
      "notes": "The damage of Frostbite is calculated once it hits. If the target's mark from being hit by  Flash Frost or a fully formed  Glacial Storm wears off while the projectile is traveling, the damage is not doubled.\nFrostbite has a different sound effect when it hits a target for double damage.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "1600",
      "spellEffects": "spell",
      "spellshieldable": "True",
      "targeting": "Unit",
      "targetRange": "600"
    },
    {
      "key": "R",
      "name": "Glacial Storm",
      "affects": "Enemies",
      "blurb": "Toggle:  Anivia summons a driving rain of ice and hail at the target location that continually deals  magic damage and  slows enemies within.",
      "castTime": "none",
      "cooldown": "4 / 3 / 2",
      "cost": "60",
      "damageType": "Magic damage",
      "effectRadius": "200 : 400 (based on time active)",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Anivia calls forth a driving rain of ice and hail at the target location, dealing magic damage every 0.5 seconds to enemies within and slowing them for 1 second, refreshing every 0.5 seconds while they remain inside.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage per Tick",
              "modifiers": [
                {
                  "values": "15 / 22.5 / 30"
                },
                {
                  "unit": "% AP",
                  "values": "6.25"
                }
              ]
            },
            {
              "attribute": "Slow",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "20 / 30 / 40"
                }
              ]
            }
          ]
        },
        {
          "description": "The blizzard increases in size over 1.5 seconds. At maximum size, Glacial Storm is empowered to deal 300% damage and increase the effectiveness of its slow by 50%, which also instead lasts 1.5 seconds and refreshes every 0.25 seconds.",
          "leveling": [
            {
              "attribute": "Empowered Damage per Tick",
              "modifiers": [
                {
                  "values": "45 / 67.5 / 90"
                },
                {
                  "unit": "% AP",
                  "values": "18.75"
                }
              ]
            },
            {
              "attribute": "Empowered Slow",
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
          "description": "Glacial Storm can be recast after 1 second, and does so automatically if Anivia is no longer in range or unable to pay the mana cost, or becomes affected by any form of interrupting crowd control."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Anivia ends Glacial Storm, dealing one last tick of damage.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Anivia/ability-icon/r",
      "maxCharges": -1,
      "notes": "Toggle abilities do not count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nGlacial Storm's slow leaves a trail that is visible even if the target is stealthed.\nGlacial Storm deals 3 half ticks at 200 / 267 / 333 radius for a total of 1.5 normal damage ticks before it starts dealing empowered damage at 400 radius.\n Stasis via  Zhonya's Hourglass doesn't interrupt Glacial Storm.\n Tahm Kench's  Devour does interrupt (allied and enemy) Glacial Storm.",
      "resource": "Other",
      "spellEffects": "aoedot",
      "spellshieldable": "False",
      "targeting": "Location / Auto",
      "targetRange": "750",
      "tetherRadius": "1000"
    }
  ],
  "adaptiveType": "Magic damage",
  "attackType": "Ranged",
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 3,
    "mobility": 1,
    "utility": 2,
    "abilityReliance": 100,
    "difficulty": 2
  },
  "faction": "freljord",
  "lore": "Anivia is a benevolent winged spirit who endures endless cycles of life, death, and rebirth to protect the Freljord. A demigod born of unforgiving ice and bitter winds, she wields those elemental powers to thwart any who dare disturb her homeland. Anivia guides and protects the tribes of the harsh north, who revere her as a symbol of hope, and a portent of great change. She fights with every ounce of her being, knowing that through her sacrifice, her memory will endure, and she will be reborn into a new tomorrow.",
  "patchLastChanged": "25.13",
  "positions": [
    "Middle"
  ],
  "price": {
    "blueEssence": 1575,
    "rp": 790
  },
  "releaseDate": "2009-07-10",
  "resource": "Mana",
  "roles": [
    "Battlemage",
    "Mage",
    "Support"
  ],
  "stats": {
    "health": {
      "flat": 550,
      "perLevel": 92
    },
    "healthRegen": {
      "flat": 5.5,
      "perLevel": 0.55
    },
    "mana": {
      "flat": 495,
      "perLevel": 45
    },
    "manaRegen": {
      "flat": 8,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 21,
      "perLevel": 4.5
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 51,
      "perLevel": 3.2
    },
    "movespeed": {
      "flat": 325
    },
    "acquisitionRadius": {
      "flat": 600
    },
    "selectionRadius": {
      "flat": 140
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
      "flat": 0.658,
      "perLevel": 1.68
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
      "flat": 600
    }
  }
}
export default champion