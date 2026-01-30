// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "P",
  "name": "Rage Gene",
  "affects": "Self",
  "blurb": "Innate - Rage Gene:  Mini Gnar generates Rage while fighting. At maximum Rage, his next  ability will be  Mega Gnar's as he transforms, losing Mini Gnar's passive effects in exchange for increased stats and new abilities.",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Rage Gene:</span> Mini Gnar generates 4 / 7 / 11 (based on level) Rage over 2 seconds upon dealing or receiving damage, up to 100. Against non-champions, basic attacks and Boomerang Throw instantly generate[ 0.5 / 0.875 / 1.375 (based on level) Rage. ][ 12.5% of the amount. ] Against champions, Boomerang Throw instantly generates[ 1 / 1.75 / 2.75 (based on level) Rage, ][ 25% of the amount, ]and basic attacks instantly generate[ 2 / 3.5 / 5.5 (based on level). ][ 50% of the amount. ] Boomerang Throw can only generate Rage once per cast, and grants Rage based on the first enemy hit. Gnar's Rage decays after being out of combat for 13 seconds.</p>"
    },
    {
      "description": "At maximum Rage, Gnar's abilities switch to Mega Gnar's abilities, for 4 seconds and until transforming back to his Mini Gnar form, with the exception of Hop, which switches after the transformation. Casting any of them during this time also causes Gnar to transform into Mega Gnar instantly, else he will transform automatically after the 4 seconds have elapsed."
    },
    {
      "description": "Gnar's Mega form lasts for 15 seconds, with his Rage bar depleting as an indication of remaining time. Rage cannot be generated while in this form. Afterwards, Gnar returns to Mini Gnar, retaining his current percentage health and becoming too tired to generate Rage for 15 seconds."
    },
    {
      "description": "Gnar gains different stat bonuses based on whether he is in Mini or Mega form. Both of Gnar's forms share their ability cooldowns."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Gnar/ability-icon/p",
  "notes": "The Rage generated upon dealing or receiving damage occurs over 2 seconds with 4 ticks every 0.5 seconds. It also does not stack but instead refreshes with subsequent applications (of dealing or receiving damage).\nThe bonus rage generation on basic attacks counts as an  on-hit effect, and is triggered by  Runaan's Hurricane and  Guinsoo's Rageblade.\nIn-game, the value on the Rage bar always displays rounded down to the nearest integer.\n Mega Gnar's gained health is not affected by healing modifiers such as  Grievous Wounds and those from items and runes.\nWhen returning to  Mini Gnar, Gnar will only retain his current health percentage, not current health total.\nGnar's abilities share  cooldowns across forms.\nThe final stats, after  Rage Gene being applied, can be seen on Mini Gnar's and Mega Gnar's respective data template, in the front page.\nMini Gnar gains 5.5% : 99% (based on level) bonus attack speed.\nThe Rage bar is white when under 60 range, yellow when equal to or above 60 rage, and red at 100 rage.\nIf Gnar transforms into  Mega Gnar while on enemy's sight and later goes back to  Mini while on the fog of war, enemies will see  Mega Gnar's icon both in the scoreboard and minimap, even if they regain vision of Gnar. This will stay this way until Gnar's  Mega form ends while on enemy's sight.(bug)",
  "targeting": "Passive"
}
  export default ability
