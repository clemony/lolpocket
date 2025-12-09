// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Soul Shackles",
  "affects": "Enemies",
  "blurb": "Active:  Morgana latches chains of energy onto nearby enemy champions, dealing magic damage and forming a  tether between herself and each target for a short time, during which the targets are  revealed and  slowed, and Morgana gains  bonus movement speed.",
  "castTime": "0.35",
  "cooldown": "120 / 110 / 100",
  "cost": "100",
  "damageType": "Magic damage",
  "effectRadius": "625",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Morgana latches chains of energy onto nearby enemy champions over the cast time, dealing magic damage and forming a tether between herself and each target for 3 seconds, during which she gains bonus movement speed and the targets are revealed and slowed by 20%.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "200 / 275 / 350"
            },
            {
              "unit": "% AP",
              "values": "80"
            }
          ]
        },
        {
          "attribute": "Total Magic Damage",
          "modifiers": [
            {
              "values": "400 / 550 / 700"
            },
            {
              "unit": "% AP",
              "values": "160"
            }
          ]
        },
        {
          "attribute": "Bonus Movement Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "20 / 40 / 60"
            }
          ]
        }
      ]
    },
    {
      "description": "If a target does not break their tether by the end of its duration, they are dealt the same magic damage again and become stunned for a duration, during which they are revealed.",
      "leveling": [
        {
          "attribute": "Stun Duration",
          "modifiers": [
            {
              "unit": " seconds",
              "values": "1.5 / 1.75 / 2"
            }
          ]
        }
      ]
    },
    {
      "description": "An enemy champion within 575 units is required to cast this ability. The target does not have to be visible to be tethered by this ability."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Morgana/ability-icon/r",
  "notes": "Spell shield will block the tether's application and initial damage but not the aftereffects of one already applied.\nMorgana will turn to face southeast upon casting Soul Shackles.\nA circle indicator for Soul Shackles' maximum tether range is visible to Morgana and her tethered targets only.",
  "projectile": "FALSE",
  "resource": "Mana",
  "spellEffects": "aoe",
  "spellshieldable": "Special",
  "targeting": "Proximity",
  "tetherRadius": "625"
}
export default ability
