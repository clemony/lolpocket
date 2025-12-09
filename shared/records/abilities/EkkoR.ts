// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Chronobreak",
  "affects": "Enemies / Self",
  "blurb": "Passive:  Ekko reveals a time-delayed afterimage of himself that tracks where he was 4 seconds ago.",
  "castTime": "0.5",
  "cooldown": "110 / 80 / 50",
  "cost": "100",
  "damageType": "Magic damage",
  "effectRadius": "375 / Global",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Upon learning Chronobreak or if its current cooldown is lower than 4 seconds, Ekko reveals a time-delayed afterimage of himself that constantly tracks where he was 4 seconds ago.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ekko enters stasis at the start of the cast time, and afterwards heals himself and dashes to his afterimage's location at the time of cast over 0.5 seconds. Upon arrival, the stasis ends and he creates an explosion that deals magic damage to nearby enemies.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "200 / 350 / 500"
            },
            {
              "unit": "% AP",
              "values": "175"
            }
          ]
        },
        {
          "attribute": "Heal",
          "modifiers": [
            {
              "values": "100 / 150 / 200"
            },
            {
              "unit": "% AP",
              "values": "60"
            },
            {
              "unit": "% per 1% of health lost in the past 4 seconds",
              "values": "3"
            }
          ]
        }
      ]
    },
    {
      "description": "Ekko is immune to all displacements during Chronobreak."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Ekko/ability-icon/r",
  "notes": "Ekko will attempt to basic attack the closest target after appearing at the cast location, but can do so quicker if he manually attack commands after the dash, except if  Phase Dive is primed.\nThe afterimage's location will explode even if Ekko's  dash is interrupted.\nA link can also be seen between the afterimage and Ekko that traces along his path.\nThe link follows the same visibility rules as the afterimage.\nUpon activation, Ekko travels full distance through the link, and thus will detonate  Parallel Convergence that the link passes through.\n Quicksilver incurs a 1-second  cooldown upon casting Chronobreak.\nEkko's dash cannot be interrupted by forced movement displacements since he is immune to them.\nThis is not to be confused with  displacement immunity, which resists  airborne displacements plus a number of other cases. Chronobreak provides immunity only to displacements that apply  airborne.",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Auto"
}
export default ability
