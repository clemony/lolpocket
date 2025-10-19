// Updated Patch 25.19 - 10/07/2025 08:16:13 AM CDT

const champion: Champion = {
  id: 75,
  key: 'Nasus',
  name: 'Nasus',
  title: 'the Curator of the Sands',
  abilities: [
    {
      key: 'P',
      name: 'Soul Eater',
      affects: 'Self',
      blurb: 'Innate:  Nasus gains  life steal based on level.',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Nasus gains 12% / 18% / 24% (based on level) life steal.</p>'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Nasus/ability-icon/p',
      notes: 'No additional details.',
      targeting: 'Passive'
    },
    {
      key: 'Q',
      name: 'Siphoning Strike',
      affects: 'Self',
      blurb: 'Active:  Nasus\' next basic attack within a period will gain  bonus range and deal bonus physical damage based on the amount of Siphoning Strike stacks.',
      castTime: 'none',
      cooldown: '7.5 / 6.5 / 5.5 / 4.5 / 3.5',
      cost: '20',
      damageType: 'Physical damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Nasus empowers his next basic attack within 10 seconds to have an uncancellable windup, gain 50 bonus range, and deal bonus physical damage. Siphoning Strike\'s base damage is affected by critical strike modifiers.</p>',
          leveling: [
            {
              attribute: 'Bonus Physical Damage',
              modifiers: [
                {
                  values: '35 / 55 / 75 / 95 / 115'
                },
                {
                  unit: '% of Siphoning Strike stacks',
                  values: '100'
                }
              ]
            }
          ]
        },
        {
          description: 'If Siphoning Strike kills the target, Nasus permanently gains 3 stacks, increased to 12 if the target is a champion, large minion, or large monster.'
        },
        {
          description: 'Siphoning Strike resets Nasus\' basic attack timer.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Nasus/ability-icon/q',
      maxCharges: -1,
      notes: 'Nasus can gain Siphoning Strike stacks by killing any enemy unit, this includes  champions,  minions,  monsters,  wards,  turrets, and  pets.\nJungle plants and structures that are not turrets (e.g. inhibitors) will not grant stacks.\nSiphoning Strike will not generate stacks from secondary units killed by other effects (e.g.  Tiamat).\n Life steal applies to the entire damage of Siphoning Strike\nSiphoning Strike will trigger  Tear of the Goddess\' Manaflow.',
      resource: 'Mana',
      spellEffects: 'spell',
      spellshieldable: 'false',
      targeting: 'Auto'
    },
    {
      key: 'W',
      name: 'Wither',
      affects: 'Enemies',
      blurb: 'Active:  Nasus ages the target enemy champion for a few seconds, gradually  slowing and  crippling them over the duration.',
      castTime: '0.25',
      cooldown: '15 / 14 / 13 / 12 / 11',
      cost: '80',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Nasus ages the target enemy champion for 5 seconds, slowing them by 35% and crippling them by[ 75% of that amount, ][ 26.25%, ]both increasing every second over the duration.</p>',
          leveling: [
            {
              attribute: 'Maximum Slow',
              modifiers: [
                {
                  unit: '%',
                  values: '47 / 59 / 71 / 83 / 95'
                }
              ]
            },
            {
              attribute: 'Additional Slow Per Second',
              modifiers: [
                {
                  unit: '%',
                  values: '3 / 6 / 9 / 12 / 15'
                }
              ]
            },
            {
              attribute: 'Maximum Cripple',
              modifiers: [
                {
                  unit: '%',
                  values: '35.25 / 44.25 / 53.25 / 62.25 / 71.25'
                }
              ]
            },
            {
              attribute: 'Additional Cripple Per Second',
              modifiers: [
                {
                  unit: '%',
                  values: '2.25 / 4.5 / 6.75 / 9 / 11.25'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Nasus/ability-icon/w',
      maxCharges: -1,
      notes: 'Wither interrupts the target\'s attack windup when it is first applied. (bug)\nIf Wither\'s duration is affected by  Tenacity the effects will apply slower (negative tenacity percentage) or faster (positive tenacity percentage) so the maximum values are still reached when the modified duration ends.\nWither\'s cripple effectiveness calculates from its slow\'s base values, thus  slow resist will not interact with the attack speed modifier indirectly.\nBoth  slow and  cripple from Wither are considered to be a single debuff. (note)\nTherefore,  slow immunity will prevent both, even without technical  cripple immunity.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).',
      resource: 'Mana',
      spellshieldable: 'True',
      targeting: 'Unit',
      targetRange: '700'
    },
    {
      key: 'E',
      name: 'Spirit Fire',
      affects: 'Enemies',
      blurb: 'Active:  Nasus unleashes a spirit fire at the target location that deals magic damage to enemies within.',
      castTime: '0.25',
      cooldown: '12',
      cost: '60 / 70 / 80 / 90 / 100',
      damageType: 'Magic damage',
      effectRadius: '400 /  200',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Nasus unleashes a spirit fire at the target location, granting sight of the area for 2.5 seconds and, after a 0.264 seconds delay, dealing magic damage to enemies within.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '50 / 80 / 110 / 140 / 170'
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
          description: 'The fire then remains for 5 seconds, dealing magic damage each second to enemies within and inflicting them with armor reduction, lingering for 1 second.',
          leveling: [
            {
              attribute: 'Magic Damage Per Tick',
              modifiers: [
                {
                  values: '10 / 16 / 22 / 28 / 34'
                },
                {
                  unit: '% AP',
                  values: '12'
                }
              ]
            },
            {
              attribute: 'Total Magic Damage',
              modifiers: [
                {
                  values: '100 / 160 / 220 / 280 / 340'
                },
                {
                  unit: '% AP',
                  values: '120'
                }
              ]
            },
            {
              attribute: 'Armor Reduction',
              modifiers: [
                {
                  unit: '% of target\'s armor',
                  values: '30 / 35 / 40 / 45 / 50'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Nasus/ability-icon/e',
      maxCharges: -1,
      notes: 'No additional details.',
      resource: 'Mana',
      spellEffects: 'AoEDoT',
      spellshieldable: 'False',
      targeting: 'Location',
      targetRange: '650'
    },
    {
      key: 'R',
      name: 'Fury of the Sands',
      affects: 'Self',
      blurb: 'Active:  Nasus empowers himself for some time, gaining bonus size,  health,  armor,  magic resist, and  attack range.',
      castTime: '0.2',
      cooldown: '120 / 100 / 80',
      cost: '100',
      damageType: 'Magic damage',
      effectRadius: '400',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Nasus empowers himself for 15 seconds, gaining bonus health, bonus armor, bonus magic resistance, increased size, and 50 bonus attack range for the duration.</p>',
          leveling: [
            {
              attribute: 'Bonus Health',
              modifiers: [
                {
                  values: '300 / 450 / 600'
                }
              ]
            },
            {
              attribute: 'Bonus Resistances',
              modifiers: [
                {
                  values: '40 / 55 / 70'
                }
              ]
            },
            {
              attribute: 'Increased Size',
              modifiers: [
                {
                  unit: '%',
                  values: '30 / 35 / 40'
                }
              ]
            }
          ]
        },
        {
          description: 'While Nasus is empowered, he deals magic damage every 0.5 seconds to nearby enemies, capped at 240 per second, and Siphoning Strike\'s cooldown is halved.',
          leveling: [
            {
              attribute: 'Magic Damage Per Tick',
              modifiers: [
                {
                  unit: '%  of target\'s maximum health',
                  values: '1.5 / 2 / 2.5'
                },
                {
                  unit: '% per 100 AP',
                  values: '0.5'
                }
              ]
            },
            {
              attribute: 'Total Magic Damage',
              modifiers: [
                {
                  unit: '%  of target\'s maximum health',
                  values: '45 / 60 / 75'
                },
                {
                  unit: '% per 100 AP',
                  values: '15'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Nasus/ability-icon/r',
      maxCharges: -1,
      notes: 'Fury of the Sands\' bonus health is not affected by  Grievous Wounds and Nasus retains it once the duration ends.',
      resource: 'Mana',
      spellEffects: 'aoedot',
      targeting: 'Auto'
    }
  ],
  adaptiveType: 'Physical damage',
  attackType: 'Melee',
  attributeRatings: {
    abilityReliance: 20,
    control: 2,
    damage: 2,
    difficulty: 1,
    mobility: 1,
    toughness: 3,
    utility: 1
  },
  faction: 'shurima',
  lore: 'Nasus is an imposing, jackal-headed Ascended being from ancient Shurima, a heroic figure regarded as a demigod by the people of the desert. Fiercely intelligent, he was a guardian of knowledge and peerless strategist whose wisdom guided the ancient empire of Shurima to greatness for many centuries. After the fall of the empire, he went into self-imposed exile, becoming little more than a legend. Now that the ancient city of Shurima has risen once more, he has returned, determined to ensure it never falls again.',
  patchLastChanged: '25.03',
  positions: [
    'Top'
  ],
  price: {
    blueEssence: 675,
    rp: 585
  },
  releaseDate: '2009-10-01',
  resource: 'Mana',
  roles: [
    'Fighter',
    'Juggernaut',
    'Tank'
  ],
  stats: {
    acquisitionRadius: {
      flat: 350
    },
    armor: {
      flat: 34,
      perLevel: 4.7
    },
    attackCastTime: {
      flat: 0.3
    },
    attackDamage: {
      flat: 67,
      perLevel: 4
    },
    attackDelayOffset: {
      flat: -0.099
    },
    attackRange: {
      flat: 125
    },
    attackSpeed: {
      flat: 0.638,
      perLevel: 3.48
    },
    attackSpeedRatio: {
      flat: 0.638
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
      flat: 80
    },
    health: {
      flat: 631,
      perLevel: 104
    },
    healthRegen: {
      flat: 9,
      perLevel: 0.9
    },
    magicResistance: {
      flat: 32,
      perLevel: 2.05
    },
    mana: {
      flat: 326,
      perLevel: 62
    },
    manaRegen: {
      flat: 7.45,
      perLevel: 0.5
    },
    movespeed: {
      flat: 350
    },
    pathingRadius: {
      flat: 50
    },
    selectionRadius: {
      flat: 135
    }
  }
}
export default champion