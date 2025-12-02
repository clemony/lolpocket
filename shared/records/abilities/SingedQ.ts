// Updated Patch 15.23.1 - 11/30/2025 12:24:04 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Poison Trail",
  "affects": "Enemies",
  "blurb": "Toggle:  Singed continually creates a toxic cloud that shortly lingers in his wake, which continually inflicts  poison to enemies within.",
  "castTime": "none",
  "cooldown": "0",
  "cost": "13",
  "damageType": "Magic damage",
  "effectRadius": "180",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Toggle:</span> Singed continually creates a toxic cloud in his wake that lingers for 3.25 seconds. The cloud inflicts poison to enemies within.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">poison:</span> The target takes magic damage every 0.25 seconds over 2 seconds as well as upon being hit if not currently affected. Subsequent inflictions refresh the duration.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage per Tick",
          "modifiers": [
            {
              "values": "5 / 7.5 / 10 / 12.5 / 15"
            },
            {
              "unit": "% AP",
              "values": "10.63"
            }
          ]
        },
        {
          "attribute": "Magic Damage per Second",
          "modifiers": [
            {
              "values": "20 / 30 / 40 / 50 / 60"
            },
            {
              "unit": "% AP",
              "values": "42.5"
            }
          ]
        },
        {
          "attribute": "Minimum Magic Damage",
          "modifiers": [
            {
              "values": "40 / 60 / 80 / 100 / 120"
            },
            {
              "unit": "% AP",
              "values": "85"
            }
          ]
        }
      ]
    },
    {
      "description": "Singed earns the kill credit of enemy minions that are poisoned and would die to the damage of allied minions within the time before the next damage instance."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Singed/ability-icon/q",
  "notes": "Toggled abilities do not count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nWhen Poison Trail's debuff is applied instead of refreshed, the target is dealt one additional instance of the debuff at the same time as the application. This is done by delaying the actual debuff by 0.1 seconds.\nIf the target is already affected by the debuff, its duration is refreshed to the maximum (2 seconds).\nWhile active after spawning, a cloud checks for valid targets who remain in or re-enter a cloud every 0.25 seconds.\nValid targets already afflicted with the poison will have their debuff's duration refreshed every 0.25 seconds if applicable.\nIf Singed has moved fewer than 90 units since spawning the last poison cloud, it will spawn 35 units in front of him. They also only spawn every 1 second in this case.\nWhen Singed is moving faster than that, the poison clouds spawn more frequently and on top of himself.",
  "resource": "Mana per second",
  "spellEffects": "AoEDoT",
  "targeting": "Auto"
}
export default ability
