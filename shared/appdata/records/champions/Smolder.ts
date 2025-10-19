// Updated Patch 25.19 - 10/07/2025 08:16:13 AM CDT

const champion: Champion = {
  id: 901,
  key: 'Smolder',
  name: 'Smolder',
  title: 'the Fiery Fledgling',
  abilities: [
    {
      key: 'P',
      name: 'Dragon Practice',
      affects: 'Self/Enemies',
      blurb: 'Innate:  Smolder generates a  stack of Dragon Practice from damaging champions with abilities, or when  Super Scorcher Breath kills  minions and  monsters. His  basic abilities deal bonus magic damage based on stacks.',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Smolder generates a stack of Dragon Practice each time he hits an enemy champion with an ability, or whenever Super Scorcher Breath kills a minion or monster. His basic abilities deal bonus magic damage based on stacks.</p>\n<p class="ability-effect"><span class="ability-header"> Super Scorcher Breath:</span> Deals bonus magic damage equal to 40% - 70% (+ 0% - 16%) (based on critical strike chance) of Dragon Practice stacks.</p>\n<p class="ability-effect"><span class="ability-header"> Achooo!:</span> Explosions deal bonus magic damage equal to 55% of Dragon Practice stacks.</p>\n<p class="ability-effect"><span class="ability-header"> Flap, Flap, Flap:</span> Attacks each deal bonus magic damage equal to 12% of Dragon Practice stacks.</p>'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Smolder/ability-icon/p',
      notes: 'Super Scorcher Breath still grants stacks if the target dies while the initial missile is in flight.\n Achooo! can only grant a stack of Dragon Practice with the first hit against each enemy champion.\n Flap, Flap, Flap can only grant one stack of Dragon Practice per cast.',
      spellEffects: 'proc',
      spellshieldable: 'true',
      targeting: 'Passive'
    },
    {
      key: 'Q',
      name: 'Super Scorcher Breath',
      affects: 'Enemies',
      angle: '15°',
      blurb: 'Active:  Smolder spits a fireball that deals physical damage to the target enemy.',
      castTime: '100% of Smolder\'s windup time (0.261 at base attack speed)',
      cooldown: '5.5 / 5 / 4.5 / 4 / 3.5',
      cost: '25',
      damageType: 'Other damage',
      effectRadius: '285 / 150',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Smolder spits a fireball at the target enemy that deals physical damage, increased by 0% - 75% (+ 0% - 40%) (based on critical strike chance); applies on-hit effects; applies life steal at 50% effectiveness; and triggers on-attack effects. If Super Scorcher Breath kills at least one target, Smolder restores 15 mana.</p>',
          leveling: [
            {
              attribute: 'Physical Damage',
              modifiers: [
                {
                  values: '65 / 80 / 95 / 110 / 125'
                },
                {
                  unit: '% bonus AD',
                  values: '130'
                }
              ]
            },
            {
              attribute: 'Maximum Physical Damage',
              modifiers: [
                {
                  values: '113.75 / 140 / 166.25 / 192.5 / 218.75'
                },
                {
                  unit: '% bonus AD',
                  values: '227.5'
                }
              ]
            },
            {
              attribute: 'Maximum Damage with Infinity Edge',
              modifiers: [
                {
                  values: '139.75 / 172 / 204.25 / 236.5 / 268.75'
                },
                {
                  unit: '% bonus AD',
                  values: '279.5'
                }
              ]
            }
          ]
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Super Scorcher Breath becomes empowered with new effects based on the number of Dragon Practice stacks:</span></p>'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Tier 1 - 25 stacks:</span> The fireball explodes upon collision to deal the same physical damage to nearby enemies. The explosion benefits from life steal at 50% effectiveness and applies on-hit effects.</p>'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Tier 2 - 125 stacks:</span> The fireball sends forth 2 (+ 0.8 per 100 Dragon Practice stacks) bolts of fire in an arc upon collision that explode at maximum range, dealing 50% of the same damage to enemies hit. The bolts benefit from life steal at 50% effectiveness and apply on-hit effects.</p>',
          leveling: [
            {
              attribute: 'Physical Damage',
              modifiers: [
                {
                  values: '32.5 / 40 / 47.5 / 55 / 62.5'
                },
                {
                  unit: '% bonus AD',
                  values: '65'
                }
              ]
            },
            {
              attribute: 'Maximum Physical Damage',
              modifiers: [
                {
                  values: '56.88 / 70 / 83.13 / 96.25 / 109.38'
                },
                {
                  unit: '% bonus AD',
                  values: '113.75'
                }
              ]
            },
            {
              attribute: 'Maximum Physical Damage with Infinity Edge',
              modifiers: [
                {
                  values: '69.88 / 86 / 102.13 / 118.25 / 134.38'
                },
                {
                  unit: '% bonus AD',
                  values: '139.75'
                }
              ]
            }
          ]
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Tier 3 - 225 stacks:</span> Enemies hit are set on fire for 3 seconds, causing them to take bonus true damage equal to[ 2.5% per 100 bonus AD (+ 0.5% per 100 Dragon Practice stacks) of their maximum health over the duration, capped at 300 against monsters. ][ 0.83% per 100 bonus AD (+ 0.17% per 100 Dragon Practice stacks) of their maximum health each second, capped at 100 per tick against monsters. ]Subsequent applications of the burn stack, though not refreshing the duration of the previous burn. Enemy champions afflicted with the burn are also executed once Smolder deals damage to them that would leave them below 6.5% of their maximum health.</p>'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Smolder/ability-icon/q',
      maxCharges: -1,
      notes: 'Any applied  Dragon Practice damage is affected by the same damage modifiers as Super Scorcher Breath and does not benefit from the ability\'s  life steal.\nApplies  default damage for the burn,  spell damage and procs  basic damage required effects for the fireball, and  area damage for the explosions.\nOnly Smolder\'s damage counts for triggering the execute.\nIf the target is below the threshold while afflicted with the burn, they will be executed on the next instance of damage dealt by Smolder, which includes the burn tick.\nIf Super Scorcher Breath would damage the target to below the execution threshold, they are executed on the same damage instance.\nThe number of additional bolts launched based on  Dragon Practice stacks is rounded up.(note)\nAt 125  Dragon Practice stacks, the fireball will launch 3 bolts.\nAt 225  Dragon Practice stacks, the burn\'s damage based on the target\'s health ratio will increase by at least 1.125%.\nSuper Scorcher Breath can only hit enemies once per cast.\nThe minion and monster damage modifier applies only to the physical damage.\nOnly Super Scorcher Breath\'s initial fireball missile can be  blocked and  dodged.\nThe application of the burn is negated in both cases.\nThe fireball can still explode on-collision and fire the bolts in both cases.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '1800 / 900',
      spellEffects: 'special',
      spellshieldable: 'true',
      targeting: 'Unit',
      targetRange: '550 (+ 100% bonus range)'
    },
    {
      key: 'W',
      name: 'Achooo!',
      width: '115',
      affects: 'Enemies',
      blurb: 'Active:  Smolder sneezes forth a glob that deals physical damage to enemies hit and  slows them. Hitting an enemy  champion creates an explosion that deals physical damage to nearby enemies.',
      castTime: '0.35',
      cooldown: '14 / 13 / 12 / 11 / 10',
      cost: '50 / 55 / 60 / 65 / 70',
      damageType: 'Physical damage',
      effectRadius: '385',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Smolder sneezes a fiery glob in the target direction that deals physical damage to enemies hit and slows them by 35% for 1.5 seconds, slowing down in missile speed after travelling 1200 units. Hitting an enemy champion creates an explosion that deals physical damage to nearby enemies, with subsequent explosions against the same target dealing 75% damage of the previous explosion\'s damage.</p>',
          leveling: [
            {
              attribute: 'Glob Physical Damage',
              modifiers: [
                {
                  values: '60 / 70 / 80 / 90 / 100'
                },
                {
                  unit: '% bonus AD',
                  values: '60'
                }
              ]
            },
            {
              attribute: 'Explosion Physical Damage',
              modifiers: [
                {
                  values: '10 / 35 / 60 / 85 / 110'
                },
                {
                  unit: '% bonus AD',
                  values: '65'
                },
                {
                  unit: '% AP',
                  values: '80'
                }
              ]
            },
            {
              attribute: 'Total Physical Damage On Champion Hit',
              modifiers: [
                {
                  values: '70 / 105 / 140 / 175 / 210'
                },
                {
                  unit: '% bonus AD',
                  values: '125'
                },
                {
                  unit: '% AP',
                  values: '80'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Smolder/ability-icon/w',
      maxCharges: -1,
      notes: 'Smolder can\'t declare basic attacks for a brief moment after the cast time.\n Spell shield can block either the glob or the explosion, but not both.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '2000 / 400',
      spellEffects: 'spellaoe',
      spellshieldable: 'special',
      targeting: 'Direction'
    },
    {
      key: 'E',
      name: 'Flap, Flap, Flap',
      affects: 'Self, Enemies',
      blurb: 'Active:  Smolder takes flight for a short time, becoming  ghosted and gaining  bonus movement speed and the ability to ignore terrain collision. While in flight, he automatically fires bolts at a nearby enemy, dealing physical damage with each hit. The number of attacks increases based on  critical strike chance.',
      castTime: 'none',
      cooldown: '24 / 22 / 20 / 18 / 16',
      cost: '65',
      damageType: 'Physical damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Smolder takes flight for 1.25 seconds, becoming ghosted and gaining 75% bonus movement speed, unobstructed vision, and the ability to ignore terrain collision. While in flight, he automatically fires up to 5 (+ 1 per 100 Dragon Practice stacks) bolts at the nearest and most wounded visible enemy, dealing physical damage with each hit and prioritizing enemy champions.</p>',
          leveling: [
            {
              attribute: 'Physical Damage per Hit',
              modifiers: [
                {
                  values: '10 / 15 / 20 / 25 / 30'
                },
                {
                  unit: '% AD',
                  values: '30'
                }
              ]
            },
            {
              attribute: 'Minimum Total Physical Damage',
              modifiers: [
                {
                  values: '50 / 75 / 100 / 125 / 150'
                },
                {
                  unit: '% AD',
                  values: '150'
                }
              ]
            }
          ]
        },
        {
          description: 'Flap, Flap, Flap ends immediately if Smolder casts one of his abilities or becomes immobilized.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Smolder/ability-icon/e',
      maxCharges: -1,
      notes: 'Smolder\'s  attack range is reduced to 0 during Flap, Flap, Flap.\nSmolder can\'t declare basic attacks for a brief moment after the end of the effect.\nThis is due to his attack range being reduced to 0, it doesn\'t apply when Smolder is very close to his target.\nThe number of additional bolts based on  Dragon Practice stacks is rounded down.\nSmolder reveals himself while attacking enemies, even inside terrain.\n Spell shield will block only one bolt.\nSelf  immobilizations such as  Zhonya\'s Hourglass also count for ending Flap, Flap, Flap.\n Recall is disabled while Smolder is inside terrain.\nFlap, Flap, Flap can interact with player-generated terrain.\nIf Smolder is inside terrain when the effect ends, he will be placed correspondingly to the nearest valid space.\nThe following table refers for interactions while Smolder is flying:\n\n\nAttacking\n\nCauses Smolder to move towards the attack target.\n\n\nAbilities\n\nInterrupts\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\n\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Zhonya\'s Hourglass\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\nAll summoner spells are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath Immobilizing effects',
      resource: 'Mana',
      speed: '1800',
      spellEffects: 'spell',
      spellshieldable: 'special',
      targeting: 'Auto'
    },
    {
      key: 'R',
      name: 'MMOOOMMMM!',
      width: '125',
      affects: 'Enemies, Self',
      castTime: '0.75',
      cooldown: '120 / 110 / 100',
      cost: '100',
      damageType: 'Physical damage',
      effectRadius: '1000',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Smolder shouts for his mother to attack from above, causing her to exhale a wave of fire from behind him and towards the target direction, granting sight of its surroundings as it travels. The wave heals Smolder and deals physical damage to enemies hit, with those in the center taking 50% increased damage and becoming slowed by 40% for 2 seconds.</p>',
          leveling: [
            {
              attribute: 'Self Heal',
              modifiers: [
                {
                  values: '100 / 135 / 170'
                },
                {
                  unit: '% bonus AD',
                  values: '50'
                },
                {
                  unit: '% AP',
                  values: '75'
                }
              ]
            },
            {
              attribute: 'Physical Damage',
              modifiers: [
                {
                  values: '200 / 300 / 400'
                },
                {
                  unit: '% bonus AD',
                  values: '110'
                },
                {
                  unit: '% AP',
                  values: '100'
                }
              ]
            },
            {
              attribute: 'Increased Physical Damage',
              modifiers: [
                {
                  values: '300 / 450 / 600'
                },
                {
                  unit: '% bonus AD',
                  values: '165'
                },
                {
                  unit: '% AP',
                  values: '150'
                }
              ]
            }
          ]
        },
        {
          description: 'MMOOOMMMM! deals 50% damage against minions and monsters.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Smolder/ability-icon/r',
      maxCharges: -1,
      notes: 'This ability will cast from wherever the caster is at the start of the cast time.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled in the first 0.4 seconds of the cast time.\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '1700',
      spellEffects: 'spellaoe',
      spellshieldable: 'true',
      targeting: 'Direction'
    }
  ],
  adaptiveType: 'Physical damage',
  attackType: 'Ranged',
  attributeRatings: {
    abilityReliance: 10,
    control: 1,
    damage: 3,
    difficulty: 2,
    mobility: 1,
    toughness: 1,
    utility: 1
  },
  faction: 'unaffiliated',
  fullName: 'Ignacarious Gigantareno Rex Le Spes Offerentis',
  lore: 'Hidden amongst the craggy cliffs of the Noxian frontier, under the watchful eyes of his mother, a young dragon is learning what it means to be heir to the Camavoran imperial dragon lineage. Playful and eager to grow up, Smolder looks for any excuse to practice his burgeoning abilities. Though he\'s still a fledgling, his skills are nothing to sneeze at, easily setting fire to anything that burns.',
  patchLastChanged: '25.11',
  positions: [
    'Bottom',
    'Middle',
    'Top'
  ],
  price: {
    blueEssence: 3150,
    rp: 975
  },
  releaseDate: '2024-01-31',
  resource: 'Mana',
  roles: [
    'Mage',
    'Marksman'
  ],
  stats: {
    acquisitionRadius: {
      flat: 900
    },
    armor: {
      flat: 24,
      perLevel: 4.7
    },
    attackCastTime: {
      flat: 0.3
    },
    attackDamage: {
      flat: 60,
      perLevel: 2.3
    },
    attackDelayOffset: {
      flat: -0.134
    },
    attackRange: {
      flat: 550
    },
    attackSpeed: {
      flat: 0.638,
      perLevel: 4
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
      flat: 65
    },
    health: {
      flat: 575,
      perLevel: 100
    },
    healthRegen: {
      flat: 3.75,
      perLevel: 0.6
    },
    magicResistance: {
      flat: 30,
      perLevel: 1.3
    },
    mana: {
      flat: 300,
      perLevel: 40
    },
    manaRegen: {
      flat: 8.5,
      perLevel: 0.7
    },
    movespeed: {
      flat: 330
    },
    pathingRadius: {
      flat: 30
    },
    selectionRadius: {
      flat: 130
    }
  }
}
export default champion