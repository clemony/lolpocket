// Updated Patch 15.24.1 - 12/26/2025 07:03:51 PM CST

const ability: Ability = {
  key: 'Q',
  name: 'Reaping Slash',
  affects: 'Enemies',
  blurb: 'Active:  Kayn  dashes in the target direction, dealing physical damage to enemies he passes through. He then swings his scythe, dealing the same damage to surrounding enemies.',
  castTime: 'none',
  cooldown: '7 / 6.5 / 6 / 5.5 / 5',
  cost: '40',
  damageType: 'Physical damage',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Kayn dashes in the target direction, dealing physical damage to enemies he passes through. He then swings his scythe, dealing the same damage to nearby enemies.</p>',
      leveling: [
        {
          attribute: 'Physical Damage',
          modifiers: [
            {
              values: '75 / 100 / 125 / 150 / 175'
            },
            {
              unit: '% bonus AD',
              values: '85'
            }
          ]
        },
        {
          attribute: 'Total Physical Damage',
          modifiers: [
            {
              values: '150 / 200 / 250 / 300 / 350'
            },
            {
              unit: '% bonus AD',
              values: '170'
            }
          ]
        }
      ]
    },
    {
      description: 'Both instances of Reaping Slash deal 40 bonus physical damage against minions and monsters.',
      leveling: [
        {
          attribute: 'Non-Champion Damage',
          modifiers: [
            {
              values: '115 / 140 / 165 / 190 / 215'
            },
            {
              unit: '% bonus AD',
              values: '85'
            }
          ]
        },
        {
          attribute: 'Total Non-Champion Damage',
          modifiers: [
            {
              values: '230 / 280 / 330 / 380 / 430'
            },
            {
              unit: '% bonus AD',
              values: '170'
            }
          ]
        }
      ]
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Darkin Bonus:</span> Reaping Slash\'s damage is modified to deal 65% AD (+ 6% (+ 3.5% per 100 bonus AD) of the target\'s maximum health) physical damage with each hit, for a total of 130% AD (+ 12% (+ 7% per 100 bonus AD) of the target\'s maximum health). This damage has a cap against monsters that does not include the bonus damage.</p>',
      leveling: [
        {
          attribute: 'Capped Monster Damage per Hit',
          modifiers: [
            {
              values: '200 / 250 / 300 / 350 / 400'
            }
          ]
        },
        {
          attribute: 'Total Capped Monster Damage',
          modifiers: [
            {
              values: '400 / 500 / 600 / 700 / 800'
            }
          ]
        }
      ]
    },
    {
      description: 'Reaping Slash\'s dash speed scales with Kayn\'s total movement speed.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Kayn/ability-icon/q',
  notes: 'Spell shields will block only a single instance of damage - either the dash or the slash.\nIf the  dash is  interrupted, Kayn will not swing his scythe.\nReaping Slash\'s swing can be performed quicker if the dash stops prematurely upon colliding with terrain.\nAs the  Shadow Assassin, an  alternate icon for Reaping Slash is used but has no modified effect.\nOther abilities can be queued while casting Reaping Slash.\nItem actives are locked out while casting.\nThe swing\'s animation has a 0.25-second  lockout time.\nKayn will only be able to move after 0.416 seconds.',
  resource: 'Mana',
  spellEffects: 'Area of effect',
  spellshieldable: 'Special',
  targeting: 'Direction',
  targetRange: '350'
}
export default ability
