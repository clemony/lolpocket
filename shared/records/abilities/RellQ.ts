// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "Q",
  "name": "Shattering Strike",
  "width": "150",
  "affects": "Enemies",
  "blurb": "Active:  Rell thrusts her lance in the target direction that destroys damage  shields of enemies hit before dealing magic damage and  stunning.",
  "castTime": "0.4",
  "cooldown": "11 / 10.5 / 10 / 9.5 / 9",
  "cost": "50",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Rell thrusts her lance in the target direction, lunging forward 100 units and destroying the damage-mitigating shields of all enemies hit (excluding the shields of monsters) before dealing them magic damage and stunning them for 0.65 seconds.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "60 / 100 / 140 / 180 / 220"
            },
            {
              "unit": "% AP",
              "values": "60"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Rell/ability-icon/q",
  "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nRell is  locked out of moving, attacking, and casting any other ability for 0.35 seconds after Shattering Strike is cast.",
  "projectile": "FALSE",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "spellshieldable": "true",
  "targeting": "Direction"
}
export default ability
