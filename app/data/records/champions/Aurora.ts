// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion = {
  id: 893,
  key: 'Aurora',
  name: 'Aurora',
  title: 'the Witch Between Worlds',
  resource: 'Mana',
  attackType: 'Ranged',
  stats: {
    health: {
      flat: 607,
      perLevel: 110,
    },
    healthRegen: {
      flat: 6,
      perLevel: 0.55,
    },
    mana: {
      flat: 475,
      perLevel: 30,
    },
    manaRegen: {
      flat: 8,
      perLevel: 0.8,
    },
    armor: {
      flat: 23,
      perLevel: 4.5,
    },
    magicResistance: {
      flat: 32,
      perLevel: 1.3,
    },
    attackDamage: {
      flat: 53,
      perLevel: 3,
    },
    movespeed: {
      flat: 335,
    },
    acquisitionRadius: {
      flat: 525,
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
      flat: 0.668,
      perLevel: 2,
    },
    attackSpeedRatio: {
      flat: 0.668,
    },
    attackCastTime: {
      flat: 0.3,
    },
    attackTotalTime: {
      flat: 1.6,
    },
    attackDelayOffset: {
      flat: -0.099,
    },
    attackRange: {
      flat: 550,
    },
  },
  positions: [
    'Middle',
    'Top',
  ],
  roles: [
    'Assassin',
    'Burst',
    'Mage',
  ],
  attributeRatings: {
    damage: 3,
    toughness: 1,
    control: 2,
    mobility: 3,
    utility: 1,
    abilityReliance: 100,
    difficulty: 2,
  },
  abilities: {
    P: [
      {
        name: 'Spirit Abjuration',
        icon: 'https://cdn.communitydragon.org/latest/champion/Aurora/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Aurora\'s damaging basic attacks and abilities apply a stack of Spirit Abjuration to enemies for 4 seconds, refreshing on subsequent applications and stacking up to 3 times. The third stack against a target consumes them all to deal bonus magic damage equal to 2.5% (+ 2% per 100 AP) of the target\'s maximum health, capped at 100 - 180 (based on level) against monsters.</p>',
          },
          {
            description: 'Upon consuming the stacks from a champion, Aurora additionally exorcises them, freeing a Spirit from the target that follows her for the same duration. For each active Spirit, Aurora is healed for 3 - 20 (based on level) (+ 2% AP) every second. Subsequent exorcisms free further Spirits and refresh all active Spirits. Aurora may have up to 4 Spirits at a time, for a maximum heal per tick of 12 - 80 (based on level) (+ 8% AP).',
          },
        ],
        targeting: 'Passive',
        affects: 'Enemies, Self',
        spellshieldable: 'false',
        damageType: 'Magic damage',
        spellEffects: 'proc',
        notes: 'The spirits grant vision of a small area around themselves.',
        blurb: 'Innate:  Aurora\'s basic attacks and damaging abilities inflict a stack of Spirit Abjuration, stacking up to 3 times.',
      },
    ],
    Q: [
      {
        name: 'Twofold Hex',
        icon: 'https://cdn.communitydragon.org/latest/champion/Aurora/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Aurora fires a bolt of energy in the target direction that deals magic damage to enemies hit and marks them with a curse for 3.5 seconds.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      45,
                      70,
                      95,
                      120,
                      145,
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
            description: 'Twofold Hex can be recast after 0.1 seconds while at least one target is marked, and does so automatically at the end of the mark\'s duration.',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Aurora expunges the curse from all marked targets, drawing the spiritual energy back to her as bolts that each deal magic damage to all enemies they pass through, reduced to 40% against minions and 50% against monsters and increased by 0% - 50% (based on target\'s missing health). Subsequent bolts against an enemy deal 20% damage.</p>',
            leveling: [
              {
                attribute: 'Minimum Magic Damage',
                modifiers: [
                  {
                    values: [
                      45,
                      70,
                      95,
                      120,
                      145,
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
                attribute: 'Maximum Magic Damage',
                modifiers: [
                  {
                    values: [
                      67.5,
                      105,
                      142.5,
                      180,
                      217.5,
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
              {
                attribute: 'Subsequent Bolt Minimum Magic Damage',
                modifiers: [
                  {
                    values: [
                      9,
                      14,
                      19,
                      24,
                      29,
                    ],
                  },
                  {
                    values: [
                      8,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Subsequent Bolt Maximum Magic Damage',
                modifiers: [
                  {
                    values: [
                      13.5,
                      21,
                      28.5,
                      36,
                      43.5,
                    ],
                  },
                  {
                    values: [
                      12,
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
          60,
        ],
        cooldown: [
          9,
          8.5,
          8,
          7.5,
          7,
        ],
        targeting: 'Direction / Auto',
        affects: 'Enemies, Self',
        spellshieldable: 'true',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'spellaoe',
        projectile: 'TRUE',
        notes: 'Twofold Hex can also be recast for 0.66 seconds after the 0.1-second delay. If the recast is used during this time window, Twofold Hex will be buffered to recast automatically as soon as the bolt missile from the first cast has fizzled from reaching maximum range, even if no targets are marked. This automatic recast can also be buffered during Twofold Hex\'s cast time.\n Spell shield can block the effects of the active and the recast.\nThe marked targets do not need to be visible in order for Aurora to recast Twofold Hex.\nThey do however need to be targetable; if all marked targets are  untargetable, Twofold Hex\'s recast is disabled.\nIf there were any enemies that were marked by Twofold Hex but untargetable when Aurora successfully recast Twofold Hex, then their mark will not be expunged at the time of recast and Aurora will automatically recast again at the end of the duration of Twofold Hex and expunge any remaining marks.\nOnce Aurora successfully recasts Twofold Hex, she will not be able to recast it again for the duration even if there are still marked enemies remaining.\nThis ability will cast from wherever the caster is at the end of the cast time.',
        blurb: 'Active:  Aurora fires a bolt of energy that deals magic damage to enemies hit and marks them for a short time. Twofold Hex can be recast while at least one target is marked.',
        speed: '1600 / 2000',
        width: '210 / 90',
        castTime: '0.25 / None',
        effectRadius: 'Global',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Across the Veil',
        icon: 'https://cdn.communitydragon.org/latest/champion/Aurora/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Aurora hops in the target direction inside a portal to the Spirit Realm. Upon completing the dash, she becomes invisible for a duration and gains Realm Hopper for 4 seconds.</p>',
            leveling: [
              {
                attribute: 'Invisibility Duration',
                modifiers: [
                  {
                    values: [
                      1,
                      1.15,
                      1.3,
                      1.45,
                      1.6,
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
            description: '<p class="ability-effect"><span class="ability-header">Realm Hopper:</span> Aurora becomes ghosted and gains bonus movement speed for the duration.</p>',
            leveling: [
              {
                attribute: 'Bonus Movement Speed',
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
          {
            description: 'Scoring a takedown against an enemy champion within 3 seconds of damaging them will reset Across the Veil\'s cooldown.',
          },
        ],
        cost: [
          80,
        ],
        cooldown: [
          22,
          21,
          20,
          19,
          18,
        ],
        targeting: 'direction',
        affects: 'self',
        resource: 'Mana',
        notes: 'Aurora will not gain the stealth if her dash is interrupted.\nShe will however gain the stealth despite the dash being interrupted from colliding with  Between Worlds\' border.\nHer dash is interrupted in this case from being overridden by the rift dash.\nAurora is locked out of using all abilities, summoner spells, and item actives during the dash.\nShe cannot buffer these spells to cast after the lockout. This is in place to prevent her from breaking the stealth from certain spell casts.\nThis is the case even for spells that do not break stealth when cast.\nUsing a basic attack breaks the stealth at the end of the attack windup.\nAt rank 0, Realm Hopper will grant Aurora 15% bonus movement speed. This is only relevant for using  Between Worlds.',
        blurb: 'Active:  Aurora  hops into  invisibility for a moment and gains Realm Hopper for a few seconds.',
        speed: '350',
        castTime: 'none',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'The Weirding',
        icon: 'https://cdn.communitydragon.org/latest/champion/Aurora/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Aurora blasts energy in a line in the target direction and recoils 250 units in the opposite direction. The blast deals magic damage to enemies hit and slows them by 80% for 1 second decaying after the first 0.15 seconds.</p>',
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
                      70,
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
          15,
          14,
          13,
          12,
          11,
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'true',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'spellaoe',
        projectile: 'FALSE',
        notes: 'Aurora is locked out of using all abilities, summoner spells, and item actives during the dash.\nWhile  grounded or  rooted, The Weirding can be cast but Aurora will not  dash.\nSimilarly, if Aurora is affected by ground or root during the cast time, she will not dash afterwards.\nThis only applies to ground and root.  Immobilizing effects will not prevent the dash afterwards.(note)\nThis ability will cast from wherever the caster is at the end of the cast time.',
        blurb: 'Active:  Aurora blasts energy and  recoils backward. The blast deals magic damage to enemies hit and  slows them for a moment.',
        speed: '150 + 200% movement speed',
        width: '175',
        castTime: '0.35',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'Between Worlds',
        icon: 'https://cdn.communitydragon.org/latest/champion/Aurora/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Aurora leaps in the target direction with displacement immunity over 0.4 seconds. She then gains Realm Hopper for 3.5 seconds and unleashes a shockwave from 425 units in front of her, expanding over 0.75 seconds to deal magic damage to enemies hit and slow them by 30% for 2 seconds.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      175,
                      275,
                      375,
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
            ],
          },
          {
            description: 'The shockwave leaves behind a circular rift to the Spirit Realm for a duration, forming borders that interact with Aurora and enemies. If Aurora collides with the border, she dashes to the diametrically opposite side of the rift over 0.4 seconds, becoming untargetable and unable to act during the travel. If an enemy collides with the border, they are slowed by 50% for a duration.',
            leveling: [
              {
                attribute: 'Rift Duration',
                modifiers: [
                  {
                    values: [
                      1.75,
                      2.5,
                      3.25,
                    ],
                    units: [
                      ' seconds',
                    ],
                  },
                ],
              },
              {
                attribute: 'Slow Duration',
                modifiers: [
                  {
                    values: [
                      1.5,
                      1.75,
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
            description: 'Between Worlds can be recast after 1 second of unleashing the shockwave while the rift is active.',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Aurora closes the rift prematurely.</p>',
          },
          {
            description: 'The rift closes immediately if Aurora dies, enters resurrection, leaves the area, or is not within the area upon creation.',
          },
        ],
        cost: [
          100,
        ],
        cooldown: [
          140,
          120,
          100,
        ],
        targeting: 'Direction / Auto',
        affects: 'Enemies, self',
        spellshieldable: 'true',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'spellaoe',
        projectile: 'FALSE',
        notes: 'Collision with the border is essentially moving within range of it while being targetable, including via normal movement, dash, or displacement.\nAurora and enemies can collide with the border any number of times, as much as the duration permits.\nEnemies can be applied the slow by colliding with the border only once after moving within collision radius of it. The slow may be applied again from collision only until after they have left the collision radius; it cannot be continuously applied while enemies remain within collision radius of the border.\n Untargetable units cannot collide with the border, including Aurora herself.\nThe in-game tooltip incorrectly lists the rift duration as 3 / 3.25 / 3.5 / 3.75 / 4 seconds.(bug)\nThis duration seems to include the time for the shockwave to fully expand. However, the rift and its borders will only form after the fact, so the actual duration of the rift is shorter.\nBetween Worlds\'   untargetability from the rift dash does not  destroy in-flight  projectiles.\nBetween Worlds\'  first cast is disabled while  grounded or  rooted.\nAurora can still dash from colliding with the border even if she is  immobilized or  grounded.\n Spell shield can block both the shockwave and border collision.\nA pair of portals signifying Aurora\'s nearest possible entry and its corresponding exit is visible to her at all times.\nThe following table refers for interactions while Aurora is dashing:\nThis lockout applies to both the initial dash and the dashes in the formed rift.\nThe lockout during the initial cast\'s dash persists for another 0.5 seconds after the dash ends.\nThe lockout during the rift dash persists for another 0.15 seconds after the dash ends.\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath',
        blurb: 'Active:  Aurora becomes  unstoppable and  leaps, unleashing an expanding shockwave that deals magic damage to enemies hit and  slows them briefly, and gaining  Realm Hopper for a few seconds.',
        collisionRadius: '25',
        castTime: 'none',
        effectRadius: '700',
        maxCharges: -1,
      },
    ],
  },
  lore: 'From the moment she was born, Aurora navigated life with a unique ability to move between the spirit and material realms. Determined to learn more about the spirit realm\'s inhabitants, she left her home to further her research and happened upon a wayward demigod who\'d become twisted and lost to time. Witnessing his desperation, Aurora resolved to find a way to help her feral friend regain his forgotten identity—a journey that would take her to the farthest reaches of the Freljord.',
}
export default champion