// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "E",
  "name": "Void Ooze",
  "width": "240",
  "affects": "Enemies",
  "blurb": "Active:  Kog'Maw spews a gob of ooze in the target direction that deals magic damage to enemies hit. It leaves a field of ooze in its wake for a few seconds that  slows enemies.",
  "castTime": "0.25",
  "cooldown": "12",
  "cost": "40 / 55 / 70 / 85 / 100",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kog'Maw spews a gob of ooze in the target direction that deals magic damage to enemies hit.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "70 / 110 / 150 / 190 / 230"
            },
            {
              "unit": "% AP",
              "values": "65"
            }
          ]
        }
      ]
    },
    {
      "description": "A field of ooze is created in its wake for 3 seconds, slowing enemies within the area every 0.25 seconds.",
      "leveling": [
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "40 / 45 / 50 / 55 / 60"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/KogMaw/ability-icon/e",
  "notes": "This ability will cast from wherever the caster is at the start of the cast time.\nPENDING FOR TEST:: The missile leaves a blob of ooze on the ground every 125 units traveled.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1400",
  "spellEffects": "Area of effect",
  "spellshieldable": "True",
  "targeting": "Direction"
}
  export default ability
