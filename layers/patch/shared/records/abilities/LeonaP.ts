// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "P",
  "name": "Sunlight",
  "affects": "Enemies",
  "blurb": "Innate:  Leona's abilities briefly mark enemies hit.",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Leona's abilities mark enemies hit for 2.5 seconds, refreshing on subsequent hits. Allied champions' damaging attacks and abilities against a marked target will consume the mark to deal 32 - 151 (based on level) bonus magic damage.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Leona/ability-icon/p",
  "notes": "Sunlight's damage respects  enchantment redirection.\n Zyra has a hidden passive that grants her 10% increased size for 33 seconds after having Sunlight applied to her.",
  "spellEffects": "spell",
  "spellshieldable": "true",
  "targeting": "Passive"
}
  export default ability
