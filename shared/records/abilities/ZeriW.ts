// Updated Patch 15.23.1 - 11/30/2025 12:24:14 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Ultrashock Laser",
  "width": "80 /  200",
  "affects": "Enemies",
  "blurb": "Active:  Zeri fires an electric pulse in the target direction that deals physical damage to the first enemy hit and  slows them for a short duration.",
  "castTime": "0.55 : 0.3 (based on bonus attack speed)",
  "cooldown": "12 / 11 / 10 / 9 / 8",
  "cost": "50 / 60 / 70 / 80 / 90",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Zeri fires an electric pulse in the target direction that deals physical damage to the first enemy hit and slows them for 2 seconds.If the pulse hits terrain, it transforms into a laser in a line that grants sight of the area for 1.75 seconds and fires after 0.85 seconds, applying the same effects to enemies hit and critically striking for (175% + 40%) damage against champions and monsters.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "30 / 70 / 110 / 150 / 190"
            },
            {
              "unit": "% AD",
              "values": "130"
            },
            {
              "unit": "% AP",
              "values": "25"
            }
          ]
        },
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "30 / 35 / 40 / 45 / 50"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Zeri/ability-icon/w",
  "notes": "Applies  spell damage for the pulse and  area damage for the laser.\nThe pulse missile is blocked by  projectile-interception effects but not the laser.\nUltrashock Laser interacts with player-generated terrain.\nThis ability will cast from wherever the caster is at the start of the cast time.",
  "projectile": "SPECIAL",
  "resource": "Mana",
  "speed": "2500",
  "spellEffects": "special",
  "spellshieldable": "true",
  "targeting": "Direction"
}
export default ability
