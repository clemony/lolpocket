// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "P",
  "name": "Perseverance",
  "affects": "Self",
  "blurb": "Innate:  Garen continually  regenerates a portion of his  maximum health.",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Garen regenerates an additional[ 1.5% - 10.1% (based on level) of his maximum health every 5 seconds. ][ 0.15% - 1.01% (based on level) of his maximum health every 0.5 seconds. ]</p>"
    },
    {
      "description": "Perseverance is lost for 8 seconds if Garen takes damage from champions, epic monsters, or turrets, or if he is hit by an enemy ability or affected by an enemy summoner spell, refreshing on subsequent damage and hits taken from them."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Garen/ability-icon/p",
  "notes": "Perseverance does not go on nor refresh its cooldown from damage which was fully prevented by a  shield or  invulnerability.",
  "spellEffects": "Heal",
  "targeting": "Passive"
}
export default ability
