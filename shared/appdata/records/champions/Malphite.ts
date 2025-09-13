// Updated Patch 25.17 - 09/12/2025 02:39:56 PM CDT

const champion: Champion = {
  "id": 54,
  "key": "Malphite",
  "name": "Malphite",
  "title": "Shard of the Monolith",
  "resource": "Mana",
  "attackType": "Melee",
  "adaptiveType": "Magic damage",
  "stats": {
    "health": {
      "flat": 665,
      "perLevel": 104
    },
    "healthRegen": {
      "flat": 7,
      "perLevel": 0.55
    },
    "mana": {
      "flat": 280,
      "perLevel": 60
    },
    "manaRegen": {
      "flat": 7.3,
      "perLevel": 0.55
    },
    "armor": {
      "flat": 37,
      "perLevel": 4.95
    },
    "magicResistance": {
      "flat": 28,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 62,
      "perLevel": 4
    },
    "movespeed": {
      "flat": 335
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
      "flat": 0.736,
      "perLevel": 3.4
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
      "flat": -0.05
    },
    "attackRange": {
      "flat": 125
    }
  },
  "positions": [
    "Middle",
    "Support",
    "Top"
  ],
  "roles": [
    "Mage",
    "Tank",
    "Vanguard"
  ],
  "attributeRatings": {
    "damage": 1,
    "toughness": 3,
    "control": 3,
    "mobility": 1,
    "utility": 1,
    "abilityReliance": 75,
    "difficulty": 1
  },
  "abilities": [
    {
      "name": "Granite Shield",
      "key": "P",
      "icon": "https://cdn.communitydragon.org/latest/champion/Malphite/ability-icon/p",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Shard of the Monolith:</span> Malphite gains increased percentage size equal to 8% of his total armor, capped at 35% increased size at 437.5 armor.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Malphite grants himself a shield equal to 10% of his maximum health. The shield lasts until it is broken, and refreshes after a few seconds of not taking damage.</p>"
        }
      ],
      "targeting": "Passive",
      "affects": "Self",
      "notes": "Malphite's increased size is affected by his base armor and growth, but also reduced by  Black Cleaver. His increased size does not consider  Thunderclap's bonus armor.\nThe bonus will become a size reduction if Malphite is dropped to negative armor values.\nGranite Shield does not refresh its cooldown from damage that is mitigated by  shields.",
      "blurb": "Innate:  Malphite  shields himself equal to a portion of his maximum health, which refreshes after a few seconds without taking damage."
    },
    {
      "name": "Seismic Shard",
      "key": "Q",
      "icon": "https://cdn.communitydragon.org/latest/champion/Malphite/ability-icon/q",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Malphite sends a shard to the target enemy that deals magic damage and slows them for 3 seconds.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                "70 / 120 / 170 / 220 / 270",
                "60% AP"
              ]
            },
            {
              "attribute": "Slow",
              "modifiers": [
                "20 / 25 / 30 / 35 / 40%"
              ]
            }
          ]
        },
        {
          "description": "Malphite also gains bonus movement speed equal to the raw amount the target lost from the slow for the duration."
        }
      ],
      "cost": "70 / 75 / 80 / 85 / 90",
      "cooldown": "8",
      "targeting": "Unit",
      "affects": "Enemies",
      "spellshieldable": "Special",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "single",
      "projectile": "TRUE",
      "notes": "The rock spawns 100 units in front of Malphite.\nMalphite will gain the bonus movement speed for the full duration as long as Seismic Shard impacts the target.\nBoth a buff shown in the hotbar and duration bar above the ability icon will indicate the remaining duration.\nSeismic Shard's movement speed gain is entirely based off the target's current, and loss of, movement speed.\nTargets that are already  slowed by another effect will grant Malphite diminished movement speed.\n Slow-resistant and  slow-immune targets will reduce or nullify Malphite's gain.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
      "blurb": "Active:  Malphite sends a shard to the target enemy that deals magic damage and  slows them for a few seconds.",
      "speed": "1200",
      "castTime": "0.25",
      "targetRange": "625",
      "maxCharges": -1
    },
    {
      "name": "Thunderclap",
      "key": "W",
      "icon": "https://cdn.communitydragon.org/latest/champion/Malphite/ability-icon/w",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Malphite gains bonus armor, tripled while Granite Shield is active.</p>",
          "leveling": [
            {
              "attribute": "Bonus Armor",
              "modifiers": [
                "10 / 15 / 20 / 25 / 30% armor"
              ]
            },
            {
              "attribute": "Increased Bonus Armor",
              "modifiers": [
                "30 / 45 / 60 / 75 / 90% armor"
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Malphite empowers his next basic attack within 6 seconds to have an uncancelable windup, gain 50 bonus range, and deal bonus physical damage on-hit.</p>",
          "leveling": [
            {
              "attribute": "Bonus Physical Damage",
              "modifiers": [
                "30 / 40 / 50 / 60 / 70",
                "20% AP",
                "15% armor"
              ]
            }
          ]
        },
        {
          "description": "Additionally, Malphite's basic attacks on-hit for the next 5 seconds are empowered to trigger a cone in the direction of the target that deals physical damage to enemies hit.",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                "15 / 25 / 35 / 45 / 55",
                "30% AP",
                "15% armor"
              ]
            }
          ]
        },
        {
          "description": "Thunderclap resets Malphite's basic attack timer."
        }
      ],
      "cost": "30 / 35 / 40 / 45 / 50",
      "cooldown": "10 / 9.5 / 9 / 8.5 / 8",
      "targeting": "Auto",
      "affects": "Self",
      "spellshieldable": "False",
      "resource": "Mana",
      "damageType": "Physical damage",
      "spellEffects": "Proc",
      "notes": "The passive will amplify negative armor, too, if Malphite's armor is dropped that low.\nThe empowered attack:\nBenefits from Thunderclap's cone effect.\nPrevents Malphite from casting  Seismic Shard and  Ground Slam during its windup.\nCannot have its windup canceled by new movement or attack commands, or casting  Unstoppable Force.\nCan have its windup canceled by casting  Hextech Rocketbelt.\nThe cone starts from Malphite's location.\nUnlike similar spells, it does not deal its damage separately to the primary target of the attack(s); if the target is outside the area of effect when struck, it will not take the bonus damage.\nPENDING FOR TEST:: Interaction with parrying effects ( dodge,  block,  blind).",
      "blurb": "Passive:  Malphite gains  bonus armor, tripled while  Granite Shield is active.",
      "castTime": "None",
      "maxCharges": -1
    },
    {
      "name": "Ground Slam",
      "key": "E",
      "icon": "https://cdn.communitydragon.org/latest/champion/Malphite/ability-icon/e",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Malphite slams the ground beneath him, dealing magic damage to nearby enemies and crippling them for 3 seconds.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                "70 / 110 / 150 / 190 / 230",
                "60% AP",
                "40% armor"
              ]
            },
            {
              "attribute": "Cripple Strength",
              "modifiers": [
                "30 / 35 / 40 / 45 / 50%"
              ]
            }
          ]
        }
      ],
      "cost": "50",
      "cooldown": "7",
      "targeting": "Auto",
      "affects": "Enemies",
      "spellshieldable": "True",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "aoe",
      "notes": "The  cripple  stacks multiplicatively with other sources of attack speed reductions.\nThis ability will cast from wherever the caster is at the end of the cast time.",
      "blurb": "Active:  Malphite slams the ground beneath him, dealing magic damage to nearby enemies and  crippling them for a short time.",
      "castTime": "0.2419",
      "effectRadius": "400",
      "maxCharges": -1
    },
    {
      "name": "Unstoppable Force",
      "key": "R",
      "icon": "https://cdn.communitydragon.org/latest/champion/Malphite/ability-icon/r",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Malphite dashes with displacement immunity to the target location. Upon arrival, he deals magic damage to nearby enemies and knocks them up for 1.5 seconds.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                "200 / 300 / 400",
                "90% AP"
              ]
            }
          ]
        }
      ],
      "cost": "100",
      "cooldown": "130 / 105 / 80",
      "targeting": "Location",
      "affects": "Enemies",
      "spellshieldable": "True",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "aoe",
      "notes": "The dash speed can be up-to doubled if Unstoppable Force is targeted at the middle of a wall so that his destination ends up on the other side.\nIt will be decreased if his destination ends up closer to him than his target location.\nIf Malphite dies during his  dash, the ability cancels.\nIf the dash is interrupted without Malphite dying, for instance when he enters  resurrection during Unstoppable Force, he halts and the ability instead affects enemies at the stopped location.",
      "blurb": "Active:  Malphite  dashes with  displacement immunity to the target location. Upon arrival, he deals magic damage to nearby enemies and briefly  knocks them up.",
      "speed": "1500 + 100% movement speed",
      "castTime": "none",
      "effectRadius": "325",
      "targetRange": "1000",
      "maxCharges": -1
    }
  ],
  "lore": "A massive creature of living stone, Malphite struggles to impose blessed order on a chaotic world. Birthed as a servitor-shard to an otherworldly obelisk known as the Monolith, he used his tremendous elemental strength to maintain and protect his progenitor, but ultimately failed. The only survivor of the destruction that followed, Malphite now endures Runeterra's soft folk and their fluid temperaments, while struggling to find a new role worthy of the last of his kind.",
  "faction": "ixtal",
  "releaseDate": "2009-09-02",
  "patchLastChanged": "14.21",
  "price": {
    "blueEssence": 225,
    "rp": 260
  }
}
export default champion