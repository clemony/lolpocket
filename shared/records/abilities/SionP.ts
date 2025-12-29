// Updated Patch 15.24.1 - 12/26/2025 07:04:14 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Death Surge",
  "affects": "Self",
  "blurb": "Active:  Sion gains a burst of  movement speed for a short time.",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Sion gains 67% bonus movement speed that decays over 2.376 seconds.</p>\nOnce at least one ability has been learned, Death Surge can be cast using any ability key, even for the abilities that haven't been learned yet."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Sion/ability-icon/p",
  "notes": "Casting Death Surge counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nDeath Surge will grant the bonus movement speed after a brief delay.\nThe buff is intended to grant 75% decaying movement speed, but instead grants 67% movement speed decaying with -8% per stat update.\nPrecisely this leaves him at 0% : 0% (based on seconds elapsed) bonus movement speed.\nDeath Surge has a shared cooldown across each ability key, regardless of which key is used to activate it. Thus, activating Death Surge with any ability key will put the others on cooldown.\nDeath Surge's cooldown resets upon death.\nDeath Surge's cooldown is affected by  ability haste and thus the ability is technically able to be used up to twice during a single instance of Glory in Death, but this isn't practical.\nDeath Surge is not affected by  Ultimate Hunter, even if cast from the ultimate ability slot.\nDespite showing the cooldown being reduced, Death Surge in the ultimate ability slot will be not reduced by  Axiom Arc's Flux on  takedown.(bug)\nDeath Surge's cooldown is not reduced by  Navori Flickerblade or  Transcendence.",
  "targeting": "Auto"
}
export default ability
