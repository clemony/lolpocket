// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Warrior Trickster",
  "affects": "Enemies",
  "blurb": "Active:  Wukong enters brief  invisibility and  dashes to the target location, leaving behind a  clone for a short time.",
  "castTime": "none",
  "cooldown": "22 / 21 / 20 / 19 / 18",
  "cost": "60 / 55 / 50 / 45 / 40",
  "damageType": "Physical damage",
  "effectRadius": "Clone's attack range",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Wukong enters invisibility for 1 second and dashes in the target direction, leaving behind a clone of himself at his casting position for 3.25 seconds.</p>"
    },
    {
      "description": "The clone is untargetable to allies and can basic attack autonomously, prioritizing the last enemy Wukong damaged. It can also gain the effects of Crushing Blow and Nimbus Strike's bonus attack speed, and casts Cyclone whenever Wukong does."
    },
    {
      "description": "The clone deals reduced damage.",
      "leveling": [
        {
          "attribute": "Clone Outgoing Damage",
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
      "description": "See Pets for more details about Wukong's clone. Wukong can cast any of his abilities during the dash."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/MonkeyKing/ability-icon/w",
  "notes": "Casting Warrior Trickster during an ability's effects will transfer them to the clone.\n Turret shots instantly kill the clone.\nThe clone is immune to  stasis and  Blast Cone.\nThe clone can still be targeted by allied  auto-targeted effects (e.g.  Heal,  Celestial Blessing).\nUsing a basic attack breaks the stealth at the end of the attack windup.",
  "resource": "Mana",
  "speed": "900",
  "spellEffects": "pet",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "100 / 300"
}
export default ability
