// Updated Patch 25.15 - 08/06/2025 11:23:40 PM CDT

const champion: Champion =  {
  "id": 53,
  "key": "Blitzcrank",
  "name": "Blitzcrank",
  "title": "the Great Steam Golem",
  "resource": "Mana",
  "attackType": "Melee",
  "stats": {
    "health": {
      "flat": 600,
      "perLevel": 109
    },
    "healthRegen": {
      "flat": 7.5,
      "perLevel": 0.75
    },
    "mana": {
      "flat": 267,
      "perLevel": 40
    },
    "manaRegen": {
      "flat": 8.5,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 37,
      "perLevel": 4.7
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 62,
      "perLevel": 3.5
    },
    "movespeed": {
      "flat": 325
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
      "perLevel": 1.13
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
      "flat": -0.03
    },
    "attackRange": {
      "flat": 125
    }
  },
  "positions": [
    "Support"
  ],
  "roles": [
    "Catcher",
    "Support",
    "Tank"
  ],
  "attributeRatings": {
    "damage": 1,
    "toughness": 2,
    "control": 3,
    "mobility": 1,
    "utility": 1,
    "abilityReliance": 90,
    "difficulty": 1
  },
  "abilities": {
    "P": [
      {
        "name": "Mana Barrier",
        "icon": "https://cdn.communitydragon.org/latest/champion/Blitzcrank/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Periodically, when damaged to 30% maximum health, Blitzcrank generates a shield equal to 35% of maximum mana, lasting for up to 10 seconds.</p>"
          }
        ],
        "targeting": "Passive",
        "affects": "Self",
        "notes": "The shield will absorb the portion of incoming damage that would reduce health past 30%.\nMana Barrier's interactions with other  shield effects that trigger before taking damage that would reduce below 30% health:\nMana Barrier will trigger simultaneously with the Lifeline effect from  Hexdrinker,  Maw of Malmortius, or  Immortal Shieldbow if Blitzcrank takes damage while above 30% health, and trigger before them when the damage is taken while below 30% health.\nMana Barrier will always trigger simultaneously with the Lifeline effect from  Sterak's Gage if Blitzcrank takes damage while above or below 30% health.",
        "blurb": "Innate: Periodically, when  Blitzcrank gets to low-health, Mana Barrier generates a  shield that scales with  maximum mana."
      }
    ],
    "Q": [
      {
        "name": "Rocket Grab",
        "icon": "https://cdn.communitydragon.org/latest/champion/Blitzcrank/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Blitzcrank fires their right hand in the target direction that catches the first enemy hit, dealing them magic damage, stunning them for 0.65 seconds, and pulling them towards Blitzcrank, during which they are revealed.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      110,
                      160,
                      210,
                      260,
                      310
                    ]
                  },
                  {
                    "values": [
                      120
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Blitzcrank is unable to move or attack while Rocket Grab is in flight."
          }
        ],
        "cost": [
          100
        ],
        "cooldown": [
          20,
          19,
          18,
          17,
          16
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spell",
        "projectile": "TRUE",
        "notes": "Rocket Grab's range is composed of a missile with 1080 range, and a smaller center-range area check at the end (colloqially known as a 'lollipop').\nThe area check is currently half as long as it is supposed to be, reducing the intended 1150 range of the ability to 1115 range.\nHitting an enemy with this area check only also fails to play the ability's hit SFX. This makes it possible to easily distinguish whether the target was picked up by the missile collision or 'lollipop'.\nTargets larger than 95 units in radius can be hit by a different edge-range circle check at the end of the missile.\nThe  airborne debuff lasts for up-to 1 second but will end prematurely when the target's movement stops, while the stun will persist (if duration permits).\n Displacement immunity will not resist the application of the  stun.\nThe target's destination lies 75 units in front of Blitzcrank.\nIf the target is closer than this, the effect will still move them to this location.\nIf this location would be inside static terrain, the target's destination will end up on Blitzcrank's side, even if that means pulling them right on top of Blitzcrank.\nThis can occasionally fail.(bug)\nIf Blitzcrank is being moved (e.g.  Airborne,  Kinematics or  Fate's Call) during the grab, the target will be pulled towards Blitzcranks old location.\nBlitzcrank will be ordered to basic attack the target once the target arrives.\nIf the target dies to Rocket Grab's damage, they will not be pulled.\nThis ability will cast from wherever the caster is at the end of the cast time.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
        "speed": "1800 / 1800",
        "width": "140 /  60",
        "castTime": "0.25",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Overdrive",
        "icon": "https://cdn.communitydragon.org/latest/champion/Blitzcrank/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Blitzcrank shifts into overdrive, gaining bonus attack speed for 5 seconds and bonus movement speed that decays to 10% over the first 2.9 seconds.</p>",
            "leveling": [
              {
                "attribute": "Bonus Attack Speed",
                "modifiers": [
                  {
                    "values": [
                      30,
                      40,
                      50,
                      60,
                      70
                    ],
                    "units": [
                      "%"
                    ]
                  }
                ]
              },
              {
                "attribute": "Initial Bonus Movement Speed",
                "modifiers": [
                  {
                    "values": [
                      60,
                      65,
                      70,
                      75,
                      80
                    ],
                    "units": [
                      "%"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "When Overdrive ends, Blitzcrank is slowed by 30% for 1.5 seconds."
          }
        ],
        "cost": [
          75
        ],
        "cooldown": [
          15
        ],
        "targeting": "Auto",
        "affects": "Self",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "proc",
        "notes": "The movement speed boost's decay is linear. On the first stat update after the buff is gained, the boost does not decay.\nThe self-slow is affected by  slow resist and  Tenacity.",
        "blurb": "Active:  Blitzcrank shifts into overdrive, gaining  bonus attack speed and a burst of  movement speed.",
        "castTime": "none",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Power Fist",
        "icon": "https://cdn.communitydragon.org/latest/champion/Blitzcrank/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Blitzcrank empowers their next basic attack within 5 seconds to have an uncancellable windup, deal 100% AD (+ 25% AP) bonus physical damage and knock up the target for 1 second. This damage is affected by critical strike modifiers.</p>"
          },
          {
            "description": "Power Fist resets Blitzcrank's basic attack timer."
          }
        ],
        "cost": [
          25
        ],
        "cooldown": [
          9,
          8,
          7,
          6,
          5
        ],
        "targeting": "Auto",
        "affects": "Enemy, Structure",
        "spellshieldable": "special",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "Special",
        "notes": "Power Fist deals  basic damage, but also triggers spell effects by also being tagged as  spell damage.\nThis includes the basic attack itself.\nThe  knockup is applied even if the attack is  dodged or  missed.\nIt is not applied if it is  blocked.\n Spell shield prevents the  knockup but not the damage.\nThe enhanced attack will still complete and hit the target even if they become  untargetable during the attack's windup.\nThe target is displaced a short distance during the  knockup in a random direction.",
        "blurb": "Active:  Blitzcrank charges up a fist to make the next  basic attack deal double damage and  knock up the target into the air.",
        "castTime": "none",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Static Field",
        "icon": "https://cdn.communitydragon.org/latest/champion/Blitzcrank/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> While Static Field is not on cooldown, Blitzcrank's basic attacks apply a stack to the target on-hit. After every 1 second, one stack is consumed to deal them magic damage.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      50,
                      100,
                      150
                    ]
                  },
                  {
                    "values": [
                      30,
                      40,
                      50
                    ],
                    "units": [
                      "% AP"
                    ]
                  },
                  {
                    "values": [
                      2
                    ],
                    "units": [
                      "% maximum mana"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Blitzcrank detonates a static field that destroys the damage-mitigating shields of all nearby enemies, excluding the shields of monsters, and then deals them magic damage and silences them for 0.5 seconds.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      275,
                      400,
                      525
                    ]
                  },
                  {
                    "values": [
                      100
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "cost": [
          100
        ],
        "cooldown": [
          60,
          40,
          20
        ],
        "targeting": "Auto",
        "affects": "Enemies",
        "spellshieldable": "true",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "Special",
        "notes": "Blitzcrank's attacks do not have to deal damage to apply the mark.\nThe mark will be consumed even if the target becomes  untargetable.\nThe lightning bolts deal  spell damage while the static field applies  area damage.\nEven if Static Field is blocked by a  spell shield, it will still destroy any existing damage  shields on the target.\nThe visual effects will appear from wherever Blitzcrank is at the end of the cast time.(bug)\n\nThis ability will cast from wherever the caster is at the start of the cast time.",
        "blurb": "Passive: While Static Field is ready,  Blitzcrank's basic attacks apply a  stack of Static Field.",
        "castTime": "0.25",
        "effectRadius": "600",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Blitzcrank is an enormous, near-indestructible automaton from Zaun, originally built to dispose of hazardous waste. However, he found this primary purpose too restricting, and modified his own form to better serve the fragile people of the Sump. Blitzcrank selflessly uses his strength and durability to protect others, extending a helpful metal fist or burst of energy to subdue any troublemakers."
}
    export default champion