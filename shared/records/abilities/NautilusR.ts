// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "R",
  "name": "Depth Charge",
  "affects": "Enemies",
  "blurb": "Active:  Nautilus sends a Depth Charge that chases the target enemy champion. It creates eruptions in its wake that deal magic damage to enemies hit, as well as briefly  knocking up and  stunning them.",
  "castTime": "0.46",
  "cooldown": "120 / 100 / 80",
  "cost": "100",
  "damageType": "Magic damage",
  "effectRadius": "225 / 300 / 750",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nautilus sends out a Depth Charge that chases the target enemy champion, accelerating over time and creating eruptions every 0.264 seconds in its wake that also briefly grant sight of the area. Enemies hit by the eruptions are dealt magic damage, knocked up for 1 second, and stunned for a duration.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "125 / 175 / 225"
            },
            {
              "unit": "% AP",
              "values": "40"
            }
          ]
        },
        {
          "attribute": "Stun Duration",
          "modifiers": [
            {
              "unit": " seconds",
              "values": "1 / 1.5 / 2"
            }
          ]
        }
      ]
    },
    {
      "description": "Upon reaching the primary target, the Depth Charge erupts a final time at their location. The primary target takes increased damage, is stunned for the same duration, and knocked up for a modified duration.",
      "leveling": [
        {
          "attribute": "Increased Damage",
          "modifiers": [
            {
              "values": "150 / 275 / 400"
            },
            {
              "unit": "% AP",
              "values": "80"
            }
          ]
        },
        {
          "attribute": "Knock Up Duration",
          "modifiers": [
            {
              "unit": " seconds",
              "values": "1 / 1.5 / 2"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Nautilus/ability-icon/r",
  "notes": "Depth Charge starts in an offset from whichever direction Nautilus is facing at the end of the cast time.\nSince  Dredge Line's causes Nautilus to change his facing direction upon hitting a valid target, Depth Charge's starting point can be changed with a quick  Dredge Line + Depth Charge combo.\nEnemies a certain distance away from the charge / eruption are instead  knocked back.\nDepth Charge's final eruption will occur prematurely if the primary target moves more than 3000 units away from it.\nDepth Charge will not stop chasing if the target dies or becomes untargetable.\n Dredge Line will not override Depth Charge's  knock up.\n Displacement immunity will not resist the application of the  stun.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
  "projectile": "FALSE",
  "resource": "Mana",
  "speed": "275 + 466.67 per second",
  "spellEffects": "aoe",
  "spellshieldable": "true",
  "targeting": "Unit",
  "targetRange": "825"
}
export default ability
