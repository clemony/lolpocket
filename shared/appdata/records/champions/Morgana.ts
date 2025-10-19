// Updated Patch 25.19 - 10/07/2025 08:16:13 AM CDT

const champion: Champion = {
  id: 25,
  key: 'Morgana',
  name: 'Morgana',
  title: 'the Fallen',
  abilities: [
    {
      key: 'P',
      name: 'Soul Siphon',
      affects: 'Self',
      blurb: 'Innate:  Morgana  heals herself for a portion of the damage dealt by her abilities against  champions, large  minions, and medium and large  monsters.',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Morgana heals herself for 18% of the post-mitigation damage dealt by her abilities against champions, large minions, and medium and large monsters.</p>'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Morgana/ability-icon/p',
      notes: 'No additional details.',
      targeting: 'Passive'
    },
    {
      key: 'Q',
      name: 'Dark Binding',
      width: '140',
      affects: 'Enemies',
      blurb: 'Active:  Morgana throws a sphere of dark magic in the target direction that deals magic damage to the first enemy hit and  roots them for a "short time".',
      castTime: '0.25',
      cooldown: '10',
      cost: '50 / 55 / 60 / 65 / 70',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Morgana throws a sphere of dark magic in the target direction that deals magic damage to the first enemy hit and roots them for a duration.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '80 / 135 / 190 / 245 / 300'
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
                  values: '2 / 2.25 / 2.5 / 2.75 / 3'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Morgana/ability-icon/q',
      maxCharges: -1,
      notes: 'This ability will cast from wherever the caster is at the start of the cast time.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '1200',
      spellEffects: 'Single target',
      spellshieldable: 'True',
      targeting: 'Direction'
    },
    {
      key: 'W',
      name: 'Tormented Shadow',
      affects: 'Enemies',
      blurb: 'Passive: Tormented Shadow\'s current cooldown is  reduced whenever  Soul Siphon triggers.',
      castTime: '0.25',
      cooldown: '12',
      cost: '70 / 80 / 90 / 100 / 110',
      damageType: 'Magic damage',
      effectRadius: '280',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Tormented Shadow\'s current cooldown is reduced by 5% of its total cooldown whenever Soul Siphon triggers. Simultaneous triggers from multiple targets will stack the cooldown reduction.</p>'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Morgana torments the soil at the target location, causing the area to become desecrated for 5 seconds. Enemies within take magic damage on-cast and every 0.5 seconds, increased by 0% - 170% (based on target\'s missing health). Tormented Shadow deals 170% damage against monsters.</p>',
          leveling: [
            {
              attribute: 'Minimum Damage Per Tick',
              modifiers: [
                {
                  values: '6 / 11.5 / 17 / 22.5 / 28'
                },
                {
                  unit: '% AP',
                  values: '8.5'
                }
              ]
            },
            {
              attribute: 'Maximum Damage Per Tick',
              modifiers: [
                {
                  values: '16.2 / 31.05 / 45.9 / 60.75 / 75.6'
                },
                {
                  unit: '% AP',
                  values: '22.95'
                }
              ]
            },
            {
              attribute: 'Minimum Total Damage',
              modifiers: [
                {
                  values: '60 / 115 / 170 / 225 / 280'
                },
                {
                  unit: '% AP',
                  values: '85'
                }
              ]
            },
            {
              attribute: 'Maximum Total Damage',
              modifiers: [
                {
                  values: '162 / 310.5 / 459 / 607.5 / 756'
                },
                {
                  unit: '% AP',
                  values: '229.5'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Morgana/ability-icon/w',
      maxCharges: -1,
      notes: 'Damage from multiple Tormented Shadows does not stack.',
      resource: 'Mana',
      spellEffects: 'aoedot',
      spellshieldable: 'False',
      targeting: 'Location',
      targetRange: '900'
    },
    {
      key: 'E',
      name: 'Black Shield',
      affects: 'Self, Allies',
      blurb: 'Active:  Morgana  shields the target allied champion or herself for a few seconds, which absorbs magic damage and grants  crowd control immunity while the shield holds.',
      castTime: 'none',
      cooldown: '26 / 23.5 / 21 / 18.5 / 16',
      cost: '80',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Morgana grants a shield to the target allied champion or herself for 5 seconds, which absorbs incoming magic damage and grants crowd control immunity while it holds.</p>',
          leveling: [
            {
              attribute: 'Magic Shield Strength',
              modifiers: [
                {
                  values: '100 / 155 / 210 / 265 / 320'
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
      icon: 'https://cdn.communitydragon.org/latest/champion/Morgana/ability-icon/e',
      maxCharges: -1,
      notes: 'Black Shield will not resist self nor allied  crowd control (including e.g. an allied  Tempered Fate).\nBlack Shield will not resist  nearsight.\nBlack Shield negates  crowd control effects before any magic damage is absorbed; even if the shield is broken by an enemy dealing enough damage, its associated disables will not apply. Shield-destroying effects bypass this however, since they destroy the shield before applying their effects.\nBlack Shield will not prevent effects other than  crowd control from triggering (e.g.  Malzahar\'s  Nether Grasp will not  suppress a target protected by Black Shield but the  tether still applies).\nAlthough not considered a crowd control effect, Black Shield is special-cased to block  Illaoi\'s  Test of Spirit\'s spirit pull.\nBlack Shield takes priority over other sources of  crowd control immunity and those that grant immunity to specific types of crowd control ( displacement immunity and  slow immunity).\n Spell shield will take priority over Black Shield.\nBlack Shield will always take priority over regular  shields. If used in conjunction with Lifeline, the most recently-applied one will have priority however.\nBlack Shield has a  forgiveness radius of 175 units.',
      resource: 'Mana',
      targeting: 'Unit',
      targetRange: '800'
    },
    {
      key: 'R',
      name: 'Soul Shackles',
      affects: 'Enemies',
      blurb: 'Active:  Morgana latches chains of energy onto nearby enemy champions, dealing magic damage and forming a  tether between herself and each target for a short time, during which the targets are  revealed and  slowed, and Morgana gains  bonus movement speed.',
      castTime: '0.35',
      cooldown: '120 / 110 / 100',
      cost: '100',
      damageType: 'Magic damage',
      effectRadius: '625',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Morgana latches chains of energy onto nearby enemy champions over the cast time, dealing magic damage and forming a tether between herself and each target for 3 seconds, during which she gains bonus movement speed and the targets are revealed and slowed by 20%.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '200 / 275 / 350'
                },
                {
                  unit: '% AP',
                  values: '80'
                }
              ]
            },
            {
              attribute: 'Total Magic Damage',
              modifiers: [
                {
                  values: '400 / 550 / 700'
                },
                {
                  unit: '% AP',
                  values: '160'
                }
              ]
            },
            {
              attribute: 'Bonus Movement Speed',
              modifiers: [
                {
                  unit: '%',
                  values: '20 / 40 / 60'
                }
              ]
            }
          ]
        },
        {
          description: 'If a target does not break their tether by the end of its duration, they are dealt the same magic damage again and become stunned for a duration, during which they are revealed.',
          leveling: [
            {
              attribute: 'Stun Duration',
              modifiers: [
                {
                  unit: ' seconds',
                  values: '1.5 / 1.75 / 2'
                }
              ]
            }
          ]
        },
        {
          description: 'An enemy champion within 575 units is required to cast this ability. The target does not have to be visible to be tethered by this ability.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Morgana/ability-icon/r',
      maxCharges: -1,
      notes: 'Spell shield will block the tether\'s application and initial damage but not the aftereffects of one already applied.\nMorgana will turn to face southeast upon casting Soul Shackles.\nA circle indicator for Soul Shackles\' maximum tether range is visible to Morgana and her tethered targets only.',
      projectile: 'FALSE',
      resource: 'Mana',
      spellEffects: 'aoe',
      spellshieldable: 'Special',
      targeting: 'Proximity',
      tetherRadius: '625'
    }
  ],
  adaptiveType: 'Magic damage',
  attackType: 'Ranged',
  attributeRatings: {
    abilityReliance: 100,
    control: 3,
    damage: 2,
    difficulty: 1,
    mobility: 1,
    toughness: 1,
    utility: 2
  },
  faction: 'demacia',
  lore: 'Conflicted between her celestial and mortal natures, Morgana bound her wings to embrace humanity, and inflicts her pain and bitterness upon the dishonest and the corrupt. She rejects laws and traditions she believes are unjust, and fights for truth from the shadows of Demacia—even as others seek to repress it—by casting shields and chains of dark fire. More than anything else, Morgana truly believes that even the banished and outcast may one day rise again.',
  patchLastChanged: '25.09',
  positions: [
    'Support'
  ],
  price: {
    blueEssence: 675,
    rp: 585
  },
  releaseDate: '2009-02-21',
  resource: 'Mana',
  roles: [
    'Catcher',
    'Mage',
    'Support'
  ],
  stats: {
    acquisitionRadius: {
      flat: 600
    },
    armor: {
      flat: 25,
      perLevel: 5
    },
    attackCastTime: {
      flat: 0.3
    },
    attackDamage: {
      flat: 56,
      perLevel: 3.5
    },
    attackDelayOffset: {
      flat: -0.16
    },
    attackRange: {
      flat: 450
    },
    attackSpeed: {
      flat: 0.625,
      perLevel: 1.53
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
      perLevel: 104
    },
    healthRegen: {
      flat: 5.5,
      perLevel: 0.4
    },
    magicResistance: {
      flat: 30,
      perLevel: 1.3
    },
    mana: {
      flat: 340,
      perLevel: 60
    },
    manaRegen: {
      flat: 11,
      perLevel: 0.4
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