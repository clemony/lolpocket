// Updated Patch 16.1 - 01/29/2026 04:26:58 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "E",
  "name": "Snowball Barrage",
  "width": "50",
  "affects": "Enemies",
  "blurb": "Active:  Nunu throws a volley of 3 snowballs in the target direction that each shatter upon hitting an enemy, dealing magic damage to enemies in a cone. Enemies hit 3 times are briefly  slowed.  Champions and large  monsters hit once are marked Snowbound for a few seconds. Shortly after activating Snowball Barrage, Snowbound enemies near  Willump take magic damage and are briefly  rooted.",
  "castTime": "None / None",
  "cooldown": "14 / 13 / 12 / 11 / 10",
  "cost": "50 / 55 / 60 / 65 / 70",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nunu throws a volley of 3 snowballs in the target direction over 0.4 seconds that each shatter upon hitting an enemy, dealing magic damage to enemies in a cone.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage Per Hit",
          "modifiers": [
            {
              "values": "16 / 24 / 32 / 40 / 48"
            },
            {
              "unit": "% AP",
              "values": "15"
            }
          ]
        },
        {
          "attribute": "Total Magic Damage",
          "modifiers": [
            {
              "values": "48 / 72 / 96 / 120 / 144"
            },
            {
              "unit": "% AP",
              "values": "45"
            }
          ]
        }
      ]
    },
    {
      "description": "Enemies hit 3 times are slowed for 1 second. Enemy champions and large monsters hit once are marked Snowbound for 4 seconds, refreshing on subsequent hits. Snowball Barrage can be recast twice within 3 seconds at no additional cost and with a cooldown in between casts.",
      "leveling": [
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "30 / 35 / 40 / 45 / 50"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Nunu hurls another volley of snowballs, mimicking the first cast's effects. An enemy may only be slowed once for being hit by snowballs.</p>",
      "leveling": [
        {
          "attribute": "Maximum Total Magic Damage",
          "modifiers": [
            {
              "values": "144 / 216 / 288 / 360 / 432"
            },
            {
              "unit": "% AP",
              "values": "135"
            }
          ]
        }
      ]
    },
    {
      "description": "After 3 seconds from the first cast, Snowbound enemies near Willump take magic damage and are rooted for 0.5 - 1.5 (based on level) seconds.",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "20 / 30 / 40 / 50 / 60"
            },
            {
              "unit": "% AP",
              "values": "80"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Nunu/ability-icon/e",
  "notes": "Each cast volley of snowballs counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive\nEach volley of snowballs is also a separate cast instance, allowing Snowball Barrage to trigger  Phase Rush on its own or trigger 6 stacks of  Conqueror.\nSnowbound consumption does not trigger on-cast effects, neither does it count as a separate cast instance (e.g. for the purposes of  Conqueror).\nThe three snowballs are thrown independently from one another over the 0.4 seconds and their direction is determined from Nunu & Willump's position at any given moment.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "2000",
  "spellEffects": "aoe",
  "spellshieldable": "True",
  "targeting": "Direction",
  "targetRange": "700"
}
  export default ability
