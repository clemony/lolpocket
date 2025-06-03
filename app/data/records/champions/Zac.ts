 export const Zac: Champion =  {
  "id": 154,
  "key": "Zac",
  "name": "Zac",
  "title": "the Secret Weapon",
  "resource": "Health",
  "attackType": "Melee",
  "stats": {
    "health": {
      "flat": 685,
      "perLevel": 109
    },
    "healthRegen": {
      "flat": 5,
      "perLevel": 0.5
    },
    "armor": {
      "flat": 33,
      "perLevel": 4.7
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 60,
      "perLevel": 3.4
    },
    "movespeed": {
      "flat": 340
    },
    "acquisitionRadius": {
      "flat": 400
    },
    "selectionRadius": {
      "flat": 140
    },
    "pathingRadius": {
      "flat": 43.075
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
      "perLevel": 1.6
    },
    "attackSpeedRatio": {
      "flat": 0.638
    },
    "attackCastTime": {
      "flat": 0.363
    },
    "attackTotalTime": {
      "flat": 1.568
    },
    "attackRange": {
      "flat": 175
    }
  },
  "positions": [
    "Jungle",
    "Support",
    "Top"
  ],
  "roles": [
    "Fighter",
    "Tank",
    "Vanguard"
  ],
  "attributeRatings": {
    "damage": 2,
    "toughness": 3,
    "control": 3,
    "mobility": 2,
    "utility": 1,
    "abilityReliance": 100,
    "difficulty": 1
  },
  "abilities": {
    "P": [
      {
        "name": "Cell Division",
        "icon": "https://cdn.communitydragon.org/latest/champion/Zac/ability-icon/p",
        "effects": [
          {
            "description": "<span class=\"ability-header\">Innate - The Secret Weapon:</span> Zac gains increased percentage size equal to 1.5% of his bonus health, capped at 35% increased size at 2333.33 bonus health. Zac's size also reduces based on his missing health, down to 70% total size while at 0% health."
          },
          {
            "description": "<span class=\"ability-header\">Innate - Goo:</span> Whenever Zac damages at least one enemy with an ability, he sheds a number of chunks of himself to a nearby location, landing towards nearby visible enemy champions and lasting for 6 seconds.\n<span class=\"ability-header\"> Stretching Strikes:</span> 1 chunk for each strike hit (excluding the collision) on different targets, up to 2\n<span class=\"ability-header\"> Unstable Matter:</span> 1 chunk if it hits at least one target\n<span class=\"ability-header\"> Elastic Slingshot:</span> 1 chunk for each enemy champion hit\n<span class=\"ability-header\"> Let's Bounce!:</span> 1 chunk for each bounce that hits an enemy champion, up to 4"
          },
          {
            "description": "<span class=\"ability-header\">Both Zac and enemy champions can interact with a chunk by being within 50 units of it:</span> an enemy will destroy it, while Zac will consume it to heal for 4% - 8% (based on level) of his maximum health."
          },
          {
            "description": "<span class=\"ability-header\">Innate - Cell Division:</span> Periodically, upon taking fatal damage, Zac enters resurrection for 8 / 7 / 6 / 5 / 4 (based on level) seconds, instantly restoring 50% of his maximum health and becoming untargetable and unable to act for the duration. Zac then splits into four uncontrollable bloblets away from his location, though stopping at terrain. After 1.5 seconds of the bloblets being untargetable, they start moving toward Zac's location over the remaining duration. Any damage the bloblets receive, excluding damage dealt in excess of each bloblet's total maximum health, is also redirected to Zac as true damage. While in resurrection, Zac cannot take damage from sources other than the redirected damage from his bloblets."
          },
          {
            "description": "After the duration, Zac is revived with 10 - 50% maximum health. Zac will die once all bloblets are killed."
          }
        ],
        "targeting": "Passive",
        "affects": "Self",
        "spellEffects": "Heal",
        "notes": "The damage directed to Zac is  internal raw damage.\nZac's health when the bloblets are sent out is set to what it would be if all bloblets recombined, and is actively updated when the bloblets take damage.\nZac's increased size does not consider his base stats.\nCell Division's chunks spawn in two versions:\nContestable: They will fall to the ground at a point which is roughly equidistant from Zac and the nearest  visible enemy champion within 1000 range of him (dropping slightly in Zac's favor). The location at which they fall to the ground is influenced by the direction in which Zac is currently facing. Cannot be interacted with for the first 0.25 seconds (except during  Let's Bounce!).\nUncontestable: They will fall to the ground near Zac and can be picked up immediately (version used by default).\nZac's  untargetability upon triggering Cell Division does not  destroy in-flight  projectiles.\n Chronoshift and  Guardian Angel will take priority over Cell Division.\n Spirit Visage and  Heal Power increases the healing of both chunks and bloblets.\n Ryze's  Realm Warp is able to individually teleport Zac or his bloblets during Cell Division.\nIf Zac is transported to a new location before the bloblets landed, they will travel to form at his new position, adjusting their speed accordingly. If Cell Division's duration permits during this time, Zac will be revived even if the bloblets fail to physically recombine.\nCell Division's bloblets can be targeted by  Teleport and  Syndra's  Force of Will.\nOther bloblets are not interrupted by the conditions above and will continue to recombine instinctively.\nIf Zac's health is higher than it is supposed to be when the bloblets converge on him, his health will be set to the correct value.\nThe following table refers for interactions while Zac is in resurrection:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll summoner spells are disabled\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
        "blurb": "Innate - Goo:  Zac's abilities have a  health cost. Whenever Zac's abilities damage an enemy, he sheds a number of chunks on the ground that remain for a few seconds. Zac and enemy champions can collect the chunks; an enemy will destroy it, while Zac will  heal a portion of his maximum health."
      }
    ],
    "Q": [
      {
        "name": "Stretching Strikes",
        "icon": "https://cdn.communitydragon.org/latest/champion/Zac/ability-icon/q",
        "effects": [
          {
            "description": "<span class=\"ability-header\">Active:</span> Zac stretches his left arm in the target direction that catches the first enemy hit, dealing magic damage, slowing them by 40% for 0.5 seconds, and forming a tether between Zac and the target for 2 seconds, during which they are revealed.",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      40,
                      55,
                      70,
                      85,
                      100
                    ]
                  },
                  {
                    "values": [
                      30
                    ],
                    "units": [
                      "% AP"
                    ]
                  },
                  {
                    "values": [
                      3
                    ],
                    "units": [
                      "% of Zac's maximum health"
                    ]
                  }
                ]
              },
              {
                "attribute": "Total Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      80,
                      110,
                      140,
                      170,
                      200
                    ]
                  },
                  {
                    "values": [
                      60
                    ],
                    "units": [
                      "% AP"
                    ]
                  },
                  {
                    "values": [
                      6
                    ],
                    "units": [
                      "% of Zac's maximum health"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "While the tether persists, Zac's next basic attack is replaced by a second Stretching Strike, empowering it to have a 0.25-second cast time and gain 25 bonus attack range. This attack cannot critically strike."
          },
          {
            "description": "If the two Stretching Strikes affect different targets, both are rooted for 0.5 seconds while the secondary target is dealt the initial damage and applied the same slow. After a 0.4-second delay, Zac displaces them toward each other over 300-units, though not through terrain."
          },
          {
            "description": "If the two targets are near each other, they are instead slammed together through the displacement. Upon impact of each other, both targets are knocked up and stunned for 0.25 seconds and all enemies within the impact are dealt the initial magic damage and applied the same slow."
          },
          {
            "description": "Both Stretching Strikes (the cast and the empowered attack) reset Zac's basic attack timer. Zac is unable to move or attack while his left arm is in flight."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          14,
          12.5,
          11,
          9.5,
          8
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "special",
        "resource": "Current health",
        "damageType": "Magic damage",
        "spellEffects": "Single target",
        "projectile": "TRUE",
        "notes": "If both Stretching Strikes affect the same target, the target will be dealt the damage and applied the slow for both hits.\nThe following features were added in patch V7.10 to increase Stretching Strikes' reliability and usability:\nIf the second attack's target would die from the damage, it won't be dealt until they are slammed to the first target.\nIf the first target is standing on top of other enemies, the second hit will reliably choose a different target from the first.\nNon-champion units that are affected by Stretching Strikes' displacement are prevented from taking any damage until they are slammed together. Note that this often confuses players who are trying to secure  monsters via  Smite while Zac is slamming the wanted target, resulting in Smite dealing no damage to it. It is currently unknown whatever the side effects of this feature are intentional or not.\n Spell shield's interactions with Stretching Strikes:\nThe first Stretching Strike will have its damage, slow, and tether application all blocked.\nIf as the primary target and affected by the tether already from the first Stretching Strike:\nThe damage and slow from the empowered attack if targeted again by the second Stretching Strike will be blocked.\nThe damage, slow, stun, and knock up from the impact of the second Stretching Strike hitting a different target will all be blocked, but not the root and the displacement.\nIf as the primary target of the second Stretching Strike, the root will be blocked, but the displacement, damage, slow, stun, and knock up afterwards will not.(note)\nIf as the secondary target of the impact, the damage and slow will be blocked.\nIf the tethered target is  untargetable during the second Stretching Strike via basic attack, they are completely unaffected by the ability.\n Displacement immunity will also resist the application of the  stun.\nThis ability will cast from wherever the caster is at the end of the cast time.\nIf the target becomes  untargetable,  dies, or is too far away during the empowered attack's cast time, it is cancelled but not consumed.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
        "tetherRadius": "900",
        "speed": "2800",
        "width": "160",
        "castTime": "0.33",
        "targetRange": "800 /  80",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Unstable Matter",
        "icon": "https://cdn.communitydragon.org/latest/champion/Zac/ability-icon/w",
        "effects": [
          {
            "description": "<span class=\"ability-header\">Active:</span> Zac explodes to deal magic damage to nearby enemies, capped against minions and monsters.",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      40,
                      50,
                      60,
                      70,
                      80
                    ]
                  },
                  {
                    "values": [
                      4,
                      5,
                      6,
                      7,
                      8
                    ],
                    "units": [
                      "% (+ 3% per 100 AP) of target's maximum health"
                    ]
                  }
                ]
              },
              {
                "attribute": "Capped Non-Champion Damage",
                "modifiers": [
                  {
                    "values": [
                      240,
                      250,
                      260,
                      270,
                      280
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Zac grants ghosting to aggroed monsters hit for 5 seconds."
          },
          {
            "description": "Unstable Matter's current cooldown is reduced by 1 second whenever Zac collects a Cell Division chunk."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          5
        ],
        "targeting": "Auto",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Current health",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "notes": "If Unstable Matter is the cause of monster aggro, the monsters will not receive  ghosting.\nSubsequent uses of Unstable Matter within 5 seconds after the previous will not grant  ghosting either.(bug)",
        "blurb": "Active:  Zac explodes to deal magic damage to nearby enemies hit based on their maximum health.",
        "castTime": "none",
        "targetRange": "350",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Elastic Slingshot",
        "icon": "https://cdn.communitydragon.org/latest/champion/Zac/ability-icon/e",
        "effects": [
          {
            "description": "<span class=\"ability-header\">Active:</span> Zac charges for up to 4.5 seconds to increase Elastic Slingshot's range over a cone in the target direction.",
            "leveling": [
              {
                "attribute": "Maximum Range Channel Duration",
                "modifiers": [
                  {
                    "values": [
                      0.9,
                      1,
                      1.1,
                      1.2,
                      1.3
                    ],
                    "units": [
                      " seconds"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Elastic Slingshot can be recast within the duration. If Zac cancels the channel himself, or the charge completes without reactivation, 50% of Elastic Slingshot's health cost and cooldown are refunded."
          },
          {
            "description": "<span class=\"ability-header\">Recast:</span> Zac leaps to the target location. Upon landing, he deals magic damage to nearby enemies and knocks them up and stuns them for 0.5 seconds, increased to 1 second if Elastic Slingshot was charged for more than 1 second.",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      60,
                      105,
                      150,
                      195,
                      240
                    ]
                  },
                  {
                    "values": [
                      80
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
            "description": "Elastic Slingshot will cast at max range if cast beyond that."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          22,
          19,
          16,
          13,
          10
        ],
        "targeting": "Direction / Location",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Current health",
        "damageType": "Magic damage",
        "spellEffects": "Area of effect",
        "notes": "Quick casting: Elastic Slingshot's channel begins when the key is pressed and held, launching Zac towards the cursor when released.\nElastic Slingshot will not  knock up if the targeted location was directly on top of Zac (in which case he will not  dash at all).(note)\nThe  knock up will occasionally end early if the targeted location was slightly away from Zac.(note)\n Displacement immunity will also resist the application of the  stun.\nThe following table refers for interactions while Zac is  channeling:\n Recall is disabled for the first 0.9 seconds and otherwise interrupts the channel if used.\n\n\nType\n\nCharge channel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Stretching Strikes and  Unstable Matter interrupt.  Let's Bounce! initiates the recast and is buffered to cast itself at the end of the dash.\n\n\nMovement\n\nDisabled for the first 0.9 seconds, otherwise, interrupts.\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport\n\n\nInterrupted by\n\n Recall  Hexflash (Recasts)\n\n\nInterrupted by\n\nDeath Grounding effects Immobilizing effects Cast-inhibiting effects",
        "castTime": "none",
        "effectRadius": "250",
        "targetRange": "1200 / 1350 / 1500 / 1650 / 1800",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Let's Bounce!",
        "icon": "https://cdn.communitydragon.org/latest/champion/Zac/ability-icon/r",
        "effects": [
          {
            "description": "<span class=\"ability-header\">Active:</span> Zac bounces after the cast time, then bounces 3 additional times each second over 3 seconds, during which he also gains 20% - 50% (based on duration) bonus movement speed but becomes unable to declare basic attacks and cast Stretching Strikes and Elastic Slingshot."
          },
          {
            "description": "Each bounce deals magic damage to enemies hit, knocks them back over 1 second, and slows them by 20% for the same duration.",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      140,
                      210,
                      280
                    ]
                  },
                  {
                    "values": [
                      40
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
            "description": "An enemy can be hit by multiple bounces, but ones beyond the first deal 50% damage to them and do not apply the knock back.",
            "leveling": [
              {
                "attribute": "Reduced Damage",
                "modifiers": [
                  {
                    "values": [
                      70,
                      105,
                      140
                    ]
                  },
                  {
                    "values": [
                      20
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Total Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      350,
                      525,
                      700
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
          0
        ],
        "cooldown": [
          120,
          105,
          90
        ],
        "targeting": "Auto",
        "affects": "Enemies, Self",
        "spellshieldable": "Special",
        "damageType": "Magic damage",
        "spellEffects": "Area of effect",
        "notes": "Spell shield only blocks a single instance of damage.\nEntering  stasis will end Let's Bounce! prematurely.\nWhile Let's Bounce! is active Zac consumes Chunks within  300 range.",
        "blurb": "Active:  Zac bounces four times, each impact deals magic damage to enemies hit and briefly  knocks back and  slows them.",
        "castTime": "0.3",
        "effectRadius": "300",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Zac is the product of a toxic spill that ran through a chemtech seam and pooled in an isolated cavern deep in Zaun's Sump. Despite such humble origins, Zac has grown from primordial ooze into a thinking being who dwells in the city's pipes, occasionally emerging to help those who cannot help themselves or to rebuild the broken infrastructure of Zaun."
}
