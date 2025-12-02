// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Vanguard's Edge",
  "width": "320",
  "affects": "Enemies",
  "blurb": "Active:  Irelia launches a barrage of blades in the target direction that expand outward upon hitting an enemy champion, dealing magic damage to enemies hit.",
  "castTime": "0.4",
  "cooldown": "125 / 105 / 85",
  "cost": "100",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Irelia launches a barrage of blades in the target direction, expanding outward upon hitting an enemy champion, dealing magic damage to all enemies hit and revealing them for 1 second.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "125 / 200 / 275"
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
      "description": "After expanding, the blades drop on the ground, knocking all enemy units away from them, though not rendering them airborne, and forming a spade-shaped perimeter around the enemy champion hit for 2.5 seconds that grants sight of its surroundings. Enemies that pass through the blades for the first time are dealt the same magic damage and are slowed by 90% for 1.5 seconds."
    },
    {
      "description": "The perimeter will point at the same angle Irelia casted it from, but based on the target's center."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Irelia/ability-icon/r",
  "notes": "Enemies that cross the perimeter are not marked Unsteady.\nThis ability will cast from wherever the caster is at the end of the cast time.\nIn addition to its  projectile, Vanguard's Edge will check for enemy champions within a  90-unit radius area from the projectile's origin point.\nThe projectile interacts with projectile-blocking effects but the area check doesn't.\nThe blades will still expand if the champion hit by the blades is protected by a  spell shield.\nThe  sight is granted in a 1350 unit radius at the location of the enemy champion at the time of being hit and can be blocked by terrain.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "2000",
  "spellEffects": "spellaoe",
  "spellshieldable": "special",
  "targeting": "Direction",
  "targetRange": "1000"
}
export default ability
