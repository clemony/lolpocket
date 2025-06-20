// Updated Patch 25.11 - 06/16/2025 01:01:43 PM CDT

const champion: Champion = {
  id: 77,
  key: 'Udyr',
  name: 'Udyr',
  title: 'the Spirit Walker',
  resource: 'Mana',
  attackType: 'Melee',
  stats: {
    health: {
      flat: 664,
      perLevel: 92,
    },
    healthRegen: {
      flat: 6,
      perLevel: 0.75,
    },
    mana: {
      flat: 271,
      perLevel: 50,
    },
    manaRegen: {
      flat: 7.5,
      perLevel: 0.45,
    },
    armor: {
      flat: 31,
      perLevel: 4.7,
    },
    magicResistance: {
      flat: 32,
      perLevel: 2.05,
    },
    attackDamage: {
      flat: 62,
      perLevel: 4,
    },
    movespeed: {
      flat: 350,
    },
    acquisitionRadius: {
      flat: 400,
    },
    selectionRadius: {
      flat: 125,
    },
    pathingRadius: {
      flat: 35,
    },
    gameplayRadius: {
      flat: 65,
    },
    criticalStrikeDamage: {
      flat: 175,
    },
    criticalStrikeDamageModifier: {
      flat: 1,
    },
    attackSpeed: {
      flat: 0.65,
      perLevel: 3,
    },
    attackSpeedRatio: {
      flat: 0.65,
    },
    attackCastTime: {
      flat: 0.3,
    },
    attackTotalTime: {
      flat: 1.6,
    },
    attackDelayOffset: {
      flat: -0.102,
    },
    attackRange: {
      flat: 125,
    },
  },
  positions: [
    'Jungle',
    'Top',
  ],
  roles: [
    'Fighter',
    'Juggernaut',
    'Tank',
  ],
  attributeRatings: {
    damage: 2,
    toughness: 3,
    control: 2,
    mobility: 2,
    utility: 1,
    abilityReliance: 35,
    difficulty: 1,
  },
  abilities: {
    P: [
      {
        name: 'Bridge Between',
        icon: 'https://cdn.communitydragon.org/latest/champion/Udyr/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate - Awakened Spirit:</span> Udyr has no ultimate ability and instead has 4 basic abilities that each incur a 1.5-second global cooldown when cast. Each ability grants a Stance that empowers his basic attacks, and switching Stances will replace the empowered attacks of the previous Stance.</p>',
          },
          {
            description: 'Periodically, after Udyr enters a Stance, he can cast it again at no cost after 0.25 seconds and within the following 5 seconds to Awaken it, empowering the Stance with an additional effect and placing the effect on cooldown.If Udyr does not consume the Awaken cast within the duration and has not switched Stances, his current Stance\'s respective ability incurs a 0.25-second cooldown. Awakened Spirit is placed on full cooldown at the start of the game.',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate - Monk Training:</span> After casting an ability, Udyr empowers his next two basic attacks within 4 seconds to gain 30% bonus attack speed and refund 5% of Awakened Spirit\'s total cooldown, though not if the remaining cooldown is less than 1 second.</p>',
          },
        ],
        targeting: 'Passive',
        affects: 'Self',
        notes: 'Awakened Spirit\'s cooldown is affected by ultimate haste.\nAwakened ability casts are special cased to trigger  Experimental Hexplate\'s Overdrive,  Zeke\'s Convergence\'s Frostfire Tempest, and  Cloud Dragon Soul\'s increased movement speed.\nThe Awakened casts of  Wilding Claw and  Wingborne Storm are special cased to trigger  Malignance\'s Hatefog from their damage.\n Axiom Arcanist will affect the Awakened cast of all abilities, but does not refund the cooldown of Awakened Spirit.\nOnly  Wilding Claw\'s lightning damage is amplified. The on-hit damage is not increased.(note)\n Axiom Arc\'s Flux does not count neither Awakened Spirit nor  Wingborne Storm as ultimate abilities.\nAwakened Spirit\'s cooldown is tracked on his health bar by an  Awakening resource, visible to all teams. This secondary resource bar is non-descript and represents the effect\'s percentage charge.\nThe bar has a white color when Awakened Spirit is under 80% charge, a yellow color when at 80% charge or above, and a red color when an Awaken cast is available.\nSwitching Stances will not cause any additional effects granted by the previous one to end prematurely.\nThe global cooldown will not incur on abilities that are currently on a greater cooldown.\nThe empowered attacks will not get consumed if they are parried.\nAwakened Spirit\'s cast also activates Monk Training and empowers the next 2 attacks by the stances unawakened effects as well, overriding unused unawakened stance attacks.',
        blurb: 'Innate - Awakened Spirit:  Udyr has no ultimate ability and instead he has 4 basic abilities that each incur a  brief global cooldown. Each ability grants a Stance that empowers his next two basic attacks.',
      },
    ],
    Q: [
      {
        name: 'Wilding Claw',
        icon: 'https://cdn.communitydragon.org/latest/champion/Udyr/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active - Stance:</span> Udyr enters Claw Stance, empowering his next two basic attacks to gain 50 bonus range and deal bonus physical damage.</p>',
            leveling: [
              {
                attribute: 'Bonus Physical Damage',
                modifiers: [
                  {
                    values: [
                      3,
                      4,
                      5,
                      6,
                      7,
                      8,
                    ],
                    units: [
                      '%  of target\'s maximum health',
                    ],
                  },
                  {
                    values: [
                      4,
                    ],
                    units: [
                      '% per 100 bonus AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'Total Physical Damage',
                modifiers: [
                  {
                    values: [
                      6,
                      8,
                      10,
                      12,
                      14,
                      16,
                    ],
                    units: [
                      '%  of target\'s maximum health',
                    ],
                  },
                  {
                    values: [
                      8,
                    ],
                    units: [
                      '% per 100 bonus AD',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'Additionally, Udyr gains bonus attack speed and deals bonus physical damage on-hit for 4 seconds.',
            leveling: [
              {
                attribute: 'Bonus Attack Speed',
                modifiers: [
                  {
                    values: [
                      20,
                      32,
                      44,
                      56,
                      68,
                      80,
                    ],
                    units: [
                      '%',
                    ],
                  },
                ],
              },
              {
                attribute: 'Bonus Physical Damage On-Hit',
                modifiers: [
                  {
                    values: [
                      5,
                      11,
                      17,
                      23,
                      29,
                      35,
                    ],
                  },
                  {
                    values: [
                      25,
                    ],
                    units: [
                      '% bonus AD',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Recast - Awaken:</span> Udyr gains an additional 20% - 70% (based on level) bonus attack speed. The empowered attacks deal an additional 2% - 4% (based on level) (+ 3% per 100 bonus AD) of the target\'s maximum health bonus physical damage. Udyr\'s next two basic attacks in any Stance within 4 seconds are each empowered to strike with lightning[ 6 times over 1 second, ][ every 0.2 seconds over 1 second, ]dealing bonus magic damage equal to 1.5% - 3% (based on level) (+ 0.8% per 100 AP) of the target\'s maximum health per hit, chaining to up to 3 nearby visible enemies and being able to hit the same target multiple times, for a total of 9% - 18% (based on level) (+ 4.8% per 100 AP) of the target\'s maximum health. Each lightning strike deals a minimum of 40 - 160 (based on level) against minions and is capped at 15 (+ 100% bonus AD) (+ 50% AP) against monsters.</p>',
          },
        ],
        cost: [
          20,
        ],
        cooldown: [
          6,
        ],
        targeting: 'Auto',
        affects: 'Self, Enemies',
        spellshieldable: 'special',
        resource: 'Mana',
        damageType: 'Mixed damage',
        spellEffects: 'special',
        projectile: 'TRUE',
        notes: 'Deals  spell damage to the primary target and applies  area damage on the lightning strikes.\nThe lightning strikes can deal up to 9% : 18% (based on level) (+ 4.8% per 100 AP) of the target\'s maximum health bonus magic damage per empowered basic attack against an isolated target.\nIf both empowered attacks are used on the same isolated target, the lightning strikes can deal up to 18% : 36% (based on level) (+ 9.6% per 100 AP) of the target\'s maximum health bonus magic damage.\nThe lightning strikes from two separate empowered attacks can overlap with each other on the same target for additional damage.\n Spell shield will only block an empowered attack\'s application of the lightning strikes.\nThe empowered attacks will not trigger nor be consumed if they hit a structure or ward or are parried.',
        blurb: 'Claw Stance:  Udyr first two basic attacks deal bonus physical damage equal to a portion of the target\'s maximum health. Additionally, he gains  attack speed and bonus on-hit physical damage for a few seconds.',
        castTime: 'none',
        effectRadius: '450',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Iron Mantle',
        icon: 'https://cdn.communitydragon.org/latest/champion/Udyr/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active - Stance:</span> Udyr enters Mantle Stance, empowering his next two basic attacks to gain life steal and heal him for 1.2% of his maximum health (+ 8% AP) on-hit.</p>',
            leveling: [
              {
                attribute: 'Life Steal',
                modifiers: [
                  {
                    values: [
                      15,
                      16,
                      17,
                      18,
                      19,
                      20,
                    ],
                    units: [
                      '%',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'Additionally, Udyr grants himself a shield for 4 seconds.',
            leveling: [
              {
                attribute: 'Shield Strength',
                modifiers: [
                  {
                    values: [
                      45,
                      60,
                      75,
                      90,
                      105,
                      120,
                    ],
                  },
                  {
                    values: [
                      40,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                  {
                    values: [
                      2,
                      2.3,
                      2.6,
                      2.9,
                      3.2,
                      3.5,
                    ],
                    units: [
                      '% maximum health',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Recast - Awaken:</span> Udyr increases the shield\'s strength, stacking with the remaining shield from the first cast, and heals every 0.25 seconds over the next 4 seconds, as well as causes the empowered attacks to instead gain doubled life steal and heal him for 2.4% of his maximum health (+ 16% AP) on-hit.</p>',
            leveling: [
              {
                attribute: 'Increased Shield Strength',
                modifiers: [
                  {
                    values: [
                      20,
                      27.647058823529413,
                      35.294117647058826,
                      42.94117647058823,
                      50.58823529411765,
                      58.23529411764706,
                      65.88235294117646,
                      73.52941176470588,
                      81.1764705882353,
                      88.82352941176471,
                      96.47058823529412,
                      104.11764705882354,
                      111.76470588235294,
                      119.41176470588236,
                      127.05882352941177,
                      134.7058823529412,
                      142.3529411764706,
                      150,
                    ],
                  },
                  {
                    values: [
                      45,
                      60,
                      75,
                      90,
                      105,
                      120,
                    ],
                  },
                  {
                    values: [
                      65,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                  {
                    values: [
                      8,
                    ],
                    units: [
                      '% maximum health',
                    ],
                  },
                ],
              },
              {
                attribute: 'Total Healing',
                modifiers: [
                  {
                    values: [
                      10,
                      13.823529411764707,
                      17.647058823529413,
                      21.470588235294116,
                      25.294117647058826,
                      29.11764705882353,
                      32.94117647058823,
                      36.76470588235294,
                      40.58823529411765,
                      44.411764705882355,
                      48.23529411764706,
                      52.05882352941177,
                      55.88235294117647,
                      59.70588235294118,
                      63.529411764705884,
                      67.3529411764706,
                      71.1764705882353,
                      75,
                    ],
                  },
                  {
                    values: [
                      22.5,
                      30,
                      37.5,
                      45,
                      52.5,
                      60,
                    ],
                  },
                  {
                    values: [
                      32.5,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                  {
                    values: [
                      4,
                    ],
                    units: [
                      '% maximum health',
                    ],
                  },
                ],
              },
              {
                attribute: 'Heal per Tick',
                modifiers: [
                  {
                    values: [
                      0.63,
                      0.8688235294117648,
                      1.1076470588235294,
                      1.3464705882352943,
                      1.585294117647059,
                      1.8241176470588236,
                      2.0629411764705883,
                      2.3017647058823534,
                      2.540588235294118,
                      2.7794117647058827,
                      3.0182352941176473,
                      3.257058823529412,
                      3.4958823529411767,
                      3.7347058823529413,
                      3.9735294117647064,
                      4.212352941176471,
                      4.451176470588236,
                      4.69,
                    ],
                  },
                  {
                    values: [
                      1.41,
                      1.88,
                      2.34,
                      2.81,
                      3.28,
                      3.75,
                    ],
                  },
                  {
                    values: [
                      2.03,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                  {
                    values: [
                      0.25,
                    ],
                    units: [
                      '% maximum health',
                    ],
                  },
                ],
              },
              {
                attribute: 'Increased Life Steal',
                modifiers: [
                  {
                    values: [
                      30,
                      32,
                      34,
                      36,
                      38,
                      40,
                    ],
                    units: [
                      '%',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'Healing on-hit is reduced to 60% against minions.',
          },
        ],
        cost: [
          40,
        ],
        cooldown: [
          6,
        ],
        targeting: 'Auto',
        affects: 'Self',
        resource: 'Mana',
        spellEffects: 'spell',
        notes: 'The empowered attacks apply spell effects to the target.\nThe empowered attacks will not trigger nor be consumed if they hit a structure or ward or are parried.\nThe increased life steal is a buff that expires after two valid attacks have been completed, as opposed to an on-attack modifier for your next two attacks. This means that while the buff is active,  Ravenous Hydra will heal at the increased life steal value.',
        blurb: 'Mantle Stance:  Udyr gains a  shield and his next two basic attacks gain  life steal and  heal him.',
        castTime: 'none',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Blazing Stampede',
        icon: 'https://cdn.communitydragon.org/latest/champion/Udyr/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active - Stance:</span> Udyr enters Stampede Stance, empowering his basic attacks to have an uncancellable windup and pounce on the target to stun them for 0.75 seconds. This cannot affect the same target more than once every few seconds.</p>',
          },
          {
            description: 'Additionally, Udyr becomes ghosted and gains bonus movement speed for 4 seconds, which decays to 30% effectiveness over 1.5 seconds.',
            leveling: [
              {
                attribute: 'Bonus Movement Speed',
                modifiers: [
                  {
                    values: [
                      25,
                      31,
                      37,
                      43,
                      49,
                      55,
                    ],
                    units: [
                      '%',
                    ],
                  },
                ],
              },
              {
                attribute: 'Decayed Bonus Movement Speed',
                modifiers: [
                  {
                    values: [
                      7.5,
                      9.3,
                      11.1,
                      12.9,
                      14.7,
                      16.5,
                    ],
                    units: [
                      '%',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Recast - Awaken:</span> Udyr gains 75 bonus attack range and an additional 30% - 40% (based on level) bonus movement speed. He also gains immunity to crowd control for 1.5 seconds.</p>',
          },
        ],
        cost: [
          40,
        ],
        cooldown: [
          6,
        ],
        targeting: 'Auto',
        affects: 'Self, Enemies',
        spellshieldable: 'true',
        resource: 'Mana',
        notes: 'Udyr cannot dash while  grounded or  rooted, but he will still declare the empowered attack.\nThe empowered attack will still apply its effects even if the dash is interrupted.\nThe empowered attacks will not trigger nor be consumed if they hit a structure or ward or are parried.\nThe immunity to the stun is not applied in any case.',
        blurb: 'Stampede Stance:  Udyr gains  ghosting and a burst of  movement speed that decays over a few seconds. His attacks in this stance briefly  stun his target, but this cannot affect them more than once every few seconds.',
        onTargetCdStatic: '6 / 5.6 / 5.2 / 4.8 / 4.4 / 4',
        castTime: 'none',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'Wingborne Storm',
        icon: 'https://cdn.communitydragon.org/latest/champion/Udyr/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active - Stance:</span> Udyr enters Storm Stance, empowering his next two basic attacks to deal 10 - 40 (based on level) (+ 35% AP) magic damage to nearby enemies.</p>',
          },
          {
            description: 'Additionally, Udyr summons a blizzard around himself for 4 seconds that deals magic damage every 0.5 seconds to nearby enemies and slows them. Minions take 50 / 60 / 70 / 80% (based on level) damage.',
            leveling: [
              {
                attribute: 'Magic Damage per Tick',
                modifiers: [
                  {
                    values: [
                      10,
                      18,
                      26,
                      34,
                      42,
                      50,
                    ],
                  },
                  {
                    values: [
                      17.5,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Total Magic Damage',
                modifiers: [
                  {
                    values: [
                      80,
                      144,
                      208,
                      272,
                      336,
                      400,
                    ],
                  },
                  {
                    values: [
                      140,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Slow',
                modifiers: [
                  {
                    values: [
                      15,
                      18,
                      21,
                      24,
                      27,
                      30,
                    ],
                    units: [
                      '%',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Recast - Awaken:</span> Udyr ends the blizzard if it is active and unleashes a glacial storm for 4 seconds that is able to move on its own, as well as causes the empowered attacks to instead deal their damage to enemies within that storm. The storm follows the closest nearby visible target and applies the same effects but deals bonus magic damage equal to[ 1% - 1.75% (based on level) (+ 0.4375% per 100 AP) of the target\'s maximum health per tick, capped at 10 - 50 (based on level) ][ 8% - 14% (based on level) (+ 3.5% per 100 AP) of the target\'s maximum health over the duration, capped at 80 - 400 (based on level) ]against monsters, and slows by an additional 5%.</p>',
            leveling: [
              {
                attribute: 'Increased Slow',
                modifiers: [
                  {
                    values: [
                      20,
                      23,
                      26,
                      29,
                      32,
                      35,
                    ],
                    units: [
                      '%',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'The unleashed storm grants sight of its surroundings and prioritizes following the last enemy Udyr has attacked while he is nearby, then enemy champions, then non-champions, then Udyr.',
          },
        ],
        cost: [
          40,
        ],
        cooldown: [
          6,
        ],
        targeting: 'Auto',
        affects: 'Self, Enemies',
        spellshieldable: 'false',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'aoedot',
        notes: 'The storm that Udyr surrounds himself with is independent from the unleashed storm.\nHe can still cast Wingborne Storm to surround himself with a storm while an unleashed storm from an Awakened cast is active.\nUsing the Awakened cast ends the storm around Udyr if it is active and summons a separate storm that is able to move on its own.\nThe slow debuff has a duration equal to the storm\'s remaining duration and is removed immediately when the unit leaves the storm\'s area of effect.\nUnits receive the debuff whenever they are in the storm, even after having it removed from leaving the area.\nIf the target Udyr has most recently attacked is invalid and there are no nearby enemies then the storm will follow him instead.\nThe storm can follow Udyr regardless of how far away he is from it.\nThe storm will remain active even if Udyr dies. Any commands it was issued to follow a target will not be interrupted.\nThe storm will follow its target even if they are not  visible, but only for up to 1 second.\nIf it does not gain vision of its target within that time, it changes its target.\nThe storm is obstructed by terrain. If it encounters terrain, then it will automatically navigate its path towards the target.\nThe empowered attacks will not trigger nor be consumed if they hit a structure or ward or are parried.',
        blurb: 'Storm Stance:  Udyr summons a blizzard around himself for a few seconds that continuously deals magic damage and  slows enemies inside. His next two basic attacks each cause the blizzard to deal a burst of additional magic damage to enemies inside it.',
        speed: '109.5 : 250 (based on level)',
        castTime: 'none',
        effectRadius: '370 /  1300',
        maxCharges: -1,
      },
    ],
  },
  lore: 'The most powerful spirit walker alive, Udyr communes with all the spirits of the Freljord, whether by empathically understanding their needs, or by channeling and transforming their ethereal energy into his own primal fighting style. He seeks balance within, so that his mind does not get lost amidst others, but he also seeks balance without—for the Freljord\'s mystical landscape can only thrive with the growth that comes from conflict and struggle, and Udyr knows that sacrifices must be made to keep peaceful stagnance at bay.',
}
export default champion