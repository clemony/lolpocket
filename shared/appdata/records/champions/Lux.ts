// Updated Patch 25.19 - 10/07/2025 08:16:13 AM CDT

const champion: Champion = {
  id: 99,
  key: 'Lux',
  name: 'Lux',
  title: 'the Lady of Luminosity',
  abilities: [
    {
      key: 'P',
      name: 'Illumination',
      affects: 'Enemies',
      blurb: 'Innate:  Lux\'s abilities apply a mark to enemies hit for a few seconds. Her basic attacks and  Final Spark consume the mark to deal bonus magic damage.',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Lux\'s abilities apply a mark to enemies hit for 6 seconds, refreshing on subsequent hits. Lux\'s basic attacks and Final Spark consume the mark to deal 30 - 200 (based on level) (+ 30% AP) bonus magic damage.</p>'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Lux/ability-icon/p',
      notes: 'Starting an attack windup against a target with a mark that is about to expire refreshes its duration to 0.25 seconds. Casting  Final Spark refreshes the marks of all marked enemies to 1.25 seconds if they are within 5000 units of the ability\'s casting position and have a mark with a remaining duration of less than 1 second.\n Spell shield prevents  Final Spark from consuming the mark.\nThe on-hit damage from Illumination via basic attack cannot be blocked by spell shield.\nIllumination\'s trigger from a basic attack can be  blocked (bonus damage is negated and the mark will still be consumed).\nPENDING FOR TEST:: Parry interactions ( dodge,  blind).',
      spellEffects: 'Proc',
      spellshieldable: 'special',
      targeting: 'Passive'
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
                  values: '65'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Lux/ability-icon/q',
      maxCharges: -1,
      notes: 'Targets immune to the  root still count towards Light Binding\'s two-target limit.\nThis ability will cast from wherever the caster is at the end of the cast time.\nLight Binding spawns an additional missile at the same location and vector as the main missile. This additional "Dummy" missile has the same visual effects as the main missile and gets destroyed when it hits a single enemy, thereby making the surviving VFX of the single missile weaker in intensity.\nPENDING FOR TEST: This hacky solution also causes Lux Q to count as two skillshots for things such as "skillshots dodged" Eternals.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '1200',
      spellEffects: 'Area of effect',
      spellshieldable: 'True',
      targeting: 'Direction'
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
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Lux/ability-icon/w',
      maxCharges: -1,
      notes: 'Each pass of the wand grants a shield to each target once.\nPrismatic Barrier may only stack up to 2 times. Subsequent instances of passing through the wand have no effect on the shield\'s strength nor duration.\nThe shield will also be granted to allies near the wand\'s return location.\nBoth passes of Prismatic Barrier cannot hit units whose  center is beyond the missile range or behind its origin, even if their  hitbox radius overlaps.\nAt the return location, this behaviour is overridden by an additional center check with the same diameter as the missile width.\nIf Lux  dies before her wand returns it will fizzle upon reaching maximum range.\nThere is an additional circle check at the end of the missile\'s length that allows it to hit the edge of an ally\'s radius. This is intended.\nLux\'s wand decelerates on the way out and accelerates on the way back.\nThis ability will cast from wherever the caster is at the start of the cast time.\nPrismatic Barrier is destroyed by  Wind Wall and  Blade Whirl but not  Unbreakable.',
      projectile: 'SPECIAL',
      resource: 'Mana',
      speed: '2400',
      targeting: 'Direction'
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
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Lux/ability-icon/e',
      maxCharges: -1,
      notes: 'The initial cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nThe manual recast does not.\nLucent Singularity grants  sight while also in flight.\nThe ability will not preserve the caster\'s facing direction when using  Flash and similar effects.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '1200',
      spellEffects: 'Area of effect',
      spellshieldable: 'True',
      targeting: 'Location / Auto',
      targetRange: '1100'
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
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Lux/ability-icon/r',
      maxCharges: -1,
      notes: 'Final Spark grants sight of its surroundings during the cast time and for 0.5 seconds afterwards.\nThis ability will cast from wherever the caster is at the start of the cast time.\nThe ability will not preserve the caster\'s facing direction when using  Flash and similar effects.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Lucent Singularity can only be recast if it is present.  Light Binding and  Prismatic Barrier are disabled.\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection',
      projectile: 'FALSE',
      resource: 'Mana',
      spellEffects: 'Area of effect',
      spellshieldable: 'True',
      targeting: 'Direction'
    }
  ],
  adaptiveType: 'Magic damage',
  attackType: 'Ranged',
  attributeRatings: {
    abilityReliance: 90,
    control: 2,
    damage: 3,
    difficulty: 1,
    mobility: 1,
    toughness: 1,
    utility: 2
  },
  faction: 'demacia',
  fullName: 'Luxanna Crownguard',
  lore: 'Luxanna Crownguard hails from Demacia, an insular realm where magical abilities are viewed with fear and suspicion. Able to bend light to her will, she grew up dreading discovery and exile, and was forced to keep her power secret, in order to preserve her family\'s noble status. Nonetheless, Lux\'s optimism and resilience have led her to embrace her unique talents, and she now covertly wields them in service of her homeland.',
  patchLastChanged: '14.10',
  positions: [
    'Middle',
    'Support'
  ],
  price: {
    blueEssence: 225,
    rp: 260
  },
  releaseDate: '2010-10-19',
  resource: 'Mana',
  roles: [
    'Artillery',
    'Burst',
    'Mage',
    'Support'
  ],
  stats: {
    acquisitionRadius: {
      flat: 625
    },
    armor: {
      flat: 21,
      perLevel: 5.2
    },
    attackCastTime: {
      flat: 0.3
    },
    attackDamage: {
      flat: 54,
      perLevel: 3.3
    },
    attackDelayOffset: {
      flat: -0.144
    },
    attackRange: {
      flat: 550
    },
    attackSpeed: {
      flat: 0.669,
      perLevel: 3
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
      flat: 580,
      perLevel: 99
    },
    healthRegen: {
      flat: 5.5,
      perLevel: 0.55
    },
    magicResistance: {
      flat: 30,
      perLevel: 1.3
    },
    mana: {
      flat: 480,
      perLevel: 23.5
    },
    manaRegen: {
      flat: 7,
      perLevel: 0.8
    },
    movespeed: {
      flat: 330
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