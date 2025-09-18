// Updated Patch 25.17 - 09/18/2025 02:20:04 AM CDT

const champion: Champion = {
  "id": 98,
  "key": "Shen",
  "name": "Shen",
  "title": "the Eye of Twilight",
  "abilities": [
    {
      "key": "P",
      "name": "Ki Barrier",
      "affects": "Self",
      "blurb": "Innate: Shen manifests a Spirit Blade that he can control with his abilities.",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> After completing an ability's effects, Shen grants himself a shield for 47 - 120 (based on level) (+ 13% bonus health) for 2.5 seconds. If Shen affects at least one other champion with an ability, Ki Barrier's cooldown is reduced by 4 - 8 (based on level) seconds.</p>"
        },
        {
          "description": "Shen manifests a Spirit Blade that he can control with Twilight Assault and Spirit's Refuge."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Shen/ability-icon/p",
      "notes": "The Spirit Blade spawns with Shen, teleports closer to him if he gets too far away, and instantly blinks to him if he uses any global  blink ( Teleport,  Recall, or  Stand United). It will also dissappear if Shen dies and reappear upon respawning.\nEnemies see an arrow pointing from Shen to the location of his Spirit Blade even if it is not visible.\n Twilight Assault will grant the shield if the Spirit Blade reaches Shen. If it is stopped, no shield is granted. It will grant the cooldown reduction upon hitting an enemy champion.\n Spirit's Refuge will grant the shield and/or the cooldown reduction after the protective zone disappears. It does not need to block attacks to trigger the cooldown reduction, just touch an ally champion at any point of the duration.\n Shadow Dash will grant the shield when the dash ends. It will grant the cooldown reduction upon hitting an enemy champion.\nIf the dash is  interrupted, the shield will instead be received the moment the  crowd control source is applied, before damage calculation (if any).\n Stand United will give the shield and/or the cooldown reduction upon completing the channel.",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Twilight Assault",
      "width": "160",
      "affects": "Enemies",
      "blurb": "Active:  Shen recalls his Spirit Blade to his location, which shortly  slows enemies hit while moving away from him.",
      "castTime": "none",
      "cooldown": "8 / 7.25 / 6.5 / 5.75 / 5",
      "cost": "140 / 130 / 120 / 110 / 100",
      "damageType": "Magic damage",
      "effectRadius": "Global",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Shen recalls his Spirit Blade to his location. Enemy champions hit are slowed for the next 2 seconds while moving away from Shen.</p>",
          "leveling": [
            {
              "attribute": "Slow",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "25 / 30 / 35 / 40 / 45"
                }
              ]
            }
          ]
        },
        {
          "description": "Once it arrives, Shen empowers his next 3 basic attacks within 8 seconds to gain 75 bonus range and deal bonus magic damage. Against structures, only the flat damage portion is applied.",
          "leveling": [
            {
              "attribute": "Bonus Magic Damage",
              "modifiers": [
                {
                  "values": "10 / 11.76 / 13.53 / 15.29 / 17.06 / 18.82 / 20.59 / 22.35 / 24.12 / 25.88 / 27.65 / 29.41 / 31.18 / 32.94 / 34.71 / 36.47 / 38.24 / 40"
                },
                {
                  "tooltip": "Scaling per rank:\n2 / 2.5 / 3 / 3.5 / 4% (+ 1.5% per 100 AP) of target's maximum health",
                  "unit": "% (+ 1.5% per 100 AP) of target's maximum health",
                  "values": "2 - 4"
                }
              ]
            },
            {
              "attribute": "Total Magic Damage",
              "modifiers": [
                {
                  "values": "30 / 35.29 / 40.59 / 45.88 / 51.18 / 56.47 / 61.76 / 67.06 / 72.35 / 77.65 / 82.94 / 88.24 / 93.53 / 98.82 / 104.12 / 109.41 / 114.71 / 120"
                },
                {
                  "tooltip": "Scaling per rank:\n6 / 7.5 / 9 / 10.5 / 12% (+ 4.5% per 100 AP) of target's maximum health",
                  "unit": "% (+ 4.5% per 100 AP) of target's maximum health",
                  "values": "6 - 12"
                }
              ]
            }
          ]
        },
        {
          "description": "If the Spirit Blade hit at least one enemy champion during the travel, the empowerment is enhanced to deal increased bonus magic damage and additionally grant Shen 50% bonus attack speed.",
          "leveling": [
            {
              "attribute": "Increased Bonus Damage",
              "modifiers": [
                {
                  "values": "10 / 11.76 / 13.53 / 15.29 / 17.06 / 18.82 / 20.59 / 22.35 / 24.12 / 25.88 / 27.65 / 29.41 / 31.18 / 32.94 / 34.71 / 36.47 / 38.24 / 40"
                },
                {
                  "tooltip": "Scaling per rank:\n5 / 5.5 / 6 / 6.5 / 7% (+ 2% per 100 AP) of target's maximum health",
                  "unit": "% (+ 2% per 100 AP) of target's maximum health",
                  "values": "5 - 7"
                }
              ]
            },
            {
              "attribute": "Total Increased Damage",
              "modifiers": [
                {
                  "values": "30 / 35.29 / 40.59 / 45.88 / 51.18 / 56.47 / 61.76 / 67.06 / 72.35 / 77.65 / 82.94 / 88.24 / 93.53 / 98.82 / 104.12 / 109.41 / 114.71 / 120"
                },
                {
                  "tooltip": "Scaling per rank:\n15 / 16.5 / 18 / 19.5 / 21% (+ 6% per 100 AP) of target's maximum health",
                  "unit": "% (+ 6% per 100 AP) of target's maximum health",
                  "values": "15 - 21"
                }
              ]
            }
          ]
        },
        {
          "description": "Empowered attacks against monsters deal 100% bonus damage, but their total damage is capped.",
          "leveling": [
            {
              "attribute": "Maximum Monster Damage",
              "modifiers": [
                {
                  "values": "120 / 140 / 160 / 180 / 200"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Shen/ability-icon/q",
      "maxCharges": -1,
      "notes": "The Spirit Blade will stop in place upon colliding with  Wind Wall or  Unbreakable. If this occurs, Shen will not receive the empowered attacks.\nWhen it is called, the Spirit Blade also checks for units which's  gameplay radius it overlaps which (equal to a  0 radius check) before flying off, allowing it to hit enemies whose center is behind the missile origin.\nThe empowered attack will not trigger against wards.",
      "projectile": "SPECIAL",
      "resource": "Energy",
      "speed": "2000 - 5000",
      "spellEffects": "Proc",
      "spellshieldable": "True",
      "targeting": "Auto"
    },
    {
      "key": "W",
      "name": "Spirit's Refuge",
      "affects": "Allies",
      "blurb": "Active:  Shen primes his Spirit Blade, creating an area around it. After a short time, or when Shen or allied champions enter the area, the Spirit Blade briefly erupts a protective zone that  blocks enemy basic attacks that hit Shen or allied champions in the area.",
      "castTime": "none",
      "cooldown": "16 / 14.5 / 13 / 11.5 / 10",
      "cost": "40",
      "effectRadius": "350",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Shen primes his Spirit Blade, creating an area around it. After 2 seconds, or when Shen or an allied champion enters the area, the Spirit Blade generates a protective zone for 1.75 seconds, blocking all non- turret basic attacks that hit Shen or allied champions in the area.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Shen/ability-icon/w",
      "maxCharges": -1,
      "notes": "Spirit's Refuge's protective zone can be moved while active if Shen uses  Twilight Assault.\nSpirit's Refuge cannot be ranked up at Level 1.\nSpirit's Refuge will also block damage from all abilities that use  basic damage ( Lunge,  Mystic Shot,  Steel Tempest).",
      "resource": "Energy",
      "targeting": "Auto"
    },
    {
      "key": "E",
      "name": "Shadow Dash",
      "affects": "Enemies",
      "blurb": "Passive: Dealing damage with  Twilight Assault or Shadow Dash will restore  energy.",
      "castTime": "none",
      "collisionRadius": "60 /  150",
      "cooldown": "18 / 16 / 14 / 12 / 10",
      "cost": "150",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Dealing damage with Twilight Assault or Shadow Dash restores 30 / 40 / 50 (based on level) energy.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Shen dashes to the target location, dealing physical damage to enemy champions and monsters he passes through and taunting them for 1.5 seconds.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "60 / 85 / 110 / 135 / 160"
                },
                {
                  "unit": "% bonus health",
                  "values": "11"
                }
              ]
            }
          ]
        },
        {
          "description": "Twilight Assault and Spirit's Refuge can be cast during the dash."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Shen/ability-icon/e",
      "maxCharges": -1,
      "notes": "Casting  Flash during Shadow Dash will end the dash prematurely, but the end-of-dash collision check will hit enemies at the blink's location still.\nThis still cannot affect the same enemy more than once.\nThe energy restore from Shadow Dash may only occur once.",
      "resource": "Energy",
      "speed": "800 + 100% movement speed",
      "spellEffects": "Area of effect",
      "spellshieldable": "True",
      "targeting": "Location",
      "targetRange": "600 / 300"
    },
    {
      "key": "R",
      "name": "Stand United",
      "affects": "Allies",
      "castTime": "none",
      "cooldown": "200 / 180 / 160",
      "cost": "0",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Shen focuses his will, channeling for 3 seconds and granting the target allied champion a shield for 5 seconds at the time of cast, increased by 0% - 60% (based on target's missing health).</p>",
          "leveling": [
            {
              "attribute": "Minimum Shield Strength",
              "modifiers": [
                {
                  "values": "120 / 220 / 320"
                },
                {
                  "unit": "% AP",
                  "values": "135"
                },
                {
                  "unit": "% of his bonus health",
                  "values": "15"
                }
              ]
            },
            {
              "attribute": "Maximum Shield Strength",
              "modifiers": [
                {
                  "values": "192 / 352 / 512"
                },
                {
                  "unit": "% AP",
                  "values": "216"
                },
                {
                  "unit": "% of his bonus health",
                  "values": "24"
                }
              ]
            }
          ]
        },
        {
          "description": "Upon completing the channel, Shen and his Spirit Blade blink to the target ally's location, placed between them and the nearest enemy champion. Shen also destroys any projectiles targeting him at the time of completion."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Shen/ability-icon/r",
      "maxCharges": -1,
      "notes": "Due to several character stats needing to be recalculated each time a character spawns, casting Stand United immediately upon respawning will cause its cooldown to be unaffected by ability haste, and the shielding will not be increased by Shen's ability power, but will be increased by his bonus maximum health. (bug)\nStand United can target allies via the mini map or on their portraits or by using the F2 - F5 keys (none of this can be done if Shen is affected by  nearsight or his target is  untargetable).\nShen will turn to face towards his target ally at the start of the channel.\nIf the target is  stealthed, enemies could, in theory, use this to estimate their location.\nShen will channel so long as his target is alive (even if the granted shield is broken). If his target dies, the channel is canceled and Stand United goes on full cooldown.\n Interrupting Stand United's channel will not remove the shield prematurely.\nThe target's screen will glow purple to telegraph that Shen has targeted them with Stand United.\nIt will change back when the channel ends.\nShen finds the nearest visible enemy champion within 2000 range from the ally or the nearest invisible champion within 600 range to place himself 175 units from his ally towards that enemy.\nStand United has a  forgiveness radius of 100 units.\nThe following table refers for interactions while Shen is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll summoner spells are disabled\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath Grounding effects Immobilizing effects Cast-inhibiting effects",
      "targeting": "Unit",
      "targetRange": "Global"
    }
  ],
  "adaptiveType": "Physical damage",
  "attackType": "Melee",
  "attributeRatings": {
    "damage": 2,
    "toughness": 3,
    "control": 2,
    "mobility": 2,
    "utility": 3,
    "abilityReliance": 45,
    "difficulty": 1
  },
  "faction": "ionia",
  "lore": "Among the secretive, Ionian warriors known as the Kinkou, Shen serves as their leader, the Eye of Twilight. He longs to remain free from the confusion of emotion, prejudice, and ego, and walks the unseen path of dispassionate judgment between the spirit realm and the physical world. Tasked with enforcing the equilibrium between them, Shen wields blades of steel and arcane energy against any who would threaten it.",
  "patchLastChanged": "25.12",
  "positions": [
    "Support",
    "Top"
  ],
  "price": {
    "blueEssence": 1575,
    "rp": 790
  },
  "releaseDate": "2010-03-24",
  "resource": "Energy",
  "roles": [
    "Tank",
    "Warden"
  ],
  "stats": {
    "health": {
      "flat": 610,
      "perLevel": 99
    },
    "healthRegen": {
      "flat": 8.5,
      "perLevel": 0.75
    },
    "mana": {
      "flat": 400
    },
    "manaRegen": {
      "flat": 50
    },
    "armor": {
      "flat": 34,
      "perLevel": 4.2
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 64,
      "perLevel": 3
    },
    "movespeed": {
      "flat": 340
    },
    "acquisitionRadius": {
      "flat": 400
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
      "flat": 0.751,
      "perLevel": 3
    },
    "attackSpeedRatio": {
      "flat": 0.651
    },
    "attackCastTime": {
      "flat": 0.267
    },
    "attackTotalTime": {
      "flat": 1.536
    },
    "attackDelayOffset": {
      "flat": 0
    },
    "attackRange": {
      "flat": 125
    }
  }
}
export default champion