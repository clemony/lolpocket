// Updated Patch 15.24.1 - 12/26/2025 07:04:14 PM CST

const ability: Ability = {
  key: 'W',
  name: 'Rocket Jump',
  affects: 'Enemies / Self',
  blurb: 'Active:  Tristana jumps to the target location. Upon landing, she deals magic damage and  slows nearby enemies for a short time.',
  castTime: '0.25',
  cooldown: '22 / 20 / 18 / 16 / 14',
  cost: '30 / 35 / 40 / 45 / 50',
  damageType: 'Magic damage',
  effectRadius: '350',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Tristana jumps to the target location. Upon landing, she deals magic damage to nearby enemies and slows them by 40% for 2 seconds.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '70 / 105 / 140 / 175 / 210'
            },
            {
              unit: '% bonus AD',
              values: '100'
            },
            {
              unit: '% AP',
              values: '50'
            }
          ]
        }
      ]
    },
    {
      description: 'Scoring an enemy champion takedown or detonating Explosive Charge at maximum stacks on a champion will reset Rocket Jump\'s cooldown.'
    },
    {
      description: 'Tristana can cast any of her abilities during the dash.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Tristana/ability-icon/w',
  notes: 'Tristana can still use her abilities, summoner spells, and item actives during Rocket Jump.\nRocket Jump\'s dash speed depends on the distance of the jump. Close-ranged jumps are much shorter while long-ranged jumps leave Tristana in the air significantly longer.\nIf Tristana has less than 850 movement speed, a full-range Rocket Jump (including its cast time) will make her arrive quicker at its destination than walking at this speed could.\nKilling  clones or detonating  Explosive Charge on them also resets Rocket Jump\'s cooldown.\nThe former may be unintended.',
  resource: 'Mana',
  speed: '1100',
  spellEffects: 'spellaoe',
  spellshieldable: 'True',
  targeting: 'Location',
  targetRange: '900'
}
export default ability
