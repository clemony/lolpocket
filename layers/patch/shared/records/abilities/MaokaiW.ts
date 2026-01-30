// Updated Patch 16.1 - 01/29/2026 04:26:53 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "W",
  "name": "Twisted Advance",
  "affects": "Enemies",
  "blurb": "Active:  Maokai  dashes to the target enemy while being  untargetable, dealing magic damage and briefly  rooting them upon arrival.",
  "castTime": "none",
  "cooldown": "14 / 13 / 12 / 11 / 10",
  "cost": "60",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Maokai dashes to the target enemy while being untargetable. Upon arrival, he deals magic damage and roots them for a duration.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "60 / 85 / 110 / 135 / 160"
            },
            {
              "unit": "% AP",
              "values": "40"
            }
          ]
        },
        {
          "attribute": "Root Duration",
          "modifiers": [
            {
              "unit": " seconds",
              "values": "1 / 1.1 / 1.2 / 1.3 / 1.4"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Maokai/ability-icon/w",
  "notes": "Maokai will track the target if they change locations.\nHe will dash to the target's previous location without applying Twisted Advance's effects if the target is too far away or moves beyond 2000 units.\nHe will stop dashing if the target is too far away the moment the dash begins.\nTwisted Advance will fail to deal damage and apply the  root if the target is  untargetable upon arrival.",
  "resource": "Mana",
  "speed": "1300",
  "spellEffects": "spell",
  "spellshieldable": "True",
  "targeting": "Unit",
  "targetRange": "525"
}
  export default ability
