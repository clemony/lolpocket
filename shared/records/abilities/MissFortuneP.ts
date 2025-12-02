// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Love Tap",
  "affects": "Enemies",
  "blurb": "Innate:  Miss Fortune's basic attacks apply a mark that expires when attacking a new enemy. If the enemy was unmarked, this also deals bonus physical damage.",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Miss Fortune's basic attacks are empowered to apply a mark that expires upon attacking a new enemy. If the enemy was unmarked, this also deals 50% - 100% (based on level) AD bonus physical damage, halved to 25% - 50% (based on level) AD against minions.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/MissFortune/ability-icon/p",
  "notes": "With  Runaan's Hurricane, Love Tap only applies to the primary target.\nThe bonus damage applies  life steal.\nThe empowered attack will not trigger against buildings.",
  "spellEffects": "Proc",
  "targeting": "Passive"
}
export default ability
