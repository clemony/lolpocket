// Updated Patch 16.1 - 01/29/2026 04:27:01 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'R',
  name: 'Skystrike',
  affects: 'Enemies',
  blurb: 'Active:  Quinn disbands from  Valor and rains arrows down around her, dealing physical damage to nearby enemies.',
  castTime: 'none',
  cooldown: '3',
  cost: '100 / 50 / 0',
  damageType: 'Physical damage',
  effectRadius: '700',
  icon: 'https://cdn.communitydragon.org/latest/champion/Quinn/ability-icon/r',
  notes: 'If Quinn uses  Vault while  Behind Enemy Lines is active, Skystrike will activate at her target\'s location after she bounces back.\nUpon respawning or recalling, Quinn\'s first Skytrike will deal double the normal amount of damage to enemies hit if activated by an ability.(bug)',
  spellEffects: 'spellaoe',
  spellshieldable: 'True',
  targeting: 'Auto',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Quinn detaches from Valor, ending Behind Enemy Lines\' effects and raining arrows down around her, dealing physical damage to nearby enemies and marking them as Vulnerable.</p>',
      leveling: [
        {
          attribute: 'Physical Damage',
          modifiers: [
            {
              values: '60 / 90 / 120'
            },
            {
              unit: '% bonus AD',
              values: '35'
            }
          ]
        }
      ]
    },
    {
      description: 'Declaring a basic attack or casting Blinding Assault or Vault during Behind Enemy Lines automatically activates Skystrike.'
    }
  ]
}
export default ability
