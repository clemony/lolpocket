// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'W',
  name: 'Seastone Trident',
  affects: 'Enemies',
  blurb: 'Passive:  Fizz\'s basic attacks bleed his enemies, continually dealing magic damage.',
  castTime: 'none',
  cooldown: '7 / 6 / 5 / 4 / 3',
  cost: '30 / 40 / 50 / 60 / 70',
  damageType: 'Magic damage',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Fizz\'s basic attacks rend enemies on-hit, dealing magic damage every 0.5 seconds over 3 seconds, refreshing on subsequent hits.</p>',
      leveling: [
        {
          attribute: 'Total Passive Magic Damage',
          modifiers: [
            {
              values: '30 / 45 / 60 / 75 / 90'
            },
            {
              unit: '% AP',
              values: '25'
            }
          ]
        },
        {
          attribute: 'Passive Magic Damage per Tick',
          modifiers: [
            {
              values: '5 / 7.5 / 10 / 12.5 / 15'
            },
            {
              unit: '% AP',
              values: '4.17'
            }
          ]
        }
      ]
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Fizz empowers his next basic attack within 4 seconds to have an uncancellable windup, gain 50 bonus range, and deal bonus magic damage.</p>',
      leveling: [
        {
          attribute: 'Active Magic Damage',
          modifiers: [
            {
              values: '50 / 75 / 100 / 125 / 150'
            },
            {
              unit: '% AP',
              values: '45'
            }
          ]
        }
      ]
    },
    {
      description: 'If Seastone Trident kills its target, the cooldown is reduced to 1 second and Fizz restores mana. Otherwise, if the target is not killed, Fizz\'s basic attacks deal bonus magic damage on-hit for the next 5 seconds.',
      leveling: [
        {
          attribute: 'Mana Restored',
          modifiers: [
            {
              values: '30 / 40 / 50 / 60 / 70'
            }
          ]
        },
        {
          attribute: 'Active On-Hit Magic Damage',
          modifiers: [
            {
              values: '20 / 25 / 30 / 35 / 40'
            },
            {
              unit: '% AP',
              values: '30'
            }
          ]
        }
      ]
    },
    {
      description: 'Seastone Trident\'s active damage can be applied against structures at 50% effectiveness. Active and on-hit damage deal an additional 60 bonus magic damage against monsters.'
    },
    {
      description: 'Seastone Trident resets Fizz\'s basic attack timer.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Fizz/ability-icon/w',
  notes: 'Applies  spell damage on the empowered attack,  persistent damage on the damage over time effect, and  proc damage on the bonus damage on-hit.\nSeastone Trident\'s  interactions with  dodging,  blocking, and  blinding effects.\nThe passive bonus damage gets negated by  dodging or  blocking the attack, or if Fizz is  blinded.\nThe active:\nIf the attacked enemy is  dodging or if Fizz is  blinded, the empowered attack won\'t deal any damage, but the empowered attack won\'t be consumed.\nIf the attacked enemy is  blocking, the empowered attack won\'t deal any damage despite being consumed. But the attack will apply the passive bonus damage of Seastone Trident.\nThe empowered attack will trigger against structures.',
  resource: 'Mana',
  spellEffects: 'special',
  spellshieldable: 'True',
  targeting: 'Auto'
}
export default ability
