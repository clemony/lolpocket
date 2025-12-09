// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Primordial Burst",
  "affects": "Enemies",
  "blurb": "Active:  Veigar sends a primordial burst at the target enemy champion that deals magic damage based on their missing health.",
  "castTime": "0.25",
  "cooldown": "100 / 80 / 60",
  "cost": "100",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Veigar sends a primordial burst at the target enemy champion that deals magic damage, increased by 0% - 100% (based on target's missing health).</p>",
      "leveling": [
        {
          "attribute": "Minimum Magic Damage",
          "modifiers": [
            {
              "values": "175 / 250 / 325"
            },
            {
              "tooltip": "Scaling per rank:\n65 / 70 / 75% AP",
              "unit": "% AP",
              "values": "65 - 75"
            }
          ]
        },
        {
          "attribute": "Maximum Magic Damage",
          "modifiers": [
            {
              "values": "350 / 500 / 650"
            },
            {
              "tooltip": "Scaling per rank:\n130 / 140 / 150% AP",
              "unit": "% AP",
              "values": "130 - 150"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Veigar/ability-icon/r",
  "notes": "If the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
  "projectile": "TRUE",
  "resource": "Mana",
  "spellEffects": "Single target",
  "spellshieldable": "True",
  "targeting": "Unit",
  "targetRange": "650"
}
export default ability
