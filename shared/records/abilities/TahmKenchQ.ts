// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "Q",
  "name": "Tongue Lash",
  "width": "140",
  "affects": "Enemies",
  "castTime": "0.25",
  "cooldown": "7 / 6.5 / 6 / 5.5 / 5",
  "cost": "50 / 46 / 42 / 38 / 34",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Tahm Kench lashes his tongue in the target direction that deals magic damage to the first enemy hit and slows them by 50% for 2 seconds. If this hits an enemy champion, Tahm Kench also heals himself.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "unit": " ",
              "values": "75 / 120 / 165 / 210 / 255"
            },
            {
              "values": "6 / 8.47 / 10.94 / 13.41 / 15.88 / 18.35 / 20.82 / 23.29 / 25.76 / 28.24 / 30.71 / 33.18 / 35.65 / 38.12 / 40.59 / 43.06 / 45.53 / 48"
            },
            {
              "unit": "% AP",
              "values": "100"
            },
            {
              "unit": "% AP per 100 bonus health",
              "values": "1.5"
            },
            {
              "unit": "% bonus health",
              "values": "4"
            }
          ]
        },
        {
          "attribute": "Heal",
          "modifiers": [
            {
              "values": "10 / 15 / 20 / 25 / 30"
            },
            {
              "tooltip": "Scaling per rank:\n5 / 5.5 / 6 / 6.5 / 7% of missing health",
              "unit": "% of missing health",
              "values": "5 - 7"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">An Acquired Taste Bonus:</span> The target is stunned for 1.5 seconds. Devour can be cast during Tongue Lash at no cost to pull the target to Tahm Kench before swallowing them.</p>"
    },
    {
      "description": "Tahm Kench is unable to move, attack, or cast Abyssal Dive or Devour on a different target while his tongue is in flight. Tongue Lash's range and travel speed can be increased by Tahm Kench's size."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/TahmKench/ability-icon/q",
  "notes": "Tongue Lash's range and speed scale 1:1 alongside any  size modifiers to Tahm Kench, but will not be reduced below their base values if his overall size modifier is smaller than 100%.\nAs the missile range and speed scale simultaneously, Tongue Lash will always take 0.33 seconds to reach its maximum range (no matter the cast range).\nBecause of this, increasing Tahm Kench's size with items such as  Elixir of Iron allows him to hit targets at even the same distance more quickly and giving them less time to dodge.\n Devour can be 'queued' at any point during Tongue Lash (including the wind-up animation) and will not go on cooldown if Tahm Kench fails to hit a valid target with Tongue Lash.\nAll three  An Acquired Taste stacks will be consumed even if Tongue Lash's  stun is negated.\n An Acquired Taste is applied in a separate damage instance from Tongue Lash.\nThis causes effects like  Bone Plating and  Bloodletter's Curse's Vile Decay to be applied twice.(note)\nThis ability will cast from wherever the caster is at the start of the cast time.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "2800",
  "spellEffects": "Spell",
  "spellshieldable": "True",
  "targeting": "Direction"
}
export default ability
