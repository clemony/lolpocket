// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  key: 'E',
  name: 'Sky Splitter',
  affects: 'Enemies, Self',
  blurb: 'Active:  Volibear conjures a lightning bolt to strike the target location, dealing magic damage to enemies hit based on their maximum health and  slowing them for a short time.',
  castTime: 'none',
  cooldown: '14',
  cost: '60',
  damageType: 'Magic damage',
  effectRadius: '325 / 425',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Volibear summons a lightning bolt to strike at the target location after a 2-second delay, granting sight of the area for 1 second after the first second of the delay. If Volibear is within the strike, he gains a shield equal to 14% of his maximum health (+ 75% AP) for 3 seconds.</p>'
    },
    {
      description: 'The bolt deals magic damage to enemies hit, capped against non- champions, and slows them by 40% for 2 seconds.',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '80 / 110 / 140 / 170 / 200'
            },
            {
              unit: '% AP',
              values: '70'
            },
            {
              tooltip: 'Scaling per rank:\n11 / 12 / 13 / 14 / 15% of target\'s maximum health',
              unit: '% of target\'s maximum health',
              values: '11 - 15'
            }
          ]
        },
        {
          attribute: 'Non-Champion Capped Damage',
          modifiers: [
            {
              values: '190 / 305 / 420 / 535 / 650'
            },
            {
              unit: '% AP',
              values: '70'
            }
          ]
        }
      ]
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Volibear/ability-icon/e',
  notes: 'Enemies cannot see the location of the cast for the first second, but they can already tell that the spell is underway by noticing Volibear\'s cast animation.\nVolibear can cast Sky Splitter during the movement speed boost from Thundering Smash to prevent the animation from playing.\nVolibear will receive the  shield even if he is  untargetable.',
  resource: 'Mana',
  spellEffects: 'spellaoe',
  spellshieldable: 'True',
  targeting: 'Location',
  targetRange: '1200'
}
export default ability
