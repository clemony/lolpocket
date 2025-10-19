// Updated Patch 25.19 - 10/07/2025 08:16:12 AM CDT

const champion: Champion = {
  id: 31,
  key: 'Chogath',
  name: 'Cho\'Gath',
  title: 'the Terror of the Void',
  abilities: [
    {
      key: 'P',
      name: 'Carnivore',
      affects: 'Self',
      blurb: 'Innate: Whenever  Cho\'Gath kills an enemy, it  heals and restores  mana.',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Whenever Cho\'Gath kills an enemy, it heals for 18 - 52 (based on level) and restores 4.72 - 9.48 (based on level) mana.</p>'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Chogath/ability-icon/p',
      notes: 'Carnivore will also trigger when Cho\'Gath destroys a  turret, but not from other structures.\nCarnivore does not trigger upon destroying  wards and possibly other similar units.',
      targeting: 'Passive'
    },
    {
      key: 'Q',
      name: 'Rupture',
      affects: 'Enemies',
      blurb: 'Active:  Cho\'Gath ruptures the target location, dealing magic damage and  knocking up enemies within,  slowing them upon landing.',
      castTime: '0.5',
      cooldown: '6',
      cost: '50',
      damageType: 'Magic damage',
      effectRadius: '250',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Cho\'Gath ruptures the target location after a 0.627 seconds delay, granting sight of the area before dealing magic damage to enemies within and knocking them up for 1 second, and afterwards slowing them by 60% for 1.5 seconds.</p>',
          leveling: [
            {
              attribute: 'Magic damage',
              modifiers: [
                {
                  values: '80 / 135 / 190 / 245 / 300'
                },
                {
                  unit: '% AP',
                  values: '100'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Chogath/ability-icon/q',
      maxCharges: -1,
      notes: 'The delay before the rupture does not include the cast time.\nThe animation is visible in  brush and in fog of war.\n Cleansing the  airborne will not prevent the  slow.\nThe slow itself can also not be blocked by  spell shield, but will always be prevented if the airborne was.\nThe area will still rupture even if Cho\'Gath dies during the delay.',
      resource: 'Mana',
      spellEffects: 'spellaoe',
      spellshieldable: 'True',
      targeting: 'Location',
      targetRange: '950'
    },
    {
      key: 'W',
      name: 'Feral Scream',
      affects: 'Enemies',
      angle: '60°',
      blurb: 'Active:  Cho\'Gath roars in a cone, dealing magic damage and  silencing enemies hit.',
      castTime: '0.5',
      cooldown: '11 / 10.5 / 10 / 9.5 / 9',
      cost: '70 / 75 / 80 / 85 / 90',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Cho\'Gath roars in a cone in the target direction, dealing magic damage to enemies hit.</p>',
          leveling: [
            {
              attribute: 'Magic damage',
              modifiers: [
                {
                  values: '80 / 130 / 180 / 230 / 280'
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
          description: 'Enemy champions and Rift Scuttlers hit are also silenced for a duration.',
          leveling: [
            {
              attribute: 'Silence Duration',
              modifiers: [
                {
                  unit: ' seconds',
                  values: '1.6 / 1.7 / 1.8 / 1.9 / 2'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Chogath/ability-icon/w',
      maxCharges: -1,
      notes: 'This ability will cast from wherever the caster is at the end of the cast time.\nFeral Scream uses  edge range for enemy targets only; Its range is center-to-edge.',
      projectile: 'FALSE',
      resource: 'Mana',
      spellEffects: 'spellaoe',
      spellshieldable: 'True',
      targeting: 'Direction',
      targetRange: '650'
    },
    {
      key: 'E',
      name: 'Vorpal Spikes',
      width: '340 : 500 (based on bonus size)',
      affects: 'Self / Enemies',
      blurb: 'Active:  Cho\'Gath\'s next few basic attacks launch forth deadly spikes, dealing magic damage to enemies hit based on  Feast stacks and each target\'s maximum health, and  slowing them.',
      castTime: 'none',
      cooldown: '8 / 7 / 6 / 5 / 4',
      cost: '30',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Cho\'Gath empowers its next 3 basic attacks within 6 seconds to gain 50 bonus range and launch a blast of spikes on-attack in the target\'s direction. Enemies struck are dealt magic damage and slowed by an amount that decays over 1.5 seconds. The damage based on the target\'s health ratio is capped at 200 against monsters.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '20 / 40 / 60 / 80 / 100'
                },
                {
                  unit: '% AP',
                  values: '30'
                },
                {
                  tooltip: 'Scaling per rank:\n2.5 / 2.85 / 3.2 / 3.55 / 3.9% (+ 0.5% per Feast stack) of target\'s maximum health',
                  unit: '% (+ 0.5% per Feast stack) of target\'s maximum health',
                  values: '2.5 - 3.9'
                }
              ]
            },
            {
              attribute: 'Total Magic Damage',
              modifiers: [
                {
                  values: '60 / 120 / 180 / 240 / 300'
                },
                {
                  unit: '% AP',
                  values: '90'
                },
                {
                  tooltip: 'Scaling per rank:\n7.5 / 8.55 / 9.6 / 10.65 / 11.7% (+ 1.5% per Feast stack) of target\'s maximum health',
                  unit: '% (+ 1.5% per Feast stack) of target\'s maximum health',
                  values: '7.5 - 11.7'
                }
              ]
            },
            {
              attribute: 'Slow',
              modifiers: [
                {
                  unit: '%',
                  values: '30 / 35 / 40 / 45 / 50'
                }
              ]
            }
          ]
        },
        {
          description: 'The width of the blast of spikes increases based on Cho\'Gath\'s character size modifier when they launch, including but not limited to the bonus from Feast stacks.'
        },
        {
          description: 'Vorpal Spikes resets Cho\'Gath\'s basic attack timer.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Chogath/ability-icon/e',
      maxCharges: -1,
      notes: 'The missiles are launched from an offset 25 units in front of Cho\'Gath and towards the target\'s location on-attack-complete.\nWhen attacking enemies within 25 units center-to-center of Cho\'Gath, the missile will fire in the opposite direction.\nCho\'Gath\'s size factors into the wideness of the hitbox Vorpal Spikes has. External size modifiers ( Wild Growth) contribute to this.\nAt certain size thresholds, the missile gets replaced by a different one with a different width. At each step, the width grows by 30, except for the 3rd missile, where it only grows by 10.(note)\nSome of the size thresholds are placed very weird.(note)\nThe missile range is unchanged.\nThe empowered attack will trigger but not apply its effects against structures.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '1475',
      spellEffects: 'aoe',
      spellshieldable: 'False',
      targeting: 'Auto'
    },
    {
      key: 'R',
      name: 'Feast',
      affects: 'Enemies / Self',
      blurb: 'Active:  Cho\'Gath devours an enemy, dealing true damage based on Cho\'Gath\'s bonus health. If this attack kills the target, Cho\'Gath gains a permanent Feast  stack that infinitely stacks.',
      castTime: '0.25',
      cooldown: '80 / 70 / 60',
      cost: '100',
      damageType: 'True damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Cho\'Gath attempts to eat the target enemy, dealing them true damage. Against non- champions, the base damage is modified.</p>',
          leveling: [
            {
              attribute: 'Champion True Damage',
              modifiers: [
                {
                  values: '300 / 475 / 650'
                },
                {
                  unit: '% AP',
                  values: '50'
                },
                {
                  unit: '% bonus health',
                  values: '10'
                }
              ]
            },
            {
              attribute: 'Non-Champion True Damage',
              modifiers: [
                {
                  values: '1200'
                },
                {
                  unit: '% AP',
                  values: '50'
                },
                {
                  unit: '% bonus health',
                  values: '10'
                }
              ]
            }
          ]
        },
        {
          description: 'If the target is killed, Cho\'Gath gains a stack of Feast. Only 6 stacks can be gained from non-epic monsters or minions.'
        },
        {
          description: 'Each stack of Feast increases the cast range of the ability by 2.5, for a maximum increase of 25 at 10 stacks, and grants Cho\'Gath bonus health as well as bonus attack range and increased size, capping at 75 bonus attack range and 100% increased size.',
          leveling: [
            {
              attribute: 'Bonus Health Per Stack',
              modifiers: [
                {
                  values: '80 / 120 / 160'
                }
              ]
            },
            {
              attribute: 'Bonus Attack Range Per Stack',
              modifiers: [
                {
                  values: '4.7 / 6.2 / 7.7'
                }
              ]
            },
            {
              attribute: 'Bonus Size Per Stack',
              modifiers: [
                {
                  unit: '%',
                  values: '6 / 8 / 10'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Chogath/ability-icon/r',
      maxCharges: -1,
      notes: 'The increased size stacks additively with other size increases.\nThe name of the bonus health buff is "Feast".\nThe bonus attack range and increase size cap at respectively 16.25 / 13.93 / 12.19 / 10.83 / 9.75 and 16.67 / 14.29 / 12.5 / 11.11 / 10 stacks, with the last stack being effective as the decimal part of the value (no decimal meaning 100% as effective).\nEach stack of Feast increases the damage by 8 / 12 / 16.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).\nIf an enemy  champion has health below the amount of true damage Feast deals, they will be marked for execution. This indicator does not consider  shields or  invulnerability.\nConsuming any additional  Voidgrubs from the same spawn group will be tracked as a "monster eaten" for Feast\'s buff, but will neither grant any bonuses nor count towards the 6-stack limit.(bug)\nWhile not on  cooldown, Feast\'s ability icon on the HUD can be pinged to announce its damage to  monsters in the ally chat.\nThis indicator is only visible to Cho\'Gath.',
      resource: 'Mana',
      spellEffects: 'spell',
      spellshieldable: 'True',
      targeting: 'Unit',
      targetRange: '175'
    }
  ],
  adaptiveType: 'Magic damage',
  attackType: 'Melee',
  attributeRatings: {
    abilityReliance: 65,
    control: 2,
    damage: 2,
    difficulty: 1,
    mobility: 1,
    toughness: 3,
    utility: 1
  },
  faction: 'void',
  lore: 'From the moment Cho\'Gath first emerged into the harsh light of Runeterra\'s sun, the beast was driven by the most pure and insatiable hunger. A perfect expression of the Void\'s desire to consume all life, Cho\'Gath\'s complex biology quickly converts matter into new bodily growth—increasing its muscle mass and density, or hardening its outer carapace like organic diamond. When growing larger does not suit the Void-spawn\'s needs, it vomits out the excess material as razor-sharp spines, leaving prey skewered and ready to feast upon later.',
  patchLastChanged: '25.11',
  positions: [
    'Top'
  ],
  price: {
    blueEssence: 675,
    rp: 585
  },
  releaseDate: '2009-06-26',
  resource: 'Mana',
  roles: [
    'Mage',
    'Specialist',
    'Tank'
  ],
  stats: {
    acquisitionRadius: {
      flat: 500
    },
    armor: {
      flat: 38,
      perLevel: 4.5
    },
    attackCastTime: {
      flat: 0.3
    },
    attackDamage: {
      flat: 69,
      perLevel: 4.2
    },
    attackDelayOffset: {
      flat: -0.081
    },
    attackRange: {
      flat: 125
    },
    attackSpeed: {
      flat: 0.658,
      perLevel: 1.44
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
      flat: 80
    },
    health: {
      flat: 644,
      perLevel: 94
    },
    healthRegen: {
      flat: 9,
      perLevel: 0.85
    },
    magicResistance: {
      flat: 32,
      perLevel: 2.05
    },
    mana: {
      flat: 270,
      perLevel: 60
    },
    manaRegen: {
      flat: 7.2,
      perLevel: 0.45
    },
    movespeed: {
      flat: 345
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