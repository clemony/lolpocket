// Updated Patch 25.17 - 09/12/2025 02:39:57 PM CDT

const champion: Champion = {
  "id": 526,
  "key": "Rell",
  "name": "Rell",
  "title": "the Iron Maiden",
  "fullName": "Rell Canwell",
  "resource": "Mana",
  "attackType": "Melee",
  "adaptiveType": "Magic damage",
  "stats": {
    "health": {
      "flat": 620,
      "perLevel": 104
    },
    "healthRegen": {
      "flat": 7.5,
      "perLevel": 0.85
    },
    "mana": {
      "flat": 320,
      "perLevel": 40
    },
    "manaRegen": {
      "flat": 7,
      "perLevel": 0.7
    },
    "armor": {
      "flat": 30,
      "perLevel": 4
    },
    "magicResistance": {
      "flat": 28,
      "perLevel": 1.8
    },
    "attackDamage": {
      "flat": 55,
      "perLevel": 3
    },
    "movespeed": {
      "flat": 315
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
      "perLevel": 2
    },
    "attackSpeedRatio": {
      "flat": 0.625
    },
    "attackCastTime": {
      "flat": 0.42
    },
    "attackTotalTime": {
      "flat": 2
    },
    "attackRange": {
      "flat": 175
    }
  },
  "positions": [
    "Support"
  ],
  "roles": [
    "Support",
    "Tank",
    "Vanguard"
  ],
  "attributeRatings": {
    "damage": 1,
    "toughness": 3,
    "control": 3,
    "mobility": 2,
    "utility": 2,
    "abilityReliance": 85,
    "difficulty": 2
  },
  "abilities": [
    {
      "name": "Break the Mold",
      "key": "P",
      "icon": "https://cdn.communitydragon.org/latest/champion/Rell/ability-icon/p",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Rell's basic attacks deal bonus magic damage on-hit equal to the sum of 5% of her total armor and 5% of her total magic resistance.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Rell's basic attacks and abilities against non- minions reduce the target's armor and magic resistance by 3% for 5 seconds, refreshing on subsequent hits and stacking up to 5 times for a maximum of 15% reduction.</p>"
        },
        {
          "description": "Rell gains bonus armor and bonus magic resistance equal to the sum resistances reduced from all afflicted enemies."
        },
        {
          "description": "Break the Mold will reduce the target's armor and magic resistance by a minimum of 1.5 - 3 (based on level)."
        }
      ],
      "targeting": "Passive",
      "affects": "Self, Enemies",
      "spellshieldable": "false",
      "damageType": "Magic damage",
      "spellEffects": "proc",
      "notes": "The attacks do not affect structures.",
      "blurb": "Innate:  Rell's basic attacks reduce the target's  armor and  magic resist for a few seconds. Basic attacks against enemy  champions will refresh the duration for all nearby afflicted enemies."
    },
    {
      "name": "Shattering Strike",
      "key": "Q",
      "icon": "https://cdn.communitydragon.org/latest/champion/Rell/ability-icon/q",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Rell thrusts her lance in the target direction, lunging forward 100 units and destroying the damage-mitigating shields of all enemies hit (excluding the shields of monsters) before dealing them magic damage and stunning them for 0.65 seconds.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                "60 / 100 / 140 / 180 / 220",
                "60% AP"
              ]
            }
          ]
        }
      ],
      "cost": "50",
      "cooldown": "11 / 10.5 / 10 / 9.5 / 9",
      "targeting": "Direction",
      "affects": "Enemies",
      "spellshieldable": "true",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "spellaoe",
      "projectile": "FALSE",
      "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nRell is  locked out of moving, attacking, and casting any other ability for 0.35 seconds after Shattering Strike is cast.",
      "blurb": "Active:  Rell thrusts her lance in the target direction that destroys damage  shields of enemies hit before dealing magic damage and  stunning.",
      "width": "150",
      "castTime": "0.4",
      "maxCharges": -1
    },
    {
      "name": "Ferromancy: Crash Down",
      "key": "W",
      "icon": "https://cdn.communitydragon.org/latest/champion/Rell/ability-icon/w",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive - Mounted Alacrity:</span> While Rell is Mounted, she gains bonus movement speed.</p>",
          "leveling": [
            {
              "attribute": "Bonus Movement Speed",
              "modifiers": [
                "20 / 25 / 30 / 35 / 40"
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Rell becomes Dismounted and leaps to the target location over the cast time, granting herself a shield that lasts until destroyed or casting Ferromancy: Mount Up. Upon arrival, she deals magic damage to nearby enemies, stuns them for 0.8 seconds, and knocks them up for 0.4 seconds. She will continue sliding forward another 320 units over 0.5 seconds, though not through terrain, affecting further enemies along her path.</p>",
          "leveling": [
            {
              "attribute": "Shield Strength",
              "modifiers": [
                "20 / 40 / 60 / 80 / 100",
                "13% maximum health"
              ]
            },
            {
              "attribute": "Magic Damage",
              "modifiers": [
                "60 / 90 / 120 / 150 / 180",
                "60% AP"
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">While Rell is Dismounted, she can cast Ferromancy:</span> Mount Up. Upon completing a Recall channel or respawning, Rell will automatically revert to Mounted form without casting the ability and reset Ferromancy: Mount Up's cooldown.</p>"
        },
        {
          "description": "This ability can be cast only while Rell is Mounted. Rell can cast Magnet Storm during the dash, and is not considered to be dismounted until after the leap ends."
        }
      ],
      "cost": "40",
      "cooldown": "10",
      "targeting": "Location",
      "affects": "Enemies",
      "spellshieldable": "true",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "spellaoe",
      "notes": "Rell  slides between 250 and 350 units in testing, depending on how far the spell was targeted. It is not known where this is intended.\nIf Rell dashes before a wall on the map, the slide will cover a shorter distance to the terrain over the same time, moving slower.\nPENDING FOR TEST: Interaction with player-made walls.\nThe following table refers for interactions while Rell is dashing/in cast time:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Shattering Strike is disabled.  Full Tilt and  Magnet Storm are usable.\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nAll the other item-actives are usable\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
      "blurb": "Passive - Mounted Alacrity: While  Rell is Mounted, she gains bonus movement speed.",
      "collisionRadius": "200",
      "castTime": "0.625",
      "effectRadius": "180",
      "targetRange": "400 / 100",
      "maxCharges": -1
    },
    {
      "name": "Ferromancy: Mount Up",
      "key": "W",
      "icon": "https://cdn.communitydragon.org/latest/champion/Rell/ability-icon/w",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> While Rell is Dismounted, she gains 15% bonus armor, 15% bonus magic resistance, 20% bonus attack speed, and 75 bonus attack range.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Rell becomes Mounted, gaining 30% bonus movement speed decaying over 2 seconds and empowering her next basic attack within 3.5 seconds to have a 0.2-second cast time, gain 100 bonus attack range and cause her to charge at the target's location, during which she also gains 40% bonus attack speed. Upon arrival or collision, she deals bonus magic damage, stuns the target for 0.6 seconds, and flings them 150 units over herself, though not through terrain, over 0.4 seconds.</p>",
          "leveling": [
            {
              "attribute": "Bonus Magic Damage",
              "modifiers": [
                "10 / 25 / 40 / 55 / 70",
                "40% AP"
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">While Rell is Mounted, she can cast Ferromancy:</span> Crash Down.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Ferromancy:</span> Mount Up resets Rell's basic attack timer. This ability can be cast only while Rell is Dismounted.</p>"
        }
      ],
      "cost": "40",
      "cooldown": "10",
      "targeting": "Auto",
      "affects": "Enemies",
      "spellshieldable": "true",
      "damageType": "Magic damage",
      "spellEffects": "spell",
      "notes": "Rell will always respawn and start the game as mounted.\nThe basic attack reset is not considered one for  Hail of Blades.\nRell can use the empowered attack even while  grounded or  rooted.\nThe  dash can be  knocked down but the attack's effects will still be applied.\nThe movement speed reduction is a negative bonus, not a  slow, and is thus not reduced by  slow resist.\n Displacement immunity will not resist the application of the  stun.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the empowered attack's cast time, it is cancelled but not consumed.",
      "blurb": "Passive: While  Rell is Dismounted, she gains  bonus armor and  bonus magic resist.",
      "castTime": "0.25",
      "maxCharges": -1
    },
    {
      "name": "Full Tilt",
      "key": "E",
      "icon": "https://cdn.communitydragon.org/latest/champion/Rell/ability-icon/e",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Rell powers up herself and the target allied champion for 3 seconds, both gaining 10% bonus movement speed which increases to 25% while moving within 1200 units of the empowered ally or an enemy.</p>"
        },
        {
          "description": "Additionally, Rell's next basic attack or Shattering Strike within 5 seconds creates an explosion that deals bonus magic damage. The damage based on the target's health ratio is capped at 150 - 300 (based on level) against monsters and structures.",
          "leveling": [
            {
              "attribute": "Bonus Magic Damage",
              "modifiers": [
                "5 / 5.5 / 6 / 6.5 / 7%  of target's maximum health",
                "3% per 100 AP"
              ]
            }
          ]
        },
        {
          "description": "If cast without a valid target, or self-cast, Full Tilt will automatically target the closest allied champion in range."
        }
      ],
      "cost": "40",
      "cooldown": "14 / 13 / 12 / 11 / 10",
      "targeting": "Unit / Auto",
      "affects": "Self, Allies, Enemies",
      "spellshieldable": "true",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "spellaoe",
      "notes": "No additional details.",
      "blurb": "Passive:  Rell gains bonus movement speed, reduced while in-combat.",
      "castTime": "none",
      "effectRadius": "300",
      "maxCharges": -1
    },
    {
      "name": "Magnet Storm",
      "key": "R",
      "icon": "https://cdn.communitydragon.org/latest/champion/Rell/ability-icon/r",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Rell erupts with magnetic fury, pulling nearby enemies inward. She then creates a gravitational field around her for the next 2 seconds that deals magic damage every 0.25 seconds to nearby enemies and drags them towards her.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage Per Tick",
              "modifiers": [
                "15 / 25 / 35",
                "13.75% AP"
              ]
            },
            {
              "attribute": "Total Magic Damage",
              "modifiers": [
                "120 / 200 / 280",
                "110% AP"
              ]
            }
          ]
        }
      ],
      "cost": "100",
      "cooldown": "120 / 100 / 80",
      "targeting": "Auto",
      "affects": "Enemies",
      "spellshieldable": "special",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "aoedot",
      "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nMagnet Storm will not drag units that are:\n Dashing.\nBeing displaced (e.g. by  airborne effects)\n Attached.\n Displacement immune.\n Immune to crowd control.\n Spell shield will block the initial  pull but not the dragging effect.",
      "blurb": "Active:  Rell erupts in magnetic fury,  pulling nearby enemies inward. She then emits a  Kinematic field that continually deals magic damage over a short time.",
      "innerRadius": "225",
      "speed": "300",
      "castTime": "0.25",
      "effectRadius": "450 /  375",
      "maxCharges": -1
    }
  ],
  "lore": "The product of brutal experimentation at the hands of the Black Rose, Rell is a defiant, living weapon determined to topple Noxus. Her childhood was one of misery and horror, enduring unspeakable procedures to perfect and weaponize her magical control over metal... until she staged a violent escape, killing many of her captors in the process. Now branded as a criminal, Rell attacks Noxian soldiers on sight as she searches for survivors of her old “academy,” defending the meek while delivering violent death to her former overseers.",
  "faction": "noxus",
  "releaseDate": "2020-12-10",
  "patchLastChanged": "25.15",
  "price": {
    "blueEssence": 2400,
    "rp": 880
  }
}
export default champion