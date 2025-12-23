// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "W",
  "name": "Snack Attack",
  "affects": "Enemies, Self",
  "blurb": "Active:  Briar empowers her next attack during  Blood Frenzy to take a bite out of the target enemy. The attack gains increased  range, deals bonus physical damage based on the target's missing health and  heals Briar for a portion of the damage dealt.",
  "castTime": "none",
  "cooldown": "14 / 13 / 12 / 11 / 10",
  "cost": "0",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Briar empowers her next basic attack within 5 seconds during Blood Frenzy to take a bite out of the target enemy, gaining 50 bonus range, dealing bonus physical damage and healing her for 5% of her maximum health plus a percentage of the post-mitigation damage dealt.</p>",
      "leveling": [
        {
          "attribute": "Bonus Physical Damage",
          "modifiers": [
            {
              "values": "5 / 20 / 35 / 50 / 65"
            },
            {
              "unit": "% AD",
              "values": "5"
            },
            {
              "unit": "% (+ 2.5% per 100 bonus AD) of the target's missing health",
              "values": "9"
            }
          ]
        },
        {
          "attribute": "Heal Percentage",
          "modifiers": [
            {
              "unit": "%",
              "values": "24 / 28 / 32 / 36 / 40"
            }
          ]
        }
      ]
    },
    {
      "description": "Snack Attack deals 110% damage against minions and monsters, with the damage based on the target's health ratio being capped at 400.",
      "leveling": [
        {
          "attribute": "Non-Champion Bonus Damage",
          "modifiers": [
            {
              "values": "5.5 / 22 / 38.5 / 55 / 71.5"
            },
            {
              "unit": "% AD",
              "values": "5.5"
            },
            {
              "unit": "% (+ 2.75% per 100 bonus AD) of the target's missing health",
              "values": "9.9"
            }
          ]
        }
      ]
    },
    {
      "description": "Snack Attack resets Briar's basic attack timer."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Briar/ability-icon/w",
  "notes": "Snack Attack can only be used during  Blood Frenzy; if the frenzy ends at any point, the empowered attack will be lost immediately.\nSnack Attack can be cast while Briar is  charmed or  taunted.(bug)",
  "spellEffects": "proc",
  "spellshieldable": "false",
  "targeting": "Auto"
}
export default ability
