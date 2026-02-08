// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'E',
  name: 'Rend',
  affects: 'Enemies',
  blurb: 'Passive:  Kalista\'s  basic attacks  on-hit and  Pierce lodge a spear into their target, applying a  stack of Rend for a few seconds.',
  castTime: '0.25',
  cooldown: '0',
  cost: '30',
  damageType: 'Physical damage',
  effectRadius: '1100',
  icon: 'https://cdn.communitydragon.org/latest/champion/Kalista/ability-icon/e',
  notes: 'Rend cannot activate on  untargetable enemies.\nRend applies its effects instantly on cast.\nThe cooldown will not reset if the target is protected by  resurrection effects.\nIf Rend is used against  Sion under the effects of  Glory in Death, the cooldown will reset even if it does not kill him.(bug)\nA stack is not applied if the attack is  dodged,  blocked or missed while Kalista is  blinded.\n Pierce does not apply a stack of Rend if blocked by  spell shield.\nWhile  berserk, Kalista\'s attacks will also apply Rend stacks on allies.\nKalista will be unable to cast Rend if there are no stacks on an enemy in range.\nRend cannot cast on allies, even if a valid enemy target exists. As such, any spears on allied units are purely cosmetic.\nRend has a lower cast range than effect range.\nRend at maximum stacks will deal a total of 1776 / 3557 / 5338 / 7119 / 8900 (+ 5130 / 6395 / 7660 / 8925 / 10190% AD) (+ 12715% AP) physical damage.',
  resource: 'Mana',
  spellEffects: 'Area of effect',
  spellshieldable: 'True',
  targeting: 'Proximity',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Kalista\'s basic attacks on-hit and Pierce apply a stack of Rend to enemies for 4 seconds, refreshing on subsequent hits and stacking up to 254 times.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Kalista rips all lodged spears from nearby enemies, consuming all of their stacks to deal them physical damage and slow them for 2 seconds. Each additional spear on the target deals modified damage. Rend deals 50% damage against epic monsters.</p>',
      leveling: [
        {
          attribute: 'Physical Damage',
          modifiers: [
            {
              values: '5 / 15 / 25 / 35 / 45'
            },
            {
              unit: '% AD',
              values: '70'
            },
            {
              unit: '% AP',
              values: '65'
            }
          ]
        },
        {
          attribute: 'Damage per Additional Stack',
          modifiers: [
            {
              values: '7 / 14 / 21 / 28 / 35'
            },
            {
              unit: '% AD',
              values: '20 / 25 / 30 / 35 / 40'
            },
            {
              unit: '% AP',
              values: '50'
            }
          ]
        },
        {
          attribute: 'Slow',
          modifiers: [
            {
              unit: '%',
              values: '10 / 18 / 26 / 34 / 42'
            },
            {
              unit: '% per 100 AP',
              values: '5'
            }
          ]
        }
      ]
    },
    {
      description: 'If Rend kills at least one target, the cooldown is reset and Kalista restores mana.',
      leveling: [
        {
          attribute: 'Mana Restored',
          modifiers: [
            {
              values: '10 / 15 / 20 / 25 / 30'
            }
          ]
        }
      ]
    },
    {
      description: 'A nearby enemy with a Rend stack is required to cast this ability. Rend can be used during the dash of Martial Poise and the cast time of Pierce. In-flight spears and Pierce if in cast will be empowered to apply Rend\'s effects to their targets. These empowered spears can also trigger Rend\'s refund.'
    }
  ]
}
export default ability
