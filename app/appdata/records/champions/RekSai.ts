// Updated Patch 25.16 - 08/14/2025 07:55:49 PM CDT

const champion: Champion =  {
  "id": 421,
  "key": "RekSai",
  "name": "Rek'Sai",
  "title": "the Void Burrower",
  "resource": "Rage",
  "attackType": "Melee",
  "stats": {
    "health": {
      "flat": 600,
      "perLevel": 99
    },
    "healthRegen": {
      "flat": 2.5,
      "perLevel": 0.5
    },
    "mana": {
      "flat": 100
    },
    "armor": {
      "flat": 35,
      "perLevel": 4.5
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 58,
      "perLevel": 3
    },
    "movespeed": {
      "flat": 340
    },
    "acquisitionRadius": {
      "flat": 600
    },
    "selectionRadius": {
      "flat": 100
    },
    "pathingRadius": {
      "flat": 30
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
      "flat": 0.667,
      "perLevel": 2
    },
    "attackSpeedRatio": {
      "flat": 0.667
    },
    "attackCastTime": {
      "flat": 0.4
    },
    "attackTotalTime": {
      "flat": 1.5
    },
    "attackDelayOffset": {
      "flat": -0.092
    },
    "attackRange": {
      "flat": 175
    }
  },
  "positions": [
    "Jungle"
  ],
  "roles": [
    "Diver",
    "Fighter",
    "Tank"
  ],
  "attributeRatings": {
    "damage": 2,
    "toughness": 2,
    "control": 2,
    "mobility": 2,
    "utility": 2,
    "abilityReliance": 30,
    "difficulty": 2
  },
  "abilities": {
    "P": [
      {
        "name": "Fury of the Xer'Sai",
        "icon": "https://cdn.communitydragon.org/latest/champion/RekSai/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Rek'Sai basic attacks and ability hits generate 25 Fury. After 8 seconds of being out of combat, she loses 20 Fury per second. Fury gain is reduced[ by 80% ][ to 5 per hit ]against minions, wards, and plants. Prey Seeker will not generate Fury against non- champions.</p>"
          },
          {
            "description": "When Rek'Sai becomes Burrowed, she consumes her current Fury over 3 seconds to heal for up to 10% - 20% (based on level) maximum health at 100 Fury, stopping once fully consumed or she reaches full health. If she starts generating Fury while Burrowed, the consumption occurs after 5 seconds."
          }
        ],
        "targeting": "Passive",
        "affects": "Self",
        "notes": "Fury bar changes from Yellow to Red when full.\nWhen Rek'Sai automatically consumes Fury while Burrowed (no transformation), the healing buff will refresh every second while she has/maintains over 25 Fury.(note) This causes the healing to last 6 seconds at 100 Fury.",
        "blurb": "Innate:  Rek'Sai's basic attacks and ability hits generate  Fury, which continually expires after a few seconds out of combat."
      }
    ],
    "Q": [
      {
        "name": "Queen's Wrath",
        "icon": "https://cdn.communitydragon.org/latest/champion/RekSai/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Rek'Sai gains 35% bonus attack speed for 3 seconds. Her next basic attack within the duration will have an uncancellable windup and deal bonus physical damage to the target and surrounding enemies. Queen's Wrath's damage to the primary target is affected by critical strike modifiers.</p>",
            "leveling": [
              {
                "attribute": "Bonus Physical Damage",
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
                      "% AD"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "If Rek'Sai completes an attack, the duration is refreshed, for up to 3 total empowered attacks."
          },
          {
            "description": "Queen's Wrath resets Rek'Sai's basic attack timer."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          4,
          3.5,
          3,
          2.5,
          2
        ],
        "targeting": "Auto",
        "affects": "Enemies",
        "spellshieldable": "false",
        "damageType": "Physical damage",
        "spellEffects": "special",
        "notes": "Damage to the primary target applies  spell damage and damage to secondary targets applies  default damage.\nQueen's Wrath's bonus damage applies against structures.\nWhen  dodged or  blocked, or if Rek'Sai is  blinded, the damage dealt to the primary target is nullified, but the damage around her will still occur.",
        "blurb": "Active:  Rek'Sai empowers her next 3 basic attacks within a few seconds to gain a moderate amount of  attack speed and deal bonus physical damage to the target and surrounding enemies.",
        "castTime": "none",
        "effectRadius": "325",
        "maxCharges": -1
      },
      {
        "name": "Prey Seeker",
        "icon": "https://cdn.communitydragon.org/latest/champion/RekSai/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Rek'Sai fires a void bolt in the target direction that detonates on the first enemy hit, dealing magic damage to all nearby enemies and revealing them for 5 seconds.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      50,
                      80,
                      110,
                      140,
                      170
                    ]
                  },
                  {
                    "values": [
                      25
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
          0
        ],
        "cooldown": [
          4,
          3.5,
          3,
          2.5,
          2
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "True",
        "damageType": "Magic damage",
        "spellEffects": "Area of effect",
        "projectile": "TRUE",
        "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nPrey Seeker's effect radius is centered around the location of the missile as it collides.",
        "blurb": "Active:  Rek'Sai fires a void bolt in the target direction that detonates on the first enemy hit, dealing magic damage to all nearby enemies and  revealing them for a short time.",
        "speed": "1950",
        "width": "130",
        "castTime": "0.1",
        "effectRadius": "150",
        "targetRange": "1500",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Burrow",
        "icon": "https://cdn.communitydragon.org/latest/champion/RekSai/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Rek'Sai becomes Burrowed, reducing her attack range by 50 and her sight radius to 385 units, while gaining access to her Burrowed abilities. She also becomes ghosted and gains bonus movement speed, as well as Tremor Sense.</p>",
            "leveling": [
              {
                "attribute": "Bonus Movement Speed",
                "modifiers": [
                  {
                    "values": [
                      5,
                      10,
                      15,
                      20,
                      25
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Tremor Sense:</span> Rek'Sai and her allies gain obscured vision of nearby enemy units that are moving at a rate of once every second.</p>"
          },
          {
            "description": "Once Burrow has been learned, Rek'Sai automatically becomes Burrowed upon completing a Recall channel or respawning."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          4
        ],
        "targeting": "Auto",
        "affects": "Self",
        "notes": "Burrow does not count as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nEnemies detected by Tremor Sense are displayed as rings on the ground. Champions display larger rings and Rek'Sai will react to this detection.\nVisible enemies will not be detected by Tremor Sense. Enemies standing still while Rek'Sai is nearby are insensible by Tremor Sense.\nRek'Sai sensing a nearby enemy with Tremor Sense.",
        "blurb": "Active:  Rek'Sai becomes Burrowed, reducing her  attack range and her  sight radius while gaining access to her Burrowed abilities. She also becomes  ghosted and gains  bonus movement speed, as well as Tremor Sense.",
        "castTime": "none",
        "effectRadius": "1500",
        "maxCharges": -1
      },
      {
        "name": "Unburrow",
        "icon": "https://cdn.communitydragon.org/latest/champion/RekSai/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Rek'Sai becomes Un-Burrowed, gaining access to her Un-Burrowed abilities and emerging from the ground to deal magic damage to nearby enemies, knocking them up for 1 second. Minions and small monsters are instead knocked back a short distance. Targets hit cannot be displaced by Unburrow again for some time.</p>",
            "leveling": [
              {
                "attribute": "Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      30,
                      55,
                      80,
                      105,
                      130
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
            "description": "Rek'Sai can also trigger Unburrow by issuing an attack command, casting the ability once she is in attack range of the target and applying the knock up against them."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          4
        ],
        "targeting": "Auto",
        "affects": "Self / Enemies",
        "spellshieldable": "True",
        "damageType": "Magic damage",
        "spellEffects": "spellaoe",
        "notes": "Unburrow can apply the knock up to minions and small monsters if the ability is cast against them with an attack command.\nUnburrow does not count as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nUnburrow is still considered an ability and is thus stopped by  silence. She can basic attack normally during this time, without leaving unburrow.\nFor a brief moment during the beginning animation of  Tunnel, Rek'Sai can trigger Unburrow by issuing an attack command.",
        "blurb": "Active:  Rek'Sai becomes Un-Burrowed, gaining access to her Un-Burrowed abilities. Additionally, she deals magic damage to nearby enemies and  knocks them up. The enemies and cannot be affected again by Unburrow for some time.",
        "onTargetCdStatic": "10 / 9 / 8 / 7 / 6",
        "castTime": "none",
        "effectRadius": "220 /  250 /  75",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Furious Bite",
        "icon": "https://cdn.communitydragon.org/latest/champion/RekSai/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Rek'Sai bites the target enemy, dealing physical damage.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      80,
                      108,
                      136,
                      164,
                      192
                    ]
                  },
                  {
                    "values": [
                      64
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
            "description": "At maximum Fury, Furious Bite deals 125% damage and is converted to true damage.",
            "leveling": [
              {
                "attribute": "True Damage",
                "modifiers": [
                  {
                    "values": [
                      100,
                      135,
                      170,
                      205,
                      240
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
              }
            ]
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          6
        ],
        "targeting": "Unit",
        "affects": "Enemies",
        "spellshieldable": "True",
        "damageType": "Physical damage",
        "spellEffects": "spell",
        "notes": "If the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
        "blurb": "Active:  Rek'Sai bites the target enemy, dealing physical damage. At maximum  Fury, Furious Bite's deals true damage.",
        "castTime": "0.25",
        "targetRange": "225",
        "maxCharges": -1
      },
      {
        "name": "Tunnel",
        "icon": "https://cdn.communitydragon.org/latest/champion/RekSai/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Rek'Sai dashes in the target direction, leaving behind a Tunnel with two interconnected entrances that lasts up to 10 minutes. The Tunnel can be traversed again when Rek'Sai targets either entrance, shutting down the Tunnel for a few seconds.</p>"
          },
          {
            "description": "Rek'Sai can have up to 8 Tunnels active on the map at once, but deploying beyond the maximum destroys the oldest one. Enemy champions can destroy a Tunnel by standing on either entrance for 1.5 seconds, granting them 5 upon successfully destroying the Tunnel."
          },
          {
            "description": "If Rek'Sai attempts to enter a Tunnel while Un-Burrowed, she will automatically Burrow and dash to the Tunnel's selected entrance over 0.6 seconds before entering it, and automatically Unburrow after exiting the Tunnel. This does not place Burrow on cooldown nor trigger Fury of the Xer'Sai, but does trigger other Burrow effects and Unburrow. If Burrow is on cooldown at the time of interacting with the Tunnel, the cooldown will be reset."
          },
          {
            "description": "Rek'Sai cannot enter a tunnel while immobilized, grounded, or silenced."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          6
        ],
        "targeting": "Direction",
        "affects": "Self",
        "notes": "Creating a Tunnel grants  sight of the area at the other end for 2 seconds.\nTunnel entrances can be targeted by allied movement abilities (ex:  Leap Strike,  Shunpo,  Safeguard,  Teleport).\nTunnel entrances are  visible on allied champions' minimaps, while enemies must first gain  sight of one before it becomes visible on theirs (the opposite entrance is not revealed).\nDestroying a Tunnel while Rek'Sai is traversing it will not prevent her from reaching the opposite entrance.\nRek'Sai can Tunnel through terrain if she dashes close to them and the wall is thin enough to allow the opposite entrance to spawn on the other side.\nIf Rek'Sai issues an attack command while the dash passes by an enemy, the target will be knocked up but Rek'Sai will still complete the movement.",
        "blurb": "Active:  Rek'Sai  dashes in the target direction and creates a Tunnel in her wake that lasts for a while. Rek'Sai can travel through the Tunnel in either direction, which becomes disabled afterwards for a few seconds.",
        "speed": "500 + 100% movement speed",
        "castTime": "none",
        "targetRange": "850",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Void Rush",
        "icon": "https://cdn.communitydragon.org/latest/champion/RekSai/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Rek'Sai applies Marked as Prey to enemy champions she damages, lasting for 5 seconds.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Rek'Sai singles out the target enemy champion Marked as Prey, becoming displacement immune and unable to act and vanishing into the ground, as well as revealing the target for 2 seconds. After 0.9 seconds, she blinks to a location near the target, becoming targetable again and emerging from the ground to pounce at them. Upon arrival, she slashes at the target with her claws, dealing physical damage, and dashes 125 units through them.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
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
                      100
                    ],
                    "units": [
                      "% bonus AD"
                    ]
                  },
                  {
                    "values": [
                      15,
                      20,
                      25
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
            "description": "If cast while in Burrowed form, Rek'Sai will automatically Unburrow at the end of Void Rush's cast time, placing Burrow on a 1-second cooldown without triggering Unburrow's effects. If Burrow is already on cooldown, its remaining cooldown is set to 1 second."
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
        "targeting": "Unit",
        "affects": "Enemies",
        "spellshieldable": "True",
        "damageType": "Physical damage",
        "spellEffects": "spell",
        "notes": "Rek'Sai will track the target if they change locations while dashing to them. Once she has started to dash through the target however, she will no longer track them.\nShe will dash through the target's previous location without dealing damage if the target moves beyond 1750 units.\nIf the target moves 1000 or more units away right before being struck, they will not be dealt the damage.\nIn this case, the target is displaced in the moment when Rek'Sai starts to dash through and prepares to strike them.\nVoid Rush will be cancelled and placed on a  5-second cooldown if the target dies or moves too far away during the cast time or while Rek'Sai is vanished, or if they are no longer in  sight during the cast time.\nIf the ability is cancelled while Rek'Sai is vanished, she will reappear and emerge from the ground without performing the dash once the 0.9-second delay has elapsed.\nIf the ability is cancelled from losing sight of the target, Rek'Sai will not vanish into the ground after the cast time (but still becoming untargetable) and will remain in place while unable to act for 0.5 seconds.(note)\nThe ability will not be cancelled if the target becomes  untargetable during the cast time or while Rek'Sai is vanished.\nShe will still dash to the target even if they are untargetable.\nAll sources of damage by Rek'Sai count for applying the mark.\nRek'Sai gains the  displacement immunity from the start of the cast time, and loses it once her dash ends.\nRek'Sai can activate Void Rush either while  Burrowed or  Unburrowed.\nShe will always emerge as Unburrowed.\nIf Rek'Sai enters  resurrection during the cast time, Void Rush is canceled and goes on a 5 second cooldown.\nIf the resurrection occurs while  vanished, she will emerge and pounce the target immediately.\nVoid Rush will not deal damage if the target is  untargetable by the time Rek'Sai reaches them.\nAfter vanishing and then emerging, Rek'Sai will leave behind a temporary, cosmetic  Tunnel. She cannot interact with this Tunnel, and each entrance is destroyed 2.25 seconds after being spawned from when she vanished or emerged.\nA screeching noise made by Rek'Sai can be heard globally after Void Rush is cast (will be heard by enemies even if they don't have  sight of Rek'Sai and/or her destination).\nThe following table refers for interactions while Rek'Sai is performing Void Rush:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath\n\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll summoner spells are disabled\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
        "speed": "1400",
        "castTime": "0.25",
        "targetRange": "1500",
        "maxCharges": -1
      }
    ]
  },
  "lore": "An apex predator, Rek'Sai is a merciless Void-spawn that tunnels beneath the ground to ambush and devour unsuspecting prey. Her insatiable hunger has laid waste to entire regions of the once-great empire of Shurima—merchants, traders, even armed caravans, will go hundreds of miles out of their way to avoid her and her offspring's hunting grounds. All know that once Rek'Sai is seen on the horizon, death from below is all but guaranteed."
}
    export default champion