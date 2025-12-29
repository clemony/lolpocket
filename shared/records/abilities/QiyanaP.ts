// Updated Patch 15.24.1 - 12/26/2025 07:04:12 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Royal Privilege",
  "affects": "Enemies",
  "blurb": "Innate:  Qiyana's  basic attacks and  basic abilities deal bonus physical damage.",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Qiyana's basic attacks and basic abilities deal 15 - 83 (based on level) (+ 25% bonus AD) (+ 30% AP) bonus physical damage. This effect cannot occur on the same target more than once every few seconds.</p>"
    },
    {
      "description": "Gathering an Element with Terrashape resets Royal Privilege's per-target cooldown for enemies affected by Royal Privilege using a different Element (or no Element)."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Qiyana/ability-icon/p",
  "notes": "Royal Privilege's trigger from a basic attack can be  blocked (bonus damage is negated and the on-target cooldown does not apply).\nRoyal Privilege will not apply a cooldown to targets that are hit with an  Elemental Wrath that has a different  Element than the  Element Qiyana currently holds.\nThis does not occur if a new  Elemental Wrath with a different  Element is cast before the first one lands.\nThe effect will not trigger against  structures nor  wards.\nPENDING FOR TEST:: Royal Privilege's interaction with parrying effects ( dodge,  blind).\nRoyal Privilege is applied in a separate damage instance from Qiyana's basic attacks and abilities.\nThis causes effects like  Bone Plating and  Black Cleaver's Carve to be applied twice.(note)",
  "onTargetCdStatic": "25",
  "spellEffects": "proc",
  "targeting": "Passive"
}
export default ability
