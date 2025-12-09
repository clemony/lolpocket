// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Serpentine Grace",
  "affects": "Self",
  "blurb": "Innate:  Cassiopeia gains  Movement Speed per level, but she cannot purchase  Boots items.",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Cassiopeia gains 4 - 72 (based on level) bonus movement speed, but she cannot purchase Boots items.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Blessing of Noxus Bonus:</span> Serpentine Grace's bonus movement speed is increased by 1 - 18 (based on level), for a total of 5 - 90 (based on level).</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Cassiopeia/ability-icon/p",
  "notes": "The movement speed from Serpentine Grace is worth  48 per level, up to a maximum of  864 at level 18.\nWithout other movement speed modifiers taken into account, Serpentine Grace grants Cassiopeia a total of 332 : 400 (based on level)  movement speed.\nAs  Magical Footwear grants boots, the rune will be replaced with  Cash Back.",
  "targeting": "Passive"
}
export default ability
