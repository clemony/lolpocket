// Updated Patch 25.17 - 09/12/2025 02:39:57 PM CDT

const champion: Champion = {
  "id": 68,
  "key": "Rumble",
  "name": "Rumble",
  "title": "the Mechanized Menace",
  "resource": "Heat",
  "attackType": "Melee",
  "adaptiveType": "Magic damage",
  "stats": {
    "health": {
      "flat": 655,
      "perLevel": 105
    },
    "healthRegen": {
      "flat": 7,
      "perLevel": 0.6
    },
    "mana": {
      "flat": 150
    },
    "armor": {
      "flat": 36,
      "perLevel": 4.7
    },
    "magicResistance": {
      "flat": 28,
      "perLevel": 1.55
    },
    "attackDamage": {
      "flat": 64,
      "perLevel": 3.2
    },
    "movespeed": {
      "flat": 345
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
      "flat": 80
    },
    "criticalStrikeDamage": {
      "flat": 175
    },
    "criticalStrikeDamageModifier": {
      "flat": 1
    },
    "attackSpeed": {
      "flat": 0.644,
      "perLevel": 1.85
    },
    "attackSpeedRatio": {
      "flat": 0.644
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
      "flat": 125
    }
  },
  "positions": [
    "Middle",
    "Top"
  ],
  "roles": [
    "Battlemage",
    "Fighter",
    "Mage"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 2,
    "control": 2,
    "mobility": 1,
    "utility": 1,
    "abilityReliance": 90,
    "difficulty": 2
  },
  "abilities": [
    {
      "name": "Junkyard Titan",
      "key": "P",
      "icon": "https://cdn.communitydragon.org/latest/champion/Rumble/ability-icon/p",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Rumble's basic ability casts generate Heat, which decays by 10 Heat per second after not using any basic ability within 4 seconds or The Equalizer within 2 seconds. Rumble's mech enters the Danger Zone when at or above 50 Heat, and becomes Overheated while at 150 Heat.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Danger Zone:</span> Rumble's mech enters the Danger Zone, empowering his basic abilities.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Overheated:</span> Rumble's mech becomes Overheated, disabling his abilities as his Heat decays back down to 0 over 4 seconds. During this time, he gains 50% - 130% (based on level) bonus attack speed and empowers his basic attacks to deal 5 - 40 (based on level) (+ 25% AP) (+ 5% of the target's maximum health) bonus magic damage on-hit. The damage based on the target's health ratio is capped at 65 - 150 (based on level) against monsters.</p>"
        }
      ],
      "targeting": "Passive",
      "affects": "Self",
      "damageType": "Magic damage",
      "spellEffects": "Proc",
      "notes": "While Rumble is overheating, a  Silenced icon will appear above him to signify he cannot cast abilities. This is visible to all units.\nThe attacks do not deal the bonus damage against structures.",
      "blurb": "Innate:  Rumble's basic ability casts generate  Heat, which gradually expires after a few seconds without generating Heat. Rumble enters the Danger Zone while he has at least  50 Heat, and becomes Overheated at  Max Heat."
    },
    {
      "name": "Flamespitter",
      "key": "Q",
      "icon": "https://cdn.communitydragon.org/latest/champion/Rumble/ability-icon/q",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Rumble generates 20 Heat to activate his flamethrower for 3 seconds, dealing magic damage every 0.25 seconds to enemies hit in a frontal cone, reduced to 70% against minions.</p>",
          "leveling": [
            {
              "attribute": "Total Magic Damage",
              "modifiers": [
                "60 / 90 / 120 / 150 / 180",
                "110% AP",
                "6 / 6.8 / 7.6 / 8.4 / 9.2% of target's maximum health"
              ]
            },
            {
              "attribute": "Magic Damage Per Tick",
              "modifiers": [
                "5 / 7.5 / 10 / 12.5 / 15",
                "9.17% AP",
                "0.5 / 0.57 / 0.63 / 0.7 / 0.77% of target's maximum health"
              ]
            },
            {
              "attribute": "Total Minion Damage",
              "modifiers": [
                "42 / 63 / 84 / 105 / 126",
                "77% AP",
                "4.2 / 4.76 / 5.32 / 5.88 / 6.44% of target's maximum health"
              ]
            },
            {
              "attribute": "Minion Damage Per Tick",
              "modifiers": [
                "3.5 / 5.25 / 7 / 8.75 / 10.5",
                "6.42% AP",
                "0.35 / 0.4 / 0.44 / 0.49 / 0.54% of target's maximum health"
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Danger Zone Bonus:</span> Flamespitter's damage is increased by 50%.</p>",
          "leveling": [
            {
              "attribute": "Total Enhanced Damage",
              "modifiers": [
                "90 / 135 / 180 / 225 / 270",
                "165% AP",
                "9 / 10.2 / 11.4 / 12.6 / 13.8% of target's maximum health"
              ]
            },
            {
              "attribute": "Enhanced Damage Per Tick",
              "modifiers": [
                "7.5 / 11.25 / 15 / 18.75 / 22.5",
                "13.75% AP",
                "0.75 / 0.85 / 0.95 / 1.05 / 1.15% of target's maximum health"
              ]
            },
            {
              "attribute": "Total Enhanced Minion Damage",
              "modifiers": [
                "63 / 94.5 / 126 / 157.5 / 189",
                "115.5% AP",
                "6.3 / 7.14 / 7.98 / 8.82 / 9.66% of target's maximum health"
              ]
            },
            {
              "attribute": "Enhanced Minion Damage Per Tick",
              "modifiers": [
                "5.25 / 7.88 / 10.5 / 13.13 / 15.75",
                "9.63% AP",
                "0.53 / 0.6 / 0.67 / 0.74 / 0.81% of target's maximum health"
              ]
            }
          ]
        },
        {
          "description": "Flamespitter's total damage based on the target's health is capped at 65 - 300 (based on level) against monsters."
        }
      ],
      "cost": "0",
      "cooldown": "10 / 9 / 8 / 7 / 6",
      "targeting": "Auto",
      "affects": "Enemies",
      "spellshieldable": "false",
      "damageType": "Magic damage",
      "spellEffects": "AoeDoT",
      "projectile": "FALSE",
      "notes": "Flamespitter will deal an additional tick of damage to a minion if it would die to its per-tick damage.\nRumble will instantly turn to face the cursor if he is not moving when Flamespitter is cast.",
      "blurb": "Active:  Rumble activates a flamethrower for a short time that continually deals magic damage in a frontal cone.",
      "angle": "64°",
      "castTime": "none",
      "maxCharges": -1
    },
    {
      "name": "Scrap Shield",
      "key": "W",
      "icon": "https://cdn.communitydragon.org/latest/champion/Rumble/ability-icon/w",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Rumble generates 20 Heat to grant himself a shield for 1.5 seconds.</p>",
          "leveling": [
            {
              "attribute": "Shield Strength",
              "modifiers": [
                "25 / 55 / 85 / 115 / 145",
                "30% AP",
                "4% of maximum health"
              ]
            }
          ]
        },
        {
          "description": "Rumble also gains bonus movement speed for 1 to 1.32 seconds.",
          "leveling": [
            {
              "attribute": "Bonus Movement Speed",
              "modifiers": [
                "10 / 15 / 20 / 25 / 30%"
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Danger Zone Bonus:</span> Scrap Shield's shield strength and bonus movement speed are increased in effectiveness by 50%.</p>",
          "leveling": [
            {
              "attribute": "Enhanced Shield Strength",
              "modifiers": [
                "37.5 / 82.5 / 127.5 / 172.5 / 217.5",
                "45% AP",
                "6% of maximum health"
              ]
            },
            {
              "attribute": "Enhanced Bonus Movement Speed",
              "modifiers": [
                "15 / 22.5 / 30 / 37.5 / 45%"
              ]
            }
          ]
        }
      ],
      "cost": "0",
      "cooldown": "6",
      "targeting": "Auto",
      "affects": "Self",
      "notes": "The movement speed buff is supposed to last for 1 second, but due to a bug may last 0.264 seconds longer.\nLike most buffs, the stat bonus is already only gained at the next stat update (every 0.264 seconds). Despite this, the duration still inconsistent.",
      "blurb": "Active:  Rumble briefly  shields himself and gains  bonus movement speed.",
      "castTime": "none",
      "maxCharges": -1
    },
    {
      "name": "Electro Harpoon",
      "key": "E",
      "icon": "https://cdn.communitydragon.org/latest/champion/Rumble/ability-icon/e",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Rumble generates 20 Heat to shoot a harpoon in the target direction that deals magic damage to the first enemy hit, inflicting them with magic resistance reduction for 4 seconds and slowing them for 2 seconds. These effects stack additively with multiple harpoons, refreshing their duration and stacking up to 2 times.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                "55 / 80 / 105 / 130 / 155",
                "50% AP"
              ]
            },
            {
              "attribute": "Total Magic Damage",
              "modifiers": [
                "110 / 160 / 210 / 260 / 310",
                "100% AP"
              ]
            },
            {
              "attribute": "Magic Resistance Reduction",
              "modifiers": [
                "10 / 12 / 14 / 16 / 18%"
              ]
            },
            {
              "attribute": "Total MR Reduction",
              "modifiers": [
                "20 / 24 / 28 / 32 / 36%"
              ]
            },
            {
              "attribute": "Slow",
              "modifiers": [
                "15 / 20 / 25 / 30 / 35%"
              ]
            },
            {
              "attribute": "Total Slow",
              "modifiers": [
                "30 / 40 / 50 / 60 / 70%"
              ]
            }
          ]
        },
        {
          "description": "Rumble periodically stocks an Electro Harpoon charge, up to a maximum of 2."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Danger Zone Bonus:</span> Electro Harpoon's effects are increased by 50%.</p>",
          "leveling": [
            {
              "attribute": "Enhanced Damage",
              "modifiers": [
                "82.5 / 120 / 157.5 / 195 / 232.5",
                "75% AP"
              ]
            },
            {
              "attribute": "Total Enhanced Damage",
              "modifiers": [
                "165 / 240 / 315 / 390 / 465",
                "150% AP"
              ]
            },
            {
              "attribute": "Enhanced Magic Resistance Reduction",
              "modifiers": [
                "15 / 18 / 21 / 24 / 27%"
              ]
            },
            {
              "attribute": "Total Enhanced MR Reduction",
              "modifiers": [
                "30 / 36 / 42 / 48 / 54%"
              ]
            },
            {
              "attribute": "Enhanced Slow",
              "modifiers": [
                "22.5 / 30 / 37.5 / 45 / 52.5%"
              ]
            },
            {
              "attribute": "Total Enhanced Slow",
              "modifiers": [
                "45 / 60 / 75 / 90 / 105%"
              ]
            }
          ]
        },
        {
          "description": "If Rumble casts Electro Harpoon before his mech becomes Overheated, he may still use another charge within 3 seconds of the initial cast."
        }
      ],
      "cost": "0",
      "cooldown": "0.5",
      "targeting": "Direction",
      "affects": "Enemies",
      "spellshieldable": "True",
      "damageType": "Magic damage",
      "spellEffects": "spell",
      "projectile": "TRUE",
      "notes": "If Electro Harpoon is empowered with  Danger Zone's bonus and hits a target that is afflicted with the non-enhanced slow and shred applied by previous, non-empowered Electro Harpoon casts, the effectiveness of both debuffs on the target are increased to their enhanced values for all stacks of each debuff.\nThis also applies vice versa; a non-empowered Electro Harpoon cast will reduce the enhanced slow and shred applied by previous, empowered Electro Harpoon casts back to the non-enhanced values, for all stacks.\nA buff with the magic resistance reduction tooltip is applied to  minions and  pets, but their magic resistance is unaffected by Electro Harpoon.(bug)\nEach Electro Harpoon cast triggers  Spellblade and reduces  Force Pulse's cooldown.\nElectro Harpoon's missile will fail to fire if Rumble is  suppressed during the cast time.(note)\nThis ability will cast from wherever the caster is at the end of the cast time.\nRumble stocks an Electro Harpoon charge before the ability is even learned.",
      "blurb": "Active:  Rumble shoots a harpoon in the target direction that deals magic damage and briefly  slows the first enemy hit, reducing their  magic resist for a few seconds. These effects can stack with multiple harpoons.",
      "rechargeRate": "6 / 6 / 6 / 6 / 6",
      "speed": "2000",
      "width": "120",
      "castTime": "0.25",
      "maxCharges": 2
    },
    {
      "name": "The Equalizer",
      "key": "R",
      "icon": "https://cdn.communitydragon.org/latest/champion/Rumble/ability-icon/r",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Rumble deploys a barrage of rockets along the target path that land in a line over 0.75 seconds, creating a field of fire for 4.5 seconds after the last rocket lands.</p>"
        },
        {
          "description": "Enemies struck by the impact or within the field are marked as Burning for 1 second, which deals magic damage every 0.5 seconds, slows by 35%, and refreshes continuously while in the area.",
          "leveling": [
            {
              "attribute": "Magic Damage Per Tick",
              "modifiers": [
                "70 / 105 / 140",
                "17.5% AP"
              ]
            },
            {
              "attribute": "Minimum Magic Damage",
              "modifiers": [
                "140 / 210 / 280",
                "35% AP"
              ]
            },
            {
              "attribute": "Maximum Magic Damage",
              "modifiers": [
                "700 / 1050 / 1400",
                "175% AP"
              ]
            }
          ]
        }
      ],
      "cost": "0",
      "cooldown": "130 / 105 / 80",
      "targeting": "Vector",
      "affects": "Enemies",
      "spellshieldable": "False",
      "damageType": "Magic damage",
      "spellEffects": "aoedot",
      "projectile": "FALSE",
      "notes": "A static target standing where the missiles first impact may take an extra tick of damage (11 ticks), while a static target standing at the end of the trail may take one fewer tick (9 ticks).(bug)\nThe Equalizer's hitbox consists of a row of rockets with a circular damage hitbox each. The radius of each is 205 units, and rockets drop at a distance of 180 units between one another when The Equalizer is cast.\nThe missile that manages the rockets being deployed starts 150 units behind the target vector origin, and thus drops the first rocket at 30 units in front of the cast vector origin after 0.132 seconds.\nThe rockets are intended to not deal damage for the first 0.25 seconds. Due to a bug, this becomes 0.25-0.5 seconds 'at random'.\nIf Rumble dies while The Equalizer is just cast, this buff will be removed by death and the area of effect will start dealing damage sooner.(bug)",
      "blurb": "Active:  Rumble deploys a barrage of rockets along the target path that create a field which lingers for a few seconds.",
      "speed": "1600",
      "width": "410 - 368.4",
      "castTime": "None / 0.5833",
      "targetRange": "1700",
      "maxCharges": -1
    }
  ],
  "lore": "Rumble is a young inventor with a temper. Using nothing more than his own two hands and a heap of scrap, the feisty yordle constructed a colossal mech suit outfitted with an arsenal of electrified harpoons and incendiary rockets. Though others may scoff and sneer at his junkyard creations, Rumble doesn't mind—after all, he's the one with the flamespitter.",
  "faction": "bandle-city",
  "releaseDate": "2011-04-26",
  "patchLastChanged": "25.12",
  "price": {
    "blueEssence": 2400,
    "rp": 880
  }
}
export default champion