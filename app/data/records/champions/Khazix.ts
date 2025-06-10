// Updated Patch 25.11 - 06/08/2025 12:01:46 PM CDT

const champion: Champion =  {
  "id": 121,
  "key": "Khazix",
  "name": "Kha'Zix",
  "title": "the Voidreaver",
  "resource": "Mana",
  "attackType": "Melee",
  "stats": {
    "health": {
      "flat": 643,
      "perLevel": 99
    },
    "healthRegen": {
      "flat": 7.5,
      "perLevel": 0.75
    },
    "mana": {
      "flat": 327,
      "perLevel": 40
    },
    "manaRegen": {
      "flat": 7.59,
      "perLevel": 0.5
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
      "flat": 60,
      "perLevel": 3.1
    },
    "movespeed": {
      "flat": 350
    },
    "acquisitionRadius": {
      "flat": 400
    },
    "selectionRadius": {
      "flat": 130
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
      "flat": 0.668,
      "perLevel": 2.7
    },
    "attackSpeedRatio": {
      "flat": 0.668
    },
    "attackCastTime": {
      "flat": 0.3
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackDelayOffset": {
      "flat": -0.099
    },
    "attackRange": {
      "flat": 125
    }
  },
  "positions": [
    "Jungle"
  ],
  "roles": [
    "Assassin"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 1,
    "mobility": 2,
    "utility": 1,
    "abilityReliance": 55,
    "difficulty": 2
  },
  "abilities": {
    "P": [
      {
        "name": "Unseen Threat",
        "icon": "https://cdn.communitydragon.org/latest/champion/Khazix/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Kha'Zix gains Unseen Threat whenever the enemy loses sight of him or he activates Void Assault. Unseen Threat: Kha'Zix empowers his next basic attack against an enemy champion to deal 17 - 136 (based on level) (+ 50% bonus AD) bonus magic damage and slow them by 25% for 2 seconds.</p>"
          }
        ],
        "targeting": "Passive",
        "affects": "Enemies",
        "spellshieldable": "False",
        "damageType": "Magic damage",
        "spellEffects": "spell",
        "notes": "Any form of vision loss may trigger Unseen Threat, such as  Curse of the Black Mist,  nearsight and  Brushmaker.\n Void Assault grants Unseen Threat even if Kha'Zix never becomes unseen (e.g. affected by  true sight).\nOther  stealth such as  Senna's  Curse of the Black Mist does not do this.\nBoth the attack's damage and bonus spell damage are grouped under the same Spell ID.\nBecause of this, a single Unseen Threat attack does not trigger two  Electrocute stacks.",
        "blurb": "Innate:  Kha'Zix gains Unseen Threat whenever the enemy loses  sight of him causing his next basic attack against an enemy Champion to deal bonus magic damage and slow."
      }
    ],
    "Q": [
      {
        "name": "Taste Their Fear",
        "icon": "https://cdn.communitydragon.org/latest/champion/Khazix/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Kha'Zix considers any enemy unit to be Isolated if they are not nearby to one of their allies. Taste Their Fear, Evolved Reaper Claws, and Evolved Spike Racks have special interactions against Isolated targets.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kha'Zix slashes the target enemy, dealing physical damage, increased by 110% against Isolated targets.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      80,
                      105,
                      130,
                      155,
                      180
                    ]
                  },
                  {
                    "values": [
                      110
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  }
                ]
              },
              {
                "attribute": "Increased Damage",
                "modifiers": [
                  {
                    "values": [
                      168,
                      220.5,
                      273,
                      325.5,
                      378
                    ]
                  },
                  {
                    "values": [
                      231
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "cost": [
          20
        ],
        "cooldown": [
          4
        ],
        "targeting": "Unit",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "Single target",
        "notes": "A team's allies are  champions,  pets,  minions and outer  turrets.\n Monsters are considered allies for other monsters.\n Wards do not prevent Isolation.\nA number of targetable champion summoned units are specifically tagged to not be a valid ally of a potentially Isolated target. These units are:\n Gangplank's  Powder Keg\n Illaoi's  Prophet of an Elder God\n Jhin's  Captive Audience\n Nidalee's  Bushwhack\n Rek'Sai's  Tunnel\n Senna's  Absolution's Mist Wraiths\n Teemo's  Noxious Trap\n Viego's  Sovereign's Domination's Mist Wraiths\n Yorick's  Dark Procession\nIsolated targets are marked by an  indicator to Kha'Zix when visible and within 2500 units of him. However, Isolation bonuses are evaluated when the relevant spells hit and thus enemies do not need to show the indicator for them to receive the effects.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
        "blurb": "Passive:  Kha'Zix considers any enemy unit to be Isolated if they are not nearby to one of their allies. His abilities have special interactions against Isolated targets.",
        "castTime": "0.25",
        "effectRadius": "375",
        "targetRange": "325",
        "maxCharges": -1
      },
      {
        "name": "Evolved Reaper Claws",
        "icon": "https://cdn.communitydragon.org/latest/champion/Khazix/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Kha'Zix gains 50 bonus range on his basic attacks and Taste Their Fear. Evolved Bonus: If the target is Isolated, the cooldown is reduced by 45%.</p>"
          }
        ],
        "cost": [
          20
        ],
        "cooldown": [
          4
        ],
        "targeting": "Unit",
        "affects": "Enemies",
        "spellshieldable": "True",
        "damageType": "Physical damage",
        "spellEffects": "Single target",
        "notes": "No additional details.",
        "blurb": "Passive: Kha'Zix gains  bonus range on his basic attacks and Taste Their Fear.",
        "targetRange": "375",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Void Spike",
        "icon": "https://cdn.communitydragon.org/latest/champion/Khazix/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kha'Zix fires a bolt of spikes in the target direction that explodes upon hitting an enemy, dealing physical damage to nearby enemies.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      85,
                      115,
                      145,
                      175,
                      205
                    ]
                  },
                  {
                    "values": [
                      100
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Kha'Zix heals himself if he is within the explosion.",
            "leveling": [
              {
                "attribute": "Heal",
                "modifiers": [
                  {
                    "values": [
                      55,
                      75,
                      95,
                      115,
                      135
                    ]
                  },
                  {
                    "values": [
                      50
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
          55,
          60,
          65,
          70,
          75
        ],
        "cooldown": [
          9
        ],
        "targeting": "Direction",
        "affects": "Enemies, Self",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "spellaoe",
        "projectile": "TRUE",
        "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nVoid Spike's effect radius is centered around the location of the missile as it collides.",
        "blurb": "Active:  Kha'Zix fires a bolt of spikes in the target direction that explodes upon hitting an enemy, dealing physical damage to nearby enemies.",
        "speed": "1700",
        "width": "140",
        "castTime": "0.25",
        "effectRadius": "275",
        "targetRange": "1025",
        "maxCharges": -1
      },
      {
        "name": "Evolved Spike Racks",
        "icon": "https://cdn.communitydragon.org/latest/champion/Khazix/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Evolved Bonus:</span> Void Spike now fires three clusters in a cone, slows by 40% and reveals enemy champions hit for 2 seconds. Multiple explosions do not deal extra damage to the same target nor provide Kha'Zix with additional healing.</p>"
          },
          {
            "description": "Isolated targets hit by Evolved Spike Racks are slowed by 60% instead."
          }
        ],
        "cost": [
          55,
          60,
          65,
          70,
          75
        ],
        "cooldown": [
          9
        ],
        "targeting": "Direction",
        "affects": "Enemies, Self",
        "spellshieldable": "special",
        "damageType": "Physical damage",
        "spellEffects": "aoe",
        "projectile": "TRUE",
        "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nEvolved Spike Racks' effect radius is centered around the location of the missile as it collides.\n Spell shield will not block the  reveal.",
        "blurb": "Evolved Bonus: Void Spike now fires three clusters in a cone,  slowing and  revealing enemy champions hit for a short time.",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Leap",
        "icon": "https://cdn.communitydragon.org/latest/champion/Khazix/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kha'Zix leaps to the target location, dealing physical damage to nearby enemies upon arrival.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      65,
                      100,
                      135,
                      170,
                      205
                    ]
                  },
                  {
                    "values": [
                      40
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Taste Their Fear can be cast during the dash. Leap will cast at max range if cast beyond that."
          }
        ],
        "cost": [
          50
        ],
        "cooldown": [
          20,
          18,
          16,
          14,
          12
        ],
        "targeting": "Location",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "spellaoe",
        "notes": "Kha'Zix can use his summoner spells and item actives while  leaping.\nBuffering Interactions\n\n Taste Their Fear can be buffered to cast after the  leap ends if it is cast while the target is out of range. There is no check for the target coming in range during the  leap.\nIf the target is still out of range after landing, there will be a 0.5 second delay  before Kha'Zix starts moving towards the target compared to manually casting  Taste Their Fear after landing.\n Void Spike &  Void Assault can be buffered to cast after the  leap ends.",
        "blurb": "Active:  Kha'Zix  leaps to the target location, dealing physical damage to nearby enemies upon landing.",
        "castTime": "none",
        "effectRadius": "300",
        "targetRange": "700",
        "maxCharges": -1
      },
      {
        "name": "Evolved Wings",
        "icon": "https://cdn.communitydragon.org/latest/champion/Khazix/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Evolved Bonus:</span> Leap gains 200 bonus cast range, and the cooldown resets upon scoring a champion takedown.</p>"
          }
        ],
        "cost": [
          50
        ],
        "cooldown": [
          20,
          18,
          16,
          14,
          12
        ],
        "targeting": "Location",
        "affects": "Enemies",
        "spellshieldable": "True",
        "damageType": "Physical damage",
        "spellEffects": "aoe",
        "notes": "Kha'Zix can use his summoner spells and item actives while  leaping.\nBuffering Interactions\n\n Taste Their Fear can be buffered to cast after the  leap ends if it is cast while the target is out of range. There is no check for the target coming in range during the  leap.\nIf the target is still out of range after landing, there will be a 0.5 second delay  before Kha'Zix starts moving towards the target compared to manually casting  Taste Their Fear after landing.\n Void Spike &  Void Assault can be buffered to cast after the  leap ends.",
        "blurb": "Evolved Bonus: Leap has increased range, and the cooldown  resets upon scoring a champion  takedown.",
        "targetRange": "900",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Void Assault",
        "icon": "https://cdn.communitydragon.org/latest/champion/Khazix/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Each rank in Void Assault allows Kha'Zix to evolve one of his abilities, granting it additional effects. Evolving an ability causes him to enter a 2-second cast time. Kha'Zix cannot evolve while he is unable to cast abilities.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kha'Zix becomes invisible for 1.25 seconds, during which he gains 40% bonus movement speed.</p>"
          },
          {
            "description": "After 2 seconds of leaving invisibility, and for the next 12 seconds, Void Assault can be recast at no additional cost."
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Kha'Zix mimics the first cast's effects.</p>"
          }
        ],
        "cost": [
          100
        ],
        "cooldown": [
          100,
          85,
          70
        ],
        "targeting": "Auto",
        "affects": "Self",
        "resource": "Mana",
        "notes": "Each cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nKha'Zix receives the evolution even if he dies while in cast time.\nEvery time Void Assault is ranked, a secondary menu will pop up for Kha'Zix to select an ability to evolve, this can only be done once per ability.\nThe only way for Kha'Zix to evolve all of his abilities is to gain the fourth evolution point by being victorious in The Hunt is On! (by scoring a  takedown on  Rengar).\nUsing a basic attack breaks the stealth at the end of the attack windup.",
        "blurb": "Passive: Each rank in Void Assault allows Kha'Zix to evolve one of his abilities, granting it additional effects.",
        "castTime": "none",
        "maxCharges": -1
      },
      {
        "name": "Evolved Adaptive Cloaking",
        "icon": "https://cdn.communitydragon.org/latest/champion/Khazix/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Evolved Bonus:</span> The invisibility now lasts 2 seconds, and Void Assault can be recast twice.</p>"
          }
        ],
        "cost": [
          100
        ],
        "cooldown": [
          100,
          85,
          70
        ],
        "targeting": "Auto",
        "affects": "Self",
        "notes": "No additional details.",
        "blurb": "Evolved Bonus: The  invisibility is extended, and Void Assault can be cast up to 3 times.",
        "maxCharges": -1
      }
    ]
  },
  "lore": "The Void grows, and the Void adapts—in none of its myriad spawn are these truths more apparent than Kha'Zix. Evolution drives the core of this mutating horror, born to survive and to slay the strong. Where it struggles to do so, it grows new, more effective ways to counter and kill its prey. Initially a mindless beast, Kha'Zix's intelligence has developed as much as its form. Now, the creature plans out its hunts, and even utilizes the visceral terror it engenders in its victims."
}
    export default champion