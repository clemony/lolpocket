// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Untouchable Shadow",
  "affects": "Self",
  "blurb": "Active:  Yunara  dashes in the target direction.",
  "castTime": "none",
  "cooldown": "9",
  "cost": "40",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Yunara dashes in the target direction.Untouchable Shadow resets Yunara's basic attack timer. Arc of Ruin can be cast during the dash. This ability benefits from ultimate ability effects and is the upgraded version of Kanmei's Steps during Transcendent State.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Yunara/ability-icon/e",
  "notes": "Untouchable Shadow does not trigger ultimate cast effects, such as  Experimental Hexplate's Overdrive,  Zeke's Convergence's Frostfire Tempest and  Cloud Dragon Soul's increased movement speed. This is intended.",
  "speed": "1350 / 1500 / 1650 (based on  Transcend One's Self's Rank)",
  "targeting": "Location",
  "targetRange": "225 : 450 / 550"
}
export default ability
