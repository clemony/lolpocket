// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "P",
  "name": "Stone Skin",
  "affects": "Self",
  "blurb": "Innate:  Wukong gains  bonus armor based on level and  health regeneration equal to a portion of his maximum health.",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Wukong gains 6 - 10 (based on level) bonus armor and regenerates an additional[ 0.35% of his maximum health every 5 seconds. ][ 0.035% of his maximum health every 0.5 seconds. ]Whenever Wukong or his clone damage an enemy champion or monster, he generates a stack of Strength of Stone for 5 seconds, refreshing on subsequent hits and stacking up to 5 times. Stacks expire one by one every second when the duration ends.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Strength of Stone:</span> For each stack,[ Stone Skin's effects are increased by 100%, ][ Wukong gains 6 - 10 (based on level) additional bonus armor and further regenerates an additional 0.35% of his maximum health every 5 seconds, ]up to a maximum of 36 - 60 (based on level) bonus armor and total additional regeneration of[ 2.1% maximum health every 5 seconds. ][ 0.21% maximum health every 0.5 seconds. ]</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/MonkeyKing/ability-icon/p",
  "targeting": "Passive"
}
export default ability
