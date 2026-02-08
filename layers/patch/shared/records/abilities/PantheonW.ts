// Updated Patch 16.1 - 01/29/2026 04:27:00 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'W',
  name: 'Shield Vault',
  affects: 'Enemies',
  blurb: 'Active:  Pantheon  leaps to the target enemy, dealing physical damage and briefly  stunning them.',
  castTime: 'none',
  cooldown: '13 / 12 / 11 / 10 / 9',
  cost: '55',
  damageType: 'Physical damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Pantheon/ability-icon/w',
  notes: 'Applies  spell damage on the initial vault. Deals  basic damage on all the attacks from the empowered ability.\nThe empowered attack rolls a  critical strike once for all strikes; either all will critically strike, or none will. If  Sundered Sky\'s Lightshield Strike is ready, all three strikes will critically strike.\nDespite the multi-hit attack only having a hidden cast time, Pantheon will remain  unable to act until the last strike has been dealt.\nThe empowered attack\'s total time is affected by Pantheon\'s  attack speed.\nPENDING FOR TEST: The attack\'s total time is the cast time plus Pantheon\'s attack windup time.\nThe 3 strikes that occurs after Empowered Shield Vault each apply a stack of  Mortal Will, even if the attacks are  dodged,  blocked, or missed while Pantheon is  blinded.\nThe empowered attack will not trigger against  structures.\nThe empowered attack does not cause Pantheon to attack thrice. Effects that trigger  on-attack or interact with the attack windup will only trigger once and thus do not interact with Shield Vault. (e.g.  Lethal Tempo,  Hail of Blades).',
  resource: 'Mana',
  spellEffects: 'special',
  spellshieldable: 'True',
  targeting: 'Unit',
  targetRange: '600',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Pantheon leaps to the front of the target enemy\'s location. If the target is within 800 units upon arrival, he deals physical damage and stuns them for 1 second. Against minions and monsters, Shield Vault has a minimum damage of 60 and is capped at 150.</p>',
      leveling: [
        {
          attribute: 'Physical Damage',
          modifiers: [
            {
              unit: '% of target\'s maximum health',
              values: '6 / 6.5 / 7 / 7.5 / 8'
            },
            {
              unit: '% per 100 AP',
              values: '1.5'
            },
            {
              unit: '% per 100 Pantheon\'s bonus health',
              values: '0.4'
            }
          ]
        }
      ]
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Mortal Will:</span> Pantheon empowers his next basic attack within 4 seconds to have a 0.375-second cast time and strike the target 3 times over a brief period, dealing 40% - 55% (based on level) AD physical damage per hit, up to 120% - 165% (based on level) AD. Each hit is affected by critical strike modifiers and applies on-hit effects.</p>'
    },
    {
      description: 'Empowered Shield Vault resets Pantheon\'s basic attack timer. Pantheon will attempt to basic attack the target at the end of the leap.'
    }
  ]
}
export default ability
