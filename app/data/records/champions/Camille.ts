// Updated Patch 25.15 - 08/06/2025 11:23:40 PM CDT

const champion: Champion =  {
  "id": 164,
  "key": "Camille",
  "name": "Camille",
  "title": "the Steel Shadow",
  "fullName": "Camille Ferros",
  "resource": "Mana",
  "attackType": "Melee",
  "stats": {
    "health": {
      "flat": 650,
      "perLevel": 99
    },
    "healthRegen": {
      "flat": 8.5,
      "perLevel": 0.8
    },
    "mana": {
      "flat": 339,
      "perLevel": 52
    },
    "manaRegen": {
      "flat": 8.15,
      "perLevel": 0.75
    },
    "armor": {
      "flat": 35,
      "perLevel": 5
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 68,
      "perLevel": 3.8
    },
    "movespeed": {
      "flat": 340
    },
    "acquisitionRadius": {
      "flat": 550
    },
    "selectionRadius": {
      "flat": 100
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
      "flat": 0.644,
      "perLevel": 2.5
    },
    "attackSpeedRatio": {
      "flat": 0.644
    },
    "attackCastTime": {
      "flat": 0.3
    },
    "attackTotalTime": {
      "flat": 1.552
    },
    "attackRange": {
      "flat": 125
    }
  },
  "positions": [
    "Support",
    "Top"
  ],
  "roles": [
    "Assassin",
    "Diver",
    "Fighter"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 2,
    "control": 2,
    "mobility": 3,
    "utility": 1,
    "abilityReliance": 40,
    "difficulty": 2
  },
  "abilities": {
    "P": [
      {
        "name": "Adaptive Defenses",
        "icon": "https://cdn.communitydragon.org/latest/champion/Camille/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Periodically, Camille's next basic attack on-hit against an enemy champion grants her a shield equal to 20% of her maximum health, lasting for 2 seconds and absorbing damage from either exclusively physical damage or magic damage, based on which type the target has previously dealt most of against champions as well as on Camille's current armor and magic resistance.</p>"
          }
        ],
        "targeting": "Passive",
        "affects": "Self",
        "notes": "Adaptive Defenses goes on cooldown after the shield expires or is destroyed.\nThe shield-typing is determined based on the total damage the target has dealt to champions that game (as a percentage) versus Camille's current  armor and  magic resistance.\nFor example, with little bonus resistances Camille would likely gain the most obvious shield-typing - i.e. physical shield versus champions primarily dealing physical damage and magic shield versus champions primarily dealing magic damage. However, if she has a sufficient amount of armor against a champion dealing both alternates of physical damage and magic damage, she will receive a magic shield as the physical damage threat is already being mitigated by her armor, and vice versa.\nThe type of shield that will be granted to Camille when she attacks any one enemy champion is shown as an icon beneath their health bar: orange for physical shield and blue for magic shield.\nAdaptive Defenses takes priority over all other  shields except  Black Shield.\nAdaptive Defenses Will not grant Camille the shield is the attack is  dodged,  blocked, or if she is  blinded.",
        "blurb": "Innate: Periodically,  Camille's next basic attack against a champion will  on-hit grant her a  shield against their damage type (physical or magical) for a short time."
      }
    ],
    "Q": [
      {
        "name": "Precision Protocol",
        "icon": "https://cdn.communitydragon.org/latest/champion/Camille/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Camille empowers her next basic attack within 4 seconds to have an uncancellable windup, gain 50 bonus range, deal bonus physical damage and grant her bonus movement speed for 1 second.</p>",
            "leveling": [
              {
                "attribute": "Bonus Physical Damage",
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
                      "% AD"
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
                      30,
                      35,
                      40,
                      45
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
            "description": "After 0.25 seconds, Precision Protocol can then be recast within the next 3.5 seconds at no additional cost."
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Camille mimics the first cast's effects. If Precision Protocol is recast after 1.5 seconds of the first attack, then the bonus damage is doubled, and 40% - 100% (based on level) of the attack's total damage will be dealt as true damage.</p>",
            "leveling": [
              {
                "attribute": "Increased Mixed Damage",
                "modifiers": [
                  {
                    "values": [
                      40,
                      50,
                      60,
                      70,
                      80
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
            "description": "Both casts of Precision Protocol reset Camille's basic attack timer. Camille is able to cast Tactical Sweep, Hookshot, or The Hextech Ultimatum during the windup of Precision Protocol's empowered attack without cancelling it."
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
        "affects": "Self",
        "spellshieldable": "false",
        "resource": "Mana",
        "damageType": "Other damage",
        "spellEffects": "spell",
        "notes": "Both casts count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nBoth enhanced attacks cannot  critically strike.\nThe 1.5-second delay is \"fuzzy\", meaning it may take up to another 0.25 seconds to ready the window for the empowered attack.\nThis syncs up perfectly with  Sheen's cooldown between casts at 0 item haste, which is also \"fuzzy\".\nThe second attack will also become empowered if it simply starts after the 1.5-second delay, even if the recast was consumed earlier.\nThe empowered recast's  true damage:\nHas a special case to factor  Spellblade into the true damage conversion of part of her attack's damage.\nOther on-hit effects do not interact with the true damage conversion.\nRandomly dependent on buff order, if (e.g.  Plated Steelcaps' Plating,  Path Maker) applies first before the conversion, then the resulting damage will be reduced, otherwise if the conversion happens first, then the damage will not be successfully reduced (both effects are pre-mitigation on-take-damage events).(bug)\nIs dealt just prior to the physical damage portion of the attack.\nPrecision Protocol applies to structures but the recast does not convert to true damage.\nThe enhanced attack will still complete and hit the target even if they become  untargetable during the attack's windup.\n Warden's Mail's flat damage reduction is reduced on the second cast, reducing the physical damage but not the true damage.(note)",
        "blurb": "Active:  Camille's next basic attack deals bonus physical damage and grants her  bonus movement speed.",
        "castTime": "none",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Tactical Sweep",
        "icon": "https://cdn.communitydragon.org/latest/champion/Camille/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Camille sweeps her leg in a cone in the target direction over 1.1 seconds, during which she is ghosted and unable to declare basic attacks. Afterwards, she deals physical damage to all enemies within.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      50,
                      75,
                      100,
                      125,
                      150
                    ]
                  },
                  {
                    "values": [
                      60
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
            "description": "Enemies hit by the outer half of the cone take additional physical damage, capped at 300 against monsters, and are slowed by 80% decaying over 2 seconds. Camille is healed for 100% of this additional damage post-mitigation against enemy champions in the outer half.",
            "leveling": [
              {
                "attribute": "Outer Cone Bonus Damage",
                "modifiers": [
                  {
                    "values": [
                      6,
                      6.5,
                      7,
                      7.5,
                      8
                    ],
                    "units": [
                      "%  of target's maximum health"
                    ]
                  },
                  {
                    "values": [
                      2.5
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
            "description": "Non-epic monsters take 50% damage from Tactical Sweep.",
            "leveling": [
              {
                "attribute": "Non-Epic Monster Damage",
                "modifiers": [
                  {
                    "values": [
                      25,
                      37.5,
                      50,
                      62.5,
                      75
                    ]
                  },
                  {
                    "values": [
                      30
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  }
                ]
              },
              {
                "attribute": "Bonus Non-Epic Monster Damage",
                "modifiers": [
                  {
                    "values": [
                      3,
                      3.25,
                      3.5,
                      3.75,
                      4
                    ],
                    "units": [
                      "%  of target's maximum health"
                    ]
                  },
                  {
                    "values": [
                      1.25
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
            "description": "Other abilities can be cast during the animation without cancelling it."
          }
        ],
        "cost": [
          50,
          55,
          60,
          65,
          70
        ],
        "cooldown": [
          17,
          15.5,
          14,
          12.5,
          11
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "true",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "spellaoe",
        "projectile": "FALSE",
        "notes": "Camille can move during the delay, but the hitbox and Camille's visuals are fixed to the initial target direction.\nCamille's facing-direction, for effects such as  Petrifying Gaze, is the direction she is moving, and not the direction the model is facing.\nThe 50% damage reduction against non-epic monsters applies after the cap. Because of this, the actual cap against non-epic monsters is 150 damage.\nBecause the increased damage in the outer range of the cone is dealt as an additional instance of damage (as opposed to bonus damage to the original instance), it will trigger effects twice such as being reduced by  Bone Plating an extra time.(note)\nIt still belongs to the same cast instance, therefore it does not trigger additional stacks of  Conqueror or  Electrocute.",
        "blurb": "Active:  Camille briefly becomes  ghosted and sweeps her leg after a delay, dealing physical damage to enemies hit in a cone. Enemies in the outer half are slowed and take increased damage, while also  healing her.",
        "angle": "70°",
        "castTime": "none",
        "effectRadius": "325 / 650",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Hookshot",
        "icon": "https://cdn.communitydragon.org/latest/champion/Camille/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Camille fires a grapple in the target direction. If the grapple collides with terrain, Camille will dash toward and attach to the terrain for 0.75 seconds, during which she gains the ability to cast Wall Dive.</p>"
          },
          {
            "description": "Camille will be knocked down by any immobilizing or polymorphing crowd control during the dash."
          },
          {
            "description": "Other abilities can be cast during the ability. Casting The Hextech Ultimatum will cause the grapple to disappear if it is in flight."
          }
        ],
        "cost": [
          70
        ],
        "cooldown": [
          16,
          15,
          14,
          13,
          12
        ],
        "targeting": "Direction",
        "affects": "Terrain, Self",
        "resource": "Mana",
        "projectile": "TRUE",
        "notes": "Camille may move while the grapple is in flight.\nHookshot can be cast while  rooted but not while  grounded.\nCamille will grapple to terrain even if she is  immobilized.\nHookshot can interact with player-generated terrain.\n Sleep does not count for knocking the dash down.(bug)",
        "blurb": "Active:  Camille fires a grapple,  dashing onto any terrain she hits and briefly perching onto it.",
        "speed": "1400",
        "width": "100",
        "castTime": "none",
        "targetRange": "800",
        "maxCharges": -1
      },
      {
        "name": "Wall Dive",
        "icon": "https://cdn.communitydragon.org/latest/champion/Camille/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Camille dashes in the target direction, dealing physical damage to enemies near the landing location. Wall Dive's range is doubled towards enemy champions within 1400 units. Camille grants ghosting to non-champions she passes through for 4 seconds.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
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
                      75
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
            "description": "Camille stops prematurely upon colliding with an enemy champion, knocking back all nearby enemy champions, though not through terrain, as well as stunning them for 0.75 seconds, while also gaining bonus attack speed for 5 seconds.",
            "leveling": [
              {
                "attribute": "Bonus Attack Speed",
                "modifiers": [
                  {
                    "values": [
                      40,
                      45,
                      50,
                      55,
                      60
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
            "description": "Wall Dive may be also cast with movement or attack commands. Other abilities besides The Hextech Ultimatum can be cast while grappled or during the dash."
          }
        ],
        "cost": [
          70
        ],
        "cooldown": [
          16,
          15,
          14,
          13,
          12
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "true",
        "damageType": "Physical damage",
        "spellEffects": "spellaoe",
        "notes": "Wall Dive count as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nDespite what one might assume from a wall-jumping ability, Wall Dive can be used to go through terrain (including the terrain she is bound to).\nCasting  Flash during Wall Dive's dash will interrupt it but Camille will affect enemies around the new location.\nWall Dive is disabled while  grounded or  rooted.\nWall Dive will not automatically cast from movement or attack commands in both cases. While grounded, however, Camille is able to move while bound. She may still dash away from her current location once the grounding finishes.\nCamille will only gain a range indicator towards each valid champion within the extended dash range (800), but will still gain the extended dash range without the indicator against enemies within the 1400 range.\nShe does not have to  see any enemy champions to gain the range indicator or extended range.\n Displacement immunity will not resist the application of the  stun.\nIf  Tactical Sweep is cast during Wall Dive's dash on its opposite direction, the target wil be  knockback further and to a different direction.(bug)\nThe following table refers for interactions while Camille is bound to terrain:\nWhen Camille is interrupted, she will automatically cast Wall Dive. The only exception is if she was interrupted by casting  Flash or  Recall, in which case Wall Dive cancels.\n\n\nAttacking\n\nInitiates the dash towards attack target.\n\n\nAbilities\n\n Precision Protocol and  Tactical Sweep are usable.  The Hextech Ultimatum is disabled.\n\n\nMovement\n\nInitiates the dash towards the commanded location.\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\nAll items interrupt\n\n\nConsumables\n\nInterrupts\n\n\nSpells\n\nUsable\n\nN/A\n\n\nDisabled\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Teleport  Hexflash\n\n\nInterrupted by\n\n Flash  Recall\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
        "blurb": "Active:  Camille  dashes, dealing physical damage to enemies near the landing location. Dash range is doubled towards enemy  champions.",
        "speed": "1050 + 100% movement speed",
        "castTime": "none",
        "effectRadius": "130",
        "targetRange": "400 / 800",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "The Hextech Ultimatum",
        "icon": "https://cdn.communitydragon.org/latest/champion/Camille/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Camille becomes untargetable and leaps with displacement immunity towards the target enemy champion over 0.5 seconds, revealing them for the duration and disrupting their ongoing channels.</p>"
          },
          {
            "description": "Upon landing on the target, she becomes targetable again and creates a hexagonal zone around her current location for a duration, knocking away all other nearby enemies on impact, though not through terrain.",
            "leveling": [
              {
                "attribute": "Zone Duration",
                "modifiers": [
                  {
                    "values": [
                      2.5,
                      3.25,
                      4
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
            "description": "The target cannot escape the zone through any means. While within the zone, Camille's basic attacks against the target deal bonus magic damage.",
            "leveling": [
              {
                "attribute": "Bonus Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      4,
                      6,
                      8
                    ],
                    "units": [
                      "% of target's current health"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "The Hextech Ultimatum ends automatically within 1 second if Camille leaves the area or dies."
          }
        ],
        "cost": [
          100
        ],
        "cooldown": [
          140,
          115,
          90
        ],
        "targeting": "Unit",
        "affects": "Enemies, Self",
        "spellshieldable": "true",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "Proc",
        "notes": "The  disrupt is 'nested' into a 0.4-second  Silence debuff on the target, but unlike normal silences, this debuff does not actually make the target unable to cast. Instead, this makes sure that the disrupt is prevented by  immunity to silences.\nCamille will attempt to basic attack the target upon landing.\nCamille will track the target if they change locations.\nShe will always land and create the zone after 0.5 seconds.\nIf the target becomes  untargetable,  dies, or moves 2000 or more units away during the dash, it will be interrupted and the ability's  cooldown and  mana cost will not be refunded.\n Knockaway speed is 1000.\nIf the target manages to be outside of the boundaries, they will immediately be pulled back towards the center of the hexagon.\nThe boundaries are not considered terrain ( Unstoppable Onslaught exception), and enemies that try to move out of the area will be displaced back inside.\n Dashes,  blinks,  displacements, and other forms of movement will cap their effect range to the boundary. Targets will stop at the boundary even after it expired.\n Ekko's  Chronobreak will still deal damage at the hologram's location.\nAn active  Cease and Desist on a target outside the perimeter will cause  Vi to continue her charge until The Hextech Ultimatum ends. She can knockback and damage secondary targets multiple times.\nIf the target  attaches to a unit, they will only be displaced back inside once they detach. The Hextech Ultimatum does not end nor break the bind to the victim.\n Kayn's  Umbral Trespass allows him to cast it even if his target is outside the area, dashing through the borders and attaching despite being unable to escape.\n Yuumi's  You and Me! allows her to bypass the borders if the unit she attaches to leaves the area.\n Tristana's  Rocket Jump does not allow her to escape, but she applies the magic damage and  slow.\n Sett's  The Show Stopper does not allow him to pass through the borders and the dash will end prematurely when he encounters them.\nIf the target of  The Show Stopper is also the target of The Hextech Ultimatum, they can go through the borders while attached to him.\nIf Camille enters  resurrection during the initial cast, the  dash is stopped and the zone is formed immediately.\nThe Hextech Ultimatum ends if the target enters resurrection, but not if Camille does.\nThe Hextech Ultimatum ends immediately if the target is dragged by  Fear Beyond Death, or displaced outside of the zone by  Dragon's Rage or  Keeper's Verdict.\nThe following table refers for interactions while Camille is dashing.\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll summoner spells are disabled\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
        "blurb": "Active:  Camille  dives onto an enemy champion, creating a zone around the target and  knocking away all other enemies.",
        "castTime": "none",
        "effectRadius": "425",
        "targetRange": "475",
        "maxCharges": -1
      }
    ]
  },
  "lore": "Weaponized to operate outside the boundaries of the law, Camille is the Principal Intelligencer of Clan Ferros—an elegant and elite agent who ensures the Piltover machine and its Zaunite underbelly runs smoothly. Adaptable and precise, she views sloppy technique as an embarrassment that must be put to order. With a mind as sharp as the blades she bears, Camille's pursuit of superiority through hextech body augmentation has left many to wonder if she is now more machine than woman."
}
    export default champion