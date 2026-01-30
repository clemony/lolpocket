// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "E",
  "name": "Power Fist",
  "affects": "Enemy, Structure",
  "blurb": "Active:  Blitzcrank charges up a fist to make the next  basic attack deal double damage and  knock up the target into the air.",
  "castTime": "none",
  "cooldown": "7 / 6.5 / 6 / 5.5 / 5",
  "cost": "25",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Blitzcrank empowers their next basic attack on-hit within 5 seconds to have an uncancellable windup, deal 100% AD (+ 25% AP) bonus physical damage and knock up the target for 1 second. This damage is affected by critical strike modifiers.</p>"
    },
    {
      "description": "Power Fist resets Blitzcrank's basic attack timer."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Blitzcrank/ability-icon/e",
  "notes": "Power Fist deals  basic damage, but also triggers spell effects by also being tagged as  spell damage.\nThis includes the  basic attack itself.\nThe  knockup is applied even if the attack is  dodged or  missed.\nIt is not applied if it is  blocked.\n Spell shield prevents the  knockup but not the damage.\nThe enhanced attack will still complete and hit the target even if they become  untargetable during the attack's windup.\nPower Fist's knockup is applied on-hit, but the damage is applied by the attack.\nIf the knockup is applied during the attack windup, (eg. via  Guinsoo's Rageblade), the attack will not deal damage, nor continue to be  uncancellable.(bug)\nThe knockup does not trigger against  wards or jungle plants.\nThe target is displaced a short distance during the  knockup in a random direction.",
  "resource": "Mana",
  "spellEffects": "Special",
  "spellshieldable": "special",
  "targeting": "Auto"
}
  export default ability
