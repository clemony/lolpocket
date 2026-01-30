// Updated Patch 16.1 - 01/29/2026 04:27:14 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "Q",
  "name": "Baleful Strike",
  "width": "140",
  "affects": "Enemies",
  "blurb": "Active:  Veigar blasts a dark bolt in the target direction that deals magic damage to the first two enemies hit.",
  "castTime": "0.25",
  "cooldown": "6 / 5.5 / 5 / 4.5 / 4",
  "cost": "30 / 35 / 40 / 45 / 50",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Veigar blasts a dark bolt in the target direction that deals magic damage to the first two enemies hit.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "80 / 120 / 160 / 200 / 240"
            },
            {
              "tooltip": "Scaling per rank:\n50 / 55 / 60 / 65 / 70% AP",
              "unit": "% AP",
              "values": "50 - 70"
            }
          ]
        }
      ]
    },
    {
      "description": "If this kills an enemy, it generates 1 stack of Phenomenal Evil, tripled against large minions and monsters."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Veigar/ability-icon/q",
  "notes": "Killing two enemy champions with Baleful Strike grants +14 AP.\nBaleful Strike will only grant stacks of  Phenomenal Evil from its bolt, and not any additional effect that would kill other units from the same cast.\nThe stacks are added immediately on enemy kill (on next game tick).\nIf the first target was killed, the second hit may deal 1 damage more on enemies further along the missile's flight path.\nThis ability will cast from wherever the caster is at the end of the cast time.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "2200",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Direction",
  "targetRange": "1050 /  990"
}
  export default ability
