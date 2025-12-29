// Updated Patch 15.24.1 - 12/26/2025 07:04:14 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Backstab",
  "affects": "Enemies",
  "blurb": "Innate:  Shaco's basic attacks deal bonus physical damage when hitting an enemy from behind.",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Shaco's basic attacks are empowered to deal 20 - 35 (based on level) (+ 25% bonus AD) bonus physical damage when hitting an enemy from behind. Backstab is affected by critical strike modifiers.</p>"
    },
    {
      "description": "Deceive and Two-Shiv Poison have additional effects when they hit an enemy from behind."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Shaco/ability-icon/p",
  "notes": "Backstab's bonus damage adds to the damage instance of the original basic attack.\nThe attacks do not deal the bonus damage against  structures.",
  "spellEffects": "basic",
  "spellshieldable": "False",
  "targeting": "Passive"
}
export default ability
