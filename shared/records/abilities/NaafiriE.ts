// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Eviscerate",
  "affects": "Self, Enemies",
  "blurb": "Active:  Naafiri  dashes to deal physical damage to enemies she passes through. Upon arrival, she explodes in a flurry of blades to deal physical damage to nearby enemies.",
  "castTime": "none",
  "collisionRadius": "50",
  "cooldown": "11 / 10 / 9 / 8 / 7",
  "cost": "35",
  "damageType": "Physical damage",
  "effectRadius": "230",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Naafiri dashes in the target direction and deals physical damage to enemies she passes through. Upon arrival, she explodes in a flurry of blades to deal physical damage to nearby enemies.</p>",
      "leveling": [
        {
          "attribute": "Dash Physical Damage",
          "modifiers": [
            {
              "values": "15 / 25 / 35 / 45 / 55"
            },
            {
              "unit": "% bonus AD",
              "values": "40"
            }
          ]
        },
        {
          "attribute": "Flurry Physical Damage",
          "modifiers": [
            {
              "values": "60 / 85 / 110 / 135 / 160"
            },
            {
              "unit": "% bonus AD",
              "values": "80"
            }
          ]
        },
        {
          "attribute": "Total Physical Damage",
          "modifiers": [
            {
              "values": "75 / 110 / 145 / 180 / 215"
            },
            {
              "unit": "% bonus AD",
              "values": "120"
            }
          ]
        }
      ]
    },
    {
      "description": "Packmates vanish during the dash and reappear near Naafiri on her arrival. They are also healed to full health upon their reappearance."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Naafiri/ability-icon/e",
  "notes": "Packmates will not be affected by Eviscerate while under the effect of  Hounds' Pursuit.",
  "resource": "Mana",
  "speed": "900",
  "spellEffects": "spellaoe",
  "spellshieldable": "true",
  "targeting": "Location",
  "targetRange": "250 : 450 / 650"
}
export default ability
