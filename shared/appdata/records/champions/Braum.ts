// Updated Patch 25.19 - 10/07/2025 08:16:12 AM CDT

const champion: Champion = {
  id: 201,
  key: 'Braum',
  name: 'Braum',
  title: 'the Heart of the Freljord',
  abilities: [
    {
      key: 'P',
      name: 'Concussive Blows',
      affects: 'Enemies',
      blurb: 'Innate:  Braum\'s  basic attacks and  Winter\'s Bite apply a  stack of Concussive Blows. Once the first stack is applied, allied champion  basic attacks can also stack Concussive Blows.',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Braum\'s basic attacks and Winter\'s Bite each apply a stack of Concussive Blows to their target for 4 seconds, refreshing on subsequent applications and stacking up to 4 times. Once the first stack has been applied, any allied champion\'s basic attack applies an additional stack to the target on-hit.</p>'
        },
        {
          description: 'The fourth stack against a target consumes them all to deal 26 - 196 (based on his level) magic damage and stun them for 1.25 - 1.75 (based on his level) seconds.'
        },
        {
          description: 'This effect cannot apply to the same target more than once every few seconds. During this immunity period, affected targets take[ bonus magic damage equal to 20% of the trigger damage ][ 5.2 - 39.2 (based on level) bonus magic damage ]from Braum\'s basic attacks.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Braum/ability-icon/p',
      notes: 'Concussive Blows won\'t be applied if the attack is  dodged or  blocked or if the attack  misses.',
      onTargetCdStatic: '8 / 6 / 4 (based on level)',
      spellEffects: 'Proc',
      spellshieldable: 'True',
      targeting: 'Passive'
    },
    {
      key: 'Q',
      name: 'Winter\'s Bite',
      width: '120',
      affects: 'Enemies',
      blurb: 'Active:  Braum propels freezing ice from his shield,  slowing and dealing magic damage to the first enemy hit.',
      castTime: '0.25',
      cooldown: '8 / 7.5 / 7 / 6.5 / 6',
      cost: '45 / 50 / 55 / 60 / 65',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Braum propels ice from his shield in the target direction, dealing magic damage to the first enemy hit and slowing them by 70% decaying over 2 seconds.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '75 / 125 / 175 / 225 / 275'
                },
                {
                  unit: '% of Braum\'s maximum health',
                  values: '2.5'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Braum/ability-icon/q',
      maxCharges: -1,
      notes: 'This ability will cast from wherever the caster is at the end of the cast time.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '1700',
      spellEffects: 'Single target',
      spellshieldable: 'True',
      targeting: 'Direction'
    },
    {
      key: 'W',
      name: 'Stand Behind Me',
      affects: 'Self, Allies',
      blurb: 'Active:  Braum  dashes to a target allied  champion or  minion. On arrival, both of them gain  armor and  magic resistance for a few seconds.',
      castTime: 'none',
      cooldown: '12 / 11 / 10 / 9 / 8',
      cost: '40',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Braum dashes to put himself between the target ally and the closest visible enemy champion within 1500 units, and upon arrival grants himself and the ally bonus armor and bonus magic resistance for 3 seconds.</p>',
          leveling: [
            {
              attribute: 'Ally Bonus Armor',
              modifiers: [
                {
                  values: '20 / 25 / 30 / 35 / 40'
                },
                {
                  unit: '% bonus armor',
                  values: '12'
                }
              ]
            },
            {
              attribute: 'Ally Bonus Magic Resistance',
              modifiers: [
                {
                  values: '20 / 25 / 30 / 35 / 40'
                },
                {
                  unit: '% bonus magic resistance',
                  values: '12'
                }
              ]
            }
          ]
        },
        {
          description: 'Stand Behind Me can be self cast to instantly grant Braum the bonus resistances.',
          leveling: [
            {
              attribute: 'Self Bonus Armor',
              modifiers: [
                {
                  values: '20 / 25 / 30 / 35 / 40'
                },
                {
                  unit: '% bonus armor',
                  values: '36'
                }
              ]
            },
            {
              attribute: 'Self Bonus Magic Resistance',
              modifiers: [
                {
                  values: '20 / 25 / 30 / 35 / 40'
                },
                {
                  unit: '% bonus magic resistance',
                  values: '36'
                }
              ]
            }
          ]
        },
        {
          description: 'Unbreakable can be cast during the dash.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Braum/ability-icon/w',
      maxCharges: -1,
      notes: 'Stand Behind Me can be used on allied  minions but not on  wards nor  traps.\nStand Behind Me has a  forgiveness radius of 175 units.\nIf there are no nearby enemy champions, Braum will dash to land up-to 150 units on the far side of his target.\nThe maximum dash range without enemy champions present is ~650. An enemy champion on the far side of the ally will allow Braum to dash a total of up-to 800 units.\nIf  Unbreakable is cast during the dash,  Winter\'s Bite and  Glacial Fissure may also be cast.\nIf the  dash is interrupted, neither Braum nor his ally receive the bonus resistances.',
      resource: 'Mana',
      targeting: 'Unit',
      targetRange: '650'
    },
    {
      key: 'E',
      name: 'Unbreakable',
      affects: 'Self',
      angle: '180°',
      blurb: 'Active:  Braum becomes  ghosted and raises his shield in a direction for a few seconds, intercepting any enemy  projectiles to hit him and be destroyed.',
      castTime: 'none',
      cooldown: '16 / 14 / 12 / 10 / 8',
      cost: '30 / 35 / 40 / 45 / 50',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Braum sets his shield in the target direction for a duration, creating a barrier in front of him that intercepts all incoming hostile projectiles and reduces the damage Braum takes through it. The first instance of damage dealt by a champion from this direction is reduced by 100%. Unbreakable does not affect turrets.</p>',
          leveling: [
            {
              attribute: 'Damage reduction',
              modifiers: [
                {
                  unit: '%',
                  values: '35 / 40 / 45 / 50 / 55'
                }
              ]
            },
            {
              attribute: 'Barrier Duration',
              modifiers: [
                {
                  unit: ' seconds',
                  values: '3 / 3.25 / 3.5 / 3.75 / 4'
                }
              ]
            }
          ]
        },
        {
          description: 'While his shield is raised, Braum also gains 10% bonus movement speed and ghosting.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Braum/ability-icon/e',
      maxCharges: -1,
      notes: 'Definitions\nIncoming: Damage sources coming from somewhere facing the shield. Those coming from different sides are not affected.\nProjectiles: Sped up entities not classified as a unit ( champions,  minions,  monsters, etc.)\nIntercepting: A projectile hitting Braum because he is standing in front of the intended target. In addition to being redirected, an intercepted projectile is also destroyed after hitting Braum (although this is only applicable to pass-through projectiles).\nUnbreakable\'s full damage reduction can block multiple instances of damage if they\'re dealt at the same time.\nMoving units do not count for being blocked by Unbreakable.\nChampion summoned units are not classified as units until they hit the ground (e.g.  Sapling Toss) and thus will interact with Unbreakable whilst en route.\nProjectiles whose effects trigger on collision will still trigger - dealing damage, applying debuffs, creating area of effects and marking the target as \'hit\'.\nProjectiles that create an area of effect upon their collision will still affect other units and not only Braum.\nProjectiles that cannot hit Braum or his allies (such as an enemy  Prismatic Barrier) will not be intercepted.[2]\n Soraka\'s  Starcall\'s Rejuvenation projectile is however blocked.\nThe damage reduction will affect any source of damage whose origin is in front of the shield. This includes:\nAll intercepted projectiles.\n Melee and non-projectile-based  ranged attacks.\nInstantaneous direction-targeted abilities (e.g.  Arcanopulse,  Final Spark,  Lifeform Disintegration Ray.)\nInstantaneously-placed ground-targeted abilities (e.g.  Lay Waste,  Pillar of Flame,  Rupture) relative to the ability\'s center and not the caster\'s.\nPoint-blank area-of-effects (e.g.  Ground Slam,  Tantrum,  Time Bomb not targeted at Braum)\nInstantaneous targeted abilities (e.g.  Malefic Visions,  Transfusion,  Time Bomb targeted at Braum) and  AoE DoT (e.g.  Spirit Fire,  Tormented Shadow,  Poison Trail).\nThe damage reduction only benefits Braum.\n Damage over time is calculated per tick but the full damage reduction will still only apply to a single tick.\nIf the damage mitigated by Unbreakable exceeds a minimum threshold it is represented with floating text similar to the damage mitigated by shields (\'-X\')\nThis floating text is always shown for the single fully-reduced damage source.\nBraum\'s facing direction is in the direction he\'s moving in.\nIf Braum is protected by a  spell shield, both it and the one-time-use full damage reduction can be consumed by a single blockable spell.\nThe one-time-use full damage reduction will not be consumed if the damage source is nothing but  true damage.\nUnbreakable will grant assist credit if the enemy whose damaging projectile is blocked from is killed within 10 seconds.',
      resource: 'Mana',
      targeting: 'Direction'
    },
    {
      key: 'R',
      name: 'Glacial Fissure',
      width: '230 /  170',
      affects: 'Enemies',
      castTime: '0.5',
      cooldown: '120 / 100 / 80',
      cost: '100',
      damageType: 'Magic damage',
      effectRadius: '300 /  60 × 10',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Braum leaps into the air and slams his shield into the ground, creating a fissure from the impact that travels forth in the target direction, dealing magic damage to enemies within its path as well as those around Braum.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '150 / 300 / 450'
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
          description: 'The first target hit is knocked up for at least 0.6 seconds, increased if they are further away from Braum. All other enemies hit are knocked up for 0.6 seconds.',
          leveling: [
            {
              attribute: 'Maximum Knockup Duration',
              modifiers: [
                {
                  unit: ' seconds',
                  values: '1 / 1.5 / 2'
                }
              ]
            }
          ]
        },
        {
          description: 'A field of ice is created along the fissure\'s path, lasting for 4 seconds and slowing enemies within the area every 0.25 seconds. The field disappears after the duration ends in the same order and speed it was created with.',
          leveling: [
            {
              attribute: 'Slow',
              modifiers: [
                {
                  unit: '%',
                  values: '40 / 50 / 60'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Braum/ability-icon/r',
      maxCharges: -1,
      notes: 'This ability will cast from wherever the caster is at the end of the cast time.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '1400',
      spellEffects: 'spellaoe',
      spellshieldable: 'True',
      targeting: 'Direction'
    }
  ],
  adaptiveType: 'Magic damage',
  attackType: 'Melee',
  attributeRatings: {
    abilityReliance: 90,
    control: 3,
    damage: 1,
    difficulty: 2,
    mobility: 1,
    toughness: 2,
    utility: 2
  },
  faction: 'freljord',
  lore: 'Blessed with massive biceps and an even bigger heart, Braum is a beloved hero of the Freljord. Every mead hall north of Frostheld toasts his legendary strength, said to have felled a forest of oaks in a single night, and punched an entire mountain into rubble. Bearing an enchanted vault door as his shield, Braum roams the frozen north sporting a mustachioed smile as big as his muscles—a true friend to all those in need.',
  patchLastChanged: '25.15',
  positions: [
    'Support'
  ],
  price: {
    blueEssence: 1575,
    rp: 790
  },
  releaseDate: '2014-05-12',
  resource: 'Mana',
  roles: [
    'Support',
    'Tank',
    'Warden'
  ],
  stats: {
    acquisitionRadius: {
      flat: 800
    },
    armor: {
      flat: 35,
      perLevel: 5
    },
    attackCastTime: {
      flat: 0.3
    },
    attackDamage: {
      flat: 55,
      perLevel: 3.2
    },
    attackDelayOffset: {
      flat: -0.07
    },
    attackRange: {
      flat: 125
    },
    attackSpeed: {
      flat: 0.644,
      perLevel: 3.5
    },
    attackSpeedRatio: {
      flat: 0.644
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
      flat: 610,
      perLevel: 112
    },
    healthRegen: {
      flat: 8.5,
      perLevel: 1
    },
    magicResistance: {
      flat: 32,
      perLevel: 2.05
    },
    mana: {
      flat: 311,
      perLevel: 45
    },
    manaRegen: {
      flat: 7,
      perLevel: 0.8
    },
    movespeed: {
      flat: 335
    },
    pathingRadius: {
      flat: 50
    },
    selectionRadius: {
      flat: 130
    }
  }
}
export default champion