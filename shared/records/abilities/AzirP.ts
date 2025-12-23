// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "P",
  "name": "Shurima's Legacy",
  "affects": "Turret ruins",
  "blurb": "Innate:  Azir periodically can summon the Disc of the Sun from the ruins of allied or enemy  turrets.",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Whenever a turret outside the enemy team's base is destroyed, a marker is placed above its ruins which can be targeted by Azir.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Disc of the Sun:</span> Azir can select a marker to construct the Sun Disc above the ruins after a 0.5-second cast time. The Sun Disc will activate after being assembled over 5 seconds.Azir cannot construct a Sun Disc with the marker while he is affected by cast-inhibiting crowd control or a lockout that disables abilities.</p>"
    },
    {
      "description": "The Sun Disc functions the same as a standard inner turret but deals magic damage, gains 40% AP bonus attack damage, and grants its kill credit to Azir. The Sun Disc's health decays over 45 seconds and loses 100 armor and 100 magic resistance while Azir is not alive or is too far away."
    },
    {
      "description": "See Pets for more details about the Sun Disc."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Azir/ability-icon/p",
  "notes": "No additional notes.",
  "projectile": "FALSE",
  "spellEffects": "spell",
  "spellshieldable": "False",
  "targeting": "Unit",
  "targetRange": "700",
  "tetherRadius": "2000"
}
export default ability
