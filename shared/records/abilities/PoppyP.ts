// Updated Patch 15.24.1 - 12/26/2025 07:04:11 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Iron Ambassador",
  "affects": "Self",
  "blurb": "Innate: Periodically,  Poppy  throws her buckler as her next basic attack, which has  bonus range and deals bonus magic damage. The buckler then falls nearby and remains for a few seconds, which she and enemy champions can step over to either retrieve or destroy it.",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Periodically, Poppy's next basic attack is empowered to throw her buckler, gaining 350 bonus range and dealing 20 - 180 (based on level) bonus magic damage. After it hits, the buckler then falls to a location near the target over 1 second, landing and remaining there for up to 4 seconds.</p>"
    },
    {
      "description": "Poppy can move over the buckler to retrieve it, gaining a shield for 11% - 20% (based on level) of her maximum health for 3 seconds. If the buckler kills the target, or if the target is already dead when the buckler hits it, the buckler will bounce back to Poppy instead of falling. Enemy champions can move over the buckler to destroy it."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Poppy/ability-icon/p",
  "notes": "Iron Ambassador's buckler attack counts as  melee.",
  "projectile": "TRUE",
  "speed": "1600",
  "spellEffects": "Proc",
  "spellshieldable": "False",
  "targeting": "Passive"
}
export default ability
