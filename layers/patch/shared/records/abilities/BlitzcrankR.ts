// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "R",
  "name": "Static Field",
  "affects": "Enemies",
  "blurb": "Passive: While Static Field is ready,  Blitzcrank's  basic attacks apply a  stack of Static Field.",
  "castTime": "0.25",
  "cooldown": "60 / 40 / 20",
  "cost": "100",
  "damageType": "Magic damage",
  "effectRadius": "600",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> While Static Field is not on cooldown, Blitzcrank's basic attacks apply a stack to the target on-hit. While the target is afflicted, one stack is consumed every 1 second to strike them with lightning, dealing magic damage each time.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "50 / 100 / 150"
            },
            {
              "unit": "% AP",
              "values": "30 / 40 / 50"
            },
            {
              "unit": "% maximum mana",
              "values": "2"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Blitzcrank detonates a static field that destroys the damage-mitigating shields of all nearby enemies, excluding the shields of monsters, and then deals them magic damage and silences them for 0.5 seconds.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "275 / 400 / 525"
            },
            {
              "unit": "% AP",
              "values": "100"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Blitzcrank/ability-icon/r",
  "notes": "Blitzcrank's attacks do not have to deal damage to apply the mark.\nBlitzcrank's attacks will not apply a mark if the attack is  dodged or missed while Blitzcrank is  blinded.\nA mark will still be applied if the attack is  blocked.\nThe mark will be consumed even if the target becomes  untargetable.\nThe lightning bolts deal  spell damage while the static field applies  area damage.\nThis ability will cast from wherever the caster is at the end of the cast time.\nEven if Static Field is blocked by a  spell shield, it will still destroy any existing damage  shields on the target.",
  "resource": "Mana",
  "spellEffects": "Special",
  "spellshieldable": "true",
  "targeting": "Auto"
}
  export default ability
