// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Nether Blade",
  "affects": "Self",
  "blurb": "Passive:  Kassadin's  basic attacks deal bonus magic damage.",
  "castTime": "none",
  "cooldown": "7",
  "cost": "1",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Kassadin's basic attacks deal 20 (+ 10% AP) bonus magic damage on-hit.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kassadin empowers his next basic attack within 5 seconds to have an uncancellable windup, gain 50 bonus range, deal increased bonus magic damage, and restore mana, with the restoration amount quintupled against champions.</p>",
      "leveling": [
        {
          "attribute": "Increased Bonus Magic Damage",
          "modifiers": [
            {
              "values": "50 / 75 / 100 / 125 / 150"
            },
            {
              "unit": "% AP",
              "values": "80"
            }
          ]
        },
        {
          "attribute": "Mana Restored",
          "modifiers": [
            {
              "unit": "% of missing mana",
              "values": "4 / 4.5 / 5 / 5.5 / 6"
            }
          ]
        },
        {
          "attribute": "Mana Restored Against Champions",
          "modifiers": [
            {
              "unit": "% of missing mana",
              "values": "20 / 22.5 / 25 / 27.5 / 30"
            }
          ]
        }
      ]
    },
    {
      "description": "Nether Blade resets Kassadin's basic attack timer."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Kassadin/ability-icon/w",
  "notes": "The passive damage applies  proc damage and the active damage applies  spell damage.\nThe enhanced attack will apply other  on-hit effects and can  critically strike as normal.\nNether Blade will not grant mana if the attack is  dodged or if it  misses, but will do so if the attack is  blocked. In all cases the damage is parried.\n Spell shield will block the active damage but not the passive one.\nThe passive bonus damage applies to structures.\nThe empowered attack will trigger but not be consumed nor apply its effects against  structures.",
  "resource": "Mana",
  "spellEffects": "special",
  "spellshieldable": "Special",
  "targeting": "Auto"
}
export default ability
