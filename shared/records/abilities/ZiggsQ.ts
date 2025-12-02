// Updated Patch 15.23.1 - 11/30/2025 12:24:14 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Bouncing Bomb",
  "affects": "Enemies",
  "blurb": "Active:  Ziggs throws a bomb to the target location that bounces twice forward. It will explode upon hitting an enemy, terrain, or the final bounce, dealing magic damage to nearby enemies.",
  "castTime": "0.25",
  "collisionRadius": "180",
  "cooldown": "6 / 5.5 / 5 / 4.5 / 4",
  "cost": "50 / 55 / 60 / 65 / 70",
  "damageType": "Magic damage",
  "effectRadius": "240",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ziggs throws a bomb to the target location that bounces forward up to two times, with the distance traveled each time being based on how far it was originally thrown.</p>"
    },
    {
      "description": "The bomb explodes upon landing near an enemy, within terrain, or the final bounce, dealing magic damage to nearby enemies.",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "80 / 130 / 180 / 230 / 280"
            },
            {
              "tooltip": "Scaling per rank:\n60 / 65 / 70 / 75 / 80% AP",
              "unit": "% AP",
              "values": "60 - 80"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Ziggs/ability-icon/q",
  "notes": "Bouncing Bomb can be thrown or bounce over units/terrain.\n Spell shield will block the damage of the explosion, but the explosion can still damage other targets in the radius.\nZiggs will throw the bomb from his location at the end of the cast time, towards the pre-clamped cast location, causing the bounces to adjust their angle accordingly.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1700 / Fixed time",
  "spellEffects": "spellaoe",
  "spellshieldable": "true",
  "targeting": "Location",
  "targetRange": "850"
}
export default ability
