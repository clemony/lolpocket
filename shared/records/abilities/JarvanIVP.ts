// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Martial Cadence",
  "affects": "Enemies",
  "blurb": "Innate:  Jarvan IV's basic attacks deal bonus physical damage equal to a portion of the target's current health.",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Jarvan IV's basic attacks are empowered to deal bonus physical damage equal to 8% of the target's current health, with a minimum threshold of 20 and capped at 400 against non- champion targets.</p>"
    },
    {
      "description": "This effect cannot occur on the same target more than once every few seconds."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/JarvanIV/ability-icon/p",
  "notes": "Martial Cadence's damage is based on the current health of the target before any damage of the attack has been dealt.\nMartial Cadence's damage is dealt after the main attack damage.\nIf the target dies to the main attack damage, the additional damage will not be dealt.\nThe empowered attack will not trigger against structures.",
  "onTargetCdStatic": "6 / 5 / 4 / 3 (based on level)",
  "spellEffects": "Proc",
  "spellshieldable": "False",
  "targeting": "Passive"
}
export default ability
