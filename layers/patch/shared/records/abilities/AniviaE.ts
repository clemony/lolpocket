// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'E',
  name: 'Frostbite',
  affects: 'Enemies',
  blurb: 'Active:  Anivia blasts a freezing wind at the target enemy that deals magic damage.',
  castTime: '0.25',
  cooldown: '4',
  cost: '50',
  damageType: 'Magic damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Anivia/ability-icon/e',
  notes: 'The damage of Frostbite is calculated once it hits. If the target\'s mark from being hit by  Flash Frost or a fully formed  Glacial Storm wears off while the projectile is traveling, the damage is not doubled.\nFrostbite has a different sound effect when it hits a target for double damage.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).',
  projectile: 'TRUE',
  resource: 'Mana',
  speed: '1600',
  spellEffects: 'spell',
  spellshieldable: 'True',
  targeting: 'Unit',
  targetRange: '600',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Enemies hit by Flash Frost or a fully formed Glacial Storm become Chilled for 3 seconds, refreshing on subsequent hits.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Anivia blasts a freezing wind at the target enemy that deals magic damage, doubled if they were Chilled.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '55 / 80 / 105 / 130 / 155'
            },
            {
              unit: '% AP',
              values: '55'
            }
          ]
        },
        {
          attribute: 'Enhanced Damage',
          modifiers: [
            {
              values: '110 / 160 / 210 / 260 / 310'
            },
            {
              unit: '% AP',
              values: '110'
            }
          ]
        }
      ]
    }
  ]
}
export default ability
