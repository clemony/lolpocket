// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "E",
  "name": "Tantrum",
  "affects": "Enemies",
  "blurb": "Passive:  Amumu gains damage reduction against physical damage.  Tantrum's cooldown is reduced whenever he is hit by a  basic attack.",
  "castTime": "0.25",
  "cooldown": "9 / 8 / 7 / 6 / 5",
  "cost": "35",
  "damageType": "Magic damage",
  "effectRadius": "350",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Amumu reduces every instance of pre-mitigation physical damage taken, capped at 50% of the damage instance.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage Reduction",
          "modifiers": [
            {
              "values": "5 / 7 / 9 / 11 / 13"
            },
            {
              "unit": "% bonus armor",
              "values": "3"
            },
            {
              "unit": "% bonus magic resistance",
              "values": "3"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Amumu releases his anger, dealing magic damage to nearby enemies.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "65 / 95 / 125 / 155 / 185"
            },
            {
              "unit": "% AP",
              "values": "50"
            }
          ]
        }
      ]
    },
    {
      "description": "Tantrum's current cooldown is reduced by 0.75 seconds whenever Amumu is hit by a basic attack on-hit."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Amumu/ability-icon/e",
  "notes": "A  basic attack's  basic damage and each on-hit effect are all separate damage instances, and may be reduced each if they deal physical damage.\nTantrum's cooldown reduction will trigger multiple times for effects such as  Double Strike and  Guinsoo's Rageblade's Phantom Hit.\nThe cooldown will be reduced, even if the incoming attack is  blocked.\nThe cooldown will not be reduced, if the incoming attack misses due to the enemy being  blinded.\nThis ability will cast from wherever the caster is at the end of the cast time.",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Auto"
}
  export default ability
