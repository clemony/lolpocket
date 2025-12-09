// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Incinerate",
  "affects": "Enemies",
  "angle": "49.52°",
  "blurb": "Active:  Annie casts a blazing cone of fire, dealing magic damage to enemies hit.",
  "castTime": "0.25",
  "cooldown": "7",
  "cost": "70 / 75 / 80 / 85 / 90",
  "damageType": "Magic damage",
  "effectRadius": "600",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Annie releases fire in a cone in the target direction, dealing magic damage to enemies hit.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "70 / 110 / 150 / 190 / 230"
            },
            {
              "unit": "% AP",
              "values": "80"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Annie/ability-icon/w",
  "notes": "Incinerate can hit targets behind Annie, provided their radius intersects with the cone hitbox.\nThis ability will cast from wherever the caster is at the end of the cast time.",
  "projectile": "FALSE",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Direction"
}
export default ability
