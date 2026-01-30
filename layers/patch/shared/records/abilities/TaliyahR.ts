// Updated Patch 16.1 - 01/29/2026 04:27:10 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "R",
  "name": "Weaver's Wall",
  "affects": "Self, Enemies",
  "blurb": "Active:  Taliyah summons a torrent of spiraling rocks that cascades in the target direction, which  knocks aside champions hit and erects a wall of terrain in its wake. The wall lasts a few seconds before slowly disintegrating from the starting end.",
  "castTime": "none",
  "cooldown": "180 / 150 / 120",
  "cost": "100",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Taliyah summons a torrent of spiraling rocks that cascades in the target direction, knocking aside champions hit and erecting a wall of terrain in its wake. The wall lasts for 4 seconds after completion, then slowly disintegrates from its starting point.</p>"
    },
    {
      "description": "Taliyah also channels for 1 second, during which Weaver's Wall can be recast and she reveals herself."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Upon completing the channel, Taliyah surfs on the wall as it emerges, revealing herself in the process. After 0.75 seconds, she may input a movement command to jump off the wall to the target location, and automatically does so upon being immobilized or silenced or reaching maximum range.Once the wall has fully formed, Taliyah can recast to destroy the wall instantly.</p>"
    },
    {
      "description": "Weaver's Wall is placed on a 3-second static cooldown upon taking champion or turret damage."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Taliyah/ability-icon/r",
  "notes": "If a champion is standing next to a portion of the generated terrain and that portion expires by any means, enemies'  spell shield will be consumed.(bug)\nThe initial cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nHowever neither recasts do.\nTaliyah can recast to destroy the wall even if she did not surf it or it is in the process of disintegrating.\nTaliyah almost always jumps off of the wall to her left from when it reaches maximum range. If she is forced to jump off of the wall, she will do so towards the source that dealt damage or applied the crowd control to her.\nWeaver's Wall, while  channeling, can be recast while  grounded but not while  rooted.\nThe channel cannot be started while affected by either crowd control effects.\n Wind Wall and  Blade Whirl will prevent Weaver's Wall from summoning any further but does not destroy any initial terrain it spawned. If Taliyah is surfing during the collision, she immediately becomes  stunned for 0.25 seconds, interrupting the surf.\nIf Taliyah would enter terrain and the wall reaches maximum range inside, she is preemptively forced off the wall before entering.\nThe wall can surpass the edges of the map, but Taliyah cannot.\nThe following table refers for interactions while Taliyah is  channeling:\nThe channel is not  interrupted by  ground despite being a movement channel.\nThis lockout persists for another 0.65 seconds during the surf after the channel is completed.\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\nN/A\n\n\nDisabled\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath Immobilizing effects Cast-inhibiting effects\n\nThe following table refers for interactions while Taliyah is  surfing after the first 0.65 seconds.\nOnce 0.35 seconds have elapsed afterwards, her lockout is modified for the rest of the surf.\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\nN/A\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nInterrupted by\n\nDeath Immobilizing effects Cast-inhibiting effects\n\nThe following table refers for interactions while Taliyah is  surfing after 1 second from the channel's completion.\nInterrupting the surf by casting a non-auto targeted ability, spell, or item active causes her to jump off the wall to the location of where the spell was targeted. She will dash to maximum range if the spell was cast outside of it.\n\n\nType\n\nChannel\n\n\nAttacking\n\nInterrupts\n\n\nAbilities\n\nInterrupts\n\n\nMovement\n\nInterrupts\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\nAll items interrupt\n\n\nConsumables\n\nInterrupts\n\n\nSpells\n\nUsable\n\nN/A\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\nAll summoner spells interrupt\n\n\nInterrupted by\n\nDeath Immobilizing effects Cast-inhibiting effects",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1500 / 1200",
  "spellshieldable": "false",
  "targeting": "Direction / Auto",
  "targetRange": "2500 / 3500 / 4500 / 5500 / 6500 // 900"
}
  export default ability
