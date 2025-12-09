// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Cataclysm",
  "affects": "Self, Enemies",
  "blurb": "Active:  Jarvan IV  leaps  Unstoppably to the target enemy champion's location, dealing physical damage to nearby enemies upon impact.",
  "castTime": "none",
  "cooldown": "120 / 105 / 90",
  "cost": "100",
  "damageType": "Physical damage",
  "effectRadius": "350 / 1700",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jarvan IV leaps with displacement immunity to the target enemy champion's location over 0.35 seconds, dealing physical damage to all nearby enemies upon arrival.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "200 / 325 / 450"
            },
            {
              "unit": "% bonus AD",
              "values": "180"
            }
          ]
        }
      ]
    },
    {
      "description": "Upon impact, he creates a circle of impassable terrain that knocks aside enemies within the perimeter over 0.15 seconds, knocking them out of the circle if they are on the outer edge and pulling them in otherwise. The terrain lasts for 3.5 seconds and grants sight of the area. Cataclysm can be recast after 0.75 seconds while the terrain is present."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Jarvan IV destroys the terrain created by Cataclysm.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/JarvanIV/ability-icon/r",
  "notes": "The initial cast and the manual recast count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nIf the ability is not manually recasted, the secondary effect will trigger without being considered as an ability activation.\nCataclysm will not deal damage, generate terrain, nor refund its cooldown if Jarvan IV is killed while  leaping.\nThe perimeter is made up of 24 units with 95  pathing radius, 65  gameplay radius and 1350  sight radius each. Only every other unit is rendered visible.\n Searing Charge will not destroy the whole ring but only the part that  Ornn collides with.",
  "resource": "Mana",
  "speed": "Varies",
  "spellEffects": "Aoe",
  "spellshieldable": "True",
  "targeting": "Unit",
  "targetRange": "650"
}
export default ability
