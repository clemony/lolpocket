// Updated Patch 25.17 - 09/12/2025 02:39:56 PM CDT

const champion: Champion = {
  "id": 55,
  "key": "Katarina",
  "name": "Katarina",
  "title": "the Sinister Blade",
  "fullName": "Katarina Du Couteau",
  "resource": "None",
  "attackType": "Melee",
  "adaptiveType": "Magic damage",
  "stats": {
    "health": {
      "flat": 672,
      "perLevel": 108
    },
    "healthRegen": {
      "flat": 7.5,
      "perLevel": 0.7
    },
    "armor": {
      "flat": 28,
      "perLevel": 4.7
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 58,
      "perLevel": 3.2
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
      "flat": 0.658,
      "perLevel": 2.74
    },
    "attackSpeedRatio": {
      "flat": 0.658
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
      "flat": 125
    }
  },
  "positions": [
    "Middle"
  ],
  "roles": [
    "Assassin",
    "Mage"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 1,
    "mobility": 3,
    "utility": 1,
    "abilityReliance": 100,
    "difficulty": 2
  },
  "abilities": [
    {
      "name": "Voracity",
      "key": "P",
      "icon": "https://cdn.communitydragon.org/latest/champion/Katarina/ability-icon/p",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Scoring a champion takedown within 3 seconds of damaging them will reduce the current cooldowns of Katarina's abilities by 15 seconds.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Sinister Steel:</span> Whenever Katarina retrieves a Dagger, she slashes around herself to deal 68 - 240 (based on level) (+ 60% bonus AD) (+ 70% / 80% / 90% / 100% (based on level) AP) magic damage to nearby enemies, apply on-hit effects to enemy champions hit, and reduce Shunpo's current cooldown by 78% / 84% / 90% / 96% (based on level) of its total cooldown.</p>"
        },
        {
          "description": "Daggers grant sight of their radius and will disappear after being on the ground for 4 seconds."
        }
      ],
      "targeting": "Passive",
      "affects": "Enemies, Self",
      "spellshieldable": "True",
      "damageType": "Magic damage",
      "spellEffects": "Area of effect",
      "notes": "Voracity's cooldown reduction will still take effect even after Katarina dies.\nThe Dagger's area of effect indicator is displayed even before it lands, although Katarina may not slash until it has. This can be targeted by  Shunpo.\nDaggers will still deal damage but not apply on-hit effects if  dodged. They cannot be  blocked nor can they be missed while Katarina is  blinded.\nSingle-use on-hit effects, such as  Spellblade, will apply to the closest target to Katarina when she uses a Dagger.",
      "blurb": "Innate: Scoring a champion  takedown within a short time of damaging them  reduces the current cooldowns of  Katarina's abilities.",
      "effectRadius": "340"
    },
    {
      "name": "Bouncing Blade",
      "key": "Q",
      "icon": "https://cdn.communitydragon.org/latest/champion/Katarina/ability-icon/q",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Katarina throws a Dagger at the target enemy that deals magic damage and can bounce to up to two additional visible nearby enemies.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                "80 / 115 / 150 / 185 / 220",
                "40% AP"
              ]
            }
          ]
        },
        {
          "description": "The Dagger lands 1.023 seconds after striking the first target, about 350 units opposite from their position when it struck them."
        }
      ],
      "cost": "0",
      "cooldown": "11 / 10 / 9 / 8 / 7",
      "targeting": "Unit",
      "affects": "Enemies",
      "spellshieldable": "True",
      "damageType": "Magic damage",
      "spellEffects": "spellaoe",
      "projectile": "TRUE",
      "notes": "Bouncing Blade will not be destroyed in-flight if the target dies before reaching them but it will on  clones that expire.\nIf the Dagger's intended landing position is inside terrain it will instead land at the closest spot that isn't inside terrain.\nValid targets are determined after each bounce.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
      "blurb": "Active:  Katarina throws a Dagger at the target enemy that can bounce to up to two additional nearby enemies, dealing magic damage.",
      "speed": "1600 / Travel distance ÷ 0.15 seconds",
      "castTime": "0.25",
      "effectRadius": "450",
      "targetRange": "625",
      "maxCharges": -1
    },
    {
      "name": "Preparation",
      "key": "W",
      "icon": "https://cdn.communitydragon.org/latest/champion/Katarina/ability-icon/w",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Katarina tosses a Dagger into the air above her current location and gains bonus movement speed that decays until it lands after 1.25 seconds, becoming ghosted for the same duration.</p>",
          "leveling": [
            {
              "attribute": "Bonus Movement speed",
              "modifiers": [
                "50 / 60 / 70 / 80 / 90%"
              ]
            }
          ]
        }
      ],
      "cost": "0",
      "cooldown": "15 / 14 / 13 / 12 / 11",
      "targeting": "Auto",
      "affects": "Self",
      "notes": "No additional details.",
      "blurb": "Active:  Katarina briefly gains  ghosting and a burst of  movement speed, tossing a Dagger into the air directly above herself.",
      "castTime": "none",
      "maxCharges": -1
    },
    {
      "name": "Shunpo",
      "key": "E",
      "icon": "https://cdn.communitydragon.org/latest/champion/Katarina/ability-icon/e",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Katarina blinks to a target location near the unit or Dagger closest to the cursor, dealing magic damage to the nearest enemy in range and applying on-hit effects.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                "20 / 30 / 40 / 50 / 60",
                "40% AD",
                "25% AP"
              ]
            }
          ]
        },
        {
          "description": "Katarina prioritizes blinking to the location near Daggers, then enemy champions, then enemy non-champions, and then any other unit."
        },
        {
          "description": "Shunpo resets Katarina's basic attack timer. Upon blinking, Katarina enters a 0.15-second cast time."
        }
      ],
      "cost": "0",
      "cooldown": "12 / 11 / 10 / 9 / 8",
      "targeting": "Location",
      "affects": "Enemies",
      "spellshieldable": "True",
      "damageType": "Magic damage",
      "spellEffects": "Single target",
      "notes": "Shunpo does not reset Katarina's basic attack timer if it killed the target.(note)\nShunpo can be used on any unit except structures and  wards.\nShunpo can be cast on Daggers that haven't landed yet.\nShunpo prioritizes damaging enemy champions within range at the targeted location.\nAfter the cast time, Katarina will attempt to move towards the closest enemy in  acquisition range and basic attack them, prioritizing champions, unless an attack command was already active on another target in range or any attack command was applied during the cast time. Movement commands applied during cast time will override the automatic attack, but they may not override an already active manually applied attack command. If no enemy is in range, pre-cast commands will remain active, and attack commands applied during the cast time will be ignored (note).\nIf a Dagger is picked during the cast time, pre-cast commands will be cancelled, even if no enemy is nearby. And if an enemy is nearby, Katarina may or may not start an automatic attack (note).\nIf the target is very close to a wall and Katarina targets Shunpo behind the target, she can blink over the wall.\nShunpo will still deal damage but not apply on-hit effects if  dodged. It cannot be  blocked nor can it be missed while Katarina is  blinded.\nShunpo does not require the enemy to be within targeting range to damage them. It only requires them to be within the max range around a unit that Shunpo allows them to blink to.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
      "castTime": "None",
      "targetRange": "725 / 775",
      "maxCharges": -1
    },
    {
      "name": "Death Lotus",
      "key": "R",
      "icon": "https://cdn.communitydragon.org/latest/champion/Katarina/ability-icon/r",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Katarina channels for up to 2.5 seconds, rapidly throwing a dagger every 0.166 seconds to up to 3 of the closest nearby enemy champions, revealing herself in the process.Each dagger deals physical damage and magic damage, applies on-hit effects, with on-hit damage reduced in effectiveness, triggers on-attack effects, and inflicts Grievous Wounds on the target for 3 seconds.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage Per Dagger",
              "modifiers": [
                "16%  bonus AD",
                "50% per 100% bonus attack speed"
              ]
            },
            {
              "attribute": "Maximum Physical Damage",
              "modifiers": [
                "240%  bonus AD",
                "750% per 100% bonus attack speed"
              ]
            },
            {
              "attribute": "Magic Damage Per Dagger",
              "modifiers": [
                "25 / 37.5 / 50",
                "19% AP"
              ]
            },
            {
              "attribute": "Maximum Magic Damage",
              "modifiers": [
                "375 / 562.5 / 750",
                "285% AP"
              ]
            },
            {
              "attribute": "On-Hit Damage Effectiveness",
              "modifiers": [
                "25 / 30 / 35%"
              ]
            }
          ]
        },
        {
          "description": "An enemy champion within 500 units is required to cast this ability. The target does not have to be visible to be hit by this ability."
        }
      ],
      "cost": "0",
      "cooldown": "75 / 60 / 45",
      "targeting": "Proximity",
      "affects": "Enemies",
      "spellshieldable": "Special",
      "damageType": "Magic damage",
      "spellEffects": "aoe",
      "projectile": "TRUE",
      "notes": "An alternate form of writing the formula for the bonus AD ratio (and which the game data is using internally) is (16% × (1 + 312.5% per 100% bonus attack speed) bonus AD).\nAt level 6, Katarina has a minimum of 10.82% bonus attack speed.\nThe minimum physical damage per dagger is 21.41% bonus AD.\nIn addition to already revealing herself, Katarina will  reveal her location (400 radius) for 4.5 seconds every time she throws a dagger at an enemy while the enemy team does not otherwise have vision of her.(bug)\nBecause of this, the vision on Katarina's location will persist for up-to 4.5 seconds after the channel ends.\nDeath Lotus will not end if no enemies remain in range.\n Spell shield will block and be consumed by only one dagger.\nEach dagger counts as a separate hit for effects such as  Conqueror,  Electrocute, and  Eclipse's Ever Rising Moon.\nThe following table refers for interactions while Katarina is  channeling:\nTrying to cast a disabled active (excluding  Hextech Rocketbelt) will buffer it to cast at the completion of the channel.\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled in the first and last 0.25 seconds of channel, otherwise, interrupts.\n\n\nAbilities\n\nInterrupts\n\n\nMovement\n\nDisabled in the first and last 0.25 seconds of channel, otherwise, interrupts.\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Recall  Hexflash\n\n\nInterrupted by\n\n Flash  Teleport\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
      "speed": "2400",
      "castTime": "none",
      "effectRadius": "550",
      "maxCharges": -1
    }
  ],
  "lore": "Decisive in judgment and lethal in combat, Katarina is a Noxian assassin of the highest caliber. Eldest daughter to the legendary General Du Couteau, she made her talents known with swift kills against unsuspecting enemies. Her fiery ambition has driven her to pursue heavily-guarded targets, even at the risk of endangering her allies—but no matter the mission, Katarina will not hesitate to execute her duty amid a whirlwind of serrated daggers.",
  "faction": "noxus",
  "releaseDate": "2009-09-19",
  "patchLastChanged": "25.13",
  "price": {
    "blueEssence": 1575,
    "rp": 790
  }
}
export default champion