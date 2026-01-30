// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "Q",
  "name": "Rocket Grab",
  "width": "140 /  60",
  "affects": "Enemies",
  "castTime": "0.25",
  "cooldown": "20 / 19 / 18 / 17 / 16",
  "cost": "100",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Blitzcrank fires their right hand in the target direction that catches the first enemy hit, dealing them magic damage, stunning them for 0.65 seconds, and pulling them towards Blitzcrank, during which they are revealed.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "110 / 160 / 210 / 260 / 310"
            },
            {
              "unit": "% AP",
              "values": "120"
            }
          ]
        }
      ]
    },
    {
      "description": "Blitzcrank is unable to move or attack while Rocket Grab is in flight and for 0.25 seconds after it hits an enemy."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Blitzcrank/ability-icon/q",
  "notes": "Rocket Grab's range is composed of a missile with 1080 range, and a smaller center-range area check at the end (colloqially known as a 'lollipop').\nThe area check is currently half as long as it is supposed to be, reducing the intended 1150 range of the ability to 1115 range.\nHitting an enemy with this area check only also fails to play the ability's hit SFX. This makes it possible to easily distinguish whether the target was picked up by the missile collision or 'lollipop'.\nTargets  larger than 95 units in radius can be hit by a different edge-range circle check at the end of the missile.\nThe  airborne debuff lasts for up-to 1 second but will end prematurely when the target's movement stops, while the stun will persist (if duration permits).\n Displacement immunity will not resist the application of the  stun.\nThe target's destination lies 75 units in front of Blitzcrank at the start of cast time.\nIf the target is closer than this, the effect will still move them to this location.\nIf this location would be inside static terrain, the target's destination will end up on Blitzcrank's side, even if that means pulling them right on top of Blitzcrank.\nThis can occasionally fail.(bug)\nIf Blitzcrank is being moved (e.g.  Airborne,  Kinematics or  Fate's Call) during the grab, the target will be pulled towards Blitzcranks old location.\nBlitzcrank will be ordered to  basic attack the target once the target arrives.\nIf the target dies to Rocket Grab's damage, they will not be pulled.\nThis ability will cast from wherever the caster is at the end of the cast time.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1800 / 1800",
  "spellEffects": "spell",
  "spellshieldable": "True",
  "targeting": "Direction"
}
  export default ability
