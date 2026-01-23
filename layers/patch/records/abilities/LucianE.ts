// Updated Patch 15.24.1 - 12/26/2025 07:03:59 PM CST

const ability: Ability = {
  key: 'E',
  name: 'Relentless Pursuit',
  affects: 'Self',
  blurb: 'Passive: Relentless Pursuit\'s cooldown is  reduced for each  Lightslinger shot hit, doubled against enemy  champions.',
  castTime: 'none',
  cooldown: '18 / 17 / 16 / 15 / 14',
  cost: '40 / 30 / 20 / 10 / 0',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Relentless Pursuit\'s current cooldown is reduced by 1 second for each Lightslinger shot hit, doubled to 2 seconds against enemy champions.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Lucian dashes in the target direction.</p>'
    },
    {
      description: 'Relentless Pursuit resets Lucian\'s basic attack timer. Lucian can cast any of his abilities during the dash. Relentless Pursuit can be cast during Ardent Blaze\'s cast time and during The Culling\'s channel.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Lucian/ability-icon/e',
  notes: 'Additional on-hits during Lightslinger are not considered for the cooldown reduction (i.e  Runaan\'s Hurricane,  Guinsoo\'s Rageblade).\nUnlike some dashes, Lucian\'s dash speed does not scale with his movement speed.\nRelentless Pursuit\'s dash can go through terrain, but will not be extended further if the target location is within terrain, unlike other dashes, like  Ekko\'s  Phase Dive.\nCasting Relentless Pursuit directly after attacking with Lightslinger will reduce Relentless Pursuit\'s cooldown when the projectiles hit the target.\nRelentless Pursuit can be cast during  Recall\'s cast time.\nIf Relentless Pursuit is cast just as the cast time ends, Lucian will not perform his Recall animation, instead staying idle. This allows Lucian to use his emotes during his Recall.',
  resource: 'Mana',
  speed: '1350',
  targeting: 'Location',
  targetRange: '200 / 425'
}
export default ability
