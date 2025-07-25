// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion = {
  id: 11,
  key: 'MasterYi',
  name: 'Master Yi',
  title: 'the Wuju Bladesman',
  resource: 'Mana',
  attackType: 'Melee',
  stats: {
    health: {
      flat: 669,
      perLevel: 105,
    },
    healthRegen: {
      flat: 7.5,
      perLevel: 0.65,
    },
    mana: {
      flat: 251,
      perLevel: 42,
    },
    manaRegen: {
      flat: 7.25,
      perLevel: 0.45,
    },
    armor: {
      flat: 33,
      perLevel: 4.2,
    },
    magicResistance: {
      flat: 32,
      perLevel: 2.05,
    },
    attackDamage: {
      flat: 65,
      perLevel: 2.8,
    },
    movespeed: {
      flat: 355,
    },
    acquisitionRadius: {
      flat: 600,
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
      flat: 0.679,
      perLevel: 2.5,
    },
    attackSpeedRatio: {
      flat: 0.679,
    },
    attackCastTime: {
      flat: 0.3,
    },
    attackTotalTime: {
      flat: 1.6,
    },
    attackDelayOffset: {
      flat: -0.056,
    },
    attackRange: {
      flat: 175,
    },
  },
  positions: [
    'Jungle',
  ],
  roles: [
    'Assassin',
    'Fighter',
    'Skirmisher',
  ],
  attributeRatings: {
    damage: 3,
    toughness: 1,
    control: 1,
    mobility: 2,
    utility: 1,
    abilityReliance: 10,
    difficulty: 1,
  },
  abilities: {
    P: [
      {
        name: 'Double Strike',
        icon: 'https://cdn.communitydragon.org/latest/champion/MasterYi/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Master Yi\'s basic attacks on-hit generate a stack of Double Strike for 4 seconds, refreshing on subsequent hits and stacking up to 3 times. At 3 stacks, Master Yi\'s next basic attack on-attack is empowered to consume the stacks on-hit and strike twice, the second strike dealing 50% AD physical damage.</p>',
          },
          {
            description: 'The second strike applies on-hit effects, triggers on-attack effects, and is affected by critical strike modifiers.',
          },
          {
            description: 'If Master Yi\'s primary target is killed before the second strike, he will automatically target another enemy within 300 range.',
          },
          {
            description: 'The second strike can critically strike against structures.',
          },
        ],
        targeting: 'Passive',
        affects: 'Enemies',
        damageType: 'Physical damage',
        spellEffects: 'attack',
        notes: 'The second strike separately rolls a  critical strike.\nDouble Strike does not cause Master Yi to attack twice. Effects that trigger on completing the attack windup will only trigger once and thus do not interact with Double Strike. (e.g.  Hail of Blades).\nSince Double Strike resets the counter with the first strike, and the second strike applies on-hit effects, the second strike is able to add a stack for the next Double Strike activation.\nIf Double Strike\'s target becomes  untargetable shortly after the triggering attack, it will still occur and deal its effects as usual.\nBasic attacks that are  dodged,  blocked, or missed while Master Yi is  blinded will not generate any stacks of Double Strike nor refresh the duration of active stacks.\nDouble Strike\'s interaction with parry effects at 3 stacks (the damage of the strikes is negated in all cases):\nIf the triggering basic attack is  dodged, Master Yi will not perform the second strike nor consume the stacks.\nIf the triggering basic attack is  blocked, Master Yi will perform the second strike but not consume the stacks.\nIf the triggering basic attack misses while Master Yi is  blinded, he will consume the stacks.\nThe second strike will fail to hit the target at all if the triggering attack misses. On-attack effects do not occur, despite the attack animation playing.(bug)',
        blurb: 'Innate:  Master Yi\'s basic attacks generate a stack of Double Strike for a few seconds. At 3 stacks, his next basic attack will consume them all to strike a second time for reduced physical damage.',
      },
    ],
    Q: [
      {
        name: 'Alpha Strike',
        icon: 'https://cdn.communitydragon.org/latest/champion/MasterYi/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Master Yi vanishes and becomes unable to act. After 0.231 seconds, he marks the target enemy and then proceeds to mark the nearest visible un-marked enemy within 600 units, recurring every 0.231 seconds[ up to 3 times. ][ for a total of 4 marks. ]If there are no other un-marked targets before then, Master Yi can mark the same enemies again. During Alpha Strike, Master Yi can select a direction from the primary target.</p>',
          },
          {
            description: 'Upon finishing marking, Master Yi reappears 75 units in the targeted direction, or in front of the target otherwise, and then becomes able to act again[ after 0.165 seconds. ][ 1.087 seconds total after the start of the cast with 4 bounces. ]If the primary target dies or is too far away during the delay, Master Yi will reappear at the initial cast location instead.',
          },
          {
            description: 'Master Yi then detonates the marks to deal physical damage and apply on-hit effects, with on-hit damage reduced to 75% effectiveness. Marks after the first on the same target instead detonate instantly upon application to deal 25% damage and apply on-hit effects, with on-hit damage reduced to 18.75% effectiveness. Alpha Strike deals bonus physical damage to monsters per hit.',
            leveling: [
              {
                attribute: 'Primary Physical Damage',
                modifiers: [
                  {
                    values: [
                      30,
                      60,
                      90,
                      120,
                      150,
                    ],
                  },
                  {
                    values: [
                      50,
                    ],
                    units: [
                      '% AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'Reduced Damage per hit',
                modifiers: [
                  {
                    values: [
                      7.5,
                      15,
                      22.5,
                      30,
                      37.5,
                    ],
                  },
                  {
                    values: [
                      12.5,
                    ],
                    units: [
                      '% AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'Maximum Single-Target Damage',
                modifiers: [
                  {
                    values: [
                      52.5,
                      105,
                      157.5,
                      210,
                      262.5,
                    ],
                  },
                  {
                    values: [
                      87.5,
                    ],
                    units: [
                      '% AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'Primary Bonus Monster Damage',
                modifiers: [
                  {
                    values: [
                      65,
                      90,
                      115,
                      140,
                      165,
                    ],
                  },
                ],
              },
              {
                attribute: 'Combined Primary Monster Damage',
                modifiers: [
                  {
                    values: [
                      95,
                      150,
                      205,
                      260,
                      315,
                    ],
                  },
                  {
                    values: [
                      50,
                    ],
                    units: [
                      '% AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'Reduced Monster Damage per hit',
                modifiers: [
                  {
                    values: [
                      23.75,
                      37.5,
                      51.25,
                      65,
                      78.75,
                    ],
                  },
                  {
                    values: [
                      12.5,
                    ],
                    units: [
                      '% AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'Max Single-Target Monster Damage',
                modifiers: [
                  {
                    values: [
                      166.25,
                      262.5,
                      358.75,
                      455,
                      551.25,
                    ],
                  },
                  {
                    values: [
                      87.5,
                    ],
                    units: [
                      '% AD',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'Alpha Strike\'s primary and lesser damage can critically strike for[ (175% + 40%) and (43.75% + 10%) damage respectively. ][ 100% + 100% of bonus critical damage damage, reduced to 25% for the lesser damage. ]',
          },
          {
            description: 'Basic attacks on-hit reduce Alpha Strike\'s current cooldown by 1 second, affected by ability haste.',
          },
          {
            description: 'Wuju Style and Highlander can be cast during Alpha Strike. Each time Alpha Strike hits a target, the current durations of Wuju Style and Highlander are refreshed. Alpha Strike does not trigger its cooldown reduction nor grant a stack of Double Strike when applying on-hit effects.',
          },
        ],
        cost: [
          50,
          55,
          60,
          65,
          70,
        ],
        cooldown: [
          20,
          19.5,
          19,
          18.5,
          18,
        ],
        targeting: 'Unit',
        affects: 'Self, Enemies',
        spellshieldable: 'Special',
        resource: 'Mana',
        damageType: 'Physical damage',
        spellEffects: 'AoE',
        notes: 'Editor\'s note: Internally, Alpha Strike\'s critical damage is calculated as a percentage of the default bonus damage dealt by a critical strike on top of the base damage (175% − 100%). The in-game tooltip for the maximum single-target damage when all hits  critically strike is incorrect when this percentage is different from 100% and thus may calculate a larger or smaller number than what Alpha Strike actually deals.\nFor example, if this percentage is 75% then the tooltip would multiply the non-critical strike number by 100% + Alpha Strike\'s 75% bonus critical damage modifier = 175% total damage instead of the proper 100% + (Alpha Strike\'s 75% bonus critical damage modifier × (175-100)% bonus critical damage) = 156.25% total damage.\nAlpha Strike\'s primary damage applies after Master Yi reappears.\nAlpha Strike\'s  cooldown reduction applies on  structures.\nWhen Master Yi bounces from a unit it will grant  vision in a 600 radius around it for up-to 0.627 seconds after Alpha Strike ends, including across terrain, though not into  brushes.\nIt will always grant vision around the primary target, even if he doesn\'t bounce off it.\nAlpha Strike\'s damage is calculated at the moment that each mark is placed. Because of this, it is possible to inflict differing amounts of damage if Master Yi\'s AD changes between marks.\nMaster Yi will follow all his primary target\'s movements.\nAlpha Strike can only follow up-to 2000 units; If the target teleports a very long distance, it will not be followed.\nWhile vanished, the initial cast location of Alpha Strike counts as Master Yi\'s position, which is considered for effects such as  tethers.\nIf the primary target becomes  untargetable and there are no other nearby valid targets, Alpha Strike will end prematurely and will not deal the damage occurring after Master Yi\'s reappearance.\nThe choice of exit direction occurs through an indicator anchored to the target during the time that Master Yi is vanished. You are unable to choose the exit direction after the third mark.(bug) Selection commands (default: MB1/left click) and movement commands (default: MB2/right click) are both valid.\nMultiple commands can be issued, but only the final command before exiting will determine the direction.\nIf the primary target is a champion, Master Yi will be automatically ordered to basic attack them after Alpha Strike ends.\nMaster Yi will not be able to buffer other abilities.(bug)\nOnly the first instance of damage counts as a hit for effects such as  Conqueror,  Electrocute and  Eclipse\'s Ever Rising Moon.\nAlpha Strike does not interact with  Sejuani\'s  Permafrost,  Press the Attack or  Kraken Slayer\'s Bring It Down.(note)\n Spell shield will only block a single instance of damage.\nOn-hit damage applied by Alpha Strike will be negated by  dodge and  block, but not while Master Yi is  blinded.\nAlpha Strike\'s own damage will not be negated.\nIf Master Yi  dies during Alpha Strike and he is only focusing one target, the ability will only deal the reduced damage strikes and not the final tick of damage from reappearing.\nIf he is striking multiple targets the damage will be dealt immediately when dying, and if he dies before the bounce from the last target, Alpha Strike will deal reduced damage only to all units he already bounced from.(bug)\nIf Master Yi enters  resurrection during Alpha Strike and he is only focusing one target, the ability will deal the reduced damage strikes as normal and the final tick of damage after being resurrected.\nIf he is striking multiple targets, Alpha Strike will sometimes deal the reduced damage from repeated bounces and the main damage after being resurrected, and sometimes only the reduced damage, unrelated to the number of targets available.(bug)\nThe following table refers for interactions while Master Yi is performing Alpha Strike:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Wuju Style and  Highlander are usable.  Meditate is disabled.\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath',
        blurb: 'Active:  Master Yi briefly  vanishes and marks the target enemy, then rapidly marks up to 3 other nearby enemies. If there are no other eligible targets before then, Master Yi can mark the same enemies again.',
        castTime: 'none',
        effectRadius: '600',
        targetRange: '600',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Meditate',
        icon: 'https://cdn.communitydragon.org/latest/champion/MasterYi/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Master Yi channels for up to 4 seconds, healing himself every 0.5 seconds, increased by 0% - 100% (based on missing health).</p>',
            leveling: [
              {
                attribute: 'Minimum Heal Per Tick',
                modifiers: [
                  {
                    values: [
                      15,
                      25,
                      35,
                      45,
                      55,
                    ],
                  },
                  {
                    values: [
                      12.5,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Maximum Heal Per Tick',
                modifiers: [
                  {
                    values: [
                      30,
                      50,
                      70,
                      90,
                      110,
                    ],
                  },
                  {
                    values: [
                      25,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Minimum Total Heal',
                modifiers: [
                  {
                    values: [
                      120,
                      200,
                      280,
                      360,
                      440,
                    ],
                  },
                  {
                    values: [
                      100,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Maximum Total Heal',
                modifiers: [
                  {
                    values: [
                      240,
                      400,
                      560,
                      720,
                      880,
                    ],
                  },
                  {
                    values: [
                      200,
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
            description: 'While channeling, Master Yi gains 70% damage reduction for the first 0.5 seconds, which is then modified to a reduced amount for the remaining duration of the channel. Meditate\'s damage reduction is halved against turrets and lingers for 0.5 seconds after the channel ends.',
            leveling: [
              {
                attribute: 'Modified Damage Reduction',
                modifiers: [
                  {
                    values: [
                      45,
                      47.5,
                      50,
                      52.5,
                      55,
                    ],
                    units: [
                      '%',
                    ],
                  },
                ],
              },
              {
                attribute: 'Turret Modified Damage Reduction',
                modifiers: [
                  {
                    values: [
                      22.5,
                      23.75,
                      25,
                      26.25,
                      27.5,
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
            description: 'Meditate resets Master Yi\'s basic attack timer, pauses Wuju Style\'s and Highlander\'s duration, and grants one stack of Double Strike per second during the channel.',
          },
        ],
        cost: [
          40,
        ],
        cooldown: [
          10,
        ],
        targeting: 'Auto',
        affects: 'Self',
        resource: 'Mana / s',
        notes: 'Meditate\'s healing amount updates dynamically as he heals himself, making Master Yi heal for less as his current health increases.\nThe first tick of healing may occur at any moment on the first 0.5 seconds of the channel. This means immediately canceling the channel for the attack reset does not guarantee one tick of healing, though it may occur with some chance.\nThe following table refers for interactions while Master Yi is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nInterrupts\n\n\nAbilities\n\nInterrupts\n\n\nMovement\n\nInterrupts\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects',
        castTime: 'none',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Wuju Style',
        icon: 'https://cdn.communitydragon.org/latest/champion/MasterYi/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Master Yi empowers his basic attacks within the next 5 seconds to deal bonus true damage on-hit.</p>',
            leveling: [
              {
                attribute: 'Bonus True Damage',
                modifiers: [
                  {
                    values: [
                      20,
                      25,
                      30,
                      35,
                      40,
                    ],
                  },
                  {
                    values: [
                      35,
                    ],
                    units: [
                      '% bonus AD',
                    ],
                  },
                ],
              },
            ],
          },
        ],
        cost: [
          0,
        ],
        cooldown: [
          14,
        ],
        targeting: 'Auto',
        affects: 'Self',
        damageType: 'True damage',
        spellEffects: 'Proc',
        notes: 'Wuju Style can be cast during  Alpha Strike.\nWuju Style can\'t be cast while it is already active.\nWuju Style\'s bonus true damage does not interact with  critical strikes.\nWuju Style\'s bonus true damage cannot be  blocked but can be  dodged and/or missed if Master Yi is  blinded.\nThe attacks do not deal the bonus damage against structures.\nWhile Wuju Style is active, the damage will dynamically update its calculations.',
        blurb: 'Active:  Master Yi empowers his sword, causing his basic attacks to deal  bonus true damage  on-hit for a few seconds.',
        castTime: 'none',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'Highlander',
        icon: 'https://cdn.communitydragon.org/latest/champion/MasterYi/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Scoring a champion takedown reduces the current cooldowns of Master Yi\'s basic abilities by 70%.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Master Yi cleanses himself from all slows and cripples. For the next 7 seconds, he gains ghosting, bonus attack speed, bonus movement speed, slow immunity, and cripple immunity.</p>',
            leveling: [
              {
                attribute: 'Bonus Attack Speed',
                modifiers: [
                  {
                    values: [
                      25,
                      45,
                      65,
                    ],
                    units: [
                      '%',
                    ],
                  },
                ],
              },
              {
                attribute: 'Bonus Movement Speed',
                modifiers: [
                  {
                    values: [
                      35,
                      45,
                      55,
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
            description: 'While active, scoring a champion takedown extends Highlander\'s duration by 7 seconds.',
          },
        ],
        cost: [
          100,
        ],
        cooldown: [
          85,
        ],
        targeting: 'Auto',
        affects: 'Self',
        resource: 'Mana',
        notes: 'Highlander can be cast during  Alpha Strike.\nThere are two situations that can happen if Master Yi uses Highlander while Highlander\'s buff is active.\nIf the buff\'s duration is under 7 seconds, the buff refreshes to 7 seconds.\nIf the buff\'s duration is above 7 seconds, nothing happens.',
        blurb: 'Passive: Scoring a champion  takedown massively  reduces the current cooldowns of  Master Yi\'s basic abilities.',
        castTime: 'none',
        maxCharges: -1,
      },
    ],
  },
  lore: 'Master Yi has tempered his body and sharpened his mind, so that thought and action have become almost as one. Though he chooses to enter into violence only as a last resort, the grace and speed of his blade ensures resolution is always swift. As one of the last living practitioners of the Ionian art of Wuju, Yi has devoted his life to continuing the legacy of his people—scrutinizing potential new disciples with the Seven Lenses of Insight to identify the most worthy among them.',
}
export default champion