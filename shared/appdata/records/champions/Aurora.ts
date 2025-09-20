// Updated Patch 25.17 - 09/18/2025 02:20:02 AM CDT

const champion: Champion = {
  id: 893,
  key: 'Aurora',
  name: 'Aurora',
  title: 'the Witch Between Worlds',
  abilities: [
    {
      key: 'P',
      name: 'Spirit Abjuration',
      affects: 'Enemies, Self',
      blurb: 'Innate:  Aurora\'s  basic attacks and damaging  abilities inflict a  stack of Spirit Abjuration, stacking up to 3 times.',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Aurora\'s damaging basic attacks and abilities apply a stack of Spirit Abjuration to enemies for 4 seconds, refreshing on subsequent applications and stacking up to 3 times. The third stack against a target consumes them all to deal bonus magic damage equal to 2.5% (+ 2% per 100 AP) of the target\'s maximum health, capped at 100 - 270 (based on level) against monsters.</p>'
        },
        {
          description: 'Upon consuming the stacks from a champion, Aurora additionally exorcises them, freeing a Spirit from the target that follows her for the same duration. For each active Spirit, Aurora is healed for 3 - 20 (based on level) (+ 2% AP) every second. Subsequent exorcisms free further Spirits and refresh all active Spirits. Aurora may have up to 4 Spirits at a time, for a maximum heal per tick of 12 - 80 (based on level) (+ 8% AP).'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Aurora/ability-icon/p',
      notes: 'The spirits grant vision of a small area around themselves.',
      spellEffects: 'proc',
      spellshieldable: 'false',
      targeting: 'Passive'
    },
    {
      key: 'Q',
      name: 'Twofold Hex',
      width: '210 /  90',
      affects: 'Enemies, Self',
      blurb: 'Active:  Aurora fires a bolt of energy that deals magic damage to enemies hit and marks them for a short time. Twofold Hex can be recast while at least one target is marked.',
      castTime: '0.25 / None',
      cooldown: '9 / 8.5 / 8 / 7.5 / 7',
      cost: '60',
      damageType: 'Magic damage',
      effectRadius: 'Global',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Aurora fires a bolt of energy in the target direction that deals magic damage to enemies hit and marks them with a curse for 3.5 seconds.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '45 / 70 / 95 / 120 / 145'
                },
                {
                  unit: '% AP',
                  values: '40'
                }
              ]
            }
          ]
        },
        {
          description: 'Twofold Hex can be recast after 0.1 seconds while at least one target is marked, and does so automatically at the end of the mark\'s duration.'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Aurora expunges the curse from all marked targets, drawing the spiritual energy back to her as bolts that each deal magic damage to all enemies they pass through, reduced to 40% against minions and 50% against monsters and increased by 0% - 50% (based on target\'s missing health). Subsequent bolts against an enemy deal 20% damage.</p>',
          leveling: [
            {
              attribute: 'Minimum Magic Damage',
              modifiers: [
                {
                  values: '45 / 70 / 95 / 120 / 145'
                },
                {
                  unit: '% AP',
                  values: '40'
                }
              ]
            },
            {
              attribute: 'Maximum Magic Damage',
              modifiers: [
                {
                  values: '67.5 / 105 / 142.5 / 180 / 217.5'
                },
                {
                  unit: '% AP',
                  values: '60'
                }
              ]
            },
            {
              attribute: 'Subsequent Bolt Minimum Magic Damage',
              modifiers: [
                {
                  values: '9 / 14 / 19 / 24 / 29'
                },
                {
                  unit: '% AP',
                  values: '8'
                }
              ]
            },
            {
              attribute: 'Subsequent Bolt Maximum Magic Damage',
              modifiers: [
                {
                  values: '13.5 / 21 / 28.5 / 36 / 43.5'
                },
                {
                  unit: '% AP',
                  values: '12'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Aurora/ability-icon/q',
      maxCharges: -1,
      notes: 'Twofold Hex can also be recast for 0.66 seconds after the 0.1-second delay. If the recast is used during this time window, Twofold Hex will be buffered to recast automatically as soon as the bolt missile from the first cast has fizzled from reaching maximum range, even if no targets are marked. This automatic recast can also be buffered during Twofold Hex\'s cast time.\n Spell shield can block the effects of the active and the recast.\nThe marked targets do not need to be visible in order for Aurora to recast Twofold Hex.\nThey do however need to be targetable; if all marked targets are  untargetable, Twofold Hex\'s recast is disabled.\nOnce Aurora has successfully recast Twofold Hex, she will not be able to recast it again for the duration regardless of any number of marked enemies still remaining.\nIf all enemies marked by Twofold Hex are  untargetable when Aurora manually recasts Twofold Hex, the ability will be consumed but evidently without effect. It will however automatically recast again at the end of the marks\' duration to expunge any remaining marks.(note)\nThis ability will cast from wherever the caster is at the end of the cast time.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '1600 / 2000',
      spellEffects: 'spellaoe',
      spellshieldable: 'true',
      targeting: 'Direction / Auto'
    },
    {
      key: 'W',
      name: 'Across the Veil',
      affects: 'self',
      blurb: 'Active:  Aurora  hops into  invisibility for a moment and gains Realm Hopper for a few seconds.',
      castTime: 'none',
      cooldown: '22 / 21 / 20 / 19 / 18',
      cost: '80',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Aurora hops in the target direction inside a portal to the Spirit Realm. Upon completing the dash, she becomes invisible for a duration and gains Realm Hopper for 4 seconds.</p>',
          leveling: [
            {
              attribute: 'Invisibility Duration',
              modifiers: [
                {
                  unit: ' seconds',
                  values: '1 / 1.15 / 1.3 / 1.45 / 1.6'
                }
              ]
            }
          ]
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Realm Hopper:</span> Aurora becomes ghosted and gains bonus movement speed for the duration.</p>',
          leveling: [
            {
              attribute: 'Bonus Movement Speed',
              modifiers: [
                {
                  unit: '%',
                  values: '20 / 25 / 30 / 35 / 40'
                }
              ]
            }
          ]
        },
        {
          description: 'Scoring a takedown against an enemy champion within 3 seconds of damaging them will reset Across the Veil\'s cooldown.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Aurora/ability-icon/w',
      maxCharges: -1,
      notes: 'Aurora will not gain the stealth if her dash is interrupted.\nShe will however gain the stealth despite the dash being interrupted from colliding with  Between Worlds\' border.\nHer dash is interrupted in this case from being overridden by the rift dash.\nAurora is locked out of using all abilities, summoner spells, and item actives during the dash.\nShe cannot buffer these spells to cast after the lockout. This is in place to prevent her from breaking the stealth from certain spell casts.\nThis is the case even for spells that do not break stealth when cast.\nUsing a basic attack breaks the stealth at the end of the attack windup.\nAt rank 0, Realm Hopper will grant Aurora 15% bonus movement speed. This is only relevant for using  Between Worlds.',
      resource: 'Mana',
      speed: '350',
      targeting: 'direction'
    },
    {
      key: 'E',
      name: 'The Weirding',
      width: '175',
      affects: 'Enemies',
      blurb: 'Active:  Aurora blasts energy and  recoils backward. The blast deals magic damage to enemies hit and  slows them for a moment.',
      castTime: '0.35',
      cooldown: '15 / 14 / 13 / 12 / 11',
      cost: '80',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Aurora blasts energy in a line in the target direction and recoils 250 units in the opposite direction. The blast deals magic damage to enemies hit and slows them by 80% for 1 second decaying after the first 0.15 seconds.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '70 / 110 / 150 / 190 / 230'
                },
                {
                  unit: '% AP',
                  values: '70'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Aurora/ability-icon/e',
      maxCharges: -1,
      notes: 'Aurora is locked out of using all abilities, summoner spells, and item actives during the dash.\nWhile  grounded or  rooted, The Weirding can be cast but Aurora will not  dash.\nSimilarly, if Aurora is affected by ground or root during the cast time, she will not dash afterwards.\nThis only applies to ground and root.  Immobilizing effects will not prevent the dash afterwards.(note)\nThis ability will cast from wherever the caster is at the end of the cast time.',
      projectile: 'FALSE',
      resource: 'Mana',
      speed: '150 + 200% movement speed',
      spellEffects: 'spellaoe',
      spellshieldable: 'true',
      targeting: 'Direction'
    },
    {
      key: 'R',
      name: 'Between Worlds',
      affects: 'Enemies, self',
      blurb: 'Active:  Aurora becomes  unstoppable and  leaps, unleashing an expanding shockwave that deals magic damage to enemies hit and  slows them briefly, and gaining  Realm Hopper for a few seconds.',
      castTime: 'none',
      collisionRadius: '25',
      cooldown: '140 / 120 / 100',
      cost: '100',
      damageType: 'Magic damage',
      effectRadius: '700',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Aurora leaps in the target direction with displacement immunity over 0.4 seconds. She then gains Realm Hopper for 3.5 seconds and unleashes a shockwave from 425 units in front of her, expanding over 0.75 seconds to deal magic damage to enemies hit and slow them by 30% for 2 seconds.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '175 / 275 / 375'
                },
                {
                  unit: '% AP',
                  values: '70'
                }
              ]
            }
          ]
        },
        {
          description: 'The shockwave leaves behind a circular rift to the Spirit Realm for a duration, forming borders that interact with Aurora and enemies. If Aurora collides with the border, she dashes to the diametrically opposite side of the rift over 0.4 seconds, becoming untargetable and unable to act during the travel. If an enemy collides with the border, they are slowed by 50% for a duration.',
          leveling: [
            {
              attribute: 'Rift Duration',
              modifiers: [
                {
                  unit: ' seconds',
                  values: '1.75 / 2.5 / 3.25'
                }
              ]
            },
            {
              attribute: 'Slow Duration',
              modifiers: [
                {
                  unit: ' seconds',
                  values: '1.5 / 1.75 / 2'
                }
              ]
            }
          ]
        },
        {
          description: 'Between Worlds can be recast after 1 second of unleashing the shockwave while the rift is active.'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Aurora closes the rift prematurely.</p>'
        },
        {
          description: 'The rift closes immediately if Aurora dies, enters resurrection, leaves the area, or is not within the area upon creation.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Aurora/ability-icon/r',
      maxCharges: -1,
      notes: 'Collision with the border is essentially moving within range of it while being targetable, including via normal movement, dash, or displacement.\nAurora and enemies can collide with the border any number of times, as much as the duration permits.\nEnemies can be applied the slow by colliding with the border only once after moving within collision radius of it. The slow may be applied again from collision only until after they have left the collision radius; it cannot be continuously applied while enemies remain within collision radius of the border.\n Untargetable units cannot collide with the border, including Aurora herself.\nThe in-game tooltip incorrectly lists the rift duration as 0.75 seconds longer than it actually is.(bug)\nIt is seemingly including the time required for the shockwave to fully expand. However, the rift and its borders will only form after the fact, so the actual duration of the rift is shorter.\nBetween Worlds\'   untargetability from the rift dash does not  destroy in-flight  projectiles.\nBetween Worlds\'  first cast is disabled while  grounded or  rooted.\nAurora can still dash from colliding with the border even if she is  immobilized or  grounded.\n Spell shield can block both the shockwave and border collision.\nA pair of portals signifying Aurora\'s nearest possible entry and its corresponding exit is visible to her at all times.\nThe following table refers for interactions while Aurora is dashing:\nThis lockout applies to both the initial dash and the dashes in the formed rift.\nThe lockout during the initial cast\'s dash persists for another 0.5 seconds after the dash ends.\nThe lockout during the rift dash persists for another 0.15 seconds after the dash ends.\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath',
      projectile: 'FALSE',
      resource: 'Mana',
      spellEffects: 'spellaoe',
      spellshieldable: 'true',
      targeting: 'Direction / Auto'
    }
  ],
  adaptiveType: 'Magic damage',
  attackType: 'Ranged',
  attributeRatings: {
    abilityReliance: 100,
    control: 2,
    damage: 3,
    difficulty: 2,
    mobility: 3,
    toughness: 1,
    utility: 1
  },
  faction: 'freljord',
  lore: 'From the moment she was born, Aurora navigated life with a unique ability to move between the spirit and material realms. Determined to learn more about the spirit realm\'s inhabitants, she left her home to further her research and happened upon a wayward demigod who\'d become twisted and lost to time. Witnessing his desperation, Aurora resolved to find a way to help her feral friend regain his forgotten identity—a journey that would take her to the farthest reaches of the Freljord.',
  patchLastChanged: '25.14',
  positions: [
    'Middle',
    'Top'
  ],
  price: {
    blueEssence: 3150,
    rp: 975
  },
  releaseDate: '2024-07-17',
  resource: 'Mana',
  roles: [
    'Assassin',
    'Burst',
    'Mage'
  ],
  stats: {
    acquisitionRadius: {
      flat: 525
    },
    armor: {
      flat: 23,
      perLevel: 4.5
    },
    attackCastTime: {
      flat: 0.3
    },
    attackDamage: {
      flat: 53,
      perLevel: 3
    },
    attackDelayOffset: {
      flat: -0.099
    },
    attackRange: {
      flat: 550
    },
    attackSpeed: {
      flat: 0.668,
      perLevel: 2
    },
    attackSpeedRatio: {
      flat: 0.668
    },
    attackTotalTime: {
      flat: 1.6
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
      flat: 607,
      perLevel: 110
    },
    healthRegen: {
      flat: 6,
      perLevel: 0.55
    },
    magicResistance: {
      flat: 32,
      perLevel: 1.3
    },
    mana: {
      flat: 475,
      perLevel: 30
    },
    manaRegen: {
      flat: 8,
      perLevel: 0.8
    },
    movespeed: {
      flat: 335
    },
    pathingRadius: {
      flat: 35
    },
    selectionRadius: {
      flat: 100
    }
  }
}
export default champion