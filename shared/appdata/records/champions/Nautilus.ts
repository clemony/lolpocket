// Updated Patch 25.17 - 09/18/2025 02:20:03 AM CDT

const champion: Champion = {
  "id": 111,
  "key": "Nautilus",
  "name": "Nautilus",
  "title": "the Titan of the Depths",
  "abilities": [
    {
      "key": "P",
      "name": "Staggering Blow",
      "affects": "Enemies",
      "blurb": "Innate:  Nautilus' basic attacks deal bonus physical damage and briefly  root the target.",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Nautilus' basic attacks are empowered to deal 14 - 116 (based on level) bonus physical damage and root the target for 0.75 - 1.5 (based on level) seconds.</p>"
        },
        {
          "description": "This effect cannot occur on the same target more than once every few seconds."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Nautilus/ability-icon/p",
      "notes": "Spell shield will block the  root but not the bonus damage.\nStaggering Blow's enhanced attack can be  blocked and  dodged (the on-target cooldown will still be applied).\nIt will fail to trigger while he is  blinded.\nThe empowered attack will not trigger against structures.",
      "onTargetCdStatic": "6",
      "spellEffects": "Proc",
      "spellshieldable": "Special",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Dredge Line",
      "width": "180 /  0",
      "affects": "Self, Enemies",
      "castTime": "0.25",
      "cooldown": "14 / 13 / 12 / 11 / 10",
      "cost": "60",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nautilus hurls his anchor in the target direction that stops on the first enemy or terrain hit.</p>"
        },
        {
          "description": "If the anchor hits an enemy, it deals magic damage, reveals them for 1.15 seconds, stuns them for 1 second, and drags them toward Nautilus while he also dashes toward them, both over 0.9 seconds.",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "85 / 130 / 175 / 220 / 265"
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
          "description": "If the anchor hits terrain, Nautilus dashes to that location and 50% of Dredge Line's cooldown and mana cost are refunded."
        },
        {
          "description": "Nautilus is unable to move or attack while Dredge Line is in flight. He can cast any of his abilities during the dash."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Nautilus/ability-icon/q",
      "maxCharges": -1,
      "notes": "Dredge Line has two hitboxes. The outer hitbox, shown by a visual effect on the ground, will hit champions edge-to-edge. The inner hitbox, shown by the anchor, can hit terrain. Near thinner walls, this can cause the ability to hit a champion on the other side.\nDredge Line turns Nautilus' facing direction accordingly upon hitting a valid target.\nDredge Line can interact with player-generated terrain.\nNautilus will  dash all the way to the target's location if Dredge Line executed them or they negated the  displacement.\nDredge Line will not interrupt any movement commands Nautilus was issued pre-cast so long as their directions somewhat correlate (this is intentional to smooth out traveling/escaping).\n Spell shield will block the ability but Nautilus will still dash partway to the target.\nThe anchor projectile will stop if Nautilus dies while the projectile is traveling. Enemies hit will still be dealt damage. The  drag and  root are not applied if Nautilus did not initiate the dash.\n Displacement immunity will not resist the application of the  stun.\nThis ability will cast from wherever the caster is at the start of the cast time.\nThe following table refers for interactions during Dredge Line's cast time.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "2000",
      "spellEffects": "spell",
      "spellshieldable": "Special",
      "targeting": "Direction"
    },
    {
      "key": "W",
      "name": "Titan's Wrath",
      "affects": "Self, Enemies",
      "blurb": "Active:  Nautilus  shields himself for a few seconds. While the shield holds, his  basic attacks apply Pain of Wrath to the target and surrounding enemies.",
      "castTime": "none",
      "cooldown": "12",
      "cost": "60",
      "damageType": "Magic damage",
      "effectRadius": "250",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nautilus grants himself a shield for 6 seconds, and while it holds, his basic attacks are empowered to apply Pain of Wrath to the target and surrounding non-structure enemies.</p>",
          "leveling": [
            {
              "attribute": "Shield Strength",
              "modifiers": [
                {
                  "values": "50 / 60 / 70 / 80 / 90"
                },
                {
                  "tooltip": "Scaling per rank:\n8 / 9 / 10 / 11 / 12% maximum health",
                  "unit": "% maximum health",
                  "values": "8 - 12"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Pain of Wrath:</span> The target takes magic damage over time, half dealt immediately and the other half dealt after 1.25 seconds.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "30 / 40 / 50 / 60 / 70"
                },
                {
                  "unit": "% AP",
                  "values": "40"
                }
              ]
            }
          ]
        },
        {
          "description": "Titan's Wrath resets Nautilus' basic attack timer."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Nautilus/ability-icon/w",
      "maxCharges": -1,
      "notes": "Pain of Wrath's first damage instance is tagged as  spell damage, while the second damage instance is tagged as  persistent damage.\nPain of Wrath damage over time debuff replaces itself when reapplied to the target, restarting its tick timer. This will prevent the second instance of damage from the previous debuff.\nPain of Wrath will be applied by Nautilus's basic attack if he is affected by Titan's Wrath at the start of the attack windup, even if Titan's Wrath expires during the windup.\nPain of Wrath will not be applied if the basic attack is  dodged or  blocked, but will be applied if it is  missed.\n Spell shield will block the ability (but only a single application).",
      "resource": "Mana",
      "spellEffects": "special",
      "spellshieldable": "special",
      "targeting": "Auto"
    },
    {
      "key": "E",
      "name": "Riptide",
      "affects": "Enemies",
      "blurb": "Active:  Nautilus sends three waves of explosions that radiate from him, each dealing magic damage and briefly  slowing enemies hit.",
      "castTime": "0.25",
      "cooldown": "7 / 6.5 / 6 / 5.5 / 5",
      "cost": "50 / 60 / 70 / 80 / 90",
      "damageType": "Magic damage",
      "effectRadius": "0 - 350 / 215 - 465 / 350 - 590",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nautilus sends three waves of explosions that radiate from him over 0.561 seconds. Each wave deals magic damage to enemies hit, reduced to 50% against those hit by subsequent waves beyond the first, and slows them by an amount that decays over 1.5 seconds.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "55 / 90 / 125 / 160 / 195"
                },
                {
                  "unit": "% AP",
                  "values": "50"
                }
              ]
            },
            {
              "attribute": "Reduced Damage",
              "modifiers": [
                {
                  "values": "27.5 / 45 / 62.5 / 80 / 97.5"
                },
                {
                  "unit": "% AP",
                  "values": "25"
                }
              ]
            },
            {
              "attribute": "Maximum Total Damage",
              "modifiers": [
                {
                  "values": "110 / 180 / 250 / 320 / 390"
                },
                {
                  "unit": "% AP",
                  "values": "100"
                }
              ]
            },
            {
              "attribute": "Slow",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "30 / 35 / 40 / 45 / 50"
                }
              ]
            }
          ]
        },
        {
          "description": "Riptide deals 150% damage against monsters.",
          "leveling": [
            {
              "attribute": "Monster Damage",
              "modifiers": [
                {
                  "values": "82.5 / 135 / 187.5 / 240 / 292.5"
                },
                {
                  "unit": "% AP",
                  "values": "75"
                }
              ]
            },
            {
              "attribute": "Reduced Monster Damage",
              "modifiers": [
                {
                  "values": "41.25 / 67.5 / 93.75 / 120 / 146.25"
                },
                {
                  "unit": "% AP",
                  "values": "37.5"
                }
              ]
            },
            {
              "attribute": "Maximum Total Monster Damage",
              "modifiers": [
                {
                  "values": "165 / 270 / 375 / 480 / 585"
                },
                {
                  "unit": "% AP",
                  "values": "150"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Nautilus/ability-icon/e",
      "maxCharges": -1,
      "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nThe first wave is centered around Nautilus, while the second and third wave are centered at an offset of 25 units in front of Nautilus at the original cast location.\nBecause of this, there are a zone each in which you can be hit by only 1 wave, or all 3 waves, respectively, without moving.\nThe first wave happens at 0 seconds after the cast time ends, the second wave at 0.297 seconds and the third wave at 0.561 seconds.\nThe intended timing may be 0.25 seconds for each delay, however these are the measured, effective times.\nThe explosions are only a visual effect. The first wave has 8, the seconds has 9, and the third wave has 10 explosions, equally distributed around the rings, starting with one explosion directly in Nautilus' facing direction on each.",
      "resource": "Mana",
      "spellEffects": "spellaoe",
      "spellshieldable": "true",
      "targeting": "Auto"
    },
    {
      "key": "R",
      "name": "Depth Charge",
      "affects": "Enemies",
      "blurb": "Active:  Nautilus sends a Depth Charge that chases the target enemy champion. It creates eruptions in its wake that deal magic damage to enemies hit, as well as briefly  knocking up and  stunning them.",
      "castTime": "0.46",
      "cooldown": "120 / 100 / 80",
      "cost": "100",
      "damageType": "Magic damage",
      "effectRadius": "225 / 300 / 750",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nautilus sends out a Depth Charge that chases the target enemy champion, accelerating over time and creating eruptions every 0.264 seconds in its wake that also briefly grant sight of the area. Enemies hit by the eruptions are dealt magic damage, knocked up for 1 second, and stunned for a duration.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "125 / 175 / 225"
                },
                {
                  "unit": "% AP",
                  "values": "40"
                }
              ]
            },
            {
              "attribute": "Stun Duration",
              "modifiers": [
                {
                  "unit": " seconds",
                  "values": "1 / 1.5 / 2"
                }
              ]
            }
          ]
        },
        {
          "description": "Upon reaching the primary target, the Depth Charge erupts a final time at their location. The primary target takes increased damage, is stunned for the same duration, and knocked up for a modified duration.",
          "leveling": [
            {
              "attribute": "Increased Damage",
              "modifiers": [
                {
                  "values": "150 / 275 / 400"
                },
                {
                  "unit": "% AP",
                  "values": "80"
                }
              ]
            },
            {
              "attribute": "Knock Up Duration",
              "modifiers": [
                {
                  "unit": " seconds",
                  "values": "1 / 1.5 / 2"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Nautilus/ability-icon/r",
      "maxCharges": -1,
      "notes": "Depth Charge starts in an offset from whichever direction Nautilus is facing at the end of the cast time.\nSince  Dredge Line's causes Nautilus to change his facing direction upon hitting a valid target, Depth Charge's starting point can be changed with a quick  Dredge Line + Depth Charge combo.\nEnemies a certain distance away from the charge / eruption are instead  knocked back.\nDepth Charge's final eruption will occur prematurely if the primary target moves more than 3000 units away from it.\nDepth Charge will not stop chasing if the target dies or becomes untargetable.\n Dredge Line will not override Depth Charge's  knock up.\n Displacement immunity will not resist the application of the  stun.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
      "projectile": "FALSE",
      "resource": "Mana",
      "speed": "275 + 466.67 per second",
      "spellEffects": "aoe",
      "spellshieldable": "true",
      "targeting": "Unit",
      "targetRange": "825"
    }
  ],
  "adaptiveType": "Magic damage",
  "attackType": "Melee",
  "attributeRatings": {
    "damage": 1,
    "toughness": 3,
    "control": 3,
    "mobility": 1,
    "utility": 1,
    "abilityReliance": 80,
    "difficulty": 2
  },
  "faction": "bilgewater",
  "lore": "A lonely legend as old as the first piers sunk in Bilgewater, the armored goliath known as Nautilus roams the dark waters off the coast of the Blue Flame Isles. Driven by a forgotten betrayal, he strikes without warning, swinging his enormous anchor to save the wretched, and drag the greedy to their doom. It is said he comes for those who forget to pay the “Bilgewater tithe”, pulling them down beneath the waves with him—an iron-clad reminder that none can escape the depths.",
  "patchLastChanged": "25.04",
  "positions": [
    "Support"
  ],
  "price": {
    "blueEssence": 2400,
    "rp": 880
  },
  "releaseDate": "2012-02-14",
  "resource": "Mana",
  "roles": [
    "Support",
    "Tank",
    "Vanguard"
  ],
  "stats": {
    "health": {
      "flat": 646,
      "perLevel": 100
    },
    "healthRegen": {
      "flat": 8.5,
      "perLevel": 0.55
    },
    "mana": {
      "flat": 400,
      "perLevel": 47
    },
    "manaRegen": {
      "flat": 8.65,
      "perLevel": 0.5
    },
    "armor": {
      "flat": 39,
      "perLevel": 4.95
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 61,
      "perLevel": 3.3
    },
    "movespeed": {
      "flat": 325
    },
    "acquisitionRadius": {
      "flat": 400
    },
    "selectionRadius": {
      "flat": 125
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
      "flat": 0.706,
      "perLevel": 1
    },
    "attackSpeedRatio": {
      "flat": 0.612
    },
    "attackCastTime": {
      "flat": 0.3
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackDelayOffset": {
      "flat": 0.006
    },
    "attackRange": {
      "flat": 175
    }
  }
}
export default champion