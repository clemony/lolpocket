// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion = {
  id: 111,
  key: 'Nautilus',
  name: 'Nautilus',
  title: 'the Titan of the Depths',
  resource: 'Mana',
  attackType: 'Melee',
  stats: {
    health: {
      flat: 646,
      perLevel: 100,
    },
    healthRegen: {
      flat: 8.5,
      perLevel: 0.55,
    },
    mana: {
      flat: 400,
      perLevel: 47,
    },
    manaRegen: {
      flat: 8.65,
      perLevel: 0.5,
    },
    armor: {
      flat: 39,
      perLevel: 4.95,
    },
    magicResistance: {
      flat: 32,
      perLevel: 2.05,
    },
    attackDamage: {
      flat: 61,
      perLevel: 3.3,
    },
    movespeed: {
      flat: 325,
    },
    acquisitionRadius: {
      flat: 400,
    },
    selectionRadius: {
      flat: 125,
    },
    pathingRadius: {
      flat: 50,
    },
    gameplayRadius: {
      flat: 80,
    },
    criticalStrikeDamage: {
      flat: 175,
    },
    criticalStrikeDamageModifier: {
      flat: 1,
    },
    attackSpeed: {
      flat: 0.706,
      perLevel: 1,
    },
    attackSpeedRatio: {
      flat: 0.612,
    },
    attackCastTime: {
      flat: 0.3,
    },
    attackTotalTime: {
      flat: 1.6,
    },
    attackDelayOffset: {
      flat: 0.006,
    },
    attackRange: {
      flat: 175,
    },
  },
  positions: [
    'Support',
  ],
  roles: [
    'Support',
    'Tank',
    'Vanguard',
  ],
  attributeRatings: {
    damage: 1,
    toughness: 3,
    control: 3,
    mobility: 1,
    utility: 1,
    abilityReliance: 80,
    difficulty: 2,
  },
  abilities: {
    P: [
      {
        name: 'Staggering Blow',
        icon: 'https://cdn.communitydragon.org/latest/champion/Nautilus/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Nautilus\' basic attacks are empowered to deal 14 - 116 (based on level) bonus physical damage and root the target for 0.75 - 1.5 (based on level) seconds.</p>',
          },
          {
            description: 'This effect cannot occur on the same target more than once every few seconds.',
          },
        ],
        targeting: 'Passive',
        affects: 'Enemies',
        spellshieldable: 'Special',
        damageType: 'Physical damage',
        spellEffects: 'Proc',
        notes: 'Spell shield will block the  root but not the bonus damage.\nStaggering Blow\'s enhanced attack can be  blocked and  dodged (the on-target cooldown will still be applied).\nIt will fail to trigger while he is  blinded.\nThe empowered attack will not trigger against structures.',
        blurb: 'Innate:  Nautilus\' basic attacks deal bonus physical damage and briefly  root the target.',
        onTargetCdStatic: '6',
      },
    ],
    Q: [
      {
        name: 'Dredge Line',
        icon: 'https://cdn.communitydragon.org/latest/champion/Nautilus/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Nautilus hurls his anchor in the target direction that stops on the first enemy or terrain hit.</p>',
          },
          {
            description: 'If the anchor hits an enemy, it deals magic damage, reveals them for 1.15 seconds, stuns them for 1 second, and drags them toward Nautilus while he also dashes toward them, both over 0.9 seconds.',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      85,
                      130,
                      175,
                      220,
                      265,
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
            description: 'If the anchor hits terrain, Nautilus dashes to that location and 50% of Dredge Line\'s cooldown and mana cost are refunded.',
          },
          {
            description: 'Nautilus is unable to move or attack while Dredge Line is in flight. He can cast any of his abilities during the dash.',
          },
        ],
        cost: [
          60,
        ],
        cooldown: [
          14,
          13,
          12,
          11,
          10,
        ],
        targeting: 'Direction',
        affects: 'Self, Enemies',
        spellshieldable: 'Special',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'spell',
        projectile: 'TRUE',
        notes: 'Dredge Line turns Nautilus\' facing direction accordingly upon hitting a valid target.\nDredge Line can interact with player-generated terrain.\nNautilus will  dash all the way to the target\'s location if Dredge Line executed them or they negated the  displacement.\nDredge Line will not interrupt any movement commands Nautilus was issued pre-cast so long as their directions somewhat correlate (this is intentional to smooth out traveling/escaping).\n Spell shield will block the ability but Nautilus will still dash partway to the target.\nThe anchor projectile will stop if Nautilus dies while the projectile is traveling. Enemies hit will still be dealt damage. The  drag and  root are not applied if Nautilus did not initiate the dash.\nThis ability will cast from wherever the caster is at the start of the cast time.\nThe following table refers for interactions during Dredge Line\'s cast time.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection',
        speed: '2000',
        width: '180 /  0',
        castTime: '0.25',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Titan\'s Wrath',
        icon: 'https://cdn.communitydragon.org/latest/champion/Nautilus/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Nautilus grants himself a shield for 6 seconds, and while it holds, his basic attacks are empowered to apply Pain of Wrath to the target and surrounding non-structure enemies.</p>',
            leveling: [
              {
                attribute: 'Shield Strength',
                modifiers: [
                  {
                    values: [
                      50,
                      60,
                      70,
                      80,
                      90,
                    ],
                  },
                  {
                    values: [
                      8,
                      9,
                      10,
                      11,
                      12,
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
            description: '<p class="ability-effect"><span class="ability-header">Pain of Wrath:</span> The target takes magic damage over time, half dealt immediately and the other half dealt after 1.25 seconds.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
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
                      '% AP',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'Titan\'s Wrath resets Nautilus\' basic attack timer.',
          },
        ],
        cost: [
          60,
        ],
        cooldown: [
          12,
        ],
        targeting: 'Auto',
        affects: 'Self, Enemies',
        spellshieldable: 'special',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'special',
        notes: 'Pain of Wrath\'s first damage instance is tagged as  spell damage, while the second damage instance is tagged as  persistent damage.\nPain of Wrath damage over time debuff replaces itself when reapplied to the target, restarting its tick timer. This will prevent the second instance of damage from the previous debuff.\nPain of Wrath will be applied by Nautilus\'s basic attack if he is affected by Titan\'s Wrath at the start of the attack windup, even if Titan\'s Wrath expires during the windup.\nPain of Wrath will not be applied if the basic attack is  dodged or  blocked, but will be applied if it is  missed.\n Spell shield will block the ability (but only a single application).',
        blurb: 'Active:  Nautilus  shields himself for a few seconds. While the shield holds, his basic attacks apply Pain of Wrath to the target and surrounding enemies.',
        castTime: 'none',
        effectRadius: '250',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Riptide',
        icon: 'https://cdn.communitydragon.org/latest/champion/Nautilus/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Nautilus sends three waves of explosions that radiate from him over 0.561 seconds. Each wave deals magic damage to enemies hit, reduced to 50% against those hit by subsequent waves beyond the first, and slows them by an amount that decays over 1.5 seconds.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      55,
                      90,
                      125,
                      160,
                      195,
                    ],
                  },
                  {
                    values: [
                      50,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Reduced Damage',
                modifiers: [
                  {
                    values: [
                      27.5,
                      45,
                      62.5,
                      80,
                      97.5,
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
                attribute: 'Maximum Total Damage',
                modifiers: [
                  {
                    values: [
                      110,
                      180,
                      250,
                      320,
                      390,
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
                attribute: 'Slow',
                modifiers: [
                  {
                    values: [
                      30,
                      35,
                      40,
                      45,
                      50,
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
            description: 'Riptide deals 150% damage against monsters.',
            leveling: [
              {
                attribute: 'Monster Damage',
                modifiers: [
                  {
                    values: [
                      82.5,
                      135,
                      187.5,
                      240,
                      292.5,
                    ],
                  },
                  {
                    values: [
                      75,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Reduced Monster Damage',
                modifiers: [
                  {
                    values: [
                      41.25,
                      67.5,
                      93.75,
                      120,
                      146.25,
                    ],
                  },
                  {
                    values: [
                      37.5,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Maximum Total Monster Damage',
                modifiers: [
                  {
                    values: [
                      165,
                      270,
                      375,
                      480,
                      585,
                    ],
                  },
                  {
                    values: [
                      150,
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
          50,
          60,
          70,
          80,
          90,
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
        spellshieldable: 'true',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'spellaoe',
        notes: 'This ability will cast from wherever the caster is at the end of the cast time.\nThe first wave is centered around Nautilus, while the second and third wave are centered at an offset of 25 units in front of Nautilus at the original cast location.\nBecause of this, there are a zone each in which you can be hit by only 1 wave, or all 3 waves, respectively, without moving.\nThe first wave happens at 0 seconds after the cast time ends, the second wave at 0.297 seconds and the third wave at 0.561 seconds.\nThe intended timing may be 0.25 seconds for each delay, however these are the measured, effective times.\nThe explosions are only a visual effect. The first wave has 8, the seconds has 9, and the third wave has 10 explosions, equally distributed around the rings, starting with one explosion directly in Nautilus\' facing direction on each.',
        blurb: 'Active:  Nautilus sends three waves of explosions that radiate from him, each dealing magic damage and briefly  slowing enemies hit.',
        castTime: '0.25',
        effectRadius: '0 - 350 / 215 - 465 / 350 - 590',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'Depth Charge',
        icon: 'https://cdn.communitydragon.org/latest/champion/Nautilus/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Nautilus sends out a Depth Charge that chases the target enemy champion, accelerating over time and creating eruptions every 0.264 seconds in its wake that also briefly grant sight of the area. Enemies hit by the eruptions are dealt magic damage, knocked up for 1 second, and stunned for a duration.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      125,
                      175,
                      225,
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
                ],
              },
              {
                attribute: 'Stun Duration',
                modifiers: [
                  {
                    values: [
                      1,
                      1.5,
                      2,
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
            description: 'Upon reaching the primary target, the Depth Charge erupts a final time at their location. The primary target takes increased damage, is stunned for the same duration, and knocked up for a modified duration.',
            leveling: [
              {
                attribute: 'Increased Damage',
                modifiers: [
                  {
                    values: [
                      150,
                      275,
                      400,
                    ],
                  },
                  {
                    values: [
                      80,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Knock Up Duration',
                modifiers: [
                  {
                    values: [
                      1,
                      1.5,
                      2,
                    ],
                    units: [
                      ' seconds',
                    ],
                  },
                ],
              },
            ],
          },
        ],
        cost: [
          100,
        ],
        cooldown: [
          120,
          100,
          80,
        ],
        targeting: 'Unit',
        affects: 'Enemies',
        spellshieldable: 'true',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'aoe',
        projectile: 'FALSE',
        notes: 'Depth Charge starts in an offset from whichever direction Nautilus is facing at the end of the cast time.\nSince  Dredge Line\'s causes Nautilus to change his facing direction upon hitting a valid target, Depth Charge\'s starting point can be changed with a quick  Dredge Line + Depth Charge combo.\nEnemies a certain distance away from the charge / eruption are instead  knocked back.\nDepth Charge\'s final eruption will occur prematurely if the primary target moves more than 3000 units away from it.\nDepth Charge will not stop chasing if the target dies or becomes untargetable.\n Dredge Line will not override Depth Charge\'s  knock up.\nNautilus will  reveal himself during the cast time.\n Displacement immunity will not resist the application of the  stun.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).',
        blurb: 'Active:  Nautilus sends a Depth Charge that chases the target enemy champion. It creates eruptions in its wake that deal magic damage to enemies hit, as well as briefly  knocking up and  stunning them.',
        speed: '275 + 466.67 per second',
        castTime: '0.46',
        effectRadius: '225 / 300 / 750',
        targetRange: '825',
        maxCharges: -1,
      },
    ],
  },
  lore: 'A lonely legend as old as the first piers sunk in Bilgewater, the armored goliath known as Nautilus roams the dark waters off the coast of the Blue Flame Isles. Driven by a forgotten betrayal, he strikes without warning, swinging his enormous anchor to save the wretched, and drag the greedy to their doom. It is said he comes for those who forget to pay the “Bilgewater tithe”, pulling them down beneath the waves with him—an iron-clad reminder that none can escape the depths.',
}
export default champion