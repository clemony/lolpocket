// Updated Patch 15.23.1 - 11/30/2025 12:24:09 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Plasma Fission",
  "width": "100 / 90",
  "affects": "Enemies",
  "blurb": "Active:  Vel'Koz fires a plasma bolt that deals magic damage to the first enemy hit,  slowing them for a short time.\nPlasma Fission can be recast while the bolt is in flight, and does so automatically upon hitting an enemy or reaching max range.",
  "castTime": "0.25",
  "cooldown": "7",
  "cost": "40 / 45 / 50 / 55 / 60",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Vel'Koz fires a plasma bolt in the target direction that deals magic damage to the first enemy hit and slows them by 70% decaying over a duration.</p>\nPlasma Fission can be recast after 0.25 seconds while the bolt is in flight, and does so automatically upon hitting an enemy or reaching maximum range.",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "80 / 120 / 160 / 200 / 240"
            },
            {
              "unit": "% AP",
              "values": "90"
            }
          ]
        },
        {
          "attribute": "Slow Duration",
          "modifiers": [
            {
              "unit": " seconds",
              "values": "1 / 1.4 / 1.8 / 2.2 / 2.6"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Vel'Koz splits the bolt in two over 0.25 seconds, each part firing perpendicularly in opposite directions and applying the same effects to enemies hit.</p>"
    },
    {
      "description": "Whenever Plasma Fission kills an enemy, Vel'Koz restores mana.",
      "leveling": [
        {
          "attribute": "Mana Restored per Kill",
          "modifiers": [
            {
              "values": "20 / 22.5 / 25 / 27.5 / 30"
            }
          ]
        },
        {
          "attribute": "Maximum Mana Restored",
          "modifiers": [
            {
              "values": "60 / 67.5 / 75 / 82.5 / 90"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Velkoz/ability-icon/q",
  "notes": "The initial cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nDetonating the ability manually does not.\nPlasma Fission's damage applies before  Organic Deconstruction's.\nThis also ensures Vel'Koz does not lose Plasma Fission's restoration effect.\nAn enemy cannot be hit by multiple bolts even when having blocked one with a  spell shield.\nThe split occurs at a location 55 units in front of the primary bolt's final location.\nPlasma Fission can reach a maximum 1595 units diagonally (ignoring the split missile's width and enemy hitbox radius), reaching this distance after a total of about ~1.65 seconds.\nThis ability will cast from wherever the caster is at the end of the cast time.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1300 / 2100",
  "spellEffects": "Area of Effect",
  "spellshieldable": "True",
  "targeting": "Direction / Auto"
}
export default ability
