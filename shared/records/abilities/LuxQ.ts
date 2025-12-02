// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Light Binding",
  "width": "140",
  "affects": "Enemies",
  "blurb": "Active:  Lux shoots a sphere of light in the target direction that deals magic damage to the first two enemies hit and  roots them for a short time.",
  "castTime": "0.25",
  "cooldown": "11 / 10.5 / 10 / 9.5 / 9",
  "cost": "50",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Lux shoots a sphere of light in the target direction that deals magic damage to the first two enemies hit and roots them for 2 seconds.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "80 / 120 / 160 / 200 / 240"
            },
            {
              "unit": "% AP",
              "values": "65"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Lux/ability-icon/q",
  "notes": "Targets immune to the  root still count towards Light Binding's two-target limit.\nThis ability will cast from wherever the caster is at the end of the cast time.\nLight Binding spawns an additional missile at the same location and vector as the main missile. This additional \"Dummy\" missile has the same visual effects as the main missile and gets destroyed when it hits a single enemy, thereby making the surviving VFX of the single missile weaker in intensity.\nPENDING FOR TEST: This hacky solution also causes Lux Q to count as two skillshots for things such as \"skillshots dodged\" Eternals.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1200",
  "spellEffects": "Area of effect",
  "spellshieldable": "True",
  "targeting": "Direction"
}
export default ability
