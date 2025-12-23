// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "P",
  "name": "Umbra Blades",
  "affects": "Enemies",
  "blurb": "Innate: Periodically,  Nocturne's next basic attack causes him to slash in a circle that deals increased physical damage to the target and nearby enemies,  healing him for each enemy hit.",
  "damageType": "Physical damage",
  "effectRadius": "360",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Periodically, Nocturne empowers his next basic attack to slash in a circle, dealing 120% AD physical damage to the target and nearby enemies and healing himself for 13 - 30 (based on level) (+ 30% AP) per enemy hit. Against minions, Umbra Blade's damage to secondary targets and healing are reduced by 50% and it applies on-hit effects to all targets(note) at 100% effectiveness.</p>"
    },
    {
      "description": "Umbra Blades can critically strike against the primary target, modifying the physical damage dealt to[ (192.5% + 44%) AD. ][ 110% AD × total critical damage. ]"
    },
    {
      "description": "Basic attacks reduce Umbra Blades' cooldown by 1 second, increased to 3 against enemy champions and monsters."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Nocturne/ability-icon/p",
  "notes": "The primary target of the enhanced attack is dealt  basic damage while the secondary targets of the slash are dealt  default damage.\nThe empowered attack will not trigger against  structures nor  wards.\nBasic attacks against them will still grant the cooldown reduction.\nParry effects will only block the damage dealt to the primary target.",
  "spellEffects": "special",
  "spellshieldable": "False",
  "targeting": "Passive"
}
export default ability
