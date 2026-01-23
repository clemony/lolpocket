// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'W',
  name: 'Crystallize',
  affects: 'Enemies',
  blurb: 'Active:  Anivia  erects a wall of ice that lingers for a few seconds, blocking movement.',
  castTime: '0.25',
  cooldown: '17',
  cost: '70',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Anivia summons a wall of ice at the target location perpendicular to her facing, knocking all units away from it, though not through terrain. The wall lingers as impassable terrain for 5 seconds.</p>',
      leveling: [
        {
          attribute: 'Width',
          modifiers: [
            {
              unit: ' units',
              values: '600 / 700 / 800 / 900 / 1000'
            }
          ]
        },
        {
          attribute: 'Number of ice segments',
          modifiers: [
            {
              unit: ' chunks of ice',
              values: '4 / 5 / 6 / 7 / 8'
            }
          ]
        },
        {
          attribute: 'Distance between outermost segments',
          modifiers: [
            {
              unit: ' units',
              values: '400 / 500 / 600 / 700 / 800'
            }
          ]
        },
        {
          attribute: 'Distance between individual segments',
          modifiers: [
            {
              unit: ' units',
              values: '133.33 / 125 / 120 / 116.67 / 114.29'
            }
          ]
        }
      ]
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Anivia/ability-icon/w',
  notes: 'Crystallize\'s displacement triggers in-combat effects by dealing 0  proc  true damage, such as drawing turret aggro,  Sudden Impact and applying  Elixir of Sorcery.\nIndividual ice chunks have both 100 units  pathing radius and  gameplay radius.\n Champions are knocked 120 units to either side of a wall segment, non-champions 250 units.\nPENDING FOR TEST: Knockback speed?\nPlayer-generated terrain such as Crystallize does not block  sight.',
  resource: 'Mana',
  spellshieldable: 'false',
  targeting: 'Location',
  targetRange: '1000 / 100'
}
export default ability
