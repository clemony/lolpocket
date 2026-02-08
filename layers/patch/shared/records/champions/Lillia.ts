// Updated Patch 16.1 - 01/29/2026 04:26:50 PM CST
import type { Champion } from '#shared/types'

const champion: Champion = {
  id: 876,
  key: 'Lillia',
  name: 'Lillia',
  title: 'The Bashful Bloom',
  adaptiveType: 'Magic damage',
  attackType: 'Melee',
  patchLastChanged: '25.23',
  releaseDate: '2020-07-22',
  resource: 'Mana',
  abilities: [
    {
      key: 'P',
      name: 'Dream-Laden Bough',
      affects: 'Enemies',
      blurb: 'Innate:  Lillia\'s abilities apply Dream Dust to enemies hit, which continually deals magic damage based on the target\'s maximum health over a short time, and  heals her for the same duration.',
      damageType: 'Magic damage',
      icon: 'https://cdn.communitydragon.org/latest/champion/Lillia/ability-icon/p',
      notes: 'Lilting Lullaby\'s application does not apply Dream Dust, but its triggering damage does.\nDream Dust is applied even if the target takes no damage from an ability, e.g. by being  shielded or  invulnerable, but not when the ability hit is prevented in the first place (e.g.  spell shield).',
      spellEffects: 'dot',
      spellshieldable: 'true',
      targeting: 'Passive',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Lillia\'s abilities apply Dream Dust to enemies hit, which deals[ 5% (+ 1.25% per 100 AP) of the target\'s maximum health total magic damage over 3 seconds, capped at 65 against monsters. ][ 0.83% (+ 0.2083% per 100 AP) of the target\'s maximum health magic damage every 0.5 seconds over 3 seconds, capped at 10.83 per tick against monsters. ]</p>'
        },
        {
          description: 'Lillia heals herself for[ 39 (+ 15% AP) against large monsters and 6 - 90 (based on level) (+ 30% AP) against champions ][ 6.5 (+ 2.5% AP) against large monsters and 1 - 15 (based on level) (+ 5% AP) against champions every 0.5 seconds ]over the duration of Dream Dust, reduced to 15% effectiveness for each target afflicted beyond the first. She may only heal against 1 monster at a time.'
        }
      ]
    },
    {
      key: 'Q',
      name: 'Blooming Blows',
      affects: 'Self, Enemies',
      blurb: 'Passive: Whenever  Lillia\'s  abilities hit at least one enemy, she generates a  stack of Prance, up to a cap.',
      castTime: '0.25',
      cooldown: '6 / 5.5 / 5 / 4.5 / 4',
      cost: '65',
      damageType: 'Other damage',
      effectRadius: '225 / 485',
      icon: 'https://cdn.communitydragon.org/latest/champion/Lillia/ability-icon/q',
      notes: 'Spell shield will not prevent Lillia from gaining a Prance stack.\nFor the purpose of aim-assist, Lillia\'s  attack range is reduced[ to 275 ][ by 50 ]during Blooming Blows\'s cast time.',
      resource: 'Mana',
      spellEffects: 'aoe',
      spellshieldable: 'true',
      targeting: 'Auto',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Whenever Lillia\'s abilities hit at least one enemy, she generates a stack of Prance for 6.5 seconds, refreshing on subsequent hits and stacking up to 4 times. Stacks expire one by one every 1.5 seconds when the duration ends.</p>'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Prance:</span> For each stack, Lillia gains bonus movement speed.</p>',
          leveling: [
            {
              attribute: 'Bonus Movement Speed per Stack',
              modifiers: [
                {
                  unit: '%',
                  values: '3 / 4 / 5 / 6 / 7'
                },
                {
                  unit: '% per 100 AP',
                  values: '3'
                }
              ]
            },
            {
              attribute: 'Maximum Bonus Movement Speed',
              modifiers: [
                {
                  unit: '%',
                  values: '12 / 16 / 20 / 24 / 28'
                },
                {
                  unit: '% per 100 AP',
                  values: '12'
                }
              ]
            }
          ]
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Lillia swings her censer around her, dealing magic damage to nearby enemies. Enemies hit within the outer edge of the area additionally take the same amount as bonus true damage.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '35 / 45 / 55 / 65 / 75'
                },
                {
                  unit: '% AP',
                  values: '35'
                }
              ]
            },
            {
              attribute: 'Total Mixed Damage',
              modifiers: [
                {
                  values: '70 / 90 / 110 / 130 / 150'
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
          description: 'Lillia can move during Blooming Blows\' cast time.'
        }
      ]
    },
    {
      key: 'W',
      name: 'Watch Out! Eep!',
      affects: 'Enemies',
      blurb: 'Active:  Lillia  dashes toward the target area and smashes her censer, dealing magic damage to enemies hit. Enemies hit within the epicenter are dealt  increased damage.',
      castTime: 'None',
      cooldown: '14 / 13 / 12 / 11 / 10',
      cost: '50',
      damageType: 'Magic damage',
      effectRadius: '65 /  250',
      icon: 'https://cdn.communitydragon.org/latest/champion/Lillia/ability-icon/w',
      notes: 'Lillia dashes to her target location over 0.6 to 0.767 seconds, but cannot move before the strike goes off at 0.767 seconds, regardless.\nLillia can hop over the edges of certain walls despite the ability being unable to traverse terrain.',
      resource: 'Mana',
      spellEffects: 'aoe',
      spellshieldable: 'true',
      targeting: 'Location',
      targetRange: '500 / 350',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Lillia dashes to 150 units in front of the target location over 0.759 seconds, though not through terrain, and deals magic damage in an area around the target spot. Enemies hit within the epicenter are dealt 200% increased damage.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '80 / 100 / 120 / 140 / 160'
                },
                {
                  unit: '% AP',
                  values: '35'
                }
              ]
            },
            {
              attribute: 'Increased Damage',
              modifiers: [
                {
                  values: '240 / 300 / 360 / 420 / 480'
                },
                {
                  unit: '% AP',
                  values: '105'
                }
              ]
            }
          ]
        },
        {
          description: 'Watch Out! Eep! deals 50% damage to minions.',
          leveling: [
            {
              attribute: 'Minion Damage',
              modifiers: [
                {
                  values: '40 / 50 / 60 / 70 / 80'
                },
                {
                  unit: '% AP',
                  values: '17.5'
                }
              ]
            },
            {
              attribute: 'Increased Minion Damage',
              modifiers: [
                {
                  values: '120 / 150 / 180 / 210 / 240'
                },
                {
                  unit: '% AP',
                  values: '52.5'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      key: 'E',
      name: 'Swirlseed',
      width: '120',
      affects: 'Enemies',
      blurb: 'Active:  Lillia lobs a seed at the target area that rolls forward indefinitely. The seed detonates upon hitting an enemy or terrain, dealing magic damage to enemies in a cone,  slowing and  revealing them for a short time.',
      castTime: '0.4',
      cooldown: '12',
      cost: '70',
      damageType: 'Magic damage',
      effectRadius: '150',
      icon: 'https://cdn.communitydragon.org/latest/champion/Lillia/ability-icon/e',
      notes: 'Swirlseed\'s origin is determined from Lillia\'s position at the start of cast, the rolling direction is determined from Lillia\'s position at the end of cast (when the projectile is created, not when the seed starts rolling).\n Spell shield does not prevent the seed from detonating thus striking nearby targets.\n Projectile destroying effects will still make the rolling seed detonate upon colliding with them, but not when the initial arcing missile is destroyed.\nIf  Braum\'s  Unbreakable blocks the initial projectile, it is destroyed and deals 0 damage to him, as well as not triggering the cone-shaped area of effect.\nThe spot at which the seed will collide with terrain is highlighted while it is rolling.\nCollision indicator',
      projectile: 'SPECIAL',
      resource: 'Mana',
      speed: '5000 / 1400',
      spellEffects: 'aoe',
      spellshieldable: 'special',
      targeting: 'Location',
      targetRange: '700 / Global',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Lillia lobs a seed at the target location that rolls forward indefinitely. The seed detonates upon hitting an enemy or terrain while on the ground, dealing magic damage to enemies in a cone, slowing them by 40% for 3 seconds and revealing them for 2 seconds.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '60 / 85 / 110 / 135 / 160'
                },
                {
                  unit: '% AP',
                  values: '50'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      key: 'R',
      name: 'Lilting Lullaby',
      affects: 'Enemies',
      blurb: 'Active:  Lillia casts a magical lullaby over all enemy  champions affected by  Dream Dust, making them  drowsy before falling  asleep for a few seconds.',
      castTime: '0.4',
      cooldown: '140 / 120 / 100',
      cost: '50',
      damageType: 'Magic damage',
      icon: 'https://cdn.communitydragon.org/latest/champion/Lillia/ability-icon/r',
      notes: 'Spell shield will not prevent falling  asleep nor block the wake-up damage.\nThe lullaby\'s  drowsy application will be blocked.\nThe additional magic damage dealt is accredited to Lillia and benefits from her  magic penetration.\nLilting Lullaby\'s missile will not hit a target that becomes  untargetable during the cast time or while it is travelling, or is in another realm.\nLilting Lullaby\'s application does not trigger aggro from  turrets, only its triggering damage does.\n Dream Dust\'s persistent damage will still cause Lillia to trigger turret aggro, unless she casts Lilting Lullaby right before it runs out.\n Dream Dust will mark targets if Lilting Lullaby is learned.',
      projectile: 'TRUE',
      resource: 'Mana',
      spellEffects: 'spell',
      spellshieldable: 'special',
      targeting: 'Auto',
      targetRange: 'Global',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Lillia casts a magical lullaby over all enemy champions affected by Dream Dust, which arrives after 0.3 seconds and renders them drowsy for 1.5 seconds, slowing them by 10%. After the duration, they fall asleep for 2 seconds.</p>'
        },
        {
          description: 'The next instance of non- persistent damage that a sleeping target takes from champions, large monsters or turrets consumes the debuff to deal additional magic damage.',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '150 / 200 / 250'
                },
                {
                  unit: '% AP',
                  values: '45'
                }
              ]
            }
          ]
        },
        {
          description: 'An enemy champion affected by Dream Dust is required to cast this ability. Lillia can move during Lilting Lullaby\'s cast time.'
        }
      ]
    }
  ],
  attributeRatings: {
    abilityReliance: 80,
    control: 2,
    damage: 3,
    difficulty: 2,
    mobility: 2,
    toughness: 1,
    utility: 2
  },
  positions: [
    'Jungle'
  ],
  price: {
    blueEssence: 2400,
    rp: 880
  },
  roles: [
    'Fighter',
    'Mage',
    'Skirmisher'
  ],
  stats: {
    armor: 22,
    attackDamage: 61,
    attackRange: 325,
    attackSpeed: 0.6,
    hp: 605,
    hpRegen: 2.5,
    magicResist: 32,
    movespeed: 330,
    mp: 410,
    mpRegen: 11.5
  },
  statsPerLevel: {
    armor: 4.5,
    attackDamage: 3.1,
    attackSpeed: 2.7,
    hp: 105,
    hpRegen: 0.6,
    magicResist: 1.6,
    mp: 50,
    mpRegen: 1
  }
}
export default champion