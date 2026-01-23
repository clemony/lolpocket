// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  key: 'Q',
  name: 'Transfusion',
  affects: 'Self, Enemies',
  blurb: 'Active:  Vladimir drains blood from the target enemy, dealing magic damage and  healing himself. He then generates 1 point of  Crimson Rush over the  cooldown.',
  castTime: '0.25',
  cooldown: '9 / 7.9 / 6.8 / 5.7 / 4.6',
  cost: '0',
  damageType: 'Magic damage',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Vladimir drains blood from the target enemy, dealing magic damage and healing himself. He then generates 1 point of Crimson Rush over the cooldown.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '80 / 100 / 120 / 140 / 160'
            },
            {
              unit: '% AP',
              values: '60'
            }
          ]
        },
        {
          attribute: 'Heal',
          modifiers: [
            {
              values: '20 / 25 / 30 / 35 / 40'
            },
            {
              unit: '% AP',
              values: '35'
            }
          ]
        }
      ]
    },
    {
      description: 'At 2 points of Crimson Rush, Vladimir surges, gaining 10% / 20% / 30% / 40% (based on level) bonus movement speed decaying over 0.5 seconds while the Crimson Rush depletes over 2.5 seconds. Crimson Rush depletes 75% slower during Sanguine Pool, Tides of Blood, or stasis.'
    },
    {
      description: 'Casting Transfusion during the surge consumes all Crimson Rush to deal 85% increased damage and heal Vladimir for an additional 30 - 200 (based on level) (+ 5% (+ 4% per 100 AP) of his missing health). The bonus healing is reduced to[ 35% ][ 10.5 - 70 (based on level) (+ 1.75% (+ 1.4% per 100 AP) of his missing health) ]against minions.',
      leveling: [
        {
          attribute: 'Increased Damage',
          modifiers: [
            {
              values: '148 / 185 / 222 / 259 / 296'
            },
            {
              unit: '% AP',
              values: '111'
            }
          ]
        }
      ]
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Vladimir/ability-icon/q',
  notes: 'Even though the healing effect is visualized as a projectile, the healing itself triggers instantly.\nVladimir\'s resource bar indicates his current  Crimson Rush and changes colors depending on the charge-up stage of his surge.\nWhite while generating the first stack and while at 1 stack (there is no time-out period).\nOrange while generating the second stack.\nRed while he is surging (Crimson Rush will deplete over 2.5 seconds once triggered).\nEach stack generates over-time (Transfusion\'s cooldown).\nVladimir can cast  Sanguine Pool and  Hemoplague during Transfusion\'s cast time.\nThe  Crimson Rush depletes normally while under  resurrection effects.',
  projectile: 'FALSE',
  spellEffects: 'Single target',
  spellshieldable: 'True',
  targeting: 'Unit',
  targetRange: '600'
}
export default ability
