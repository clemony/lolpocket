// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion = {
  id: 56,
  key: 'Nocturne',
  name: 'Nocturne',
  title: 'the Eternal Nightmare',
  resource: 'Mana',
  attackType: 'Melee',
  stats: {
    health: {
      flat: 655,
      perLevel: 109,
    },
    healthRegen: {
      flat: 7,
      perLevel: 0.75,
    },
    mana: {
      flat: 275,
      perLevel: 35,
    },
    manaRegen: {
      flat: 7,
      perLevel: 0.45,
    },
    armor: {
      flat: 38,
      perLevel: 4.7,
    },
    magicResistance: {
      flat: 32,
      perLevel: 1.55,
    },
    attackDamage: {
      flat: 62,
      perLevel: 2.6,
    },
    movespeed: {
      flat: 345,
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
      flat: 0.721,
      perLevel: 2.7,
    },
    attackSpeedRatio: {
      flat: 0.721,
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
      flat: 125,
    },
  },
  positions: [
    'Jungle',
  ],
  roles: [
    'Assassin',
    'Fighter',
  ],
  attributeRatings: {
    damage: 3,
    toughness: 1,
    control: 2,
    mobility: 2,
    utility: 2,
    abilityReliance: 30,
    difficulty: 1,
  },
  abilities: {
    P: [
      {
        name: 'Umbra Blades',
        icon: 'https://cdn.communitydragon.org/latest/champion/Nocturne/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Periodically, Nocturne empowers his next basic attack to slash in a circle, dealing 120% AD physical damage to the target and nearby enemies and healing himself for 13 - 30 (based on level) (+ 30% AP) per enemy hit. Against minions, Umbra Blade\'s damage to secondary targets and healing are reduced by 50% and it applies on-hit effects to all targets(note) at 100% effectiveness.</p>',
          },
          {
            description: 'Umbra Blades can critically strike against the primary target, modifying the physical damage dealt to[ (192.5% + 44%) AD. ][ 110% AD × total critical damage. ]',
          },
          {
            description: 'Basic attacks reduce Umbra Blades\' cooldown by 1 second, increased to 3 against enemy champions and monsters.',
          },
        ],
        targeting: 'Passive',
        affects: 'Enemies',
        spellshieldable: 'False',
        damageType: 'Physical damage',
        spellEffects: 'special',
        notes: 'The primary target of the enhanced attack is dealt  basic damage while the secondary targets of the slash are dealt  default damage.\nThe empowered attack will not trigger against structures nor wards.\nBasic attacks against them will still grant the cooldown reduction.\nParry effects will only block the damage dealt to the primary target.',
        blurb: 'Innate: Periodically,  Nocturne\'s next basic attack causes him to slash in a circle that deals increased physical damage to the target and nearby enemies,  healing him for each enemy hit.',
        effectRadius: '360',
      },
    ],
    Q: [
      {
        name: 'Duskbringer',
        icon: 'https://cdn.communitydragon.org/latest/champion/Nocturne/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Nocturne casts out a shadow blade in the target direction that leaves a Dusk Trail in its wake, dealing physical damage to enemies hit. Enemy champions and large monsters hit will leave a Dusk Trail behind while moving. Dusk Trails last 5 seconds and will slowly disappear afterwards.</p>',
            leveling: [
              {
                attribute: 'Physical damage',
                modifiers: [
                  {
                    values: [
                      65,
                      110,
                      155,
                      200,
                      245,
                    ],
                  },
                  {
                    values: [
                      85,
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
            description: 'While on the Dusk Trail, Nocturne is ghosted and gains bonus attack damage and bonus total movement speed.',
            leveling: [
              {
                attribute: 'Bonus Attack Damage',
                modifiers: [
                  {
                    values: [
                      20,
                      30,
                      40,
                      50,
                      60,
                    ],
                  },
                ],
              },
              {
                attribute: 'Bonus Movement Speed',
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
        ],
        cost: [
          60,
          65,
          70,
          75,
          80,
        ],
        cooldown: [
          8,
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Physical damage',
        spellEffects: 'Area of effect',
        projectile: 'TRUE',
        notes: 'Duskbringer checks for and hits targets 25 units outside of the missile\'s maximum range.\nDuskbringer\'s damage is not increased by the bonus AD gained from its trail, meaning that casting it again while on the trail from the last cast will not result in higher damage.\nIt is observed from seasons ago that this is intentionally hard-coded into the ability to avoid the projectile increasing its own damage. This feature is somewhat deprecated as it also limits chain-casting Duskbringer.\nDuskbringer\'s Dusk Trail will expose the path of affected units until its duration ends. It is a form of  obscured vision; the trail indirectly reveals the location of enemy units even in the fog of war, including those shrouded by  stealth.\n Spell shield will block the damage and also prevents the Dusk Trail from following the target.\nThe formed Dusk Trail does not disappear if Duskbringer is intercepted by  Wind Wall or  Unbreakable.\nThis ability will cast from wherever the caster is at the start of the cast time.\nThe bonus movement speed  stacks multiplicatively with other sources of movement speed boosts.',
        blurb: 'Active:  Nocturne casts out a shadow blade in the target direction that leaves a Dusk Trail in its wake, dealing physical damage to enemies hit. Enemy  champions hit will leave a Dusk Trail in their wake for a few seconds.',
        speed: '1600',
        width: '120',
        castTime: '0.25',
        effectRadius: '150',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Shroud of Darkness',
        icon: 'https://cdn.communitydragon.org/latest/champion/Nocturne/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Nocturne gains bonus attack speed.</p>',
            leveling: [
              {
                attribute: 'Bonus Attack Speed',
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
              {
                attribute: 'Enhanced Bonus Attack Speed',
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
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Nocturne gains a spell shield for 1.5 seconds. Upon successfully blocking a hostile effect, Shroud of Darkness\' bonus attack speed is doubled for 5 seconds.</p>',
          },
        ],
        cost: [
          50,
        ],
        cooldown: [
          20,
          18,
          16,
          14,
          12,
        ],
        targeting: 'Auto',
        affects: 'Self',
        resource: 'Mana',
        notes: 'If Shroud of Darkness is active when Nocturne re-casts  Paranoia to dash to a target, its duration is refreshed every 0.25 seconds during the dash.',
        blurb: 'Passive:  Nocturne gains  bonus attack speed.',
        castTime: 'none',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Unspeakable Horror',
        icon: 'https://cdn.communitydragon.org/latest/champion/Nocturne/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Nocturne gains 90% bonus movement speed while facing nearby feared targets.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Nocturne torments the target, forming a tether between himself and the target for 2 seconds, during which the target takes magic damage every 0.5 seconds over the duration.</p>',
            leveling: [
              {
                attribute: 'Total Magic Damage',
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
                      100,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Magic Damage per Tick',
                modifiers: [
                  {
                    values: [
                      20,
                      31.25,
                      42.5,
                      53.75,
                      65,
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
            ],
          },
          {
            description: 'If the tether is not broken by the end of its duration, the target is feared for a duration while being slowed by 90%.',
            leveling: [
              {
                attribute: 'Disable Duration',
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
        ],
        cost: [
          60,
          65,
          70,
          75,
          80,
        ],
        cooldown: [
          15,
          14,
          13,
          12,
          11,
        ],
        targeting: 'Unit',
        affects: 'Enemies',
        spellshieldable: 'Special',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'DoT',
        projectile: 'FALSE',
        notes: 'Feared enemies in a  180° total angle within Nocturne\'s facing direction will trigger Unspeakable Horror\'s passive.\nCasting Unspeakable Horror may grant Nocturne permanent  ghosting until he has died.(bug)\n Spell shield will block the tether\'s application but not the damage and aftereffects of one already applied.',
        blurb: 'Passive:  Nocturne gains  bonus movement speed while moving towards  feared targets.',
        tetherRadius: '465',
        castTime: 'none',
        effectRadius: '1000',
        targetRange: '425',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'Paranoia',
        icon: 'https://cdn.communitydragon.org/latest/champion/Nocturne/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Nocturne terrorizes all enemy champions, nearsighting them for 6 seconds. He can recast Paranoia for the same duration after 0.25 seconds.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Nocturne dashes with displacement immunity to the target enemy champion, dealing physical damage upon arrival.</p>',
            leveling: [
              {
                attribute: 'Physical Damage',
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
                      120,
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
            description: 'Nocturne can cast any of his abilities during the dash.',
          },
        ],
        cost: [
          100,
        ],
        cooldown: [
          140,
          115,
          90,
        ],
        targeting: 'Auto / Unit',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Physical damage',
        spellEffects: 'spell',
        notes: 'Nocturne will track the target if they change locations.\nHe will dash to the target\'s previous location without dealing damage if the target is too far away or moves beyond 3500 / 4250 / 5000 (based on Paranoia\'s rank) units.\nEnemy players affected by Paranoia\'s  nearsight cannot interact with the allied portrait icons on the HUD.\nParanoia\'s  nearsight will apply to enemy champions that are  untargetable or are dead, and will persist through  death.\nNocturne can cast any of his abilities, summoner spells (excluding  Hexflash), or item actives during flight.\nUsing a  dash or  blink ability will interrupt the flight.\nThe flight will also be interrupted if Nocturne is affected by a  Blast Cone triggered by an allied champion.(bug)\nParanoia cannot be recast while  grounded or  rooted.\nParanoia\'s  nearsight does not apply to  clones.\nPlayers\' screens will turn a different color when Paranoia is cast, based on their perspective: blue for allies and red for enemies.\nA spell indicator telegraphed to Nocturne and his allies will be placed on all enemy  champions within range of Paranoia\'s recast while the ability is active. The following images display the indicator for the default skin:\nA glowing red silhouette of Nocturne\'s blades indicates an enemy champion can be targeted by Paranoia\'s recast.\nA glowing green silhouette of Nocturne\'s blades signifies an enemy champion has been targeted by Paranoia\'s recast.',
        blurb: 'Active:  Nocturne terrorizes all enemy champions,  nearsighting them for a few seconds. He can recast Paranoia during this time.',
        speed: '1800',
        castTime: 'none',
        effectRadius: 'Global',
        targetRange: '2500 / 3250 / 4000',
        maxCharges: -1,
      },
    ],
  },
  lore: 'A demonic amalgamation drawn from the nightmares that haunt every sentient mind, the thing known as Nocturne has become a primordial force of pure evil. It is liquidly chaotic in aspect, a faceless shadow with cold eyes and armed with wicked-looking blades. After freeing itself from the spirit realm, Nocturne descended upon the waking world, to feed upon the kind of terror that can only thrive in true darkness.',
}
export default champion