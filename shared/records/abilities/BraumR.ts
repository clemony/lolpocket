// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Glacial Fissure",
  "width": "230 /  170",
  "affects": "Enemies",
  "castTime": "0.5",
  "cooldown": "120 / 100 / 80",
  "cost": "100",
  "damageType": "Magic damage",
  "effectRadius": "300 /  60 × 10",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Braum leaps into the air and slams his shield into the ground, creating a fissure from the impact that travels forth in the target direction, dealing magic damage to enemies within its path as well as those around Braum.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "150 / 300 / 450"
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
      "description": "The first target hit is knocked up for at least 0.6 seconds, increased if they are further away from Braum. All other enemies hit are knocked up for 0.6 seconds.",
      "leveling": [
        {
          "attribute": "Maximum Knockup Duration",
          "modifiers": [
            {
              "unit": " seconds",
              "values": "1 / 1.5 / 2"
            }
          ]
        }
      ]
    },
    {
      "description": "A field of ice is created along the fissure's path, lasting for 4 seconds and slowing enemies within the area every 0.25 seconds. The field disappears after the duration ends in the same order and speed it was created with.",
      "leveling": [
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
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Braum/ability-icon/r",
  "notes": "This ability will cast from wherever the caster is at the end of the cast time.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1400",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Direction"
}
export default ability
