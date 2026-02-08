// Updated Patch 16.1 - 01/29/2026 04:26:56 PM CST
import type { Champion } from '#shared/types'

const champion: Champion = {
  id: 75,
  key: 'Nasus',
  name: 'Nasus',
  title: 'The Curator of the Sands',
  adaptiveType: 'Physical damage',
  attackType: 'Melee',
  patchLastChanged: '25.24',
  releaseDate: '2009-10-01',
  resource: 'Mana',
  abilities: [
    {
      key: 'P',
      name: 'Soul Eater',
      affects: 'Self',
      blurb: 'Innate:  Nasus gains  life steal based on level.',
      icon: 'https://cdn.communitydragon.org/latest/champion/Nasus/ability-icon/p',
      notes: 'No additional details.',
      targeting: 'Passive',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Nasus gains 12% / 18% / 24% (based on level) life steal.</p>'
        }
      ]
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
      icon: 'https://cdn.communitydragon.org/latest/champion/Nasus/ability-icon/q',
      notes: 'Both Siphoning Strike\'s base damage and damage from stacks are treated as  basic damage but also trigger spell effects by also being tagged as  spell damage.\nThe  basic attack is also considered a part of Siphoning Strike and treated as both  basic damage and  spell damage.\nNasus can gain Siphoning Strike stacks by killing any enemy unit, this includes  champions,  minions,  monsters,  wards,  turrets, and  pets.\nJungle plants and  structures that are not turrets (e.g. inhibitors) will not grant stacks.\nSiphoning Strike will not generate stacks from secondary units killed by other effects (e.g.  Tiamat).\nSiphoning Strike will trigger  Tear of the Goddess\' Manaflow.',
      resource: 'Mana',
      spellEffects: 'special',
      spellshieldable: 'false',
      targeting: 'Auto',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Nasus empowers his next basic attack within 10 seconds to have an uncancellable windup, gain 50 bonus range, and deal bonus physical damage. Siphoning Strike\'s base damage is affected by critical strike modifiers.</p>',
          leveling: [
            {
              attribute: 'Bonus Physical Damage',
              modifiers: [
                {
                  values: '40 / 60 / 80 / 100 / 120'
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
      ]
    },
    {
      key: 'W',
      name: 'Wither',
      affects: 'Enemies',
      blurb: 'Active:  Nasus ages the target enemy champion for a few seconds, gradually  slowing and  crippling them over the duration.',
      castTime: '0.25',
      cooldown: '15 / 14 / 13 / 12 / 11',
      cost: '80',
      icon: 'https://cdn.communitydragon.org/latest/champion/Nasus/ability-icon/w',
      notes: 'Wither interrupts the target\'s attack windup when it is first applied. (bug)\nIf Wither\'s duration is affected by  Tenacity the effects will apply slower (negative tenacity percentage) or faster (positive tenacity percentage) so the maximum values are still reached when the modified duration ends.\nWither\'s cripple effectiveness calculates from its slow\'s base values, thus  slow resist will not interact with the attack speed modifier indirectly.\nBoth  slow and  cripple from Wither are considered to be a single debuff. (note)\nTherefore,  slow immunity will prevent both, even without technical  cripple immunity.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).',
      resource: 'Mana',
      spellshieldable: 'True',
      targeting: 'Unit',
      targetRange: '700',
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
      ]
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
      icon: 'https://cdn.communitydragon.org/latest/champion/Nasus/ability-icon/e',
      notes: 'No additional details.',
      resource: 'Mana',
      spellEffects: 'AoEDoT',
      spellshieldable: 'False',
      targeting: 'Location',
      targetRange: '650',
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
      ]
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
      icon: 'https://cdn.communitydragon.org/latest/champion/Nasus/ability-icon/r',
      notes: 'Fury of the Sands\' bonus health is not affected by  Grievous Wounds and Nasus retains it once the duration ends.',
      resource: 'Mana',
      spellEffects: 'aoedot',
      targeting: 'Auto',
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
      ]
    }
  ],
  attributeRatings: {
    abilityReliance: 20,
    control: 2,
    damage: 2,
    difficulty: 1,
    mobility: 1,
    toughness: 3,
    utility: 1
  },
  positions: [
    'Top'
  ],
  price: {
    blueEssence: 675,
    rp: 585
  },
  roles: [
    'Fighter',
    'Juggernaut',
    'Tank'
  ],
  stats: {
    armor: 34,
    attackDamage: 67,
    attackRange: 125,
    attackSpeed: 0.6,
    hp: 650,
    hpRegen: 9,
    magicResist: 32,
    movespeed: 350,
    mp: 326,
    mpRegen: 7.5
  },
  statsPerLevel: {
    armor: 4.7,
    attackDamage: 4,
    attackSpeed: 3.5,
    hp: 104,
    hpRegen: 0.9,
    magicResist: 2.1,
    mp: 62,
    mpRegen: 0.5
  }
}
export default champion