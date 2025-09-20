// Updated Patch 25.17 - 09/18/2025 02:20:04 AM CDT

const champion: Champion = {
  id: 110,
  key: 'Varus',
  name: 'Varus',
  title: 'the Arrow of Retribution',
  abilities: [
    {
      key: 'P',
      name: 'Living Vengeance',
      affects: 'Self',
      blurb: 'Innate: When  Varus kills an enemy, he gains  bonus attack speed,  bonus attack damage, and  ability power for a few seconds. The amount is based on his other sources of  bonus attack speed, and is increased on an enemy  champion  takedown.',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> When Varus kills an enemy, he gains 10% / 15% / 20% (based on level) bonus attack speed as well as bonus attack damage and ability power equal to 10% bonus attack speed for 5 / 7 / 9 / 11 (based on level) seconds.</p>'
        },
        {
          description: 'This is increased to 50% bonus attack speed and bonus attack damage and ability power equal to 25% bonus attack speed upon scoring a champion takedown.'
        },
        {
          description: 'While Living Vengeance\'s bonus is active, Varus\' attack speed cap is increased to 3.33.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Varus/ability-icon/p',
      notes: 'Living Vengeance\'s buff can be refreshed and is triggered when Varus kills any unit.\nThe increased bonus gained from taking down an enemy champion takes priority over the lesser bonus. That bonus can only be refreshed by scoring another takedown.',
      targeting: 'Passive'
    },
    {
      key: 'Q',
      name: 'Piercing Arrow',
      width: '140',
      affects: 'Self, Enemies',
      castTime: 'none',
      cooldown: '16 / 15 / 14 / 13 / 12',
      cost: '50 / 55 / 60 / 65 / 70',
      damageType: 'Physical damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Varus charges while being slowed by 20% for up to 4 seconds to increase Piercing Arrow\'s range over the first 1.5 seconds and its effects over the first 1.25 seconds of the channel.</p>'
        },
        {
          description: 'Piercing Arrow can be recast within the duration. If the charge completes without reactivation, Piercing Arrow is cancelled and refunds 50% of the mana cost.'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Varus fires a piercing arrow in the target direction that deals physical damage to enemies hit. The damage of the arrow as well as any detonated Blight stacks are both increased by 0% - 50% (based on channel time), and the arrow\'s damage is reduced by 0% - 67% (based on number of enemies hit).</p>',
          leveling: [
            {
              attribute: 'Minimum Physical Damage',
              modifiers: [
                {
                  values: '60 / 106.67 / 153.33 / 200 / 246.67'
                },
                {
                  tooltip: 'Scaling per rank:\n86.67 / 93.33 / 100 / 106.67 / 113.33% bonus AD',
                  unit: '% bonus AD',
                  values: '86.67 - 113.33'
                }
              ]
            },
            {
              attribute: 'Maximum Physical Damage',
              modifiers: [
                {
                  values: '90 / 160 / 230 / 300 / 370'
                },
                {
                  tooltip: 'Scaling per rank:\n130 / 140 / 150 / 160 / 170% bonus AD',
                  unit: '% bonus AD',
                  values: '130 - 170'
                }
              ]
            },
            {
              attribute: 'Minimum Reduced Damage',
              modifiers: [
                {
                  values: '19.8 / 35.2 / 50.6 / 66 / 81.4'
                },
                {
                  tooltip: 'Scaling per rank:\n28.6 / 30.8 / 33 / 35.2 / 37.4% bonus AD',
                  unit: '% bonus AD',
                  values: '28.6 - 37.4'
                }
              ]
            },
            {
              attribute: 'Maximum Reduced Damage',
              modifiers: [
                {
                  values: '29.7 / 52.8 / 75.9 / 99 / 122.1'
                },
                {
                  tooltip: 'Scaling per rank:\n42.9 / 46.2 / 49.5 / 52.8 / 56.1% bonus AD',
                  unit: '% bonus AD',
                  values: '42.9 - 56.1'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Varus/ability-icon/q',
      maxCharges: -1,
      notes: 'The arrow missile range is 825 to 1525; The range increases by 140 per 0.25 seconds for the first 1.25 seconds. Upon reaching its maximum range, it also strikes additional targets in a  70 radius, rounding off the struck area.\nThe indicator for the range of the spell will be displayed for the entire channel.\nPiercing Arrow will cast from wherever Varus is at the end of the channel.\nAt maximum damage charge, all damage caused by Piercing Arrow will trigger   cosmetic critical strike text.\nThe following table refers for interactions while Varus is  channeling:\n\n\nType\n\nCharge channel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Blighted Quiver is usable during the first 0.85 seconds, otherwise, it\'s disabled.  Hail of Arrows and  Chain of Corruption are disabled. This ability recasts to end channel.\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled, but can still use trinkets.\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall\n\n\nInterrupted by\n\n Hexflash (Recasts)\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '1900',
      spellEffects: 'Area of effect',
      spellshieldable: 'True',
      targeting: 'Auto / Direction'
    },
    {
      key: 'W',
      name: 'Blighted Quiver',
      affects: 'Enemies',
      blurb: 'Passive:  Varus\'  basic attacks deal bonus magic damage and apply a  stack of Blight, up to 3. His  abilities detonate all Blight stacks on enemies hit to apply new effects.',
      castTime: 'none',
      cooldown: '40',
      cost: '0',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Varus\' basic attacks are empowered to deal bonus magic damage and apply a stack of Blight on-hit for 6 seconds, refreshing on subsequent applications and stacking up to 3 times. Varus\' abilities detonate all Blight stacks on enemies hit.</p>',
          leveling: [
            {
              attribute: 'Bonus Magic Damage',
              modifiers: [
                {
                  values: '6 / 12 / 18 / 24 / 30'
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
          description: '<p class="ability-effect"><span class="ability-header">Blight:</span> For each stack consumed, the target is dealt bonus magic damage. If the stacks were consumed with Piercing Arrow, this damage is increased by 0% - 50% (based on Piercing Arrow\'s charge time). This damage is capped at 120 per stack against monsters, for a total cap of 360 at maximum stacks.Additionally, each stack consumed against a champion or epic monster reduces the remaining cooldowns of Varus\' basic abilities by 13% of each of their total cooldowns, up to a 39% cooldown reduction per target. If the stacks were consumed with Piercing Arrow, the cooldown reduction is increased by 0% - 50% (based on Piercing Arrow\'s charge time), up to a 39% - 58.5% cooldown reduction per target from consuming maximum stacks against them.</p>',
          leveling: [
            {
              attribute: 'Bonus Magic Damage per Stack',
              modifiers: [
                {
                  unit: '%  of the target\'s maximum health',
                  values: '3 / 3.5 / 4 / 4.5 / 5'
                },
                {
                  unit: '% per 100 AP',
                  values: '1.5'
                }
              ]
            },
            {
              attribute: 'Bonus Magic Damage at Max Stacks',
              modifiers: [
                {
                  unit: '%  of the target\'s maximum health',
                  values: '9 / 10.5 / 12 / 13.5 / 15'
                },
                {
                  unit: '% per 100 AP',
                  values: '4.5'
                }
              ]
            },
            {
              attribute: 'Maximum Bonus Magic Damage per Stack',
              modifiers: [
                {
                  unit: '%  of the target\'s maximum health',
                  values: '4.5 / 5.25 / 6 / 6.75 / 7.5'
                },
                {
                  unit: '% per 100 AP',
                  values: '2.25'
                }
              ]
            },
            {
              attribute: 'Maximum Bonus Magic Damage at Max Stacks',
              modifiers: [
                {
                  unit: '%  of the target\'s maximum health',
                  values: '13.5 / 15.75 / 18 / 20.25 / 22.5'
                },
                {
                  unit: '% per 100 AP',
                  values: '6.75'
                }
              ]
            }
          ]
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Varus\' next Piercing Arrow within 5.5 seconds is empowered to deal additional bonus magic damage, increased by 0% - 50% (based on Piercing Arrow\'s charge time). This damage is capped at 360 against monsters.</p>',
          leveling: [
            {
              attribute: 'Active Minimum Magic Damage',
              modifiers: [
                {
                  unit: '% of target\'s missing health',
                  values: '6 / 8 / 10 / 12 / 14'
                }
              ]
            },
            {
              attribute: 'Active Maximum Magic Damage',
              modifiers: [
                {
                  unit: '% of target\'s missing health',
                  values: '9 / 12 / 15 / 18 / 21'
                }
              ]
            }
          ]
        },
        {
          description: 'If Varus does not cast Piercing Arrow, Blighted Quiver can be recast after 1 second within the duration, and does so automatically afterwards or when he dies. Blighted Quiver can be cast during the first 0.85 seconds of Piercing Arrow\'s charge, and will be placed on full cooldown after the charge ends even if Piercing Arrow is not recast.'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Varus ends Blighted Quiver and places it on a 1-second cooldown.</p>'
        },
        {
          description: 'Blighted Quiver\'s active and recast can both be used while affected by cast-inhibiting crowd control.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Varus/ability-icon/w',
      maxCharges: -1,
      notes: 'The monster damage cap is also increased by 0% : 50% (based on  Piercing Arrow\'s charge time) if the stacks were consumed with  Piercing Arrow.\n Spell shield will not block the  on-hit damage but will block the consumption damage if the target is hit by his abilities.\nBlighted Quiver\'s active damage is dealt after the damage of  Piercing Arrow.\nBlighted Quiver does not count as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nThe attacks do not affect  structures nor  wards.\nPENDING FOR TEST:: Blighted Quiver\'s on-hit interaction with parrying effects ( dodge,  block,  blind).',
      spellEffects: 'Proc',
      spellshieldable: 'Special',
      targeting: 'Auto'
    },
    {
      key: 'E',
      name: 'Hail of Arrows',
      affects: 'Enemies',
      blurb: 'Active:  Varus fires a hail of arrows to the target location that deals physical damage to enemies hit.',
      castTime: '0.2419',
      cooldown: '18 / 16 / 14 / 12 / 10',
      cost: '90',
      damageType: 'Magic damage',
      effectRadius: '300',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Varus fires a hail of arrows at the target location that land after 0.5 seconds, dealing physical damage to enemies hit.</p>',
          leveling: [
            {
              attribute: 'Physical Damage',
              modifiers: [
                {
                  values: '60 / 100 / 140 / 180 / 220'
                },
                {
                  unit: '% bonus AD',
                  values: '100'
                }
              ]
            }
          ]
        },
        {
          description: 'The area then becomes desecrated for 4 seconds, slowing enemies within and inflicting them with Grievous Wounds.',
          leveling: [
            {
              attribute: 'Slow',
              modifiers: [
                {
                  unit: '%',
                  values: '30 / 35 / 40 / 45 / 50'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Varus/ability-icon/e',
      maxCharges: -1,
      notes: 'Slow lingers for 0.25 seconds after leaving the marked area.\nHail of Arrows consumes  Blighted Quiver stacks for bonus damage a second time after ~0.3 seconds of hitting, allowing stacks applied during this time to be triggered.',
      projectile: 'TRUE',
      resource: 'Mana',
      spellEffects: 'spellaoe',
      spellshieldable: 'True',
      targeting: 'Location',
      targetRange: '925'
    },
    {
      key: 'R',
      name: 'Chain of Corruption',
      width: '240',
      affects: 'Enemies',
      blurb: 'Active:  Varus unleashes a tendril in the target direction that infects the first enemy champion hit, dealing magic damage and  rooting them for a short time. They are also  revealed and rapidly inflicted with  Blight stacks.',
      castTime: '0.2419',
      cooldown: '100 / 80 / 60',
      cost: '100',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Varus unleashes a tendril of corruption in the target direction that infects the first enemy champion hit, dealing magic damage and rooting them for 2 seconds, during which they are revealed. Over the first 1.5 seconds of the root, they are also inflicted with maximum stacks of Blight.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '150 / 250 / 350'
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
          description: 'Upon impact, the tendril roots into the ground from which it seeks out nearby enemy champions. If a target does not leave the area within 2 seconds, they subsequently become infected as well, taking the same damage and effects. A new tendril is then spread out from the infected target that is closest to a nearby uninfected enemy champion. The infection can spread repeatedly until there are no new targets.'
        },
        {
          description: 'The target does not have to be visible to be caught by the tendril.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Varus/ability-icon/r',
      maxCharges: -1,
      notes: 'The tendril seeks and registers valid targets every 0.264 seconds.\nEnemy champions can be targeted again by the corruption\'s tether if they were not infected the previous time, even if they were targeted and exited its range.\nA tendril that roots into the ground will only seek nearby enemy champions that were already in the area.\nChain of Corruption will not infect  crowd control immune targets or those protected by  spell shields (but will still seek them).\nVarus will turn to face the target direction at the start of the cast.\nThe tendril cannot seek enemy champions that are  untargetable, and will also stop seeking a target if it becomes untargetable (fails to apply its effects if they remain in the area).\nThis ability will cast from wherever the caster is at the end of the cast time.\nConsuming the Blight\'s stacks applied by Chain of Corruption will deal bonus magic damage based on  Blighted Quiver\'s rank. If the ability hasn\'t been ranked yet, the three Blight stacks will still be applied but they will be considered to be at rank 0, dealing 1.25% (+ 2% per 100 AP) of the target\'s maximum health per stack.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '1500',
      spellEffects: 'spellaoe',
      spellshieldable: 'True',
      targeting: 'Direction',
      tetherRadius: '650 /  600'
    }
  ],
  adaptiveType: 'Physical damage',
  attackType: 'Ranged',
  attributeRatings: {
    abilityReliance: 20,
    control: 2,
    damage: 3,
    difficulty: 2,
    mobility: 1,
    toughness: 1,
    utility: 1
  },
  faction: 'ionia',
  lore: 'One of the ancient darkin, Varus was a deadly killer who loved to torment his foes, driving them almost to insanity before delivering the killing arrow. He was imprisoned at the end of the Great Darkin War, but escaped centuries later in the remade flesh of two Ionian hunters—they had unwittingly released him, cursed to bear the bow containing his bound essence. Varus now seeks out those who trapped him, in order to enact his brutal vengeance, but the mortal souls within still resist him every step of the way.',
  patchLastChanged: '25.12',
  positions: [
    'Bottom'
  ],
  price: {
    blueEssence: 2400,
    rp: 880
  },
  releaseDate: '2012-05-08',
  resource: 'Mana',
  roles: [
    'Artillery',
    'Mage',
    'Marksman'
  ],
  stats: {
    acquisitionRadius: {
      flat: 600
    },
    armor: {
      flat: 24,
      perLevel: 4.6
    },
    attackCastTime: {
      flat: 0.3
    },
    attackDamage: {
      flat: 59,
      perLevel: 3.4
    },
    attackDelayOffset: {
      flat: -0.125
    },
    attackRange: {
      flat: 575
    },
    attackSpeed: {
      flat: 0.658,
      perLevel: 3.5
    },
    attackSpeedRatio: {
      flat: 0.658
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
      flat: 600,
      perLevel: 105
    },
    healthRegen: {
      flat: 3.5,
      perLevel: 0.55
    },
    magicResistance: {
      flat: 30,
      perLevel: 1.3
    },
    mana: {
      flat: 320,
      perLevel: 40
    },
    manaRegen: {
      flat: 8,
      perLevel: 0.8
    },
    movespeed: {
      flat: 330
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