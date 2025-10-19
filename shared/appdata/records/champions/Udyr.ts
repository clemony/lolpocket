// Updated Patch 25.19 - 10/07/2025 08:16:13 AM CDT

const champion: Champion = {
  id: 77,
  key: 'Udyr',
  name: 'Udyr',
  title: 'the Spirit Walker',
  abilities: [
    {
      key: 'P',
      name: 'Bridge Between',
      affects: 'Self',
      blurb: 'Innate - Awakened Spirit:  Udyr has no ultimate ability and instead he has 4 basic abilities that each incur a  brief global cooldown. Each  ability grants a Stance that empowers his next two  basic attacks.',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate - Awakened Spirit:</span> Udyr has no ultimate ability and instead has 4 basic abilities that each incur a 1.5-second global cooldown when cast. Each ability grants a Stance that empowers his basic attacks, and switching Stances will replace the empowered attacks of the previous Stance.</p>'
        },
        {
          description: 'Periodically, after Udyr enters a Stance, he can cast it again at no cost after 0.25 seconds and within the following 5 seconds to Awaken it, empowering the Stance with an additional effect and placing the effect on cooldown.If Udyr does not consume the Awaken cast within the duration and has not switched Stances, his current Stance\'s respective ability incurs a 0.25-second cooldown. Awakened Spirit is placed on full cooldown at the start of the game.'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate - Monk Training:</span> After casting an ability, Udyr empowers his next two basic attacks within 4 seconds to gain 30% bonus attack speed and refund 5% of Awakened Spirit\'s total cooldown, though not if the remaining cooldown is less than 1 second.</p>'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Udyr/ability-icon/p',
      notes: 'Awakened Spirit\'s cooldown is affected by  ultimate haste.\nAwakened ability casts are special cased to trigger  Experimental Hexplate\'s Overdrive,  Zeke\'s Convergence\'s Frostfire Tempest, and  Cloud Dragon Soul\'s increased movement speed.\nThe Awakened casts of  Wilding Claw and  Wingborne Storm are special cased to trigger  Malignance\'s Hatefog from their damage.\n Axiom Arcanist will affect the Awakened cast of all abilities, but does not refund the cooldown of Awakened Spirit.\nOnly  Wilding Claw\'s lightning damage is amplified. The on-hit damage is not increased.(note)\n Axiom Arc\'s Flux does not count neither Awakened Spirit nor  Wingborne Storm as ultimate abilities.\nAwakened Spirit\'s cooldown is tracked on his health bar by an  Awakening resource, visible to all teams. This secondary resource bar is non-descript and represents the effect\'s percentage charge.\nThe bar has a white color when Awakened Spirit is under 80% charge, a yellow color when at 80% charge or above, and a red color when an Awaken cast is available.\nSwitching Stances will not cause any additional effects granted by the previous one to end prematurely.\nThe global cooldown will not incur on abilities that are currently on a greater cooldown.\nThe empowered attacks will not get consumed if they are parried.\nAwakened Spirit\'s cast also activates Monk Training and empowers the next 2 attacks by the stances unawakened effects as well, overriding unused unawakened stance attacks.',
      targeting: 'Passive'
    },
    {
      key: 'Q',
      name: 'Wilding Claw',
      affects: 'Self, Enemies',
      blurb: 'Claw Stance:  Udyr first two basic attacks deal bonus physical damage equal to a portion of the target\'s maximum health. Additionally, he gains  attack speed and bonus on-hit physical damage for a few seconds.',
      castTime: 'none',
      cooldown: '6',
      cost: '20',
      damageType: 'Other damage',
      effectRadius: '450',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active - Stance:</span> Udyr enters Claw Stance, empowering his next two basic attacks to gain 50 bonus range and deal bonus physical damage, capped at 15 (+ 100% bonus AD) (+ 50% AP) against monsters.</p>',
          leveling: [
            {
              attribute: 'Bonus Physical Damage',
              modifiers: [
                {
                  unit: '%  of target\'s maximum health',
                  values: '3 / 4 / 5 / 6 / 7 / 8'
                },
                {
                  unit: '% per 100 bonus AD',
                  values: '4'
                }
              ]
            },
            {
              attribute: 'Total Physical Damage',
              modifiers: [
                {
                  unit: '%  of target\'s maximum health',
                  values: '6 / 8 / 10 / 12 / 14 / 16'
                },
                {
                  unit: '% per 100 bonus AD',
                  values: '8'
                }
              ]
            }
          ]
        },
        {
          description: 'Additionally, Udyr gains bonus attack speed and deals bonus physical damage on-hit for 4 seconds.',
          leveling: [
            {
              attribute: 'Bonus Attack Speed',
              modifiers: [
                {
                  unit: '%',
                  values: '20 / 32 / 44 / 56 / 68 / 80'
                }
              ]
            },
            {
              attribute: 'Bonus Physical Damage On-Hit',
              modifiers: [
                {
                  values: '5 / 11 / 17 / 23 / 29 / 35'
                },
                {
                  unit: '% bonus AD',
                  values: '25'
                }
              ]
            }
          ]
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Recast - Awaken:</span> Udyr gains an additional 20% - 70% (based on level) bonus attack speed. The empowered attacks deal an additional 2% - 4% (based on level) (+ 3% per 100 bonus AD) of the target\'s maximum health bonus physical damage. Udyr\'s next two basic attacks in any Stance within 4 seconds are each empowered to strike with lightning[ 6 times over 1 second, ][ every 0.2 seconds over 1 second, ]dealing bonus magic damage equal to 1.5% - 3% (based on level) (+ 0.8% per 100 AP) of the target\'s maximum health per hit, chaining to up to 3 nearby visible enemies and being able to hit the same target multiple times, for a total of 9% - 18% (based on level) (+ 4.8% per 100 AP) of the target\'s maximum health. Each lightning strike deals a minimum of 40 - 160 (based on level) against minions and is capped at 15 (+ 100% bonus AD) (+ 50% AP) against monsters.</p>'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Udyr/ability-icon/q',
      maxCharges: -1,
      notes: 'Deals  spell damage to the primary target and applies  area damage on the lightning strikes.\nThe lightning strikes can deal up to 9% : 18% (based on level) (+ 4.8% per 100 AP) of the target\'s maximum health bonus magic damage per empowered basic attack against an isolated target.\nIf both empowered attacks are used on the same isolated target, the lightning strikes can deal up to 18% : 36% (based on level) (+ 9.6% per 100 AP) of the target\'s maximum health bonus magic damage.\nThe lightning strikes from two separate empowered attacks can overlap with each other on the same target for additional damage.\n Spell shield will only block an empowered attack\'s application of the lightning strikes.\nThe empowered attacks will not trigger nor be consumed if they hit a structure or ward or are parried.',
      projectile: 'TRUE',
      resource: 'Mana',
      spellEffects: 'special',
      spellshieldable: 'special',
      targeting: 'Auto'
    },
    {
      key: 'W',
      name: 'Iron Mantle',
      affects: 'Self',
      blurb: 'Mantle Stance:  Udyr gains a  shield and his next two basic attacks gain  life steal and  heal him.',
      castTime: 'none',
      cooldown: '6',
      cost: '40',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active - Stance:</span> Udyr enters Mantle Stance, empowering his next two basic attacks to gain life steal and heal him for 1.2% of his maximum health (+ 8% AP) on-hit.</p>',
          leveling: [
            {
              attribute: 'Life Steal',
              modifiers: [
                {
                  unit: '%',
                  values: '15 / 16 / 17 / 18 / 19 / 20'
                }
              ]
            }
          ]
        },
        {
          description: 'Additionally, Udyr grants himself a shield for 4 seconds.',
          leveling: [
            {
              attribute: 'Shield Strength',
              modifiers: [
                {
                  values: '45 / 60 / 75 / 90 / 105 / 120'
                },
                {
                  unit: '% AP',
                  values: '40'
                },
                {
                  tooltip: 'Scaling per rank:\n2 / 2.3 / 2.6 / 2.9 / 3.2 / 3.5% maximum health',
                  unit: '% maximum health',
                  values: '2 - 3.5'
                }
              ]
            }
          ]
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Recast - Awaken:</span> Udyr increases the shield\'s strength, stacking with the remaining shield from the first cast, and heals every 0.25 seconds over the next 4 seconds, as well as causes the empowered attacks to instead gain doubled life steal and heal him for 2.4% of his maximum health (+ 16% AP) on-hit.</p>',
          leveling: [
            {
              attribute: 'Increased Shield Strength',
              modifiers: [
                {
                  values: '20 / 27.65 / 35.29 / 42.94 / 50.59 / 58.24 / 65.88 / 73.53 / 81.18 / 88.82 / 96.47 / 104.12 / 111.76 / 119.41 / 127.06 / 134.71 / 142.35 / 150'
                },
                {
                  values: '45 / 60 / 75 / 90 / 105 / 120'
                },
                {
                  unit: '% AP',
                  values: '65'
                },
                {
                  unit: '% maximum health',
                  values: '8'
                }
              ]
            },
            {
              attribute: 'Total Healing',
              modifiers: [
                {
                  values: '10 / 13.82 / 17.65 / 21.47 / 25.29 / 29.12 / 32.94 / 36.76 / 40.59 / 44.41 / 48.24 / 52.06 / 55.88 / 59.71 / 63.53 / 67.35 / 71.18 / 75'
                },
                {
                  values: '22.5 / 30 / 37.5 / 45 / 52.5 / 60'
                },
                {
                  unit: '% AP',
                  values: '32.5'
                },
                {
                  unit: '% maximum health',
                  values: '4'
                }
              ]
            },
            {
              attribute: 'Heal per Tick',
              modifiers: [
                {
                  values: '0.63 / 0.87 / 1.11 / 1.35 / 1.59 / 1.82 / 2.06 / 2.3 / 2.54 / 2.78 / 3.02 / 3.26 / 3.5 / 3.73 / 3.97 / 4.21 / 4.45 / 4.69'
                },
                {
                  values: '1.41 / 1.88 / 2.34 / 2.81 / 3.28 / 3.75'
                },
                {
                  unit: '% AP',
                  values: '2.03'
                },
                {
                  unit: '% maximum health',
                  values: '0.25'
                }
              ]
            },
            {
              attribute: 'Increased Life Steal',
              modifiers: [
                {
                  unit: '%',
                  values: '30 / 32 / 34 / 36 / 38 / 40'
                }
              ]
            }
          ]
        },
        {
          description: 'Healing on-hit is reduced to 60% against minions.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Udyr/ability-icon/w',
      maxCharges: -1,
      notes: 'The empowered attacks apply spell effects to the target.\nThe empowered attacks will not trigger nor be consumed if they hit a structure or ward or are parried.\nThe increased life steal is a buff that expires after two valid attacks have been completed, as opposed to an on-attack modifier for your next two attacks. This means that while the buff is active,  Ravenous Hydra will heal at the increased life steal value.',
      resource: 'Mana',
      spellEffects: 'spell',
      targeting: 'Auto'
    },
    {
      key: 'E',
      name: 'Blazing Stampede',
      affects: 'Self, Enemies',
      blurb: 'Stampede Stance:  Udyr gains  ghosting and a burst of  movement speed that decays over a few seconds. His attacks in this stance briefly  stun his target, but this cannot affect them more than once every few seconds.',
      castTime: 'none',
      cooldown: '6',
      cost: '40',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active - Stance:</span> Udyr enters Stampede Stance, empowering his basic attacks to have an uncancellable windup and pounce on the target to stun them for 0.75 seconds. This cannot affect the same target more than once every few seconds.</p>'
        },
        {
          description: 'Additionally, Udyr becomes ghosted and gains bonus movement speed for 4 seconds, which decays to 30% effectiveness over 1.5 seconds.',
          leveling: [
            {
              attribute: 'Bonus Movement Speed',
              modifiers: [
                {
                  unit: '%',
                  values: '25 / 31 / 37 / 43 / 49 / 55'
                }
              ]
            },
            {
              attribute: 'Decayed Bonus Movement Speed',
              modifiers: [
                {
                  unit: '%',
                  values: '7.5 / 9.3 / 11.1 / 12.9 / 14.7 / 16.5'
                }
              ]
            }
          ]
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Recast - Awaken:</span> Udyr gains 75 bonus attack range and an additional 30% - 40% (based on level) bonus movement speed. He also gains immunity to crowd control for 1.5 seconds.</p>'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Udyr/ability-icon/e',
      maxCharges: -1,
      notes: 'Udyr cannot dash while  grounded or  rooted, but he will still declare the empowered attack.\nThe empowered attack will still apply its effects even if the dash is interrupted.\nThe empowered attacks will not trigger nor be consumed if they hit a structure or ward or are parried.\nThe immunity to the stun is not applied in any case.',
      onTargetCdStatic: '6 / 5.6 / 5.2 / 4.8 / 4.4 / 4',
      resource: 'Mana',
      spellshieldable: 'true',
      targeting: 'Auto'
    },
    {
      key: 'R',
      name: 'Wingborne Storm',
      affects: 'Self, Enemies',
      blurb: 'Storm Stance:  Udyr summons a blizzard around himself for a few seconds that continuously deals magic damage and  slows enemies inside. His next two basic attacks each cause the blizzard to deal a burst of additional magic damage to enemies inside it.',
      castTime: 'none',
      cooldown: '6',
      cost: '40',
      damageType: 'Magic damage',
      effectRadius: '370 /  1300',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active - Stance:</span> Udyr enters Storm Stance, empowering his next two basic attacks to deal 10 - 40 (based on level) (+ 35% AP) magic damage to nearby enemies.</p>'
        },
        {
          description: 'Additionally, Udyr summons a blizzard around himself for 4 seconds that deals magic damage every 0.5 seconds to nearby enemies and slows them while they remain within. Minions take 50% / 60% / 70% / 80% (based on level) damage.',
          leveling: [
            {
              attribute: 'Magic Damage per Tick',
              modifiers: [
                {
                  values: '10 / 18 / 26 / 34 / 42 / 50'
                },
                {
                  unit: '% AP',
                  values: '17.5'
                }
              ]
            },
            {
              attribute: 'Total Magic Damage',
              modifiers: [
                {
                  values: '80 / 144 / 208 / 272 / 336 / 400'
                },
                {
                  unit: '% AP',
                  values: '140'
                }
              ]
            },
            {
              attribute: 'Slow',
              modifiers: [
                {
                  unit: '%',
                  values: '15 / 18 / 21 / 24 / 27 / 30'
                }
              ]
            }
          ]
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Recast - Awaken:</span> Udyr ends the blizzard if it is active and unleashes a glacial storm for 4 seconds that is able to move on its own, as well as causes the empowered attacks to instead deal their damage to enemies within that storm. The storm applies the same effects as the blizzard but deals bonus magic damage equal to[ 1% - 1.75% (based on level) (+ 0.4375% per 100 AP) of the target\'s maximum health per tick ][ 8% - 14% (based on level) (+ 3.5% per 100 AP) of the target\'s maximum health over the duration ]and slows by an additional 5%. Against monsters, the storm deals a minimum of [ 5 - 35 (based on level) per tick, and is capped at 10 - 50 (based on level) ][ 40 - 280 (based on level) over the duration, and is capped at 80 - 400 (based on level) ].</p>',
          leveling: [
            {
              attribute: 'Increased Slow',
              modifiers: [
                {
                  unit: '%',
                  values: '20 / 23 / 26 / 29 / 32 / 35'
                }
              ]
            }
          ]
        },
        {
          description: 'The storm grants sight of its surroundings and prioritizes following the last enemy Udyr attacked while it was active, then enemy champions, then non-champions, then Udyr. The storm can only follow visible enemies.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Udyr/ability-icon/r',
      maxCharges: -1,
      notes: 'The storm that Udyr surrounds himself with is independent from the unleashed storm.\nHe can still cast Wingborne Storm to surround himself with a storm while an unleashed storm from an Awakened cast is active.\nUsing the Awakened cast ends the storm around Udyr if it is active and summons a separate storm that is able to move on its own.\nThe slow debuff has a duration equal to the storm\'s remaining duration and is removed immediately when the unit leaves the storm\'s area of effect.\nUnits receive the debuff whenever they are in the storm, even after having it removed from leaving the area.\nIf the target Udyr has most recently attacked is invalid and there are no nearby enemies then the storm will follow him instead.\nThe storm can follow Udyr regardless of how far away he is from it.\nThe storm will remain active even if Udyr dies. Any commands it was issued to follow a target will not be interrupted.\nThe storm will follow its target even if they are not  visible, but only for up to 1 second.\nIf it does not gain vision of its target within that time, it changes its target.\nThe storm is obstructed by terrain. If it encounters terrain, then it will automatically navigate its path towards the target.\nThe empowered attacks will not trigger nor be consumed if they hit a structure or ward or are parried.',
      resource: 'Mana',
      speed: '109.5 : 250 (based on level)',
      spellEffects: 'aoedot',
      spellshieldable: 'false',
      targeting: 'Auto'
    }
  ],
  adaptiveType: 'Physical damage',
  attackType: 'Melee',
  attributeRatings: {
    abilityReliance: 35,
    control: 2,
    damage: 2,
    difficulty: 1,
    mobility: 2,
    toughness: 3,
    utility: 1
  },
  faction: 'freljord',
  lore: 'The most powerful spirit walker alive, Udyr communes with all the spirits of the Freljord, whether by empathically understanding their needs, or by channeling and transforming their ethereal energy into his own primal fighting style. He seeks balance within, so that his mind does not get lost amidst others, but he also seeks balance without—for the Freljord\'s mystical landscape can only thrive with the growth that comes from conflict and struggle, and Udyr knows that sacrifices must be made to keep peaceful stagnance at bay.',
  patchLastChanged: '25.11',
  positions: [
    'Jungle',
    'Top'
  ],
  price: {
    blueEssence: 675,
    rp: 585
  },
  releaseDate: '2009-12-02',
  resource: 'Mana',
  roles: [
    'Fighter',
    'Juggernaut',
    'Tank'
  ],
  stats: {
    acquisitionRadius: {
      flat: 400
    },
    armor: {
      flat: 31,
      perLevel: 4.7
    },
    attackCastTime: {
      flat: 0.3
    },
    attackDamage: {
      flat: 62,
      perLevel: 4
    },
    attackDelayOffset: {
      flat: -0.102
    },
    attackRange: {
      flat: 125
    },
    attackSpeed: {
      flat: 0.65,
      perLevel: 3
    },
    attackSpeedRatio: {
      flat: 0.65
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
      flat: 664,
      perLevel: 92
    },
    healthRegen: {
      flat: 6,
      perLevel: 0.75
    },
    magicResistance: {
      flat: 32,
      perLevel: 2.05
    },
    mana: {
      flat: 271,
      perLevel: 50
    },
    manaRegen: {
      flat: 7.5,
      perLevel: 0.45
    },
    movespeed: {
      flat: 350
    },
    pathingRadius: {
      flat: 35
    },
    selectionRadius: {
      flat: 125
    }
  }
}
export default champion