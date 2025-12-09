// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Dream-Laden Bough",
  "affects": "Enemies",
  "blurb": "Innate:  Lillia's abilities apply Dream Dust to enemies hit, which continually deals magic damage based on the target's maximum health over a short time, and  heals her for the same duration.",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Lillia's abilities apply Dream Dust to enemies hit, which deals[ 5% (+ 1.25% per 100 AP) of the target's maximum health total magic damage over 3 seconds, capped at 65 against monsters. ][ 0.83% (+ 0.2083% per 100 AP) of the target's maximum health magic damage every 0.5 seconds over 3 seconds, capped at 10.83 per tick against monsters. ]</p>"
    },
    {
      "description": "Lillia heals herself for[ 39 (+ 15% AP) against large monsters and 6 - 90 (based on level) (+ 30% AP) against champions ][ 6.5 (+ 2.5% AP) against large monsters and 1 - 15 (based on level) (+ 5% AP) against champions every 0.5 seconds ]over the duration of Dream Dust, reduced to 15% effectiveness for each target afflicted beyond the first. She may only heal against 1 monster at a time."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Lillia/ability-icon/p",
  "notes": "Lilting Lullaby's application does not apply Dream Dust, but its triggering damage does.\nDream Dust is applied even if the target takes no damage from an ability, e.g. by being  shielded or  invulnerable, but not when the ability hit is prevented in the first place (e.g.  spell shield).",
  "spellEffects": "dot",
  "spellshieldable": "true",
  "targeting": "Passive"
}
export default ability
