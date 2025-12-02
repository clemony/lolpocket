// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Icathian Rain",
  "affects": "Enemies",
  "blurb": "Active:  Kai'Sa shoots a swarm of missiles that evenly seek out nearby enemies, dealing physical damage.",
  "castTime": "none",
  "cooldown": "10 / 9 / 8 / 7 / 6",
  "cost": "55",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kai'Sa releases a swarm of 6 missiles that evenly distributes among nearby visible enemies, each one hitting their target after 0.4 seconds to deal physical damage. Minions below 35% health take double damage.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage Per Missile",
          "modifiers": [
            {
              "values": "40 / 55 / 70 / 85 / 100"
            },
            {
              "unit": "% bonus AD",
              "values": "55"
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
      "description": "Non-minions take 25% damage from missiles beyond their first.",
      "leveling": [
        {
          "attribute": "Reduced Damage Per Missile",
          "modifiers": [
            {
              "values": "10 / 13.75 / 17.5 / 21.25 / 25"
            },
            {
              "unit": "% bonus AD",
              "values": "13.75"
            },
            {
              "unit": "% AP",
              "values": "5"
            }
          ]
        },
        {
          "attribute": "Total Single-Target Damage",
          "modifiers": [
            {
              "values": "90 / 123.75 / 157.5 / 191.25 / 225"
            },
            {
              "unit": "% bonus AD",
              "values": "123.75"
            },
            {
              "unit": "% AP",
              "values": "45"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Evolution:</span> Requires[ 100 - 56 (based on level) attack damage from items ][ 100 attack damage from items and stat growth ]to upgrade : Icathian Rain instead fires 12 missiles.</p>",
      "leveling": [
        {
          "attribute": "Total Evolved Single-Target Damage",
          "modifiers": [
            {
              "values": "150 / 206.25 / 262.5 / 318.75 / 375"
            },
            {
              "unit": "% bonus AD",
              "values": "206.25"
            },
            {
              "unit": "% AP",
              "values": "75"
            }
          ]
        }
      ]
    },
    {
      "description": "A nearby enemy is required to cast this ability."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Kaisa/ability-icon/q",
  "notes": "The first missile on a target applies  area damage, while the rest on the same target apply  persistent area damage.\n Spell shields only block the damage from a single missile.\nIcathian Rain acquires its targets upon cast. Moving will not change its targets.\nCharging  Supercharge will not stop the missiles from firing.\nIt takes 1 second for all missiles to fire at a single target.",
  "projectile": "TRUE",
  "resource": "Mana",
  "spellEffects": "special",
  "spellshieldable": "Special",
  "targeting": "Proximity",
  "targetRange": "600"
}
export default ability
