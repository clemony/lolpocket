// Updated Patch 15.23.1 - 11/30/2025 12:23:58 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Call of the Forge God",
  "width": "340",
  "affects": "Enemies / Elemental",
  "castTime": "0.5",
  "cooldown": "140 / 120 / 100",
  "cost": "100",
  "damageType": "Magic damage",
  "effectRadius": "3000 / 2550",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ornn sounds his horn, summoning a lava elemental at maximum range from the target direction that stampedes towards his casting position at increasing speed. The elemental deals magic damage to enemies it passes through and slows them for 2 seconds.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "125 / 175 / 225"
            },
            {
              "unit": "% AP",
              "values": "20"
            }
          ]
        },
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "40 / 50 / 60"
            }
          ]
        }
      ]
    },
    {
      "description": "Call of the Forge God can be recast after 1.25 seconds while the elemental is active."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Ornn dashes in the target direction, though not through terrain. If he collides with the elemental, he sends it stampeding in the same direction. The elemental deals the same damage to enemies it passes through and knocks them up and stuns them for 1 second, reduced to 0.5 seconds after the first enemy champion hit.</p>",
      "leveling": [
        {
          "attribute": "Total Magic Damage",
          "modifiers": [
            {
              "values": "250 / 350 / 450"
            },
            {
              "unit": "% AP",
              "values": "40"
            }
          ]
        }
      ]
    },
    {
      "description": "Each pass applies Brittle to targets for 3 seconds and can affect enemies only once. The elemental briefly grants sight around its trajectory as it travels."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Ornn/ability-icon/r",
  "notes": "Both casts count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nDespite this, the effects of both casts count as the same cast instance.\nCall of the Forge God cannot be recast while  grounded or  rooted.\n Brittle enemies without  Tenacity of their own will be  stunned for a total of 1.3 seconds.\n Spell shields may only block one pass.\nOrnn becomes locked out of all actions during the recast's dash and for 0.5 seconds afterwards.\nThis ability will cast from wherever the caster is at the start of the cast time.\n Displacement immunity will also resist the application of the  stun.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1600 / 450 / 1250",
  "spellEffects": "spellaoe",
  "spellshieldable": "Special",
  "targeting": "Direction",
  "targetRange": "300"
}
export default ability
