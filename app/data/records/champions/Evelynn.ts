// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion = {
  id: 28,
  key: 'Evelynn',
  name: 'Evelynn',
  title: 'Agony\'s Embrace',
  resource: 'Mana',
  attackType: 'Melee',
  stats: {
    health: {
      flat: 642,
      perLevel: 98,
    },
    healthRegen: {
      flat: 8.5,
      perLevel: 0.75,
    },
    mana: {
      flat: 315,
      perLevel: 42,
    },
    manaRegen: {
      flat: 8.11,
      perLevel: 0.6,
    },
    armor: {
      flat: 37,
      perLevel: 4.7,
    },
    magicResistance: {
      flat: 32,
      perLevel: 2.05,
    },
    attackDamage: {
      flat: 61,
      perLevel: 3,
    },
    movespeed: {
      flat: 335,
    },
    acquisitionRadius: {
      flat: 400,
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
      flat: 0.667,
      perLevel: 2.1,
    },
    attackSpeedRatio: {
      flat: 0.667,
    },
    attackCastTime: {
      flat: 0.23,
    },
    attackTotalTime: {
      flat: 1.5,
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
    'Mage',
  ],
  attributeRatings: {
    damage: 2,
    toughness: 2,
    control: 1,
    mobility: 2,
    utility: 2,
    abilityReliance: 75,
    difficulty: 2,
  },
  abilities: {
    P: [
      {
        name: 'Demon Shade',
        icon: 'https://cdn.communitydragon.org/latest/champion/Evelynn/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Evelynn shrouds herself in Demon Shade after not performing actions that break stealth for 4 seconds. Attacking or casting abilities ends Demon Shade immediately and places it on a 4-second static cooldown, reduced to 1.25 seconds from casting Last Caress. Taking damage from champions or turrets interrupts Demon Shade and places it on a 1.5-second static cooldown.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Demon Shade:</span> While below 250 - 590 (based on level) (+ 250% AP) health, Evelynn heals herself for 15 - 150 (based on level) every second. From level 6 onward, Demon Shade also grants camouflage.</p>',
          },
        ],
        targeting: 'Passive',
        affects: 'Self',
        notes: 'Demon Shade is also placed on a 1.5 second cooldown upon respawning.\nDemon Shade\'s cooldown incurs upon starting the attack windup of the basic attack and upon the cast time of the ability.\nDemon Shade activates even if Evelynn is  Recalling.\nUpon Evelynn\'s transition into the stealth, Demon Shade will interrupt her in-progress cast commands for unit-targeted spells, excluding  Whiplash and its  empowered cast.\nIf Evelynn\'s last issued order was to cast  Whiplash, her transition into the stealth will be followed by an automatic command for casting the ability (if no other orders were issued in the meantime).\nWhenever Demon Shade activates, a puff of purple smoke will briefly appear around her.\nUsing a basic attack breaks the stealth at the start of the attack windup.',
        blurb: 'Innate: While out of combat,  Evelynn gains Demon Shade.',
      },
    ],
    Q: [
      {
        name: 'Hate Spike',
        icon: 'https://cdn.communitydragon.org/latest/champion/Evelynn/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Evelynn launches a dart in the target direction, dealing magic damage to the first enemy hit and marking them for 4 seconds.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      25,
                      30,
                      35,
                      40,
                      45,
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
            description: 'Evelynn\'s next 3 basic attacks or abilities against the marked target deal bonus magic damage.',
            leveling: [
              {
                attribute: 'Bonus Magic Damage',
                modifiers: [
                  {
                    values: [
                      15,
                      25,
                      35,
                      45,
                      55,
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
              {
                attribute: 'Total Bonus Damage',
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
            description: 'Hate Spike may be recast up to 3 times at no cost until the ability comes off cooldown.',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Evelynn unleashes a line of deadly spikes in the direction of the nearest visible enemy that deals magic damage to all enemies struck.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      25,
                      30,
                      35,
                      40,
                      45,
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
              {
                attribute: 'Maximum Magic Damage',
                modifiers: [
                  {
                    values: [
                      75,
                      90,
                      105,
                      120,
                      135,
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
              {
                attribute: 'Total Magic Damage',
                modifiers: [
                  {
                    values: [
                      145,
                      195,
                      245,
                      295,
                      345,
                    ],
                  },
                  {
                    values: [
                      175,
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
            description: 'Hate Spike\'s recast prioritizes targeting Evelynn\'s attack target, then the nearest enemy champion, then the nearest non-champion.',
          },
          {
            description: 'A nearby visible enemy is required to recast this ability.',
          },
        ],
        cost: [
          40,
          45,
          50,
          55,
          60,
        ],
        cooldown: [
          4,
        ],
        targeting: 'Direction / Proximity',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'Special',
        projectile: 'TRUE',
        notes: 'Each cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nHate Spike prioritizes:\nThe last champion Evelynn hit\nThe last non-champion Evelynn hit\nThe lowest-health champion\nThe lowest-health non-champion\nThe dart applies  spell damage and the spikes deal  area damage.\nThis ability will cast from wherever the caster is at the start of the cast time.\nRecasts can be buffered up to 0.5 seconds before becoming castable at a maximum range of approximately 500 units.',
        blurb: 'Active:  Evelynn fires her Lasher, dealing magic damage to the first enemy hit and marking them. Evelynn\'s next few attacks against the marked target will deal bonus magic damage.',
        speed: '2400',
        width: '120 / 180',
        castTime: '0.3',
        effectRadius: '550',
        targetRange: '800 / 680',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Allure',
        icon: 'https://cdn.communitydragon.org/latest/champion/Evelynn/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Evelynn curses the target enemy champion or medium or large monster for 5 seconds.</p>',
          },
          {
            description: 'Evelynn\'s next basic attack or ability against the accursed target expunges them, slowing them by 45% for 0.75 seconds.',
          },
          {
            description: 'Expunging a target will refund Allure\'s mana cost. If the target is cursed for at least 2.5 seconds, the expunge also charms them for a few seconds and the duration of the slow is increased to last for this time, as well as applying additional effects based on the target type.',
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
          {
            description: 'Against champions, the expunge also inflicts magic resistance reduction for 4 seconds.',
            leveling: [
              {
                attribute: 'Magic Resistance Reduction',
                modifiers: [
                  {
                    values: [
                      35,
                      37.5,
                      40,
                      42.5,
                      45,
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
            description: 'Against monsters, the expunge deals bonus magic damage and increases the duration of the charm by 2 seconds.',
            leveling: [
              {
                attribute: 'Bonus Magic Damage',
                modifiers: [
                  {
                    values: [
                      250,
                      300,
                      350,
                      400,
                      450,
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
                attribute: 'Monster Disable Duration',
                modifiers: [
                  {
                    values: [
                      3.25,
                      3.5,
                      3.75,
                      4,
                      4.25,
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
            description: 'Casting Allure does not break Demon Shade nor its fade into it.',
          },
        ],
        cost: [
          60,
          70,
          80,
          90,
          100,
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
        spellEffects: 'Single target',
        notes: 'The mark fully forming signifies the 2.5 seconds have elapsed, meaning the  charm will be applied on the triggering attack or ability.\nAn enemy champion cursed by Allure is alarmed of her presence and after the mark has fully formed, an arrow will appear next to them pointing towards Evelynn\'s direction. This is visible to both teams.\nThe  magic penetration will be applied to the attack or ability that triggers it.\nAllure\'s mark application on a target cannot be blocked by  spell shield.\nThe expunge will not occur if the ability is blocked by a spell shield. The mark does not trigger and will remain on the target in this case.\nThe  magic resistance reduction debuff is applied independently of the  Charm debuff when the matured mark is expunged, meaning a target can still have their magic resistance reduced while they are resisting applications of CC debuffs (e.g.  Morgana\'s  Black Shield).\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but still go on  cooldown and pay its cost.(bug)\nAllure will restart its cooldown whenever the mark debuff is removed.(bug)',
        blurb: 'Active:  Evelynn curses the target enemy, causing her next attack against the target to expunge the curse,  slowing the target and refunding the  mana cost.',
        castTime: '0.25',
        targetRange: '1200 / 1300 / 1400 / 1500 / 1600',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Whiplash',
        icon: 'https://cdn.communitydragon.org/latest/champion/Evelynn/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Evelynn whips the target enemy with her lashers, dealing magic damage and applying on-hit effects.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      60,
                      90,
                      120,
                      150,
                      180,
                    ],
                  },
                  {
                    values: [
                      3,
                    ],
                    units: [
                      '% (+ 1.5% per 100 AP) of target\'s maximum health',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'Evelynn also gains bonus movement speed for 2 seconds.',
            leveling: [
              {
                attribute: 'Bonus Movement Speed',
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
            description: 'Gaining Demon Shade resets Whiplash\'s cooldown and empowers its next cast. The damage based on the target\'s health ratio for both Whiplash and its empowered cast deals a minimum of 25 and is capped at 450 against monsters.',
          },
        ],
        cost: [
          40,
          45,
          50,
          55,
          60,
        ],
        cooldown: [
          8,
        ],
        targeting: 'Unit',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'Spell',
        projectile: 'FALSE',
        notes: 'Whiplash can be  dodged and  blocked but may not miss if Evelynn is  blinded.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).',
        blurb: 'Active:  Evelynn whips the target enemy, dealing magic damage based on the target\'s maximum health and applying  on-hit effects. She then gains  bonus movement speed for a short time.',
        castTime: '0.25',
        targetRange: '210',
        maxCharges: -1,
      },
      {
        name: 'Empowered Whiplash',
        icon: 'https://cdn.communitydragon.org/latest/champion/Evelynn/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Evelynn dashes toward the target enemy with her lashers, dealing increased damage to them upon completion as well as to all enemies within her path.</p>',
            leveling: [
              {
                attribute: 'Empowered Magic Damage',
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
                      4,
                    ],
                    units: [
                      '% (+ 2.5% per 100 AP) of target\'s maximum health',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'Empowered Whiplash only applies on-hit effects to the primary target.',
          },
        ],
        cost: [
          40,
          45,
          50,
          55,
          60,
        ],
        cooldown: [
          8,
        ],
        targeting: 'Unit',
        affects: 'Enemies',
        spellshieldable: 'True',
        damageType: 'Magic damage',
        spellEffects: 'spellaoe',
        notes: 'Evelynn will track the target if they change locations.\nShe will dash to the target\'s previous location if the target moves 2000 or more units away.\nShe will not stop tracking the target until she reaches them, as there is no maximum tracking distance.\nThere is no time-out period on Empowered Whiplash.\nEmpowered Whiplash can be  blocked but cannot be  dodged and/or missed if Evelynn is  blinded.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).',
        blurb: 'Active:  Evelynn casts Whiplash,  dashing to the target enemy and dealing  increased damage to them and enemies she passes through.',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'Last Caress',
        icon: 'https://cdn.communitydragon.org/latest/champion/Evelynn/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Evelynn reveals her true form, becoming untargetable at the start of the cast time and then unleashing her lashers in a cone in the target direction, dealing magic damage to enemies struck within. After 0.5 seconds, she blinks 700 units in the opposite direction and becomes targetable again.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      125,
                      250,
                      375,
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
            description: 'Last Caress is empowered to deal 240% damage against enemies below 30% of their maximum health.',
            leveling: [
              {
                attribute: 'Empowered Damage',
                modifiers: [
                  {
                    values: [
                      300,
                      600,
                      900,
                    ],
                  },
                  {
                    values: [
                      180,
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
          120,
          100,
          80,
        ],
        targeting: 'Direction',
        affects: 'Enemies / Self',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'Area of effect',
        projectile: 'FALSE',
        notes: 'Last Caress can be buffered during  Empowered Whiplash.\nThe casting input controls the direction Last Caress\'  damage is dealt from, with the movement automatically happening in the reverse direction.\nEnemy  champions below the health threshold are marked for Evelynn, indicating the target will receive Last Caress\'  increased damage.\nThe screen will direct to Evelynn\'s position after she  blinks.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection',
        angle: '180°',
        castTime: '0.35',
        effectRadius: '500',
        maxCharges: -1,
      },
    ],
  },
  lore: 'Within the dark seams of Runeterra, the demon Evelynn searches for her next victim. She lures in prey with the voluptuous façade of a human female, but once a person succumbs to her charms, Evelynn\'s true form is unleashed. She then subjects her victim to unspeakable torment, gratifying herself with their pain. To the demon, these liaisons are innocent flings. To the rest of Runeterra, they are ghoulish tales of lust gone awry and horrific reminders of the cost of wanton desire.',
}
export default champion