// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'E',
  name: 'Charm',
  width: '120',
  affects: 'Enemies',
  blurb: 'Active:  Ahri blows forth a kiss that  charms the first enemy hit, dealing magic damage and  knocking them down.',
  castTime: '0.25',
  cooldown: '12',
  cost: '60',
  damageType: 'Magic damage',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Ahri blows forth a kiss in the target direction that deals magic damage to the first enemy hit, knocking them down and charming and slowing them by 65% for a duration.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '80 / 120 / 160 / 200 / 240'
            },
            {
              unit: '% AP',
              values: '85'
            }
          ]
        },
        {
          attribute: 'Disable Duration',
          modifiers: [
            {
              unit: ' seconds',
              values: '1.2 / 1.35 / 1.5 / 1.65 / 1.8'
            }
          ]
        }
      ]
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Ahri/ability-icon/e',
  notes: 'Charm is able to  slow targets otherwise  immune to slows upon  charming them.(bug)\nThis ability\'s damage is calculated based on the caster\'s stats at the time of its application.\nThis ability will cast from wherever the caster is at the end of the cast time.',
  projectile: 'TRUE',
  resource: 'Mana',
  speed: '1550',
  spellEffects: 'spell',
  spellshieldable: 'True',
  targeting: 'Direction'
}
export default ability
