// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion = {
  id: 32,
  key: 'Amumu',
  name: 'Amumu',
  title: 'the Sad Mummy',
  resource: 'Mana',
  attackType: 'Melee',
  stats: {
    health: {
      flat: 685,
      perLevel: 94,
    },
    healthRegen: {
      flat: 9,
      perLevel: 0.85,
    },
    mana: {
      flat: 285,
      perLevel: 40,
    },
    manaRegen: {
      flat: 7.4,
      perLevel: 0.55,
    },
    armor: {
      flat: 33,
      perLevel: 4,
    },
    magicResistance: {
      flat: 32,
      perLevel: 2.05,
    },
    attackDamage: {
      flat: 57,
      perLevel: 3.8,
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
      flat: 0.736,
      perLevel: 2.18,
    },
    attackSpeedRatio: {
      flat: 0.638,
    },
    attackCastTime: {
      flat: 0.3,
    },
    attackTotalTime: {
      flat: 1.6,
    },
    attackDelayOffset: {
      flat: -0.066,
    },
    attackRange: {
      flat: 125,
    },
  },
  positions: [
    'Jungle',
    'Support',
  ],
  roles: [
    'Support',
    'Tank',
    'Vanguard',
  ],
  attributeRatings: {
    damage: 2,
    toughness: 3,
    control: 3,
    mobility: 1,
    utility: 1,
    abilityReliance: 90,
    difficulty: 1,
  },
  abilities: {
    P: [
      {
        name: 'Cursed Touch',
        icon: 'https://cdn.communitydragon.org/latest/champion/Amumu/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Amumu\'s basic attacks and Curse of the Sad Mummy are empowered to mark enemies with Curse for 3 seconds, refreshing on subsequent applications and Despair\'s per-tick damage.</p>',
          },
          {
            description: 'Cursed targets receive 10% bonus true damage from all incoming pre-mitigation magic damage.',
          },
        ],
        targeting: 'Passive',
        affects: 'Enemies',
        spellshieldable: 'special',
        damageType: 'True damage',
        spellEffects: 'default',
        notes: 'If the triggering basic attack from Amumu applies magic damage  on-hit, Curse will be applied before the magic damage.\nThe Curse application from  Curse of the Sad Mummy happens after the magic damage is dealt by it, therefore amplifying the damage only if the target was also already marked before the hit.\nNeutral units / enemies affected by the Curse can receive bonus damage from the opposing team of Amumu / neutral units, but the damage will be credited to Amumu.\nThe application of Curse on  Curse of the Sad Mummy is negated if the ability is blocked by a  spell shield.',
        blurb: 'Innate:  Amumu\'s basic attacks and  Curse of the Sad Mummy mark enemies with Curse.  Despair will refresh ongoing Curse marks on enemies hit.',
      },
    ],
    Q: [
      {
        name: 'Bandage Toss',
        icon: 'https://cdn.communitydragon.org/latest/champion/Amumu/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Amumu throws a bandage in the target direction that deals magic damage to the first enemy hit, stunning them for 1 second and pulling him to them, during which they are revealed.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      70,
                      95,
                      120,
                      145,
                      170,
                    ],
                  },
                  {
                    values: [
                      85,
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
            description: 'Amumu periodically stocks a Bandage Toss charge, up to a maximum of 2.',
          },
          {
            description: 'Despair can be cast during the dash.',
          },
        ],
        cost: [
          45,
          50,
          55,
          60,
          65,
        ],
        cooldown: [
          3,
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'special',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'spell',
        projectile: 'TRUE',
        notes: 'Amumu will track the target if they change locations.\nHe will dash to the target\'s previous location if the target is 2000 or more units away or moves beyond 2000 units.\nBandage Toss will always be directed towards the target\'s location even if Amumu moves while it is in flight.\n Immobilizing effects will not prevent Amumu from commencing the  dash.\nBandage Toss does not fizzle on Amumu\'s  death, and can still stun and damage enemies.\nAmumu is still able to  dash even if Bandage Toss is blocked by  spell shield.\nAmumu will be ordered to basic attack the target upon completion of the dash.\nThis ability will cast from wherever the caster is at the end of the cast time.',
        blurb: 'Active:  Amumu throws a bandage that deals magic damage and  stuns the first enemy hit while he  dashes to them.',
        rechargeRate: [
          16,
          15.5,
          15,
          14.5,
          14,
        ],
        speed: '2000 / 1800',
        width: '160',
        castTime: '0.25',
        maxCharges: 2,
      },
    ],
    W: [
      {
        name: 'Despair',
        icon: 'https://cdn.communitydragon.org/latest/champion/Amumu/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Toggle:</span> Amumu cries a continuous pool of tears, dealing magic damage every 0.5 seconds to nearby enemies.</p>',
            leveling: [
              {
                attribute: 'Magic Damage Per Tick',
                modifiers: [
                  {
                    values: [
                      5,
                    ],
                  },
                  {
                    values: [
                      0.5,
                      0.625,
                      0.75,
                      0.875,
                      1,
                    ],
                    units: [
                      '% (+ 0.25% per 100 AP) of target\'s maximum health',
                    ],
                  },
                ],
              },
            ],
          },
        ],
        cost: [
          8,
        ],
        cooldown: [
          1,
        ],
        targeting: 'Auto',
        affects: 'Enemies',
        spellshieldable: 'False',
        resource: 'Mana / s',
        damageType: 'Magic damage',
        spellEffects: 'aoedot',
        notes: 'Toggle abilities do not count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nDespite the rounding in Despair\'s tooltip, it will deal increased damage for every point of ability power.',
        blurb: 'Toggle:  Amumu begins crying, continually dealing magic damage to nearby enemies based on their maximum health.',
        castTime: 'none',
        effectRadius: '350',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Tantrum',
        icon: 'https://cdn.communitydragon.org/latest/champion/Amumu/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Amumu reduces every instance of pre-mitigation physical damage taken, capped at 50% of the damage instance.</p>',
            leveling: [
              {
                attribute: 'Physical Damage Reduction',
                modifiers: [
                  {
                    values: [
                      5,
                      7,
                      9,
                      11,
                      13,
                    ],
                  },
                  {
                    values: [
                      3,
                    ],
                    units: [
                      '% bonus armor',
                    ],
                  },
                  {
                    values: [
                      3,
                    ],
                    units: [
                      '% bonus magic resistance',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Amumu releases his anger, dealing magic damage to nearby enemies.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      65,
                      95,
                      125,
                      155,
                      185,
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
            ],
          },
          {
            description: 'Tantrum\'s current cooldown is reduced by 0.75 seconds whenever Amumu is hit by a basic attack on-hit.',
          },
        ],
        cost: [
          35,
        ],
        cooldown: [
          9,
          8,
          7,
          6,
          5,
        ],
        targeting: 'Auto',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'spellaoe',
        notes: 'A basic attack\'s  basic damage and each on-hit effect are all separate damage instances, and may be reduced each if they deal physical damage.\nTantrum\'s cooldown reduction will trigger multiple times for effects such as  Double Strike and  Guinsoo\'s Rageblade\'s Phantom Hit.\nThe cooldown will be reduced, even if the incoming attack is  blocked.\nThe cooldown will not be reduced, if the incoming attack misses due to the enemy being  blinded.\nThis ability will cast from wherever the caster is at the end of the cast time.',
        blurb: 'Passive:  Amumu gains damage reduction against physical damage.  Tantrum\'s cooldown is reduced whenever he is hit by a basic attack.',
        castTime: '0.25',
        effectRadius: '350',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'Curse of the Sad Mummy',
        icon: 'https://cdn.communitydragon.org/latest/champion/Amumu/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Amumu entangles nearby enemies in bandages, dealing magic damage as well as knocking down and stunning them for 1.5 seconds.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
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
                      80,
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
          100,
          150,
          200,
        ],
        cooldown: [
          150,
          125,
          100,
        ],
        targeting: 'Auto',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'spellaoe',
        notes: 'This ability will cast from wherever the caster is at the end of the cast time.',
        blurb: 'Active:  Amumu entangles nearby enemies in bandages, dealing magic damage as well as briefly  knocking down and  stunning them.',
        castTime: '0.25',
        effectRadius: '550',
        maxCharges: -1,
      },
    ],
  },
  lore: 'Legend claims that Amumu is a lonely and melancholy soul from ancient Shurima, roaming the world in search of a friend. Doomed by an ancient curse to remain alone forever, his touch is death, his affection ruin. Those who claim to have seen him describe a living cadaver, small in stature and wrapped in creeping bandages. Amumu has inspired myths, songs, and folklore told and retold for generations—such that it is impossible to separate truth from fiction.',
}
export default champion