// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Hymn of Valor",
  "affects": "Enemies",
  "blurb": "Active:  Sona projects sound bolts to the two nearest enemies that each deal magic damage, and she gains a stack of  Accelerando for each bolt that damages an enemy  champion.",
  "castTime": "none",
  "cooldown": "8",
  "cost": "50 / 55 / 60 / 65 / 70",
  "damageType": "Magic damage",
  "effectRadius": "825 /  400",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Sona sends out bolts of sound to the two nearest visible enemies, prioritizing champions. Each bolt deals magic damage and grants sight of the area around the target for 1 second.Sona gains a stack of Accelerando for each bolt that hits an enemy champion.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "50 / 85 / 120 / 155 / 190"
            },
            {
              "unit": "% AP",
              "values": "40"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Melody Bonus:</span> Sona and tagged allied champions deal bonus magic damage on their next basic attack within 5 seconds.</p>",
      "leveling": [
        {
          "attribute": "Bonus Magic Damage",
          "modifiers": [
            {
              "values": "10 / 15 / 20 / 25 / 30"
            },
            {
              "unit": "% of Sona's AP",
              "values": "10"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Sona/ability-icon/q",
  "notes": "Sight of the targets' area is granted on-cast.\nThe Melody empowerment given to tagged allies respects  enchantment redirection.\nThe empowered attack will trigger but not be consumed against wards.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1300",
  "spellEffects": "aoe",
  "spellshieldable": "True",
  "targeting": "Auto"
}
export default ability
