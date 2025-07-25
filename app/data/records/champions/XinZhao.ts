// Updated Patch 25.11 - 06/16/2025 01:01:43 PM CDT

const champion: Champion = {
  id: 5,
  key: 'XinZhao',
  name: 'Xin Zhao',
  title: 'the Seneschal of Demacia',
  fullName: 'Xin Zhao',
  resource: 'Mana',
  attackType: 'Melee',
  stats: {
    health: {
      flat: 640,
      perLevel: 106,
    },
    healthRegen: {
      flat: 8,
      perLevel: 0.7,
    },
    mana: {
      flat: 274,
      perLevel: 55,
    },
    manaRegen: {
      flat: 7.25,
      perLevel: 0.45,
    },
    armor: {
      flat: 35,
      perLevel: 4.4,
    },
    magicResistance: {
      flat: 32,
      perLevel: 2.05,
    },
    attackDamage: {
      flat: 63,
      perLevel: 3,
    },
    movespeed: {
      flat: 345,
    },
    acquisitionRadius: {
      flat: 800,
    },
    selectionRadius: {
      flat: 108.333,
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
      flat: 0.645,
      perLevel: 3.5,
    },
    attackSpeedRatio: {
      flat: 0.645,
    },
    attackCastTime: {
      flat: 0.29,
    },
    attackTotalTime: {
      flat: 1.55,
    },
    attackRange: {
      flat: 175,
    },
  },
  positions: [
    'Jungle',
  ],
  roles: [
    'Diver',
    'Fighter',
    'Tank',
  ],
  attributeRatings: {
    damage: 2,
    toughness: 2,
    control: 2,
    mobility: 2,
    utility: 1,
    abilityReliance: 35,
    difficulty: 1,
  },
  abilities: {
    P: [
      {
        name: 'Determination',
        icon: 'https://cdn.communitydragon.org/latest/champion/XinZhao/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Xin Zhao\'s basic attacks on-hit and Wind Becomes Lightning strikes generate a stack of Determination, stacking up to 3 times. The third stack consumes them all to deal 15 / 30 / 45 / 60% (based on level) AD bonus physical damage on-attack and heal Xin Zhao for 3 / 3.5 / 4% (based on level) of his maximum health (+ 65% AP) on-hit.</p>',
          },
        ],
        targeting: 'Passive',
        affects: 'Self',
        spellshieldable: 'special',
        damageType: 'Physical damage',
        spellEffects: 'proc',
        notes: 'The healing and bonus damage work on different stacking systems, each counting its stacks and being consumed separately. While both stack  on-hit, the bonus damage stacks are consumed on-attack, and the healing ones  on-hit.\nThe healing stacks are denoted in the buff-bar.\nIf  Guinsoo\'s Rageblade were to trigger when the stacks are at maximum, they will grant the healing but not the bonus damage, thus causing an out-of-sync between the stacks shown in-game versus when the bonus damage is dealt.\nThe stack counter displays 1:3 rather than the usual 0:2, meaning that a count of 1 does not translate to having 1 stack.\n Wind Becomes Lightning\'s strikes generate one stack per strike that hits at least one enemy.\nStacks reset when Xin Zhao  dies.\nStacks of Determination will be gained even if the attack is  blocked.\nPENDING FOR TEST:: Determination\'s interaction with parrying effects ( dodge,  blind).\nDetermination deals  proc damage.\nSince it is a separate instance of damage when applied by basic attack or either of  Wind Becomes Lightning\'s strikes, flat damage reduction that applies to both the main and bonus damage such as  Amumu\'s  Tantrum\'s passive will reduce each, for twice the reduction.\nThe bonus damage cannot  critically strike.\nWhen applied by a basic attack:\nThe attack uses a unique animation.\nThe bonus damage benefits from  life steal.\nPENDING FOR TEST: It applies life steal specifically.\nNeither the bonus damage or heal will be blocked by  spell shield.\nWhen applied by either of  Wind Becomes Lightning\'s strikes:\nTriggers against the closest target struck by the strike (equals first target to receive spell effects).\nDoes not benefit from  life steal, including not healing from Wind Becomes Lightning\'s 33% conversion for this bonus damage.\nSince  proc damage is \'single target\',  Vamp will heal from 100% of the bonus damage.\nThe bonus damage will be blocked by  spell shield, the heal will not.',
        blurb: 'Innate:  Xin Zhao\'s basic attacks and  Wind Becomes Lightning strikes generate a stack of Determination, stacking up to 3 times.',
      },
    ],
    Q: [
      {
        name: 'Three Talon Strike',
        icon: 'https://cdn.communitydragon.org/latest/champion/XinZhao/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Xin Zhao empowers his next three basic attacks on-attack within 5 seconds to each have an uncancellable windup, deal bonus physical damage and reduce his other abilities\' current cooldowns by 1 second. Each attack refreshes the duration.</p>',
            leveling: [
              {
                attribute: 'Bonus Physical Damage',
                modifiers: [
                  {
                    values: [
                      20,
                      35,
                      50,
                      65,
                      80,
                    ],
                  },
                  {
                    values: [
                      40,
                    ],
                    units: [
                      '% bonus AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'Total Bonus Physical Damage',
                modifiers: [
                  {
                    values: [
                      60,
                      105,
                      150,
                      195,
                      240,
                    ],
                  },
                  {
                    values: [
                      120,
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
            description: 'The third attack knocks up the target for 0.75 seconds.',
          },
          {
            description: 'Three Talon Strike\'s bonus damage is affected by critical strike modifiers.',
          },
          {
            description: 'Three Talon Strike resets Xin Zhao\'s basic attack timer.',
          },
        ],
        cost: [
          30,
        ],
        cooldown: [
          7,
          6.5,
          6,
          5.5,
          5,
        ],
        targeting: 'Auto',
        affects: 'Enemies',
        spellshieldable: 'Special',
        resource: 'Mana',
        damageType: 'Physical damage',
        spellEffects: 'spell',
        notes: 'Spell shield will only block the knock up.\nThe enhanced attacks present input buffering during their wind-up animation (Xin Zhao cannot be issued any commands until after it ends).',
        blurb: 'Active:  Xin Zhao empowers his next few attacks within a duration to deal bonus physical damage and  reduce his other ability cooldowns.',
        castTime: 'none',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Wind Becomes Lightning',
        icon: 'https://cdn.communitydragon.org/latest/champion/XinZhao/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Xin Zhao slashes in an arc and, after the cast time, thrusts his spear in a line in the target direction. Each strike deals physical damage to enemies hit, modified to 50% - 100% (based on level) against minions.</p>\nThe thrust deals increased damage, further by 0% - 33.3% (based on critical strike chance), and slows enemies hit by 50% for 1.5 seconds. Enemy champions and monsters hit are also marked Challenged for 3 seconds, during which they are revealed.',
            leveling: [
              {
                attribute: 'Slash Physical Damage',
                modifiers: [
                  {
                    values: [
                      30,
                      40,
                      50,
                      60,
                      70,
                    ],
                  },
                  {
                    values: [
                      30,
                    ],
                    units: [
                      '% AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'Thrust Physical Damage',
                modifiers: [
                  {
                    values: [
                      50,
                      85,
                      120,
                      155,
                      190,
                    ],
                  },
                  {
                    values: [
                      90,
                    ],
                    units: [
                      '% AD',
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
                ],
              },
              {
                attribute: 'Total Physical Damage',
                modifiers: [
                  {
                    values: [
                      80,
                      125,
                      170,
                      215,
                      260,
                    ],
                  },
                  {
                    values: [
                      120,
                    ],
                    units: [
                      '% AD',
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
                ],
              },
            ],
          },
          {
            description: 'The durations of Three Talon Strike, Audacious Charge\'s bonus attack speed, and Crescent Guard are delayed relative to Wind Becomes Lightning\'s cast time after 0.2 seconds of its activation.',
          },
          {
            description: 'Wind Becomes Lightning\'s damage heals Xin Zhao for 33.3% of his life steal.',
          },
        ],
        cost: [
          60,
          55,
          50,
          45,
          40,
        ],
        cooldown: [
          12,
          11,
          10,
          9,
          8,
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'Special',
        resource: 'Mana',
        damageType: 'Physical damage',
        spellEffects: 'Area of effect',
        projectile: 'FALSE',
        notes: 'Spell shield will block only a single instance of damage - either the thrust or the slash.\nThe first strike will occur immediately and the second will occur after the cast time completes.\nThis ability will cast from wherever the caster is at the start of the cast time.\nThe first strike will occur from wherever Xin Zhao is at the start of the cast time.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe second strike will occur from wherever Xin Zhao is at the end of the cast time.\nThe first strike\'s hitbox includes a  275 radius 160° cone in front of Xin Zhao and an additional  125 radius around him.\nThe second strike\'s hitbox includes the same  125 radius around Xin Zhao, a missile with  1000 range and  80 total width, and a  -60 radius area check upon the end of the missile.\nThe 125 radius check does not hit champion summoned units.(note)\nBecause Wind Becomes Lightning uses an older type of \'healing based on life steal\' and not applies life steal,  Spirit Visage will amplify the life gain twice (+25% life steal and +25% healing), for a total of +56.25%.',
        blurb: 'Active:  Xin Zhao slashes in an arc, then thrusts his spear in a line in the target direction. Each strike deals physical damage to enemies hit and heals Xin Zhao based on his  life steal.',
        speed: '6250',
        width: '80',
        angle: '160°',
        castTime: '0.5',
        effectRadius: '275 /  125',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Audacious Charge',
        icon: 'https://cdn.communitydragon.org/latest/champion/XinZhao/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Xin Zhao dashes to the target enemy\'s location, dealing magic damage to enemies near them and slowing them by 30% for 0.5 seconds. Audacious Charge\'s range is increased against Challenged targets.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      50,
                      75,
                      100,
                      125,
                      150,
                    ],
                  },
                  {
                    values: [
                      60,
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
            description: 'Xin Zhao then gains bonus attack speed for 5 seconds.',
            leveling: [
              {
                attribute: 'Bonus Attack Speed',
                modifiers: [
                  {
                    values: [
                      40,
                      45,
                      50,
                      55,
                      60,
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
            description: 'Three Talon Strike and Crescent Guard can be cast during the dash.',
          },
        ],
        cost: [
          50,
        ],
        cooldown: [
          11,
        ],
        targeting: 'Unit',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'Area of effect',
        notes: 'The primary target cannot dodge Audacious Charge\'s effects.\nThe target will always emit the area of effect from their position.\nAudacious Charge has a  forgiveness radius of 200 units.',
        blurb: 'Active:  Xin Zhao  dashes to the target enemy, dealing magic damage to nearby enemies and briefly  slowing them. He then gains  bonus attack speed for a few seconds.',
        speed: '2500',
        castTime: 'none',
        effectRadius: '250',
        targetRange: '650 / 1100',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'Crescent Guard',
        icon: 'https://cdn.communitydragon.org/latest/champion/XinZhao/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Passive - Challenge:</span> The last enemy champion hit by Xin Zhao\'s basic attacks or Audacious Charge is marked Challenged for 3 seconds.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Xin Zhao sweeps his spear around him, dealing physical damage to nearby enemies, capped at 600 against monsters, and knocking back all non-Challenged targets hit up-to 700 units over 0.75 seconds, as well as stunning them for the same duration.</p>',
            leveling: [
              {
                attribute: 'Physical Damage',
                modifiers: [
                  {
                    values: [
                      75,
                      175,
                      275,
                    ],
                  },
                  {
                    values: [
                      100,
                    ],
                    units: [
                      '% bonus AD',
                    ],
                  },
                  {
                    values: [
                      110,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                  {
                    values: [
                      15,
                    ],
                    units: [
                      '% of target\'s current health',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'For the next 4 seconds, Xin Zhao is invulnerable against enemy champions far away from him.',
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
        targeting: 'Auto',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Physical damage',
        spellEffects: 'spellaoe',
        projectile: 'FALSE',
        notes: 'Pets,  traps, ground AoEs,  DoTs, and delayed-damage abilities (e.g.  Death Mark,  Explosive Charge,  Hemoplague) will not damage Xin Zhao if the enemy champion source is outside the circle when the damage applies.\nThis ability will cast from wherever the caster is at the end of the cast time.\n Displacement immunity will also resist the application of the  stun.',
        blurb: 'Passive - Challenge: The last enemy champion hit by  Xin Zhao\'s basic attacks or  Audacious Charge is marked Challenged for a short time.',
        castTime: '0.35',
        effectRadius: '500 / 450',
        maxCharges: -1,
      },
    ],
  },
  lore: 'Xin Zhao is a resolute warrior loyal to the ruling Lightshield dynasty. Once condemned to the fighting pits of Noxus, he survived countless gladiatorial bouts, but after being freed by Demacian forces, he swore his life and allegiance to these brave liberators. Armed with his favored three-talon spear, Xin Zhao now fights for his adopted kingdom, audaciously challenging any foe, no matter the odds.',
}
export default champion