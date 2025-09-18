// Updated Patch 25.17 - 09/18/2025 02:20:04 AM CDT

const champion: Champion = {
  "id": 516,
  "key": "Ornn",
  "name": "Ornn",
  "title": "The Fire below the Mountain",
  "abilities": [
    {
      "key": "P",
      "name": "Living Forge",
      "affects": "Allies",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Living Forge:</span> Ornn can purchase non-consumable items from anywhere on the field by forging them himself, and is also presented a Forge Menu to quickly forge his recommended items. Once Ornn selects an item to forge, he channels for 4 seconds, building the item and paying its gold cost upon completion. The channel is interrupted if Ornn takes damage from enemy champions or turrets. Living Forge is disabled for 4 seconds after starting the channel.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Master Craftsman:</span> Ornn uses his craftsmanship in forgery to upgrade most Legendary items that he and his teammates own into Masterwork items, increasing the gold value of all upgradeable stats by exactly 1000, shared equally among them. When Ornn reaches level 13, the first eligible Legendary item in his inventory is upgraded automatically. For each level after 13 and before 18 (levels 14 - 17, total of 4, once per ally per game), Ornn can upgrade the first eligible Legendary item in an allied champion's inventory into its Masterwork variant. He can do so by selecting the ally while within 600 range, and forges the item by performing Living Forge's channel.Additionally, Ornn increases his bonus armor, bonus magic resistance and bonus health by 10% from all sources, further increased by 4% each time he upgrades a Legendary item into a Masterwork item, for a total increase of 30% to each stat after the maximum of 5 upgrades.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Temper:</span> Ornn's basic attacks against Brittle enemies knock them back a short distance. Ornn's and allies' immobilizing effects against Brittle enemies will consume the debuff to deal bonus magic damage equal to 10% - 18% (based on Ornn's level) of the target's maximum health, capped at 250 against monsters, and cause the crowd control to last 30% longer (if applicable).</p>"
        },
        {
          "description": "Ornn will prioritize upgrading the first Legendary item eligible for a Masterwork upgrade based on its position in the inventory, detecting each slot until an eligible item is found."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Ornn/ability-icon/p",
      "notes": "Ornn's Forge Menu is a special menu in the HUD which has 5 slots. The player can quickly forge one of the recommended items by  clicking on its portrait or via the Champion Specific Interaction hotkeys (default: Shift+F1:F5).\nMasterwork items inherit all properties of their pre-upgrade version, including the cooldowns of their effects. Internally, they are handled through an item modifier. An upgraded item gains the (Masterwork) descriptor next to its name in tooltips as well as a special Masterwork frame overlay on the item's icon itself, both indicating the application of Living Forge's modifier.\nStatistics' gold value for Masterwork item purposes is shown in the following table. The table also indicates all upgradeable stats.\n 31.25 per 1 point of ability haste.\n 20 per 1 point of ability power.\n 35 per 1 point of attack damage.\n 30 per 1% of attack speed.\n 20 per 1 point of armor.\n 18 per 1 point of magic resistance.\n1 point of health has a variable  gold value, based on the number of upgradeable stats that exist on the item:\nIf health is the item's only upgradeable stat, it receives +375 health and health is valued at  2.6 per point.\nIf the item has health and only one other upgradeable stat, it receives +185 health and health is valued at  2.702 per point.\nIf the item has health and two other upgradeable stats, it receives +125 health and health is valued at  2.6 per point.\nIf the item has health and three other upgradeable stats, it receives +90 health and health is valued at  2.7 per point.\nWhile not currently possible, if an item has no upgradeable stats,  1000 worth of health (valued at  2.6 per point) is added to the item.[2]\nDecimal values are not displayed for stats in Masterwork items' tooltips, but they are still granted as normal.\nHealth and mana items built on the field will retain Ornn's previous health and mana percentage. Returning to base still brings health and mana back to full.\nOrnn's basic attacks against  Brittle enemies will end the duration of the debuff on-hit prematurely even if the  knock back is not applied.\nHis basic attacks against  Brittle epic  monsters will still render the debuff without the  knock back being applied against them.\n Brittle's  Tenacity reduction will benefit all applicable types of  crowd control, not just  immobilizes. The following do not consume Brittle but benefit from the reduction:  blinds,  cripples,  disarms,  grounding,  silences, and  slows.\n Spell shield will block both the knock back and the bonus damage from Ornn's empowered  brittle attack.\nThe bonus magic damage inflicted by Brittle is credited to Ornn, and benefits from his  magic penetration.\nThe following table refers for interactions while Ornn is  channeling:\nAll of Ornn's actions are disabled during the first 0.5 seconds of the channel.\n\n\nType\n\nChannel\n\n\nAttacking\n\nInterrupts\n\n\nAbilities\n\nInterrupts\n\n\nMovement\n\nInterrupts\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nInterrupts\n\n\nSpells\n\nUsable\n\nN/A\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\nAll summoner spells interrupt\n\n\nInterrupted by\n\nDamaging effectsDeath Cast-inhibiting effects",
      "spellEffects": "Proc",
      "spellshieldable": "true",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Volcanic Rupture",
      "width": "130",
      "affects": "Enemies",
      "blurb": "Active:  Ornn sends a fissure in the target direction that deals physical damage and  slows enemies hit for a short time.",
      "castTime": "0.25",
      "cooldown": "9 / 8.5 / 8 / 7.5 / 7",
      "cost": "45",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ornn sends a fissure in the target direction that deals physical damage to enemies hit and slows them by 40% for 2 seconds.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "20 / 45 / 70 / 95 / 120"
                },
                {
                  "unit": "% AD",
                  "values": "110"
                }
              ]
            }
          ]
        },
        {
          "description": "The fissure stops at maximum range or 200 units behind the first enemy champion struck. After a 1.125-second delay, a magma pillar then erupts to knock aside enemies, though not through terrain, and linger as impassible terrain for 4 seconds."
        },
        {
          "description": "The pillar will not expire while Ornn is charging."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Ornn/ability-icon/q",
      "maxCharges": -1,
      "notes": "The fissure will move an 200 units beyond the first champion it hits, not exceeding the maximum range of the ability. It can still damage additional targets.\nIf launched in a wall, pillar will try to appear on the other side of the wall, if it cannot the pillar will be destroyed.\n Spell shield will not prevent the  knock aside from the magma pillar forming.\nThis ability will cast from wherever the caster is at the start of the cast time.",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "1800",
      "spellEffects": "spellaoe",
      "spellshieldable": "special",
      "targeting": "Direction",
      "targetRange": "750"
    },
    {
      "key": "W",
      "name": "Bellows Breath",
      "affects": "Self / Enemies",
      "blurb": "Active:  Ornn marches in the target direction with  displacement immunity, belching fire in a cone that continually deals magic damage for a brief time. The final gout of flame will apply  Brittle for a short time.",
      "castTime": "none",
      "cooldown": "12 / 11.5 / 11 / 10.5 / 10",
      "cost": "45 / 50 / 55 / 60 / 65",
      "damageType": "Magic damage",
      "effectRadius": "175",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ornn marches forward in the target direction over 0.75 seconds, gaining displacement immunity and becoming unable to act for the duration.</p>"
        },
        {
          "description": "Over the march he belches fire over a cone in front of him, dealing magic damage every 0.15 seconds to enemies hit. The final gout of flame can reach slightly farther and will apply Brittle for 3 seconds.",
          "leveling": [
            {
              "attribute": "Total Magic Damage",
              "modifiers": [
                {
                  "unit": "% of target's maximum health",
                  "values": "12 / 13 / 14 / 15 / 16"
                }
              ]
            },
            {
              "attribute": "Magic Damage Per Tick",
              "modifiers": [
                {
                  "unit": "% of target's maximum health",
                  "values": "2.4 / 2.6 / 2.8 / 3 / 3.2"
                }
              ]
            }
          ]
        },
        {
          "description": "Bellows Breath has a minimum damage threshold, which is also the damage dealt to minions, and is capped against monsters.",
          "leveling": [
            {
              "attribute": "Total Minimum/Minion Damage",
              "modifiers": [
                {
                  "values": "80 / 130 / 180 / 230 / 280"
                }
              ]
            },
            {
              "attribute": "Minimum/Minion Damage Per Tick",
              "modifiers": [
                {
                  "values": "16 / 26 / 36 / 46 / 56"
                }
              ]
            },
            {
              "attribute": "Total Monster Damage Cap",
              "modifiers": [
                {
                  "values": "155 / 180 / 205 / 230 / 255"
                }
              ]
            },
            {
              "attribute": "Monster Damage Cap Per Tick",
              "modifiers": [
                {
                  "values": "31 / 36 / 41 / 46 / 51"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Ornn/ability-icon/w",
      "maxCharges": -1,
      "notes": "Ornn's lunge distance is based on the distance he would travel in the target direction by standard movement over a time period of 0.75 seconds with 35% of his total movement speed.\nHis movement speed during the lunge does not actually change in this case and is only used as a scaling.\nThe scaling is based on the total movement speed Ornn had at the time of casting Bellows Breath.\nIf his total movement speed was less than or equal to an estimated value of 190, then Ornn will not lunge at all.\nWhile lunging, special VFX will be played when Ornn is first affected by  crowd control, even if that crowd control is not resisted by  displacement immunity.\n Spell shield will negate the final instance of damage and prevents  Brittle from being applied.\nOrnn can see the on-target VFX on targets that are being struck even while they are in the fog of war.\nThe following table refers for interactions while Ornn is performing Bellows Breath:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
      "projectile": "FALSE",
      "resource": "Mana",
      "spellEffects": "aoe",
      "spellshieldable": "Special",
      "targeting": "Direction",
      "targetRange": "500 / 560"
    },
    {
      "key": "E",
      "name": "Searing Charge",
      "affects": "Enemies",
      "castTime": "0.35",
      "cooldown": "14 / 13.5 / 13 / 12.5 / 12",
      "cost": "35 / 40 / 45 / 50 / 55",
      "damageType": "Physical damage",
      "effectRadius": "360 / 150",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ornn charges in the target direction, dealing physical damage to enemies he passes through and stopping upon colliding with terrain.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "80 / 125 / 170 / 215 / 260"
                },
                {
                  "unit": "% bonus armor",
                  "values": "40"
                },
                {
                  "unit": "% bonus magic resistance",
                  "values": "40"
                }
              ]
            }
          ]
        },
        {
          "description": "If Ornn collides with terrain during the charge, he creates a shockwave that knocks up and stuns nearby enemies for 1.25 seconds and deals the same damage if they were not already hit by the charge."
        },
        {
          "description": "The shockwave destroys the pillar formed by Volcanic Rupture and partially destroys terrain created by enemy champions."
        },
        {
          "description": "Ornn cannot basic attack nor cast abilities for 0.5 seconds after the dash ends."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Ornn/ability-icon/e",
      "maxCharges": -1,
      "notes": "Spell shields may only block one instance of damage.\nThe area in which enemies will be knocked up is indicated at Ornn's impact location.\nThe indicator is not shown for player-generated terrain.\n Brittle enemies without  Tenacity of their own will be  stunned for a total of 1.625 seconds.\nSearing Charge can interact with player-generated terrain.\nOrnn will not  dash after the cast time if he is  airborne or  resurrecting.\n Displacement immunity will also resist the application of the  stun.\nThe following table refers for interactions while Ornn is in cast time:\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
      "resource": "Mana",
      "speed": "1600",
      "spellEffects": "Area of effect",
      "spellshieldable": "True",
      "targeting": "Direction",
      "targetRange": "800 / 650"
    },
    {
      "key": "R",
      "name": "Call of the Forge God",
      "width": "340",
      "affects": "Enemies / Elemental",
      "castTime": "0.5",
      "cooldown": "140 / 120 / 100",
      "cost": "100",
      "damageType": "Magic damage",
      "effectRadius": "3000 / 2550",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ornn sounds his horn, summoning a lava elemental at maximum range from the target direction that stampedes towards his casting position at increasing speed. The elemental deals magic damage to enemies it passes through and slows them for 2 seconds.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "125 / 175 / 225"
                },
                {
                  "unit": "% AP",
                  "values": "20"
                }
              ]
            },
            {
              "attribute": "Slow",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "40 / 50 / 60"
                }
              ]
            }
          ]
        },
        {
          "description": "Call of the Forge God can be recast after 1.25 seconds while the elemental is active."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Ornn dashes in the target direction, though not through terrain. If he collides with the elemental, he sends it stampeding in the same direction. The elemental deals the same damage to enemies it passes through and knocks them up and stuns them for 1 second, reduced to 0.5 seconds after the first enemy champion hit.</p>",
          "leveling": [
            {
              "attribute": "Total Magic Damage",
              "modifiers": [
                {
                  "values": "250 / 350 / 450"
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
          "description": "Each pass applies Brittle to targets for 3 seconds and can affect enemies only once. The elemental briefly grants sight around its trajectory as it travels."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Ornn/ability-icon/r",
      "maxCharges": -1,
      "notes": "Both casts count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nDespite this, the effects of both casts count as the same cast instance.\nCall of the Forge God cannot be recast while  grounded or  rooted.\n Brittle enemies without  Tenacity of their own will be  stunned for a total of 1.3 seconds.\n Spell shields may only block one pass.\nOrnn becomes locked out of all actions during the recast's dash and for 0.5 seconds afterwards.\nThis ability will cast from wherever the caster is at the start of the cast time.\n Displacement immunity will also resist the application of the  stun.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "450 / 1250",
      "spellEffects": "spellaoe",
      "spellshieldable": "Special",
      "targeting": "Direction",
      "targetRange": "300"
    }
  ],
  "adaptiveType": "Physical damage",
  "attackType": "Melee",
  "attributeRatings": {
    "damage": 1,
    "toughness": 3,
    "control": 3,
    "mobility": 1,
    "utility": 2,
    "abilityReliance": 60,
    "difficulty": 2
  },
  "faction": "freljord",
  "lore": "Ornn is the Freljordian spirit of forging and craftsmanship. He works in the solitude of a massive smithy, hammered out from the lava caverns beneath the volcano Hearth-Home. There he stokes bubbling cauldrons of molten rock to purify ores and fashion items of unsurpassed quality. When other deities—especially Volibear—walk the earth and meddle in mortal affairs, Ornn arises to put these impetuous beings back in their place, either with his trusty hammer or the fiery power of the mountains themselves.",
  "patchLastChanged": "25.02",
  "positions": [
    "Top"
  ],
  "price": {
    "blueEssence": 2400,
    "rp": 880
  },
  "releaseDate": "2017-08-23",
  "resource": "Mana",
  "roles": [
    "Fighter",
    "Tank",
    "Vanguard"
  ],
  "stats": {
    "health": {
      "flat": 660,
      "perLevel": 109
    },
    "healthRegen": {
      "flat": 9,
      "perLevel": 0.9
    },
    "mana": {
      "flat": 341,
      "perLevel": 65
    },
    "manaRegen": {
      "flat": 8,
      "perLevel": 0.6
    },
    "armor": {
      "flat": 33,
      "perLevel": 5.2
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 69,
      "perLevel": 3.5
    },
    "movespeed": {
      "flat": 335
    },
    "acquisitionRadius": {
      "flat": 600
    },
    "selectionRadius": {
      "flat": 125
    },
    "pathingRadius": {
      "flat": 25.767
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
      "flat": 0.625,
      "perLevel": 2
    },
    "attackSpeedRatio": {
      "flat": 0.625
    },
    "attackCastTime": {
      "flat": 0.35
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackDelayOffset": {
      "flat": 0
    },
    "attackRange": {
      "flat": 175
    }
  }
}
export default champion