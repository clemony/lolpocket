// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'E',
  name: 'Chilling Scream',
  width: '380',
  affects: 'Enemies, Self',
  castTime: 'None / 0.15',
  cooldown: '16',
  cost: '0',
  damageType: 'Magic damage',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Briar prepares to unleash a scream in the target direction, charging for up to 1 second, during which she increases Chilling Scream\'s damage and range, and gains 35% damage reduction and heals herself every 0.25 seconds.</p>',
      leveling: [
        {
          attribute: 'Heal Per Tick',
          modifiers: [
            {
              unit: '% maximum health',
              values: '2.5 / 2.88 / 3.25 / 3.63 / 4'
            }
          ]
        },
        {
          attribute: 'Maximum Heal',
          modifiers: [
            {
              unit: '% maximum health',
              values: '10 / 11.5 / 13 / 14.5 / 16'
            }
          ]
        }
      ]
    },
    {
      description: 'Chilling Scream can be recast within the duration, and does so automatically afterwards. Chilling Scream\'s charge cannot be interrupted by crowd control.'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Briar unleashes the scream in the direction she targeted at the time of cast, dealing magic damage to enemies hit and slowing them by 80% for 0.5 seconds.</p>',
      leveling: [
        {
          attribute: 'Maximum Magic Damage',
          modifiers: [
            {
              values: '80 / 115 / 150 / 185 / 220'
            },
            {
              unit: '% bonus AD',
              values: '100'
            },
            {
              unit: '% AP',
              values: '100'
            }
          ]
        },
        {
          attribute: 'Minimum Magic Damage',
          modifiers: [
            {
              values: '2 / 2.88 / 3.75 / 4.63 / 5.5'
            },
            {
              unit: '% bonus AD',
              values: '2.5'
            },
            {
              unit: '% AP',
              values: '2.5'
            }
          ]
        }
      ]
    },
    {
      description: 'If Chilling Scream was charged for its full duration, enemies hit are also knocked back 575 units. If they collide with terrain, they will rebound to take bonus magic damage and become knocked up for 0.5 seconds and stunned for 1.5 seconds.',
      leveling: [
        {
          attribute: 'Bonus Magic Damage',
          modifiers: [
            {
              values: '140 / 215 / 290 / 365 / 440'
            },
            {
              unit: '% bonus AD',
              values: '240'
            },
            {
              unit: '% AP',
              values: '240'
            }
          ]
        },
        {
          attribute: 'Total Magic Damage',
          modifiers: [
            {
              values: '220 / 330 / 440 / 550 / 660'
            },
            {
              unit: '% bonus AD',
              values: '340'
            },
            {
              unit: '% AP',
              values: '340'
            }
          ]
        }
      ]
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Briar/ability-icon/e',
  notes: 'Chilling Scream increases its damage by its minimum every 0.025 seconds over the duration.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe following table refers for interactions while Briar is  channeling:\n\n\nType\n\nCharge channel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled, but can still use trinkets\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall\n\n\nInterrupted by\n\n Hexflash (Recasts)\n\n\nInterrupted by\n\nDeath',
  projectile: 'TRUE',
  resource: 'Current health',
  speed: '1900 / 1800',
  spellEffects: 'spellaoe',
  spellshieldable: 'true',
  targeting: 'Direction / Auto'
}
export default ability
