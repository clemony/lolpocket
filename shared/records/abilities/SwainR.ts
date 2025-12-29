// Updated Patch 15.24.1 - 12/26/2025 07:04:14 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Demonflare",
  "width": "60",
  "affects": "Enemies",
  "blurb": "Active: Swain emits a nova of soulfire that deals magic damage to nearby enemies and applies a  slow that decays over a brief moment.",
  "castTime": "0.25",
  "cooldown": "120",
  "cost": "100",
  "damageType": "Magic damage",
  "effectRadius": "675",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Swain releases a nova of soulfire that deals magic damage to nearby enemies and slows them by 75%, decaying over 1.5 seconds.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "150 / 250 / 350"
            },
            {
              "unit": "% AP",
              "values": "50"
            }
          ]
        }
      ]
    },
    {
      "description": "Swain can move during Demonflare's cast time."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Swain/ability-icon/r",
  "notes": "Demon Flare counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nDemon Flare passes through champions. Effects like  Yasuo's  Wind Wall and  Braum's  Unbreakable will block the portion of the nova they intercept.\nSwain can move during Demonflare's cast time.\nDemonflare will fire from wherever Swain is at the end of the cast time.",
  "projectile": "TRUE",
  "speed": "3000",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Auto"
}
export default ability
