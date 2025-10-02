// Updated Patch 25.19 - 09/27/2025 06:08:58 PM CDT

const champion: Champion = {
  "id": 902,
  "key": "Milio",
  "name": "Milio",
  "title": "The Gentle Flame",
  "abilities": [
    {
      "key": "P",
      "name": "Fired Up!",
      "affects": "Allies, Enemies",
      "blurb": "Innate:  Milio's abilities enchant allied  champions on-contact, causing their next basic attack or ability hit shortly after to apply a  burst and then a short burn to the target enemy, both parts dealing magic damage.",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Milio's ability hits on himself and allied champions grant an enchantment for 4 seconds, which causes the next basic attack or ability hit against enemies to deal 7% / 11% / 15% (based on level) of enchanted target's AD bonus magic damage and apply a burn that deals[ 10 - 50 (based on level) (+ 20% of Milio's AP) magic damage over 1.5 seconds. ][ 1.67 - 8.33 (based on level) (+ 3.33% of Milio's AP) magic damage every 0.25 seconds over 1.5 seconds. ]</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Milio/ability-icon/p",
      "notes": "Both the burst and the burn respect  enchantment redirection.\nSubsequent applications of Fired Up! only refresh the duration.\n Spell shield will not block the effect if applied by a basic attack.",
      "spellEffects": "periodic",
      "spellshieldable": "Special",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Ultra Mega Fire Kick",
      "width": "120",
      "affects": "Enemies",
      "blurb": "Active:  Milio kicks a fireball in the target direction that briefly  knocks back and  stuns the first enemy hit. The ball then bounces once toward the target and explodes, dealing magic damage and  slowing enemies hit.",
      "castTime": "none",
      "cooldown": "10",
      "cost": "50 / 55 / 60 / 65 / 70",
      "damageType": "Magic damage",
      "effectRadius": "100 /  250 / 275 / 190",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> After a 0.25-second delay, Milio kicks a fireball in the target direction that grants sight of its path and knocks back and stuns the first enemy it hits over 1 second.</p>"
        },
        {
          "description": "Upon collision, the ball bounces once in the same direction from the target's location, granting sight of the area before exploding in the same radius after a brief delay, dealing magic damage to enemies hit and slowing them for 1.5 seconds.",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "80 / 140 / 200 / 260 / 320"
                },
                {
                  "unit": "% AP",
                  "values": "120"
                }
              ]
            },
            {
              "attribute": "Slow",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "40 / 45 / 50 / 55 / 60"
                },
                {
                  "unit": "% per 100 AP",
                  "values": "5"
                }
              ]
            }
          ]
        },
        {
          "description": "If the primary target is a non-champion, the ball knocks back further and creates a larger explosion. Ultra Mega Fire Kick refunds 50% of its mana cost if it hits at least one champion with the fireball or explosion."
        },
        {
          "description": "Milio cannot cast other abilities during Ultra Mega Fire Kick's delay."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Milio/ability-icon/q",
      "maxCharges": -1,
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "1200",
      "spellEffects": "spellaoe",
      "spellshieldable": "true",
      "targeting": "Direction"
    },
    {
      "key": "W",
      "name": "Cozy Campfire",
      "affects": "Self, Allies",
      "blurb": "Active:  Milio summons a fuemigo that lasts for 6 seconds and follows the closest allied  champion. Allied champions near the fuemigo gain increased  attack range and are continually  healed.",
      "castTime": "0.25",
      "cooldown": "29 / 27 / 25 / 23 / 21",
      "cost": "90 / 100 / 110 / 120 / 130",
      "effectRadius": "415",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Milio summons a fuemigo at the target location or upon the target allied champion for 6 seconds that follows the nearest allied champion and grants sight of its surroundings. Allied champions near the fuemigo gain bonus attack range equal to a percentage of their base attack range and heal every 0.264 seconds over the duration.</p>",
          "leveling": [
            {
              "attribute": "Base Attack Range Scaling",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "10 / 12.5 / 15 / 17.5 / 20"
                }
              ]
            },
            {
              "attribute": "Heal per Tick",
              "modifiers": [
                {
                  "values": "2.8 / 3.6 / 4.4 / 5.2 / 6"
                },
                {
                  "unit": "% AP",
                  "values": "0.6"
                }
              ]
            },
            {
              "attribute": "Total Heal",
              "modifiers": [
                {
                  "values": "70 / 90 / 110 / 130 / 150"
                },
                {
                  "unit": "% AP",
                  "values": "15"
                }
              ]
            }
          ]
        },
        {
          "description": "Cozy Campfire can be recast after 0.5 seconds within the duration."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Milio commands the fuemigo to follow the target allied champion to within 150-units, placing the recast on a 0.5-second static cooldown.</p>"
        },
        {
          "description": "Milio counts as an allied champion for this ability. Cozy Campfire may grant Fired Up! upon being summoned and at most once every 3 seconds thereafter."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Milio/ability-icon/w",
      "maxCharges": -1,
      "notes": "Cozy Campfire's initial cast and recast have a  forgiveness radius of 175 units for their unit-targeted version.\nThe summoned fuemigo will still follow the nearest allied champion in range, even if the initial cast was targeted on a different ally.\nThe  attack range increase lingers on allies for the entire duration of Cozy Campfire, even if they leave the zone.",
      "resource": "Mana",
      "targeting": "Location / Unit",
      "targetRange": "650 / 3000"
    },
    {
      "key": "E",
      "name": "Warm Hugs",
      "affects": "Self, Allies",
      "blurb": "Active:  Milio envelops himself or the target ally in protective flames, granting them a  shield and  bonus move speed for a short time.",
      "castTime": "none",
      "cooldown": "0.5",
      "cost": "50 / 60 / 70 / 80 / 90",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Milio envelops himself or the target allied champion in protective flames, granting the target a shield and bonus movement speed for 2.5 seconds.</p>",
          "leveling": [
            {
              "attribute": "Shield Strength",
              "modifiers": [
                {
                  "values": "45 / 75 / 105 / 135 / 165"
                },
                {
                  "unit": "% AP",
                  "values": "45"
                }
              ]
            },
            {
              "attribute": "Bonus Movement Speed",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "12 / 14 / 16 / 18 / 20"
                }
              ]
            }
          ]
        },
        {
          "description": "Milio periodically stocks a Warm Hugs charge, up to a maximum of 2."
        },
        {
          "description": "Warm Hugs' effects can stack up to 2 times."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Milio/ability-icon/e",
      "maxCharges": 2,
      "notes": "Warm Hugs has a  forgiveness radius of 175 units.",
      "rechargeRate": "17 / 16 / 15 / 14 / 13",
      "resource": "Mana",
      "targeting": "Unit",
      "targetRange": "650"
    },
    {
      "key": "R",
      "name": "Breath of Life",
      "affects": "Self, Allies",
      "blurb": "Active:  Milio explodes in soothing flames,  healing and  cleansing himself and nearby allied  champions of non- airborne  crowd control and granting them  tenacity for a short time.",
      "castTime": "none",
      "cooldown": "160 / 145 / 130",
      "cost": "100",
      "effectRadius": "700",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Milio explodes in soothing flames, healing and cleansing himself and nearby allied champions of non- airborne crowd control, and granting them 65% tenacity for 3 seconds.</p>",
          "leveling": [
            {
              "attribute": "Heal",
              "modifiers": [
                {
                  "values": "150 / 250 / 350"
                },
                {
                  "unit": "% AP",
                  "values": "50"
                }
              ]
            }
          ]
        },
        {
          "description": "Milio cannot cast his other abilities for 0.75 seconds after Breath of Life's activation. Breath of Life cannot be used while affected by cast-inhibiting crowd control."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Milio/ability-icon/r",
      "maxCharges": -1,
      "notes": "Breath of Life affects  untargetable units.",
      "resource": "Mana",
      "targeting": "Auto"
    }
  ],
  "adaptiveType": "Magic damage",
  "attackType": "Ranged",
  "attributeRatings": {
    "damage": 1,
    "toughness": 1,
    "control": 2,
    "mobility": 3,
    "utility": 3,
    "abilityReliance": 80,
    "difficulty": 1
  },
  "faction": "ixtal",
  "lore": "Milio is a warmhearted boy from Ixtal who has, despite his young age, mastered the fire axiom and discovered something new: soothing fire. With this newfound power, Milio plans to help his family escape their exile by joining the Yun Tal—just like his grandmother once did. Having traveled through the Ixtal jungles to the capital of Ixaocan, Milio now prepares to face the Vidalion and join the Yun Tal, unaware of the trials—and dangers—that await him.",
  "patchLastChanged": "25.13",
  "positions": [
    "Support"
  ],
  "price": {
    "blueEssence": 2400,
    "rp": 880
  },
  "releaseDate": "2023-03-23",
  "resource": "Mana",
  "roles": [
    "Enchanter",
    "Mage",
    "Support"
  ],
  "stats": {
    "health": {
      "flat": 560,
      "perLevel": 88
    },
    "healthRegen": {
      "flat": 5,
      "perLevel": 0.5
    },
    "mana": {
      "flat": 365,
      "perLevel": 43
    },
    "manaRegen": {
      "flat": 11.5,
      "perLevel": 0.4
    },
    "armor": {
      "flat": 26,
      "perLevel": 4.6
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 48,
      "perLevel": 3.2
    },
    "movespeed": {
      "flat": 330
    },
    "acquisitionRadius": {
      "flat": 550
    },
    "selectionRadius": {
      "flat": 100
    },
    "pathingRadius": {
      "flat": 30
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
      "flat": 0.625,
      "perLevel": 3
    },
    "attackSpeedRatio": {
      "flat": 0.625
    },
    "attackCastTime": {
      "flat": 0.27
    },
    "attackTotalTime": {
      "flat": 1.575
    },
    "attackDelayOffset": {
      "flat": 0
    },
    "attackRange": {
      "flat": 525
    }
  }
}
export default champion