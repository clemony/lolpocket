// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Way of the Wanderer",
  "affects": "Self",
  "blurb": "Innate - Intent:  Yasuo gains increased  critical strike chance.",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Intent:</span> Yasuo's total critical strike chance is doubled from all other sources. Additionally,[ every 1% critical strike chance in excess of 100% is converted into 0.5 bonus attack damage. ][ every 50% critical strike chance in excess of 100% is converted into 25 bonus attack damage. ]</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Resolve:</span> Yasuo generates a stack of Flow for every 59 / 52.5 / 46 (based on level) units he travels by any means. At[ 100 stacks ][ 5900 / 5250 / 4600 (based on level) units traveled ]and upon taking damage from an enemy champion or monster, Yasuo consumes all Flow to grant himself a shield for 125 - 600 (based on level) that lasts for 1 second.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Yasuo/ability-icon/p",
  "notes": "Yasuo gains the shield before the damage instance; the shield will mitigate the damage that triggered it.\nYasuo is able to reach 100% critical strike chance with Way of the Wanderer's multiplier after obtaining a total of  50% critical strike chance.\nYasuo's secondary resource bar will display the amount of shield stored as an equivalent percentage to his Flow stacks. (Each Flow stack will add 1.25 : 6 (based on level) to the bar)\nUpon taking damage, the bar will display his current shield strength.",
  "targeting": "Passive"
}
export default ability
