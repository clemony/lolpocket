// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'R',
  name: 'Maximum Dosage',
  affects: 'Self',
  blurb: 'Active:  Dr. Mundo injects himself with chemicals, gaining  increased base health and  bonus movement speed, in addition to  regenerating health over the duration.',
  castTime: 'none',
  cooldown: '120',
  cost: '0',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Dr. Mundo injects himself with chemicals to become enhanced for 10 seconds, gaining increased base health, bonus movement speed, and bonus health regeneration.</p>',
      leveling: [
        {
          attribute: 'Increased Base Health',
          modifiers: [
            {
              unit: '% missing health',
              values: '15 / 20 / 25'
            }
          ]
        },
        {
          attribute: 'Bonus Movement Speed',
          modifiers: [
            {
              unit: '%',
              values: '15 / 25 / 35'
            }
          ]
        },
        {
          attribute: 'Bonus Health Regeneration',
          modifiers: [
            {
              unit: '% maximum health',
              values: '10 / 20 / 30'
            }
          ]
        },
        {
          attribute: 'Health Regenerated per 0.5 Seconds',
          modifiers: [
            {
              unit: '% maximum health',
              values: '1 / 2 / 3'
            }
          ]
        },
        {
          attribute: 'Total Health Regenerated',
          modifiers: [
            {
              unit: '% maximum health',
              values: '20 / 40 / 60'
            }
          ]
        }
      ]
    },
    {
      description: 'At rank 3, Maximum Dosage\'s increased base health and bonus health regeneration are both increased by 5% for each enemy champion within 1200 units at the time of cast.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/DrMundo/ability-icon/r',
  notes: 'The health regeneration granted by Maximum Dosage adjusts dynamically to Dr. Mundo\'s maximum health.\nThe health regeneration granted by Maximum Dosage is special cased to be increased by  Axiom Arcanist.\nMaximum Dosage will end prematurely upon entering  resurrection.\nAgainst 5 champions, Rank 3 Maximum Dosage will heal 85% Maximum health regeneration & 50% Missing Bonus health',
  targeting: 'Auto'
}
export default ability
