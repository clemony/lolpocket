// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "W",
  "name": "Evolved Spike Racks",
  "affects": "Enemies, Self",
  "blurb": "Evolved Bonus: Void Spike now fires three clusters in a cone,  slowing and  revealing enemy champions hit for a short time.",
  "cooldown": "9",
  "cost": "55 / 60 / 65 / 70 / 75",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Evolved Bonus:</span> Void Spike now fires three clusters in a cone, slows by 40% and reveals enemy champions hit for 2 seconds. Multiple explosions do not deal extra damage to the same target nor provide Kha'Zix with additional healing.</p>"
    },
    {
      "description": "Isolated targets hit by Evolved Spike Racks are slowed by 60% instead."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Khazix/ability-icon/w",
  "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nEvolved Spike Racks' effect radius is centered around the location of the missile as it collides.\n Spell shield will not block the  reveal.",
  "projectile": "TRUE",
  "spellEffects": "aoe",
  "spellshieldable": "special",
  "targeting": "Direction"
}
export default ability
