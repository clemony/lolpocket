// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion = {
  id: 266,
  key: 'Aatrox',
  name: 'Aatrox',
  title: 'the Darkin Blade',
  resource: 'Blood well',
  attackType: 'Melee',
  stats: {
    health: {
      flat: 650,
      perLevel: 114,
    },
    healthRegen: {
      flat: 3,
      perLevel: 0.5,
    },
    armor: {
      flat: 38,
      perLevel: 4.8,
    },
    magicResistance: {
      flat: 32,
      perLevel: 2.05,
    },
    attackDamage: {
      flat: 60,
      perLevel: 5,
    },
    movespeed: {
      flat: 345,
    },
    acquisitionRadius: {
      flat: 475,
    },
    selectionRadius: {
      flat: 135,
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
      flat: 0.651,
      perLevel: 2.5,
    },
    attackSpeedRatio: {
      flat: 0.651,
    },
    attackCastTime: {
      flat: 0.3,
    },
    attackTotalTime: {
      flat: 1.52,
    },
    attackRange: {
      flat: 175,
    },
  },
  positions: [
    'Top',
  ],
  roles: [
    'Fighter',
    'Juggernaut',
    'Tank',
  ],
  attributeRatings: {
    damage: 3,
    toughness: 3,
    control: 2,
    mobility: 2,
    utility: 2,
    abilityReliance: 20,
    difficulty: 2,
  },
  abilities: {
    P: [
      {
        name: 'Deathbringer Stance',
        icon: 'https://cdn.communitydragon.org/latest/champion/Aatrox/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Periodically, Aatrox empowers his next basic attack to gain 50 bonus range and deal bonus magic damage equal to 4% - 8% (based on level) of the target\'s maximum health, capped at 100 against monsters. Deathbringer Stance\'s damage applies life steal at 100% effectiveness.Aatrox heals for 100% of the post-mitigation bonus damage dealt, reduced to 25% against minions.</p>',
          },
          {
            description: 'Whenever Aatrox hits at least one enemy champion or large monster with a basic attack on-hit or an ability, the cooldown of Deathbringer Stance is reduced by 2 seconds, modified to 4 if he hits with the Sweetspot of The Darkin Blade.',
          },
        ],
        targeting: 'Passive',
        affects: 'Self, Enemies',
        spellshieldable: 'False',
        damageType: 'Magic damage',
        spellEffects: 'proc',
        notes: 'Aatrox will assume stance when an enemy champion is in range of  Infernal Chains.\nThe toggle expression (default CTRL + 5) switches between stances manually.\nIf Deathbringer Stance becomes available during a standard attack\'s windup, it will not be consumed or trigger the bonus damage.\nEven if the ability hit is  spell shielded Deathbringer Stance\'s cooldown will still be reduced.\nThis ability goes on cooldown on death and refreshes upon respawn.\nThe empowered attack will not trigger against structures and wards.',
        blurb: 'Innate: Periodically,  Aatrox\'s next basic attack deals bonus magic damage based on the target\'s maximum health,  healing him for the damage dealt.',
      },
    ],
    Q: [
      {
        name: 'The Darkin Blade',
        icon: 'https://cdn.communitydragon.org/latest/champion/Aatrox/ability-icon/q',
        effects: [
          {
            description: 'Aatrox can activate The Darkin Blade three times before the ability goes on cooldown, with a 1-second static cooldown between casts. If Aatrox does not recast the ability within 4 seconds of the previous cast, it goes on cooldown.',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Aatrox performs a strike with his greatsword for each of the three casts, dealing physical damage to enemies hit within an area. Enemies hit within a Sweetspot of the area take 70% bonus damage and also knocked up for 0.25 seconds. Each subsequent cast gains 25% more damage.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">First Cast:</span> Aatrox\'s first strike affects a 625 × 180-unit rectangular area in the target direction, with him centered on the back line and the Sweetspot at the farthest edge.</p>',
            leveling: [
              {
                attribute: 'First Cast Damage',
                modifiers: [
                  {
                    values: [
                      10,
                      25,
                      40,
                      55,
                      70,
                    ],
                  },
                  {
                    values: [
                      60,
                      67.5,
                      75,
                      82.5,
                      90,
                    ],
                    units: [
                      '% AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'First Sweetspot Damage',
                modifiers: [
                  {
                    values: [
                      17,
                      42.5,
                      68,
                      93.5,
                      119,
                    ],
                  },
                  {
                    values: [
                      102,
                      114.75,
                      127.5,
                      140.25,
                      153,
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
            description: '<p class="ability-effect"><span class="ability-header">Second Cast:</span> Aatrox\'s second strike affects a trapezoidal area in the target direction, with the Sweetspot at the farthest edge. The hitbox begins 100-units behind Aatrox and extends 475-units in front of him, measuring between 300 and 500-units wide from behind to in front.</p>',
            leveling: [
              {
                attribute: 'Second Cast Damage',
                modifiers: [
                  {
                    values: [
                      12.5,
                      31.25,
                      50,
                      68.75,
                      87.5,
                    ],
                  },
                  {
                    values: [
                      75,
                      84.375,
                      93.75,
                      103.125,
                      112.5,
                    ],
                    units: [
                      '% AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'Second Sweetspot Damage',
                modifiers: [
                  {
                    values: [
                      21.25,
                      53.125,
                      85,
                      116.875,
                      148.75,
                    ],
                  },
                  {
                    values: [
                      127.5,
                      143.4375,
                      159.375,
                      175.3125,
                      191.25,
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
            description: '<p class="ability-effect"><span class="ability-header">Third Cast:</span> Aatrox\'s third strike affects a 300-radius circular area centered on a target location that is 200 units in front of him, with a 180-radius Sweetspot within.</p>',
            leveling: [
              {
                attribute: 'Third Cast Damage',
                modifiers: [
                  {
                    values: [
                      15,
                      37.5,
                      60,
                      82.5,
                      105,
                    ],
                  },
                  {
                    values: [
                      90,
                      101.25,
                      112.5,
                      123.75,
                      135,
                    ],
                    units: [
                      '% AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'Third Sweetspot Damage',
                modifiers: [
                  {
                    values: [
                      25.5,
                      63.75,
                      102,
                      140.25,
                      178.5,
                    ],
                  },
                  {
                    values: [
                      153,
                      172.125,
                      191.25,
                      210.375,
                      229.5,
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
            description: 'The Darkin Blade deals 55 / 60 / 65 / 70% (based on level) damage against minions, and the knock up duration from hitting the Sweetspot is doubled to 0.5 seconds against monsters.',
            leveling: [
              {
                attribute: 'Maximum Non-Minion Non-Sweetspot Damage',
                modifiers: [
                  {
                    values: [
                      37.5,
                      93.75,
                      150,
                      206.25,
                      262.5,
                    ],
                  },
                  {
                    values: [
                      225,
                      253.125,
                      281.25,
                      309.375,
                      337.5,
                    ],
                    units: [
                      '% AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'Maximum Non-Minion Sweetspot Damage',
                modifiers: [
                  {
                    values: [
                      63.75,
                      159.375,
                      255,
                      350.625,
                      446.25,
                    ],
                  },
                  {
                    values: [
                      382.5,
                      430.3125,
                      478.125,
                      525.9375,
                      573.75,
                    ],
                    units: [
                      '% AD',
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
          12,
          10,
          8,
          6,
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'True',
        damageType: 'Physical damage',
        spellEffects: 'spellaoe',
        notes: 'The highlighted areas denote the sweetspot - enemies are affected where the two areas overlap (See  edge range and  center range). The first and second casts function like any point-blank AOE (i.e. an effect centered on the caster). An enemy is considered to be hit by the ability based on  edge range - i.e. if any part of your  gameplay radius is within the hitbox, you are affected.\nThe third cast, as well as the Sweetspot for the first and second cast, function like ground-targeted abilities. An enemy is considered to be hit by the ability based on  center range - i.e. an enemy\'s center has to be within the hitbox to be affected.\nAs implied by the previous point, the Sweetspot for the first and second cast is implemented as separate areas of effect to the main component of the ability. Enemies must be within both areas to trigger the bonus damage,  knock up and  Deathbringer Stance\'s cooldown reduction.\nThe \'target gets hit\' SFX plays whenever an enemy is within the Sweetspot - meaning it is possible to trigger the sound effect without affecting an enemy.\nIn the game, Sweetspot damage is incorrectly displayed as  a real critical strike.(bug)\nEach cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nThe hitbox and Aatrox\'s model are fixed to the initial target direction.\nAatrox\'s facing-direction, for effects such as  Petrifying Gaze, is the direction he is moving, and not the direction the model is facing.\nAll damage modifiers  stack multiplicatively.\nThere\'s a small period of time in which Aatrox can\'t declare basic attacks after casting The Darkin Blade.(note)\nThis ability\'s damage is calculated based on the caster\'s current stats and changes dynamically.\nThis ability will cast from wherever the caster is at the end of the cast time.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Umbral Dash can be cast. Other abilities are disabled.\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath',
        castTime: '0.6',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Infernal Chains',
        icon: 'https://cdn.communitydragon.org/latest/champion/Aatrox/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Aatrox sends a chain in the target direction that deals physical damage to the first enemy hit, doubled against minions, and slowing them for 1.5 seconds.</p>',
            leveling: [
              {
                attribute: 'Physical Damage',
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
                      40,
                    ],
                    units: [
                      '% AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'Minion Damage',
                modifiers: [
                  {
                    values: [
                      60,
                      80,
                      100,
                      120,
                      140,
                    ],
                  },
                  {
                    values: [
                      80,
                    ],
                    units: [
                      '% AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'Slow',
                modifiers: [
                  {
                    values: [
                      25,
                      27.5,
                      30,
                      32.5,
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
            description: 'If this hits an enemy champion or large monster, a tether is formed between the target and the ground beneath them for 1.5 seconds, during which they are revealed.',
          },
          {
            description: 'If the tether is not broken by the end of its duration, the target is dealt the same physical damage again and pulled to the center of the area.',
            leveling: [
              {
                attribute: 'Total Damage',
                modifiers: [
                  {
                    values: [
                      60,
                      80,
                      100,
                      120,
                      140,
                    ],
                  },
                  {
                    values: [
                      80,
                    ],
                    units: [
                      '% AD',
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
          20,
          18,
          16,
          14,
          12,
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'Special',
        damageType: 'Physical damage',
        spellEffects: 'spell',
        projectile: 'TRUE',
        notes: 'The impact area is oriented relative to Aatrox\'s position when the projectile hits, not where the projectile originated from.\nThe location that the target is dragged to is not at the target\'s original location, but slightly closer towards Aatrox\'s position when the zone expires.\n Spell shield will block the chain\'s application and initial damage but not the aftereffects of one already applied.\nThis ability\'s damage is calculated based on the caster\'s current stats and changes dynamically.\nThis ability will cast from wherever the caster is at the end of the cast time.',
        blurb: 'Active:  Aatrox sends a chain in the target direction that deals physical damage and  slows the first enemy hit.',
        speed: '1800',
        width: '160',
        castTime: '0.25',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Umbral Dash',
        icon: 'https://cdn.communitydragon.org/latest/champion/Aatrox/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Aatrox heals for 16% (+ 1.1% per 100 bonus health) of non- persistent post-mitigation damage he deals against enemy champions.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Aatrox dashes in the target direction.</p>',
          },
          {
            description: 'Umbral Dash resets Aatrox\'s basic attack timer and can be cast during his other abilities without cancelling them and vice versa.',
          },
        ],
        cost: [
          0,
        ],
        cooldown: [
          9,
          8,
          7,
          6,
          5,
        ],
        targeting: 'Location',
        affects: 'Self',
        notes: 'The  dash distance can be extended to up-to 500 units when targeting across terrain. It will only extend for the distance needed to cross the wall.\nThis may upscale his dash speed so that the dash takes the same total time as the standard maximum-range dash.\nIf Umbral Dash is cast towards a movement command\'s end point, Umbral Dash will re-issue a movement command to that point when the dash ends.\nHe will be unable to buffer any commands during the dash if it is casted this way. (bug)\nAatrox\'s model darkens for 1.5 seconds upon casting Umbral Dash, which is a remnant of an attack damage buff he received before it got removed in V9.9.',
        blurb: 'Passive:  Aatrox  heals for the portion of the damage he deals to champions.',
        speed: '800 / Up to 1340',
        castTime: 'none',
        targetRange: '75 / 300 / 500',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'World Ender',
        icon: 'https://cdn.communitydragon.org/latest/champion/Aatrox/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Aatrox unleashes his true form for 10 seconds, fearing nearby enemy minions and monsters for 3 seconds, during which they are gradually slowed by up to 99% over the duration. He also gains ghosting and bonus movement speed that decays by 10% of the current bonus every 0.25 seconds, lasting until World Ender has ended.</p>',
            leveling: [
              {
                attribute: 'Bonus Movement Speed',
                modifiers: [
                  {
                    values: [
                      60,
                      80,
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
            description: 'Whenever Aatrox scores a champion takedown, he extends the duration by 5 seconds and becomes unleashed again.',
          },
          {
            description: 'During World Ender, Aatrox gains bonus attack damage and 5% increased size, and receives increased self-healing from all sources.',
            leveling: [
              {
                attribute: 'Bonus Attack Damage',
                modifiers: [
                  {
                    values: [
                      20,
                      30,
                      40,
                    ],
                    units: [
                      '% AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'Increased Healing',
                modifiers: [
                  {
                    values: [
                      50,
                      75,
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
        ],
        cost: [
          0,
        ],
        cooldown: [
          120,
          100,
          80,
        ],
        targeting: 'Auto',
        affects: 'Self, Enemies',
        notes: 'His resource bar indicates the remaining duration of World Ender.\nWhile World Ender is active, the screen will have a red tint. Near the end of the duration, the tint is intensified.\nWorld Ender persists through  resurrection effects.\nWorld Ender\'s healing amplification applies to the health gained by resurrecting.\nWorld Ender will cast from wherever Aatrox is at the end of the cast time.\nCasting World Ender while it is still active removes the timer on the resource bar. (bug)\nIf this happens while using  Primordian Aatrox, the intensified tint effect of World Ender will stay on the screen for the rest of the game. (bug)',
        blurb: 'Active:  Aatrox unleashes his true form for a period, gaining a burst of  move speed. During this time, Aatrox has increased  attack damage and  self-healing.',
        castTime: '0.25',
        effectRadius: '600',
        maxCharges: -1,
      },
    ],
  },
  lore: 'Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find freedom once more, corrupting and transforming those foolish enough to try and wield the magical weapon that contained his essence. Now, with stolen flesh, he walks Runeterra in a brutal approximation of his previous form, seeking an apocalyptic and long overdue vengeance.',
}
export default champion