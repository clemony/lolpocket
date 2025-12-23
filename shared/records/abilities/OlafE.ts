// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "E",
  "name": "Reckless Swing",
  "affects": "Enemies",
  "blurb": "Active:  Olaf consumes  health to strike thunder onto the target enemy, dealing true damage. If this kills the target, Olaf  heals the  health cost.",
  "castTime": "0.25 : 0.175 (based on bonus attack speed)",
  "cooldown": "11 / 10 / 9 / 8 / 7",
  "cost": "0",
  "damageType": "True damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Olaf strikes thunder onto the target enemy, dealing true damage.</p>",
      "leveling": [
        {
          "attribute": "True Damage",
          "modifiers": [
            {
              "values": "70 / 115 / 160 / 205 / 250"
            },
            {
              "unit": "% AD",
              "values": "50"
            }
          ]
        }
      ]
    },
    {
      "description": "If Reckless Swing kills the target, Olaf heals himself equal to the health cost."
    },
    {
      "description": "Basic attacks reduce Reckless Swing's cooldown by 1 second, increased to 2 against monsters."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Olaf/ability-icon/e",
  "notes": "The health cost is equal to 30% of the total damage dealt by Reckless Swing.\nReckless Swing can be cast even if Olaf doesn't have the sufficient amount of health to pay for the health cost.\nAs with all abilities with health costs, Reckless Swing will not reduce Olaf's health below 1.\nReckless Swing's health refund is considered a  heal therefore it is affected by healing modifiers.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).\nOlaf will also not receive the benefits from killing an enemy if this canceling takes place very shortly before the attack hits the invalidated target, but Reckless Swing's effect will be consumed.(bug)",
  "resource": "Health",
  "spellEffects": "spell",
  "spellshieldable": "True",
  "targeting": "Unit",
  "targetRange": "325"
}
export default ability
