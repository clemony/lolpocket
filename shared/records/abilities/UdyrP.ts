// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Bridge Between",
  "affects": "Self",
  "blurb": "Innate - Awakened Spirit:  Udyr has no ultimate ability and instead he has 4 basic abilities that each incur a  brief global cooldown. Each  ability grants a Stance that empowers his next two  basic attacks.",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Awakened Spirit:</span> Udyr has no ultimate ability and instead has 4 basic abilities that each incur a 1.5-second global cooldown when cast. Each ability grants a Stance that empowers his basic attacks, and switching Stances will replace the empowered attacks of the previous Stance.</p>"
    },
    {
      "description": "Periodically, after Udyr enters a Stance, he can cast it again at no cost after 0.25 seconds and within the following 5 seconds to Awaken it, empowering the Stance with an additional effect and placing the effect on cooldown.If Udyr does not consume the Awaken cast within the duration and has not switched Stances, his current Stance's respective ability incurs a 0.25-second cooldown. Awakened Spirit is placed on full cooldown at the start of the game."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Monk Training:</span> After casting an ability, Udyr empowers his next two basic attacks within 4 seconds to gain 30% bonus attack speed and refund 5% of Awakened Spirit's total cooldown, though not if the remaining cooldown is less than 1 second.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Udyr/ability-icon/p",
  "notes": "Awakened Spirit's cooldown is affected by  ultimate haste.\nAwakened ability casts are special cased to trigger  Experimental Hexplate's Overdrive,  Zeke's Convergence's Frostfire Tempest, and  Cloud Dragon Soul's increased movement speed.\nThe Awakened casts of  Wilding Claw and  Wingborne Storm are special cased to trigger  Malignance's Hatefog from their damage.\n Axiom Arcanist will affect the Awakened cast of all abilities, but does not refund the cooldown of Awakened Spirit.\nOnly  Wilding Claw's lightning damage is amplified. The on-hit damage is not increased.(note)\n Axiom Arc's Flux does not count neither Awakened Spirit nor  Wingborne Storm as ultimate abilities.\nAwakened Spirit's cooldown is tracked on his health bar by an  Awakening resource, visible to all teams. This secondary resource bar is non-descript and represents the effect's percentage charge.\nThe bar has a white color when Awakened Spirit is under 80% charge, a yellow color when at 80% charge or above, and a red color when an Awaken cast is available.\nSwitching Stances will not cause any additional effects granted by the previous one to end prematurely.\nThe global cooldown will not incur on abilities that are currently on a greater cooldown.\nThe empowered attacks will not get consumed if they are parried.\nAwakened Spirit's cast also activates Monk Training and empowers the next 2 attacks by the stances unawakened effects as well, overriding unused unawakened stance attacks.",
  "targeting": "Passive"
}
export default ability
