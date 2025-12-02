// Updated Patch 15.23.1 - 11/30/2025 12:24:08 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Deadly Venom",
  "affects": "Enemies",
  "blurb": "Innate:  Twitch's  basic attacks apply  stacks of Deadly Venom for a few seconds, which stacks up to a cap.",
  "damageType": "True damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Twitch's basic attacks apply a stack of Deadly Venom for 6 seconds upon landing, refreshing on subsequent applications and stacking up to 6 times.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Deadly Venom:</span> For each stack, the target is dealt[ 1 / 2 / 3 / 4 / 5 (based on level) (+ 3% AP) true damage per second over the duration, ][ 6 / 12 / 18 / 24 / 30 (based on level) (+ 18% AP) total true damage over the duration, ]for a maximum of[ 6 / 12 / 18 / 24 / 30 (based on level) (+ 18% AP) true damage with each tick. ][ 36 / 72 / 108 / 144 / 180 (based on level) (+ 108% AP) total true damage over the duration. ]This effect is considered a poison.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Twitch/ability-icon/p",
  "notes": "The first 5 stacks on a target are indicated each by a small mark around them, while a target affected by the maximum stacks of 6 is indicated by a single large mark above them instead.\nDeadly Venom does not affect  structures.\n Runaan's Hurricane's Wind's Fury bolts are special-cased to generate one Deadly Venom stack per enemy hit.",
  "spellEffects": "default",
  "spellshieldable": "False",
  "targeting": "Passive"
}
export default ability
