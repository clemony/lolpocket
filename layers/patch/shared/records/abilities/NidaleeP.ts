// Updated Patch 16.1 - 01/29/2026 04:26:57 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "P",
  "name": "Prowl",
  "affects": "Enemies, Self",
  "blurb": "Innate - Prowl: While in  brush,  Nidalee becomes  ghosted and gains  bonus movement speed for a short time, increased when facing a nearby enemy  champion. These bonuses briefly persist after exiting brush.",
  "effectRadius": "3000 / 5500",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Prowl:</span> While in brush, Nidalee gains ghosting and 10% bonus movement speed, increased to 30% while facing a visible enemy champion within 1400 range. The bonuses persist for 2 seconds after leaving brush.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Hunt:</span> Hitting monsters or enemy champions with Javelin Toss or Bushwhack when Nidalee is nearby grants her ghosting and 10% bonus movement speed for 4 seconds and applies a Hunted mark to the target for the same duration, during which they are revealed as well as grant sight of a 300-unit radius around them. The bonus movement speed is increased to 30% while facing a Hunted target. Additionally, the first cast of both Takedown and Pounce against a Hunted target is enhanced.</p>"
    },
    {
      "description": "The bonus movement speed from Prowl and Hunt can stack, but cannot exceed 30%."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Nidalee/ability-icon/p",
  "notes": "Bushwhack  reveals and grants  sight around the target for 4 seconds even while Nidalee is not nearby.",
  "targeting": "Passive"
}
  export default ability
