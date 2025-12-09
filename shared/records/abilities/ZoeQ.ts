// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Paddle Star!",
  "width": "100 / 140",
  "affects": "Enemies",
  "blurb": "Active:  Zoe shoots a star in the target direction that explodes upon hitting an enemy, dealing magic damage to nearby enemies hit based on the distance travelled.",
  "castTime": "0.25 / None",
  "cooldown": "8.5 / 8 / 7.5 / 7 / 6.5",
  "cost": "40 / 45 / 50 / 55 / 60",
  "damageType": "Magic damage",
  "effectRadius": "180",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Zoe shoots a star in the target direction that explodes upon hitting an enemy, dealing magic damage to nearby enemies hit. The total damage is increased by 0% - 150% (based on distance traveled).</p>",
      "leveling": [
        {
          "attribute": "Minimum Magic Damage",
          "modifiers": [
            {
              "values": "2 / 4.82 / 7.65 / 10.47 / 13.29 / 16.12 / 18.94 / 21.76 / 24.59 / 27.41 / 30.24 / 33.06 / 35.88 / 38.71 / 41.53 / 44.35 / 47.18 / 50"
            },
            {
              "values": "50 / 80 / 110 / 140 / 170"
            },
            {
              "unit": "% AP",
              "values": "60"
            }
          ]
        },
        {
          "attribute": "Maximum Magic Damage",
          "modifiers": [
            {
              "values": "5 / 12.06 / 19.12 / 26.18 / 33.24 / 40.29 / 47.35 / 54.41 / 61.47 / 68.53 / 75.59 / 82.65 / 89.71 / 96.76 / 103.82 / 110.88 / 117.94 / 125"
            },
            {
              "values": "125 / 200 / 275 / 350 / 425"
            },
            {
              "unit": "% AP",
              "values": "150"
            }
          ]
        }
      ]
    },
    {
      "description": "The star lingers at maximum range for 1 second, during which Paddle Star! can be recast after 0.25 seconds in the duration."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Zoe redirects the star in the target path, empowering it with increased speed and radius, and resetting its damage modifier on cast. The redirected star can travel until it reaches 800-units outbound from Zoe.</p>"
    },
    {
      "description": "Paddle Star!'s recast can be used while affected by cast-inhibiting crowd control."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Zoe/ability-icon/q",
  "notes": "Both casts count as ability activations for the purposes of on-cast effects such as  More Sparkles!,  Spellblade and triggering  Force Pulse's passive.\nThe recast radius matches the initial cast radius of the ability, but Zoe can move any amount of distance away from the projectile before reactivating.\nPaddle Star!'s effect radius is centered around the location of the missile as it collides.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1200 / 2500",
  "spellEffects": "Area of effect",
  "spellshieldable": "True",
  "targeting": "Direction"
}
export default ability
