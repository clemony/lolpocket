// Updated Patch 25.19 - 10/07/2025 08:16:12 AM CDT

const champion: Champion = {
  id: 3,
  key: 'Galio',
  name: 'Galio',
  title: 'the Colossus',
  abilities: [
    {
      key: 'P',
      name: 'Colossal Smash',
      affects: 'Enemies',
      blurb: 'Innate: Every few seconds,  Galio\'s next basic attack is modified to gain  attack speed and deal magic damage in an area, increased based on his  bonus magic resist.',
      damageType: 'Magic damage',
      effectRadius: '250',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Periodically, Galio\'s next basic attack is empowered to have an uncancellable windup, gain 40% bonus attack speed and deal 15 - 115 (based on level) (+ 100% AD) (+ 45% AP) (+ 60% bonus magic resistance) modified magic damage to the target and all enemies near them.</p>'
        },
        {
          description: 'Whenever Galio hits at least one enemy champion or epic monster with an ability, the cooldown of Colossal Smash is reduced by 3 seconds. This may occur only once per cast.'
        },
        {
          description: 'Colossal Smash\'s damage based on its AD ratio can critically strike for (175% + 40%) damage to all targets hit.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Galio/ability-icon/p',
      notes: 'Spellblade does not get converted to magic damage and it will deal its damage only to the primary target.\nThe empowered attack will not trigger against wards.\nEven if the ability hit is  spell shielded Colossal Smash\'s cooldown will still be reduced.',
      spellEffects: 'spellaoe',
      spellshieldable: 'False',
      targeting: 'Passive'
    },
    {
      key: 'Q',
      name: 'Winds of War',
      width: '120',
      affects: 'Enemies',
      blurb: 'Active:  Galio fires two windblasts that converge to the target location, dealing magic damage to enemies hit.',
      castTime: '0.25',
      cooldown: '11 / 10 / 9 / 8 / 7',
      cost: '70 / 75 / 80 / 85 / 90',
      damageType: 'Magic damage',
      effectRadius: '150',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Galio creates two windblasts 250 units to either side of him that arc out before converging to the target location, dealing magic damage to all enemies they pass through.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '70 / 105 / 140 / 175 / 210'
                },
                {
                  unit: '% AP',
                  values: '70'
                }
              ]
            }
          ]
        },
        {
          description: 'When the blasts meet, the gusts form a tornado that persists for 2 seconds, slowly moving forward and dealing magic damage equal to[ 2.5% (+ 1% per 100 AP) of target\'s maximum health every 0.5 seconds ][ 10% (+ 4% per 100 AP) of target\'s maximum health over the duration ]to enemies within the area, capped at[ 150 per tick ][ 600 total ]against monsters.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Galio/ability-icon/q',
      maxCharges: -1,
      notes: 'Deals  area damage on the gust and applies  persistent area damage for the tornado.\n Spell shield will block the gusts damage but not the tornado\'s.\n Yasuo\'s  Wind Wall and  Braum\'s  Unbreakable can block each windblast individually.\nThe tornado will not form if only one windblast reaches the target location.\nThis ability will cast from wherever the caster is at the end of the cast time.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '1400 / 50',
      spellEffects: 'special',
      spellshieldable: 'Special',
      targeting: 'Location',
      targetRange: '825'
    },
    {
      key: 'W',
      name: 'Shield of Durand',
      affects: 'Self / Enemies',
      castTime: 'none',
      cooldown: '18 / 17 / 16 / 15 / 14',
      cost: '50',
      damageType: 'Magic damage',
      effectRadius: '175 : 350 (based on channel time)',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Galio gains Anti-Magic Bulwark, and restores it after 12 / 10 / 8 (based on level) seconds without taking damage.Anti-Magic Bulwark: Gain a shield that absorbs magic damage.</p>',
          leveling: [
            {
              attribute: 'Magic Shield Strength',
              modifiers: [
                {
                  unit: '% of maximum health',
                  values: '7.5 / 9 / 10.5 / 12 / 13.5'
                }
              ]
            }
          ]
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Galio charges for up to 2 seconds, slowing himself by 15%, and gaining magic damage reduction and half of that amount as physical damage reduction; charging increases Shield of Durand\'s radius, damage and taunt duration over the first 1.25 seconds of the channel.</p>',
          leveling: [
            {
              attribute: 'Magic Damage Reduction',
              modifiers: [
                {
                  unit: '%',
                  values: '25 / 30 / 35 / 40 / 45'
                },
                {
                  unit: '% per 100 AP',
                  values: '4'
                },
                {
                  unit: '% per 100 bonus magic resistance',
                  values: '8'
                },
                {
                  unit: '% per 100 bonus health',
                  values: '1'
                }
              ]
            },
            {
              attribute: 'Physical Damage Reduction',
              modifiers: [
                {
                  unit: '%',
                  values: '12.5 / 15 / 17.5 / 20 / 22.5'
                },
                {
                  unit: '% per 100 AP',
                  values: '1.5'
                },
                {
                  unit: '% per 100 bonus magic resistance',
                  values: '4'
                },
                {
                  unit: '% per 100 bonus health',
                  values: '0.5'
                }
              ]
            }
          ]
        },
        {
          description: 'Shield of Durand can be recast within the duration and does so automatically afterwards or if it is interrupted.'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Galio refreshes the damage reduction for 2 seconds and deals magic damage to nearby enemy champions, increased by 0% - 200% (based on channel time), as well as taunts them for 0.5 - 1.5 (based on channel time) seconds and, after a brief delay, sets their movement speed to a static 60 for the same duration but slightly longer.</p>',
          leveling: [
            {
              attribute: 'Minimum Magic Damage',
              modifiers: [
                {
                  values: '20 / 30 / 40 / 50 / 60'
                },
                {
                  unit: '% AP',
                  values: '30'
                }
              ]
            },
            {
              attribute: 'Maximum Magic Damage',
              modifiers: [
                {
                  values: '60 / 90 / 120 / 150 / 180'
                },
                {
                  unit: '% AP',
                  values: '90'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Galio/ability-icon/w',
      maxCharges: -1,
      notes: 'Galio is  locked out of attacking and casting for 0.4 seconds after recasting.\nGalio may still buffer his actions during this time.\nStatic movement speed cannot be modified by  bonus movement speed or  slow resist.\nThis effect is negated only if the target is  slow-immune.\nThe ability key does not need to be held down when buffered in other abilities except  Winds of War.\nThe following table refers for interactions while Galio is  channeling:\n\n\nType\n\nCharge channel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Hexflash\n\n\nInterrupted by\n\n Recall\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects',
      resource: 'Mana',
      spellEffects: 'spellaoe',
      spellshieldable: 'True',
      targeting: 'Auto'
    },
    {
      key: 'E',
      name: 'Justice Punch',
      width: '400',
      affects: 'Enemies',
      castTime: '0.4',
      cooldown: '11 / 10 / 9 / 8 / 7',
      cost: '50',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Galio steps backwards in the opposite direction over the cast time, then dashes to the target location until he hits an enemy champion or terrain.</p>'
        },
        {
          description: 'Galio deals magic damage to enemies he passes through, reduced to 80% against non-champions, and knocks them up for 0.75 seconds as well as reveals them for the same duration.',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '90 / 130 / 170 / 210 / 250'
                },
                {
                  unit: '% AP',
                  values: '90'
                }
              ]
            },
            {
              attribute: 'Non-Champion Damage',
              modifiers: [
                {
                  values: '72 / 104 / 136 / 168 / 200'
                },
                {
                  unit: '% AP',
                  values: '72'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Galio/ability-icon/e',
      maxCharges: -1,
      notes: 'Galio will initiate the  dash even if his step backwards is  knocked down.\nGalio\'s second dash will always dash the distance of the target direction. Having the step backwards cut short has no effect on the total distance gained.\nThe following table refers for interactions during Justice Punch\'s cast time and  dash:\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Recall\n\n\nDisabled\n\n Flash  Teleport  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection',
      resource: 'Mana',
      speed: '2300',
      spellEffects: 'spellaoe',
      targeting: 'Location',
      targetRange: '250 / 650'
    },
    {
      key: 'R',
      name: 'Hero\'s Entrance',
      affects: 'Allies, Enemies',
      castTime: 'none',
      cooldown: '180 / 160 / 140',
      cost: '100',
      damageType: 'Magic damage',
      effectRadius: '650',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Galio prepares to make an entrance, channeling for 2.75 seconds and designating the target allied champion\'s location at the time of cast as his landing spot. Additionally, he resets Shield of Durand\'s passive shield for himself and grants it to all allied champions within the area for 5 seconds.</p>'
        },
        {
          description: 'After channeling for 1.25 seconds, he gains crowd control immunity for the remaining duration, becomes untargetable, and leaps into the air for 0.8 seconds before dashing to his destination over 0.2 seconds. Afterwards, he lands and becomes targetable again, dealing magic damage to all nearby enemies upon impact, knocking them back 100 units over 0.75 seconds, and remaining in place for 0.5 seconds.',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '150 / 250 / 350'
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
      icon: 'https://cdn.communitydragon.org/latest/champion/Galio/ability-icon/r',
      maxCharges: -1,
      notes: 'Hero\'s Entrance does not resist allied  crowd control.\nHero\'s Entrance has a  forgiveness radius of 175 units.\nGalio cannot cast Hero\'s Entrance on allies he cannot  see while  nearsighted.\nGalio will still cause an impact to occur at the destination even if he is unable to travel the full distance with the dash (e.g. by  The Hextech Ultimatum\'s and  Realm of Death\'s borders and terrain). Galio will dash as far as he can go, and thus, does not end the dash prematurely.\nGalio will always dash 100 units minimum, and dash over his target\'s location if they are less than 100 units away from him.\nThe following table refers for interactions while Galio is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath Grounding effects Immobilizing effects Cast-inhibiting effects\n\nHero\'s Entrance\'s channel can only be  interrupted by  crowd control in the first 1.25 seconds.',
      resource: 'Mana',
      spellEffects: 'Area of Effect',
      spellshieldable: 'True',
      targeting: 'Unit',
      targetRange: '4000 / 4750 / 5500'
    }
  ],
  adaptiveType: 'Magic damage',
  attackType: 'Melee',
  attributeRatings: {
    abilityReliance: 100,
    control: 3,
    damage: 2,
    difficulty: 2,
    mobility: 2,
    toughness: 3,
    utility: 1
  },
  faction: 'demacia',
  lore: 'Outside the gleaming city of Demacia, the stone colossus Galio keeps vigilant watch. Built as a bulwark against enemy mages, he often stands motionless for decades until the presence of powerful magic stirs him to life. Once activated, Galio makes the most of his time, savoring the thrill of a fight and the rare honor of defending his countrymen. But his triumphs are always bittersweet, for the magic he destroys is also his source of reanimation, and each victory leaves him dormant once again.',
  patchLastChanged: '25.03',
  positions: [
    'Middle',
    'Support'
  ],
  price: {
    blueEssence: 1575,
    rp: 790
  },
  releaseDate: '2010-08-10',
  resource: 'Mana',
  roles: [
    'Mage',
    'Tank',
    'Warden'
  ],
  stats: {
    acquisitionRadius: {
      flat: 600
    },
    armor: {
      flat: 24,
      perLevel: 4.7
    },
    attackCastTime: {
      flat: 0.33
    },
    attackDamage: {
      flat: 59,
      perLevel: 3.5
    },
    attackDelayOffset: {
      flat: 0
    },
    attackRange: {
      flat: 150
    },
    attackSpeed: {
      flat: 0.625,
      perLevel: 1.5
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
      flat: 80
    },
    health: {
      flat: 600,
      perLevel: 126
    },
    healthRegen: {
      flat: 8,
      perLevel: 0.8
    },
    magicResistance: {
      flat: 32,
      perLevel: 2.05
    },
    mana: {
      flat: 410,
      perLevel: 40
    },
    manaRegen: {
      flat: 9.5,
      perLevel: 0.7
    },
    movespeed: {
      flat: 340
    },
    pathingRadius: {
      flat: 50
    },
    selectionRadius: {
      flat: 125
    }
  }
}
export default champion