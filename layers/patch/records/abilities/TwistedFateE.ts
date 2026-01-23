// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  key: 'E',
  name: 'Stacked Deck',
  affects: 'Enemies, Self',
  blurb: 'Passive:  Twisted Fate gains  bonus attack speed. His  basic attacks  on-hit generate  stacks of Stacked Deck, which stacks up to a cap.',
  cooldown: '0',
  cost: '0',
  damageType: 'Magic damage',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Twisted Fate gains bonus attack speed. His basic attacks on-hit generate a stack of Stacked Deck, stacking up to 3 times. At 3 stacks, his next basic attack is empowered to consume them all to deal bonus magic damage, reduced to 50% against structures.Twisted Fate gains maximum stacks of Stacked Deck upon respawning.</p>',
      leveling: [
        {
          attribute: 'Bonus Attack Speed',
          modifiers: [
            {
              unit: '%',
              values: '15 / 25 / 35 / 45 / 55'
            }
          ]
        },
        {
          attribute: 'Bonus Magic Damage',
          modifiers: [
            {
              values: '65 / 90 / 115 / 140 / 165'
            },
            {
              unit: '% bonus AD',
              values: '20'
            },
            {
              unit: '% AP',
              values: '40'
            }
          ]
        }
      ]
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/TwistedFate/ability-icon/e',
  notes: 'Stacked Deck can be  dodged and/or missed if Twisted Fate is  blinded (the on-hit effect is not consumed in either case) but cannot be  blocked (the enhanced attack is consumed and the bonus damage is still applied).\nAs of patch V14.2, Twisted Fate is intended to gain maximum stacks of Stacked Deck upon learning the ability, but currently does not.(bug)\nThe empowered attack will trigger against  structures but not  wards.',
  projectile: 'TRUE',
  spellEffects: 'proc',
  spellshieldable: 'false',
  targeting: 'Passive'
}
export default ability
