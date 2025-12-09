// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Help, Pix!",
  "affects": "Enemies / Allies / Self",
  "blurb": "Active:  Lulu can cast Help, Pix! on herself or a unit.",
  "castTime": "none",
  "cooldown": "10 / 9.5 / 9 / 8.5 / 8",
  "cost": "60 / 65 / 70 / 75 / 80",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Lulu can cast Help, Pix! on herself or an ally or enemy.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Enemy Cast:</span> Lulu sends Pix to the far side of the target enemy for 4 seconds, dealing magic damage and revealing them for the same duration.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "70 / 110 / 150 / 190 / 230"
            },
            {
              "unit": "% AP",
              "values": "50"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Self / Ally Cast:</span> Lulu sends Pix to the target ally for 6.25 seconds. If the target is a champion, they are granted a shield for 2.5 seconds.</p>",
      "leveling": [
        {
          "attribute": "Shield Strength",
          "modifiers": [
            {
              "values": "70 / 110 / 150 / 190 / 230"
            },
            {
              "unit": "% AP",
              "values": "50"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Lulu/ability-icon/e",
  "notes": "Help, Pix! can be self-cast.\nIf the player casts Help, Pix! on a non-champion target, the spell script will first search for a targetable allied or enemy champion within  75 radius around the target. If there is at least one, it'll apply the effects to the closest one instead of the initial target.\nPENDING FOR TEST: Allies or enemies or proximity take priortity?\nThis effect does not respect that the champion may not be visible to Lulu and not a valid target for normal selection for this reason. Therefore it can for instance apply the effects to stealthed enemy champions this way.(bug)\nSince the original cast did not target the champion, some effects (such as  Guardian) may behave incorrectly.(bug)\nIt is not known in which patch this effect was added.\n Spell shield and  Riposte will block the damage but Pix will still follow regardless.\nPix will continue to assist the target ally for the full duration even if the shield breaks (the same applies for the shield if the target ally leaves Pix's leash range).\nPix's  Glitterlance bolt can be fired while he is away from Lulu from his location and towards the cursor (effectively extending  Glitterlance's range).",
  "projectile": "FALSE",
  "resource": "Mana",
  "spellEffects": "spell",
  "spellshieldable": "special",
  "targeting": "Unit",
  "targetRange": "650"
}
export default ability
