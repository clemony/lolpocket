// Updated Patch 15.23.1 - 11/30/2025 12:24:02 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Arctic Assault",
  "affects": "Enemies",
  "blurb": "Active:  Sejuani  dashes to the target location, dealing magic damage and briefly  knocking up enemies she passes through. She will stop upon hitting an enemy  champion.",
  "castTime": "none",
  "collisionRadius": "75",
  "cooldown": "19 / 17.5 / 16 / 14.5 / 13",
  "cost": "70 / 75 / 80 / 85 / 90",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Bristle dashes to the target location until he collides with an enemy champion, dealing magic damage to enemies he passes through and knocking them up for 0.5 seconds.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "90 / 140 / 190 / 240 / 290"
            },
            {
              "unit": "% AP",
              "values": "60"
            }
          ]
        }
      ]
    },
    {
      "description": "Arctic Assault can be cast during her other abilities without cancelling them and vice versa."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Sejuani/ability-icon/q",
  "notes": "Champions will slightly be  knocked back, while minions and monsters will instead be slightly  pulled for a fixed distance.\nArctic Assault cannot  knock enemies over terrain.\nCasting  Flash during Arctic Assault will end the dash and affect enemies at the new location.\nUpon colliding with an enemy  champion, Sejuani will  attack them.",
  "resource": "Mana",
  "speed": "1000",
  "spellEffects": "Area of effect",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "650"
}
export default ability
