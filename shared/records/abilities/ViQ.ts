// Updated Patch 15.23.1 - 11/30/2025 12:24:09 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Vault Breaker",
  "affects": "Enemies, Self",
  "castTime": "none",
  "collisionRadius": "55",
  "cooldown": "12 / 10.5 / 9 / 7.5 / 6",
  "cost": "50 / 60 / 70 / 80 / 90",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Vi charges while being slowed by 15% for up to 4 seconds to increase Vault Breaker's range, speed, and damage over the first 1.25 seconds of the channel.</p>"
    },
    {
      "description": "Vault Breaker can be recast within the duration. If the charge completes without reactivation, Vault Breaker is cancelled, 50% of the mana cost is refunded, and it is placed on full cooldown. If the charge is interrupted, 50% of the mana cost is refunded and it is placed on a 3-second cooldown."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Vi dashes in the target direction to deal physical damage to enemies within her path, increased by 0% - 150% (based on channel time), and pull all non-champions hit towards her.</p>",
      "leveling": [
        {
          "attribute": "Minimum Physical Damage",
          "modifiers": [
            {
              "values": "40 / 60 / 80 / 100 / 120"
            },
            {
              "unit": "% bonus AD",
              "values": "60"
            }
          ]
        },
        {
          "attribute": "Maximum Physical Damage",
          "modifiers": [
            {
              "values": "100 / 150 / 200 / 250 / 300"
            },
            {
              "unit": "% bonus AD",
              "values": "150"
            }
          ]
        }
      ]
    },
    {
      "description": "She stops upon hitting an enemy champion, knocking them back over 0.75 seconds."
    },
    {
      "description": "Relentless Force and Cease and Desist can be cast during the dash."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Vi/ability-icon/q",
  "notes": "Vault Breaker's dash range extends up to 50 units when going through a wall.\nTargets will be hit as soon as they come into contact with Vi.\nThe knockback direction will be toward Vi's facing direction regardless of where she hit the target.\nCasting  Flash during the dash will cause enemies at the destination to be hit by Vault Breaker.\nAs  Flash updates Vi's facing direction, affected champions will be knocked back in the direction the summoner spell was cast in.\nVi may cast spells that change her facing direction during the dash, including certain item actives and her own  Cease and Desist, to knock champions she collides with in a different direction.(note)\nItems that also initiate their own  dash immediately without delay can only redirect targets struck at Vault Breaker's maximum range. These items include:\n Hextech Rocketbelt\nStuck targets (including those that block Vault Breaker with a  spell shield) are briefly immune to being affected again by Vault Breaker from this player, for about 1.25 seconds.\nThe following table refers for interactions while Vi is  channeling:\n\n\nType\n\nCharge channel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled, but can still use trinkets.\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall\n\n\nInterrupted by\n\n Hexflash (Recasts)\n\n\nInterrupted by\n\nDeath Grounding effects Immobilizing effects Cast-inhibiting effects",
  "resource": "Mana",
  "speed": "1450 : 1540 (based on channel time)",
  "spellEffects": "aoe",
  "spellshieldable": "true",
  "targeting": "Auto / Direction",
  "targetRange": "250 : 725 (based on channel time)"
}
export default ability
