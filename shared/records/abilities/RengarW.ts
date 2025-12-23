// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "W",
  "name": "Battle Roar",
  "affects": "Self / Enemies",
  "blurb": "Passive:  Rengar stores grey health equal to a portion of damage taken within a brief moment.",
  "castTime": "none",
  "cooldown": "0.25",
  "cost": "0",
  "damageType": "Magic damage",
  "effectRadius": "450",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Rengar stores 50% of the post-mitigation damage he has taken in the last 1.5 seconds as grey health on his health bar, increased to 100% of damage taken from monsters.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Rengar roars, dealing magic damage to nearby enemies and 65 - 130 (based on level) bonus magic damage to monsters, and consuming his grey health to heal for the same amount.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "50 / 80 / 110 / 140 / 170"
            },
            {
              "unit": "% AP",
              "values": "80"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Ferocity Bonus:</span> Battle Roar's damage is modified to deal 50 - 220 (based on level) (+ 80% AP) magic damage. Rengar cleanses himself from all crowd control.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Rengar/ability-icon/w",
  "notes": "Grey health will not be consumed upon casting Battle Roar despite visually appearing so. It will only ever expire after its duration ends.",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Auto"
}
export default ability
