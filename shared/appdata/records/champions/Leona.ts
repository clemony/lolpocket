// Updated Patch 25.19 - 10/07/2025 08:16:13 AM CDT

const champion: Champion = {
  id: 89,
  key: 'Leona',
  name: 'Leona',
  title: 'the Radiant Dawn',
  abilities: [
    {
      key: 'P',
      name: 'Sunlight',
      affects: 'Enemies',
      blurb: 'Innate:  Leona\'s abilities briefly mark enemies hit.',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Leona\'s abilities mark enemies hit for 2.5 seconds, refreshing on subsequent hits. Allied champions\' damaging attacks and abilities against a marked target will consume the mark to deal 32 - 151 (based on level) bonus magic damage.</p>'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Leona/ability-icon/p',
      notes: 'Sunlight\'s damage respects  enchantment redirection.\n Zyra has a hidden passive that grants her 10% increased size for 33 seconds after having Sunlight applied to her.',
      spellEffects: 'spell',
      spellshieldable: 'true',
      targeting: 'Passive'
    },
    {
      key: 'Q',
      name: 'Shield of Daybreak',
      affects: 'Enemies',
      blurb: 'Active:  Leona illuminates her shield, causing her next basic attack within a few seconds to deal bonus magic damage and briefly  stun the target.',
      castTime: 'none',
      cooldown: '5',
      cost: '30 / 35 / 40 / 45 / 50',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Leona illuminates her shield, empowering her next basic attack within 6 seconds to have a 0.25-second cast time, gain 50 bonus range, deal bonus magic damage and stun the target for 1 second.</p>',
          leveling: [
            {
              attribute: 'Bonus Magic Damage',
              modifiers: [
                {
                  values: '10 / 35 / 60 / 85 / 110'
                },
                {
                  unit: '% AP',
                  values: '30'
                }
              ]
            }
          ]
        },
        {
          description: 'Shield of Daybreak resets Leona\'s basic attack timer.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Leona/ability-icon/q',
      maxCharges: -1,
      notes: 'The enhanced attack will apply other  on-hit effects and can  critically strike as normal.\n Critical strikes do not interact with Shield of Daybreak\'s bonus damage.\nPENDING FOR TEST:: Shield of Daybreak\'s interactions with  dodging,  blocking.\nShield of Daybreak\'s attack can  miss, nullifying its effects entirely.\nShield of Daybreak\'s attack does not put Leona\'s basic attack on cooldown.\nThis effectively performs a second  attack reset.\nThis is unlike other empowered attacks (including those which, similar to Shield of Daybreak, use a more unconventional spell cast rather than an attack override).\nLeona will wait out Shield of Daybreak\'s wind-down before automatically attacking, anyway. The player must issue the next attack themselves to gain the full benefit of the second reset.\nIf the target becomes  untargetable,  dies, or is too far away during the empowered attack\'s cast time, it is cancelled but not consumed.\nThe empowered attack will not trigger against structures.',
      resource: 'Mana',
      spellEffects: 'spell',
      spellshieldable: 'True',
      targeting: 'Auto'
    },
    {
      key: 'W',
      name: 'Eclipse',
      affects: 'Self, Enemies',
      blurb: 'Active:  Leona raises her guard for a short time, gaining flat damage reduction,  bonus armor and  bonus magic resistance.',
      castTime: 'none',
      cooldown: '14 / 13 / 12 / 11 / 10',
      cost: '60',
      damageType: 'Magic damage',
      effectRadius: '450',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Leona raises her guard for 3 seconds, gaining flat damage reduction of up to 50% of the damage instance and bonus armor and bonus magic resistance.</p>',
          leveling: [
            {
              attribute: 'Flat Damage Reduction',
              modifiers: [
                {
                  values: '8 / 12 / 16 / 20 / 24'
                }
              ]
            },
            {
              attribute: 'Bonus Armor',
              modifiers: [
                {
                  values: '20 / 27.5 / 35 / 42.5 / 50'
                },
                {
                  unit: '% bonus armor',
                  values: '20'
                }
              ]
            },
            {
              attribute: 'Bonus Magic Resistance',
              modifiers: [
                {
                  values: '20 / 27.5 / 35 / 42.5 / 50'
                },
                {
                  unit: '% bonus magic resistance',
                  values: '20'
                }
              ]
            }
          ]
        },
        {
          description: 'Her shield detonates after the duration, dealing magic damage to nearby enemies. If this hits an enemy, Leona\'s guard is extended for an additional 3 seconds.',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '55 / 85 / 115 / 145 / 175'
                },
                {
                  unit: '% AP',
                  values: '40'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Leona/ability-icon/w',
      maxCharges: -1,
      notes: 'Neither the cast nor detonation of Eclipse interrupts any of Leona\'s previous orders or ongoing attack windups.\nThe resistance scaling will factor from all other sources, excluding Eclipse\'s flat bonus. This will recalculate over the duration.\n Spell shield will block the damage but Eclipse\'s extended duration will not be prevented.',
      resource: 'Mana',
      spellEffects: 'spellaoe',
      spellshieldable: 'special',
      targeting: 'Auto'
    },
    {
      key: 'E',
      name: 'Zenith Blade',
      width: '140',
      affects: 'Enemies',
      blurb: 'Active:  Leona projects her sword in the target direction that deals magic damage to enemies hit.',
      castTime: '0.25',
      cooldown: '12 / 10.5 / 9 / 7.5 / 6',
      cost: '40 / 45 / 50 / 55 / 60',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Leona projects her sword in the target direction that deals magic damage to enemies hit.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '50 / 90 / 130 / 170 / 210'
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
          description: 'If she hits at least one enemy champion, she will dash 225 units behind the last one struck within 3000 range and root them for 0.5 seconds.'
        },
        {
          description: 'Leona is unable to move or attack while Zenith Blade is in flight. She can cast any of her abilities during the dash.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Leona/ability-icon/e',
      maxCharges: -1,
      notes: 'Leona will be ordered to basic attack the target.\n Spell shield will block Zenith Blade\'s effects, and prevent Leona from dashing to the target.\nThis ability will cast from wherever the caster is at the end of the cast time.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '2000',
      spellEffects: 'aoe',
      spellshieldable: 'true',
      targeting: 'Direction',
      targetRange: '900'
    },
    {
      key: 'R',
      name: 'Solar Flare',
      affects: 'Enemies',
      blurb: 'Active:  Leona calls down a solar flare that strikes upon the target location, dealing magic damage to enemies hit.',
      castTime: '0.25',
      cooldown: '90 / 75 / 60',
      cost: '100',
      damageType: 'Magic damage',
      effectRadius: '325 / 175 / 800',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Leona calls down a solar flare that strikes upon the target location after 0.625 seconds, granting sight of the area before impact and for another 3 seconds afterwards. Enemies hit are dealt magic damage.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '150 / 225 / 300'
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
          description: 'Targets are also slowed by 80% for 1.75 seconds, or stunned for the same duration if they are hit by the epicenter.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Leona/ability-icon/r',
      innerRadius: '100',
      maxCharges: -1,
      notes: 'Solar Flare\'s visual effects are only visible to enemies if they have  sight of the area it was cast upon.\nThe cast indicator shows 300 radius for the area of effect and 120 radius for the epicenter, however the actual hitbox radii are larger than those values.\nThe revealed radius is not obstructed by terrain or  brush.',
      resource: 'Mana',
      spellEffects: 'aoe',
      spellshieldable: 'True',
      targeting: 'Location',
      targetRange: '1200'
    }
  ],
  adaptiveType: 'Physical damage',
  attackType: 'Melee',
  attributeRatings: {
    abilityReliance: 90,
    control: 3,
    damage: 1,
    difficulty: 1,
    mobility: 1,
    toughness: 3,
    utility: 1
  },
  faction: 'mount-targon',
  lore: 'Imbued with the fire of the sun, Leona is a holy warrior of the Solari who defends Mount Targon with her Zenith Blade and the Shield of Daybreak. Her skin shimmers with starfire while her eyes burn with the power of the celestial Aspect within her. Armored in gold and bearing a terrible burden of ancient knowledge, Leona brings enlightenment to some, death to others.',
  patchLastChanged: '25.09',
  positions: [
    'Support'
  ],
  price: {
    blueEssence: 225,
    rp: 260
  },
  releaseDate: '2011-07-13',
  resource: 'Mana',
  roles: [
    'Support',
    'Tank',
    'Vanguard'
  ],
  stats: {
    acquisitionRadius: {
      flat: 400
    },
    armor: {
      flat: 43,
      perLevel: 4.8
    },
    attackCastTime: {
      flat: 0.3
    },
    attackDamage: {
      flat: 60,
      perLevel: 3
    },
    attackDelayOffset: {
      flat: -0.071
    },
    attackRange: {
      flat: 125
    },
    attackSpeed: {
      flat: 0.625,
      perLevel: 2.9
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
      flat: 646,
      perLevel: 101
    },
    healthRegen: {
      flat: 8.5,
      perLevel: 0.85
    },
    magicResistance: {
      flat: 32,
      perLevel: 2.05
    },
    mana: {
      flat: 302,
      perLevel: 40
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