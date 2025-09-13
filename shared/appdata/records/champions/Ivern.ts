// Updated Patch 25.17 - 09/12/2025 02:39:56 PM CDT

const champion: Champion = {
  "id": 427,
  "key": "Ivern",
  "name": "Ivern",
  "title": "the Green Father",
  "fullName": "Ivern Bramblefoot",
  "resource": "Mana",
  "attackType": "Ranged",
  "adaptiveType": "Magic damage",
  "stats": {
    "health": {
      "flat": 630,
      "perLevel": 99
    },
    "healthRegen": {
      "flat": 7,
      "perLevel": 0.85
    },
    "mana": {
      "flat": 450,
      "perLevel": 60
    },
    "manaRegen": {
      "flat": 6,
      "perLevel": 0.75
    },
    "armor": {
      "flat": 27,
      "perLevel": 4.7
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 50,
      "perLevel": 3
    },
    "movespeed": {
      "flat": 330
    },
    "acquisitionRadius": {
      "flat": 800
    },
    "selectionRadius": {
      "flat": 140
    },
    "pathingRadius": {
      "flat": 40
    },
    "gameplayRadius": {
      "flat": 70
    },
    "criticalStrikeDamage": {
      "flat": 175
    },
    "criticalStrikeDamageModifier": {
      "flat": 1
    },
    "attackSpeed": {
      "flat": 0.644,
      "perLevel": 3.4
    },
    "attackSpeedRatio": {
      "flat": 0.644
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
      "flat": 475
    }
  },
  "positions": [
    "Jungle"
  ],
  "roles": [
    "Catcher",
    "Mage",
    "Support"
  ],
  "attributeRatings": {
    "damage": 1,
    "toughness": 1,
    "control": 3,
    "mobility": 2,
    "utility": 3,
    "abilityReliance": 10,
    "difficulty": 2
  },
  "abilities": [
    {
      "name": "Friend of the Forest",
      "key": "P",
      "icon": "https://cdn.communitydragon.org/latest/champion/Ivern/ability-icon/p",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Ivern cannot attack nor damage non-epic monsters. Instead, targeting a jungle camp initiates a 2.5 second channel that will plant a grove upon the camp. Placing a grove costs 94.5 - 0.14 (based on level) health and 90 - 0.37 (based on level) mana. The channel cannot be cancelled in the first 0.15 seconds and in the last 0.5 seconds.</p>"
        },
        {
          "description": "Ivern cannot place a grove while he is unable to cast abilities."
        },
        {
          "description": "The grove matures over 40 - 1 (based on level) seconds. When fully matured, Ivern can target the camp again to free it after a 0.5-second cast time, clearing the camp and receiving the full gold and full experience bounties. Using Smite on a monster within the grove will instantly free the camp regardless of maturity."
        },
        {
          "description": "If the camp's large monster has already been slain prior to planting a grove, Ivern will free the camp upon completing the channel at no cost. Similarly, the grove will instantly mature if the large monster is slain."
        }
      ],
      "targeting": "Unit",
      "affects": "Monsters",
      "notes": "Freeing the  Krug camp will only grant the  gold and  experience of 1  Ancient Krug, 2  Krugs, and 3  Mini Krugs.\nIvern must be within  275 units of the large monster of the targeted camp to start channeling or collect a grove. The large monsters also must be  visible.\nIf Ivern cannot afford the cost to place a grove, Friend of the Forest is placed on a cooldown equal to the number of seconds it takes for his  health regeneration and/or  mana regeneration to restore him to the amount of health and/or mana needed to afford the cost.\nThe cooldown will update based on Ivern's current health and mana regeneration, as well as his current health and mana.\nFriend of the Forest can be used while Ivern or the camp is in combat and, once the grove is placed,  Smite can be used to instantly claim the camp.  Interrupting Ivern's channel is the only way to contest jungle camps, short of killing the camp during the channel time.\nFreeing a grove causes the monsters within the camp to be dealt 5000 true damage in the  internalraw damage source type by Ivern, despite his inability to damage them.\nFriend of the Forest will leave Ivern at 1 health if cast with exactly the required amount. Friend of the Forest cannot be cast with less, unlike other abilities with health costs.\nThe following table refers for interactions while Ivern is  channeling:\nIvern is unable to act during the first 0.15 and last 0.5 seconds of the channel.\nNon-epic monsters can attack Ivern if his allies enter combat with the monster and he manages to recieve aggro.(bug)\nIvern can be attacked by  Voidmites without being able to damage them back.(note)\n\n\nType\n\nChannel\n\n\nAttacking\n\nInterrupts\n\n\nAbilities\n\nInterrupts\n\n\nMovement\n\nInterrupts\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nDamaging effectsDeath Cast-inhibiting effects"
    },
    {
      "name": "Rootcaller",
      "key": "Q",
      "icon": "https://cdn.communitydragon.org/latest/champion/Ivern/ability-icon/q",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ivern throws a vine in the target direction, dealing magic damage to the first enemy hit and rooting them for a duration, during which they are also revealed. Rootcaller can be recast while the target is rooted.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                "80 / 125 / 170 / 215 / 260",
                "70% AP"
              ]
            },
            {
              "attribute": "Root Duration",
              "modifiers": [
                "1.6 / 1.7 / 1.8 / 1.9 / 2 seconds"
              ]
            }
          ]
        },
        {
          "description": "Ivern and allied champions can select the target rooted by Rootcaller to dash to their location, stopping at their attack range."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Ivern dashes to the rooted target.</p>"
        },
        {
          "description": "Hitting a non-epic monster reduces Rootcaller's cooldown by 50%."
        }
      ],
      "cost": "60",
      "cooldown": "14 / 13 / 12 / 11 / 10",
      "targeting": "Direction / Auto",
      "affects": "Enemies",
      "spellshieldable": "True",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "Single target",
      "projectile": "TRUE",
      "notes": "This ability will cast from wherever the caster is at the start of the cast time.\n Daisy dashes to rooted  monsters, and enemy champions if within 1200 units when Rootcaller hits.\nShe does not dash to enemy minions.(note)\n Daisy can not dash if she's more than 1200 units from the target hit. She will not dash even if she later walks in range.(bug)\nRegardless of  Daisy's and Ivern's distance from the target hit, Ivern dashing does not affect  Daisy in any way.(bug)\nRootcaller will hit  monsters but does not deal damage to it unless the target is an epic monster.\nIvern's pull/attack range is determined when he dashes to the target - not from when he initially casts Rootcaller and throws the vine.\nIvern can rightclick on the target hit to dash to it, stopping at his attack range.\nRightclicking while closer than attack range to the target makes Ivern dash to 425 units away from it.\nThis interacts like expected with attack range increases, increasing the dash distance away from the target 1:1.\nIvern will never dash closer than his current distance from the target when rightclicking within attack range.\nRecasting dashes Ivern to on top of the enemy instead of at attack range.\nIvern and his allies are not able to dash to the target unless they are within 1200 units.\nRootcaller cannot be used to  dash while  grounded or  rooted. This applies to Ivern and his allies.\nRootcaller's dash does not follow targets, their position at the time of starting the dash is the location Ivern and his allies will stop from.",
      "blurb": "Active:  Ivern throws a vine in the target direction that deals magic damage and  roots the first enemy hit.",
      "speed": "1300",
      "width": "160",
      "castTime": "0.25",
      "targetRange": "1150 /  0 /  475 /  Attack range",
      "maxCharges": -1
    },
    {
      "name": "Brushmaker",
      "key": "W",
      "icon": "https://cdn.communitydragon.org/latest/champion/Ivern/ability-icon/w",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> While Ivern is in brush, his basic attacks are empowered to deal bonus magic damage on-hit. This bonus persists for 3 seconds after leaving brush.</p>",
          "leveling": [
            {
              "attribute": "Bonus Magic Damage",
              "modifiers": [
                "20 / 27.5 / 35 / 42.5 / 50",
                "20% AP"
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ivern grows a patch of brush at the target location for 45 seconds, granting sight of the area within and around it for 8 seconds. Brushes despawn instantly after allied vision of them is lost. Spawning brush near terrain or other brush increases its radius.</p>"
        },
        {
          "description": "While allied champions are in any brush when Ivern is within 1000 units, their basic attacks are empowered to deal bonus magic damage on-hit. This bonus persists for 1.5 seconds after leaving brush.",
          "leveling": [
            {
              "attribute": "Ally Bonus Magic Damage",
              "modifiers": [
                "10 / 15 / 20 / 25 / 30",
                "10% of Ivern's AP"
              ]
            }
          ]
        },
        {
          "description": "Ivern periodically stocks a Brushmaker charge, up to a maximum of 3."
        }
      ],
      "cost": "30",
      "cooldown": "0.5",
      "targeting": "Location",
      "affects": "Self, Allies",
      "spellshieldable": "False",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "spell",
      "notes": "A  brush will be immediately  exposed if grown within the  sight of an enemy  turret.\nThe bonus damage does not apply to structures.\nThe bonus damage won't trigger through  block,  dodge, or  blinding effects.\nThe empowerment given to allies respects  enchantment redirection.\nEpic monsters can not be concealed within, or behind a  brush.\nBoth  Voidgrubs and  Atakhan can be concealed within, and behind a  brush(bug).\n Brushmaker locks on allies when hovered.\nPENDING FOR TEST:: Actual range of ability. Indicator does not match cast range.",
      "blurb": "Passive: While  Ivern is in  brush, his basic attacks deal bonus magic damage.",
      "rechargeRate": "20 / 20 / 20 / 20 / 20",
      "castTime": "0.25",
      "targetRange": "1000",
      "maxCharges": 3
    },
    {
      "name": "Triggerseed",
      "key": "E",
      "icon": "https://cdn.communitydragon.org/latest/champion/Ivern/ability-icon/e",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ivern places a seed on the target allied champion, Daisy, or himself, granting the target a shield for 2 seconds.</p>",
          "leveling": [
            {
              "attribute": "Shield Strength",
              "modifiers": [
                "75 / 115 / 155 / 195 / 235",
                "50% AP"
              ]
            }
          ]
        },
        {
          "description": "After 2 seconds, the seed explodes to deal magic damage to nearby enemies and slow them for 2 seconds.",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                "70 / 90 / 110 / 130 / 150",
                "80% AP"
              ]
            },
            {
              "attribute": "Slow",
              "modifiers": [
                "40 / 45 / 50 / 55 / 60%"
              ]
            }
          ]
        },
        {
          "description": "If the seed does not damage an enemy champion and the shield persists by the end of the duration, the shield is reapplied for the same strength and duration without the explosion effect."
        }
      ],
      "cost": "70",
      "cooldown": "11 / 10 / 9 / 8 / 7",
      "targeting": "Unit",
      "affects": "Allies, Self, Enemies",
      "spellshieldable": "True",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "spellaoe",
      "notes": "The explosion occurs regardless of whether the shield is maintained.\nThe damage of Triggerseed is attributed to the champion the shield was cast on.\nIf cast on  Daisy, the damage is attributed to Ivern.\nThe  slow debuff is always attributed to Ivern.\nTherefore, placing Triggerseed on allied champions:\ngrants them credit for all kills on enemy units that it causes.\ntriggers turret aggro on them if it deals damage to an enemy champion.\ntriggers their spell effects instead of Ivern's.\nbenefits from their  magic penetration stat.\nIvern's player can appreciate the damage Triggerseed from an ally deals via a yellow damage number intended to reflect the damage dealt.\nThis yellow damage number uses Ivern's  magic penetration stat to calculate the expected damage dealt, instead of reflecting the actual damage dealt.(bug)",
      "blurb": "Active:  Ivern can target an ally champion,  Daisy, or himself to  shield them for a short time.",
      "castTime": "none",
      "effectRadius": "500",
      "targetRange": "750",
      "maxCharges": -1
    },
    {
      "name": "Daisy!",
      "key": "R",
      "icon": "https://cdn.communitydragon.org/latest/champion/Ivern/ability-icon/r",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ivern summons his sentinel friend Daisy to his side, who lands 350 units away from him in the target direction and remains on the field for up to 45 seconds as a controllable pet.</p>"
        },
        {
          "description": "Daisy! can be recast at any time while Daisy is alive."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast - Daisy, wait!:</span> Ivern commands Daisy to move to the target location. If cast on Ivern, Daisy will follow him.</p>"
        },
        {
          "description": "The recast of Daisy! can be used while affected by cast-inhibiting crowd control. See Pets for more details about Daisy."
        }
      ],
      "cost": "100",
      "cooldown": "140 / 130 / 120",
      "targeting": "Direction / Location",
      "affects": "None",
      "resource": "Mana",
      "damageType": "Physical damage",
      "spellEffects": "spellaoe",
      "notes": "Daisy, when the ability is initially cast, is  untargetable until she lands.",
      "blurb": "Active:  Ivern summons his Sentinel friend  Daisy to fight with him.",
      "castTime": "0.5",
      "maxCharges": -1
    }
  ],
  "lore": "Ivern Bramblefoot, known to many as the Green Father, is a peculiar half man, half tree who roams Runeterra's forests, cultivating life everywhere he goes. He knows the secrets of the natural world, and holds deep friendships with all things that grow, fly, and scuttle. Ivern wanders the wilderness, imparting strange wisdom to any he meets, enriching the forests, and occasionally entrusting loose-lipped butterflies with his secrets.",
  "faction": "ionia",
  "releaseDate": "2016-10-05",
  "patchLastChanged": "25.12",
  "price": {
    "blueEssence": 2400,
    "rp": 880
  }
}
export default champion