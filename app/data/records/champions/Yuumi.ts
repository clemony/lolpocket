// Updated Patch 25.11 - 06/08/2025 12:01:47 PM CDT

const champion: Champion =  {
  "id": 350,
  "key": "Yuumi",
  "name": "Yuumi",
  "title": "the Magical Cat",
  "resource": "Mana",
  "attackType": "Ranged",
  "stats": {
    "health": {
      "flat": 500,
      "perLevel": 69
    },
    "healthRegen": {
      "flat": 5,
      "perLevel": 0.55
    },
    "mana": {
      "flat": 440,
      "perLevel": 45
    },
    "manaRegen": {
      "flat": 10,
      "perLevel": 0.4
    },
    "armor": {
      "flat": 25,
      "perLevel": 4.2
    },
    "magicResistance": {
      "flat": 25,
      "perLevel": 1.1
    },
    "attackDamage": {
      "flat": 49,
      "perLevel": 3.1
    },
    "movespeed": {
      "flat": 330
    },
    "acquisitionRadius": {
      "flat": 475
    },
    "selectionRadius": {
      "flat": 100
    },
    "pathingRadius": {
      "flat": 30
    },
    "gameplayRadius": {
      "flat": 55
    },
    "criticalStrikeDamage": {
      "flat": 175
    },
    "criticalStrikeDamageModifier": {
      "flat": 1
    },
    "attackSpeed": {
      "flat": 0.625,
      "perLevel": 1
    },
    "attackSpeedRatio": {
      "flat": 0.625
    },
    "attackCastTime": {
      "flat": 0.25
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackRange": {
      "flat": 425
    }
  },
  "positions": [
    "Support"
  ],
  "roles": [
    "Enchanter",
    "Mage",
    "Support"
  ],
  "attributeRatings": {
    "damage": 1,
    "toughness": 1,
    "control": 1,
    "mobility": 3,
    "utility": 3,
    "abilityReliance": 100,
    "difficulty": 1
  },
  "abilities": {
    "P": [
      {
        "name": "Feline Friendship",
        "icon": "https://cdn.communitydragon.org/latest/champion/Yuumi/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Periodically, Yuumi's next basic attack, which has an uncancelable windup and gains 50 bonus range, ability hit against enemy champions, or Final Chapter hit on ally champions while attached, will heal her for 20 - 110 (based on level) (+ 25% AP). If she is attached to an ally or does so within 4 seconds, they are healed for the same amount.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> While attached to an ally, Yuumi grants them 2 permanent Friendship stacks whenever they kill enemy champions or minions. The ally with the highest Friendship stacks becomes Yuumi's Best Friend, which empowers her abilities with additional effects while she is attached to them.</p>"
          }
        ],
        "targeting": "Passive",
        "affects": "Self, Allies, Enemies",
        "notes": "Feline Friendship will not be consumed if Yuumi isn't missing health, except when triggered by a basic attack. While  attached, it won't be consumed if both Yuumi and her anchor aren't missing health.",
        "blurb": "Innate: Periodically,  Yuumi's next basic attack or ability hit against enemy champions will  heal her. If she is  attached to an ally within a short time, they are healed as well."
      }
    ],
    "Q": [
      {
        "name": "Prowling Projectile",
        "icon": "https://cdn.communitydragon.org/latest/champion/Yuumi/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Yuumi fires an errant missile in the target direction that deals magic damage to the first enemy hit. If the target is a champion, they are also revealed and slowed by 20% for 1 second.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      60,
                      95,
                      130,
                      165,
                      200,
                      235
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
              }
            ]
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Attached Bonus:</span> Yuumi channels for up to 1.35 seconds to steer the missile at a slower speed. After being in flight for the same duration, the missile accelerates in its current direction to deal increased damage and apply a stronger slow against champions that decays to 20% over 2 seconds.</p>",
            "leveling": [
              {
                "attribute": "Increased Damage",
                "modifiers": [
                  {
                    "values": [
                      80,
                      140,
                      200,
                      260,
                      320,
                      380
                    ]
                  },
                  {
                    "values": [
                      30
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Enhanced Slow",
                "modifiers": [
                  {
                    "values": [
                      50,
                      53,
                      56,
                      59,
                      62,
                      65
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
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Best Friend Bonus:</span> Prowling Projectile always applies its enhanced slow against champions and hitting a champion grants her Best Friend bonus magic damage on-hit for 5 seconds, increased by 0% - 75% (based on Anchor's critical strike chance).</p>",
            "leveling": [
              {
                "attribute": "Bonus Magic Damage On-Hit",
                "modifiers": [
                  {
                    "values": [
                      10,
                      12,
                      14,
                      16,
                      18,
                      20
                    ]
                  },
                  {
                    "values": [
                      5
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
          50,
          55,
          60,
          65,
          70,
          75
        ],
        "cooldown": [
          6.5
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "Spell",
        "projectile": "TRUE",
        "notes": "Prowling Projectile is able to turn clockwise or counter-clockwise at a rate of 90° per 0.5 seconds. The missile can turn a maximum of 243° in both directions combined before accelerating.\nProwling Projectile can be buffered 0.5 seconds before it comes off cooldown.\nProwling Projectile is slower when  attached (before the acceleration). If Yuumi unattaches after using it, the missile will go back to its normal speed, without losing the acceleration later. This results in the fastest and longest ranged version of this ability.\nThe  Best Friend's empowerment respects  enchantment redirection.\nThe following table refers for interactions while Yuumi is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nN/A\n\n\nAbilities\n\n Detaching and  Final Chapter interrupt.  Zoomies is usable.\n\n\nMovement\n\nN/A\n\n\nItems\n\nUsable\n\nAll items are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\nAll summoner spells are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
        "speed": "1950 / 850 / 1650",
        "width": "60",
        "castTime": "none",
        "targetRange": "850",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "You and Me!",
        "icon": "https://cdn.communitydragon.org/latest/champion/Yuumi/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> While Yuumi is attached, she is untargetable (except by turrets and inbound projectiles) and casts her abilities from the Anchor's position, empowering them with additional effects.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Yuumi channels for 0.25 seconds, then upon completion dashes to the target allied champion and attaches to them upon arrival, designating them as her Anchor. You and Me! can be recast after 0.5 seconds of the attachment.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast - Change of Plan:</span> Yuumi detaches from her Anchor and dashes to the target allied champion to attach to them, refreshing the recast. She will detach automatically if her Anchor dies or under certain circumstances. If recast without a valid target, Yuumi will detach and dash 250-units in the target direction, placing You and Me! on a 0.25-second cooldown if it is not already on cooldown.</p>"
          },
          {
            "description": "Yuumi will be knocked down by any immobilizing or polymorphing crowd control during the dash."
          },
          {
            "description": "Yuumi starts with a skill point in You and Me! and Prowling Projectile instead has 6 ranks."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          0
        ],
        "targeting": "Unit / Direction",
        "affects": "Allies",
        "notes": "The Best Friend's healing on-hit is affected by Yuumi's heal and shield power.\nYuumi will track the target if they change locations.\nShe will not stop tracking the target until she reaches them, as there is no maximum tracking distance.\nThe 0.5-second cooldown will be incurred whenever Yuumi attaches to an Anchor, whether by the active or the recast.\nIf the target moves 2000 or more units away during the dash, it will be interrupted and You and Me! will be placed on full cooldown.\nYou and Me! does not count as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nYou and Me! does not count as a buff for  Summon Aery.\nYou and Me! initial cast and recast have a  forgiveness radius of 175 units.\nThis behavior can override her direction-targeted  dash to discard any target.\nYuumi can channel the  Eye of the Herald while attached.\nYuumi will automatically detach in the following circumstances:\nWhen her Anchor starts a  Teleport channel.\nAfter the Anchor completes a  Recall channel.\nHer Anchor is sent to the  Realm of Death.\nShe is pulled by  Fate's Call.\nWhen she or her Anchor enters  resurrection.\nIf Yuumi is channeling You and Me! or already dashing towards an ally who enters  resurrection, then she will successfully attach to the resurrecting ally, and she will be able to heal/shield them during it.\nYuumi can dash to targetable  zombie state allies (currently only  Sion's  Glory in Death), but she cannot attach when she reaches them.\nThe same goes for allies channeling  Teleport.\nWhile attached to the Anchor, Yuumi is considered in being at her Anchor's position, regardless of where she is visually placed near them. For example,  turret shots will appear as if they were hitting the Anchor, but in reality they're actually hitting Yuumi.\nHowever, for the purposes of You and Me!, such as casting it or being unattached for other reasons, Yuumi will be in the position where she visually is. For example, when she is in the blue team, dashing to a north-east ally is considerably slower than dashing to a south-west ally.\nHer  monster aggression transfers to the Anchor.\nEnemies gain an assist on Yuumi if they damaged the Anchor.\nYuumi will always be  visible if her Anchor can be seen, and she will always not be visible if her Anchor cannot be seen. These rules apply regardless of  reveal effects and  stealth.\nYuumi will not  vanish if her Anchor does.\nIf Yuumi is on the blue team, she will remain attached on the southwest side; if Yuumi is on the red team, she will remain on the northeast. While channeling  Final Chapter, she will be behind her Anchor.\nThe player's screen will briefly flash red if Yuumi is affected by a  immobilizing or  grounding effect, or if she forcibly detaches from her Anchor.\nThe Anchor's health bar will have a different frame to indicate the attached status:\n\nThe following table refers for interactions while Yuumi is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Teleport  Recall  Hexflash\n\n\nInterrupted by\n\n Flash\n\n\nInterrupted by\n\nDeath Grounding effects Immobilizing effects Cast-inhibiting effects\n\nThe following table refers for interactions while Yuumi is  attached:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nAllowed\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nAll the other item-actives are usable\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
        "speed": "1200 / 1300 / 1400 / 1500 / 1600",
        "castTime": "none",
        "targetRange": "700",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Zoomies",
        "icon": "https://cdn.communitydragon.org/latest/champion/Yuumi/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Yuumi grants herself a shield and gains bonus attack speed for 3 seconds. She also gains 20% bonus movement speed while the shield holds.</p>",
            "leveling": [
              {
                "attribute": "Shield",
                "modifiers": [
                  {
                    "values": [
                      65,
                      90,
                      115,
                      140,
                      165
                    ]
                  },
                  {
                    "values": [
                      30
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Bonus Attack Speed",
                "modifiers": [
                  {
                    "values": [
                      25,
                      27.5,
                      30,
                      32.5,
                      35
                    ],
                    "units": [
                      "%"
                    ]
                  },
                  {
                    "values": [
                      8
                    ],
                    "units": [
                      "% per 100 AP"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Attached Bonus:</span> Zoomies affects the Anchor instead of Yuumi and additionally restores mana to the Anchor, increased by 0% - 100% (based on Anchor's missing mana).</p>",
            "leveling": [
              {
                "attribute": "Minimum Mana Restored",
                "modifiers": [
                  {
                    "values": [
                      20,
                      24,
                      28,
                      32,
                      36
                    ]
                  }
                ]
              },
              {
                "attribute": "Maximum Mana Restored",
                "modifiers": [
                  {
                    "values": [
                      40,
                      48,
                      56,
                      64,
                      72
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "cost": [
          80,
          90,
          100,
          110,
          120
        ],
        "cooldown": [
          10
        ],
        "targeting": "Auto",
        "affects": "Self / Allies",
        "resource": "Mana",
        "notes": "The Anchor's mana bar will briefly become a light blue upon restoring the mana.",
        "blurb": "Active:  Yuumi  shields herself and gains  bonus movement speed and  bonus attack speed for a short time.",
        "castTime": "none"
      }
    ],
    "R": [
      {
        "name": "Final Chapter",
        "icon": "https://cdn.communitydragon.org/latest/champion/Yuumi/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Yuumi and Book channel for up to 3.5 seconds, during which they are ghosted, to launch 5 magical waves in the target direction.</p>"
          },
          {
            "description": "Allied champions hit by the waves are healed, with each heal instance beyond maximum health being converted into a shield that lasts for 1.5 seconds plus the remaining channel duration instead.",
            "leveling": [
              {
                "attribute": "Heal per Hit",
                "modifiers": [
                  {
                    "values": [
                      30,
                      40,
                      50
                    ]
                  },
                  {
                    "values": [
                      15
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Total Heal",
                "modifiers": [
                  {
                    "values": [
                      150,
                      200,
                      250
                    ]
                  },
                  {
                    "values": [
                      75
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
            "description": "Enemies struck by the waves take magic damage and are slowed by 10% for 1.25 seconds. The slow stacks and refreshes on subsequent hits, up to a total strength of 50%. Subsequent waves against enemies hit deal 25% damage.",
            "leveling": [
              {
                "attribute": "Magic Damage per Hit",
                "modifiers": [
                  {
                    "values": [
                      75,
                      125,
                      175
                    ]
                  },
                  {
                    "values": [
                      25
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Reduced Damage per Hit",
                "modifiers": [
                  {
                    "values": [
                      18.75,
                      31.25,
                      43.75
                    ]
                  },
                  {
                    "values": [
                      6.25
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
                      150,
                      250,
                      350
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
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Attached Bonus:</span> Yuumi can steer the direction of the waves if initially cast while attached. Detaching causes her to lose this bonus for the duration. Additionally, Feline Friendship can trigger from also hitting allied champions.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Best Friend Bonus:</span> Final Chapter's heal to the Best Friend is increased by 30%.</p>",
            "leveling": [
              {
                "attribute": "Best Friend Heal per Hit",
                "modifiers": [
                  {
                    "values": [
                      39,
                      52,
                      65
                    ]
                  },
                  {
                    "values": [
                      19.5
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Best Friend Total Heal",
                "modifiers": [
                  {
                    "values": [
                      195,
                      260,
                      325
                    ]
                  },
                  {
                    "values": [
                      97.5
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
          120,
          110,
          100
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "special",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "projectile": "TRUE",
        "notes": "The  heal on Yuumi's anchor is reapplied each time you hit another ally.(bug)\nYuumi becomes  ghosted for the channel and, if not presently attached with  You and Me!, will remain ghosted until she attaches and detaches again.(bug)\nWhile  attached,  Cloud Dragon Soul will not activate until Yuumi detaches.\n Spell shield will only block a single instance of damage.\nYuumi's facing direction during the channel is considered to be in Final Chapter's target direction.\nUsing  Hexflash during the channel will always cause Yuumi to  blink in the target direction of Final Chapter.(bug)\n Feline Friendship will not be triggered if Yuumi and her anchor aren't missing health after the wave hit.\nThe following table refers for interactions while Yuumi is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Prowling Projectile is disabled.  You and Me! and  Zoomies are usable.\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\nAll the other item-actives are usable\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash  Teleport  Hexflash  Mark  Dash\n\n\nDisabled\n\n Recall\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
        "speed": "3000",
        "width": "450",
        "castTime": "none",
        "targetRange": "1100",
        "maxCharges": -1
      }
    ]
  },
  "lore": "A magical cat from Bandle City, Yuumi was once the familiar of a yordle enchantress, Norra. When her master mysteriously disappeared, Yuumi became the Keeper of Norra's sentient Book of Thresholds, traveling through portals in its pages to search for her. Yearning for affection, Yuumi seeks friendly companions to partner with on her journey, protecting them with luminous shields and fierce resolve. While Book strives to keep her on task, Yuumi is often drawn to worldly comforts, such as naps and fish. In the end, however, she always returns to her quest to find her friend."
}
    export default champion