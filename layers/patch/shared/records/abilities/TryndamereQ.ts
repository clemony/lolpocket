// Updated Patch 16.1 - 01/29/2026 04:27:13 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'Q',
  name: 'Bloodlust',
  affects: 'Self',
  blurb: 'Passive:  Tryndamere gains  bonus attack damage, increased based on his missing health.',
  castTime: 'none',
  cooldown: '12',
  cost: '0',
  icon: 'https://cdn.communitydragon.org/latest/champion/Tryndamere/ability-icon/q',
  notes: 'Bloodlust can still be activated even if Tryndamere does not have any Fury.\nBloodlust can be activated at any point of Tryndamere\'s  basic attack.\nNote that if an  basic attack will  critically strike is determined when the attack windup starts.\nThis means that if  Bloodlust is cast during Tryndamere\'s attack windup windup, the attack will use the  critical strike chance given by the Fury before the  Bloodlust cast.\nFurthermore, the Fury for that  basic attack will be given once the windup completes. This lets Tryndamere start building Fury immediately.\nBloodlust\'s  attack damage  gold value:\nAt a baseline, at minimum missing health, it is worth  175 / 350 / 525 / 700 / 875.\nAt maximum missing health, it is worth  700 / 1225 / 1750 / 2275 / 2800.\nThe bonus is worth  5.25 / 8.75 / 12.25 / 15.75 / 19.25 more per 1% missing health.',
  resource: 'Fury',
  targeting: 'Auto',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Tryndamere gains bonus attack damage, plus an additional amount based on his missing health.</p>',
      leveling: [
        {
          attribute: 'Bonus Attack Damage',
          modifiers: [
            {
              values: '5 / 10 / 15 / 20 / 25'
            }
          ]
        },
        {
          attribute: 'Additional Bonus AD',
          modifiers: [
            {
              unit: ' per 1% missing health',
              values: '0.15 / 0.25 / 0.35 / 0.45 / 0.55'
            }
          ]
        },
        {
          attribute: 'Maximum Total Bonus AD',
          modifiers: [
            {
              values: '20 / 35 / 50 / 65 / 80'
            }
          ]
        }
      ]
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Tryndamere consumes all of his Fury to heal himself, increased for every point of Fury consumed.</p>',
      leveling: [
        {
          attribute: 'Minimum Heal',
          modifiers: [
            {
              values: '30 / 40 / 50 / 60 / 70'
            },
            {
              unit: '% AP',
              values: '30'
            }
          ]
        },
        {
          attribute: 'Heal Per 1 Fury',
          modifiers: [
            {
              values: '0.5 / 0.95 / 1.4 / 1.85 / 2.3'
            },
            {
              unit: '% AP',
              values: '1.2'
            }
          ]
        },
        {
          attribute: 'Maximum Heal',
          modifiers: [
            {
              values: '80 / 135 / 190 / 245 / 300'
            },
            {
              unit: '% AP',
              values: '150'
            }
          ]
        }
      ]
    }
  ]
}
export default ability
