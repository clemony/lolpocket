// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Mortal Will",
  "affects": "Self",
  "blurb": "Innate:  Pantheon generates  stacks of Mortal Will whenever he lands a  basic attack  on-hit or casts an  ability. At max stacks, his next basic ability consumes them to become empowered with an additional effect.",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Pantheon generates a stack of Mortal Will whenever he lands a basic attack on-hit or casts an ability, stacking up to 5 times. At 5 stacks, Pantheon's next basic ability consumes the stacks to become empowered with an additional effect.</p>"
    },
    {
      "description": "Pantheon gains maximum stacks of Mortal Will upon starting the game, completing a Recall channel, and respawning."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Pantheon/ability-icon/p",
  "notes": "The current number of Mortal Will stacks is represented by a counter under Pantheon's health bar, visible to all players. It will light up when he reaches maximum stacks and the empowered effect is ready.",
  "targeting": "Passive"
}
export default ability
