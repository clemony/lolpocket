// Updated Patch 16.1 - 01/29/2026 04:26:51 PM CST
import type { Champion } from '#shared/types'

const champion: Champion = {
  id: 99,
  key: 'Lux',
  name: 'Lux',
  title: 'The Lady of Luminosity',
  adaptiveType: 'Magic damage',
  attackType: 'Ranged',
  fullName: 'Luxanna Crownguard',
  patchLastChanged: '25.24',
  releaseDate: '2010-10-19',
  resource: 'Mana',
  abilities: [
    {
      key: 'P',
      name: 'Illumination',
      affects: 'Enemies',
      blurb: 'Innate:  Lux\'s abilities apply a mark to enemies hit for a few seconds. Her basic attacks and  Final Spark consume the mark to deal bonus magic damage.',
      damageType: 'Magic damage',
      icon: 'https://cdn.communitydragon.org/latest/champion/Lux/ability-icon/p',
      notes: 'Starting an attack windup against a target with a mark that is about to expire refreshes its duration to 0.25 seconds. Casting  Final Spark refreshes the marks of all marked enemies to 1.25 seconds if they are within 5000 units of the ability\'s casting position and have a mark with a remaining duration of less than 1 second.\n Spell shield prevents  Final Spark from consuming the mark.\nThe on-hit damage from Illumination via basic attack cannot be blocked by spell shield.\nIllumination\'s trigger from a basic attack can be  blocked (bonus damage is negated and the mark will still be consumed).\nPENDING FOR TEST:: Parry interactions ( dodge,  blind).',
      spellEffects: 'Proc',
      spellshieldable: 'special',
      targeting: 'Passive',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Lux\'s abilities apply a mark to enemies hit for 6 seconds, refreshing on subsequent hits. Lux\'s basic attacks and Final Spark consume the mark to deal 30 - 200 (based on level) (+ 35% AP) bonus magic damage.</p>'
        }
      ]
    },
    {
      key: 'Q',
      name: 'Light Binding',
      width: '140',
      affects: 'Enemies',
      blurb: 'Active:  Lux shoots a sphere of light in the target direction that deals magic damage to the first two enemies hit and  roots them for a short time.',
      castTime: '0.25',
      cooldown: '11 / 10.5 / 10 / 9.5 / 9',
      cost: '50',
      damageType: 'Magic damage',
      icon: 'https://cdn.communitydragon.org/latest/champion/Lux/ability-icon/q',
      notes: 'Targets immune to the  root still count towards Light Binding\'s two-target limit.\nThis ability will cast from wherever the caster is at the end of the cast time.\nLight Binding spawns an additional missile at the same location and vector as the main missile. This additional "Dummy" missile has the same visual effects as the main missile and gets destroyed when it hits a single enemy, thereby making the surviving VFX of the single missile weaker in intensity.\nPENDING FOR TEST: This hacky solution also causes Lux Q to count as two skillshots for things such as "skillshots dodged" Eternals.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '1200',
      spellEffects: 'Area of effect',
      spellshieldable: 'True',
      targeting: 'Direction',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Lux shoots a sphere of light in the target direction that deals magic damage to the first two enemies hit and roots them for 2 seconds.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '80 / 120 / 160 / 200 / 240'
                },
                {
                  unit: '% AP',
                  values: '75'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      key: 'W',
      name: 'Prismatic Barrier',
      width: '220',
      affects: 'Allies',
      blurb: 'Active:  Lux throws her wand in the target direction that homes back to her after reaching maximum range.',
      castTime: '0.25',
      cooldown: '14 / 13 / 12 / 11 / 10',
      cost: '60 / 65 / 70 / 75 / 80',
      effectRadius: '110',
      icon: 'https://cdn.communitydragon.org/latest/champion/Lux/ability-icon/w',
      notes: 'Each pass of the wand grants a shield to each target once.\nPrismatic Barrier may only stack up to 2 times. Subsequent instances of passing through the wand have no effect on the shield\'s strength nor duration.\nThe shield will also be granted to allies near the wand\'s return location.\nBoth passes of Prismatic Barrier cannot hit units whose  center is beyond the missile range or behind its origin, even if their  hitbox radius overlaps.\nAt the return location, this behaviour is overridden by an additional center check with the same diameter as the missile width.\nIf Lux  dies before her wand returns it will fizzle upon reaching maximum range.\nThere is an additional circle check at the end of the missile\'s length that allows it to hit the edge of an ally\'s radius. This is intended.\nLux\'s wand decelerates on the way out and accelerates on the way back.\nThis ability will cast from wherever the caster is at the start of the cast time.\nPrismatic Barrier is destroyed by  Wind Wall,  Blade Whirl, and  Rebuttal but not  Unbreakable.',
      projectile: 'SPECIAL',
      resource: 'Mana',
      speed: '2400',
      targeting: 'Direction',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Lux throws her wand in the target direction that homes back to her after reaching maximum range. Allied champions hit by the wand gain a shield for 2.5 seconds, which can stack up to 2 times, stacking with the previous shield and refreshing its duration.</p>',
          leveling: [
            {
              attribute: 'Shield Strength',
              modifiers: [
                {
                  values: '40 / 55 / 70 / 85 / 100'
                },
                {
                  unit: '% AP',
                  values: '40'
                }
              ]
            },
            {
              attribute: 'Maximum Shield',
              modifiers: [
                {
                  values: '80 / 110 / 140 / 170 / 200'
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
          description: 'Lux gains the shield upon throwing and upon retrieving the wand.'
        }
      ]
    },
    {
      key: 'E',
      name: 'Lucent Singularity',
      affects: 'Enemies',
      blurb: 'Active:  Lux sends a lucent singularity to the target location that lasts for a few seconds and slows enemies within.',
      castTime: '0.25',
      cooldown: '10 / 9.5 / 9 / 8.5 / 8',
      cost: '70 / 80 / 90 / 100 / 110',
      damageType: 'Magic damage',
      effectRadius: '310 / 650',
      icon: 'https://cdn.communitydragon.org/latest/champion/Lux/ability-icon/e',
      notes: 'The initial cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nThe manual recast does not.\nLucent Singularity grants  sight while also in flight.\nThe ability will not preserve the caster\'s facing direction when using  Flash and similar effects.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '1200',
      spellEffects: 'Area of effect',
      spellshieldable: 'True',
      targeting: 'Location / Auto',
      targetRange: '1100',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Lux sends a lucent singularity to the target location, remaining there for 5 seconds to grant sight of the area and slow nearby enemies.</p>',
          leveling: [
            {
              attribute: 'Slow',
              modifiers: [
                {
                  unit: '%',
                  values: '25 / 30 / 35 / 40 / 45'
                }
              ]
            }
          ]
        },
        {
          description: 'Lucent Singularity can be recast at any time while it is in flight or within the duration, and does so automatically after the duration.'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Lux detonates the singularity, dealing magic damage to enemies within. If Lucent Singularity was recast while in flight, it will detonate upon arrival.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '65 / 115 / 165 / 215 / 265'
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
          description: 'The slow lingers for 1 second after leaving the area. Enemies hit by Lucent Singularity\'s detonation are also slowed by the same amount for 1 second.'
        }
      ]
    },
    {
      key: 'R',
      name: 'Final Spark',
      width: '200',
      affects: 'Enemies',
      castTime: '1',
      cooldown: '60 / 50 / 40',
      cost: '100',
      damageType: 'Magic damage',
      icon: 'https://cdn.communitydragon.org/latest/champion/Lux/ability-icon/r',
      notes: 'Final Spark grants sight of its surroundings during the cast time and for 0.5 seconds afterwards.\nThis ability will cast from wherever the caster is at the start of the cast time.\nThe ability will not preserve the caster\'s facing direction when using  Flash and similar effects.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Lucent Singularity can only be recast if it is present.  Light Binding and  Prismatic Barrier are disabled.\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection',
      projectile: 'FALSE',
      resource: 'Mana',
      spellEffects: 'Area of effect',
      spellshieldable: 'True',
      targeting: 'Direction',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Lux fires a massive light beam in a line in the target direction that deals magic damage to enemies hit and reveals them for 1.5 seconds, as well as grants sight of the surrounding area.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '300 / 400 / 500'
                },
                {
                  unit: '% AP',
                  values: '120'
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  attributeRatings: {
    abilityReliance: 90,
    control: 2,
    damage: 3,
    difficulty: 1,
    mobility: 1,
    toughness: 1,
    utility: 2
  },
  positions: [
    'Middle',
    'Support'
  ],
  price: {
    blueEssence: 225,
    rp: 260
  },
  roles: [
    'Artillery',
    'Burst',
    'Mage',
    'Support'
  ],
  stats: {
    armor: 21,
    attackDamage: 54,
    attackRange: 550,
    attackSpeed: 0.7,
    hp: 580,
    hpRegen: 5.5,
    magicResist: 30,
    movespeed: 330,
    mp: 480,
    mpRegen: 7
  },
  statsPerLevel: {
    armor: 5.2,
    attackDamage: 3.3,
    attackSpeed: 3,
    hp: 99,
    hpRegen: 0.6,
    magicResist: 1.3,
    mp: 23.5,
    mpRegen: 0.8
  }
}
export default champion