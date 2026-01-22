// Updated Patch 15.24.1 - 12/26/2025 07:04:07 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Indestructible",
  "affects": "Self",
  "blurb": "Passive:  Mordekaiser stores a portion of the damage he deals and receives as Potential Shield, up to a portion of his maximum health. This begins to decay after a brief time without fighting.",
  "castTime": "none",
  "cooldown": "12 / 11 / 10 / 9 / 8",
  "cost": "0",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Mordekaiser stores 45% of the post-mitigation damage he deals and 7.5% of the pre-mitigation damage he takes,[ reduced by 75% for non-champion sources, ][ reduced to 11.25% of damage dealt and 3.75% of damage taken for non-champion sources, ]as Potential Shield on his secondary resource bar, up to 30% of his maximum health. The Potential Shield decays by 8 - 25 (based on level) every second after not dealing or taking damage for 1 second. While Indestructible is not on cooldown, the Potential Shield will not decay below a minimum of 5% of his maximum health, and it will be set to that amount when it comes off cooldown if it was previously below it.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Mordekaiser consumes his Potential Shield to grant himself a shield for the same amount for 4 seconds. The shield decays exponentially over the duration. Indestructible can be recast after 0.5 seconds while the shield is active.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Mordekaiser consumes the remaining shield, healing for a portion of the amount.</p>",
      "leveling": [
        {
          "attribute": "Shield to Healing",
          "modifiers": [
            {
              "unit": "%",
              "values": "35 / 37.5 / 40 / 42.5 / 45"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Mordekaiser/ability-icon/w",
  "notes": "Both casts count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.",
  "targeting": "Auto"
}
export default ability
