// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "E",
  "name": "Dazzle",
  "width": "140",
  "affects": "Enemies",
  "blurb": "Active:  Taric winds up over a brief moment, then projects a beam of starlight in the target direction that briefly  stuns enemies hit, dealing magic damage based on his bonus armor.",
  "castTime": "none",
  "cooldown": "16 / 15 / 14 / 13 / 12",
  "cost": "40",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Taric winds up over 1 second, granting ghosting to nearby units, then projects a beam of starlight in the target direction that deals magic damage to enemies hit and stuns them for 1.5 seconds.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "90 / 130 / 170 / 210 / 250"
            },
            {
              "unit": "% AP",
              "values": "50"
            },
            {
              "unit": "% bonus armor",
              "values": "50"
            }
          ]
        }
      ]
    },
    {
      "description": "Taric can move during Dazzle."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Taric/ability-icon/e",
  "notes": "Dazzle will aim towards the target direction on-cast when firing from both his and his  Bastion's positions.",
  "projectile": "FALSE",
  "resource": "Mana",
  "spellEffects": "Area of effect",
  "spellshieldable": "True",
  "targeting": "Direction"
}
export default ability
