// Updated Patch 25.19 - 10/07/2025 08:16:12 AM CDT

const champion: Champion = {
  id: 81,
  key: 'Ezreal',
  name: 'Ezreal',
  title: 'the Prodigal Explorer',
  abilities: [
    {
      key: 'P',
      name: 'Rising Spell Force',
      affects: 'Self',
      blurb: 'Innate:  Ezreal\'s abilities generate  stacks of Rising Spell Force for each enemy hit, up to a cap.',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Ezreal generates a stack of Rising Spell Force for each enemy hit by his abilities, lasting for 6 seconds, refreshing on subsequent hits, and stacking up to 5 times.</p>'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Rising Spell Force:</span> For each stack, Ezreal gains 10% bonus attack speed, up to a maximum of 50%.</p>'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Ezreal/ability-icon/p',
      notes: 'Rising Spell Force will stack even if the abilities hit were blocked by  spell shields.',
      targeting: 'Passive'
    },
    {
      key: 'Q',
      name: 'Mystic Shot',
      width: '120',
      affects: 'Enemies',
      blurb: 'Active:  Ezreal fires a bolt of energy that deals physical damage to the first enemy hit.',
      castTime: '0.25',
      cooldown: '5.5 / 5.25 / 5 / 4.75 / 4.5',
      cost: '28 / 31 / 34 / 37 / 40',
      damageType: 'Physical damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Ezreal fires a bolt of energy in the target direction that deals physical damage to the first enemy hit, applying on-hit effects and triggering on-attack effects.</p>',
          leveling: [
            {
              attribute: 'Physical Damage',
              modifiers: [
                {
                  values: '20 / 45 / 70 / 95 / 120'
                },
                {
                  unit: '% AD',
                  values: '130'
                },
                {
                  unit: '% AP',
                  values: '15'
                }
              ]
            }
          ]
        },
        {
          description: 'If Mystic Shot successfully hits an enemy, the current cooldowns of Ezreal\'s abilities, including Mystic Shot\'s, are reduced by 1.5 seconds.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Ezreal/ability-icon/q',
      maxCharges: -1,
      notes: 'Mystic Shot deals  basic damage, but also triggers spell effects by also being tagged as  spell damage.\nMystic Shot benefits from life steal, omnivamp, and physical vamp, but not spell vamp.\nEven if the ability is blocked by  spell shield it will still trigger the cooldown reduction.\nThis ability will cast from wherever the caster is at the end of the cast time.\nMystic Shot will be buffered and cast when the cooldown ends if the player attempts to cast it within 0.05 seconds of the cooldown ending.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '2000',
      spellEffects: 'special',
      spellshieldable: 'special',
      targeting: 'Direction',
      targetRange: '1200'
    },
    {
      key: 'W',
      name: 'Essence Flux',
      width: '160',
      affects: 'Enemies',
      blurb: 'Active:  Ezreal fires an orb that shortly marks the first enemy  champion, epic  monster, or  structure hit.',
      castTime: '0.25',
      cooldown: '8',
      cost: '50',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Ezreal fires an orb in the target direction that marks the first enemy champion, epic monster, or structure hit for 4 seconds.</p>'
        },
        {
          description: 'His next basic attack or ability against the target detonates the mark to deal them bonus magic damage.',
          leveling: [
            {
              attribute: 'Bonus Magic Damage',
              modifiers: [
                {
                  values: '80 / 135 / 190 / 245 / 300'
                },
                {
                  unit: '% bonus AD',
                  values: '100'
                },
                {
                  tooltip: 'Scaling per rank:\n70 / 75 / 80 / 85 / 90% AP',
                  unit: '% AP',
                  values: '70 - 90'
                }
              ]
            }
          ]
        },
        {
          description: 'If the mark was detonated with an ability, Ezreal restores 60 mana plus the mana cost of that ability.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Ezreal/ability-icon/w',
      maxCharges: -1,
      notes: 'The application of Essence Flux deals 0  proc damage.\nThis triggers in-combat effects such as drawing turret aggro and drawing monster aggression.\nIt also triggers  Sudden Impact and applies  Elixir of Sorcery.\nIt does not trigger  Cheap Shot, however, as  proc damage doesn\'t trigger  Cheap Shot.\n Block and  Dodge prevents the mark from being triggered by a basic attack.\n Spell shield prevents the mark from being triggered by an ability. If the mark is triggered by a basic attack, spell shield will prevent Essence Flux\'s damage.\nThis ability will cast from wherever the caster is at the end of the cast time.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '1700',
      spellEffects: 'spell',
      spellshieldable: 'Special',
      targeting: 'Direction',
      targetRange: '1200'
    },
    {
      key: 'E',
      name: 'Arcane Shift',
      affects: 'Enemies, Self',
      blurb: 'Active:  Ezreal  blinks to the target location and fires a bolt that strikes the nearest enemy, dealing magic damage.',
      castTime: '0.25',
      cooldown: '26 / 23 / 20 / 17 / 14',
      cost: '70',
      damageType: 'Magic damage',
      effectRadius: '750',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Ezreal blinks from his current location to up to 475 units towards the target location, then fires a homing bolt towards the nearest enemy that deals magic damage and reveals them for 1 second.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '80 / 130 / 180 / 230 / 280'
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
            }
          ]
        },
        {
          description: 'Arcane Shift prioritizes firing at the nearest enemy marked by Essence Flux.'
        },
        {
          description: 'The target does not have to be visible to be hit by this ability.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Ezreal/ability-icon/e',
      maxCharges: -1,
      notes: 'If Ezreal is moved during the cast time, his range to blink will update accordingly. This does not exceed the maximum target range.\nThe target is revealed as soon as Ezreal fires the missile at them.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '2000',
      spellEffects: 'spell',
      spellshieldable: 'True',
      targeting: 'Location',
      targetRange: '475'
    },
    {
      key: 'R',
      name: 'Trueshot Barrage',
      width: '320',
      affects: 'Enemies',
      blurb: 'Active:  Ezreal fires a powerful arc of energy that deals magic damage to enemies hit.',
      castTime: '1',
      cooldown: '120 / 105 / 90',
      cost: '100',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Ezreal fires a powerful arc of energy in the target direction that briefly grants sight of its surroundings and deals magic damage to enemies hit.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '350 / 550 / 750'
                },
                {
                  unit: '% bonus AD',
                  values: '100'
                },
                {
                  unit: '% AP',
                  values: '90'
                }
              ]
            }
          ]
        },
        {
          description: 'Minions and non-epic monsters take 50% reduced damage.',
          leveling: [
            {
              attribute: 'Reduced Damage',
              modifiers: [
                {
                  values: '175 / 275 / 375'
                },
                {
                  unit: '% bonus AD',
                  values: '50'
                },
                {
                  unit: '% AP',
                  values: '45'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Ezreal/ability-icon/r',
      maxCharges: -1,
      notes: 'Trueshot Barrage\'s projectile has an  icon on the mini-map while it is in flight. It can be seen by only Ezreal and his allies.\nThis ability will cast from wherever the caster is at the start of the cast time.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '2000',
      spellEffects: 'spellaoe',
      spellshieldable: 'True',
      targeting: 'Direction',
      targetRange: 'Global'
    }
  ],
  adaptiveType: 'Physical damage',
  attackType: 'Ranged',
  attributeRatings: {
    abilityReliance: 45,
    control: 1,
    damage: 3,
    difficulty: 2,
    mobility: 3,
    toughness: 1,
    utility: 1
  },
  faction: 'piltover',
  lore: 'A dashing adventurer, unknowingly gifted in the magical arts, Ezreal raids long-lost catacombs, tangles with ancient curses, and overcomes seemingly impossible odds with ease. His courage and bravado knowing no bounds, he prefers to improvise his way out of any situation, relying partially on his wits, but mostly on his mystical Shuriman gauntlet, which he uses to unleash devastating arcane blasts. One thing is for sure—whenever Ezreal is around, trouble isn\'t too far behind. Or ahead. Probably everywhere.',
  patchLastChanged: '25.06',
  positions: [
    'Bottom'
  ],
  price: {
    blueEssence: 675,
    rp: 585
  },
  releaseDate: '2010-03-16',
  resource: 'Mana',
  roles: [
    'Mage',
    'Marksman'
  ],
  stats: {
    acquisitionRadius: {
      flat: 550
    },
    armor: {
      flat: 24,
      perLevel: 4.2
    },
    attackCastTime: {
      flat: 0.3
    },
    attackDamage: {
      flat: 60,
      perLevel: 2.75
    },
    attackDelayOffset: {
      flat: -0.112
    },
    attackRange: {
      flat: 550
    },
    attackSpeed: {
      flat: 0.625,
      perLevel: 2.5
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
      flat: 600,
      perLevel: 102
    },
    healthRegen: {
      flat: 4,
      perLevel: 0.65
    },
    magicResistance: {
      flat: 30,
      perLevel: 1.3
    },
    mana: {
      flat: 375,
      perLevel: 70
    },
    manaRegen: {
      flat: 8.5,
      perLevel: 1
    },
    movespeed: {
      flat: 325
    },
    pathingRadius: {
      flat: 35
    },
    selectionRadius: {
      flat: 115
    }
  }
}
export default champion