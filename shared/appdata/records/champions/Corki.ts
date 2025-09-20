// Updated Patch 25.17 - 09/18/2025 02:20:02 AM CDT

const champion: Champion = {
  id: 42,
  key: 'Corki',
  name: 'Corki',
  title: 'the Daring Bombardier',
  abilities: [
    {
      key: 'P',
      name: 'Hextech Munitions',
      affects: 'Self',
      blurb: 'Innate:  Corki\'s basic attacks deal bonus true damage.',
      damageType: 'Other damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Corki\'s basic attacks deal bonus true damage equal to 20% AD. This damage is affected by critical strike modifiers.</p>'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Corki/ability-icon/p',
      notes: 'The mixed damage is dealt in two simultaneous instances of damage, but will pretend to be a single instance for most effects (such as  Conqueror\'s stacks).\nThe true damage is dealt in an instance before the physical damage.\nBoth instances deal  basic damage and thus natively apply  life steal.\nThe attack applies on-hit effects only once, right at the start.\nEven if the target dies from the true damage, the physical damage will still be applied to it.\nIf the target dies from on-hit damage, the true damage portion will be skipped and only the physical damage applied.(bug)\n Runaan\'s Hurricane\'s Wind\'s Fury and  Spellblade effects have both been special cased to benefit from Hextech Munitions, causing their damage dealt to deal bonus true damage equal to 20% of the pre-mitigation damage dealt.',
      spellEffects: 'basic',
      targeting: 'Passive'
    },
    {
      key: 'Q',
      name: 'Phosphorus Bomb',
      affects: 'Enemies',
      blurb: 'Active:  Corki fires a flash bomb at the target location, dealing magic damage to enemies hit and  revealing enemy  champions hit.',
      castTime: '0.25',
      cooldown: '9 / 8.5 / 8 / 7.5 / 7',
      cost: '60 / 65 / 70 / 75 / 80',
      damageType: 'Magic damage',
      effectRadius: '275',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Corki launches a bomb at the target location that explodes upon impact, dealing magic damage to enemies hit.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '70 / 115 / 160 / 205 / 250'
                },
                {
                  unit: '% bonus AD',
                  values: '130'
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
          description: 'The bomb also grants sight of the area for 6 seconds and reveals enemy champions hit for the same duration.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Corki/ability-icon/q',
      maxCharges: -1,
      notes: 'The missile has a minimum travel time of 0.227 seconds.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '1100',
      spellEffects: 'spellaoe',
      spellshieldable: 'True',
      targeting: 'Location',
      targetRange: '825'
    },
    {
      key: 'W',
      name: 'Valkyrie',
      affects: 'Enemies',
      blurb: 'Active:  Corki  flies a short distance to the target location, dropping bombs that create a trail of fire that deals magic damage continually to enemies within.',
      castTime: 'none',
      collisionRadius: '100',
      cooldown: '20 / 18 / 16 / 14 / 12',
      cost: '80 / 85 / 90 / 95 / 100',
      damageType: 'Magic damage',
      effectRadius: '200',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Corki dashes to the target location and drops bombs that leave up to 3 blazing patches along his path, depending on the distance traveled. Each patch lasts 2.5 seconds.</p>'
        },
        {
          description: 'Enemies within the patches are dealt magic damage every 0.5 seconds, lingering for 1 second.',
          leveling: [
            {
              attribute: 'Magic Damage Per Tick',
              modifiers: [
                {
                  values: '40 / 55 / 70 / 85 / 100'
                },
                {
                  unit: '% bonus AD',
                  values: '40'
                },
                {
                  unit: '% AP',
                  values: '30'
                }
              ]
            },
            {
              attribute: 'Total Magic Damage',
              modifiers: [
                {
                  values: '200 / 275 / 350 / 425 / 500'
                },
                {
                  unit: '% bonus AD',
                  values: '200'
                },
                {
                  unit: '% AP',
                  values: '150'
                }
              ]
            }
          ]
        },
        {
          description: 'Gatling Gun can be cast during the dash.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Corki/ability-icon/w',
      maxCharges: -1,
      notes: 'No additional information.',
      resource: 'Mana',
      speed: '650 + 100% movement speed',
      spellEffects: 'aoedot',
      spellshieldable: 'False',
      targeting: 'Location',
      targetRange: '300 / 600'
    },
    {
      key: 'E',
      name: 'Gatling Gun',
      affects: 'Enemies',
      angle: '35°',
      blurb: 'Active:  Corki\'s gatling gun rapidly fires in a cone in front of him, continually dealing physical damage to enemies hit and applying  stacks of Gatling Gun.',
      castTime: 'none',
      cooldown: '12',
      cost: '50 / 55 / 60 / 65 / 70',
      damageType: 'Physical damage',
      effectRadius: '690',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Corki sprays bullets in a cone toward his facing direction for 4 seconds, dealing physical damage every 0.25 seconds to all enemies hit and applying a stack to them at the same tick rate for 2 seconds, refreshing with subsequent hits and stacking up to 4 times. Each stack reduces the target\'s armor and magic resistance.</p>',
          leveling: [
            {
              attribute: 'Physical Damage Per Tick',
              modifiers: [
                {
                  values: '5 / 8.13 / 11.25 / 14.38 / 17.5'
                },
                {
                  unit: '% bonus AD',
                  values: '15'
                }
              ]
            },
            {
              attribute: 'Total Physical Damage',
              modifiers: [
                {
                  values: '80 / 130 / 180 / 230 / 280'
                },
                {
                  unit: '% bonus AD',
                  values: '240'
                }
              ]
            },
            {
              attribute: 'Resistances Reduction Per Stack',
              modifiers: [
                {
                  values: '3 / 3.5 / 4 / 4.5 / 5'
                }
              ]
            },
            {
              attribute: 'Total Resistances Reduction',
              modifiers: [
                {
                  values: '12 / 14 / 16 / 18 / 20'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Corki/ability-icon/e',
      maxCharges: -1,
      notes: 'The maximum resistances reduction is applied after 4 ticks (1 second).\nThe direction of the gun firing changes depending on where Corki is facing.\nCorki will turn to face in the direction of the cursor upon casting Gatling Gun.\nGatling Gun\'s area of effect can hit close by enemies next to and behind him, due to hitting  enemy boundary edge.',
      projectile: 'FALSE',
      resource: 'Mana',
      spellEffects: 'aoedot',
      spellshieldable: 'False',
      targeting: 'Auto'
    },
    {
      key: 'R',
      name: 'Missile Barrage',
      width: '80',
      affects: 'Enemies',
      blurb: 'Active:  Corki fires a missile in the target direction that explodes upon the first enemy hit, dealing physical damage to enemies in an area.',
      castTime: '0.175',
      cooldown: '2',
      cost: '35',
      damageType: 'Physical damage',
      effectRadius: '150 / 300',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Basic attacks on-hit against champions reduce Missile Barrage\'s remaining recharge time by 2 - 4 (based on critical strike chance) seconds.</p>'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Corki fires a missile in the target direction that explodes upon the first enemy hit, dealing physical damage to enemies within the area.</p>',
          leveling: [
            {
              attribute: 'Physical Damage',
              modifiers: [
                {
                  values: '90 / 170 / 250'
                },
                {
                  unit: '% bonus AD',
                  values: '85'
                }
              ]
            }
          ]
        },
        {
          description: 'Corki periodically stocks a Missile Barrage charge, up to a maximum of 4. He gains 2 charges upon learning the ability and maximum charges upon respawning.'
        },
        {
          description: 'Every third missile Corki fires is a Big One, dealing 100% increased damage as well as gaining increased range and explosion radius.',
          leveling: [
            {
              attribute: 'Big One Physical Damage',
              modifiers: [
                {
                  values: '180 / 340 / 500'
                },
                {
                  unit: '% bonus AD',
                  values: '170'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Corki/ability-icon/r',
      maxCharges: 4,
      notes: 'Once Corki has learned the ability:\nHe receives a buff that counts a cycle of the number of times Missile Barrage has been used since the last Big One.\nAn indicator becomes visible below his health bar that tracks the number of missiles in reserve and whether a Big One is available. They are spent from left to right.\nCorki retains progress towards a Big One when he dies.\nThis ability will cast from wherever the caster is at the start of the cast time.\nMissile Barrage\'s effect radius is centered around the location of the missile as it collides.\n Malignance\'s damage from Missile Barrage does not count toward  Eclipse\'s passive.',
      projectile: 'TRUE',
      rechargeRate: '20 / 20 / 20',
      resource: 'Other',
      speed: '2000',
      spellEffects: 'spellaoe',
      spellshieldable: 'True',
      targeting: 'Direction',
      targetRange: '1300 / 1500'
    }
  ],
  adaptiveType: 'Physical damage',
  attackType: 'Ranged',
  attributeRatings: {
    abilityReliance: 45,
    control: 1,
    damage: 3,
    difficulty: 2,
    mobility: 2,
    toughness: 1,
    utility: 1
  },
  faction: 'bandle-city',
  lore: 'The yordle pilot Corki loves two things above all others: flying, and his glamorous mustache... though not necessarily in that order. After leaving Bandle City, he settled in Piltover and fell in love with the wondrous machines he found there. He dedicated himself to the development of flying contraptions, leading an aerial defense force of seasoned veterans known as the Screaming Yipsnakes. Calm under fire, Corki patrols the skies around his adopted home, and has never encountered a problem that a good missile barrage couldn\'t solve.',
  patchLastChanged: '25.15',
  positions: [
    'Middle'
  ],
  price: {
    blueEssence: 1575,
    rp: 790
  },
  releaseDate: '2009-09-19',
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
      flat: 27,
      perLevel: 4.5
    },
    attackCastTime: {
      flat: 0.3
    },
    attackDamage: {
      flat: 52,
      perLevel: 2
    },
    attackDelayOffset: {
      flat: -0.03
    },
    attackRange: {
      flat: 550
    },
    attackSpeed: {
      flat: 0.644,
      perLevel: 2.8
    },
    attackSpeedRatio: {
      flat: 0.644
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
      flat: 610,
      perLevel: 100
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
      flat: 350,
      perLevel: 40
    },
    manaRegen: {
      flat: 7.4,
      perLevel: 0.7
    },
    movespeed: {
      flat: 325
    },
    pathingRadius: {
      flat: 35
    },
    selectionRadius: {
      flat: 135
    }
  }
}
export default champion