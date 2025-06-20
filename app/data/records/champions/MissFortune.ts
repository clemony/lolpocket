// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion = {
  id: 21,
  key: 'MissFortune',
  name: 'Miss Fortune',
  title: 'the Bounty Hunter',
  fullName: 'Sarah Fortune',
  resource: 'Mana',
  attackType: 'Ranged',
  stats: {
    health: {
      flat: 640,
      perLevel: 103,
    },
    healthRegen: {
      flat: 3.75,
      perLevel: 0.65,
    },
    mana: {
      flat: 300,
      perLevel: 40,
    },
    manaRegen: {
      flat: 8,
      perLevel: 0.8,
    },
    armor: {
      flat: 25,
      perLevel: 4,
    },
    magicResistance: {
      flat: 30,
      perLevel: 1.3,
    },
    attackDamage: {
      flat: 53,
      perLevel: 2.4,
    },
    movespeed: {
      flat: 325,
    },
    acquisitionRadius: {
      flat: 800,
    },
    selectionRadius: {
      flat: 100,
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
      flat: 0.656,
      perLevel: 3,
    },
    attackSpeedRatio: {
      flat: 0.656,
    },
    attackCastTime: {
      flat: 0.3,
    },
    attackTotalTime: {
      flat: 1.6,
    },
    attackDelayOffset: {
      flat: -0.152,
    },
    attackRange: {
      flat: 550,
    },
  },
  positions: [
    'Bottom',
  ],
  roles: [
    'Mage',
    'Marksman',
  ],
  attributeRatings: {
    damage: 3,
    toughness: 1,
    control: 1,
    mobility: 1,
    utility: 1,
    abilityReliance: 30,
    difficulty: 1,
  },
  abilities: {
    P: [
      {
        name: 'Love Tap',
        icon: 'https://cdn.communitydragon.org/latest/champion/MissFortune/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Miss Fortune\'s basic attacks are empowered to apply a mark that expires upon attacking a new enemy. If the enemy was unmarked, this also deals 50% - 100% (based on level) AD bonus physical damage, halved to 25% - 50% (based on level) AD against minions.</p>',
          },
        ],
        targeting: 'Passive',
        affects: 'Enemies',
        damageType: 'Physical damage',
        spellEffects: 'Proc',
        notes: 'With  Runaan\'s Hurricane, Love Tap only applies to the primary target.\nThe bonus damage applies  life steal.\nThe empowered attack will not trigger against buildings.',
        blurb: 'Innate:  Miss Fortune\'s basic attacks apply a mark that expires when attacking a new enemy. If the enemy was unmarked, this also deals bonus physical damage.',
      },
    ],
    Q: [
      {
        name: 'Double Up',
        icon: 'https://cdn.communitydragon.org/latest/champion/MissFortune/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Miss Fortune fires a shot at the target enemy that deals physical damage, triggers on-attack effects, and bounces to hit another enemy behind them, applying on-hit effects to both enemies hit.</p>',
            leveling: [
              {
                attribute: 'Physical Damage',
                modifiers: [
                  {
                    values: [
                      20,
                      45,
                      70,
                      95,
                      120,
                    ],
                  },
                  {
                    values: [
                      100,
                    ],
                    units: [
                      '% AD',
                    ],
                  },
                  {
                    values: [
                      35,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'Double Up\'s bounce is affected by critical strike modifiers. If Double Up kills the primary target, the bounce will critically strike.',
          },
          {
            description: 'The bounce prioritizes units directly behind the primary target. A target does not have to be visible to be hit by the bounce.',
          },
        ],
        cost: [
          40,
        ],
        cooldown: [
          7,
          6,
          5,
          4,
          3,
        ],
        targeting: 'Unit',
        affects: 'Enemies',
        spellshieldable: 'Special',
        resource: 'Mana',
        damageType: 'Physical damage',
        spellEffects: 'special',
        projectile: 'TRUE',
        notes: 'Double Up deals  basic damage to both targets, but also triggers spell effects by also being tagged as  spell damage.\n Spell shields can be used by either target. If it is on the primary target, the spell shield will not prevent the shot from bouncing.\nNeutral units count as valid targets to bounce.\nThe bounce follows a priority order on targets behind in a certain angle:\n500 units in 20°.\n500 units in 40°.\n500 units in 110°.\n150 units in 160°.\nDouble Up\'s cast range adjusts based on Miss Fortune\'s  attack range, which can be increased by items such as  Rapid Firecannon.\nThe damage of a  critically striking shot is 35 / 70 / 105 / 140 / 175 (+ 175% AD) (+ 61.25% AP) physical damage, increased to 42 / 84 / 126 / 168 / 210 (+ 210% AD) (+ 73.5% AP) physical damage by  Infinity Edge\'s bonus critical damage.\nIf there is no secondary target, the shot will not bounce and the dud will instead fall to the ground.\nThe dud lands on the ground 176 units behind the primary target and has a missile speed of 400 on its way there.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).',
        blurb: 'Active:  Miss Fortune fires a shot at the target enemy that deals physical damage, which then bounces to hit another enemy behind them. This applies  on-hit effects to both enemies hit.',
        speed: '1400',
        angle: '160°',
        castTime: 'Basic Attack Timer',
        effectRadius: '500',
        targetRange: 'Miss Fortune\'s  attack range',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Strut',
        icon: 'https://cdn.communitydragon.org/latest/champion/MissFortune/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Miss Fortune gains bonus movement speed after 4 seconds without taking non- persistent damage. This bonus is increased after another 3 seconds, and is granted instantly whenever Strut is cast or upon respawning.</p>',
            leveling: [
              {
                attribute: 'Bonus Movement Speed',
                modifiers: [
                  {
                    values: [
                      30,
                      35,
                      40,
                      45,
                      50,
                    ],
                  },
                ],
              },
              {
                attribute: 'Increased Bonus Movement Speed',
                modifiers: [
                  {
                    values: [
                      60,
                      70,
                      80,
                      90,
                      100,
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Miss Fortune gains bonus attack speed for 4 seconds.</p>',
            leveling: [
              {
                attribute: 'Bonus Attack Speed',
                modifiers: [
                  {
                    values: [
                      40,
                      55,
                      70,
                      85,
                      100,
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
            description: 'Marking a new target with Love Tap reduces Strut\'s current cooldown by 2 seconds.',
          },
        ],
        cost: [
          45,
        ],
        cooldown: [
          12,
        ],
        targeting: 'Auto',
        affects: 'Self',
        resource: 'Mana',
        notes: 'No additional notes.',
        blurb: 'Passive:  Miss Fortune gains  bonus movement speed after a few seconds without being attacked. This bonus is increased after another few seconds, and is granted instantly whenever Strut is cast.',
        castTime: 'none',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Make It Rain',
        icon: 'https://cdn.communitydragon.org/latest/champion/MissFortune/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Miss Fortune casts a storm of bullets at the target location for 2 seconds, granting sight of the area, dealing magic damage every 0.25 seconds to enemies within, and slowing them by 40% (+ 6% per 100 AP).</p>',
            leveling: [
              {
                attribute: 'Magic Damage Per Tick',
                modifiers: [
                  {
                    values: [
                      8.75,
                      12.5,
                      16.25,
                      20,
                      23.75,
                    ],
                  },
                  {
                    values: [
                      15,
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
                      70,
                      100,
                      130,
                      160,
                      190,
                    ],
                  },
                  {
                    values: [
                      120,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
            ],
          },
        ],
        cost: [
          80,
        ],
        cooldown: [
          18,
          17,
          16,
          15,
          14,
        ],
        targeting: 'Location',
        affects: 'Enemies',
        spellshieldable: 'False',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'aoedot',
        notes: 'Make It Rain\'s  slow cannot be  cleansed.',
        blurb: 'Active:  Miss Fortune casts a storm of bullets at the target location for a short time, which continually deals magic damage and  slows enemies within.',
        castTime: '0.25',
        effectRadius: '200',
        targetRange: '1000',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'Bullet Time',
        icon: 'https://cdn.communitydragon.org/latest/champion/MissFortune/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Miss Fortune channels for up to 3 seconds, firing a number of waves of bullets in the target direction. Each wave is in a spread of 6 projectiles that deals 75% AD (+ 25% AP) physical damage to enemies hit.</p>',
            leveling: [
              {
                attribute: 'Total Waves',
                modifiers: [
                  {
                    values: [
                      14,
                      16,
                      18,
                    ],
                  },
                ],
              },
              {
                attribute: 'Maximum Total Physical Damage',
                modifiers: [
                  {
                    values: [
                      1050,
                      1200,
                      1350,
                    ],
                    units: [
                      '% AD',
                    ],
                  },
                  {
                    values: [
                      350,
                      400,
                      450,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Wave Interval Time',
                modifiers: [
                  {
                    values: [
                      0.2036,
                      0.1781,
                      0.1583,
                    ],
                    units: [
                      ' seconds',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'Each of the waves can critically strike for (120% + 8%) damage.',
          },
        ],
        cost: [
          100,
        ],
        cooldown: [
          120,
          110,
          100,
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'False',
        resource: 'Mana',
        damageType: 'Physical damage',
        spellEffects: 'aoedot',
        projectile: 'TRUE',
        notes: 'The damage dealt by each wave of Bullet Time is calculated when the wave reaches the target.\nMiss Fortune  reveals herself for 4.5 seconds if there is an enemy champion within the area.\nTargets cannot be damaged by more than one projectile per wave.\nThe bullet streams that each fire 1 projectile per wave are spead by 6° between one another, aiming towards the angles +-3/9/15° from Miss Fortune\'s facing direction.\nBullet time picks 6 locations on the ground 500 units from Miss Fortune (with the aforementioned angles) and fires a bullet stream towards each.\nIf Miss Fortune is moved to a new location, these locations will update (since patch V13.3); the cone will fire towards her new facing direction.\nBullet time fires the first wave at 0.066 seconds, and the last at 2.904 seconds. Times between waves are equally spread between these values.\nMiss Fortune may cancel the last ~0.1 seconds of channel time at no loss of effect.\nThe following table refers for interactions while Miss Fortune is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nInterrupts\n\n\nAbilities\n\nInterrupts\n\n\nMovement\n\nInterrupts\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects',
        speed: '2000',
        width: '40',
        angle: '30°',
        castTime: 'none',
        effectRadius: '1450',
        maxCharges: -1,
      },
    ],
  },
  lore: 'A Bilgewater captain famed for her looks but feared for her ruthlessness, Sarah Fortune paints a stark figure among the hardened criminals of the port city. As a child, she witnessed the reaver king Gangplank murder her family—an act she brutally avenged years later, blowing up his flagship while he was still aboard. Those who underestimate her will face a beguiling and unpredictable opponent… and, likely, a bullet or two in their guts.',
}
export default champion