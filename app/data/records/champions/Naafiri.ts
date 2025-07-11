// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion = {
  id: 950,
  key: 'Naafiri',
  name: 'Naafiri',
  title: 'the Hound of a Hundred Bites',
  resource: 'Mana',
  attackType: 'Melee',
  stats: {
    health: {
      flat: 610,
      perLevel: 105,
    },
    healthRegen: {
      flat: 7.5,
      perLevel: 0.7,
    },
    mana: {
      flat: 400,
      perLevel: 55,
    },
    manaRegen: {
      flat: 7.5,
      perLevel: 1,
    },
    armor: {
      flat: 28,
      perLevel: 4.2,
    },
    magicResistance: {
      flat: 32,
      perLevel: 2.05,
    },
    attackDamage: {
      flat: 55,
      perLevel: 2,
    },
    movespeed: {
      flat: 340,
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
      flat: 0.663,
      perLevel: 2.1,
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
      flat: -0.125,
    },
    attackRange: {
      flat: 125,
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
    control: 1,
    mobility: 3,
    utility: 1,
    abilityReliance: 70,
    difficulty: 1,
  },
  abilities: {
    P: [
      {
        name: 'We Are More',
        icon: 'https://cdn.communitydragon.org/latest/champion/Naafiri/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Periodically, Naafiri summons a Packmate that fights alongside her. She may have up to 2 / 3 / 4 / 5 (based on level) Packmates at a time. Naafiri summons the maximum number of Packmates when the game starts and upon respawning.</p>',
          },
          {
            description: 'Hitting champions or large monsters with abilities reduces the cooldown by 4 seconds. Killing enemies reduces it by 1 second.',
          },
          {
            description: 'See Pets for full details on Packmates.',
          },
        ],
        targeting: 'Passive',
        affects: 'Self, Enemies',
        notes: 'Packmates do not count as abilities for triggering the cooldown reduction.\nOnly the initial hit of  Darkin Daggers counts for reducing We Are More\'s cooldown; the damage over time will not trigger the cooldown reduction.\nBoth hits of  Eviscerate will trigger the cooldown reduction.',
        blurb: 'Innate:  Naafiri periodically summons a Packmate that attacks the target of her attacks and abilities.',
      },
    ],
    Q: [
      {
        name: 'Darkin Daggers',
        icon: 'https://cdn.communitydragon.org/latest/champion/Naafiri/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Naafiri hurls a dagger in the target direction that deals physical damage to enemies hit and inflicts them with a bleed that deals bonus physical damage every 0.5 seconds for 5 seconds. The bleed executes minions and non-epic monsters if they would be damaged below 30 - 70 (based on level) health. Darkin Daggers can be recast after 0.5 seconds and within 4 seconds at no additional cost.</p>',
            leveling: [
              {
                attribute: 'Initial Physical Damage',
                modifiers: [
                  {
                    values: [
                      35,
                      40,
                      45,
                      50,
                      55,
                    ],
                  },
                  {
                    values: [
                      20,
                    ],
                    units: [
                      '% bonus AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'Bleed Physical Damage per Tick',
                modifiers: [
                  {
                    values: [
                      3.5,
                      6,
                      8.5,
                      11,
                      13.5,
                    ],
                  },
                  {
                    values: [
                      8,
                    ],
                    units: [
                      '% bonus AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'Total Bleed Physical Damage',
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
                      80,
                    ],
                    units: [
                      '% bonus AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'Total Physical Damage',
                modifiers: [
                  {
                    values: [
                      70,
                      100,
                      130,
                      160,
                      190,
                    ],
                  },
                  {
                    values: [
                      100,
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
            description: 'If the dagger hits a target that is already bleeding, they are instead dealt the remaining bleed damage plus additional bonus physical damage, with the base bonus damage increased by 0% - 100% (based on target\'s missing health) and the scaling for the bonus damage increased by 0% - 250% (based on target\'s missing health). If that target is also a champion or large monster, Naafiri heals herself.',
            leveling: [
              {
                attribute: 'Minimum Bonus Physical Damage',
                modifiers: [
                  {
                    values: [
                      30,
                      45,
                      60,
                      75,
                      90,
                    ],
                  },
                  {
                    values: [
                      40,
                    ],
                    units: [
                      '% bonus AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'Maximum Bonus Physical Damage',
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
                      140,
                    ],
                    units: [
                      '% bonus AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'Minimum Total Physical Damage',
                modifiers: [
                  {
                    values: [
                      100,
                      145,
                      190,
                      235,
                      280,
                    ],
                  },
                  {
                    values: [
                      140,
                    ],
                    units: [
                      '% bonus AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'Maximum Total Physical Damage',
                modifiers: [
                  {
                    values: [
                      130,
                      190,
                      250,
                      310,
                      370,
                    ],
                  },
                  {
                    values: [
                      240,
                    ],
                    units: [
                      '% bonus AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'Heal',
                modifiers: [
                  {
                    values: [
                      45,
                      60,
                      75,
                      90,
                      105,
                    ],
                  },
                  {
                    values: [
                      40,
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
            description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Naafiri mimics the first cast\'s effects.</p>',
          },
        ],
        cost: [
          55,
          60,
          65,
          70,
          75,
        ],
        cooldown: [
          9,
          8.5,
          8,
          7.5,
          7,
        ],
        targeting: 'Direction',
        affects: 'Self, Enemies',
        spellshieldable: 'true',
        resource: 'Mana',
        damageType: 'Physical damage',
        spellEffects: 'Area of effect',
        projectile: 'TRUE',
        notes: 'This ability will cast from wherever the caster is at the end of the cast time.\nDarkin Daggers calculates its additional damage based on missing health before applying the remaining bleed damage.\nDarkin Daggers\'  execute against minions considers both the damage of the initial hit of the dagger and any bleed tick for putting the target under the threshold.',
        blurb: 'Active:  Naafiri hurls a dagger that deals physical damage to enemies hit and inflicts a bleed that deals bonus physical damage over a short time. Darkin Daggers can be recast at no additional cost.',
        speed: '1700',
        width: '50',
        castTime: '0.25',
        targetRange: '900',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'The Call of the Pack',
        icon: 'https://cdn.communitydragon.org/latest/champion/Naafiri/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Naafiri goes on the hunt for the next 5 seconds, becoming untargetable for the first 1 second and vanishing all of her active Packmates in the first 0.9 seconds. Her active Packmates will reappear near her after their vanish.</p>',
          },
          {
            description: 'After 1.25 seconds into the hunt, Naafiri summons 2 additional Packmates that last for the remaining duration and can exceed We Are More\'s summon cap.',
          },
          {
            description: 'While on the hunt, Naafiri gains 20% AD bonus attack damage and grants herself and all Packmates bonus movement speed.',
            leveling: [
              {
                attribute: 'Bonus Movement Speed',
                modifiers: [
                  {
                    values: [
                      20,
                      22.5,
                      25,
                      27.5,
                      30,
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
            description: 'Casting Hounds\' Pursuit extends The Call of the Pack\'s hunt duration by 1.75 seconds, up to its original duration.',
          },
          {
            description: 'Naafiri can move during The Call of the Pack\'s cast time.',
          },
        ],
        cost: [
          60,
        ],
        cooldown: [
          26,
          24,
          22,
          20,
          18,
        ],
        targeting: 'Auto',
        affects: 'Self',
        resource: 'Mana',
        notes: 'While The Call of the Pack is active, it increases  We Are More\'s summon cap to 4 / 5 / 6 / 7 (based on level).\nThe order of additional Packmates that despawn is predetermined, most likely their internal spawn IDs. The ability does not consider which Packmates are the closest or healthiest.\nThis ability will cast from wherever the caster is at the end of the cast time.',
        blurb: 'Active:  Naafiri goes on the hunt for a period, briefly becoming  untargetable and  vanishing her  Packmates, gaining  bonus attack damage and granting herself and her Packmates  bonus move speed. She will also summon extra Packmates that last for the hunt\'s duration.',
        castTime: '0.75',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Eviscerate',
        icon: 'https://cdn.communitydragon.org/latest/champion/Naafiri/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Naafiri dashes in the target direction and deals physical damage to enemies she passes through. Upon arrival, she explodes in a flurry of blades to deal physical damage to nearby enemies.</p>',
            leveling: [
              {
                attribute: 'Dash Physical Damage',
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
                      40,
                    ],
                    units: [
                      '% bonus AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'Flurry Physical Damage',
                modifiers: [
                  {
                    values: [
                      60,
                      85,
                      110,
                      135,
                      160,
                    ],
                  },
                  {
                    values: [
                      80,
                    ],
                    units: [
                      '% bonus AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'Total Physical Damage',
                modifiers: [
                  {
                    values: [
                      75,
                      110,
                      145,
                      180,
                      215,
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
            description: 'Packmates vanish during the dash and reappear near Naafiri on her arrival. They are also healed to full health upon their reappearance.',
          },
        ],
        cost: [
          35,
        ],
        cooldown: [
          11,
          10,
          9,
          8,
          7,
        ],
        targeting: 'Location',
        affects: 'Self, Enemies',
        spellshieldable: 'true',
        resource: 'Mana',
        damageType: 'Physical damage',
        spellEffects: 'spellaoe',
        notes: 'Packmates will not be affected by Eviscerate while under the effect of  Hounds\' Pursuit.',
        blurb: 'Active:  Naafiri  dashes to deal physical damage to enemies she passes through. Upon arrival, she explodes in a flurry of blades to deal physical damage to nearby enemies.',
        collisionRadius: '50',
        speed: '900',
        castTime: 'none',
        effectRadius: '230',
        targetRange: '250 : 450 / 650',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'Hounds\' Pursuit',
        icon: 'https://cdn.communitydragon.org/latest/champion/Naafiri/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Naafiri and her Packmates channel for 0.75 seconds to single out the target enemy champion, revealing them in the duration. Upon completion of the channel, they dash to the target; upon arrival Naafiri deals physical damage and slows the target by 99% for 0.25 seconds, whereas each Packmate deals 10% of that damage. Packmates become untargetable during their channel and dash.</p>',
            leveling: [
              {
                attribute: 'Physical Damage',
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
                      120,
                    ],
                    units: [
                      '% bonus AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'Physical Damage per Packmate',
                modifiers: [
                  {
                    values: [
                      15,
                      25,
                      35,
                    ],
                  },
                  {
                    values: [
                      12,
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
            description: 'If Naafiri scores a champion takedown within 7 seconds of cast, she triggers a pulse that grants sight of the surrounding area for 1 second and reveals enemy champions within for 4 seconds. She can also recast Hounds\' Pursuit once from triggering this effect within 12 seconds at no cost.',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Naafiri immediately grants herself a shield for 3 seconds before mimicking the first cast\'s effects.</p>',
            leveling: [
              {
                attribute: 'Shield',
                modifiers: [
                  {
                    values: [
                      100,
                      150,
                      200,
                    ],
                  },
                  {
                    values: [
                      150,
                    ],
                    units: [
                      '% bonus AD',
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
          95,
          80,
        ],
        targeting: 'Unit',
        affects: 'Self, Enemies',
        spellshieldable: 'special',
        resource: 'Mana',
        damageType: 'Physical damage',
        spellEffects: 'spell',
        notes: 'Hounds\' Pursuit\'s theoretical total physical damage from  Packmates only, assuming Naafiri has the maximum number of them active and Hounds\' Pursuit is always ranked at the earliest levels permitted (ranks 1 / 2 / 3 at levels 6 / 11 / 16):\nLevels 6:8: 30 (+ 24% bonus AD) /  60 (+ 48% bonus AD).\nLevels 9:10: 45 (+ 36% bonus AD) /  75 (+ 60% bonus AD).\nLevel 11: 75 (+ 36% bonus AD) /  125 (+ 60% bonus AD).\nLevels 12:14: 100 (+ 48% bonus AD) /  150 (+ 72% bonus AD).\nLevel 15: 125 (+ 60% bonus AD) /  175 (+ 84% bonus AD).\nLevels 16:18: 175 (+ 60% bonus AD) /  245 (+ 84% bonus AD).\nNaafiri will count as gaining assist credit of the enemy champion she targeted with Hounds\' Pursuit.\n Spell shield will block Naafiri\'s collision damage but cannot prevent collision damage from Packmates.\nNaafiri will track the target if they change locations, up to a maximum distance.\nShe will dash to the target\'s previous location if they move too far away during the dash.\nNaafiri will be ordered to basic attack the target at the end of the dash.\nNaafiri will windup a basic attack while dashing.(note)\nPackmates hitting the same target as Naafiri will count as dealing "additional" damage.\nThe target is  revealed for another 1.5 seconds after the channel completes.\nThe following table refers for interactions while Naafiri is  channeling:\nIf Naafiri\'s channel is interrupted, the Packmates\'  channels will be canceled as well.\nThe channel is cancelled if the target dies or moves too far away, but not if they become  untargetable.\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath Grounding effects Immobilizing effects Cast-inhibiting effects',
        speed: '1800',
        castTime: 'none',
        effectRadius: '2100',
        targetRange: '900',
        maxCharges: -1,
      },
    ],
  },
  lore: 'Across the sands of Shurima, a chorus of howls rings out. It is the call of the dune hounds, voracious predators who form packs and compete for the right to hunt in these barren lands. Among them, one pack stands above all, for they are driven not only by canine instincts, but by the ancient power of the Darkin.',
}
export default champion