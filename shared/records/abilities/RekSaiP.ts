// Updated Patch 15.24.1 - 12/26/2025 07:04:13 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Fury of the Xer'Sai",
  "affects": "Self",
  "blurb": "Innate:  Rek'Sai's basic attacks and ability hits generate  Fury, which continually expires after a few seconds out of combat.",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Rek'Sai basic attacks generate 25 Fury on-hit, reduced to 4 per hit against minions, and to 5 per hit against wards, and plants. Rek'Sai's abilities other than Queen's Wrath generate 25 Fury upon hitting at least one unit. Prey Seeker does not generate Fury against non- champions. After 8 seconds of being out of combat, she loses 20 Fury per second.</p>"
    },
    {
      "description": "When Rek'Sai becomes Burrowed, she consumes her current Fury over 3 seconds to heal for up to 9% - 20% (based on level) maximum health at 100 Fury, stopping once fully consumed or she reaches full health. If she starts generating Fury while Burrowed, the consumption occurs after 5 seconds."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/RekSai/ability-icon/p",
  "notes": "Fury bar changes from Yellow to Red when full.\nWhen Rek'Sai automatically consumes Fury while Burrowed (no transformation), the healing buff will refresh every second while she has/maintains over 25 Fury.(note) This causes the healing to last 6 seconds at 100 Fury.\nPENDING FOR TEST: Fury generation with parrying effects ( blind,  dodge,  block)",
  "targeting": "Passive"
}
export default ability
