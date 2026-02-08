// Updated Patch 16.1 - 01/29/2026 04:27:02 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'Q',
  name: 'Handshake',
  width: '140',
  affects: 'Self, Ememies',
  blurb: 'Active:  Renata fires a hook in the target direction that deals magic damage to the first enemy hit and briefly  roots them. She can recast the ability while the target is rooted.',
  castTime: '0.25',
  cooldown: '16',
  cost: '80',
  damageType: 'Magic damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Renata/ability-icon/q',
  notes: 'Applies  spell damage to the primary target and  area damage to secondary targets.\nHandshake\'s interaction between its tether and root:\nIf the root is not applied, neither is the tether.\nThe tether\'s duration lasts the same as the root duration, even if it is modified by  tenacity.\nIf the root is removed, the tether is as well, but not vice versa.\n Spell shield will block the hook but not the recast\'s effects as the primary target.\nAs a secondary target, the recast\'s effects will be blocked.\nRenata may still move while the hook is in flight.\nHer facing direction is locked towards the target direction of the hook.\nWhile the target is hooked, Renata\'s facing direction is considered to be in their direction and not in the one she is moving.\nThe  movement speed reduction stacks additively with other  movement speed bonuses.\nIt is a negative bonus, not a  slow, and is thus not reduced by  slow resist.\nThis ability will cast from wherever the caster is at the start of the cast time.',
  projectile: 'TRUE',
  resource: 'Mana',
  speed: '1450',
  spellEffects: 'special',
  spellshieldable: 'special',
  targeting: 'Direction',
  tetherRadius: '1200',
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
  ]
}
export default ability
