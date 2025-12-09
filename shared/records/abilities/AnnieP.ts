// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Pyromania",
  "affects": "Self, Enemies",
  "blurb": "Innate:  Annie's spell-casts generate stacks. At maximum stacks, her next offensive spell will consume them to  stun the target.",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Pyromania:</span> Annie generates a stack of Pyromania whenever she hits an enemy with Disintegrate or casts her other abilities, stacking up to 4 times, at which she gains Energized.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Energized:</span> Annie empowers her next cast of Disintegrate, Incinerate, or Summon: Tibbers to consume all Pyromania stacks to stun enemies hit for 1.25 / 1.5 / 1.75 (based on level) seconds.</p>"
    },
    {
      "description": "Annie gains maximum stacks of Pyromania when the game starts and upon respawning. She will lose Energized and all Pyromania stacks upon death."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Annie/ability-icon/p",
  "notes": "Annie does not lose any stacks upon entering or exiting  resurrection.\nStacks are gained even if the ability is blocked by  spell shield.\nPyromania's current stacks are represented by a counter under Annie's health bar, visible to all players. It lights up when the empowered effect is available.",
  "spellshieldable": "True",
  "targeting": "Passive"
}
export default ability
