// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Dance of Arrows",
  "affects": "Enemies",
  "blurb": "Active:  Lamb  dashes toward the target location, gaining  bonus attack speed for a few seconds. She then fires at up to three nearby enemies, dealing physical damage.",
  "castTime": "none",
  "cooldown": "9",
  "cost": "35",
  "damageType": "Physical damage",
  "effectRadius": "500 (+ 100% bonus  attack range)",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Lamb dashes toward the target location, gaining 35% (+ 5% per mark) bonus attack speed for 4 seconds and firing an arrow at up to 3 nearby visible enemies that deals physical damage. Her current attack target within any proximity will be prioritized by one of the arrows.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "40 / 65 / 90 / 115 / 140"
            },
            {
              "unit": "% bonus AD",
              "values": "75"
            }
          ]
        }
      ]
    },
    {
      "description": "Dance of Arrows' total cooldown is reduced to an amount while Lamb is within the area of Wolf's Frenzy. Casting Wolf's Frenzy reduces Dance of Arrows' current cooldown to the same amount.",
      "leveling": [
        {
          "attribute": "Static Cooldown",
          "modifiers": [
            {
              "unit": " seconds",
              "values": "4 / 3.5 / 3 / 2.5 / 2"
            }
          ]
        }
      ]
    },
    {
      "description": "Dance of Arrows resets Lamb's basic attack timer. Lamb can cast any of her abilities during the dash."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Kindred/ability-icon/q",
  "notes": "This ability always employs Quick cast.\nThe  dash distance can be extended to up to 400 units when dashing across terrain.\nThe  cooldown will not be modified if it cannot be reduced (the current cooldown would have to be less than the reduction amount in this case).",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "500 + 100% movement speed",
  "spellEffects": "Area of effect",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "300"
}
export default ability
