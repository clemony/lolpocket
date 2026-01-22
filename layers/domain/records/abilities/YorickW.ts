// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Dark Procession",
  "affects": "Enemies",
  "blurb": "Active:  Yorick summons a destructible ring of spirits at the target location that  knocks aside enemies hit. It remains as terrain against enemies for a few seconds.",
  "castTime": "none",
  "cooldown": "20 / 18 / 16 / 14 / 12",
  "cost": "70",
  "effectRadius": "225 / 200",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Yorick summons a ring of spirits around the target location that arises after a 0.75-second delay, knocking aside enemies hit by the walls over 0.25 seconds, though not through terrain. Within 210-units, they are pulled inside; otherwise they are pushed away. The ring remains for 4 seconds as impassible terrain against enemies, granting sight inside the ring.</p>"
    },
    {
      "description": "Dark Procession can only be targeted by enemy champion basic attacks and turrets. The wall takes 1 damage per attack from champions and is destroyed instantly from turret attacks.",
      "leveling": [
        {
          "attribute": "Wall Health",
          "modifiers": [
            {
              "values": "2 / 2 / 3 / 3 / 4"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Yorick/ability-icon/w",
  "notes": "Dark Procession has a  turret prioritization value of 6, equal to that of  super minions.\nYorick's other  pets each have a lower prioritization value, allowing him to delay the turret from targeting the  The Maiden or a Mist Walker for one attack.\nDark Procession deals 0  proc  true damage to enemies it knocks aside, which triggers in-combat effects such as drawing turret and monster aggression,  Sudden Impact or applying  Elixir of Sorcery.\nThe perimeter is made up of 18 units with 100  pathing radius and 20  gameplay radius each.\nYorick marks any enemy champion within repeatedly while the cage persists in order to gain assist credit, lasting for the standard credit timer.",
  "resource": "Mana",
  "spellshieldable": "false",
  "targeting": "Location",
  "targetRange": "600"
}
export default ability
