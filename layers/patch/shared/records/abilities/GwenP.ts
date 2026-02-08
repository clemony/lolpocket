// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'P',
  name: 'A Thousand Cuts',
  affects: 'Self, Enemies',
  blurb: 'Innate:  Gwen\'s  basic attacks  on-hit and damaging abilities deal bonus magic damage equal to a portion of the target\'s maximum health and  heal her for a portion of this damage dealt against  champions.',
  damageType: 'Magic damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Gwen/ability-icon/p',
  notes: 'The attacks do not deal the bonus damage against  structures.',
  spellEffects: 'proc',
  targeting: 'Passive',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Gwen\'s basic attacks on-hit, the center of Snip Snip!, and Needlework deal bonus magic damage equal to 1% (+ 0.6% per 100 AP) of the target\'s maximum health.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">A Thousand Cuts is modified based on the target:</span></p>\n Heals Gwen for 50% of post-mitigation damage dealt against champions, capped at 10 - 25 (based on level) (+ 6.5% AP) per instance.\nDeals an additional 8 - 30 (based on level) bonus magic damage against minions that are below 40% health.\nDeals a maximum of 5 (+ 10% AP) magic damage against monsters.'
    }
  ]
}
export default ability
