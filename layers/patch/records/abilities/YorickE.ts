// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  key: 'E',
  name: 'Mourning Mist',
  affects: 'Enemies',
  blurb: 'Active:  Yorick hurls a globule of Black Mist that splashes at the target location dealing magic damage to enemies. Enemy  champions and  monsters hit are also shortly  slowed, and marked Cursed for a few seconds.',
  castTime: '0.25',
  cooldown: '12 / 11 / 10 / 9 / 8',
  cost: '50 / 55 / 60 / 65 / 70',
  damageType: 'Magic damage',
  effectRadius: '1500',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Yorick hurls a globule of Black Mist that splashes across an area at the target location, dealing magic damage to enemies hit, down to a minimum threshold against minions, and capped against monsters. Enemy champions and monsters hit are slowed by 30% for 1.5 seconds and marked as Cursed for 4 seconds.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              unit: '%  of target\'s maximum health',
              values: '6 / 6.5 / 7 / 7.5 / 8'
            },
            {
              unit: '% per 100 AP',
              values: '3'
            }
          ]
        },
        {
          attribute: 'Minimum Minion Damage',
          modifiers: [
            {
              values: '70 / 105 / 140 / 175 / 210'
            },
            {
              unit: '% AP',
              values: '100'
            }
          ]
        },
        {
          attribute: 'Capped Monster Damage',
          modifiers: [
            {
              values: '50 / 75 / 100 / 125 / 150'
            },
            {
              unit: '% AP',
              values: '100'
            }
          ]
        }
      ]
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Cursed:</span> The target is revealed and inflicted with armor reduction, and continually raises a Mist Walker from each nearby grave, up to a maximum of 4.</p>\nYorick, Mist Walkers and the The Maiden gain bonus movement speed while facing nearby Cursed enemies. Mist Walkers will leap to nearby Cursed enemy champions and large monsters, attacking them upon arrival.',
      leveling: [
        {
          attribute: 'Armor Reduction',
          modifiers: [
            {
              unit: '% of target\'s armor',
              values: '13 / 16 / 19 / 22 / 25'
            }
          ]
        },
        {
          attribute: 'Bonus Movement Speed',
          modifiers: [
            {
              unit: '%',
              values: '18 / 21 / 24 / 27 / 30'
            }
          ]
        }
      ]
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Yorick/ability-icon/e',
  notes: 'Yorick will snap his facing direction towards the target location at the start of the cast time.\nThe speed boost toward marked targetes does not require  sight of them.\nThe Mist Walkers do not  leap if they are  immobilized or  grounded, or if the marked target is  untargetable.',
  projectile: 'TRUE',
  resource: 'Mana',
  spellEffects: 'spellaoe',
  spellshieldable: 'True',
  targeting: 'Location',
  targetRange: '700'
}
export default ability
