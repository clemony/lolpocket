// Updated Patch 25.17 - 09/18/2025 02:20:03 AM CDT

const champion: Champion = {
  id: 96,
  key: 'KogMaw',
  name: 'Kog\'Maw',
  title: 'the Mouth of the Abyss',
  abilities: [
    {
      key: 'P',
      name: 'Icathian Surprise',
      affects: 'Enemies',
      blurb: 'Innate: Upon  dying,  Kog\'Maw enters an  untargetable  zombie state for a few seconds, gradually gaining  bonus movement speed. He explodes at the end of the duration, dealing true damage to nearby enemies.',
      damageType: 'True damage',
      effectRadius: '400',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Upon taking fatal damage, Kog\'Maw enters a zombie state for 4 seconds, becoming ghosted and gaining 10% bonus movement speed that increases up to 50% over the duration. At the end of the duration, he explodes to deal 140 - 650 (based on level) true damage to nearby enemies.</p>'
        },
        {
          description: 'While under this state, Kog\'Maw becomes invulnerable, untargetable, and immune to crowd control, but is also rendered unable to declare basic attacks, cast abilities, use summoner spells, and activate items.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/KogMaw/ability-icon/p',
      notes: 'Icathian Surprise grants 3.125% bonus movement speed every 0.264 seconds over the duration, up to the maximum of 50%. However, as a result of the ticks being rounded up from 0.25 seconds, the movement speed only reaches up to 40.625%.\nIcathian Surprise\'s  untargetability does not  destroy in-flight  projectiles.\nIcathian Surprise will still trigger if Kog\'Maw is killed by the  Nexus Obelisk.\nIf Kog\'Maw has the missile from a basic attack in-flight at the same time that he\'s moving while he dies, as long as the missile hits the target after Icathian Surprise has started, Kog\'Maw will be able to use a basic attack once during Icathian Surprise.\nKog\'Maw\'s usable summoner spells will be placed on a 5 second cooldown upon becoming a zombie.\nDuring Icathian Surprise, Kog\'Maw\'s  attack range is reduced[ to 0 ][ by 500 ], making him automatically path near enemies he is trying to target.\nZombie states trigger upon taking  lethal damage.\n Raw damage effects will not prevent zombie states from triggering.\nAll  resurrection effects will take precedence over effects that reanimate as a zombie.\nA champion that enters a zombie state will start their death timer upon triggering the effect.\nMost buffs and debuffs will be lost upon transitioning into a zombie state.\nThose that persist through death, such as  Brand\'s  Blaze, will remain.\nUndisplayed marker buffs, such as those imposed by  Veigar\'s  Event Horizon and  Viktor\'s  Gravity Field to prevent being affected multiple times by the same effect, will be lost.(bug)\nThis does not apply when transitioning from one zombie state to another zombie state.(bug)\nUnits within a zombie state cannot:\nUse  Recall or  Refillable Potion.\nActivate  resurrection effects.\nTake  Dark Passage, Catapult, or  gates.\nInitate the  Rift Herald Rodeo.\nPick up the  Eye of the Herald.\nBe targeted by the following:\n Bailout\n Chronoshift\n Umbral Trespass.\nBe affected by the following:\n Curse of the Black Mist\n Fear Beyond Death\'s chain missile\n Test of Spirit\'s initial missile\n Lamb\'s Respite\n Realm of Death\nFountain health restore',
      spellEffects: 'Area of effect',
      spellshieldable: 'True',
      targeting: 'Passive'
    },
    {
      key: 'Q',
      name: 'Caustic Spittle',
      width: '140',
      affects: 'Enemies',
      blurb: 'Passive:  Kog\'Maw gains  bonus attack speed.',
      castTime: 'Basic attack timer',
      cooldown: '7',
      cost: '40',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Kog\'Maw gains bonus attack speed.</p>',
          leveling: [
            {
              attribute: 'Bonus Attack Speed',
              modifiers: [
                {
                  unit: '%',
                  values: '10 / 15 / 20 / 25 / 30'
                }
              ]
            }
          ]
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Kog\'Maw ejects a wad of spittle in the target direction that deals magic damage to the first enemy hit and reduces their armor and magic resistance for 4 seconds.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '80 / 125 / 170 / 215 / 260'
                },
                {
                  unit: '% AP',
                  values: '80'
                }
              ]
            },
            {
              attribute: 'Resistances Reduction',
              modifiers: [
                {
                  unit: '%',
                  values: '16 / 20 / 24 / 28 / 32'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/KogMaw/ability-icon/q',
      maxCharges: -1,
      notes: 'This ability will cast from wherever the caster is at the start of the cast time.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '1650',
      spellEffects: 'Single target',
      spellshieldable: 'True',
      targeting: 'Direction'
    },
    {
      key: 'W',
      name: 'Bio-Arcane Barrage',
      blurb: 'Active:  Kog\'Maw empowers his basic attacks for a period, gaining  bonus attack range and dealing bonus magic damage based on the target\'s maximum health.',
      castTime: 'none',
      cooldown: '17',
      cost: '40',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Kog\'Maw empowers his basic attacks for the next 8 seconds to gain bonus attack range and deal bonus magic damage on-hit, capped at 100 against minions and monsters.</p>',
          leveling: [
            {
              attribute: 'Bonus Attack Range',
              modifiers: [
                {
                  values: '130 / 150 / 170 / 190 / 210'
                }
              ]
            },
            {
              attribute: 'Bonus Magic Damage',
              modifiers: [
                {
                  unit: '%  of target\'s maximum health',
                  values: '3 / 3.75 / 4.5 / 5.25 / 6'
                },
                {
                  unit: '% per 100 AP',
                  values: '1'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/KogMaw/ability-icon/w',
      maxCharges: -1,
      notes: 'The attacks do not deal the bonus damage against structures.',
      resource: 'Mana',
      spellEffects: 'Proc',
      spellshieldable: 'false',
      targeting: 'Auto'
    },
    {
      key: 'E',
      name: 'Void Ooze',
      width: '240',
      affects: 'Enemies',
      blurb: 'Active:  Kog\'Maw spews a gob of ooze in the target direction that deals magic damage to enemies hit. It leaves a field of ooze in its wake for a few seconds that  slows enemies.',
      castTime: '0.25',
      cooldown: '12',
      cost: '40 / 55 / 70 / 85 / 100',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Kog\'Maw spews a gob of ooze in the target direction that deals magic damage to enemies hit.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '70 / 110 / 150 / 190 / 230'
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
          description: 'A field of ooze is created in its wake for 3 seconds, slowing enemies every 0.25 seconds.',
          leveling: [
            {
              attribute: 'Slow',
              modifiers: [
                {
                  unit: '%',
                  values: '40 / 45 / 50 / 55 / 60'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/KogMaw/ability-icon/e',
      maxCharges: -1,
      notes: 'This ability will cast from wherever the caster is at the start of the cast time.\nPENDING FOR TEST:: The missile leaves a blob of ooze on the ground every 125 units traveled.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '1400',
      spellEffects: 'Area of effect',
      spellshieldable: 'True',
      targeting: 'Direction'
    },
    {
      key: 'R',
      name: 'Living Artillery',
      affects: 'Enemies',
      blurb: 'Active:  Kog\'Maw spits a globule of acid into the air that drops to the target location, dealing magic damage to enemies hit based on their missing health. The damage is further  doubled against enemies at low health.',
      castTime: '0.25',
      cooldown: '2 / 1.5 / 1',
      cost: '40',
      damageType: 'Magic damage',
      effectRadius: '240',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Kog\'Maw spits a globule of acid into the air that drops to the target location after 0.6 seconds, granting sight of the area before dealing magic damage to enemies hit and revealing them for 2 seconds. Living Artillery\'s damage is increased by 0% - 50% (based on target\'s missing health), or instead by 100% if the target is below 40% maximum health.</p>',
          leveling: [
            {
              attribute: 'Minimum Magic Damage',
              modifiers: [
                {
                  values: '100 / 140 / 180'
                },
                {
                  unit: '% bonus AD',
                  values: '75'
                },
                {
                  unit: '% AP',
                  values: '35'
                }
              ]
            },
            {
              attribute: 'Maximum Magic Damage',
              modifiers: [
                {
                  values: '200 / 280 / 360'
                },
                {
                  unit: '% bonus AD',
                  values: '150'
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
          description: 'Kog\'Maw then gains a stack of Living Artillery for 8 seconds, refreshing on subsequent casts and stacking up to 9 times.'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Living Artillery:</span> For each stack, Living Artillery\'s mana cost is increased by 40.</p>'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/KogMaw/ability-icon/r',
      maxCharges: -1,
      notes: 'Living Artillery will not reveal  stealthed champions.',
      resource: 'Mana',
      spellEffects: 'Area of effect',
      spellshieldable: 'True',
      targeting: 'Location',
      targetRange: '1300 / 1425 / 1550 / 1675 / 1800'
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
  faction: 'void',
  lore: 'Belched forth from a rotting Void incursion deep in the wastelands of Icathia, Kog\'Maw is an inquisitive yet putrid creature with a caustic, gaping mouth. This particular Void-spawn needs to gnaw and drool on anything within reach to truly understand it. Though not inherently evil, Kog\'Maw\'s beguiling naiveté is dangerous, as it often precedes a feeding frenzy—not for sustenance, but to satisfy its unending curiosity.',
  patchLastChanged: '25.04',
  positions: [
    'Bottom'
  ],
  price: {
    blueEssence: 2400,
    rp: 880
  },
  releaseDate: '2010-06-24',
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
      perLevel: 4.45
    },
    attackCastTime: {
      flat: 0.3
    },
    attackDamage: {
      flat: 61,
      perLevel: 3.1
    },
    attackDelayOffset: {
      flat: -0.134
    },
    attackRange: {
      flat: 500
    },
    attackSpeed: {
      flat: 0.665,
      perLevel: 2.65
    },
    attackSpeedRatio: {
      flat: 0.665
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
      flat: 635,
      perLevel: 99
    },
    healthRegen: {
      flat: 3.75,
      perLevel: 0.55
    },
    magicResistance: {
      flat: 30,
      perLevel: 1.3
    },
    mana: {
      flat: 325,
      perLevel: 40
    },
    manaRegen: {
      flat: 8.75,
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