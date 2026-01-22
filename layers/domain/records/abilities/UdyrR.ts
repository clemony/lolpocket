// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Wingborne Storm",
  "affects": "Self, Enemies",
  "blurb": "Storm Stance:  Udyr summons a blizzard around himself for a few seconds that continuously deals magic damage and  slows enemies inside. His next two basic attacks each cause the blizzard to deal a burst of additional magic damage to enemies inside it.",
  "castTime": "none",
  "cooldown": "6",
  "cost": "40",
  "damageType": "Magic damage",
  "effectRadius": "370 /  1300",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active - Stance:</span> Udyr enters Storm Stance, empowering his next two basic attacks to deal 10 - 40 (based on level) (+ 35% AP) magic damage to nearby enemies.</p>"
    },
    {
      "description": "Additionally, Udyr summons a blizzard around himself for 4 seconds that deals magic damage every 0.5 seconds to nearby enemies and slows them while they remain within. Minions take 50% / 60% / 70% / 80% (based on level) damage.",
      "leveling": [
        {
          "attribute": "Magic Damage per Tick",
          "modifiers": [
            {
              "values": "10 / 18 / 26 / 34 / 42 / 50"
            },
            {
              "unit": "% AP",
              "values": "17.5"
            }
          ]
        },
        {
          "attribute": "Total Magic Damage",
          "modifiers": [
            {
              "values": "80 / 144 / 208 / 272 / 336 / 400"
            },
            {
              "unit": "% AP",
              "values": "140"
            }
          ]
        },
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "15 / 18 / 21 / 24 / 27 / 30"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast - Awaken:</span> Udyr ends the blizzard if it is active and unleashes a glacial storm for 4 seconds that is able to move on its own, as well as causes the empowered attacks to instead deal their damage to enemies within that storm. The storm applies the same effects as the blizzard but deals bonus magic damage equal to[ 1% - 1.75% (based on level) (+ 0.4375% per 100 AP) of the target's maximum health per tick ][ 8% - 14% (based on level) (+ 3.5% per 100 AP) of the target's maximum health over the duration ]and slows by an additional 5%. Against monsters, the[ storm's per-tick damage deals a minimum of 5 - 35 (based on level) and is capped at 10 - 50 (based on level). ][ storm deals a minimum total damage of 40 - 280 (based on level) and is capped at 80 - 400 (based on level) total damage. ]</p>",
      "leveling": [
        {
          "attribute": "Increased Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "20 / 23 / 26 / 29 / 32 / 35"
            }
          ]
        }
      ]
    },
    {
      "description": "The storm grants sight of its surroundings and prioritizes following the last enemy Udyr attacked while it was active, then enemy champions, then non-champions, then Udyr. The storm can only follow visible enemies."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Udyr/ability-icon/r",
  "notes": "The storm that Udyr surrounds himself with is independent from the unleashed storm.\nHe can still cast Wingborne Storm to surround himself with a storm while an unleashed storm from an Awakened cast is active.\nUsing the Awakened cast ends the storm around Udyr if it is active and summons a separate storm that is able to move on its own.\nThe slow debuff has a duration equal to the storm's remaining duration and is removed immediately when the unit leaves the storm's area of effect.\nUnits receive the debuff whenever they are in the storm, even after having it removed from leaving the area.\nIf the target Udyr has most recently attacked is invalid and there are no nearby enemies then the storm will follow him instead.\nThe storm can follow Udyr regardless of how far away he is from it.\nThe storm will remain active even if Udyr dies. Any commands it was issued to follow a target will not be interrupted.\nThe storm will follow its target even if they are not  visible, but only for up to 1 second.\nIf it does not gain vision of its target within that time, it changes its target.\nThe storm is obstructed by terrain. If it encounters terrain, then it will automatically navigate its path towards the target.\nThe empowered attacks will not trigger nor be consumed if they hit a structure or ward or are parried.",
  "resource": "Mana",
  "speed": "109.5 : 250 (based on level)",
  "spellEffects": "aoedot",
  "spellshieldable": "false",
  "targeting": "Auto"
}
export default ability
