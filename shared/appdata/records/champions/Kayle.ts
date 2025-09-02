// Updated Patch 25.17 - 09/01/2025 05:26:13 PM CDT

const champion: Champion = {
  "id": 10,
  "key": "Kayle",
  "name": "Kayle",
  "title": "the Righteous",
  "resource": "Mana",
  "attackType": "Melee",
  "adaptiveType": "Physical damage",
  "stats": {
    "health": {
      "flat": 670,
      "perLevel": 92
    },
    "healthRegen": {
      "flat": 5,
      "perLevel": 0.5
    },
    "mana": {
      "flat": 330,
      "perLevel": 50
    },
    "manaRegen": {
      "flat": 8,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 26,
      "perLevel": 4.2
    },
    "magicResistance": {
      "flat": 22,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 50,
      "perLevel": 2.5
    },
    "movespeed": {
      "flat": 335
    },
    "acquisitionRadius": {
      "flat": 600
    },
    "selectionRadius": {
      "flat": 140
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
      "perLevel": 1.5
    },
    "attackSpeedRatio": {
      "flat": 0.667
    },
    "attackCastTime": {
      "flat": 0.3
    },
    "attackTotalTime": {
      "flat": 1.55
    },
    "attackRange": {
      "flat": 175
    }
  },
  "positions": [
    "Top"
  ],
  "roles": [
    "Mage",
    "Marksman",
    "Specialist"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 1,
    "mobility": 1,
    "utility": 3,
    "abilityReliance": 20,
    "difficulty": 2
  },
  "abilities": {
    "P": [
      {
        "name": "Divine Ascent",
        "icon": "https://cdn.communitydragon.org/latest/champion/Kayle/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Kayle ascends through four forms that each grant additional bonuses. She ascends upon spending a skill point at levels 1, 6, 11, and 16.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Level 1 - Zealous:</span> Kayle's basic attacks on-attack generate a stack of Zeal for 5 seconds, refreshing on subsequent attacks and stacking up to 5 times. For each stack, she gains 6% (+ 1% per 100 AP) bonus attack speed, up to a maximum of 30% (+ 5% per 100 AP). At max stacks, she becomes Exalted, gaining 10% bonus movement speed.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Level 6 - Arisen:</span> Kayle becomes ranged and gains 350 bonus attack range for a total of 525.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Level 11 - Aflame:</span> Kayle gains 10% bonus size. While Kayle is Exalted, her basic attacks on-attack also launch a wave of fire forward that deals 20 - 41 (based on level) (+ 10% bonus AD) (+ 25% AP) magic damage to all enemies it passes through. The wave is affected by critical strike modifiers.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Level 16 - Transcendent:</span> Kayle gains an additional 100 bonus attack range for a total of 625, and permanently gains the full effects of Zealous.</p>"
          }
        ],
        "targeting": "Passive",
        "affects": "Self, Enemies",
        "damageType": "Magic damage",
        "spellEffects": "AoE",
        "projectile": "SPECIAL",
        "notes": "Zealous\n\nThe stacking bonus attack speed can be tracked on the HUD via a buff called  Zeal, while the maximum stacks bonus grants the buff  Exalted.\nSubsequent applications will also refresh the duration of all stacks, but all of them are lost when expired.\nIf Kayle is in her attack animation after the stacks expire, she gains another 0.5 seconds to refresh/stack  Zeal.\nEach stack grants bonus attack speed based on Kayle's  ability power at the time the stack is generated and will not update if it is changed.\nFor example, if a stack is generated while she has 0 ability power, it'll grant 6% attack speed. If she acquired 100 ability power afterward, the next stack will grant 7%. The 2 stacks grant a total of 13% bonus attack speed and not 14%.\nArisen\n\nBasic attacks within  175 units will still use Kayle's melee basic attack animations and do not utilize  projectiles.\nThey are still classified as  ranged attacks.\nDue to this fact, projectile-blocking effects cannot intercept basic attacks while Kayle's target is within her \"melee\" range.\nAflame\n\nOn becoming Aflame, Kayle's bonus size grows linearly over 1 second.\nBasic attacks against structures do not trigger fire waves.\nWhile at 4 stacks of  Zeal, the next attack  on-attack reaching the fifth stack will be empowered by Aflame, releasing the first fire wave.\nTranscendent\n\nThe  Zeal and  Exalted buffs are replaced by a new buff that grants the benefits of both and it is not visible on Kayle's  HUD.\nThis buff also updates its attack speed value whenever a stat update happens and ability power is changed, however, it does not track ability power from other buffs, unless they have been specifically special cased. The following buffs are not special cased yet and will not grant bonus attack speed:\nRunes (including  Adaptive Force rune shards )\n Infernal Might\nFire Waves Details\n\nHitboxes shows by a graph side by side. A wave consists of three projectiles for the hitbox and a fourth for visuals.\nThe hitbox projectiles spawn 75 units behind Kayle, travel through her, and are destroyed once they've traveled 850 units. Their technical details are:\nRange:  850 (755 effective)\nWidth:  200\nProjectile Speed: 2800\nAngle: 18° (left and right at 9° to their side, respectively)\n Projectile-blocking effects can block each projectile individually.\nIt is possible to block the visuals, but still get hit by an unblocked \"invisible\" hitbox projectile.\nHitting an enemy with multiple projectiles of the same wave will not increase the damage dealt.\nThe fire wave shares cast instance with the triggering basic attack.\nThe amount of  Conqueror stacks gained will be ( 2 /  1) if the basic attack deals damage first or 2 if the wave does so.\nKeep in mind that it's still two damage instances. If one triggers  Bone Plating, the other's damage will be blocked.\nFire waves roll  critical strike chance on each target hit individually.\nThe distance of the fire waves scales with bonus attack range.\nA known issue is that despite dealing  area spell damage the fire wave does not:\nConsume Mana Charge from  Tear of the Goddess and its upgrades.\nTrigger  Manaflow Band.\nInteractions & Other\n\nBecause Kayle is both a  melee and  ranged champion, she can purchase both ranged and melee exclusive items at anytime, but their effects will function depending on her current range type; the same principle also applies to runes.\nHowever, keep in mind that, prior to ascending to Arisen,  Starfire Spellblade also changes this behaviour based on its usage.\nWaves are fired in the direction that Kayle is facing. Changing that during the attack windup via  Flash will also change the direction of the wave.\nEach ascension has an unique animation and a voice line. (See: Kayle's quotes)\nThe ascensions' animation will override the current one, but it does not cancel Kayle's current action, nor her previous orders.",
        "blurb": "Innate:  Kayle ascends through four forms that each grant additional bonuses:\nLevel 1 - Zealous: Kayle's  basic attacks  on-attack grant her  stacking  attack speed, and at maximum stacks she also gains  move speed.\nLevel 6 - Arisen: Kayle gains  range and becomes a ranged champion.\nLevel 11 - Aflame: While at maximum stacks, Kayle's basic attacks launches a fire wave that deals magic damage.\nLevel 16 - Transcendent: Kayle is permanently at maximum stacks, in addition to gaining even more  range."
      }
    ],
    "Q": [
      {
        "name": "Radiant Blast",
        "icon": "https://cdn.communitydragon.org/latest/champion/Kayle/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kayle conjures a portal in front of her that faces the target direction, from which a celestial sword launches forward.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      60,
                      100,
                      140,
                      180,
                      220
                    ]
                  },
                  {
                    "values": [
                      60
                    ],
                    "units": [
                      "% bonus AD"
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
              },
              {
                "attribute": "Slow",
                "modifiers": [
                  {
                    "values": [
                      26,
                      32,
                      38,
                      44,
                      50
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
            "description": "The sword expands upon hitting an enemy, targets struck in the area are dealt magic damage, slowed for 2 seconds, and inflicted with 15% reduced armor and magic resistance for 4 seconds."
          }
        ],
        "cost": [
          70,
          75,
          80,
          85,
          90
        ],
        "cooldown": [
          12,
          11,
          10,
          9,
          8
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "true",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "projectile": "TRUE",
        "notes": "Details\n\nThis ability has a cast time and cast delay. The former represents the amount of time Kayle needs to spend to cast and is equal to her attack windup time. The latter is the amount of time the portal needs to launch the sword, which is always 0.264 seconds seconds, starting from the beginning of the cast time.\nAs implied by the previous point, the portal is created at the start of the cast time and Kayle does not have to be alive for it to launch the sword.\nThe portal does not follow Kayle's movements, using  Flash or getting displaced won't change its position nor direction either.\nThe cast time can be calculated by dividing Kayle's windup percent value (0.193555) with her current total attack speed.\nRadiant Blast's cast time is 0.33 seconds at base attack speed, is at most 0.99 seconds at the minimum attack speed of  0.2, and is 0.066 seconds at the attack speed cap of  3.003. The cast time can be further decreased with effects that allows the player to bypass the attack speed cap.\nAdditionally, it should be noted that due to action only taking place on whole game ticks, the cast time can only be changed in fractions of 0.033 seconds. This also means that the lowest possible cast time is 0.033 seconds, requiring at least  5.8652 attack speed.\nEditor's note: Important to note that in patch V9.17, Radiant Blast's cast time was changed to be a flat 0.25 seconds, rather than scaling with the attack windup time. In patch V10.4, this was undocumentedly changed back. Whether the change to scale with windup time again was intentional or not is unknown.\nThe resistance reduction is applied after the damage has been dealt.\nThe expansion consists of 5 hitboxes, forming a cross-like shape centered 100 units ahead from the impact in its direction. Their technical details can be seen below and visualized on the image to the right. The left side shows projectile's width and the total area traveled if it does not hit a target, while the right side shows the explosions when it hits a target.\nExplosionCenter: 100 radius\nExplosionLeft: 150 distance, 125 width\nExplosionRight: 150 distance, 125 width\nExplosionBackward: 100 distance, 90 width\nExplosionForward: 400 distance, 90 width\nInteractions & Other\n\nThe visual effects of the explosion shows the blade and guard of Kayle's swords.\nThe resistance reduction can be tracked on the HUD as a debuff called  Sundered.\nEditor's note: Note that the  PsyOps skin still uses the old shred VFX, which also only shows for 3 seconds (effect duration is not affected). This is possibly an oversight as all existing, and at the time released Dragon Slayer, skins were updated properly in V11.18.",
        "blurb": "Active:  Kayle summons a celestial sword that travels forward and expands upon hitting a target, dealing magic damage,  slowing, and reducing the  armor and  magic resist of all targets struck.",
        "speed": "1600",
        "width": "150",
        "castTime": "Attack Windup Time",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Celestial Blessing",
        "icon": "https://cdn.communitydragon.org/latest/champion/Kayle/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kayle and the target allied champion are healed and gain bonus movement speed for 2 seconds.</p>",
            "leveling": [
              {
                "attribute": "Heal",
                "modifiers": [
                  {
                    "values": [
                      55,
                      80,
                      105,
                      130,
                      155
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
                "attribute": "Bonus Movement Speed",
                "modifiers": [
                  {
                    "values": [
                      24,
                      28,
                      32,
                      36,
                      40
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
            "description": "If cast without a valid target, or self-cast, Celestial Blessing will automatically target the closest allied champion in range, prioritizing the one with the lowest health."
          }
        ],
        "cost": [
          70,
          75,
          80,
          85,
          90
        ],
        "cooldown": [
          15
        ],
        "targeting": "Unit / Auto",
        "affects": "Self, Allies",
        "resource": "Mana",
        "notes": "Details\n\nCelestial Blessing's cast time does not interrupt movement and the effects are applied at the start.\nInteractions & Other\n\nIf cast with auto-targeting, Celestial Blessing may target allies who are  untargetable, or allied clones that cannot be targeted by allies (such as  Wukong's  Warrior Trickster).",
        "blurb": "Active:  Kayle  heals herself and an allied champion. Additionally, both of them gains  move speed for a brief time.",
        "castTime": "0.25",
        "targetRange": "900",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Starfire Spellblade",
        "icon": "https://cdn.communitydragon.org/latest/champion/Kayle/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Kayle deals bonus magic damage on-hit.</p>",
            "leveling": [
              {
                "attribute": "Passive Damage",
                "modifiers": [
                  {
                    "values": [
                      15,
                      20,
                      25,
                      30,
                      35
                    ]
                  },
                  {
                    "values": [
                      10
                    ],
                    "units": [
                      "% bonus AD"
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
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kayle kindles her blade, empowering her next basic attack within 6 seconds to have an uncancellable windup and deal additional bonus magic damage on-hit that is capped at 400 against monsters. If Kayle is not yet Arisen, this attack becomes ranged with 525 range.</p>",
            "leveling": [
              {
                "attribute": "Bonus Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      8,
                      8.5,
                      9,
                      9.5,
                      10
                    ],
                    "units": [
                      "%  of target's missing health"
                    ]
                  },
                  {
                    "values": [
                      1.5
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
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Aflame Bonus:</span> The attack explodes upon the target, dealing its damage to surrounding enemies and applying on-hit effects. This is affected by critical strike modifiers.</p>"
          },
          {
            "description": "Starfire Spellblade resets Kayle's basic attack timer. Starfire Spellblade does not deal bonus damage against structures."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          8,
          7.5,
          7,
          6.5,
          6
        ],
        "targeting": "Auto",
        "affects": "Self, Enemies",
        "spellshieldable": "true",
        "damageType": "Magic damage",
        "spellEffects": "Special",
        "projectile": "TRUE",
        "notes": "Details\n\nStarfire Spellblade deals:\nThe physical damage part of both the attack and the explosion deals  basic damage.\n Proc damage for the passive's  on-hit effect.\n Spell damage for the active's  on-hit effect.\nAll damage dealt to secondary targets by the explosion is additionally tagged as  area damage.\nThe active's effect shares the same cast instance with the triggering attack (exception:  Muramana, see Interactions & Other).\nParry interactions:\n Blind: The main target will never receive damage, but the secondary targets will receive the active's spell damage.\n Block: Blocking will always negate all damage. Keep in mind that if a secondary target is outside of  Spirit's Refuge's zone, they won't block damage.\n Dodge: Dodging will always negate all damage.\nPENDING FOR TEST:: All parry interactions are marked for retesting because of patch V11.1 changes.\nInteractions & Other\n\nWhile the active's effect is up, a circle is visible to Kayle, indicating her  range, however, this circle only takes into account  Divine Ascent's effect on her range, not other sources such as  Rapid Firecannon.\nThe increased range (with the item's effect included) will be  675 prior to ascending to Transcendent, after which it's  725.\nTo clarify the description, Starfire Spellblade can behave both as a  ranged and  melee attack based on how far the target is prior to Kayle ascending to  Arisen, after which the attack will be always using ranged standards.\nIf the target is 200 units away or closer, the attack will be considered melee. This also uses her melee animations, not utilizing projectiles even after ascending.\nIf the target is over 200 units, the attack will be considered ranged.\nTo further expand on this: Using the ranged empowered attack will change Kayle's range type to ranged while the projectile is alive. This means that if the target could outrun the projectile, Kayle would be stuck on being ranged, although the bonuses from the active are not kept. While it's unlikely to be on this temporary ranged state for longer than half a seconds during a normal playthrough, it is possible to achieve few seconds when specific conditions are met.\nKeep in mind that while on-hit effects will be applied to all targets in the explosion,  on-attack effects are only applied once per basic attack, not per target hit.\nSingle-use on-hits, such as  Spellblade, will be applied to the main target.\nIf the main target died prior to the projectile reaching them, or if it was a jungle plant, the effects will be applied to the closest target from the explosion's center.\n Guinsoo's Rageblade's Phantom Hit can only be applied to the main target.\nDespite being one cast instance, Starfire Spellblade triggers  Muramana's Shock twice on each target, dealing normal bonus damage after the basic attack and increased bonus damage after the spell, totalling at ( 5.2% /  4.2%) maximum mana bonus physical damage.",
        "blurb": "Passive:  Kayle deals bonus magic damage on-hit.",
        "castTime": "none",
        "effectRadius": "350",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Divine Judgment",
        "icon": "https://cdn.communitydragon.org/latest/champion/Kayle/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kayle grants herself or a target allied champion invulnerability for 2.5 seconds and conjures swords of fire.</p>"
          },
          {
            "description": "After 2.5 seconds, she rains the swords down around the target, dealing magic damage to nearby enemies.",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      200,
                      300,
                      400
                    ]
                  },
                  {
                    "values": [
                      100
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  },
                  {
                    "values": [
                      70
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
          100,
          50,
          0
        ],
        "cooldown": [
          160,
          120,
          80
        ],
        "targeting": "Unit",
        "affects": "Allies, Self",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "notes": "Details\n\nDivine Judgment's cast time does not interrupt movement and the cast will finish even after Kayle's  death.\nSince  internalraw damage ignores invulnerability, the target may still die via the  Nexus Obelisk, but the ability will finish at their corpse's position regardless.\nDivine Judgment will prioritize casting on allies over Kayle. This means that if Kayle's and an ally's selection ranges are intercepting each other on the cursor's position, the cast will always occur on the ally.\nPrior to becoming Transcended via  Divine Ascent, casting Divine Judgment refreshes the duration of  Zeal  stacks at the start of the cast time to ensure that it does not expire while she can't attack during the cast.\nDuring cast, an indicator for the damaging area can be seen around the target, however, this is not visible if there is no  sight on the them.\nDivine Judgment can be cast on  clones too, including  Shapesplitter and  Warrior Trickster, which are normally not targetable for allies.\nWhile it's an uncommon occurence, it is possible to cast Divine Judgment on targets who just entered  resurrection or  zombie state. This is only possible with very strict timing and perhaps high latency.\nIt's recommended to avoid both of the afformentioned interactions, as they render the usage of Divine Judgment useless in many cases.\nInteractions & Other\n\nWhile the target is invulnerable, a number indicator will appear beneath them whenever they would receive damage to show the amount that was entirely mitigated. This is calculated pre-mitigation, meaning before resistances and reductions are taken into account.\n Rapid Firecannon's Energized effect behaves strangely with the set basic attack range:\nIf the ability is cast while the effect is ready, the range goes from  400 to  385 over 4 stat updates (400 -> 390 -> 387 -> 385). When the cast completes, the proper range needs 2 updates to set in ( 660 -  675 while Arisen;  710 -  725 while Transcended).\nGaining the effect during the cast will cause the range to cycle between  525 and  550 until the cast finishes, then the proper range is set after 1 update.\nSelling the item during the cast causes the range to be set to  250.\nPENDING FOR TEST: Range values are outdated because of patch V11.18 changes to Kayle.\n\nThe invulnerability can be tracked on the HUD via a buff called  Intervention.",
        "blurb": "Active:  Kayle grants herself or an allied champion  invulnerability for the next few seconds, and conjures flaming swords around herself.",
        "castTime": "0.5",
        "effectRadius": "675 / 675 / 775",
        "targetRange": "900",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Born to a Targonian Aspect at the height of the Rune Wars, Kayle honored her mother's legacy by fighting for justice on wings of divine flame. She and her twin sister Morgana were the protectors of Demacia for many years—until Kayle became disillusioned with the repeated failings of mortals, and abandoned this realm altogether. Still, legends are told of her punishing the unjust with her fiery swords, and many hope that she will one day return…",
  "faction": "demacia",
  "releaseDate": "2009-02-21",
  "patchLastChanged": "25.14",
  "price": {
    "blueEssence": 2400,
    "rp": 260
  }
}
export default champion