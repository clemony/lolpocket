// Updated Patch 16.1 - 01/29/2026 04:27:02 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "W",
  "name": "Unburrow",
  "affects": "Self / Enemies",
  "blurb": "Active:  Rek'Sai becomes Un-Burrowed, gaining access to her Un-Burrowed abilities. Additionally, she deals magic damage to nearby enemies and  knocks them up. The enemies and cannot be affected again by Unburrow for some time.",
  "castTime": "none",
  "cooldown": "4",
  "cost": "0",
  "damageType": "Magic damage",
  "effectRadius": "220 /  250 /  75",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Rek'Sai becomes Un-Burrowed, gaining access to her Un-Burrowed abilities and emerging from the ground to deal magic damage to nearby enemies and knock them up for 1 second. Minions and small monsters are instead knocked back a short distance. Targets hit cannot be displaced by Unburrow again for some time.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "30 / 55 / 80 / 105 / 130"
            },
            {
              "unit": "% AP",
              "values": "80"
            }
          ]
        }
      ]
    },
    {
      "description": "Rek'Sai can also trigger Unburrow by issuing an attack command, casting the ability once she is in attack range of the target and applying the knock up against them."
    },
    {
      "description": "Rek'Sai becomes unable to move or attack for 0.15 seconds after hitting an enemy with Unburrow."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/RekSai/ability-icon/w",
  "notes": "Unburrow can apply the knock up to minions and small monsters if the ability is cast against them with an attack command.\nUnburrow does not count as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nUnburrow is still considered an ability and is thus stopped by  silence. She can basic attack normally during this time, without leaving unburrow.\nFor a brief moment during the beginning animation of  Tunnel, Rek'Sai can trigger Unburrow by issuing an attack command.",
  "onTargetCdStatic": "10 / 9 / 8 / 7 / 6",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Auto"
}
  export default ability
