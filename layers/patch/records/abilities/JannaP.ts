// Updated Patch 15.24.1 - 12/26/2025 07:03:48 PM CST

const ability: Ability = {
  key: 'P',
  name: 'Tailwind',
  affects: 'Self',
  blurb: 'Innate: Nearby allied champions gain  bonus movement speed while moving toward  Janna.',
  effectRadius: '1200',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Janna grants 6% bonus movement speed to nearby allied champions that are facing in the direction of her location.</p>'
    },
    {
      description: 'Janna\'s basic attacks on-hit and Zephyr deal bonus magic damage equal to 30% of her bonus movement speed.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Janna/ability-icon/p',
  notes: 'No additional notes.',
  spellEffects: 'proc',
  targeting: 'Passive'
}
export default ability
