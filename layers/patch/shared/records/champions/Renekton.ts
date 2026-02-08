// Updated Patch 16.1 - 01/29/2026 04:27:02 PM CST
import type { Champion } from '#shared/types'

const champion: Champion = {
  id: 58,
  key: 'Renekton',
  name: 'Renekton',
  title: 'The Butcher of the Sands',
  adaptiveType: 'Physical damage',
  attackType: 'Melee',
  patchLastChanged: '25.08',
  releaseDate: '2011-01-18',
  resource: 'Fury',
  abilities: [
    {
      key: 'P',
      name: 'Reign of Anger',
      affects: 'Self',
      blurb: 'Innate:  Renekton\'s  basic attacks  on-hit and  ability hits generate  Fury, which continually expires after a period without fighting. He generates bonus Fury while below half health.',
      icon: 'https://cdn.communitydragon.org/latest/champion/Renekton/ability-icon/p',
      notes: 'Basic attacks against any enemy that is not a structure will generate the Fury.\nRenekton can generate Fury by collecting  Honeyfruit and Health Relics (interacts with Reign of Anger\'s bonus generation).\nPENDING FOR TEST: Fury generation with parrying effects ( blind,  dodge,  block)',
      targeting: 'Passive',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Renekton\'s basic attacks generate 5 Fury on-hit. After 12 seconds of being out of combat and not basic attacking, he loses 1 Fury every 0.25 seconds.Entering combat or using an attack will stop the Fury loss and refresh the timer. Additionally, while Dominus is active, the timer is continuously refreshed.</p>'
        },
        {
          description: 'While Renekton has at least 50 Fury, his next basic ability, excluding Slice, consumes 50 Fury to become empowered with an additional effect. Empowered abilities do not generate Fury.'
        },
        {
          description: 'Renekton generates 50% bonus Fury from all sources while below 50% of his maximum health.'
        }
      ]
    },
    {
      key: 'Q',
      name: 'Cull the Meek',
      affects: 'Enemies / Self',
      blurb: 'Active:  Renekton cleaves around himself, dealing physical damage to nearby enemies. He also generates Fury and  heals for each enemy hit, increased against  champions.',
      castTime: 'none',
      cooldown: '7',
      cost: '0',
      damageType: 'Physical damage',
      effectRadius: '400 / 480',
      icon: 'https://cdn.communitydragon.org/latest/champion/Renekton/ability-icon/q',
      notes: 'Healing modifiers such as  Spirit Visage and  Grievous Wounds take effect after Cull the Meek\'s healing cap.',
      spellEffects: 'spellaoe',
      spellshieldable: 'True',
      targeting: 'Auto',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Renekton cleaves around himself, dealing physical damage to nearby enemies and healing himself for each enemy hit, up to a cap.</p>',
          leveling: [
            {
              attribute: 'Physical Damage',
              modifiers: [
                {
                  values: '60 / 90 / 120 / 150 / 180'
                },
                {
                  unit: '% bonus AD',
                  values: '100'
                }
              ]
            },
            {
              attribute: 'Enhanced Damage',
              modifiers: [
                {
                  values: '90 / 135 / 180 / 225 / 270'
                },
                {
                  unit: '% bonus AD',
                  values: '140'
                }
              ]
            },
            {
              attribute: 'Healing Cap',
              modifiers: [
                {
                  values: '50 / 75 / 100 / 125 / 150'
                }
              ]
            },
            {
              attribute: 'Enhanced Healing Cap',
              modifiers: [
                {
                  values: '200 / 300 / 400 / 500 / 600'
                }
              ]
            },
            {
              attribute: 'Non-Champion Healing',
              modifiers: [
                {
                  values: '2 / 3 / 4 / 5 / 6'
                },
                {
                  unit: '% bonus AD',
                  values: '2'
                }
              ]
            },
            {
              attribute: 'Enhanced Non-Champion Healing',
              modifiers: [
                {
                  values: '6 / 9 / 12 / 15 / 18'
                },
                {
                  unit: '% bonus AD',
                  values: '6'
                }
              ]
            }
          ]
        },
        {
          description: 'Against champions, the healing is increased.',
          leveling: [
            {
              attribute: 'Champion Healing',
              modifiers: [
                {
                  values: '12 / 20 / 28 / 36 / 44'
                },
                {
                  unit: '% bonus AD',
                  values: '17'
                }
              ]
            },
            {
              attribute: 'Enhanced Champion Healing',
              modifiers: [
                {
                  values: '36 / 60 / 84 / 108 / 132'
                },
                {
                  unit: '% bonus AD',
                  values: '51'
                }
              ]
            }
          ]
        },
        {
          description: 'Renekton generates 2.5 Fury for each non-champion hit and 10 Fury for each champion hit, up to 30 total per cast.'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Reign of Anger Bonus:</span> Cull the Meek has increased damage, tripled total healing, and a quadrupled healing cap.</p>'
        },
        {
          description: 'Renekton cannot basic attack nor cast Slice and Dice or Dominus for 0.25 seconds after Cull the Meek\'s activation.'
        }
      ]
    },
    {
      key: 'W',
      name: 'Ruthless Predator',
      affects: 'Enemies / Self',
      blurb: 'Active:  Renekton\'s next basic attack within a few seconds will strike twice, dealing modified physical damage and briefly  stunning the target.',
      castTime: 'none',
      cooldown: '16 / 14 / 12 / 10 / 8',
      cost: '0',
      damageType: 'Physical damage',
      icon: 'https://cdn.communitydragon.org/latest/champion/Renekton/ability-icon/w',
      notes: 'Each strike of Ruthless Predator deals  basic damage, but the first strike also triggers spell effects by also being tagged as  spell damage.\nIf the target becomes  untargetable or  dies during the empowered attack\'s cast time, it is cancelled but not consumed.\nThe empowered attack will not trigger against  structures.\nThe first two attacks of the  empowered version will generate fury.(bug)\nThe third attack will remove any fury gained since the first attack.\nThis includes fury generated via  Dominus.(bug)\nThis will fail to remove fury gained through  Guinsoo\'s Rageblade\'s Phantom Hit which has triggered on the first attack.(bug)\nEven if empowered Ruthless Predator is blocked by a  spell shield, it will still destroy any existing damage  shields on the target.\nRuthless Predator does not cause Renekton to attack twice/thrice. Effects that trigger  on-attack or interact with the attack windup will only trigger once and thus do not interact with Ruthless Predator. (e.g.  Lethal Tempo,  Hail of Blades).',
      spellEffects: 'Special',
      spellshieldable: 'True',
      targeting: 'Auto',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Renekton empowers his next basic attack within 7 seconds to have a 0.2-second cast time, have 175 range and strike the target twice, dealing modified physical damage and stunning them for 0.75 seconds. Each strike applies on-hit effects and generates Fury. Hitting an enemy champion generates 10 bonus Fury.</p>',
          leveling: [
            {
              attribute: 'Total Physical Damage',
              modifiers: [
                {
                  values: '10 / 40 / 70 / 100 / 130'
                },
                {
                  unit: '% AD',
                  values: '150'
                }
              ]
            },
            {
              attribute: 'Physical Damage Per Hit',
              modifiers: [
                {
                  values: '5 / 20 / 35 / 50 / 65'
                },
                {
                  unit: '% AD',
                  values: '75'
                }
              ]
            }
          ]
        },
        {
          description: 'Ruthless Predator\'s first strike can critically strike for (75% + 30%) AD bonus physical damage.'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Reign of Anger Bonus:</span> Renekton instead strikes 3 times, completely destroying damage-mitigating shields on the target upon the first strike if they are not a monster, as well as increasing the stun duration to 1.5 seconds.</p>',
          leveling: [
            {
              attribute: 'Total Physical Damage',
              modifiers: [
                {
                  values: '15 / 60 / 105 / 150 / 195'
                },
                {
                  unit: '% AD',
                  values: '225'
                }
              ]
            }
          ]
        },
        {
          description: 'Ruthless Predator resets Renekton\'s basic attack timer. After Ruthless Predator\'s standard and empowered attack cast time, Renekton cannot move nor cast Cull the Meek or Slice and Dice for 0.528 seconds. Casting Dominus ends this lockout prematurely.'
        }
      ]
    },
    {
      key: 'E',
      name: 'Slice and Dice',
      affects: 'Enemies',
      blurb: 'Active - Slice:  Renekton  dashes in the target direction, dealing physical damage to enemies he passes through.',
      castTime: 'none',
      cooldown: '16 / 14.5 / 13 / 11.5 / 10',
      cost: '0',
      damageType: 'Physical damage',
      icon: 'https://cdn.communitydragon.org/latest/champion/Renekton/ability-icon/e',
      notes: 'No additional details.',
      speed: '760 + 100% movement speed',
      spellEffects: 'spellaoe',
      spellshieldable: 'True',
      targeting: 'Direction',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active - Slice:</span> Renekton dashes a fixed distance in the target direction, dealing physical damage to enemies he passes through.</p>',
          leveling: [
            {
              attribute: 'Physical Damage',
              modifiers: [
                {
                  values: '40 / 70 / 100 / 130 / 160'
                },
                {
                  unit: '% bonus AD',
                  values: '90'
                }
              ]
            }
          ]
        },
        {
          description: 'If Renekton hits an enemy, he can recast Slice and Dice within the next 4 seconds.'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Recast - Dice:</span> Renekton repeats the first cast\'s effects.</p>',
          leveling: [
            {
              attribute: 'Total Physical Damage',
              modifiers: [
                {
                  values: '80 / 140 / 200 / 260 / 320'
                },
                {
                  unit: '% bonus AD',
                  values: '180'
                }
              ]
            }
          ]
        },
        {
          description: 'Both casts generate 2 Fury for each non-champion hit and 10 Fury for each champion hit, up to 30 total per cast.'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Reign of Anger Bonus:</span> Dice, the recast, deals bonus physical damage and inflicts armor reduction to enemies hit for 4 seconds.</p>',
          leveling: [
            {
              attribute: 'Enhanced Physical Damage',
              modifiers: [
                {
                  values: '70 / 115 / 160 / 205 / 250'
                },
                {
                  unit: '% bonus AD',
                  values: '135'
                }
              ]
            },
            {
              attribute: 'Total Enhanced Damage',
              modifiers: [
                {
                  values: '110 / 185 / 260 / 335 / 410'
                },
                {
                  unit: '% bonus AD',
                  values: '225'
                }
              ]
            },
            {
              attribute: 'Armor Reduction',
              modifiers: [
                {
                  unit: '%',
                  values: '25 / 27.5 / 30 / 32.5 / 35'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      key: 'R',
      name: 'Dominus',
      affects: 'Enemies / Self',
      blurb: 'Active:  Renekton empowers himself for some time, gaining Fury,  bonus health, bonus size,  bonus attack range, and increased area on  Cull the Meek.',
      castTime: '0.25',
      cooldown: '120 / 100 / 80',
      cost: '0',
      damageType: 'Magic damage',
      effectRadius: '375',
      icon: 'https://cdn.communitydragon.org/latest/champion/Renekton/ability-icon/r',
      notes: 'Dominus\'  cooldown is not refunded if Renekton  dies during the cast animation.\nDominus\' bonus health gain does not interact with  Spirit Visage or  Grievous Wounds.\nRenekton retains Dominus\' bonus health (if not over his normal maximum) once the duration ends.',
      spellEffects: 'aoedot',
      spellshieldable: 'False',
      targeting: 'Auto',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Renekton empowers himself for 15 seconds, gaining bonus health, 20% increased size, 25 bonus attack range, and 20 Fury, as well as increasing Cull the Meek\'s effect radius.</p>',
          leveling: [
            {
              attribute: 'Bonus Health',
              modifiers: [
                {
                  values: '300 / 500 / 700'
                }
              ]
            }
          ]
        },
        {
          description: 'During this time, he deals magic damage every 0.5 seconds to nearby enemies and generates 5 Fury per second, up to a maximum of 75 Fury.',
          leveling: [
            {
              attribute: 'Magic Damage Per Tick',
              modifiers: [
                {
                  values: '30 / 75 / 120'
                },
                {
                  unit: '% bonus AD',
                  values: '5'
                },
                {
                  unit: '% AP',
                  values: '5'
                }
              ]
            },
            {
              attribute: 'Total Magic Damage',
              modifiers: [
                {
                  values: '900 / 2250 / 3600'
                },
                {
                  unit: '% bonus AD',
                  values: '150'
                },
                {
                  unit: '% AP',
                  values: '150'
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  attributeRatings: {
    abilityReliance: 45,
    control: 2,
    damage: 2,
    difficulty: 1,
    mobility: 2,
    toughness: 2,
    utility: 1
  },
  positions: [
    'Top'
  ],
  price: {
    blueEssence: 2400,
    rp: 880
  },
  roles: [
    'Diver',
    'Fighter',
    'Tank'
  ],
  stats: {
    armor: 35,
    attackDamage: 69,
    attackRange: 125,
    attackSpeed: 0.7,
    hp: 660,
    hpRegen: 8,
    magicResist: 28,
    movespeed: 345,
    mp: 100
  },
  statsPerLevel: {
    armor: 5.2,
    attackDamage: 4.2,
    attackSpeed: 2.8,
    hp: 111,
    hpRegen: 0.8,
    magicResist: 2.1
  }
}
export default champion