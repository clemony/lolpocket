// Updated Patch 25.19 - 10/07/2025 08:16:13 AM CDT

const champion: Champion = {
  "id": 895,
  "key": "Nilah",
  "name": "Nilah",
  "title": "the Joy Unbound",
  "abilities": [
    {
      "key": "P",
      "name": "Joy Unending",
      "affects": "Self, Allies",
      "blurb": "Innate: Whenever  Nilah kills a  minion, she and the nearest allied champion gain an additional portion of the  experience they would have lost from sharing.",
      "effectRadius": "1000",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Whenever Nilah kills a minion, she and the nearest allied champion gain an additional 50% of the experience they would have lost from sharing.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Whenever a nearby allied champion uses an ability to heal or shield either Nilah or themselves, both they and Nilah receive a bonus amount equal to 7.5% of the healing or 15% of the shielding after a 0.5-second delay. Bonus shielding lasts as long as the shield that triggered the effect, up to a maximum duration of 4 seconds.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Nilah/ability-icon/p",
      "notes": "Nilah will gain a portion of all healing and all shielding from nearby allies that activate either of the effects on themselves while she is within range of them.\nThe same applies to allies that grant Nilah a heal or shield; they gain a portion of the heal or shield given to her by them, even if the heal or shield affects both units.\nHeal and shields granted by items, runes, and summoner spells will not trigger the increased amount.\nThe heal and shield increases do not trigger from their own heal or shield.\nNilah may still gain a shield from her allies' shields even if they are longer than 4 seconds, but the buff of the shield will only last for up to 4 seconds.\nNilah can receive a normal shield from nearby allies that gain physical or magic shields.",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Formless Blade",
      "width": "150",
      "affects": "Self, Enemies",
      "blurb": "Passive:  Nilah gains  armor penetration based on her  critical strike chance. Also, her basic attacks and Formless Blade against  champions  heal her based on her  critical strike chance; overhealing becomes a  shield that lasts a few seconds.",
      "castTime": "0.35 : 0.28 (based on bonus attack speed) / None",
      "cooldown": "4",
      "cost": "30",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Nilah gains 0% - 33% (based on critical strike chance) armor penetration. Her basic attacks and Formless Blade heal her for 0% - 20% (based on critical strike chance) of the post-mitigation damage dealt to champions, converting each heal instance beyond maximum health into a shield that lasts 6 seconds.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nilah cracks her whip-blade in a line in the target direction that deals physical damage to enemies hit, increased by 0% - 100% (based on critical strike chance). Formless Blade can hit structures and applies life steal at 100% effectiveness to one target.</p>",
          "leveling": [
            {
              "attribute": "Minimum Physical Damage",
              "modifiers": [
                {
                  "values": "5 / 10 / 15 / 20 / 25"
                },
                {
                  "tooltip": "Scaling per rank:\n90 / 95 / 100 / 105 / 110% AD",
                  "unit": "% AD",
                  "values": "90 - 110"
                }
              ]
            },
            {
              "attribute": "Maximum Physical Damage",
              "modifiers": [
                {
                  "values": "10 / 20 / 30 / 40 / 50"
                },
                {
                  "tooltip": "Scaling per rank:\n180 / 190 / 200 / 210 / 220% AD",
                  "unit": "% AD",
                  "values": "180 - 220"
                }
              ]
            }
          ]
        },
        {
          "description": "If Formless Blade is cast during Slipstream, Nilah leaves behind a wave that is sent towards her location at the end of the dash, dealing the same damage to enemies hit."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">If Formless Blade hits an enemy, Nilah empowers herself for 4 seconds:</span> gaining 125 bonus attack range and 10% - 60% (based on level) bonus attack speed, and causing her basic attacks to strike in a cone that deals 100% AD physical damage to enemies hit. Against secondary non-champion targets, this is reduced to 33% AD for minions and 10% AD for monsters, and additionally executes minions left below 20 health. On-hit effects are applied only to the primary target.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Nilah/ability-icon/q",
      "maxCharges": -1,
      "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nFormless Blade's active cast triggers call for help for dealing damage despite not being a targeted spell.(bug)\nApplies  area damage on the empowered attacks.\n Spell shield will not block Formless Blade's empowered basic attacks.\nParrying effects ( dodge,  block,  blind) will negate Formless Blade's empowered attacks only as the primary target.\nFormless Blade's damage to the primary target of the enhanced attacks is affected by  Infinity Edge and classified as  basic damage.\nThe target to which Nilah applies life steal to is unpredictable.",
      "projectile": "FALSE",
      "resource": "Mana",
      "spellEffects": "Special",
      "spellshieldable": "special",
      "targeting": "Direction"
    },
    {
      "key": "W",
      "name": "Jubilant Veil",
      "affects": "Self, Allies",
      "blurb": "Active:  Nilah briefly envelops herself in mist, during which she gains  ghosting,  move speed and magic damage reduction, and  dodges all non-turret basic attacks.",
      "castTime": "None",
      "collisionRadius": "150",
      "cooldown": "26 / 25 / 24 / 23 / 22",
      "cost": "60 / 45 / 30 / 15 / 0",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nilah envelops herself in mist for 2.25 seconds, during which she becomes ghosted, gains bonus movement speed, reduces all incoming magic damage taken by 25%, and dodges all non- turret basic attacks.</p>",
          "leveling": [
            {
              "attribute": "Bonus Movement Speed",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "15 / 17.5 / 20 / 22.5 / 25"
                }
              ]
            }
          ]
        },
        {
          "description": "Allied champions she touches will also be enveloped for 1.5 seconds, gaining the same effects."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Nilah/ability-icon/w",
      "maxCharges": -1,
      "notes": "Allies may only be affected by Jubilant Veil once every 6 seconds.\nJubilant Veil's cooldown is not affected by  Spear of Shojin Dragonforce.(bug)",
      "resource": "Mana",
      "targeting": "Auto"
    },
    {
      "key": "E",
      "name": "Slipstream",
      "affects": "Enemies",
      "blurb": "Active:  Nilah  dashes in the target enemy's direction, dealing physical damage to enemies she passes through.",
      "castTime": "none",
      "collisionRadius": "150",
      "cooldown": "0.5",
      "cost": "40",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nilah dashes a fixed distance in the direction of the target unit, dealing physical damage to enemies she passes through.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "60 / 70 / 80 / 90 / 100"
                },
                {
                  "unit": "% bonus AD",
                  "values": "20"
                }
              ]
            }
          ]
        },
        {
          "description": "Nilah periodically stocks a Slipstream charge, up to a maximum of 2."
        },
        {
          "description": "Slipstream resets Nilah's basic attack timer. Formless Blade and Apotheosis can be cast during the dash."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Nilah/ability-icon/e",
      "maxCharges": 2,
      "notes": "Formless Blade used during Slipstream might not register, rendering it on cooldown without being casted.(bug)\nSlipstream has a chance of visually not using charge, causing it to showing one available charge without possibility of using it.(bug)\nDashing to target through a wall within casting range will cancel the dash if wall is longer than dash range.(bug)",
      "rechargeRate": "26 / 22.5 / 19 / 15.5 / 12",
      "resource": "Mana",
      "speed": "2200",
      "spellEffects": "spellaoe",
      "spellshieldable": "True",
      "targeting": "Unit",
      "targetRange": "550"
    },
    {
      "key": "R",
      "name": "Apotheosis",
      "affects": "Enemies",
      "blurb": "Active:  Nilah whirls her whip-blade for a brief moment, continually dealing physical damage to nearby enemies. She then bursts to deal physical damage and  pull in nearby enemies. Each hit will also  slow enemies for a short time.",
      "castTime": "None",
      "cooldown": "110 / 95 / 80",
      "cost": "80",
      "damageType": "Physical damage",
      "effectRadius": "450 / 1500",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nilah whirls her whip-blade over 1 second, dealing physical damage to nearby enemies every 0.25 seconds. She then unleashes a burst that deals physical damage and pulls them 250 units towards her. Each hit also slows targets by 10% for 3 seconds, refreshing on subsequent hits.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage per Tick",
              "modifiers": [
                {
                  "values": "15 / 25 / 35"
                },
                {
                  "unit": "% bonus AD",
                  "values": "10"
                }
              ]
            },
            {
              "attribute": "Total Physical Damage",
              "modifiers": [
                {
                  "values": "60 / 100 / 140"
                },
                {
                  "unit": "% bonus AD",
                  "values": "40"
                }
              ]
            },
            {
              "attribute": "Burst Physical Damage",
              "modifiers": [
                {
                  "values": "125 / 225 / 325"
                },
                {
                  "unit": "% bonus AD",
                  "values": "100"
                }
              ]
            },
            {
              "attribute": "Maximum Total Physical Damage",
              "modifiers": [
                {
                  "values": "185 / 325 / 465"
                },
                {
                  "unit": "% bonus AD",
                  "values": "140"
                }
              ]
            }
          ]
        },
        {
          "description": "Nilah heals herself and nearby allied champions for 20% - 50% (based on critical strike chance) of the post-mitigation damage dealt to champions, reduced to 10% against non-champions, converting each heal instance beyond maximum health into a shield that last 6 seconds."
        },
        {
          "description": "Nilah is unable to basic attack and cast her other abilities during Apotheosis, but she is able to move."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Nilah/ability-icon/r",
      "maxCharges": -1,
      "notes": "Apotheosis can pull enemies through walls and can knock them across Nilah's location.\n Spell shield will only block the burst damage.\nApotheosis shielding reuses indicators from  Joy Unending.\nThe following table refers for interactions while Nilah is performing Apotheosis:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\nAll the other item-actives are usable\n\n\nDisabled\n\n\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash  Teleport  Hexflash\n\n\nDisabled\n\n Recall\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
      "resource": "Mana",
      "spellEffects": "spellaoe",
      "spellshieldable": "special",
      "targeting": "Auto"
    }
  ],
  "adaptiveType": "Physical damage",
  "attackType": "Melee",
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 1,
    "mobility": 3,
    "utility": 2,
    "abilityReliance": 25,
    "difficulty": 3
  },
  "faction": "bilgewater",
  "lore": "Nilah is an ascetic warrior from a distant land, seeking the world's deadliest, most titanic opponents so that she might challenge and destroy them. Having won her power through an encounter with the long-imprisoned demon of joy, she has no emotions other than unceasing jubilation—a small price to pay for the vast strength she now possesses. Channeling the demon's liquid form into a blade of unparalleled might, she stands defiant against ancient threats long forgotten.",
  "patchLastChanged": "25.15",
  "positions": [
    "Bottom"
  ],
  "price": {
    "blueEssence": 2400,
    "rp": 880
  },
  "releaseDate": "2022-07-13",
  "resource": "Mana",
  "roles": [
    "Assassin",
    "Fighter",
    "Skirmisher"
  ],
  "stats": {
    "health": {
      "flat": 570,
      "perLevel": 101
    },
    "healthRegen": {
      "flat": 6,
      "perLevel": 0.9
    },
    "mana": {
      "flat": 350,
      "perLevel": 35
    },
    "manaRegen": {
      "flat": 8.2,
      "perLevel": 0.7
    },
    "armor": {
      "flat": 27,
      "perLevel": 4.5
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 60,
      "perLevel": 2
    },
    "movespeed": {
      "flat": 340
    },
    "acquisitionRadius": {
      "flat": 400
    },
    "selectionRadius": {
      "flat": 120
    },
    "pathingRadius": {
      "flat": 32
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
      "flat": 0.697,
      "perLevel": 2.25
    },
    "attackSpeedRatio": {
      "flat": 0.67
    },
    "attackCastTime": {
      "flat": 0.3
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackDelayOffset": {
      "flat": -0.08
    },
    "attackRange": {
      "flat": 225
    }
  }
}
export default champion