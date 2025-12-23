// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "E",
  "name": "Rappel",
  "affects": "Self, Enemies",
  "blurb": "Active:  Elise and her Spiderlings  vanish into the air for a short time.\nRappel can be recast on a target enemy within the duration, and does so automatically after the duration without a target.",
  "castTime": "none",
  "cooldown": "12 / 11.5 / 11 / 10.5 / 10",
  "cost": "50",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Elise and her Spiderlings lift up into the air over 0.6 seconds, immediately becoming untargetable and unable to act, and afterwards vanishing for up to 1.95 seconds and granting sight of the surrounding 900 units for the duration.</p>"
    },
    {
      "description": "Rappel can be recast instantly on a target enemy within the duration, or without a target after a delay for the duration, and does the latter automatically after the duration."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Elise and her Spiderlings reappear and descend onto the ground over 0.4 seconds, becoming targetable and able to act again afterwards. Additionally, Spider Queen's bonuses are increased for 5 seconds.</p>",
      "leveling": [
        {
          "attribute": "Spider Effects Increase",
          "modifiers": [
            {
              "unit": "%",
              "values": "40 / 55 / 70 / 85 / 100"
            }
          ]
        }
      ]
    },
    {
      "description": "If the recast was used on a target enemy, Elise and her Spiderlings descend behind the target's location. Otherwise, she and her Spiderlings will descend onto their current position without a target."
    },
    {
      "description": "Rappel's recast can be used while affected by cast-inhibiting crowd control."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Elise/ability-icon/e",
  "notes": "When Elise casts Rappel, a circle outlines the area in which a target can be selected to descend upon.\nElise will always attempt to position behind her target at the same offset if she descends within than Rappel's max range (825), provided there is enough space at the other side. If the target is at the edge of the recast's radius, Elise will not appear at the exact offset behind her target but as close to them as possible instead.\nFor example, if the target's edge is barely within range for the recast, she will appear in front of them.\nIf Elise's location-targeted recast is used by issuing a movement command within the respective range of Rappel, she will descend as normal but then move to the location that the movement command was issued; her movement commands will not be interrupted from descending.\nThe delay for recasting without a target after Elise has lifted into the air is inconsistent.(bug)\nThe recast has a 0.33-seconds delay for issued movement commands, and a 0.5-second delay if the recast input itself is used.\nWhile Elise is lifting up into the air, she can buffer Rappel's recast by targeting an enemy with an attack command or the recast input itself in the meantime. She however cannot buffer Rappel's location-targeted recast.\nThe initial cast can also directly target an enemy to buffer the recast.\nElise will lift up into the air 0.05 seconds shorter in this case.\nThe bonuses granted for descending are not lost if Elise switches to Human Form.\nRappel can be cast on any targetable enemy unit ( champions,  minions,  monsters,  wards,  traps, and jungle plants) except structures.\nIf Elise is positioned within the radius of the unit she's using the initial target cast on, Rappel will instead register as a self-cast and not immediately descend. (bug)\nElise can Rappel to  Rift Herald from the other side of the  Baron Nashor's pit as well as to  Dragon by standing near the  Scryer's Bloom spawn locations. This is a result of  sight being granted in a smaller circle than the target range limit for descending and the  Summoner's Rift map having height variations.\nIf Elise enters  resurrection during Rappel, she will descend back down immediately.\nThe following table refers for interactions while Elise is in Rappel:\n\n\nAttacking\n\nDescends onto the attack target.\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDescends onto her current position.\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll summoner spells are disabled\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
  "targeting": "Location / Unit",
  "targetRange": "825 /  900"
}
export default ability
