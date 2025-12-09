// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Mistral Bolt",
  "width": "360 / 160",
  "affects": "Ememies",
  "blurb": "Active:  Vex launches a wave of mist in the target direction that deals magic damage to enemies hit. After a short delay, the wave accelerates but also narrows.",
  "castTime": "0.15",
  "cooldown": "8 / 7 / 6 / 5 / 4",
  "cost": "45 / 50 / 55 / 60 / 65",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Vex launches a wave of mist in the target direction that deals magic damage to enemies hit. After travelling 500 units, the wave accelerates but also narrows itself.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "70 / 115 / 160 / 205 / 250"
            },
            {
              "unit": "% AP",
              "values": "70"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Vex/ability-icon/q",
  "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nMistral Bolt will fire from wherever Vex is at the end of the cast time, towards the originally targeted location or 1200 units in the originally targeted direction if cast beyond that.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "600 / 3200",
  "spellEffects": "spellaoe",
  "spellshieldable": "true",
  "targeting": "Direction"
}
export default ability
