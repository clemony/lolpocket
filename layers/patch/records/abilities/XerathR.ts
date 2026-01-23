// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  key: 'R',
  name: 'Rite of the Arcane',
  affects: 'Self, Enemies',
  castTime: 'none',
  cooldown: '130 / 115 / 100',
  cost: '100',
  damageType: 'Magic damage',
  effectRadius: '200',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Xerath channels for up to 10 seconds, gaining the ability to recast Rite of the Arcane multiple times after 0.5 seconds within the duration. If Rite of the Arcane ends without any of the recasts being used, half of its cooldown is refunded.</p>',
      leveling: [
        {
          attribute: 'Number of Recasts',
          modifiers: [
            {
              values: '4 / 5 / 6'
            }
          ]
        }
      ]
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Recast - Arcane Barrage:</span> Xerath catapults an arcane missile that strikes the target location after a 0.627 seconds delay, briefly granting sight of the area and dealing magic damage to enemies hit. Each cast has a static cooldown of 0.5 seconds.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '170 / 220 / 270'
            },
            {
              unit: '% AP',
              values: '45'
            }
          ]
        },
        {
          attribute: 'Total Magic Damage',
          modifiers: [
            {
              values: '680 / 1100 / 1620'
            },
            {
              tooltip: 'Scaling per rank:\n180 / 225 / 270% AP',
              unit: '% AP',
              values: '180 - 270'
            }
          ]
        }
      ]
    },
    {
      description: 'Hitting at least one enemy champion grants a stack of Arcane Perfection during the channel, stacking up to a maximum amount. Each stack increases Arcane Barrage\'s damage.',
      leveling: [
        {
          attribute: 'Maximum Stacks',
          modifiers: [
            {
              values: '3 / 4 / 5'
            }
          ]
        },
        {
          attribute: 'Increased Damage per Stack',
          modifiers: [
            {
              values: '20 / 25 / 30'
            },
            {
              unit: '% AP',
              values: '5'
            }
          ]
        }
      ]
    },
    {
      description: 'Xerath will reveal himself if a missile strikes near an enemy.',
      leveling: [
        {
          attribute: 'Impact Distance to Reveal',
          modifiers: [
            {
              values: '175 / 200 / 225'
            }
          ]
        }
      ]
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Xerath/ability-icon/r',
  notes: 'Rite of the Arcane cannot be canceled via movement commands during the first second of its channel.\nEach cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nArcane Barrage will not apply its increased damage per stack to the cast that granted the stack.\nOnly successive casts of the ability will benefit from the damage increase.\nA circular indicator will be displayed at the target location to signify that the area will be blasted.\nThe circle indicating the ability\'s range expands rapidly from near Xerath up to the maximum range over 1 second during the channel.\nThe maximum-range indicator is visible to both allies and enemies and is color coded for friendly (blue) or hostile (red).\nRite of the Arcane uses a barrage system so that it can be recast multiple times within a given period at no additional cost.\nXerath will turn to face toward the direction of the target location after using a recast.\nXerath gains a wider field of view during Rite of the Arcane.\nXerath can use  Dark Passage while channeling.\nThe following table refers for interactions while Xerath is  channeling:\n Teleport and  Recall are disabled for the first 1.25 seconds and otherwise interrupt the channel if they are used.\n\n\nType\n\nChannel\n\n\nAttacking\n\nInterrupts\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled for the first 1.25 seconds, otherwise, interrupts.\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Hexflash\n\n\nInterrupted by\n\n Teleport  Recall\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects',
  projectile: 'FALSE',
  resource: 'Mana',
  spellEffects: 'spellaoe',
  spellshieldable: 'True',
  targeting: 'Auto / Location',
  targetRange: '5000'
}
export default ability
