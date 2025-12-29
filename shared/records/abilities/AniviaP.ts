// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Rebirth",
  "affects": "Self",
  "blurb": "Innate: Periodically, upon  dying,  Anivia will instead revert into an egg. If the egg can survive for a few seconds, she is gloriously  reborn.",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Periodically, upon taking fatal damage, Anivia enters resurrection for 6 seconds and restores all of her health.</p>"
    },
    {
      "description": "While under resurrection, Anivia is unable to act and gains -40 - 20 (based on level) bonus armor and bonus magic resistance."
    },
    {
      "description": "If Anivia remains alive by the end of the duration, she is revived with her current health."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Anivia/ability-icon/p",
  "notes": "Triggering Rebirth will break  tethers on Anivia.\n Chronoshift and  Guardian Angel will take priority over Rebirth.\nIf Rebirth triggers while Anivia is channeling  Teleport, her channel won't be interrupted.\nAll other  channels will be interrupted upon triggering Rebirth.\nThe following refers for interactions while Anivia is resurrecting:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll summoner spells are disabled\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
  "targeting": "Passive"
}
export default ability
