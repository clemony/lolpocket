// Updated Patch 25.19 - 09/27/2025 06:08:58 PM CDT

const champion: Champion = {
  "id": 76,
  "key": "Nidalee",
  "name": "Nidalee",
  "title": "the Bestial Huntress",
  "abilities": [
    {
      "key": "P",
      "name": "Prowl",
      "affects": "Enemies, Self",
      "blurb": "Innate - Prowl: While in  brush,  Nidalee becomes  ghosted and gains  bonus movement speed for a short time, increased when facing a nearby enemy  champion. These bonuses briefly persist after exiting brush.",
      "effectRadius": "3000 / 5500",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Prowl:</span> While in brush, Nidalee gains ghosting and 10% bonus movement speed, increased to 30% while facing a visible enemy champion within 1400 range. The bonuses persist for 2 seconds after leaving brush.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Hunt:</span> Hitting monsters or enemy champions with Javelin Toss or Bushwhack when Nidalee is nearby grants her ghosting and 10% bonus movement speed for 4 seconds and applies a Hunted mark to the target for the same duration, during which they are revealed as well as grant sight of a 300-unit radius around them. The bonus movement speed is increased to 30% while facing a Hunted target. Additionally, the first cast of both Takedown and Pounce against a Hunted target is enhanced.</p>"
        },
        {
          "description": "The bonus movement speed from Prowl and Hunt can stack, but cannot exceed 30%."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Nidalee/ability-icon/p",
      "notes": "Bushwhack  reveals and grants  sight around the target for 4 seconds even while Nidalee is not nearby.",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Javelin Toss",
      "width": "80",
      "affects": "Enemies",
      "blurb": "Active:  Nidalee hurls a javelin in the target direction that deals magic damage to the first enemy hit based on distance travelled.",
      "castTime": "0.25",
      "cooldown": "6",
      "cost": "50 / 55 / 60 / 65 / 70",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nidalee hurls a javelin in the target direction that deals magic damage to the first enemy hit, increased by 0% - 225% (based on distance traveled).</p>",
          "leveling": [
            {
              "attribute": "Minimum Magic Damage",
              "modifiers": [
                {
                  "values": "70 / 90 / 110 / 130 / 150"
                },
                {
                  "unit": "% AP",
                  "values": "50"
                }
              ]
            },
            {
              "attribute": "Maximum Magic Damage",
              "modifiers": [
                {
                  "values": "227.5 / 292.5 / 357.5 / 422.5 / 487.5"
                },
                {
                  "unit": "% AP",
                  "values": "162.5"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Nidalee/ability-icon/q",
      "maxCharges": -1,
      "notes": "This ability will cast from wherever the caster is at the start of the cast time.\nThe damage amplification is based on the distance from Nidalee's location at the end of the cast time to the struck target's center at the time of collision.\nThe damage increase is very slightly higher than the spear's travel distance due to edge range behaviour of collisions and the distance being measured as the radius from the picked \"origin\" location at the end of the cast time, rather than just along the vector of the cast.\nThe damage increase does not have distinct thresholds based on the distance the spear travelled.\nPicking Nidalee's location at the end of the cast time as the \"origin\" for the damage calculation may be unintended.(note)",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "1300",
      "spellEffects": "Single target",
      "spellshieldable": "True",
      "targeting": "Direction"
    },
    {
      "key": "Q",
      "name": "Takedown",
      "affects": "Self, Enemies",
      "blurb": "Active:  Nidalee's next basic attack within some time will gain  bonus range and deal magic damage based on the target's missing health.",
      "castTime": "none",
      "cooldown": "6",
      "cost": "50 / 55 / 60 / 65 / 70",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nidalee empowers her next basic attack within 10 seconds to have an uncancellable windup, gain 75 bonus range and deal modified magic damage that is increased by an amount for every 1% of the target's missing health.Takedown can critically strike for (75% + 40%) AD bonus magic damage.</p>",
          "leveling": [
            {
              "attribute": "Minimum Magic Damage",
              "modifiers": [
                {
                  "values": "5 / 30 / 55 / 80"
                },
                {
                  "unit": "% AD",
                  "values": "75"
                },
                {
                  "unit": "% AP",
                  "values": "40"
                }
              ]
            },
            {
              "attribute": "Maximum Magic Damage",
              "modifiers": [
                {
                  "values": "10 / 67.5 / 137.5 / 220"
                },
                {
                  "unit": "% AD",
                  "values": "150 / 168.75 / 187.5 / 206.25"
                },
                {
                  "tooltip": "Scaling per rank:\n80 / 90 / 100 / 110% AP",
                  "unit": "% AP",
                  "values": "80 - 110"
                }
              ]
            },
            {
              "attribute": "Increased Damage Modifier",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "1 / 1.25 / 1.5 / 1.75"
                }
              ]
            },
            {
              "attribute": "Maximum Increased Damage",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "100 / 125 / 150 / 175"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Hunt Bonus:</span> Hitting a Hunted target increases Takedown's damage by 30%.</p>",
          "leveling": [
            {
              "attribute": "Prowl-Enhanced Minimum Damage",
              "modifiers": [
                {
                  "values": "6.5 / 39 / 71.5 / 104"
                },
                {
                  "unit": "% AD",
                  "values": "97.5"
                },
                {
                  "unit": "% AP",
                  "values": "52"
                }
              ]
            },
            {
              "attribute": "Prowl-Enhanced Maximum Damage",
              "modifiers": [
                {
                  "values": "13 / 87.75 / 178.75 / 286"
                },
                {
                  "unit": "% AD",
                  "values": "195 / 219.38 / 243.75 / 268.13"
                },
                {
                  "tooltip": "Scaling per rank:\n104 / 117 / 130 / 143% AP",
                  "unit": "% AP",
                  "values": "104 - 143"
                }
              ]
            }
          ]
        },
        {
          "description": "Takedown resets Nidalee's basic attack timer. Other damage converted to magic damage by Takedown are not increased by Takedown's respective effects. Nidalee loses Takedown's empowered attack immediately when she switches to Human Form."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Nidalee/ability-icon/q",
      "maxCharges": -1,
      "notes": "Takedown's attack deals  basic damage, but also triggers spell effects by also being tagged as  spell damage.\nTakedown's damage is not affected by  critical strike modifiers, but the basic attack can still critically strike and the bonus damage from the critical strike is converted to magic damage.\nTakedown's damage modifier does not affect the bonus damage dealt by the critical strike.\nTakedown converts the bonus damage dealt by  Spellblade to magic damage from physical, but does not apply its damage modifier to the effect.\nTakedown's damage will apply  life steal.\nTakedown's damage modifier does not apply against structures; the minimum damage is always applied.\nPENDING FOR TEST: - Parry interactions ( dodge,  block and  blind).",
      "spellEffects": "Special",
      "spellshieldable": "True",
      "targeting": "Auto"
    },
    {
      "key": "W",
      "name": "Bushwhack",
      "affects": "Enemies",
      "blurb": "Active:  Nidalee lays a  stealthed that will spring upon contact with an enemy, continually dealing magic damage over a few seconds.",
      "castTime": "0.25",
      "collisionRadius": "150",
      "cooldown": "13 / 12 / 11 / 10 / 9",
      "cost": "30 / 35 / 40 / 45 / 50",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nidalee lays a trap at the target location that becomes stealthed after arming over 1.5 seconds, lasting for up to 120 seconds and granting sight within its radius. The trap will spring upon contact with an enemy, dealing magic damage every second over 4 seconds.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage Per Tick",
              "modifiers": [
                {
                  "values": "10 / 20 / 30 / 40 / 50"
                },
                {
                  "unit": "% AP",
                  "values": "5"
                }
              ]
            },
            {
              "attribute": "Total Magic Damage",
              "modifiers": [
                {
                  "values": "40 / 80 / 120 / 160 / 200"
                },
                {
                  "unit": "% AP",
                  "values": "20"
                }
              ]
            }
          ]
        },
        {
          "description": "Traps have 6 maximum health and can only be damaged by champion basic attacks (2 hit points from ranged and 3 hit points from melee). Up to a maximum of 4 / 6 / 8 / 10 (based on level) traps may be active at once."
        },
        {
          "description": "See Pets for more details about traps."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Nidalee/ability-icon/w",
      "notes": "No additional notes.",
      "resource": "Mana",
      "spellEffects": "dot",
      "spellshieldable": "True",
      "targeting": "Location",
      "targetRange": "900"
    },
    {
      "key": "W",
      "name": "Pounce",
      "affects": "Enemies",
      "blurb": "Passive: Killing an enemy or using Pounce's  Hunted bonus will  reduce Pounce's cooldown.",
      "castTime": "none",
      "cooldown": "13 / 12 / 11 / 10 / 9",
      "cost": "30 / 35 / 40 / 45 / 50",
      "damageType": "Magic damage",
      "effectRadius": "200 / 250",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Killing an enemy while in Cougar Form or using Pounce's Hunt bonus reduces Pounce's current cooldown to a minimum value.</p>",
          "leveling": [
            {
              "attribute": "Reduced Cooldown",
              "modifiers": [
                {
                  "unit": " seconds",
                  "values": "3 / 2.5 / 2 / 1.5"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nidalee leaps a fixed distance in the target direction. Upon arrival, she deals magic damage to nearby enemies.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "55 / 100 / 145 / 190"
                },
                {
                  "unit": "% bonus AD",
                  "values": "50"
                },
                {
                  "unit": "% AP",
                  "values": "30"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Hunted Bonus:</span> Nidalee can perform Pounce from an increased range on a Hunted enemy closest to the cursor. She will leap to the front of the target.</p>"
        },
        {
          "description": "Takedown and Aspect of the Cougar can be cast during the dash."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Nidalee/ability-icon/w",
      "notes": "Pounce will not receive the reduced cooldown if the target becomes  Hunted mid-air.\nCasting Pounce on a Hunted target will extend the remaining duration of their  Hunted debuff by 1.5 seconds, up to the original duration.",
      "spellEffects": "Area of effect",
      "spellshieldable": "True",
      "targeting": "Direction / Unit",
      "targetRange": "375 / 750"
    },
    {
      "key": "E",
      "name": "Primal Surge",
      "affects": "Self, Allies",
      "blurb": "Active:  Nidalee revitalizes herself or the target allied champion, granting  bonus attack speed for a few seconds and  healing the target based on their missing health.",
      "castTime": "0.25",
      "cooldown": "12",
      "cost": "50 / 55 / 60 / 65 / 70",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nidalee revitalizes herself or the target allied champion, granting the target bonus attack speed for 7 seconds and healing them for an amount that is increased by 0% - 100% (based on target's missing health).</p>",
          "leveling": [
            {
              "attribute": "Bonus Attack Speed",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "30 / 40 / 50 / 60 / 70"
                }
              ]
            },
            {
              "attribute": "Minimum Heal",
              "modifiers": [
                {
                  "values": "50 / 75 / 100 / 125 / 150"
                },
                {
                  "unit": "% AP",
                  "values": "35"
                }
              ]
            },
            {
              "attribute": "Maximum Heal",
              "modifiers": [
                {
                  "values": "100 / 150 / 200 / 250 / 300"
                },
                {
                  "unit": "% AP",
                  "values": "70"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Nidalee/ability-icon/e",
      "maxCharges": -1,
      "notes": "The bonus attack speed will persist through  Cougar Form if Nidalee uses Primal Surge on herself.",
      "resource": "Mana",
      "targeting": "Unit",
      "targetRange": "900"
    },
    {
      "key": "E",
      "name": "Swipe",
      "affects": "Enemies",
      "angle": "180°",
      "blurb": "Active:  Nidalee slashes in an arc in the target direction, dealing magic damage to enemies hit.",
      "castTime": "0.25",
      "cooldown": "12",
      "cost": "50 / 55 / 60 / 65 / 70",
      "damageType": "Magic damage",
      "effectRadius": "310",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nidalee slashes in an arc in the target direction, dealing magic damage to enemies hit.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "70 / 130 / 190 / 250"
                },
                {
                  "unit": "% bonus AD",
                  "values": "70"
                },
                {
                  "unit": "% AP",
                  "values": "55"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Nidalee/ability-icon/e",
      "maxCharges": -1,
      "notes": "This ability will cast from wherever the caster is at the start of the cast time.\nThe visual effects will be seen from her position if she moves however.(bug)",
      "spellEffects": "Area of effect",
      "spellshieldable": "True",
      "targeting": "Direction"
    },
    {
      "key": "R",
      "name": "Aspect of the Cougar",
      "affects": "Self",
      "blurb": "Active:  Nidalee switches between her Human Form and Cougar Form.",
      "castTime": "none",
      "cooldown": "3",
      "cost": "0",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nidalee switches between her Human Form and Cougar Form.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Cougar Form:</span> Nidalee transforms into a cougar, gaining melee attacks with 125 range and access to her cougar abilities.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Human Form:</span> Nidalee transforms into a human, gaining ranged attacks with 525 range and access to her human abilities. While in this form, applying a Hunted mark will reset Aspect of the Cougar's cooldown.</p>"
        },
        {
          "description": "Nidalee begins with one rank in Aspect of the Cougar and can increase it at levels 6, 11, and 16. Cougar Form's abilities scale based on Aspect of the Cougar's rank."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Nidalee/ability-icon/r",
      "maxCharges": -1,
      "notes": "Transformations do not count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.",
      "targeting": "Auto"
    }
  ],
  "adaptiveType": "Magic damage",
  "attackType": "Ranged",
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 1,
    "mobility": 3,
    "utility": 2,
    "abilityReliance": 75,
    "difficulty": 2
  },
  "faction": "ixtal",
  "lore": "Raised in the deepest jungle, Nidalee is a master tracker who can shapeshift into a ferocious cougar at will. Neither wholly woman nor beast, she viciously defends her territory from any and all trespassers, with carefully placed traps and deft spear throws. She cripples her quarry before pouncing on them in feline form—the lucky few who survive tell tales of a wild woman with razor-sharp instincts, and even sharper claws...",
  "patchLastChanged": "25.14",
  "positions": [
    "Jungle"
  ],
  "price": {
    "blueEssence": 1575,
    "rp": 790
  },
  "releaseDate": "2009-12-17",
  "resource": "Mana",
  "roles": [
    "Assassin",
    "Mage",
    "Specialist"
  ],
  "stats": {
    "health": {
      "flat": 610,
      "perLevel": 109
    },
    "healthRegen": {
      "flat": 6,
      "perLevel": 0.6
    },
    "mana": {
      "flat": 295,
      "perLevel": 45
    },
    "manaRegen": {
      "flat": 6,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 32,
      "perLevel": 5
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.45
    },
    "attackDamage": {
      "flat": 58,
      "perLevel": 3.5
    },
    "movespeed": {
      "flat": 335
    },
    "acquisitionRadius": {
      "flat": 800
    },
    "selectionRadius": {
      "flat": 110
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
      "flat": 0.638,
      "perLevel": 3.22
    },
    "attackSpeedRatio": {
      "flat": 0.638
    },
    "attackCastTime": {
      "flat": 0.3
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackDelayOffset": {
      "flat": -0.15
    },
    "attackRange": {
      "flat": 525
    }
  }
}
export default champion