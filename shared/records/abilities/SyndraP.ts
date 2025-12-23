// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "P",
  "name": "Transcendent",
  "affects": "Self",
  "blurb": "Innate:  Syndra collects Splinters of Wrath that enhance her  abilities based on the number of them collected, up to a maximum amount. She can collect them from dealing damage to enemy  champions, ranking up her abilities, and killing large  minions.",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Syndra collects Splinters of Wrath that enhance each of her abilities based on the number of them collected, stacking up to 120 times. She gains Splinters of Wrath from the following:</p>\nDealing two instances of ability damage to an enemy champion within 4 seconds grants 1 / 2 / 3 (based on level) Splinters. This cannot occur on the same target more than once every few seconds.\nRanking up an ability with any skill points beyond level 1 grants 5 Splinters, up to 85.\nKilling a large minion grants 1 Splinter."
    },
    {
      "description": "Collecting a Splinter of Wrath from an enemy restores 20 - 215 (based on level) mana. Splinters of Wrath are brought to Syndra from enemies over 0.6 seconds."
    },
    {
      "description": "At 120 Splinters of Wrath, Syndra achieves Transcendence, increasing her ability power by 15%."
    },
    {
      "description": "Syndra can collect Splinters of Wrath from enemies even if she is at maximum stacks. These Splinters do not grant any stacks, but will still restore mana for Syndra."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Syndra/ability-icon/p",
  "notes": "Syndra's abilities gain additional visual effects when they reach their Splinter of Wrath thresholds. Her spells will also gain a red colored tint outlining the VFX.\n Dark Sphere will cause fractures to appear in the earth when it is used.",
  "onTargetCdStatic": "8",
  "targeting": "Passive"
}
export default ability
