 export const Gangplank: Champion =  {
  "id": 41,
  "key": "Gangplank",
  "name": "Gangplank",
  "title": "the Saltwater Scourge",
  "resource": "Mana",
  "attackType": "Melee",
  "stats": {
    "health": {
      "flat": 630,
      "perLevel": 114
    },
    "healthRegen": {
      "flat": 6,
      "perLevel": 0.6
    },
    "mana": {
      "flat": 280,
      "perLevel": 60
    },
    "manaRegen": {
      "flat": 8,
      "perLevel": 0.7
    },
    "armor": {
      "flat": 31,
      "perLevel": 4.7
    },
    "magicResistance": {
      "flat": 32,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 64,
      "perLevel": 4.2
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
      "perLevel": 3.2
    },
    "attackSpeedRatio": {
      "flat": 0.69
    },
    "attackCastTime": {
      "flat": 0.25
    },
    "attackTotalTime": {
      "flat": 1.52
    },
    "attackRange": {
      "flat": 125
    }
  },
  "positions": [
    "Top"
  ],
  "roles": [
    "Fighter",
    "Specialist"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 1,
    "mobility": 1,
    "utility": 2,
    "abilityReliance": 75,
    "difficulty": 3
  },
  "abilities": {
    "P": [
      {
        "name": "Trial by Fire",
        "icon": "https://cdn.communitydragon.org/latest/champion/Gangplank/ability-icon/p",
        "effects": [
          {
            "description": "<span class=\"ability-header\">Innate:</span> Periodically, Gangplank empowers his next basic attack to set the target on fire, dealing them[ 50 - 250 (based on level) (+ 100% bonus AD) (+ 2 per 1% critical strike chance) bonus true damage over 2.5 seconds. ][ 5 - 25 (based on level) (+ 10% bonus AD) (+ 0.2 per 1% critical strike chance) bonus true damage every 0.25 seconds over 2.5 seconds. ] Turrets are dealt 50% damage."
          },
          {
            "description": "If Gangplank successfully hits a target with Trial by Fire, he gains 15% - 30% (based on level) bonus movement speed for 2 seconds. Every time a Powder Keg explodes, the cooldown for Trial by Fire resets and Gangplank gains its bonus movement speed."
          },
          {
            "description": "Trial by Fire cannot be applied with Parrrley nor Powder Keg."
          }
        ],
        "targeting": "Passive",
        "affects": "Self, Enemies",
        "spellshieldable": "False",
        "damageType": "True damage",
        "spellEffects": "default",
        "notes": "Reapplying Trial by Fire before a previous application has run out will stack the full damage, instead of refreshing the duration.\nThe bonus true damage scaling based on critical strike chance is capped at 100% of the stat.\nIf the attack is  dodged or if Gangplank is  blinded, the effect is not applied nor does Trial by Fire go on cooldown. If the attack is  blocked, the effect is not applied, but Trial by Fire will go on cooldown.(note)\nThe empowered attack will not trigger against non- turret structures nor wards.",
        "blurb": "Innate: Every few seconds,  Gangplank's next basic attack will burn the target, continually dealing bonus true damage and granting him  bonus movement speed."
      }
    ],
    "Q": [
      {
        "name": "Parrrley",
        "icon": "https://cdn.communitydragon.org/latest/champion/Gangplank/ability-icon/q",
        "effects": [
          {
            "description": "<span class=\"ability-header\">Active:</span> Gangplank fires a shot at the target enemy that deals physical damage, applies on-hit effects as a ranged attack, and triggers on-attack effects. Parrrley can critically strike for (175% + 40%) damage.",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      10,
                      40,
                      70,
                      100,
                      130
                    ]
                  },
                  {
                    "values": [
                      100
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
            "description": "If Parrrley kills the target, Gangplank plunders gold and Silver Serpents. Each enemy killed by a Powder Keg explosion that was originally set off by Parrrley also counts for the plunder.",
            "leveling": [
              {
                "attribute": "Gold Plunder",
                "modifiers": [
                  {
                    "values": [
                      3,
                      4,
                      5,
                      6,
                      7
                    ]
                  }
                ]
              },
              {
                "attribute": "Silver Serpent Plunder",
                "modifiers": [
                  {
                    "values": [
                      4,
                      5,
                      6,
                      7,
                      8
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Silver Serpents can be spent in the shop to upgrade Cannon Barrage."
          }
        ],
        "cost": [
          55,
          50,
          45,
          40,
          35
        ],
        "cooldown": [
          4.5
        ],
        "targeting": "Unit",
        "affects": "Enemies, Self",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "Special",
        "projectile": "TRUE",
        "notes": "Parrrley deals  basic damage, but also triggers spell effects by also being tagged as  spell damage.\n Fleet Footwork will always trigger its melee effect, even when it is triggered by Parrrley.\n On-hit effects that deal damage to secondary targets will allow Parrrley to plunder from enemies killed that way, much like with  Powder Kegs.\n Ravenous Hydra and  Titanic Hydra work like this and will grant additional plunder from enemies they kill when triggered by Parrrley as their cast instance.\nEven spell effects such as  Luden's Companion will work with this when triggered by Parrrley as their cast instance. Spell effects that do not belong to their triggering cast instance, such as  Liandry's Torment's damage debuff, do not grant plunder for enemies they kill.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
        "blurb": "Active:  Gangplank shoots the target enemy with his pistol, dealing physical damage and applying  on-hit and on-attack effects.",
        "speed": "2600",
        "castTime": "0.25",
        "targetRange": "625",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Remove Scurvy",
        "icon": "https://cdn.communitydragon.org/latest/champion/Gangplank/ability-icon/w",
        "effects": [
          {
            "description": "<span class=\"ability-header\">Active:</span> Gangplank consumes a large quantity of citrus fruit, cleansing himself from all crowd control and healing himself.",
            "leveling": [
              {
                "attribute": "Heal",
                "modifiers": [
                  {
                    "values": [
                      45,
                      70,
                      95,
                      120,
                      145
                    ]
                  },
                  {
                    "values": [
                      90
                    ],
                    "units": [
                      "% AP"
                    ]
                  },
                  {
                    "values": [
                      13
                    ],
                    "units": [
                      "% missing health"
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "cost": [
          60,
          70,
          80,
          90,
          100
        ],
        "cooldown": [
          22,
          20,
          18,
          16,
          14
        ],
        "targeting": "Auto",
        "affects": "Self",
        "resource": "Mana",
        "spellEffects": "Heal",
        "notes": "Remove Scury does not remove debuffs other than  crowd control, even if both occur from the same effect. For example, Remove Scurvy will dispel the  slow from  Exhaust, but not its damage reduction.\nRemove Scurvy can remove the underlying  stun from  airborne, but a  blink or  dash ability is required to override the displacement.",
        "blurb": "Active:  Gangplank eats citrus to  cleanse  crowd control effects and  heal based on his missing health.",
        "castTime": "0.25",
        "maxCharges": -1
      }
    ],
    "E": [
      {
        "name": "Powder Keg",
        "icon": "https://cdn.communitydragon.org/latest/champion/Gangplank/ability-icon/e",
        "effects": [
          {
            "description": "<span class=\"ability-header\">Active:</span> Gangplank consumes a charge to place a powder keg at the target location that lasts for 25 seconds and will connect to other kegs with overlapping connection radius through a trail of black powder. The keg starts with 3 health and loses 1 every 2 / 1 / 0.5 (based on level) seconds until it is left with 1 health."
          },
          {
            "description": "Gangplank periodically stocks a Powder Keg charge, up to a maximum.",
            "leveling": [
              {
                "attribute": "Maximum charges",
                "modifiers": [
                  {
                    "values": [
                      3,
                      3,
                      4,
                      4,
                      5
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "Kegs can be basic attacked by enemies or Gangplank (including his Parrrley), dealing 1 damage to it. When an enemy destroys it, it is safely defused. When Gangplank destroys it, it explodes and also triggers a chain reaction that explodes other nearby connected kegs with a 0.33 seconds-delay between explosions. The explosions also grant sight of their radiuses for 2 seconds."
          },
          {
            "description": "Enemies caught in an explosion are slowed for 2 seconds, and are dealt the triggering attack's damage, dealing bonus physical damage against champions. Each enemy can only be hit once per chain and the damage dealt ignores 40% of the target's armor.",
            "leveling": [
              {
                "attribute": "Slow",
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
                      "%"
                    ]
                  }
                ]
              },
              {
                "attribute": "Bonus Champion Damage",
                "modifiers": [
                  {
                    "values": [
                      75,
                      105,
                      135,
                      165,
                      195
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "If the triggering attack was a critical strike, the explosions deal 5% more damage on top of the critical damage."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          0
        ],
        "targeting": "Location",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Charge",
        "damageType": "Physical damage",
        "spellEffects": "spellaoe",
        "projectile": "FALSE",
        "notes": "The triggering attack's damage can include  Parrrley's base damage and  Spellblade.\nWhen triggered with critical strike, Spellblade and the bonus damage to champions are added after the calculations, meaning that these effects are not increased by 5%.\nThe total damage can be calculated with this formula:{aDMG * [1.75 ( + 0.40)] * 1.05} + sDMG + cDMGWhere:\naDMG = Triggering attack's damage\nsDMG = Spellblade's damage\ncDMG = Bonus damage to champions\nKegs have special interactions with  Spellblade:\nIf the keg destroying attack was empowered with Spellblade, its damage will be added to the explosions' damage.\nIf the keg was not destroyed, it will consume the effect and the keg will store the damage it would have dealt. If the storing keg is the initial detonation of the chain, it will add its damage to the explosions' damage as if it was triggered with Spellblade.\nIf the storing keg was attacked with a new instance of Spellblade, it will override the previously stored damage (if different).\nDamage can only be stored if Spellblade was consumed by Gangplank.\nThe stored damage is static and will not change if Gangplank's base attack damage or ability power (see below) changes.\nSpecific  Spellblade item interactions:\n Bloodsong: Dealing damage with kegs to champions won't apply Expose Weakness to them.\n Iceborn Gauntlet: The frost field will be created on the location of the keg that is attacked.\n Lich Bane: The magic damage will be added to the explosions' damage, but will be dealt as physical damage.\n Trinity Force: Attacking kegs grants the movespeed from Quicken; dealing damage with the explosion does not since it does not trigger  on-hit effects.\nBarrels triggering a chain reaction will show a lit fuse traveling toward other barrels.\nThe lit fuse is only visual and does not affect the time it takes for barrels to explode.\nPlaced barrels do not grant  vision until they explode, but they are revealed to Gangplank.\nIf Gangplank loses allied vision, for instance due to  nearsight, he will also lose vision on his barrels temporarily.\nBarrels prematurely grant  sight of their explosion radius (including across terrain and into bushes) if  Parrrley or a lit fuse is traveling towards them.\nThis area reveal happens even if  Parrrley is not going to make it explode.\nAn exploding Powder Keg will splash  Parrrley's bonus damage, and will also be modified if the attack  critically strikes.\nAttacks against Powder Kegs will apply on-hit effects (such as  Tiamat's Cleave), but  proc damage against the barrel itself is reduced to 0.\nDamage from on-hit effects will not increase the damage of the explosion.\n Spellblade is a special-cased exception.\n Dead Man's Plate's Crushing Blow will not trigger from Powder Kegs destroyed from Gangplank, even with  Parrrley.\nThe number of Powder Kegs in stock is visible under Gangplank's health bar for all players.\nGangplank stocks Powder Kegs even if the ability hasn't been learned yet.\nThis is due to the recharge rate at level 1 being set the same as level 0.\nWhile at maximum charges, ranking up the ability to rank 3 or 5 grants the remaining charge immediately regardless of the recharge timer.\nIf a barrel is destroyed during the 0.33 seconds-delay between explosions, Gangplank will plunder  gold and  Silver Serpents upon killing enemies as if he had done so using  Parrrley.(bug)\nThis effect persists through  death and will only end upon killing an enemy with  Parrrley.",
        "blurb": "Active:  Gangplank places a Powder Keg at the target location, which can be basic attacked or  shot to damage it. If an enemy destroys a Powder Keg, it is safely dismantled.",
        "rechargeRate": [
          17,
          16,
          15,
          14,
          13
        ],
        "castTime": "0.25",
        "effectRadius": "345 /  360",
        "targetRange": "1000",
        "maxCharges": 3
      }
    ],
    "R": [
      {
        "name": "Cannon Barrage",
        "icon": "https://cdn.communitydragon.org/latest/champion/Gangplank/ability-icon/r",
        "effects": [
          {
            "description": "<span class=\"ability-header\">Active:</span> Gangplank shoots a flare into the air, signaling his ship off-shore to fire upon the target location for 8 seconds, calling down 12 waves of cannonballs in clusters of 3 every 2 seconds, and granting sight of the area for the duration. Each wave deals magic damage to all enemies within the area and slows them by 30% for 0.5 seconds.",
            "leveling": [
              {
                "attribute": "Magic Damage Per Wave",
                "modifiers": [
                  {
                    "values": [
                      40,
                      70,
                      100
                    ]
                  },
                  {
                    "values": [
                      10
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Magic Damage Per Cluster",
                "modifiers": [
                  {
                    "values": [
                      120,
                      210,
                      300
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
                "attribute": "Total Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      480,
                      840,
                      1200
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
          },
          {
            "description": "<span class=\"ability-header\">Gangplank can purchase upgrades for his ship in the store at the cost of 500 Silver Serpents each, which improve Cannon Barrage:</span>"
          },
          {
            "description": "<span class=\"ability-header\">Death's Daughter:</span> A large cannonball lands in the center of the barrage after the first cluster of waves occur, dealing a cluster's worth of true damage to enemies within the impact and slowing them by 75% for 1 second.",
            "leveling": [
              {
                "attribute": "True Damage with Death's Daughter",
                "modifiers": [
                  {
                    "values": [
                      120,
                      210,
                      300
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
                "attribute": "Total Mixed Damage with Death's Daughter",
                "modifiers": [
                  {
                    "values": [
                      600,
                      1050,
                      1500
                    ]
                  },
                  {
                    "values": [
                      150
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
            "description": "<span class=\"ability-header\">Fire at Will:</span> Cannon Barrage fires[ 6 additional waves ][ 2 additional clusters ] over its duration; 18 waves of cannonballs are called down in clusters of 3 every 1.33 seconds.",
            "leveling": [
              {
                "attribute": "Total Magic Damage with Fire at Will",
                "modifiers": [
                  {
                    "values": [
                      720,
                      1260,
                      1800
                    ]
                  },
                  {
                    "values": [
                      180
                    ],
                    "units": [
                      "% AP"
                    ]
                  }
                ]
              },
              {
                "attribute": "Maximum Mixed Total Damage with Fire at Will and Death's Daughter",
                "modifiers": [
                  {
                    "values": [
                      840,
                      1470,
                      2100
                    ]
                  },
                  {
                    "values": [
                      210
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
            "description": "<span class=\"ability-header\">Raise Morale:</span> Cannon Barrage grants Gangplank and all allies within the area 40% bonus movement speed, lingering for 2 seconds."
          }
        ],
        "cost": [
          100
        ],
        "cooldown": [
          170,
          150,
          130
        ],
        "targeting": "Location",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Magic damage",
        "spellEffects": "AOE",
        "notes": "Gangplank's upgrades for Cannon Barrage are offered through the shop and additionally from a special menu in the HUD which is only visible while inside the shop's area. Within the special menu, the player can purchase an upgrade by  clicking on its portrait or via the Champion Specific Interaction hotkeys (default: Shift+F1:F3).\nPurchased upgrades have a trim around their portrait. Upgrades that he does not have enough currency to purchase are greyed out.\nCannon Barrage's slow lingers for 0.25 seconds after affected enemies leave the target area.",
        "blurb": "Active:  Gangplank orders a cannon bombardment to the target location, each blast deals magic damage and  slows enemies within.",
        "innerRadius": "170",
        "castTime": "0.25",
        "effectRadius": "580",
        "targetRange": "Global",
        "maxCharges": -1
      }
    ]
  },
  "lore": "As unpredictable as he is brutal, the dethroned reaver king Gangplank is feared far and wide. Once, he ruled the port city of Bilgewater, and while his reign is over, there are those who believe this has only made him more dangerous. Gangplank would see Bilgewater bathed in blood once more before letting someone else take it—and now with pistol, cutlass, and barrels of gunpowder, he is determined to reclaim what he has lost."
}
