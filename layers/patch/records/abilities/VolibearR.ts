// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  key: 'R',
  name: 'Stormbringer',
  affects: 'Enemies, Self',
  blurb: 'Active:  Volibear gains Stormbringer and  leaps with  Cc-immunity to the target location. The impact deals physical damage to enemies hit in the epicenter, and briefly  slows nearby enemies.',
  castTime: 'none',
  cooldown: '160 / 135 / 110',
  cost: '100',
  damageType: 'Physical damage',
  effectRadius: '300 / 500 / 700',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Volibear gains Stormbringer for 12 seconds and leaps to the target location with displacement immunity over 1 second, granting sight of the area in a 500 radius during the travel.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Stormbringer:</span> Volibear gains ghosting, bonus health, 50 bonus attack range, 25 increased range on Frenzied Maul, and 35% increased size.</p>',
      leveling: [
        {
          attribute: 'Bonus Health',
          modifiers: [
            {
              values: '175 / 350 / 525'
            }
          ]
        }
      ]
    },
    {
      description: 'Volibear impacts after 1 second, slowing nearby enemies by 50% decaying over 1 second. Enemies within the epicenter are also dealt physical damage.',
      leveling: [
        {
          attribute: 'Physical Damage',
          modifiers: [
            {
              values: '300 / 500 / 700'
            },
            {
              unit: '% bonus AD',
              values: '250'
            },
            {
              unit: '% AP',
              values: '125'
            }
          ]
        }
      ]
    },
    {
      description: 'Volibear also disables enemy turrets in an area for a duration, rendering them unable to attack, as well as dealing them the same damage.',
      leveling: [
        {
          attribute: 'Turret Disable Duration',
          modifiers: [
            {
              unit: ' seconds',
              values: '2 / 3 / 4'
            }
          ]
        }
      ]
    },
    {
      description: 'Thundering Smash\'s duration will be paused for the leap.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Volibear/ability-icon/r',
  notes: 'Stormbringer will disable any turret that is not the  Nexus Obelisk, even if it is  untargetable.\nStormbringer will not deal damage to untargetable turrets.\nVolibear grows to his new size over 1.25 seconds, starting 0.25 seconds after landing, and shrinks back to his normal size over 0.5 seconds after Stormbinger\'s status ends, respectively.\nVolibear  leaps over 1 second regardless of distance or  movement speed.\nVolibear impacts immediately at his current location if Stormbringer is cast over terrain he cannot pass through (due to not being able to cover the distance required).(bug)\nThe additional bonuses are granted on-cast.\nThe turret disable debuff is named Ohmwrecker.\nDisabling a  turret does not prevent aggro of the current target it is locked onto. The increased turret shot damage from  Ohmwrecker is also reset.\nTurrets maintain the same targeting behavior even when disabled; damaging an enemy champion will still draw turret aggro. However, if the turret\'s desired target leaves range or has become an invalid target, it will lock onto the most previous target it was going to attack prior to becoming disabled, or instead, find a new one if that condition is not applicable.\nThe following table refers for interactions while Volibear is dashing:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath',
  resource: 'Mana',
  speed: '750',
  spellEffects: 'spellaoe',
  spellshieldable: 'True',
  targeting: 'Location',
  targetRange: '700'
}
export default ability
