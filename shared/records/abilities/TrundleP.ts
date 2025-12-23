// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "P",
  "name": "King's Tribute",
  "affects": "Self",
  "blurb": "Innate: Enemies that die near  Trundle cause him to  heal based on their maximum health.",
  "effectRadius": "1400",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Whenever a nearby enemy dies, Trundle heals himself for 1.8% - 5.5% (based on level) of the target's maximum health.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Trundle/ability-icon/p",
  "notes": "King's Tribute does not trigger when an enemy structure is destroyed.",
  "targeting": "Passive"
}
export default ability
