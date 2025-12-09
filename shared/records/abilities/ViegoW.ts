// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Spectral Maw",
  "width": "120",
  "affects": "Self, Enemies",
  "castTime": "none",
  "cooldown": "8",
  "cost": "0",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Viego charges while being slowed by 10% for up to 3 seconds to increase Spectral Maw's missile range and stun duration over the first second of the channel.</p>"
    },
    {
      "description": "Spectral Maw can be recast within the duration. If the charge completes without reactivation, Spectral Maw is cancelled and placed on full cooldown. If the charge is interrupted, it will be placed on a 3-second cooldown."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Viego hurls a blast of mist in the target direction and dashes a fixed distance in the same direction, though not through terrain. The mist deals magic damage to the first enemy hit and stuns them for 0.25 - 1.25 (based on channel time) seconds.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "80 / 135 / 190 / 245 / 300"
            },
            {
              "unit": "% AP",
              "values": "100"
            }
          ]
        }
      ]
    },
    {
      "description": "Spectral Maw resets Viego's basic attack timer. Viego can cast any of his abilities during the dash."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Viego/ability-icon/w",
  "notes": "The reduced cooldown from the charge will not occur if Spectral Maw's cooldown is already below 3 seconds.\nThe following table refers for interactions while Viego is  channeling:\n\n\nType\n\nCharge channel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Harrowed Path is usable.  Blade of the Ruined King and  Heartbreaker are disabled.\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled, but can still use trinkets.\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall\n\n\nInterrupted by\n\n Hexflash (Recasts)\n\n\nInterrupted by\n\nDeath Grounding effects Immobilizing effects Cast-inhibiting effects",
  "projectile": "TRUE",
  "speed": "1000 / 1300",
  "spellEffects": "spell",
  "spellshieldable": "true",
  "targeting": "Auto / Direction",
  "targetRange": "300 /  500 : 900 (based on channel time)"
}
export default ability
