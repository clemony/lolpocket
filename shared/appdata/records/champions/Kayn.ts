// Updated Patch 25.17 - 09/01/2025 05:26:13 PM CDT

const champion: Champion = {
  id: 141,
  key: 'Kayn',
  name: 'Kayn',
  title: 'the Shadow Reaper',
  fullName: 'Shieda Kayn',
  resource: 'Mana',
  attackType: 'Melee',
  adaptiveType: 'Physical damage',
  stats: {
    health: {
      flat: 655,
      perLevel: 103
    },
    healthRegen: {
      flat: 8,
      perLevel: 0.75
    },
    mana: {
      flat: 410,
      perLevel: 50
    },
    manaRegen: {
      flat: 11.5,
      perLevel: 0.95
    },
    armor: {
      flat: 38,
      perLevel: 4.5
    },
    magicResistance: {
      flat: 32,
      perLevel: 2.05
    },
    attackDamage: {
      flat: 68,
      perLevel: 3.3
    },
    movespeed: {
      flat: 340
    },
    acquisitionRadius: {
      flat: 400
    },
    selectionRadius: {
      flat: 135
    },
    pathingRadius: {
      flat: 35
    },
    gameplayRadius: {
      flat: 65
    },
    criticalStrikeDamage: {
      flat: 175
    },
    criticalStrikeDamageModifier: {
      flat: 1
    },
    attackSpeed: {
      flat: 0.669,
      perLevel: 2.7
    },
    attackSpeedRatio: {
      flat: 0.669
    },
    attackCastTime: {
      flat: 0.28
    },
    attackTotalTime: {
      flat: 1.495
    },
    attackDelayOffset: {
      flat: -0.1
    },
    attackRange: {
      flat: 175
    }
  },
  positions: [
    'Jungle'
  ],
  roles: [
    'Assassin',
    'Fighter',
    'Skirmisher'
  ],
  attributeRatings: {
    damage: 3,
    toughness: 1,
    control: 1,
    mobility: 3,
    utility: 1,
    abilityReliance: 0,
    difficulty: 3
  },
  abilities: {
    P: [
      {
        name: 'The Darkin Scythe',
        icon: 'https://cdn.communitydragon.org/latest/champion/Kayn/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Kayn has a secondary experience bar that tracks progress toward his Darkin and Shadow Assassin forms. He gathers orbs from champion takedowns and each instance of damage (excluding damage over time) dealt against champions. Once he has earned enough orbs, he unlocks a form based on whether he earned more from melee or ranged champions (for Darkin and Shadow Assassin, respectively), with the other form unlocked later.</p>'
          },
          {
            description: 'While near his team\'s summoning platform, Kayn can choose a form to enter transformation over 6 seconds, immediately restoring to full health and mana and becoming invulnerable, untargetable, and unable to act for the duration. Kayn cannot choose a form if he is unable to cast abilities. The transformation will grant a passive bonus and permanently empower some of Kayn\'s abilities based on the form chosen. He gains a one-time Homeguard once the transformation is complete.'
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Shadow Assassin Bonus:</span> Upon entering combat with enemy champions, Kayn becomes empowered for 3 seconds to deal 25% - 45% (based on level) of post-mitigation physical and magic damage dealt against enemy champions as bonus magic damage. This effect cannot trigger again until Kayn has been out of combat with champions for over 8 seconds, with the timer being reset if he recasts Umbral Trespass.</p>'
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Darkin Bonus:</span> Rhaast heals for 25% (+ 0.5% per 100 bonus health) of the post-mitigation physical damage that he deals to enemy champions with his abilities.</p>'
          }
        ],
        targeting: 'Passive',
        affects: 'Self',
        notes: 'The Shadow Assassin Bonus will not be triggered nor have its out-of-combat timer be refreshed if Kayn deals  true damage.\nIf the Shadow Assassin Bonus is granted by Kayn dealing damage, the triggering instance of damage will benefit from the bonus.\nEntering transformation will not  destroy in-flight  projectiles.\nThe Orb System\nThe experience is depicted as orbs that drop upon the ground.  Melee champions drop red orbs that grant progress towards  Darkin, while  ranged champions drop blue orbs that grant progress for  Shadow Assassin. Orbs will remain on the ground until automatically collected by Kayn regardless of range once he leaves combat. The orbs will be collected even if Kayn  dies.\nThe experience bar above his portrait gauges his current progression, the color reflects the form with greater progress. Kayn can transform by interacting with his portrait, and can wait 4 minutes until the other form becomes available, reduced by 5 seconds for each collected orb of their type after that.\n\nMelee orbs grant 2 points per hit and 6 points per takedown.\nRanged orbs grant 3 points per hit and 7 points per takedown.\nThe amount of points received per orb is multiplied by 3 : 10.39 (based on minutes).\nThe bar gets filled up completely at 500 points.\nIf the two forms are within 8% of each other, the last champion range type hit will determine the winner. If both types are hit at the same time, the trasformation will default to  Darkin.\nEach side\'s bar has a bucket system, starting at 60 points.\nEach time an orb is taken the system checks if there\'s an amount of points in the bucket equal to or higher than the amount received from the orb.If there is, Kayn is given an additional orb of the same type he received, while also subtracting that amount of points from the bucket.\nThe bucket fills by 0.8 points per second if out of champion combat for 70 seconds.\nDamage dealt by  damage over time effects and specifically  First Strike and  Summon Aery will not grant orbs.\nThe following table refers for interactions while Kayn is transforming:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll summoner spells are disabled\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nN/A',
        blurb: 'Innate: Whenever  Kayn scores champion  takedowns or deals damage against champions, he earns orbs that unlocks his  Darkin and  Shadow Assassin forms. Kayn can return to the summoning platform to transform, permanently empowering his abilities.'
      }
    ],
    Q: [
      {
        name: 'Reaping Slash',
        icon: 'https://cdn.communitydragon.org/latest/champion/Kayn/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Kayn dashes in the target direction, dealing physical damage to enemies he passes through. He then swings his scythe, dealing the same damage to nearby enemies.</p>',
            leveling: [
              {
                attribute: 'Physical Damage',
                modifiers: [
                  {
                    values: [
                      75,
                      100,
                      125,
                      150,
                      175
                    ]
                  },
                  {
                    values: [
                      85
                    ],
                    units: [
                      '% bonus AD'
                    ]
                  }
                ]
              },
              {
                attribute: 'Total Physical Damage',
                modifiers: [
                  {
                    values: [
                      150,
                      200,
                      250,
                      300,
                      350
                    ]
                  },
                  {
                    values: [
                      170
                    ],
                    units: [
                      '% bonus AD'
                    ]
                  }
                ]
              }
            ]
          },
          {
            description: 'Both instances of Reaping Slash deal 40 bonus physical damage against minions and monsters.',
            leveling: [
              {
                attribute: 'Non-Champion Damage',
                modifiers: [
                  {
                    values: [
                      115,
                      140,
                      165,
                      190,
                      215
                    ]
                  },
                  {
                    values: [
                      85
                    ],
                    units: [
                      '% bonus AD'
                    ]
                  }
                ]
              },
              {
                attribute: 'Total Non-Champion Damage',
                modifiers: [
                  {
                    values: [
                      230,
                      280,
                      330,
                      380,
                      430
                    ]
                  },
                  {
                    values: [
                      170
                    ],
                    units: [
                      '% bonus AD'
                    ]
                  }
                ]
              }
            ]
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Darkin Bonus:</span> Reaping Slash\'s damage is modified to deal 65% AD (+ 6% (+ 3.5% per 100 bonus AD) of the target\'s maximum health) physical damage with each hit, for a total of 130% AD (+ 12% (+ 7% per 100 bonus AD) of the target\'s maximum health). This damage has a cap against monsters that does not include the bonus damage.</p>',
            leveling: [
              {
                attribute: 'Capped Monster Damage per Hit',
                modifiers: [
                  {
                    values: [
                      200,
                      250,
                      300,
                      350,
                      400
                    ]
                  }
                ]
              },
              {
                attribute: 'Total Capped Monster Damage',
                modifiers: [
                  {
                    values: [
                      400,
                      500,
                      600,
                      700,
                      800
                    ]
                  }
                ]
              }
            ]
          },
          {
            description: 'Reaping Slash\'s dash speed scales with Kayn\'s total movement speed.'
          }
        ],
        cost: [
          40
        ],
        cooldown: [
          7,
          6.5,
          6,
          5.5,
          5
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'Special',
        resource: 'Mana',
        damageType: 'Physical damage',
        spellEffects: 'Area of effect',
        notes: 'Spell shields will block only a single instance of damage - either the dash or the slash.\nIf the  dash is  interrupted, Kayn will not swing his scythe.\nReaping Slash\'s  swing can be performed quicker if the dash stops prematurely upon colliding with terrain.\nAs the  Shadow Assassin, an  alternate icon for Reaping Slash is used but has no modified effect.\nOther abilities can be queued while casting Reaping Slash.\nItem actives are locked out while casting.\nThe swing\'s animation has a 0.25-second  lockout time.\nKayn will only be able to move after 0.416 seconds.',
        blurb: 'Active:  Kayn  dashes in the target direction, dealing physical damage to enemies he passes through. He then swings his scythe, dealing the same damage to surrounding enemies.',
        castTime: 'none',
        targetRange: '350',
        maxCharges: -1
      }
    ],
    W: [
      {
        name: 'Blade\'s Reach',
        icon: 'https://cdn.communitydragon.org/latest/champion/Kayn/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Kayn swings his scythe in the target direction, dealing physical damage to enemies hit and slowing them by 90% decaying over 1.5 seconds.</p>',
            leveling: [
              {
                attribute: 'Physical Damage',
                modifiers: [
                  {
                    values: [
                      85,
                      130,
                      175,
                      220,
                      265
                    ]
                  },
                  {
                    values: [
                      110
                    ],
                    units: [
                      '% bonus AD'
                    ]
                  }
                ]
              }
            ]
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Shadow Assassin Bonus:</span> Blade\'s Reach\'s radius is extended by 200 units. Kayn conjures an untargetable shadow at the casting position to perform Blade\'s Reach\'s sweep over 0.55 seconds in his stead, removing the ability\'s cast time.</p>'
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Darkin Bonus:</span> Blade\'s Reach knocks up enemies hit for 1 second.</p>'
          }
        ],
        cost: [
          40,
          45,
          50,
          55,
          60
        ],
        cooldown: [
          13,
          12,
          11,
          10,
          9
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Physical damage',
        spellEffects: 'Area of effect',
        projectile: 'FALSE',
        notes: 'The shadow is considered an allied champion and can interact with effects such as  World Atlas\' and  Runic Compass\' Quest and local reward from structures.(bug)\nBlade\'s Reach\'s indicator is visible to enemies while cast inside terrain and towards enemy champions.\nThis ability will cast from wherever the caster is at the start of the cast time.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection',
        castTime: '0.55 / None',
        targetRange: '700 / 900',
        maxCharges: -1
      }
    ],
    E: [
      {
        name: 'Shadow Step',
        icon: 'https://cdn.communitydragon.org/latest/champion/Kayn/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Kayn gains 40% bonus total movement speed, ghosting and the ability to ignore terrain collision for a duration. If he has been in combat with enemy champions within the last 3 seconds, Shadow Step will instead last 1.5 seconds.</p>',
            leveling: [
              {
                attribute: 'Duration',
                modifiers: [
                  {
                    values: [
                      7,
                      7.5,
                      8,
                      8.5,
                      9
                    ],
                    units: [
                      ' seconds'
                    ]
                  }
                ]
              }
            ]
          },
          {
            description: 'Kayn heals himself upon entering terrain for the first time from casting Shadow Step and he gains unobstructed vision while inside.',
            leveling: [
              {
                attribute: 'Heal',
                modifiers: [
                  {
                    values: [
                      90,
                      100,
                      110,
                      120,
                      130
                    ]
                  },
                  {
                    values: [
                      45
                    ],
                    units: [
                      '% bonus AD'
                    ]
                  }
                ]
              }
            ]
          },
          {
            description: 'Receiving damage from or dealing damage to an enemy champion while Shadow Step is active reduces its remaining duration to 1.5 seconds. This effect also cannot remain active out of terrain for longer than 1.5 seconds and will cancel immediately if Kayn performs a basic attack or becomes immobilized or polymorphed.'
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Shadow Assassin Bonus:</span> Shadow Step\'s cooldown is reduced to 10 seconds at all ranks. Kayn gains 100% slow resist while active and, upon entering terrain, the bonus total movement speed is increased to 70% for the remaining duration.</p>'
          }
        ],
        cost: [
          90
        ],
        cooldown: [
          21,
          19,
          17,
          15,
          13
        ],
        targeting: 'Auto',
        affects: 'Self',
        resource: 'Mana',
        notes: 'As  Rhaast, an  alternate icon for Shadow Step is used but has no modified effect.\nThe bonus movement speed  stacks multiplicatively with other sources of movement speed boosts.\nSelf  immobilizations such as  Zhonya\'s Hourglass also count for interrupting Shadow Step.\n Recall is disabled while Kayn is inside terrain.\nEnemies cannot see Kayn while he is inside of terrain unless they have terrain-piercing vision, such as  Heightened Senses,  Hawkshot or  unobstructed vision.\nHowever, enemies and allies (including Kayn) will be notified when nearby terrain is infested if Kayn is within 1000 units of an enemy champion - with an indicator being placed on the terrain with a direct line between Kayn and the enemy champion. Slightly less than standard sight radius, but more than the  camouflage detection radius.\nKayn can move up to 550 units beyond the outer-edge of the battlefield.\nShadow Step can interact with player-generated terrain.\nIf Kayn is inside terrain when the effect ends, he will be placed correspondingly to the nearest valid space.\n Sleep will not interrupt Shadow Step.(bug)',
        blurb: 'Active:  Kayn gains  bonus movement speed,  ghosting and the ability to enter terrain for a duration. If he has recently been in combat with enemy champions, the duration is dramatically reduced.',
        castTime: 'none',
        maxCharges: -1
      }
    ],
    R: [
      {
        name: 'Umbral Trespass',
        icon: 'https://cdn.communitydragon.org/latest/champion/Kayn/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Kayn marks enemy champions he damaged in the last 3.15 seconds.</p>'
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Kayn vanishes and dashes to a marked enemy champion over 0.25 seconds, attaching himself to them at the end of the dash. After 0.5 seconds of his arrival, he channels for up to 2 seconds, during which the target is revealed. Umbral Trespass can be recast during the channel after 0.1 seconds have elapsed, and does so automatically after the duration or if it is interrupted.</p>'
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Recast:</span> After a delay of 0.5 seconds to 0.75 seconds, Kayn deals physical damage to the target and dashes out from their body in the target direction, detaching himself from them and becoming targetable again at the end of the dash.</p>',
            leveling: [
              {
                attribute: 'Physical Damage',
                modifiers: [
                  {
                    values: [
                      150,
                      250,
                      350
                    ]
                  },
                  {
                    values: [
                      150
                    ],
                    units: [
                      '% bonus AD'
                    ]
                  }
                ]
              }
            ]
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Shadow Assassin Bonus:</span> Umbral Trespass gains 200 bonus cast range and emerge range. Additionally, emerging will reset The Darkin Scythe\'s cooldown.</p>'
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Darkin Bonus:</span> Umbral Trespass is modified to deal physical damage equal to 15% (+ 10% per 100 bonus AD) of the target\'s maximum health, and also heals Rhaast for 11.25% (+ 7.5% per 100 bonus AD) of the target\'s maximum health after the recast\'s delay.</p>'
          }
        ],
        cost: [
          100
        ],
        cooldown: [
          120,
          100,
          80
        ],
        targeting: 'Unit / Direction',
        affects: 'Enemies, Self',
        spellshieldable: 'Special',
        resource: 'Mana',
        damageType: 'Physical damage',
        spellEffects: 'spell',
        notes: 'Umbral Trespass\'  recast delay lasts for an inconsistent period of time.(bug)\nThe initial cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade.\nThe recast (both manual and automatic) does not.\nThe ability activation happens when Kayn is attached to his target and the channel starts.\n Kassadin cannot reduce  Force Pulse\'s cooldown because Kayn is untargetable during the activation.\nThe ability will recast if Kayn is ordered a movement command.\nKayn will reappear from being  vanished as soon as the recast is cast, while remaining untargetable.\nUpon recast, Kayn will always damage his target from the east, regardless of the direction he chooses to dash in.\nKayn will arrive to the target after 0.25 seconds regardless of how far they move away from him during the dash.\nIf Umbral Trespass is targeted on an enemy with a  spell shield or a  Fiora with her  Riposte active, the ability will fail to cast entirely, being placed on full cooldown without triggering the active\'s effects (as well as on-cast effects).\nSpell shield will not block the damage from the recast.\nIf the target  dies, enters  resurrection, or is sent to the  Realm of Death while Kayn is  attached, the channel will be cancelled and he will instantly detach and reappear on top of the target\'s location. This does not occur if Kayn is in the process of emerging from the target.\nIf those same conditions occur before the attachment, Kayn will reappear at the target\'s location at the end of his dash.\nIn both of these cases, Umbral Trespass will occasionally not go on cooldown.(bug)\nIf the target is a  clone that expires while Kayn is attached, Umbral Trespass will recast automatically.\nIf Kayn dies while  attached and the recast is available, Umbral Trespass\'  damage is dealt immediately. If the recast is not available, Umbral Trespass\'  damage is not dealt at all.\nEntering  resurrection while  attached does not deal Umbral Trespass\'  damage regardless of if the recast is available or not.\nKayn will detach immediately in both cases.\nUmbral Trespass\'  interactions with  crowd control:\nAll forms of  cast-inhibiting crowd control will interrupt the channel.\nUpon being cast, Kayn is  cleansed of  drowsiness effects.\nDuring Umbral Trespass, Kayn is immune to  fear.\nDespite being a movement channel, Umbral Trespass is not interrupted by  root.\n Root will not disable Umbral Trespass\'  recast, despite it being a dash.\nAs  Rhaast, Umbral Trespass will grant the  heal automatically if the target dies during the channel.\nThe heal is not granted if the target dies before the channel starts.\nKayn will draw  turret aggro after the recast\'s dash, despite the damage being dealt to the enemy while he was untargetable.\nUntil the recast or after the duration, the ability will have had no effect on the target for the purposes of  Electrocute or the \'in-combat\' status.\nThe damage is not blocked if the target is  untargetable at the time of the recast.\nUmbral Trespass cannot be cast on targetable  zombie states such as  Sion during  Glory in Death.\nDuring Umbral Trespass, Kayn will not take the self-inflicted damage from  Death\'s Dance\'s Ignore Pain if the damage was sourced from a  turret.\nKayn will copy his target\'s total size for Umbral Trespass\'  duration, even if their size is smaller than his.\nThe player\'s screen will direct to the target\'s position upon attaching.\nAs  Rhaast, an  alternate icon is used for the initial activation of Umbral Trespass.\nThe following table refers for interactions while Kayn is  channeling and dashing out of the victim:\nThe dash out is not interrupted by  cast-inhibiting crowd control.\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall\n\n\nInterrupted by\n\n Hexflash\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects',
        blurb: 'Passive:  Kayn marks enemy champions he damaged for a short time.',
        castTime: 'none',
        effectRadius: '300 / 500',
        targetRange: '550 / 750',
        maxCharges: -1
      }
    ]
  },
  lore: 'A peerless practitioner of lethal shadow magic, Shieda Kayn battles to achieve his true destiny—to one day lead the Order of Shadow into a new era of Ionian supremacy. He wields the sentient darkin weapon Rhaast, undeterred by its creeping corruption of his body and mind. There are only two possible outcomes: either Kayn bends the weapon to his will... or the malevolent blade consumes him completely, paving the way for the destruction of all Runeterra.',
  faction: 'ionia',
  releaseDate: '2017-07-12',
  patchLastChanged: '25.10',
  price: {
    blueEssence: 1575,
    rp: 790
  }
}
export default champion