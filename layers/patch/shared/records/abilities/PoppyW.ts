// Updated Patch 16.1 - 01/29/2026 04:27:00 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'W',
  name: 'Steadfast Presence',
  affects: 'Self',
  blurb: 'Passive:  Poppy increases her  total armor and  total magic resist. This effect is doubled while she is at low health.',
  castTime: 'none',
  cooldown: '20 / 18 / 16 / 14 / 12',
  cost: '50',
  damageType: 'Magic damage',
  effectRadius: '400',
  icon: 'https://cdn.communitydragon.org/latest/champion/Poppy/ability-icon/w',
  notes: 'Stubborn to a Fault\'s armor amplification stacks with an instance of recursion.\nSteadfast Presence does not stop  dashes if the unit is  crowd control immune,  displacement immune,  untargetable, or protected by  spell shield in the process (e.g.  Death Mark,  Stormbringer,  Unstoppable Force).\nDashes when the unit is  crowd control immune or  displacement immune still trigger the aura and take the damage, but do not get  knocked up and thus also never become  grounded and  slowed.\n Spell shields deny all the effects if Steadfast Presence is triggered by their holder, and are consumed in the process.\nBeing  untargetable prevents Steadfast Presence from triggering, but this does not prevent it from triggering against another, targetable dash.\nSteadfast Presence does not trigger against  lunges.',
  resource: 'Mana',
  spellEffects: 'aoe',
  spellshieldable: 'True',
  targeting: 'Auto',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Passive - Stubborn to a Fault:</span> Poppy increases her total armor and total magic resistance by 12%, doubled to 24% while she is below 40% maximum health.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Poppy gains 40% bonus movement speed and creates an aura around herself for 2 seconds, causing all enemies who attempt to dash into or within it to be dealt magic damage and knocked up for 0.5 seconds. If a target was successfully interrupted, they become grounded and slowed by 25% for 2 seconds.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '70 / 110 / 150 / 190 / 230'
            },
            {
              unit: '% AP',
              values: '70'
            }
          ]
        }
      ]
    },
    {
      description: 'Steadfast Presence can only block a single dash per enemy per cast.'
    }
  ]
}
export default ability
