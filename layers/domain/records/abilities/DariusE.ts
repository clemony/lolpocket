// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Apprehend",
  "affects": "Enemies",
  "angle": "50°",
  "castTime": "0.25",
  "cooldown": "26 / 23.5 / 21 / 18.5 / 16",
  "cost": "70 / 60 / 50 / 40 / 30",
  "effectRadius": "535",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Darius gains armor penetration.</p>",
      "leveling": [
        {
          "attribute": "Armor Penetration",
          "modifiers": [
            {
              "unit": "%",
              "values": "20 / 25 / 30 / 35 / 40"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Darius sweeps his axe in a cone in the target direction, granting sight of the area for 1 second while pulling enemies hit towards him. Upon arrival, they rebound 150 units off of him, remaining airborne and becoming slowed by 40% for 1 second.</p>"
    },
    {
      "description": "Darius is unable to move or cast Decimate or Noxian Guillotine for 0.4 seconds after Apprehend's cast time."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Darius/ability-icon/e",
  "notes": "Enemies hit by Apprehend will quickly be dragged to Darius before rebounding over a longer period.\nThe  slow duration starts as soon as the target rebounds off of Darius.\nPENDING FOR TEST:: The rebound location is determined when the target reaches Darius' location.\nThe rebound's forced movement's duration is roughly 0.5 seconds, finishing before the  airborne duration ends.\nPENDING FOR TEST:: There is no  stun applied for the same duration of the  airborne, meaning  brittle cannot extend the disable duration. It will not increase the  slow duration in most situations because of the negative tenacity falling off before the slow is applied.\nAfter the pull, Darius will attempt to basic attack the closest pulled target, prioritizing enemy champions.\nThe armor penetration  stacks multiplicatively with other forms of percentage armor penetration.\nThis ability will cast from wherever the caster is at the end of the cast time.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
  "projectile": "FALSE",
  "resource": "Mana",
  "spellshieldable": "True",
  "targeting": "Direction"
}
export default ability
