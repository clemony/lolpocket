// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Winter's Wrath",
  "width": "150",
  "affects": "Enemies",
  "angle": "70°",
  "blurb": "Active:  Sejuani swings her flail in a cone in the target direction that deals physical damage to enemies hit,  knocking back  minions and  monsters.",
  "castTime": "1",
  "cooldown": "9 / 8 / 7 / 6 / 5",
  "cost": "65",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> After 0.25 seconds into the cast time, Sejuani swings her flail in a cone in the target direction that deals physical damage to enemies hit and knocks back minions and monsters hit, though not through terrain.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "5 / 15 / 25 / 35 / 45"
            },
            {
              "unit": "% AP",
              "values": "20"
            },
            {
              "unit": "% of her maximum health",
              "values": "4"
            }
          ]
        }
      ]
    },
    {
      "description": "After the cast time, Sejuani lashes out with her flail in a line in the same direction, dealing physical damage to enemies hit and slowing them by 75% for 0.25 seconds.",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "5 / 25 / 45 / 65 / 85"
            },
            {
              "unit": "% AP",
              "values": "60"
            },
            {
              "unit": "% of her maximum health",
              "values": "8"
            }
          ]
        },
        {
          "attribute": "Total Physical Damage",
          "modifiers": [
            {
              "values": "10 / 40 / 70 / 100 / 130"
            },
            {
              "unit": "% AP",
              "values": "80"
            },
            {
              "unit": "% of her maximum health",
              "values": "12"
            }
          ]
        }
      ]
    },
    {
      "description": "Sejuani can move during Winter's Wrath's cast time."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Sejuani/ability-icon/w",
  "notes": "Spell shields will block only a single instance of damage - either the swing or the lash.\nThis ability will cast from wherever the caster is at the end of the cast time.\nBoth swings will strike in the cast direction, but the second swing will do so from Sejuani's location at the end of the cast time.",
  "projectile": "FALSE",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "spellshieldable": "Special",
  "targeting": "Direction",
  "targetRange": "600"
}
export default ability
