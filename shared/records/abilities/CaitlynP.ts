// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Headshot",
  "affects": "Self",
  "blurb": "Innate:  Caitlyn's  basic attacks generate  stacks of Count  on-attack. At maximum stacks, her next basic attack will fire a Headshot dealing bonus physical damage that scales with her  critical strike chance.",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Caitlyn's basic attacks generate a stack of Count on-attack, doubled if she is within brush. At 5 stacks, or 4 while in brush, her next basic attack consumes all stacks on-attack to become a Headshot.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Headshot:</span> Caitlyn's basic attack is empowered to have an uncancellable windup and deal 60% / 80% / 100% (based on level) (+ (148.75% + 34%) critical strike chance) AD bonus physical damage, increased to 110% (+ (148.75% + 34%) critical strike chance) AD against non-champions.</p>"
    },
    {
      "description": "Enemies that step over a Yordle Snap Trap or are hit by 90 Caliber Net can grant an additional Headshot against them at 1300 range within 1.8 seconds, without consuming stacks. Each method grants only one Headshot at a time."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Caitlyn/ability-icon/p",
  "notes": "If Caitlyn's current target becomes trapped by  Yordle Snap Trap or  90 Caliber Net while her attack is on cooldown, this ongoing cooldown will be refunded partially so that her next attack on them can begin earlier.\nSwapping the target to an enemy trapped by  Yordle Snap Trap or  90 Caliber Net also reduces her ongoing attack cooldown.\nPENDING FOR TEST:: The exact attack cooldown refund appears to be 50% of the attack cooldown at current attack speed, but at a minimum amount it lets Caitlyn start the attack against the trapped target within 0.5 seconds of her previous attack windup completing.\nThe bonus range from  Rapid Firecannon will not have any effect during  trap and  net extended Headshot attacks.\nOnly the ordinary 100% attack damage portion of the attack can critically strike. The bonus from Headshot is added after the critical strike is rolled.\nThe full damage of Headshot applies  life steal.\nHeadshot is a single instance of damage, thus does not trigger  Amumu's  Tantrum's or  Warden's Mail passives twice.\nThe basic attack triggering Headshot can  critically strike, but Headshot's damage remains unchanged if it does.\nSince Caitlyn's Art and Sustainability Update, Ability-granted Headshots are the same as the original Headshot override attack, though what lets them cast at high range is still relatively special. They trigger  on-attack effects (including stacking Headshot).\nPENDING FOR TEST:  Runaan's Hurricane's Wind's Fury, is special cased to search targets with the increased range as well.\nBecause Headshot stacks are generated  on-attack,  Runaan's Hurricane's Wind's Fury's bolts will not generate any.\nThe empowered attack will not trigger against  wards.\nStacks will still be generated towards Headshot when attacking them.",
  "projectile": "TRUE",
  "speed": "3000",
  "spellEffects": "Basic",
  "spellshieldable": "False",
  "targeting": "Passive"
}
export default ability
