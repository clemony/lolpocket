// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion = {
  id: 200,
  key: 'Belveth',
  name: 'Bel\'Veth',
  title: 'the Empress of the Void',
  resource: 'None',
  attackType: 'Melee',
  stats: {
    health: {
      flat: 610,
      perLevel: 99,
    },
    healthRegen: {
      flat: 6,
      perLevel: 0.6,
    },
    armor: {
      flat: 32,
      perLevel: 4.7,
    },
    magicResistance: {
      flat: 32,
      perLevel: 2.05,
    },
    attackDamage: {
      flat: 60,
      perLevel: 1.5,
    },
    movespeed: {
      flat: 340,
    },
    acquisitionRadius: {
      flat: 600,
    },
    selectionRadius: {
      flat: 120,
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
      flat: 0.85,
    },
    attackSpeedRatio: {
      flat: 0.85,
    },
    attackCastTime: {
      flat: 0.3,
    },
    attackTotalTime: {
      flat: 1.6,
    },
    attackDelayOffset: {
      flat: -0.052,
    },
    attackRange: {
      flat: 150,
    },
  },
  positions: [
    'Jungle',
  ],
  roles: [
    'Fighter',
    'Skirmisher',
  ],
  attributeRatings: {
    damage: 3,
    toughness: 1,
    control: 2,
    mobility: 3,
    utility: 1,
    abilityReliance: 0,
    difficulty: 2,
  },
  abilities: {
    P: [
      {
        name: 'Death in Lavender',
        icon: 'https://cdn.communitydragon.org/latest/champion/Belveth/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Bel\'Veth attacks 36% faster than the median champion and her attack speed cap is modified to 9999.0, but all sources of damage (including on-hit damage) dealt by her basic attacks are reduced to 75%. Her attack speed does not increase through growth (per level).</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Bel\'Veth\'s ability casts each generate 2 stacks of Death in Lavender, lasting for 5 seconds, refreshing on basic attacks and subsequent casts, and stacking up to 6 times. While Bel\'Veth has stacks, she becomes ghosted and gains 20% - 40% (based on level) bonus attack speed. Her basic attacks each consume 1 stack.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Whenever Bel\'Veth scores a takedown against a champion, monster, or large minion within 3 seconds of damaging them, she generates a permanent stack of Lavender. Large minions and monsters generate 1 stack, champions and epic monsters generate 2 stacks.</p>\n<p class="ability-effect"><span class="ability-header">Lavender:</span> For each stack, Bel\'Veth gains 0.28% - 1% (based on level) bonus attack speed.</p>',
          },
        ],
        targeting: 'Passive',
        affects: 'Self, Enemies',
        notes: 'Death in Lavender\'s  takedown effect will not trigger against monsters if they were slain by an enemy.\nDeath in Lavender stacks are indicated under Bel\'Veth\'s health bar.\nBel\'Veth\'s basic attack damage modifier will reduce the damage dealt by on-hit effects even if they aren\'t applied on-hit.(bug)',
        blurb: 'Innate:  Bel\'Veth\'s attack speed cap is greatly increased, but her  attack speed does not grow by  leveling up. The damage dealt by her basic attacks (including  on-hit effects) is reduced.',
      },
    ],
    Q: [
      {
        name: 'Void Surge',
        icon: 'https://cdn.communitydragon.org/latest/champion/Belveth/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Bel\'Veth dashes in the designated direction, though not through terrain, dealing physical damage to enemies she passes through. Against the first target, Void Surge can critically strike for (175% + 40%) damage and applies on-hit effects, with on-hit damage reduced to 75% effectiveness, and life steal at 100% effectiveness.</p>',
            leveling: [
              {
                attribute: 'Physical Damage',
                modifiers: [
                  {
                    values: [
                      10,
                      15,
                      20,
                      25,
                      30,
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
                ],
              },
            ],
          },
          {
            description: 'Void Surge deals bonus physical damage to monsters and modified damage against minions.',
            leveling: [
              {
                attribute: 'Monster Bonus Physical Damage',
                modifiers: [
                  {
                    values: [
                      45,
                      55,
                      65,
                      75,
                      85,
                    ],
                  },
                ],
              },
              {
                attribute: 'Total Monster Damage',
                modifiers: [
                  {
                    values: [
                      55,
                      70,
                      85,
                      100,
                      115,
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
                ],
              },
              {
                attribute: 'Modified Minion Damage',
                modifiers: [
                  {
                    values: [
                      60,
                      70,
                      80,
                      90,
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
            description: 'Void Surge can be cast only within a cardinal direction that is off cooldown, and incurs a cooldown between casts. Each cardinal direction has a unique cooldown that is reduced equivalent to 0.25 ability haste per 1% bonus attack speed. These cooldowns reset upon respawning.',
          },
          {
            description: 'Void Surge resets Bel\'Veth\'s basic attack timer.',
          },
        ],
        cost: [
          0,
        ],
        cooldown: [
          1,
        ],
        targeting: 'Direction',
        affects: 'Self, Enemies',
        spellshieldable: 'true',
        damageType: 'Physical damage',
        spellEffects: 'Special',
        notes: 'Applies  area damage and procs  basic damage required effects.\nThe icon partially darkens based on the combination of dashes available. When all dashes are expended, the cooldown indicates the next available dash.\nWhile in  True Form, Void Surge\'s dash distance is extended up to 225 units when targeted across terrain.\nThe basic attack reset is not considered one for  Hail of Blades.\nVoid Surge can be  dodged and  blocked only as the first enemy hit.',
        blurb: 'Active:  Bel\'Veth  dashes in the target direction, though not through terrain, dealing physical damage to enemies she passes through.',
        collisionRadius: '100',
        speed: '800 / 850 / 900 / 950 / 1000 + 100% movement speed',
        castTime: 'None',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Above and Below',
        icon: 'https://cdn.communitydragon.org/latest/champion/Belveth/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Bel\'Veth slams her tail down in the target direction that deals magic damage to enemies hit, knocks them up for 0.75 seconds, and slows them by 50% for a duration.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      70,
                      110,
                      150,
                      190,
                      230,
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
                      125,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Slow Duration',
                modifiers: [
                  {
                    values: [
                      1.25,
                      1.5,
                      1.75,
                      2,
                      2.25,
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
            description: 'If this hits an enemy champion, it resets Void Surge\'s dash cooldown of the target direction.',
          },
        ],
        cost: [
          0,
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
        spellshieldable: 'true',
        damageType: 'Magic damage',
        spellEffects: 'spellaoe',
        projectile: 'FALSE',
        notes: 'This ability will cast from wherever the caster is at the start of the cast time.\nAbove and Below can reset the cooldown of each dash from  Void Surge.\nMore than one cooldown can be reset if enemy champions were hit within multiple directions.\nThe cooldowns that get reset are based on the relative direction to Bel\'Veth at the end of the cast\nIf  Void Surge\'s dash comes off cooldown during Above and Below\'s cast time, Bel\'Veth will be able to dash twice in the same direction.(bug)',
        blurb: 'Active:  Bel\'Veth slams her tail in the target direction that deals magic damage to enemies hit, briefly  knocking up and  slowing them.',
        width: '200',
        castTime: '0.5',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Royal Maelstrom',
        icon: 'https://cdn.communitydragon.org/latest/champion/Belveth/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Bel\'Veth enters a defensive stance for 1.5 seconds, during which she is unable to move, but gains damage reduction and 20% (+ 100% life steal) life steal.</p>',
            leveling: [
              {
                attribute: 'Damage Reduction',
                modifiers: [
                  {
                    values: [
                      35,
                      40,
                      45,
                      50,
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
            description: 'While active, she rapidly slashes at the nearest enemy with the lowest current health percentage for up to 6 (+ 1 per 33.3% bonus attack speed) times over the duration. Each slash deals physical damage, increased by 0% - 300% (based on target\'s missing health), triggers on-attack effects, and applies on-hit effects and spell effects, with on-hit and spell effect damage reduced to 8% - 32% (based on target\'s missing health) effectiveness.',
            leveling: [
              {
                attribute: 'Minimum Physical Damage per hit',
                modifiers: [
                  {
                    values: [
                      6,
                      7,
                      8,
                      9,
                      10,
                    ],
                  },
                  {
                    values: [
                      8,
                    ],
                    units: [
                      '% AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'Maximum Physical Damage per hit',
                modifiers: [
                  {
                    values: [
                      24,
                      28,
                      32,
                      36,
                      40,
                    ],
                  },
                  {
                    values: [
                      32,
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
            description: 'Royal Maelstrom deals 150% damage to monsters, applies life steal at 100% effectiveness, and is affected by critical strike modifiers. Bel\'Veth cannot perform slashes while unable to declare basic attacks.',
            leveling: [
              {
                attribute: 'Minimum Monster Damage per hit',
                modifiers: [
                  {
                    values: [
                      9,
                      10.5,
                      12,
                      13.5,
                      15,
                    ],
                  },
                  {
                    values: [
                      12,
                    ],
                    units: [
                      '% AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'Maximum Monster Damage per hit',
                modifiers: [
                  {
                    values: [
                      36,
                      42,
                      48,
                      54,
                      60,
                    ],
                  },
                  {
                    values: [
                      48,
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
            description: 'Royal Maelstrom can be recast after 0.75 seconds within the duration, and does so automatically after the duration or when Bel\'Veth casts an ability.',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Bel\'Veth ends Royal Maelstrom.</p>',
          },
          {
            description: 'The target does not have to be visible to be hit by this ability.',
          },
        ],
        cost: [
          0,
        ],
        cooldown: [
          20,
          19,
          18,
          17,
          16,
        ],
        targeting: 'Auto',
        affects: 'Self, Enemies',
        spellshieldable: 'false',
        damageType: 'Physical damage',
        spellEffects: 'special',
        notes: 'Applies  spell damage and procs  basic damage required effects.\nRoyal Maelstrom does not prioritize champions over other units.\nBel\'Veth cannot attack structures, wards, nor jungle plants with Royal Maelstrom.\nIf Bel\'Veth is  berserked or  taunted, she will slash at the unit she is forced to attack.\nRoyal Maelstrom will still perform slashes even if Bel\'Veth is  feared during the channel.\nEach slash\'s damage triggers a stack of  Conqueror.\nDespite this ability\'s cooldown starts on cast, it cannot be reduced by  Navori Flickerblade\'s Transcendence during the effect of this ability.(bug) Cooldowns of the other basic abilities can be normally reduced during this ability, though.\nThe following table refers for interactions while Bel\'Veth is performing Royal Maelstrom:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nInterrupts\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\nAll items interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Hexflash\n\n\nDisabled\n\n Teleport  Recall\n\n\nInterrupted by\n\n Flash\n\n\nInterrupted by\n\nDeath',
        blurb: 'Active:  Bel\'Veth enters a brief defensive stance, gaining  life steal and damage reduction.\nDuring this time, Bel\'Veth rapidly slashes at the most wounded enemy, with the max number of slashes increased based on her bonus attack speed. Each slash deals physical damage, and applies  life steal,  on-hit and spell effects based on the target\'s missing health.',
        castTime: 'None',
        effectRadius: '500',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'Endless Banquet',
        icon: 'https://cdn.communitydragon.org/latest/champion/Belveth/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Bel\'Veth\'s basic attacks on-hit apply a mark to the target for 5 seconds, refreshing on subsequent hits. Every second attack on-hit against the marked target deals bonus true damage and generates a stack of Endless Banquet that increases this damage by the same value. This effect stacks infinitely, but is capped at 5 stacks against epic monsters. The mark and stacks expire upon attacking a new target.</p>',
            leveling: [
              {
                attribute: 'Bonus True Damage',
                modifiers: [
                  {
                    values: [
                      6,
                      8,
                      10,
                    ],
                  },
                  {
                    values: [
                      12,
                    ],
                    units: [
                      '% bonus AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'Maximum Monster Damage',
                modifiers: [
                  {
                    values: [
                      30,
                      40,
                      50,
                    ],
                  },
                  {
                    values: [
                      60,
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
            description: '<p class="ability-effect"><span class="ability-header">Passive:</span> When Bel\'Veth scores a takedown against an enemy champion or epic monster while alive, a Void Coral is spawned from their corpse for 15 seconds. Baron Nashor, the pit Rift Herald, and Voidgrubs (once per spawn group) spawn an Enhanced Void Coral.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Bel\'Veth dashes to the target Void Coral to consume it over the cast time, slowing nearby enemies by 25% - 96% (based on seconds elapsed) for the duration. She then creates an explosion at the location to deal true damage to enemies within, capped at 1500 versus monsters, and assumes her True Form for 60 seconds.</p>\nBel\'Veth consumes all existing Void Corals at once, generating a stack of Lavender for each one consumed.',
            leveling: [
              {
                attribute: 'True Damage',
                modifiers: [
                  {
                    values: [
                      150,
                      200,
                      250,
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
                  {
                    values: [
                      25,
                    ],
                    units: [
                      '% of target\'s missing health',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">True Form:</span> Bel\'Veth evolves into a monster, gaining bonus health, bonus movement speed out-of-combat, 75 bonus attack range, as well as increased total attack speed. Void Surge can dash through terrain. Consuming a Void Coral refreshes the duration of True Form and heals Bel\'Veth.</p>\n<p class="ability-effect"><span class="ability-header">Enhanced Void Coral Bonus:</span> True Form is empowered to last 180 seconds and causes Void Remora to spawn from allied and enemy minions that die nearby.</p>',
            leveling: [
              {
                attribute: 'Bonus Health',
                modifiers: [
                  {
                    values: [
                      100,
                      150,
                      200,
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
                  {
                    values: [
                      90,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Bonus Movement Speed',
                modifiers: [
                  {
                    values: [
                      10,
                      45,
                      80,
                    ],
                  },
                ],
              },
              {
                attribute: 'Increased Total Attack Speed',
                modifiers: [
                  {
                    values: [
                      10,
                      15,
                      20,
                    ],
                    units: [
                      '%',
                    ],
                  },
                ],
              },
              {
                attribute: 'Heal',
                modifiers: [
                  {
                    values: [
                      100,
                      150,
                      200,
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
                  {
                    values: [
                      90,
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
            description: 'A nearby Void Coral is required to cast this ability. The on-hit modifiers from Death in Lavender, Void Surge and Royal Maelstrom affect the bonus true damage applied by Endless Banquet\'s passive. See Pets for details about Void Remora and Void Corals.',
          },
        ],
        cost: [
          0,
        ],
        cooldown: [
          1,
        ],
        targeting: 'Unit',
        affects: 'Self, Enemies',
        spellshieldable: 'true',
        damageType: 'True damage',
        spellEffects: 'special',
        notes: 'Applies  proc damage on the bonus true damage and deals  area damage on the explosion.\nEndless Banquet\'s  takedown effect will not trigger against monsters if they were slain by an enemy.\nEndless Banquet\'s true damage based on the target\'s missing health is calculated before the base damage is dealt.\nTrue Form\'s duration is displayed in Bel\'Veth\'s resource bar, in seconds.\nTrue Form\'s duration is refreshed based on the type of Void Coral that Bel\'Veth consumes.\nConsuming a normal Void Coral in a normal True Form state refreshes the duration to 60 seconds.\nConsuming an enhanced Void Coral refreshes the duration to 180 seconds and grants the enhanced effects regardless of current True Form state.\nIf she consumes a normal Void Coral while in an enhanced True Form state, the current duration is extended by 60 seconds.\nThe enhanced effects are not lost in this case.\nBel\'Veth will consume all existing Void Corals at once, therefore she is able to acquire the enhanced effects of True Form even if she does not physically consume an enhanced Void Coral.\nThe Void Coral that Bel\'Veth consumes herself will not expire in the process of her doing so.\nBel\'Veth will consume all other Void Corals upon consumption regardless of range.\nRanking up Endless Banquet will update the bonuses dynamically; if Bel\'Veth has True Form upon the level-up, she will receive the upgraded stats.\nBel\'Veth gains the bonus health and heal from Endless Banquet at the start of the cast time.\nBel\'Veth will be able to consume the target Void Coral even if her dash is interrupted.\nShe dashes at the start of the cast time.\nA Void Coral will not spawn when scoring a  takedown against a summoned  Rift Herald.\nThis ability will cast from wherever the caster is at the start of the cast time.\nThe following table refers for interactions while Bel\'Veth is in cast time:\nShe remains locked out for 0.5 seconds after the cast time completes.\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection',
        blurb: 'Passive: Every second basic attack on the same target deals bonus true damage and generates a stack that increases the damage. This can stack infinitely, and expires after a short time or upon switching targets.',
        castTime: '1',
        effectRadius: '500',
        maxCharges: -1,
      },
    ],
  },
  lore: 'A nightmarish empress created from the raw material of an entire devoured city, Bel\'Veth is the end of Runeterra itself... and the beginning of a monstrous reality of her own design. Driven by epochs of repurposed history, knowledge, and memories from the world above, she voraciously feeds an ever-expanding need for new experiences and emotions, consuming all that crosses her path. Yet her wants could never be sated by only one world as she turns her hungry eyes toward the Void\'s old masters...',
}
export default champion