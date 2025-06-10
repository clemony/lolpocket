// Updated Patch 25.11 - 06/08/2025 12:01:46 PM CDT

const champion: Champion =  {
  "id": 82,
  "key": "Mordekaiser",
  "name": "Mordekaiser",
  "title": "the Iron Revenant",
  "fullName": "Sahn-Uzal",
  "resource": "Shield",
  "attackType": "Melee",
  "stats": {
    "health": {
      "flat": 645,
      "perLevel": 104
    },
    "healthRegen": {
      "flat": 5,
      "perLevel": 0.75
    },
    "armor": {
      "flat": 37,
      "perLevel": 4.2
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 61,
      "perLevel": 4
    },
    "movespeed": {
      "flat": 335
    },
    "acquisitionRadius": {
      "flat": 400
    },
    "selectionRadius": {
      "flat": 125
    },
    "pathingRadius": {
      "flat": 35
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
      "perLevel": 1
    },
    "attackSpeedRatio": {
      "flat": 0.625
    },
    "attackCastTime": {
      "flat": 0.5
    },
    "attackTotalTime": {
      "flat": 2.366
    },
    "attackDelayOffset": {
      "flat": -0.1
    },
    "attackRange": {
      "flat": 175
    }
  },
  "positions": [
    "Top"
  ],
  "roles": [
    "Fighter",
    "Juggernaut",
    "Mage"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 2,
    "control": 1,
    "mobility": 1,
    "utility": 2,
    "abilityReliance": 80,
    "difficulty": 2
  },
  "abilities": {
    "P": [
      {
        "name": "Darkness Rise",
        "icon": "https://cdn.communitydragon.org/latest/champion/Mordekaiser/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Mordekaiser's basic attacks are empowered to deal 40% AP bonus magic damage on-hit.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Morderkaiser generates a stack for each enemy champion or large monster hit by his damaging basic attacks or basic abilities, lasting for 4 seconds, refreshing on subsequent hits, and stacking up to 3 times. At 3 stacks, he gains Darkness Rise.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Darkness Rise:</span> Mordekaiser gains 3 / 6 / 9% (based on level) bonus movement speed and deals[ 5 (+ 30% AP) (+ 1% - 5% (based on level) of target's maximum health) magic damage every second ][ 0.625 (+ 3.75% AP) (+ 0.13% - 0.63% (based on level) of target's maximum health) magic damage every 0.125 seconds ]to nearby enemies. Against monsters, the damage is capped at[ 40 - 200 (based on level) per second. ][ 5 - 25 (based on level) per 0.125 seconds. ]</p>"
          }
        ],
        "targeting": "Passive",
        "affects": "Self / Enemies",
        "damageType": "Magic damage",
        "spellEffects": "aoedot",
        "notes": "Mordekaiser has a stack counter under his health bar that is not visible to other champions. It will light up when the maximum effect is active.\nDarkness Rise's area damage alone does not refresh Darkness Rise's buff.",
        "blurb": "Innate:  Mordekaiser's basic attacks deal bonus magic damage.",
        "effectRadius": "375"
      }
    ],
    "Q": [
      {
        "name": "Obliterate",
        "icon": "https://cdn.communitydragon.org/latest/champion/Mordekaiser/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Mordekaiser strikes his mace down in a line in the target direction, dealing magic damage to enemies within, increased if only one enemy is hit.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      0,
                      2.6470588235294117,
                      5.294117647058823,
                      7.9411764705882355,
                      10.588235294117647,
                      13.235294117647058,
                      15.882352941176471,
                      18.52941176470588,
                      21.176470588235293,
                      23.823529411764707,
                      26.470588235294116,
                      29.11764705882353,
                      31.764705882352942,
                      34.411764705882355,
                      37.05882352941176,
                      39.705882352941174,
                      42.35294117647059,
                      45
                    ]
                  },
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
                      70
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Damage Increase",
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
              }
            ]
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          8,
          7,
          6,
          5,
          4
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "True",
        "damageType": "Magic damage",
        "spellEffects": "special",
        "projectile": "FALSE",
        "notes": "For the majority of the animation time, Obliterate will preserve the caster's initial facing direction when using  Flash and similar effects.\nIt will not do so toward the end of the cast.(bug)\nApplies  spell damage if it hits one target and  area damage to multiple targets.\nObliterate's damage against isolated enemies at:\nRank 1: 104 : 162.5 (based on level) (+ 91% AP)\nRank 2: 148.5 : 209.25 (based on level) (+ 94.5% AP)\nRank 3: 196 : 259 (based on level) (+ 98% AP)\nRank 4: 246.5 : 311.75 (based on level) (+ 101.5% AP)\nRank 5: 300 : 367.5 (based on level) (+ 105% AP)\nThis ability will cast from wherever the caster is at the end of the cast time.",
        "blurb": "Active:  Mordekaiser smashes the area in the target direction, dealing magic damage to enemies within,  increased if it hits only one enemy.",
        "width": "160",
        "castTime": "0.5",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Indestructible",
        "icon": "https://cdn.communitydragon.org/latest/champion/Mordekaiser/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Mordekaiser stores 45% of the post-mitigation damage he deals and 7.5% of the pre-mitigation damage he takes,[ reduced by 75% for non-champion sources, ][ reduced to 11.25% of damage dealt and 3.75% of damage taken for non-champion sources, ]as Potential Shield on his secondary resource bar, up to 30% of his maximum health. The Potential Shield decays by 8 - 25 (based on level) every second after not dealing or taking damage for 1 second. While Indestructible is not on cooldown, the Potential Shield will not decay below a minimum of 5% of his maximum health, and it will be set to that amount when it comes off cooldown if it was previously below it.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Mordekaiser consumes his Potential Shield to grant himself a shield for the same amount for 4 seconds. The shield decays exponentially over the duration. Indestructible can be recast after 0.5 seconds while the shield is active.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Mordekaiser consumes the remaining shield, healing for a portion of the amount.</p>",
            "leveling": [
              {
                "attribute": "Shield to Healing",
                "modifiers": [
                  {
                    "values": [
                      35,
                      37.5,
                      40,
                      42.5,
                      45
                    ],
                    "units": [
                      "%"
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
          12,
          11,
          10,
          9,
          8
        ],
        "targeting": "Auto",
        "affects": "Self",
        "notes": "Both casts count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.",
        "blurb": "Passive:  Mordekaiser stores a portion of the damage he deals and receives as Potential Shield, up to a portion of his maximum health. This begins to decay after a brief time without fighting.",
        "castTime": "none",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Death's Grasp",
        "icon": "https://cdn.communitydragon.org/latest/champion/Mordekaiser/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Mordekaiser gains magic penetration.</p>",
            "leveling": [
              {
                "attribute": "Magic Penetration",
                "modifiers": [
                  {
                    "values": [
                      5,
                      7.5,
                      10,
                      12.5,
                      15
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
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Mordekaiser summons a claw in the target direction that grants sight of the area. After 0.5 seconds, it deals magic damage to enemies within and pulls them 250 units.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      60,
                      75,
                      90,
                      105,
                      120
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
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          18,
          16,
          14,
          12,
          10
        ],
        "targeting": "Location",
        "affects": "Self, Enemies",
        "spellshieldable": "True",
        "damageType": "Magic damage",
        "spellEffects": "aoe",
        "projectile": "FALSE",
        "notes": "Death's Grasp will still  pull even if Mordekaiser  dies.\nThis ability will cast from wherever the caster is at the start of the cast time.",
        "blurb": "Passive:  Mordekaiser gains  magic penetration.",
        "speed": "3000",
        "width": "200",
        "castTime": "0.25",
        "targetRange": "700 / 900",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Realm of Death",
        "icon": "https://cdn.communitydragon.org/latest/champion/Mordekaiser/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Mordekaiser aims his mace towards the target enemy champion, slowing them by 75% and revealing them over the cast time, and then banishing them with him to the Death Realm for 7 seconds. Mordekaiser also consumes the target's soul for 7 seconds, healing himself for 10% of their maximum health and reducing their current attack damage, ability power, total attack speed, maximum health, armor, magic resist, and size by 10%, in addition to gaining them for himself. If the target dies while inside the Death Realm, Mordekaiser keeps their partial stats until they respawn.</p>"
          },
          {
            "description": "Units between realms see each other as spirits, considering each other dead and negating any interactions between each other. Only Mordekaiser and the target will enter the realm; other champions cannot follow them. Everything that occurs inside the Death Realm is hidden to units outside of it, and vice versa. All pets still inside the realm are killed at its end."
          },
          {
            "description": "If one of the two affected champions leave the Death Realm, because of having died or having it dispelled, the other will do so as well."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          140,
          120,
          100
        ],
        "targeting": "Unit",
        "affects": "Enemies",
        "spellshieldable": "special",
        "notes": "Mordekaiser's Realm of Death. Champions outside of the death realm are seen as spirits. Blue spirits (above Mordekaiser) are allied champions while red spirits (below Mordekaiser) are enemy champions.\nAlly spirit\nEnemy spirit\nThe Realm of Death is a battlefield that exists outside of the normal realm in an alternate \"dimension\". It exists only for Mordekaiser and his target. It consists of an arena that has a radius of 1200 units and includes any terrain features that would exist in the map of the normal realm, including walls and  brushes.\nThe boundaries of the arena are impassable but not considered terrain themselves ( Unstoppable Onslaught exception), and enemies that try to move out of the area will be displaced back inside.\n Dashes,  blinks,  displacements and other forms of movement will cap their effect range to the boundary. Targets will stop at the boundary even after it expired.\nRealm of Death retains Mordekaiser's previous current health percentage when granting him a portion of the target's maximum health.\nRealm of Death will cancel and go on cooldown after its cast time if:\nThe target is  displacement immune,  crowd control immune or protected by a  spell shield.\nNote that all of the above plus any  cleanse effect are ineffective if they are applied after the target has been banished.\nThe target is a  clone or  Sion's  Glory in Death.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).\nIf Mordekaiser or the target cast another Realm of Death, the affected champions will remain stuck for the duration of the new circle.\nThe previous circle will be overridden by the new one; it will be dispelled to enter the new circle.\n Spell shield will not block the initial  slow.\nThe reveal effect lasts for 1.25 seconds from the start of the cast time if the cast does not complete. Otherwise, the reveal ends as soon as the cast time completes.\nIf the target's  health is lower than the amount that should be stolen, they will be brought down to 1 health. Mordekaiser will still get the usual amount of maximum health.\nEntering or leaving the Death Realm will cause all targeted  projectiles to be  destroyed.\nThe transition in and out of the Death Realm doesn't interrupt  channels.\n Grand Starfall will always be interrupted by the transition into the realm.\nRealm of Death will not be dispelled if either of the two affected champions enter  resurrection after taking lethal damage. It is dispelled if the target enters a  zombie state.\nAny active  tether effects (both friendly and hostile ones) existing on either of the two champions entering the realm will be broken (unless the tether is between those two).\nUpon entering the realm, Mordekaiser and the target are  cleansed from all  forced action effects\nThe cleanse will occur even if the source enters the realm.(bug)\nUnlike the other stats, Mordekaiser does not steal enemy total size; instead he gains 10% of his own size and reduces the enemy's size by 10% of theirs (all size modifiers stack additively).\nMordekaiser grows in size over 0.25 seconds after successfully stealing his targets' stats, and shrinks over 0.25 seconds after the buff runs out again. The target shrinks over 0.25 seconds after their stats are stolen, but grows back to normal size instantly when the effect ends.\nWhile Mordekaiser has hold of his enemy's stats, that champion's circular portrait will appear as a pip next to his health bar, visible to all players.\nRealm of Death's interactions with other elements/abilities (list is incomplete):\nMultiple Death Realms (possible through a  hijacked Realm of Death or if multiple Mordekaisers are in the same match) spawned will exist in the same dimension, allowing champions to see and interact with champions bound to other circles. Champions are only affected by their boundaries and are not able to see the others.\n Tahm Kench's  Devour can carry a target outside of their circle, but they will be displaced back inside once  Regurgitated.\nAn active  Cease and Desist on a target outside the perimeter will cause  Vi to continue her charge until her circle ends. She can knock back and damage secondary targets multiple times.\nStructures exist in all realms at the same time.  Turrets will behave normally as if all units were in the same realm.\nHex-gates on  Hextech Rift will not be present between realms.\n Brushes will maintain their presence between realms.\nSwitching realms detaches all  attached champions on either of the two champions entering the realm.\n Kayn's  Umbral Trespass will cause him to detach immediately when Realm of Death ends.\nThe allied health, resource, and ultimate indicators (champion portraits located on the screen) will not update between realms as the players have no  vision of them.\n Camille's  The Hextech Ultimatum, catching  Draven's  Spinning Axe,  Ekko's  Timewinder and  Parallel Convergence,  Malzahar's  Null Zone,  Maokai's  Twisted Advance,  Lulu's  Pix,  Pyke's  Death from Below,  Taliyah's  Worked Grounds,  Viktor's  Gravity Field,  Ziggs'  Satchel Charge, and  Rift Scuttler's  Speed Shrine are exceptions and may still take effect between dimensions if the conditions are valid.\nEffects such as  Requiem,  Absolute Zero,  Grand Starfall and  Final Spark will only deal damage to enemies of the dimension they're in at time of cast. Ending the channel or cast time while inside another dimension will not do damage to nearby enemies.\nAny spawned terrain while in the Death Realm will remain inside until expired. They will not be destroyed.\n Akali's  Shuriken Flip can be recast even if the target is in another realm.\n Kindred's  Lamb's Respite is one of many area of effect abilities that will not take presence between realms.\n Malzahar's  Void Shift is special cased to not resist the slow but instead resist the dimension swap after the cast completes.\n Nocturne's  Paranoia only applies  nearsight to enemy champions in the same dimension as him.\n Orianna's  Ball will snap back to her the moment she switches realms.\n Sion's  Decimating Smash will stay in the realm Sion was in at the beginning of the  charge.\nThe target of  Devour will immediately leave  Tahm Kench's belly when he enters or leaves the Realm of Death.\n Taliyah's  Weaver's Wall is interrupted both for if she enters or leaves the Realm of Death.\n Urgot's  Fear Beyond Death cannot be recast while the target is in a different dimension than him. If the target is being reeled in however, then the execution at the end of the channel will take place regardless of the dimension either he or the target is in.\nThe fear upon a successful execution will occur in  Urgot's realm.\n Viego's  Mist Wraiths will spawn between realms.  Harrowed Path will also take presence between realms.\n Volibear's  Sky Splitter will only affect targets in the same realm as it was cast.\n Xayah's  Bladecaller cannot call  Feathers between dimensions.\n Yorick's  Dark Procession and  Maiden will take presence between realms.\n Zed's  Shadows will take presence between realms.\n Eye of the Herald and  Teleport are disabled while in the Realm of Death.\nControllable pets and decoys can still be commanded between realms.\nJungle plants ( Blast Cone,  Honeyfruit,  Scryer's Bloom) will not take presence between realms.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
        "castTime": "0.5",
        "effectRadius": "1200",
        "targetRange": "650",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Twice slain and thrice born, Mordekaiser is a brutal warlord from a foregone epoch who uses his necromantic sorcery to bind souls into an eternity of servitude. Few now remain who remember his earlier conquests, or know the true extent of his powers—but there are some ancient souls that do, and they fear the day when he may return to claim dominion over both the living and the dead."
}
    export default champion