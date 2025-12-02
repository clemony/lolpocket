// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Shadow Step",
  "affects": "Self",
  "blurb": "Active:  Kayn gains  bonus movement speed,  ghosting and the ability to enter terrain for a duration. If he has recently been in combat with enemy champions, the duration is dramatically reduced.",
  "castTime": "none",
  "cooldown": "21 / 19 / 17 / 15 / 13",
  "cost": "90",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kayn gains 40% bonus total movement speed, ghosting and the ability to ignore terrain collision for a duration. If he has been in combat with enemy champions within the last 3 seconds, Shadow Step will instead last 1.5 seconds.</p>",
      "leveling": [
        {
          "attribute": "Duration",
          "modifiers": [
            {
              "unit": " seconds",
              "values": "7 / 7.5 / 8 / 8.5 / 9"
            }
          ]
        }
      ]
    },
    {
      "description": "Kayn heals himself upon entering terrain for the first time from casting Shadow Step and he gains unobstructed vision while inside.",
      "leveling": [
        {
          "attribute": "Heal",
          "modifiers": [
            {
              "values": "90 / 100 / 110 / 120 / 130"
            },
            {
              "unit": "% bonus AD",
              "values": "45"
            }
          ]
        }
      ]
    },
    {
      "description": "Receiving damage from or dealing damage to an enemy champion while Shadow Step is active reduces its remaining duration to 1.5 seconds. This effect also cannot remain active out of terrain for longer than 1.5 seconds and will cancel immediately if Kayn performs a basic attack or becomes immobilized or polymorphed."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Shadow Assassin Bonus:</span> Shadow Step's cooldown is reduced to 10 seconds at all ranks. Kayn gains 100% slow resist while active and, upon entering terrain, the bonus total movement speed is increased to 70% for the remaining duration.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Kayn/ability-icon/e",
  "notes": "As  Rhaast, an  alternate icon for Shadow Step is used but has no modified effect.\nThe bonus movement speed  stacks multiplicatively with other sources of movement speed boosts.\nSelf  immobilizations such as  Zhonya's Hourglass also count for interrupting Shadow Step.\n Recall is disabled while Kayn is inside terrain.\nEnemies cannot see Kayn while he is inside of terrain unless they have terrain-piercing vision, such as  Heightened Senses,  Hawkshot or  unobstructed vision.\nHowever, enemies and allies (including Kayn) will be notified when nearby terrain is infested if Kayn is within 1000 units of an enemy champion - with an indicator being placed on the terrain with a direct line between Kayn and the enemy champion. Slightly less than standard sight radius, but more than the  camouflage detection radius.\nKayn can move up to 550 units beyond the outer-edge of the battlefield.\nShadow Step can interact with player-generated terrain.\nIf Kayn is inside terrain when the effect ends, he will be placed correspondingly to the nearest valid space.\n Sleep will not interrupt Shadow Step.(bug)",
  "resource": "Mana",
  "targeting": "Auto"
}
export default ability
