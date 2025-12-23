// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "E",
  "name": "Disdain",
  "affects": "Enemies",
  "blurb": "Active:  Urgot  shields himself for a few seconds and  dashes in the target direction, dealing physical damage and briefly  stunning enemies hit,  knocking them aside.",
  "castTime": "0.45",
  "cooldown": "16 / 15.5 / 15 / 14.5 / 14",
  "cost": "60 / 70 / 80 / 90 / 100",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Urgot grants himself a shield for 4 seconds.</p>",
      "leveling": [
        {
          "attribute": "Shield Strength",
          "modifiers": [
            {
              "values": "55 / 75 / 95 / 115 / 135"
            },
            {
              "unit": "% bonus AD",
              "values": "135"
            },
            {
              "unit": "% bonus health",
              "values": "13.5"
            }
          ]
        }
      ]
    },
    {
      "description": "After the cast time, Urgot dashes in the target direction, though not through terrain, dealing physical damage to enemies he passes through, knocking them aside and stunning them for 1 second.",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "90 / 120 / 150 / 180 / 210"
            },
            {
              "unit": "% bonus AD",
              "values": "100"
            }
          ]
        }
      ]
    },
    {
      "description": "Urgot will stop upon hitting an enemy champion, stunning them for 1.5 seconds and, after 0.25 seconds, also flinging them to the location 100 units behind him, though not through terrain."
    },
    {
      "description": "Purge can be cast during the dash."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Urgot/ability-icon/e",
  "notes": "Urgot turns around when tossing an enemy over him, always facing his victim.\nThe target will be  flung to the location behind Urgot over 0.5 seconds given that they do not move nor are moved from the position at which they collided with him while  stunned.\nDisdain prevents  Purge from firing for 1.25 seconds.\nThe range indicator length is 475 units, but the dash only moves Urgot 450 units.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe  shield is granted at the start of the cast time while the  dash begins after.\nThe  fling will occur after 0.25 seconds regardless of how far away the target is.\n Displacement immunity will not resist the application of the  stun.",
  "resource": "Mana",
  "speed": "1200 + 100% movement speed",
  "spellEffects": "Area of Effect",
  "spellshieldable": "True",
  "targeting": "Direction",
  "targetRange": "475 / 450"
}
export default ability
