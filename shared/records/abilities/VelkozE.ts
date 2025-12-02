// Updated Patch 15.23.1 - 11/30/2025 12:24:09 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Tectonic Disruption",
  "affects": "Enemies",
  "blurb": "Active:  Vel'Koz hurls a disruptive anomaly at the target location that deals magic damage to enemies hit, briefly  knocks them up and  stuns them.",
  "castTime": "0.25",
  "cooldown": "12 / 11.5 / 11 / 10.5 / 10",
  "cost": "50 / 55 / 60 / 65 / 70",
  "damageType": "Magic damage",
  "effectRadius": "225",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Vel'Koz hurls a disruptive anomaly that lands to the target location after 0.25 - 0.55 (based on cast distance) seconds, dealing magic damage to enemies hit and knocking them up and stunning them for 0.75 seconds, as well as granting sight of the area briefly.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "70 / 100 / 130 / 160 / 190"
            },
            {
              "unit": "% AP",
              "values": "30"
            }
          ]
        }
      ]
    },
    {
      "description": "If Tectonic Disruption is cast in close proximity of Vel'Koz, the anomaly will also slightly knock back enemies hit in the direction of the cast."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Velkoz/ability-icon/e",
  "notes": "The required proximity for the  knock back is relative to Vel'Koz's position when casting and not his current one.\nWhile the effect is fully prevented by blocking the missile (e.g. with  Unbreakable and  Wind Wall), the missile may not be destroyed visually.(bug)\nThe area of effect indicator appears at the end of the cast time.\nIt will persist even if the cast cancels (e.g. Vel'Koz dies before cast time completes) despite the projectile not firing.\n Displacement immunity will also resist the application of the  stun.\nThis ability will cast from wherever the caster is at the start of the cast time.",
  "projectile": "SPECIAL",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "800"
}
export default ability
