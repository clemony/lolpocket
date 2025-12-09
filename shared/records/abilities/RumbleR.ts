// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "R",
  "name": "The Equalizer",
  "width": "410 - 368.4",
  "affects": "Enemies",
  "blurb": "Active:  Rumble deploys a barrage of rockets along the target path that create a field which lingers for a few seconds.",
  "castTime": "None / 0.5833",
  "cooldown": "130 / 105 / 80",
  "cost": "0",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Rumble deploys a barrage of rockets from the sky along the target path in a line over 0.75 seconds. Each rocket impacts the ground to create a field of fire that lasts 4.5 seconds.</p>"
    },
    {
      "description": "Enemies struck by the impact or within the field are marked Burning for 1 second, taking magic damage every 0.25 seconds and being slowed by 35%, refreshing while in the area. Enemies may be Burning for up to 5 seconds, for a total of 20 instances of its effect.",
      "leveling": [
        {
          "attribute": "Magic Damage per Tick",
          "modifiers": [
            {
              "values": "35 / 52.5 / 70"
            },
            {
              "unit": "% AP",
              "values": "8.75"
            }
          ]
        },
        {
          "attribute": "Magic Damage per Second",
          "modifiers": [
            {
              "values": "140 / 210 / 280"
            },
            {
              "unit": "% AP",
              "values": "35"
            }
          ]
        },
        {
          "attribute": "Maximum Magic Damage",
          "modifiers": [
            {
              "values": "700 / 1050 / 1400"
            },
            {
              "unit": "% AP",
              "values": "175"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Rumble/ability-icon/r",
  "notes": "The Equalizer's cumulative hitbox consists of a row of six rockets, each having a circular area of effect with a radius of 205 units. Each rocket drops at an offset of 180 units from the previous in the vector of cast.\nThe missile that manages the rockets being deployed starts 150 units behind the target vector origin, and thus drops the first rocket at 30 units in front of the cast vector origin, which is equivalent to a period of 0.132 seconds from the cast point.\nA given field checks for targets to apply or refresh the debuff on once every 0.25 seconds.\nDue to each field expiring at different points in time, champions moving in the duration of the rockets' launch as they are expiring may sometimes receive 1 more instance of the debuff at most beyond the maximum.(bug)",
  "projectile": "FALSE",
  "speed": "1600",
  "spellEffects": "aoedot",
  "spellshieldable": "False",
  "targeting": "Vector",
  "targetRange": "1700"
}
export default ability
