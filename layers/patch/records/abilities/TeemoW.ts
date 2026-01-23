// Updated Patch 15.24.1 - 12/26/2025 07:04:14 PM CST

const ability: Ability = {
  key: 'W',
  name: 'Move Quick',
  affects: 'Self',
  blurb: 'Passive:  Teemo gains  bonus movement speed after a few seconds without taking damage from enemy  champions or  turrets.',
  castTime: 'none',
  cooldown: '14',
  cost: '40',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Teemo gains bonus movement speed after 5 seconds without taking damage from enemy champions or turrets.</p>',
      leveling: [
        {
          attribute: 'Bonus Movement Speed',
          modifiers: [
            {
              unit: '%',
              values: '12 / 16 / 20 / 24 / 28'
            }
          ]
        }
      ]
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Teemo doubles the bonus movement speed for 3 seconds, preventing it from being removed for the duration.</p>',
      leveling: [
        {
          attribute: 'Enhanced Bonus Movement Speed',
          modifiers: [
            {
              unit: '%',
              values: '24 / 32 / 40 / 48 / 56'
            }
          ]
        }
      ]
    },
    {
      description: 'Casting Move Quick does not interrupt Guerrilla Warfare.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Teemo/ability-icon/w',
  notes: 'When Move Quick\'s active bonus movement speed ends Teemo will not regain the passive one if he was damaged during the active\'s duration.\nMove Quick\'s passive will be disabled even if the damage is blocked with a  spell shield.',
  resource: 'Mana',
  targeting: 'Auto'
}
export default ability
