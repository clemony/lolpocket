// Updated Patch 15.24.1 - 12/26/2025 07:03:50 PM CST

const ability: Ability = {
  key: 'P',
  name: 'Get Excited!',
  affects: 'Self',
  blurb: 'Innate: Whenever  Jinx scores a  takedown against an enemy  champion, epic  monster,  turret, or inhibitor shortly after damaging them, she gains a burst of  movement speed for a few seconds.',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Whenever Jinx scores a takedown against an enemy champion, epic monster, turret, or inhibitor within 3 seconds of damaging them, she gains 175% bonus movement speed decaying over 6 seconds.</p>'
    },
    {
      description: 'Additionally, she is allowed to exceed the attack speed cap and gains a stack of Get Excited! for the same duration, stacking up to 5 times. Only takedowns against enemy champions can grant stacks beyond the first.'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Get Excited!:</span> For each stack, Jinx gains 25% total attack speed, up to a maximum of 125%.</p>'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Jinx/ability-icon/p',
  notes: 'Jinx\'s attack speed cap is increased to 90.0 for the duration, however this value is already beyond the technical limit for attack speed.\nJinx will still trigger Get Excited from killing a summoned  Rift Herald.\nJinx will fail to trigger Get Excited in the specific circumstance of killing  Baron Nashor while more than ~2500 distance away.(bug)',
  targeting: 'Passive'
}
export default ability
