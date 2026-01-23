// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  key: 'Q',
  name: 'Piercing Arrow',
  width: '140',
  affects: 'Self, Enemies',
  castTime: 'none',
  cooldown: '16 / 15 / 14 / 13 / 12',
  cost: '50 / 55 / 60 / 65 / 70',
  damageType: 'Physical damage',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Varus charges while being slowed by 20% for up to 4 seconds to increase Piercing Arrow\'s range over the first 1.5 seconds and its effects over the first 1.25 seconds of the channel.</p>'
    },
    {
      description: 'Piercing Arrow can be recast within the duration. If the charge completes without reactivation, Piercing Arrow is cancelled and refunds 50% of the mana cost.'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Varus fires a piercing arrow in the target direction that deals physical damage to enemies hit. The damage of the arrow as well as any detonated Blight stacks are both increased by 0% - 50% (based on channel time), and the arrow\'s damage is reduced by 0% - 67% (based on number of enemies hit).</p>',
      leveling: [
        {
          attribute: 'Minimum Physical Damage',
          modifiers: [
            {
              values: '53.33 / 100 / 146.67 / 193.33 / 240'
            },
            {
              tooltip: 'Scaling per rank:\n86.67 / 93.33 / 100 / 106.67 / 113.33% bonus AD',
              unit: '% bonus AD',
              values: '86.67 - 113.33'
            }
          ]
        },
        {
          attribute: 'Maximum Physical Damage',
          modifiers: [
            {
              values: '80 / 150 / 220 / 290 / 360'
            },
            {
              tooltip: 'Scaling per rank:\n130 / 140 / 150 / 160 / 170% bonus AD',
              unit: '% bonus AD',
              values: '130 - 170'
            }
          ]
        },
        {
          attribute: 'Minimum Reduced Damage',
          modifiers: [
            {
              values: '17.6 / 33 / 48.4 / 63.8 / 79.2'
            },
            {
              tooltip: 'Scaling per rank:\n28.6 / 30.8 / 33 / 35.2 / 37.4% bonus AD',
              unit: '% bonus AD',
              values: '28.6 - 37.4'
            }
          ]
        },
        {
          attribute: 'Maximum Reduced Damage',
          modifiers: [
            {
              values: '26.4 / 49.5 / 72.6 / 95.7 / 118.8'
            },
            {
              tooltip: 'Scaling per rank:\n42.9 / 46.2 / 49.5 / 52.8 / 56.1% bonus AD',
              unit: '% bonus AD',
              values: '42.9 - 56.1'
            }
          ]
        }
      ]
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Varus/ability-icon/q',
  notes: 'The arrow missile range is 825 to 1525; The range increases by 140 per 0.25 seconds for the first 1.25 seconds. Upon reaching its maximum range, it also strikes additional targets in a  70 radius, rounding off the struck area.\nThe indicator for the range of the spell will be displayed for the entire channel.\nPiercing Arrow will cast from wherever Varus is at the end of the channel.\nAt maximum damage charge, all damage caused by Piercing Arrow will trigger   cosmetic critical strike text.\nThe following table refers for interactions while Varus is  channeling:\n\n\nType\n\nCharge channel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Blighted Quiver is usable during the first 0.85 seconds, otherwise, it\'s disabled.  Hail of Arrows and  Chain of Corruption are disabled. This ability recasts to end channel.\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled, but can still use trinkets.\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall\n\n\nInterrupted by\n\n Hexflash (Recasts)\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects',
  projectile: 'TRUE',
  resource: 'Mana',
  speed: '1900',
  spellEffects: 'Area of effect',
  spellshieldable: 'True',
  targeting: 'Auto / Direction'
}
export default ability
