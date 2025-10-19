// Updated Patch 25.19 - 10/07/2025 08:16:12 AM CDT

const champion: Champion = {
  id: 43,
  key: 'Karma',
  name: 'Karma',
  title: 'the Enlightened One',
  abilities: [
    {
      key: 'P',
      name: 'Gathering Fire',
      affects: 'Self',
      blurb: 'Innate:  Mantra\'s current cooldown is  reduced by a few seconds for each enemy champion hit by  Karma\'s damaging abilities.',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Mantra\'s current cooldown is reduced by 4 seconds for each enemy champion hit by Karma\'s damaging abilities.</p>'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Karma/ability-icon/p',
      notes: 'Inner Flame /  Soulflare reduces  Mantra\'s cooldown per champion hit by either damage instance (up to a maximum total reduction of 40 seconds if 5 enemy champions are hit by both instances of damage).\n Focused Resolve /  Renewal reduces  Mantra\'s cooldown when initially cast and again after the duration for the tether has expired (for a total reduction of 8 seconds).',
      targeting: 'Passive'
    },
    {
      key: 'Q',
      name: 'Inner Flame',
      width: '120',
      affects: 'Enemies',
      blurb: 'Active:  Karma fires a bolt in the target direction that explodes on the first enemy hit, dealing magic damage to nearby enemies and briefly  slowing them.',
      castTime: '0.25',
      cooldown: '9 / 8 / 7 / 6 / 5',
      cost: '40 / 50 / 60 / 70 / 80',
      damageType: 'Magic damage',
      effectRadius: '280',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Karma fires a bolt in the target direction that explodes on the first enemy hit, dealing magic damage to nearby enemies and slowing them by 40% for 1.5 seconds.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '60 / 110 / 160 / 210 / 260'
                },
                {
                  unit: '% AP',
                  values: '70'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Karma/ability-icon/q',
      maxCharges: -1,
      notes: 'Spell shield will block the initial impact from Inner Flame.\nThis ability will cast from wherever the caster is at the end of the cast time.\nInner Flame\'s effect radius is centered around the location of the missile as it collides.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '1700',
      spellEffects: 'Area of effect',
      spellshieldable: 'True',
      targeting: 'Direction',
      targetRange: '950 /  890'
    },
    {
      key: 'Q',
      name: 'Soulflare',
      width: '160',
      affects: 'Enemies',
      blurb: 'Mantra Bonus: Inner Flame deals increased damage, and fires a larger bolt that also explodes at max range.',
      cooldown: '9 / 8 / 7 / 6 / 5',
      cost: '40 / 50 / 60 / 70 / 80',
      damageType: 'Magic damage',
      effectRadius: '280',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Mantra Bonus:</span> Inner Flame deals increased damage, and fires a larger bolt that also explodes at maximum range.</p>',
          leveling: [
            {
              attribute: 'Bonus Magic Damage',
              modifiers: [
                {
                  values: '40 / 100 / 160 / 220'
                },
                {
                  unit: '% AP',
                  values: '30'
                }
              ]
            },
            {
              attribute: 'Total Magic Damage',
              modifiers: [
                {
                  values: '60 / 110 / 160 / 210 / 260'
                },
                {
                  values: '40 / 100 / 160 / 220'
                },
                {
                  unit: '% AP',
                  values: '100'
                }
              ]
            }
          ]
        },
        {
          description: 'The explosion creates a field for 1.5 seconds that slows enemies within by 50%, which then ruptures to deal magic damage.',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '40 / 130 / 220 / 310'
                },
                {
                  unit: '% AP',
                  values: '50'
                }
              ]
            },
            {
              attribute: 'Total Bonus Damage',
              modifiers: [
                {
                  values: '80 / 230 / 380 / 530'
                },
                {
                  unit: '% AP',
                  values: '80'
                }
              ]
            },
            {
              attribute: 'Total Damage',
              modifiers: [
                {
                  values: '60 / 110 / 160 / 210 / 260'
                },
                {
                  values: '80 / 230 / 380 / 530'
                },
                {
                  unit: '% AP',
                  values: '150'
                }
              ]
            }
          ]
        },
        {
          description: 'Soulflare scales with Mantra\'s rank.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Karma/ability-icon/q',
      maxCharges: -1,
      notes: 'Spell shield will block the initial impact from either ability but will not block Soulflare\'s field damage.\nSoulflare\'s detonation radius is centered around the location of the missile as it collides, while the lingering field will always be created at the impacted enemy\'s center instead.\nSoulflare will cast from wherever Karma is at the end of the cast time.',
      projectile: 'TRUE',
      spellEffects: 'spellaoe',
      spellshieldable: 'Special',
      targeting: 'Direction'
    },
    {
      key: 'W',
      name: 'Focused Resolve',
      affects: 'Enemies / Self',
      blurb: 'Active:  Karma deals magic damage and  tethers to the target enemy  champion,  monster or  pet.',
      castTime: '0.25',
      cooldown: '12',
      cost: '50 / 55 / 60 / 65 / 70',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Karma deals magic damage to the target enemy champion, monster or pet and forms a tether between her and them for 2 seconds, during which they are revealed.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '40 / 65 / 90 / 115 / 140'
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
          description: 'If the tether is not broken by the end of its duration, the target is dealt the same magic damage again and is rooted for a duration, during which they are revealed.',
          leveling: [
            {
              attribute: 'Total Magic Damage',
              modifiers: [
                {
                  values: '80 / 130 / 180 / 230 / 280'
                },
                {
                  unit: '% AP',
                  values: '90'
                }
              ]
            },
            {
              attribute: 'Root Duration',
              modifiers: [
                {
                  unit: ' seconds',
                  values: '1.6 / 1.7 / 1.8 / 1.9 / 2'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Karma/ability-icon/w',
      maxCharges: -1,
      notes: 'Spell shield will block the tether\'s application and damage but not the aftereffects of one already applied.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).',
      projectile: 'FALSE',
      resource: 'Mana',
      spellEffects: 'spell',
      spellshieldable: 'Special',
      targeting: 'Unit',
      targetRange: '675',
      tetherRadius: '825'
    },
    {
      key: 'W',
      name: 'Renewal',
      affects: 'Enemies / Self',
      blurb: 'Mantra Bonus:\nFocused Resolve\'s  root is increased.',
      cooldown: '12',
      cost: '50 / 55 / 60 / 65 / 70',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Mantra Bonus:</span> Focused Resolve\'s root duration is increased. Karma heals for 17% (+ 1% per 100 AP) of her missing health once on-cast, and again once the tether lasts its full duration or the target dies while tethered.</p>',
          leveling: [
            {
              attribute: 'Root Duration Increase',
              modifiers: [
                {
                  unit: ' seconds',
                  values: '0.5 / 0.75 / 1 / 1.25'
                }
              ]
            },
            {
              attribute: 'Total Root Duration',
              modifiers: [
                {
                  unit: '  seconds',
                  values: '1.6 / 1.7 / 1.8 / 1.9 / 2'
                },
                {
                  tooltip: 'Scaling per rank:\n0.5 / 0.75 / 1 / 1.25',
                  values: '0.5 - 1.25'
                }
              ]
            }
          ]
        },
        {
          description: 'Renewal scales with Mantra\'s rank.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Karma/ability-icon/w',
      maxCharges: -1,
      notes: 'Spell shield will block the tether\'s application and damage but not the aftereffects of one already applied.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).',
      projectile: 'FALSE',
      spellEffects: 'spell',
      spellshieldable: 'Special',
      targeting: 'Unit'
    },
    {
      key: 'E',
      name: 'Inspire',
      affects: 'Allies',
      blurb: 'Active:  Karma applies a  shield on herself or the target allied champion for a short time, which briefly grants  bonus movement speed.',
      castTime: 'none',
      cooldown: '10 / 9.5 / 9 / 8.5 / 8',
      cost: '50 / 55 / 60 / 65 / 70',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Karma grants a shield to herself or the target allied champion for 2.5 seconds as well as 40% bonus movement speed for 2 seconds.</p>',
          leveling: [
            {
              attribute: 'Shield Strength',
              modifiers: [
                {
                  values: '80 / 130 / 180 / 230 / 280'
                },
                {
                  unit: '% AP',
                  values: '60'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Karma/ability-icon/e',
      maxCharges: -1,
      notes: 'Inspire has a  forgiveness radius of 175 units.',
      resource: 'Mana',
      targeting: 'Unit',
      targetRange: '800'
    },
    {
      key: 'E',
      name: 'Defiance',
      affects: 'Allies',
      blurb: 'Mantra Bonus:\nInspire\'s shield is increased, and Inspire spreads to surrounding allied champions at reduced power.',
      castTime: 'none',
      cooldown: '10 / 9.5 / 9 / 8.5 / 8',
      cost: '50 / 55 / 60 / 65 / 70',
      effectRadius: '700',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Mantra - Active:</span> Inspire grants a bonus amount of shielding.Inspire spreads to surrounding allied champions, granting them a shield for 2.5 seconds and 15% bonus movement speed for 2 seconds.</p>',
          leveling: [
            {
              attribute: 'Bonus Primary Target Shield',
              modifiers: [
                {
                  values: '50 / 100 / 150 / 200'
                },
                {
                  unit: '% AP',
                  values: '45'
                }
              ]
            },
            {
              attribute: 'Total Primary Target Shield',
              modifiers: [
                {
                  values: '80 / 130 / 180 / 230 / 280'
                },
                {
                  values: '50 / 100 / 150 / 200'
                },
                {
                  unit: '% AP',
                  values: '105'
                }
              ]
            },
            {
              attribute: 'Secondary Target Shield',
              modifiers: [
                {
                  values: '50 / 100 / 150 / 200'
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
          description: 'Defiance scales with Mantra\'s rank.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Karma/ability-icon/e',
      maxCharges: -1,
      notes: 'Defiance has a  forgiveness radius of 175 units.',
      resource: 'Mana',
      targeting: 'Unit'
    },
    {
      key: 'R',
      name: 'Mantra',
      affects: 'Self',
      blurb: 'Active:  Karma empowers her next ability within a period to apply an additional effect.',
      castTime: 'none',
      cooldown: '40 / 38 / 36 / 34',
      cost: '0',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Karma empowers her next basic ability within 8 seconds for an additional effect. Mantra can be used while affected by cast-inhibiting crowd control.</p>'
        },
        {
          description: 'Karma begins the game with one rank in Mantra. Her empowered abilities scale based on Mantra\'s rank.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Karma/ability-icon/r',
      maxCharges: -1,
      targeting: 'Auto'
    }
  ],
  adaptiveType: 'Magic damage',
  attackType: 'Ranged',
  attributeRatings: {
    abilityReliance: 100,
    control: 2,
    damage: 2,
    difficulty: 1,
    mobility: 1,
    toughness: 1,
    utility: 2
  },
  faction: 'ionia',
  fullName: 'Darha',
  lore: 'No mortal exemplifies the spiritual traditions of Ionia more than Karma. She is the living embodiment of an ancient soul reincarnated countless times, carrying all her accumulated memories into each new life, and blessed with power that few can comprehend. She has done her best to guide her people in recent times of crisis, though she knows that peace and harmony may come only at a considerable cost—both to her, and to the land she holds most dear.',
  patchLastChanged: '25.13',
  positions: [
    'Middle',
    'Support',
    'Top'
  ],
  price: {
    blueEssence: 1575,
    rp: 790
  },
  releaseDate: '2011-02-01',
  resource: 'Mana',
  roles: [
    'Burst',
    'Enchanter',
    'Mage',
    'Support'
  ],
  stats: {
    acquisitionRadius: {
      flat: 525
    },
    armor: {
      flat: 28,
      perLevel: 5
    },
    attackCastTime: {
      flat: 0.3
    },
    attackDamage: {
      flat: 51,
      perLevel: 3.3
    },
    attackDelayOffset: {
      flat: -0.139
    },
    attackRange: {
      flat: 525
    },
    attackSpeed: {
      flat: 0.625,
      perLevel: 2.3
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
      flat: 65
    },
    health: {
      flat: 630,
      perLevel: 109
    },
    healthRegen: {
      flat: 5.5,
      perLevel: 0.55
    },
    magicResistance: {
      flat: 30,
      perLevel: 1.3
    },
    mana: {
      flat: 374,
      perLevel: 40
    },
    manaRegen: {
      flat: 13,
      perLevel: 0.8
    },
    movespeed: {
      flat: 335
    },
    pathingRadius: {
      flat: 35
    },
    selectionRadius: {
      flat: 120
    }
  }
}
export default champion