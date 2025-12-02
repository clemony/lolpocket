// Updated Patch 15.23.1 - 11/30/2025 12:24:04 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Roar of the Slayer",
  "width": "160",
  "affects": "Enemies",
  "blurb": "Active:  Sion bellows a shockwave in the target direction that deals magic damage and shortly  slows the first enemy hit,  reducing their armor for a few seconds.",
  "castTime": "0.25",
  "cooldown": "12 / 11 / 10 / 9 / 8",
  "cost": "35 / 40 / 45 / 50 / 55",
  "damageType": "Magic damage",
  "effectRadius": "130",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Sion bellows a shockwave in the target direction that deals magic damage to the first enemy hit, slows them for 2.5 seconds and inflicts them with 25% armor reduction for 4 seconds.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "65 / 100 / 135 / 170 / 205"
            },
            {
              "unit": "% AP",
              "values": "55"
            }
          ]
        },
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "40 / 45 / 50 / 55 / 60"
            }
          ]
        }
      ]
    },
    {
      "description": "If the target is a minion or non-epic monster, they are also stunned for 0.75 seconds and knocked back for up to 1350 units further, though not through terrain, applying Roar of the Slayer's effects to enemies they pass through as well as briefly granting sight of the area around their trajectory."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Sion/ability-icon/e",
  "notes": "Minions or monsters that are flung away are immune to minion damage and take their damage once they are stopped if they would die to Roar of the Slayer's damage, by either colliding with terrain, reaching the end of their trajectory, or having their displacement interrupted.\nUnlike the intial single-target projectile, a thrown minion or monster is not blocked by  Wind Wall or similar effects.\nGaining or losing AP, or upgrading the ability while its projectile is traveling will change its damage for every future hit. This applies to both the intial single-target projectile, as well as the minion-projectile.\nThis ability will cast from wherever the caster is at the end of the cast time.",
  "projectile": "SPECIAL",
  "resource": "Mana",
  "speed": "1800",
  "spellEffects": "Area of effect",
  "spellshieldable": "True",
  "targeting": "Direction"
}
export default ability
