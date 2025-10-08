// Updated Patch 25.19 - 10/07/2025 08:16:12 AM CDT

const champion: Champion = {
  "id": 60,
  "key": "Elise",
  "name": "Elise",
  "title": "the Spider Queen",
  "abilities": [
    {
      "key": "P",
      "name": "Spider Queen",
      "blurb": "Innate: The rank of  Spider Form / Human Form affects the power of Spider Queen.",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Human Form:</span> Elise gains one dormant Spiderling whenever she hits an enemy with an ability, storing once per cast and up to 2 / 3 / 4 / 5 (based on Human Form's Rank) at a time. She stores the maximum number of Spiderlings when the game starts and upon respawning.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Spider Form:</span> Elise's basic attacks deal 12 / 22 / 32 / 42 (based on Spider Form's Rank) (+ 15% AP) bonus magic damage and heal her for 6 / 8 / 10 / 12 (based on Spider Form's Rank) (+ 8% AP) on-hit.</p>"
        },
        {
          "description": "See Pets for more details about Spiderlings."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Elise/ability-icon/p",
      "notes": "Spider Form's effects do not apply to structures.\nIf an ability hits while Elise is already in Spider Form, a Spiderling will spawn near her rather than being stored.\nThe Spiderlings have a leash range.\nSpider Form's basic attacks will apply other on-hit effects and can  critically strike as normal (the bonus damage does not).\nSpider Form's bonus damage and healing can be  blocked,  dodge and are not applied if Elise is  blind.\nApplies  proc damage on the bonus magic damage on-hit in Spider Form.\nThe Spiderlings apply  area damage.",
      "spellEffects": "Special",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Neurotoxin",
      "affects": "Enemies",
      "blurb": "Active:  Elise fires a toxin at the target enemy that deals magic damage based on the target's current health.",
      "castTime": "0.25",
      "cooldown": "6",
      "cost": "80 / 85 / 90 / 95 / 100",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Elise fires a toxin at the target enemy that deals magic damage, with the damage based on the target's health ratio being capped against monsters.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "40 / 70 / 100 / 130 / 160"
                },
                {
                  "unit": "% (+ 3% per 100 AP) of target's current health",
                  "values": "4"
                }
              ]
            },
            {
              "attribute": "Capped Monster Damage",
              "modifiers": [
                {
                  "values": "75 / 100 / 125 / 150 / 175"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Elise/ability-icon/q",
      "maxCharges": -1,
      "notes": "If the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).\nWith the exceptions of Elise's Death Blossom, Victorious, Blood Moon, and Super Galaxy skins; Neurotoxin's VFX size will scale uncapped based off the total damage it does. (note)",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "2200",
      "spellEffects": "single",
      "spellshieldable": "True",
      "targeting": "Unit",
      "targetRange": "575"
    },
    {
      "key": "Q",
      "name": "Venomous Bite",
      "affects": "Enemies",
      "blurb": "Active:  Elise  pounces at the target enemy and deals damage based on the target's missing health, applying  on-hit effects.",
      "castTime": "0.25",
      "cooldown": "6",
      "cost": "80 / 85 / 90 / 95 / 100",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Elise pounces at the target enemy with her fangs and bites them, dealing magic damage and applying on-hit effects, as well as revealing them for 0.528 seconds from the start of the cast time. The damage based on the target's health ratio is capped against monsters.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "50 / 80 / 110 / 140 / 170"
                },
                {
                  "unit": "% (+ 3% per 100 AP) of target's missing health",
                  "values": "8"
                }
              ]
            },
            {
              "attribute": "Capped Monster Damage",
              "modifiers": [
                {
                  "values": "75 / 100 / 125 / 150 / 175"
                }
              ]
            }
          ]
        },
        {
          "description": "If there are active Spiderlings or Volatile Spiderlings nearby, they will dash alongside Elise to the target upon Venomous Bite's cast and reprioritize them."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Elise/ability-icon/q",
      "maxCharges": -1,
      "notes": "Elise will not dash if the target is within basic attack range.\nThis ability is disabled while  grounded or  rooted even if Elise is in the range in which she does not dash.\nIf Elise is allowed to dash, Venomous Bite can be used to cross sufficiently thin terrain.\n Spiderlings can cross walls and terrain to reach Venomous Bite's target and will attack provided Elise stays within their leash range.\nThere is a maximum range in which Spiderlings or Volatile Spiderlings can dash to the target.\n Spiderlings will dash even if they are  crowd controlled.\nVenomous Bite will always apply its effects after the cast time, even if the dash is interrupted.\nVenomous Bite's  reveal is a small area around the target, making it possible for them to exit the reveal radius and lose vision.\nVenomous Bite will still deal its damage but not apply on-hit effects if it is  blocked or  dodged. It cannot be missed while Elise is  blinded.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).\nWith the exceptions of Elise's Death Blossom, Victorious, Blood Moon, and Super Galaxy skins; Venomous Bite's VFX size will scale uncapped based off the total damage it does. (note)",
      "speed": "1150",
      "spellEffects": "spell",
      "spellshieldable": "True",
      "targeting": "Unit",
      "targetRange": "475"
    },
    {
      "key": "W",
      "name": "Volatile Spiderling",
      "affects": "Enemies",
      "blurb": "Active:  Elise sends a Volatile Spiderling to the target location that chases down nearby enemies and explodes upon coming into contact with one or when it expires, dealing magic damage to nearby enemies.",
      "castTime": "0.125",
      "collisionRadius": "150",
      "cooldown": "12",
      "cost": "60 / 70 / 80 / 90 / 100",
      "damageType": "Magic damage",
      "effectRadius": "275",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Elise summons an untargetable venom-gorged spider that lasts for 3 seconds. The spider searches for nearby targets and crawls to them after a delay of 0.75 seconds and otherwise crawls to the target location before doing so without incurring a delay, navigating its path upon encountering terrain.</p>"
        },
        {
          "description": "The spider gains bonus movement speed based on its proximity to the detected target. When the spider comes into contact with an enemy, or upon expiring otherwise, it instantly explodes to deal magic damage to nearby enemies.",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "60 / 100 / 140 / 180 / 220"
                },
                {
                  "unit": "% AP",
                  "values": "75"
                }
              ]
            }
          ]
        },
        {
          "description": "The spider prioritizes the nearest enemy if it detects one before reaching the target location, and champions always if it detects one after doing so."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Elise/ability-icon/w",
      "maxCharges": -1,
      "notes": "If Volatile Spiderling dashes to a target due to  Venomous Bite, it will not expire before finishing its jump.\nIt can still collide with enemies while dashing, but since this proximity check is repeated only every so often, it might phase through an enemy on its way without detecting the collision if dashing quickly enough.\nThe spiderling checks for nearby targets every 0.264 seconds, both for potential enemies to chase down and to explode 'on-contact'. Because of this, it may walk closer to an enemy than its \"collision radius\" before exploding.",
      "resource": "Mana",
      "spellEffects": "spellaoe",
      "spellshieldable": "True",
      "targeting": "Location",
      "targetRange": "950"
    },
    {
      "key": "W",
      "name": "Skittering Frenzy",
      "affects": "Spiderlings, Self",
      "blurb": "Passive:  Elise's Spiderlings gain permanent  bonus attack speed.",
      "castTime": "none",
      "cooldown": "12",
      "cost": "60 / 70 / 80 / 90 / 100",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Elise's Spiderlings gain bonus attack speed.</p>",
          "leveling": [
            {
              "attribute": "Spiderling Bonus Attack Speed",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "5 / 10 / 15 / 20 / 25"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Elise and her Spiderlings gain bonus attack speed for 3 seconds.</p>",
          "leveling": [
            {
              "attribute": "Bonus Attack Speed",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "60 / 75 / 90 / 105 / 120"
                }
              ]
            }
          ]
        },
        {
          "description": "Skittering Frenzy resets Elise's basic attack timer. Elise loses Skittering Frenzy immediately when she switches to Human Form."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Elise/ability-icon/w",
      "maxCharges": -1,
      "notes": "No additional details.",
      "targeting": "Auto"
    },
    {
      "key": "E",
      "name": "Cocoon",
      "width": "110",
      "affects": "Enemies",
      "blurb": "Active:  Elise fires a web in the target direction that  stuns the first enemy hit.",
      "castTime": "0.25",
      "cooldown": "12 / 11.5 / 11 / 10.5 / 10",
      "cost": "50",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Elise fires a web in the target direction, stunning the first enemy hit for a few seconds, during which they are also revealed.</p>",
          "leveling": [
            {
              "attribute": "Stun Duration",
              "modifiers": [
                {
                  "unit": " seconds",
                  "values": "1.6 / 1.8 / 2 / 2.2 / 2.4"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Elise/ability-icon/e",
      "maxCharges": -1,
      "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nCocoon deals no damage and thus does not trigger  turret aggro, or effects such as  Elixir of Sorcery and  Sudden Impact's activation.\nCocoon will activate combat status despite not dealing any damage.",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "1600",
      "spellshieldable": "True",
      "targeting": "Direction",
      "targetRange": "1100"
    },
    {
      "key": "E",
      "name": "Rappel",
      "affects": "Self, Enemies",
      "blurb": "Active:  Elise and her Spiderlings  vanish into the air for a short time.\nRappel can be recast on a target enemy within the duration, and does so automatically after the duration without a target.",
      "castTime": "none",
      "cooldown": "12 / 11.5 / 11 / 10.5 / 10",
      "cost": "50",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Elise and her Spiderlings lift up into the air over 0.6 seconds, immediately becoming untargetable and unable to act, and afterwards vanishing for up to 1.95 seconds and granting sight of the surrounding 900 units for the duration.</p>"
        },
        {
          "description": "Rappel can be recast instantly on a target enemy within the duration, or without a target after a delay for the duration, and does the latter automatically after the duration."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Elise and her Spiderlings reappear and descend onto the ground over 0.4 seconds, becoming targetable and able to act again afterwards. Additionally, Spider Queen's bonuses are increased for 5 seconds.</p>",
          "leveling": [
            {
              "attribute": "Spider Effects Increase",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "40 / 55 / 70 / 85 / 100"
                }
              ]
            }
          ]
        },
        {
          "description": "If the recast was used on a target enemy, Elise and her Spiderlings descend behind the target's location. Otherwise, she and her Spiderlings will descend onto their current position without a target."
        },
        {
          "description": "Rappel's recast can be used while affected by cast-inhibiting crowd control."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Elise/ability-icon/e",
      "maxCharges": -1,
      "notes": "When Elise casts Rappel, a circle outlines the area in which a target can be selected to descend upon.\nElise will always attempt to position behind her target at the same offset if she descends within than Rappel's max range (825), provided there is enough space at the other side. If the target is at the edge of the recast's radius, Elise will not appear at the exact offset behind her target but as close to them as possible instead.\nFor example, if the target's edge is barely within range for the recast, she will appear in front of them.\nIf Elise's location-targeted recast is used by issuing a movement command within the respective range of Rappel, she will descend as normal but then move to the location that the movement command was issued; her movement commands will not be interrupted from descending.\nThe delay for recasting without a target after Elise has lifted into the air is inconsistent.(bug)\nThe recast has a 0.33-seconds delay for issued movement commands, and a 0.5-second delay if the recast input itself is used.\nWhile Elise is lifting up into the air, she can buffer Rappel's recast by targeting an enemy with an attack command or the recast input itself in the meantime. She however cannot buffer Rappel's location-targeted recast.\nThe initial cast can also directly target an enemy to buffer the recast.\nElise will lift up into the air 0.05 seconds shorter in this case.\nThe bonuses granted for descending are not lost if Elise switches to Human Form.\nRappel can be cast on any targetable enemy unit ( champions,  minions,  monsters,  wards,  traps, and jungle plants) except structures.\nIf Elise is positioned within the radius of the unit she's using the initial target cast on, Rappel will instead register as a self-cast and not immediately descend. (bug)\nElise can Rappel to  Rift Herald from the other side of the  Baron Nashor's pit as well as to  Dragon by standing near the  Scryer's Bloom spawn locations. This is a result of  sight being granted in a smaller circle than the target range limit for descending and the  Summoner's Rift map having height variations.\nIf Elise enters  resurrection during Rappel, she will descend back down immediately.\nThe following table refers for interactions while Elise is in Rappel:\n\n\nAttacking\n\nDescends onto the attack target.\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDescends onto her current position.\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll summoner spells are disabled\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
      "targeting": "Location / Unit",
      "targetRange": "825 /  900"
    },
    {
      "key": "R",
      "name": "Spider Form / Human Form",
      "affects": "Self",
      "blurb": "Passive:  Spider Queen's effects are increased.",
      "castTime": "none",
      "cooldown": "3",
      "cost": "0",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Spider Queen's bonuses are increased.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Toggle:</span> Elise switches between her Human Form and Spider Form.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Spider Form:</span> Elise transforms into a spider, gaining 25 bonus movement speed, melee basic attacks with 125 range, and access to her arachnid abilities. Additionally, she summons all stored Spiderlings and heals them to full health.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Human Form:</span> Elise transforms into a human, gaining ranged basic attacks, and access to her human abilities. Additionally, she stores all active Spiderlings.</p>"
        },
        {
          "description": "Elise begins with one rank in Spider Form / Human Form and can increase it at levels 6, 11, and 16."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Elise/ability-icon/r",
      "maxCharges": -1,
      "notes": "Transformations do not count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nIf Spider Form is cast during a basic attack windup, Elise will perform a Spider Form basic attack that benefits from the bonus damage and healing from  Spider Queen, but remain at Human Form basic attack range, despite not using a projectile. This basic attack is considered a melee attack and thus will not trigger  Runaan's Hurricane's Wind's Fury bolts.\nSpider Form and Human Form have separate cooldowns.",
      "targeting": "Auto"
    }
  ],
  "adaptiveType": "Magic damage",
  "attackType": "Ranged",
  "attributeRatings": {
    "damage": 2,
    "toughness": 2,
    "control": 2,
    "mobility": 2,
    "utility": 1,
    "abilityReliance": 65,
    "difficulty": 2
  },
  "faction": "shadow-isles",
  "fullName": "Elise Kythera Zaavan",
  "lore": "Elise is a deadly predator who dwells in a shuttered, lightless palace, deep within the oldest city of Noxus. Once mortal, she was the mistress of a powerful house, but the bite of a vile demigod transformed her into something beautiful, yet utterly inhuman—a spider-like creature, drawing unsuspecting prey into her web. To maintain her eternal youth, Elise now prefers to feed upon the naive and the faithless, and there are few who can resist her seductions.",
  "patchLastChanged": "25.14",
  "positions": [
    "Jungle"
  ],
  "price": {
    "blueEssence": 2400,
    "rp": 880
  },
  "releaseDate": "2012-10-26",
  "resource": "Mana",
  "roles": [
    "Assassin",
    "Diver",
    "Mage"
  ],
  "stats": {
    "health": {
      "flat": 620,
      "perLevel": 109
    },
    "healthRegen": {
      "flat": 5.5,
      "perLevel": 0.6
    },
    "mana": {
      "flat": 324,
      "perLevel": 50
    },
    "manaRegen": {
      "flat": 6,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 30,
      "perLevel": 4.5
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 55,
      "perLevel": 3
    },
    "movespeed": {
      "flat": 330
    },
    "acquisitionRadius": {
      "flat": 550
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
      "perLevel": 1.75
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
      "flat": -0.112
    },
    "attackRange": {
      "flat": 550
    }
  }
}
export default champion