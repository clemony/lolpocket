// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion = {
  id: 497,
  key: 'Rakan',
  name: 'Rakan',
  title: 'The Charmer',
  resource: 'Mana',
  attackType: 'Melee',
  stats: {
    health: {
      flat: 610,
      perLevel: 99,
    },
    healthRegen: {
      flat: 5,
      perLevel: 0.5,
    },
    mana: {
      flat: 315,
      perLevel: 50,
    },
    manaRegen: {
      flat: 8.75,
      perLevel: 0.5,
    },
    armor: {
      flat: 30,
      perLevel: 4.9,
    },
    magicResistance: {
      flat: 32,
      perLevel: 2.05,
    },
    attackDamage: {
      flat: 62,
      perLevel: 3.5,
    },
    movespeed: {
      flat: 335,
    },
    acquisitionRadius: {
      flat: 475,
    },
    selectionRadius: {
      flat: 125,
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
      flat: 0.635,
      perLevel: 3,
    },
    attackSpeedRatio: {
      flat: 0.635,
    },
    attackCastTime: {
      flat: 0.27,
    },
    attackTotalTime: {
      flat: 1.575,
    },
    attackRange: {
      flat: 300,
    },
  },
  positions: [
    'Support',
  ],
  roles: [
    'Catcher',
    'Support',
  ],
  attributeRatings: {
    damage: 1,
    toughness: 2,
    control: 3,
    mobility: 3,
    utility: 3,
    abilityReliance: 90,
    difficulty: 2,
  },
  abilities: {
    P: [
      {
        name: 'Fey Feathers',
        icon: 'https://cdn.communitydragon.org/latest/champion/Rakan/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Periodically, Rakan grants himself a shield for 30 - 225 (based on level) (+ 95% AP) that lasts until broken. After being out of combat for 5 seconds, any leftover shield will be restored to maximum value.</p>',
          },
          {
            description: 'Rakan\'s basic attacks and ability hits reduce Fey Feathers\' cooldown by 1 second for each enemy champion hit.',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate - Lover\'s Leap:</span> If either Rakan or Xayah is channeling Recall, the other may move nearby and channel their own to join alongside them. Both reach base at the time of which the initiator\'s Recall completes.</p>',
          },
        ],
        targeting: 'Passive',
        affects: 'Self',
        notes: 'Revitalize will record bonus shielding when a new shield is created, but not when it regenerates. In either case, there is no bonus shielding received.\nThe cooldown reduction is granted even if the ability is blocked by a  spell shield.',
        blurb: 'Innate: Periodically,  Rakan generates a  shield that regenerates out of combat if not broken.',
      },
    ],
    Q: [
      {
        name: 'Gleaming Quill',
        icon: 'https://cdn.communitydragon.org/latest/champion/Rakan/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Rakan slings an enchanted feather in the target direction that deals magic damage to the first enemy hit.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      70,
                      115,
                      160,
                      205,
                      250,
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
            description: 'If the target was an enemy champion or epic monster, a radius is marked around Rakan. After 3 seconds or if an allied champion enters the radius, Rakan heals himself and nearby allied champions for 40 - 210 (based on level) (+ 55% AP).',
          },
        ],
        cost: [
          45,
        ],
        cooldown: [
          11,
          10,
          9,
          8,
          7,
        ],
        targeting: 'Direction',
        affects: 'Enemies / Allies',
        spellshieldable: 'Special',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'spell',
        projectile: 'TRUE',
        notes: 'The trigger radius is slightly smaller than the heal radius.\n Spell shield will not prevent the marked area from being formed.\nThe heal can activate immediately after the projectile hits the target, before the healing return animation completes.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe heal will trigger and affect Rakan even if he is  untargetable.',
        blurb: 'Active:  Rakan slings an enchanted feather in the target direction that deals magic damage to the first enemy hit.',
        castTime: '0.25',
        effectRadius: '200',
        targetRange: '900',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Grand Entrance',
        icon: 'https://cdn.communitydragon.org/latest/champion/Rakan/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Rakan dashes to the target location. After a 0.35-second delay upon arrival, he deals magic damage to nearby enemies and knocks them up for 1 second.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      70,
                      120,
                      170,
                      220,
                      270,
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
            description: 'Rakan will be knocked down by any immobilizing or polymorphing crowd control during the dash.',
          },
        ],
        cost: [
          50,
          60,
          70,
          80,
          90,
        ],
        cooldown: [
          14,
          13,
          12,
          11,
          10,
        ],
        targeting: 'Location',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'spellaoe',
        notes: 'Sleep does not count for knocking the dash down.(bug)',
        blurb: 'Active:  Rakan  dashes to the target location.',
        speed: '1700',
        castTime: 'none',
        effectRadius: '275',
        targetRange: '650',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Battle Dance',
        icon: 'https://cdn.communitydragon.org/latest/champion/Rakan/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Rakan grants a shield to the target allied champion for 3 seconds and then dashes to and around them. Battle Dance can be recast within 5 seconds at no additional cost.</p>',
            leveling: [
              {
                attribute: 'Shield Strength',
                modifiers: [
                  {
                    values: [
                      50,
                      75,
                      100,
                      125,
                      150,
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
            description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Rakan mimics the first cast\'s effects.</p>',
          },
          {
            description: 'Rakan will be knocked down by any immobilizing or polymorphing crowd control during the dash.',
          },
          {
            description: 'If Xayah is the target, Battle Dance can be cast from an increased range.',
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
          0,
        ],
        targeting: 'Unit',
        affects: 'Allies',
        resource: 'Mana',
        notes: 'Both casts count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nThe shields do not stack if Battle Dance is cast on the same target twice. Only the duration and shield amount is refreshed.\nBattle Dance, its recast, and its empowered version on  Xayah all have a  forgiveness radius of 175 units.\n Sleep does not count for knocking the dash down.(bug)',
        blurb: 'Passive:  Rakan can cast or re-cast Battle Dance at an increased  range when targeting  Xayah.',
        speed: '1250 + 80% movement speed',
        castTime: 'none',
        targetRange: '700 / 1000',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'The Quickness',
        icon: 'https://cdn.communitydragon.org/latest/champion/Rakan/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Rakan breaks into a captivating sprint for 4 seconds, gaining ghosting and 75% bonus movement speed for the duration. During this time, he deals magic damage to enemies he collides with and charms and slows them by 75% for a duration. This cannot affect the same enemy more than once.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      100,
                      200,
                      300,
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
                attribute: 'Disable Duration',
                modifiers: [
                  {
                    values: [
                      1,
                      1.25,
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
          {
            description: 'Colliding with an enemy champion extends The Quickness\' duration by 0.25 seconds, which can occur once per champion. When Rakan collides with his first enemy champion, he gains an additional 75% bonus movement speed that decays after 0.5 seconds by 20% every 0.5 seconds, then by 15% after decaying by 60% over 1.5 seconds.',
          },
          {
            description: 'During The Quickness, Rakan cannot basic attack enemy champions he did not collide with, unless the attack command was inputted before the ability was activated.',
          },
        ],
        cost: [
          100,
        ],
        cooldown: [
          130,
          110,
          90,
        ],
        targeting: 'Auto',
        affects: 'Self / Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'spellaoe',
        notes: 'The following table refers for interactions while Rakan is in cast time:\n\n\nType\n\nCast time\n\n\nAttacking\n\nAllowed\n\n\nAbilities\n\n Grand Entrance is disabled but can still be buffered.  Gleaming Quill and  Battle Dance are usable.\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\nAll items are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Teleport  Recall  Hexflash\n\n\nDisabled\n\n Flash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection',
        collisionRadius: '150',
        castTime: '0.5',
        maxCharges: -1,
      },
    ],
  },
  lore: 'As mercurial as he is charming, Rakan is an infamous vastayan troublemaker and the greatest battle-dancer in Lhotlan tribal history. To the humans of the Ionian highlands, his name has long been synonymous with wild festivals, uncontrollable parties, and anarchic music. Few would suspect this energetic, traveling showman is also partner to the rebel Xayah, and is dedicated to her cause.',
}
export default champion