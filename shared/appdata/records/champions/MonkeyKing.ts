// Updated Patch 25.17 - 09/18/2025 02:20:05 AM CDT

const champion: Champion = {
  id: 62,
  key: 'MonkeyKing',
  name: 'Wukong',
  title: 'the Monkey King',
  abilities: [
    {
      key: 'P',
      name: 'Stone Skin',
      affects: 'Self',
      blurb: 'Innate:  Wukong gains  bonus armor based on level and  health regeneration equal to a portion of his maximum health.',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Wukong gains 6 - 10 (based on level) bonus armor and regenerates an additional[ 0.35% of his maximum health every 5 seconds. ][ 0.035% of his maximum health every 0.5 seconds. ]Whenever Wukong or his clone damage an enemy champion or monster, he generates a stack of Strength of Stone for 5 seconds, refreshing on subsequent hits and stacking up to 5 times. Stacks expire by one every second when the duration ends.</p>'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Strength of Stone:</span> For each stack,[ Stone Skin\'s effects are increased by 100%, ][ Wukong gains 6 - 10 (based on level) additional bonus armor and further regenerates an additional 0.35% of his maximum health every 5 seconds, ]up to a maximum of 36 - 60 (based on level) bonus armor and total additional regeneration of[ 2.1% maximum health every 5 seconds. ][ 0.21% maximum health every 0.5 seconds. ]</p>'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/MonkeyKing/ability-icon/p',
      targeting: 'Passive'
    },
    {
      key: 'Q',
      name: 'Crushing Blow',
      affects: 'Self, Enemies',
      blurb: 'Active:  Wukong\'s next basic attack within a few seconds will gain  bonus range, deal bonus physical damage, and inflict  armor reduction for a short time.',
      castTime: 'none',
      cooldown: '8 / 7.5 / 7 / 6.5 / 6',
      cost: '20',
      damageType: 'Physical damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Wukong empowers his next basic attack within 5 seconds to have an uncancellable windup, gain bonus range, deal bonus physical damage, and inflict armor reduction for 3 seconds.</p>',
          leveling: [
            {
              attribute: 'Bonus Range',
              modifiers: [
                {
                  values: '135 / 145 / 155 / 165 / 175'
                }
              ]
            },
            {
              attribute: 'Bonus Physical Damage',
              modifiers: [
                {
                  values: '20 / 45 / 70 / 95 / 120'
                },
                {
                  unit: '% bonus AD',
                  values: '55'
                }
              ]
            },
            {
              attribute: 'Armor Reduction',
              modifiers: [
                {
                  unit: '% of target\'s armor',
                  values: '10 / 15 / 20 / 25 / 30'
                }
              ]
            }
          ]
        },
        {
          description: 'Crushing Blow\'s cooldown is reduced by 0.5 seconds whenever Wukong or his clone damage an enemy.'
        },
        {
          description: 'Crushing Blow resets Wukong\'s and his clone\'s basic attack timer. Other abilities can be used during the attack\'s animation.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/MonkeyKing/ability-icon/q',
      maxCharges: -1,
      notes: 'Crushing Blow triggers on  structures and  wards but the armor reduction is not applied.\nIssuing a Hold command (default J) or Stop command (default S) after Crushing Blow\'s attack has started will cancel the animation, however the attack will still be launched and Wukong will be unable to move until that point.',
      resource: 'Mana',
      spellEffects: 'spell',
      spellshieldable: 'True',
      targeting: 'Auto'
    },
    {
      key: 'W',
      name: 'Warrior Trickster',
      affects: 'Enemies',
      blurb: 'Active:  Wukong enters brief  invisibility and  dashes to the target location, leaving behind a  clone that remains for a short time.',
      castTime: 'none',
      cooldown: '20 / 19 / 18 / 17 / 16',
      cost: '60 / 55 / 50 / 45 / 40',
      damageType: 'Physical damage',
      effectRadius: 'Clone\'s attack range',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Wukong enters invisibility for 1 second and dashes in the target direction, leaving behind a clone of himself at his casting position for 3.25 seconds.</p>'
        },
        {
          description: 'The clone is untargetable to allies and can basic attack autonomously, prioritizing the last enemy Wukong damaged. It can also gain the effects of Crushing Blow, Nimbus Strike\'s bonus attack speed, and casts Cyclone whenever Wukong does.'
        },
        {
          description: 'The clone deals reduced damage.',
          leveling: [
            {
              attribute: 'Clone Outgoing Damage',
              modifiers: [
                {
                  unit: '%',
                  values: '35 / 40 / 45 / 50 / 55'
                }
              ]
            }
          ]
        },
        {
          description: 'See Pets for more details about Wukong\'s clone. Wukong can cast any of his abilities during the dash.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/MonkeyKing/ability-icon/w',
      maxCharges: -1,
      notes: 'Casting Warrior Trickster during an ability\'s effects will transfer them to the clone.\n Turret shots instantly kill the clone.\nThe clone is immune to  stasis and  Blast Cone.\nThe clone can still be targeted by allied  auto-targeted effects (e.g.  Heal,  Celestial Blessing).\nUsing a basic attack breaks the stealth at the end of the attack windup.',
      resource: 'Mana',
      speed: '900',
      spellEffects: 'pet',
      spellshieldable: 'True',
      targeting: 'Location',
      targetRange: '100 / 300'
    },
    {
      key: 'E',
      name: 'Nimbus Strike',
      affects: 'Enemies',
      blurb: 'Active:  Wukong  dashes to the target enemy and sends  untargetable clones to briefly attack up to two surrounding enemies, dealing magic damage.',
      castTime: 'none',
      cooldown: '10 / 9.25 / 8.5 / 7.75 / 7',
      cost: '30 / 35 / 40 / 45 / 50',
      damageType: 'Magic damage',
      effectRadius: '187.5',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Wukong dashes to the target enemy\'s location and sends out untargetable clones to strike up to two additional enemies near the target\'s location, dealing magic damage.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '80 / 110 / 140 / 170 / 200'
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
          description: 'Upon arrival, Wukong gains bonus attack speed for 5 seconds.',
          leveling: [
            {
              attribute: 'Bonus Attack Speed',
              modifiers: [
                {
                  unit: '%',
                  values: '35 / 40 / 45 / 50 / 55'
                }
              ]
            }
          ]
        },
        {
          description: 'Crushing Blow can be cast during the dash.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/MonkeyKing/ability-icon/e',
      maxCharges: -1,
      notes: 'The clones can block non-targeted attacks or abilities for 0.25 seconds after hitting their targets.(note)\nCasting Nimbus Strike interrupts the attack windup of enemies targeting Wukong.(bug)\nNimbus Strike has an offset distance of 75 units from the target dashed to.\nThe ability applies a stack of  Electrocute /  Phase Rush even if the target is  untargetable.\nThe created clones are considered champions for  Turret Plating\'s  gold sharing.',
      projectile: 'FALSE',
      resource: 'Mana',
      spellEffects: 'spellaoe',
      spellshieldable: 'True',
      targeting: 'Unit',
      targetRange: '625'
    },
    {
      key: 'R',
      name: 'Cyclone',
      affects: 'Enemies, Self',
      blurb: 'Active:  Wukong spins his staff around for a short time, becoming  ghosted and gaining  bonus movement speed. The staff continually deals physical damage to enemies hit based on their maximum health, and can briefly  knock them up once.',
      castTime: 'none',
      cooldown: '130 / 110 / 90',
      cost: '100',
      damageType: 'Physical damage',
      effectRadius: '162.5',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Wukong spins his staff around for up to 2 seconds, becoming ghosted and gaining 20% bonus movement speed. The staff deals physical damage every 0.25 seconds to enemies hit, and can knock them up once for 0.6 seconds. Cyclone will not knock up enemies who were already hit by either Wukong or his clone within the same cast.</p>',
          leveling: [
            {
              attribute: 'Physical Damage Per Tick',
              modifiers: [
                {
                  unit: '% of target\'s maximum health',
                  values: '1 / 1.5 / 2'
                },
                {
                  unit: '% AD',
                  values: '34.38'
                }
              ]
            },
            {
              attribute: 'Total Physical Damage',
              modifiers: [
                {
                  unit: '% of target\'s maximum health',
                  values: '8 / 12 / 16'
                },
                {
                  unit: '% AD',
                  values: '275'
                }
              ]
            }
          ]
        },
        {
          description: 'Cyclone can be recast after 0.5 seconds within the duration, and does so automatically afterwards or by casting another ability.'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Wukong ends Cyclone. After 1 second, he can cast Cyclone a second time within 8 seconds of the first cast.</p>',
          leveling: [
            {
              attribute: 'Maximum Total Physical Damage',
              modifiers: [
                {
                  unit: '% of target\'s maximum health',
                  values: '16 / 24 / 32'
                },
                {
                  unit: '% AD',
                  values: '550'
                }
              ]
            }
          ]
        },
        {
          description: 'Nimbus Strike\'s bonus attack speed duration is continuously refreshed while spinning.'
        },
        {
          description: 'Cyclone\'s damage is capped at 200 / 400 / 600 (based on level) per second against monsters.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/MonkeyKing/ability-icon/r',
      maxCharges: -1,
      notes: 'Cyclone is special cased to grant stacks of  Conqueror for each tick of damage.\nCasting a basic ability will always interrupt Wukong\'s Cyclone. A clone can be interrupted by casting  Crushing Blow, but only if the clone was made during the current Cyclone cast and only for that cast. This means if both Wukong and his clone are spinning, the clone cannot be interrupted.\nCyclone\'s remaining duration always stays the same even after the clone replicated the ability.\nDuring Cyclone, Wukong and his clone\'s  attack ranges are reduced[ to 50 ][ by 125 ].\n Spell shield will block one instance of damage.\nBlocking the  knock up will still grant immunity to it from either of Cyclone\'s casts.\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nOther abilities are disabled for the first 0.3 seconds, casting them afterwards interrupts.\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\nAll items are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash  Teleport  Hexflash\n\n\nDisabled\n\n Recall\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath',
      resource: 'Mana',
      spellEffects: 'aoedot',
      spellshieldable: 'Special',
      targeting: 'Auto'
    }
  ],
  adaptiveType: 'Physical damage',
  attackType: 'Melee',
  attributeRatings: {
    abilityReliance: 55,
    control: 2,
    damage: 2,
    difficulty: 1,
    mobility: 2,
    toughness: 2,
    utility: 1
  },
  faction: 'ionia',
  lore: 'Wukong is a vastayan trickster who uses his strength, agility, and intelligence to confuse his opponents and gain the upper hand. After finding a lifelong friend in the warrior known as Master Yi, Wukong became the last student of the ancient martial art known as Wuju. Armed with an enchanted staff, Wukong seeks to prevent Ionia from falling to ruin.',
  patchLastChanged: '25.03',
  positions: [
    'Jungle',
    'Top'
  ],
  price: {
    blueEssence: 1575,
    rp: 790
  },
  releaseDate: '2011-07-26',
  resource: 'Mana',
  roles: [
    'Diver',
    'Fighter',
    'Tank'
  ],
  stats: {
    acquisitionRadius: {
      flat: 600
    },
    armor: {
      flat: 31,
      perLevel: 4.7
    },
    attackCastTime: {
      flat: 0.3
    },
    attackDamage: {
      flat: 66,
      perLevel: 3.5
    },
    attackDelayOffset: {
      flat: -0.092
    },
    attackRange: {
      flat: 175
    },
    attackSpeed: {
      flat: 0.69,
      perLevel: 3
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
      flat: 610,
      perLevel: 99
    },
    healthRegen: {
      flat: 3.5,
      perLevel: 0.65
    },
    magicResistance: {
      flat: 28,
      perLevel: 2.05
    },
    mana: {
      flat: 330,
      perLevel: 65
    },
    manaRegen: {
      flat: 8,
      perLevel: 0.8
    },
    movespeed: {
      flat: 340
    },
    pathingRadius: {
      flat: 35
    },
    selectionRadius: {
      flat: 100
    }
  }
}
export default champion