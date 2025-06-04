 export const Viego: Champion =  {
  "id": 234,
  "key": "Viego",
  "name": "Viego",
  "title": "The Ruined King",
  "fullName": "Viego Santiarul Molach vol Kalah Heigaari",
  "resource": "None",
  "attackType": "Melee",
  "stats": {
    "health": {
      "flat": 630,
      "perLevel": 109
    },
    "healthRegen": {
      "flat": 7,
      "perLevel": 0.7
    },
    "armor": {
      "flat": 34,
      "perLevel": 4.6
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 57,
      "perLevel": 3.5
    },
    "movespeed": {
      "flat": 345
    },
    "acquisitionRadius": {
      "flat": 775
    },
    "selectionRadius": {
      "flat": 125
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
      "perLevel": 2.5
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
      "flat": -0.136
    },
    "attackRange": {
      "flat": 200
    }
  },
  "positions": [
    "Jungle"
  ],
  "roles": [
    "Assassin",
    "Fighter",
    "Skirmisher"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 2,
    "mobility": 2,
    "utility": 1,
    "abilityReliance": 20,
    "difficulty": 3
  },
  "abilities": {
    "P": [
      {
        "name": "Sovereign's Domination",
        "icon": "https://cdn.communitydragon.org/latest/champion/Viego/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Whenever Viego scores an enemy champion takedown while alive and within 3 seconds of damaging them, a Mist Wraith spawns from that champion's corpse for 8 seconds. Viego can basic attack a Mist Wraith to consume it: causing him to blink to its location after winding up for 1 second, during which he is untargetable (except to turrets) and unable to act. He then gains Possession and heals himself for 2% (+ 2.5% per 100 bonus AD) (+ 2% per 100 AP) (+ 5% per 100% bonus attack speed) of the target's maximum health.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Possession:</span> For 10 seconds, Viego assumes the enemy champion's form and gains their basic attacks, basic abilities, items, and base stats (based on Viego's level). He also gains a free cast of Heartbreaker, which is initially placed on a 1.5-second cooldown, and 10% bonus movement speed while facing enemy champions within 2500 units.</p>"
          },
          {
            "description": "Viego cannot use item actives, consumable items, nor the shop during Possession. Casting Heartbreaker or attacking a Mist Wraith ends Possession immediately."
          },
          {
            "description": "Viego will preserve his current health percentage between transformations."
          }
        ],
        "targeting": "Passive",
        "notes": "Viego will copy the possessed champion's ability ranks.\nViego cannot level up their abilities with his available skill points.\nMist Wraiths will expire when Viego dies, and they will not expire while he is winding up on them.\nViego gains the bonus movement speed during possession even while moving towards nearby enemy champions that are  untargetable.\nFinishing the possessing attack against a Mist Wraith kills it, rewarding Viego an extra  3 as he becomes the target champion.\nThe wind up's  untargetability does not  destroy in-flight  projectiles from  turrets.\nThe possessed champion's abilities do not cost any  mana or  energy even if that specific champion normally uses either as a casting resource.\nAlternative resources, such as  Fury,  Flow, or  Health, will still be utilized.\nThe current cooldowns of Viego's abilities will not be reset between transformations.\nThose of the possessed champion's abilities will be reset between transformations.\nThis does not apply to the following long-cooldown abilities. Viego specifically tracks their proper cooldowns which can be seen via a buff in his hotbar for each when applicable.\n Anivia's  Rebirth\n Azir's  Shurima's Legacy\n Zac's  Cell Division\nThe passive cooldowns of items are shared between Viego's and the possessed champion's.\nThis does not apply to Lifeline items.(note)\nOnce possession ends, Viego returns to his normal state and certain effects gained from the possessed champion's abilities will be immediately removed.\nSome buffs will be kept and some buffs will be lost.\nViego will almost always keep  shields and  spell shields.\nPassive effects will be lost by default, as Viego no longer has their abilities.\n Channeled abilities maintained will be interrupted.\nToggled abilities will be automatically toggled off.\nWhen taking possession of  Kled, Viego's current health percentage will become Kled's health percentage, while  Skaarl's health percentage will be the same as when he  remounts.\nOnce possession ends, Viego only keeps  Kled's health percentage as his current.\nViego retains his own summoner spells, trinket item, and runes during possession.\nMist Wraiths will still spawn while Viego is in a zombie state.\nSovereign's Domination will not summon a Mist Wraith from  clones.\nThe possession will not expire while Viego is in a  zombie state.\nWhile in a zombie state,  Heartbreaker is disabled.\nIf Viego enters a zombie state while winding up on a Mist Wraith, the possession will still last its normal duration.(note)\nThe possession will not end prematurely if Viego enters  resurrection.\nThe possession will acquire the basic abilities of shapeshifting champions (e.g.  Elise's  Spider Form / Human Form,  Jayce's  Transform Mercury Cannon /  Transform Mercury Hammer, and  Nidalee's  Aspect of the Cougar) based on which form they died as.\nMist Wraiths are considered  clones and can only be targeted by Viego.\nIf Viego possesses an enemy champion who owns  Dark Seal or  Mejai's Soulstealer, he will gain their Glory stacks for the possession.\nAs  Cull tracks its progress for each player even if they do not possess the item at the time, Viego may discharge stacks for the benefit of  1 each per  minion kill, and if Viego killed 100 minions possessing  Cull, no matter whether bought himself or acquired via a possessed champion's inventory, he receives the  350 payout and can no longer discharge stacks.\nThis entire interaction does not interact with the state of the  Cull stacks of the enemy.\nThe stacks shown on the item in the inventory and scoreboard may not update properly, however.\nIf Viego possesses an enemy champion who owns  Tear of the Goddess, the stacks it has will be transferred to his  Tear of the Goddess if he owns one.\nIf Viego possesses an enemy  Bel'Veth, his attack speed cap will be modified to 90 permanently.(bug)\nIf Viego possesses an enemy  K/DA Evelynn, he will still hear  Demon Shade's music upon discarding the possession if he does it while active.(bug)\nIf Viego targets a Mist Wraith while already  untargetable he will become targetable once again during the cast time.(bug)\nIf Viego possesses an enemy on  Howling Abyss, he will be able to use the shop upon returning to the fountain and discarding the possession.(bug)\nIf Viego posesses an enemy  Naafiri, he will keep her  Packmates upon discarding the possession.(bug)\nThe following table refers for interactions while Viego is winding up on a Mist Wraith:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
        "blurb": "Innate: Scoring an enemy champion  takedown will spawn a Mist Wraith for a period.  Viego can consume the Mist Wraith to briefly become  untargetable and  blink to it, which  heals him for a portion of the target's maximum health and grants Possession."
      }
    ],
    "Q": [
      {
        "name": "Blade of the Ruined King",
        "icon": "https://cdn.communitydragon.org/latest/champion/Viego/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Viego's basic attacks are empowered to deal bonus physical damage on-hit. This damage is affected by critical strike modifiers, has a minimum threshold and is capped at 80 against monsters.</p>",
            "leveling": [
              {
                "attribute": "Bonus Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      2,
                      3,
                      4,
                      5,
                      6
                    ],
                    "units": [
                      "% of target's current health"
                    ]
                  }
                ]
              },
              {
                "attribute": "Minimum Bonus Damage",
                "modifiers": [
                  {
                    "values": [
                      10,
                      15,
                      20,
                      25,
                      30
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Additionally, his damaging abilities apply a mark to enemies hit for 4 seconds. Viego's next basic attack against a marked target is empowered to consume the mark on-hit to strike a second time, dealing 20% AD (+ 15% AP) physical damage; and also healing himself for 135% of the post-mitigation damage dealt, modified to 145% against monsters and 50% against minions."
          },
          {
            "description": "The second strike applies on-hit effects and can critically strike for (175% + 40%) damage."
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Viego stabs in a line in the target direction that deals physical damage to enemies hit, plus 15 bonus physical damage against monsters. The stab's damage is increased by 0% - 100% (based on critical strike chance).</p>",
            "leveling": [
              {
                "attribute": "Minimum Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      15,
                      30,
                      45,
                      60,
                      75
                    ]
                  },
                  {
                    "values": [
                      70
                    ],
                    "units": [
                      "% AD"
                    ]
                  }
                ]
              },
              {
                "attribute": "Maximum Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      30,
                      60,
                      90,
                      120,
                      150
                    ]
                  },
                  {
                    "values": [
                      140
                    ],
                    "units": [
                      "% AD"
                    ]
                  }
                ]
              },
              {
                "attribute": "Minimum Monster Damage",
                "modifiers": [
                  {
                    "values": [
                      30,
                      45,
                      60,
                      75,
                      90
                    ]
                  },
                  {
                    "values": [
                      70
                    ],
                    "units": [
                      "% AD"
                    ]
                  }
                ]
              },
              {
                "attribute": "Maximum Monster Damage",
                "modifiers": [
                  {
                    "values": [
                      60,
                      90,
                      120,
                      150,
                      180
                    ]
                  },
                  {
                    "values": [
                      140
                    ],
                    "units": [
                      "% AD"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Blade of the Ruined King's passive remains under Possession, and while transformed, the second strike is instead converted to bonus damage on-hit which no longer applies on-hit effects but can still critically strike (based on the Possession's stats, abiilities and / or item effects)."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          5,
          4.5,
          4,
          3.5,
          3
        ],
        "targeting": "Direction",
        "affects": "Self, Enemies",
        "spellshieldable": "true",
        "damageType": "Physical damage",
        "spellEffects": "special",
        "projectile": "FALSE",
        "notes": "The mark will not be applied to the primary target struck by  Heartbreaker, but it can triggered from it.\nThe second strike rolls  critical strike chance independently from the primary attack.\nThe ability's cast time respects the attack speed floor and cap.\nApplies  area damage for the thrust,  basic damage for the second strike, and  proc damage for the bonus damage on-hit.\nThis ability will cast from wherever the caster is at the end of the cast time.\nViego will not perform the second strike if the first attack was  dodged,  blocked, and  missed.\nIf the second strike hits a dead unit, Viego will still  heal based on the post-mitigation damage that he would deal with it.\nThe attacks do not deal the bonus damage against structures.",
        "blurb": "Passive:  Viego's basic attacks deal bonus physical damage based on the target's current health. Additionally, Viego's damaging abilities apply a mark to enemies hit. His next basic attack will consume the mark to strike twice, dealing additional modified physical damage and  healing him.",
        "width": "125",
        "castTime": "140% of Viego's windup time (0.35 at base attack speed)",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Spectral Maw",
        "icon": "https://cdn.communitydragon.org/latest/champion/Viego/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Viego charges while being slowed by 10% for up to 3 seconds to increase Spectral Maw's missile range and stun duration over the first second of the channel.</p>"
          },
          {
            "description": "Spectral Maw can be recast within the duration. If the charge completes without reactivation, Spectral Maw is cancelled and placed on full cooldown. If the charge is interrupted, it will be placed on a 3-second cooldown."
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Viego hurls a blast of mist in the target direction and dashes a fixed distance in the same direction, though not through terrain. The mist deals magic damage to the first enemy hit and stuns them for 0.25 - 1.25 (based on channel time) seconds.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      80,
                      135,
                      190,
                      245,
                      300
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
          },
          {
            "description": "Spectral Maw resets Viego's basic attack timer. Viego can cast any of his abilities during the dash."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          8
        ],
        "targeting": "Auto / Direction",
        "affects": "Self, Enemies",
        "spellshieldable": "true",
        "damageType": "Magic damage",
        "spellEffects": "spell",
        "projectile": "TRUE",
        "notes": "The reduced cooldown from the charge will not occur if Spectral Maw's cooldown is already below 3 seconds.\nThe following table refers for interactions while Viego is  channeling:\n\n\nType\n\nCharge channel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Harrowed Path is usable.  Blade of the Ruined King and  Heartbreaker are disabled.\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled, but can still use trinkets.\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall\n\n\nInterrupted by\n\n Hexflash (Recasts)\n\n\nInterrupted by\n\nDeath Grounding effects Immobilizing effects Cast-inhibiting effects",
        "speed": "1000 / 1300",
        "width": "120",
        "castTime": "none",
        "targetRange": "300 /  500 : 900 (based on channel time)",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Harrowed Path",
        "icon": "https://cdn.communitydragon.org/latest/champion/Viego/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Viego sends a spectre in the target direction that creates a trail of mist in its wake which lasts 8 seconds. If it hits terrain, the mist will spread further around either side.</p>"
          },
          {
            "description": "While inside the mist, Viego gains bonus attack speed. If he does not attack or cast abilities, he also gains bonus movement speed and camouflage.",
            "leveling": [
              {
                "attribute": "Bonus Attack Speed",
                "modifiers": [
                  {
                    "values": [
                      30,
                      35,
                      40,
                      45,
                      50
                    ],
                    "units": [
                      "%"
                    ]
                  }
                ]
              },
              {
                "attribute": "Bonus Movement Speed",
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
                      4
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
            "description": "Declaring a basic attack or casting an ability will break the camouflage and remove the bonus movement speed, preventing Viego from gaining them again for 1 second, increased to 2 seconds if he attacked a large monster. This duration refreshes on subsequent attacks and ability casts."
          },
          {
            "description": "Harrowed Path can be cast during any of Viego's abilities. Viego cannot gain the camouflage nor bonus movement speed from Harrowed Path for 1 second if he casted it during Spectral Maw's channel or started the channel while the mist was active."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          14,
          12,
          10,
          8,
          6
        ],
        "targeting": "Direction",
        "affects": "Self",
        "projectile": "FALSE",
        "notes": "Spectral Maw's recast does not incur the 1 second cooldown for regaining the stealth and instead prevents the stealth from being gained until the dash ends, resetting the cooldown if it is active.\nThe cooldown is not reset if it was incurred by basic attacking a large monster, but is however reset from it being incurred by  Spectral Maw's channel.\nThe bonus movement speed and camouflage are granted by the same buff.\nViego will enter camouflage even while  Recalling.\nViego can cast Harrowed Path during the cast time of any ability or spell.\nRanking up Harrowed Path while the effect is already active will still immediately improve the bonuses it grants.\nHarrowed Path can interact with player-generated terrain.\nUsing a basic attack breaks the stealth at the start of the attack windup.\nThe stealth regain timer is refreshed from basic attacks at the start of their attack windup.\nViego can benefit from an enemy's Harrowed Path.\nPENDING FOR TEST:: Enemy's Harrowed Path grant Viego his ability's bonus or the enemy's.",
        "blurb": "Active:  Viego sends a spectre in the target direction that creates a trail of mist in its wake for a period. If it hits terrain, the mist is spread further around either side.",
        "speed": "1600 / 1200",
        "width": "500 / 500",
        "castTime": "none",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Heartbreaker",
        "icon": "https://cdn.communitydragon.org/latest/champion/Viego/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Viego gains displacement immunity over the cast time, then blinks to the target location. Upon arrival, he strikes the most wounded enemy champion nearby, dealing physical damage, slowing them by 99% for 0.25 seconds, and applying on-hit effects. Other nearby enemies are knocked back up to 400-units away based on proximity, though not through terrain.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      12,
                      16,
                      20
                    ],
                    "units": [
                      "%  of target's missing health"
                    ]
                  },
                  {
                    "values": [
                      5
                    ],
                    "units": [
                      "% per 100 bonus AD"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "All targets hit are dealt 120% - 240% (based on critical strike chance) AD physical damage."
          },
          {
            "description": "If a Possession is discarded, Heartbreaker will be placed on a 1.5-second cooldown if it is not already on cooldown. Heartbreaker will cast at max range if cast beyond that."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          120,
          100,
          80
        ],
        "targeting": "Location",
        "affects": "Self, Enemies",
        "spellshieldable": "true",
        "damageType": "Physical damage",
        "spellEffects": "special",
        "notes": "Heartbreaker will cast at the edge of its range if the target location is further beyond.\nHeartbreaker will cast at maximum range from the end of  Spectral Maw's dash if it is cast during the dash.\nThe knockback speed is 1000 units per second. The airborne is removed as soon as the displacement ends.\nThe maximum airborne duration is therefore 0.4 seconds. The minimum is 0.1 seconds.\nTo the struck champion deals  basic damage, but also triggers spell effects by also being tagged as  spell damage; to all other enemies, deals  area damage.\nViego will enter a 0.25-second cast time if he strikes an enemy champion.\nAfter this cast time, he will automatically receive an attack command against that enemy. Previous movement inputs from the player are ignored.(bug)\nHeartbreaker's strike to the champion can be  dodged and  blocked, but not  missed.\nViego will be ordered to basic attack the primary target afterwards.",
        "blurb": "Active:  Viego  blinks with  displacement immunity to the target location and attacks the most wounded enemy champion nearby, which briefly  slows them, applies  on-hit effects, and deals bonus physical damage by a portion of their missing health.",
        "castTime": "0.5",
        "effectRadius": "300",
        "targetRange": "500",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Once ruler of a long-lost kingdom, Viego perished over a thousand years ago when his attempt to bring his wife back from the dead triggered the magical catastrophe known as the Ruination. Transformed into a powerful, unliving specter tortured by an obsessive longing for his centuries-dead queen, Viego now stands as the Ruined King, controlling the deadly Harrowings as he scours Runeterra for anything that might one day restore her, and destroying all in his path as the Black Mist pours endlessly from his cruel, broken heart."
}
