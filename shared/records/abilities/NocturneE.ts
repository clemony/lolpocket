// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "E",
  "name": "Unspeakable Horror",
  "affects": "Enemies",
  "blurb": "Passive:  Nocturne gains  bonus movement speed while moving towards  feared targets.",
  "castTime": "none",
  "cooldown": "15 / 14 / 13 / 12 / 11",
  "cost": "60 / 65 / 70 / 75 / 80",
  "damageType": "Magic damage",
  "effectRadius": "1000",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Nocturne gains 90% bonus movement speed while facing nearby feared targets.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nocturne torments the target, forming a tether between himself and the target for 2 seconds, during which the target takes magic damage every 0.5 seconds over the duration.</p>",
      "leveling": [
        {
          "attribute": "Total Magic Damage",
          "modifiers": [
            {
              "values": "80 / 125 / 170 / 215 / 260"
            },
            {
              "unit": "% AP",
              "values": "100"
            }
          ]
        },
        {
          "attribute": "Magic Damage per Tick",
          "modifiers": [
            {
              "values": "20 / 31.25 / 42.5 / 53.75 / 65"
            },
            {
              "unit": "% AP",
              "values": "25"
            }
          ]
        }
      ]
    },
    {
      "description": "If the tether is not broken by the end of its duration, the target is feared for a duration while being slowed by 90%.",
      "leveling": [
        {
          "attribute": "Disable Duration",
          "modifiers": [
            {
              "unit": " seconds",
              "values": "1.25 / 1.5 / 1.75 / 2 / 2.25"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Nocturne/ability-icon/e",
  "notes": "Feared enemies in a  180° total angle within Nocturne's facing direction will trigger Unspeakable Horror's passive.\nCasting Unspeakable Horror may grant Nocturne permanent  ghosting until he has died.(bug)\n Spell shield will block the tether's application but not the damage and aftereffects of one already applied.",
  "projectile": "FALSE",
  "resource": "Mana",
  "spellEffects": "DoT",
  "spellshieldable": "Special",
  "targeting": "Unit",
  "targetRange": "425",
  "tetherRadius": "465"
}
export default ability
