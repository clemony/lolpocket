// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion = {
  id: 20,
  key: 'Nunu',
  name: 'Nunu & Willump',
  title: 'the Boy and His Yeti',
  fullName: 'Nunu & Willump',
  resource: 'Mana',
  attackType: 'Melee',
  stats: {
    health: {
      flat: 610,
      perLevel: 90,
    },
    healthRegen: {
      flat: 5,
      perLevel: 0.8,
    },
    mana: {
      flat: 280,
      perLevel: 42,
    },
    manaRegen: {
      flat: 7,
      perLevel: 0.5,
    },
    armor: {
      flat: 29,
      perLevel: 4.2,
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
      flat: 345,
    },
    acquisitionRadius: {
      flat: 600,
    },
    selectionRadius: {
      flat: 140,
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
      flat: 0.625,
      perLevel: 2.25,
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
      flat: -0.106,
    },
    attackRange: {
      flat: 125,
    },
  },
  positions: [
    'Jungle',
  ],
  roles: [
    'Mage',
    'Tank',
    'Vanguard',
  ],
  attributeRatings: {
    damage: 1,
    toughness: 3,
    control: 2,
    mobility: 1,
    utility: 2,
    abilityReliance: 80,
    difficulty: 1,
  },
  abilities: {
    P: [
      {
        name: 'Call of the Freljord',
        icon: 'https://cdn.communitydragon.org/latest/champion/Nunu/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> When Nunu and Willump deal damage against an enemy champion, large monster or structure, they and a nearby allied champion gain Call of the Freljord for 4 seconds, prioritizing the ally with highest attack speed.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Call of the Freljord:</span> Gain 20% bonus attack speed and 10% bonus movement speed. Willump\'s basic attacks additionally deal 30% AD physical damage to secondary targets in a cone in front of him.</p>',
          },
          {
            description: 'Nunu and Willump cannot trigger Call of the Freljord from the same enemy again for a time. Successive triggers of Call of the Freljord while it is active will extend the duration by 4 seconds.',
          },
        ],
        targeting: 'Passive',
        affects: 'Self, Allies',
        damageType: 'Physical damage',
        spellEffects: 'periodic',
        notes: 'The splash damage will critically strike when the basic attack does, but will not deal any bonus damage.\nCall of the Freljord range to be shared with allies is based on Nunu and Willump\'s location.\nIf no ally is prioritized based on their stats, it will be given to the one closest to them.\nEnemies that can trigger Call of the Freljord have a marker overhead.\nThis marker isn\'t present on inhibitors or the nexus (because they cannot hold buffs and debuffs including the one that hosts this VFX), but they still trigger Call of the Freljord when attacked.\nCall of the Freljord\'s maximum remaining duration is 44 seconds.\nThe buff has no cap for its maximum total duration.',
        blurb: 'Innate: When  Nunu and  Willump deal damage against an enemy  champion, large  monster or  structure, they and a nearby allied champion gain Call of the Freljord for a few seconds, prioritizing the ally with  highest attack speed.',
        onTargetCdStatic: '10',
        targetRange: '1000 / 700',
      },
    ],
    Q: [
      {
        name: 'Consume',
        icon: 'https://cdn.communitydragon.org/latest/champion/Nunu/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Willump takes a bite out of the target enemy, dealing damage and healing himself. The heal is increased by 50% while he is below 50% maximum health.</p>',
          },
          {
            description: 'Against minions and monsters, he deals true damage. Additionally, if Consume would kill the target minion or small or medium monster, Willump devours the target, stunning and pulling them towards him over the cast time.',
            leveling: [
              {
                attribute: 'Non-Champion True Damage',
                modifiers: [
                  {
                    values: [
                      400,
                      600,
                      800,
                      1000,
                      1200,
                    ],
                  },
                ],
              },
              {
                attribute: 'Base Non-Champion Heal',
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
                      90,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                  {
                    values: [
                      10,
                    ],
                    units: [
                      '% bonus health',
                    ],
                  },
                ],
              },
              {
                attribute: 'Empowered Non-Champion Heal',
                modifiers: [
                  {
                    values: [
                      97.5,
                      142.5,
                      187.5,
                      232.5,
                      277.5,
                    ],
                  },
                  {
                    values: [
                      135,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                  {
                    values: [
                      15,
                    ],
                    units: [
                      '% bonus health',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'Against champions, he deals magic damage and the heal is reduced to 60%.',
            leveling: [
              {
                attribute: 'Champion Magic Damage',
                modifiers: [
                  {
                    values: [
                      60,
                      100,
                      140,
                      180,
                      220,
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
                  {
                    values: [
                      5,
                    ],
                    units: [
                      '% bonus health',
                    ],
                  },
                ],
              },
              {
                attribute: 'Base Champion Heal',
                modifiers: [
                  {
                    values: [
                      39,
                      57,
                      75,
                      93,
                      111,
                    ],
                  },
                  {
                    values: [
                      54,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                  {
                    values: [
                      6,
                    ],
                    units: [
                      '% bonus health',
                    ],
                  },
                ],
              },
              {
                attribute: 'Empowered Champion Heal',
                modifiers: [
                  {
                    values: [
                      58.5,
                      99.375,
                      140.25,
                      181.125,
                      222,
                    ],
                  },
                  {
                    values: [
                      81,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                  {
                    values: [
                      9,
                    ],
                    units: [
                      '% bonus health',
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
          11,
          10,
          9,
          8,
        ],
        targeting: 'Unit',
        affects: 'Enemies, Self',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Mixed damage',
        spellEffects: 'spell',
        notes: 'Icon border glows when he is within the maximum healing threshold.\n Spell shields will block the damage and the heal.\nWhile not on  cooldown, Consume\'s ability icon on the HUD can be pinged to announce its damage to  monsters in the ally chat.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).',
        blurb: 'Active:  Willump takes a bite out of the target enemy, dealing damage and  healing himself. The heal is increased when he is below half health.',
        castTime: '0.3',
        targetRange: '125',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Biggest Snowball Ever!',
        icon: 'https://cdn.communitydragon.org/latest/champion/Nunu/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Willump cleanses himself from all slows and channels for up to 10 seconds, becoming ghosted and slow-immune and creating a rolling snowball. Willump automatically navigates his movement in the direction of the cursor and can steer the snowball with a slow turn rate that increases over time, resetting upon changing direction. The duo have their movement speed reduced by 50% for the first 1 second, but after a delay they start gaining 14 movement speed every 0.25 seconds, up to a cap.</p>',
          },
          {
            description: 'The snowball increases in size and power over the first 5 seconds. Biggest Snowball Ever! can be recast after 0.5 seconds during the channel, and does so automatically after the channel or if interrupted.',
          },
          {
            description: 'The snowball explodes upon hitting an enemy champion, large pet, medium / large monster or terrain, dealing magic damage to nearby enemies, increased by 0% - 400% (based on charge time), knocking them up for 0.5 - 0.75 (based on charge time) seconds and subsequently stunning them for 0 - 0.5 (based on charge time) seconds.',
            leveling: [
              {
                attribute: 'Minimum Magic Damage',
                modifiers: [
                  {
                    values: [
                      36,
                      45,
                      54,
                      63,
                      72,
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
                attribute: 'Maximum Magic Damage',
                modifiers: [
                  {
                    values: [
                      180,
                      225,
                      270,
                      315,
                      360,
                    ],
                  },
                  {
                    values: [
                      150,
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
            description: 'The snowball rolls over enemy minions and small monsters hit, dealing 33.3% of the damage as magic damage.',
            leveling: [
              {
                attribute: 'Minimum Reduced Damage',
                modifiers: [
                  {
                    values: [
                      11.988,
                      14.985,
                      17.982,
                      20.979,
                      23.976,
                    ],
                  },
                  {
                    values: [
                      9.99,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Maximum Reduced Damage',
                modifiers: [
                  {
                    values: [
                      59.94,
                      74.925,
                      89.91,
                      104.895,
                      119.88,
                    ],
                  },
                  {
                    values: [
                      49.95,
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
            description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Willump releases the snowball, sending it rolling forward up to a maximum distance during which it will not grow any larger and will explode upon hitting an enemy.</p>',
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
          14,
        ],
        targeting: 'Direction',
        affects: 'Self, Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'spellaoe',
        projectile: 'SPECIAL',
        notes: 'The initial cast and the manual recast count as ability activations for the purposes of on-cast effects such as  Spellblade and  Force Pulse.\nThe movement speed reduction the duo receive from initially casting Biggest Snowball Ever! is not considered a  slow, thus it will not be resisted by their  slow immunity.\nThere are 3 stages where the turn rate increases from the original one:\nAfter turning for 1 second, the turn rate is increased to 175%.\nAfter turning for 3 seconds, the turn rate is increased to 250%.\nAfter turning for 6 seconds, the turn rate is increased to 325% where it caps.\nThe time threshold to begin gaining bonus movement speed may be bugged, as Flat Bonus MS increases the time while % Bonus MS decreases the time.\nThe formula appears to be (X ÷ 100) - Y, where:\nX = Total Flat MS after caps\nY = 0.1 per 1% %MS\nThe delay is not modified from its initially calculated value on-cast, even if additional movement speed is gained.\nNunu and Willump keep all increases in movement speed at time of cast for the duration of the charge.\nNunu and Willump\'s movement speed always increases in increments of ~14, reaching the greater value between [ Total MS + 85 : 255 (based on level) ][ Total Uncapped Flat MS + 85 : 255 (based on level) ] (click to toggle).\nThis takes 6 increments to reach the Total MS + 85, but may take more to reach the Uncapped Flat + 85. Due to flat bonuses increasing the time threshold, it is possible for the ability\'s effects to end before reaching the total uncapped movement speed.\nThe bonus movement speed ignores the movement speed cap.\nIf Nunu turns continuously he will create a 600 unit circle, increased with bonus movement speed, striking the same point up to 3 times, for a maximum of 180 / 225 / 270 / 315 / 360 (+ 300% AP) magic damage. The damage can be further increased by detonating the snowball, for a total of 360 / 450 / 540 / 630 / 720 (+450% AP) magic damage.\n Ryze\'s  Realm Warp will only teleport Nunu and Willump, leaving the  snowball behind.\nHovering the cursor on the HUD (e.g mini map / champion portraits) does not affect the cast and steering of Biggest Snowball Ever!.\nNunu gains a slightly larger field of view during Biggest Snowball Ever!.\n Projectile-interception effects will destroy the snowball only after it has been released.\nBiggest Snowball Ever! is disabled for the first 15 seconds of the game.\n Displacement immunity will not resist the application of the  stun.\nThe following table refers for interactions while Nunu & Willump are  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nAllowed, but cannot input movement commands.\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath Grounding effects Immobilizing effects Cast-inhibiting effects',
        speed: '400 / 410-569 / 570',
        castTime: 'none',
        targetRange: '750 : 1750 (based on charge time)',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Snowball Barrage',
        icon: 'https://cdn.communitydragon.org/latest/champion/Nunu/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Nunu throws a volley of 3 snowballs in the target direction over 0.4 seconds that each shatter upon hitting an enemy, dealing magic damage to enemies in a cone.</p>',
            leveling: [
              {
                attribute: 'Magic Damage Per Hit',
                modifiers: [
                  {
                    values: [
                      16,
                      24,
                      32,
                      40,
                      48,
                    ],
                  },
                  {
                    values: [
                      15,
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
                      48,
                      72,
                      96,
                      120,
                      144,
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
            description: 'Enemies hit 3 times are slowed for 1 second. Enemy champions and large monsters hit once are marked Snowbound for 4 seconds, refreshing on subsequent hits. Snowball Barrage can be recast twice within 3 seconds at no additional cost and with a cooldown in between casts.',
            leveling: [
              {
                attribute: 'Slow',
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
            description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Nunu hurls another volley of snowballs, mimicking the first cast\'s effects. An enemy may only be slowed once for being hit by snowballs.</p>',
            leveling: [
              {
                attribute: 'Maximum Total Magic Damage',
                modifiers: [
                  {
                    values: [
                      144,
                      216,
                      288,
                      360,
                      432,
                    ],
                  },
                  {
                    values: [
                      135,
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
            description: 'After 3 seconds from the first cast, Snowbound enemies near Willump take magic damage and are rooted for 0.5 - 1.5 (based on level) seconds.',
            leveling: [
              {
                attribute: 'Magic Damage',
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
          50,
          55,
          60,
          65,
          70,
        ],
        cooldown: [
          14,
          13,
          12,
          11,
          10,
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'aoe',
        projectile: 'TRUE',
        notes: 'Each cast volley of snowballs counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive\nEach volley of snowballs is also a separate cast instance, allowing Snowball Barrage to trigger  Phase Rush on its own or trigger 6 stacks of  Conqueror.\nSnowbound consumption does not trigger on-cast effects, neither does it count as a separate cast instance (e.g. for the purposes of  Conqueror).\nThe three snowballs are thrown independently from one another over the 0.4 seconds and their direction is determined from Nunu & Willump\'s position at any given moment.',
        blurb: 'Active:  Nunu throws a volley of 3 snowballs in the target direction that each shatter upon hitting an enemy, dealing magic damage to enemies in a cone. Enemies hit 3 times are briefly  slowed.  Champions and large  monsters hit once are marked Snowbound for a few seconds. Shortly after activating Snowball Barrage, Snowbound enemies near  Willump take magic damage and are briefly  rooted.',
        speed: '2000',
        width: '50',
        castTime: 'None',
        targetRange: '700',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'Absolute Zero',
        icon: 'https://cdn.communitydragon.org/latest/champion/Nunu/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Nunu and Willump channel a blizzard for up to 3 seconds, granting themselves a shield and slowing nearby enemies by 0% - 95% (based on channel time).</p>',
            leveling: [
              {
                attribute: 'Shield Strength',
                modifiers: [
                  {
                    values: [
                      65,
                      75,
                      85,
                    ],
                  },
                  {
                    values: [
                      150,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                  {
                    values: [
                      30,
                      40,
                      50,
                    ],
                    units: [
                      '% bonus health',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'Absolute Zero can be recast after 0.5 seconds during the channel, and does so automatically when the channel ends by any means.',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Nunu and Willump cause the blizzard to explode, dealing magic damage to nearby enemies, modified to 0% - 100% (based on channel time). Affected enemies will remain slowed for 0 - 3 (based on channel time) seconds and any of the duo\'s remaining shield will decay over 3 seconds.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      625,
                      950,
                      1275,
                    ],
                  },
                  {
                    values: [
                      300,
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
          110,
          100,
          90,
        ],
        targeting: 'Auto',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'spellaoe',
        notes: 'The initial cast and the manual recast count as ability activations for the purposes of on-cast effects such as  Spellblade and  Force Pulse.\nThe affected area is hidden if the duo is not  visible to the enemy team.\nWhile it\'s unlikely to happen normally, it is possible to deal zero damage with Absolute Zero if canceled as soon as it\'s started.\nThe following table refers for interactions while Nunu & Willump are  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nInterrupts\n\n\nAbilities\n\nInterrupts\n\n\nMovement\n\nInterrupts\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects',
        castTime: 'none',
        effectRadius: '650',
        maxCharges: -1,
      },
    ],
  },
  lore: 'Once upon a time, there was a boy who wanted to prove he was a hero by slaying a fearsome monster—only to discover that the beast, a lonely and magical yeti, merely needed a friend. Bound together by ancient power and a shared love of snowballs, Nunu and Willump now ramble wildly across the Freljord, breathing life into imagined adventures. They hope that somewhere out there, they will find Nunu\'s mother. If they can save her, maybe they will be heroes after all…',
}
export default champion