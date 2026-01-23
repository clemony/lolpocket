// Updated Patch 15.24.1 - 12/26/2025 07:03:59 PM CST

const ability: Ability = {
  key: 'Q',
  name: 'Piercing Light',
  width: '120',
  affects: 'Enemies',
  blurb: 'Active:  Lucian fires a laser in a line in the direction of the target enemy, dealing physical damage to enemies hit.',
  castTime: '0.4 : 0.25 (based on level)',
  cooldown: '9 / 8 / 7 / 6 / 5',
  cost: '48 / 56 / 64 / 72 / 80',
  damageType: 'Physical damage',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Lucian fires a laser in a line in the direction of the target enemy that deals physical damage to enemies hit.</p>',
      leveling: [
        {
          attribute: 'Physical Damage',
          modifiers: [
            {
              values: '85 / 115 / 145 / 175 / 205'
            },
            {
              tooltip: 'Scaling per rank:\n60 / 75 / 90 / 105 / 120% bonus AD',
              unit: '% bonus AD',
              values: '60 - 120'
            }
          ]
        }
      ]
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Lucian/ability-icon/q',
  notes: 'Piercing Light will attempt to lead the target if it is moving but does not adjust further during the cast time (enemies can dodge the laser if they change their position by a sufficient amount during the cast time).\nLucian can buffer  Ardent Blaze or  The Culling during the cast time.  Relentless Pursuit is locked out.\nThis is why Lucian can use them early if the cast time prematurely ends.\nPiercing Light\'s cast time ends prematurely if the initial target dies, allowing Lucian to attack and move freely, or to immediately begin casting either  Ardent Blaze or  The Culling.(note)',
  projectile: 'FALSE',
  resource: 'Mana',
  spellEffects: 'AoE',
  spellshieldable: 'True',
  targeting: 'Unit',
  targetRange: '500'
}
export default ability
