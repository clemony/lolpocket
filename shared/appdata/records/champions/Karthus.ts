// Updated Patch 25.17 - 09/01/2025 05:26:13 PM CDT

const champion: Champion = {
  id: 30,
  key: 'Karthus',
  name: 'Karthus',
  title: 'the Deathsinger',
  resource: 'Mana',
  attackType: 'Ranged',
  adaptiveType: 'Magic damage',
  stats: {
    health: {
      flat: 620,
      perLevel: 110
    },
    healthRegen: {
      flat: 6.5,
      perLevel: 0.55
    },
    mana: {
      flat: 467,
      perLevel: 31
    },
    manaRegen: {
      flat: 8,
      perLevel: 0.8
    },
    armor: {
      flat: 21,
      perLevel: 4.7
    },
    magicResistance: {
      flat: 30,
      perLevel: 1.3
    },
    attackDamage: {
      flat: 46,
      perLevel: 3.25
    },
    movespeed: {
      flat: 335
    },
    acquisitionRadius: {
      flat: 450
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
      flat: 0.625,
      perLevel: 2.11
    },
    attackSpeedRatio: {
      flat: 0.625
    },
    attackCastTime: {
      flat: 0.3
    },
    attackTotalTime: {
      flat: 1.6
    },
    attackDelayOffset: {
      flat: 0.044
    },
    attackRange: {
      flat: 450
    }
  },
  positions: [
    'Jungle'
  ],
  roles: [
    'Battlemage',
    'Mage'
  ],
  attributeRatings: {
    damage: 3,
    toughness: 1,
    control: 1,
    mobility: 1,
    utility: 2,
    abilityReliance: 100,
    difficulty: 2
  },
  abilities: {
    P: [
      {
        name: 'Death Defied',
        icon: 'https://cdn.communitydragon.org/latest/champion/Karthus/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Upon taking fatal damage, Karthus enters a zombie state for 7 seconds, during which he can cast his abilities at no cost. If Defile has been learned, it will remain toggled on for Death Defied\'s entire duration. Requiem becomes disabled after 4 seconds of the duration have elapsed.</p>'
          },
          {
            description: 'While under this state, Karthus becomes untargetable and immune to crowd control as well as prevents all incoming damage, but is also rendered unable to move, declare basic attacks, use summoner spells, and activate items.'
          }
        ],
        targeting: 'Passive',
        affects: 'Self',
        notes: 'Death Defied\'s  untargetability does not  destroy in-flight  projectiles.\nKarthus cannot be  executed by the  Aspect of the Dragon during Death Defied.\nAt the start of Death Defied, Karthus is set to  1 health.\nKarthus can still regenerate his health over the duration, but he will always die at the end of it.\nAfter Death Defied ends, the corpse of Karthus will retain unit collision despite being dead on the ground.\nKarthus\'  mana bar drains over the duration of Death Defied as an indicator of his time remaining in this state.\nZombie states trigger upon taking  lethal damage.\n Raw damage effects will not prevent zombie states from triggering.\nAll  resurrection effects will take precedence over effects that reanimate as a zombie.\nA champion that enters a zombie state will start their death timer upon triggering the effect.\nMost buffs and debuffs will be lost upon transitioning into a zombie state.\nThose that persist through death, such as  Brand\'s  Blaze, will remain.\nUndisplayed marker buffs, such as those imposed by  Veigar\'s  Event Horizon and  Viktor\'s  Gravity Field to prevent being affected multiple times by the same effect, will be lost.(bug)\nThis does not apply when transitioning from one zombie state to another zombie state.(bug)\nUnits within a zombie state cannot:\nUse  Recall or  Refillable Potion.\nActivate  resurrection effects.\nTake  Dark Passage, Catapult, or  gates.\nInitate the  Rift Herald Rodeo.\nPick up the  Eye of the Herald.\nBe targeted by the following:\n Bailout\n Chronoshift\n Umbral Trespass.\nBe affected by the following:\n Curse of the Black Mist\n Fear Beyond Death\'s chain missile\n Test of Spirit\'s initial missile\n Lamb\'s Respite\n Realm of Death\nFountain health restore',
        blurb: 'Innate: Upon  dying,  Karthus enters an  untargetable  spirit form for a few seconds that allows him to continue casting spells at no cost but without being able to move.'
      }
    ],
    Q: [
      {
        name: 'Lay Waste',
        icon: 'https://cdn.communitydragon.org/latest/champion/Karthus/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Karthus conjures a blast at the target location that detonates after 0.528 seconds to 0.759 seconds, granting sight of the area and dealing magic damage to all enemies within, doubled when only one target is struck.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      40,
                      59,
                      78,
                      97,
                      116
                    ]
                  },
                  {
                    values: [
                      35
                    ],
                    units: [
                      '% AP'
                    ]
                  }
                ]
              },
              {
                attribute: 'Enhanced Damage',
                modifiers: [
                  {
                    values: [
                      80,
                      118,
                      156,
                      194,
                      232
                    ]
                  },
                  {
                    values: [
                      70
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
          20,
          25,
          30,
          35,
          40
        ],
        cooldown: [
          0
        ],
        targeting: 'Location',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'Special',
        notes: 'The delay between the cast and the detonation is inconsistent, but always matches up with the VFX.(bug)\n Defile\'s ticks beyond the first has a similar issue.\nApplies  spell damage if it hits a single target and  area damage if it hits multiple targets.\nLay Waste also plays a different sound effect when it only hits one target.',
        blurb: 'Active:  Karthus conjures a delayed blast at the target location that deals magic damage to all enemies within,  doubled when only one target is struck.',
        castTime: '0.25',
        effectRadius: '160',
        targetRange: '875',
        maxCharges: 2
      }
    ],
    W: [
      {
        name: 'Wall of Pain',
        icon: 'https://cdn.communitydragon.org/latest/champion/Karthus/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Karthus erects a wall of pain at the target location perpendicular to his facing that lasts 5 seconds, granting sight around its pillars and center.</p>',
            leveling: [
              {
                attribute: 'Wall Length',
                modifiers: [
                  {
                    values: [
                      800,
                      900,
                      1000,
                      1100,
                      1200
                    ]
                  }
                ]
              }
            ]
          },
          {
            description: 'Enemies that touch the wall are inflicted with 25% magic resistance reduction and become slowed for 5 seconds, decaying over the duration. This can affect enemies only once per cast.',
            leveling: [
              {
                attribute: 'Slow',
                modifiers: [
                  {
                    values: [
                      40,
                      50,
                      60,
                      70,
                      80
                    ],
                    units: [
                      '%'
                    ]
                  }
                ]
              },
              {
                attribute: 'Reduced Slow',
                modifiers: [
                  {
                    values: [
                      20,
                      25,
                      30,
                      35,
                      40
                    ],
                    units: [
                      '%'
                    ]
                  }
                ]
              }
            ]
          }
        ],
        cost: [
          70
        ],
        cooldown: [
          15
        ],
        targeting: 'Location',
        affects: 'Enemies',
        spellshieldable: 'False',
        resource: 'Mana',
        blurb: 'Active:  Karthus erects a wall of pain at the target location that lasts a few seconds, enemies that touch it suffer reduced  magic resistance and become  slowed for a few seconds.',
        castTime: '0.25',
        targetRange: '1000',
        maxCharges: -1
      }
    ],
    E: [
      {
        name: 'Defile',
        icon: 'https://cdn.communitydragon.org/latest/champion/Karthus/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Karthus restores mana whenever he kills an enemy.</p>',
            leveling: [
              {
                attribute: 'Mana Restored',
                modifiers: [
                  {
                    values: [
                      10,
                      20,
                      30,
                      40,
                      50
                    ]
                  }
                ]
              }
            ]
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Toggle:</span> Karthus surrounds himself in a necrotic aura that deals magic damage every 0.25 seconds to all nearby enemies. Toggling Defile off triggers a final tick of damage.</p>',
            leveling: [
              {
                attribute: 'Magic Damage Per Tick',
                modifiers: [
                  {
                    values: [
                      7.5,
                      12.5,
                      17.5,
                      22.5,
                      27.5
                    ]
                  },
                  {
                    values: [
                      5
                    ],
                    units: [
                      '% AP'
                    ]
                  }
                ]
              },
              {
                attribute: 'Damage Per Second',
                modifiers: [
                  {
                    values: [
                      30,
                      50,
                      70,
                      90,
                      110
                    ]
                  },
                  {
                    values: [
                      20
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
            description: 'Defile cannot be toggled off during Death Defied.'
          }
        ],
        cost: [
          30,
          42,
          54,
          66,
          78
        ],
        cooldown: [
          0.5
        ],
        targeting: 'Auto',
        affects: 'Self, Enemies',
        spellshieldable: 'False',
        resource: 'Mana per second',
        damageType: 'Magic damage',
        spellEffects: 'aoedot',
        notes: 'Toggle abilities do not count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nDefile will restore  mana if Karthus destroys an enemy structure.\nDefile re-calculates its damage with each tick based on changes in Karthus\'s ability power or an increase in the rank of Defile without the need to toggle it off and on again.\nDefile will toggle off automatically if Karthus enters  resurrection.',
        blurb: 'Passive:  Karthus restores  mana whenever he kills an enemy.',
        castTime: 'none',
        effectRadius: '550',
        maxCharges: -1
      }
    ],
    R: [
      {
        name: 'Requiem',
        icon: 'https://cdn.communitydragon.org/latest/champion/Karthus/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Karthus channels for 3 seconds, then deals magic damage to all targetable enemy champions upon completion.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      200,
                      350,
                      500
                    ]
                  },
                  {
                    values: [
                      70
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
          100
        ],
        cooldown: [
          200,
          180,
          160
        ],
        targeting: 'Auto',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'Aoe',
        notes: 'Requiem\'s channel is telegraphed to all enemy champions by a beam of light that descends on all targets, including if they are  untargetable or even  dead.\nRequiem will affect  clones.\nThe damage will apply spell effects to targets in order of being spawned. Single target spell effects (such as  Luden\'s Companion) are thus triggered on the leftmost champion on the loading screen.\nRequiem will not affect  Neeko if she\'s  disguised as a non-champion if Karthus is affected by  Death Defied.(bug)\nThe following table refers for interactions while Karthus is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Teleport  Recall  Hexflash\n\n\nInterrupted by\n\n Flash\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects',
        castTime: '0.25',
        effectRadius: 'Global',
        maxCharges: -1
      }
    ]
  },
  lore: 'The harbinger of oblivion, Karthus is an undying spirit whose haunting songs are a prelude to the horror of his nightmarish appearance. The living fear the eternity of undeath, but Karthus sees only beauty and purity in its embrace, a perfect union of life and death. When Karthus emerges from the Shadow Isles, it is to bring the joy of death to mortals, an apostle of the unliving.',
  faction: 'shadow-isles',
  releaseDate: '2009-06-12',
  patchLastChanged: '14.24',
  price: {
    blueEssence: 1575,
    rp: 790
  }
}
export default champion