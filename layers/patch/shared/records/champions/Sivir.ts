// Updated Patch 16.1 - 01/29/2026 04:27:09 PM CST
import type { Champion } from '#shared/types'

const champion: Champion = {
  id: 15,
  key: 'Sivir',
  name: 'Sivir',
  title: 'The Battle Mistress',
  adaptiveType: 'Physical damage',
  attackType: 'Ranged',
  patchLastChanged: '25.19',
  releaseDate: '2009-02-21',
  resource: 'Mana',
  abilities: [
    {
      key: 'P',
      name: 'Fleet of Foot',
      affects: 'Self',
      blurb: 'Innate:  Sivir\'s basic attacks and damaging abilities against enemy  champions briefly grant her a burst of  move speed.',
      icon: 'https://cdn.communitydragon.org/latest/champion/Sivir/ability-icon/p',
      notes: 'No additional details.',
      targeting: 'Passive',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Sivir\'s basic attacks and ability hits against enemy champions grant her 55 - 75 (based on level) bonus movement speed decaying over 1.5 seconds, refreshing on subsequent hits.</p>'
        }
      ]
    },
    {
      key: 'Q',
      name: 'Boomerang Blade',
      width: '180 / 200',
      affects: 'Enemies',
      blurb: 'Active:  Sivir hurls her crossblade in the target direction that deals physical damage to enemies hit.',
      castTime: '0.25 : 0.1 (based on bonus attack speed)',
      cooldown: '10 / 9.5 / 9 / 8.5 / 8',
      cost: '55 / 60 / 65 / 70 / 75',
      damageType: 'Physical damage',
      icon: 'https://cdn.communitydragon.org/latest/champion/Sivir/ability-icon/q',
      notes: 'Due to the cast time effectively rounding up to full game ticks, at undesturbed game tick interval times the technical minimum cast time is 0.198 seconds reached at 99.8% bonus attack speed.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe damage reduction per unit hit resets back to full damage upon changing direction.\nBoomerang Blade will still return to Sivir even if she dies before it changes direction.\n Spell shield only blocks one instance of damage.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '1450 / 1200',
      spellEffects: 'AoE',
      spellshieldable: 'Special',
      targeting: 'Direction',
      targetRange: '1250',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Sivir hurls her crossblade in the target direction, dealing physical damage to enemies within its path, increased by 0% - 50% (based on critical strike chance).</p>',
          leveling: [
            {
              attribute: 'Physical Damage',
              modifiers: [
                {
                  values: '60 / 85 / 110 / 135 / 160'
                },
                {
                  unit: '% bonus AD',
                  values: '85'
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
          description: 'Boomerang Blade\'s damage is reduced by 0% - 60% (based on non-champions hit). Upon reaching maximum range, the crossblade returns to her, resetting the damage modifier and dealing the same damage to enemies on its way back.',
          leveling: [
            {
              attribute: 'Minimum Damage',
              modifiers: [
                {
                  values: '24 / 34 / 44 / 54 / 64'
                },
                {
                  unit: '% bonus AD',
                  values: '34'
                },
                {
                  unit: '% AP',
                  values: '24'
                }
              ]
            },
            {
              attribute: 'Total Maximum Champion Damage',
              modifiers: [
                {
                  values: '120 / 170 / 220 / 270 / 320'
                },
                {
                  unit: '% bonus AD',
                  values: '170'
                },
                {
                  unit: '% AP',
                  values: '120'
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
      name: 'Ricochet',
      affects: 'Self',
      blurb: 'Active:  Sivir gains  bonus attack speed for a few seconds. During this time, her basic attacks create projectiles that repeatedly bounce to nearby surrounding enemies, dealing physical damage.',
      castTime: 'none',
      cooldown: '12',
      cost: '60',
      damageType: 'Physical damage',
      effectRadius: '500',
      icon: 'https://cdn.communitydragon.org/latest/champion/Sivir/ability-icon/w',
      notes: 'Ricochet-enhanced basic attacks can bounce from structures onto secondary targets but not from nearby units onto structures.\nPENDING FOR TEST:: Ricochet\'s  interactions with  dodging,  blocking, and  blinding effects.\nRicochet do not apply to additional targets with  Runaan\'s Hurricane.\nSivir\'s attack timer will only reset from casting Ricochet if the ability\'s buff was not already active on her. Refreshing the buff will not grant an attack reset.(bug)',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '1750 / 1000',
      spellEffects: 'proc',
      spellshieldable: 'False',
      targeting: 'Auto',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Sivir empowers her crossblade for the next 4 seconds, gaining bonus attack speed and causing her basic attacks to bounce to additional surrounding enemies, dealing physical damage to them. If the triggering attack critically strikes, the bounces will do so as well for (175% + 30%) damage. Ricochet deals 65% damage against minions and executes them if they would be left below 15 health.</p>',
          leveling: [
            {
              attribute: 'Bonus Attack Speed',
              modifiers: [
                {
                  unit: '%',
                  values: '20 / 25 / 30 / 35 / 40'
                }
              ]
            },
            {
              attribute: 'Bounce Damage',
              modifiers: [
                {
                  unit: '% AD',
                  values: '40 / 42.5 / 45 / 47.5 / 50'
                }
              ]
            },
            {
              attribute: 'Bounce Critical Damage',
              modifiers: [
                {
                  unit: '% AD',
                  values: '70 / 74.38 / 78.75 / 83.13 / 87.5'
                }
              ]
            },
            {
              attribute: 'Minion Bounce Damage',
              modifiers: [
                {
                  unit: '% AD',
                  values: '26 / 27.63 / 29.25 / 30.88 / 32.5'
                }
              ]
            },
            {
              attribute: 'Minion Bounce Critical Damage',
              modifiers: [
                {
                  unit: '% AD',
                  values: '45.5 / 48.34 / 51.19 / 54.03 / 56.88'
                }
              ]
            }
          ]
        },
        {
          description: 'Bounces occur only up to 8 times and can target each enemy up to one additional time per empowered attack. They prioritize the nearest new target, then the nearest target if no new targets are available.'
        },
        {
          description: 'Ricochet resets Sivir\'s basic attack timer if it was not already active. The target does not have to be visible to be bounced to.'
        }
      ]
    },
    {
      key: 'E',
      name: 'Spell Shield',
      affects: 'Self',
      blurb: 'Active:  Sivir briefly gains a  spell shield.',
      castTime: 'none',
      cooldown: '24 / 22.5 / 21 / 19.5 / 18',
      cost: '0',
      icon: 'https://cdn.communitydragon.org/latest/champion/Sivir/ability-icon/e',
      notes: 'Spell Shield will heal and activate  Fleet of Foot if any effect is blocked. This includes effects such as champion abilities, item effects,  Dragon\'s basic attacks, as well as the abilities of  Baron Nashor and  Rift Herald.\nSpell Shield will still block abilities that have already been applied to Sivir if the delayed effects of that ability is area of effect (e.g.  Blaze\'s explosion,  Chum the Waters, and  Time Bomb).',
      targeting: 'Auto',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Sivir gains a spell shield for 1.5 seconds. Upon successfully blocking a hostile effect, she heals herself and activates Fleet of Foot after 0.25 seconds.</p>',
          leveling: [
            {
              attribute: 'Heal',
              modifiers: [
                {
                  unit: '% AD',
                  values: '60 / 65 / 70 / 75 / 80'
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
      name: 'On the Hunt',
      affects: 'Allies',
      blurb: 'Active:  Sivir gains On the Hunt for a period, and creates an aura that grants allied champions On the Hunt for the remaining duration. Sivir can refresh her duration whenever she scores an enemy  takedown within a short time of damaging them.',
      castTime: 'none',
      cooldown: '120 / 100 / 80',
      cost: '100',
      effectRadius: '1000',
      icon: 'https://cdn.communitydragon.org/latest/champion/Sivir/ability-icon/r',
      notes: 'No additional notes.',
      resource: 'Mana',
      targeting: 'Auto',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Sivir gains On the Hunt for a duration and grants it to nearby allied champions for the remaining duration.</p>',
          leveling: [
            {
              attribute: 'Buff Duration',
              modifiers: [
                {
                  unit: ' seconds',
                  values: '8 / 10 / 12'
                }
              ]
            }
          ]
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">On the Hunt:</span> Gain bonus movement speed.</p>',
          leveling: [
            {
              attribute: 'Bonus Movement Speed',
              modifiers: [
                {
                  unit: '%',
                  values: '20 / 25 / 30'
                }
              ]
            }
          ]
        },
        {
          description: 'While active, Sivir\'s basic attacks on-attack reduce her basic abilities\' current cooldowns by 0.5 seconds each.'
        },
        {
          description: 'Sivir can refresh the duration of her On the Hunt buff whenever she scores a takedown against an enemy champion within 3 seconds of damaging them.'
        }
      ]
    }
  ],
  attributeRatings: {
    abilityReliance: 10,
    control: 1,
    damage: 3,
    difficulty: 2,
    mobility: 1,
    toughness: 1,
    utility: 2
  },
  positions: [
    'Bottom'
  ],
  price: {
    blueEssence: 225,
    rp: 260
  },
  roles: [
    'Marksman'
  ],
  stats: {
    armor: 30,
    attackDamage: 60,
    attackRange: 500,
    attackSpeed: 0.6,
    hp: 600,
    hpRegen: 3.3,
    magicResist: 30,
    movespeed: 335,
    mp: 340,
    mpRegen: 6
  },
  statsPerLevel: {
    armor: 4.5,
    attackDamage: 2.5,
    attackSpeed: 2,
    hp: 104,
    hpRegen: 0.6,
    magicResist: 1.3,
    mp: 45,
    mpRegen: 0.8
  }
}
export default champion