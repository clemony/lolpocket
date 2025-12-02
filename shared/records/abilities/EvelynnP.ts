// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Demon Shade",
  "affects": "Self",
  "blurb": "Innate: While out of combat,  Evelynn gains Demon Shade.",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Evelynn shrouds herself in Demon Shade after not performing actions that break stealth for 4 seconds. Attacking or casting abilities ends Demon Shade immediately and places it on a 4-second static cooldown, reduced to 1.25 seconds from casting Last Caress. Taking damage from champions or turrets interrupts Demon Shade and places it on a 1.5-second static cooldown.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Demon Shade:</span> While below 250 - 590 (based on level) (+ 250% AP) health, Evelynn heals herself for 15 - 150 (based on level) every second. From level 6 onward, Demon Shade also grants camouflage.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Evelynn/ability-icon/p",
  "notes": "Demon Shade is also placed on a 1.5 second cooldown upon respawning.\nDemon Shade's cooldown incurs upon starting the attack windup of the basic attack and upon the cast time of the ability.\nDemon Shade activates even if Evelynn is  Recalling.\nUpon Evelynn's transition into the stealth, Demon Shade will interrupt her in-progress cast commands for unit-targeted spells, excluding  Whiplash and its  empowered cast.\nIf Evelynn's last issued order was to cast  Whiplash, her transition into the stealth will be followed by an automatic command for casting the ability (if no other orders were issued in the meantime).\nWhenever Demon Shade activates, a puff of purple smoke will briefly appear around her.\nUsing a basic attack breaks the stealth at the start of the attack windup.",
  "targeting": "Passive"
}
export default ability
