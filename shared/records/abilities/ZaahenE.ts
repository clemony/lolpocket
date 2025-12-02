// Updated Patch 15.23.1 - 11/30/2025 12:24:14 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Aureate Rush",
  "affects": "Self, Enemies",
  "blurb": "Active:  Zaahen  dashes to the target location. Upon arrival, he flourishes his glaive to deal physical damage to nearby enemies.",
  "castTime": "none",
  "cooldown": "10 / 9.5 / 9 / 8.5 / 8",
  "cost": "40",
  "damageType": "Other damage",
  "effectRadius": "200 / 375",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Zaahen dashes to the target location. Upon arrival, he flourishes his glaive to deal physical damage to nearby enemies.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "40 / 60 / 80 / 100 / 120"
            },
            {
              "unit": "% bonus AD",
              "values": "50"
            }
          ]
        }
      ]
    },
    {
      "description": "Enemies hit by the outer edge are dealt increased physical damage and bonus magic damage, with the latter capped at 400 against monsters.",
      "leveling": [
        {
          "attribute": "Increased Physical Damage",
          "modifiers": [
            {
              "values": "60 / 90 / 120 / 150 / 180"
            },
            {
              "unit": "% bonus AD",
              "values": "100"
            }
          ]
        },
        {
          "attribute": "Bonus Magic Damage",
          "modifiers": [
            {
              "unit": "% of the target's maximum health",
              "values": "4 / 5 / 6 / 7 / 8"
            }
          ]
        }
      ]
    },
    {
      "description": "Aureate Rush deals 50 bonus physical damage against monsters."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Zaahen/ability-icon/e",
  "notes": "The dash does not have a minimum cast distance.\nThe following table refers for interactions while Zaahen is dashing:\nIf the dash is interrupted, Zaahen will not proceed to deal damage.\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n The Darkin Glaive and its  recast are usable.  Dreaded Return and  Grim Deliverance are disabled.\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nAll the other item-actives are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Hextech Rocketbelt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Teleport  Recall  Mark  Dash\n\n\nDisabled\n\n Hexflash\n\n\nInterrupted by\n\n Flash\n\n\nInterrupted by\n\nDeath",
  "resource": "Mana",
  "speed": "900",
  "spellEffects": "spellaoe",
  "spellshieldable": "true",
  "targeting": "Location",
  "targetRange": "350"
}
export default ability
