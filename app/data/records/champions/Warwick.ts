// Updated Patch 25.11 - 06/16/2025 01:01:43 PM CDT

const champion: Champion = {
  id: 19,
  key: 'Warwick',
  name: 'Warwick',
  title: 'the Uncaged Wrath of Zaun',
  fullName: 'Vander',
  resource: 'Mana',
  attackType: 'Melee',
  stats: {
    health: {
      flat: 620,
      perLevel: 99,
    },
    healthRegen: {
      flat: 4,
      perLevel: 0.75,
    },
    mana: {
      flat: 280,
      perLevel: 35,
    },
    manaRegen: {
      flat: 7.45,
      perLevel: 0.6,
    },
    armor: {
      flat: 33,
      perLevel: 4.4,
    },
    magicResistance: {
      flat: 32,
      perLevel: 2.05,
    },
    attackDamage: {
      flat: 60,
      perLevel: 2.75,
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
      flat: 74.75,
    },
    criticalStrikeDamage: {
      flat: 175,
    },
    criticalStrikeDamageModifier: {
      flat: 1,
    },
    attackSpeed: {
      flat: 0.638,
      perLevel: 2.3,
    },
    attackSpeedRatio: {
      flat: 0.638,
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
    'Jungle',
    'Top',
  ],
  roles: [
    'Diver',
    'Fighter',
    'Tank',
  ],
  attributeRatings: {
    damage: 2,
    toughness: 2,
    control: 2,
    mobility: 1,
    utility: 1,
    abilityReliance: 30,
    difficulty: 1,
  },
  abilities: {
    P: [
      {
        name: 'Eternal Hunger',
        icon: 'https://cdn.communitydragon.org/latest/champion/Warwick/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Warwick deals 12 - 46 (based on level) (+ 15% bonus AD) (+ 10% AP) bonus magic damage on-hit.</p>\nWhile below 50% maximum health, Warwick also heals for 100% of the post-mitigation damage dealt by Eternal Hunger, increased to 250% while below 25% maximum health.',
          },
        ],
        targeting: 'Passive',
        affects: 'Self',
        spellshieldable: 'False',
        damageType: 'Magic damage',
        spellEffects: 'Proc',
        notes: 'Eternal Hunger does not affect:\nstructures\nwards (except  effigies),\n Gangplank\'s  kegs\n Illaoi\'s  Tentacles\nPENDING FOR TEST: Other units with modified health behaviour.',
        blurb: 'Innate:  Warwick deals bonus magic damage on-hit.',
      },
    ],
    Q: [
      {
        name: 'Jaws of the Beast',
        icon: 'https://cdn.communitydragon.org/latest/champion/Warwick/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Warwick lunges at the target enemy over 0.264 seconds and bites them, dealing magic damage, healing himself for a percentage of the post-mitigation damage dealt, applying on-hit effects and life steal at 100% effectiveness, and triggering on-attack effects. The damage based on the target\'s health ratio is capped against monsters.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      6,
                      7,
                      8,
                      9,
                      10,
                    ],
                    units: [
                      '% of target\'s maximum health',
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
                attribute: 'Maximum Monster Damage',
                modifiers: [
                  {
                    values: [
                      150,
                      165,
                      180,
                      195,
                      210,
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
                attribute: 'Healing Percentage',
                modifiers: [
                  {
                    values: [
                      25,
                      37.5,
                      50,
                      62.5,
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
            description: 'While Jaws of the Beast is active, Warwick is displacement immune and clamps his jaw on the target, following all of their movement. The ability can be held for additional effects.',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Hold:</span> Warwick performs the bite, and then begins to charge for 0.5 seconds, extended if the target is under effects of a dash or displacement. During the charge, he leaps behind the target.</p>',
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
          8,
          7.5,
          7,
          6.5,
          6,
        ],
        targeting: 'Unit',
        affects: 'Enemies, Self',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'Special',
        notes: 'Details\n\nJaws of the Beast deals  basic damage, but also triggers spell effects by also being tagged as  spell damage.\nJaws of the Beast has a 0.264 seconds cast delay, which is the amount of time required for the bite to occur from the start of the cast. This should not be confused with a cast time.\nIf the cast started beforehand, both the damage and the heal occur even after Warwick\'s  death, or during  resurrection.\nIf the target dies prior to Warwick reaching them, Jaws of the Beast refunds its cooldown when tapped. The ability can be still held, however, Warwick is no longer eligible for the refund in this case.  Editor\'s note: The refund can occasionally fail. (bug)\nThe healing is calculated only from Jaws of the Beast\'s damage, while additional effects, such as on-hits, are not.\nWhile the bite always occurs after the same delay, the time spent lunging does not, which depends on the range Jaws of the Beast was cast away from the target, up to 0.5 seconds when cast at maximum range.\nThis does not affect the  lockout timer, which is the same as the bite\'s delay.\nThe lunge always places Warwick to his attack range to the center of his target, while the dash will place him up to the edge of his attack range from the target\'s edge.\nIt has been special cased so Warwick does not follow an enemy\'s  Recall or a  Sion that revives from  Glory in Death.Editor\'s note: This may occasionally fail. Also note that as of currently, if Warwick manages to bite the target in those conditions, he will almost always end up following them to their base. (bug)\nJaws of the Beast\'s channel cannot be initiated while  grounded or  rooted. Warwick can only use the normal cast.\nThe channel will not be interrupted by either of the two effects, despite the lock-on being a movement channel.\nInteractions & Other\n\nIn order to hit the cap, the target monster needs to have at least 2500 / 2358 / 2250 / 2167 / 2100 health.\nJaws of the Beast is the only ability in the game that combines  channeling with  displacement immunity. Every  interrupting crowd control effect that is not resisted by the displacement immunity will prematurely stop the  dash.\nThe bite can still occur if cast before the crowd control application, but Warwick cannot start channeling.\nAbilities that apply both  stun and  airborne at the same time cause Warwick to ignore the displacement, but prematurely stop the channel and the dash.\nThe only exception to this is  Sion\'s  Glory in Death.\nWarwick will follow enemies that move via  attachment effects but the lock-on will not be extended.\nWhile Jaws of the Beast does not use Quick Casting by default, click-and-hold is comparable to the input required to use  Bone Skewer or  Comet Spear. It does not accept two-click input (e.g. First Cast and Recast) that abilities like  Piercing Arrow or  Decimating Smash use in Standard Casting.\nWarwick will attempt to basic attack the target after a short delay.\nThe following table refers for interactions while Warwick is  channeling:\n Flash,  Teleport,  Hexflash, and  Recall are disabled during the first 0.4 seconds of the channel.\n\n\nType\n\nCharge channel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Primal Howl is usable.  Blood Hunt and  Infinite Duress are disabled.\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects\n\nKnown Issues\n\nJaws of the Beast will also refund its  cooldown if it kills the target after being held for exactly its bite delay. (bug)\nThe ability may briefly cast on a dead target, with the ability going on cooldown.(bug)',
        castTime: 'none',
        targetRange: '365',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Blood Hunt',
        icon: 'https://cdn.communitydragon.org/latest/champion/Warwick/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Warwick gains bonus attack speed for 1.25 seconds upon damaging a target to or while they are below 50% of their maximum health with a basic attack or ability damage, refreshing with subsequent damaging basic attacks or ability damage to enemies below the threshold. If Warwick does not have the bonus attack speed already, he also gains it upon initiating an attack windup against an enemy below the threshold.</p>',
            leveling: [
              {
                attribute: 'Bonus Attack Speed',
                modifiers: [
                  {
                    values: [
                      70,
                      80,
                      90,
                      100,
                      110,
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
            description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Warwick senses all enemy champions on the map who are damaged below 50% of their maximum health by him or an allied source, marking them with Blood Hunt until they regenerate or heal above this threshold again. He sees trails leading toward them and gains bonus movement speed while following a trail. This bonus is lost for 0.5 seconds upon entering champion combat, but will build up again over 3.5 seconds.</p>',
            leveling: [
              {
                attribute: 'Bonus Movement Speed',
                modifiers: [
                  {
                    values: [
                      35,
                      42.5,
                      50,
                      57.5,
                      65,
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
            description: 'The attack speed and movement speed bonuses granted by both passives are doubled against enemies who are below 25% of their maximum health.',
            leveling: [
              {
                attribute: 'Increased Attack Speed',
                modifiers: [
                  {
                    values: [
                      140,
                      160,
                      180,
                      200,
                      220,
                    ],
                    units: [
                      '%',
                    ],
                  },
                ],
              },
              {
                attribute: 'Increased Movement Speed',
                modifiers: [
                  {
                    values: [
                      70,
                      85,
                      100,
                      115,
                      130,
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
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Warwick senses the nearest enemy champion in the area at the start of the cast time, marking them with Blood Hunt for 8 seconds, gaining both passive bonuses against them regardless of their current health.</p>',
          },
          {
            description: 'Blood Hunt\'s cooldown is reduced by 30% if no enemy champions are found within range.',
          },
        ],
        cost: [
          55,
        ],
        cooldown: [
          80,
          70,
          60,
          50,
          40,
        ],
        targeting: 'Auto',
        affects: 'Self / Enemies',
        spellshieldable: 'False',
        resource: 'Mana',
        notes: 'The initiation of the attack windup to gain the bonus attack speed is only for gaining the bonus; it does not refresh the duration of the attack speed buff if Warwick has it already.\nIf Blood Hunt was cast with no enemy champions within range, the ability incurs its cast time then goes on cooldown without marking any target.\nAs mentioned by the description, Blood Hunt only marks enemy champions if they are damaged below the thresholds by an allied source. This includes Warwick himself, champions,  minions, and  turrets.\nThe only exception is the allied  Nexus Obelisk, because that deals  internalraw damage, which does not trigger damage-related events such as Blood Hunt\'s marking.\nNote that  monsters are neutral units.\nBlood Hunt can detect and target decoys.\nBlood Hunt will occur from wherever Warwick was at the start of the cast time.\nBlood Hunt has an indicator that appears above the target(s) when they are being hunted. Some skins have a unique indicator.\n\n\n\n\n Classic\n\n\n\n\n\n\n PROJECT\n\n\n\n\n\n\n Lunar Guardian\n\n\n\n\n\n\n Old God\n\n\n\n\n\n\n Winterblessed\n\n\n\n\n\n\n Prestige Winterblessed\n\n\n\n\nEach of  Old God\'s  Chromas have a unique color variation:\n\n\n\n\nRuby\n\n\n\n\n\n\nCitrine\n\n\n\n\n\n\nEmerald\n\n\n\n\n\n\nSapphire\n\n\n\n\n\n\nRose Quartz\n\n\n\n\n\n\nObsidian\n\n\n\n\n\n\nAquamarine\n\n\n\n\n\n\nPearl\n\n\n\n\n\n\nDark Ritual\n\n\n\n\nEditor\'s note: It should be noted that as of right now, skins that use the  original\'s assets are all using a purple-blueish indicator that was undocumentedly introduced. It was possibly meant for color blind mode, based on the color. It is unknown whether the change was intentional or is a wrongly implemented feature.',
        blurb: 'Passive:  Warwick gains  attack speed against targets below 50% of their maximum health. Against champions, he also gains out of combat  movement speed. These bonuses are massively increased if the target is below 20% of their maximum health.',
        castTime: '0.5',
        effectRadius: '4000',
        maxCharges: 2,
      },
    ],
    E: [
      {
        name: 'Primal Howl',
        icon: 'https://cdn.communitydragon.org/latest/champion/Warwick/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Warwick gains damage reduction for up to 2.5 seconds. Primal Howl can be recast after 1 second, and does so automatically after the duration.</p>',
            leveling: [
              {
                attribute: 'Damage Reduction',
                modifiers: [
                  {
                    values: [
                      35,
                      40,
                      45,
                      50,
                      55,
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
            description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Warwick howls, ending Primal Howl\'s effects and fearing nearby enemies for 1 second, slowing them by 90%.</p>',
          },
          {
            description: 'Starting Infinite Duress\' channel while Primal Howl is active will initiate the recast without ending the damage reduction buff prematurely.',
          },
        ],
        cost: [
          40,
        ],
        cooldown: [
          15,
          14,
          13,
          12,
          11,
        ],
        targeting: 'Auto',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        notes: 'The initial cast and the manual recast count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nIf the ability is not manually recasted, the secondary effect will trigger without being considered as an ability activation.\nThe recast\'s howling animation has a 0.25-second  lockout time.\nThis will also cancel Warwick\'s basic attack.\nWarwick cannot attack or cast abilities during the animation, instead the last input will be buffered to play after it ends.\nWarwick will automatically recast if he enters  resurrection.',
        blurb: 'Active:  Warwick gains damage reduction for a short time. Primal Howl can be recast within the duration, and does so automatically afterwards.',
        castTime: 'none',
        effectRadius: '375',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'Infinite Duress',
        icon: 'https://cdn.communitydragon.org/latest/champion/Warwick/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Warwick leaps in the target direction with crowd control immunity, stopping upon hitting an enemy champion. He then knocks them down and channels for up to 1.5 seconds to suppress, reveal, and deal magic damage every 0.25 seconds, revealing himself in the process.</p>',
            leveling: [
              {
                attribute: 'Total Magic Damage',
                modifiers: [
                  {
                    values: [
                      175,
                      350,
                      525,
                    ],
                  },
                  {
                    values: [
                      167,
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
            description: 'Warwick heals for 100% of all post-mitigation damage he deals to the target during Infinite Duress.',
          },
          {
            description: 'Infinite Duress applies on-hit effects and life steal at 100% effectiveness, as well as triggers on-attack effects, 3 times.',
          },
          {
            description: 'Primal Howl can be cast during the dash.',
          },
        ],
        cost: [
          100,
        ],
        cooldown: [
          110,
          90,
          70,
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'Special',
        notes: 'Infinite Duress deals  basic damage, but also triggers spell effects by also being tagged as  spell damage.\nThe minimum range of the ability is 275 units, based on the minimum movement speed that a champion can have (110) while still being able to move. The "base" range of this ability is 837.5 because of his 335 base movement speed.\nConsidering movement speed soft caps, with  Blood Hunt, this range increases to 1112 / 1162.25 / 1203.125 / 1234.53125 / 1265.9375, further increased to 1286.875 / 1349.6875 / 1412.5 / 1475.3125 / 1538.125 toward enemy champions below 25% health.\nInfinite Duress deals a total of 6 damage instances:\nThe 1st, 3rd, and 5th ticks deals 2/9ths of the total damage as a single instance while applying both spell and on-hit effects.\nThe 2nd, 4th, and 6th ticks deal 1/9ths of the total damage as a single instance while applying spell effects but not on-hit effects.\nIf Warwick does not collide with a champion, he will slide a fixed distance past the maximum range during which he is no longer crowd control immune and unable to declare basic attacks or cast movement abilities, including  Flash, but being able to cast  Jaws of the Beast and  Blood Hunt, with the former also interrupting the slide.\nWarwick is able to cast  Primal Howl at any time during the dash.\nActivating  Zhonya\'s Hourglass during the dash interrupts it.\nEach hit counts as a separate hit for effects such as  Electrocute and  Eclipse\'s Ever Rising Moon.\nWarwick gains the  cc-immunity at the start of the cast time.\n Cleansing the  suppression does not interrupt the  channel and Warwick will continue to strike but not deal any damage.\nInfinite Duress is special cased to have its channel interrupted by  Fate\'s Call.\nIf the target is  crowd control immune or protected by  spell shield upon collision, Warwick will not start the  channel.\nIf the target is in a  zombie state, Warwick will stop the channel after ~0.5 seconds of hitting them.(bug)\nInfinite Duress covers Warwick\'s hitbox, meaning he will collide with enemy champions that are particularly close to him.\nThe following table refers for interactions while Warwick is in cast time:\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection\n\nThe following table refers for interactions while Warwick is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects',
        blurb: 'blurb2',
        collisionRadius: '205',
        castTime: '0.1',
        maxCharges: -1,
      },
    ],
  },
  lore: 'Warwick is a monster who hunts the gray alleys of Zaun. Transformed by agonizing experiments, his body is fused with an intricate system of chambers and pumps, machinery filling his veins with alchemical rage. He bursts from the shadows to prey upon those criminals who terrorize the city\'s depths. Warwick is drawn to blood, driven mad by its scent… and none who spill it can escape him.',
}
export default champion