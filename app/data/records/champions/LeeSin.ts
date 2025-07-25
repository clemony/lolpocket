// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion = {
  id: 64,
  key: 'LeeSin',
  name: 'Lee Sin',
  title: 'the Blind Monk',
  resource: 'Energy',
  attackType: 'Melee',
  stats: {
    health: {
      flat: 645,
      perLevel: 108,
    },
    healthRegen: {
      flat: 7.5,
      perLevel: 0.7,
    },
    mana: {
      flat: 200,
    },
    manaRegen: {
      flat: 50,
    },
    armor: {
      flat: 36,
      perLevel: 4.9,
    },
    magicResistance: {
      flat: 32,
      perLevel: 2.05,
    },
    attackDamage: {
      flat: 69,
      perLevel: 3.7,
    },
    movespeed: {
      flat: 345,
    },
    acquisitionRadius: {
      flat: 400,
    },
    selectionRadius: {
      flat: 102.778,
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
      flat: 0.651,
      perLevel: 3,
    },
    attackSpeedRatio: {
      flat: 0.651,
    },
    attackCastTime: {
      flat: 0.3,
    },
    attackTotalTime: {
      flat: 1.6,
    },
    attackDelayOffset: {
      flat: -0.105,
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
    'Diver',
    'Fighter',
  ],
  attributeRatings: {
    damage: 3,
    toughness: 2,
    control: 2,
    mobility: 3,
    utility: 1,
    abilityReliance: 55,
    difficulty: 2,
  },
  abilities: {
    P: [
      {
        name: 'Flurry',
        icon: 'https://cdn.communitydragon.org/latest/champion/LeeSin/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> After casting an ability, Lee Sin\'s next 2 basic attacks within 3 seconds gain 40% bonus attack speed and restore energy.</p>',
          },
          {
            description: 'The first attack restores 20 / 30 / 40 (based on level) energy and the second attack restores[ 10 / 15 / 20 (based on level) energy. ][ half of the previous amount. ]',
          },
        ],
        targeting: 'Passive',
        affects: 'Self',
        notes: 'Flurry will still restore energy even if the attacks are  blocked or missed while Lee Sin is  blinded, but not  dodged.',
        blurb: 'Innate: After  Lee Sin casts an ability, his next 2 basic attacks within a short time gain  bonus attack speed and restore  energy.',
      },
    ],
    Q: [
      {
        name: 'Sonic Wave',
        icon: 'https://cdn.communitydragon.org/latest/champion/LeeSin/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Lee Sin fires a sonic blast in the target direction that deals physical damage to the first enemy hit and marks them for 3 seconds, during which they are revealed.</p>',
            leveling: [
              {
                attribute: 'Physical Damage',
                modifiers: [
                  {
                    values: [
                      55,
                      80,
                      105,
                      130,
                      155,
                    ],
                  },
                  {
                    values: [
                      115,
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
            description: 'While the target is marked, Lee Sin can cast Resonating Strike.',
          },
        ],
        cost: [
          50,
        ],
        cooldown: [
          10,
          9,
          8,
          7,
          6,
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Energy',
        damageType: 'Physical damage',
        spellEffects: 'Spell',
        projectile: 'TRUE',
        notes: 'This ability will cast from wherever the caster is at the start of the cast time.',
        blurb: 'Active:  Lee Sin fires a sonic blast in the target direction that deals physical damage to the first enemy hit and marks them for a short time, during which they are  revealed.',
        speed: '1800',
        width: '120',
        castTime: '0.25',
        effectRadius: '400',
        targetRange: '1200',
        maxCharges: -1,
      },
      {
        name: 'Resonating Strike',
        icon: 'https://cdn.communitydragon.org/latest/champion/LeeSin/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Lee Sin dashes to the nearby enemy marked by Sonic Wave. Upon arrival, he consumes the mark and deals physical damage, increased by 0% - 100% (based on target\'s missing health).</p>',
            leveling: [
              {
                attribute: 'Minimum Physical Damage',
                modifiers: [
                  {
                    values: [
                      55,
                      80,
                      105,
                      130,
                      155,
                    ],
                  },
                  {
                    values: [
                      115,
                    ],
                    units: [
                      '% bonus AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'Maximum Physical Damage',
                modifiers: [
                  {
                    values: [
                      110,
                      160,
                      210,
                      260,
                      310,
                    ],
                  },
                  {
                    values: [
                      230,
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
            description: 'The marked enemy must be within range in order to cast this ability. Iron Will and Cripple can be cast during the dash.',
          },
        ],
        cost: [
          50,
        ],
        cooldown: [
          10,
          9,
          8,
          7,
          6,
        ],
        targeting: 'Proximity',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Energy',
        damageType: 'Physical damage',
        spellEffects: 'Spell',
        notes: 'Lee Sin will track the target if they change locations.\nHe will dash to the target\'s previous location without consuming the mark if the target is too far away or moves beyond 2000 units.\nLee Sin will attempt to place himself on top of the target upon arrival.\nThe damage dealt by Resonating Strike can be negated if the target  blinks. Sometimes, Lee Sin will end the dash at their last location but appear on top of the target after a short delay.\nOriginally, Lee Sin would land 50 units in front of his target. Since there are no patch notes where this is noted to have changed, landing on top of his target may be a bug.\nResonating Strike cannot be cast without the marked target nearby or if the target is  untargetable.\nIf Resonating Strike interrupts another dash,  Tempest and  Dragon\'s Rage can be cast during it (both otherwise cannot be cast).\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Safeguard,  Iron Will, and  Cripple can be cast.  Tempest and  Dragon\'s Rage are disabled.\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nAll the other item-actives are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Hextech Rocketbelt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Teleport\n\n\nDisabled\n\n Recall\n\n\nInterrupted by\n\n Flash\n\n\nInterrupted by\n\nDeath',
        blurb: 'Active:  Lee Sin  dashes to the nearby enemy marked by  Sonic Wave, consuming the mark upon arrival to deal physical damage based on the target\'s missing health.',
        speed: '1350 + 100% movement speed',
        castTime: 'none',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Safeguard',
        icon: 'https://cdn.communitydragon.org/latest/champion/LeeSin/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Lee Sin dashes to the target allied unit\'s location. If the ally is a champion upon arrival, both they and Lee Sin gain a shield for 2 seconds and Safeguard\'s cooldown is halved.</p>\nLee Sin can self-cast Safeguard to shield himself.',
            leveling: [
              {
                attribute: 'Shield Strength',
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
            description: 'After Safeguard is cast, Lee Sin can cast Iron Will within the next 3 seconds.',
          },
          {
            description: 'Iron Will and Cripple can be cast during the dash.',
          },
        ],
        cost: [
          50,
        ],
        cooldown: [
          12,
        ],
        targeting: 'Unit',
        resource: 'Energy',
        notes: 'Lee Sin cannot self-cast Safeguard while  grounded or  rooted.\nSafeguard can be used on any targetable allied unit excluding structures.\nThis includes  champions,  minions,  wards, and champion summoned units (e.g.  Noxious Trap,  Demacian Standard,  Dark Passage).\nIf no unit is directly targeted, Safeguard will search for wards in a 100 radius to target.\nThis aids Lee Sin in performing the dash to a ward he just placed.\nSafeguard will not grant its  shield if the dash is interrupted.\nIf the dash overrides or is overridden by  Resonating Strike, he will grant the shield immediately rather than on arrival.\nIf Safeguard\'s dash interrupts another dash,  Tempest and  Dragon\'s Rage can be cast during it (both otherwise cannot be cast).',
        blurb: 'Active:  Lee Sin  dashes to the target allied unit. If the ally is a  champion, both they and Lee Sin gain a  shield for a short time upon his arrival and Safeguard\'s cooldown is  halved.\nLee Sin can self-cast Safeguard to shield himself.',
        speed: '1350 + 100% movement speed',
        castTime: 'none',
        targetRange: '700',
        maxCharges: -1,
      },
      {
        name: 'Iron Will',
        icon: 'https://cdn.communitydragon.org/latest/champion/LeeSin/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Lee Sin gains life steal and spell vamp for 4 seconds.</p>',
            leveling: [
              {
                attribute: 'Life steal and spell vamp',
                modifiers: [
                  {
                    values: [
                      10,
                      14,
                      18,
                      22,
                      26,
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
          12,
        ],
        targeting: 'Auto',
        affects: 'Self',
        resource: 'Energy',
        notes: 'No additional details.',
        blurb: 'Active:  Lee Sin gains  life steal and  spell vamp for a few seconds.',
        castTime: 'none',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Tempest',
        icon: 'https://cdn.communitydragon.org/latest/champion/LeeSin/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Lee Sin smashes the ground beneath him, dealing magic damage to nearby enemies, marking them for 4 seconds and, if they are not invisible when struck, revealing them for the same duration.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      35,
                      60,
                      85,
                      110,
                      135,
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
            description: 'If Tempest hits an enemy, Lee Sin can cast Cripple within the next 3 seconds after a 0.1-second delay.',
          },
        ],
        cost: [
          50,
        ],
        cooldown: [
          9,
        ],
        targeting: 'Auto',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Energy',
        damageType: 'Magic damage',
        spellEffects: 'spellaoe',
        notes: 'Tempest\'s sight reveal only reveals the affected targets, but visually also lights up the Fog of War in a 400 radius.\nTempest\'s sight reveal is not removed when Lee Sin casts Cripple (unlike  Sonic Wave\'s).\nThis ability will cast from wherever the caster is at the end of the cast time.',
        blurb: 'Active:  Lee Sin deals magic damage to nearby enemies, marking them for a few seconds and, if they are not  invisible when struck,  revealing them.',
        castTime: '0.25',
        effectRadius: '450',
        maxCharges: -1,
      },
      {
        name: 'Cripple',
        icon: 'https://cdn.communitydragon.org/latest/champion/LeeSin/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Lee Sin slows nearby enemies marked by Tempest, decaying over 4 seconds.</p>',
            leveling: [
              {
                attribute: 'Slow',
                modifiers: [
                  {
                    values: [
                      35,
                      45,
                      55,
                      65,
                      75,
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
            description: 'A nearby marked enemy is required to cast this ability.',
          },
        ],
        cost: [
          50,
        ],
        cooldown: [
          9,
        ],
        targeting: 'Proximity',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Energy',
        notes: 'Tempest\'s reveal is not removed when Lee Sin casts Cripple.\nCripple cannot be cast without a marked target within 550 range.',
        blurb: 'Active:  Lee Sin sends a wave to nearby enemies marked by  Tempest, inflicting a decaying  slow that lasts a few seconds.',
        speed: '1600',
        castTime: 'none',
        effectRadius: '550 / 600',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'Dragon\'s Rage',
        icon: 'https://cdn.communitydragon.org/latest/champion/LeeSin/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Lee Sin roots the target enemy champion over the cast time, then roundhouse kicks them to deal physical damage and knock them back up to 800 units over 0.8 seconds, rendering them airborne for 1 second.</p>',
            leveling: [
              {
                attribute: 'Physical Damage',
                modifiers: [
                  {
                    values: [
                      175,
                      400,
                      625,
                    ],
                  },
                  {
                    values: [
                      200,
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
            description: 'Enemies that collide with the displaced enemy while it is airborne take the same damage plus bonus physical damage and are knocked up for 1 second.',
            leveling: [
              {
                attribute: 'Collision Physical Damage',
                modifiers: [
                  {
                    values: [
                      175,
                      400,
                      625,
                    ],
                  },
                  {
                    values: [
                      200,
                    ],
                    units: [
                      '% bonus AD',
                    ],
                  },
                  {
                    values: [
                      12,
                      15,
                      18,
                    ],
                    units: [
                      '% of primary target\'s bonus health',
                    ],
                  },
                ],
              },
            ],
          },
        ],
        cost: [
          0,
        ],
        cooldown: [
          110,
          85,
          60,
        ],
        targeting: 'Unit',
        affects: 'Enemies',
        spellshieldable: 'True',
        damageType: 'Physical damage',
        spellEffects: 'Special',
        notes: 'Applies  spell damage to the primary target and  area damage to secondary targets.\nThe spell indicator for this ability also displays the direction for the knock back relative to Lee Sin\'s position.\nIf the target of Dragon Rage  dies initially on the first hit there will be no displacement of any kind.\nThe  displacement\'s direction is decided at the moment of impact and not by Lee Sin and his target\'s relative locations at the start of the cast (the only way for Lee Sin to control where his target is displaced is by using  Flash before the cast time of Dragon\'s Rage ends).\nIf the  airborne debuff is removed from the target, its ability to collide with enemies is removed aswell, even if the target has not come to a stop yet.(note)\nThe airborne debuff and with it collision of the target remains for the normal duration even if its trajectory is  displaced by another source (i.e -  Headbutt).\nThe target may still collide with other enemies for the remaining airborne duration after they reach their destination, as the airborne debuff lasts longer than the displacement.\nThe knockback distance is intended to be 800, but due to a bug, this is reduced by up-to the sum of Lee Sin\'s and his target\'s  gameplay radius, depending on how far they are away from one another at the end of the cast time.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).',
        blurb: 'Active:  Lee Sin  roots the target enemy  champion and roundhouse kicks them, dealing physical damage and  knocking them back.',
        collisionRadius: '160',
        castTime: '0.25',
        targetRange: '375',
        maxCharges: -1,
      },
    ],
  },
  lore: 'A master of Ionia\'s ancient martial arts, Lee Sin is a principled fighter who channels the essence of the dragon spirit to face any challenge. Though he lost his sight many years ago, the warrior-monk has devoted his life to protecting his homeland against any who would dare upset its sacred balance. Enemies who underestimate his meditative demeanor will endure his fabled burning fists and blazing roundhouse kicks.',
}
export default champion