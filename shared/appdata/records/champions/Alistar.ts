// Updated Patch 25.19 - 10/07/2025 08:16:12 AM CDT

const champion: Champion = {
  "id": 12,
  "key": "Alistar",
  "name": "Alistar",
  "title": "the Minotaur",
  "abilities": [
    {
      "key": "P",
      "name": "Triumphant Roar",
      "affects": "Self, Allies",
      "blurb": "Innate:  Alistar generates  stacks of Triumph from  stunning or  displacing enemy champions or when a nearby enemy  dies.",
      "effectRadius": "1000 / 950",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Alistar generates a stack of Triumph for each enemy champion he stuns or displaces with his abilities, and each time a nearby enemy minion or non-epic monster dies. He generates 7 stacks if a nearby enemy champion or epic monster dies.</p>"
        },
        {
          "description": "At 7 stacks, Alistar consumes them all to heal himself for 5% of his maximum health and nearby allied champions for 7% of his maximum health."
        },
        {
          "description": "Triumphant Roar can occur only once every few seconds, though Alistar may still generate stacks before then."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Alistar/ability-icon/p",
      "notes": "If Alistar is at 7 stacks when Triumphant Roar comes off cooldown, he will roar as soon as it elapses.\nAlistar does not gain stacks for unsuccessfully trying to apply  crowd control, for instance against a  crowd control immune target.\nAlistar will still gain a stack for unsuccessfully trying to knock back a champion protected by a  spell shield with  Headbutt.(bug)\nHealing occurs simultaneously for Alistar and his allies.\nThere is a VFX projectile (700 missile speed) that cannot be destroyed by  Wind Wall and is unrelated to the actual heal.\nAlistar loses all Triumph stacks upon dying.",
      "projectile": "SPECIAL",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Pulverize",
      "affects": "Enemies",
      "blurb": "Active:  Alistar smashes the ground, dealing magic damage to nearby enemies and briefly  stunning and  knocking them up.",
      "castTime": "0.25 / 0.15",
      "cooldown": "14 / 13 / 12 / 11 / 10",
      "cost": "50 / 55 / 60 / 65 / 70",
      "damageType": "Magic damage",
      "effectRadius": "375",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Alistar smashes the ground beneath him, dealing magic damage to nearby enemies and stunning and knocking them up simultaneously for 1 second.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "60 / 100 / 140 / 180 / 220"
                },
                {
                  "unit": "% AP",
                  "values": "80"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Alistar/ability-icon/q",
      "maxCharges": -1,
      "notes": "Pulverize can be buffered during  Headbutt to cast with reduced cast time when the dash ends.\n Displacement immunity will also resist the application of the  stun.\nThis ability will cast from wherever the caster is at the end of the cast time.",
      "resource": "Mana",
      "spellEffects": "spellaoe",
      "spellshieldable": "True",
      "targeting": "Auto"
    },
    {
      "key": "W",
      "name": "Headbutt",
      "affects": "Enemies",
      "blurb": "Active:  Alistar  dashes to the target enemy, dealing magic damage,  stunning, and  knocking them back.",
      "castTime": "none",
      "cooldown": "14 / 13 / 12 / 11 / 10",
      "cost": "50 / 55 / 60 / 65 / 70",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Alistar dashes to the target enemy's location. If they are within 400 units upon arrival, he deals them magic damage and knocks them back 700 units over 0.5 seconds while also stunning them for 0.75 seconds.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "55 / 110 / 165 / 220 / 275"
                },
                {
                  "unit": "% AP",
                  "values": "100"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Alistar/ability-icon/w",
      "maxCharges": -1,
      "notes": "The dash speed depends on the inverse of the distance to the target:\nIf Alistar's radius overlaps with his target's, he will dash with 1200 speed.\nIf Alistar is further from his target than the previous condition, he will dash with (1200  ×  dash distance) / (dash distance - sum of radiuses).\nAt maximum target range, against an enemy with a 65  gameplay radius (median of all champions), Alistar will dash with 1544 speed (reaching his target within 0.429 seconds).\nBoth the lower the dash distance and the larger Alistar and/or his target, the faster the dash becomes; this scales hyperbolically.\nWhen  Pulverize is buffered during the dash, the knockback distance is reduced to 200 units.\nThe CC duration of the ability can be reduced by up to 33.33%  Tenacity, due to airborne not being reducible while the stun is.\nThe  knockback direction is in a straight line from Alistar's original location at start of cast and the enemy when Alistar's dash ends.\nHeadbutt can knock enemies through terrain. The  knockback stops short on walls that cannot be surpassed but the disable duration is not changed.\nThe spell indicator for this ability also displays the direction for the knock back relative to Alistar's position.\nAlistar's  attack range is reduced[ to -375 ][ by 500 ]during Headbutt, to prevent him from being able to attack the target when he completes the dash.\n Displacement immunity will not resist the application of the  stun.",
      "resource": "Mana",
      "speed": "1200 / 1544 / ∞",
      "spellEffects": "spell",
      "spellshieldable": "True",
      "targeting": "Unit",
      "targetRange": "650"
    },
    {
      "key": "E",
      "name": "Trample",
      "affects": "Enemies",
      "blurb": "Active:  Alistar becomes  ghosted and continually deals magic damage to nearby enemies. He generates a stack of Trample each time this damages at least one  champion.",
      "castTime": "none",
      "cooldown": "12 / 11.5 / 11 / 10.5 / 10",
      "cost": "50 / 55 / 60 / 65 / 70",
      "damageType": "Magic damage",
      "effectRadius": "350",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Alistar tramples the ground around him every 0.5 seconds over 5 seconds, becoming ghosted and dealing magic damage to nearby enemies. Each time this damages at least one enemy champion, he generates a stack of Trample that lasts for the remaining duration, stacking up to 5 times.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage Per Tick",
              "modifiers": [
                {
                  "values": "8 / 11 / 14 / 17 / 20"
                },
                {
                  "unit": "% AP",
                  "values": "7"
                }
              ]
            },
            {
              "attribute": "Total Magic Damage",
              "modifiers": [
                {
                  "values": "80 / 110 / 140 / 170 / 200"
                },
                {
                  "unit": "% AP",
                  "values": "70"
                }
              ]
            }
          ]
        },
        {
          "description": "At 5 stacks, Alistar's next basic attack on-hit against a champion within 6 seconds ends Trample's effects to deal 20 - 275 (based on level) bonus magic damage and stun the target for 1 second."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Alistar/ability-icon/e",
      "maxCharges": -1,
      "notes": "Trample deals  persistent area damage damage around Alistar, while the bonus damage on the resulting attack is  proc damage.\nThe  stun and bonus damage are blocked by  spell shields but the base attack damage is not.\nThe on-hit effect is consumed if the attack  blocked, but not if it is  dodged or missed while Alistar is  blinded. In all cases, the attack's effects are negated as normal.\nThe bonus damage and stun can be applied by  Guinsoo's Rageblade's Phantom Hit if the triggering attack did not.\nIf the triggering attack does however apply the bonus damage and stun already, then Phantom Hit cannot apply them a subsequent time by triggering on-hit effects, despite Trample's empowered attack being an on-hit effect.",
      "resource": "Mana",
      "spellEffects": "Special",
      "spellshieldable": "Special",
      "targeting": "Auto"
    },
    {
      "key": "R",
      "name": "Unbreakable Will",
      "affects": "Self",
      "blurb": "Active:  Alistar lets out a wild roar,  cleansing all  crowd control effects and gaining damage reduction for a few seconds.",
      "castTime": "0.25",
      "cooldown": "120 / 100 / 80",
      "cost": "100",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Alistar cleanses himself of all crowd control. For the next 7 seconds, he reduces incoming damage taken.</p>",
          "leveling": [
            {
              "attribute": "Damage Reduction",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "55 / 65 / 75"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Alistar/ability-icon/r",
      "maxCharges": -1,
      "notes": "True damage cannot be reduced by any means and will deal full damage to Alistar during Unbreakable Will.\nUnbreakable Will's modifier to incoming damage stacks additively with  Vladimir's  Hemoplague for a total reduction of 45/55/65%.(note)",
      "resource": "Mana",
      "targeting": "Auto"
    }
  ],
  "adaptiveType": "Magic damage",
  "attackType": "Melee",
  "attributeRatings": {
    "damage": 1,
    "toughness": 3,
    "control": 3,
    "mobility": 1,
    "utility": 2,
    "abilityReliance": 65,
    "difficulty": 1
  },
  "faction": "unaffiliated",
  "lore": "Always a mighty warrior with a fearsome reputation, Alistar seeks revenge for the death of his clan at the hands of the Noxian empire. Though he was enslaved and forced into the life of a gladiator, his unbreakable will was what kept him from truly becoming a beast. Now, free of the chains of his former masters, he fights in the name of the downtrodden and the disadvantaged, his rage as much a weapon as his horns, hooves and fists.",
  "patchLastChanged": "25.15",
  "positions": [
    "Support"
  ],
  "price": {
    "blueEssence": 675,
    "rp": 585
  },
  "releaseDate": "2009-02-21",
  "resource": "Mana",
  "roles": [
    "Support",
    "Tank",
    "Vanguard"
  ],
  "stats": {
    "health": {
      "flat": 685,
      "perLevel": 120
    },
    "healthRegen": {
      "flat": 8.5,
      "perLevel": 0.85
    },
    "mana": {
      "flat": 350,
      "perLevel": 40
    },
    "manaRegen": {
      "flat": 8.5,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 40,
      "perLevel": 4.7
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 62,
      "perLevel": 3.75
    },
    "movespeed": {
      "flat": 330
    },
    "acquisitionRadius": {
      "flat": 600
    },
    "selectionRadius": {
      "flat": 140
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
      "flat": 0.625,
      "perLevel": 2.125
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
      "flat": 0
    },
    "attackRange": {
      "flat": 125
    }
  }
}
export default champion