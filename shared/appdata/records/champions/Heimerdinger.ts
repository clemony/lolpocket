// Updated Patch 25.17 - 09/12/2025 02:39:56 PM CDT

const champion: Champion = {
  "id": 74,
  "key": "Heimerdinger",
  "name": "Heimerdinger",
  "title": "the Revered Inventor",
  "fullName": "Cecil B. Heimerdinger",
  "resource": "Mana",
  "attackType": "Ranged",
  "adaptiveType": "Magic damage",
  "stats": {
    "health": {
      "flat": 558,
      "perLevel": 101
    },
    "healthRegen": {
      "flat": 7,
      "perLevel": 0.55
    },
    "mana": {
      "flat": 385,
      "perLevel": 20
    },
    "manaRegen": {
      "flat": 8,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 19,
      "perLevel": 4.2
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 56,
      "perLevel": 2.7
    },
    "movespeed": {
      "flat": 340
    },
    "acquisitionRadius": {
      "flat": 550
    },
    "selectionRadius": {
      "flat": 100
    },
    "pathingRadius": {
      "flat": 30.544
    },
    "gameplayRadius": {
      "flat": 55
    },
    "criticalStrikeDamage": {
      "flat": 175
    },
    "criticalStrikeDamageModifier": {
      "flat": 1
    },
    "attackSpeed": {
      "flat": 0.658,
      "perLevel": 1.36
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
      "flat": 550
    }
  },
  "positions": [
    "Middle",
    "Support",
    "Top"
  ],
  "roles": [
    "Mage",
    "Specialist",
    "Support"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 2,
    "mobility": 1,
    "utility": 2,
    "abilityReliance": 100,
    "difficulty": 2
  },
  "abilities": [
    {
      "name": "Hextech Affinity",
      "key": "P",
      "icon": "https://cdn.communitydragon.org/latest/champion/Heimerdinger/ability-icon/p",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Heimerdinger gains 20% bonus movement speed while near an allied turret or a H-28G Evolution Turret or H-28Q Apex Turret deployed by him.</p>"
        }
      ],
      "targeting": "Passive",
      "affects": "Self",
      "notes": "No additional details.",
      "blurb": "Innate:  Heimerdinger gains  bonus movement speed while near allied  towers and  turrets he deploys.",
      "effectRadius": "300"
    },
    {
      "name": "H-28G Evolution Turret",
      "key": "Q",
      "icon": "https://cdn.communitydragon.org/latest/champion/Heimerdinger/ability-icon/q",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Heimerdinger deploys a H-28G Evolution Turret at the target location, which lasts until destroyed.</p>"
        },
        {
          "description": "Heimerdinger periodically stocks a Turret Kit charge, up to a maximum of 3."
        },
        {
          "description": "Up to 3 H-28G Evolution Turrets can be deployed at a time, with those deployed beyond the maximum destroying the oldest one."
        },
        {
          "description": "See Pets for more details about H-28G Evolution Turrets."
        }
      ],
      "cost": "20",
      "cooldown": "1",
      "targeting": "Location",
      "affects": "Enemies",
      "spellshieldable": "False",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "special",
      "projectile": "TRUE",
      "notes": "Deals  spell damage on basic attacks and  area damage on the beam.\nThe H-28G Evolution Turret's stats update every second to reflect rank ups, level ups, and changes in Heimerdinger's ability power.\nThe Turret Kit buff will visually represent the recharge rate cooldown, and how many H-28G Evolution Turret's that Heimerdinger has stored. This is visible to both allies and enemies.\nThe recharge rate of H-28G Evolution Turret is affected by ability haste.\nThe H-28G Evolution Turret has a  sight radius of 585 while active and 227.5 while dormant.\nThe amount of Turret Kit charges Heimerdinger has is indicated by small nuts orbiting him.",
      "blurb": "Active:  Heimerdinger deploys a rapid-fire turret that deals magic damage to his target, or a nearby enemy. The turret will become dormant while he leaves it alone.",
      "rechargeRate": "20",
      "castTime": "0.25",
      "targetRange": "350",
      "maxCharges": 3
    },
    {
      "name": "H-28Q Apex Turret",
      "key": "Q",
      "icon": "https://cdn.communitydragon.org/latest/champion/Heimerdinger/ability-icon/q",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">UPGRADE!!! - Active:</span> Heimerdinger deploys a H-28Q Apex Turret at the target location, which lasts for 8 seconds.</p>"
        },
        {
          "description": "H-28Q Apex Turret scales with UPGRADE!!!'s rank."
        },
        {
          "description": "See Pets for more details about the H-28Q Apex Turret."
        }
      ],
      "cost": "20",
      "cooldown": "1",
      "targeting": "Location",
      "affects": "Enemies",
      "spellshieldable": "False",
      "damageType": "Magic damage",
      "spellEffects": "spellaoe",
      "projectile": "TRUE",
      "notes": "The H-28Q Apex Turret has a  sight radius of 900.\nThe H-28Q Apex Turret's stats update every second to reflect rank ups, level ups, and changes in Heimerdinger's ability power.",
      "blurb": "UPGRADE:  Heimerdinger instead deploys a slow-fire turret that attacks a nearby enemy champion, dealing magic damage and  slowing nearby enemies.",
      "castTime": "0.25",
      "targetRange": "450",
      "maxCharges": 3
    },
    {
      "name": "Hextech Micro-Rockets",
      "key": "W",
      "icon": "https://cdn.communitydragon.org/latest/champion/Heimerdinger/ability-icon/w",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Heimerdinger launches a wave of 5 rockets that converge upon the target location and fan beyond it up to a maximum range, with each one dealing magic damage to the first enemy it hits. Every rocket hitting an enemy champion grants 20% beam charge to all turrets within 1000 range, up to a maximum of 100% beam charge when hitting 5 rockets on an enemy champion.</p>",
          "leveling": [
            {
              "attribute": "Initial Rocket Magic Damage",
              "modifiers": [
                "40 / 65 / 90 / 115 / 140",
                "55% AP"
              ]
            }
          ]
        },
        {
          "description": "Enemies can be hit by multiple rockets, but receive less damage from ones beyond the first. Against minions, this lesser damage is increased by 200%.",
          "leveling": [
            {
              "attribute": "Subsequent Rocket Magic Damage",
              "modifiers": [
                "10 / 15 / 20 / 25 / 30",
                "12% AP"
              ]
            },
            {
              "attribute": "Total Subsequent Non-Minion Damage",
              "modifiers": [
                "40 / 60 / 80 / 100 / 120",
                "48% AP"
              ]
            },
            {
              "attribute": "Combined Total Non-Minion Damage",
              "modifiers": [
                "80 / 125 / 170 / 215 / 260",
                "103% AP"
              ]
            },
            {
              "attribute": "Subsequent Rocket Minion Damage",
              "modifiers": [
                "30 / 45 / 60 / 75 / 90",
                "36% AP"
              ]
            },
            {
              "attribute": "Total Subsequent Minion Damage",
              "modifiers": [
                "120 / 180 / 240 / 300 / 360",
                "144% AP"
              ]
            },
            {
              "attribute": "Combined Total Minion Damage",
              "modifiers": [
                "160 / 245 / 330 / 415 / 500",
                "199% AP"
              ]
            }
          ]
        }
      ],
      "cost": "50 / 60 / 70 / 80 / 90",
      "cooldown": "11 / 10 / 9 / 8 / 7",
      "targeting": "Location",
      "affects": "Enemies",
      "spellshieldable": "True",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "spellaoe",
      "projectile": "TRUE",
      "notes": "If casting beyond 1000 units based off current Heimerdinger's position, every rockets aim towards Heimerdinger's position extended towards cast position by 1100 units\nHextech Micro-Rockets'  direction-targeting allows for custom spread.\nThis ability will cast from wherever the caster is at the end of the cast time.",
      "blurb": "Active:  Heimerdinger fires a wave of rockets that converge to the target location and fan beyond it to max range, each dealing magic damage to the first enemy hit. Enemies take less damage from subsequent rockets that hit them.",
      "castTime": "0.25",
      "targetRange": "1150",
      "maxCharges": -1
    },
    {
      "name": "Hextech Rocket Swarm",
      "key": "W",
      "icon": "https://cdn.communitydragon.org/latest/champion/Heimerdinger/ability-icon/w",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">UPGRADE!!! - Active:</span> Heimerdinger unleashes 4 waves of 5 rockets in quick succession that converge upon the target location. Each rocket deals magic damage to the first enemy hit.</p>",
          "leveling": [
            {
              "attribute": "Initial Rocket Damage",
              "modifiers": [
                "135 / 180 / 225",
                "45% AP"
              ]
            }
          ]
        },
        {
          "description": "Enemies can be hit by multiple rockets. Champions and monsters receive less damage from the second to fifth rockets that hit them, which is reduced by 50% for rockets beyond the fifth. Minions instead always receive 100% of the initial damage from every single rocket.",
          "leveling": [
            {
              "attribute": "Rockets 2:5 Magic Damage",
              "modifiers": [
                "32 / 45 / 58",
                "12% AP"
              ]
            },
            {
              "attribute": "Rockets 6:20 Magic Damage",
              "modifiers": [
                "16 / 22.5 / 29",
                "6% AP"
              ]
            },
            {
              "attribute": "Combined Total Non-Minion Damage",
              "modifiers": [
                "503 / 697.5 / 892",
                "183% AP"
              ]
            },
            {
              "attribute": "Minion Damage per Rocket",
              "modifiers": [
                "135 / 180 / 225"
              ]
            },
            {
              "attribute": "Combined Total Minion Damage",
              "modifiers": [
                "2700 / 3600 / 4500",
                "900% AP"
              ]
            }
          ]
        },
        {
          "description": "Hextech Rocket Swarm scales with UPGRADE!!!'s rank."
        }
      ],
      "cost": "50 / 60 / 70 / 80 / 90",
      "cooldown": "11 / 10 / 9 / 8 / 7",
      "targeting": "Location",
      "affects": "Enemies",
      "spellshieldable": "True",
      "damageType": "Magic damage",
      "spellEffects": "spellaoe",
      "projectile": "TRUE",
      "notes": "If casting beyond 1000 units based off current Heimerdinger's position, every rockets aim towards Heimerdinger's position extended towards cast position by 1100 units\nHextech Rocket Swarm's direction-targeting allows for custom spread.\nHeimerdinger can move once Hextech Rocket Swarm has been cast, even if the projectiles are still spawning or haven't even started to move yet.\nHextech Rocket Swarm's will cast from wherever Heimerdinger is at the end of the cast time.",
      "blurb": "UPGRADE:  Heimerdinger now fires 4 waves of rockets, each rocket dealing magic damage to the first enemy hit. Enemies take less damage from subsequent rockets that hit them.",
      "castTime": "0.25",
      "targetRange": "1150",
      "maxCharges": -1
    },
    {
      "name": "CH-2 Electron Storm Grenade",
      "key": "E",
      "icon": "https://cdn.communitydragon.org/latest/champion/Heimerdinger/ability-icon/e",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Heimerdinger hurls a grenade at the target location that detonates upon impact, dealing magic damage to nearby enemies and slowing them by 35% for 2 seconds. If the grenade hits an enemy champion, all turrets within 1000 range of the impact gain 100% beam charge.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                "60 / 100 / 140 / 180 / 220",
                "60% AP"
              ]
            }
          ]
        },
        {
          "description": "Enemies hit at the center of the grenade's impact are also stunned for 1.5 seconds."
        }
      ],
      "cost": "85",
      "cooldown": "11",
      "targeting": "Location",
      "affects": "Enemies",
      "spellshieldable": "True",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "Area of effect",
      "projectile": "TRUE",
      "notes": "This ability will cast from wherever the caster is at the end of the cast time.",
      "blurb": "Active:  Heimerdinger lobs a grenade to the target location that deals magic damage and  slows nearby enemies. Enemies hit at the epicenter are also  stunned.",
      "innerRadius": "100",
      "speed": "1200",
      "castTime": "0.25",
      "effectRadius": "250",
      "targetRange": "925",
      "maxCharges": -1
    },
    {
      "name": "CH-3X Lightning Grenade",
      "key": "E",
      "icon": "https://cdn.communitydragon.org/latest/champion/Heimerdinger/ability-icon/e",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">UPGRADE!!! - Active:</span> Heimerdinger hurls a massive grenade at the target location that bounces a fixed distance 3 times in the cast direction. The grenade explodes upon landing each time to deal magic damage to nearby enemies and slow them by 35% for 2 seconds. Enemies hit at the center of the grenade's impact are additionally stunned for 1.5 seconds.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                "100 / 200 / 300",
                "60% AP"
              ]
            }
          ]
        },
        {
          "description": "Enemy champions can only be damaged once per cast, but can be slowed and stunned multiple times if circumstances permit."
        },
        {
          "description": "CH-3X Lightning Grenade scales with UPGRADE!!!'s rank."
        }
      ],
      "cost": "85",
      "cooldown": "11",
      "targeting": "Location",
      "affects": "Enemies",
      "spellshieldable": "True",
      "damageType": "Magic damage",
      "spellEffects": "Area of effect",
      "projectile": "TRUE",
      "notes": "No additional details.",
      "blurb": "UPGRADE:  Heimerdinger's grenade now bounces 3 times, each dealing magic damage in a larger area.",
      "innerRadius": "150",
      "speed": "1200",
      "castTime": "0.25",
      "effectRadius": "300",
      "targetRange": "925",
      "maxCharges": -1
    },
    {
      "name": "UPGRADE!!!",
      "key": "R",
      "icon": "https://cdn.communitydragon.org/latest/champion/Heimerdinger/ability-icon/r",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Heimerdinger empowers his next basic ability for an additional effect, consuming the empowerment upon cast and placing UPGRADE!!! on full cooldown. These empowered abilities have the same cooldowns as their basic forms, deal modified damage, and do not have a mana cost. UPGRADE!!! can be recast after 3 seconds while the empowerment is available.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Heimerdinger ends UPGRADE!!! and puts it on a 3-second cooldown.</p>"
        },
        {
          "description": "UPGRADE!!! can be used while affected by cast-inhibiting crowd control."
        }
      ],
      "cost": "100",
      "cooldown": "100 / 85 / 70",
      "targeting": "Auto",
      "affects": "Self",
      "resource": "Mana",
      "notes": "Toggle abilities do not count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nConsuming the buff for an empowered basic ability does.\nNo compensations for  mana are made if UPGRADE!!! is recast.",
      "blurb": "Active:  Heimerdinger can empower his next ability to apply an additional effect. These empowered abilities have the same  cooldowns as their basic forms, deal modified damage, and do not cost mana.",
      "castTime": "none",
      "maxCharges": -1
    }
  ],
  "lore": "The eccentric Professor Cecil B. Heimerdinger is one of the most innovative and esteemed inventors the world has ever known. As the longest serving member of the Council of Piltover, he saw the best and the worst of the city's unending desire for progress. Nonetheless, this brilliant scientist and teacher will always remain dedicated to using his unconventional devices to improve the lives of others.",
  "faction": "piltover",
  "releaseDate": "2009-10-10",
  "patchLastChanged": "25.14",
  "price": {
    "blueEssence": 1575,
    "rp": 790
  }
}
export default champion