// Updated Patch 25.17 - 09/18/2025 02:20:03 AM CDT

const champion: Champion = {
  id: 38,
  key: 'Kassadin',
  name: 'Kassadin',
  title: 'the Void Walker',
  abilities: [
    {
      key: 'P',
      name: 'Void Stone',
      affects: 'Self',
      blurb: 'Innate:  Kassadin is permanently  ghosted and takes reduced  magic damage.',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Kassadin is permanently ghosted and takes 10% reduced magic damage.</p>'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Kassadin/ability-icon/p',
      notes: 'No additional details.',
      targeting: 'Passive'
    },
    {
      key: 'Q',
      name: 'Null Sphere',
      affects: 'Enemies, Self',
      blurb: 'Active:  Kassadin fires an orb of void energy at the target enemy that deals magic damage and  disrupts their ongoing  channels.',
      castTime: '0.25',
      cooldown: '10 / 9.5 / 9 / 8.5 / 8',
      cost: '60 / 65 / 70 / 75 / 80',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Kassadin fires an orb of void energy at the target enemy that deals magic damage and disrupts their ongoing channels.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '65 / 95 / 125 / 155 / 185'
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
          description: 'He also gains a shield that absorbs magic damage for 1.5 seconds.',
          leveling: [
            {
              attribute: 'Magic Shield Strength',
              modifiers: [
                {
                  values: '80 / 110 / 140 / 170 / 200'
                },
                {
                  unit: '% AP',
                  values: '30'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Kassadin/ability-icon/q',
      maxCharges: -1,
      notes: 'The  disrupt is \'wrapped\' into a status effect that says the target is  Silenced for 0.25 seconds, but it does not actually silence. It however makes sure that the disrupt is prevented by  immunity to silences.\nThe shield is granted at the start of the cast time.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '1400',
      spellEffects: 'spell',
      spellshieldable: 'True',
      targeting: 'Unit',
      targetRange: '650'
    },
    {
      key: 'W',
      name: 'Nether Blade',
      affects: 'Self',
      blurb: 'Passive:  Kassadin\'s basic attacks deal bonus magic damage.',
      castTime: 'none',
      cooldown: '7',
      cost: '1',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Kassadin\'s basic attacks deal 20 (+ 10% AP) bonus magic damage on-hit.</p>'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Kassadin empowers his next basic attack within 5 seconds to have an uncancellable windup, gain 50 bonus range, deal increased bonus magic damage, and restore mana, with the restoration amount quintupled against champions.</p>',
          leveling: [
            {
              attribute: 'Increased Bonus Magic Damage',
              modifiers: [
                {
                  values: '50 / 75 / 100 / 125 / 150'
                },
                {
                  unit: '% AP',
                  values: '80'
                }
              ]
            },
            {
              attribute: 'Mana Restored',
              modifiers: [
                {
                  unit: '% of missing mana',
                  values: '4 / 4.5 / 5 / 5.5 / 6'
                }
              ]
            },
            {
              attribute: 'Mana Restored Against Champions',
              modifiers: [
                {
                  unit: '% of missing mana',
                  values: '20 / 22.5 / 25 / 27.5 / 30'
                }
              ]
            }
          ]
        },
        {
          description: 'Nether Blade resets Kassadin\'s basic attack timer.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Kassadin/ability-icon/w',
      maxCharges: -1,
      notes: 'The passive damage applies  proc damage and the active damage applies  spell damage.\nThe enhanced attack will apply other on-hit effects and can  critically strike as normal.\nNether Blade will not grant mana if the attack is  dodged or if it  misses, but will do so if the attack is  blocked. In all cases the damage is parried.\n Spell shield will block the active damage but not the passive one.\nThe passive bonus damage applies to structures.\nThe empowered attack will trigger but not be consumed nor apply its effects against structures.',
      resource: 'Mana',
      spellEffects: 'special',
      spellshieldable: 'Special',
      targeting: 'Auto'
    },
    {
      key: 'E',
      name: 'Force Pulse',
      affects: 'Enemies',
      angle: '78°',
      blurb: 'Passive: Ability casts reduce the cooldown of this ability.',
      castTime: '0.25',
      cooldown: '21 / 20 / 19 / 18 / 17',
      cost: '60 / 65 / 70 / 75 / 80',
      damageType: 'Magic damage',
      effectRadius: '600 / 1800',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Each time Kassadin or a nearby champion casts an ability, Force Pulse\'s current cooldown is reduced by 0.75 seconds.</p>'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Kassadin emits a pulse of void energy in a cone in the target direction that deals magic damage to enemies hit and slows them for 1 second.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '70 / 100 / 130 / 160 / 190'
                },
                {
                  unit: '% AP',
                  values: '65'
                }
              ]
            },
            {
              attribute: 'Slow',
              modifiers: [
                {
                  unit: '%',
                  values: '50 / 60 / 70 / 80 / 90'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Kassadin/ability-icon/e',
      maxCharges: -1,
      notes: 'Untargetable champions do not reduce Force Pulse\'s cooldown upon ability activations.\nToggle abilities and transformation abilities do not count as ability activations and will not reduce Force Pulse\'s cooldown.\nThis ability will cast from wherever the caster is at the end of the cast time.',
      projectile: 'FALSE',
      resource: 'Mana',
      spellEffects: 'Area of effect',
      spellshieldable: 'True',
      targeting: 'Direction'
    },
    {
      key: 'R',
      name: 'Riftwalk',
      affects: 'Enemies',
      blurb: 'Active:  Kassadin  blinks toward the target location, dealing magic damage to all nearby enemies upon arrival. He then gains a stack of Riftwalk, stacking up to a cap.',
      castTime: '0.25',
      cooldown: '5 / 3.5 / 2',
      cost: '40',
      damageType: 'Magic damage',
      effectRadius: '270',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Kassadin blinks toward the target location, dealing magic damage to all nearby enemies upon arrival. He then gains a stack of Riftwalk for 15 seconds, refreshing on subsequent casts and stacking up to 4 times.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '70 / 90 / 110'
                },
                {
                  unit: '% AP',
                  values: '50'
                },
                {
                  unit: '% maximum mana',
                  values: '2'
                }
              ]
            }
          ]
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Riftwalk:</span> For each stack, Riftwalk deals bonus magic damage at an increased mana cost.</p>',
          leveling: [
            {
              attribute: 'Bonus Damage Per Stack',
              modifiers: [
                {
                  values: '35 / 45 / 55'
                },
                {
                  unit: '% AP',
                  values: '7'
                },
                {
                  unit: '% maximum mana',
                  values: '1'
                }
              ]
            },
            {
              attribute: 'Maximum Bonus Damage',
              modifiers: [
                {
                  values: '140 / 180 / 220'
                },
                {
                  unit: '% AP',
                  values: '28'
                },
                {
                  unit: '% maximum mana',
                  values: '4'
                }
              ]
            },
            {
              attribute: 'Maximum Magic Damage',
              modifiers: [
                {
                  values: '210 / 270 / 330'
                },
                {
                  unit: '% AP',
                  values: '78'
                },
                {
                  unit: '% maximum mana',
                  values: '6'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Kassadin/ability-icon/r',
      maxCharges: -1,
      notes: 'Flash can be used during the cast time, allowing Kassadin to blink further away.',
      resource: 'Mana',
      spellEffects: 'Area of effect',
      spellshieldable: 'True',
      targeting: 'Location',
      targetRange: '500'
    }
  ],
  adaptiveType: 'Magic damage',
  attackType: 'Melee',
  attributeRatings: {
    abilityReliance: 90,
    control: 1,
    damage: 3,
    difficulty: 2,
    mobility: 3,
    toughness: 2,
    utility: 1
  },
  faction: 'void',
  lore: 'Cutting a burning swath through the darkest places of the world, Kassadin knows his days are numbered. A widely traveled Shuriman guide and adventurer, he had chosen to raise a family among the peaceful southern tribes—until the day his village was consumed by the Void. He vowed vengeance, combining a number of arcane artifacts and forbidden technologies for the struggle ahead. Finally, Kassadin set out for the wastelands of Icathia, ready to face any monstrous Void-construct in his search for their self-proclaimed prophet, Malzahar.',
  patchLastChanged: '25.11',
  positions: [
    'Middle'
  ],
  price: {
    blueEssence: 1575,
    rp: 790
  },
  releaseDate: '2009-08-07',
  resource: 'Mana',
  roles: [
    'Assassin',
    'Mage'
  ],
  stats: {
    acquisitionRadius: {
      flat: 400
    },
    armor: {
      flat: 21,
      perLevel: 4
    },
    attackCastTime: {
      flat: 0.3
    },
    attackDamage: {
      flat: 59,
      perLevel: 3.9
    },
    attackDelayOffset: {
      flat: -0.15
    },
    attackRange: {
      flat: 150
    },
    attackSpeed: {
      flat: 0.64,
      perLevel: 3.7
    },
    attackSpeedRatio: {
      flat: 0.64
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
      flat: 646,
      perLevel: 119
    },
    healthRegen: {
      flat: 6,
      perLevel: 0.5
    },
    magicResistance: {
      flat: 30,
      perLevel: 1.3
    },
    mana: {
      flat: 400,
      perLevel: 87
    },
    manaRegen: {
      flat: 6,
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