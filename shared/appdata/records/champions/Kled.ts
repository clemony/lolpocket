// Updated Patch 25.17 - 09/14/2025 05:55:12 PM CDT

const champion: Champion = {
  "id": 240,
  "key": "Kled",
  "name": "Kled",
  "title": "the Cantankerous Cavalier",
  "fullName": "Kled and Skaarl",
  "resource": "Courage",
  "attackType": "Melee",
  "adaptiveType": "Physical damage",
  "stats": {
    "health": {
      "flat": 410,
      "perLevel": 84
    },
    "healthRegen": {
      "flat": 6,
      "perLevel": 0.75
    },
    "mana": {
      "flat": 100
    },
    "armor": {
      "flat": 35,
      "perLevel": 5.2
    },
    "magicResistance": {
      "flat": 28,
      "perLevel": 2.05
    },
    "attackDamage": {
      "flat": 65,
      "perLevel": 3.5
    },
    "movespeed": {
      "flat": 305
    },
    "acquisitionRadius": {
      "flat": 800
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
      "flat": 0.625,
      "perLevel": 3.5
    },
    "attackSpeedRatio": {
      "flat": 0.625
    },
    "attackCastTime": {
      "flat": 0.28
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackRange": {
      "flat": 250
    }
  },
  "positions": [
    "Top"
  ],
  "roles": [
    "Fighter",
    "Skirmisher",
    "Tank"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 2,
    "control": 1,
    "mobility": 2,
    "utility": 1,
    "abilityReliance": 30,
    "difficulty": 3
  },
  "abilities": [
    {
      "name": "Skaarl the Cowardly Lizard",
      "key": "P",
      "icon": "https://cdn.communitydragon.org/latest/champion/Kled/ability-icon/p",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Kled rides his semi-trusty mount, Skaarl. While Mounted, all damage dealt to the duo is suffered by Skaarl, who has 400 - 1400 (based on level) base health; additional sources of health are applied to Skaarl's maximum health. Effects based on percentage health consider Kled and Skaarl's combined maximum health.</p>"
        },
        {
          "description": "Being reduced below 0 health causes Skaarl to flee, forcing Kled to be Dismounted, with all damage in excess of Skaarl's health being ignored. Upon dismounting, Kled lunges in the direction of the allied Nexus over 0.75 seconds, though not through terrain, while cleansing himself of all crowd control and becoming unable to act, untargetable, and immune to crowd control for 0.5 seconds. Dismounting resets the cooldown and charges of Pocket Pistol."
        },
        {
          "description": "While Kled is Dismounted, his base health and base movement speed are reduced; however, he gains bonus movement speed while moving toward enemy champions. Additionally, his base attack range is increased and his attacks deal 85% / 90% / 95% / 100% (based on level) damage to champions. Bear Trap on a Rope is replaced with Pocket Pistol, while Jousting and Chaaaaaaaarge!!! become unusable."
        },
        {
          "description": "While Mounted, healing and health regeneration will first replenish Skaarl's health and will only apply to Kled's health while Skaarl is at full health."
        }
      ],
      "targeting": "Passive",
      "affects": "Self",
      "notes": "Kled and  Skaarl's health bar is split in two segments, representing each of them respectively.\nWhile MOUNTED, Kled's health is visually rounded up while  Skaarl's health is rounded down.\nWhile DISMOUNTED, Kled's health is visually rounded down while  Skaarl's health is rounded up.\nExcess damage dealt to  Skaarl counts for the purposes of effects based on damage dealt (eg.  Death's Dance's Ignore Pain,  Stormsurge's Stormraider, item damage trackers).(note)\nIf  Skaarl's health is reduced below 0 by an attack or ability with multiple damage instances, subsequent damage instances from the same attack or ability are reduced to 0 damage.\n The Collector's Death is special cased to not affect Kled while he is MOUNTED regardless of the duo's combined current health.\nIf  Skaarl's health is reduced below 0 by  Eclipse's Ever Rising Moon, Kled will take the triggering attack's damage.(note)\nDismounting will remove  Speed Shrine's movement speed buff from Kled and prevent him from regaining it for the next 5 seconds, even if he remounts or enters the shrine again.(bug)\nThe  lunge can pass through  Yorick's  Dark Procession.(bug)\nBuying items while Kled and  Skaarl's combined current health is lower than Kled's maximum health will cause Kled to dismount upon undoing the purchase and potentially lose health.(bug)\nThe following table refers for interactions while Kled is lunging:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nAll the other item-actives are usable\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash  Mark  Dash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
      "blurb": "Innate:  Kled rides his semi-trusty steed,  Skaarl, whom takes damage for him while he is Mounted. When  Skaarl's health depletes, Kled dismounts,  cleansing from all  crowd control."
    },
    {
      "name": "Dismounted Skaarl the Cowardly Lizard",
      "key": "P",
      "icon": "https://cdn.communitydragon.org/latest/champion/Kled/ability-icon/p",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Kled is only vulnerable to death while Dismounted. Kled has 410 - 1838 (based on level) base health, which is not improved by sources of bonus health, as well as reduced base movement speed and increased base attack range. Effects based on percentage health consider Kled and Skaarl's combined maximum health, meaning that a Dismounted Kled is never considered to be at full health.</p>"
        },
        {
          "description": "Kled gains 70 - 155 (based on level) bonus movement speed while facing and after attacking nearby visible enemy champions, but his basic attacks against them are reduced to 85% / 90% / 95% / 100% (based on level) AD physical damage. He also gains bonus armor and bonus magic resistance equal to 4 (+ 1% of bonus health), increased by 30% for each nearby enemy champion, up to a maximum of 10 (+ 2.5% bonus health) resistances. Additionally, he gains the ability to restore Skaarl's Courage to mount again."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Courage:</span> Kled gains 15 Courage after completing a basic attack against a champion and 5 Courage for minion kills and when basic attacking structures or epic monsters. He can also restore Courage from hitting enemies with Pocket Pistol. Upon reaching 100 Courage, Skaarl instantly restores 40% / 50% / 60% / 70% (based on level) of her maximum health and reunites with Kled over 0.25 seconds, after which he becomes Mounted and the duo become unable to declare basic attacks or cast their abilities for 0.25 seconds. Mounting up resets the cooldowns of Bear Trap on a Rope and Jousting.</p>"
        },
        {
          "description": "While at the allied fountain, 25 Courage is generated every 0.25 seconds. If reuniting outside of base, Skaarl gets Frayed Nerves, which prevents Kled from gaining Courage from outside of base for 30 seconds. Dismounting inside of base removes Frayed Nerves."
        },
        {
          "description": "The current status of Kled's own health is preserved between subsequent dismounts."
        }
      ],
      "targeting": "Passive",
      "affects": "Self",
      "notes": "Clones are counted as champions for all of this passive's effects.\nKled will retain the bonus movement speed buff for 1.5 seconds while facing an enemy champion even if that champion is no longer  visible.\nAfter completing a  basic attack on a champion, the bonus movement speed buff is granted for 1.5 seconds regardless of his facing direction.\nThe bonus movement speed buff's value is refreshed when Kled levels up.\nKled will neither gain Courage nor bonus movement speed if his basic attack is  dodged,  blocked,  missed or  parried.\nIt is possible to get the Courage from base but have Kled and  Skaarl reunite out of base.\nSources of increased maximum health that additionally restore current health will restore Kled's current health even if he is DISMOUNTED.\nThe Courage bar is white when under 50 courage, yellow when equal to or above 50 courage, and red at 100 courage.",
      "blurb": "Innate: While Dismounted,  Kled suffers all damage taken and is vulnerable to  death. Kled's base health cannot be improved through any means, his movement speed is reduced, and his  basic attacks against  champions deal less physical damage. However, Kled gains a large amount of bonus movement speed when facing  visible enemy champions,  bonus armor and  bonus magic resistance, and he has the ability to restore  Skaarl's  Courage to  mount again.",
      "effectRadius": "1200 /  1400"
    },
    {
      "name": "Bear Trap on a Rope",
      "key": "Q",
      "icon": "https://cdn.communitydragon.org/latest/champion/Kled/ability-icon/q",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kled throws a bear trap in the target direction that deals physical damage to enemies hit, increased to 150% against minions, small pets, and small monsters. The bear trap collides with the first enemy champion, large pet, or large monster hit, revealing them for 2.5 seconds, and forming a tether between Kled and the target for 1.75 seconds.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "30 / 55 / 80 / 105 / 130"
                },
                {
                  "values": "60",
                  "unit": "% bonus AD"
                }
              ]
            },
            {
              "attribute": "Minion and Small Monster Damage",
              "modifiers": [
                {
                  "values": "45 / 82.5 / 120 / 157.5 / 195"
                },
                {
                  "values": "90",
                  "unit": "% bonus AD"
                }
              ]
            }
          ]
        },
        {
          "description": "The tether's radius shrinks over its duration, and if it is not broken before then, Kled pulls the target 150 units toward him, deals physical damage and slows them for 2.5 seconds.",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "60 / 110 / 160 / 210 / 260"
                },
                {
                  "values": "120",
                  "unit": "% bonus AD"
                }
              ]
            },
            {
              "attribute": "Total Physical Damage",
              "modifiers": [
                {
                  "values": "90 / 165 / 240 / 315 / 390"
                },
                {
                  "values": "180",
                  "unit": "% bonus AD"
                }
              ]
            },
            {
              "attribute": "Slow",
              "modifiers": [
                {
                  "values": "30 / 35 / 40 / 45 / 50",
                  "unit": "%"
                }
              ]
            }
          ]
        },
        {
          "description": "Bear Trap on a Rope can be cast while Jousting."
        }
      ],
      "cost": "0",
      "cooldown": "11 / 10 / 9 / 8 / 7",
      "targeting": "Direction",
      "affects": "Enemies",
      "spellshieldable": "True",
      "damageType": "Physical damage",
      "spellEffects": "special",
      "projectile": "TRUE",
      "notes": "Applies  spell damage to enemy champions, large monsters and large pets, while applying  area damage to all other enemy units.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe visual effect of Bear Trap on a Rope will appear at Kled's height at the end of cast time and may not portray its  projectile accurately if Kled is  dismounting at the end of cast time.\nPENDING FOR TEST: Is the same true if Kled is  airborne?\nIn addition to its  projectile, Bear Trap on a Rope will check for enemy champions, large monsters and large pets within a 60-unit center-to-edge radius area from the projectile's origin point.\nThe projectile interacts with projectile-blocking effects but the area check doesn't.\n Tibbers,  Daisy and  The Maiden are considered  large pets.\nAll other pets are considered small pets for the purposes of this ability.\nBear Trap on a Rope will not  pull the target if they are in  stasis.\nThe tether cannot be broken within the first 0.25 seconds of its application.\n Rek'Sai's  Void Rush will break the tether upon the beginning of its cast time.(bug)\nThe pull damage is updated dynamically based on Kled's' current attack damage.\n Count Kledula has no sound cue for when the tether is broken.(bug)",
      "blurb": "Active:  Kled throws a bear trap in the target direction that deals physical damage to enemies hit and forms a  tether against the first  champion or  large monster hit,  revealing them.",
      "tetherRadius": "625",
      "speed": "1600",
      "width": "90",
      "castTime": "0.25",
      "maxCharges": -1
    },
    {
      "name": "Pocket Pistol",
      "key": "Q",
      "icon": "https://cdn.communitydragon.org/latest/champion/Kled/ability-icon/q",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kled sprays a cone of five pellets in the target direction while recoiling 300 units in the opposite direction, dealing physical damage to enemies hit.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "35 / 50 / 65 / 80 / 95"
                },
                {
                  "values": "65",
                  "unit": "% bonus AD"
                }
              ]
            }
          ]
        },
        {
          "description": "Kled periodically stocks a Pocket Pistol charge, up to a maximum of 2. He will restore both charges after dismounting."
        },
        {
          "description": "Pellets collide with the first enemy champion they hit, and deal 20% damage per pellet beyond the first. Each pellet that hits an enemy champion or epic monster restores Courage, by 5 and 2.5 respectively, for up to a total restore of 25 against champions and 12.5 versus epic monsters.",
          "leveling": [
            {
              "attribute": "Reduced Damage",
              "modifiers": [
                {
                  "values": "7 / 10 / 13 / 16 / 19"
                },
                {
                  "values": "13",
                  "unit": "% bonus AD"
                }
              ]
            },
            {
              "attribute": "Maximum Damage",
              "modifiers": [
                {
                  "values": "63 / 90 / 117 / 144 / 171"
                },
                {
                  "values": "117",
                  "unit": "% bonus AD"
                }
              ]
            }
          ]
        }
      ],
      "cost": "0",
      "cooldown": "11 / 10 / 9 / 8 / 7",
      "targeting": "Direction",
      "affects": "Enemies",
      "spellshieldable": "True",
      "resource": "Charge",
      "damageType": "Physical damage",
      "spellEffects": "special",
      "projectile": "TRUE",
      "notes": "Applies  spell damage to champions and  area damage to non-champions.\nThe backwards  dash from Pocket Pistol can pass terrain.\nPocket Pistol can be cast while  grounded or  rooted but Kled will not  dash backwards.\nThis ability will cast from wherever the caster is at the end of the cast time.\nIn addition to its  projectiles, Pocket Pistol will check for enemy champions within a 55-unit center-to-edge radius area from the projectiles' origin point.\nThe projectiles interact with projectile-blocking effects but the area check doesn't.\n Black Cleaver will specifically apply a stack for every pellet hit.\n Spell shield will negate multiple pellets if they hit at the same time.\nEven if the first pellet is negated, subsequent non-negated pellets will still only deal 20% of the damage.\nPellets will restore Courage when colliding with units protected by  spell shield, but will not restore Courage when colliding with  Fiora's  Riposte.\nPENDING FOR TEST: Pocket Pistol will have no charges if Kled  dismounts and triggers  Transcendence at the same time.(bug)\nPENDING FOR TEST: Pocket Pistol will falsely visually appear to have another charge ready if the end of its cast time coincides with a charge being stocked.(bug)",
      "blurb": "Active:  Kled sprays a cone of pellets in the target direction that deal physical damage to enemies hit, during which he also  recoils backward. Each pellet that hits an enemy  champion or epic  monster restores  Courage.",
      "rechargeRate": "18 / 16 / 14 / 12 / 10",
      "speed": "3000 / 1025",
      "width": "80",
      "angle": "20°",
      "castTime": "0.25",
      "maxCharges": -1
    },
    {
      "name": "Violent Tendencies",
      "key": "W",
      "icon": "https://cdn.communitydragon.org/latest/champion/Kled/ability-icon/w",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Kled periodically gains Violent Tendencies, which starts expiring upon his next basic attack.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Violent Tendencies:</span> Kled gains 150% bonus attack speed on his next 4 basic attacks within 4 seconds. The fourth attack deals bonus physical damage. The damage based on the target's health is capped at 200 against monsters.Violent Tendencies' current cooldown is reduced by 0.5 seconds on-hit, increased to 1.5 against champions.</p>",
          "leveling": [
            {
              "attribute": "Bonus Physical Damage",
              "modifiers": [
                {
                  "values": "20 / 30 / 40 / 50 / 60"
                },
                {
                  "values": "4.5 - 6.5",
                  "unit": "% (+ 2% per 100 bonus AD) (+ 0.4% per 100 bonus health) of target's maximum health",
                  "tooltip": "Scaling per rank:\n4.5 / 5 / 5.5 / 6 / 6.5% (+ 2% per 100 bonus AD) (+ 0.4% per 100 bonus health) of target's maximum health"
                }
              ]
            }
          ]
        },
        {
          "description": "Against structures, the fourth attack deals modified bonus physical damage.",
          "leveling": [
            {
              "attribute": "Structure Bonus Damage",
              "modifiers": [
                {
                  "values": "62 / 63.75 / 65.5 / 67.25 / 69 / 70.75 / 72.5 / 74.25 / 76 / 77.75 / 79.5 / 81.25 / 83 / 84.75 / 86.5 / 88.25 / 90 / 91.75"
                },
                {
                  "values": "0 - 60",
                  "tooltip": "Scaling per rank:\n0 / 15 / 30 / 45 / 60"
                }
              ]
            }
          ]
        }
      ],
      "cost": "0",
      "cooldown": "13 / 12 / 11 / 10 / 9",
      "targeting": "Passive",
      "affects": "Enemies",
      "spellshieldable": "False",
      "damageType": "Physical damage",
      "spellEffects": "Special",
      "notes": "Violent Tendencies' bonus damage is applied as a separate damage instance from the attack that triggers it.\nViolent Tendencies' bonus damage is tagged as  basic damage and  spell damage, which allows it to trigger spell effects.\nAttacking a plant or ward will not activate Violent Tendencies.\nAttacking either while Violent Tendencies is already active will still consume an attack.\nWhile affected by  Silence or  Forced Actions, the animations and sounds of Kled's first 3 Violent Tendencies attacks are replaced with default ones.(bug)\nThe first and third attack will  instead play  critical strike animations if they strike critically.\nLearning Violent Tendencies will cancel Kled's ongoing attack windup.(bug)\nIn contrast, Violent Tendencies coming off cooldown during an ongoing attack windup will not cancel it.\nSuccessfully finishing the basic attack will then cause Violent Tendencies to begin expiring, but will not count as one of the 4 attacks.",
      "blurb": "Passive:  Kled periodically gains Violent Tendencies, which starts expiring upon his next basic attack.",
      "maxCharges": -1
    },
    {
      "name": "Jousting",
      "key": "E",
      "icon": "https://cdn.communitydragon.org/latest/champion/Kled/ability-icon/e",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Skaarl dashes in the target direction, though not through terrain, dealing physical damage to enemies he passes through and pulling minions, pets and small monsters hit towards them.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "35 / 60 / 85 / 110 / 135"
                },
                {
                  "values": "55",
                  "unit": "% bonus AD"
                }
              ]
            }
          ]
        },
        {
          "description": "Upon hitting an enemy champion or large monster, Skaarl dashes a fixed 200 units through them, marking them for 3 seconds, during which they are revealed. After the dash ends, the duo gain 50% bonus movement speed for 1 second. Jousting can be recast after 0.5 seconds of the first dash ending while the target is marked."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Skaarl consumes the mark to dash through the marked target, applying the same effects as the first cast though being able to dash through terrain.</p>",
          "leveling": [
            {
              "attribute": "Total Physical Damage",
              "modifiers": [
                {
                  "values": "70 / 120 / 170 / 220 / 270"
                },
                {
                  "values": "110",
                  "unit": "% bonus AD"
                }
              ]
            }
          ]
        },
        {
          "description": "The mark will remain even if the target dies, and ends prematurely if the duo are too far away or Kled dismounts."
        },
        {
          "description": "Bear Trap on a Rope and Chaaaaaaaarge!!! can be cast during either of the dashes."
        }
      ],
      "cost": "0",
      "cooldown": "13 / 12 / 11 / 10 / 9",
      "targeting": "Direction / Auto",
      "affects": "Enemies",
      "spellshieldable": "True",
      "damageType": "Physical damage",
      "spellEffects": "aoe",
      "notes": "Jousting will go on cooldown at the end of its first dash, but its cooldown cannot be reduced by cooldown refunding effects such as  Transcendence while its mark is active.(note)\nBoth casts count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nCasting  Chaaaaaaaarge!!! during Jousting will not interrupt the dash.\nThe mark is removed at 765 range center-to-edge, which allows Kled to attempt to cast Jousting while outside of maximum range.(bug)\nRecasting Jousting while outside of maximum range will cause the ability to go on cooldown without activation, make Kled path 550 units in the direction of the mark and consume the mark.\nWhen recasting Jousting,  Skaarl will  Dash to the marked target's location at the time of recasting and will then  Dash another 200 units.\nThe 200 unit dash cannot pass through terrain.\nIf the marked target's location at the time of recasting happens to be inside terrain, Jousting will end upon reaching terrain.\nThe first dash can enter terrain within a short radius.\nThis allows Kled to sometimes pass through  Yorick's  Dark Procession with the first cast of Jousting.(bug)\nPENDING FOR TEST: the first dash's terrain forgiveness radius\nJousting can be recast even while the target is  untargetable or  dead.\nPENDING FOR TEST: Jousting's hitbox\nThe following table refers for interactions while Kled is dashing:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nAllowed\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nAll items are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\nAll summoner spells are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
      "blurb": "Active:  Skaarl  dashes in the target direction, dealing physical damage to enemies he passes through and marking enemy  champions hit. The mark  reveals the target for a short time, during which Jousting can be recast.",
      "castTime": "none",
      "targetRange": "550 /  765",
      "maxCharges": -1
    },
    {
      "name": "Unmounted Jousting",
      "key": "E",
      "icon": "https://cdn.communitydragon.org/latest/champion/Kled/ability-icon/e",
      "effects": [
        {
          "description": "This ability is unusable while dismounted."
        }
      ],
      "cost": "0",
      "cooldown": "13 / 12 / 11 / 10 / 9",
      "targeting": "N/A",
      "notes": "No additional details.",
      "maxCharges": -1
    },
    {
      "name": "Chaaaaaaaarge!!!",
      "key": "R",
      "icon": "https://cdn.communitydragon.org/latest/champion/Kled/ability-icon/r",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kled & Skaarl charge toward the target location, automatically navigating terrain along the way, during which they are ghosted, immune to crowd control and revealed to enemy champions in a 1250 radius. If the charge does not complete within 15 seconds, it will end prematurely. The charge is interrupted instantly if Kled dismounts during it.</p>"
        },
        {
          "description": "While charging, the duo gain bonus movement speed and a shield for every 0.25 seconds of traveling, up to 950 total movement speed over 3 seconds and 10% - 100% (based on time traveling) of the maximum shield amount over 2.25 seconds respectively. The shield lasts for 2 seconds upon finishing the charge. The duo trails a directional draft in their wake, lasting 9 seconds. Allied units other than lane minions and Voidmites following the draft gain Mr. Kled's Wild Ride.",
          "leveling": [
            {
              "attribute": "Minimum Shield",
              "modifiers": [
                {
                  "values": "20 / 30 / 40"
                },
                {
                  "values": "30",
                  "unit": "% bonus AD"
                }
              ]
            },
            {
              "attribute": "Maximum Shield",
              "modifiers": [
                {
                  "values": "200 / 300 / 400"
                },
                {
                  "values": "300",
                  "unit": "% bonus AD"
                }
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Mr. Kled's Wild Ride:</span> While in champion combat, gain 40% bonus movement speed. After not being in champion combat for 3 seconds, if Kled is charging, gain bonus movement speed up to Kled's current movement speed; otherwise gain up to 650 total movement speed.</p>"
        },
        {
          "description": "Kled & Skaarl will dash toward the first visible enemy champion in range of the charge, revealing the target during the dash and colliding with the first visible enemy champion in their path to deal magic damage, increased by 0% - 200% (based on charge time), knocking them back 150 units and ending the charge.",
          "leveling": [
            {
              "attribute": "Minimum Magic Damage",
              "modifiers": [
                {
                  "values": "4 / 6 / 8",
                  "unit": "%  of target's maximum health"
                },
                {
                  "values": "3",
                  "unit": "% per 100 bonus AD"
                }
              ]
            },
            {
              "attribute": "Maximum Magic Damage",
              "modifiers": [
                {
                  "values": "12 / 18 / 24",
                  "unit": "%  of target's maximum health"
                },
                {
                  "values": "9",
                  "unit": "% per 100 bonus AD"
                }
              ]
            }
          ]
        }
      ],
      "cost": "0",
      "cooldown": "140 / 125 / 110",
      "targeting": "location",
      "affects": "Enemies",
      "spellshieldable": "True",
      "damageType": "Magic damage",
      "spellEffects": "spell",
      "notes": "During the charge the duo gain (950 − (starting movement speed)) ÷ 12 × (time ÷ 0.25) bonus movement speed\nThe bonus movement speed is not affected by movement speed caps.\nThe charge will not give any movement speed to the duo if they have more than [ 1440 raw movement speed ][ 950 after movement speed soft caps ].\nThe trail will not give Kled and his allies any movement speed out-of-champion-combat if they have more than [ 840 raw movement speed ][ 650 after movement speed soft caps ].\nMovement speed is granted by facing the direction of the draft and lasts for 0.528 seconds upon exiting the trail or facing another direction.\nKled will re-path if his current path is blocked by a newly created terrain (either player created or by the  Mountainous Rift).\nThe charge will continue towards the target location even if Kled's location changes drastically.\nKled will mark his path with an indicator visible to him and his allies.\nKled's pathing indicator will not account for changes in Kled's pathing.\nKled's pathing indicator will sometimes display a path different from his real path.(bug)\n Axiom Arcanist will only increase the first instance of shield gained.(bug)\nWhile charging, if there are enemy  champions within 500 range in Kled's facing direction, Kled will lock onto the closest  visible enemy champion within 800 range in his facing direction and begin  dashing after a brief delay.\nIf the charge ends before, or during the dash,(bug) the dash will not:\nGenerate a shield;\nTrail a directional draft, applying Mr. Kled's Wild Ride;\nDisable summoner spells and items.\n Zeke's Convergence's Frostfire Tempest and  Experimental Hexplate's Overdrive trigger at the end of the charge or at the end of the dash, whichever comes last, even if the charge ends before or during the dash.\nKled and  Skaarl will track the target if they change locations.\nThey will dash to the target's previous location if the target is too far away or moves beyond 2500 units of the dash's beginning location.\nIf the target moves 2500 or more units away from Kled and  Skaarl during the dash, it will be interrupted.\nIf the dash does not complete within 9 seconds, Kled and  Skaarl will continue to track their target and be able to cast spells, but will not be able to collide with enemy champions.\nThe damage dealt is based on time spent traveling before the beginning of the dash.\nIt is possible for Kled to briefly lose his  crowd control immunity while colliding with an enemy champion, which can cause the  dash, and its subsequent damage and  displacement to be interrupted.(bug)[2]\nChaaaaaaaarge!!!'s  knockback distance and speed may be impeded by terrain.\nThe  airborne debuff is removed early when the forced movement stops.\nThe following table refers for interactions while Kled is charging:\n Ghost is also disabled, contrary to the table below.\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nAllowed, but cannot input movement commands.\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash  Mark  Dash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nN/A\n\nThe following table refers for interactions while Kled is dashing:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll summoner spells are disabled\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nN/A\n\nEvery summoner spell is disabled, but summoner spells that aren't disabled while Kled is charging will not visually appear disabled.(bug)\nNo summoner spells or items are disabled if the charge ends before or during the dash.(bug)\nBuffering Interactions\n\nNothing can be buffered during the charge.\nMovement and attack commands, as well as  Bear Trap on a Rope and  Jousting can be buffered during the dash.",
      "blurb": "Active: Kled &  Skaarl become  ghosted and  unstoppably charge to a location, building up  bonus movement speed and  shield and leaving a draft in their wake that grants Mr. Kled's Wild Ride to allies that follow the draft.",
      "speed": "1000 / 600",
      "castTime": "none",
      "targetRange": "3500 / 3750 / 4000 / 4250 / 4500",
      "maxCharges": -1
    },
    {
      "name": "Unmounted Chaaaaaaaarge!!!",
      "key": "R",
      "icon": "https://cdn.communitydragon.org/latest/champion/Kled/ability-icon/r",
      "effects": [
        {
          "description": "This ability is unusable while dismounted."
        }
      ],
      "cost": "0",
      "cooldown": "140 / 125 / 110",
      "targeting": "N/A",
      "notes": "No additional details.",
      "maxCharges": -1
    }
  ],
  "lore": "A warrior as fearless as he is ornery, the yordle Kled embodies the furious bravado of Noxus. He is an icon beloved by the empire's soldiers, distrusted by its officers, and loathed by the nobility. Many claim Kled has fought in every campaign the legions have waged, has “acquired” every military title, and has never once backed down from a fight. Though the truth of the matter is often questionable, one part of his legend is undeniable: Charging into battle on his un-trusty steed, Skaarl, Kled fights to protect what's his… and to take whatever he can get.",
  "faction": "noxus",
  "releaseDate": "2016-08-10",
  "patchLastChanged": "25.15",
  "price": {
    "blueEssence": 2400,
    "rp": 880
  }
}
export default champion