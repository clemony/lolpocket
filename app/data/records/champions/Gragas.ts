// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion = {
  id: 79,
  key: 'Gragas',
  name: 'Gragas',
  title: 'the Rabble Rouser',
  resource: 'Mana',
  attackType: 'Melee',
  stats: {
    health: {
      flat: 640,
      perLevel: 115,
    },
    healthRegen: {
      flat: 5.5,
      perLevel: 0.5,
    },
    mana: {
      flat: 400,
      perLevel: 47,
    },
    manaRegen: {
      flat: 6,
      perLevel: 0.8,
    },
    armor: {
      flat: 38,
      perLevel: 5,
    },
    magicResistance: {
      flat: 32,
      perLevel: 2.05,
    },
    attackDamage: {
      flat: 64,
      perLevel: 3.5,
    },
    movespeed: {
      flat: 330,
    },
    acquisitionRadius: {
      flat: 600,
    },
    selectionRadius: {
      flat: 140,
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
      flat: 0.675,
      perLevel: 2.05,
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
      flat: -0.05,
    },
    attackRange: {
      flat: 125,
    },
  },
  positions: [
    'Jungle',
    'Middle',
    'Top',
  ],
  roles: [
    'Fighter',
    'Mage',
    'Vanguard',
  ],
  attributeRatings: {
    damage: 2,
    toughness: 3,
    control: 3,
    mobility: 2,
    utility: 1,
    abilityReliance: 90,
    difficulty: 2,
  },
  abilities: {
    P: [
      {
        name: 'Happy Hour',
        icon: 'https://cdn.communitydragon.org/latest/champion/Gragas/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Periodically, after casting an ability, Gragas heals himself for 5.5% of his maximum health.</p>',
          },
        ],
        targeting: 'Passive',
        affects: 'Self',
        notes: 'No additional details.',
        blurb: 'Passive: Every few seconds,  Gragas will  heal a portion of his maximum health upon casting an ability.',
      },
    ],
    Q: [
      {
        name: 'Barrel Roll',
        icon: 'https://cdn.communitydragon.org/latest/champion/Gragas/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Gragas rolls a cask to the target location, remaining there for 4 seconds and granting sight of the area. Upon arrival, the cask starts to ferment over the first 2 seconds of its duration to increase its damage and the effectiveness of its slow, up to a maximum of 150% of their initial values. Barrel Roll can be recast at any time within its duration after the cask has fully travelled, and does so automatically after its duration ends.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Gragas detonates the cask, dealing magic damage to nearby enemies, reduced by 30% against minions, and slowing them for 2 seconds.</p>',
            leveling: [
              {
                attribute: 'Minimum Magic Damage',
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
                attribute: 'Maximum Magic Damage',
                modifiers: [
                  {
                    values: [
                      120,
                      180,
                      240,
                      300,
                      360,
                    ],
                  },
                  {
                    values: [
                      120,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Minimum Minion Damage',
                modifiers: [
                  {
                    values: [
                      56,
                      84,
                      112,
                      140,
                      168,
                    ],
                  },
                  {
                    values: [
                      56,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Maximum Minion Damage',
                modifiers: [
                  {
                    values: [
                      84,
                      126,
                      168,
                      210,
                      252,
                    ],
                  },
                  {
                    values: [
                      84,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Minimum Slow',
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
              {
                attribute: 'Maximum Slow',
                modifiers: [
                  {
                    values: [
                      60,
                      67.5,
                      75,
                      82.5,
                      90,
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
          80,
        ],
        cooldown: [
          10,
          9,
          8,
          7,
          6,
        ],
        targeting: 'Location / Auto',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'Area of effect',
        projectile: 'TRUE',
        notes: 'The initial cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nDeactivating the ability manually does not.\nThe cask ignores unit and terrain collision therefore it will only stop once it reaches the target location.\nOn arrival the cask will begin to glow ever brighter as it ferments until it turns bright red.\nBarrel Roll has an internal cooldown while traveling so that Gragas may only make it explode on arrival.\nThe charge-up countdown will only start once the cask stops rolling.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe ability will not preserve the caster\'s facing direction when using  Flash and similar effects.',
        blurb: 'Active:  Gragas rolls a cask to the target location that lingers for a short time before exploding. Barrel Roll can be recast within the duration once it fully travels.',
        speed: '1000',
        castTime: '0.25',
        effectRadius: '250',
        targetRange: '850',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Drunken Rage',
        icon: 'https://cdn.communitydragon.org/latest/champion/Gragas/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Gragas channels for 0.75 seconds, drinking out of his brew, and gains damage reduction for 2.5 seconds.</p>',
            leveling: [
              {
                attribute: 'Damage Reduction',
                modifiers: [
                  {
                    values: [
                      10,
                      12,
                      14,
                      16,
                      18,
                    ],
                    units: [
                      '%',
                    ],
                  },
                  {
                    values: [
                      4,
                    ],
                    units: [
                      '% per 100 AP',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'Upon completing the channel, Gragas empowers his next basic attack within 5 seconds to have an uncancellable windup, gain 50 bonus range and deal bonus magic damage to the target and nearby enemies, reduced to 50% against structures and capped at 300 against monsters.',
            leveling: [
              {
                attribute: 'Bonus Magic Damage',
                modifiers: [
                  {
                    values: [
                      20,
                      50,
                      80,
                      110,
                      140,
                    ],
                  },
                  {
                    values: [
                      7,
                    ],
                    units: [
                      '% of target\'s maximum health',
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
                attribute: 'Capped Monster Damage',
                modifiers: [
                  {
                    values: [
                      320,
                      350,
                      380,
                      410,
                      440,
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
          30,
        ],
        cooldown: [
          5,
        ],
        targeting: 'Auto',
        affects: 'Enemies, Self',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'spellaoe',
        notes: 'The enhanced attack will apply other on-hit effects and can  critically strike as normal.\nThe empowered attack will trigger against structures.\nThe empowered attack will trigger against wards but not be consumed nor apply its effects against wards.\nThe following table refers for interactions while Gragas is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects',
        castTime: 'none',
        effectRadius: '250',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Body Slam',
        icon: 'https://cdn.communitydragon.org/latest/champion/Gragas/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Gragas charges in the target direction and stops upon colliding with an enemy, dealing magic damage to all nearby enemies, knocking them back, though not through terrain, and stunning them for 1 second.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      80,
                      125,
                      170,
                      215,
                      260,
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
            ],
          },
          {
            description: 'Body Slam\'s current cooldown is reduced by 40% if Gragas hits an enemy.',
          },
          {
            description: 'Barrel Roll and Explosive Cask can be cast during the dash.',
          },
        ],
        cost: [
          50,
        ],
        cooldown: [
          14,
          13.5,
          13,
          12.5,
          12,
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'spellaoe',
        notes: 'Flash can be casted during Body Slam, instantly ending it and affecting enemies at the flash location.\nUnits hit by Body Slam turn away from Gragas.\n Displacement immunity will not resist the application of the  stun.',
        blurb: 'Passive:  Gragas  charges in the target direction, stopping upon the first enemy hit, which deals magic damage to nearby enemies,  knocks them back, and  stuns them.',
        speed: '910',
        castTime: 'none',
        effectRadius: '180 /  180',
        targetRange: '600',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'Explosive Cask',
        icon: 'https://cdn.communitydragon.org/latest/champion/Gragas/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Gragas hurls a cask that travels to the target location over 0.5 seconds, exploding on impact to deal magic damage to all enemies within the area and knock them back 900 units, though not through terrain, from the epicenter of the explosion, as well as granting sight of the area for 1 second.</p>',
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
        ],
        cooldown: [
          100,
          85,
          70,
        ],
        targeting: 'Location',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'Area of effect',
        projectile: 'TRUE',
        notes: 'This ability will cast from wherever the caster is at the end of the cast time.',
        blurb: 'Active:  Gragas hurls a cask to the target location that explodes upon impact, dealing magic damage to nearby enemies and  knocking them back.',
        castTime: '0.25',
        effectRadius: '400',
        targetRange: '1000',
        maxCharges: -1,
      },
    ],
  },
  lore: 'Equal parts jolly and imposing, Gragas is a massive, rowdy brewmaster who\'s always on the lookout for new ways to raise everyone\'s spirits. Hailing from parts unknown, he searches for ingredients among the unblemished wastes of the Freljord to help him perfect his latest concoction. He is impulsive, headstrong, and renowned for the brawls he starts, which often end in all-night parties and widespread property damage. Any appearance from Gragas must surely foreshadow merriment and destruction—in that order.',
}
export default champion