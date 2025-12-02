// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Whisper",
  "affects": "Self, Enemies",
  "blurb": "Innate - Death in 4 Acts:  Jhin's gun may fire up to 4 times before needing to reload for a short period. The final round will  critically strike, dealing bonus physical damage based on the target's missing health.",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Death In 4 Acts:</span> Jhin's basic attacks consume ammunition within 4 rounds. He will reload over 2.5 seconds immediately after expending all rounds or withholding leftover rounds after 10 seconds of being out of combat and not being affected by crowd control. The latter reload can be interrupted by declaring an attack or casting an ability. Jhin is unable to declare basic attacks during the reload time.</p>"
    },
    {
      "description": "Jhin's final round attack has an uncancellable windup, always critically strikes, including against structures, and deals bonus physical damage equal to 15% / 20% / 25% (based on level) of the target's missing health. The damage based on the target's health is capped at 800 against monsters."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Every Moment Matters:</span> Jhin gains bonus attack damage equal to 4% - 44% (based on level)[ (+ 0.35% per 1% critical strike chance) (+ 0.3% per 1% bonus attack speed) ][ (+ 35% critical strike chance) (+ 30% bonus attack speed) ]AD.</p>"
    },
    {
      "description": "Additionally, critical strikes against enemies grant Jhin 14% (+ 0.44% per 1% bonus attack speed) bonus movement speed for 2 seconds."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Jhin/ability-icon/p",
  "notes": "The penalty to Jhin's critical damage also reduces the base damage ((100 + 75) × 0.86 rather than 100 + (75 × 0.86)) and stacks with other sources (i.e  Infinity Edge) ((100 + 75 + 40) × 0.86).\nThis penalty does not affect  Curtain Call.\nThe  missing health damage benefits from  life steal.\nThe 4th attack cannot be canceled by Jhin himself.\nThe 4th attack versus a structure is classified as a critical strike.\nThe attack damage multiplier stacks additively with  Dragon Slayer's.\nEvery Moment Matters'  bonus AD will benefit from any amount of bonus attack speed, even in excess of an amount that would usually reach the attacks per second cap (3).\nThe maximum modifier without attack speed is 79%.\n44% base modifier at level 18.\n35% from critical strike chance on account of the 100% cap.\nAttack speed slows will not affect Jhin's bonus attack damage from his passive and will ignore his attack speed as it is fixed.\nAttack damage reductions apply before the multiplier causing them to be stronger against Jhin than advertised or versus other champions.\nThe bonus damage based on the target's missing health does not affect structures.",
  "spellEffects": "Proc",
  "targeting": "Passive"
}
export default ability
