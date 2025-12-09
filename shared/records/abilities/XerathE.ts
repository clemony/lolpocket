// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Shocking Orb",
  "width": "120",
  "affects": "Enemies",
  "blurb": "Active:  Xerath fires an orb of energy in the target direction that deals magic damage to the first enemy hit,  stunning them based on travel distance.",
  "castTime": "0.25",
  "cooldown": "13 / 12.5 / 12 / 11.5 / 11",
  "cost": "60 / 65 / 70 / 75 / 80",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Xerath fires an orb of energy in the target direction that deals magic damage to the first enemy hit and stuns them for 0.75 - 2.25 (based on orb travel distance) seconds.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "70 / 100 / 130 / 160 / 190"
            },
            {
              "unit": "% AP",
              "values": "45"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Xerath/ability-icon/e",
  "notes": "This ability will cast from wherever the caster is at the end of the cast time.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1400",
  "spellEffects": "Single target",
  "spellshieldable": "True",
  "targeting": "Direction"
}
export default ability
