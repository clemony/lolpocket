// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Spell Flux",
  "affects": "Enemies",
  "blurb": "Active:  Ryze projects an orb upon the target enemy that deals magic damage.",
  "castTime": "0.25",
  "cooldown": "3.5 / 3.25 / 3 / 2.75 / 2.5",
  "cost": "35 / 45 / 55 / 65 / 75",
  "damageType": "Magic damage",
  "effectRadius": "350",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ryze projects an orb upon the target enemy that deals magic damage.</p>\nThe target and surrounding enemies are also marked with Flux for 4 seconds. Ryze's basic abilities against Flux targets consume the mark to become empowered with an additional effect.",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "60 / 90 / 120 / 150 / 180"
            },
            {
              "unit": "% AP",
              "values": "50"
            },
            {
              "unit": "% bonus mana",
              "values": "2"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Flux Bonus:</span> Spell Flux spreads farther.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Ryze/ability-icon/e",
  "notes": "Spell Flux's second cast on a target will apply a new Flux debuff as well as triggering the previous one (effectively refreshing the duration).\nThe \"main\" missile of Spell Flux is blocked by  projectile-intercepting effects, while the spreading bounce missiles are not.\nPENDING FOR TEST: bounce range  to-edge or  to-center?\nGame data notes additional range checks of 400 (bounce range) and 500 (Q damage bounce range) against 'large' enemies.\nSpell Flux can be buffered 0.5 seconds before it comes off cooldown.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
  "projectile": "SPECIAL",
  "resource": "Mana",
  "speed": "4000 / 1500",
  "spellEffects": "spell",
  "spellshieldable": "True",
  "targeting": "Unit",
  "targetRange": "550"
}
export default ability
