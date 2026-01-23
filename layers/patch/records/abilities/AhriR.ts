// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'R',
  name: 'Spirit Rush',
  affects: 'Enemies',
  blurb: 'Active:  Ahri  dashes forward and fires essence bolts to nearby enemies, dealing magic damage.',
  castTime: 'none',
  cooldown: '140 / 120 / 100',
  cost: '100',
  damageType: 'Magic damage',
  effectRadius: '600',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Ahri dashes to the target location and then fires essence bolts to up to 3 nearby visible enemies, each dealing magic damage. Spirit Rush can be recast twice more within 15 seconds of the activation at no additional cost, with a 1-second static cooldown between casts. Consuming a champion\'s essence with Essence Theft while Spirit Rush is active extends the recast duration by and up to 10 seconds, and grants an additional recast, storing up to 3 recasts at a time.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '75 / 125 / 175'
            },
            {
              unit: '% AP',
              values: '35'
            }
          ]
        }
      ]
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Ahri mimics the first cast\'s effects.</p>'
    },
    {
      description: 'Spirit Rush\'s recast duration will persist even after using all recasts. Fox-Fire can be cast during the dash.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Ahri/ability-icon/r',
  notes: 'This ability always employs Quick cast.\nEach cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nSpirit Rush uses quick cast by default.\nThere\'s a slight delay before a champion gains vision of the fog of war once inside it. Because of this, if Ahri dashes into it, it is possible that Spirit Rush will not target any enemy in range.\nThe bolts do not fire if Ahri dies while  dashing, unless she was saved by  resurrection.\nThe bolts will fire if the dash is  interrupted by other means.\nThis ability\'s damage is calculated based on the caster\'s current stats and changes dynamically.',
  projectile: 'TRUE',
  resource: 'Mana',
  speed: '1200 + 100% movement speed / 1400',
  spellEffects: 'aoe',
  spellshieldable: 'True',
  targeting: 'Location',
  targetRange: '500'
}
export default ability
