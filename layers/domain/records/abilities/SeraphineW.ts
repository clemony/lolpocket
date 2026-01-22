// Updated Patch 15.24.1 - 12/26/2025 07:04:14 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Surround Sound",
  "affects": "Self, Allies",
  "blurb": "Active:  Seraphine  shields herself and nearby allied champions for a short time. She also gains a burst of  movement speed and grants allies  bonus movement speed.",
  "castTime": "0.25",
  "cooldown": "22",
  "cost": "70 / 75 / 80 / 85 / 90",
  "effectRadius": "800",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Seraphine grants a shield to herself and nearby allied champions for 2.5 seconds. For the same duration, she also gains 20% (+ 2% per 100 AP) decaying bonus movement speed and grants allies 8% (+ 0.8% per 100 AP) bonus movement speed.</p>",
      "leveling": [
        {
          "attribute": "Shield Strength",
          "modifiers": [
            {
              "values": "60 / 80 / 100 / 120 / 140"
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
      "description": "If Seraphine already had a shield at the time of cast, Surround Sound will pulse after the duration, healing herself and nearby allied champions.",
      "leveling": [
        {
          "attribute": "Heal",
          "modifiers": [
            {
              "unit": "% of target's missing health",
              "values": "8 / 10 / 12 / 14 / 16"
            }
          ]
        }
      ]
    },
    {
      "description": "Surround Sound's shield and bonus movement speed can stack up to 2 times. Seraphine can move during Surround Sound's cast time."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Seraphine/ability-icon/w",
  "notes": "Surround Sound uses a modified icon for the  second and  third stack of  Stage Presence.\nSurround Sound's effects are gained at the start of the cast time.\nSeraphine can move during the cast time.\nCasting Surround Sound again during the pulse's delay refreshes the delay.\nThe heal will be canceled and the indicator will disappear upon Seraphine dying.\nOnce the pulse delay ends, the heal occurs instantly on Seraphine and all nearby allied champions.\nThere is a missile that flows through all allied champions which can be blocked by  Wind Wall, without affecting the heal however.\nSurround Sound will affect  untargetable allies.",
  "projectile": "SPECIAL",
  "resource": "Mana",
  "targeting": "Auto"
}
export default ability
