// Updated Patch 25.11 - 06/08/2025 12:01:46 PM CDT

const champion: Champion =  {
  "id": 429,
  "key": "Kalista",
  "name": "Kalista",
  "title": "the Spear of Vengeance",
  "fullName": "Kalista vol Kalah Heigaari",
  "resource": "Mana",
  "attackType": "Ranged",
  "stats": {
    "health": {
      "flat": 580,
      "perLevel": 114
    },
    "healthRegen": {
      "flat": 4,
      "perLevel": 0.75
    },
    "mana": {
      "flat": 300,
      "perLevel": 45
    },
    "manaRegen": {
      "flat": 6.3,
      "perLevel": 0.8
    },
    "armor": {
      "flat": 24,
      "perLevel": 5.2
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 57,
      "perLevel": 4
    },
    "movespeed": {
      "flat": 330
    },
    "acquisitionRadius": {
      "flat": 900
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
      "flat": 0.694,
      "perLevel": 4.5
    },
    "attackSpeedRatio": {
      "flat": 0.694
    },
    "attackCastTime": {
      "flat": 0.3
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackDelayOffset": {
      "flat": 0.06
    },
    "attackRange": {
      "flat": 525
    }
  },
  "positions": [
    "Bottom"
  ],
  "roles": [
    "Marksman"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 1,
    "mobility": 3,
    "utility": 2,
    "abilityReliance": 10,
    "difficulty": 3
  },
  "abilities": {
    "P": [
      {
        "name": "Martial Poise",
        "icon": "https://cdn.communitydragon.org/latest/champion/Kalista/ability-icon/p",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Whenever Kalista inputs a movement command during her basic attack windup or the cast time of Pierce, she will dash a short distance in the direction of the inputted location.Kalista cannot dash while immobilized or grounded, and she will be knocked down by any immobilizing or polymorphing crowd control during the dash.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Martial Poise's dash range and speed details:</span></p>\nDash range of basic attacks is modified by the tier of Kalista's Boots and the specific angle of the dash.\nAt a 0° angle towards the target, the minimum dash range is 140 / 153 / 166 / 175 (based on Boots Tier) units.\nAt a 90° angle, the maximum dash range is 240 / 263 / 280 / 300 (based on Boots Tier) units.\nDash range of Pierce is 300 units when dashing anywhere in the direction of the point of cast.\nIf the dash is inputted to a location that is away from Pierce's point of cast, the dash range is reduced based on the cast angle, with a minimum distance of 150 units if the inputted location is directly opposite to the point of cast.\nDash speed is increased based on the tier of Kalista's Boots, and is affected by her bonus attack speed as well as multiplicative movement speed modifiers she is under the effect of (including slows)."
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Oathsworn Bond:</span> Kalista begins the game with an exclusive Black Spear that she can activate on an allied champion to force them to swear an oath with her. Once the oath has been sworn, the ally becomes her Oathsworn, causing Kalista to form a tether between her and them. While she and the ally bound as the Oathsworn are within tether range of each other, they can both interact with Soul-Mark and Fate's Call.</p>"
          },
          {
            "description": "Kalista can purchase the Black Spear from the shop at no cost to obtain it again and, before 3 minutes of game time, may activate the item again on a different target to rebind and swear an oath with a new ally. See Black Spear for more details."
          }
        ],
        "targeting": "Direction",
        "affects": "Self",
        "notes": "Movement commands inputted during an attack windup or the cast time of  Pierce while Kalista is  immobilized or  grounded will fail to cast and thus prevent the dash from triggering.\nThe movement command will still be buffered to the end of the immobilization or the end of the attack windup or cast time of  Pierce while grounded if it has not been overridden by other inputs.\nIf multiple movement commands are inputted during the attack windup, the most recent one is used for the dash's targeting.\nIf the most recent input is not a movement command, the dash will not trigger.\nIn this case, the buffer for the previous movement command was cancelled by a new non-movement command such as an input for an attack or ability cast.\nDash distance decreases as the dash direction becomes closer to the minimum direction. This defines a forward distance for basic attacks and a backwards distance for  Pierce. Empirical testing has given the following values below.\nBasic attack dash range given the angle θ:\n{(175+(125×sin⁡(θ)))×T\nWhere T=0.800,0.875,0.950,1.000 depending on the tier of Boots (T0, T1, T2, T3)\nMinimum dash range of 225 units when dashing backwards\n Pierce's dash range given the angle θ:\n{150+(150×sin⁡(θ))Backwards300Otherwise\nThere is a very brief grace period after completing a basic attack windup wherein  Kalista can still input a movement command to trigger the dash.\nThe dash speed is unaffected by additive movement speed modifiers.\nThere are a total of 24 different dash ranges based on direction with Boots and  Pierce being cast.\nKalista will automatically be issued an attack command on her attack target at the end of the dash, as long as they remain in her attack range by then.\nThe attack move (default A + MB1) click feature checks for targets in brief intervals only if Kalista is not dashing.\nKalista's facing direction when dashing is considered to be in the direction of the dash, not her apparent facing direction based on her model's animation state.\n Sleep does not count for knocking the dash down.(bug)",
        "blurb": "Innate: During each basic attack or casting of  Pierce,  Kalista can optionally choose a target direction to quickly  dash to. The range is based on dash angle and Kalista's Boots tier. The dash speed scales withbonus attack speed and certain movement speed effects.",
        "tetherRadius": "1100"
      }
    ],
    "Q": [
      {
        "name": "Pierce",
        "icon": "https://cdn.communitydragon.org/latest/champion/Kalista/ability-icon/q",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kalista launches a spear in the target direction that deals physical damage to the first enemy hit.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      10,
                      75,
                      140,
                      205,
                      270
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
            "description": "If Pierce kills the target, the spear continues onward to transfer all of the target's Rend stacks to the next enemy it hits. This can repeat indefinitely until the spear reaches its maximum range."
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
          8
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "Single target",
        "projectile": "TRUE",
        "notes": "This ability will cast from wherever the caster is at the end of the cast time.",
        "blurb": "Active:  Kalista throws a spear in the target direction that deals physical damage to the first enemy hit.",
        "speed": "2400",
        "width": "80",
        "castTime": "0.25",
        "targetRange": "1200",
        "maxCharges": -1
      }
    ],
    "W": [
      {
        "name": "Sentinel",
        "icon": "https://cdn.communitydragon.org/latest/champion/Kalista/ability-icon/w",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive - Soul-Marked:</span> While Kalista and her Oathsworn are tethered, their basic attacks and Pierce apply a Soul-Mark to the target hit for 4 seconds.</p>"
          },
          {
            "description": "If both Kalista's and the Oathsworn's Soul-Mark are applied to the same enemy, the marks are consumed to deal magic damage to the target, capped against non-champions. Soul-Mark cannot affect an enemy more than once every few seconds.",
            "leveling": [
              {
                "attribute": "Bonus Magic Damage",
                "modifiers": [
                  {
                    "values": [
                      10,
                      12,
                      14,
                      16,
                      18
                    ],
                    "units": [
                      "% of target's maximum health"
                    ]
                  }
                ]
              },
              {
                "attribute": "Maximum Non-Champion Damage",
                "modifiers": [
                  {
                    "values": [
                      100,
                      125,
                      150,
                      175,
                      200
                    ]
                  }
                ]
              }
            ]
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kalista summons a Sentinel that patrols back and forth on a path along the target location, granting sight of its surroundings as it travels.</p>"
          },
          {
            "description": "Kalista periodically stocks a Sentinel charge, up to a maximum of 2."
          },
          {
            "description": "See Pets for more details about Sentinels."
          }
        ],
        "cost": [
          0
        ],
        "cooldown": [
          30
        ],
        "targeting": "Direction",
        "affects": "Enemies",
        "damageType": "Magic damage",
        "spellEffects": "proc",
        "notes": "The damage is dealt on-attack of Kalista's basic attack if she applies the second mark. If the Oathsworn does so instead, the damage is dealt on-hit of their basic attack.\nSoul-Marked's bonus damage is credited to Kalista and will benefit from both her  magic penetration and spell effects.\nIf her  Oathsworn ally scores a kill using Soul-Marked's bonus damage they will get a message stating 'Kill Secured' in place of the usual gold pop-up (the gold itself is credited to Kalista).\nThe Sentinel's  sight reveal on enemy  champions is accredited for assists and potentially kills (if they die shortly after being spotted).\nIt does not reveal  stealthed targets.\nSentinel will cast from wherever Kalista is at the end of the cast time.\nPENDING FOR TEST: Soul Mark's interaction with parrying effects ( dodge,  block,  blind).\nPENDING FOR TEST: If Pierce kills the target by Soul-Mark's additional damage, it will/will not continue.",
        "blurb": "Passive - Soul-Marked: While  Kalista and her  Oathsworn are  tethered, their basic attacks and  Pierce apply a Soul-Mark to their targets for a few seconds. If both Soul-Marks are applied to the same target, they take bonus magic damage.",
        "rechargeRate": [
          90,
          80,
          70,
          60,
          50
        ],
        "tetherRadius": "1100",
        "onTargetCdStatic": "10",
        "castTime": "0.5",
        "targetRange": "1400 / 5000",
        "maxCharges": 2
      }
    ],
    "E": [
      {
        "name": "Rend",
        "icon": "https://cdn.communitydragon.org/latest/champion/Kalista/ability-icon/e",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Kalista's basic attacks on-hit and Pierce apply a stack of Rend to enemies for 4 seconds, refreshing on subsequent hits and stacking up to 254 times.</p>"
          },
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kalista rips all lodged spears from nearby enemies, consuming all of their stacks to deal them physical damage and slow them for 2 seconds. Each additional spear on the target deals reduced damage. Rend deals 50% damage against epic monsters.</p>",
            "leveling": [
              {
                "attribute": "Physical Damage",
                "modifiers": [
                  {
                    "values": [
                      5,
                      15,
                      25,
                      35,
                      45
                    ]
                  },
                  {
                    "values": [
                      70
                    ],
                    "units": [
                      "% AD"
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
                "attribute": "Damage per Additional Stack",
                "modifiers": [
                  {
                    "values": [
                      7,
                      14,
                      21,
                      28,
                      35
                    ]
                  },
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
                "attribute": "Slow",
                "modifiers": [
                  {
                    "values": [
                      10,
                      18,
                      26,
                      34,
                      42
                    ],
                    "units": [
                      "%"
                    ]
                  },
                  {
                    "values": [
                      5
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
            "description": "If Rend kills at least one target, the cooldown is reset and Kalista restores mana.",
            "leveling": [
              {
                "attribute": "Mana Restored",
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
            "description": "A nearby enemy with a Rend stack is required to cast this ability. Rend can be used during the dash of Martial Poise and the cast time of Pierce. In-flight spears and Pierce if in cast will be empowered to apply Rend's effects to their targets. These empowered spears can also trigger Rend's refund."
          }
        ],
        "cost": [
          30
        ],
        "cooldown": [
          0
        ],
        "targeting": "Auto",
        "affects": "Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "damageType": "Physical damage",
        "spellEffects": "Area of effect",
        "notes": "Rend at maximum stacks will deal a total of 2044 / 3066 / 4341 / 5869 / 7650 (+ 5914.3 / 7079.618 / 8186.493 / 9293.368 / 10400.243% AD) physical damage.\nRend cannot activate on  untargetable enemies.\nRend applies its effects instantly on cast.\nThe cooldown will not reset if the target is protected by  resurrection effects.\nIf Rend is used against  Sion under the effects of  Glory in Death, the cooldown will reset even if it does not kill him.(bug)\nA stack is not applied if the attack is  dodged,  blocked or missed while Kalista is  blinded.\n Pierce does not apply a stack of Rend if blocked by  spell shield.\nWhile  berserk, Kalista's attacks will also apply Rend stacks on allies.\nKalista will be unable to cast Rend if there are no stacks on an enemy in range.\nRend cannot cast on allies, even if a valid enemy target exists. As such, any spears on allied units are purely cosmetic.\nRend has a lower cast range than effect range.",
        "blurb": "Passive:  Kalista's basic attacks and  Pierce lodge a spear into their target, applying a stack of Rend for a few seconds.",
        "castTime": "0.25",
        "effectRadius": "1100",
        "maxCharges": -1
      }
    ],
    "R": [
      {
        "name": "Fate's Call",
        "icon": "https://cdn.communitydragon.org/latest/champion/Kalista/ability-icon/r",
        "effects": [
          {
            "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kalista invokes her tether to retrieve and hold her Oathsworn for 4 seconds. Kalista cleanses the Oathsworn from all crowd control and renders them invulnerable and untargetable for the duration, and pulls them to her over 1 second.</p>"
          },
          {
            "description": "While held, the Oathsworn is vanished and may select a target location to dash to with displacement immunity, ending Fate's Call's invocation and reappearing at the location. If the invocation ends without the Oathsworn selecting a target location, they will automatically do so at maximum range from Kalista's facing direction."
          },
          {
            "description": "The Oathsworn's dash stops upon colliding with an enemy champion. Upon the dash ending by collision or arriving to the targeted location, the Oathsworn knocks back all nearby enemies and keeps them airborne for a set duration, while simultaneously landing to their base attack range from the closest target hit.",
            "leveling": [
              {
                "attribute": "Airborne Duration",
                "modifiers": [
                  {
                    "values": [
                      1,
                      1.5,
                      2
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
            "description": "The Oathsworn must be within tether range to cast this ability, and is also silenced and unable to perform movement or attack commands while Fate's Call is in effect."
          }
        ],
        "cost": [
          100
        ],
        "cooldown": [
          160,
          140,
          120
        ],
        "targeting": "Auto",
        "affects": "Oathsworn Ally / Enemies",
        "spellshieldable": "True",
        "resource": "Mana",
        "notes": "The Oathsworn's landing location of the lunge is precisely to their base attack range from the closest target they hit and relative to where this target would be displaced to from the knock back.\nIn other words, the Oathsworn will land to a location where they are within their exact base attack range of the target by the end of the target's displacement.\nThe calculated landing spot does not evaluate if the target was successfully displaced or not, meaning that the Oathsworn will end up closer than their base attack range if the closest target hit was not knocked back.\nIf the Oathsworn does not hit any targets with the knock up effect, the dash will simply end and they will reappear at the target location.\nThe following will defer Fate's Call's effects at the time of cast to the end of their duration if the Oathsworn is:\nIn a cast time.\n Channeling.\nFate's Call will not defer by the following channels:  Recall,  Defiant Dance,  Realm Warp, and  The Culling.\nFate's Call cannot be cast during the following channels:  Teleport,  Gate,  Grand Starfall,  Hero's Entrance and  Stand United.\nUsing an ability that preloads UnstoppableForceMarker.\nIf the Oathsworn is still occupied after 6 seconds of being deferred from this time, Fate's Call will cancel.\nFate's Call will not pull the Oathsworn if they are  dashing but they will be retrieved after 1 second regardless.\nFate's Call can be cast even if the Oathsworn is  untargetable.\nFate's Call is disabled if the Oathsworn is  resurrecting or is being affected by another Fate's Call.\nFate's Call can be used even if the Oathsworn is in a  zombie state.\nFate's Call does not render the target  vanished while being held if they are creating  Curse of the Black Mist's aura.\nThe Oathsworn being held is represented by a light over Kalista's head.\nKalista's death does not cancel Fate's Call.",
        "blurb": "Active:  Kalista invokes her  tether to retrieve her Oathsworn,  vanishing and  cleansing them from all  crowd control, and hold them for a few seconds.",
        "tetherRadius": "1100",
        "castTime": "none",
        "targetRange": "1200",
        "maxCharges": -1
      }
    ]
  },
  "lore": "A specter of wrath and retribution, Kalista is the undying spirit of vengeance, an armored nightmare summoned from the Shadow Isles to hunt deceivers and traitors. The betrayed may cry out in blood to be avenged, but Kalista only answers those willing to pay with their very souls. Those who become the focus of Kalista's wrath should make their final peace, for any pact sealed with this grim hunter can only end with the cold, piercing fire of her soul-spears."
}
    export default champion