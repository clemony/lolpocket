// Updated Patch 25.11 - 06/16/2025 01:01:45 PM CDT

const champion: Champion = {
  id: 221,
  key: 'Zeri',
  name: 'Zeri',
  title: 'The Spark of Zaun',
  resource: 'Mana',
  attackType: 'Ranged',
  stats: {
    health: {
      flat: 600,
      perLevel: 110,
    },
    healthRegen: {
      flat: 3.25,
      perLevel: 0.7,
    },
    mana: {
      flat: 250,
      perLevel: 45,
    },
    manaRegen: {
      flat: 6,
      perLevel: 0.8,
    },
    armor: {
      flat: 24,
      perLevel: 4.2,
    },
    magicResistance: {
      flat: 30,
      perLevel: 1.3,
    },
    attackDamage: {
      flat: 56,
      perLevel: 2,
    },
    movespeed: {
      flat: 330,
    },
    acquisitionRadius: {
      flat: 800,
    },
    selectionRadius: {
      flat: 100,
    },
    pathingRadius: {
      flat: 40,
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
      perLevel: 2,
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
      flat: -0.144,
    },
    attackRange: {
      flat: 500,
    },
  },
  positions: [
    'Bottom',
  ],
  roles: [
    'Marksman',
  ],
  attributeRatings: {
    damage: 2,
    toughness: 1,
    control: 2,
    mobility: 3,
    utility: 0,
    abilityReliance: 35,
    difficulty: 2,
  },
  abilities: {
    P: [
      {
        name: 'Living Battery',
        icon: 'https://cdn.communitydragon.org/latest/champion/Zeri/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Zeri generates 1 charge for every 40 units she travels by any means and 10 charge every time she casts Burst Fire, up to a maximum of 100 charge. Her basic attacks consume charge to deal modified damage.Zeri gains maximum charge when the game starts and upon respawning.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Basic Attack:</span> Zeri zaps the target, applying spell effects as spell damage, and triggering on-cast effects. This cannot critically strike nor trigger on-hit and on-attack effects.</p>',
          },
          {
            description: 'At full charge, Zeri\'s next attack is empowered to consume all charge to deal 75 - 160 (based on level) (+ 110% AP) (+ 1% - 11% (based on level) of target\'s maximum health) magic damage. The damage based on the target\'s health ratio is capped at 300 against monsters.',
          },
          {
            description: 'While not at full charge, Zeri\'s attacks deal 10 - 25 (based on level) (+ 3% AP) magic damage, and execute targets below 60 - 150 (based on level) (+ 18% AP) health. Each attack consumes 10 charge if she has enough already.',
          },
        ],
        targeting: 'Unit',
        affects: 'Self',
        spellshieldable: 'special',
        damageType: 'Magic damage',
        spellEffects: 'Spell',
        projectile: 'FALSE',
        notes: 'Charged attacks only deal the base damage to structures.\nUncharged attacks do not execute enemies that are  shielded or  invulnerable while below the health threshold.\n Spell shield will only block a fully charged attack. Uncharged attacks are not blocked.\nThe attack\'s range is not increased from attack range increases ( Rapid Firecannon). Instead,  Burst Fire\'s reach is.\nUncharged and charged attacks trigger  Tear of the Goddess\' Mana Charge.\nThe empowered attack will trigger but not be consumed against wards.',
        blurb: 'Innate:  Zeri generates charge when she moves and casts  Burst Fire. Her next basic attack will consume charge to deal magic damage.',
        speed: 'N/A',
      },
    ],
    Q: [
      {
        name: 'Burst Fire',
        icon: 'https://cdn.communitydragon.org/latest/champion/Zeri/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Zeri fires a burst of 7 rounds in the target direction that each deal physical damage to the first enemy hit.</p>',
            leveling: [
              {
                attribute: 'Total Physical Damage',
                modifiers: [
                  {
                    values: [
                      15,
                      17,
                      19,
                      21,
                      23,
                    ],
                  },
                  {
                    values: [
                      104,
                      108,
                      112,
                      116,
                      120,
                    ],
                    units: [
                      '% AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'Physical Damage per Hit',
                modifiers: [
                  {
                    values: [
                      2.14,
                      2.43,
                      2.71,
                      3,
                      3.29,
                    ],
                  },
                  {
                    values: [
                      14.86,
                      15.43,
                      16,
                      16.57,
                      17.14,
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
            description: '<p class="ability-effect"><span class="ability-header">Burst Fire\'s projectile is treated as a basic attack:</span> it hits any enemy unit a typical basic attack can; deals basic damage; can critically strike for (175% + 40%) damage; applies on-hit effects to the first enemy hit; and triggers on-attack effects once. Burst Fire\'s cooldown and cast time are reduced with attack speed, with the maximum of 1.5 attacks per second. 70% of attack speed in excess of the cap is converted into bonus attack damage.</p>',
          },
        ],
        cost: [
          0,
        ],
        cooldown: [
          0,
        ],
        targeting: 'Direction',
        affects: 'Self, Enemies',
        spellshieldable: 'false',
        damageType: 'Physical damage',
        spellEffects: 'basic',
        projectile: 'TRUE',
        notes: 'Burst Fire is automatically learned with her first skill point upon spawning.\nAny of Burst Fire\'s rounds hitting a champion will draw minion aggro, regardless of whether or not other targets were hit first by Burst Fire\'s rounds.\nA lightning chain from a  Lightning Crash empowered Burst Fire will not draw minion aggro.\nBurst Fire does not trigger  Tear of the Goddess\' Mana Charge.\nBurst Fire\'s cooldown is not reduced by  Navori Flickerblade\'s Transcendence.\n Amumu\'s  Tantrum\'s,  Fizz\'s  Nimble Fighter\'s, and  Leona\'s  Eclipse\'s flat damage reduction apply to each of the 7 instances of damage from Burst Fire.\n Warden\'s Mail\'s flat damage reduction and cap only apply to the first instance of damage.\n Guardian\'s Horn\'s flat damage reduction only applies to the first instance of damage, but handles it as damage-over-time (reduced to 25% effectiveness).\nBurst Fire still counts as an ability activation for the purposes of on-cast effects such as triggering  Force Pulse\'s passive.\nIt does not count as an ability activation for  Spellblade.\nBurst Fire can hit all enemy units that a basic attack would be able to target. This does include jungle plants, structures, and wards.\nWards will only be hit once by Burst Fire. Stealthed wards and traps will not be hit.\nChampion-summoned units behave differently depending on the unit.\nGangplank\'s  Powder Keg and Yorick’s  Dark Procession are hit only once by Burst Fire, and any subsequent rounds not empowered by  Spark Surge will stop upon reaching the same object.\nKalista’s  Sentinel is hit only once by Burst Fire, but any subsequent rounds will continue to travel through the Sentinel.\nIf Burst Fire hits an enemy while Zeri is not visible to enemies, the area around her (400 units) will be revealed for 4.5 seconds.\nBurst Fire rolls  critical strike for all rounds as well as the additional physical damage dealt when Zeri is  Overcharged.\nBurst Fire is parried by  dodge and  block.\n Blind causes Burst Fire to cast in a random direction. The rounds will still deal damage to enemies hit.\nBurst Fire\'s rounds are each fired in the target direction from where Zeri is at the time.\nOnly attack speed granted by being  Overcharged can exceed the cap of 1.5.\n Hail of Blades does not allow Zeri to exceed her attack speed cap.\nItems and runes that trigger off of attacking [eg  Fleet Footwork,  Kraken Slayer] will only trigger if Burst Fire hits a unit.\nIf Zeri would get full Energized stacks from a Burst Fire, the rest of the rounds will trigger Energized.\nBurst Fire\'s cast-indicator does not show  range increases; modified range VFX are still visible around the champion model.\nBurst Fire can apply the effect of  Horizon Focus when the enemy hit is within the last 50 units of this ability.(note)\nBurst Fire uses a modified icon when empowered by  Spark Surge () and  Lightning Crash () as well as both ().\nDestroying a ward that is targetable but not visible to Zeri\'s team (e.g. a  Control Ward in Fog of War) via Burst Fire uniquely allows her to remove its accompanying ward timer (if it exists) without seeing the ward being destroyed.',
        blurb: 'Active:  Zeri fires a burst of 7 rounds in the target direction that each deal physical damage to the first enemy hit. This is treated as a basic attack, can  critically strike, and applies  on-hit and on-attack effects to the first enemy hit.',
        speed: '2600 / 3400',
        width: '80',
        angle: '5° / 2°',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Ultrashock Laser',
        icon: 'https://cdn.communitydragon.org/latest/champion/Zeri/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Zeri fires an electric pulse in the target direction that deals physical damage to the first enemy hit and slows them for 2 seconds.If the pulse hits terrain, it transforms into a laser in a line that grants sight of the area for 1.75 seconds and fires after 0.85 seconds, applying the same effects to enemies hit and critically striking for (175% + 40%) damage against champions and monsters.</p>',
            leveling: [
              {
                attribute: 'Physical Damage',
                modifiers: [
                  {
                    values: [
                      30,
                      70,
                      110,
                      150,
                      190,
                    ],
                  },
                  {
                    values: [
                      130,
                    ],
                    units: [
                      '% AD',
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
        ],
        cost: [
          50,
          60,
          70,
          80,
          90,
        ],
        cooldown: [
          12,
          11,
          10,
          9,
          8,
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'true',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'special',
        projectile: 'SPECIAL',
        notes: 'Applies  spell damage for the pulse and  area damage for the laser.\nThe pulse missile is blocked by  projectile-interception effects but not the laser.\nUltrashock Laser interacts with player-generated terrain.\nThis ability will cast from wherever the caster is at the start of the cast time.',
        blurb: 'Active:  Zeri fires an electric pulse in the target direction that deals physical damage to the first enemy hit and  slows them for a short duration.',
        speed: '2500',
        width: '80 /  200',
        castTime: '0.55 : 0.3 (based on bonus attack speed)',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Spark Surge',
        icon: 'https://cdn.communitydragon.org/latest/champion/Zeri/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Zeri dashes in the target direction. She will dash farther across terrain if Spark Surge was cast within 50 units of any, gaining unobstructed vision of the surrounding 800 units and revealing herself while there are enemy champions within 1500 units of her.</p>',
          },
          {
            description: 'Afterwards, she gains Lightning Rounds for 5 seconds, empowering Burst Fire to deal bonus magic damage to the first enemy hit, increased by 0% - 85% (based on critical strike chance), and pierce through enemies, though dealing modified damage after the first and not applying attack effects nor life steal to secondary targets. This damage is affected by critical strike modifiers.',
            leveling: [
              {
                attribute: 'Burst Fire Bonus Magic Damage',
                modifiers: [
                  {
                    values: [
                      20,
                      22,
                      24,
                      26,
                      28,
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
                attribute: 'Burst Fire Modified Secondary Damage',
                modifiers: [
                  {
                    values: [
                      80,
                      85,
                      90,
                      95,
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
            description: 'Spark Surge\'s current cooldown is reduced by 0.5 seconds for every champion Zeri hits with charged basic attacks or abilities, increased to 1.5 seconds if she does so with a cast of Burst Fire or Ultrashock Laser that critically strikes.',
          },
          {
            description: 'Spark Surge resets Zeri\'s basic attack timer and Burst Fire\'s cooldown. Ultrashock Laser and Lightning Crash can be cast during the dash.',
          },
        ],
        cost: [
          90,
          85,
          80,
          75,
          70,
        ],
        cooldown: [
          22,
          21,
          20,
          19,
          18,
        ],
        targeting: 'Direction',
        affects: 'Self',
        resource: 'Mana',
        notes: 'Spark Surge\'s extended dash travels based on the thickness of the terrain, up to a maximum distance.\nThe following table refers for interactions while Zeri is dashing:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Burst Fire is disabled.  Ultrashock Laser and  Lightning Crash are usable.\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nAll the other item-actives are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Hextech Rocketbelt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Teleport  Recall\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Flash\n\n\nInterrupted by\n\nDeath',
        blurb: 'Active:  Zeri  dashes in the target direction, she will dash across any terrain she hits. Afterwards, she gains Lightning Rounds for a short time.',
        speed: '600 + 100% movement speed',
        castTime: 'None',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'Lightning Crash',
        icon: 'https://cdn.communitydragon.org/latest/champion/Zeri/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Zeri discharges an electric nova that deals magic damage to nearby enemies. If this hits at least one enemy champion, she enters Overcharged for 5 seconds. Hitting an enemy champion with an ability or charged attack will extend the duration by 1.5 seconds, up to its original duration.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      200,
                      300,
                      400,
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
          {
            description: '<p class="ability-effect"><span class="ability-header">Overcharged:</span> Zeri gains 10% bonus movement speed and 30% bonus attack speed that is allowed to exceed her attack speed cap by the amount gained. Burst Fire is empowered to have a 20% shorter cast time and instead fire 3 rounds that travel with increased speed and chain to the nearest visible enemy within 650 units of the target, up to 4 subsequent targets, to deal 40% AD physical damage. This damage is affected by critical strike modifiers.</p>',
          },
          {
            description: 'During Overcharged, Zeri can generate stacks of Hypercharged from enemy champions that last 1.5 seconds. She generates 1 stack for each one she hits with an ability or charged attack, increased to 3 on abilities that critically strike. Subsequent hits refresh the duration of Hypercharged. Burst Fire grants stacks only against the first target hit.',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Hypercharged:</span> For each stack, Zeri gains 0.5% bonus movement speed.</p>',
          },
        ],
        cost: [
          100,
        ],
        cooldown: [
          80,
          75,
          70,
        ],
        targeting: 'Auto',
        affects: 'Self, Enemies',
        spellshieldable: 'special',
        resource: 'Mana',
        damageType: 'Mixed damage',
        spellEffects: 'special',
        projectile: 'FALSE',
        notes: 'Zeri can move while casting Lightning Crash, and it does not interrupt her previous orders.\nZeri can stack Overcharge up to 100,000 times.\nApplies  area damage for the nova and  proc damage for the chain lightning.\n Spell shield blocks Lightning Crash\'s initial nova but does not prevent Zeri from becoming Overcharged.\nIt does not block  Burst Fire\'s electricity chain.\n Clones count for granting Overcharge.\nLightning Crash\'s and  Spark Surge\'s empowerments to  Burst Fire can combine together.\n Burst Fire electricity chain will not chain across structures.\nIf Zeri enters  resurrection during Overcharge, she will lose all stacks of the effect but Overcharge will not end prematurely.(note)\nShe cannot gain stacks again after reviving while the buff is active.(bug)\nThis ability will cast from wherever the caster is at the end of the cast time.',
        blurb: 'Active:  Zeri explodes to deal magic damage to nearby enemies. If this hits at least one enemy champion, she enters Overcharged for a few seconds. Damaging an enemy will extend Overcharged.',
        castTime: '0.25',
        effectRadius: '825',
        maxCharges: -1,
      },
    ],
  },
  lore: 'A headstrong, spirited young woman from Zaun\'s working-class, Zeri channels her electric magic to charge herself and her custom-crafted gun. Her volatile power mirrors her emotions, its sparks reflecting her lightning-fast approach to life. Deeply compassionate toward others, Zeri carries the love of her family and her home into every fight. Though her eagerness to help can sometimes backfire, Zeri believes one truth to be certain: stand up for your community, and it will stand up with you.',
}
export default champion