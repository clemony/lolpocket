// Updated Patch 25.17 - 09/12/2025 02:39:56 PM CDT

const champion: Champion = {
  "id": 57,
  "key": "Maokai",
  "name": "Maokai",
  "title": "the Twisted Treant",
  "resource": "Mana",
  "attackType": "Melee",
  "adaptiveType": "Magic damage",
  "stats": {
    "health": {
      "flat": 665,
      "perLevel": 109
    },
    "healthRegen": {
      "flat": 5,
      "perLevel": 0.75
    },
    "mana": {
      "flat": 375,
      "perLevel": 43
    },
    "manaRegen": {
      "flat": 6,
      "perLevel": 0.6
    },
    "armor": {
      "flat": 35,
      "perLevel": 5.2
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 64,
      "perLevel": 3.3
    },
    "movespeed": {
      "flat": 335
    },
    "acquisitionRadius": {
      "flat": 600
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
      "flat": 0.8,
      "perLevel": 2.125
    },
    "attackSpeedRatio": {
      "flat": 0.695
    },
    "attackCastTime": {
      "flat": 0.3
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackRange": {
      "flat": 125
    }
  },
  "positions": [
    "Jungle",
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
    "mobility": 1,
    "utility": 2,
    "abilityReliance": 75,
    "difficulty": 1
  },
  "abilities": [
    {
      "name": "Sap Magic",
      "key": "P",
      "icon": "https://cdn.communitydragon.org/latest/champion/Maokai/ability-icon/p",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Periodically, Maokai empowers his next basic attack to have an uncancellable windup and heal him for 4% - 12.8% (based on level) maximum health after a 0.25-second delay.</p>"
        },
        {
          "description": "Each time Maokai casts an ability, hits at least one enemy champion or epic monster with Sapling Toss, or is struck by an enemy's ability, Sap Magic's cooldown is reduced by 4 seconds, modified to 1.5 if he is hit by a large monster's basic attack or ability."
        },
        {
          "description": "Sap Magic resets Maokai's basic attack timer, and will not trigger if he is above 95% maximum health."
        }
      ],
      "targeting": "Passive",
      "affects": "Self",
      "notes": "Sap Magic does not occur if the attack is  dodged and/or missed if Maokai is  blinded. It will occur if it is  blocked.\nThe striking ability has to trigger spell effects such as  spell damage or  area damage for the cooldown to be reduced.\nIf Maokai possesses a  spell shield and it consumes an enemy ability, he will still receive the cooldown reduction.\nThe empowered attack will not trigger against structures nor wards.",
      "blurb": "Innate: Periodically,  Maokai's next basic attack will  heal him for a portion of his maximum health."
    },
    {
      "name": "Bramble Smash",
      "key": "Q",
      "icon": "https://cdn.communitydragon.org/latest/champion/Maokai/ability-icon/q",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Maokai sends a shockwave in the target direction that deals magic damage to enemies hit and slows them by 99% for 0.25 seconds. Bramble Smash deals bonus magic damage to monsters.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                "65 / 110 / 155 / 200 / 245",
                "2 / 2.5 / 3 / 3.5 / 4% of the target's maximum health",
                "40% AP"
              ]
            },
            {
              "attribute": "Bonus Monster Damage",
              "modifiers": [
                "120 / 130 / 140 / 150 / 160"
              ]
            },
            {
              "attribute": "Total Monster Damage",
              "modifiers": [
                "185 / 240 / 295 / 350 / 405",
                "2 / 2.5 / 3 / 3.5 / 4% of the target's maximum health",
                "40% AP"
              ]
            }
          ]
        },
        {
          "description": "Enemies near Maokai are also stunned for 0.5 seconds and knocked back up to 300 units based on their proximity to him."
        }
      ],
      "cost": "40",
      "cooldown": "7 / 6.5 / 6 / 5.5 / 5",
      "targeting": "Direction",
      "affects": "Enemies",
      "spellshieldable": "True",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "Area of effect",
      "projectile": "TRUE",
      "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nBramble Smash's damage based on the target's health ratio is capped at 9999 against non-champions.\n Displacement immunity will also resist the application of the  stun.",
      "blurb": "Active:  Maokai sends a shockwave in the target direction that deals magic damage and briefly  slows enemies hit.",
      "speed": "1600",
      "castTime": "0.3",
      "effectRadius": "325",
      "targetRange": "600",
      "maxCharges": -1
    },
    {
      "name": "Twisted Advance",
      "key": "W",
      "icon": "https://cdn.communitydragon.org/latest/champion/Maokai/ability-icon/w",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Maokai dashes to the target enemy while being untargetable. Upon arrival, he deals magic damage and roots them for a duration.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                "60 / 85 / 110 / 135 / 160",
                "40% AP"
              ]
            },
            {
              "attribute": "Root Duration",
              "modifiers": [
                "1 / 1.1 / 1.2 / 1.3 / 1.4 seconds"
              ]
            }
          ]
        }
      ],
      "cost": "60",
      "cooldown": "14 / 13 / 12 / 11 / 10",
      "targeting": "Unit",
      "affects": "Enemies",
      "spellshieldable": "True",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "spell",
      "notes": "Maokai will track the target if they change locations.\nHe will dash to the target's previous location without applying Twisted Advance's effects if the target is too far away or moves beyond 2000 units.\nHe will stop dashing if the target is too far away the moment the dash begins.\nTwisted Advance will fail to deal damage and apply the  root if the target is  untargetable upon arrival.",
      "blurb": "Active:  Maokai  dashes to the target enemy while being  untargetable, dealing magic damage and briefly  rooting them upon arrival.",
      "speed": "1300",
      "castTime": "none",
      "targetRange": "525",
      "maxCharges": -1
    },
    {
      "name": "Sapling Toss",
      "key": "E",
      "icon": "https://cdn.communitydragon.org/latest/champion/Maokai/ability-icon/e",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Maokai flings a Sapling to the target location, granting sight of the area.</p>"
        },
        {
          "description": "Once landed, a Sapling remains stationary for 30 seconds or until it reacts to the first nearby visible enemy, chasing them for up to 2.5 seconds. The Sapling explodes upon colliding with an enemy or when it expires, dealing magic damage to nearby enemies, capped at 300 against non-champions, and slowing them by 45% for 2 seconds.",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                "50 / 75 / 100 / 125 / 150",
                "5% bonus health",
                "25% AP"
              ]
            }
          ]
        },
        {
          "description": "A Sapling placed in brush instead lasts 30 (+ 1.5% bonus health) seconds, deals double damage to struck non- minion targets over 3 bursts, and slows them by 45% (+ 1% per 100 bonus health) (+ 1% per 100 AP), as well as reveals them for 3 seconds. The first instance of damage is dealt instantly and the second and third instances occur each 0.75 seconds thereafter. The total damage is capped at 600 against non-champions.",
          "leveling": [
            {
              "attribute": "Total Enhanced Damage",
              "modifiers": [
                "100 / 150 / 200 / 250 / 300",
                "10% bonus health",
                "50% AP"
              ]
            },
            {
              "attribute": "Enhanced Damage Per Tick",
              "modifiers": [
                "33.33 / 50 / 66.67 / 83.33 / 100",
                "3.33% bonus health",
                "16.67% AP"
              ]
            }
          ]
        },
        {
          "description": "See Pets for more details about Saplings."
        }
      ],
      "cost": "60 / 65 / 70 / 75 / 80",
      "cooldown": "18 / 17 / 16 / 15 / 14",
      "targeting": "Location",
      "affects": "Enemies",
      "spellshieldable": "true",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "special",
      "projectile": "TRUE",
      "notes": "Applies  area damage from a normal Sapling and deals  persistent damage to enemies hit by an empowered Sapling.\nSapling Toss grants  sight of the target location even while the Sapling is in flight.\nThe Saplings will continue to chase their target even if they lose  sight of them (but they do not prioritize champions so they will chase the first target they encounter).\nSaplings will appear on the map as minions despite being untargetable and invulnerable.\nSaplings cannot stack on top of each other (they will move a short distance away from one another if they are aimed at the same location).\nThe damage of empowered Saplings is equally split into chunks of 66.7% of the normal Sapling damage every second, once immediately, and then at the 1 and 2 second mark.\nThe Sapling will stop its movement upon colliding with  Unbreakable.\nSaplings attack  Baron Nashor always at the same two points, no matter where they were placed.",
      "blurb": "Active:  Maokai flings a Sapling to the target location, where it remains for some time. A Sapling will chase nearby enemies for a short time, expiring afterward or upon contact.",
      "tetherRadius": "250",
      "castTime": "0.25",
      "effectRadius": "175 / 350 / 475",
      "targetRange": "1100",
      "maxCharges": -1
    },
    {
      "name": "Nature's Grasp",
      "key": "R",
      "icon": "https://cdn.communitydragon.org/latest/champion/Maokai/ability-icon/r",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Maokai summons a colossal wall of five thorny brambles that slowly advances in the target direction, accelerating over time, each stopping when they collide with an enemy champion. Hitting at least one enemy champion grants Maokai bonus movement speed decaying over 2 seconds.</p>",
          "leveling": [
            {
              "attribute": "Bonus Movement Speed",
              "modifiers": [
                "40 / 50 / 60%"
              ]
            }
          ]
        },
        {
          "description": "Each bramble deals magic damage to enemies hit and roots them for 0.75 - 2.25 (based on distance traveled) seconds.",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                "150 / 225 / 300",
                "75% AP"
              ]
            }
          ]
        }
      ],
      "cost": "100",
      "cooldown": "130 / 110 / 90",
      "targeting": "Direction",
      "affects": "Enemies",
      "spellshieldable": "True",
      "resource": "Mana",
      "damageType": "Magic damage",
      "spellEffects": "Area of effect",
      "projectile": "TRUE",
      "notes": "The brambles are made up of 4  missiles each which trail 100 units behind one another. The front missile carries the visual effect. When colliding with a champion, all missiles of one bramble are destroyed simultaneously.\nMissiles destroyed by other means such as  Samira's  Blade Whirl may not destroy their fellows from the same branch, resulting in one or more invisible missiles that may still collide.(bug)\nThis ability will cast from wherever the caster is at the start of the cast time.",
      "blurb": "Active:  Maokai summons a colossal wall of five thorny brambles that slowly advances in the target direction, each stopping when they collide with an enemy  champion.",
      "speed": "100 / 400 / 700 / 750 (based on seconds active)",
      "width": "240",
      "castTime": "0.5",
      "targetRange": "3000",
      "maxCharges": -1
    }
  ],
  "lore": "Maokai is a rageful, towering treant who fights the unnatural horrors of the Shadow Isles. He was twisted into a force of vengeance after a magical cataclysm destroyed his home, surviving undeath only through the Waters of Life infused within his heartwood. Once a peaceful nature spirit, Maokai now furiously battles to banish the scourge of unlife from the Shadow Isles and restore his home to its former beauty.",
  "faction": "shadow-isles",
  "releaseDate": "2011-02-16",
  "patchLastChanged": "14.22",
  "price": {
    "blueEssence": 2400,
    "rp": 880
  }
}
export default champion