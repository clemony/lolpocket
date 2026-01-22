// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

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
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Blitzcrank empowers their next basic attack within 5 seconds to have an uncancellable windup, deal 100% AD (+ 25% AP) bonus physical damage and knock up the target for 1 second. This damage is affected by critical strike modifiers.</p>"
    },
    {
      "description": "Power Fist resets Blitzcrank's basic attack timer."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Blitzcrank/ability-icon/e",
  "notes": "Power Fist deals  basic damage, but also triggers spell effects by also being tagged as  spell damage.\nThis includes the  basic attack itself.\nThe  knockup is applied even if the attack is  dodged or  missed.\nIt is not applied if it is  blocked.\n Spell shield prevents the  knockup but not the damage.\nThe enhanced attack will still complete and hit the target even if they become  untargetable during the attack's windup.\nThe target is displaced a short distance during the  knockup in a random direction.",
  "resource": "Mana",
  "spellEffects": "Special",
  "spellshieldable": "special",
  "targeting": "Auto"
}
export default ability
