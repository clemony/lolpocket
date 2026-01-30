// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "W",
  "name": "Arise!",
  "affects": "Enemies",
  "blurb": "Active:  Azir summons a Sand Soldier to attack nearby targets for him, replacing his  basic attacks against enemies within their range. Their attacks deal magic damage to enemies in a line.",
  "castTime": "0.25",
  "cooldown": "1.5",
  "cost": "40 / 35 / 30 / 25 / 20",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Azir summons a Sand Soldier at the target location that is untargetable, lasts 10 seconds, and grants sight of its surroundings. The Sand Soldier expires twice as fast while within range of an enemy turret, and does so instantly if Azir is too far away.Azir periodically stocks a Sand Soldier, up to a maximum of 2.</p>"
    },
    {
      "description": "When Azir declares a basic attack against an enemy in a soldier's attack range, the Sand Soldier attacks in his stead, thrusting their spear in the target's direction to deal magic damage to enemies struck in a line, applying on-hit effects to the primary target, with on-hit damage reduced to 50% effectiveness, and triggering on-attack effects once. Targets hit beyond the closest take 20% - 100% (based on level) damage. Subsequent Sand Soldiers against the same target deal 25% damage.",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "0 / 2.65 / 5.29 / 7.94 / 10.59 / 13.24 / 15.88 / 18.53 / 21.18 / 23.82 / 26.47 / 29.12 / 31.76 / 34.41 / 37.06 / 39.71 / 42.35 / 45"
            },
            {
              "values": "50 / 65 / 80 / 95 / 110"
            },
            {
              "tooltip": "Scaling per rank:\n32.5 / 40 / 47.5 / 55 / 62.5% AP",
              "unit": "% AP",
              "values": "32.5 - 62.5"
            }
          ]
        }
      ]
    },
    {
      "description": "Sand Soldiers cannot attack structures, wards, nor traps."
    },
    {
      "description": "See Pets for more details about Sand Soldiers."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Azir/ability-icon/w",
  "notes": "Nearsighting effects will only allow Azir to perform attacks from soldiers within his own sight radius.\nAzir must rank Arise! as his first ability, and will do so automatically if he reaches level 2 before ranking an ability.\nAzir can only command his soldiers to attack if he is able to declare basic attack commands himself, meaning  crowd control effects that disable attacking, such as  disarm, do not allow him to order his soldiers to attack in his stead.\nSand Soldiers can attack  Powder Kegs,  Tentacles, and  Sentinels, but can only damage them if they are the main target of the attack.\nDamage to enemy champions from Sand Soldier stabs will draw minion aggro even if the enemy champion was not the primary target.(note)\nCommanding a soldier to attack will trigger  on-attack effects, but will not apply any of these effects to the target hit.\nSand Soldiers will attack the closest enemy to Azir when using attack move (or A + RMB / Shift + RMB) or  auto-attack.\nAn exclamation mark (!) will appear above the Sand Soldier's head when within the range of an enemy  turret.",
  "projectile": "FALSE",
  "rechargeRate": "12 / 10.5 / 9 / 7.5 / 6",
  "resource": "Mana",
  "spellEffects": "aoe",
  "spellshieldable": "false",
  "targeting": "Location",
  "targetRange": "525",
  "tetherRadius": "660"
}
  export default ability
