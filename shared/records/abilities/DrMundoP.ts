// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "P",
  "name": "Goes Where He Pleases",
  "affects": "Self",
  "blurb": "Innate:  Dr. Mundo  regenerates an additional portion of his maximum health.",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Dr. Mundo regenerates an additional[ 0.4% - 2.3% (based on level) of his maximum health every 5 seconds. ][ 0.04% - 0.23% (based on level) of his maximum health every 0.5 seconds. ]</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Periodically, Dr. Mundo gains immunity to the next hostile immobilizing effect to affect him. Upon resisting one, Dr. Mundo pays a health cost equal to 4% of his current health and propels a canister that lands 525 units in the general direction of its source, remaining on the ground for 7 seconds.</p>"
    },
    {
      "description": "Dr. Mundo can move near the canister to consume it, healing himself for 4% of his maximum health and reducing the cooldown of Goes Where He Pleases by 15 seconds. Enemy champions can move near it to destroy it."
    },
    {
      "description": "Goes Where He Pleases' cooldown resets upon respawning."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/DrMundo/ability-icon/p",
  "notes": "Upon being triggered by a hostile  immobilizing effect, Goes Where He Pleases will also grant Dr. Mundo immunity to additional immobilizing effects from the same cast instance.\nAbilities where non-immobilizing effects and damage are nested into immobilizing ones will have them also prevented. Non-immobilizing effects and damage applied separately (the vast majority of cases) are not prevented.\n Spell shield and  Black Shield take priority over Goes Where He Pleases.\nThe canister, whether in flight and on the ground, will transition in and out of  Mordekaiser's  Death Realm alongside Dr. Mundo.(note)\nThe canister cannot be interacted with while  untargetable.",
  "projectile": "FALSE",
  "targeting": "Passive"
}
export default ability
