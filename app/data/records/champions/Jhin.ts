// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion = {
  id: 202,
  key: 'Jhin',
  name: 'Jhin',
  title: 'the Virtuoso',
  fullName: 'Khada Jhin',
  resource: 'Mana',
  attackType: 'Ranged',
  stats: {
    health: {
      flat: 655,
      perLevel: 107,
    },
    healthRegen: {
      flat: 3.75,
      perLevel: 0.55,
    },
    mana: {
      flat: 300,
      perLevel: 50,
    },
    manaRegen: {
      flat: 6,
      perLevel: 0.8,
    },
    armor: {
      flat: 24,
      perLevel: 4.7,
    },
    magicResistance: {
      flat: 30,
      perLevel: 1.3,
    },
    attackDamage: {
      flat: 59,
      perLevel: 4.4,
    },
    movespeed: {
      flat: 330,
    },
    acquisitionRadius: {
      flat: 800,
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
      flat: 0.86,
    },
    attackSpeed: {
      flat: 0.625,
      perLevel: 3,
    },
    attackCastTime: {
      flat: 0.25,
    },
    attackTotalTime: {
      flat: 1.6,
    },
    attackRange: {
      flat: 550,
    },
  },
  positions: [
    'Bottom',
  ],
  roles: [
    'Catcher',
    'Mage',
    'Marksman',
  ],
  attributeRatings: {
    damage: 3,
    toughness: 1,
    control: 2,
    mobility: 1,
    utility: 1,
    abilityReliance: 20,
    difficulty: 2,
  },
  abilities: {
    P: [
      {
        name: 'Whisper',
        icon: 'https://cdn.communitydragon.org/latest/champion/Jhin/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate - Death In 4 Acts:</span> Jhin\'s basic attacks consume ammunition within 4 rounds. He will reload over 2.5 seconds immediately after expending all rounds or withholding leftover rounds after 10 seconds of being out of combat and not being affected by crowd control. The latter reload can be interrupted by declaring an attack or casting an ability.</p>',
          },
          {
            description: 'Jhin\'s final round attack has an uncancellable windup, always critically strikes, including against structures, and deals bonus physical damage equal to 15 / 20 / 25% (based on level) of the target\'s missing health.',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate - Every Moment Matters:</span> Jhin gains bonus attack damage equal to 4% - 44% (based on level)[ (+ 0.35% per 1% critical strike chance) (+ 0.3% per 1% bonus attack speed) ][ (+ 35% critical strike chance) (+ 30% bonus attack speed) ]AD.</p>',
          },
          {
            description: 'Additionally, critical strikes against enemies grant Jhin 14% (+ 0.4% per 1% bonus attack speed) bonus movement speed for 2 seconds.',
          },
        ],
        targeting: 'Passive',
        affects: 'Self, Enemies',
        damageType: 'Physical damage',
        spellEffects: 'Proc',
        notes: 'The penalty to Jhin\'s critical damage also reduces the base damage ((100 + 75) × 0.86 rather than 100 + (75 × 0.86)) and stacks with other sources (i.e  Infinity Edge) ((100 + 75 + 40) × 0.86).\nThis penalty does not affect  Curtain Call.\nThe  missing health damage benefits from  life steal.\nThe 4th attack cannot be canceled by Jhin himself.\nThe 4th attack versus a structure is classified as a critical strike.\nThe attack damage multiplier stacks additively with  Dragon Slayer\'s.\nEvery Moment Matters\'  bonus AD will benefit from any amount of bonus attack speed, even in excess of an amount that would usually reach the attacks per second cap (3).\nThe maximum modifier without attack speed is 79%.\n44% base modifier at level 18.\n35% from critical strike chance on account of the 100% cap.\nAttack speed slows will not affect Jhin\'s bonus attack damage from his passive and will ignore his attack speed as it is fixed.\nAttack damage reductions apply before the multiplier causing them to be stronger against Jhin than advertised or versus other champions.\nThe bonus damage based on the target\'s missing health does not affect structures.',
        blurb: 'Innate - Death in 4 Acts:  Jhin\'s gun may fire up to 4 times before needing to reload. The final round will  critically strike, dealing bonus physical damage based on the target\'s missing health.',
      },
    ],
    Q: [
      {
        name: 'Dancing Grenade',
        icon: 'https://cdn.communitydragon.org/latest/champion/Jhin/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Jhin throws a grenade at the target enemy that deals physical damage and can bounce to up to three additional nearby enemies, prioritizing the closest enemy that has not been hit.</p>',
            leveling: [
              {
                attribute: 'Physical Damage',
                modifiers: [
                  {
                    values: [
                      44,
                      69,
                      94,
                      119,
                      144,
                    ],
                  },
                  {
                    values: [
                      44,
                      51.5,
                      59,
                      66.5,
                      74,
                    ],
                    units: [
                      '% AD',
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
            description: 'The grenade\'s damage is increased by 35% any time an enemy dies by any means after being hit by the grenade before it strikes its next target.',
            leveling: [
              {
                attribute: 'Bonus Damage per Target Death',
                modifiers: [
                  {
                    values: [
                      15.4,
                      24.15,
                      32.9,
                      41.65,
                      50.4,
                    ],
                  },
                  {
                    values: [
                      15.4,
                      18.025,
                      20.65,
                      23.275,
                      25.9,
                    ],
                    units: [
                      '% AD',
                    ],
                  },
                  {
                    values: [
                      21,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Maximum Total Physical Damage',
                modifiers: [
                  {
                    values: [
                      90.2,
                      141.45,
                      192.7,
                      243.95,
                      295.2,
                    ],
                  },
                  {
                    values: [
                      90.2,
                      105.575,
                      120.95,
                      136.325,
                      151.7,
                    ],
                    units: [
                      '% AD',
                    ],
                  },
                  {
                    values: [
                      123,
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
          40,
          45,
          50,
          55,
          60,
        ],
        cooldown: [
          7,
          6.5,
          6,
          5.5,
          5,
        ],
        targeting: 'Unit',
        affects: 'Enemies',
        spellshieldable: 'Special',
        resource: 'Mana',
        damageType: 'Physical damage',
        spellEffects: 'spellaoe',
        projectile: 'TRUE',
        notes: 'Spell shield will not prevent the canister from bouncing.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).',
        blurb: 'Jhin throws a grenade at the target enemy that can bounce to up to three additional nearby enemies, dealing physical damage.',
        speed: '1800 / 600',
        castTime: '0.25',
        effectRadius: '450',
        targetRange: '550',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Deadly Flourish',
        icon: 'https://cdn.communitydragon.org/latest/champion/Jhin/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Enemy champions that trigger a Lotus Trap to bloom or are damaged by Jhin or allied champions are marked for 4 seconds.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Jhin fires a shot in the target direction that deals physical damage to all enemies in a line until colliding with an enemy champion, reduced by 25% against minions.</p>',
            leveling: [
              {
                attribute: 'Physical Damage',
                modifiers: [
                  {
                    values: [
                      60,
                      95,
                      130,
                      165,
                      200,
                    ],
                  },
                  {
                    values: [
                      50,
                    ],
                    units: [
                      '% AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'Minion Damage',
                modifiers: [
                  {
                    values: [
                      45,
                      71.25,
                      97.5,
                      123.75,
                      150,
                    ],
                  },
                  {
                    values: [
                      37.5,
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
            description: 'Hitting a marked champion roots them for a duration and grants Jhin Every Moment Matters\' bonus movement speed.',
            leveling: [
              {
                attribute: 'Root Duration',
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
          50,
          55,
          60,
          65,
          70,
        ],
        cooldown: [
          12,
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Physical damage',
        spellEffects: 'Special',
        projectile: 'YASUO',
        notes: 'Applies  spell damage to the enemy champion and  area damage to all other enemy units.\nThe Caught Out mark only appears if Deadly Flourish can potentially  root the target, and will not if the ability\'s cooldown is longer than 4 seconds or isn\'t ranked up.\nThis ability will cast from wherever the caster is at the start of the cast time.\nThe ability will not preserve the caster\'s facing direction when using  Flash and similar effects.\nDeadly Flourish is blocked by  Wind Wall but not  Blade Whirl.\nDeadly Flourish is special cased to be intercepted by the former because it looks like a blockable missile, even though it isn\'t functionally a missile.\nWhile  disguised as a non-champion,  Neeko cannot be affected by Deadly Flourish.(bug)',
        blurb: 'Passive: Enemy champions that trigger a  Lotus Trap, or take damage from  Jhin or his allies, are marked with  Caught Out for a few seconds.',
        width: '90',
        castTime: '0.75',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Captive Audience',
        icon: 'https://cdn.communitydragon.org/latest/champion/Jhin/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Passive - Beauty in Death:</span> Whenever Jhin kills an enemy champion, he summons a Blooming Lotus Trap on their corpse.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Jhin places a Lotus Trap at the target location which, upon landing, becomes stealthed after arming over 1 second, lasting for up to 180 seconds and granting sight within its radius. The Lotus Trap blooms upon enemy contact, with enemies in the area at the time of its trigger becoming revealed for 4 seconds.</p>',
          },
          {
            description: 'Jhin periodically stocks a Lotus Trap charge, up to a maximum of 2.',
          },
          {
            description: 'Blooming Lotus Traps slow enemies within the area by 35% for 2 seconds before exploding, dealing magic damage to enemies. Lotus Traps deal 65% damage against minions as well as against champions and monsters who have been struck by another Lotus Trap in the last 1 second.',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      20,
                      80,
                      140,
                      200,
                      260,
                    ],
                  },
                  {
                    values: [
                      120,
                    ],
                    units: [
                      '% AD',
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
                attribute: 'Reduced Damage',
                modifiers: [
                  {
                    values: [
                      13,
                      52,
                      91,
                      130,
                      169,
                    ],
                  },
                  {
                    values: [
                      78,
                    ],
                    units: [
                      '% AD',
                    ],
                  },
                  {
                    values: [
                      65,
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
            description: 'See Pets for more details about Lotus Traps.',
          },
        ],
        cost: [
          30,
        ],
        cooldown: [
          2,
        ],
        targeting: 'Location',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'spellaoe',
        projectile: 'SPECIAL',
        notes: 'Beauty in Death does not consume Lotus Trap charges.\nThe Lotus Trap will stop upon encountering a  Wind Wall or  Unbreakable.\nBeauty in Death does not trigger after killing a  clone.\nThe reveal debuff is named  Caught Out.\nThis debuff is shared between Captive Audience and  Curtain Call.',
        blurb: 'Passive - Beauty in Death: Killing an enemy champion summons a free Blooming Lotus Trap under them.',
        rechargeRate: [
          24,
          21.5,
          19,
          16.5,
          14,
        ],
        collisionRadius: '160',
        castTime: '0.25',
        effectRadius: '260 / 260',
        targetRange: '750',
        maxCharges: 2,
      },
    ],
    R: [
      {
        name: 'Curtain Call',
        icon: 'https://cdn.communitydragon.org/latest/champion/Jhin/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Jhin channels for up to 10 seconds, transforming his weapon into a cannon and gaining the ability to recast Curtain Call 4 times within the duration.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Recast:</span> After 0.2 seconds into the cast time, Jhin fires a round in the target direction that grants sight around its trajectory for 0.5 seconds and deals physical damage to enemies hit, increased by 0% - 300% (based on target\'s missing health). The bullet stops upon hitting an enemy champion, slowing them by 80% for 0.5 seconds and revealing them for 2 seconds. Each cast has a static cooldown of 1 second.</p>',
            leveling: [
              {
                attribute: 'Minimum Physical Damage per Bullet',
                modifiers: [
                  {
                    values: [
                      64,
                      128,
                      192,
                    ],
                  },
                  {
                    values: [
                      25,
                    ],
                    units: [
                      '% AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'Maximum Physical Damage per Bullet',
                modifiers: [
                  {
                    values: [
                      256,
                      512,
                      768,
                    ],
                  },
                  {
                    values: [
                      100,
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
            description: 'The fourth shot critically strikes for (200% + 40%) damage.',
            leveling: [
              {
                attribute: 'Minimum Fourth Shot Damage',
                modifiers: [
                  {
                    values: [
                      128,
                      256,
                      384,
                    ],
                  },
                  {
                    values: [
                      50,
                    ],
                    units: [
                      '% AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'Maximum Fourth Shot Damage',
                modifiers: [
                  {
                    values: [
                      512,
                      1024,
                      1536,
                    ],
                  },
                  {
                    values: [
                      200,
                    ],
                    units: [
                      '% AD',
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
          105,
          90,
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Physical damage',
        spellEffects: 'Special',
        projectile: 'TRUE',
        notes: 'Applies  spell damage to enemy champions and  area damage to other enemy units.\nEach cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nCurtain Call\'s shooting range is fixed in front of Jhin.\nThe opening sound effect and area of range are audible and visible to both teams.\nLeveling up the ability while channeling will change the final cooldown.\nJhin will turn to face in the target direction whenever he uses a recast.\nJhin gains a wider field of view during Curtain Call.\nThe reveal debuff is named  Caught Out.\nThis debuff is shared between  Captive Audience and Curtain Call.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe following table refers for interactions while Jhin is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nInterrupts\n\n\nAbilities\n\nInterrupts\n\n\nMovement\n\nInterrupts\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Hexflash\n\n\nInterrupted by\n\n Teleport  Recall\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects\n\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection',
        blurb: 'blurb2',
        speed: '5000',
        width: '160',
        angle: '60°',
        castTime: '1 / 0.25',
        maxCharges: -1,
      },
    ],
  },
  lore: 'Jhin is a meticulous criminal psychopath who believes murder is art. Once an Ionian prisoner, but freed by shadowy elements within Ionia\'s ruling council, the serial killer now works as their cabal\'s assassin. Using his gun as his paintbrush, Jhin creates works of artistic brutality, horrifying victims and onlookers. He gains a cruel pleasure from putting on his gruesome theater, making him the ideal choice to send the most powerful of messages: terror.',
}
export default champion