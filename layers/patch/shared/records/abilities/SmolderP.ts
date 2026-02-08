// Updated Patch 16.1 - 01/29/2026 04:27:09 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'P',
  name: 'Dragon Practice',
  affects: 'Self/Enemies',
  blurb: 'Innate:  Smolder generates a  stack of Dragon Practice from damaging champions with abilities, or when  Super Scorcher Breath kills  minions and  monsters. His  basic abilities deal bonus magic damage based on stacks.',
  damageType: 'Magic damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Smolder/ability-icon/p',
  notes: 'Super Scorcher Breath grants a stack if the target dies while the initial missile is in flight.\nThis happens even if the target dies to  Super Scorcher Breath\'s burn, giving him a total of 2 stacks.\n Achooo! can only grant a stack of Dragon Practice with the first hit against each enemy champion.\n Flap, Flap, Flap can only grant one stack of Dragon Practice per cast.',
  spellEffects: 'proc',
  spellshieldable: 'true',
  targeting: 'Passive',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Smolder generates a stack of Dragon Practice each time he hits an enemy champion with an ability, or whenever Super Scorcher Breath kills a minion or monster. His basic abilities deal bonus magic damage based on stacks.</p>\n<p class="ability-effect"><span class="ability-header"> Super Scorcher Breath:</span> Deals bonus magic damage equal to 40% - 70% (+ 0% - 12%) (based on critical strike chance) of Dragon Practice stacks.</p>\n<p class="ability-effect"><span class="ability-header"> Achooo!:</span> Explosions deal bonus magic damage equal to 55% of Dragon Practice stacks.</p>\n<p class="ability-effect"><span class="ability-header"> Flap, Flap, Flap:</span> Attacks each deal bonus magic damage equal to 12% of Dragon Practice stacks.</p>'
    }
  ]
}
export default ability
