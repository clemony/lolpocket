// Updated Patch 16.1 - 01/29/2026 04:27:11 PM CST
import type { Champion } from '#shared/types'

const champion: Champion = {
  id: 17,
  key: 'Teemo',
  name: 'Teemo',
  title: 'The Swift Scout',
  adaptiveType: 'Magic damage',
  attackType: 'Ranged',
  patchLastChanged: '25.18',
  releaseDate: '2009-02-21',
  resource: 'Mana',
  abilities: [
    {
      key: 'P',
      name: 'Guerrilla Warfare',
      affects: 'Self',
      blurb: 'Innate:  Teemo becomes  invisible after a brief moment remaining idle without taking damage, and will maintain so long as he remains idle or not  displaced.',
      icon: 'https://cdn.communitydragon.org/latest/champion/Teemo/ability-icon/p',
      notes: 'Element of Surprise\'s buff does not  stack with itself, only refreshes on subsequent triggers within the duration.\nAll  forced action effects will break Guerilla Warfare\'s  stealth while Teemo is standing outside of  brush. While he is inside brush, all of them will also break the stealth if he is forced to move outside brush.\n Berserk and  taunt can additionally break the stealth if Teemo is forced to use a basic attack, which is an action that breaks stealth by default.\nGuerilla Warfare\'s stealth is special-cased to be interrupted whenever Teemo moves from his location by any means (Move order,  dash, or  blink), thus, performing actions that do not normally  break stealth which also involve movement will cause the stealth to break. If Teemo is in a  brush, however, the stealth is not broken by the above effects so long as his destination location is still inside brush.\nDue to the unique implementation of Guerilla Warfare\'s stealth:\nSome area-of-effect (AoE)  knockups, may not be able to break Teemo\'s stealth.(bug)\nWhile Teemo is  airborne without his stealth broken, other area-of-effect spells (mostly older ones) are able to break Teemo\'s stealth, such as  Randuin\'s Omen\'s Humility.(bug)\nA highly technical explanation can be found here.\nUsing a basic attack breaks the stealth at the end of the attack windup.',
      targeting: 'Passive',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Teemo gains invisibility after 1.5 seconds without moving, taking damage, performing actions that break stealth, channeling, or being in stasis. Teemo will maintain stealth so long as he remains idle and is not displaced. While in brush, Teemo gains the stealth even while moving and can move without breaking stealth, but will lose the stealth in this case if he is knocked up.</p>'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate - Element of Surprise:</span> When Teemo breaks the stealth, he gains 20% / 40% / 60% / 80% (based on level) bonus attack speed for 5 seconds.</p>'
        }
      ]
    },
    {
      key: 'Q',
      name: 'Blinding Dart',
      affects: 'Enemies',
      blurb: 'Active:  Teemo shoots a dart at the target enemy that deals magic damage and  blinds them for a short time.',
      castTime: '0.25',
      cooldown: '7',
      cost: '70 / 75 / 80 / 85 / 90',
      damageType: 'Magic damage',
      icon: 'https://cdn.communitydragon.org/latest/champion/Teemo/ability-icon/q',
      notes: 'Blinding Dart will not make abilities that can trigger  on-hit effects ( Parrrley,  Mystic Shot) miss.\nWhen blinded, enemies have a green tint on their screen.\nBecause Blinding Dart uses  center range, it has 45 to 70 more range than his  basic attacks, which use  edge range, against other  champions.\nThis bonus becomes lower if Teemo or his target have  size bonuses.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '2500',
      spellEffects: 'Single target',
      spellshieldable: 'True',
      targeting: 'Unit',
      targetRange: '680',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Teemo shoots a dart at the target enemy that deals magic damage and blinds them for a duration.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '80 / 125 / 170 / 215 / 260'
                },
                {
                  unit: '% AP',
                  values: '70'
                }
              ]
            },
            {
              attribute: 'Blind Duration',
              modifiers: [
                {
                  unit: ' seconds',
                  values: '2 / 2.25 / 2.5 / 2.75 / 3'
                }
              ]
            }
          ]
        },
        {
          description: 'The duration of the blind is doubled against minions and monsters.',
          leveling: [
            {
              attribute: 'Increased Blind Duration',
              modifiers: [
                {
                  unit: ' seconds',
                  values: '4 / 4.5 / 5 / 5.5 / 6'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      key: 'W',
      name: 'Move Quick',
      affects: 'Self',
      blurb: 'Passive:  Teemo gains  bonus movement speed after a few seconds without taking damage from enemy  champions or  turrets.',
      castTime: 'none',
      cooldown: '14',
      cost: '40',
      icon: 'https://cdn.communitydragon.org/latest/champion/Teemo/ability-icon/w',
      notes: 'When Move Quick\'s active bonus movement speed ends Teemo will not regain the passive one if he was damaged during the active\'s duration.\nMove Quick\'s passive will be disabled even if the damage is blocked with a  spell shield.',
      resource: 'Mana',
      targeting: 'Auto',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Teemo gains bonus movement speed after 5 seconds without taking damage from enemy champions or turrets.</p>',
          leveling: [
            {
              attribute: 'Bonus Movement Speed',
              modifiers: [
                {
                  unit: '%',
                  values: '12 / 16 / 20 / 24 / 28'
                }
              ]
            }
          ]
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Teemo doubles the bonus movement speed for 3 seconds, preventing it from being removed for the duration.</p>',
          leveling: [
            {
              attribute: 'Enhanced Bonus Movement Speed',
              modifiers: [
                {
                  unit: '%',
                  values: '24 / 32 / 40 / 48 / 56'
                }
              ]
            }
          ]
        },
        {
          description: 'Casting Move Quick does not interrupt Guerrilla Warfare.'
        }
      ]
    },
    {
      key: 'E',
      name: 'Toxic Shot',
      affects: 'Self',
      blurb: 'Passive:  Teemo\'s  basic attacks deal bonus magic damage and inflict  poison.',
      cooldown: '0',
      cost: '0',
      damageType: 'Magic damage',
      icon: 'https://cdn.communitydragon.org/latest/champion/Teemo/ability-icon/e',
      notes: 'Toxic Shot deals  persistent  proc damage, and does not trigger  spell effects.\nDespite this, it is special cased to trigger  Dark Harvest, but not  Cheap Shot,  Conqueror,  Scorchclaw\'s Slash,  Summon Aery and  Ocean Dragon Soul.\nThe initial hit from Toxic Shot will consume  Manaflow Band if it is available.\nThe attacks do not affect  structures nor  wards.',
      spellEffects: 'mixed',
      spellshieldable: 'False',
      targeting: 'Passive',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Teemo\'s basic attacks are empowered to deal bonus magic damage on-hit and inflict poison.</p>\n<p class="ability-effect"><span class="ability-header"> poison:</span> The target takes magic damage every second over 4 seconds. Subsequent inflictions refresh the duration.</p>',
          leveling: [
            {
              attribute: 'Magic Damage On-Hit',
              modifiers: [
                {
                  values: '9 / 23 / 37 / 51 / 65'
                },
                {
                  unit: '% AP',
                  values: '30'
                }
              ]
            },
            {
              attribute: 'Magic Damage per Tick',
              modifiers: [
                {
                  values: '6 / 12 / 18 / 24 / 30'
                },
                {
                  unit: '% AP',
                  values: '10'
                }
              ]
            },
            {
              attribute: 'Total Poison Damage',
              modifiers: [
                {
                  values: '24 / 48 / 72 / 96 / 120'
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
          description: 'Toxic Shot deals 145% damage against monsters.',
          leveling: [
            {
              attribute: 'Monster Damage On-Hit',
              modifiers: [
                {
                  values: '13.05 / 33.35 / 53.65 / 73.95 / 94.25'
                },
                {
                  unit: '% AP',
                  values: '43.5'
                }
              ]
            },
            {
              attribute: 'Monster Damage per Tick',
              modifiers: [
                {
                  values: '8.7 / 17.4 / 26.1 / 34.8 / 43.5'
                },
                {
                  unit: '% AP',
                  values: '14.5'
                }
              ]
            },
            {
              attribute: 'Total Monster Poison Damage',
              modifiers: [
                {
                  values: '34.8 / 69.6 / 104.4 / 139.2 / 174'
                },
                {
                  unit: '% AP',
                  values: '58'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      key: 'R',
      name: 'Noxious Trap',
      affects: 'Enemies',
      blurb: 'Active:  Teemo tosses a poisonous mushroom to the target location that becomes  stealthed and lasts for a while. It will bounce forward upon landing on another mushroom.',
      castTime: '0.25',
      collisionRadius: '160 / 150',
      cooldown: '0.25',
      cost: '75 / 55 / 35',
      damageType: 'Magic damage',
      effectRadius: '450',
      icon: 'https://cdn.communitydragon.org/latest/champion/Teemo/ability-icon/r',
      notes: 'The bounce can occur an indefinite amount of times while Teemo is alive. If Teemo dies before Noxious Trap bounces on another, the trap will disappear.\n Rift Scuttler will not trigger Noxious Trap\'s explosion if it is not being attacked.\nEnemies who step on multiple Noxious Traps will only refresh the duration of the damage over time and slow.\nNoxious Trap\'s damage is determined when it detonates and not when planted, meaning if Teemo\'s  ability power changes, the scaling is also altered to affect the active damage of all Noxious Traps so long as they do not explode.\n Spell shield will prevent the damage over time and slow for all units but will not prevent the detonation itself.',
      projectile: 'TRUE',
      rechargeRate: '35 / 30 / 25',
      resource: 'Mana',
      spellEffects: 'aoedot',
      spellshieldable: 'Special',
      targeting: 'Location',
      targetRange: '600 / 675 / 750 / 825 / 900',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Teemo tosses a poisonous mushroom to the target location that becomes stealthed after arming over 1 second, lasting for up to 5 minutes and granting sight of its surroundings. If the mushroom lands on an already-placed one, it will bounce forward again for its cast distance, up to a cap, which can happen repeatedly.</p>',
          leveling: [
            {
              attribute: 'Bounce Distance Cap',
              modifiers: [
                {
                  values: '350 / 450 / 550'
                }
              ]
            }
          ]
        },
        {
          description: 'Teemo periodically stocks a Noxious Trap charge, up to a maximum amount.',
          leveling: [
            {
              attribute: 'Maximum Charges',
              modifiers: [
                {
                  values: '3 / 4 / 5'
                }
              ]
            }
          ]
        },
        {
          description: 'The mushroom will explode upon enemy contact, inflicting poison to nearby enemies and slowing them for 4 seconds, as well as revealing them.',
          leveling: [
            {
              attribute: 'Slow',
              modifiers: [
                {
                  unit: '%',
                  values: '30 / 40 / 50'
                }
              ]
            }
          ]
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">poison:</span> The target takes magic damage every second over 4 seconds. Subsequent inflictions refresh the duration.</p>',
          leveling: [
            {
              attribute: 'Magic Damage per Tick',
              modifiers: [
                {
                  values: '50 / 81.25 / 112.5'
                },
                {
                  unit: '% AP',
                  values: '12.5'
                }
              ]
            },
            {
              attribute: 'Total Magic Damage',
              modifiers: [
                {
                  values: '200 / 325 / 450'
                },
                {
                  unit: '% AP',
                  values: '50'
                }
              ]
            }
          ]
        },
        {
          description: 'A mushroom has 6 maximum health and can only be damaged by champion basic attacks (2 damage from ranged and 3 from melee).'
        },
        {
          description: 'See Pets for more details about mushroom traps.'
        }
      ]
    }
  ],
  attributeRatings: {
    abilityReliance: 30,
    control: 2,
    damage: 3,
    difficulty: 1,
    mobility: 1,
    toughness: 1,
    utility: 2
  },
  positions: [
    'Jungle',
    'Support',
    'Top'
  ],
  price: {
    blueEssence: 225,
    rp: 260
  },
  roles: [
    'Mage',
    'Marksman',
    'Specialist'
  ],
  stats: {
    armor: 24,
    attackDamage: 54,
    attackRange: 500,
    attackSpeed: 0.7,
    hp: 615,
    hpRegen: 5.5,
    magicResist: 30,
    movespeed: 330,
    mp: 334,
    mpRegen: 9.6
  },
  statsPerLevel: {
    armor: 5,
    attackDamage: 3,
    attackSpeed: 3.4,
    hp: 104,
    hpRegen: 0.7,
    magicResist: 1.3,
    mp: 25,
    mpRegen: 0.5
  }
}
export default champion