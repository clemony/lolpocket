// Updated Patch 25.19 - 10/07/2025 08:16:12 AM CDT

const champion: Champion = {
  id: 85,
  key: 'Kennen',
  name: 'Kennen',
  title: 'the Heart of the Tempest',
  abilities: [
    {
      key: 'P',
      name: 'Mark of the Storm',
      affects: 'Enemies',
      blurb: 'Innate:  Kennen\'s  abilities apply a  stack of Mark of the Storm to enemies hit.',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Kennen\'s abilities apply a stack of Mark of the Storm to enemies hit for 6 seconds, refreshing on subsequent applications and stacking up to 3 times.</p>'
        },
        {
          description: 'The third stack against a target consumes them all to stun them for 1.25 seconds and restore 25 energy. The stun duration is reduced to 0.5 seconds if this occurs on the same target again within 6 seconds.'
        },
        {
          description: 'Slicing Maelstrom can apply only up to 3 stacks on a target.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Kennen/ability-icon/p',
      notes: 'Kennen will still restore energy if the target dies from the third stack of Mark of the Storm.\nAfter  Slicing Maelstrom applies its third stack, the target gains a 6-second stack immunity against Slicing Maelstrom that refreshes on subsequent hits.',
      spellshieldable: 'True',
      targeting: 'Passive'
    },
    {
      key: 'Q',
      name: 'Thundering Shuriken',
      width: '100',
      affects: 'Enemies',
      blurb: 'Active:  Kennen throws a shuriken in the target direction that deals magic damage to the first enemy hit.',
      castTime: '0.175',
      cooldown: '7 / 6.25 / 5.5 / 4.75 / 4',
      cost: '60 / 55 / 50 / 45 / 40',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Kennen throws a shuriken in the target direction that deals magic damage to the first enemy hit.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '75 / 125 / 175 / 225 / 275'
                },
                {
                  unit: '% AP',
                  values: '75'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Kennen/ability-icon/q',
      maxCharges: -1,
      notes: 'This ability will cast from wherever the caster is at the start of the cast time.',
      projectile: 'TRUE',
      resource: 'Energy',
      speed: '1700',
      spellEffects: 'Single target',
      spellshieldable: 'True',
      targeting: 'Direction',
      targetRange: '1050'
    },
    {
      key: 'W',
      name: 'Electrical Surge',
      affects: 'Enemies',
      blurb: 'Passive:  Kennen\'s basic attacks  on-attack generate a stack of Electrical Surge, which stacks up to a cap. At max stacks, his next basic attack consumes them all to deal bonus magic damage and apply a stack of  Mark of the Storm.',
      castTime: '0.25',
      cooldown: '13 / 11.25 / 9.5 / 7.75 / 6',
      cost: '40',
      damageType: 'Magic damage',
      effectRadius: '775',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Kennen\'s basic attacks on-attack generate a stack of Electrical Surge, stacking up to 4 times. At 4 stacks, his next basic attack on-attack is empowered to consume all stacks on-hit to deal bonus magic damage and apply a stack of Mark of the Storm.Kennen gains maximum stacks of Electrical Surge upon respawning.</p>',
          leveling: [
            {
              attribute: 'Bonus Magic Damage',
              modifiers: [
                {
                  values: '35 / 45 / 55 / 65 / 75'
                },
                {
                  unit: '% bonus AD',
                  values: '80 / 90 / 100 / 110 / 120'
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
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Kennen sends out a surge of electricity that deals magic damage to all nearby enemies afflicted by Mark of the Storm or within Slicing Maelstrom.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '70 / 95 / 120 / 145 / 170'
                },
                {
                  unit: '% AP',
                  values: '80'
                }
              ]
            }
          ]
        },
        {
          description: 'An enemy within 775 units with Mark of the Storm or inside Slicing Maelstrom is required to cast this ability. The target does not have to be visible to be targeted by this ability.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Kennen/ability-icon/w',
      maxCharges: -1,
      notes: 'The empowered basic attack applies bonus  spell damage, while the electrical surge deals  area damage.\nElectrical Surge\'s enhanced attack will be consumed and the bonus damage will not be applied if Kennen is  blinded.\nElectrical Surge\'s enhanced attack cannot be  dodged or  blocked.\nThe empowered attack will trigger but not be consumed nor apply its effects against structures and wards.',
      projectile: 'FALSE',
      resource: 'Energy',
      spellEffects: 'special',
      spellshieldable: 'True',
      targeting: 'Proximity'
    },
    {
      key: 'E',
      name: 'Lightning Rush',
      affects: 'Self, Enemies',
      blurb: 'Active:  Kennen becomes lightning, a  ghosted form that gains  bonus movement speed for a short time. He deals magic damage to enemies he passes through and restores  energy if he damaged an enemy at all. Lightning Rush can be recast within the duration and automatically recasts afterwards.',
      castTime: 'none',
      cooldown: '10 / 9 / 8 / 7 / 6',
      cost: '80',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Kennen turns into lightning for 2 seconds, becoming unable to declare basic attacks but gaining ghosting and 100% bonus movement speed. He deals magic damage to enemies he passes through, reduced to 65% against non-champions, and restores 40 energy upon damaging at least one enemy.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '80 / 120 / 160 / 200 / 240'
                },
                {
                  unit: '% AP',
                  values: '80'
                }
              ]
            },
            {
              attribute: 'Non-Champion Damage',
              modifiers: [
                {
                  values: '52 / 78 / 104 / 130 / 156'
                },
                {
                  unit: '% AP',
                  values: '52'
                }
              ]
            }
          ]
        },
        {
          description: 'Lightning Rush can be recast after 0.5 seconds, and does so automatically after the duration.'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Kennen ends Lightning Rush to gain bonus attack speed and be allowed to exceed the attack speed cap by the amount gained for 4 seconds.</p>',
          leveling: [
            {
              attribute: 'Bonus Attack Speed',
              modifiers: [
                {
                  unit: '%',
                  values: '40 / 50 / 60 / 70 / 80'
                }
              ]
            }
          ]
        },
        {
          description: 'Lightning Rush\'s recast can be used while affected by cast-inhibiting crowd control.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Kennen/ability-icon/e',
      maxCharges: -1,
      notes: 'Lightning Rush will only damage any particular enemy once per cast.\nFor the purpose of aim-assist, Kennen\'s  attack range is reduced[ by 575 ][ to -25 ]during Lightning Rush, further reduced to -33.75 with  Rapid Firecannon.',
      resource: 'Energy',
      spellEffects: 'spellaoe',
      spellshieldable: 'True',
      targeting: 'Auto'
    },
    {
      key: 'R',
      name: 'Slicing Maelstrom',
      affects: 'Enemies',
      blurb: 'Active:  Kennen summons a storm that strikes at nearby enemy champions, dealing magic damage. Enemies take increased damage from each subsequent strike.',
      castTime: '0.25',
      cooldown: '120 / 100 / 80',
      cost: '0',
      damageType: 'Magic damage',
      effectRadius: '550',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Kennen summons a storm around himself for 3 seconds, gaining bonus armor and bonus magic resistance for the duration.</p>',
          leveling: [
            {
              attribute: 'Bonus Resistances',
              modifiers: [
                {
                  values: '20 / 40 / 60'
                }
              ]
            }
          ]
        },
        {
          description: 'The storm strikes lightning bolts down on nearby enemies every 0.5 seconds, each one dealing magic damage.',
          leveling: [
            {
              attribute: 'Magic Damage Per Bolt',
              modifiers: [
                {
                  values: '40 / 75 / 110'
                },
                {
                  unit: '% AP',
                  values: '22.5'
                }
              ]
            }
          ]
        },
        {
          description: 'Slicing Maelstrom gains 10% additional damage for each subsequent strike a target has received, up to a combined total of 150% of the initial strike\'s damage.',
          leveling: [
            {
              attribute: 'Total Single-Target Damage',
              modifiers: [
                {
                  values: '300 / 562.5 / 825'
                },
                {
                  unit: '% AP',
                  values: '168.75'
                }
              ]
            }
          ]
        },
        {
          description: 'Kennen can move during Slicing Maelstrom\'s cast time.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Kennen/ability-icon/r',
      maxCharges: -1,
      spellEffects: 'aoedot',
      spellshieldable: 'True',
      targeting: 'Auto'
    }
  ],
  adaptiveType: 'Magic damage',
  attackType: 'Ranged',
  attributeRatings: {
    abilityReliance: 65,
    control: 3,
    damage: 3,
    difficulty: 2,
    mobility: 1,
    toughness: 1,
    utility: 1
  },
  faction: 'ionia',
  lore: 'More than just the lightning-quick enforcer of Ionian balance, Kennen is the only yordle member of the Kinkou. Despite his small, furry stature, he is eager to take on any threat with a whirling storm of shuriken and boundless enthusiasm. Alongside his master Shen, Kennen patrols the spirit realm, employing devastating electrical energy to strike down his enemies.',
  patchLastChanged: '25.14',
  positions: [
    'Top'
  ],
  price: {
    blueEssence: 2400,
    rp: 880
  },
  releaseDate: '2010-04-08',
  resource: 'Energy',
  roles: [
    'Mage',
    'Marksman',
    'Specialist'
  ],
  stats: {
    acquisitionRadius: {
      flat: 550
    },
    armor: {
      flat: 29,
      perLevel: 4.95
    },
    attackCastTime: {
      flat: 0.3
    },
    attackDamage: {
      flat: 48,
      perLevel: 3.75
    },
    attackDelayOffset: {
      flat: -0.1
    },
    attackRange: {
      flat: 550
    },
    attackSpeed: {
      flat: 0.625,
      perLevel: 3.4
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
      flat: 580,
      perLevel: 98
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
      flat: 200
    },
    manaRegen: {
      flat: 50
    },
    movespeed: {
      flat: 335
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