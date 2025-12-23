// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "P",
  "name": "Arcane Mastery",
  "affects": "Self",
  "blurb": "Innate:  Ryze gains  maximum mana based on his  ability power.",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Ryze increases his maximum mana by (10% per 100 AP).</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Ryze/ability-icon/p",
  "notes": "The increase in maximum mana differenciates between base and bonus mana, similar to  Overgrowth. The product base off of base mana does not count as bonus mana.\nWith  Rabadon's Deathcap, a total of (30% AP) ability power and (13% AP)% maximum mana is gained.\nArcane Mastery together with  Archangel's Staff or  Seraph's Embrace creates a recursive stat loop:  ability power giving  mana and so on.\nAnother way to create a recursive stat loop, is to have any converter of  mana to  health ( Winter's Approach,  Fimbulwinter or the U.R.F. buff) and  Riftmaker. The first converter giving  mana to  health,  Riftmaker giving  health to  ability power and Arcane Mastery giving  ability power to  mana.",
  "targeting": "Passive"
}
export default ability
