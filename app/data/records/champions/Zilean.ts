// Updated Patch 25.11 - 06/16/2025 01:01:45 PM CDT

const champion: Champion = {
  id: 26,
  key: 'Zilean',
  name: 'Zilean',
  title: 'the Chronokeeper',
  resource: 'Mana',
  attackType: 'Ranged',
  stats: {
    health: {
      flat: 574,
      perLevel: 96,
    },
    healthRegen: {
      flat: 5.5,
      perLevel: 0.5,
    },
    mana: {
      flat: 452,
      perLevel: 50,
    },
    manaRegen: {
      flat: 11.35,
      perLevel: 0.8,
    },
    armor: {
      flat: 24,
      perLevel: 5,
    },
    magicResistance: {
      flat: 30,
      perLevel: 1.3,
    },
    attackDamage: {
      flat: 52,
      perLevel: 3,
    },
    movespeed: {
      flat: 335,
    },
    acquisitionRadius: {
      flat: 550,
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
      flat: 0.658,
      perLevel: 2.13,
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
      flat: -0.12,
    },
    attackRange: {
      flat: 550,
    },
  },
  positions: [
    'Support',
  ],
  roles: [
    'Mage',
    'Specialist',
    'Support',
  ],
  attributeRatings: {
    damage: 2,
    toughness: 1,
    control: 2,
    mobility: 2,
    utility: 3,
    abilityReliance: 100,
    difficulty: 2,
  },
  abilities: {
    P: [
      {
        name: 'Time in a Bottle',
        icon: 'https://cdn.communitydragon.org/latest/champion/Zilean/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Zilean generates 2 / 3.5 / 5 / 6 / 12 (based on level) experience (does not count towards his own level up) every 5 seconds. Time in a Bottle is on cooldown when the game starts and becomes disabled when everyone on Zilean\'s team including himself has reached level 18.</p>',
          },
          {
            description: 'When he has stored enough to level up an allied champion and grant the same amount of experience to himself, he can select them to channel for 1.2 seconds after a 0.5-second cast time. The channel is interrupted and disabled upon entering combat with enemy champions or taking damage from turrets, placing it on a 10-second cooldown. If Zilean interrupts it himself, it is placed on a 1-second cooldown, increased to 2 if he used a basic attack against a turret to do so.',
          },
          {
            description: 'A successful channel will grant an equal amount of experience to the ally to-level-up and Zilean, with a combined minimum of 15% his stored experience.',
          },
        ],
        targeting: 'Unit',
        affects: 'Allies',
        notes: 'Zilean has a hidden passive that grants him 1 ability power for every enemy  Volibear within 800 range of him.\nLikewise,  Volibear gains 1 armor for every nearby Zilean.\nNeither  Volibear nor Zilean need  sight of one another to gain these bonuses.\nTime in a Bottle marks allied champions with two circles beneath them; the inner one represents how close they are to leveling up, turning golden when able to activate Time in a Bottle on them.\nThe target allied champion is not required to be out of combat to be leveled up by Time in a Bottle - only Zilean is.\nZilean only consumes the amount of  experience required to level up an allied champion. He retains the excess for later use.\nThe target allied champion is not required to be within range of Zilean for the channel to complete successfully, it will complete regardless of if they move to a far distance.\nThe channel from Time in a Bottle is not interrupted even if the allied champion suddenly levels up. However, no experience will be granted to either player, and the passive will not go on cooldown.\nThe following table refers for interactions while Zilean is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nInterrupts\n\n\nAbilities\n\nInterrupts\n\n\nMovement\n\nInterrupts\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects',
        targetRange: '875',
      },
    ],
    Q: [
      {
        name: 'Time Bomb',
        icon: 'https://cdn.communitydragon.org/latest/champion/Zilean/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Zilean throws a ticking time bomb to the target location that grants sight of its surroundings. The bomb will attach itself to units that move within the epicenter, or those hit directly, revealing them.</p>',
          },
          {
            description: 'After 3 seconds, or when the attached unit dies, the bomb explodes to deal magic damage to nearby enemies.',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      75,
                      115,
                      165,
                      230,
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
            description: 'The bomb detonates immediately if another bomb attaches itself to the same unit, stunning nearby enemies for a duration.',
            leveling: [
              {
                attribute: 'Stun Duration',
                modifiers: [
                  {
                    values: [
                      1.1,
                      1.2,
                      1.3,
                      1.4,
                      1.5,
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
          60,
          65,
          70,
          75,
          80,
        ],
        cooldown: [
          10,
          9.5,
          9,
          8.5,
          8,
        ],
        targeting: 'Location',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'spellaoe',
        projectile: 'TRUE',
        notes: 'Time Bombs landing directly on top of multiple units follow a priority order for whom to attach themselves to.\nUnits already carrying a bomb\nEnemy champions\nAllied champions\nEnemy minions\nAllied minions\nTime Bombs are not visible to enemies if they attach to an ally that is  stealthed and vice versa.\nWhen Time Bomb snaps onto an enemy, it  deals 0  proc damage.\nThis triggers in-combat effects such as drawing turret aggro and drawing monster aggression.\nIt also triggers  Sudden Impact and applies  Elixir of Sorcery.\nIt does not trigger  Cheap Shot, however, as  proc damage doesn\'t trigger  Cheap Shot.\nZilean can detonate an enemy counterpart\'s Time Bomb by placing his own on the same unit (the first bomb still deals damage).\nTime Bomb will be dispelled if the holder takes fatal damage and is saved by  resurrection before it explodes.\nTime Bomb can deal damage to the enemy holder through  untargetablility.\n Spell shield will prevent the application of Time Bomb and it\'s detonation damage as well as block the  stun, but not it\'s immediate detonation if the target already has a Time Bomb on them.\nWhile  disguised as a non-champion,  Neeko cannot be affected by Time Bomb.(bug)',
        blurb: 'Active:  Zilean throws a ticking time bomb to the target location that will attach upon enemy contact,  revealing them. It will detonate after a short time or when the attached unit dies, dealing magic damage to nearby enemies hit.',
        collisionRadius: '140',
        castTime: '0.25',
        effectRadius: '350',
        targetRange: '900',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Rewind',
        icon: 'https://cdn.communitydragon.org/latest/champion/Zilean/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Zilean reduces the remaining cooldowns of Time Bomb and Time Warp by 10 seconds each.</p>',
          },
          {
            description: 'Either Time Bomb or Time Warp must be on cooldown to cast this ability.',
          },
        ],
        cost: [
          35,
        ],
        cooldown: [
          14,
          12,
          10,
          8,
          6,
        ],
        targeting: 'Auto',
        affects: 'Self',
        resource: 'Mana',
        notes: 'No additional details.',
        blurb: 'Active:  Zilean  reduces the  remaining cooldowns of his other basic abilities.',
        castTime: 'none',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Time Warp',
        icon: 'https://cdn.communitydragon.org/latest/champion/Zilean/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Zilean applies Time Warp to the target champion which lasts for 2.5 seconds.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Time Warp:</span> If the target is an ally, they gain bonus movement speed. If the target is an enemy, they are slowed.</p>',
            leveling: [
              {
                attribute: 'Movement Speed Modifier',
                modifiers: [
                  {
                    values: [
                      40,
                      55,
                      70,
                      85,
                      99,
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
          50,
        ],
        cooldown: [
          15,
        ],
        targeting: 'Unit',
        affects: 'Enemies, Allies',
        spellshieldable: 'True',
        resource: 'Mana',
        projectile: 'FALSE',
        notes: 'No additional notes.',
        blurb: 'Active:  Zilean applies Time Warp to the target champion that lasts for a short time.',
        castTime: 'none',
        targetRange: '550',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'Chronoshift',
        icon: 'https://cdn.communitydragon.org/latest/champion/Zilean/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Zilean places a protective time rune on the target allied champion or himself for 5 seconds.</p>',
          },
          {
            description: 'If the target takes fatal damage within the duration, they enter resurrection for 3 seconds, becoming invulnerable, untargetable, and unable to act. Afterwards, they revive while being healed.',
            leveling: [
              {
                attribute: 'Heal',
                modifiers: [
                  {
                    values: [
                      600,
                      850,
                      1100,
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
        ],
        cost: [
          125,
          150,
          175,
        ],
        cooldown: [
          120,
          90,
          60,
        ],
        targeting: 'Unit',
        affects: 'Self, Allies',
        resource: 'Mana',
        notes: 'Upon trigger, Chronoshift places all summoner spells that are not already on cooldown on a 3-second  cooldown.\nChronoshift\'s  untargetability does not  destroy in-flight  projectiles.\nChronoshift cannot target  clones.\nChronoshift takes priority over all other  resurrection effects as well as all  zombie state effects.\nChronoshift does not activate if the target is killed by the  Nexus Obelisk.\nChronoshift has a  forgiveness radius of 175 units.\nWhile in resurrection, the target\'s health regeneration is set to 0.\nThe target\'s screen will have a white tint.\nThe following table refers for interactions while the target is unable to act:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash  Mark  Dash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath',
        blurb: 'Active:  Zilean places a protective time rune on himself or the target allied champion for a few seconds.',
        castTime: 'none',
        targetRange: '900',
        maxCharges: -1,
      },
    ],
  },
  lore: 'Once a powerful Icathian mage, Zilean became obsessed with the passage of time after witnessing his homeland\'s destruction by the Void. Unable to spare even a minute to grieve the catastrophic loss, he called upon ancient temporal magic to divine all possible outcomes. Having become functionally immortal, Zilean now drifts through the past, present, and future, bending and warping the flow of time around him, always searching for that elusive moment that will turn back the clock and undo Icathia\'s destruction.',
}
export default champion