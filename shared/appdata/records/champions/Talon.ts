// Updated Patch 25.19 - 10/07/2025 08:16:13 AM CDT

const champion: Champion = {
  "id": 91,
  "key": "Talon",
  "name": "Talon",
  "title": "the Blade's Shadow",
  "abilities": [
    {
      "key": "P",
      "name": "Blade's End",
      "affects": "Enemies",
      "blurb": "Innate: Each time  Talon's  abilities deal physical damage to  champions and large  monsters, they apply a stack of Wound, stacking up to a cap.",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Talon's abilities apply a stack of Wound to enemy champions and large monsters hit for 6 seconds, refreshing on basic attacks and subsequent applications and stacking up to 3 times.</p>"
        },
        {
          "description": "Talon's next basic attack against an enemy with 3 Wound stacks is empowered to consume them all to cause the target to bleed, dealing[ 80 - 280 (based on level) (+ 210% bonus AD) total physical damage over 2 seconds, ][ 5 - 17.5 (based on level) (+ 13.125% bonus AD) physical damage every 0.125 seconds over 2 seconds, ]increased to 110% damage against monsters. The target cannot gain Wound stacks during this time."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Talon/ability-icon/p",
      "notes": "Blade End's enhanced attack will still trigger if  blocked, but not if they are  dodged or missed while Talon is  blinded.\nDuration of the stacks is not refreshed if the attack is dodged or missed.\nBoth passes of  Rake and  Shadow Assault apply a stack of Wound.\n Spell shield prevents Wound  stacks from being applied.\n Spell shield prevents Blade End's enhanced attack from triggering though still consuming all Wound  stacks.",
      "spellEffects": "default",
      "spellshieldable": "Special",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Noxian Diplomacy",
      "affects": "Enemies",
      "blurb": "Active:  Talon  leaps to the target enemy, dealing physical damage. If the target is within melee range, Talon instead  critically strikes the target.",
      "castTime": "None / 100% of Talon's windup time (0.198 at base attack speed)",
      "cooldown": "8 / 7.5 / 7 / 6.5 / 6",
      "cost": "40",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Talon dashes toward the target enemy, stabbing the target upon arrival to deal physical damage. If cast within close range, Talon dashes to the target over the cast time instead and Noxian Diplomacy critically strikes for (150% + 40%) damage, as well as grants him 75 bonus attack range on his next basic attack within 1 second.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "65 / 85 / 105 / 125 / 145"
                },
                {
                  "unit": "% bonus AD",
                  "values": "100"
                }
              ]
            },
            {
              "attribute": "Critical Physical Damage",
              "modifiers": [
                {
                  "values": "97.5 / 127.5 / 157.5 / 187.5 / 217.5"
                },
                {
                  "unit": "% bonus AD",
                  "values": "150"
                }
              ]
            }
          ]
        },
        {
          "description": "If Noxian Diplomacy kills the target, Talon heals for 9 - 55 (based on level) and the ability's cooldown is reduced by 50%."
        },
        {
          "description": "Noxian Diplomacy resets Talon's basic attack timer. Shadow Assault can be cast during the dash."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Talon/ability-icon/q",
      "maxCharges": -1,
      "notes": "Talon will track the target if they change locations with the ranged version of Noxian Diplomacy, landing at an offset of 100 units before reaching them.\nHe will dash to the target's previous location while still dealing damage if the target is too far away or moves beyond 800 units.\nWhen cast in close range, Noxian Diplomacy deals its damage at the completion of the cast time, rather than at the dash's completion.\nThe damage will be dealt even if Talon's dash is interrupted, so long as the cast time is completed.\nTalon will be ordered to basic attack the target at the end of the dash.\nWhile  grounded or  rooted, Noxian Diplomacy can only be cast within close range.\nTalon will still dash to the target in both cases.\nNoxian Diplomacy will also grant the heal if the target dies upon Talon's completion of the dash.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).\nThis only applies to the close dash attack.",
      "resource": "Mana",
      "speed": "1400",
      "spellEffects": "spell",
      "spellshieldable": "True",
      "targeting": "Unit",
      "targetRange": "575 /  170"
    },
    {
      "key": "W",
      "name": "Rake",
      "width": "150",
      "affects": "Enemies",
      "angle": "22°",
      "blurb": "Active:  Talon throws a fan of daggers in the target direction that deals physical damage to enemies hit.",
      "castTime": "0.25",
      "cooldown": "9 / 8.5 / 8 / 7.5 / 7",
      "cost": "50 / 55 / 60 / 65 / 70",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Talon throws a fan of daggers in a cone in the target direction that deals physical damage to enemies hit.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "50 / 60 / 70 / 80 / 90"
                },
                {
                  "unit": "% bonus AD",
                  "values": "40"
                }
              ]
            }
          ]
        },
        {
          "description": "At maximum range, the daggers linger for 0.7 seconds before homing back to Talon, dealing physical damage to enemies hit and slowing them for 1 second.",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "60 / 90 / 120 / 150 / 180"
                },
                {
                  "unit": "% bonus AD",
                  "values": "90"
                }
              ]
            },
            {
              "attribute": "Total Physical Damage",
              "modifiers": [
                {
                  "values": "110 / 150 / 190 / 230 / 270"
                },
                {
                  "unit": "% bonus AD",
                  "values": "130"
                }
              ]
            },
            {
              "attribute": "Slow",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "40 / 45 / 50 / 55 / 60"
                }
              ]
            }
          ]
        },
        {
          "description": "Enemies can be hit only once per pass."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Talon/ability-icon/w",
      "maxCharges": -1,
      "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nCasting Rake when an enemy is within 650 radius and 26° angle in front of Talon will reveal him from the fog of war like a targeted cast.(bug)\nThis is because of Rake's internal Cone targeting type, which defaults to \"targeting\" all units in the preset area and thereby trigger revealing the caster if not toggled off for the spell.\nIf Talon dies while Rake is mid-air, the projectiles will still complete their travel.\nThe blades each will fail to return to Talon if he is somehow too far from them after the delay.\nThis maximum distance is 5000 units at ranks 1-4 of Rake, or 20000 units at rank 5 of Rake.(bug)\nThe latter distance is barely achievable between fountains on Summoner's Rift.",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "2571 / 2429 / 3000",
      "spellEffects": "spellaoe",
      "spellshieldable": "True",
      "targeting": "Direction"
    },
    {
      "key": "E",
      "name": "Assassin's Path",
      "affects": "Self",
      "blurb": "Active:  Talon  vaults over the target terrain.",
      "castTime": "none",
      "cooldown": "0",
      "cost": "0",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Talon dashes up to 800 units over the target area of terrain while within proximity of it, during which he gains unobstructed vision.</p>"
        },
        {
          "description": "Talon cannot cast Assassin's Path on the same area of terrain for a set duration."
        },
        {
          "description": "Shadow Assault can be cast during the dash."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Talon/ability-icon/e",
      "maxCharges": -1,
      "notes": "When Assassin's Path is cast on terrain that is out of range, Talon will walk to the location where he is able to cast the ability and dash over this area of terrain. If he encounters other terrain along the way, however, he will cast Assassin's Path over the obstructive area of terrain instead.\nThis override will fail if his path to the location would be obstructed by terrain that is on cooldown. In this case, the ability will not cast at all.\nAssassin's Path can interact with player-generated terrain.\nTalon will stop dashing upon entering  stasis but will continue to do so afterwards.\nTalon will reveal himself for 0.6 seconds upon casting Assassin's Path if he is visible to an enemy champion or there is a nearby enemy champion or minion within 400 units of the landing position.\nWalls eligible for Assassin's Path display a border indicator that fades over the cooldown. The closer the wall is to becoming traversable, the lighter the indicator becomes.",
      "speed": "100% movement speed",
      "targeting": "Location",
      "targetRange": "725"
    },
    {
      "key": "R",
      "name": "Shadow Assault",
      "width": "280",
      "affects": "Enemies",
      "blurb": "Active:  Talon disperses a ring of blades around him that deals physical damage to enemies it passes through and lingers for a short time, during which he gains  invisibility and  bonus move speed.",
      "castTime": "none",
      "cooldown": "100 / 80 / 60",
      "cost": "100",
      "damageType": "Physical damage",
      "effectRadius": "550",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Talon disperses a ring of blades around him that deals physical damage to enemies hit and lingers at maximum range for up to 2.5 seconds, during which he gains invisibility and bonus movement speed.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "90 / 135 / 180"
                },
                {
                  "unit": "% bonus AD",
                  "values": "100"
                }
              ]
            },
            {
              "attribute": "Bonus Movement Speed",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "40 / 55 / 70"
                }
              ]
            }
          ]
        },
        {
          "description": "Shadow Assault can be recast after 1 second within the duration, and does so automatically after the duration or if Talon breaks stealth."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Talon breaks stealth and converges the blades to him, dealing the same physical damage to enemies hit. Breaking stealth with a basic attack or Noxian Diplomacy will converge the blades to the target instead.</p>",
          "leveling": [
            {
              "attribute": "Total Physical Damage",
              "modifiers": [
                {
                  "values": "180 / 270 / 360"
                },
                {
                  "unit": "% bonus AD",
                  "values": "200"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Talon/ability-icon/r",
      "maxCharges": -1,
      "notes": "Shadow Assault casts a total of 12 blades evenly distributed in all directions. 4 of them travel down the cardinal directions (Relative to the map, not relative to Talon), while all blades have an angle of 30° to one another.\n Spell shield will block a single pass.\nShadow Assault does not cancel Talon's basic attacks.\nShadow Assault has a minimum lifetime of 0.8 seconds before convergence.\nThe blades each will fail to converge on their target (Talon or the attacked target) if the target is more than 20000 units from them.(bug)\nThis distance is barely achievable between fountains on Summoner's Rift.\nUsing a basic attack breaks the stealth at the end of the attack windup.",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "2400 / 4000",
      "spellEffects": "spellaoe",
      "spellshieldable": "True",
      "targeting": "Auto"
    }
  ],
  "adaptiveType": "Physical damage",
  "attackType": "Melee",
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 1,
    "mobility": 2,
    "utility": 1,
    "abilityReliance": 65,
    "difficulty": 2
  },
  "faction": "noxus",
  "fullName": "Talon Du Couteau",
  "lore": "Talon is the knife in the darkness, a merciless killer able to strike without warning and escape before any alarm is raised. He carved out a dangerous reputation on the brutal streets of Noxus, where he was forced to fight, kill, and steal to survive. Adopted by the notorious Du Couteau family, he now plies his deadly trade at the empire's command, assassinating enemy leaders, captains, and heroes… as well as any Noxian foolish enough to earn the scorn of their masters.",
  "patchLastChanged": "25.11",
  "positions": [
    "Jungle"
  ],
  "price": {
    "blueEssence": 1575,
    "rp": 790
  },
  "releaseDate": "2011-08-24",
  "resource": "Mana",
  "roles": [
    "Assassin"
  ],
  "stats": {
    "health": {
      "flat": 658,
      "perLevel": 109
    },
    "healthRegen": {
      "flat": 8.5,
      "perLevel": 0.75
    },
    "mana": {
      "flat": 400,
      "perLevel": 37
    },
    "manaRegen": {
      "flat": 7.6,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 30,
      "perLevel": 4.7
    },
    "magicResistance": {
      "flat": 36,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 68,
      "perLevel": 3.1
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
      "flat": 0.198
    },
    "attackTotalTime": {
      "flat": 1.6
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