// Updated Patch 15.24.1 - 12/26/2025 07:04:14 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Dark Sphere",
  "affects": "Enemies",
  "blurb": "Active: After a brief delay,  Syndra conjures a Dark Sphere at the target location that deals magic damage to nearby enemies. The Dark Sphere then remains on the ground for a few seconds.",
  "castTime": "none",
  "cooldown": "7",
  "cost": "40 / 45 / 50 / 55 / 60",
  "damageType": "Magic damage",
  "effectRadius": "210",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Syndra conjures a Dark Sphere at the target location that appears after a 0.6-second delay, dealing magic damage to nearby enemies. The Dark Sphere then remains on the ground for 6 seconds.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "80 / 115 / 150 / 185 / 220"
            },
            {
              "unit": "% AP",
              "values": "65"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Transcendent Bonus:</span> Collecting 40 Splinters of Wrath causes Syndra to periodically stock a Dark Sphere charge, up to a maximum of 2.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Syndra/ability-icon/q",
  "notes": "Dark Sphere can be conjured inside terrain, but cannot be thrown there with  Force of Will.\nThere is no limit as to how many Dark Spheres can be active at a time.\nAfter Syndra gains the  Transcendent bonus, the number of Dark Sphere charges available is represented by small Sphere icons under her health bar, visible to the player only.",
  "rechargeRate": "7 / 7 / 7 / 7 / 7",
  "resource": "Mana",
  "spellEffects": "Aoe",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "800"
}
export default ability
