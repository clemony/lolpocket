// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "R",
  "name": "Missile Barrage",
  "width": "80",
  "affects": "Enemies",
  "blurb": "Active:  Corki fires a missile in the target direction that explodes upon the first enemy hit, dealing physical damage to enemies in an area.",
  "castTime": "0.175",
  "cooldown": "2",
  "cost": "35",
  "damageType": "Physical damage",
  "effectRadius": "150 / 300",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Basic attacks on-hit against champions reduce Missile Barrage's remaining recharge time by 2 - 4 (based on critical strike chance) seconds.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Corki fires a missile in the target direction that explodes upon the first enemy hit, dealing physical damage to enemies within the area.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "90 / 170 / 250"
            },
            {
              "unit": "% bonus AD",
              "values": "85"
            }
          ]
        }
      ]
    },
    {
      "description": "Corki periodically stocks a Missile Barrage charge, up to a maximum of 4. He gains 2 charges upon learning the ability and maximum charges upon respawning."
    },
    {
      "description": "Every third missile Corki fires is a Big One, dealing 100% increased damage as well as gaining increased range and explosion radius.",
      "leveling": [
        {
          "attribute": "Big One Physical Damage",
          "modifiers": [
            {
              "values": "180 / 340 / 500"
            },
            {
              "unit": "% bonus AD",
              "values": "170"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Corki/ability-icon/r",
  "notes": "Once Corki has learned the ability:\nHe receives a  buff that counts a cycle of the number of times Missile Barrage has been used since the last Big One.\nAn indicator becomes visible below his health bar that tracks the number of missiles in reserve and whether a Big One is available. They are spent from left to right.\nCorki retains progress towards a Big One when he  dies.\nThis ability will cast from wherever the caster is at the start of the cast time.\nMissile Barrage's effect radius is centered around the location of the missile as it collides.\n Malignance's damage from Missile Barrage does not count toward  Eclipse's passive.",
  "projectile": "TRUE",
  "rechargeRate": "20 / 20 / 20",
  "resource": "Other",
  "speed": "2000",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Direction",
  "targetRange": "1300 / 1500"
}
export default ability
