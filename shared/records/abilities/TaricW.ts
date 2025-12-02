// Updated Patch 15.23.1 - 11/30/2025 12:24:05 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Bastion",
  "affects": "Self, Allies",
  "blurb": "Passive:  Taric gains  bonus armor and forms a  tether to the ally bound by Bastion. While the tether persists, the ally gains the bonus armor and Taric's abilities are mimicked to them.",
  "castTime": "0.25",
  "cooldown": "15",
  "cost": "60",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Taric gains bonus armor and forms a tether between him and the ally bound by Bastion. While the tether persists, the ally also gains the bonus armor and Taric's abilities are mimicked to them, though the effects do not stack.</p>",
      "leveling": [
        {
          "attribute": "Bonus Armor",
          "modifiers": [
            {
              "unit": "% of Taric's armor",
              "values": "6 / 7 / 8 / 9 / 10"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Taric grants himself and the target allied champion a shield for 2.5 seconds, binding them with Bastion.</p>",
      "leveling": [
        {
          "attribute": "Shield Strength",
          "modifiers": [
            {
              "unit": "% of target's maximum health",
              "values": "7 / 8 / 9 / 10 / 11"
            }
          ]
        }
      ]
    },
    {
      "description": "Taric can also self-cast to shield himself; if he self-casts and is untethered, he will become tethered to the nearest ally. Similarly, if he is tethered to an ally and self-casts, both he and the ally will be shielded. Only one ally can be bound at a time, and selecting a new ally overrides the previous bind."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Taric/ability-icon/w",
  "notes": "The mimicked abilities will still complete even if Taric dies or leaves range.\nAbilities are not mimicked to the bound ally if they are  vanished via  Alpha Strike,  Hallucinate,  Rappel, or  Void Rush.\nMimicked abilities will also cancel if they vanish as above.\nBastion has a  forgiveness radius of 175 units.",
  "resource": "Mana",
  "targeting": "Unit",
  "targetRange": "800",
  "tetherRadius": "1300"
}
export default ability
