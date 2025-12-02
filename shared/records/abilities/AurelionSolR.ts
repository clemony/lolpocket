// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "R",
  "name": "The Skies Descend",
  "affects": "Enemies",
  "blurb": "Active:  Aurelion Sol calls down a giant star that strikes the target location, dealing  increased magic damage in a larger area and briefly   knocking up enemies hit.",
  "cooldown": "120 / 110 / 100",
  "cost": "100",
  "damageType": "Magic damage",
  "effectRadius": "5000",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Aurelion Sol calls down a giant star that strikes the target location after 2 seconds, dealing 25% increased damage in a larger area and knocking up enemies hit for 1 second.</p>",
      "leveling": [
        {
          "attribute": "Empowered Magic Damage",
          "modifiers": [
            {
              "values": "187.5 / 312.5 / 437.5"
            },
            {
              "unit": "% AP",
              "values": "93.75"
            }
          ]
        }
      ]
    },
    {
      "description": "Additionally, the impact sends a massive shockwave that rapidly expands from the area over 3 seconds, dealing magic damage to enemy champions and epic monsters hit, slowing all enemies hit by 50% for 1 second, and revealing them for 1.5 seconds.",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "135 / 225 / 315"
            },
            {
              "unit": "% AP",
              "values": "67.5"
            }
          ]
        }
      ]
    },
    {
      "description": "Enemies hit by the star are immune to the shockwave."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/AurelionSol/ability-icon/r",
  "innerRadius": "√(388.91² + 21.85²  ×  Stardust)",
  "notes": "The shockwave radius and path are globally visible on the minimap.\nThe shockwave's radius is fixed.\nThe shockwave is not blocked.",
  "projectile": "FALSE",
  "spellEffects": "spellaoe",
  "spellshieldable": "true",
  "targeting": "Location"
}
export default ability
