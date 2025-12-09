// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "W",
  "name": "The Call of the Pack",
  "affects": "Self",
  "blurb": "Active:  Naafiri goes on the hunt for a period, briefly becoming  untargetable and  vanishing her  Packmates, gaining  bonus attack damage and granting herself and her Packmates  bonus move speed. She will also summon extra Packmates that last for the hunt's duration.",
  "castTime": "0.75",
  "cooldown": "26 / 24 / 22 / 20 / 18",
  "cost": "60",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Naafiri goes on the hunt for the next 5 seconds, becoming untargetable for the first 1 second and vanishing all of her active Packmates in the first 0.9 seconds. Her active Packmates will reappear near her after their vanish.</p>"
    },
    {
      "description": "After 1.25 seconds into the hunt, Naafiri summons 2 additional Packmates that last for the remaining duration and can exceed We Are More's summon cap."
    },
    {
      "description": "While on the hunt, Naafiri gains 20% AD bonus attack damage and grants herself and all Packmates bonus movement speed.",
      "leveling": [
        {
          "attribute": "Bonus Movement Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "20 / 22.5 / 25 / 27.5 / 30"
            }
          ]
        }
      ]
    },
    {
      "description": "Casting Hounds' Pursuit extends The Call of the Pack's hunt duration by 1.75 seconds, up to its original duration."
    },
    {
      "description": "Naafiri can move during The Call of the Pack's cast time."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Naafiri/ability-icon/w",
  "notes": "While The Call of the Pack is active, it increases  We Are More's summon cap to 4 / 5 / 6 / 7 (based on level).\nThe order of additional Packmates that despawn is predetermined, most likely their internal spawn IDs. The ability does not consider which Packmates are the closest or healthiest.\nThis ability will cast from wherever the caster is at the end of the cast time.",
  "resource": "Mana",
  "targeting": "Auto"
}
export default ability
