// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  key: 'R',
  name: 'Life Form Disintegration Ray',
  width: '175',
  affects: 'Enemies',
  castTime: 'none',
  cooldown: '100 / 90 / 80',
  cost: '100',
  damageType: 'Other damage',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Passive - Researched:</span> Applying 3 Deconstruction stacks to an enemy champion marks them as Researched for 7 seconds, refreshing on basic attacks and ability hits against them.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> After a 0.2-second delay, Vel\'Koz channels for up to 2.6 seconds to project an energy beam, during which he can steer the beam in the target direction. Life Form Disintegration Ray can be recast after 1 second during the channel, and does so automatically after the duration.</p>'
    },
    {
      description: 'The beam deals magic damage to enemies hit every 0.2 seconds, and slows them by 20%, lingering for 1 second. Deconstruction is applied every 0.7 seconds to enemies hit. Researched enemies take true damage instead.',
      leveling: [
        {
          attribute: 'Damage Per Tick',
          modifiers: [
            {
              values: '34.62 / 53.85 / 71.15'
            },
            {
              unit: '% AP',
              values: '9.62'
            }
          ]
        },
        {
          attribute: 'Maximum Damage',
          modifiers: [
            {
              values: '450 / 700 / 925'
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
      description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Vel\'Koz ends Life Form Disintegration Ray.</p>'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Velkoz/ability-icon/r',
  notes: 'Life Form Disintegration Ray\'s direction updates gradually (moving the cursor from one side of Vel\'Koz to the other will not make him rotate instantly).\nVel\'Koz will  reveal himself if the ray is near an enemy champion.\nThe beam hits in a rectangular shape, intersecting with the edge of an enemy  gameplay radius.\nBecause of this, the effect will hit enemies whose center location is to the sides and/or slightly behind Vel\'Koz, as long as their radius intersects with the area.\nThe following table refers for interactions while Vel\'Koz is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Hexflash\n\n\nInterrupted by\n\n Teleport  Recall\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects',
  projectile: 'FALSE',
  resource: 'Mana',
  spellEffects: 'aoedot',
  targeting: 'Direction / Auto'
}
export default ability
