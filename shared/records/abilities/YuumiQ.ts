// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "Q",
  "name": "Prowling Projectile",
  "width": "120",
  "affects": "Enemies",
  "castTime": "none",
  "cooldown": "6.5",
  "cost": "50 / 55 / 60 / 65 / 70 / 75",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Yuumi fires an errant missile in the target direction that deals magic damage to the first enemy hit. If the target is a champion, they are also revealed and slowed by 20% for 1 second.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "60 / 95 / 130 / 165 / 200 / 235"
            },
            {
              "unit": "% AP",
              "values": "20"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Attached Bonus:</span> Yuumi channels for up to 1.35 seconds to steer the missile at a slower speed. After being in flight for the same duration, the missile accelerates in its current direction for 0.5 seconds to deal increased damage and apply a stronger slow against champions that decays to 20% over 2 seconds.</p>",
      "leveling": [
        {
          "attribute": "Increased Damage",
          "modifiers": [
            {
              "values": "80 / 135 / 190 / 245 / 300 / 355"
            },
            {
              "unit": "% AP",
              "values": "30"
            }
          ]
        },
        {
          "attribute": "Enhanced Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "50 / 53 / 56 / 59 / 62 / 65"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Best Friend Bonus:</span> Prowling Projectile always applies its enhanced slow against champions and hitting a champion grants her Best Friend bonus magic damage on-hit for 5 seconds, increased by 0% - 75% (based on Anchor's critical strike chance).</p>",
      "leveling": [
        {
          "attribute": "Bonus Magic Damage On-Hit",
          "modifiers": [
            {
              "values": "10 / 12 / 14 / 16 / 18 / 20"
            },
            {
              "unit": "% AP",
              "values": "5"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Yuumi/ability-icon/q",
  "notes": "Prowling Projectile is able to turn clockwise or counter-clockwise at a rate of 90° per 0.5 seconds. The missile can turn a maximum of 243° in both directions combined before accelerating.\nProwling Projectile can be buffered 0.5 seconds before it comes off cooldown.\nProwling Projectile is slower when  attached (before the acceleration). If Yuumi unattaches after using it, the missile will go back to its normal speed, without losing the acceleration later. This results in the fastest and longest ranged version of this ability.\nThe  Best Friend's empowerment respects  enchantment redirection.\nThe following table refers for interactions while Yuumi is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nN/A\n\n\nAbilities\n\n Detaching and  Final Chapter interrupt.  Zoomies is usable.\n\n\nMovement\n\nN/A\n\n\nItems\n\nUsable\n\nAll items are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\nAll summoner spells are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "950 / 850 / 1650",
  "spellEffects": "Spell",
  "spellshieldable": "True",
  "targeting": "Direction",
  "targetRange": "850"
}
export default ability
