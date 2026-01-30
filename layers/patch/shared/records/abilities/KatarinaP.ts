// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "P",
  "name": "Voracity",
  "affects": "Enemies, Self",
  "blurb": "Innate: Scoring a champion  takedown within a short time of damaging them  reduces the current cooldowns of  Katarina's abilities.",
  "damageType": "Magic damage",
  "effectRadius": "340",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Scoring a champion takedown within 3 seconds of damaging them will reduce the current cooldowns of Katarina's abilities by 15 seconds.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Sinister Steel:</span> Whenever Katarina retrieves a Dagger, she slashes around herself to deal 68 - 240 (based on level) (+ 60% bonus AD) (+ 70% / 80% / 90% / 100% (based on level) AP) magic damage to nearby enemies, apply on-hit effects to enemy champions hit, and reduce Shunpo's current cooldown by 78% / 84% / 90% / 96% (based on level) of its total cooldown.</p>"
    },
    {
      "description": "Daggers grant sight of their radius and will disappear after being on the ground for 4 seconds."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Katarina/ability-icon/p",
  "notes": "Voracity's cooldown reduction will still take effect even after Katarina dies.\nThe Dagger's area of effect indicator is displayed even before it lands, although Katarina may not slash until it has. This can be targeted by  Shunpo.\nDaggers will still deal damage but not apply on-hit effects if  dodged. They cannot be  blocked nor can they be missed while Katarina is  blinded.\nSingle-use on-hit effects, such as  Spellblade, will apply to the closest target to Katarina when she uses a Dagger.",
  "spellEffects": "Area of effect",
  "spellshieldable": "True",
  "targeting": "Passive"
}
  export default ability
