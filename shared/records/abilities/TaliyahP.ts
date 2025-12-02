// Updated Patch 15.23.1 - 11/30/2025 12:24:05 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Rock Surfing",
  "affects": "Self",
  "blurb": "Innate:  Taliyah gains  bonus movement speed while near terrain. This effect will be put on  cooldown while in combat or casting an ability.",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> While near terrain, Taliyah gains 10% / 15% / 25% / 40% (based on level) bonus movement speed, which builds up over 1 second while in range for at least 0.4 seconds, and decays at the same rate once out of range for at least 3 seconds.</p>"
    },
    {
      "description": "If Taliyah is casting an ability or enters champion combat, Rock Surfing cannot occur again for a few seconds."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Taliyah/ability-icon/p",
  "notes": "The movement speed builds up and decays linearly (by the same amount in the same interval), 25% of the maximum value every 0.25 seconds.\nRock Surfing can interact with player-generated terrain.\nDealing  default or  proc damage does not put Rock Surfing on cooldown.",
  "targeting": "Passive"
}
export default ability
