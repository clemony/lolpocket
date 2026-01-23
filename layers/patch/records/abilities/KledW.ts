// Updated Patch 15.24.1 - 12/26/2025 07:03:52 PM CST

const ability: Ability = {
  key: 'W',
  name: 'Violent Tendencies',
  affects: 'Enemies',
  blurb: 'Passive:  Kled periodically gains Violent Tendencies, which starts expiring upon his next basic attack.',
  cooldown: '13 / 12 / 11 / 10 / 9',
  cost: '0',
  damageType: 'Physical damage',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Kled periodically gains Violent Tendencies, which starts expiring upon his next basic attack.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Violent Tendencies:</span> Kled gains 150% bonus attack speed on his next 4 basic attacks within 4 seconds. The fourth attack deals bonus physical damage. The damage based on the target\'s health is capped at 200 against monsters.Violent Tendencies\' current cooldown is reduced by 0.5 seconds on-hit, increased to 1.5 against champions.</p>',
      leveling: [
        {
          attribute: 'Bonus Physical Damage',
          modifiers: [
            {
              values: '20 / 30 / 40 / 50 / 60'
            },
            {
              tooltip: 'Scaling per rank:\n4.5 / 5 / 5.5 / 6 / 6.5% (+ 2% per 100 bonus AD) (+ 0.4% per 100 bonus health) of target\'s maximum health',
              unit: '% (+ 2% per 100 bonus AD) (+ 0.4% per 100 bonus health) of target\'s maximum health',
              values: '4.5 - 6.5'
            }
          ]
        }
      ]
    },
    {
      description: 'Against structures, the fourth attack deals modified bonus physical damage.',
      leveling: [
        {
          attribute: 'Structure Bonus Damage',
          modifiers: [
            {
              values: '62 / 63.75 / 65.5 / 67.25 / 69 / 70.75 / 72.5 / 74.25 / 76 / 77.75 / 79.5 / 81.25 / 83 / 84.75 / 86.5 / 88.25 / 90 / 91.75'
            },
            {
              tooltip: 'Scaling per rank:\n0 / 15 / 30 / 45 / 60',
              values: '0 - 60'
            }
          ]
        }
      ]
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Kled/ability-icon/w',
  notes: 'Violent Tendencies\' bonus damage is applied as a separate damage instance from the attack that triggers it.\nThis causes  Black Cleaver\'s Carve to be applied twice.(note)\nViolent Tendencies\' bonus damage is tagged as  basic damage and  spell damage, which allows it to trigger spell effects.\nAttacking a plant or  ward will not activate Violent Tendencies.\nAttacking either while Violent Tendencies is already active will still consume an attack.\nWhile affected by  Silence or  Forced Actions, the animations and sounds of Kled\'s first 3 Violent Tendencies attacks are replaced with default ones.(bug)\nThe first and third attack will  instead play  critical strike animations if they strike critically.\nLearning Violent Tendencies will cancel Kled\'s ongoing attack windup.(bug)\nIn contrast, Violent Tendencies coming off cooldown during an ongoing attack windup will not cancel it.\nSuccessfully finishing the basic attack will then cause Violent Tendencies to begin expiring, but will not count as one of the 4 attacks.',
  spellEffects: 'Special',
  spellshieldable: 'False',
  targeting: 'Passive'
}
export default ability
