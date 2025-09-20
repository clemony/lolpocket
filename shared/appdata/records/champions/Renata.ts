// Updated Patch 25.17 - 09/18/2025 02:20:04 AM CDT

const champion: Champion = {
  id: 888,
  key: 'Renata',
  name: 'Renata Glasc',
  title: 'the Chem-Baroness',
  abilities: [
    {
      key: 'P',
      name: 'Leverage',
      affects: 'Allies, Enemies',
      blurb: 'Innate:  Renata\'s basic attacks apply a mark that lasts a few seconds and expires when attacking a new enemy. If the enemy was unmarked, this also deals bonus magic damage based on the target\'s maximum health.',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Renata\'s basic attacks are empowered to apply a mark that lasts 6 seconds, refreshes on subsequent hits and expires when attacking a new enemy. If the enemy was unmarked, the attack also deals bonus magic damage equal to 1% - 2% (based on level) (+ 2% per 100 AP) of the target\'s maximum health.</p>'
        },
        {
          description: 'Allied champions\' damaging attacks and abilities against a marked target will consume the mark to deal additional bonus magic damage equal to 1% - 2% (based on level) (+ 2% per 100 AP) of the target\'s maximum health.'
        },
        {
          description: 'Leverage\'s damage is capped at 150 against epic monsters.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Renata/ability-icon/p',
      notes: 'Spell shield will not block the mark\'s application.\nPENDING FOR TEST:: Interaction with mark consumption\nThe mark\'s consumption by an ally respects  enchantment redirection.',
      spellEffects: 'proc',
      spellshieldable: 'special',
      targeting: 'Passive'
    },
    {
      key: 'Q',
      name: 'Handshake',
      width: '140',
      affects: 'Self, Ememies',
      blurb: 'Active:  Renata fires a hook in the target direction that deals magic damage to the first enemy hit and briefly  roots them. She can recast the ability while the target is rooted.',
      castTime: '0.25',
      cooldown: '16',
      cost: '80',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Renata fires a hook in the target direction that deals magic damage to the first enemy hit and roots them for 1 second, during which they are revealed.If the root was applied, Renata forms a tether between her and the target for the same duration, causing Renata to become unable to declare attacks and have her movement speed reduced by 30%.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '80 / 125 / 170 / 215 / 260'
                },
                {
                  unit: '% AP',
                  values: '80'
                }
              ]
            }
          ]
        },
        {
          description: 'Handshake can be recast while the tether is active.'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Renata breaks the tether to knock the target in the target direction, though not through terrain, dealing the same damage to enemies they pass through. If the thrown target is a champion, all secondary targets hit are stunned for 0.5 seconds.</p>'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Renata/ability-icon/q',
      maxCharges: -1,
      notes: 'Applies  spell damage to the primary target and  area damage to secondary targets.\nHandshake\'s interaction between its tether and root:\nIf the root is not applied, neither is the tether.\nThe tether\'s duration lasts the same as the root duration, even if it is modified by  tenacity.\nIf the root is removed, the tether is as well, but not vice versa.\n Spell shield will block the hook but not the recast\'s effects as the primary target.\nAs a secondary target, the recast\'s effects will be blocked.\nRenata may still move while the hook is in flight.\nHer facing direction is locked towards the target direction of the hook.\nWhile the target is hooked, Renata\'s facing direction is considered to be in their direction and not in the one she is moving.\nThe  movement speed reduction stacks additively with other movement speed bonuses.\nIt is a negative bonus, not a  slow, and is thus not reduced by  slow resist.\nThis ability will cast from wherever the caster is at the start of the cast time.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '1450',
      spellEffects: 'special',
      spellshieldable: 'special',
      targeting: 'Direction',
      tetherRadius: '1200'
    },
    {
      key: 'W',
      name: 'Bailout',
      blurb: 'Active:  Renata grants herself or the target allied champion ramping  bonus attack speed in addition to  bonus movement speed toward enemies. Bailout\'s duration resets whenever the target scores a  takedown against an enemy champion.',
      castTime: 'none',
      cooldown: '28 / 27 / 26 / 25 / 24',
      cost: '80',
      effectRadius: '1300',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Renata infuses herself or the target allied champion with a chemtech formula for 5 seconds, granting the target bonus attack speed and bonus movement speed while they are facing nearby visible enemy champions or minions, with both of the bonuses increasing in effectiveness by 0% - 100% (based on seconds elapsed). Bailout\'s duration resets whenever the target scores a takedown against an enemy champion within 6 seconds of damaging them.</p>',
          leveling: [
            {
              attribute: 'Bonus Attack Speed',
              modifiers: [
                {
                  unit: '%',
                  values: '10 / 15 / 20 / 25 / 30'
                },
                {
                  unit: '% per 100 AP',
                  values: '1'
                }
              ]
            },
            {
              attribute: 'Maximum Bonus Attack Speed',
              modifiers: [
                {
                  unit: '%',
                  values: '20 / 30 / 40 / 50 / 60'
                },
                {
                  unit: '% per 100 AP',
                  values: '2'
                }
              ]
            },
            {
              attribute: 'Bonus Movement Speed',
              modifiers: [
                {
                  unit: '%',
                  values: '10 / 12.5 / 15 / 17.5 / 20'
                },
                {
                  unit: '% per 100 AP',
                  values: '1'
                }
              ]
            },
            {
              attribute: 'Maximum Bonus Movement Speed',
              modifiers: [
                {
                  unit: '%',
                  values: '20 / 25 / 30 / 35 / 40'
                },
                {
                  unit: '% per 100 AP',
                  values: '2'
                }
              ]
            }
          ]
        },
        {
          description: 'If the target takes fatal damage while Bailout is active, they are restored to 100% of their maximum health but suffer a true damage burn equal to 10% of their maximum health every 0.264 seconds until they reach 0 health, during which Bailout\'s duration is reset every 0.25 seconds. This effect may occur only once per application of Bailout while the target already has the buff and is not burning.The burn will stop once the target scores a takedown against an enemy champion within 6 seconds of damaging them, setting their current health to 20% of their maximum health immediately afterwards.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Renata/ability-icon/w',
      maxCharges: -1,
      notes: 'Damage taken in excess of the fatal damage taken does not apply to the target\'s health after it was restored.\nThe self-damage taken is considered  raw damage and is calculated based on the target\'s maximum health at the time of taking lethal damage.\nBailout\'s bonuses will not reset in effectiveness if its duration is refreshed.\nBailout takes priority over all  resurrection and  zombie state effects.\nBailout will stop refreshing its duration while the target is burning after 250 seconds have elapsed.\nBailout cannot be used on  clones nor  zombie state units.\nIf Bailout is cast on a target that is already burning from a previous Bailout cast, they can trigger a subsequent health restore as well as be inflicted with another burn. This may occur an infinite number of times as long as the target stays burning and does not reach 0 health.\nCasting Bailout on a target that already has the buff will only refresh the duration (without resetting the bonuses).\nIf the target takes fatal damage during Bailout, upon destroying a turret while being targeted by it, they will receive their own Shut-Down gold (specifically ignoring the base bounty) instead of being executed.(bug)',
      resource: 'Mana',
      targeting: 'Unit',
      targetRange: '800'
    },
    {
      key: 'E',
      name: 'Loyalty Program',
      width: '220',
      affects: 'Allies, Ememies',
      blurb: 'Active:  Renata sends out two chemtech rockets that strike targets around her, then converge into a single missile that explodes at the target location.',
      castTime: '0.25',
      cooldown: '14 / 13 / 12 / 11 / 10',
      cost: '70 / 80 / 90 / 100 / 110',
      damageType: 'Magic damage',
      effectRadius: '325 / 225',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Renata sends out chemtech rockets from either side of her that instantly strike targets around her. After 0.429 seconds they converge and travel to the target location as a single missile, striking targets along its path and exploding upon reaching the target location.</p>'
        },
        {
          description: 'Renata and allies struck are granted a shield for 3 seconds and enemies struck are dealt magic damage and slowed by 30% for 2 seconds.',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '65 / 95 / 125 / 155 / 185'
                },
                {
                  unit: '% AP',
                  values: '55'
                }
              ]
            },
            {
              attribute: 'Shield Strength',
              modifiers: [
                {
                  values: '50 / 65 / 80 / 95 / 110'
                },
                {
                  unit: '% AP',
                  values: '50'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Renata/ability-icon/e',
      maxCharges: -1,
      notes: 'Spell shield will block either the rockets while they are in-flight or their explosion.\nThis ability will cast from wherever the caster is at the start of the cast time.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '1450',
      spellEffects: 'spellaoe',
      spellshieldable: 'special',
      targeting: 'Location',
      targetRange: '800'
    },
    {
      key: 'R',
      name: 'Hostile Takeover',
      width: '500',
      affects: 'Enemies',
      angle: '14°',
      blurb: 'Active:  Renata launches a cloud of potent chemicals that travels in the target direction. Enemy champions and minions hit briefly become  berserk, gaining  bonus attack speed.',
      castTime: '0.75',
      cooldown: '150 / 130 / 110',
      cost: '100',
      effectRadius: '750 /  1000',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Renata launches a cloud of potent chemicals that travels in the target direction, granting sight of its surroundings. Enemy champions and minions hit become berserk for a duration.</p>',
          leveling: [
            {
              attribute: 'Berserk Duration',
              modifiers: [
                {
                  unit: ' seconds',
                  values: '1.25 / 1.75 / 2.25'
                }
              ]
            }
          ]
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Berserked units gain 100% bonus attack speed and 25% increased size. Within their targeting radius, they prioritize attacking the closest unit by the following categories in descending order:</span></p>\nTheir allied champions\nAllied non-champions\nAllied wards\nEnemy units (including monsters)'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Renata/ability-icon/r',
      maxCharges: -1,
      notes: 'See Types of Crowd Control#Berserk for specific details on Berserk.\nThis ability will cast from wherever the caster is at the end of the cast time.\nTypically, any enemies killed that directly result from Berserk are credited to Renata Glasc.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '650 - 1000',
      spellshieldable: 'true',
      targeting: 'Direction'
    }
  ],
  adaptiveType: 'Magic damage',
  attackType: 'Ranged',
  attributeRatings: {
    abilityReliance: 80,
    control: 3,
    damage: 2,
    difficulty: 2,
    mobility: 1,
    toughness: 1,
    utility: 2
  },
  faction: 'zaun',
  lore: 'Renata Glasc rose from the ashes of her childhood home with nothing but her name and her parents\' alchemical research. In the decades since, she has become Zaun\'s wealthiest chem-baron, a business magnate who built her power by tying everyone\'s interests to her own. Work with her, and be rewarded beyond measure. Work against her, and live to regret it. But everyone comes to her side, eventually.',
  patchLastChanged: '25.14',
  positions: [
    'Support'
  ],
  price: {
    blueEssence: 2400,
    rp: 880
  },
  releaseDate: '2022-02-17',
  resource: 'Mana',
  roles: [
    'Enchanter',
    'Mage',
    'Support'
  ],
  stats: {
    acquisitionRadius: {
      flat: 550
    },
    armor: {
      flat: 27,
      perLevel: 4.7
    },
    attackCastTime: {
      flat: 0.3
    },
    attackDamage: {
      flat: 49,
      perLevel: 3
    },
    attackDelayOffset: {
      flat: -0.112
    },
    attackRange: {
      flat: 550
    },
    attackSpeed: {
      flat: 0.625,
      perLevel: 2.11
    },
    attackSpeedRatio: {
      flat: 0.625
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
      flat: 545,
      perLevel: 94
    },
    healthRegen: {
      flat: 5.5,
      perLevel: 0.55
    },
    magicResistance: {
      flat: 30,
      perLevel: 1.3
    },
    mana: {
      flat: 350,
      perLevel: 50
    },
    manaRegen: {
      flat: 11.5,
      perLevel: 0.5
    },
    movespeed: {
      flat: 330
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