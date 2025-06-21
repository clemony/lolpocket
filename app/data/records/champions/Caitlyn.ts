// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion = {
  id: 51,
  key: 'Caitlyn',
  name: 'Caitlyn',
  title: 'the Sheriff of Piltover',
  fullName: 'Caitlyn Kiramman',
  resource: 'Mana',
  attackType: 'Ranged',
  stats: {
    health: {
      flat: 580,
      perLevel: 107,
    },
    healthRegen: {
      flat: 3.5,
      perLevel: 0.55,
    },
    mana: {
      flat: 315,
      perLevel: 40,
    },
    manaRegen: {
      flat: 7.4,
      perLevel: 0.7,
    },
    armor: {
      flat: 27,
      perLevel: 4.7,
    },
    magicResistance: {
      flat: 30,
      perLevel: 1.3,
    },
    attackDamage: {
      flat: 60,
      perLevel: 3.8,
    },
    movespeed: {
      flat: 325,
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
      flat: 1,
    },
    attackSpeed: {
      flat: 0.681,
      perLevel: 4,
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
      flat: -0.123,
    },
    attackRange: {
      flat: 650,
    },
  },
  positions: [
    'Bottom',
  ],
  roles: [
    'Marksman',
  ],
  attributeRatings: {
    damage: 3,
    toughness: 1,
    control: 2,
    mobility: 2,
    utility: 1,
    abilityReliance: 10,
    difficulty: 1,
  },
  abilities: {
    P: [
      {
        name: 'Headshot',
        icon: 'https://cdn.communitydragon.org/latest/champion/Caitlyn/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Caitlyn\'s basic attacks generate a stack of Count on-attack, doubled if she is within brush. At 5 stacks, or 4 while in brush, her next basic attack consumes all stacks on-attack to become a Headshot.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Headshot:</span> Caitlyn\'s basic attack is empowered to have an uncancellable windup and deal 60 / 90 / 120% (based on level) (+ (148.75% + 34%) critical strike chance) AD bonus physical damage, increased to 110 / 115 / 120% (based on level) (+ (148.75% + 34%) critical strike chance) AD against non-champions.</p>',
          },
          {
            description: 'Enemies that step over a Yordle Snap Trap or are hit by 90 Caliber Net can grant an additional Headshot against them at 1300 range within 1.8 seconds, without consuming stacks. Each method grants only one Headshot at a time.',
          },
        ],
        targeting: 'Passive',
        affects: 'Self',
        spellshieldable: 'False',
        damageType: 'Physical damage',
        spellEffects: 'Basic',
        projectile: 'TRUE',
        notes: 'If Caitlyn\'s current target becomes trapped by  Yordle Snap Trap or  90 Caliber Net while her attack is on cooldown, this ongoing cooldown will be refunded partially so that her next attack on them can begin earlier.\nSwapping the target to an enemy trapped by  Yordle Snap Trap or  90 Caliber Net also reduces her ongoing attack cooldown.\nPENDING FOR TEST:: The exact attack cooldown refund appears to be 50% of the attack cooldown at current attack speed, but at a minimum amount it lets Caitlyn start the attack against the trapped target within 0.5 seconds of her previous attack windup completing.\nThe bonus range from  Rapid Firecannon will not have any effect during  trap and  net extended Headshot attacks.\nOnly the ordinary 100% attack damage portion of the attack can critically strike. The bonus from Headshot is added after the critical strike is rolled.\nThe full damage of Headshot applies  life steal.\nHeadshot is a single instance of damage, thus does not trigger  Amumu\'s  Tantrum\'s or  Warden\'s Mail passives twice.\nThe basic attack triggering Headshot can  critically strike, but Headshot\'s damage remains unchanged if it does.\nSince Caitlyn\'s Art and Sustainability Update, Ability-granted Headshots are the same as the original Headshot override attack, though what lets them cast at high range is still relatively special. They trigger on-attack effects (including stacking Headshot).\nPENDING FOR TEST:  Runaan\'s Hurricane\'s Wind\'s Fury, is special cased to search targets with the increased range as well.\nBecause Headshot stacks are generated on-attack,  Runaan\'s Hurricane bolts will not generate stacks towards Headshot.\nThe empowered attack will not trigger against wards.\nStacks will still be generated towards Headshot when attacking them.',
        blurb: 'Innate:  Caitlyn\'s basic attacks generate stacks of Count. At maximum stacks, her next basic attack will fire a Headshot dealing bonus physical damage that scales with her  critical strike chance.',
        speed: '3000',
      },
    ],
    Q: [
      {
        name: 'Piltover Peacemaker',
        icon: 'https://cdn.communitydragon.org/latest/champion/Caitlyn/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Caitlyn fires a piercing shot in the target direction that deals physical damage to the first enemy it passes through, after which it expands in width but deals only 60% damage to enemies it hits thereafter.</p>',
            leveling: [
              {
                attribute: 'Physical Damage',
                modifiers: [
                  {
                    values: [
                      50,
                      90,
                      130,
                      170,
                      210,
                    ],
                  },
                  {
                    values: [
                      125,
                      145,
                      165,
                      185,
                      205,
                    ],
                    units: [
                      '% AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'Reduced Damage',
                modifiers: [
                  {
                    values: [
                      30,
                      54,
                      78,
                      102,
                      126,
                    ],
                  },
                  {
                    values: [
                      75,
                      87,
                      99,
                      111,
                      123,
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
            description: 'Enemies revealed by Yordle Snap Trap always take full damage from Piltover Peacemaker.',
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
          10,
          9,
          8,
          7,
          6,
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Physical damage',
        spellEffects: 'Area of effect',
        projectile: 'TRUE',
        notes: 'Upon Piltover Peacemaker dealing damage to an enemy, Caitlyn\'s attack timer is forcibly  reset.(bug)\nEnemies hit while protected by a  spell shield will still be considered a target for calculating damage for subsequent hits.\nThis ability will cast from wherever the caster is at the start of the cast time.',
        blurb: 'Active:  Caitlyn revs up her rifle to unleash a penetrating shot that deals physical damage to enemies hit.',
        speed: '2200',
        width: '120 / 180',
        castTime: '0.625',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Yordle Snap Trap',
        icon: 'https://cdn.communitydragon.org/latest/champion/Caitlyn/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Caitlyn sets a visible trap at the target location that is untargetable and arms after 1 second, lasting for a duration. The trap grants sight of the area for 1 second after being placed.</p>',
            leveling: [
              {
                attribute: 'Trap Duration',
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
                      ' seconds',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'Caitlyn periodically stocks a Yordle Snap Trap charge, up to a maximum amount. Deploying traps beyond the maximum destroys the oldest one.',
            leveling: [
              {
                attribute: 'Maximum Number of Traps',
                modifiers: [
                  {
                    values: [
                      3,
                      3,
                      4,
                      4,
                      5,
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'The next enemy champion that springs the trap is rooted for 1.5 seconds and revealed for 3 seconds, as well as takes additional damage from the Headshot granted by this ability. Trapped targets become immune to further Yordle Snap Traps for 3 seconds, preventing them from springing subsequent traps for the duration.',
            leveling: [
              {
                attribute: 'Headshot Damage Increase',
                modifiers: [
                  {
                    values: [
                      35,
                      80,
                      125,
                      170,
                      215,
                    ],
                  },
                  {
                    values: [
                      30,
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
          20,
        ],
        cooldown: [
          0.5,
        ],
        targeting: 'Location',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        notes: 'Multiple armed traps on the same location will spring all at once if an enemy steps on one of them.',
        blurb: 'Active:  Caitlyn sets a trap at the target location that lasts for a while. The trap springs when an enemy champion steps on it,  revealing and  rooting them.',
        rechargeRate: [
          26,
          22,
          18,
          14,
          10,
        ],
        collisionRadius: '15',
        castTime: '0.25',
        targetRange: '800',
        maxCharges: 2,
      },
    ],
    E: [
      {
        name: '90 Caliber Net',
        icon: 'https://cdn.communitydragon.org/latest/champion/Caitlyn/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Caitlyn fires a net in the target direction and recoils 390 units in the opposite direction. The net deals magic damage to the first enemy hit and slows them by 50% for 1 second.</p>',
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
            description: 'Caitlyn will not dash backwards if she is immobilized or grounded during the cast time. She can cast any of her abilities during the dash.',
          },
        ],
        cost: [
          75,
        ],
        cooldown: [
          16,
          14,
          12,
          10,
          8,
        ],
        targeting: 'Direction',
        affects: 'Self, Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'Single target',
        projectile: 'TRUE',
        notes: 'This ability will cast from wherever the caster is at the end of the cast time.\nThe recoil can be used to pass through terrain.\nIf Caitlyn buffers  Piltover Peacemaker during 90 Caliber Net\'s cast time,  Piltover Peacemaker will start after the cast time.\nIf Caitlyn buffers an ability or basic attack during this ability\'s cast time, the buffered ability or basic attack will instead start after the dash ends.\nOther abilities can be cast while  dashing if they are input after the cast time.\n90 Caliber Net\'s missile will fail to fire if Caitlyn is  suppressed during the cast time.(note)',
        blurb: 'Active:  Caitlyn fires a heavy net that  slows the first target hit and deals magic damage to them.',
        speed: '1600',
        castTime: '0.15',
        effectRadius: '140',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'Ace in the Hole',
        icon: 'https://cdn.communitydragon.org/latest/champion/Caitlyn/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Caitlyn locks onto the target enemy champion and channels for 1 second, revealing them as well as revealing herself.</p>',
          },
          {
            description: 'Ace in the Hole is placed on a 5-second cooldown if canceled.',
          },
          {
            description: 'Once Caitlyn completes the channel, she fires a homing bullet toward the target that deals physical damage to the first enemy champion it hits, increased by 0% - 50% (based on critical strike chance).',
            leveling: [
              {
                attribute: 'Physical damage',
                modifiers: [
                  {
                    values: [
                      300,
                      475,
                      650,
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
        ],
        cost: [
          100,
        ],
        cooldown: [
          90,
        ],
        targeting: 'Unit',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Physical damage',
        spellEffects: 'spell',
        projectile: 'TRUE',
        notes: 'The following will cancel Ace in the Hole\'s channel (mana expenditure is not compensated):\nCaitlyn is  interrupted.\nThe target becomes  untargetable.\nCaitlyn or her target  dies.\nAce in the Hole reveals the target and Caitlyn through a buff that lasts for up to 4 seconds.\nThe buff is applied to the target from the start of the cast time.\nThe buff ends prematurely when the channel is canceled or the bullet hits an enemy.\nThe target is revealed for 1 second if the buff is ended prematurely.\nIt is not removed if the cast time is cancelled or the bullet missile is destroyed.(note)\nThe bullet missile will fail to hit the primary target if they are  untargetable upon arrival, dealing no damage.\nThe ability also goes on a 5-second  cooldown if Caitlyn enters  resurrection during the cast time.\nThe cast time does not end prematurely but the channel will be immediately canceled the moment the cast time completes.\nIf the target dies after the bullet has been fired, the shot will continue towards their corpse and may still hit other enemy champions.\nThe bullet has a  sight radius of 1500 attached to it.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).\nThis excludes losing sight of the target.\nThe following table refers for interactions while Caitlyn is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects',
        speed: '3200',
        width: '80',
        castTime: '0.375',
        targetRange: '3500',
        maxCharges: -1,
      },
    ],
  },
  lore: 'Renowned as its finest peacekeeper, Caitlyn Kiramman is also Piltover\'s best shot at ridding the city of its elusive criminal elements. She is often paired with Vi, acting as a cool counterpoint to her partner\'s more impetuous nature. Even though she carries a one-of-a-kind hextech rifle, Caitlyn\'s most powerful weapon is her superior intellect, allowing her to lay elaborate traps for any lawbreakers foolish enough to operate in the City of Progress.',
}
export default champion