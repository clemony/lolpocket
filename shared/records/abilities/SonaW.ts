// Updated Patch 15.23.1 - 11/30/2025 12:24:04 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Aria of Perseverance",
  "affects": "Self, Allies",
  "blurb": "Active:  Sona  heals herself and projects a sound bolt that heals the most wounded allied champion nearby.",
  "castTime": "none",
  "cooldown": "10",
  "cost": "80 / 85 / 90 / 95 / 100",
  "effectRadius": "1000 /  400",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Sona heals herself and sends out a tone to heal the most wounded allied champion nearby.</p>",
      "leveling": [
        {
          "attribute": "Heal",
          "modifiers": [
            {
              "values": "30 / 45 / 60 / 75 / 90"
            },
            {
              "unit": "% AP",
              "values": "30"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Melody Bonus:</span> Sona and tagged allied champions are granted a shield for 1.5 seconds.</p>",
      "leveling": [
        {
          "attribute": "Shield Strength",
          "modifiers": [
            {
              "values": "25 / 45 / 65 / 85 / 105"
            },
            {
              "unit": "% of Sona's AP",
              "values": "25"
            }
          ]
        }
      ]
    },
    {
      "description": "Sona gains a stack of Accelerando whenever she heals a wounded ally or shields a minimum amount of damage for an ally with Aria of Perseverance.",
      "leveling": [
        {
          "attribute": "Minimum Damage Mitigated",
          "modifiers": [
            {
              "values": "25 / 45 / 65 / 85 / 105"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Sona/ability-icon/w",
  "notes": "If no one is injured, Aria of Perseverance will target the closest allied champion.\nThe projectile of Aria of Perseverance will follow an ally in stealth but will not reveal them.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1300",
  "targeting": "Auto"
}
export default ability
