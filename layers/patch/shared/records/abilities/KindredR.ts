// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'R',
  name: 'Lamb\'s Respite',
  affects: 'Self, Allies, Enemies',
  blurb: 'Active:  Lamb blesses the ground under herself for a few seconds. Any unit inside the area will become  invulnerable upon reaching  low health.',
  castTime: 'None',
  cooldown: '160 / 140 / 120',
  cost: '100',
  effectRadius: '535',
  icon: 'https://cdn.communitydragon.org/latest/champion/Kindred/ability-icon/r',
  notes: 'Lamb\'s Respite will affect all  champions,  minions, and  monsters, but not  wards,  turrets, or jungle plants.\nLamb\'s Respite will affect  untargetable units but does not grant them the  heal at the end of the blessing.\nIt will specifically not affect champions that are  resurrecting from  Guardian Angel.\n Health costs will ignore Lamb\'s Respite\'s threshold.\nThe cost will not be paid if the caster is below the threshold.\nLamb\'s Respite has no effect on  zombie state or  clone units.\nThe effects are applied before the cast time.\nPENDING FOR TEST: Lamb\'s Respite will have no effect if cast while Kindred is  untargetable.',
  resource: 'Mana',
  targeting: 'Auto',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Lamb blesses the ground underneath herself and enters a 0.264 seconds cast time, creating a sacred zone at her location at the time of cast that lasts for 4 seconds. All units inside the zone gain a minimum health threshold equal to 10% of their maximum health, and will also become invulnerable while remaining in the area when they reach or are at the threshold, during which they also cannot be healed, but can still regenerate health.</p>'
    },
    {
      description: 'All targetable units within the zone are healed when the blessing ends.',
      leveling: [
        {
          attribute: 'Heal',
          modifiers: [
            {
              values: '225 / 300 / 375'
            }
          ]
        }
      ]
    }
  ]
}
export default ability
