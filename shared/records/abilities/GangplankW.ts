// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Remove Scurvy",
  "affects": "Self",
  "blurb": "Active:  Gangplank eats citrus to  cleanse  crowd control effects and  heal based on his missing health.",
  "castTime": "0.25",
  "cooldown": "22 / 20 / 18 / 16 / 14",
  "cost": "60 / 70 / 80 / 90 / 100",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Gangplank consumes a large quantity of citrus fruit, cleansing himself from all crowd control and healing himself.</p>",
      "leveling": [
        {
          "attribute": "Heal",
          "modifiers": [
            {
              "values": "45 / 70 / 95 / 120 / 145"
            },
            {
              "unit": "% AP",
              "values": "90"
            },
            {
              "unit": "% missing health",
              "values": "13"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Gangplank/ability-icon/w",
  "notes": "Remove Scury does not remove debuffs other than  crowd control, even if both occur from the same effect. For example, Remove Scurvy will dispel the  slow from  Exhaust, but not its damage reduction.\nRemove Scurvy can remove the underlying  stun from  airborne, but a  blink or  dash ability is required to override the displacement.",
  "resource": "Mana",
  "targeting": "Auto"
}
export default ability
