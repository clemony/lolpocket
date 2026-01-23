// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  key: 'R',
  name: 'Mega Inferno Bomb',
  affects: 'Enemies',
  blurb: 'Active:  Ziggs catapults the Mega Inferno Bomb to the target location that deals magic damage to enemies hit, increased at the epicenter.',
  castTime: '0.375',
  cooldown: '120 / 95 / 70',
  cost: '100',
  damageType: 'Magic damage',
  effectRadius: '525',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Ziggs catapults the Mega Inferno Bomb to the target location, granting sight within a 600 radius around its destination for 4 seconds.</p>'
    },
    {
      description: 'The bomb explodes upon arrival to deal magic damage to enemies hit, reduced to 65% against those outside of the epicenter.',
      leveling: [
        {
          attribute: 'Epicenter Magic Damage',
          modifiers: [
            {
              values: '300 / 500 / 700'
            },
            {
              unit: '% AP',
              values: '100'
            }
          ]
        },
        {
          attribute: 'Reduced Damage',
          modifiers: [
            {
              values: '195 / 325 / 455'
            },
            {
              unit: '% AP',
              values: '65'
            }
          ]
        }
      ]
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Ziggs/ability-icon/r',
  innerRadius: '250',
  notes: 'Allies cannot see Mega Inferno Bomb\'s area indicator until shortly before the blast.\nMega Inferno Bomb takes 2.64 seconds from the start of the cast time to land when Ziggs casts at maximum range (reduced to 1.617 seconds from the start of the cast time when casting within 2700 units).\nWhen cast within 2700 units, Mega Inferno Bomb has a fixed travel time. Beyond that, the travel time is equal to the cast distance divided by the now-fixed missile speed.\nThe area reveal on the target location begins as soon as the cast time is completed and can see into  brush and across terrain.',
  projectile: 'FALSE',
  resource: 'Mana',
  speed: '2250',
  spellEffects: 'aoe',
  spellshieldable: 'True',
  targeting: 'Location',
  targetRange: '5000'
}
export default ability
