// Updated Patch 15.24.1 - 12/26/2025 07:04:02 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Seismic Shard",
  "affects": "Enemies",
  "blurb": "Active:  Malphite sends a shard to the target enemy that deals magic damage and  slows them for a few seconds.",
  "castTime": "0.25",
  "cooldown": "8",
  "cost": "70 / 75 / 80 / 85 / 90",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Malphite sends a shard to the target enemy that deals magic damage and slows them for 3 seconds.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "70 / 120 / 170 / 220 / 270"
            },
            {
              "unit": "% AP",
              "values": "60"
            }
          ]
        },
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "20 / 25 / 30 / 35 / 40"
            }
          ]
        }
      ]
    },
    {
      "description": "Malphite also gains bonus movement speed equal to the raw amount the target lost from the slow for the duration."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Malphite/ability-icon/q",
  "notes": "The rock spawns 100 units in front of Malphite.\nMalphite will gain the bonus movement speed for the full duration as long as Seismic Shard impacts the target.\nBoth a buff shown in the hotbar and duration bar above the ability icon will indicate the remaining duration.\nSeismic Shard's movement speed gain is entirely based off the target's current, and loss of, movement speed.\nTargets that are already  slowed by another effect will grant Malphite diminished movement speed.\n Slow-resistant and  slow-immune targets will reduce or nullify Malphite's gain.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1200",
  "spellEffects": "single",
  "spellshieldable": "Special",
  "targeting": "Unit",
  "targetRange": "625"
}
export default ability
