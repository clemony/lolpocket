// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Crippling Strike",
  "affects": "Enemies, Structures",
  "blurb": "Active:  Darius' next  basic attack within a few seconds deals increased physical damage and  slows the target.",
  "castTime": "none",
  "cooldown": "5",
  "cost": "40",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Darius empowers his next basic attack within 4 seconds to have an uncancellable windup, gain 25 bonus range, deal bonus physical damage and slow the target by 90% for 1 second. This damage is affected by critical strike modifiers.</p>",
      "leveling": [
        {
          "attribute": "Bonus Physical Damage",
          "modifiers": [
            {
              "unit": "% AD",
              "values": "40 / 45 / 50 / 55 / 60"
            }
          ]
        }
      ]
    },
    {
      "description": "If this attack kills the target, half of Crippling Strike's cooldown is reduced and its mana cost is refunded."
    },
    {
      "description": "Crippling Strike resets Darius' basic attack timer."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Darius/ability-icon/w",
  "notes": "Crippling Strike deals  basic damage but will also trigger  spell effects by also being tagged as  spell damage.\nThis includes the  basic attack itself.\n Spell shield will not block the damage.\nThe attack's animation can be cancelled by casting  Decimate, but the attack will still land.\nThe cooldown reduction and mana refund will not trigger when killing jungle plants.",
  "resource": "Mana",
  "spellEffects": "Special",
  "spellshieldable": "special",
  "targeting": "Auto"
}
export default ability
