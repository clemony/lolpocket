// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Crunch",
  "affects": "Enemies",
  "blurb": "Active:  Mega Gnar  leaps to the target location,  slowing enemies he lands on and dealing physical damage to nearby enemies based on his maximum health.",
  "castTime": "none",
  "cooldown": "22 / 19.5 / 17 / 14.5 / 12",
  "cost": "0",
  "damageType": "Physical damage",
  "effectRadius": "375",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Gnar leaps to the target location and deals physical damage to nearby enemies upon impact and slows them by 80% for 0.5 seconds. After a 0.25-second delay, Gnar sends out a shockwave, dealing the same damage to additional enemies in a larger radius.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "80 / 115 / 150 / 185 / 220"
            },
            {
              "unit": "% of his maximum health",
              "values": "6"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Gnar/ability-icon/e",
  "innerRadius": "200",
  "notes": "Gnar is locked out of using any other abilities during Crunch.\nIf circumstances allow it, Crunch's shockwave from using it to transform can hit the target Gnar bounced off of.",
  "spellEffects": "Area of effect",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "675"
}
export default ability
