// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "W",
  "name": "Wind Wall",
  "affects": "None",
  "blurb": "Active:  Yasuo raises a wind wall that drifts in the target direction for a few seconds, blocking all enemy  projectiles that hit it.",
  "castTime": "0.013",
  "cooldown": "25 / 23 / 21 / 19 / 17",
  "cost": "0",
  "effectRadius": "300",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Yasuo raises a wall of wind in the target direction for 4 seconds that destroys all hostile non- turret projectiles that collide with it and grants sight of its surroundings.</p>",
      "leveling": [
        {
          "attribute": "Wall Width",
          "modifiers": [
            {
              "values": "320 / 390 / 460 / 530 / 600"
            }
          ]
        }
      ]
    },
    {
      "description": "The wall travels in the targeted direction over the first 0.6 seconds, then drifts forward another 50 units over the remaining duration."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Yasuo/ability-icon/w",
  "notes": "Wind Wall grants  sight in a small static area in front of the cast location.\nWind Wall starts blocking projectiles on-cast (despite not being fully formed).\nWind Wall travels via a missile, and thus stops upon colliding with an enemy Wind Wall.\nYasuo can move during Wind Wall's cast time.",
  "projectile": "SPECIAL",
  "targeting": "Direction"
}
export default ability
