// Updated Patch 25.19 - 10/07/2025 08:16:12 AM CDT

const champion: Champion = {
  id: 233,
  key: 'Briar',
  name: 'Briar',
  title: 'the Restrained Hunger',
  abilities: [
    {
      key: 'P',
      name: 'Crimson Curse',
      affects: 'Enemies, Self',
      blurb: 'Innate:  Briar has no  base health regeneration but she gains increased healing from other sources based on her missing health.',
      damageType: 'Physical damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Briar\'s basic attacks and abilities inflict a bleed against enemies for 5 seconds, refreshing on subsequent applications, stacking up to 7 times and dealing 25% damage for stacks beyond the first. The bleed deals[ 10 - 50 (based on level) (+ 50% bonus AD) total physical damage over the duration, increased by 2.5 - 12.5 (based on level) (+ 12.5% bonus AD) for each subsequent stack and up to a maximum of 25 - 125 (based on level) (+ 125% bonus AD). ][ 1 - 5 (based on level) (+ 5% bonus AD) physical damage every 0.5 seconds, increased by 0.25 - 1.25 (based on level) (+ 1.25% bonus AD) for each subsequent stack and up to a maximum of 2.5 - 12.5 (based on level) (+ 12.5% bonus AD) per tick. ]Briar heals herself equal to 25% of the pre-mitigation damage dealt. If a target dies while bleeding, she will heal herself equal to 125% of the remaining bleed damage.</p>'
        },
        {
          description: 'Briar has no base health regeneration, but she increases healing from all sources by 0% - 40% (based on missing health) (+ 0% - 2.5% (based on missing health) per 100 bonus health).'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Briar/ability-icon/p',
      notes: 'Blood Frenzy\'s area of effect damage around the target does not apply bleed stacks.',
      spellEffects: 'default',
      spellshieldable: 'true',
      targeting: 'Passive'
    },
    {
      key: 'Q',
      name: 'Head Rush',
      affects: 'Enemies, Self',
      blurb: 'Active:  Briar  leaps to the target unit. If the target is an enemy, she deals magic damage,  stuns them briefly, and additionally reduces their  armor and  magic resistance for a few seconds.',
      castTime: 'none',
      cooldown: '13 / 12 / 11 / 10 / 9',
      cost: '0',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Briar leaps to the target unit. If the target is an enemy, she deals magic damage, applies on-hit effects, triggers on-attack effects, stuns them for 0.85 seconds, and reduces their armor and magic resistance for 5 seconds.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '60 / 90 / 120 / 150 / 180'
                },
                {
                  unit: '% bonus AD',
                  values: '80'
                },
                {
                  unit: '% AP',
                  values: '60'
                }
              ]
            },
            {
              attribute: 'Resistances Reduction',
              modifiers: [
                {
                  unit: '%',
                  values: '10 / 12.5 / 15 / 17.5 / 20'
                }
              ]
            }
          ]
        },
        {
          description: 'Head Rush resets Briar\'s basic attack timer.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Briar/ability-icon/q',
      maxCharges: -1,
      notes: 'Head Rush can be cast on jungle plants, wards, and traps.\nIt cannot be cast on structures.\nHead Rush\'s damage benefits from life steal.\nHead Rush is a non-following dash.\nIt picks its dash destination ~100 units in front of enemy targets, 75 units in front of enemy targets when already very close to them, 75 units in front of allied targets.\nIf already within 75 units of her target, she dashes to her current location, which takes 0 time but still triggers dash effects such as  Sudden Impact.\nIt does not force the target\'s resistance values to update immediately outside of the natural stat update cycle, which means it will typically still be mitigated by the unreduced magic resistance value.',
      resource: 'Current health',
      speed: '600 : 900 (based on distance)',
      spellEffects: 'spell',
      spellshieldable: 'true',
      targeting: 'Unit',
      targetRange: '475'
    },
    {
      key: 'W',
      name: 'Blood Frenzy',
      affects: 'Enemies, Self',
      blurb: 'Active:  Briar  dashes and senses her surroundings. If there is a nearby enemy upon her arrival, she gains Blood Frenzy for a few seconds, during which she can cast  Snack Attack.',
      castTime: 'none',
      cooldown: '14 / 13 / 12 / 11 / 10',
      cost: '0',
      damageType: 'Physical damage',
      effectRadius: '1000 / 275',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Briar dashes in the target direction. If there is a nearby enemy upon her arrival, she gains Blood Frenzy for 5 seconds, during which she can cast Snack Attack.</p>'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Blood Frenzy:</span> Briar breaks free from her pillory, causing her to become forced to basic attack the nearest enemy. She reveals the target and gains ghosting, bonus attack speed and bonus movement speed, as well as empowering her basic attacks to have an uncancelable windup and deal physical damage to enemies surrounding her target. This damage is affected by critical strike modifiers.</p>',
          leveling: [
            {
              attribute: 'Bonus Attack Speed',
              modifiers: [
                {
                  unit: '%',
                  values: '55 / 65 / 75 / 85 / 95'
                }
              ]
            },
            {
              attribute: 'Bonus Movement Speed',
              modifiers: [
                {
                  unit: '%',
                  values: '24 / 33 / 42 / 51 / 60'
                }
              ]
            },
            {
              attribute: 'Physical Damage',
              modifiers: [
                {
                  unit: '% AD',
                  values: '60 / 70 / 80 / 90 / 100'
                }
              ]
            }
          ]
        },
        {
          description: 'Briar prioritizes attacking champions, then large monsters or minions, and then any other unit. If she casts Head Rush on a non-champion, she will shift her target priority to large monsters or minions, then champions, and then any other unit.'
        },
        {
          description: 'Blood Frenzy causes Briar to become unable to receive movement and attack commands. The frenzy ends early if there are no longer any nearby valid targets or Chilling Scream is cast. Blood Frenzy resets Briar\'s basic attack timer. Head Rush and Certain Death can be cast during the dash.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Briar/ability-icon/w',
      maxCharges: -1,
      notes: 'Blood Frenzy acquires targets regardless of if they are visible or not.\nThis does not apply to  stealthed targets.\nIf the main attack  critically strikes, the cleave damage will do so as well.\nBriar uses  Frenzy as a resource to indicate the remaining duration of the frenzy, in seconds.\nThe following table refers for interactions while Briar is in her frenzy:\nWhile in the frenzy, Briar cannot control her movement nor declare who she attacks. She will automatically acquire a nearby enemy as her attack target based on a priority system, becoming forced to basic attack the target and consequently move into her attack range of them to do so.\n Disarming crowd control as well as any other lockout that would disable basic attacking will disable the forced attacks.\n Forced action crowd control will cause her forced attacks to be either overridden or disabled, depending on the actions being forced by the debuff.\n\n\nAttacking\n\nUncontrollable\n\n\nAbilities\n\n Head Rush can only be cast on targets within its radius.  Chilling Scream interrupts the frenzy.  Certain Death can be cast during the frenzy without interrupting it.\n\n\nMovement\n\nUncontrollable\n\n\nItems\n\nUsable\n\nAll items are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath',
      resource: 'Current health',
      speed: '1200',
      spellEffects: 'default',
      targeting: 'Location',
      targetRange: '75 - 300 / 650'
    },
    {
      key: 'W',
      name: 'Snack Attack',
      affects: 'Enemies, Self',
      blurb: 'Active:  Briar empowers her next attack during  Blood Frenzy to take a bite out of the target enemy. The attack gains increased  range, deals bonus physical damage based on the target\'s missing health and  heals Briar for a portion of the damage dealt.',
      castTime: 'none',
      cooldown: '14 / 13 / 12 / 11 / 10',
      cost: '0',
      damageType: 'Physical damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Briar empowers her next basic attack within 5 seconds during Blood Frenzy to take a bite out of the target enemy, gaining 50 bonus range, dealing bonus physical damage and healing her for 5% of her maximum health plus a percentage of the post-mitigation damage dealt.</p>',
          leveling: [
            {
              attribute: 'Bonus Physical Damage',
              modifiers: [
                {
                  values: '5 / 20 / 35 / 50 / 65'
                },
                {
                  unit: '% AD',
                  values: '5'
                },
                {
                  unit: '% (+ 2.5% per 100 bonus AD) of the target\'s missing health',
                  values: '9'
                }
              ]
            },
            {
              attribute: 'Heal Percentage',
              modifiers: [
                {
                  unit: '%',
                  values: '24 / 28 / 32 / 36 / 40'
                }
              ]
            }
          ]
        },
        {
          description: 'Snack Attack deals 110% damage against minions and monsters, with the damage based on the target\'s health ratio being capped at 400.',
          leveling: [
            {
              attribute: 'Non-Champion Bonus Damage',
              modifiers: [
                {
                  values: '5.5 / 22 / 38.5 / 55 / 71.5'
                },
                {
                  unit: '% AD',
                  values: '5.5'
                },
                {
                  unit: '% (+ 2.75% per 100 bonus AD) of the target\'s missing health',
                  values: '9.9'
                }
              ]
            }
          ]
        },
        {
          description: 'Snack Attack resets Briar\'s basic attack timer.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Briar/ability-icon/w',
      maxCharges: -1,
      notes: 'Snack Attack can only be used during  Blood Frenzy; if the frenzy ends at any point, the empowered attack will be lost immediately.\nSnack Attack can be cast while Briar is  charmed or  taunted.(bug)',
      spellEffects: 'proc',
      spellshieldable: 'false',
      targeting: 'Auto'
    },
    {
      key: 'E',
      name: 'Chilling Scream',
      width: '380',
      affects: 'Enemies, Self',
      castTime: 'None / 0.15',
      cooldown: '16',
      cost: '0',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Briar prepares to unleash a scream in the target direction, charging for up to 1 second, during which she increases Chilling Scream\'s damage and range, and gains 35% damage reduction and heals herself every 0.25 seconds.</p>',
          leveling: [
            {
              attribute: 'Heal Per Tick',
              modifiers: [
                {
                  unit: '% maximum health',
                  values: '2.5 / 2.88 / 3.25 / 3.63 / 4'
                }
              ]
            },
            {
              attribute: 'Maximum Heal',
              modifiers: [
                {
                  unit: '% maximum health',
                  values: '10 / 11.5 / 13 / 14.5 / 16'
                }
              ]
            }
          ]
        },
        {
          description: 'Chilling Scream can be recast within the duration, and does so automatically afterwards. Chilling Scream\'s charge cannot be interrupted by crowd control.'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Briar unleashes the scream in the direction she targeted at the time of cast, dealing magic damage to enemies hit and slowing them by 80% for 0.5 seconds.</p>',
          leveling: [
            {
              attribute: 'Maximum Magic Damage',
              modifiers: [
                {
                  values: '80 / 115 / 150 / 185 / 220'
                },
                {
                  unit: '% bonus AD',
                  values: '100'
                },
                {
                  unit: '% AP',
                  values: '100'
                }
              ]
            },
            {
              attribute: 'Minimum Magic Damage',
              modifiers: [
                {
                  values: '2 / 2.88 / 3.75 / 4.63 / 5.5'
                },
                {
                  unit: '% bonus AD',
                  values: '2.5'
                },
                {
                  unit: '% AP',
                  values: '2.5'
                }
              ]
            }
          ]
        },
        {
          description: 'If Chilling Scream was charged for its full duration, enemies hit are also knocked back 575 units. If they collide with terrain, they will rebound to take bonus magic damage and become knocked up for 0.5 seconds and stunned for 1.5 seconds.',
          leveling: [
            {
              attribute: 'Bonus Magic Damage',
              modifiers: [
                {
                  values: '140 / 215 / 290 / 365 / 440'
                },
                {
                  unit: '% bonus AD',
                  values: '240'
                },
                {
                  unit: '% AP',
                  values: '240'
                }
              ]
            },
            {
              attribute: 'Total Magic Damage',
              modifiers: [
                {
                  values: '220 / 330 / 440 / 550 / 660'
                },
                {
                  unit: '% bonus AD',
                  values: '340'
                },
                {
                  unit: '% AP',
                  values: '340'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Briar/ability-icon/e',
      maxCharges: -1,
      notes: 'Chilling Scream increases its damage by its minimum every 0.025 seconds over the duration.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe following table refers for interactions while Briar is  channeling:\n\n\nType\n\nCharge channel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled, but can still use trinkets\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall\n\n\nInterrupted by\n\n Hexflash (Recasts)\n\n\nInterrupted by\n\nDeath',
      projectile: 'TRUE',
      resource: 'Current health',
      speed: '1900 / 1800',
      spellEffects: 'spellaoe',
      spellshieldable: 'true',
      targeting: 'Direction / Auto'
    },
    {
      key: 'R',
      name: 'Certain Death',
      width: '320',
      affects: 'Enemies, Self',
      castTime: '1 / 1.25',
      cooldown: '120 / 100 / 80',
      cost: '0',
      damageType: 'Magic damage',
      effectRadius: 'Global /  1500 /  575',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Briar kicks her pillory\'s hemolith in the target direction, briefly granting sight of its surroundings as it travels and marking the first enemy champion hit as her prey. The mark\'s application disrupts the target\'s ongoing channels. While the target is marked, they are revealed.</p>'
        },
        {
          description: 'If a target is hit, Briar cleanses herself from all crowd control and becomes immune to them over a cast time, afterwards dashing to them with displacement immunity. Upon arrival, she creates an explosion around the marked target that deals magic damage to them and nearby enemies and fears all non-marked targets for 1.5 seconds, during which they are slowed by 35%. She then enters a state of Hematomania.',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '150 / 250 / 350'
                },
                {
                  unit: '% bonus AD',
                  values: '50'
                },
                {
                  unit: '% AP',
                  values: '120'
                }
              ]
            }
          ]
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Hematomania:</span> Briar gains all effects of Blood Frenzy as well as bonus armor and bonus magic resistance equal to 20% AD, life steal, and additional bonus movement speed.</p>',
          leveling: [
            {
              attribute: 'Life Steal',
              modifiers: [
                {
                  unit: '%',
                  values: '10 / 15 / 20'
                }
              ]
            },
            {
              attribute: 'Additional Bonus Movement Speed',
              modifiers: [
                {
                  unit: '%',
                  values: '10 / 20 / 30'
                }
              ]
            }
          ]
        },
        {
          description: 'While in the empowered frenzy, Briar prioritizes attacking the marked target over all other units and regardless of range. If that target becomes invalid, she will shift back to her normal targeting priority until the marked target can be attacked again. Hematomania lasts until the mark is dispelled by any means, including Briar\'s or the target\'s death.'
        },
        {
          description: 'Casting Chilling Scream removes the target\'s mark and ends Hematomania early. Head Rush\'s cast does not shift her targeting priority during Hematomania.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Briar/ability-icon/r',
      maxCharges: -1,
      notes: 'Briar will track the target with the  dash if they change locations.\nShe will not stop tracking the target until she reaches them, as there is no maximum tracking distance.\nBriar lands 100 units in front of her target at the end of the dash.\nBriar will not initiate the second cast if she is being  suppressed, is under  resurrection, or is in the  Realm of Death when her target is hit by the missile in the normal realm.\nSince Certain Death cleanses herself from all crowd control when the first cast hits, she will be able to start the second cast due to removing the suppression effect.\nBriar will still dash to the target even if they die before she reaches them.\nBriar will transition from having  total crowd control immunity during the cast time of the dash, to having  displacement immunity during the dash.\nBriar will place herself onto the ground and interrupt  displacements affecting her upon starting the second cast time.\nHematomania\'s targeting priorities differ slightly from that of  Blood Frenzy\'s:\nShe will prioritize the marked target regardless of range and over all other units as long as it can be attacked.\nIf the marked target is not available, then she shifts her priority to the nearest other champion, then large monster or minion, and then any other unit.\nIf neither the marked target is valid or any other valid targets are close nearby, then she will prioritize targeting the nearest other champion, then large monster or minion, and then any other unit within a global radius.\nStarting the second cast interrupts any spells that Briar is  channeling.\nThe mark will expire if Hematomania\'s buff is dispelled.\nCasting  Blood Frenzy during Hematomania will not grant any additional bonuses nor will it override Hematomania\'s effects.\nGaining Hematomania while Blood Frenzy is active will override the previous buff.\nThe  disrupt is \'wrapped\' into a status effect that says the target is  Silenced for 0.3 seconds, but it does not actually silence. It however makes sure that the disrupt is prevented by  immunity to silences.\nThis ability will cast from wherever the caster is at the start of the cast time.\nThe following table refers for interactions while Briar is in either the first or second cast time:\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection\n\nThe following table refers for interactions while Briar is dashing:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath\n\nThe following table refers for interactions while Briar is in Hematomania:\n\n\nAttacking\n\nUncontrollable\n\n\nAbilities\n\n Head Rush can only be cast on targets within its radius.  Chilling Scream interrupts the frenzy.  Certain Death is disabled.\n\n\nMovement\n\nUncontrollable\n\n\nItems\n\nUsable\n\nAll items are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath',
      projectile: 'TRUE',
      resource: 'Current health',
      speed: '2000 / 2500 : 5000',
      spellEffects: 'spellaoe',
      spellshieldable: 'true',
      targeting: 'Direction'
    }
  ],
  adaptiveType: 'Physical damage',
  attackType: 'Melee',
  attributeRatings: {
    abilityReliance: 10,
    control: 3,
    damage: 2,
    difficulty: 2,
    mobility: 3,
    toughness: 2,
    utility: 1
  },
  faction: 'noxus',
  lore: 'A failed experiment by the Black Rose, Briar\'s uncontrollable bloodlust required a special pillory to focus her frenzied mind. After years of confinement, this living weapon broke free from her restraints and unleashed herself into the world. Now she\'s controlled by no one—following only her hunger for knowledge and blood—and relishes the opportunities to let loose, even if reining back the frenzy isn\'t easy.',
  patchLastChanged: '25.14',
  positions: [
    'Jungle'
  ],
  price: {
    blueEssence: 2400,
    rp: 880
  },
  releaseDate: '2023-09-14',
  resource: 'Frenzy',
  roles: [
    'Assassin',
    'Diver',
    'Fighter'
  ],
  stats: {
    acquisitionRadius: {
      flat: 400
    },
    armor: {
      flat: 30,
      perLevel: 4.2
    },
    attackCastTime: {
      flat: 0.3
    },
    attackDamage: {
      flat: 60,
      perLevel: 2.5
    },
    attackDelayOffset: {
      flat: 0
    },
    attackRange: {
      flat: 125
    },
    attackSpeed: {
      flat: 0.644,
      perLevel: 2
    },
    attackSpeedRatio: {
      flat: 0.669
    },
    attackTotalTime: {
      flat: 1.553
    },
    criticalStrikeDamage: {
      flat: 175
    },
    criticalStrikeDamageModifier: {
      flat: 1
    },
    gameplayRadius: {
      flat: 65
    },
    health: {
      flat: 625,
      perLevel: 95
    },
    healthRegen: {
      flat: 0
    },
    magicResistance: {
      flat: 32,
      perLevel: 2.05
    },
    mana: {
      flat: 0
    },
    manaRegen: {
      flat: 0
    },
    movespeed: {
      flat: 340
    },
    pathingRadius: {
      flat: 35
    },
    selectionRadius: {
      flat: 120
    }
  }
}
export default champion