// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion = {
  id: 412,
  key: 'Thresh',
  name: 'Thresh',
  title: 'the Chain Warden',
  fullName: 'Erlok Grael',
  resource: 'Mana',
  attackType: 'Ranged',
  stats: {
    health: {
      flat: 620,
      perLevel: 120,
    },
    healthRegen: {
      flat: 7,
      perLevel: 0.55,
    },
    mana: {
      flat: 274,
      perLevel: 44,
    },
    manaRegen: {
      flat: 6,
      perLevel: 0.8,
    },
    armor: {
      flat: 33,
    },
    magicResistance: {
      flat: 30,
      perLevel: 1.55,
    },
    attackDamage: {
      flat: 56,
      perLevel: 2.2,
    },
    movespeed: {
      flat: 330,
    },
    acquisitionRadius: {
      flat: 475,
    },
    selectionRadius: {
      flat: 125,
    },
    pathingRadius: {
      flat: 36,
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
      flat: 0.625,
      perLevel: 3.5,
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
      flat: -0.06,
    },
    attackRange: {
      flat: 450,
    },
  },
  positions: [
    'Support',
  ],
  roles: [
    'Catcher',
    'Support',
    'Tank',
  ],
  attributeRatings: {
    damage: 1,
    toughness: 2,
    control: 3,
    mobility: 1,
    utility: 3,
    abilityReliance: 75,
    difficulty: 3,
  },
  abilities: {
    P: [
      {
        name: 'Damnation',
        icon: 'https://cdn.communitydragon.org/latest/champion/Thresh/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Thresh\'s armor does not increase through growth (per level).</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Enemy champions, large minions and large monsters that die near Thresh drop a Soul for 8 seconds. Epic monsters drop 2 Souls while lesser minions and monsters have a 33.3% chance to drop a Soul.</p>',
          },
          {
            description: 'Thresh automatically collects Souls near him or a placed Dark Passage.',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Soul:</span> For each stack, Thresh gains 1 ability power and 1 bonus armor.</p>',
          },
        ],
        targeting: 'Passive',
        affects: 'Self',
        notes: 'Souls grant a small area of  sight.\nSouls are visible to allies and only become visible to enemies if their team has  sight of Thresh.\nThe probability for souls dropping from small minions and monster on  Summoner\'s Rift starts at 33% but adjusts dynamically to match the expected quota of souls dropped (lowers if above, rises if below, remains if even). Souls collected are not considered when adjusting the probability.\n Nunu & Willump drop a soul each.',
        blurb: 'Innate:  Thresh\'s  armor does not increase by  leveling up.',
        effectRadius: '1900',
      },
    ],
    Q: [
      {
        name: 'Death Sentence',
        icon: 'https://cdn.communitydragon.org/latest/champion/Thresh/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Thresh throws out his scythe in the target direction, becoming unable to move or attack while it is in flight.</p>',
          },
          {
            description: 'The scythe catches the first enemy hit to deal magic damage, stun and reveal them for 1.5 seconds, and render them airborne for 0.4 seconds, as well as reduce Death Sentence\'s current cooldown by 2 seconds. Thresh will also mark the target Shackled for 1.5 seconds, during which he is unable to declare basic attacks, and is slowed by 20% for 1 second.',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      100,
                      150,
                      200,
                      250,
                      300,
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
            description: 'While the target is stunned, Thresh tugs his hook towards him twice, once after a 0.1-second delay and again 0.6 seconds after that. With each tug, the target is pulled a short distance towards Thresh. After 0.5 seconds of hitting an enemy, or instantly after hitting a minion or monster, Thresh can recast the ability while the target is Shackled.',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Recast - Deathly Leap:</span> Thresh stops tugging his hook and dashes to the Shackled enemy, becoming able to attack again upon arrival. He can cast Dark Passage and Flay during the dash.</p>',
          },
        ],
        cost: [
          70,
        ],
        cooldown: [
          19,
          16.5,
          14,
          11.5,
          9,
        ],
        targeting: 'Direction / Auto',
        affects: 'Enemies / Self',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'spell',
        projectile: 'TRUE',
        notes: 'Thresh will track the target if they change locations.\nHe will dash to the target\'s previous location if the target is too far away or moves beyond 2000 units.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe pull that occurs with each of Thresh\'s tugs is a non- airborne displacement that displaces the target toward him. Thresh will only tug if the target remains  stunned and he has not casted Deathly Leap.\nThresh will not tug his hook at all if the stun was not applied to the target.\nThese displacements will not be resisted by  displacement immunity or  crowd control immunity.(note)\nThe first tug occurs after the 0.1-second delay, while the second tug occurs after 0.7 seconds of the target being stunned (or 0.6 seconds from the end of the initial delay).\nThe initial  airborne debuff that is applied to the target upon hitting them is removed if the displacement from the first pull is interrupted.\nThe target will not be pulled with the tugs if they are too close to Thresh.\nDeath Sentence cannot be recast while  grounded or  rooted.\nDeath Sentence can be recast even while the target is  untargetable.\nDeath Sentence will not  stun enemies that are  displacement immune or  immune to crowd control but the target will still be marked and Thresh is still granted the ability to recast for his dash.\n Spell shield will block all of Death Sentence\'s effects, including the mark as well as prevent the cooldown reduction.\nDeath Sentence\'s  stun duration is affected by  tenacity but the mark will always persist for 1.5 seconds, unless the target uses a  cleansing effect, in which case the mark is removed.\nDeath Sentence\'s  stun will persist even if Thresh dies before the duration ends. The tugs will not occur as Thresh is not alive.\nThe reveal lingers for 0.05 seconds after it ends.\nDeathly Leap has a maximum cast range of ~3000 units. If Thresh or the target move a greater distance than this away from one another while the target is marked, Deathly Leap can still be cast but will fail to trigger the dash.(bug)\nThresh will turn his facing direction towards the cast direction only after Death Sentence\'s cast is complete.\nIf Thresh is facing more than 90° away from the cast direction in either direction, he will turn to face exactly 90° away from the cast direction over the cast time, then turn towards the cast direction when the missile is fired.\nIf Thresh is facing less than 90° away from the cast direction, he will keep his facing direction until the missile is fired.\nThis prevents the enemy from knowing where exactly Thresh is aiming at before the cast animation is complete.\nDeath Sentence triggers on-cast effects (such as  Spellblade and triggering  Force Pulse\'s passive) once at the start of the cast, and once at the end of the cast. It may trigger on-cast effects a third time when casting Deathly Leap.\nThis is because a separate spell is cast to prevent Thresh from facing towards the target direction immediately, which is (incorrectly) flagged to trigger on-cast effects.(bug)\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection',
        speed: '1900 / 1400',
        width: '140',
        castTime: '0.5',
        effectRadius: 'Global / 3000',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Dark Passage',
        icon: 'https://cdn.communitydragon.org/latest/champion/Thresh/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Thresh throws his lantern to the target location over 0.5 seconds, lasting for 6 seconds while he remains nearby and granting sight of its surroundings. If Thresh moves too far away from the lantern, it returns back to him immediately.</p>',
          },
          {
            description: 'Thresh and the first allied champion to come near the lantern are granted a shield for 4 seconds. An ally can select the lantern while in proximity of it, dashing to Thresh and gaining the shield.',
            leveling: [
              {
                attribute: 'Shield Strength',
                modifiers: [
                  {
                    values: [
                      50,
                      70,
                      90,
                      110,
                      130,
                    ],
                  },
                  {
                    values: [
                      2,
                    ],
                    units: [
                      ' per Soul collected',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'An ally cannot select the lantern while immobilized, grounded, or silenced. The lantern will not expire from Thresh moving too far away if he is dashing with Deathly Leap.',
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
          21,
          20,
          19,
          18,
          17,
        ],
        targeting: 'Location',
        affects: 'Allies',
        resource: 'Mana',
        projectile: 'TRUE',
        notes: 'The dashing ally will track Thresh if he changes locations.\nThey will dash to Thresh\'s previous location if he is too far away or moves beyond 2200 units.\nThe lantern is considered a unit and can be targeted by an allied  Teleport,  Leap Strike,  Shunpo, and  Safeguard.\nIt is  untargetable to enemies.\nThe lantern\'s duration and maximum leash range are each displayed as a circle on the ground.\nThresh will gain Dark Passage\'s shield from moving out of leash range of the lantern.\nDark Passage is special cased to trigger  Guardian.',
        blurb: 'Active:  Thresh throws his lantern to the target location that remains for a few seconds while he remains nearby. He and the first allied champion to come near the lantern are granted a  shield for a few seconds, with the amount based on  Souls.',
        tetherRadius: '1500',
        castTime: 'none',
        effectRadius: '350 / 150',
        targetRange: '950',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Flay',
        icon: 'https://cdn.communitydragon.org/latest/champion/Thresh/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Thresh\'s basic attacks are empowered to deal bonus magic damage, with the AD ratio increasing over 10 seconds without basic attacking enemies.</p>',
            leveling: [
              {
                attribute: 'Minimum Bonus Magic Damage',
                modifiers: [
                  {
                    values: [
                      1.7,
                    ],
                    units: [
                      ' per Soul collected',
                    ],
                  },
                  {
                    values: [
                      0,
                    ],
                    units: [
                      '% AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'Maximum Bonus Magic Damage',
                modifiers: [
                  {
                    values: [
                      1.7,
                    ],
                    units: [
                      ' per Soul collected',
                    ],
                  },
                  {
                    values: [
                      90,
                      120,
                      150,
                      180,
                      210,
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
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Thresh sweeps his chain across the ground in a broad line and a radius around him, starting behind him and towards the target direction. Enemies hit are dealt magic damage and knocked 200 units in the target direction, and then are slowed for 1 second.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      75,
                      120,
                      165,
                      210,
                      255,
                    ],
                  },
                  {
                    values: [
                      70,
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
                      20,
                      25,
                      30,
                      35,
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
        ],
        cost: [
          60,
          65,
          70,
          75,
          80,
        ],
        cooldown: [
          13,
          12.25,
          11.5,
          10.75,
          10,
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'special',
        projectile: 'FALSE',
        notes: 'Flay\'s effects start at the start of the cast time. Thresh can cast other spells once the cast time completes, but remains unable to attack and move and use mobility spells (such as  Flash) until the chain completed its way entirely.\nApplies  area damage on the ability and deals  proc damage on the enhanced basic attack.\nThe knockback\'s  airborne debuff is set to last longer than the forced movement, but gets removed as soon as the forced movement from Flay ends or is overridden by another.\nFlay\'s passive\'s buff icon changes colors depending on charge level. At 100%, Thresh\'s scythe will glow green and a sound effect will play.\n\n\n\n\n0 - 50%\n\n\n\n\n\n\n50 - 75%\n\n\n\n\n\n\n75% - 100%\n\n\n\n\n\n\n100%\n\n\n\n\n Runaan\'s Hurricane\'s Wind\'s Fury will apply Flay\'s passive to each enemy hit, with the secondary targets taking minimum damage (charge resets upon hitting the primary target).\nThe enhanced attack applies other on-hit effects and can  critically strike as normal (the bonus damage cannot).\nFlay\'s passive enhanced attack can be  dodged (the enhanced attack is not consumed and the charge is not reset) and  blocked (the enhanced attack is consumed and the charge is reset).\nThe empowered attack will not trigger against structures nor wards.\nPENDING FOR TEST:: Enhanced attack\'s interactions with  blinding effects (regarding both bonus damage and charge reset).\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection',
        speed: '2000',
        width: '220',
        castTime: '0.3889',
        effectRadius: '270',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'The Box',
        icon: 'https://cdn.communitydragon.org/latest/champion/Thresh/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Thresh erects a pentagon of spectral walls around him that each last for 5 seconds. A wall will break upon enemy champion contact, dealing magic damage and slowing them by 99% for 2 seconds. After the first wall breaks, the rest will deal no damage and slow for only 1 second.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      250,
                      400,
                      550,
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
            description: 'Enemies that break a wall cannot do so again for 1 second.',
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
        targeting: 'Auto',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'Area of effect',
        notes: 'This ability will cast from wherever the caster is at the start of the cast time.\nThe Box always uses quick cast, regardless of player settings.\nThe Box always faces the same direction Thresh is facing on cast, placing a corner directly in front of him.\nThe cast indicator displays the opposite of the true behavior.\nIf The Box hits multiple champions with different walls on cast, only one of the walls will deal damage and apply the extended slow duration. This wall is chosen by starting at the wall in front of and to the right of Thresh\'s facing direction on cast, and progressing clockwise.\nThe corners of The Box are placed 400 units around Thresh.\nEach wall is 470.228 units long.\nEach wall passes 323.607 units from the center of The Box at the closest approach (ignoring its width).\nAs a regular pentagon, The Box has an angle of 72° between each corner.',
        blurb: 'Active:  Thresh erects a pentagon of spectral walls around him that each last a few seconds. A wall will break upon enemy champion contact, dealing magic damage and  slowing them for a short time.',
        width: '30',
        castTime: '0.45',
        maxCharges: -1,
      },
    ],
  },
  lore: 'Sadistic and cunning, Thresh is an ambitious and restless specter of the Shadow Isles. Once the custodian of countless arcane secrets, he was undone by a power greater than life or death, and now sustains himself by tormenting and breaking others with slow, excruciating inventiveness. His victims suffer far beyond their brief mortal coil as Thresh wreaks agony upon their souls, imprisoning them in his unholy lantern to torture for all eternity.',
}
export default champion