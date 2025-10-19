// Updated Patch 25.19 - 10/07/2025 08:16:13 AM CDT

const champion: Champion = {
  id: 21,
  key: 'MissFortune',
  name: 'Miss Fortune',
  title: 'the Bounty Hunter',
  abilities: [
    {
      key: 'P',
      name: 'Love Tap',
      affects: 'Enemies',
      blurb: 'Innate:  Miss Fortune\'s basic attacks apply a mark that expires when attacking a new enemy. If the enemy was unmarked, this also deals bonus physical damage.',
      damageType: 'Physical damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Miss Fortune\'s basic attacks are empowered to apply a mark that expires upon attacking a new enemy. If the enemy was unmarked, this also deals 50% - 100% (based on level) AD bonus physical damage, halved to 25% - 50% (based on level) AD against minions.</p>'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/MissFortune/ability-icon/p',
      notes: 'With  Runaan\'s Hurricane, Love Tap only applies to the primary target.\nThe bonus damage applies  life steal.\nThe empowered attack will not trigger against buildings.',
      spellEffects: 'Proc',
      targeting: 'Passive'
    },
    {
      key: 'Q',
      name: 'Double Up',
      affects: 'Enemies',
      angle: '160°',
      blurb: 'Active:  Miss Fortune fires a shot at the target enemy that deals physical damage, which then bounces to hit another enemy behind them. This applies  on-hit effects to both enemies hit.',
      castTime: 'Basic Attack Timer',
      cooldown: '7 / 6 / 5 / 4 / 3',
      cost: '40',
      damageType: 'Physical damage',
      effectRadius: '500',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Miss Fortune fires a shot at the target enemy that deals physical damage, triggers on-attack effects, and bounces to hit another enemy behind them, applying on-hit effects to both enemies hit.</p>',
          leveling: [
            {
              attribute: 'Physical Damage',
              modifiers: [
                {
                  values: '20 / 45 / 70 / 95 / 120'
                },
                {
                  unit: '% AD',
                  values: '100'
                },
                {
                  unit: '% AP',
                  values: '35'
                }
              ]
            }
          ]
        },
        {
          description: 'Double Up\'s bounce is affected by critical strike modifiers. If Double Up kills the primary target, the bounce will critically strike.'
        },
        {
          description: 'The bounce prioritizes units directly behind the primary target. A target does not have to be visible to be hit by the bounce.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/MissFortune/ability-icon/q',
      maxCharges: -1,
      notes: 'Double Up deals  basic damage to both targets, but also triggers spell effects by also being tagged as  spell damage.\n Spell shields can be used by either target. If it is on the primary target, the spell shield will not prevent the shot from bouncing.\nNeutral units count as valid targets to bounce.\nThe bounce follows a priority order on targets behind in a certain angle:\n500 units in 20°.\n500 units in 40°.\n500 units in 110°.\n150 units in 160°.\nDouble Up\'s cast range adjusts based on Miss Fortune\'s  attack range, which can be increased by items such as  Rapid Firecannon.\nThe damage of a  critically striking shot is 35 / 70 / 105 / 140 / 175 (+ 175% AD) (+ 61.25% AP) physical damage, increased to 42 / 84 / 126 / 168 / 210 (+ 210% AD) (+ 73.5% AP) physical damage by  Infinity Edge\'s bonus critical damage.\nIf there is no secondary target, the shot will not bounce and the dud will instead fall to the ground.\nThe dud lands on the ground 176 units behind the primary target and has a missile speed of 400 on its way there.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '1400',
      spellEffects: 'special',
      spellshieldable: 'Special',
      targeting: 'Unit',
      targetRange: 'Miss Fortune\'s  attack range'
    },
    {
      key: 'W',
      name: 'Strut',
      affects: 'Self',
      blurb: 'Passive:  Miss Fortune gains  bonus movement speed after a few seconds without being attacked. This bonus is increased after another few seconds, and is granted instantly whenever Strut is cast.',
      castTime: 'none',
      cooldown: '12',
      cost: '45',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Miss Fortune gains bonus movement speed after 4 seconds without taking non- persistent damage. This bonus is increased after another 3 seconds, and is granted instantly whenever Strut is cast or upon respawning.</p>',
          leveling: [
            {
              attribute: 'Bonus Movement Speed',
              modifiers: [
                {
                  values: '30 / 35 / 40 / 45 / 50'
                }
              ]
            },
            {
              attribute: 'Increased Bonus Movement Speed',
              modifiers: [
                {
                  values: '60 / 70 / 80 / 90 / 100'
                }
              ]
            }
          ]
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Miss Fortune gains bonus attack speed for 4 seconds.</p>',
          leveling: [
            {
              attribute: 'Bonus Attack Speed',
              modifiers: [
                {
                  unit: '%',
                  values: '40 / 55 / 70 / 85 / 100'
                }
              ]
            }
          ]
        },
        {
          description: 'Marking a new target with Love Tap reduces Strut\'s current cooldown by 2 seconds.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/MissFortune/ability-icon/w',
      maxCharges: -1,
      notes: 'No additional notes.',
      resource: 'Mana',
      targeting: 'Auto'
    },
    {
      key: 'E',
      name: 'Make It Rain',
      affects: 'Enemies',
      blurb: 'Active:  Miss Fortune casts a storm of bullets at the target location for a short time, which continually deals magic damage and  slows enemies within.',
      castTime: '0.25',
      cooldown: '18 / 17 / 16 / 15 / 14',
      cost: '80',
      damageType: 'Magic damage',
      effectRadius: '200',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Miss Fortune casts a storm of bullets at the target location for 2 seconds, granting sight of the area, dealing magic damage every 0.25 seconds to enemies within, and slowing them by 40% (+ 6% per 100 AP).</p>',
          leveling: [
            {
              attribute: 'Magic Damage Per Tick',
              modifiers: [
                {
                  values: '8.75 / 12.5 / 16.25 / 20 / 23.75'
                },
                {
                  unit: '% AP',
                  values: '15'
                }
              ]
            },
            {
              attribute: 'Total Magic Damage',
              modifiers: [
                {
                  values: '70 / 100 / 130 / 160 / 190'
                },
                {
                  unit: '% AP',
                  values: '120'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/MissFortune/ability-icon/e',
      maxCharges: -1,
      notes: 'Make It Rain\'s  slow cannot be  cleansed.',
      resource: 'Mana',
      spellEffects: 'aoedot',
      spellshieldable: 'False',
      targeting: 'Location',
      targetRange: '1000'
    },
    {
      key: 'R',
      name: 'Bullet Time',
      width: '40',
      affects: 'Enemies',
      angle: '30°',
      castTime: 'none',
      cooldown: '120 / 110 / 100',
      cost: '100',
      damageType: 'Physical damage',
      effectRadius: '1450',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Miss Fortune channels for up to 3 seconds, firing a number of waves of bullets in the target direction. Each wave is in a spread of 6 projectiles that deals 75% AD (+ 25% AP) physical damage to enemies hit.</p>',
          leveling: [
            {
              attribute: 'Total Waves',
              modifiers: [
                {
                  values: '14 / 16 / 18'
                }
              ]
            },
            {
              attribute: 'Maximum Total Physical Damage',
              modifiers: [
                {
                  unit: '% AD',
                  values: '1050 / 1200 / 1350'
                },
                {
                  tooltip: 'Scaling per rank:\n350 / 400 / 450% AP',
                  unit: '% AP',
                  values: '350 - 450'
                }
              ]
            },
            {
              attribute: 'Wave Interval Time',
              modifiers: [
                {
                  unit: ' seconds',
                  values: '0.2 / 0.18 / 0.16'
                }
              ]
            }
          ]
        },
        {
          description: 'Each of the waves can critically strike for (120% + 8%) damage.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/MissFortune/ability-icon/r',
      maxCharges: -1,
      notes: 'The damage dealt by each wave of Bullet Time is calculated when the wave reaches the target.\nMiss Fortune  reveals herself for 4.5 seconds if there is an enemy champion within the area.\nTargets cannot be damaged by more than one projectile per wave.\nThe bullet streams that each fire 1 projectile per wave are spead by 6° between one another, aiming towards the angles +-3/9/15° from Miss Fortune\'s facing direction.\nBullet time picks 6 locations on the ground 500 units from Miss Fortune (with the aforementioned angles) and fires a bullet stream towards each.\nIf Miss Fortune is moved to a new location, these locations will update (since patch V13.3); the cone will fire towards her new facing direction.\nBullet time fires the first wave at 0.066 seconds, and the last at 2.904 seconds. Times between waves are equally spread between these values.\nMiss Fortune may cancel the last ~0.1 seconds of channel time at no loss of effect.\nThe following table refers for interactions while Miss Fortune is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nInterrupts\n\n\nAbilities\n\nInterrupts\n\n\nMovement\n\nInterrupts\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '2000',
      spellEffects: 'aoedot',
      spellshieldable: 'False',
      targeting: 'Direction'
    }
  ],
  adaptiveType: 'Physical damage',
  attackType: 'Ranged',
  attributeRatings: {
    abilityReliance: 30,
    control: 1,
    damage: 3,
    difficulty: 1,
    mobility: 1,
    toughness: 1,
    utility: 1
  },
  faction: 'bilgewater',
  fullName: 'Sarah Fortune',
  lore: 'A Bilgewater captain famed for her looks but feared for her ruthlessness, Sarah Fortune paints a stark figure among the hardened criminals of the port city. As a child, she witnessed the reaver king Gangplank murder her family—an act she brutally avenged years later, blowing up his flagship while he was still aboard. Those who underestimate her will face a beguiling and unpredictable opponent… and, likely, a bullet or two in their guts.',
  patchLastChanged: '25.03',
  positions: [
    'Bottom'
  ],
  price: {
    blueEssence: 225,
    rp: 260
  },
  releaseDate: '2010-09-08',
  resource: 'Mana',
  roles: [
    'Mage',
    'Marksman'
  ],
  stats: {
    acquisitionRadius: {
      flat: 800
    },
    armor: {
      flat: 25,
      perLevel: 4
    },
    attackCastTime: {
      flat: 0.3
    },
    attackDamage: {
      flat: 53,
      perLevel: 2.4
    },
    attackDelayOffset: {
      flat: -0.152
    },
    attackRange: {
      flat: 550
    },
    attackSpeed: {
      flat: 0.656,
      perLevel: 3
    },
    attackSpeedRatio: {
      flat: 0.656
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
      flat: 65
    },
    health: {
      flat: 640,
      perLevel: 103
    },
    healthRegen: {
      flat: 3.75,
      perLevel: 0.65
    },
    magicResistance: {
      flat: 30,
      perLevel: 1.3
    },
    mana: {
      flat: 300,
      perLevel: 40
    },
    manaRegen: {
      flat: 8,
      perLevel: 0.8
    },
    movespeed: {
      flat: 325
    },
    pathingRadius: {
      flat: 35
    },
    selectionRadius: {
      flat: 100
    }
  }
}
export default champion