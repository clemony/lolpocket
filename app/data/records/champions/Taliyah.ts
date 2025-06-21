// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion = {
  id: 163,
  key: 'Taliyah',
  name: 'Taliyah',
  title: 'the Stoneweaver',
  resource: 'Mana',
  attackType: 'Ranged',
  stats: {
    health: {
      flat: 550,
      perLevel: 104,
    },
    healthRegen: {
      flat: 6.5,
      perLevel: 0.65,
    },
    mana: {
      flat: 470,
      perLevel: 30,
    },
    manaRegen: {
      flat: 8,
      perLevel: 0.8,
    },
    armor: {
      flat: 18,
      perLevel: 4.7,
    },
    magicResistance: {
      flat: 28,
      perLevel: 1.3,
    },
    attackDamage: {
      flat: 58,
      perLevel: 3.3,
    },
    movespeed: {
      flat: 330,
    },
    acquisitionRadius: {
      flat: 550,
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
      flat: 0.658,
      perLevel: 1.36,
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
      flat: -0.139,
    },
    attackRange: {
      flat: 525,
    },
  },
  positions: [
    'Jungle',
    'Middle',
  ],
  roles: [
    'Battlemage',
    'Mage',
    'Support',
  ],
  attributeRatings: {
    damage: 3,
    toughness: 1,
    control: 2,
    mobility: 1,
    utility: 3,
    abilityReliance: 100,
    difficulty: 2,
  },
  abilities: {
    P: [
      {
        name: 'Rock Surfing',
        icon: 'https://cdn.communitydragon.org/latest/champion/Taliyah/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> While near terrain, Taliyah gains 10 / 15 / 25 / 40% (based on level) bonus movement speed, which builds up over 1 second while in range for at least 0.4 seconds, and decays at the same rate once out of range for at least 3 seconds.</p>',
          },
          {
            description: 'If Taliyah is casting an ability or enters champion combat, Rock Surfing cannot occur again for a few seconds.',
          },
        ],
        targeting: 'Passive',
        affects: 'Self',
        notes: 'The movement speed builds up and decays linearly (by the same amount in the same interval), 25% of the maximum value every 0.25 seconds.\nRock Surfing can interact with player-generated terrain.\nDealing  default or  proc damage does not put Rock Surfing on cooldown.',
        blurb: 'Innate:  Taliyah gains  bonus movement speed while near terrain. This effect will be put on  cooldown while in combat or casting an ability.',
      },
    ],
    Q: [
      {
        name: 'Threaded Volley',
        icon: 'https://cdn.communitydragon.org/latest/champion/Taliyah/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Taliyah barrages 5 Stone Shards in the target direction over 1.5 seconds that each shatter upon the first enemy hit, dealing magic damage to nearby enemies and revealing them for 0.5 seconds. Subsequent hits deal 40% damage.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      56,
                      74.5,
                      93,
                      111.5,
                      130,
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
                      22.4,
                      29.8,
                      37.2,
                      44.6,
                      52,
                    ],
                  },
                  {
                    values: [
                      20,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Total Magic Damage',
                modifiers: [
                  {
                    values: [
                      145.6,
                      193.7,
                      241.8,
                      289.9,
                      338,
                    ],
                  },
                  {
                    values: [
                      130,
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
            description: 'Taliyah can move and cast other abilities while launching Stone Shards, and is unable to basic attack until she launches the third Stone Shard.',
          },
          {
            description: 'Casting Threaded Volley creates an area of Worked Ground at Taliyah\'s cast location that has a radius of 400 units and lasts 30 seconds. While on Worked Ground, Threaded Volley\'s cast consumes the area to become empowered with a new effect, costing 20 mana and having 50% reduced cooldown, though not below 0.75 seconds.',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Empowered Active:</span> Taliyah hurls a Boulder that explodes upon the first enemy hit, dealing 180% damage to them and normal damage to nearby enemies, slowing all targets hit for 1.5 seconds, and revealing them for 0.5 seconds. Monsters hit are also stunned for 3 seconds.</p>',
            leveling: [
              {
                attribute: 'Empowered Damage',
                modifiers: [
                  {
                    values: [
                      100.8,
                      134.1,
                      167.4,
                      200.7,
                      234,
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
          {
            description: 'Against monsters, Threaded Volley deals 10 bonus magic damage per Stone Shard, and the Boulder deals 18 bonus magic damage against the primary target. This bonus damage is unaffected by the damage modifier from subsequent hits.',
          },
        ],
        cost: [
          65,
          70,
          75,
          80,
          85,
        ],
        cooldown: [
          7,
          6,
          5,
          4,
          3,
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'Special',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'special',
        projectile: 'TRUE',
        notes: 'Threaded Volley will continue casting while in  stasis.\nThe first Stone Shard hit on each target is considered  area damage, while additional ones of the same cast are considered  persistent area damage.\nThe Boulder applies  area damage.\nThe first Stone Shard is launched instantly after the cast time ends, then the second and third Stone Shards are both launched over 1 second, and finally the fourth and fifth Stone Shards are both launched over 0.5 seconds.\n Spell shield only prevents one instance of damage.',
        blurb: 'Active:  Taliyah barrages out 5 Stone Shards that each explode upon the first enemy hit, dealing magic damage to nearby enemies. This also creates an area of Worked Ground under Taliyah\'s location that lasts for a while.',
        speed: '3600 - 1800 / 2000',
        width: '200',
        castTime: '0.25',
        effectRadius: '175 /  225',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Seismic Shove',
        icon: 'https://cdn.communitydragon.org/latest/champion/Taliyah/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Taliyah marks the target location and selects a direction. After 0.792 seconds, a ledge erupts from the area that knocks enemies hit 400 units in the target direction over 1 second.</p>',
          },
        ],
        cost: [
          40,
          30,
          20,
          10,
          0,
        ],
        cooldown: [
          14,
          12.5,
          11,
          9.5,
          8,
        ],
        targeting: 'Vector',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'aoe',
        notes: 'The delay is measured from the start of the cast, before the cast time.',
        blurb: 'Active:  Taliyah creates a ledge at the target location that erects after a brief delay, briefly  knocking enemies hit in the target direction.',
        castTime: '0.25',
        effectRadius: '225',
        targetRange: '900',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Unraveled Earth',
        icon: 'https://cdn.communitydragon.org/latest/champion/Taliyah/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Taliyah scatters a field of 22 stones across the ground in the target direction that deals magic damage to enemies hit while they erupt. The stones then remain for 4 seconds and slow enemies within the area by 20%.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      60,
                      105,
                      150,
                      195,
                      240,
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
            description: 'Enemies that dash or are knocked over a stone will detonate it, taking magic damage and becoming stunned for 0.75 seconds, increased to 2 seconds if they are a monster. The stun is applied once the displacement ends.',
            leveling: [
              {
                attribute: 'Detonation Magic Damage',
                modifiers: [
                  {
                    values: [
                      25,
                      45,
                      65,
                      85,
                      105,
                    ],
                  },
                  {
                    values: [
                      30,
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
            description: 'An enemy can detonate up to 4 stones, but the damage is reduced by 0% - 75% (based on stones detonated). Unraveled Earth can affect targets only once per cast; the stones will still detonate but not apply their effects.',
            leveling: [
              {
                attribute: 'Total Maximum Detonation Damage',
                modifiers: [
                  {
                    values: [
                      62.5,
                      112.5,
                      162.5,
                      212.5,
                      262.5,
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
            ],
          },
          {
            description: 'Unraveled Earth deals 175% damage against monsters.',
          },
        ],
        cost: [
          90,
          95,
          100,
          105,
          110,
        ],
        cooldown: [
          14,
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'true',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'spellaoe',
        projectile: 'FALSE',
        notes: 'Unraveled Earth fires 6 rows of stones: the first row has 2 stones, and the rest have 4 each.\nThe stones spawn in rows that cascade in 0.17 second intervals.\nUnraveled Earth will not detonate if the target dashes over the stones while being untargetable.\nUnraveled Earth will not detonate against enemies that blink onto the stones.\nThis ability will cast from wherever the caster is at the start of the cast time.',
        blurb: 'Active:  Taliyah scatters a field of stones in the target direction that deals magic damage to enemies hit. The stones remain for a few seconds and  slow enemies within.',
        angle: '80°',
        castTime: '0.25',
        effectRadius: '800',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'Weaver\'s Wall',
        icon: 'https://cdn.communitydragon.org/latest/champion/Taliyah/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Taliyah summons a torrent of spiraling rocks that cascades in the target direction, knocking aside champions hit and erecting a wall of terrain in its wake. The wall lasts for 4 seconds after completion, then slowly disintegrates from its starting point.</p>',
          },
          {
            description: 'Taliyah also channels for 1 second, during which Weaver\'s Wall can be recast and she reveals herself.',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Upon completing the channel, Taliyah surfs on the wall as it emerges, revealing herself in the process. After 0.75 seconds, she may input a movement command to jump off the wall to the target location, and automatically does so upon being immobilized or silenced or reaching maximum range.Once the wall has fully formed, Taliyah can recast to destroy the wall instantly.</p>',
          },
          {
            description: 'Weaver\'s Wall is placed on a 3-second static cooldown upon taking champion or turret damage.',
          },
        ],
        cost: [
          100,
        ],
        cooldown: [
          180,
          150,
          120,
        ],
        targeting: 'Direction / Auto',
        affects: 'Self, Enemies',
        spellshieldable: 'false',
        resource: 'Mana',
        projectile: 'TRUE',
        notes: 'The  jump off distance can be extended to up to 1000 units when targeting across terrain.\nIf a champion is standing next to a portion of the generated terrain and that portion expires by any means, enemies\'  spell shield will be consumed.(bug)\nThe initial cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nHowever neither recasts do.\nTaliyah can recast to destroy the wall even if she did not surf it or it is in the process of disintegrating.\nTaliyah almost always jumps off of the wall to her left from when it reaches maximum range. If she is forced to jump off of the wall, she will do so towards the source that dealt damage or applied the crowd control to her.\nWeaver\'s Wall, while  channeling, can be recast while  grounded but not while  rooted.\nThe channel cannot be started while affected by either crowd control effects.\n Wind Wall and  Blade Whirl will prevent Weaver\'s Wall from summoning any further but does not destroy any initial terrain it spawned. If Taliyah is surfing during the collision, she immediately becomes  stunned for 0.25 seconds, interrupting the surf.\nIf Taliyah would enter terrain and the wall reaches maximum range inside, she is preemptively forced off the wall before entering.\nThe wall can surpass the edges of the map, but Taliyah cannot.\nThe following table refers for interactions while Taliyah is  channeling:\nThe channel is not  interrupted by  ground despite being a movement channel.\nThis lockout persists for another 0.65 seconds during the surf after the channel is completed.\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\nN/A\n\n\nDisabled\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath Immobilizing effects Cast-inhibiting effects\n\nThe following table refers for interactions while Taliyah is  surfing after the first 0.65 seconds.\nOnce 0.35 seconds have elapsed afterwards, her lockout is modified for the rest of the surf.\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\nN/A\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nInterrupted by\n\nDeath Immobilizing effects Cast-inhibiting effects\n\nThe following table refers for interactions while Taliyah is  surfing after 1 second from the channel\'s completion.\nInterrupting the surf by casting a non-auto targeted ability, spell, or item active causes her to jump off the wall to the location of where the spell was targeted. She will dash to maximum range if the spell was cast outside of it.\n\n\nType\n\nChannel\n\n\nAttacking\n\nInterrupts\n\n\nAbilities\n\nInterrupts\n\n\nMovement\n\nInterrupts\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\nAll items interrupt\n\n\nConsumables\n\nInterrupts\n\n\nSpells\n\nUsable\n\nN/A\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\nAll summoner spells interrupt\n\n\nInterrupted by\n\nDeath Immobilizing effects Cast-inhibiting effects',
        blurb: 'Active:  Taliyah summons a torrent of spiraling rocks that cascades in the target direction, which  knocks aside champions hit and erects a wall of terrain in its wake. The wall lasts a few seconds before slowly disintegrating from the starting end.',
        speed: '1500 / 1200',
        castTime: 'none',
        targetRange: '2500 / 3500 / 4500 / 5500 / 6500',
        maxCharges: -1,
      },
    ],
  },
  lore: 'Taliyah is a nomadic mage from Shurima, torn between teenage wonder and adult responsibility. She has crossed nearly all of Valoran on a journey to learn the true nature of her growing powers, though more recently she has returned to protect her tribe. Some have mistaken her compassion for weakness and paid the ultimate price—for beneath Taliyah\'s youthful demeanor is a will strong enough to move mountains, and a spirit fierce enough to make the earth itself tremble.',
}
export default champion