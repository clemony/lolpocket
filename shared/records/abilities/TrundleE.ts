// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Pillar of Ice",
  "affects": "Enemies",
  "blurb": "Active:  Trundle erects an ice pillar at the target location that remains for a few seconds, which  knocks back units hit. The pillar acts as terrain and  slows nearby enemies.",
  "castTime": "0.25",
  "cooldown": "21 / 19.5 / 18 / 16.5 / 15",
  "cost": "75",
  "effectRadius": "360 / 225",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Trundle erects a pillar of ice at the target location for 6 seconds, which knocks back units hit to 225 units from its center. The pillar acts as terrain and slows nearby enemies.</p>",
      "leveling": [
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "34 / 38 / 42 / 46 / 50"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Trundle/ability-icon/e",
  "notes": "Pillar of Ice displaces allied units away from the area but does not render them  airborne.\nAllied  channels (e.g.  Recall,  Teleport) will be  interrupted however.\nPillar of Ice cannot be placed inside impassable terrain. Attempting to do so will cause the pillar to spawn in the nearest available spot of accessible terrain.\nPillar Of Ice triggers effects such as drawing turret aggro,  Sudden Impact and applying  Elixir of Sorcery by dealing 0  proc  true damage.",
  "resource": "Mana",
  "spellshieldable": "False",
  "targeting": "Location",
  "targetRange": "1000"
}
export default ability
