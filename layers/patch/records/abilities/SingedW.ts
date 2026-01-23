// Updated Patch 15.24.1 - 12/26/2025 07:04:14 PM CST

const ability: Ability = {
  key: 'W',
  name: 'Mega Adhesive',
  affects: 'Enemies',
  blurb: 'Active:  Singed creates a field of adhesive at the target location for a short time that  grounds and  slows enemies within.',
  castTime: '0.25',
  cooldown: '17 / 16 / 15 / 14 / 13',
  cost: '60 / 70 / 80 / 90 / 100',
  effectRadius: '265',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Singed spills a potent adhesive that lands at the target location after 0.375 seconds, creating a field for 3 seconds that grounds enemies within and slows them.</p>',
      leveling: [
        {
          attribute: 'Slow',
          modifiers: [
            {
              unit: '%',
              values: '50 / 55 / 60 / 65 / 70'
            }
          ]
        }
      ]
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Singed/ability-icon/w',
  notes: 'The goo missile is VFX only, to convey which location Singed threw the adhesive at. It has a fixed travel time but is independent from when the zone is established. It is not destructible by effects such as  Wind Wall.\nMega Adhesive\'s  slow and  ground debuffs are each marked as non-dispellable, so they are not removed by most  cleanses. Each is however allowed to be removed by cleanses that also grant immunity to the debuff type, such as  Olaf\'s  Ragnarok.',
  projectile: 'TRUE',
  resource: 'Mana',
  spellshieldable: 'false',
  targeting: 'Location',
  targetRange: '1000'
}
export default ability
