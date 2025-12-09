// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Phantom Undertow",
  "width": "110",
  "affects": "Self, Enemies",
  "blurb": "Active:  Pyke dashes in the target direction, leaving behind a phantom and becoming  ghosted.",
  "castTime": "none",
  "cooldown": "15 / 14 / 13 / 12 / 11",
  "cost": "40",
  "damageType": "Physical damage",
  "effectRadius": "110",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Pyke dashes in the target direction, leaving behind a Phantom. Pyke is ghosted while the Phantom is active.</p>"
    },
    {
      "description": "After 1 second, the Phantom homes back to Pyke to stun enemies around it and those it passes through along the way for 1.25 (+ 0.1 per 10 Lethality) seconds. Enemy champions hit also take physical damage.",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "100 / 150 / 200 / 250 / 300"
            },
            {
              "unit": "% bonus AD",
              "values": "100"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Pyke/ability-icon/e",
  "notes": "The  dash distance can be extended to up to 900 units (estimated) when targeting across terrain.\nLike most projectiles, the flying Phantom cannot hit targets whose  center is behind the position it originates at or beyond the position it catches up to Pyke at, but the spell can hit targets behind its origin as long as their  hitbox radius overlaps with the original unit Phantom's 110-radius check at the end of its lifespan.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "3000",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Direction",
  "targetRange": "550"
}
export default ability
