// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'E',
  name: 'Conflagration',
  affects: 'Enemies',
  blurb: 'Active:  Brand sets the target enemy aflame, which creates a blast that deals magic damage to them and nearby enemies.',
  castTime: '0.25',
  cooldown: '13 / 12 / 11 / 10 / 9',
  cost: '70 / 75 / 80 / 85 / 90',
  damageType: 'Magic damage',
  effectRadius: '300 / 600',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Brand sets the target enemy aflame, which creates a blast that deals magic damage to them and causes the flame to spread from the target to nearby enemies, dealing them the same damage.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '55 / 80 / 105 / 130 / 155'
            },
            {
              unit: '% AP',
              values: '60'
            }
          ]
        }
      ]
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Ablaze Bonus:</span> Conflagration\'s spread range is doubled.</p>'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Brand/ability-icon/e',
  notes: 'The flame spreads to enemies near the primary target at the time of cast.\nEnemies that move out of range after the fact will still be hit, as the flame is spread as homing missiles to each of its targets.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).',
  projectile: 'FALSE',
  resource: 'Mana',
  speed: '900',
  spellEffects: 'aoe',
  spellshieldable: 'True',
  targeting: 'Unit',
  targetRange: '675'
}
export default ability
