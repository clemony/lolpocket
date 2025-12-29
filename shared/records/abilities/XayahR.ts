// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Featherstorm",
  "affects": "Enemies",
  "angle": "30°",
  "blurb": "Active:  Xayah leaps into the air and briefly becomes  ghosted and  untargetable, then throws five Feathers in a cone in the target direction that each deal physical damage to enemies hit.",
  "castTime": "none",
  "cooldown": "140 / 120 / 100",
  "cost": "100",
  "damageType": "Physical damage",
  "effectRadius": "1060 /  1000",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Xayah leaps into the air, becoming ghosted and untargetable for 1.5 seconds. After 1 second, she shoots 5 Feathers in a cone in the target direction that deal physical damage to enemies hit.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "200 / 300 / 400"
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
      "description": "Xayah is unable to basic attack or cast abilities during Featherstorm, but can still move."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Xayah/ability-icon/r",
  "notes": "The individual missiles have 1100 range but start slightly behind Xayah, reducing their total range.\nThe following table refers for interactions while Xayah is in Featherstorm:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\nAll summoner spells are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
  "projectile": "SPECIAL",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Direction"
}
export default ability
