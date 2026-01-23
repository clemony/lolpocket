// Updated Patch 15.24.1 - 12/26/2025 07:03:49 PM CST

const ability: Ability = {
  key: 'P',
  name: 'Relentless Assault',
  affects: 'Enemies, Self',
  blurb: 'Innate:  Jax\'s  basic attacks generate  stacks, up to a cap. Stacks expire one at a time.',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Jax\'s basic attacks generate a stack of Relentless Assault on-attack for 2.5 seconds, refreshing on subsequent attacks and stacking up to 8 times. Stacks expire one by one every 0.25 seconds when the duration ends.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Relentless Assault:</span> For each stack, Jax gains 5% - 12.5% (based on level) bonus attack speed, up to a maximum of 40% - 100% (based on level).</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Grandmaster at Angling:</span> While out-of-combat with champions and idle in the river for 10 seconds, Jax will occasionally catch a fish, granting him 1 and 1 ability power for 5 seconds. He catches a fish at an average rate of one every 15 seconds. He also has a 5% chance to catch a rare fish that grants 10 and 10 ability power for 5 seconds.</p>'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Jax/ability-icon/p',
  notes: 'Jax will start fishing while idle in the river if he is in-combat with only monsters (e.g. any of the three Epic monsters).(bug)\nJax catching a fish is a random event and will play a special animation.\nThe total number of fish caught during the game is displayed when fishing as  Grandmaster at Angling passive.',
  targeting: 'Passive'
}
export default ability
