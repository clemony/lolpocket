// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Crescent Strike",
  "affects": "Enemies",
  "blurb": "Active:  Diana unleashes a bolt of lunar energy that deals magic damage to enemies hit in an arc before exploding at the target location.",
  "castTime": "0.25",
  "cooldown": "8 / 7.5 / 7 / 6.5 / 6",
  "cost": "50",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Diana unleashes a bolt of lunar energy that travels in a counter-clockwise arc before exploding at the target location, granting sight of the area for 0.5 seconds and dealing magic damage to enemies hit and afflicting them with Moonlight for 3 seconds, during which they are revealed.</p>",
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
      "description": "Lunar Rush interacts with Moonlight."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Diana/ability-icon/q",
  "notes": "Even if the target  spell shields the bolt, they may still be damaged by the explosion. Moonlight is not applied to the protected target if blocked.\nThe bolt consists of two  projectiles with slightly different trajectories.\nThis ability will cast from wherever the caster is at the end of the cast time.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1900 / 2100",
  "spellEffects": "aoe",
  "spellshieldable": "special",
  "targeting": "Location",
  "targetRange": "900"
}
export default ability
