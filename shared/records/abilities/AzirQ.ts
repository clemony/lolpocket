// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Conquering Sands",
  "affects": "Enemies",
  "blurb": "Active:  Azir sends all Sand Soldiers to dash towards a location. They deal magic damage and  slow enemies they pass through.",
  "castTime": "0.25",
  "cooldown": "14 / 12 / 10 / 8 / 6",
  "cost": "70 / 80 / 90 / 100 / 110",
  "damageType": "Magic damage",
  "effectRadius": "150",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Azir orders all Sand Soldiers to dash toward the target location, dealing magic damage to all enemies they pass through as well as those in front of them upon arrival, and slowing them by 25% for 1 second.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "60 / 80 / 100 / 120 / 140"
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
      "description": "Enemies hit by subsequent soldiers take no additional damage and are instead slowed by an additional 25% per soldier."
    },
    {
      "description": "A summoned Sand Soldier is required to cast this ability."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Azir/ability-icon/q",
  "notes": "Sand Soldiers dash about 50 units further away from Azir than the target location, making them stab targets slightly further away.\nSand Soldiers will stop their movement upon colliding with  Wind Wall or  Rebuttal, but not  Unbreakable.\nSand Soldiers will automatically turn to face nearby enemy champions after the dash.\nThis happens even if they're in  stealth.(bug)",
  "projectile": "SPECIAL",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "740"
}
export default ability
