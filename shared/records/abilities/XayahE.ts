// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "E",
  "name": "Bladecaller",
  "width": "160",
  "affects": "Enemies",
  "blurb": "Active:  Xayah recalls all Feathers to shoot back to her, each dealing physical damage to enemies hit based on her  critical strike chance.",
  "castTime": "none",
  "cooldown": "12 / 11 / 10 / 9 / 8",
  "cost": "30",
  "damageType": "Physical damage",
  "effectRadius": "Global",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Xayah recalls all planted Feathers to shoot back to her, each dealing physical damage to enemies hit, increased by 0% - 75% (based on critical strike chance). Bladecaller deals 50% damage to minions.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage Per Feather",
          "modifiers": [
            {
              "values": "55 / 65 / 75 / 85 / 95"
            },
            {
              "unit": "% bonus AD",
              "values": "60"
            }
          ]
        },
        {
          "attribute": "Minion Damage Per Feather",
          "modifiers": [
            {
              "values": "27.5 / 32.5 / 37.5 / 42.5 / 47.5"
            },
            {
              "unit": "% bonus AD",
              "values": "30"
            }
          ]
        }
      ]
    },
    {
      "description": "An enemy takes 100% - 10% (based on previous feathers hit) damage from a Feather."
    },
    {
      "description": "A target hit by at least three Feathers is rooted for 1.25 seconds."
    },
    {
      "description": "A planted Feather is required to cast this ability. Enemies can be hit by an individual Feather only once per pass."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Xayah/ability-icon/e",
  "notes": "Feathers that are 'in flight' will be called to Xayah too, but only once they've landed normally first.\n Spell shield will only block a single instance of damage.\nThis ability cannot be ranked at Level 1.\nThe damage dealt by Bladecaller follows a diminishing returns formula not mentioned in the ability's description, successively reducing extra damage from feathers beyond the first.\nThis formula is:\nFor feathers <=19: Damage of one feather × (n − 0.05 × (n − 1) ÷ 2 × n) where n stands for the number of feathers hit.\nFor feathers >=20: Damage of one feather × (19 − 0.05 × (19 − 1) ÷ 2 × 19 + 0.1 × (n − 19)) where n stands for the number of feathers hit.\nFor example, at rank 1 Bladecaller deals 55 : 574.75 (based on feathers hit).\nBladecaller cannot be cast without a Feather on the ground.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "4000",
  "spellEffects": "spellaoe",
  "spellshieldable": "special",
  "targeting": "Auto"
}
export default ability
