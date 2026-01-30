// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "Q",
  "name": "Winds of War",
  "width": "120",
  "affects": "Enemies",
  "blurb": "Active:  Galio fires two windblasts that converge to the target location, dealing magic damage to enemies hit.",
  "castTime": "0.25",
  "cooldown": "11 / 10 / 9 / 8 / 7",
  "cost": "70 / 75 / 80 / 85 / 90",
  "damageType": "Magic damage",
  "effectRadius": "150",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Galio creates two windblasts 250 units to either side of him that arc out before converging to the target location, dealing magic damage to all enemies they pass through.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "70 / 105 / 140 / 175 / 210"
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
      "description": "When the blasts meet, the gusts form a tornado that persists for 2 seconds, slowly moving forward and dealing magic damage equal to[ 2% (+ 1% per 100 AP) of target's maximum health every 0.5 seconds ][ 8% (+ 4% per 100 AP) of target's maximum health over the duration ]to enemies within the area, capped at[ 150 per tick ][ 600 total ]against monsters."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Galio/ability-icon/q",
  "notes": "Deals  area damage on the gust and applies  persistent area damage for the tornado.\n Spell shield will block the gusts damage but not the tornado's.\n Yasuo's  Wind Wall and  Braum's  Unbreakable can block each windblast individually.\nThe tornado will not form if only one windblast reaches the target location.\nThis ability will cast from wherever the caster is at the end of the cast time.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1400 / 50",
  "spellEffects": "special",
  "spellshieldable": "Special",
  "targeting": "Location",
  "targetRange": "825"
}
  export default ability
