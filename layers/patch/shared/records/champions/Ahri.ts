// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Champion } from '#shared/types'

const champion: Champion = {
  id: 103,
  key: 'Ahri',
  name: 'Ahri',
  title: 'The Nine-Tailed Fox',
  adaptiveType: 'Magic damage',
  attackType: 'Ranged',
  patchLastChanged: '25.24',
  releaseDate: '2011-12-14',
  resource: 'Mana',
  abilities: [
    {
      key: 'P',
      name: 'Essence Theft',
      affects: 'Self',
      blurb: 'Innate:  Ahri generates a  stack of Essence Fragment from killing  minions and  monsters. At max stacks, she consumes them to  heal herself.',
      icon: 'https://cdn.communitydragon.org/latest/champion/Ahri/ability-icon/p',
      notes: 'No additional details.',
      targeting: 'Passive',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Ahri generates a stack of Essence Fragment whenever she kills a minion or monster. At 9 stacks, she consumes them to heal herself for 35 - 95 (based on level) (+ 20% AP).</p>'
        },
        {
          description: 'Additionally, whenever Ahri scores a champion takedown within 3 seconds of damaging them, she brings their essence to her to consume it to heal herself for 75 - 165 (based on level) (+ 30% AP).'
        }
      ]
    },
    {
      key: 'Q',
      name: 'Orb of Deception',
      width: '200',
      affects: 'Enemies',
      blurb: 'Active:  Ahri sends out her orb, dealing magic damage to enemies it passes through. After a point, the orb travels back to her, dealing the same amount in true damage to enemies it passes through.',
      castTime: '0.25',
      cooldown: '7',
      cost: '55 / 65 / 75 / 85 / 95',
      damageType: 'Other damage',
      effectRadius: '100',
      icon: 'https://cdn.communitydragon.org/latest/champion/Ahri/ability-icon/q',
      notes: 'Orb of Deception will hit additional units around the return point in a small circle when the orb turns around.\nThis applies both to the initial and return missile\'s damage, but the initial missile only deals damage if the unit was not hit by it already.\nEach pass of the projectile can only damage an enemy once.\nIf Ahri dies while the orb is out, the orb will visually disappear but continue to deal damage and return to Ahri.(bug)\nThis ability will cast from wherever the caster is at the end of the cast time.\nThis ability\'s damage is calculated based on the caster\'s current stats and changes dynamically.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '1550 / 60 - 2600',
      spellEffects: 'Area of effect',
      spellshieldable: 'Special',
      targeting: 'Direction',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Ahri sends her orb in the target direction that deals magic damage to enemies it passes through. Upon reaching maximum range, it returns to her to deal the same amount in true damage to enemies it passes through.</p>',
          leveling: [
            {
              attribute: 'Damage Per Pass',
              modifiers: [
                {
                  values: '40 / 65 / 90 / 115 / 140'
                },
                {
                  unit: '% AP',
                  values: '50'
                }
              ]
            },
            {
              attribute: 'Total Mixed Damage',
              modifiers: [
                {
                  values: '80 / 130 / 180 / 230 / 280'
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
          description: 'Enemies can be hit only once per pass.'
        }
      ]
    },
    {
      key: 'W',
      name: 'Fox-Fire',
      affects: 'Enemies',
      blurb: 'Active:  Ahri gains a burst of  move speed and conjures three fox-fires that orbit her for a short time. Fox-fires home onto nearby enemies, dealing magic damage.',
      castTime: 'none',
      cooldown: '10 / 9 / 8 / 7 / 6',
      cost: '30',
      damageType: 'Magic damage',
      effectRadius: '150 / 550 / 725',
      icon: 'https://cdn.communitydragon.org/latest/champion/Ahri/ability-icon/w',
      notes: 'Each missile of Fox-Fire has its own shorter non-priority range.\nAny unused Fox-Fires will fizzle upon death.\nThis ability\'s damage is calculated based on the caster\'s current stats and changes dynamically.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '75.92° per second / 1400',
      spellEffects: 'Single target',
      spellshieldable: 'True',
      targeting: 'Auto',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Ahri gains 40% bonus movement speed that decays over 2 seconds and conjures three flames which orbit her clockwise for up to 2.5 seconds.</p>'
        },
        {
          description: 'After 0.25 seconds of the cast, each flame targets a visible enemy based on priority, or after 0.4 seconds, simply targets the closest visible enemy in range. Each flame deals magic damage, with subsequent flames against a target dealing 40% damage.',
          leveling: [
            {
              attribute: 'Primary Magic Damage',
              modifiers: [
                {
                  values: '40 / 60 / 80 / 100 / 120'
                },
                {
                  unit: '% AP',
                  values: '40'
                }
              ]
            },
            {
              attribute: 'Subsequent Magic Damage',
              modifiers: [
                {
                  values: '16 / 24 / 32 / 40 / 48'
                },
                {
                  unit: '% AP',
                  values: '16'
                }
              ]
            },
            {
              attribute: 'Total Single-Target Damage',
              modifiers: [
                {
                  values: '72 / 108 / 144 / 180 / 216'
                },
                {
                  unit: '% AP',
                  values: '72'
                }
              ]
            }
          ]
        },
        {
          description: 'Flames prioritize enemy champions hit by Charm, then enemy champions, then minions that would die to Fox-Fire\'s damage, and then the target of Ahri\'s last basic attack within 3 seconds.'
        },
        {
          description: 'Fox-Fire\'s damage is doubled against minions below 20% maximum health.',
          leveling: [
            {
              attribute: 'Primary Minion Damage',
              modifiers: [
                {
                  values: '80 / 120 / 160 / 200 / 240'
                },
                {
                  unit: '% AP',
                  values: '80'
                }
              ]
            },
            {
              attribute: 'Subsequent Minion Damage',
              modifiers: [
                {
                  values: '32 / 48 / 64 / 80 / 96'
                },
                {
                  unit: '% AP',
                  values: '32'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      key: 'E',
      name: 'Charm',
      width: '120',
      affects: 'Enemies',
      blurb: 'Active:  Ahri blows forth a kiss that  charms the first enemy hit, dealing magic damage and  knocking them down.',
      castTime: '0.25',
      cooldown: '12',
      cost: '60',
      damageType: 'Magic damage',
      icon: 'https://cdn.communitydragon.org/latest/champion/Ahri/ability-icon/e',
      notes: 'Charm is able to  slow targets otherwise  immune to slows upon  charming them.(bug)\nThis ability\'s damage is calculated based on the caster\'s stats at the time of its application.\nThis ability will cast from wherever the caster is at the end of the cast time.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '1550',
      spellEffects: 'spell',
      spellshieldable: 'True',
      targeting: 'Direction',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Ahri blows forth a kiss in the target direction that deals magic damage to the first enemy hit, knocking them down and charming and slowing them by 65% for a duration.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '80 / 120 / 160 / 200 / 240'
                },
                {
                  unit: '% AP',
                  values: '85'
                }
              ]
            },
            {
              attribute: 'Disable Duration',
              modifiers: [
                {
                  unit: ' seconds',
                  values: '1.2 / 1.35 / 1.5 / 1.65 / 1.8'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      key: 'R',
      name: 'Spirit Rush',
      affects: 'Enemies',
      blurb: 'Active:  Ahri  dashes forward and fires essence bolts to nearby enemies, dealing magic damage.',
      castTime: 'none',
      cooldown: '140 / 120 / 100',
      cost: '100',
      damageType: 'Magic damage',
      effectRadius: '600',
      icon: 'https://cdn.communitydragon.org/latest/champion/Ahri/ability-icon/r',
      notes: 'This ability always employs Quick cast.\nEach cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nSpirit Rush uses quick cast by default.\nThere\'s a slight delay before a champion gains vision of the fog of war once inside it. Because of this, if Ahri dashes into it, it is possible that Spirit Rush will not target any enemy in range.\nThe bolts do not fire if Ahri dies while  dashing, unless she was saved by  resurrection.\nThe bolts will fire if the dash is  interrupted by other means.\nThis ability\'s damage is calculated based on the caster\'s current stats and changes dynamically.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '1200 + 100% movement speed / 1400',
      spellEffects: 'aoe',
      spellshieldable: 'True',
      targeting: 'Location',
      targetRange: '500',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Ahri dashes to the target location and then fires essence bolts to up to 3 nearby visible enemies, each dealing magic damage. Spirit Rush can be recast twice more within 15 seconds of the activation at no additional cost, with a 1-second static cooldown between casts. Consuming a champion\'s essence with Essence Theft while Spirit Rush is active extends the recast duration by and up to 10 seconds, and grants an additional recast, storing up to 3 recasts at a time.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '75 / 125 / 175'
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
          description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Ahri mimics the first cast\'s effects.</p>'
        },
        {
          description: 'Spirit Rush\'s recast duration will persist even after using all recasts. Fox-Fire can be cast during the dash.'
        }
      ]
    }
  ],
  attributeRatings: {
    abilityReliance: 100,
    control: 2,
    damage: 3,
    difficulty: 2,
    mobility: 3,
    toughness: 1,
    utility: 1
  },
  positions: [
    'Middle'
  ],
  price: {
    blueEssence: 1575,
    rp: 790
  },
  roles: [
    'Assassin',
    'Burst',
    'Mage'
  ],
  stats: {
    armor: 21,
    attackDamage: 53,
    attackRange: 550,
    attackSpeed: 0.7,
    hp: 590,
    hpRegen: 2.5,
    magicResist: 30,
    movespeed: 330,
    mp: 418,
    mpRegen: 8
  },
  statsPerLevel: {
    armor: 4.2,
    attackDamage: 3,
    attackSpeed: 2.2,
    hp: 104,
    hpRegen: 0.6,
    magicResist: 1.3,
    mp: 25,
    mpRegen: 0.8
  }
}
export default champion