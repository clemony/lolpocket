// Updated Patch 16.1 - 01/29/2026 04:27:18 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "R",
  "name": "Stranglethorns",
  "affects": "Enemies",
  "blurb": "Active:  Zyra summons a monstrous thicket at the target location that deals magic damage to enemies hit as it expands.",
  "castTime": "0.25",
  "cooldown": "110 / 100 / 90",
  "cost": "100",
  "damageType": "Magic damage",
  "effectRadius": "560",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Zyra summons a monstrous thicket at the target location that deals magic damage to enemies hit as it expands.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "200 / 300 / 400"
            },
            {
              "unit": "% AP",
              "values": "70"
            }
          ]
        }
      ]
    },
    {
      "description": "After 2 seconds, the thicket snaps upward to knock up enemies within for 1 second."
    },
    {
      "description": "Plants hit by the thicket become enraged, restoring 50% of their current health, increasing their maximum health by 50%, gaining 25% increased size and refreshing their duration while the thicket expands. Additionally they attack in a flurry, launching two shots per attack, dealing [ 150% damage per flurry. ][ 75% damage per shot. ]"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Zyra/ability-icon/r",
  "notes": "Plants grown during the 2 seconds prior to the displacement will also be enraged.\n Plants already grown before Stranglethorns is cast will have their duration refreshed if they are inside the area of effect.\nStranglethorns' buff on  Plants lasts 10 seconds, however the Plants normally die naturally after 8 seconds.",
  "resource": "Mana",
  "spellEffects": "Area of effect",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "700"
}
  export default ability
