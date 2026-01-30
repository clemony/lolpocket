// Updated Patch 16.1 - 01/29/2026 04:27:01 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "Q",
  "name": "Powerball",
  "affects": "Enemies",
  "castTime": "none",
  "collisionRadius": "75",
  "cooldown": "12 / 10.5 / 9 / 7.5 / 6",
  "cost": "60",
  "damageType": "Magic damage",
  "effectRadius": "250",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Rammus channels for up to 6 seconds to roll into a ball, gaining 25% - 39.17% (based on level) bonus total movement speed per second over the duration, up to a maximum of 150% - 235% (based on level). Powerball can be recast after 1 second within the duration, and does so automatically afterwards or upon casting Defensive Ball Curl.</p>"
    },
    {
      "description": "Rammus stops rolling upon colliding with an enemy, dealing magic damage to all nearby enemies and knocking them back 125 units, though not through terrain. Enemies hit are then stunned and revealed for 0.4 seconds, as well as slowed for 1 second.",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "80 / 120 / 160 / 200 / 240"
            },
            {
              "unit": "% AP",
              "values": "100"
            }
          ]
        },
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "40 / 50 / 60 / 70 / 80"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Rammus ends Powerball.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Rammus/ability-icon/q",
  "notes": "The initial cast and the manual recast count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nIf the ability is not manually recasted, the secondary effect will trigger without being considered as an ability activation.\nThe bonus movement speed  stacks multiplicatively with other sources of movement speed boosts.\nPowerball will still collide with enemies if Rammus is  ghosted.\nFor the purpose of moving closer to an enemy when right clicking them, Powerball also reduces Rammus'  attack range[ to 0 ][ by 125 ]for the duration.\nRegardless of this, during Powerball Rammus will also always attempt to path towards his target's center instead.\nRammus will ignore unit collision for the purpose of pathfinding during Powerball.\nRammus acts as if he were  ghosted for the duration of Powerball.\nPowerball is not a movement channel, and so will not be  interrupted by  root and  ground.\n Displacement immunity will also resist the application of the  stun.\nThe following table refers for interactions while Rammus is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Defensive Ball Curl interrupts.  Frenzying Taunt is disabled.  Soaring Slam modifies this ability. This ability recasts to end channel.\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
  "resource": "Mana",
  "spellEffects": "Area of effect",
  "spellshieldable": "True",
  "targeting": "Auto"
}
  export default ability
