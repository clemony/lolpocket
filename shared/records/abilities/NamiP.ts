// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Surging Tides",
  "affects": "Allies",
  "blurb": "Innate:  Nami's abilities grant a burst of  movement speed to allied champions hit. The bonus is doubled from  Tidal Wave.",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Nami's abilities grant 100 (+ 25% AP) bonus movement speed to allied champions hit, decaying over 1.5 seconds. The bonus is[ doubled ][ increased to 200 (+ 50% AP) ]from Tidal Wave.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Nami/ability-icon/p",
  "notes": "Tidal Wave uses a separate empowered buff that has priority over the normal buff, and it will be used even if the full/current strength of the empowered buff is weaker than the full-strength normal buff.\nIf the normal buff remains ongoing when the empowered buff expires, it will then begin with full strength and completely decay over its remaining duration.",
  "targeting": "Passive"
}
export default ability
