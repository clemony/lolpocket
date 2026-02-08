// Updated Patch 16.1 - 01/29/2026 04:27:15 PM CST
import type { Champion } from '#shared/types'

const champion: Champion = {
  id: 5,
  key: 'XinZhao',
  name: 'Xin Zhao',
  title: 'The Seneschal of Demacia',
  adaptiveType: 'Physical damage',
  attackType: 'Melee',
  fullName: 'Xin Zhao',
  patchLastChanged: '25.21',
  releaseDate: '2010-07-13',
  resource: 'Mana',
  abilities: [
    {
      key: 'P',
      name: 'Determination',
      affects: 'Self',
      blurb: 'Innate:  Xin Zhao\'s  basic attacks  on-hit and  Wind Becomes Lightning strikes generate a stack of Determination, stacking up to 3 times.',
      damageType: 'Physical damage',
      icon: 'https://cdn.communitydragon.org/latest/champion/XinZhao/ability-icon/p',
      notes: 'Determination Details\nThe healing and bonus damage work on different stacking systems, each counting its stacks and being consumed separately. While both stack  on-hit, the bonus damage stacks are consumed  on-attack, and the healing ones  on-hit.\nThe healing stacks are denoted in the buff-bar.\nIf  Guinsoo\'s Rageblade were to trigger when the stacks are at maximum, they will grant the healing but not the bonus damage, thus causing an out-of-sync between the stacks shown in-game versus when the bonus damage is dealt.\nOnly the initial slash of  Wind Becomes Lightning can generate a Determination stack. Slashes after the first do not count for stack generation.\nThe stack counter displays 1:3 rather than the usual 0:2, meaning that a count of 1 does not translate to having 1 stack.\nStacks reset when Xin Zhao  dies.\nStacks of Determination will be gained even if the attack is  blocked.\nPENDING FOR TEST:: Determination\'s interaction with parrying effects ( dodge,  blind).\nDetermination deals  proc damage.\nSince it is a separate instance of damage when applied by basic attack or either of  Wind Becomes Lightning\'s strikes, flat damage reduction that applies to both the main and bonus damage such as  Amumu\'s  Tantrum\'s passive will reduce each, for twice the reduction.\nThe bonus damage cannot  critically strike.\nWhen applied by a basic attack:\nThe attack uses a unique animation.\nThe bonus damage benefits from  life steal.\nPENDING FOR TEST: It applies life steal specifically.\nNeither the bonus damage or heal will be blocked by  spell shield.\nWhen applied by  Wind Becomes Lightning:\nTriggers against the closest target struck by the first slash/thrust (equals first target to receive spell effects).\nDoes not benefit from  life steal, including not healing from Wind Becomes Lightning\'s 33% conversion for this bonus damage.\nSince  proc damage is \'single target\',  Vamp will heal from 100% of the bonus damage.\nThe bonus damage will be blocked by  spell shield, the heal will not.\nChallenged Details\n Spell shield will block the mark application from  Wind Becomes Lightning, but not from basic attacks and  Audacious Charge.',
      spellEffects: 'proc',
      spellshieldable: 'special',
      targeting: 'Passive',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Xin Zhao\'s basic attacks on-hit and Wind Becomes Lightning\'s first slash hit and thrust on at least one enemy hit each generate a stack of Determination, stacking up to 3 times. The third stack consumes them all to deal 15% / 30% / 45% / 60% (based on level) AD bonus physical damage and heal Xin Zhao for 3% / 3.5% / 4% (based on level) of his maximum health (+ 65% AP).</p>'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate - Challenge:</span> Wind Becomes Lightning and, if Crescent Guard has been learned, Xin Zhao\'s basic attacks and Audacious Charge, apply a Challenged mark to certain enemies hit for 3 seconds. Only one enemy can be marked as Challenged at a time; applying the mark to a new target removes it from the previous one. Audacious Charge and Crescent Guard have interactions against Challenged targets.</p>'
        }
      ]
    },
    {
      key: 'Q',
      name: 'Three Talon Strike',
      affects: 'Enemies',
      blurb: 'Active:  Xin Zhao empowers his next few  attacks within a duration to deal bonus physical damage and  reduce his other  ability cooldowns.',
      castTime: 'none',
      cooldown: '7 / 6.5 / 6 / 5.5 / 5',
      cost: '30',
      damageType: 'Physical damage',
      icon: 'https://cdn.communitydragon.org/latest/champion/XinZhao/ability-icon/q',
      notes: 'Spell shield will only block the knock up.\nThe enhanced attacks present input buffering during their wind-up animation (Xin Zhao cannot be issued any commands until after it ends).',
      resource: 'Mana',
      spellEffects: 'spell',
      spellshieldable: 'Special',
      targeting: 'Auto',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Xin Zhao empowers his next three basic attacks on-attack within 5 seconds to each have an uncancellable windup, deal bonus physical damage and reduce his other abilities\' current cooldowns by 1 second. Each attack refreshes the duration.</p>',
          leveling: [
            {
              attribute: 'Bonus Physical Damage',
              modifiers: [
                {
                  values: '15 / 30 / 45 / 60 / 75'
                },
                {
                  unit: '% bonus AD',
                  values: '40'
                }
              ]
            },
            {
              attribute: 'Total Bonus Physical Damage',
              modifiers: [
                {
                  values: '45 / 90 / 135 / 180 / 225'
                },
                {
                  unit: '% bonus AD',
                  values: '120'
                }
              ]
            }
          ]
        },
        {
          description: 'The third attack knocks up the target for 0.75 seconds.'
        },
        {
          description: 'Three Talon Strike\'s bonus damage is affected by critical strike modifiers.'
        },
        {
          description: 'Three Talon Strike resets Xin Zhao\'s basic attack timer.'
        }
      ]
    },
    {
      key: 'W',
      name: 'Wind Becomes Lightning',
      width: '80',
      affects: 'Enemies',
      angle: '160°',
      blurb: 'Active:  Xin Zhao slashes in an arc, then thrusts his spear in a line in the target direction. Each strike deals physical damage to enemies hit and heals Xin Zhao based on his  life steal.',
      castTime: '0.5',
      cooldown: '12 / 11 / 10 / 9 / 8',
      cost: '60 / 55 / 50 / 45 / 40',
      damageType: 'Physical damage',
      effectRadius: '275 /  125',
      icon: 'https://cdn.communitydragon.org/latest/champion/XinZhao/ability-icon/w',
      notes: 'PENDING FOR TEST: The self-reveal has not been fully tested for complete confirmation. Is the ability invisible when hitting minions and there is no enemy champion nearby? Is the tip of the ability enough to reveal him? Whether it can hit a minion or not? Just if he\'s around the exit of the fog of war, and even if he points towards the inside of the fog of war? [2]\n Spell shield will block both the slashes and the thrust.\nIf the spell shield blocks the first, or sometimes the second slash, it will block the rest of the ability, including the thrust. If it is activated after the first slash, it will only block up to 2 slashes and will not block the trust.(bug)\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe thrust will occur from wherever Xin Zhao is at the end of the cast time.\nThe slashes will occur from wherever Xin Zhao is at the time during the first 0.15 seconds.\nWind Becomes Lightning\'s end point will not move in relation to Xin Zhao if he moves during the cast time.\nThe direction of the slashes will also not move during the cast time.\nThe first strike\'s hitbox includes a  275 radius 160° cone in front of Xin Zhao and an additional  125 radius around him.\nThe second strike\'s hitbox includes the same  125 radius around Xin Zhao, a missile with  1000 range and  80 total width, and a  -60 radius area check upon the end of the missile.\nThe 125 radius check does not hit champion summoned units.(note)\nBecause Wind Becomes Lightning uses an older type of \'healing based on life steal\' and not applies life steal,  Spirit Visage will amplify the life gain twice (+25% life steal and +25% healing), for a total of +56.25%.\nEach of Wind Becomes Lightning\'s slashes are applied in a separate damage instance from each other.\nThis causes effects like  Bone Plating to be applied twice and  Black Cleaver\'s Carve to be applied multiple times.',
      projectile: 'FALSE',
      resource: 'Mana',
      speed: '6250',
      spellEffects: 'Area of effect',
      spellshieldable: 'true',
      targeting: 'Direction',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Xin Zhao unleashes 4 slashes in an arc over the first 0.15 seconds of the cast time, each dealing physical damage to enemies within. After the remaining cast time, he then thrusts his spear in a line in the target direction, dealing physical damage to enemies hit, increased by 0% - 33.3% (based on critical strike chance), and slowing them by 50% for 1.5 seconds. Wind Becomes Lightning deals 50% - 100% (based on level) damage to minions.The farthest champion or large monster hit within the thrust\'s area is also marked as Challenged and is revealed for 3 seconds.</p>',
          leveling: [
            {
              attribute: 'Physical Damage per Slash',
              modifiers: [
                {
                  values: '7.5 / 10 / 12.5 / 15 / 17.5'
                },
                {
                  unit: '% AD',
                  values: '7.5'
                }
              ]
            },
            {
              attribute: 'Slash Total Physical Damage',
              modifiers: [
                {
                  values: '30 / 40 / 50 / 60 / 70'
                },
                {
                  unit: '% AD',
                  values: '30'
                }
              ]
            },
            {
              attribute: 'Thrust Physical Damage',
              modifiers: [
                {
                  values: '50 / 85 / 120 / 155 / 190'
                },
                {
                  unit: '% AD',
                  values: '90'
                },
                {
                  unit: '% AP',
                  values: '65'
                }
              ]
            },
            {
              attribute: 'Total Physical Damage',
              modifiers: [
                {
                  values: '80 / 125 / 170 / 215 / 260'
                },
                {
                  unit: '% AD',
                  values: '120'
                },
                {
                  unit: '% AP',
                  values: '65'
                }
              ]
            }
          ]
        },
        {
          description: 'Wind Becomes Lightning\'s damage heals Xin Zhao for 33.3% of his life steal.'
        },
        {
          description: 'The durations of Three Talon Strike and Audacious Charge\'s bonus attack speed are delayed relative to Wind Becomes Lightning\'s cast time. Xin Zhao reveals himself during the cast if there is an enemy champion nearby.'
        }
      ]
    },
    {
      key: 'E',
      name: 'Audacious Charge',
      affects: 'Enemies',
      blurb: 'Active:  Xin Zhao  dashes to the target enemy, dealing magic damage to nearby enemies and briefly  slowing them. He then gains  bonus attack speed for a few seconds.',
      castTime: 'none',
      cooldown: '11',
      cost: '50',
      damageType: 'Magic damage',
      effectRadius: '250',
      icon: 'https://cdn.communitydragon.org/latest/champion/XinZhao/ability-icon/e',
      notes: 'The primary target cannot dodge Audacious Charge\'s effects.\nThe target will always emit the area of effect from their position.\nAudacious Charge has a  forgiveness radius of 200 units.',
      resource: 'Mana',
      speed: '2500',
      spellEffects: 'Area of effect',
      spellshieldable: 'True',
      targeting: 'Unit',
      targetRange: '650 / 1100',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Xin Zhao dashes to the target enemy\'s location, dealing magic damage to them and nearby enemies and slowing all targets hit by 30% for 0.5 seconds. Audacious Charge\'s range is increased against Challenged targets.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '50 / 75 / 100 / 125 / 150'
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
          description: 'Xin Zhao then gains bonus attack speed for 5 seconds.',
          leveling: [
            {
              attribute: 'Bonus Attack Speed',
              modifiers: [
                {
                  unit: '%',
                  values: '40 / 45 / 50 / 55 / 60'
                }
              ]
            }
          ]
        },
        {
          description: 'Three Talon Strike and Crescent Guard can be cast during the dash.'
        }
      ]
    },
    {
      key: 'R',
      name: 'Crescent Guard',
      affects: 'Enemies',
      blurb: 'Passive - Challenge: The last enemy champion hit by  Xin Zhao\'s  basic attacks or  Audacious Charge is marked Challenged for a short time.',
      castTime: '0.35',
      cooldown: '120 / 110 / 100',
      cost: '100',
      damageType: 'Physical damage',
      effectRadius: '500 / 450',
      icon: 'https://cdn.communitydragon.org/latest/champion/XinZhao/ability-icon/r',
      notes: 'Pets,  traps,  ground  AoEs,  DoTs, and delayed-damage abilities (e.g.  Death Mark,  Explosive Charge,  Hemoplague) will not damage Xin Zhao if the enemy champion source is outside the circle when the damage applies.\nThis ability will cast from wherever the caster is at the end of the cast time.\n Displacement immunity will also resist the application of the  stun.',
      projectile: 'FALSE',
      resource: 'Mana',
      spellEffects: 'spellaoe',
      spellshieldable: 'True',
      targeting: 'Auto',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Xin Zhao\'s basic attacks and Audacious Charge apply the Challenged mark to enemy champions hit, with the latter applying the mark to the farthest champion hit in the area of effect or the primary target if they are a champion.</p>'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Xin Zhao sweeps his spear around him, dealing physical damage to nearby enemies, capped at 600 against minions and monsters, and knocking back all targets hit that are not Challenged up-to 700 units over 0.75 seconds, as well as stunning them for the same duration.</p>',
          leveling: [
            {
              attribute: 'Physical Damage',
              modifiers: [
                {
                  values: '75 / 175 / 275'
                },
                {
                  unit: '% bonus AD',
                  values: '100'
                },
                {
                  unit: '% AP',
                  values: '110'
                },
                {
                  unit: '% of target\'s current health',
                  values: '15'
                }
              ]
            }
          ]
        },
        {
          description: 'For the next 4 seconds, Xin Zhao is invulnerable against enemy champions far away from him.'
        }
      ]
    }
  ],
  attributeRatings: {
    abilityReliance: 35,
    control: 2,
    damage: 2,
    difficulty: 1,
    mobility: 2,
    toughness: 2,
    utility: 1
  },
  positions: [
    'Jungle'
  ],
  price: {
    blueEssence: 675,
    rp: 585
  },
  roles: [
    'Diver',
    'Fighter',
    'Tank'
  ],
  stats: {
    armor: 35,
    attackDamage: 63,
    attackRange: 175,
    attackSpeed: 0.6,
    hp: 620,
    hpRegen: 8,
    magicResist: 32,
    movespeed: 345,
    mp: 274,
    mpRegen: 7.3
  },
  statsPerLevel: {
    armor: 4.4,
    attackDamage: 3,
    attackSpeed: 3.5,
    hp: 106,
    hpRegen: 0.7,
    magicResist: 2.1,
    mp: 55,
    mpRegen: 0.5
  }
}
export default champion