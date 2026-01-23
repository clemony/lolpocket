// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  key: 'R',
  name: 'Grim Deliverance',
  affects: 'Self, Enemies',
  blurb: 'Passive:  Zaahen gains  armor penetration.',
  castTime: '0.5',
  cooldown: '110 / 95 / 80',
  cost: '100',
  damageType: 'Physical damage',
  effectRadius: '550',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Zaahen gains armor penetration.</p>',
      leveling: [
        {
          attribute: 'Armor Penetration',
          modifiers: [
            {
              unit: '%',
              values: '10 / 20 / 30'
            }
          ]
        }
      ]
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Zaahen launches into the air to the target location. He then slams his glaive down after a 0.6-second delay, unleashing a shockwave that deals physical damage to nearby enemies and heals himself for each champion hit.</p>',
      leveling: [
        {
          attribute: 'Physical Damage',
          modifiers: [
            {
              values: '250 / 400 / 550'
            },
            {
              unit: '% bonus AD',
              values: '200'
            }
          ]
        },
        {
          attribute: 'Healing per Champion hit',
          modifiers: [
            {
              values: '82.5 / 132 / 181.5'
            },
            {
              unit: '% bonus AD',
              values: '66'
            }
          ]
        }
      ]
    },
    {
      description: 'Zaahen is unable to act and gains crowd control immunity and 50% damage reduction from the start of the cast time. He retains these effects until 0.9 seconds after the dash.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Zaahen/ability-icon/r',
  notes: 'The healing per champion is equal to 33% of the damage numbers, not the damage dealt.(note)\n Spell shield will block the damage but not the heal.(bug)\nThe damage is dealt before the lockout ends.(note)\nIf Zaahen  blinks or is  knock down while ascending into the air, or if the nexus explodes during this time, Grim Deliverance\'s effects are canceled; he will not slam the ground and will not update his animations correctly, additionally, he will be able to move during the lockout.(bug)\nThis also happens if the nexus explodes\nIf Zaahen moves during the 0.6-second delay, he will slam down at his new location despite the indicator not moving.(bug)\nThe following table refers for interactions while Zaahen is in cast time and during the lockout:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection',
  resource: 'Mana',
  speed: '2800',
  spellEffects: 'spellaoe',
  spellshieldable: 'special',
  targeting: 'Location',
  targetRange: '10 / 600'
}
export default ability
