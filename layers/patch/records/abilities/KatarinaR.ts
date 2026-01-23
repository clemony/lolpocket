// Updated Patch 15.24.1 - 12/26/2025 07:03:51 PM CST

const ability: Ability = {
  key: 'R',
  name: 'Death Lotus',
  affects: 'Enemies',
  castTime: 'none',
  cooldown: '75 / 60 / 45',
  cost: '0',
  damageType: 'Magic damage',
  effectRadius: '550',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Katarina channels for up to 2.5 seconds, rapidly throwing a dagger every 0.166 seconds to up to 3 of the closest nearby enemy champions, revealing herself in the process.Each dagger deals physical damage and magic damage, applies on-hit effects, with on-hit damage reduced in effectiveness, triggers on-attack effects, and inflicts Grievous Wounds on the target for 3 seconds.</p>',
      leveling: [
        {
          attribute: 'Physical Damage Per Dagger',
          modifiers: [
            {
              unit: '%  bonus AD',
              values: '16'
            },
            {
              unit: '% per 100% bonus attack speed',
              values: '50'
            }
          ]
        },
        {
          attribute: 'Maximum Physical Damage',
          modifiers: [
            {
              unit: '%  bonus AD',
              values: '240'
            },
            {
              unit: '% per 100% bonus attack speed',
              values: '750'
            }
          ]
        },
        {
          attribute: 'Magic Damage Per Dagger',
          modifiers: [
            {
              values: '25 / 37.5 / 50'
            },
            {
              unit: '% AP',
              values: '19'
            }
          ]
        },
        {
          attribute: 'Maximum Magic Damage',
          modifiers: [
            {
              values: '375 / 562.5 / 750'
            },
            {
              unit: '% AP',
              values: '285'
            }
          ]
        },
        {
          attribute: 'On-Hit Damage Effectiveness',
          modifiers: [
            {
              unit: '%',
              values: '25 / 30 / 35'
            }
          ]
        }
      ]
    },
    {
      description: 'An enemy champion within 500 units is required to cast this ability. The target does not have to be visible to be hit by this ability.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Katarina/ability-icon/r',
  notes: 'An alternate form of writing the formula for the bonus AD ratio (and which the game data is using internally) is (16% × (1 + 312.5% per 100% bonus attack speed) bonus AD).\nAt level 6, Katarina has a minimum of 10.82% bonus attack speed.\nThe minimum physical damage per dagger is 21.41% bonus AD.\nIn addition to already revealing herself, Katarina will  reveal her location (400 radius) for 4.5 seconds every time she throws a dagger at an enemy while the enemy team does not otherwise have vision of her.(bug)\nBecause of this, the vision on Katarina\'s location will persist for up-to 4.5 seconds after the channel ends.\nDeath Lotus will not end if no enemies remain in range.\n Spell shield will block and be consumed by only one dagger.\nEach dagger counts as a separate hit for effects such as  Conqueror,  Electrocute, and  Eclipse\'s Ever Rising Moon.\nThe following table refers for interactions while Katarina is  channeling:\nTrying to cast a disabled active (excluding  Hextech Rocketbelt) will buffer it to cast at the completion of the channel.\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled in the first and last 0.25 seconds of channel, otherwise, interrupts.\n\n\nAbilities\n\nInterrupts\n\n\nMovement\n\nDisabled in the first and last 0.25 seconds of channel, otherwise, interrupts.\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Recall  Hexflash\n\n\nInterrupted by\n\n Flash  Teleport\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects',
  projectile: 'TRUE',
  speed: '2400',
  spellEffects: 'aoe',
  spellshieldable: 'Special',
  targeting: 'Proximity'
}
export default ability
