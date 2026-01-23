// Updated Patch 15.24.1 - 12/26/2025 07:03:51 PM CST

const ability: Ability = {
  key: 'W',
  name: 'Preparation',
  affects: 'Self',
  blurb: 'Active:  Katarina briefly gains  ghosting and a burst of  movement speed, tossing a Dagger into the air directly above herself.',
  castTime: 'none',
  cooldown: '15 / 14 / 13 / 12 / 11',
  cost: '0',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Katarina tosses a Dagger into the air above her current location and gains bonus movement speed that decays until it lands after 1.25 seconds, becoming ghosted for the same duration.</p>',
      leveling: [
        {
          attribute: 'Bonus Movement speed',
          modifiers: [
            {
              unit: '%',
              values: '50 / 60 / 70 / 80 / 90'
            }
          ]
        }
      ]
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Katarina/ability-icon/w',
  notes: 'No additional details.',
  targeting: 'Auto'
}
export default ability
