// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Starcall",
  "affects": "Self, Enemies",
  "blurb": "Active:  Soraka calls down a star upon the target location that deals magic damage and briefly  slows enemies hit. If this hits at least one enemy  champion, the star dust returns to Soraka to grant her Rejuvenation for a short time.",
  "castTime": "0.25",
  "cooldown": "8 / 7 / 6 / 5 / 4",
  "cost": "45 / 50 / 55 / 60 / 65",
  "damageType": "Magic damage",
  "effectRadius": "265",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Soraka calls down a star upon the target location that grants sight of the area before landing after 0.25 - 1 (based on target range) seconds, dealing magic damage to enemies hit and slowing them by 30% for 1.5 seconds.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "85 / 120 / 155 / 190 / 225"
            },
            {
              "unit": "% AP",
              "values": "35"
            }
          ]
        }
      ]
    },
    {
      "description": "If this hits at least one enemy champion, star dust returns to Soraka, granting her Rejuvenation for 2.5 seconds. While Soraka has Rejuvenation, casting Astral Infusion will also grant Rejuvenation to the target for the same duration."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Rejuvenation:</span> Heal every 0.2 seconds and gain bonus movement speed that decays over the duration.</p>",
      "leveling": [
        {
          "attribute": "Total Heal",
          "modifiers": [
            {
              "values": "60 / 75 / 90 / 105 / 120"
            },
            {
              "unit": "% AP",
              "values": "30"
            }
          ]
        },
        {
          "attribute": "Heal per Tick",
          "modifiers": [
            {
              "values": "5 / 6.25 / 7.5 / 8.75 / 10"
            },
            {
              "unit": "% AP",
              "values": "2.5"
            }
          ]
        },
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
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Soraka/ability-icon/q",
  "notes": "Starcall counts as hitting even if it gets blocked by  spell shield, granting Rejuvenation.\nBoth the initial hit and the Rejuvenation projectile can be  intercepted.\nRejuvenation heals over 12 ticks, with the first 4 each healing for about 15% of the heal, the next 4 ticks for about 5.5% each, and the last 4 for about 4.5% each.\nRejuvenation won't be granted to Soraka and she won't be able to make use of the health cost reduction on  Astral Infusion until the projectile gets to her, but she is able to Rejuvenate allies as soon as the target is hit.",
  "projectile": "TRUE",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "800"
}
export default ability
