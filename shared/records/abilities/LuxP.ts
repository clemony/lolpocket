// Updated Patch 15.24.1 - 12/26/2025 07:04:00 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Illumination",
  "affects": "Enemies",
  "blurb": "Innate:  Lux's abilities apply a mark to enemies hit for a few seconds. Her basic attacks and  Final Spark consume the mark to deal bonus magic damage.",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Lux's abilities apply a mark to enemies hit for 6 seconds, refreshing on subsequent hits. Lux's basic attacks and Final Spark consume the mark to deal 30 - 200 (based on level) (+ 30% AP) bonus magic damage.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Lux/ability-icon/p",
  "notes": "Starting an attack windup against a target with a mark that is about to expire refreshes its duration to 0.25 seconds. Casting  Final Spark refreshes the marks of all marked enemies to 1.25 seconds if they are within 5000 units of the ability's casting position and have a mark with a remaining duration of less than 1 second.\n Spell shield prevents  Final Spark from consuming the mark.\nThe on-hit damage from Illumination via basic attack cannot be blocked by spell shield.\nIllumination's trigger from a basic attack can be  blocked (bonus damage is negated and the mark will still be consumed).\nPENDING FOR TEST:: Parry interactions ( dodge,  blind).",
  "spellEffects": "Proc",
  "spellshieldable": "special",
  "targeting": "Passive"
}
export default ability
