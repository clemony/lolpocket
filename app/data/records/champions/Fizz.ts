// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion = {
  id: 105,
  key: 'Fizz',
  name: 'Fizz',
  title: 'the Tidal Trickster',
  resource: 'Mana',
  attackType: 'Melee',
  stats: {
    health: {
      flat: 640,
      perLevel: 106,
    },
    healthRegen: {
      flat: 8,
      perLevel: 0.7,
    },
    mana: {
      flat: 317,
      perLevel: 52,
    },
    manaRegen: {
      flat: 6,
      perLevel: 0.8,
    },
    armor: {
      flat: 22,
      perLevel: 4.6,
    },
    magicResistance: {
      flat: 32,
      perLevel: 2.05,
    },
    attackDamage: {
      flat: 58,
      perLevel: 3,
    },
    movespeed: {
      flat: 335,
    },
    acquisitionRadius: {
      flat: 400,
    },
    selectionRadius: {
      flat: 108.333,
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
      flat: 0.658,
      perLevel: 3.1,
    },
    attackSpeedRatio: {
      flat: 0.658,
    },
    attackCastTime: {
      flat: 0.3,
    },
    attackTotalTime: {
      flat: 1.6,
    },
    attackDelayOffset: {
      flat: -0.097,
    },
    attackRange: {
      flat: 175,
    },
  },
  positions: [
    'Middle',
  ],
  roles: [
    'Assassin',
    'Fighter',
  ],
  attributeRatings: {
    damage: 3,
    toughness: 1,
    control: 2,
    mobility: 3,
    utility: 1,
    abilityReliance: 90,
    difficulty: 2,
  },
  abilities: {
    P: [
      {
        name: 'Nimble Fighter',
        icon: 'https://cdn.communitydragon.org/latest/champion/Fizz/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Fizz is permanently ghosted and reduces every instance of incoming damage by 4 (+ 1% AP), up to a maximum of 50% reduction.</p>',
          },
        ],
        targeting: 'Passive',
        affects: 'Self',
        notes: 'No additional notes.',
        blurb: 'Innate:  Fizz becomes permanently  ghosted and takes slightly reduced damage from all hits.',
      },
    ],
    Q: [
      {
        name: 'Urchin Strike',
        icon: 'https://cdn.communitydragon.org/latest/champion/Fizz/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Fizz dashes a fixed distance in the direction of the target enemy. If they are in range upon arrival, he deals magic damage plus 100% AD physical damage and applies on-hit effects.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      10,
                      25,
                      40,
                      55,
                      70,
                    ],
                  },
                  {
                    values: [
                      55,
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
            description: 'Seastone Trident and Chum the Waters can be cast during the dash.',
          },
        ],
        cost: [
          50,
        ],
        cooldown: [
          8,
          7.5,
          7,
          6.5,
          6,
        ],
        targeting: 'Unit',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Mixed damage',
        spellEffects: 'spell',
        notes: 'Urchin Strike can only go through walls if the target is on the other side.\nUrchin Strike only damages targets if within 200 units of their original location upon completion of the dash.\nFizz will be automatically ordered to basic attack the target after Urchin Strike.\nUrchin Strike does not deal damage if the target is  untargetable.\n Life steal applies only on the physical damage component.  Spell vamp applies to both the physical damage and bonus magic damage.',
        blurb: 'Active:  Fizz  dashes through the target enemy, dealing magic damage, physical damage, and applying  on-hit effects.',
        castTime: 'none',
        targetRange: '550',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Seastone Trident',
        icon: 'https://cdn.communitydragon.org/latest/champion/Fizz/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Fizz\'s basic attacks rend enemies on-hit, dealing magic damage every 0.5 seconds over 3 seconds, refreshing on subsequent hits.</p>',
            leveling: [
              {
                attribute: 'Total Magic Damage',
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
              {
                attribute: 'Magic Damage per Tick',
                modifiers: [
                  {
                    values: [
                      3.33,
                      5,
                      6.67,
                      8.33,
                      10,
                    ],
                  },
                  {
                    values: [
                      5,
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
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Fizz empowers his next basic attack within 4 seconds to have an uncancellable windup, gain 50 bonus range, and deal bonus magic damage.</p>',
            leveling: [
              {
                attribute: 'Bonus Magic Damage',
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
                      45,
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
            description: 'If Seastone Trident kills its target, the cooldown is reduced to 1 second and Fizz restores mana. Otherwise, if the target is not killed, Fizz\'s basic attacks deal bonus magic damage on-hit for the next 5 seconds.',
            leveling: [
              {
                attribute: 'Mana Restored',
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
                ],
              },
              {
                attribute: 'Bonus Magic Damage On-Hit',
                modifiers: [
                  {
                    values: [
                      10,
                      15,
                      20,
                      25,
                      30,
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
            description: 'Seastone Trident deals 50% damage to structures.',
          },
          {
            description: 'Seastone Trident resets Fizz\'s basic attack timer.',
          },
        ],
        cost: [
          30,
          40,
          50,
          60,
          70,
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
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'special',
        notes: 'Applies  spell damage on the empowered attack,  persistent damage on the damage over time effect, and  proc damage on the bonus damage on-hit.\nSeastone Trident\'s  interactions with  dodging,  blocking, and  blinding effects.\nThe passive bonus damage gets negated by  dodging or  blocking the attack, or if Fizz is  blinded.\nThe active:\nIf the attacked enemy is  dodging or if Fizz is  blinded, the empowered attack won\'t deal any damage, but the empowered attack won\'t be consumed.\nIf the attacked enemy is  blocking, the empowered attack won\'t deal any damage despite being consumed. But the attack will apply the passive bonus damage of Seastone Trident.\nThe empowered attack will trigger against structures.\nThe damage over time effect is not applied to inhibitors.',
        blurb: 'Passive:  Fizz\'s basic attacks bleed his enemies, continually dealing magic damage.',
        castTime: 'none',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Playful',
        icon: 'https://cdn.communitydragon.org/latest/champion/Fizz/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Fizz dashes to the target location while becoming untargetable, balancing on his trident for 0.75 seconds, during which he can cast Trickster after 0.15 seconds into the duration.</p>',
          },
          {
            description: 'He then begins to hop off of his trident over 0.5 seconds, afterwards becoming targetable and landing to create a splash that deals magic damage to nearby enemies and slows them for 2 seconds.',
            leveling: [
              {
                attribute: 'Magic Damage',
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
            description: 'While hopping off of the trident, Fizz may input movement commands to direct his landing.',
          },
        ],
        cost: [
          75,
          80,
          85,
          90,
          95,
        ],
        cooldown: [
          16,
          14,
          12,
          10,
          8,
        ],
        targeting: 'Location',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'spellaoe',
        notes: 'Playful counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nDetonating the ability early for  Trickster does not.\nPlayful cannot be used for approximately 0.5 seconds after using  Urchin Strike.\n Flash can be used while hopping off the trident, but not while balanced on it.\nFizz can receive while aggro hopping off the trident, but not while balanced on it\nIf the first dash is interrupted, Fizz initiates the hop immediately, and if the second one is, the splash will not occur.\nIn either cases, Fizz loses the untargetability.\nIf Playful is cast while under the effect of a move block, Fizz will not become untargetable and will initiate the hop instantly.(bug)\nIf  Trickster is cast, the splash will not occur.(bug)\nThere is a minimum dash distance of 25 units for Playful.\nIf Fizz casts Playful on top of himself after being teleported (e.g.  Flash,  Recall), the minimum dash distance will not apply.(bug)\nThe distance covered during Playful\'s directed splash is equal to half of Fizz\'s movement speed.\nIf Fizz enters  stasis during either Playful or  Trickster, the splash occurs after the stasis ends.',
        blurb: 'Active:  Fizz  vaults in the target direction and balances onto his spear, becoming  untargetable. From this position, Fizz can either slam the ground or choose to jump again with  Trickster.',
        castTime: 'none',
        effectRadius: '375',
        targetRange: '400',
        maxCharges: -1,
      },
      {
        name: 'Trickster',
        icon: 'https://cdn.communitydragon.org/latest/champion/Fizz/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Fizz dashes to the target location, hopping down and splashing onto the ground prematurely upon arrival to deal the same magic damage in a smaller radius but not applying the slow.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
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
        ],
        cost: [
          75,
          80,
          85,
          90,
          95,
        ],
        cooldown: [
          16,
          14,
          12,
          10,
          8,
        ],
        targeting: 'Location',
        affects: 'Enemies',
        spellshieldable: 'True',
        damageType: 'Magic damage',
        spellEffects: 'spellaoe',
        notes: 'Trickster does not count as an ability activation.\nBoth  Playful\'s and Trickster\'s  dashes may be directed separately.\nTrickster has a minimum dash distance of 75 units.\n Flash cannot be used during the dash.\nThe splash occurs immediately if Fizz encounters terrain that cannot be dashed through (he has to be particularly close to the wall).',
        blurb: 'Active:  Fizz  vaults in the target direction and slams down, dealing magic damage to nearby enemies.This area is smaller than  Playful.',
        effectRadius: '225',
        targetRange: '300',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'Chum the Waters',
        icon: 'https://cdn.communitydragon.org/latest/champion/Fizz/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Fizz throws down a lure at the target location that attracts a shark, granting sight of the area before it emerges to chomp at the lure after 2 seconds, dealing magic damage to nearby enemies, knocking them back, though not through terrain, and slowing them for 2 seconds. The further the lure travels in its initial flight, the larger the shark that is attracted; increasing Chum the Waters\' damage, slow, eruption radius and knock back distance.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Guppy (<455):</span> 40% slow, 200 eruption radius and 150 unit knock back distance.</p>',
            leveling: [
              {
                attribute: 'Guppy Damage',
                modifiers: [
                  {
                    values: [
                      150,
                      250,
                      350,
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
          {
            description: '<p class="ability-effect"><span class="ability-header">Chomper (455-910):</span> 60% slow, 325 eruption radius and 250 unit knock back distance.</p>',
            leveling: [
              {
                attribute: 'Chomper Damage',
                modifiers: [
                  {
                    values: [
                      225,
                      325,
                      425,
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
            description: '<p class="ability-effect"><span class="ability-header">Gigalodon (>910):</span> 80% slow, 450 eruption radius and 350 unit knock back distance.</p>',
            leveling: [
              {
                attribute: 'Gigalodon Damage',
                modifiers: [
                  {
                    values: [
                      300,
                      400,
                      500,
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
            ],
          },
          {
            description: 'Enemy champions can intercept the lure while it is in flight, which attaches to them upon contact and causes the shark to emerge at their position after the same delay. The lure\'s holder is slowed and revealed for the duration and afterwards is impacted by the eruption but is knocked up for 1 second instead of knocked back.',
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
        spellshieldable: 'special',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'spellaoe',
        projectile: 'SPECIAL',
        notes: 'Chum the Waters will not attach the lure to an enemy champion if they have a  spell shield as well as against an enemy  Malzahar with his  Void Shift active (mitigation effect is consumed in both cases).\nThe area of effect for the eruption will be at the target\'s location at the time of the attachment being blocked; the target will intercept the lure without getting attached to it.\nChum the Waters\'  lure missile will stop its movement upon colliding with  Samira\'s  Blade Whirl or  Yasuo\'s  Wind Wall specifically, creating the area of effect for the eruption prematurely without destroying the missile. Collision with  Mel\'s  Rebuttal will destroy it altogether, however.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe targeted area does not change unless the ability was cast beyond maximum range.\nIf the lure attaches to an enemy champion, a countdown will appear at their position to signify when the shark is about to emerge. The countdown begins from 4, and ticks down by one every 0.5 seconds.',
        blurb: 'Active:  Fizz tosses a lure in the target direction that lands on the ground, attracting a shark that erupts after a short delay, dealing magic damage to nearby enemies,  knocking them back and  slowing them.The farther the lure flies, the larger the shark that is attracted, increasing the effects.',
        speed: '1300',
        castTime: '0.25',
        targetRange: '1300',
        maxCharges: -1,
      },
    ],
  },
  lore: 'Fizz is an amphibious yordle, who dwells among the reefs surrounding Bilgewater. He often retrieves and returns the tithes cast into the sea by superstitious captains, but even the saltiest of sailors know better than to cross him—for many are the tales of those who have underestimated this slippery character. Often mistaken for some manner of capricious ocean spirit, he seems able to command the beasts of the deep, and delights in confounding his allies and enemies alike.',
}
export default champion