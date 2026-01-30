// Updated Patch 16.1 - 01/29/2026 04:27:15 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "Q",
  "name": "Arcanopulse",
  "width": "145",
  "affects": "Self, Enemies",
  "castTime": "none",
  "cooldown": "9 / 8 / 7 / 6 / 5",
  "cost": "80 / 90 / 100 / 110 / 120",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Xerath charges while being slowed by 0% - 40% (based on channel time) for up to 3 seconds to increase Arcanopulse's range over the first 1.5 to 1.75 seconds of the channel.</p>"
    },
    {
      "description": "Arcanopulse can be recast within the duration. If the charge is interrupted or completes without reactivation, Arcanopulse is cancelled and refunds half the mana cost.",
      "leveling": [
        {
          "attribute": "Mana Refunded",
          "modifiers": [
            {
              "values": "40 / 45 / 50 / 55 / 60"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Xerath becomes unable to act for 0.528 seconds and afterwards fires a beam of energy in a line in the target direction that deals magic damage to enemies hit.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "75 / 115 / 155 / 195 / 235"
            },
            {
              "unit": "% AP",
              "values": "90"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Xerath/ability-icon/q",
  "notes": "The onset of Arcanopulse's self- slow and first range increase is at a random interval of 0 to 0.25 seconds. The real time to maximum self-slow and range is thus 1.5 to 1.75 seconds.\nThe rectangle hitbox's minimum range is  0, right through Xerath's center.\nArcanopulse will not fire and deal damage if Xerath dies during the 0.528 seconds recast delay.(bug)\nThe following table refers for interactions while Xerath is  channeling:\n\n\nType\n\nCharge channel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled, but can still use trinkets.\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall\n\n\nInterrupted by\n\n Hexflash (Recasts)\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects\n\nThe following table refers for interactions while Xerath is locked out during the 0.528 seconds recast delay:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
  "projectile": "FALSE",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Auto / Direction"
}
  export default ability
