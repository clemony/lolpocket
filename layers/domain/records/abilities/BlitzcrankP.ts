// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Mana Barrier",
  "affects": "Self",
  "blurb": "Innate: Periodically, when  Blitzcrank gets to low-health, Mana Barrier generates a  shield that scales with  maximum mana.",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Periodically, when damaged to 30% maximum health, Blitzcrank generates a shield equal to 35% of maximum mana, lasting for up to 10 seconds.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Blitzcrank/ability-icon/p",
  "notes": "The shield will absorb the portion of incoming damage that would reduce health past 30%.\nMana Barrier's interactions with other  shield effects that trigger before taking damage that would reduce below 30% health:\nMana Barrier will trigger simultaneously with the Lifeline effect from  Hexdrinker,  Maw of Malmortius, or  Immortal Shieldbow if Blitzcrank takes damage while above 30% health, and trigger before them when the damage is taken while below 30% health.\nMana Barrier will always trigger simultaneously with the Lifeline effect from  Sterak's Gage if Blitzcrank takes damage while above or below 30% health.",
  "targeting": "Passive"
}
export default ability
