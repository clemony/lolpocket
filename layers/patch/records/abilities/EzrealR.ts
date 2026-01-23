// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'R',
  name: 'Trueshot Barrage',
  width: '320',
  affects: 'Enemies',
  blurb: 'Active:  Ezreal fires a powerful arc of energy that deals magic damage to enemies hit.',
  castTime: '1',
  cooldown: '120 / 105 / 90',
  cost: '100',
  damageType: 'Magic damage',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Ezreal fires a powerful arc of energy in the target direction that briefly grants sight of its surroundings and deals magic damage to enemies hit.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '350 / 550 / 750'
            },
            {
              unit: '% bonus AD',
              values: '100'
            },
            {
              unit: '% AP',
              values: '90'
            }
          ]
        }
      ]
    },
    {
      description: 'Minions and non-epic monsters take 50% reduced damage.',
      leveling: [
        {
          attribute: 'Reduced Damage',
          modifiers: [
            {
              values: '175 / 275 / 375'
            },
            {
              unit: '% bonus AD',
              values: '50'
            },
            {
              unit: '% AP',
              values: '45'
            }
          ]
        }
      ]
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Ezreal/ability-icon/r',
  notes: 'Trueshot Barrage\'s projectile has an  icon on the mini-map while it is in flight. It can be seen by only Ezreal and his allies.\nThis ability will cast from wherever the caster is at the start of the cast time.',
  projectile: 'TRUE',
  resource: 'Mana',
  speed: '2000',
  spellEffects: 'spellaoe',
  spellshieldable: 'True',
  targeting: 'Direction',
  targetRange: 'Global'
}
export default ability
