// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'E',
  name: 'Umbral Dash',
  affects: 'Self',
  blurb: 'Passive:  Aatrox  heals for the portion of the damage he deals to champions.',
  castTime: 'none',
  cooldown: '9 / 8 / 7 / 6 / 5',
  cost: '0',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Aatrox heals for 16% (+ 1.1% per 100 bonus health) of non- persistent post-mitigation damage he deals against enemy champions.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Aatrox dashes in the target direction.</p>'
    },
    {
      description: 'Umbral Dash resets Aatrox\'s basic attack timer and can be cast during his other abilities without cancelling them and vice versa.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Aatrox/ability-icon/e',
  notes: 'The  dash distance can be extended to up-to 500 units when targeting across terrain. It will only extend for the distance needed to cross the wall.\nThis may upscale his dash speed so that the dash takes the same total time as the standard maximum-range dash.\nIf Umbral Dash is cast towards a movement command\'s end point, Umbral Dash will re-issue a movement command to that point when the dash ends.\nHe will be unable to buffer any commands during the dash if it is casted this way. (bug)\nAatrox\'s model darkens for 1.5 seconds upon casting Umbral Dash, which is a remnant of an attack damage buff he received before it got removed in V9.9.',
  speed: '800 / Up to 1340',
  targeting: 'Location',
  targetRange: '75 / 300 / 500'
}
export default ability
