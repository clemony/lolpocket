// Updated Patch 25.11 - 06/08/2025 12:01:47 PM CDT

const champion: Champion =  {
  "id": 777,
  "key": "Yone",
  "name": "Yone",
  "title": "the Unforgotten",
  "resource": "Flow",
  "attackType": "Melee",
  "stats": {
    "health": {
      "flat": 620,
      "perLevel": 105
    },
    "healthRegen": {
      "flat": 7.5,
      "perLevel": 0.75
    },
    "mana": {
      "flat": 500
    },
    "armor": {
      "flat": 33,
      "perLevel": 4.6
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 60,
      "perLevel": 2
    },
    "movespeed": {
      "flat": 345
    },
    "acquisitionRadius": {
      "flat": 400
    },
    "selectionRadius": {
      "flat": 120
    },
    "pathingRadius": {
      "flat": 32
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
      "flat": 0.625
    },
    "attackCastTime": {
      "flat": 0.3
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackDelayOffset": {
      "flat": -0.08
    },
    "attackRange": {
      "flat": 175
    }
  },
  "positions": [
    "Middle",
    "Top"
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
    "mobility": 3,
    "utility": 1,
    "abilityReliance": 45,
    "difficulty": 3
  },
  "abilities": {
    "P": [
      {
        "name": "Way of the Hunter",
        "icon": "https://cdn.communitydragon.org/latest/champion/Yone/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Intent:</span> Yone's total critical strike chance is doubled from all other sources. Additionally,[ every 1% critical strike chance in excess of 100% is converted into 0.5 bonus attack damage. ][ every 50% critical strike chance in excess of 100% is converted into 25 bonus attack damage. ]</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Steel and Spirit:</span> Yone's basic attacks alternate between his Steel Sword and Azakana Sword on-attack. Yone begins attacking with Steel Sword, and basic attacks with Azakana Sword deal 50% AD physical damage and 50% AD magic damage.</p>"
          }
        ],
        "targeting": "Passive",
        "affects": "Self, Enemies",
        "damageType": "Mixed damage",
        "spellEffects": "basic",
        "notes": "There is no attack time-out between alternating swords. It will persist through  death.\n50% of  Spellblade and  Demolish damage will be converted to magic damage if applied by the Azakana Sword.\nThis will also occur if applied by  Guinsoo's Rageblade's Phantom Hit after having last attacked with the Azakana Sword.\nThis will also occur if applied by  Mortal Steel after having last attacked with the Azakana Sword.(bug)\nThe mixed damage is dealt in two simultaneous instances of damage, but will pretend to be a single instance for most effects (such as  Conqueror's stacks).\nBoth instances deal  basic damage and thus natively apply  life steal.\nThe attack applies on-hit effects only once, right at the start.\nEven if the target dies from the magic damage, the physical damage will still be applied to it.\nIf the target dies from on-hit damage, the magic damage portion will be skipped and only the physical damage applied.(bug)\nYone requires at least  50% critical strike chance in order to reach 100% critical strike chance from Way of the Hunter's multiplier.",
        "blurb": "Innate - Intent:  Yone gains increased  critical strike chance, but his  critical strikes deal reduced damage."
      }
    ],
    "Q": [
      {
        "name": "Mortal Steel",
        "icon": "https://cdn.communitydragon.org/latest/champion/Yone/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Yone thrusts his Steel Sword in a line in the target direction that deals physical damage to enemies hit, applies on-hit effects to the first enemy hit, and triggers on-attack effects once. Mortal Steel's damage based on its AD ratio can critically strike for (175% + 40%) damage.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      20,
                      45,
                      70,
                      95,
                      120
                    ]
                  },
                  {
                    "values": [
                      105
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
            "description": "If this hits at least one enemy, Yone generates a stack of Gathering Storm for 6 seconds, stacking up to 2 times and refreshing on subsequent hits. At 2 stacks, the next Mortal Steel consumes them all to become empowered with a new effect."
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Gathering Storm Bonus:</span> Yone dashes a fixed distance in the target direction and unleashes a whirlwind in the same direction, both dealing the same damage to enemies hit in their path and knocking them up for 0.75 seconds, but being unable to affect the same target twice.</p>"
          },
          {
            "description": "Mortal Steel's thrust will fail to hit targets after the cast time if Yone was affected by disarming crowd control during it, but the cooldown of the ability is reset to 0.1 seconds."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          4
        ],
        "targeting": "Direction",
        "affects": "Self, Enemies",
        "spellshieldable": "true",
        "damageType": "Physical damage",
        "spellEffects": "special",
        "projectile": "SPECIAL",
        "notes": "Mortal Steel applies  basic damage for the first (closest) enemy hit and  area damage for secondary enemies:\nMortal Steel will apply on-hit effects to the first target hit, but will not do so to the secondary ones.\nMortal Steel will not apply spell effects to the first target hit, but will do so to the secondary ones.\n Spell vamp will only grant  healing from the damage dealt to secondary targets, and healing is reduced to 33% effectiveness, accordingly.\n Life steal will heal based on the damage dealt to the first target hit.\nMortal Steel will not benefit from the bonus attack speed gained by  Hail of Blades.(bug)\nAfter a successful crit roll against one of the targets, Mortal Steel's thrust is guaranteed to  critically strike all further targets as well.(bug)\nThis is unlike the behaviour of  Yasuo's  Steel Tempest.\nThe whirlwind and dash roll their critical strike against each target individually.\n Blinking during Mortal Steel's cast with two stacks of Gathering Storm (after the cast time) will end the dash prematurely but enemies in range of Yone at the new location are affected. The whirlwind's trajectory cannot be changed once it has already been unleashed.\nOnly the whirlwind can be  intercepted.\nEach parry has different interactions with this ability, whether it's the first target of Mortal Steel or the secondary one. In either case Yone still gains a stack of Gathering Storm and his whirlwind  knock up cannot be negated by parries:\n Dodge and  Block: first target does not take damage, secondary target does take damage.\n Blind: both first target and secondary target take damage.\n Spell shield does not prevent Yone from receiving a stack.\nMortal Steel is disabled while  grounded or  rooted if Yone has two stacks of Gathering Storm.\nWhile at two stacks, a range indicator will be shown for the effective range of the whirlwind.\nThe  dash can cross terrain.\nIf Yone gets knocked back during the 3rd cast, the dash will only damage and knockup around Yone's current position then will stop colliding, making Yone play his 3rd Q end animation while still dashing. (bug)\nThis ability will cast from wherever the caster is at the end of the cast time.\nYone will always cast Mortal Steel in his facing direction, and he will turn to face the target direction at the start of the cast time. While at two stacks, Yone will always cast it in the target direction.",
        "blurb": "Active:  Yone thrusts his Steel Sword in a line in the target direction that deals physical damage to enemies hit and applies  on-hit and on-attack effects to the first enemy hit. This can  critically strike.",
        "collisionRadius": "100",
        "speed": "1500",
        "width": "80 / 160",
        "castTime": "0.35 : 0.175 (based on bonus attack speed)",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Spirit Cleave",
        "icon": "https://cdn.communitydragon.org/latest/champion/Yone/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Yone cleaves with his Azakana Sword in a cone in the target direction, dealing equal parts physical and magic damage to enemies hit. The total mixed damage has a minimum threshold of 40 - 410 (based on level) against minions and a maximum threshold of 150 - 320 (based on level) against monsters.</p>",
            "leveling": [
              {
                "attribute": "Total Mixed Damage",
                "modifiers": [
                  {
                    "values": [
                      10,
                      20,
                      30,
                      40,
                      50
                    ]
                  },
                  {
                    "values": [
                      8,
                      9,
                      10,
                      11,
                      12
                    ],
                    "units": [
                      "% of target's maximum health"
                    ]
                  }
                ]
              },
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      5,
                      10,
                      15,
                      20,
                      25
                    ]
                  },
                  {
                    "values": [
                      4,
                      4.5,
                      5,
                      5.5,
                      6
                    ],
                    "units": [
                      "% of target's maximum health"
                    ]
                  }
                ]
              },
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      5,
                      10,
                      15,
                      20,
                      25
                    ]
                  },
                  {
                    "values": [
                      4,
                      4.5,
                      5,
                      5.5,
                      6
                    ],
                    "units": [
                      "% of target's maximum health"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "If this hits an enemy, Yone grants himself a shield for 40 - 90 (based on level) (+ 65% bonus AD) for 1.5 seconds, increased by 100% if it hits a champion and by 50% for each subsequent champion hit."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          14
        ],
        "targeting": "Direction",
        "affects": "Self, Enemies",
        "spellshieldable": "true",
        "damageType": "Mixed damage",
        "spellEffects": "aoe",
        "projectile": "FALSE",
        "notes": "Despite Spirit Cleave generally hitting targets'  edge range, it cannot hit targets whose center is behind him.\nThis behaviour is common with missiles, however some cone spells such as this one also do it.\nSpirit Cleave will not benefit from the bonus attack speed gained by  Hail of Blades.(bug)\n Spell shield does not prevent Yone from receiving and/or increasing the  shield.\nThe shield's amount will also increase for each  clone hit.\nThis ability will cast from wherever the caster is at the end of the cast time.\nSpirit Cleave will not preserve the caster's initial facing direction when using  Flash and similar effects.\nIt will cast in the caster's new facing direction at the end of the cast time.\nWhile casting Spirit Cleave, Yone's facing direction cannot be shifted by displacements (eg.  Vault,  Last Breath).\nThe mixed damage is applied in two instances, and the physical damage will be dealt first within the same game tick.\nIf the physical damage finishes off the unit, the magic damage will not be dealt against it.(bug)",
        "blurb": "Active:  Yone cleaves his Azakana Sword in a cone in the target direction, dealing equal parts physical and magic damage to enemies hit based on their maximum health.",
        "angle": "80°",
        "castTime": "0.5 : 0.19 (based on bonus attack speed)",
        "effectRadius": "600",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Soul Unbound",
        "icon": "https://cdn.communitydragon.org/latest/champion/Yone/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Yone dashes a fixed distance in the target direction, including through terrain, discarding his body and entering Spirit Form for 5 seconds. Yone's body is untargetable and is sent the same distance behind the cast location, though not through terrain, and is reclaimed when Soul Unbound ends.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Spirit Form:</span> Yone becomes ghosted and gains 10% - 30% (based on seconds active) bonus movement speed. His damaging basic attacks and abilities against enemy champions apply a mark that stores a portion of the post-mitigation damage dealt to the target by his attacks and abilities.</p>",
            "leveling": [
              {
                "attribute": "Damage Stored",
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
                      "% of damage dealt"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Activation resets Way of the Hunter's current sword state. Soul Unbound can be recast after 0.5 seconds, and automatically does so after the duration."
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Yone dashes back to his body with displacement immunity, ending Spirit Form and consuming the marks on each champion to deal true damage equal to the total amount of damage stored against each of them.</p>"
          },
          {
            "description": "The automatic recast is delayed if Yone is winding up a basic attack or is unable to recast Soul Unbound under any circumstances, which includes if he cannot move or cast abilities. Soul Unbound will also immediately recast upon death or entering resurrection."
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
        "targeting": "Direction / Auto",
        "affects": "Self, Enemies",
        "spellshieldable": "false",
        "damageType": "True damage",
        "spellEffects": "aoe",
        "notes": "The marks store  physical damage,  magic damage, and  true damage.\nSoul Unbound stays on cooldown for the first 15 seconds of the game.\n Recall and  Teleport are disabled during Soul Unbound.\nOnly Yone's initial dash can be  interrupted.\nYone is  displacement immune during the recast's cast time.\nYone uses  Flow as his resource to indicate the remaining amount of time in centiseconds (100 centiseconds = 1 second) that Soul Unbound can be active for before the ability automatically recasts.\nWith 1 second remaining before the recast occurs automatically, a soft, dark vignette will pulse over the screen, accompanied by a distinct audio cue. This warning is only visible and audible to Yone.\nYone's body unit cannot be interacted with by any means. It will despawn as soon as Yone's dash back ends.\nSoul Unbound's recast, even when cast automatically, counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nSoul Unbound's recast does not interrupt Yone's last movement or attack order.\nYone will place himself onto the ground and interrupt  displacements affecting him upon recasting.\nSome examples of effects that can delay Soul Unbound's automatic recast:\nAttack windup\nCast time\n Channels (excluding  Hexflash)\n Lockouts\n Dashes\n Immobilizes,  Silence,  Ground, and  Stasis\n Devour\n Fate's Call\nYone instantly appears at his body's location the moment this effect ends.\n Realm Warp\nSoul Unbound's recast is disabled (cannot be manually nor automatically cast) while Yone is in the  Realm of Death or  The Hextech Ultimatum. The recast will be deferred until those effects end.\n The Hextech Ultimatum will specifically end if Yone recasts Soul Unbound.\nIf Yone uses  Mortal Steel at two Gathering Storm stacks to delay Soul Unbound's automatic recast, he will be able to basic attack once in a short time period before the automatic recast triggers.\nIf Yone  dies or enters  resurrection with Spirit Form, he will immediately initiate the recast and dash back to his body while dead or resurrecting.\nIf he dies during the recast, the dash back is not interrupted.\nHis death animation will play upon arriving to his body.\nThe marks do not store damage from items, runes and summoner spells.\nThe mark also automatically detonates without Yone having to recast when the marked champion dies or enters  resurrection.\nThe detonation damage cannot be dodged by becoming  untargetable.\nThe marks will not store damage dealt to  shields.\nIf the mark's damage is higher than the target's current health, the mark indicator will have a slightly different appearance.\nThis does not take into account effects that would amplify the damage of the mark, such as  Coup de Grace.\nThe following table refers for interactions while Yone is in cast time and dashing back to his body:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll summoner spells are disabled\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nN/A",
        "blurb": "Active:  Yone  dashes in the target direction, leaving his body behind and entering Spirit Form for a few seconds.",
        "speed": "1200",
        "castTime": "None / 0.225",
        "effectRadius": "Global",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Fate Sealed",
        "icon": "https://cdn.communitydragon.org/latest/champion/Yone/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Yone prepares a strike over the cast time, then marks all enemies within an area in the target direction, knocking them down and stunning them for 1 second. He blinks 200 units beyond the center of the last enemy champion struck, or else to maximum range instead.</p>"
          },
          {
            "description": "After 0.3 seconds, a gust rushes along the same area that deals equal parts physical and magic damage to marked enemies within and pulls them towards the location Yone blinked to, then knocks them up for 0.75 seconds.",
            "leveling": [
              {
                "attribute": "Total Mixed Damage",
                "modifiers": [
                  {
                    "values": [
                      200,
                      400,
                      600
                    ]
                  },
                  {
                    "values": [
                      80
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  }
                ]
              },
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      100,
                      200,
                      300
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
              },
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      100,
                      200,
                      300
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
            "description": "The stun ends prematurely upon the knock up."
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
        "targeting": "Direction",
        "affects": "Self, Enemies",
        "spellshieldable": "special",
        "damageType": "Mixed damage",
        "spellEffects": "aoe",
        "projectile": "FALSE",
        "notes": "Yone will  blink after a 0.05-second delay of the cast time being completed.\nMarked enemies that are not within the area will not be affected by the second portion of the ability.\nIf Fate Sealed's maximum range is inside terrain, enemies will not be  pulled through walls.\nFate Sealed  pulls targets to the location Yone would  blink to, and not towards his current position by the end of the cast time.\nFate Sealed can hit targets whose center is behind Yone, if their  radius overlaps with the rectangle hitbox in front of him.\nEnemies are  pulled with 3000 speed.\nThis ability will cast from wherever the caster is at the end of the cast time.\nFate Sealed will not  stun enemies that are  displacement immune.\nYone can blink up to 1200 units + enemy size, if the last enemy champion's radius intersects with the maximum range slightly.\nThe mixed damage is applied in two instances, and the magic damage will be dealt first within the same game tick.\nIf the magic damage finishes off the unit, the physical damage will not be dealt against it.(bug)\nYone will  reveal himself during the cast time if there is an enemy champion nearby.\nWhen striking against  spell shield, Yone will still  blink to the last champion hit even if they block the effects to themselves.\nThe  knock up starts once the pull ends.\nYone is  locked out of performing actions for 0.45 seconds after the cast time. All abilities that have been buffered during this time will cast shortly before the lock out ends.\nThe following table refers for interactions while Yone is in cast time:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
        "blurb": "Active:  Yone prepares a strike over an area in the target direction,  knocking down and briefly  stunning enemies within. He then  blinks behind the furthest target, else to max range.",
        "width": "225",
        "castTime": "0.75",
        "maxCharges": -1
      }
    ]
  },
  "lore": "In life, he was Yone—half-brother of Yasuo, and renowned student of his village's sword school. But upon his death at the hands of his brother, he found himself hunted by a malevolent entity of the spirit realm, and was forced to slay it with its own sword. Now, cursed to wear its demonic mask upon his face, Yone tirelessly hunts all such creatures in order to understand what he has become."
}
    export default champion