// Updated Patch 16.1 - 01/29/2026 04:27:02 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "E",
  "name": "Frenzying Taunt",
  "affects": "Enemies, Self",
  "blurb": "Active:  Rammus briefly  taunts the target enemy  champion or  monster.",
  "castTime": "0.25",
  "cooldown": "12",
  "cost": "50",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Rammus taunts the target enemy champion or monster for a duration. Monsters are additionally dealt magic damage upon being affected.</p>",
      "leveling": [
        {
          "attribute": "Taunt Duration",
          "modifiers": [
            {
              "unit": " seconds",
              "values": "1.2 / 1.4 / 1.6 / 1.8 / 2"
            }
          ]
        },
        {
          "attribute": "Monster Magic Damage",
          "modifiers": [
            {
              "values": "80 / 100 / 120 / 140 / 160"
            },
            {
              "unit": "% AP",
              "values": "70"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Rammus/ability-icon/e",
  "notes": "Frenzying Taunt, despite being usable on  monsters, does not force them to attack Rammus. He does not draw aggro since the ability does not deal damage.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
  "resource": "Mana",
  "spellshieldable": "True",
  "targeting": "Unit",
  "targetRange": "325"
}
  export default ability
