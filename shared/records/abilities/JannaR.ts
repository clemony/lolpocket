// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Monsoon",
  "affects": "Enemies, Allies",
  "castTime": "none",
  "cooldown": "130 / 115 / 100",
  "cost": "100",
  "effectRadius": "700",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Janna unleashes a blast that knocks back all nearby enemies to up to 875 units over 0.5 seconds based on their proximity, though not through terrain.</p>"
    },
    {
      "description": "Janna also channels for up to 3 seconds, healing herself and nearby allies every 0.25 seconds.",
      "leveling": [
        {
          "attribute": "Heal Per Tick",
          "modifiers": [
            {
              "values": "25 / 37.5 / 50"
            },
            {
              "unit": "% AP",
              "values": "12.5"
            }
          ]
        },
        {
          "attribute": "Total Heal",
          "modifiers": [
            {
              "values": "300 / 450 / 600"
            },
            {
              "unit": "% AP",
              "values": "150"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Janna/ability-icon/r",
  "notes": "The following table refers for interactions while Janna is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nInterrupts\n\n\nAbilities\n\nInterrupts\n\n\nMovement\n\nInterrupts\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
  "resource": "Mana",
  "spellshieldable": "true",
  "targeting": "Auto"
}
export default ability
