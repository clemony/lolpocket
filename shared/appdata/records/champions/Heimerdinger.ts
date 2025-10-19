// Updated Patch 25.19 - 10/07/2025 08:16:12 AM CDT

const champion: Champion = {
  id: 74,
  key: 'Heimerdinger',
  name: 'Heimerdinger',
  title: 'the Revered Inventor',
  abilities: [
    {
      key: 'P',
      name: 'Hextech Affinity',
      affects: 'Self',
      blurb: 'Innate:  Heimerdinger gains  bonus movement speed while near allied  towers and  turrets he deploys.',
      effectRadius: '300',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Heimerdinger gains 20% bonus movement speed while near an allied turret or a H-28G Evolution Turret or H-28Q Apex Turret deployed by him.</p>'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Heimerdinger/ability-icon/p',
      notes: 'No additional details.',
      targeting: 'Passive'
    },
    {
      key: 'Q',
      name: 'H-28G Evolution Turret',
      affects: 'Enemies',
      blurb: 'Active:  Heimerdinger deploys a rapid-fire turret that deals magic damage to his target, or a nearby enemy. The turret will become dormant while he leaves it alone.',
      castTime: '0.25',
      cooldown: '1',
      cost: '20',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Heimerdinger deploys a H-28G Evolution Turret at the target location, which lasts until destroyed.</p>'
        },
        {
          description: 'Heimerdinger periodically stocks a Turret Kit charge, up to a maximum of 3.'
        },
        {
          description: 'Up to 3 H-28G Evolution Turrets can be deployed at a time, with those deployed beyond the maximum destroying the oldest one.'
        },
        {
          description: 'See Pets for more details about H-28G Evolution Turrets.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Heimerdinger/ability-icon/q',
      maxCharges: 3,
      notes: 'Deals  spell damage on basic attacks and  area damage on the beam.\nThe H-28G Evolution Turret\'s stats update every second to reflect rank ups, level ups, and changes in Heimerdinger\'s ability power.\nThe Turret Kit buff will visually represent the recharge rate cooldown, and how many H-28G Evolution Turret\'s that Heimerdinger has stored. This is visible to both allies and enemies.\nThe recharge rate of H-28G Evolution Turret is affected by ability haste.\nThe H-28G Evolution Turret has a  sight radius of 585 while active and 227.5 while dormant.\nThe amount of Turret Kit charges Heimerdinger has is indicated by small nuts orbiting him.',
      projectile: 'TRUE',
      rechargeRate: '20',
      resource: 'Mana',
      spellEffects: 'special',
      spellshieldable: 'False',
      targeting: 'Location',
      targetRange: '350'
    },
    {
      key: 'Q',
      name: 'H-28Q Apex Turret',
      affects: 'Enemies',
      blurb: 'UPGRADE:  Heimerdinger instead deploys a slow-fire turret that attacks a nearby enemy champion, dealing magic damage and  slowing nearby enemies.',
      castTime: '0.25',
      cooldown: '1',
      cost: '20',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">UPGRADE!!! - Active:</span> Heimerdinger deploys a H-28Q Apex Turret at the target location, which lasts for 8 seconds.</p>'
        },
        {
          description: 'H-28Q Apex Turret scales with UPGRADE!!!\'s rank.'
        },
        {
          description: 'See Pets for more details about the H-28Q Apex Turret.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Heimerdinger/ability-icon/q',
      maxCharges: 3,
      notes: 'The H-28Q Apex Turret has a  sight radius of 900.\nThe H-28Q Apex Turret\'s stats update every second to reflect rank ups, level ups, and changes in Heimerdinger\'s ability power.',
      projectile: 'TRUE',
      spellEffects: 'spellaoe',
      spellshieldable: 'False',
      targeting: 'Location',
      targetRange: '450'
    },
    {
      key: 'W',
      name: 'Hextech Micro-Rockets',
      affects: 'Enemies',
      blurb: 'Active:  Heimerdinger fires a wave of rockets that converge to the target location and fan beyond it to max range, each dealing magic damage to the first enemy hit. Enemies take less damage from subsequent rockets that hit them.',
      castTime: '0.25',
      cooldown: '11 / 10 / 9 / 8 / 7',
      cost: '50 / 60 / 70 / 80 / 90',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Heimerdinger launches a wave of 5 rockets that converge upon the target location and fan beyond it up to a maximum range, with each one dealing magic damage to the first enemy it hits. Every rocket hitting an enemy champion grants 20% beam charge to all turrets within 1000 range, up to a maximum of 100% beam charge when hitting 5 rockets on an enemy champion.</p>',
          leveling: [
            {
              attribute: 'Initial Rocket Magic Damage',
              modifiers: [
                {
                  values: '40 / 65 / 90 / 115 / 140'
                },
                {
                  unit: '% AP',
                  values: '55'
                }
              ]
            }
          ]
        },
        {
          description: 'Enemies can be hit by multiple rockets, but receive less damage from ones beyond the first. Against minions, this lesser damage is increased by 200%.',
          leveling: [
            {
              attribute: 'Subsequent Rocket Magic Damage',
              modifiers: [
                {
                  values: '10 / 15 / 20 / 25 / 30'
                },
                {
                  unit: '% AP',
                  values: '12'
                }
              ]
            },
            {
              attribute: 'Total Subsequent Non-Minion Damage',
              modifiers: [
                {
                  values: '40 / 60 / 80 / 100 / 120'
                },
                {
                  unit: '% AP',
                  values: '48'
                }
              ]
            },
            {
              attribute: 'Combined Total Non-Minion Damage',
              modifiers: [
                {
                  values: '80 / 125 / 170 / 215 / 260'
                },
                {
                  unit: '% AP',
                  values: '103'
                }
              ]
            },
            {
              attribute: 'Subsequent Rocket Minion Damage',
              modifiers: [
                {
                  values: '30 / 45 / 60 / 75 / 90'
                },
                {
                  unit: '% AP',
                  values: '36'
                }
              ]
            },
            {
              attribute: 'Total Subsequent Minion Damage',
              modifiers: [
                {
                  values: '120 / 180 / 240 / 300 / 360'
                },
                {
                  unit: '% AP',
                  values: '144'
                }
              ]
            },
            {
              attribute: 'Combined Total Minion Damage',
              modifiers: [
                {
                  values: '160 / 245 / 330 / 415 / 500'
                },
                {
                  unit: '% AP',
                  values: '199'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Heimerdinger/ability-icon/w',
      maxCharges: -1,
      notes: 'If casting beyond 1000 units based off current Heimerdinger\'s position, every rockets aim towards Heimerdinger\'s position extended towards cast position by 1100 units\nHextech Micro-Rockets\'  direction-targeting allows for custom spread.\nThis ability will cast from wherever the caster is at the end of the cast time.',
      projectile: 'TRUE',
      resource: 'Mana',
      spellEffects: 'spellaoe',
      spellshieldable: 'True',
      targeting: 'Location',
      targetRange: '1150'
    },
    {
      key: 'W',
      name: 'Hextech Rocket Swarm',
      affects: 'Enemies',
      blurb: 'UPGRADE:  Heimerdinger now fires 4 waves of rockets, each rocket dealing magic damage to the first enemy hit. Enemies take less damage from subsequent rockets that hit them.',
      castTime: '0.25',
      cooldown: '11 / 10 / 9 / 8 / 7',
      cost: '50 / 60 / 70 / 80 / 90',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">UPGRADE!!! - Active:</span> Heimerdinger unleashes 4 waves of 5 rockets in quick succession that converge upon the target location. Each rocket deals magic damage to the first enemy hit.</p>',
          leveling: [
            {
              attribute: 'Initial Rocket Damage',
              modifiers: [
                {
                  values: '135 / 180 / 225'
                },
                {
                  unit: '% AP',
                  values: '45'
                }
              ]
            }
          ]
        },
        {
          description: 'Enemies can be hit by multiple rockets. Champions and monsters receive less damage from the second to fifth rockets that hit them, which is reduced by 50% for rockets beyond the fifth. Minions instead always receive 100% of the initial damage from every single rocket.',
          leveling: [
            {
              attribute: 'Rockets 2:5 Magic Damage',
              modifiers: [
                {
                  values: '32 / 45 / 58'
                },
                {
                  unit: '% AP',
                  values: '12'
                }
              ]
            },
            {
              attribute: 'Rockets 6:20 Magic Damage',
              modifiers: [
                {
                  values: '16 / 22.5 / 29'
                },
                {
                  unit: '% AP',
                  values: '6'
                }
              ]
            },
            {
              attribute: 'Combined Total Non-Minion Damage',
              modifiers: [
                {
                  values: '503 / 697.5 / 892'
                },
                {
                  unit: '% AP',
                  values: '183'
                }
              ]
            },
            {
              attribute: 'Minion Damage per Rocket',
              modifiers: [
                {
                  values: '135 / 180 / 225'
                }
              ]
            },
            {
              attribute: 'Combined Total Minion Damage',
              modifiers: [
                {
                  values: '2700 / 3600 / 4500'
                },
                {
                  unit: '% AP',
                  values: '900'
                }
              ]
            }
          ]
        },
        {
          description: 'Hextech Rocket Swarm scales with UPGRADE!!!\'s rank.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Heimerdinger/ability-icon/w',
      maxCharges: -1,
      notes: 'If casting beyond 1000 units based off current Heimerdinger\'s position, every rockets aim towards Heimerdinger\'s position extended towards cast position by 1100 units\nHextech Rocket Swarm\'s direction-targeting allows for custom spread.\nHeimerdinger can move once Hextech Rocket Swarm has been cast, even if the projectiles are still spawning or haven\'t even started to move yet.\nHextech Rocket Swarm\'s will cast from wherever Heimerdinger is at the end of the cast time.',
      projectile: 'TRUE',
      spellEffects: 'spellaoe',
      spellshieldable: 'True',
      targeting: 'Location',
      targetRange: '1150'
    },
    {
      key: 'E',
      name: 'CH-2 Electron Storm Grenade',
      affects: 'Enemies',
      blurb: 'Active:  Heimerdinger lobs a grenade to the target location that deals magic damage and  slows nearby enemies. Enemies hit at the epicenter are also  stunned.',
      castTime: '0.25',
      cooldown: '11',
      cost: '85',
      damageType: 'Magic damage',
      effectRadius: '250',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Heimerdinger hurls a grenade at the target location that detonates upon impact, dealing magic damage to nearby enemies and slowing them by 35% for 2 seconds. If the grenade hits an enemy champion, all turrets within 1000 range of the impact gain 100% beam charge.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '60 / 100 / 140 / 180 / 220'
                },
                {
                  unit: '% AP',
                  values: '60'
                }
              ]
            }
          ]
        },
        {
          description: 'Enemies hit at the center of the grenade\'s impact are also stunned for 1.5 seconds.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Heimerdinger/ability-icon/e',
      innerRadius: '100',
      maxCharges: -1,
      notes: 'This ability will cast from wherever the caster is at the end of the cast time.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '1200',
      spellEffects: 'Area of effect',
      spellshieldable: 'True',
      targeting: 'Location',
      targetRange: '925'
    },
    {
      key: 'E',
      name: 'CH-3X Lightning Grenade',
      affects: 'Enemies',
      blurb: 'UPGRADE:  Heimerdinger\'s grenade now bounces 3 times, each dealing magic damage in a larger area.',
      castTime: '0.25',
      cooldown: '11',
      cost: '85',
      damageType: 'Magic damage',
      effectRadius: '300',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">UPGRADE!!! - Active:</span> Heimerdinger hurls a massive grenade at the target location that bounces a fixed distance 3 times in the cast direction. The grenade explodes upon landing each time to deal magic damage to nearby enemies and slow them by 35% for 2 seconds. Enemies hit at the center of the grenade\'s impact are additionally stunned for 1.5 seconds.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '100 / 200 / 300'
                },
                {
                  unit: '% AP',
                  values: '60'
                }
              ]
            }
          ]
        },
        {
          description: 'Enemy champions can only be damaged once per cast, but can be slowed and stunned multiple times if circumstances permit.'
        },
        {
          description: 'CH-3X Lightning Grenade scales with UPGRADE!!!\'s rank.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Heimerdinger/ability-icon/e',
      innerRadius: '150',
      maxCharges: -1,
      notes: 'No additional details.',
      projectile: 'TRUE',
      speed: '1200',
      spellEffects: 'Area of effect',
      spellshieldable: 'True',
      targeting: 'Location',
      targetRange: '925'
    },
    {
      key: 'R',
      name: 'UPGRADE!!!',
      affects: 'Self',
      blurb: 'Active:  Heimerdinger can empower his next ability to apply an additional effect. These empowered abilities have the same  cooldowns as their basic forms, deal modified damage, and do not cost mana.',
      castTime: 'none',
      cooldown: '100 / 85 / 70',
      cost: '100',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Heimerdinger empowers his next basic ability for an additional effect, consuming the empowerment upon cast and placing UPGRADE!!! on full cooldown. These empowered abilities have the same cooldowns as their basic forms, deal modified damage, and do not have a mana cost. UPGRADE!!! can be recast after 3 seconds while the empowerment is available.</p>'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Heimerdinger ends UPGRADE!!! and puts it on a 3-second cooldown.</p>'
        },
        {
          description: 'UPGRADE!!! can be used while affected by cast-inhibiting crowd control.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Heimerdinger/ability-icon/r',
      maxCharges: -1,
      notes: 'Toggle abilities do not count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nConsuming the buff for an empowered basic ability does.\nNo compensations for  mana are made if UPGRADE!!! is recast.',
      resource: 'Mana',
      targeting: 'Auto'
    }
  ],
  adaptiveType: 'Magic damage',
  attackType: 'Ranged',
  attributeRatings: {
    abilityReliance: 100,
    control: 2,
    damage: 3,
    difficulty: 2,
    mobility: 1,
    toughness: 1,
    utility: 2
  },
  faction: 'piltover',
  fullName: 'Cecil B. Heimerdinger',
  lore: 'The eccentric Professor Cecil B. Heimerdinger is one of the most innovative and esteemed inventors the world has ever known. As the longest serving member of the Council of Piltover, he saw the best and the worst of the city\'s unending desire for progress. Nonetheless, this brilliant scientist and teacher will always remain dedicated to using his unconventional devices to improve the lives of others.',
  patchLastChanged: '25.14',
  positions: [
    'Middle',
    'Support',
    'Top'
  ],
  price: {
    blueEssence: 1575,
    rp: 790
  },
  releaseDate: '2009-10-10',
  resource: 'Mana',
  roles: [
    'Mage',
    'Specialist',
    'Support'
  ],
  stats: {
    acquisitionRadius: {
      flat: 550
    },
    armor: {
      flat: 19,
      perLevel: 4.2
    },
    attackCastTime: {
      flat: 0.3
    },
    attackDamage: {
      flat: 56,
      perLevel: 2.7
    },
    attackDelayOffset: {
      flat: -0.1
    },
    attackRange: {
      flat: 550
    },
    attackSpeed: {
      flat: 0.658,
      perLevel: 1.36
    },
    attackSpeedRatio: {
      flat: 0.625
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
      flat: 558,
      perLevel: 101
    },
    healthRegen: {
      flat: 7,
      perLevel: 0.55
    },
    magicResistance: {
      flat: 30,
      perLevel: 1.3
    },
    mana: {
      flat: 385,
      perLevel: 20
    },
    manaRegen: {
      flat: 8,
      perLevel: 0.8
    },
    movespeed: {
      flat: 340
    },
    pathingRadius: {
      flat: 30.544
    },
    selectionRadius: {
      flat: 100
    }
  }
}
export default champion