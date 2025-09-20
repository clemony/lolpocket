// Updated Patch 25.17 - 09/18/2025 02:20:04 AM CDT

const champion: Champion = {
  id: 17,
  key: 'Teemo',
  name: 'Teemo',
  title: 'the Swift Scout',
  abilities: [
    {
      key: 'P',
      name: 'Guerrilla Warfare',
      affects: 'Self',
      blurb: 'Innate:  Teemo becomes  invisible after a brief moment remaining idle without taking damage, and will maintain so long as he remains idle or not  displaced.',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Teemo gains invisibility after 1.5 seconds without moving, taking damage, performing actions that break stealth, channeling, or being in stasis. Teemo will maintain stealth so long as he remains idle and is not displaced. While in brush, Teemo gains the stealth even while moving and can move without breaking stealth.</p>'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate - Element of Surprise:</span> When Teemo breaks the stealth, he gains 20% / 40% / 60% / 80% (based on level) bonus attack speed for 5 seconds.</p>'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Teemo/ability-icon/p',
      notes: 'If Teemo triggers Element of Surprise twice in less than 5 seconds he will only refresh the bonus attack speed\'s duration (it will not  stack with itself).\n Charm,  Flee, and  Taunt will force him out of  stealth.\nIf Teemo is in a  brush while stealthed, only  taunt will break it.\nGuerilla Warfare\'s stealth is special-cased to be interrupted whenever Teemo moves from his location by any means (whether by  dashing,  blinking, being  displaced, or simply moving), thus, performing actions that do not normally  break stealth which also involve movement will cause the  invisibility to break. Notably,  Flash and  Teleport. If Teemo is in a  brush the aforementioned spells do not end the stealth so long as his exact destination is still inside brush.\nStarting  Teleport\'s channel will not break Guerilla Warfare, only the  blink upon completing the channel will (with the exception stated above).\nGuerilla Warfare will not activate while  Recalling.\nUsing a basic attack breaks the stealth at the end of the attack windup.',
      targeting: 'Passive'
    },
    {
      key: 'Q',
      name: 'Blinding Dart',
      affects: 'Enemies',
      blurb: 'Active:  Teemo shoots a dart at the target enemy that deals magic damage and  blinds them for a short time.',
      castTime: '0.25',
      cooldown: '7',
      cost: '70 / 75 / 80 / 85 / 90',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Teemo shoots a dart at the target enemy that deals magic damage and blinds them for a duration.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '80 / 125 / 170 / 215 / 260'
                },
                {
                  unit: '% AP',
                  values: '70'
                }
              ]
            },
            {
              attribute: 'Blind Duration',
              modifiers: [
                {
                  unit: ' seconds',
                  values: '2 / 2.25 / 2.5 / 2.75 / 3'
                }
              ]
            }
          ]
        },
        {
          description: 'The duration of the blind is doubled against minions and monsters.',
          leveling: [
            {
              attribute: 'Increased Blind Duration',
              modifiers: [
                {
                  unit: ' seconds',
                  values: '4 / 4.5 / 5 / 5.5 / 6'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Teemo/ability-icon/q',
      maxCharges: -1,
      notes: 'Blinding Dart will not make abilities that can trigger on-hit effects ( Parrrley,  Mystic Shot) miss.\nWhen blinded, enemies have a green tint on their screen.\nBecause Blinding Dart uses  center range, it has 45 to 70 more range than his  basic attacks, which use  edge range, against other  champions.\nThis bonus becomes lower if Teemo or his target have size bonuses.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '2500',
      spellEffects: 'Single target',
      spellshieldable: 'True',
      targeting: 'Unit',
      targetRange: '680'
    },
    {
      key: 'W',
      name: 'Move Quick',
      affects: 'Self',
      blurb: 'Passive:  Teemo gains  bonus movement speed after a few seconds without taking damage from enemy  champions or  turrets.',
      castTime: 'none',
      cooldown: '14',
      cost: '40',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Teemo gains bonus movement speed after 5 seconds without taking damage from enemy champions or turrets.</p>',
          leveling: [
            {
              attribute: 'Bonus Movement Speed',
              modifiers: [
                {
                  unit: '%',
                  values: '12 / 16 / 20 / 24 / 28'
                }
              ]
            }
          ]
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Teemo doubles the bonus movement speed for 3 seconds, preventing it from being removed for the duration.</p>',
          leveling: [
            {
              attribute: 'Enhanced Bonus Movement Speed',
              modifiers: [
                {
                  unit: '%',
                  values: '24 / 32 / 40 / 48 / 56'
                }
              ]
            }
          ]
        },
        {
          description: 'Casting Move Quick does not interrupt Guerrilla Warfare.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Teemo/ability-icon/w',
      maxCharges: -1,
      notes: 'When Move Quick\'s active bonus movement speed ends Teemo will not regain the passive one if he was damaged during the active\'s duration.\nMove Quick\'s passive will be disabled even if the damage is blocked with a  spell shield.',
      resource: 'Mana',
      targeting: 'Auto'
    },
    {
      key: 'E',
      name: 'Toxic Shot',
      affects: 'Self',
      blurb: 'Passive:  Teemo\'s basic attacks deal bonus magic damage and inflict  poison.',
      cooldown: '0',
      cost: '0',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Teemo\'s basic attacks are empowered to deal bonus magic damage on-hit and inflict poison.</p>\n<p class="ability-effect"><span class="ability-header"> poison:</span> The target takes magic damage every second over 4 seconds. Subsequent inflictions refresh the duration.</p>',
          leveling: [
            {
              attribute: 'Magic Damage On-Hit',
              modifiers: [
                {
                  values: '9 / 23 / 37 / 51 / 65'
                },
                {
                  unit: '% AP',
                  values: '30'
                }
              ]
            },
            {
              attribute: 'Magic Damage per Tick',
              modifiers: [
                {
                  values: '6 / 12 / 18 / 24 / 30'
                },
                {
                  unit: '% AP',
                  values: '10'
                }
              ]
            },
            {
              attribute: 'Total Poison Damage',
              modifiers: [
                {
                  values: '24 / 48 / 72 / 96 / 120'
                },
                {
                  unit: '% AP',
                  values: '40'
                }
              ]
            }
          ]
        },
        {
          description: 'Toxic Shot deals 145% damage against monsters.',
          leveling: [
            {
              attribute: 'Monster Damage On-Hit',
              modifiers: [
                {
                  values: '13.05 / 33.35 / 53.65 / 73.95 / 94.25'
                },
                {
                  unit: '% AP',
                  values: '43.5'
                }
              ]
            },
            {
              attribute: 'Monster Damage per Tick',
              modifiers: [
                {
                  values: '8.7 / 17.4 / 26.1 / 34.8 / 43.5'
                },
                {
                  unit: '% AP',
                  values: '14.5'
                }
              ]
            },
            {
              attribute: 'Total Monster Poison Damage',
              modifiers: [
                {
                  values: '34.8 / 69.6 / 104.4 / 139.2 / 174'
                },
                {
                  unit: '% AP',
                  values: '58'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Teemo/ability-icon/e',
      maxCharges: -1,
      notes: 'The initial hit from Toxic Shot will consume  Manaflow Band if it is available.\nThe attacks do not affect structures nor wards.\nDespite dealing  proc damage, the damage over time is special-cased to trigger  Dark Harvest and not to trigger  Summon Aery.\nThe damage over time from Toxic Shot counts as proc damage for all other interactions.',
      spellEffects: 'proc',
      spellshieldable: 'False',
      targeting: 'Passive'
    },
    {
      key: 'R',
      name: 'Noxious Trap',
      affects: 'Enemies',
      blurb: 'Active:  Teemo tosses a poisonous mushroom to the target location that becomes  stealthed and lasts for a while. It will bounce forward upon landing on another mushroom.',
      castTime: '0.25',
      collisionRadius: '160 / 150',
      cooldown: '0.25',
      cost: '75 / 55 / 35',
      damageType: 'Magic damage',
      effectRadius: '450',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Teemo tosses a poisonous mushroom to the target location that becomes stealthed after arming over 1 second, lasting for up to 5 minutes and granting sight of its surroundings. If the mushroom lands on an already-placed one, it will bounce forward again for its cast distance, up to a cap, which can happen repeatedly.</p>',
          leveling: [
            {
              attribute: 'Bounce Distance Cap',
              modifiers: [
                {
                  values: '350 / 450 / 550'
                }
              ]
            }
          ]
        },
        {
          description: 'Teemo periodically stocks a Noxious Trap charge, up to a maximum amount.',
          leveling: [
            {
              attribute: 'Maximum Charges',
              modifiers: [
                {
                  values: '3 / 4 / 5'
                }
              ]
            }
          ]
        },
        {
          description: 'The mushroom will explode upon enemy contact, inflicting poison to nearby enemies and slowing them for 4 seconds, as well as revealing them.',
          leveling: [
            {
              attribute: 'Slow',
              modifiers: [
                {
                  unit: '%',
                  values: '30 / 40 / 50'
                }
              ]
            }
          ]
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">poison:</span> The target takes magic damage every second over 4 seconds. Subsequent inflictions refresh the duration.</p>',
          leveling: [
            {
              attribute: 'Magic Damage per Tick',
              modifiers: [
                {
                  values: '50 / 81.25 / 112.5'
                },
                {
                  unit: '% AP',
                  values: '12.5'
                }
              ]
            },
            {
              attribute: 'Total Magic Damage',
              modifiers: [
                {
                  values: '200 / 325 / 450'
                },
                {
                  unit: '% AP',
                  values: '50'
                }
              ]
            }
          ]
        },
        {
          description: 'A mushroom has 6 maximum health and can only be damaged by champion basic attacks (2 damage from ranged and 3 from melee).'
        },
        {
          description: 'See Pets for more details about mushroom traps.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Teemo/ability-icon/r',
      maxCharges: 3,
      notes: 'The bounce can occur an indefinite amount of times while Teemo is alive. If Teemo dies before Noxious Trap bounces on another, the trap will disappear.\n Rift Scuttler will not trigger Noxious Trap\'s explosion if it is not being attacked.\nEnemies who step on multiple Noxious Traps will only refresh the duration of the damage over time and slow.\nNoxious Trap\'s damage is determined when it detonates and not when planted, meaning if Teemo\'s  ability power changes, the scaling is also altered to affect the active damage of all Noxious Traps so long as they do not explode.\n Spell shield will prevent the damage over time and slow for all units but will not prevent the detonation itself.',
      projectile: 'TRUE',
      rechargeRate: '35 / 30 / 25',
      resource: 'Mana',
      spellEffects: 'aoedot',
      spellshieldable: 'Special',
      targeting: 'Location',
      targetRange: '600 / 675 / 750 / 825 / 900'
    }
  ],
  adaptiveType: 'Magic damage',
  attackType: 'Ranged',
  attributeRatings: {
    abilityReliance: 30,
    control: 2,
    damage: 3,
    difficulty: 1,
    mobility: 1,
    toughness: 1,
    utility: 2
  },
  faction: 'bandle-city',
  lore: 'Undeterred by even the most dangerous and threatening of obstacles, Teemo scouts the world with boundless enthusiasm and a cheerful spirit. A yordle with an unwavering sense of morality, he takes pride in following the Bandle Scout\'s Code, sometimes with such eagerness that he is unaware of the broader consequences of his actions. Though some say the existence of the Scouts is questionable, one thing is for certain: Teemo\'s conviction is nothing to be trifled with.',
  patchLastChanged: '25.04',
  positions: [
    'Jungle',
    'Support',
    'Top'
  ],
  price: {
    blueEssence: 225,
    rp: 260
  },
  releaseDate: '2009-02-21',
  resource: 'Mana',
  roles: [
    'Mage',
    'Marksman',
    'Specialist'
  ],
  stats: {
    acquisitionRadius: {
      flat: 500
    },
    armor: {
      flat: 24,
      perLevel: 4.95
    },
    attackCastTime: {
      flat: 0.3
    },
    attackDamage: {
      flat: 54,
      perLevel: 3
    },
    attackDelayOffset: {
      flat: -0.1
    },
    attackRange: {
      flat: 500
    },
    attackSpeed: {
      flat: 0.69,
      perLevel: 3.38
    },
    attackSpeedRatio: {
      flat: 0.69
    },
    attackTotalTime: {
      flat: 1.6
    },
    criticalStrikeDamage: {
      flat: 175
    },
    criticalStrikeDamageModifier: {
      flat: 1
    },
    gameplayRadius: {
      flat: 55
    },
    health: {
      flat: 615,
      perLevel: 104
    },
    healthRegen: {
      flat: 5.5,
      perLevel: 0.65
    },
    magicResistance: {
      flat: 30,
      perLevel: 1.3
    },
    mana: {
      flat: 334,
      perLevel: 25
    },
    manaRegen: {
      flat: 9.6,
      perLevel: 0.45
    },
    movespeed: {
      flat: 330
    },
    pathingRadius: {
      flat: 30
    },
    selectionRadius: {
      flat: 100
    }
  }
}
export default champion