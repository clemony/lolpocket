// Updated Patch 25.19 - 10/07/2025 08:16:12 AM CDT

const champion: Champion = {
  "id": 245,
  "key": "Ekko",
  "name": "Ekko",
  "title": "the Boy Who Shattered Time",
  "abilities": [
    {
      "key": "P",
      "name": "Z-Drive Resonance",
      "affects": "Enemies / Self",
      "blurb": "Innate:  Ekko's  basic attacks  on-hit and damaging  abilities apply  stacks, the third stack deals bonus magic damage. If the target was a  champion, this grants  bonus movement speed to Ekko.",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Resonance:</span> Ekko's basic attacks on-hit and damaging abilities apply a stack of Resonance to enemies hit for 4 seconds, refreshing on subsequent hits and stacking up to 3 times. The third stack consumes them all to deal 30 - 140 (based on level) (+ 90% AP) bonus magic damage. Z-Drive Resonance deals 300% damage against monsters.</p>"
        },
        {
          "description": "Resonance cannot affect the same target more than once every few seconds."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Stolen Time:</span> Triggering Resonance against a champion grants Ekko 50% / 60% / 70% / 80% (based on level) bonus movement speed for 2 / 2.5 / 3 (based on level) seconds.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Ekko/ability-icon/p",
      "notes": "Ekko's basic attacks have different animations based on how many stacks his target has. His attack pattern is as follows:\nDownwards → Upwards → Sideways\nIf the target has already been affected by Resonance, Ekko's basic attack animations will kick or attack the target sideways.\nResonance stacks will not be applied nor consumed if the basic attack is  dodged or  blocked or if the attack  misses.",
      "onTargetCdStatic": "5",
      "spellEffects": "Single target",
      "spellshieldable": "True",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Timewinder",
      "width": "120 / 200",
      "affects": "Enemies",
      "blurb": "Active:  Ekko throws a temporal grenade that deals magic damage to enemies hit. It expands at max range or upon hitting an enemy  champion,  slowing nearby enemies.",
      "castTime": "0.25",
      "cooldown": "9 / 8.5 / 8 / 7.5 / 7",
      "cost": "50 / 60 / 70 / 80 / 90",
      "damageType": "Magic damage",
      "effectRadius": "160 : 210",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ekko throws a temporal grenade in the target direction that deals magic damage to enemies hit.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "80 / 95 / 110 / 125 / 140"
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
          "description": "At 700 units or upon hitting an enemy champion, the grenade slows down for 1.75 seconds to gradually expand into a Temporal Sickness field that slows nearby enemies, travelling for another 190 units.",
          "leveling": [
            {
              "attribute": "Slow",
              "modifiers": [
                {
                  "unit": "%",
                  "values": "40 / 45 / 50 / 55 / 60"
                }
              ]
            }
          ]
        },
        {
          "description": "Afterwards, the grenade contracts and homes back to Ekko at an increased speed, dealing magic damage to enemies hit.",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "40 / 65 / 90 / 115 / 140"
                },
                {
                  "unit": "% AP",
                  "values": "60"
                }
              ]
            },
            {
              "attribute": "Total Magic Damage",
              "modifiers": [
                {
                  "values": "120 / 160 / 200 / 240 / 280"
                },
                {
                  "unit": "% AP",
                  "values": "90"
                }
              ]
            }
          ]
        },
        {
          "description": "Enemies can be hit only once per pass."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Ekko/ability-icon/q",
      "maxCharges": -1,
      "notes": "Spell shield will block only a single instance of damage.\nThis ability will cast from wherever the caster is at the end of the cast time.",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "1650 / 200 / 2300",
      "spellEffects": "spellaoe",
      "spellshieldable": "Special",
      "targeting": "Direction",
      "targetRange": "1100"
    },
    {
      "key": "W",
      "name": "Parallel Convergence",
      "blurb": "Passive:  Ekko's basic attacks deal bonus magic damage against a low-health target, increased based on their missing health.",
      "castTime": "0.25",
      "cooldown": "22 / 20 / 18 / 16 / 14",
      "cost": "30 / 35 / 40 / 45 / 50",
      "effectRadius": "375",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Ekko's basic attacks deal bonus magic damage equal to 3% (+ 3% per 100 AP) of the target's missing health against enemies below 30% of their maximum health. The damage has a minimum threshold of 15 and is capped at 150 against minions and monsters.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ekko creates an afterimage of himself that, after 2 seconds, bats a device to the target location and grants sight of the area for 2.5 seconds. After travelling over 1.25 seconds, the device expands into a chronosphere that is visible for 1.5 seconds and which slows enemies within by 40%.</p>"
        },
        {
          "description": "If Ekko enters the sphere within 2 seconds of its creation, it detonates to grant him a shield for 2 seconds and stun enemies within for 2.25 seconds.",
          "leveling": [
            {
              "attribute": "Shield Strength",
              "modifiers": [
                {
                  "values": "100 / 120 / 140 / 160 / 180"
                },
                {
                  "unit": "% AP",
                  "values": "150"
                }
              ]
            }
          ]
        },
        {
          "description": "Enemies can see the indicator for Parallel Convergence 2 seconds after casting."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Ekko/ability-icon/w",
      "maxCharges": -1,
      "notes": "Applies  proc damage for the passive.\nThe passive will proc with the attack that triggers the final stack of  Resonance if it reduces a target's health below the 30% threshold.\nEkko can detonate the expansion even while  untargetable (i.e.  Chronobreak's dash), but not if he is  resurrecting.\nParallel Convergence will continue to  slow enemies even if its expansion is detonated.",
      "projectile": "FALSE",
      "resource": "Mana",
      "spellshieldable": "True",
      "targeting": "Location",
      "targetRange": "1600"
    },
    {
      "key": "E",
      "name": "Phase Dive",
      "affects": "Self",
      "blurb": "Active:  Ekko  rolls in the target direction, gaining  bonus attack range.",
      "castTime": "none",
      "cooldown": "9 / 8.5 / 8 / 7.5 / 7",
      "cost": "40 / 45 / 50 / 55 / 60",
      "damageType": "Magic damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ekko dashes in the target direction, then empowers his next basic attack within 3 seconds to have a 0.25-second cast time, gain 300 bonus range, cause him to blink within 125 range of the target, and deal bonus magic damage.</p>",
          "leveling": [
            {
              "attribute": "Bonus Magic Damage",
              "modifiers": [
                {
                  "values": "50 / 75 / 100 / 125 / 150"
                },
                {
                  "unit": "% AP",
                  "values": "40"
                }
              ]
            }
          ]
        },
        {
          "description": "Phase Dive resets Ekko's basic attack timer. Ekko can cast any of his abilities during the dash."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Ekko/ability-icon/e",
      "maxCharges": -1,
      "notes": "The  dash distance can be extended to up-to 550 units when targeting across terrain. It will only extend for the distance needed to cross the wall.\nWhile  grounded or  rooted, Ekko loses the  bonus attack range from Phase Dive.\nPhase Drive's attack can  miss and be  blocked and  dodged, consuming the basic attack without dealing any damage.\nIf the target becomes  untargetable,  dies, or is too far away during the empowered attack's cast time, it is cancelled but not consumed.",
      "resource": "Mana",
      "spellEffects": "Spell",
      "spellshieldable": "true",
      "targeting": "Direction",
      "targetRange": "325 / 550"
    },
    {
      "key": "R",
      "name": "Chronobreak",
      "affects": "Enemies / Self",
      "blurb": "Passive:  Ekko reveals a time-delayed afterimage of himself that tracks where he was 4 seconds ago.",
      "castTime": "0.5",
      "cooldown": "110 / 80 / 50",
      "cost": "100",
      "damageType": "Magic damage",
      "effectRadius": "375 / Global",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Upon learning Chronobreak or if its current cooldown is lower than 4 seconds, Ekko reveals a time-delayed afterimage of himself that constantly tracks where he was 4 seconds ago.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ekko enters stasis at the start of the cast time, and afterwards heals himself and dashes to his afterimage's location at the time of cast over 0.5 seconds. Upon arrival, the stasis ends and he creates an explosion that deals magic damage to nearby enemies.</p>",
          "leveling": [
            {
              "attribute": "Magic Damage",
              "modifiers": [
                {
                  "values": "200 / 350 / 500"
                },
                {
                  "unit": "% AP",
                  "values": "175"
                }
              ]
            },
            {
              "attribute": "Heal",
              "modifiers": [
                {
                  "values": "100 / 150 / 200"
                },
                {
                  "unit": "% AP",
                  "values": "60"
                },
                {
                  "unit": "% per 1% of health lost in the past 4 seconds",
                  "values": "3"
                }
              ]
            }
          ]
        },
        {
          "description": "Ekko is immune to all displacements during Chronobreak."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Ekko/ability-icon/r",
      "maxCharges": -1,
      "notes": "Ekko will attempt to basic attack the closest target after appearing at the cast location, but can do so quicker if he manually attack commands after the dash, except if  Phase Dive is primed.\nThe afterimage's location will explode even if Ekko's  dash is interrupted.\nA link can also be seen between the afterimage and Ekko that traces along his path.\nThe link follows the same visibility rules as the afterimage.\nUpon activation, Ekko travels full distance through the link, and thus will detonate  Parallel Convergence that the link passes through.\n Quicksilver incurs a 1-second  cooldown upon casting Chronobreak.",
      "resource": "Mana",
      "spellEffects": "spellaoe",
      "spellshieldable": "True",
      "targeting": "Auto"
    }
  ],
  "adaptiveType": "Magic damage",
  "attackType": "Melee",
  "attributeRatings": {
    "damage": 3,
    "toughness": 2,
    "control": 2,
    "mobility": 3,
    "utility": 1,
    "abilityReliance": 75,
    "difficulty": 2
  },
  "faction": "zaun",
  "lore": "A prodigy from the rough streets of Zaun, Ekko is able to manipulate time to twist any situation to his advantage. He uses his own invention, the Z-Drive, to explore the branching possibilities of reality, crafting the perfect moment to seemingly achieve the impossible the first time, every time. Though Ekko revels in this freedom, when there's a threat to those he cares about, he and the Firelights will do anything to defend them.",
  "patchLastChanged": "25.04",
  "positions": [
    "Jungle",
    "Middle"
  ],
  "price": {
    "blueEssence": 1575,
    "rp": 790
  },
  "releaseDate": "2015-05-29",
  "resource": "Mana",
  "roles": [
    "Assassin",
    "Mage"
  ],
  "stats": {
    "health": {
      "flat": 655,
      "perLevel": 99
    },
    "healthRegen": {
      "flat": 9,
      "perLevel": 0.9
    },
    "mana": {
      "flat": 280,
      "perLevel": 70
    },
    "manaRegen": {
      "flat": 7,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 32,
      "perLevel": 4.2
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 58,
      "perLevel": 3
    },
    "movespeed": {
      "flat": 340
    },
    "acquisitionRadius": {
      "flat": 600
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
      "flat": 0.688,
      "perLevel": 3.3
    },
    "attackSpeedRatio": {
      "flat": 0.625
    },
    "attackCastTime": {
      "flat": 0.26
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