// Updated Patch 16.1 - 01/29/2026 04:27:00 PM CST
import type { Champion } from '#shared/types'

const champion: Champion = {
  id: 78,
  key: 'Poppy',
  name: 'Poppy',
  title: 'Keeper of the Hammer',
  adaptiveType: 'Physical damage',
  attackType: 'Melee',
  patchLastChanged: '25.19',
  releaseDate: '2010-01-13',
  resource: 'Mana',
  abilities: [
    {
      key: 'P',
      name: 'Iron Ambassador',
      affects: 'Self',
      blurb: 'Innate: Periodically,  Poppy  throws her buckler as her next basic attack, which has  bonus range and deals bonus magic damage. The buckler then falls nearby and remains for a few seconds, which she and enemy champions can step over to either retrieve or destroy it.',
      damageType: 'Magic damage',
      icon: 'https://cdn.communitydragon.org/latest/champion/Poppy/ability-icon/p',
      notes: 'Iron Ambassador\'s buckler attack counts as  melee.',
      projectile: 'TRUE',
      speed: '1600',
      spellEffects: 'Proc',
      spellshieldable: 'False',
      targeting: 'Passive',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Periodically, Poppy\'s next basic attack is empowered to throw her buckler, gaining 350 bonus range and dealing 20 - 180 (based on level) bonus magic damage. After it hits, the buckler then falls to a location near the target over 1 second, landing and remaining there for up to 4 seconds.</p>'
        },
        {
          description: 'Poppy can move over the buckler to retrieve it, gaining a shield for 11% - 20% (based on level) of her maximum health for 3 seconds. If the buckler kills the target, or if the target is already dead when the buckler hits it, the buckler will bounce back to Poppy instead of falling. Enemy champions can move over the buckler to destroy it.'
        }
      ]
    },
    {
      key: 'Q',
      name: 'Hammer Shock',
      width: '160',
      affects: 'Enemies',
      blurb: 'Active:  Poppy smashes the area in the target direction, dealing physical damage to enemies hit based on their maximum health.',
      castTime: '0.3325',
      cooldown: '8 / 7 / 6 / 5 / 4',
      cost: '35 / 40 / 45 / 50 / 55',
      damageType: 'Physical damage',
      icon: 'https://cdn.communitydragon.org/latest/champion/Poppy/ability-icon/q',
      notes: 'Spell shields will block only a single instance of damage.\nThis ability will cast from wherever the caster is at the end of the cast time.',
      projectile: 'FALSE',
      resource: 'Mana',
      spellEffects: 'spellaoe',
      spellshieldable: 'Special',
      targeting: 'Direction',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Poppy smashes the area in the target direction, dealing physical damage to enemies hit. Against minions and monsters, the damage based on their health ratio is capped.</p>',
          leveling: [
            {
              attribute: 'Physical Damage',
              modifiers: [
                {
                  values: '30 / 55 / 80 / 105 / 130'
                },
                {
                  unit: '% bonus AD',
                  values: '100'
                },
                {
                  unit: '% of target\'s maximum health',
                  values: '9'
                }
              ]
            },
            {
              attribute: 'Capped Minion/Monster Health Damage',
              modifiers: [
                {
                  values: '50 / 80 / 110 / 140 / 170'
                }
              ]
            },
            {
              attribute: 'Maximum Minion/Monster Damage',
              modifiers: [
                {
                  values: '80 / 135 / 190 / 245 / 300'
                },
                {
                  unit: '% bonus AD',
                  values: '100'
                }
              ]
            }
          ]
        },
        {
          description: 'The impact creates a field for 1 second that slows enemies within, which then ruptures to deal the same physical damage.',
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
              attribute: 'Total Physical Damage',
              modifiers: [
                {
                  values: '60 / 110 / 160 / 210 / 260'
                },
                {
                  unit: '% bonus AD',
                  values: '200'
                },
                {
                  unit: '% of target\'s maximum health',
                  values: '18'
                }
              ]
            },
            {
              attribute: 'Total Maximum Minion/Monster Damage',
              modifiers: [
                {
                  values: '160 / 270 / 380 / 490 / 600'
                },
                {
                  unit: '% bonus AD',
                  values: '200'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      key: 'W',
      name: 'Steadfast Presence',
      affects: 'Self',
      blurb: 'Passive:  Poppy increases her  total armor and  total magic resist. This effect is doubled while she is at low health.',
      castTime: 'none',
      cooldown: '20 / 18 / 16 / 14 / 12',
      cost: '50',
      damageType: 'Magic damage',
      effectRadius: '400',
      icon: 'https://cdn.communitydragon.org/latest/champion/Poppy/ability-icon/w',
      notes: 'Stubborn to a Fault\'s armor amplification stacks with an instance of recursion.\nSteadfast Presence does not stop  dashes if the unit is  crowd control immune,  displacement immune,  untargetable, or protected by  spell shield in the process (e.g.  Death Mark,  Stormbringer,  Unstoppable Force).\nDashes when the unit is  crowd control immune or  displacement immune still trigger the aura and take the damage, but do not get  knocked up and thus also never become  grounded and  slowed.\n Spell shields deny all the effects if Steadfast Presence is triggered by their holder, and are consumed in the process.\nBeing  untargetable prevents Steadfast Presence from triggering, but this does not prevent it from triggering against another, targetable dash.\nSteadfast Presence does not trigger against  lunges.',
      resource: 'Mana',
      spellEffects: 'aoe',
      spellshieldable: 'True',
      targeting: 'Auto',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Passive - Stubborn to a Fault:</span> Poppy increases her total armor and total magic resistance by 12%, doubled to 24% while she is below 40% maximum health.</p>'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Poppy gains 40% bonus movement speed and creates an aura around herself for 2 seconds, causing all enemies who attempt to dash into or within it to be dealt magic damage and knocked up for 0.5 seconds. If a target was successfully interrupted, they become grounded and slowed by 25% for 2 seconds.</p>',
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
        },
        {
          description: 'Steadfast Presence can only block a single dash per enemy per cast.'
        }
      ]
    },
    {
      key: 'E',
      name: 'Heroic Charge',
      affects: 'Enemies',
      blurb: 'Active:  Poppy  dashes to the target enemy, dealing physical damage and  carrying them forward. If the target hits terrain, Poppy deals the same physical damage again and briefly  stuns them.',
      castTime: 'none',
      cooldown: '14 / 13 / 12 / 11 / 10',
      cost: '70',
      damageType: 'Physical damage',
      icon: 'https://cdn.communitydragon.org/latest/champion/Poppy/ability-icon/e',
      notes: 'Poppy will be ordered to basic attack the target.\nHeroic Charge can apply  spell effects twice (once when Poppy hits her target and once she stuns them against a wall).\nBoth instances of damage and crowd control are all the same cast instance. Effects that only trigger once per spell cast will not trigger twice.\nPoppy dashes slightly less far than the distance she pushes the target.\nHeroic Charge can interact with player-generated terrain.\nThe  dash does not follow targets. The target\'s position at the time of Heroic Charge\'s cast is the direction Poppy will dash towards.\nPoppy does not  carry nor deal damage to the target if they have left a certain radius before she collides with them.',
      resource: 'Mana',
      speed: '1800',
      spellEffects: 'spell',
      spellshieldable: 'True',
      targeting: 'Unit',
      targetRange: '475',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Poppy dashes to the target enemy\'s location. If they are in range upon arrival, she deals physical damage and carries them along with her for up to 400 units.</p>',
          leveling: [
            {
              attribute: 'Physical Damage',
              modifiers: [
                {
                  values: '40 / 60 / 80 / 100 / 120'
                },
                {
                  unit: '% bonus AD',
                  values: '60'
                }
              ]
            }
          ]
        },
        {
          description: 'If the target hits terrain, she stops to deal the same physical damage again and stuns them for a duration.',
          leveling: [
            {
              attribute: 'Stun Duration',
              modifiers: [
                {
                  unit: ' seconds',
                  values: '1.6 / 1.7 / 1.8 / 1.9 / 2'
                }
              ]
            },
            {
              attribute: 'Total Physical Damage',
              modifiers: [
                {
                  values: '80 / 120 / 160 / 200 / 240'
                },
                {
                  unit: '% bonus AD',
                  values: '120'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      key: 'R',
      name: 'Keeper\'s Verdict',
      width: '180',
      affects: 'Enemies',
      castTime: '0.25 / 0.35',
      cooldown: '140 / 120 / 100',
      cost: '100',
      damageType: 'Physical damage',
      effectRadius: '180 / 225',
      icon: 'https://cdn.communitydragon.org/latest/champion/Poppy/ability-icon/r',
      notes: 'The erupting hammer of the charged cast that sends out a missile will be centered on the first champion struck, not at the location the missile collided with them.\nEnemies within the enemy team\'s fountain (at least 400 units away from the center of the fountain) that are hit by a Keeper\'s Verdict that would knock them back are instead  knocked up for 0.75 seconds and not rendered  untargetable, like the uncharged effect. They still receive the full damage.\nKeeper\'s Verdict does not destroy in-flight  projectiles for enemies hit if they are rendered  untargetable.\nThe  knock back will only displace enemies as far as they can go (e.g. to the furthest current spot available of  Realm of Death\'s and  The Hextech Ultimatum\'s borders and to the corner of the fountain).\nThe displacement\'s duration will remain unchanged regardless of if the knock back cannot achieve its full distance due to the affected target being restricted by boundaries they are unable to cross. In order for this to be possible, the speed of the knock back is decreased (based on where the actual landing point is) to match the amount of distance covered to time spent displaced.\nKeeper\'s Verdict\'s  airborne debuff is non-dispellable and thus cannot be removed by  cleansing effects.\nThe debuff will remove itself automatically when the forced movement ends.\nThe following table refers for interactions while Poppy is  channeling:\n\n\nType\n\nCharge channel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Teleport  Recall  Hexflash (Recasts)\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects\n\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '2500',
      spellEffects: 'Area of effect',
      spellshieldable: 'True',
      targeting: 'Auto / Direction',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Poppy charges while being slowed by 15% for up to 4 seconds to increase Keeper\'s Verdict\'s range and knock back distance over 0.5 seconds after the first 0.5 seconds of the channel. Keeper\'s Verdict can be recast within the duration.</p>'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Poppy releases the charge to launch her hammer upwards, dealing physical damage to enemies nearby and in an area in front of her and knocking them up for 1 second.</p>',
          leveling: [
            {
              attribute: 'Physical Damage',
              modifiers: [
                {
                  values: '100 / 150 / 200'
                },
                {
                  unit: '% bonus AD',
                  values: '45'
                }
              ]
            }
          ]
        },
        {
          description: 'If Keeper\'s Verdict was charged for at least 0.5 seconds, it deals 100% increased damage and enemies hit are knocked back up-to 3400 units toward the enemy team\'s fountain, during which they are revealed and rendered untargetable. Additionally, if no enemies are hit in front of Poppy, she sends a shockwave that travels in the target direction until it collides with an enemy champion, which causes a hammer to erupt. Targets hit by the shockwave or the eruption receive the charged effects.',
          leveling: [
            {
              attribute: 'Increased Damage',
              modifiers: [
                {
                  values: '200 / 300 / 400'
                },
                {
                  unit: '% bonus AD',
                  values: '90'
                }
              ]
            }
          ]
        },
        {
          description: 'If the charge is interrupted or completes without reactivation, Keeper\'s Verdict is cancelled and the ability is put on a 30-second cooldown.'
        }
      ]
    }
  ],
  attributeRatings: {
    abilityReliance: 75,
    control: 3,
    damage: 2,
    difficulty: 2,
    mobility: 2,
    toughness: 3,
    utility: 1
  },
  positions: [
    'Jungle',
    'Top'
  ],
  price: {
    blueEssence: 225,
    rp: 260
  },
  roles: [
    'Fighter',
    'Tank',
    'Warden'
  ],
  stats: {
    armor: 35,
    attackDamage: 60,
    attackRange: 125,
    attackSpeed: 0.7,
    hp: 610,
    hpRegen: 8,
    magicResist: 32,
    movespeed: 345,
    mp: 280,
    mpRegen: 7
  },
  statsPerLevel: {
    armor: 5,
    attackDamage: 4,
    attackSpeed: 2.5,
    hp: 110,
    hpRegen: 0.8,
    magicResist: 2.1,
    mp: 40,
    mpRegen: 0.7
  }
}
export default champion