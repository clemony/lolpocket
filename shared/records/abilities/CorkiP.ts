// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Hextech Munitions",
  "affects": "Self",
  "blurb": "Innate:  Corki's  basic attacks deal bonus true damage.",
  "damageType": "Other damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Corki's basic attacks deal bonus true damage equal to 20% AD. This damage is affected by critical strike modifiers.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Corki/ability-icon/p",
  "notes": "The mixed damage is dealt in two simultaneous instances of damage, but will pretend to be a single instance for most effects (such as  Conqueror's stacks).\nThe true damage is dealt in an instance before the physical damage.\nBoth instances deal  basic damage and thus natively apply  life steal.\nThe attack applies  on-hit effects only once, right at the start.\nEven if the target dies from the true damage, the physical damage will still be applied to it.\nIf the target dies from  on-hit damage, the true damage portion will be skipped and only the physical damage applied.(bug)\n Runaan's Hurricane's Wind's Fury and  Spellblade effects have both been special cased to benefit from Hextech Munitions, causing them to deal bonus true damage equal to 20% of the pre-mitigation damage dealt.",
  "spellEffects": "basic",
  "targeting": "Passive"
}
export default ability
