// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "P",
  "name": "Short Fuse",
  "affects": "Enemies",
  "blurb": "Innate: Periodically,  Ziggs' next basic attack will deal bonus magic damage, increased against structures.",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Periodically, Ziggs empowers his next basic attack to deal 20 - 160 (based on level) (+ 50% AP) bonus magic damage,[ increased by 75% against structures. ][ increased to 35 - 280 (based on level) (+ 87.5% AP) against structures. ]</p>"
    },
    {
      "description": "Short Fuse's cooldown is reduced by 4 / 5 / 6 (based on level) seconds whenever Ziggs casts an ability."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Ziggs/ability-icon/p",
  "notes": "The empowered attack will not trigger against wards.\nPENDING FOR TEST:: Short Fuse's interactions with  dodging,  blocking, and  blinding effects.",
  "speed": "1500",
  "spellEffects": "Proc",
  "spellshieldable": "False",
  "targeting": "Passive"
}
export default ability
