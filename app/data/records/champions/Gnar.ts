// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion = {
  id: 150,
  key: 'Gnar',
  name: 'Gnar',
  title: 'the Missing Link',
  resource: 'Rage',
  attackType: 'Ranged',
  stats: {
    health: {
      flat: 540,
      perLevel: 79,
    },
    healthRegen: {
      flat: 4.5,
      perLevel: 1.25,
    },
    mana: {
      flat: 100,
    },
    armor: {
      flat: 32,
      perLevel: 3.7,
    },
    magicResistance: {
      flat: 30,
      perLevel: 1.3,
    },
    attackDamage: {
      flat: 60,
      perLevel: 3.2,
    },
    movespeed: {
      flat: 335,
    },
    acquisitionRadius: {
      flat: 600,
    },
    selectionRadius: {
      flat: 100,
    },
    pathingRadius: {
      flat: 30,
    },
    gameplayRadius: {
      flat: 55,
    },
    criticalStrikeDamage: {
      flat: 175,
    },
    criticalStrikeDamageModifier: {
      flat: 1,
    },
    attackSpeed: {
      flat: 0.625,
      perLevel: 6,
    },
    attackSpeedRatio: {
      flat: 0.625,
    },
    attackCastTime: {
      flat: 0.3,
    },
    attackTotalTime: {
      flat: 1.6,
    },
    attackDelayOffset: {
      flat: -0.154,
    },
    attackRange: {
      flat: 175,
      perLevel: 5.882,
    },
  },
  positions: [
    'Top',
  ],
  roles: [
    'Fighter',
    'Specialist',
    'Tank',
  ],
  attributeRatings: {
    damage: 2,
    toughness: 1,
    control: 1,
    mobility: 2,
    utility: 1,
    abilityReliance: 45,
    difficulty: 3,
  },
  abilities: {
    P: [
      {
        name: 'Rage Gene',
        icon: 'https://cdn.communitydragon.org/latest/champion/Gnar/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate - Rage Gene:</span> Mini Gnar generates 4 / 7 / 11 (based on level) Rage over 2 seconds upon dealing or receiving damage, up to 100. Against non-champions, basic attacks and Boomerang Throw instantly generate[ 0.5 / 0.875 / 1.375 (based on level) Rage. ][ 12.5% of the amount. ] Against champions, Boomerang Throw instantly generates[ 1 / 1.75 / 2.75 (based on level) Rage, ][ 25% of the amount, ]and basic attacks instantly generate[ 2 / 3.5 / 5.5 (based on level). ][ 50% of the amount. ] Boomerang Throw can only generate Rage once per cast, and grants Rage based on the first enemy hit. Gnar\'s Rage decays after being out of combat for 13 seconds.</p>',
          },
          {
            description: 'At maximum Rage, Gnar\'s abilities switch to Mega Gnar\'s abilities for 4 seconds and until transforming back to his Mini Gnar form. Casting any of them during this time also causes Gnar to transform into Mega Gnar instantly, else he will transform automatically after the 4 seconds have elapsed.',
          },
          {
            description: 'Gnar\'s Mega form lasts for 15 seconds, with his Rage bar depleting as an indication of remaining time. Rage cannot be generated while in this form. Afterwards, Gnar returns to Mini Gnar, retaining his current percentage health and becoming too tired to generate Rage for 15 seconds.',
          },
          {
            description: 'Gnar gains different stat bonuses based on whether he is in Mini or Mega form. Both of Gnar\'s forms share their ability cooldowns.',
          },
        ],
        targeting: 'Passive',
        affects: 'Self',
        notes: 'The Rage generated upon dealing or receiving damage occurs over 2 seconds with 4 ticks every 0.5 seconds. It also does not stack but instead refreshes with subsequent applications (of dealing or receiving damage).\nThe bonus rage generation on basic attacks counts as an  on-hit effect, and is triggered by  Runaan\'s Hurricane and  Guinsoo\'s Rageblade.\nIn-game, the value on the Rage bar always displays rounded down to the nearest integer.\n Mega Gnar\'s gained health is not affected by healing modifiers such as  Grievous Wounds and those from items and runes.\nWhen returning to  Mini Gnar, Gnar will only retain his current health percentage, not current health total.\nGnar\'s abilities share  cooldowns across forms.\nThe final stats, after  Rage Gene being applied, can be seen on Mini Gnar\'s and Mega Gnar\'s respective data template, in the front page.\nMini Gnar gains 5.5% : 99% (based on level) bonus attack speed.\nThe Rage bar is white when under 60 range, yellow when equal to or above 60 rage, and red at 100 rage.',
        blurb: 'Gnar generates Rage while fighting. At maximum Rage, his next ability will be  Mega Gnar\'s as he transforms, losing Mini Gnar\'s passive effects in exchange for increased stats and new abilities.',
      },
    ],
    Q: [
      {
        name: 'Boomerang Throw',
        icon: 'https://cdn.communitydragon.org/latest/champion/Gnar/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Gnar throws a boomerang in a line in the target direction that deals physical damage to enemies in its path and slows them for 2 seconds. After reaching its maximum range or hitting an enemy, the boomerang flies back toward Gnar based on his current movement, dealing 50% damage to subsequent targets.</p>',
            leveling: [
              {
                attribute: 'Physical Damage',
                modifiers: [
                  {
                    values: [
                      5,
                      45,
                      85,
                      125,
                      165,
                    ],
                  },
                  {
                    values: [
                      125,
                    ],
                    units: [
                      '% AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'Reduced Damage',
                modifiers: [
                  {
                    values: [
                      2.5,
                      22.5,
                      42.5,
                      62.5,
                      82.5,
                    ],
                  },
                  {
                    values: [
                      62.5,
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
                      15,
                      20,
                      25,
                      30,
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
            description: 'Catching the boomerang while it is returning back refunds 40% of the ability\'s total cooldown.',
          },
          {
            description: 'Enemies can be hit only once per pass.',
          },
        ],
        cost: [
          0,
        ],
        cooldown: [
          20,
          17.5,
          15,
          12.5,
          10,
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'True',
        damageType: 'Physical damage',
        spellEffects: 'Area of effect',
        projectile: 'TRUE',
        notes: 'The boomerang return direction is determined at the apex of its flight by Gnar\'s current position and which direction Gnar is heading at the time.\nSince the cooldown between the two is shared, Mini Gnar may pick up a boulder and/or Mega Gnar may catch a boomerang.\nThis ability will cast from wherever the caster is at the start of the cast time.',
        blurb: 'Active:  Mini Gnar throws a boomerang in the target direction that deals physical damage and  slows enemies hit. At maximum range or hitting an enemy, the boomerang flies back toward Gnar based on his current movement, dealing reduced damage.',
        speed: '2500 - 1400 / 60 - 2600',
        width: '110 / 150',
        castTime: '0.25',
        maxCharges: -1,
      },
      {
        name: 'Boulder Toss',
        icon: 'https://cdn.communitydragon.org/latest/champion/Gnar/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Gnar throws a boulder in the target direction that stops upon hitting an enemy, dealing physical damage to nearby enemies upon impact and slowing them for 2 seconds. The boulder then remains on the ground for 6 seconds.</p>',
            leveling: [
              {
                attribute: 'Physical Damage',
                modifiers: [
                  {
                    values: [
                      45,
                      90,
                      135,
                      180,
                      225,
                    ],
                  },
                  {
                    values: [
                      140,
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
            description: 'After 0.3 seconds, Gnar can pick up the boulder by moving within 90 units of it, refunding 70% of the ability\'s total cooldown.',
          },
        ],
        cost: [
          0,
        ],
        cooldown: [
          20,
          17.5,
          15,
          12.5,
          10,
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'True',
        damageType: 'Physical damage',
        spellEffects: 'Area of effect',
        projectile: 'TRUE',
        notes: 'Since the cooldown between the two is shared Mini Gnar may pick up a boulder and/or Mega Gnar may catch a boomerang.\nThe  Boulder will still drop to the ground if colliding with  Wind Wall or  Unbreakable.\nThis ability will cast from wherever the caster is at the start of the cast time.',
        blurb: 'Active:  Mega Gnar throws a boulder in the target direction that stops upon the first enemy hit, dealing physical damage to nearby enemies  slowing them.',
        speed: '2100',
        width: '180',
        castTime: '0.5',
        effectRadius: '250',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Hyper',
        icon: 'https://cdn.communitydragon.org/latest/champion/Gnar/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Gnar\'s basic attacks on-hit and ability hits apply a stack of Hyper to enemies for 3.5 seconds, refreshing on subsequent applications and stacking up to 3 times.</p>',
          },
          {
            description: 'The third stack against a target consumes them all to deal bonus magic damage, capped at 300 against monsters, and grant Gnar 20 / 40 / 60 / 80% (based on GNAR!\'s rank) bonus movement speed that decays over 3 seconds.',
            leveling: [
              {
                attribute: 'Bonus Magic Damage',
                modifiers: [
                  {
                    values: [
                      0,
                      10,
                      20,
                      30,
                      40,
                    ],
                  },
                  {
                    values: [
                      6,
                      8,
                      10,
                      12,
                      14,
                    ],
                    units: [
                      '% of target\'s maximum health',
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
            ],
          },
          {
            description: 'Gnar gains Hyper\'s bonus movement speed when he leaves Mega form.',
          },
        ],
        cost: [
          0,
        ],
        cooldown: [
          7,
        ],
        targeting: 'Passive',
        affects: 'Enemies',
        spellshieldable: 'False',
        damageType: 'Magic damage',
        spellEffects: 'Proc',
        notes: 'The bonus movement speed\'s duration refreshes whenever Gnar would receive it (by hitting a target three times again).',
        blurb: 'Passive:  Mini Gnar\'s basic attacks and damaging abilities apply stacks. The third stack deals bonus magic damage based on the target\'s maximum health, and grants a burst of  movement speed to Gnar.',
        maxCharges: -1,
      },
      {
        name: 'Wallop',
        icon: 'https://cdn.communitydragon.org/latest/champion/Gnar/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Gnar slams his arm down in the target direction, dealing physical damage to all enemies struck within the area and stunning them for 1.25 seconds.</p>',
            leveling: [
              {
                attribute: 'Physical Damage',
                modifiers: [
                  {
                    values: [
                      45,
                      75,
                      105,
                      135,
                      165,
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
        ],
        cost: [
          0,
        ],
        cooldown: [
          7,
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'True',
        damageType: 'Physical damage',
        spellEffects: 'Area of effect',
        projectile: 'FALSE',
        notes: 'Gnar is locked out of moving and casting movement abilities for 0.25 seconds after the cast time.\nThis ability will cast from wherever the caster is at the end of the cast time.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection',
        width: '200',
        castTime: '0.6',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Hop',
        icon: 'https://cdn.communitydragon.org/latest/champion/Gnar/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Gnar leaps to the target location, then gains bonus attack speed for 6 seconds.</p>',
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
            description: 'If Gnar lands on a unit he will bounce 500 units further in the same direction.',
          },
          {
            description: 'Landing on an enemy deals them physical damage and slows them by 80% for 0.5 seconds.',
            leveling: [
              {
                attribute: 'Physical Damage',
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
                      6,
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
            description: 'Gnar will not bounce if he is immobilized during the first leap.',
          },
          {
            description: 'Boomerang Throw can be cast during the dash.',
          },
        ],
        cost: [
          0,
        ],
        cooldown: [
          22,
          19.5,
          17,
          14.5,
          12,
        ],
        targeting: 'Location',
        affects: 'Enemies',
        spellshieldable: 'True',
        damageType: 'Physical damage',
        spellEffects: 'Single target',
        notes: 'Hop does not allow Gnar to bounce off wards.\nHop does not grant bonus attack speed if used to transform.\nIf Hop generates Rage to maximum and Gnar bounces off an enemy, he may cast  GNAR! during the bounce.\n Sleep does not count for preventing the bounce.(bug)',
        blurb: 'Active:  Mini Gnar  leaps to the target location and bounces off of any unit he lands on,  leaping forth again without a bounce. He also gains  bonus attack speed for a few seconds.',
        castTime: 'none',
        effectRadius: '150',
        targetRange: '475',
        maxCharges: -1,
      },
      {
        name: 'Crunch',
        icon: 'https://cdn.communitydragon.org/latest/champion/Gnar/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Gnar leaps to the target location and deals physical damage to nearby enemies upon impact. After a 0.25-second delay, Gnar sends out a shockwave, dealing the same damage to additional enemies in a larger radius.</p>',
            leveling: [
              {
                attribute: 'Physical Damage',
                modifiers: [
                  {
                    values: [
                      80,
                      115,
                      150,
                      185,
                      220,
                    ],
                  },
                  {
                    values: [
                      6,
                    ],
                    units: [
                      '% of his maximum health',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'If Crunch is used to transform, Gnar will still be able to bounce as per Hop. The shockwave will occur where Gnar lands.',
          },
          {
            description: 'Enemies Gnar lands directly on top of are affected by Hop\'s slow.',
          },
        ],
        cost: [
          0,
        ],
        cooldown: [
          22,
          19.5,
          17,
          14.5,
          12,
        ],
        targeting: 'Location',
        affects: 'Enemies',
        spellshieldable: 'True',
        damageType: 'Physical damage',
        spellEffects: 'Area of effect',
        notes: 'Gnar is locked out of using any other abilities during Crunch, but he can still transform mid-air if he reaches 100  Rage during the  jump of  Hop.\nIf Crunch is cast to transform and Gnar bounces off of an enemy, he may cast  GNAR! during the bounce.\nIf Crunch is used to transform, the area of effect is missing at the first landing location, whether he bounces off a target or not.(bug)\nIf circumstances allow it, Crunch\'s shockwave from using it to transform can hit the target Gnar bounced off of.',
        blurb: 'Active:  Mega Gnar  leaps to the target location,  slowing enemies he lands on and dealing physical damage to nearby enemies based on each target\'s maximum health.',
        innerRadius: '200',
        castTime: 'none',
        effectRadius: '375',
        targetRange: '675',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'GNAR!',
        icon: 'https://cdn.communitydragon.org/latest/champion/Gnar/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Mini Gnar - Passive:</span> Hyper\'s bonus movement speed is increased.</p>',
            leveling: [
              {
                attribute: 'Hyper Bonus Movement Speed',
                modifiers: [
                  {
                    values: [
                      40,
                      60,
                      80,
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
            description: '<p class="ability-effect"><span class="ability-header">Mega Gnar - Active:</span> Gnar thrusts in the target direction, knocking away nearby enemies up to 590 units in that direction, though not through terrain, and afterwards dealing them physical damage, as well as slowing them by 45% after a 0.4-second delay for a duration.</p>',
            leveling: [
              {
                attribute: 'Physical Damage',
                modifiers: [
                  {
                    values: [
                      200,
                      300,
                      400,
                    ],
                  },
                  {
                    values: [
                      50,
                    ],
                    units: [
                      '% bonus AD',
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
                attribute: 'Disable Duration',
                modifiers: [
                  {
                    values: [
                      1.25,
                      1.5,
                      1.75,
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'Enemies that collide with terrain take 50% increased damage immediately and are stunned instantly instead of slowed after a delay.',
            leveling: [
              {
                attribute: 'Increased Damage',
                modifiers: [
                  {
                    values: [
                      300,
                      450,
                      600,
                    ],
                  },
                  {
                    values: [
                      75,
                    ],
                    units: [
                      '% bonus AD',
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
          0,
        ],
        cooldown: [
          90,
          60,
          30,
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'True',
        damageType: 'Physical damage',
        spellEffects: 'Area of effect',
        projectile: 'FALSE',
        notes: 'Gnar is locked out of moving and casting movement abilities for 0.175 seconds after the cast time.\nGNAR! can interact with player-generated terrain.\nThis ability will cast from wherever the caster is at the end of the cast time.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection',
        castTime: '0.25',
        effectRadius: '475',
        maxCharges: -1,
      },
    ],
  },
  lore: 'Gnar is a primeval yordle whose playful antics can erupt into a toddler\'s outrage in an instant, transforming him into a massive beast bent on destruction. Frozen in True Ice for millennia, the curious creature broke free and now hops about a changed world he sees as exotic and wondrous. Delighted by danger, Gnar flings whatever he can at his enemies, be it his bonetooth boomerang, or a nearby building.',
}
export default champion