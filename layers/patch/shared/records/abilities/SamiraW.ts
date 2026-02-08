// Updated Patch 16.1 - 01/29/2026 04:27:07 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'W',
  name: 'Blade Whirl',
  affects: 'Enemies',
  blurb: 'Active:  Samira briefly spins her blade twice, dealing physical damage to nearby enemies each time. During this time, she destroys all incoming enemy  projectiles.',
  castTime: '0.1',
  cooldown: '30 / 28 / 26 / 24 / 22',
  cost: '60',
  damageType: 'Physical damage',
  effectRadius: '325',
  icon: 'https://cdn.communitydragon.org/latest/champion/Samira/ability-icon/w',
  notes: 'Spell shield will block the damage from one slash.\nWhile the ability has a cast time - the cast time has no effect on the ability\'s usability. All effects begin immediately and Samira can move throughout.\nBoth slashes count as the same ability for stacking  Style.\nThe effect ending early includes the second slash not being performed, if applicable.\nEntering  stasis will also end Blade Whirl early.\nOther item actives and channeling  Teleport or  Recall will not end the effect early.\nSamira can ignore the lockout for  Flair and basic attacks if she uses  Wild Rush and queues up  Flair and/or a basic attack at the start of it.(bug)',
  resource: 'Mana',
  spellEffects: 'aoe',
  spellshieldable: 'true',
  targeting: 'Auto',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Samira spins her blade over 0.75 seconds, destroying all hostile non- turret projectiles within the area for the duration.</p>'
    },
    {
      description: 'Samira slashes twice during Blade Whirl, each one dealing physical damage to all nearby enemies. The first slash occurs immediately and the second one occurs after the duration.',
      leveling: [
        {
          attribute: 'Physical Damage per Hit',
          modifiers: [
            {
              values: '20 / 35 / 50 / 65 / 80'
            },
            {
              unit: '% bonus AD',
              values: '50'
            }
          ]
        },
        {
          attribute: 'Total Physical Damage',
          modifiers: [
            {
              values: '40 / 70 / 100 / 130 / 160'
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
      description: 'Samira cannot basic attack nor cast Flair during Blade Whirl. Casting Inferno Trigger will end Blade Whirl early.'
    }
  ]
}
export default ability
