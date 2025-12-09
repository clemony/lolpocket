// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Void Rift",
  "width": "175 / 175",
  "affects": "Enemies",
  "blurb": "Active:  Vel'Koz cracks a rift in the target direction that opens after a brief delay, cascading through the area to deal magic damage to enemies within.",
  "castTime": "none",
  "cooldown": "1.5",
  "cost": "50 / 55 / 60 / 65 / 70",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Vel'Koz cracks a rift in the target direction that opens after a 0.25-second delay, cascading through the area over 0.65 seconds to deal magic damage to enemies within.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "30 / 50 / 70 / 90 / 110"
            },
            {
              "unit": "% AP",
              "values": "20"
            }
          ]
        }
      ]
    },
    {
      "description": "After 0.75 seconds, the rift violently collapses, dealing magic damage to enemies within and granting sight of the surrounding area for 0.25 seconds.",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "45 / 75 / 105 / 135 / 165"
            },
            {
              "unit": "% AP",
              "values": "25"
            }
          ]
        },
        {
          "attribute": "Total Magic Damage",
          "modifiers": [
            {
              "values": "75 / 125 / 175 / 225 / 275"
            },
            {
              "unit": "% AP",
              "values": "45"
            }
          ]
        }
      ]
    },
    {
      "description": "Vel'Koz periodically stocks a Void Rift charge, up to a maximum of 2."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Velkoz/ability-icon/w",
  "notes": "Unbreakable and  Wind Wall will block the ripple and prevent the rift from forming further, but they will not destroy the section that was created already.\n Spell shield only blocks one instance of damage.",
  "projectile": "SPECIAL",
  "rechargeRate": "19 / 18 / 17 / 16 / 15",
  "resource": "Mana",
  "speed": "1700",
  "spellEffects": "spellaoe",
  "spellshieldable": "special",
  "targeting": "Direction"
}
export default ability
