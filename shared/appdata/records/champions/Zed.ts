// Updated Patch 25.17 - 09/18/2025 02:20:05 AM CDT

const champion: Champion = {
  id: 238,
  key: 'Zed',
  name: 'Zed',
  title: 'the Master of Shadows',
  abilities: [
    {
      key: 'P',
      name: 'Contempt for the Weak',
      affects: 'Enemies',
      blurb: 'Innate:  Zed\'s basic attacks against targets below half health will deal bonus magic damage equal to a portion of their maximum health.',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Zed\'s basic attacks against targets below 50% maximum health are empowered to deal 6% / 8% / 10% (based on level) of the target\'s maximum health as bonus magic damage.</p>'
        },
        {
          description: 'Against monsters, Contempt for the Weak deals 200% damage, capped at 300.'
        },
        {
          description: 'Contempt for the Weak cannot occur on the same champion more than once every few seconds.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Zed/ability-icon/p',
      notes: 'The enhanced attack applies other on-hit effects and can  critically strike as normal (the bonus damage cannot).\nContempt for the Weak is not consumed when  dodged or  missed, but it is consumed when  blocked.\nContempt for the Weak considers the target\'s health upon landing the attack, not when it\'s declared.\nIf the target falls below the threshold while Zed is winding up the attack, Contempt for the Weak applies, and vice versa.\nThe empowered attack will not trigger against structures.',
      onTargetCdStatic: '10',
      spellEffects: 'proc',
      spellshieldable: 'False',
      targeting: 'Passive'
    },
    {
      key: 'Q',
      name: 'Razor Shuriken',
      width: '100',
      affects: 'Enemies',
      blurb: 'Active:  Zed throws a shuriken in the target direction that deals physical damage to enemies hit.',
      castTime: '0.25',
      cooldown: '6',
      cost: '75 / 70 / 65 / 60 / 55',
      damageType: 'Physical damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Zed throws a shuriken in the target direction that deals physical damage to enemies hit, reduced to 60% against targets beyond the first.</p>',
          leveling: [
            {
              attribute: 'Physical Damage',
              modifiers: [
                {
                  values: '80 / 120 / 160 / 200 / 240'
                },
                {
                  unit: '% bonus AD',
                  values: '100'
                }
              ]
            },
            {
              attribute: 'Reduced Damage',
              modifiers: [
                {
                  values: '48 / 72 / 96 / 120 / 144'
                },
                {
                  unit: '% bonus AD',
                  values: '60'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Zed/ability-icon/q',
      maxCharges: -1,
      notes: 'Shurikens blocked by  spell shield still count as being hit for the reduced pass-through damage.\nIf Zed buffers an attack command during Razor Shuriken\'s cast time the attack will perform slower than if Zed had attacked after the cast time.\nThe same does not happen if Zed recasts  Living Shadow during Razor Shuriken\'s cast time.\nThis ability will cast from wherever the caster is at the end of the cast time.',
      projectile: 'TRUE',
      resource: 'Energy',
      speed: '1700',
      spellEffects: 'Area of effect',
      spellshieldable: 'true',
      targeting: 'Direction',
      targetRange: '925'
    },
    {
      key: 'W',
      name: 'Living Shadow',
      affects: 'Self',
      blurb: 'Passive: Whenever  Zed and his  Shadows hit an ability on the same target, he restores  energy.',
      castTime: 'none',
      cooldown: '20 / 19 / 18 / 17 / 16',
      cost: '40 / 35 / 30 / 25 / 20',
      effectRadius: '2000 / Global',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Zed restores energy whenever he and his Shadows or multiple Shadows hit an ability on the same target. This may only occur once per cast ability.</p>',
          leveling: [
            {
              attribute: 'Energy Restored',
              modifiers: [
                {
                  values: '30 / 35 / 40 / 45 / 50'
                }
              ]
            }
          ]
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Zed creates a Shadow that dashes to the target location and remains there for 5.25 seconds, being able to mimic Razor Shuriken and Shadow Slash regardless of range. Living Shadow can be recast while within range of the Shadow.</p>'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Zed and the Shadow blink to swap places. If Living Shadow was recast while the Shadow is dashing, the recast will instead occur once it has been placed.</p>'
        },
        {
          description: 'If an ability is cast while the Shadow is dashing, it will cast that ability once it has been placed. See Pets for more details about Shadows.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Zed/ability-icon/w',
      maxCharges: -1,
      notes: 'Zed gains a buff for 5.25 seconds that indicates and determines the duration in which he may recast Living Shadow.\nThe buff is granted briefly after Living Shadow is cast.\nIf cast at minimum distance, the buff and the Shadow\'s individual durations will effectively start at the same time.\nIf cast at greater than the minimum distance, then the buff\'s duration will start before the Shadow\'s duration.\nThe passive will grant its energy refund at rank 1 even if Living Shadow hasn\'t been learned yet.\nThe  energy refund is not granted if the mimicked ability is blocked by a  spell shield.\nLiving Shadow cannot be recast while  grounded or  rooted.\nIf Living Shadow is recast during  Razor Shuriken, Zed will instantly release the shuriken from his original position while still remaining in cast time, and the  Shadow will release the shuriken based on Zed\'s remaining cast time.(bug)\nThe  Shadow will cast  Shadow Slash independently of being in  Razor Shuriken\'s cast time or not.(note)\nZed will swap places with the  Shadow by all means if he buffers Living Shadow\'s recast during its dash.(note)\nLiving Shadow cannot be recast while Zed is marking his target with  Death Mark, but may still be recast if it was buffered.(bug)\nIf Zed casts Living Shadow while a non- Death Mark Shadow is already present, the previous Shadow will instantly disappear.\n Shadows will not disappear when Zed dies.(bug)',
      resource: 'Energy',
      speed: '2500',
      targeting: 'Location / Auto',
      targetRange: '650'
    },
    {
      key: 'E',
      name: 'Shadow Slash',
      affects: 'Enemies',
      blurb: 'Active:  Zed slashes to deal physical damage to nearby enemies hit. Enemies hit by a  Shadow\'s slash are also briefly  slowed.',
      castTime: 'none',
      cooldown: '5 / 4.5 / 4 / 3.5 / 3',
      cost: '40',
      damageType: 'Physical damage',
      effectRadius: '315 / 290',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Zed slashes to deal physical damage to nearby enemies.</p>',
          leveling: [
            {
              attribute: 'Physical Damage',
              modifiers: [
                {
                  values: '70 / 95 / 120 / 145 / 170'
                },
                {
                  unit: '% bonus AD',
                  values: '80'
                }
              ]
            }
          ]
        },
        {
          description: 'Enemies hit by a Shadow\'s slash are slowed for 1.5 seconds, with multiple slashes dealing no additional damage but the slow\'s effectiveness being increased by 50%.',
          leveling: [
            {
              attribute: 'Slow',
              modifiers: [
                {
                  unit: '%',
                  values: '20 / 25 / 30 / 35 / 40'
                }
              ]
            },
            {
              attribute: 'Enhanced Slow',
              modifiers: [
                {
                  unit: '%',
                  values: '30 / 37.5 / 45 / 52.5 / 60'
                }
              ]
            }
          ]
        },
        {
          description: 'Living Shadow\'s current cooldown is reduced by 3 seconds for each enemy champion hit by Zed\'s slash.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Zed/ability-icon/e',
      maxCharges: -1,
      notes: 'An enemy counts as being hit by multiple slashes at once when they are hit by a Shadow Slash from Zed and at least one of his Shadows, or two of his Shadows. In any case, a target can only be damaged by one slash per cast of Shadow Slash.\nThe enhanced slow strength is applied as long as the enemy is hit by at least two slashes, even if Zed\'s slash is one of them despite him not being able to apply the base slow himself.\nSlashes beyond the second have no additional effect on the target; a third slash against an enemy does not deal damage nor increase the slow\'s strength (slow effectiveness is capped at 150% of the base strength).\n Spell shield will only block one Shadow Slash even if multiple of them hit at the same time, prioritizing blocking the slash from Zed\'s  Shadow.\nThe damage from at least one slash will always be blocked but still counts for preventing other slashes from applying the damage (other slashes are considered to be additional slashes which are not eligible for dealing the damage).\nThe slow will be blocked if hit by Zed\'s slash and a Shadow\'s slash, due to the latter slash being blocked.\nThe slow will be applied at base strength if hit by the slashes of two Shadows, due to at least one slash from a Shadow successfully hitting the target with the other slash being blocked (thus preventing the slow from being enhanced).\nThe slow will be applied at enhanced strength if hit by the slashes of Zed and two of his Shadows, due at least two of the slashes successfully hitting the target (in this case, the slashes from Zed and one of the  Shadows).\nShadow Slash does not interrupt attack, movement, or cast commands.',
      resource: 'Energy',
      spellEffects: 'aoe',
      spellshieldable: 'special',
      targeting: 'Auto'
    },
    {
      key: 'R',
      name: 'Death Mark',
      affects: 'Self, Enemies',
      blurb: 'Active:  Zed becomes  untargetable while  dashing to the target enemy champion, then renders them Marked for Death for a short time, during which he is  ghosted. He leaves behind a  Shadow that will remain for a period and mimic  Razor Shuriken and  Shadow Slash.',
      castTime: 'none',
      cooldown: '120 / 110 / 100',
      cost: '0',
      damageType: 'Physical damage',
      effectRadius: 'Global',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Zed becomes untargetable and, after a 0.6-second delay, he dashes to 125 units beyond the target enemy champion from his position at the end of the delay over 0.35 seconds. Afterwards, he becomes targetable again, renders the target Marked for Death for 3 seconds, and gains ghosting for the same duration.</p>'
        },
        {
          description: 'Zed also spawns a Shadow at his casting position for 9 seconds which is able to mimic Razor Shuriken and Shadow Slash regardless of range. Death Mark can be recast after 0.5 seconds of his reappearance while the Shadow is active, though not in the last 1.25 seconds of its duration.'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Marked for Death:</span> Zed stores a portion of all pre-mitigation physical damage and magic damage he and his Shadows deal to the target, detonating at the end of the duration to deal physical damage.</p>',
          leveling: [
            {
              attribute: 'Physical Damage',
              modifiers: [
                {
                  unit: '% AD',
                  values: '100'
                },
                {
                  tooltip: 'Scaling per rank:\n25 / 40 / 55% of damage stored',
                  unit: '% of damage stored',
                  values: '25 - 55'
                }
              ]
            }
          ]
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Zed and the Shadow blink to swap places.</p>'
        },
        {
          description: 'If the target dies or is 1950 or more units away before the dash begins, Death Mark is cancelled, causing the ability to go on a 0.5-second cooldown, Zed to reappear at the cast location, and the Shadow he spawned to disappear.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Zed/ability-icon/r',
      maxCharges: -1,
      notes: 'Zed gains a buff for 7.5 seconds that indicates and determines the duration in which he may recast Death Mark.\nThe buff is granted on-cast and lingers for 0.25 seconds after it expires.\nThe  Shadow is spawned the moment Death Mark is cast.\nZed will track the target if they change locations.\nHe will dash through the target\'s previous location while still applying the mark if they are 2200 or more units away.\nZed will become targetable, apply the mark, and gain the  ghosting as soon as his dash ends.\nThe mark will not be applied to the target if they are  untargetable by the time Zed\'s dash ends.\nZed will be ordered to basic attack his target after reappearing.\nDeath Mark\'s stored damage derives from all basic attacks, abilities, items, runes and buffs.\nDeath Mark\'s  Shadow is functionally the same as a regular one, but it lasts longer and can be swapped to regardless of range.\nThe range at which it mimics Zed\'s abilities does not change.\n Spell shield will only block the mark\'s application. They will not prevent Zed from initiating Death Mark against the target nor block the detonation from a mark that is already applied.\nIf Zed dies during Death Mark, the ability will cancel instantly and he will reappear at his current location. The cooldown is not refunded.\nIf he enters  resurrection before the dash, Death Mark does not cancel. If he enters it while dashing, the dash is interrupted.\nIf the  dash is interrupted, Zed stops, places himself to the ground (ends all displacements affecting him, but does not remove  airborne effects), and reappears prematurely at his current location. The mark will still be applied regardless.\nZed will remove  airborne effects from himself immediately upon starting the dash.\nOnce Zed begins the  dash, two  Shadows will also appear to be dashing through his target, each one spawning a certain distance behind the target (from the right and left). These shadows do not mimic abilities and disappear immediately after they stop dashing but they grant  sight of their surroundings.\nThese shadows have a tracking distance of 2200 and a dash speed of 1750.\nDeath Mark does not cancel if the target enters a  zombie state before the dash begins.\nIf the mark\'s post-mitigation damage is higher than the target\'s current health, a spinning shuriken will appear above the victim. This does not necessarily mean the target will die, as it does not consider  shields or forms of damage modifiers that are not respected by this predictive calculation.\n\nThe indicator shown in-game (base skin).\n\nThis following table refers for interactions while Zed is in Death Mark:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash  Mark  Dash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection',
      spellEffects: 'Single target',
      spellshieldable: 'Special',
      targeting: 'Unit / Auto',
      targetRange: '625'
    }
  ],
  adaptiveType: 'Physical damage',
  attackType: 'Melee',
  attributeRatings: {
    abilityReliance: 55,
    control: 1,
    damage: 3,
    difficulty: 3,
    mobility: 3,
    toughness: 1,
    utility: 1
  },
  faction: 'ionia',
  lore: 'Utterly ruthless and without mercy, Zed is the leader of the Order of Shadow, an organization he created with the intent of militarizing Ionia\'s magical and martial traditions to drive out Noxian invaders. During the war, desperation led him to unlock the secret shadow form—a malevolent spirit magic as dangerous and corrupting as it is powerful. Zed has mastered all of these forbidden techniques to destroy anything he sees as a threat to his nation, or his new order.',
  patchLastChanged: '25.08',
  positions: [
    'Jungle',
    'Middle'
  ],
  price: {
    blueEssence: 675,
    rp: 585
  },
  releaseDate: '2012-11-13',
  resource: 'Energy',
  roles: [
    'Assassin'
  ],
  stats: {
    acquisitionRadius: {
      flat: 400
    },
    armor: {
      flat: 32,
      perLevel: 4.7
    },
    attackCastTime: {
      flat: 0.3
    },
    attackDamage: {
      flat: 63,
      perLevel: 3.4
    },
    attackDelayOffset: {
      flat: -0.102
    },
    attackRange: {
      flat: 125
    },
    attackSpeed: {
      flat: 0.651,
      perLevel: 3.3
    },
    attackSpeedRatio: {
      flat: 0.651
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
      flat: 654,
      perLevel: 99
    },
    healthRegen: {
      flat: 7,
      perLevel: 0.65
    },
    magicResistance: {
      flat: 29,
      perLevel: 2.05
    },
    mana: {
      flat: 200
    },
    manaRegen: {
      flat: 50
    },
    movespeed: {
      flat: 345
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