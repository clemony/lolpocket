// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'P',
  name: 'Rising Spell Force',
  affects: 'Self',
  blurb: 'Innate:  Ezreal\'s abilities generate  stacks of Rising Spell Force for each enemy hit, up to a cap.',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Ezreal generates a stack of Rising Spell Force for each enemy hit by his abilities, lasting for 6 seconds, refreshing on subsequent hits, and stacking up to 5 times.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Rising Spell Force:</span> For each stack, Ezreal gains 10% bonus attack speed, up to a maximum of 50%.</p>'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Ezreal/ability-icon/p',
  notes: 'Rising Spell Force will stack even if the abilities hit were blocked by  spell shields.',
  targeting: 'Passive'
}
export default ability
