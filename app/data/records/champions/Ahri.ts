// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion = {
  id: 103,
  key: 'Ahri',
  name: 'Ahri',
  title: 'the Nine-Tailed Fox',
  resource: 'Mana',
  attackType: 'Ranged',
  stats: {
    health: {
      flat: 590,
      perLevel: 104,
    },
    healthRegen: {
      flat: 2.5,
      perLevel: 0.6,
    },
    mana: {
      flat: 418,
      perLevel: 25,
    },
    manaRegen: {
      flat: 8,
      perLevel: 0.8,
    },
    armor: {
      flat: 21,
      perLevel: 4.2,
    },
    magicResistance: {
      flat: 30,
      perLevel: 1.3,
    },
    attackDamage: {
      flat: 53,
      perLevel: 3,
    },
    movespeed: {
      flat: 330,
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
      perLevel: 2.2,
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
      flat: -0.1,
    },
    attackRange: {
      flat: 550,
    },
  },
  positions: [
    'Middle',
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
        name: 'Essence Theft',
        icon: 'https://cdn.communitydragon.org/latest/champion/Ahri/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Ahri generates a stack of Essence Fragment whenever she kills a minion or monster. At 9 stacks, she consumes them to heal herself for 35 - 95 (based on level) (+ 20% AP).</p>',
          },
          {
            description: 'Additionally, whenever Ahri scores a champion takedown within 3 seconds of damaging them, she brings their essence to her to consume it to heal herself for 75 - 165 (based on level) (+ 30% AP).',
          },
        ],
        targeting: 'Passive',
        affects: 'Self',
        notes: 'No additional details.',
        blurb: 'Innate:  Ahri\'s generates a stack of Essence Fragment from killing  minions and  monsters. At max stacks, she consumes them to  heal herself.',
      },
    ],
    Q: [
      {
        name: 'Orb of Deception',
        icon: 'https://cdn.communitydragon.org/latest/champion/Ahri/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Ahri sends her orb in the target direction that deals magic damage to enemies it passes through. Upon reaching maximum range, it returns to her to deal the same amount in true damage to enemies it passes through.</p>',
            leveling: [
              {
                attribute: 'Damage Per Pass',
                modifiers: [
                  {
                    values: [
                      40,
                      65,
                      90,
                      115,
                      140,
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
                attribute: 'Total Mixed Damage',
                modifiers: [
                  {
                    values: [
                      80,
                      130,
                      180,
                      230,
                      280,
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
            description: 'Enemies can be hit only once per pass.',
          },
        ],
        cost: [
          55,
          65,
          75,
          85,
          95,
        ],
        cooldown: [
          7,
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'Special',
        resource: 'Mana',
        damageType: 'Mixed damage',
        spellEffects: 'Area of effect',
        projectile: 'TRUE',
        notes: 'Orb of Deception will hit additional units around the return point in a small circle when the orb turns around.\nThis applies both to the initial and return missile\'s damage, but the initial missile only deals damage if the unit was not hit by it already.\nEach pass of the projectile can only damage an enemy once.\nIf Ahri dies while the orb is out, the orb will visually disappear but continue to deal damage and return to Ahri.(bug)\nThis ability will cast from wherever the caster is at the end of the cast time.\nThis ability\'s damage is calculated based on the caster\'s current stats and changes dynamically.',
        blurb: 'Active:  Ahri sends out her orb, dealing magic damage to enemies it passes through. After a point, the orb travels back to her, dealing the same amount in true damage to enemies it passes through.',
        speed: '1550 / 60 - 2600',
        width: '200',
        castTime: '0.25',
        effectRadius: '100',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Fox-Fire',
        icon: 'https://cdn.communitydragon.org/latest/champion/Ahri/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Ahri gains 40% bonus movement speed that decays over 2 seconds and conjures three flames which orbit her clockwise for up to 2.5 seconds.</p>',
          },
          {
            description: 'After 0.25 seconds of the cast, each flame targets a visible enemy based on priority, or after 0.4 seconds, simply targets the closest visible enemy in range. Each flame deals magic damage, with subsequent flames against a target dealing 30% damage.',
            leveling: [
              {
                attribute: 'Initial Flame Magic Damage',
                modifiers: [
                  {
                    values: [
                      40,
                      60,
                      80,
                      100,
                      120,
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
                attribute: 'Subsequent Flame Magic Damage',
                modifiers: [
                  {
                    values: [
                      12,
                      18,
                      24,
                      30,
                      36,
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
              {
                attribute: 'Total Single-Target Damage',
                modifiers: [
                  {
                    values: [
                      64,
                      96,
                      128,
                      160,
                      192,
                    ],
                  },
                  {
                    values: [
                      64,
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
            description: 'Flames prioritize enemy champions hit by Charm, then enemy champions, then minions that would die to Fox-Fire\'s damage, and then the target of Ahri\'s last basic attack within 3 seconds.',
          },
          {
            description: 'Fox-Fire\'s damage is doubled against minions below 20% maximum health.',
            leveling: [
              {
                attribute: 'Increased Initial Flame Minion Damage',
                modifiers: [
                  {
                    values: [
                      80,
                      120,
                      160,
                      200,
                      240,
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
                attribute: 'Increased Subsequent Flame Minion Damage',
                modifiers: [
                  {
                    values: [
                      24,
                      36,
                      48,
                      60,
                      72,
                    ],
                  },
                  {
                    values: [
                      24,
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
          30,
        ],
        cooldown: [
          10,
          9,
          8,
          7,
          6,
        ],
        targeting: 'Auto',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'Single target',
        projectile: 'TRUE',
        notes: 'Each missile of Fox-Fire has its own shorter non-priority range.\nAny unused Fox-Fires will fizzle upon death.\nThis ability\'s damage is calculated based on the caster\'s current stats and changes dynamically.',
        blurb: 'Active:  Ahri gains a burst of  move speed and conjures three fox-fires that orbit her for a short time. Fox-fires home onto nearby enemies, dealing magic damage.',
        speed: '75.92° per second / 1400',
        castTime: 'none',
        effectRadius: '150 / 550 / 725',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Charm',
        icon: 'https://cdn.communitydragon.org/latest/champion/Ahri/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Ahri blows forth a kiss in the target direction that deals magic damage to the first enemy hit, knocking them down and charming and slowing them by 65% for a duration.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      80,
                      120,
                      160,
                      200,
                      240,
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
              {
                attribute: 'Disable Duration',
                modifiers: [
                  {
                    values: [
                      1.2,
                      1.35,
                      1.5,
                      1.65,
                      1.8,
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
        ],
        cooldown: [
          12,
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'spell',
        projectile: 'TRUE',
        notes: 'Charm is able to  slow targets otherwise  immune to slows upon  charming them.(bug)\nThis ability\'s damage is calculated based on the caster\'s stats at the time of its application.\nThis ability will cast from wherever the caster is at the end of the cast time.',
        blurb: 'Active:  Ahri blows forth a kiss that  charms the first enemy hit, dealing magic damage and  knocking them down.',
        speed: '1550',
        width: '120',
        castTime: '0.25',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'Spirit Rush',
        icon: 'https://cdn.communitydragon.org/latest/champion/Ahri/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Ahri dashes to the target location and then fires essence bolts to up to 3 nearby visible enemies, each dealing magic damage. Spirit Rush can be recast twice more within 15 seconds of the activation at no additional cost, with a 1-second static cooldown between casts. Consuming a champion\'s essence with Essence Theft while Spirit Rush is active extends the recast duration by and up to 10 seconds, and grants an additional recast, storing up to 3 recasts at a time.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      60,
                      90,
                      120,
                    ],
                  },
                  {
                    values: [
                      35,
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
            description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Ahri mimics the first cast\'s effects.</p>',
          },
          {
            description: 'Spirit Rush\'s recast duration will persist even after using all recasts. Fox-Fire can be cast during the dash.',
          },
        ],
        cost: [
          100,
        ],
        cooldown: [
          130,
          115,
          100,
        ],
        targeting: 'Location',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'aoe',
        projectile: 'TRUE',
        notes: 'Each cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nSpirit Rush uses quick cast by default.\nThere\'s a slight delay before a champion gains vision of the fog of war once inside it. Because of this, if Ahri dashes into it, it is possible that Spirit Rush will not target any enemy in range.\nThe bolts do not fire if Ahri dies while  dashing, unless she was saved by  resurrection.\nThe bolts will fire if the dash is  interrupted by other means.\nThis ability\'s damage is calculated based on the caster\'s current stats and changes dynamically.',
        blurb: 'Active:  Ahri  dashes forward and fires essence bolts to nearby enemies, dealing magic damage.',
        speed: '1200 + 100% movement speed / 1400',
        castTime: 'none',
        effectRadius: '600',
        targetRange: '500',
        maxCharges: -1,
      },
    ],
  },
  lore: 'Innately connected to the magic of the spirit realm, Ahri is a fox-like vastaya who can manipulate her prey\'s emotions and consume their essence—receiving flashes of their memory and insight from each soul she consumes. Once a powerful yet wayward predator, Ahri is now traveling the world in search of remnants of her ancestors while also trying to replace her stolen memories with ones of her own making.',
}
export default champion