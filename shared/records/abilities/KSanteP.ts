// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Dauntless Instinct",
  "affects": "Enemies",
  "blurb": "Innate:  K'Sante's  abilities mark enemies hit for a short time. His  basic attacks  on-hit consume the mark to deal bonus physical damage based on the target's maximum health.",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> K'Sante's abilities mark enemies hit for 4 seconds. His basic attacks against marked enemies are empowered to consume the mark on-hit, dealing 12 (+ 1% - 2% (based on level) of target's maximum health) bonus physical damage. The damage based on the target's health has a minimum of 15 - 100 (based on level) against minions and is capped at 20 - 105 (based on level) against monsters.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">All Out Bonus:</span> K'Sante's basic attacks and ability damage, as well as Dauntless Instinct's mark consumption, are empowered to deal bonus physical damage equal to 1% (+ 1% per 100 bonus armor) (+ 1% per 100 bonus magic resistance) of the target's maximum health.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/KSante/ability-icon/p",
  "notes": "Spell shield will block the mark's application, but not the mark's consumption from an attack.\nThe empowered attack can be  dodged,  blocked, and missed while  blinded but the mark will not be consumed.\nStarting the empowered attack while the mark is about to time out will not extend the mark duration, but still complete the attack and apply the bonus damage.\nAll Out's bonus damage on abilities only applies to the first target hit when damaging multiple enemies (including minions and monsters).(bug)\nFor most of K'Sante's spells and item effects, in the case of multiple targets being stuck on the same game tick, this refers to the closest target. For non-missile  Ntofo Strikes, it instead depends on the order in which the target units were spawned into the match.(bug)\nAll Out's bonus damage on abilities is applied in the same damage instance from K'Sante's basic attacks and abilities.\nThis causes effects like  Bone Plating and  Black Cleaver's Carve to be triggered only once from the respective hit.",
  "spellEffects": "proc",
  "spellshieldable": "special",
  "targeting": "Passive"
}
export default ability
