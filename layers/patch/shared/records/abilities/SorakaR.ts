// Updated Patch 16.1 - 01/29/2026 04:27:09 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'R',
  name: 'Wish',
  affects: 'Allies',
  blurb: 'Active:  Soraka calls upon the stars,  healing herself and all allied  champions, regardless of distance. The healing is increased on targets at low health.',
  castTime: '0.25',
  cooldown: '150 / 135 / 120',
  cost: '100',
  effectRadius: 'Global',
  icon: 'https://cdn.communitydragon.org/latest/champion/Soraka/ability-icon/r',
  notes: 'Due to several character stats needing to be recalculated each time a character spawns, casting Wish immediately upon respawning will cause its cooldown to be unaffected by ability haste, and the healing will not be increased by Soraka\'s ability power. (bug)\n Untargetability does not invalidate the targeting of the heal.\nWish will not credit Soraka for assisting in a champion kill if the target ally is at full health.\nWish will apply heal effects (such as  Summon Aery) prioritizing targets based on the Spawn ID, which is the order in which units were added to an ongoing game. For  champions, this is the order they appear in from left to right in the loading screen.\nWish\'s effects occur before the cast time.\nWish will apply to units that are affected by Mordekaiser\'s R even if Soraka is not in the same realm.',
  resource: 'Mana',
  targeting: 'Auto',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Soraka calls upon the stars, healing herself and all allied champions, increased by 50% on targets below 40% of their maximum health.</p>',
      leveling: [
        {
          attribute: 'Heal',
          modifiers: [
            {
              values: '150 / 250 / 350'
            },
            {
              unit: '% AP',
              values: '50'
            }
          ]
        },
        {
          attribute: 'Increased Heal',
          modifiers: [
            {
              values: '225 / 375 / 525'
            },
            {
              unit: '% AP',
              values: '75'
            }
          ]
        }
      ]
    }
  ]
}
export default ability
