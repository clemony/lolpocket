// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Ghostwater Dive",
  "affects": "Self",
  "blurb": "Active:  Pyke submerges into water, entering  camouflage and gaining a burst of  movement speed for a few seconds. Nearby enemies are alerted of his presence.",
  "castTime": "none",
  "cooldown": "14 / 13 / 12 / 11 / 10",
  "cost": "65",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Pyke submerges into water for 5 seconds, entering camouflage and gaining 45% (+ 2% per 1 Lethality) bonus movement speed that decays over the duration. Attacking or casting abilities ends Ghostwater Dive immediately.</p>"
    },
    {
      "description": "Enemy champions within 1500 units of Pyke are alerted of his presence and whether he can execute them with Death from Below."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Pyke/ability-icon/w",
  "notes": "When an enemy is alerted, sharks will circle underneath their feet while a sound will be played to them that changes based on health threshold.\nUsing a basic attack breaks the stealth at the end of the attack windup.\nPENDING FOR TEST: While submerged, a unique visual indicator will appear above Pyke if there are enemy champions closer than 700 units but farther than 600 units.",
  "resource": "Mana",
  "targeting": "Auto"
}
export default ability
