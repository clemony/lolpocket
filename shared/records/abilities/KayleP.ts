// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Divine Ascent",
  "affects": "Self, Enemies",
  "blurb": "Innate:  Kayle ascends through four forms that each grant additional bonuses:\nLevel 1 - Zealous: Kayle's  basic attacks  on-attack grant her  stacking  attack speed, and at maximum stacks she also gains  move speed.\nLevel 6 - Arisen: Kayle gains  range and becomes a ranged champion.\nLevel 11 - Aflame: While at maximum stacks, Kayle's basic attacks launches a fire wave that deals magic damage.\nLevel 16 - Transcendent: Kayle is permanently at maximum stacks, in addition to gaining even more  range.",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Kayle ascends through four forms that each grant additional bonuses. She ascends upon spending a skill point at levels 1, 6, 11, and 16.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Level 1 - Zealous:</span> Kayle's basic attacks on-attack generate a stack of Zeal for 5 seconds, refreshing on subsequent attacks and stacking up to 5 times. For each stack, she gains 6% (+ 1% per 100 AP) bonus attack speed, up to a maximum of 30% (+ 5% per 100 AP). At max stacks, she becomes Exalted, gaining 10% bonus movement speed.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Level 6 - Arisen:</span> Kayle becomes ranged and gains 350 bonus attack range for a total of 525.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Level 11 - Aflame:</span> Kayle gains 10% bonus size. While Kayle is Exalted, her basic attacks on-attack also launch a wave of fire forward that deals 20 - 41 (based on level) (+ 10% bonus AD) (+ 25% AP) magic damage to all enemies it passes through. The wave is affected by critical strike modifiers.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Level 16 - Transcendent:</span> Kayle gains an additional 100 bonus attack range for a total of 625, and permanently gains the full effects of Zealous.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Kayle/ability-icon/p",
  "notes": "Zealous\n\nThe stacking bonus attack speed can be tracked on the HUD via a buff called  Zeal, while the maximum stacks bonus grants the buff  Exalted.\nSubsequent applications will also refresh the duration of all stacks, but all of them are lost when expired.\nIf Kayle is in her attack animation after the stacks expire, she gains another 0.5 seconds to refresh/stack  Zeal.\nEach stack grants bonus attack speed based on Kayle's  ability power at the time the stack is generated and will not update if it is changed.\nFor example, if a stack is generated while she has 0 ability power, it'll grant 6% attack speed. If she acquired 100 ability power afterward, the next stack will grant 7%. The 2 stacks grant a total of 13% bonus attack speed and not 14%.\nArisen\n\nBasic attacks within  175 units will still use Kayle's melee basic attack animations and do not utilize  projectiles.\nThey are still classified as  ranged attacks.\nDue to this fact, projectile-blocking effects cannot intercept basic attacks while Kayle's target is within her \"melee\" range.\nAflame\n\nOn becoming Aflame, Kayle's bonus size grows linearly over 1 second.\nBasic attacks against structures do not trigger fire waves.\nWhile at 4 stacks of  Zeal, the next attack  on-attack reaching the fifth stack will be empowered by Aflame, releasing the first fire wave.\nTranscendent\n\nThe  Zeal and  Exalted buffs are replaced by a new buff that grants the benefits of both and it is not visible on Kayle's  HUD.\nThis buff also updates its attack speed value whenever a stat update happens and ability power is changed, however, it does not track ability power from other buffs, unless they have been specifically special cased. The following buffs are not special cased yet and will not grant bonus attack speed:\nRunes (including  Adaptive Force rune shards )\n Infernal Might\nFire Waves Details\n\nHitboxes shows by a graph side by side. A wave consists of three projectiles for the hitbox and a fourth for visuals.\nThe hitbox projectiles spawn 75 units behind Kayle, travel through her, and are destroyed once they've traveled 850 units. Their technical details are:\nRange:  850 (755 effective)\nWidth:  200\nProjectile Speed: 2800\nAngle: 18° (left and right at 9° to their side, respectively)\n Projectile-blocking effects can block each projectile individually.\nIt is possible to block the visuals, but still get hit by an unblocked \"invisible\" hitbox projectile.\nHitting an enemy with multiple projectiles of the same wave will not increase the damage dealt.\nThe fire wave shares cast instance with the triggering basic attack.\nThe amount of  Conqueror stacks gained will be ( 2 /  1) if the basic attack deals damage first or 2 if the wave does so.\nKeep in mind that it's still two damage instances. If one triggers  Bone Plating, the other's damage will be blocked.\nFire waves roll  critical strike chance on each target hit individually.\nThe distance of the fire waves scales with bonus attack range.\nA known issue is that despite dealing  area spell damage the fire wave does not:\nConsume Mana Charge from  Tear of the Goddess and its upgrades.\nTrigger  Manaflow Band.\nInteractions & Other\n\nBecause Kayle is both a  melee and  ranged champion, she can purchase both ranged and melee exclusive items at anytime, but their effects will function depending on her current range type; the same principle also applies to runes.\nHowever, keep in mind that, prior to ascending to Arisen,  Starfire Spellblade also changes this behaviour based on its usage.\nWaves are fired in the direction that Kayle is facing. Changing that during the attack windup via  Flash will also change the direction of the wave.\nEach ascension has an unique animation and a voice line. (See: Kayle's quotes)\nThe ascensions' animation will override the current one, but it does not cancel Kayle's current action, nor her previous orders.",
  "projectile": "SPECIAL",
  "spellEffects": "AoE",
  "targeting": "Passive"
}
export default ability
