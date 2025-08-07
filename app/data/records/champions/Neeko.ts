// Updated Patch 25.15 - 08/06/2025 11:23:41 PM CDT

const champion: Champion =  {
  "id": 518,
  "key": "Neeko",
  "name": "Neeko",
  "title": "the Curious Chameleon",
  "resource": "Mana",
  "attackType": "Ranged",
  "stats": {
    "health": {
      "flat": 610,
      "perLevel": 104
    },
    "healthRegen": {
      "flat": 7.5,
      "perLevel": 0.75
    },
    "mana": {
      "flat": 450,
      "perLevel": 30
    },
    "manaRegen": {
      "flat": 7,
      "perLevel": 0.7
    },
    "armor": {
      "flat": 21,
      "perLevel": 5.2
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 48,
      "perLevel": 2.5
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
      "flat": 0.625,
      "perLevel": 3.5
    },
    "attackSpeedRatio": {
      "flat": 0.67
    },
    "attackCastTime": {
      "flat": 0.31
    },
    "attackTotalTime": {
      "flat": 1.55
    },
    "attackRange": {
      "flat": 550
    }
  },
  "positions": [
    "Middle",
    "Support"
  ],
  "roles": [
    "Burst",
    "Catcher",
    "Mage",
    "Support"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 3,
    "mobility": 1,
    "utility": 1,
    "abilityReliance": 80,
    "difficulty": 1
  },
  "abilities": {
    "P": [
      {
        "name": "Inherent Glamour",
        "icon": "https://cdn.communitydragon.org/latest/champion/Neeko/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Neeko has a collection of disguises to take on the appearance of allied champions. She can choose a new champion to switch her disguise or select herself to deactivate her disguise, placing Inherent Glamour on a 0.5-second cooldown. Taking damage from a champion or turret puts Inherent Glamour on a 2-second cooldown.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Standing by the nearest visible allied or neutral non-champion non-structure unit while not disguised will gather its Sho'Ma over 2 seconds, adding its disguise to the collection. Activating this disguise places Inherent Glamour on a 1-second cooldown. Neeko can collect only one Sho'Ma, but can discard or consume it. She can store Sho'Ma from the following units, so long as they are targetable:</span></p>\n\nNon-epic monsters\n Minions\n Traps\n Wards\n Pets\nJungle plants"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">While disguised, Neeko can use basic attacks while keeping her form. Her disguise breaks if she:</span></p>\n\nuses a damaging ability, summoner spell, or item active\nis immobilized\ntakes damage lethal to the disguised form\nis in the enemy spawn platform\nbegins a channel other than Recall and Empowered Recall\ndeals damage to a structure with a non-champion disguise form\n dies"
          },
          {
            "description": "Inherent Glamour's disguise is not deactivated from Pop Blossom until after 0.5 seconds of its cast. Neeko cannot activate Inherent Glamour while she is unable to cast abilities."
          }
        ],
        "targeting": "Auto",
        "affects": "Self",
        "notes": "Before disguising\nNeeko's disguise collection is offered through a special menu in the HUD. The menu holds up to 5 slots, based on the number of allied  champions. The player can select a disguise by  clicking on their portrait or via the Champion Specific Interaction hotkeys (default: Shift+F1:F5). The Sho'Ma disguise can be discarded by clicking on the 'x' next to the disguise's icon or via the sixth Champion Specific Interaction hotkey (default: Shift+F6).\nThe slot containing her Sho'Ma disguise will be third in the HUD if there are two or more allied champions in the game, otherwise it will be the rightmost slot. The remaining slots will contain allied champion disguises in order of their appearance in the pre-game Loading Screen.\nThe progress of gathering Sho'Ma from a unit will not be lost even if Neeko stores Sho'Ma from a different unit.\nInherent Glamour's cooldown only prevents Neeko from activating disguises; she can still store and remove Sho'Ma while the passive is on cooldown.\nNeeko cannot store Sho'Ma from  Dark Procession and  Powder Keg.\nStoring Sho'Ma from  Demacian Standard(bug) will require Neeko to begin storing Sho'Ma from another unit, then move into proximity of the flag.\nAfter successfully storing Sho'Ma, Neeko will celebrate by clapping.\nThis animation is forced and will override any other animation except  Pop Blossom's landing animation.\nIf Neeko attempts to activate a disguise while near the  trap,  ward, or jungle plant she stored Sho'Ma from, she will  leap to that unit's exact position over 1 second, though not through terrain, and then become disguised. If she does so for a monster and is near its respective jungle camp, she will leap to that monster's usual position in the camp.\nIf the monster is any  Krug, she will leap to the large Krug's position in the camp on the blue side or medium Krug's position on the red side.\nIf the monster is  Rift Scuttler or a lesser  Raptor, she will leap to its position at the time of storing Sho'Ma instead.(bug)\nThe leap is interrupted if Neeko attacks, moves, or casts certain abilities and spells.\nThe disguise will still activate after 1 second if the leap is interrupted by moving or attacking.\nNeeko cannot gather Sho'Ma while leaping.\nShe will fail to activate the disguise after the leap if she is affected by the same conditions that would break a disguise.\nInherent Glamour's leap has a number of interactions that set it apart from other  lunges:\nInherent Glamour's leap does not interact with  Voltaic Cyclosword's Galvanize passive;\nInherent Glamour's leap does not override the forced movement inflicted by  airborne effects;\nThe path of Inherent Glamour's leap will be similar to the path Neeko would take if ordered to move to the unit's position instead.\nNeeko will copy the unit's facing direction when disguising after leaping.\nIf Neeko does not arrive at the unit's position while leaping, she will continue moving toward it.\nAlthough  channeling will break Neeko's disguise, she can still disguise and leap while channeling.\nWhile disguised\nNeeko will copy aesthetics as well as superficial mechanical statistics. She will fake a number of readings:\nHealth bar (original's current amount becomes her apparent maximum)\nWhile disguised as a  lane minion, Neeko will take bonus physical damage from minions based on the disguise's form's health.\nShe will take damage based on her own health from all other sources.\nSecondary resource - e.g. mana, energy or none at all (original's current amount becomes her apparent maximum)\nIf disguised as a  Siege  Minion, Neeko cannot see her mana bar.(bug)\nStats\nBuffs and debuffs with their respective icons and VFX/SFX (there are exceptions)\nNeeko sees the buffs that are actually applied to her, while enemies see the disguise's form's buffs.\nThough Neeko can see the buffs, she cannot read their descriptions by hovering their icons.(bug)\nAfter gaining a charge of Shared Riches ( World Atlas,  Runic Compass), Neeko is unable to see the charge count until she consumes a charge.(bug)\nLevel\nKill feed icon\nMinimap icon\nA number of attributes she actually adopts are:\nBase movement speed if it is lower than Neeko's, capped at a minimum of 200.\nDisguising as  Elise while she is in  spider form will set Neeko's base movement speed to 315 instead.(bug)\nClassification of the unit (e.g.  melee,  siege minion; large, small monster; ward)\nNeeko is never considered a minion for the purposes of  Reinforced Armor.\nBase range type of the unit ( melee,  ranged)\nBase attack speed and attack ratio\nWhen disguising as a non-champion, Neeko will instead adopt their total attack speed, capped at a maximum of 2.0.\n Basic attack damage type\nFor example, many  pets deal  ability damage instead of  basic damage with their basic attacks.\nHowever,  critical strikes from non-champions will always deal basic damage.\nThe  projectile or non-projectile quality of their attack\nWhen  striking critically as a non-champion with a projectile attack, the attack projectile is invisible and hits near-instantly, but can still be intercepted by  Wind Wall and similar abilities.\n Base attack range of the unit's base form\nFor example, in the case of  Gnar, she will adopt 175 attack range.\nSize (including size modifiers and base unit size) at the time of disguising\nVoice lines\nBase unit model, regardless of current form\nThe exception are Voidborn forms of  Blue Sentinel and  Red Brambleback, whose models Neeko does adopt\nDefault transformation toggle (non-innate)\nCharacter interactions (jokes, taunts, dances, laughs, toggle effects), as well as their  Recall animation\nNeeko can copy  Samira's taunt animation but she will not actually throw the coin via the  Taunt ability.\nWhile disguised as a non-champion, Neeko will play her laugh sound when attempting to laugh.\nEditor's note: This is an intentional feature, requested by fans when Neeko's V13.9 gameplay update was released.\nWhile disguised as a  Packmate, she will play  Naafiri's laugh instead.\nWhile disguised as a jungle plant or  trap, Neeko's facing direction visually appears to not change while moving.\nNeeko's real facing direction is, however, affected by movement for the purposes of direction-facing effects (e.g.  Petrifying Gaze,  Backstab).\nDisguising as a  monster will not cause Neeko's attack windup to be  uncancellable.\nWhile disguised as a unit not targetable by  turrets (e.g. wards, traps,  Kalista's  Sentinel), Neeko will not be targeted by turrets until she damages a champion.\nDisguising as a unit not targetable by turrets will not drop turret aggro.\nWhile disguised as a non-champion, Neeko cannot be affected by  Jhin's  Deadly Flourish,  Rammus'  Powerball's negative effects and  Zilean's  Time Bomb.(bug)\nWhile disguised as a non-champion, Neeko cannot be tethered by  Taric's  Bastion. If she was tethered before changing, the tether will break as soon as she changes into a non-champion and Taric's spells can not be mimicked onto her. Once she changes into a champion the tether will automatically come back.\n Requiem does not affect Neeko while disguised as a non-champion if  Karthus is casting it during  Death Defiled, but does otherwise.(bug)\nWhile disguised as a non-champion, Neeko will break  Mountain Dragon Soul's shield.\nWhile disguised as a non-champion, enemy  Sundered Sky's Lightshield Strike indicator will not be displayed on Neeko, but she will still be affected by the empowered attack.\nAbilities and item actives with champion  targeting forgiveness (e.g.  K'Sante's  All Out,  Karma's  Inspire,  Kindred's  Mounting Dread) can be cast on Neeko even while she is disguised as a non-champion.(bug)\nWhile disguised, Neeko cannot be targeted by  Smite.(bug)\nWhile disguised as a monster, Neeko will not receive damage from  Unleashed Smite and  Primal Smite.(bug)\nWhile disguised as  Daisy, Neeko's  basic attack damage will be attributed to  Ivern, allowing Neeko to attack turrets without breaking the disguise, as well as apply his  on-hit effects instead of her own.(bug)\nWhile disguised as a minion, Neeko will take bonus damage from other minions equal to the ratio of her minion disguise's current health, rather than her own current health.\nWhile disguised as a non-champion, Neeko cannot receive  Crest of Insight and  Crest of Cinders by killing  Blue Sentinel and  Red Brambleback, but can receive it once they are Voidborn.(bug)\nWhile disguised as  Lulu, Neeko will spawn a  Pix with the same skin ID as Neeko's.\nFor example,  Star Guardian Neeko (skin 10) will always produce a  Pool Party Pix with a Ruby Chroma (skin 10).\nWhile disguised as  Bel'Veth, Neeko's basic attacks always deal 0 damage.(bug)\nWhile disguised as  Elise's  Spiderlings or  Annie's  Tibbers, Neeko's basic attacks will only deal 100% bonus AD physical damage.(bug)\nIf Neeko has no bonus AD, she will deal no damage.\nHowever, Neeko's  critical strikes while disguised will deal 175% total AD physical damage as expected.\nWhile disguised as  Bel'Veth's  Void Remoras,  Zyra's  Thorn Spitters or  Vine Lashers, Neeko cannot issue a basic attack command.\nNeeko will benefit from  Mr. Kled's Wild Ride even while disguised as a  lane minion or  Voidmite.(bug)\nPENDING FOR TEST: is the same true for the clone?\nWhile disguised as a non-champion, Neeko cannot purchase  Runaan's Hurricane regardless of her current range type.(bug)\nNeeko cannot purchase  Elixir of Iron,  Elixir of Sorcery ,  Elixir of Wrath,  Farsight Alteration while disguised as a unit with a lower level than required.\nNeeko will fail to purchase these items when disguising as a unit of required level if her real level is lower than required.\nBreaking the disguise\nInherent Glamour's disguise is broken by the following actions:\nCasting  Blooming Burst or  Tangle-Barbs.\nCasting  Pop Blossom will not break the disguise immediately, but after a delay.\nUsing  Exhaust,  Ignite,  Smite,  Unleashed Smite,  Primal Smite, or  Mark.\nUsing  Dash will not break the disguise.\nUsing active item effects that deal  Ability damage (e.g.  Hextech Rocketbelt,  Redemption, and  Tiamat), or apply  crowd control ( Randuin's Omen).\nWhile disguised as a champion(note), dealing ability damage with abilities or items will also break the disguise.\nDamage dealt by  Voidmites summoned by Neeko will be attributed to Neeko and will break the disguise if the disguise's form is a non-champion.(note)\nThis includes Voidmites summoned by Rift Herald Rodeo if Rift Herald was  attached to Neeko during the charge.",
        "blurb": "Innate:  Neeko has a collection of disguises to take on the appearance of allied champions. She can choose a new champion to switch her disguise or select herself to deactivate her disguise. Standing near a non-champion unit will collect its Sho'Ma, adding its disguise to the collection. She can collect only one Sho'Ma, but can discard or consume it."
      }
    ],
    "Q": [
      {
        "name": "Blooming Burst",
        "icon": "https://cdn.communitydragon.org/latest/champion/Neeko/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Neeko tosses a seed that blooms at the target location, dealing magic damage to nearby enemies.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      60,
                      110,
                      160,
                      210,
                      260
                    ]
                  },
                  {
                    "values": [
                      60
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
            "description": "If the bloom kills an enemy or hits a champion or large monster, it will bloom again after 0.75 seconds to deal magic damage. This may occur up to 2 times per cast.",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      35,
                      60,
                      85,
                      110,
                      135
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
                "attribute": "Total Maximum Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      130,
                      230,
                      330,
                      430,
                      530
                    ]
                  },
                  {
                    "values": [
                      110
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
            "description": "Each bloom deals bonus magic damage against monsters.",
            "leveling": [
              {
                "attribute": "Bonus Monster Damage",
                "modifiers": [
                  {
                    "values": [
                      35,
                      50,
                      65,
                      80,
                      95
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "cost": [
          50,
          60,
          70,
          80,
          90
        ],
        "cooldown": [
          9,
          8.5,
          8,
          7.5,
          7
        ],
        "targeting": "Location",
        "affects": "Enemies",
        "spellshieldable": "special",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "projectile": "TRUE",
        "notes": "Spell shield blocks an instance of damage but does not prevent subsequent Blooms.",
        "blurb": "Active:  Neeko tosses a seed that blooms at the target location, dealing magic damage to nearby enemies.",
        "castTime": "0.25",
        "effectRadius": "250",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Shapesplitter",
        "icon": "https://cdn.communitydragon.org/latest/champion/Neeko/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Neeko's basic attacks on-hit generate a stack of Shapesplitter, which refreshes on subsequent attacks and stacks up to 2 times. At 2 stacks, her next basic attack on-attack consumes them all to become non-projectile, deal bonus magic damage and grant her bonus movement speed for 1 second. This attack deals 75 bonus magic damage against monsters.</p>",
            "leveling": [
              {
                "attribute": "Bonus Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      30,
                      65,
                      100,
                      135,
                      170
                    ]
                  },
                  {
                    "values": [
                      60
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Bonus Movement Speed",
                "modifiers": [
                  {
                    "values": [
                      10,
                      17.5,
                      25,
                      32.5,
                      40
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
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Neeko creates a clone of her current form, after which they both instantly become invisible for 0.5 seconds and gain bonus movement speed for 3 seconds. Shapesplitter can be recast at any time while the clone is active.</p>",
            "leveling": [
              {
                "attribute": "Bonus Movement Speed",
                "modifiers": [
                  {
                    "values": [
                      20,
                      25,
                      30,
                      35,
                      40
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
            "description": "The clone lasts for 3 seconds, starts running a fixed distance in the target direction, and is untargetable to allies and for the first 0.5 seconds of its lifespan to enemies. Once the clone takes damage, it will disappear prematurely, after 0.5 seconds.Additionally, the clone stops ongoing movement in order to play the casting animations for Blooming Burst and Tangle-Barbs as well as Pop Blossom's visual effects whenever Neeko casts them. The clone will also play the animation of her next emote or Recall for a set duration that overrides its original duration and will not take any other orders while doing so."
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Neeko sends her clone to the target location if it is not playing an emote or Recall animation.</p>"
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          16,
          15,
          14,
          13,
          12
        ],
        "targeting": "Direction / Location",
        "affects": "Self",
        "damageType": "Magic damage",
        "spellEffects": "Proc",
        "projectile": "FALSE",
        "notes": "The empowered attack will not trigger against  wards and jungle plants.\nUsing a basic attack breaks the stealth at the start of the attack windup.\nOnce spawned with a  disguise, the clone cannot lose the disguise.\nWhen mimicking the animation of  Blooming Burst and  Tangle-Barbs while disguised, the clone will play the disguise unit's first and third ability animation respectively.\nWhen mimicking the animation of Blooming Burst, the clone will turn toward Blooming Burst's target location unless it was ordered to move within the last 0.5 seconds, in which case it will not change its facing direction.(bug)\nWhen mimicking the animation of Tangle-Barbs, the clone will always face to the east.(bug)\nIf Shapesplitter is cast during  Pop Blossom's delay, the clone will also mimic the ability by displaying the VFX for its area of effect. The copied VFX is only visible to enemies, and only while they have  sight of Neeko.(note)\nWhen Neeko forces her clone to play an emote or  Recall animation, she modifies its duration based on the animation played.\nJoke - 8 seconds.\nDance - 8 seconds.\nTaunt - 4.25 seconds.\nLaugh - 3 seconds.\nToggle - Plays the Joke emote but for the clone only.\n Recall - 8 seconds.\n Empowered Recall - 4 seconds.\nThe clone is special-cased to not apply  Frozen Heart's Winter's Caress and the slow from  Celestial Opposition's Blessing of the Mountain after the clone's base duration (3 seconds) has elapsed.\nThe effects can still apply before that, including if the clone disappears prior to the base duration elapsing.(note)\nThe clone will sometimes not disappear prematurely after 0.5 seconds.(bug)\nBoth Neeko and the clone use the same running animation.\nWhen passing near a jungle camp for the first time, Neeko will wave at the camp. The clone will likewise wave at nearby camps every time it is spawned, which can override the running animation and allow players to recognize the clone.(bug)\nThe clone can still be targeted by allied  auto-targeted effects (e.g.  Heal,  Celestial Blessing).",
        "blurb": "Passive:  Neeko's  basic attacks  on-hit generate  stacks of Shapesplitter. At 2 stacks, her next basic attack will consume them all to become  non-projectile, deal bonus magic damage, and briefly grant her  bonus move speed.",
        "castTime": "none",
        "targetRange": "900",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Tangle-Barbs",
        "icon": "https://cdn.communitydragon.org/latest/champion/Neeko/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Neeko slings a magical spiral in the target direction that deals magic damage to enemies hit and roots them for a duration.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      70,
                      105,
                      140,
                      175,
                      210
                    ]
                  },
                  {
                    "values": [
                      65
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Root Duration",
                "modifiers": [
                  {
                    "values": [
                      0.7,
                      0.9,
                      1.1,
                      1.3,
                      1.5
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
            "description": "If the spiral hits at least one enemy, it grows in size and its speed and root duration is increased.",
            "leveling": [
              {
                "attribute": "Empowered Root Duration",
                "modifiers": [
                  {
                    "values": [
                      1.8,
                      2.1,
                      2.4,
                      2.7,
                      3
                    ],
                    "units": [
                      " seconds"
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "cost": [
          60,
          65,
          70,
          75,
          80
        ],
        "cooldown": [
          12,
          11.5,
          11,
          10.5,
          10
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "AoE",
        "projectile": "TRUE",
        "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nBuffering Interactions\n\n Inherent Glamour can be buffered to cast after the cast time ends, even if Neeko is affected by cast-inhibiting crowd control during the cast time.",
        "blurb": "Active:  Neeko slings a magical spiral in the target direction that deals magic damage and  roots enemies hit.",
        "speed": "1300 / 1500",
        "width": "140 / 200",
        "castTime": "0.25",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Pop Blossom",
        "icon": "https://cdn.communitydragon.org/latest/champion/Neeko/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Neeko winds up spiritual essence over 1.25 seconds and highlights an area around herself, which is visible to enemies unless she is disguised. If Neeko is in a disguise, it will break after 0.5 seconds into the duration.</p>"
          },
          {
            "description": "After winding up, the cast time begins and Neeko leaps upward, knocking up nearby enemies for 0.6 seconds."
          },
          {
            "description": "When the cast time ends, she lands to emit a burst of energy that deals magic damage to nearby enemies and stuns them for 0.75 seconds.",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      150,
                      350,
                      550
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
          }
        ],
        "cost": [
          100
        ],
        "cooldown": [
          120,
          105,
          90
        ],
        "targeting": "Auto",
        "affects": "Enemies, Self",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "notes": "Ability details:\n\nThe wind up uses a special bar similar to cast bars to represent when Pop Blossom's cast time will start.\nThe wind up has no special interactions.\nThe highlighted area is fixed around Neeko.\nNeeko's most recent  Shapesplitter clone disappears when Pop Blossom's cast time starts.\nEditor's note: This may be a remnant of when it would spawn multiple clones during the development of her V13.9 gameplay update, intended to reduce visual clutter.[2]\nThis ability will cast from wherever the caster is at the end of the cast time.\nInteractions:\n\nOn-cast effects are applied on activation.\nPop Blossom can start its cast time during  stasis.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
        "castTime": "0.6",
        "effectRadius": "590 /  600",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Hailing from a long lost tribe of vastaya, Neeko can blend into any crowd by borrowing the appearances of others, even absorbing something of their emotional state to tell friend from foe in an instant. No one is ever sure where—or who—Neeko might be, but those who intend to do her harm will soon witness her true colors revealed, and feel the full power of her primordial spirit magic unleashed upon them."
}
    export default champion