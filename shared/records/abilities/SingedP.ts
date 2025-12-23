// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "P",
  "name": "Noxious Slipstream",
  "affects": "Self",
  "blurb": "Innate: Whenever  Singed moves near a  champion, he gains  bonus movement speed for a short time, which refreshes on subsequent passes and  stacks up to a cap.",
  "effectRadius": "225",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Whenever Singed moves near a champion, he gains a stack of Noxious Slipstream for 2 seconds, refreshing on subsequent passes and stacking up to 25 times.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Noxious Slipstream:</span> For each stack, Singed gains 25% bonus movement speed, up to a maximum of 625%.</p>"
    },
    {
      "description": "This effect cannot occur on the same target more than once every few seconds."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Singed/ability-icon/p",
  "notes": "No additional details.",
  "onTargetCdStatic": "8",
  "targeting": "Passive"
}
export default ability
