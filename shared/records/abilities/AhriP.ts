// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "P",
  "name": "Essence Theft",
  "affects": "Self",
  "blurb": "Innate:  Ahri generates a  stack of Essence Fragment from killing  minions and  monsters. At max stacks, she consumes them to  heal herself.",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Ahri generates a stack of Essence Fragment whenever she kills a minion or monster. At 9 stacks, she consumes them to heal herself for 35 - 95 (based on level) (+ 20% AP).</p>"
    },
    {
      "description": "Additionally, whenever Ahri scores a champion takedown within 3 seconds of damaging them, she brings their essence to her to consume it to heal herself for 75 - 165 (based on level) (+ 30% AP)."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Ahri/ability-icon/p",
  "notes": "No additional details.",
  "targeting": "Passive"
}
export default ability
