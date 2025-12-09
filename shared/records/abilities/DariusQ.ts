// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Decimate",
  "affects": "Enemies",
  "blurb": "Active:  Darius briefly winds up to spin his axe in a circle while  ghosted, dealing physical damage to enemies hit.",
  "castTime": "none",
  "cooldown": "9 / 8 / 7 / 6 / 5",
  "cost": "25 / 30 / 35 / 40 / 45",
  "damageType": "Physical damage",
  "effectRadius": "240 / 460",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Darius becomes ghosted for 1 second and hefts his axe for 0.75 seconds, afterward swinging it around himself to deal physical damage to nearby enemies. Enemies within the inner radius take 35% damage.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage (Blade)",
          "modifiers": [
            {
              "values": "50 / 80 / 110 / 140 / 170"
            },
            {
              "tooltip": "Scaling per rank:\n100 / 110 / 120 / 130 / 140% AD",
              "unit": "% AD",
              "values": "100 - 140"
            }
          ]
        },
        {
          "attribute": "Reduced Damage (Handle)",
          "modifiers": [
            {
              "values": "17.5 / 28 / 38.5 / 49 / 59.5"
            },
            {
              "tooltip": "Scaling per rank:\n35 / 38.5 / 42 / 45.5 / 49% AD",
              "unit": "% AD",
              "values": "35 - 49"
            }
          ]
        }
      ]
    },
    {
      "description": "Against champions and large monsters hit, Darius heals for 17% - 51% (based on number of targets hit by the outer radius) of his missing health. Enemies hit by the inner radius do not refresh the duration of or gain a stack of Hemorrhage."
    },
    {
      "description": "Darius can move during Decimate, but is unable to declare basic attacks or cast Apprehend or Noxian Guillotine."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Darius/ability-icon/q",
  "notes": "Decimate will cancel if Darius enters  stasis or uses  Dash during the delay.\nAfter the delay, Decimate will be placed on a 1-second cooldown.",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Auto"
}
export default ability
