// Updated Patch 16.1 - 01/29/2026 04:27:18 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "P",
  "name": "More Sparkles!",
  "affects": "Enemies",
  "blurb": "Innate: After casting an ability,  Zoe's next basic attack or  Spell Thief bolt within a few seconds will deal bonus magic damage.",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> After casting an ability, Zoe empowers her next basic attack or Spell Thief bolt within 5 seconds to become non-projectile and deal 16 - 130 (based on level) (+ 20% AP) bonus magic damage.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Zoe/ability-icon/p",
  "notes": "The empowered attack will trigger but not be consumed against wards.",
  "projectile": "FALSE",
  "spellEffects": "Proc",
  "spellshieldable": "False",
  "targeting": "Passive"
}
  export default ability
