// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Curse of the Sad Mummy",
  "affects": "Enemies",
  "blurb": "Active:  Amumu entangles nearby enemies in bandages, dealing magic damage as well as briefly  knocking down and  stunning them.",
  "castTime": "0.25",
  "cooldown": "150 / 125 / 100",
  "cost": "100 / 150 / 200",
  "damageType": "Magic damage",
  "effectRadius": "550",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Amumu entangles nearby enemies in bandages, dealing magic damage as well as knocking them down and stunning them for 1.5 seconds.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "200 / 300 / 400"
            },
            {
              "unit": "% AP",
              "values": "80"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Amumu/ability-icon/r",
  "notes": "This ability will cast from wherever the caster is at the end of the cast time.",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Auto"
}
export default ability
