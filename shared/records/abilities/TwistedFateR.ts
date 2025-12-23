// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "R",
  "name": "Destiny",
  "affects": "Enemies, Allies, Self",
  "castTime": "none",
  "cooldown": "170 / 140 / 110",
  "cost": "100",
  "effectRadius": "Global",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Twisted Fate marks all targetable enemy champions, revealing them for a duration. Destiny can be recast after 0.5 seconds within the duration.</p>",
      "leveling": [
        {
          "attribute": "Effect Duration",
          "modifiers": [
            {
              "unit": " seconds",
              "values": "6 / 8 / 10"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast - Gate:</span> Twisted Fate channels for 1.5 seconds before blinking to the target location, destroying all projectiles targeting him in the process.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/TwistedFate/ability-icon/r",
  "notes": "Both casts count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nTwisted Fate cannot recast Destiny while  grounded or  rooted.\nThe  nearsight from  Paranoia will overpower the  reveal from Destiny regardless of which one was cast first (enemy champions can still be revealed by Destiny after Paranoia ends if durations permit).\nUsing the recast will inform allies with a ping.\nBoth allies and enemies can see an indicator at the targeted location of where Twisted Fate will appear.\nThe following table refers for interactions while Twisted Fate is  channeling:\nItem actives with cast times as well as  Titanic Hydra are disabled during the channel.\nTrying to cast a disabled item active will buffer it to cast at the completion of the channel.\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Pick a Card is usable.  Wild Cards is disabled.\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nAll the other item-actives are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Zhonya's Hourglass\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll summoner spells are disabled\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath Grounding effects Immobilizing effects Cast-inhibiting effects",
  "resource": "Mana",
  "spellshieldable": "True",
  "targeting": "Auto / Location",
  "targetRange": "5500"
}
export default ability
