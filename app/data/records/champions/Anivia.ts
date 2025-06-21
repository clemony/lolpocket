// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion = {
  id: 34,
  key: 'Anivia',
  name: 'Anivia',
  title: 'the Cryophoenix',
  resource: 'Mana',
  attackType: 'Ranged',
  stats: {
    health: {
      flat: 550,
      perLevel: 92,
    },
    healthRegen: {
      flat: 5.5,
      perLevel: 0.55,
    },
    mana: {
      flat: 495,
      perLevel: 45,
    },
    manaRegen: {
      flat: 8,
      perLevel: 0.8,
    },
    armor: {
      flat: 21,
      perLevel: 4.5,
    },
    magicResistance: {
      flat: 30,
      perLevel: 1.3,
    },
    attackDamage: {
      flat: 51,
      perLevel: 3.2,
    },
    movespeed: {
      flat: 325,
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
      flat: 0.658,
      perLevel: 1.68,
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
      flat: 600,
    },
  },
  positions: [
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
    control: 3,
    mobility: 1,
    utility: 2,
    abilityReliance: 100,
    difficulty: 3,
  },
  abilities: {
    P: [
      {
        name: 'Rebirth',
        icon: 'https://cdn.communitydragon.org/latest/champion/Anivia/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Periodically, upon taking fatal damage, Anivia enters resurrection for 6 seconds and restores all of her health.</p>',
          },
          {
            description: 'While under resurrection, Anivia is unable to act and gains -40 - 20 (based on level) bonus armor and bonus magic resistance.',
          },
          {
            description: 'If Anivia remains alive by the end of the duration, she is revived with her current health.',
          },
        ],
        targeting: 'Passive',
        affects: 'Self',
        notes: 'Triggering Rebirth will break  tethers on Anivia.\n Chronoshift and  Guardian Angel will take priority over Rebirth.\nIf Rebirth triggers while Anivia is channeling  Teleport, her channel won\'t be interrupted.\nAll other  channels will be interrupted upon triggering Rebirth.\nThe following refers for interactions while Anivia is resurrecting:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll summoner spells are disabled\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath',
        blurb: 'Innate: Periodically, upon  dying,  Anivia will instead revert into an egg. If the egg can survive for a few seconds, she is gloriously  reborn.',
      },
    ],
    Q: [
      {
        name: 'Flash Frost',
        icon: 'https://cdn.communitydragon.org/latest/champion/Anivia/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Anivia launches a chunk of ice in the target direction that deals magic damage to enemies hit and slows them by 20% - 40% (based on Glacial Storm\'s Rank) for 3 seconds.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
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
            description: 'Flash Frost can be recast while the ice is in flight after its cast time, and does so automatically at maximum range.',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Anivia shatters the ice, dealing magic damage to nearby enemies and stunning them for a duration, as well as refreshing the slow.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
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
                      45,
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
                      110,
                      165,
                      220,
                      275,
                      330,
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
                attribute: 'Stun Duration',
                modifiers: [
                  {
                    values: [
                      1.1,
                      1.2,
                      1.3,
                      1.4,
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
        ],
        cost: [
          80,
          85,
          90,
          95,
          100,
        ],
        cooldown: [
          12,
          11,
          10,
          9,
          8,
        ],
        targeting: 'Direction / Auto',
        affects: 'Enemies',
        spellshieldable: 'Special',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'spellaoe',
        projectile: 'TRUE',
        notes: 'The initial cast and the manual recast count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nIf the ability is not manually recasted, the secondary effect will trigger without being considered as an ability activation.\nFlash Frost can only proc  Conqueror once even if it damages the same target twice.\nFlash Frost will fire from wherever Anivia was at the start of the cast time.\n Spell shield can only prevent either the collision hit or recast from affecting the target.',
        blurb: 'Active:  Anivia launches a chunk of ice that deals magic damage and  slows enemies hit.',
        speed: '950',
        width: '220',
        castTime: '0.25',
        effectRadius: '225',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Crystallize',
        icon: 'https://cdn.communitydragon.org/latest/champion/Anivia/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Anivia summons a wall of ice at the target location perpendicular to her facing, knocking all units away from it, though not through terrain. The wall lingers as impassable terrain for 5 seconds.</p>',
            leveling: [
              {
                attribute: 'Width',
                modifiers: [
                  {
                    values: [
                      600,
                      700,
                      800,
                      900,
                      1000,
                    ],
                    units: [
                      ' units',
                    ],
                  },
                ],
              },
              {
                attribute: 'Number of ice segments',
                modifiers: [
                  {
                    values: [
                      4,
                      5,
                      6,
                      7,
                      8,
                    ],
                    units: [
                      ' chunks of ice',
                    ],
                  },
                ],
              },
              {
                attribute: 'Distance between outermost segments',
                modifiers: [
                  {
                    values: [
                      400,
                      500,
                      600,
                      700,
                      800,
                    ],
                    units: [
                      ' units',
                    ],
                  },
                ],
              },
              {
                attribute: 'Distance between individual segments',
                modifiers: [
                  {
                    values: [
                      133.33,
                      125,
                      120,
                      116.67,
                      114.29,
                    ],
                    units: [
                      ' units',
                    ],
                  },
                ],
              },
            ],
          },
        ],
        cost: [
          70,
        ],
        cooldown: [
          17,
        ],
        targeting: 'Location',
        affects: 'Enemies',
        spellshieldable: 'false',
        resource: 'Mana',
        notes: 'Crystallize\'s displacement triggers in-combat effects by dealing 0  proc  true damage, such as drawing turret aggro,  Sudden Impact and applying  Elixir of Sorcery.\nIndividual ice chunks have both 100 units  pathing radius and  gameplay radius.\n Champions are knocked 120 units to either side of a wall segment, non-champions 250 units.\nPENDING FOR TEST: Knockback speed?\nPlayer-generated terrain such as Crystallize does not block  sight.',
        blurb: 'Active:  Anivia  erects a wall of ice that lingers for a few seconds, blocking movement.',
        castTime: '0.25',
        targetRange: '1000 / 100',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Frostbite',
        icon: 'https://cdn.communitydragon.org/latest/champion/Anivia/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Enemies hit by Flash Frost or a fully formed Glacial Storm become Chilled for 3 seconds, refreshing on subsequent hits.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Anivia blasts a freezing wind at the target enemy that deals magic damage, doubled if they were Chilled.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
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
                      55,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Enhanced Damage',
                modifiers: [
                  {
                    values: [
                      100,
                      150,
                      200,
                      250,
                      300,
                    ],
                  },
                  {
                    values: [
                      110,
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
        ],
        cooldown: [
          4,
        ],
        targeting: 'Unit',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'spell',
        projectile: 'TRUE',
        notes: 'The damage of Frostbite is calculated once it hits. If the target\'s mark from being hit by  Flash Frost or a fully formed  Glacial Storm wears off while the projectile is traveling, the damage is not doubled.\nFrostbite has a different sound effect when it hits a target for double damage.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).',
        blurb: 'Active:  Anivia blasts a freezing wind at the target enemy that deals magic damage.',
        speed: '1600',
        castTime: '0.25',
        targetRange: '600',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'Glacial Storm',
        icon: 'https://cdn.communitydragon.org/latest/champion/Anivia/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Anivia calls forth a driving rain of ice and hail at the target location, dealing magic damage every 0.5 seconds to enemies within and slowing them for 1 second, refreshing every 0.5 seconds while they remain inside.</p>',
            leveling: [
              {
                attribute: 'Magic Damage per Tick',
                modifiers: [
                  {
                    values: [
                      15,
                      22.5,
                      30,
                    ],
                  },
                  {
                    values: [
                      6.25,
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
                      30,
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
            description: 'The blizzard increases in size over 1.5 seconds. At maximum size, Glacial Storm is empowered to deal 300% damage and increase the effectiveness of its slow by 50%, which also instead lasts 1.5 seconds and refreshes every 0.25 seconds.',
            leveling: [
              {
                attribute: 'Empowered Damage per Tick',
                modifiers: [
                  {
                    values: [
                      45,
                      67.5,
                      90,
                    ],
                  },
                  {
                    values: [
                      18.75,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Empowered Slow',
                modifiers: [
                  {
                    values: [
                      30,
                      45,
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
            description: 'Glacial Storm can be recast after 1 second, and does so automatically if Anivia is no longer in range or unable to pay the mana cost, or becomes affected by any form of interrupting crowd control.',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Anivia ends Glacial Storm, dealing one last tick of damage.</p>',
          },
        ],
        cost: [
          60,
        ],
        cooldown: [
          4,
          3,
          2,
        ],
        targeting: 'Location / Auto',
        affects: 'Enemies',
        spellshieldable: 'False',
        resource: 'Other',
        damageType: 'Magic damage',
        spellEffects: 'aoedot',
        notes: 'Toggle abilities do not count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nGlacial Storm\'s slow leaves a trail that is visible even if the target is stealthed.\nGlacial Storm deals 3 half ticks at 200 / 267 / 333 radius for a total of 1.5 normal damage ticks before it starts dealing empowered damage at 400 radius.\n Stasis via  Zhonya\'s Hourglass doesn\'t interrupt Glacial Storm.\n Tahm Kench\'s  Devour does interrupt (allied and enemy) Glacial Storm.',
        blurb: 'Toggle:  Anivia summons a driving rain of ice and hail at the target location that continually deals  magic damage and  slows enemies within.',
        tetherRadius: '1000',
        castTime: 'none',
        effectRadius: '200 : 400 (based on time active)',
        targetRange: '750',
        maxCharges: -1,
      },
    ],
  },
  lore: 'Anivia is a benevolent winged spirit who endures endless cycles of life, death, and rebirth to protect the Freljord. A demigod born of unforgiving ice and bitter winds, she wields those elemental powers to thwart any who dare disturb her homeland. Anivia guides and protects the tribes of the harsh north, who revere her as a symbol of hope, and a portent of great change. She fights with every ounce of her being, knowing that through her sacrifice, her memory will endure, and she will be reborn into a new tomorrow.',
}
export default champion