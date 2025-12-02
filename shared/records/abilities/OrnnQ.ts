// Updated Patch 15.23.1 - 11/30/2025 12:23:58 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Volcanic Rupture",
  "width": "130",
  "affects": "Enemies",
  "blurb": "Active:  Ornn sends a fissure in the target direction that deals physical damage and  slows enemies hit for a short time.",
  "castTime": "0.25",
  "cooldown": "9 / 8.5 / 8 / 7.5 / 7",
  "cost": "45",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ornn sends a fissure in the target direction that deals physical damage to enemies hit and slows them by 40% for 2 seconds.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "20 / 45 / 70 / 95 / 120"
            },
            {
              "unit": "% AD",
              "values": "110"
            }
          ]
        }
      ]
    },
    {
      "description": "The fissure stops at maximum range or 200 units behind the first enemy champion struck. After a 1.125-second delay, a magma pillar then erupts to knock aside enemies, though not through terrain, and linger as impassible terrain for 4 seconds."
    },
    {
      "description": "The pillar will not expire while Ornn is charging."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Ornn/ability-icon/q",
  "notes": "The fissure will move an 200 units beyond the first champion it hits, not exceeding the maximum range of the ability. It can still damage additional targets.\nIf launched in a wall, pillar will try to appear on the other side of the wall, if it cannot the pillar will be destroyed.\n Spell shield will not prevent the  knock aside from the magma pillar forming.\nThis ability will cast from wherever the caster is at the start of the cast time.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1800",
  "spellEffects": "spellaoe",
  "spellshieldable": "special",
  "targeting": "Direction",
  "targetRange": "750"
}
export default ability
