// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "P",
  "name": "Bravado",
  "affects": "Self",
  "blurb": "Innate: After casting an ability,  Taric empowers his next two basic attacks to gain tremendous  total attack speed, deal bonus magic damage based on his bonus armor, and  reduce the cooldowns of his basic abilities.",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> After casting an ability, Taric empowers his next two basic attacks within 5 seconds to each gain 100% total attack speed, deal 25 - 93 (based on level) (+ 15% bonus armor) bonus magic damage on-attack, and reduce the remaining cooldowns of his basic abilities by 1 - 2 (based on ability haste)</p>\nseconds."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Taric/ability-icon/p",
  "notes": "The first attack refreshes Bravado's duration.\nSubsequent ability casts will refresh the duration and grant another empowered attack if Taric has one attack remaining.\nBravado may only grant up to two empowered attacks.\nThe bonus damage will not apply against  structures.\nBravado can be  dodged and  blocked but it cannot miss if Taric is  blinded. The cooldown reduction still applies when  blinded, however it does not apply on  dodged or  blocked Bravado attacks.",
  "spellEffects": "proc",
  "targeting": "Passive"
}
export default ability
