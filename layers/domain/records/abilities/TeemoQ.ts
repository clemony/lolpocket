// Updated Patch 15.24.1 - 12/26/2025 07:04:14 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Blinding Dart",
  "affects": "Enemies",
  "blurb": "Active:  Teemo shoots a dart at the target enemy that deals magic damage and  blinds them for a short time.",
  "castTime": "0.25",
  "cooldown": "7",
  "cost": "70 / 75 / 80 / 85 / 90",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Teemo shoots a dart at the target enemy that deals magic damage and blinds them for a duration.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "80 / 125 / 170 / 215 / 260"
            },
            {
              "unit": "% AP",
              "values": "70"
            }
          ]
        },
        {
          "attribute": "Blind Duration",
          "modifiers": [
            {
              "unit": " seconds",
              "values": "2 / 2.25 / 2.5 / 2.75 / 3"
            }
          ]
        }
      ]
    },
    {
      "description": "The duration of the blind is doubled against minions and monsters.",
      "leveling": [
        {
          "attribute": "Increased Blind Duration",
          "modifiers": [
            {
              "unit": " seconds",
              "values": "4 / 4.5 / 5 / 5.5 / 6"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Teemo/ability-icon/q",
  "notes": "Blinding Dart will not make abilities that can trigger  on-hit effects ( Parrrley,  Mystic Shot) miss.\nWhen blinded, enemies have a green tint on their screen.\nBecause Blinding Dart uses  center range, it has 45 to 70 more range than his  basic attacks, which use  edge range, against other  champions.\nThis bonus becomes lower if Teemo or his target have  size bonuses.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "2500",
  "spellEffects": "Single target",
  "spellshieldable": "True",
  "targeting": "Unit",
  "targetRange": "680"
}
export default ability
