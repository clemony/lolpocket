// Updated Patch 15.24.1 - 12/26/2025 07:04:11 PM CST

const ability: Ability = {
  key: 'E',
  name: 'Aegis Assault',
  affects: 'Enemies',
  angle: '60°',
  castTime: 'None / 0.25',
  cooldown: '22 / 21 / 20 / 19 / 18',
  cost: '80',
  damageType: 'Physical damage',
  effectRadius: '525',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Pantheon braces his shield in the target direction and channels for 1.5 seconds, during which he becomes invulnerable to non- turret damage dealt by enemies from the target direction. He also continually performs strikes in a cone in front of him, dealing 8.3% AD physical damage every 0.125 seconds to enemies hit, reduced by 50% against minions and up to 100% AD total physical damage.</p>'
    },
    {
      description: 'Aegis Assault can be recast after 0.3 seconds, and does so automatically after the duration. Aegis Assault\'s channel cannot be interrupted by crowd control.'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Pantheon slams with his shield in a cone in front of him, dealing physical damage to enemies hit.</p>',
      leveling: [
        {
          attribute: 'Physical Damage',
          modifiers: [
            {
              values: '55 / 105 / 155 / 205 / 255'
            },
            {
              unit: '% bonus AD',
              values: '150'
            }
          ]
        }
      ]
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Mortal Will:</span> After recasting, Pantheon gains 5 - 30 (based on level) (+ 2.5% bonus health) bonus armor and bonus magic resistance for 4 seconds as well as 60% bonus movement speed for 1.5 seconds.</p>'
    },
    {
      description: 'Pantheon can move during the cast time of Aegis Assault\'s recast.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Pantheon/ability-icon/e',
  notes: 'The initial cast count as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nDetonating the ability manually is not.\nPantheon retains his  invulnerability during the recast\'s cast time.\nThis ability will cast from wherever the caster is at the start of the cast time.\nPantheon will slam from wherever he was at the start of the recast\'s\' cast time.\n Spell shield will only block the slam\'s damage.\nThe following table refers for interactions while Pantheon is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\nAll the other item-actives are usable\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash  Teleport\n\n\nDisabled\n\n Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath',
  projectile: 'FALSE',
  resource: 'Mana',
  spellEffects: 'aoe',
  spellshieldable: 'special',
  targeting: 'Direction'
}
export default ability
