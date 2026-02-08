// Updated Patch 16.1 - 01/29/2026 04:27:11 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'Q',
  name: 'Starlight\'s Touch',
  affects: 'Allies',
  blurb: 'Active:  Taric  heals himself and nearby allied champions based on his maximum health per charge of Starlight\'s Touch that he periodically stocks, up to a cap.  Bravado-empowered attacks each grant one charge.',
  castTime: '0.25',
  cooldown: '3',
  cost: '60',
  effectRadius: '325',
  icon: 'https://cdn.communitydragon.org/latest/champion/Taric/ability-icon/q',
  notes: 'The healing will apply heal effects (such as  Summon Aery) prioritizing targets in Taric\'s circle, based on proximity to him, then in the  Bastioned ally\'s circle, based on proximity to that ally (including it).',
  rechargeRate: '15 / 15 / 15 / 15 / 15',
  resource: 'Mana',
  targeting: 'Auto',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Taric heals himself and nearby allied champions for 25 (+ 15% AP) (+ 1% of his maximum health) per charge of Starlight\'s Touch that he periodically stocks, up to a maximum amount. Bravado\'s empowered attacks each grant one charge.</p>',
      leveling: [
        {
          attribute: 'Maximum Charges',
          modifiers: [
            {
              values: '1 / 2 / 3 / 4 / 5'
            }
          ]
        }
      ]
    },
    {
      description: 'Starlight\'s Touch can heal up to a maximum of 125 (+ 75% AP) (+ 5% of Taric\'s maximum health) at 5 charges.'
    }
  ]
}
export default ability
