// Updated Patch 25.17 - 09/01/2025 05:26:15 PM CDT

const champion: Champion = {
  id: 517,
  key: 'Sylas',
  name: 'Sylas',
  title: 'the Unshackled',
  resource: 'Mana',
  attackType: 'Melee',
  adaptiveType: 'Magic damage',
  stats: {
    health: {
      flat: 600,
      perLevel: 122
    },
    healthRegen: {
      flat: 9,
      perLevel: 0.9
    },
    mana: {
      flat: 400,
      perLevel: 70
    },
    manaRegen: {
      flat: 8,
      perLevel: 0.8
    },
    armor: {
      flat: 29,
      perLevel: 5.2
    },
    magicResistance: {
      flat: 32,
      perLevel: 2.55
    },
    attackDamage: {
      flat: 61,
      perLevel: 3
    },
    movespeed: {
      flat: 340
    },
    acquisitionRadius: {
      flat: 525
    },
    selectionRadius: {
      flat: 100
    },
    pathingRadius: {
      flat: 35
    },
    gameplayRadius: {
      flat: 65
    },
    criticalStrikeDamage: {
      flat: 175
    },
    criticalStrikeDamageModifier: {
      flat: 1
    },
    attackSpeed: {
      flat: 0.645,
      perLevel: 3.5
    },
    attackSpeedRatio: {
      flat: 0.645
    },
    attackCastTime: {
      flat: 0.26
    },
    attackTotalTime: {
      flat: 1.55
    },
    attackDelayOffset: {
      flat: -0.099
    },
    attackRange: {
      flat: 175
    }
  },
  positions: [
    'Middle',
    'Top'
  ],
  roles: [
    'Assassin',
    'Burst',
    'Mage',
    'Skirmisher'
  ],
  attributeRatings: {
    damage: 2,
    toughness: 2,
    control: 1,
    mobility: 3,
    utility: 1,
    abilityReliance: 70,
    difficulty: 3
  },
  abilities: {
    P: [
      {
        name: 'Petricite Burst',
        icon: 'https://cdn.communitydragon.org/latest/champion/Sylas/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Whenever Sylas casts an ability, he generates a stack of Unshackled for 4 seconds, refreshing on subsequent casts and stacking up to 3 times.</p>'
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Unshackled:</span> Sylas\' next basic attack gains 125% bonus attack speed and is empowered to consume a stack to whirl his chains around him, which has an uncancellable windup and deals 130% AD (+ 30% AP) magic damage to the primary target and 40% AD (+ 20% AP) magic damage to nearby enemies.</p>'
          },
          {
            description: 'Damage to secondary targets executes minions that would be left below 25 health.'
          },
          {
            description: 'Petricite Burst can critically strike for (175% + 40%) damage only against the primary target.'
          }
        ],
        targeting: 'Passive',
        affects: 'Self',
        spellshieldable: 'False',
        damageType: 'Magic damage',
        spellEffects: 'special',
        notes: 'Spellblade damage does not get converted to magic damage, and will deal its damage only to the primary target.\nApplies  proc damage to the primary target and  area damage to secondary targets.\nPetricite Burst\'s damage cannot critically strike against secondary targets.\nPetricite Burst only applies on-hit effects to the primary target.\nPetricite Burst attacks benefit from  life steal.\nPetricite Burst can be  dodged,  blocked, or missed while Sylas is  blinded as the primary target but not as a secondary target.',
        blurb: 'Innate:  Sylas\'  ability casts generate  stacks of Unshackled that stack up to a cap. While he has stacks, he gains tremendous  bonus attack speed.',
        effectRadius: '300'
      }
    ],
    Q: [
      {
        name: 'Chain Lash',
        icon: 'https://cdn.communitydragon.org/latest/champion/Sylas/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Sylas lashes out two chains that converge to the target location and extend beyond it up to a maximum range, dealing magic damage to enemies hit and slowing them for 1.5 seconds.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      40,
                      60,
                      80,
                      100,
                      120
                    ]
                  },
                  {
                    values: [
                      40
                    ],
                    units: [
                      '% AP'
                    ]
                  }
                ]
              },
              {
                attribute: 'Slow',
                modifiers: [
                  {
                    values: [
                      15,
                      20,
                      25,
                      30,
                      35
                    ],
                    units: [
                      '%'
                    ]
                  }
                ]
              }
            ]
          },
          {
            description: 'After a 0.6-second delay, the chains\' intersection explodes to deal magic damage to enemies within, reduced to 40% against minions.',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      60,
                      115,
                      170,
                      225,
                      280
                    ]
                  },
                  {
                    values: [
                      80
                    ],
                    units: [
                      '% AP'
                    ]
                  }
                ]
              },
              {
                attribute: 'Total Magic Damage',
                modifiers: [
                  {
                    values: [
                      100,
                      175,
                      250,
                      325,
                      400
                    ]
                  },
                  {
                    values: [
                      120
                    ],
                    units: [
                      '% AP'
                    ]
                  }
                ]
              },
              {
                attribute: 'Minion Damage',
                modifiers: [
                  {
                    values: [
                      24,
                      46,
                      68,
                      90,
                      112
                    ]
                  },
                  {
                    values: [
                      32
                    ],
                    units: [
                      '% AP'
                    ]
                  }
                ]
              },
              {
                attribute: 'Total Minion Damage',
                modifiers: [
                  {
                    values: [
                      64,
                      106,
                      148,
                      190,
                      232
                    ]
                  },
                  {
                    values: [
                      72
                    ],
                    units: [
                      '% AP'
                    ]
                  }
                ]
              }
            ]
          }
        ],
        cost: [
          55
        ],
        cooldown: [
          10,
          9,
          8,
          7,
          6
        ],
        targeting: 'Location',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'spellaoe',
        projectile: 'FALSE',
        notes: 'The detonation\'s effect radius center is placed at the intersection between the chains from the initial cast, meaning a max range cast can create a detonation that reaches further than the chains do.',
        blurb: 'Active:  Sylas lashes out two chains that converge at the target location, dealing magic damage to enemies hit and  slowing them for a brief moment.',
        castTime: '0.4',
        effectRadius: '180 / 200',
        targetRange: '50 / 775',
        maxCharges: -1
      }
    ],
    W: [
      {
        name: 'Kingslayer',
        icon: 'https://cdn.communitydragon.org/latest/champion/Sylas/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Sylas dashes to the front of the target enemy\'s location then strikes them to deal magic damage.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      75,
                      110,
                      145,
                      180,
                      215
                    ]
                  },
                  {
                    values: [
                      60
                    ],
                    units: [
                      '% AP'
                    ]
                  }
                ]
              }
            ]
          },
          {
            description: 'If this damages a champion, Sylas is also healed, increased by 0% - 100% (based on his missing health).',
            leveling: [
              {
                attribute: 'Minimum Heal',
                modifiers: [
                  {
                    values: [
                      20,
                      40,
                      60,
                      80,
                      100
                    ]
                  },
                  {
                    values: [
                      20
                    ],
                    units: [
                      '% AP'
                    ]
                  },
                  {
                    values: [
                      5
                    ],
                    units: [
                      '% of his bonus health'
                    ]
                  }
                ]
              },
              {
                attribute: 'Maximum Heal',
                modifiers: [
                  {
                    values: [
                      40,
                      80,
                      120,
                      160,
                      200
                    ]
                  },
                  {
                    values: [
                      40
                    ],
                    units: [
                      '% AP'
                    ]
                  },
                  {
                    values: [
                      10
                    ],
                    units: [
                      '% of his bonus health'
                    ]
                  }
                ]
              }
            ]
          }
        ],
        cost: [
          50,
          60,
          70,
          80,
          90
        ],
        cooldown: [
          12,
          10.5,
          9,
          7.5,
          6
        ],
        targeting: 'Unit',
        affects: 'Enemies',
        spellshieldable: 'true',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'Single target',
        notes: 'The damage will be dealt if the dash completed uninterrupted, and regardless of how far the target\'s location is at the end of the dash.\nSylas will heal even if the target champion dies before the dash is completed.\nThe only exception is if the target becomes  untargetable, in which case Kingslayer will have no effect.',
        blurb: 'Active:  Sylas  dashes to the target enemy and strikes them to deal magic damage.',
        castTime: 'none',
        targetRange: '400',
        maxCharges: -1
      }
    ],
    E: [
      {
        name: 'Abscond',
        icon: 'https://cdn.communitydragon.org/latest/champion/Sylas/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Sylas dashes to the target location. Within 3.5 seconds, he can cast Abduct after a 0.2-second delay from casting Abscond.</p>'
          },
          {
            description: 'Kingslayer can be cast during the dash.'
          }
        ],
        cost: [
          65
        ],
        cooldown: [
          13,
          12,
          11,
          10,
          9
        ],
        targeting: 'Location',
        affects: 'Self',
        resource: 'Mana',
        notes: 'No additional details.',
        blurb: 'Active:  Sylas  dashes to the target location. He can then cast  Abduct within a short time.',
        speed: '1450',
        castTime: 'none',
        targetRange: '400',
        maxCharges: -1
      },
      {
        name: 'Abduct',
        icon: 'https://cdn.communitydragon.org/latest/champion/Sylas/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Sylas whips out his chains in the target direction that deal magic damage to the first enemy hit and reveal and stun them for 0.5 seconds. Upon hitting the target, Sylas dashes to their location and knocks them up for 0.5 seconds upon arrival.</p>',
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
                      280
                    ]
                  },
                  {
                    values: [
                      80
                    ],
                    units: [
                      '% AP'
                    ]
                  }
                ]
              }
            ]
          },
          {
            description: 'Sylas is unable to cast Chain Lash while the chains are in flight.'
          }
        ],
        cost: [
          65
        ],
        cooldown: [
          13,
          12,
          11,
          10,
          9
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'True',
        damageType: 'Magic damage',
        spellEffects: 'Single target',
        projectile: 'TRUE',
        notes: 'Abduct counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nSylas will not dash to his target if the chains are blocked by  spell shield.\nThe target will be revealed for 2 seconds if the dash is interrupted.\nAbduct will still apply the  knock up if the target is  untargetable by the end of the dash.\nThis ability will cast from wherever the caster is at the start of the cast time.\nSylas is unable to perform actions while dashing to the target, and becomes able to again after 0.05 seconds of the dash ending.\nSylas will not dash to the target hit if he is  channeling or  dashing from a  Hijacked ability.\nAbduct will not apply the  knock up when this happens.\nIf the chains connect before a pre-channel cast time is complete then Sylas will dash to the target and the ability will cancel.',
        blurb: 'Active: Sylas whips his chains in the target direction that deal magic damage and briefly  stun the first enemy hit,  revealing them. He will then  dash to the target and briefly  knock them up upon arrival.',
        speed: '2500 - 400 / 1800',
        width: '120',
        castTime: '0.25',
        maxCharges: -1
      }
    ],
    R: [
      {
        name: 'Hijack',
        icon: 'https://cdn.communitydragon.org/latest/champion/Sylas/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Sylas launches his chains at the target enemy champion, gaining a copy of their ultimate ability and revealing them for 0.825 seconds at the start of the cast time. Sylas cannot select the same champion again for a set duration, and can hold the hijacked ultimate for up to 90 seconds, during which he can recast Hijack.</p>'
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Sylas casts his hijacked ultimate ability at no cost, scaling based on Hijack\'s rank and his own statistics.</p>'
          },
          {
            description: 'Hijacked ultimates and abilities that do not scale with ability power have their attack damage ratios converted to ability power ratios, scaling with 0.6% AP per 1% total AD, and 0.4% AP per 1% bonus AD respectively.'
          }
        ],
        cost: [
          75
        ],
        cooldown: [
          80,
          55,
          30
        ],
        targeting: 'Unit',
        affects: 'Self, Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        projectile: 'TRUE',
        notes: 'Petricite Burst\'s stack from casting Hijack is given after Sylas receives the Hijacked ability.\nHijack\'s per target cooldown is indicated by a ring under recently targetted enemy champions, and is only visible to Sylas and each individual enemy.\nHijack\'s base chain missile will only be destroyed and not replicated against  Mel\'s  Rebuttal. Sylas will not receive a Hijacked  Golden Eclipse.\nIf Sylas casts Hijack on a  clone, no ultimate is stolen and the ability will be placed on full cooldown.\nThe same does not occur for champions within a  zombie state.\n Clones do not copy Hijack\'s target cooldown indicator, potentially revealing them to Sylas.\n Neeko\'s  Inherent Glamour does not hide her personal cooldown indicator, nor does she copy her allies\'.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).\nIf the same happens when casting an on-target stolen ability, the ability will instead cancel and go on cooldown.\nIf Hijack is intercepted by  Braum\'s  Unbreakable, Sylas will gain a copy of  Glacial Fissure instead and an on-target cooldown will be applied to him.\nIf  Braum has an on-target cooldown on him (by being previously Hijacked) upon interception, no ultimate will be stolen.\nSince the copied ability scales based on Hijack\'s rank, abilities can be copied regardless of their rank.\nHijack will copy all passives, actives and recast effects of the stolen ability. Hijack will not trigger the effects of other abilities unless absolutely necessary.\nShape-shifting ultimates will transform Sylas into the target\'s alternate form, replacing his basic abilities and base stats. Namely:  Cougar Form,  Spider Form,  Cannon Form and  Dragon Form.\nDragon\'s Descent transforms Sylas\'  mana, into Shyvana\'s  fury, being able to replenishing it by basic attacking. At the end of the effect, Sylas gains his previous mana.\nDragon\'s Descent does not refresh ability cooldowns upon transforming.\nSpider Form freezes Sylas\' original cooldowns on their current values, causing them to not come off cooldown during Spider Form. (bug)\nUpon transforming back from  Cannon Form, Sylas\' next basic attack deals  Transform Mercury Hammer\'s bonus magic damage and uses his critical strike animation.\nTransforming into  Cannon Form with more than 2 stacks of Unshackled and then casting  Hypercharge will limit its effect until the currently held Unshackled stacks are spent. (bug)\nTransforming into Cougar Form with more than 2 stacks of Unshackled and then casting  Takedown will disable Takedown\'s effect until the buff timer runs out. (bug)\nPermanent transformations last for ~5 minutes or until toggled off.\nThe alternate abilities of transforming champions will cost mana and scale with the ranks as appropriate for the ability (e.g. ranks in R for Nidalee and ranks in Q/W/E for Jayce/Elise).\nUpon transforming, a  Petricite Burst stack will be deducted.\n Petricite Burst stacks will still be gained from abilities cast in alternate forms, but the stacks are gained independently from the normal ones.\nIf Sylas has both normal and transformed stacks, Petricite Burst will prioritize consuming Sylas stacks before the transformed ones.\nUltimates comply with  One for All rules if an ally is playing the hijacked champion. For example, an allied  Darius\'  Hemorrhage stacks will increase the damage of the hijacked  Noxian Guillotine; or an allied  Syndra\'s  Dark Sphere will add extra damage to hijacked  Unleashed Power as well as producing 3 spheres that she can use.\nUltimate Interactions\n Ahri\'s  Spirit Rush - Gains a charge upon scoring a champion  takedown within 3 seconds of damaging them.\n Akshan\'s  Comeuppance - Sylas can cast  Abscond, but doing so ends the channel prematurely. If Comeuppance is cast after  Abduct but before the chains hit a target, Sylas isn\'t pulled to the target and the channel continues as usual.\n Amumu\'s  Curse of the Sad Mummy - Does not apply  Cursed Touch.\n Aphelios\'  Moonlight Vigil - Based on the  main weapon at the moment of steal.\n Crescendum empowers his basic attacks temporarily.\n Calibrum does not apply marks.\n Severum grants a shield if healed while at full health.\n Ashe\'s  Enchanted Crystal Arrow - Does not apply  Frost Shot to secondary targets.\n Brand\'s  Pyroclasm - Does not apply stacks of  Blaze.\n Cho\'Gath\'s  Feast - Gains permanent Feast stacks on-kill.\n Corki\'s  Missile Barrage - Gains max charges.\n Darius\'  Noxian Guillotine - Does not apply a stack of  Hemorrhage. Upon gaining a reset from a Rank 3 Noxian Guillotine, Sylas can hold onto the ability for up to 300 seconds.\n Fiora\'s  Grand Challenge - Gains movement speed in the effect and deals bonus  Vitals true damage and can trigger the area healing.\n Galio\'s  Hero\'s Entrance - Gives Sylas and allies  Shield of Durand\'s magic  shield, based on  Kingslayer rank.\n Gangplank\'s  Cannon Barrage - Does not steal cannon upgrades.\n Gnar\'s  GNAR! - Gains a usable ultimate regardless of cast on  Mini Gnar or  Mega Gnar.\n Gwen\'s  Needlework - Does not apply  A Thousand Cuts.\n Heimerdinger\'s  UPGRADE!!! - Sylas\'s basic abilities are replaced with Heimerdinger\'s empowered abilities. The upgrade buff lasts until the ultimate can be stolen again.\n Illaoi\'s  Leap of Faith - Does not reduce  cooldown of  Kingslayer.\n Irelia\'s  Vanguard\'s Edge - Applies marks of  Bladesurge.\n Jax\'s  Grandmaster-at-Arms - Applies magic damage on-hit while holding onto Grandmaster-at-Arms and while it is active.\n Kassadin\'s  Riftwalk - Only provides one use.\n Kai\'Sa\'s  Killer Instinct - Sylas\' basic attacks,  Abduct and nearby allies\'  immobilizations apply stacks of  Plasma, up to 4. Sylas is unable to apply the 5th stack necessary to expunge the stacks.\n Kalista\'s  Fate\'s Call - Only castable with a  link (purchasable in the Shop for  0 gold).\n Karma\'s  Mantra - Sylas\' basic abilities are replaced with Karma\'s empowered abilities, according to Sylas\' own ability ranks (including Hijack for Mantra bonuses).\n Katarina\'s  Death Lotus - Can be cast without a target.\n Kayn\'s  Umbral Trespass - Based on current form ( Shadow Assassin /  Rhaast).\n Kha\'Zix\'s  Void Assault - Can steal the ability\'s  evolution bonus effects.\n Kennen\'s  Slicing Maelstrom - Applies  Mark of the Storm.\n Kled\'s  Chaaaaaaaarge!!! - Does not need  mount to cast.\n Kog\'Maw\'s  Living Artillery - Only provides one use.\n LeBlanc\'s  Mimic - Uses the empowered version of  LeBlanc\'s last cast basic ability.  Mimic Sigil of Malice does not apply its mark. If she has not cast any abilities,  Mimic Sigil of Malice is copied.\n Leona\'s  Solar Flare - Does not apply  Sunlight.\n Lillia\'s  Lilting Lullaby - Sylas\' abilities apply  Dream-Laden Bough\'s debuff, which does not deal its damage over time.\n Lucian\'s  The Culling - Can cast  Abscond and  Abduct freely during the channel.\n Lux\'s  Final Spark - Does not apply  Illumination.\n Master Yi\'s  Highlander -  Takedowns reduce basic ability cooldowns while holding onto Highlander and while it is active.\n Mel\'s  Golden Eclipse - Sylas\' basic attacks and abilities apply stacks of  Overwhelm, which will execute targets below the threshold.\n Mordekaiser\'s  Realm of Death - Can join the dimension of outgoing realms if cast in the proper range (does not extend their duration).\n Nasus\'  Fury of the Sands - Does not reduce  cooldown of  Chain Lash.\n Neeko\'s  Inherent Glamour - Always steals  Pop Blossom, regardless of the champion Neeko is disguised as.\n Orianna\'s  Command: Shockwave - Cast on self without a  Ball.\n Pantheon\'s  Grand Starfall - The spear deals damage based on  Chain Lash rank and scales with 46% AP.\n Quinn\'s  Behind Enemy Lines - Does not cast  Skystrike upon attacking an enemy champion. It can be casted manually however.\n Rengar\'s  Thrill of the Hunt - Sylas will gain  Unseen Predator on his next attack.\n Renekton\'s  Dominus - Grants Sylas 20 mana on cast and then 5 mana per second (up to 75 total mana over the duration).\n Rek\'Sai\'s  Void Rush - Sylas\' attacks against enemy champions will apply a  mark which can be used to cast the ability.\n Riven\'s  Blade of the Exile - Grants AD based on Sylas\' AP on cast and grants him 75 bonus attack range for his auto attacks aswell for  Chain Lash and  Kingslayer.\n Samira\'s  Inferno Trigger - Can use without a  Grade.\n Seraphine\'s  Encore - Allies do not gain  Notes.\n Shaco\'s  Hallucinate - Creates a Sylas Clone that also copies Sylas\' stolen ultimate indicator. The clone behaves like a Shaco clone, being able to  Backstab, apply  Two-Shiv Poison\'s slow scaling with  Abscond rank, and summoning  mini-boxes that deal damage based on  Hijack rank.\n Shyvana\'s  Dragon\'s Descent - Has a 200 second base cooldown.\n Skarner\'s  Impale - Can freely cast abilities during the suppression, but cannot basic attack or  Flash.\n Sylas\'  Hijack - Steals the ability that the enemy Sylas has stolen. Cannot be targeted if no ability has been stolen.\n Syndra\'s  Unleashed Power - Throws a minimum of 3  spheres, which are left on the ground afterwards and vanish after 6 seconds.\n Talon\'s  Shadow Assault - Does not apply  Blade\'s End.\n Tahm Kench\'s  Devour - Sylas\' basic attacks apply  An Acquired Taste, allowing him to cast Devour on enemies.\n Teemo\'s  Noxious Trap - Gains max charges.\n Tristana\'s  Buster Shot - Always has 525 cast range as Sylas does not benefit from  Draw a Bead\'s per-level cast range increase.\n Twitch\'s  Spray and Pray - Gains 300 attack range and his attacks produce missiles that travel 850 range. These attacks are classified as  melee.\n Udyr - Steals  Wingborne Storm, and can recast to  Awaken it. Effects are based on Hijack\'s rank.\n Urgot\'s  Fear Beyond Death - Can cast  Kingslayer during the recast.\n Varus\'  Chain of Corruption - Applies stacks of  Blight to targets hit that can be detonated by Sylas\' other abilities, dealing damage based on  Kingslayer rank.\n Vayne\'s  Final Hour - Gains the AD and MS bonuses. Additionally, Sylas gains  invisibility when he casts  Chain Lash.\n Vel\'Koz\'s  Life Form Disintegration Ray - Does not apply  Organic Deconstruction.\n Viego\'s  Sovereign\'s Domination - Always steals  Heartbreaker, regardless of the champion Viego is possessing.\n Viktor\'s  Arcane Storm - If Viktor has  augmented the ability, Sylas\'  hijacked version will also have the augment\'s effects.\n Xayah\'s  Featherstorm -  Feathers do not interact with an ally or enemy  Xayah.\n Yasuo\'s  Last Breath -  Critical strikes ignore 50% of the target\'s  bonus armor after activation.\n Yunara\'s  Transcend One\'s Self - Grants  Cultivation of Spirit\'s active effects, but no other bonuses.\n Yuumi\'s  Final Chapter - Can freely cast abilities during the channel.\n Zac\'s  Let\'s Bounce! - Cannot declare attacks nor use any abilities nor while bouncing. Sylas does not create  chunks.\n Zeri\'s  Lightning Crash - Can gain Overcharge\'s effects and refresh it on basic attacks (even without being charged) and abilities.\n Zed\'s  Death Mark -  Shadow does not mimic abilities but can be reactivated to  swap places.',
        blurb: 'Active:  Sylas launches his chains at the target enemy champion, gaining a copy of their ultimate ability and briefly  revealing them. He cannot steal from the same champion again for a while, and can hold the hijacked ability for some time, during which he can recast Hijack.',
        speed: '2200',
        castTime: '0.25',
        targetRange: '950',
        maxCharges: -1
      }
    ]
  },
  lore: 'Raised in one of Demacia\'s lesser quarters, Sylas of Dregbourne has come to symbolize the darker side of the Great City. As a boy, his ability to root out hidden sorcery caught the attention of the notorious mageseekers, who eventually imprisoned him for turning those same powers against them. Having now broken free, Sylas lives as a hardened revolutionary, using the magic of those around him to destroy the kingdom he once served… and his band of outcast mage followers seems to grow by the day.',
  faction: 'demacia',
  releaseDate: '2019-01-25',
  patchLastChanged: '25.13',
  price: {
    blueEssence: 1575,
    rp: 790
  }
}
export default champion