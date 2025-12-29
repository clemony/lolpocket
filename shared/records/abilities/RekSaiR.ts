// Updated Patch 15.24.1 - 12/26/2025 07:04:13 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Void Rush",
  "affects": "Enemies",
  "castTime": "0.25",
  "cooldown": "120 / 100 / 80",
  "cost": "0",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Rek'Sai applies Marked as Prey to enemy champions she damages, lasting for 5 seconds.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Rek'Sai singles out the target enemy champion Marked as Prey, becoming displacement immune and unable to act and vanishing into the ground, as well as revealing the target for 2 seconds. After 0.9 seconds, she blinks to a location near the target, becoming targetable again and emerging from the ground to pounce at them. Upon arrival, she slashes at the target with her claws, dealing physical damage, and dashes 125 units through them.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "150 / 250 / 350"
            },
            {
              "unit": "% bonus AD",
              "values": "100"
            },
            {
              "tooltip": "Scaling per rank:\n15 / 20 / 25% of target's maximum health",
              "unit": "% of target's maximum health",
              "values": "15 - 25"
            }
          ]
        }
      ]
    },
    {
      "description": "If cast while in Burrowed form, Rek'Sai will automatically Unburrow at the end of Void Rush's cast time, placing Burrow on a 1-second cooldown without triggering Unburrow's effects. If Burrow is already on cooldown, its remaining cooldown is set to 1 second."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/RekSai/ability-icon/r",
  "notes": "Rek'Sai will track the target if they change locations while dashing to them. Once she has started to dash through the target however, she will no longer track them.\nShe will dash through the target's previous location without dealing damage if the target moves beyond 1750 units.\nIf the target moves 1000 or more units away right before being struck, they will not be dealt the damage.\nIn this case, the target is displaced in the moment when Rek'Sai starts to dash through and prepares to strike them.\nVoid Rush will be cancelled and placed on a  5-second cooldown if the target dies or moves too far away during the cast time or while Rek'Sai is vanished, or if they are no longer in  sight during the cast time.\nIf the ability is cancelled while Rek'Sai is vanished, she will reappear and emerge from the ground without performing the dash once the 0.9-second delay has elapsed.\nIf the ability is cancelled from losing sight of the target, Rek'Sai will not vanish into the ground after the cast time (but still becoming untargetable) and will remain in place while unable to act for 0.5 seconds.(note)\nThe ability will not be cancelled if the target becomes  untargetable during the cast time or while Rek'Sai is vanished.\nShe will still dash to the target even if they are untargetable.\nAll sources of damage by Rek'Sai count for applying the mark.\nRek'Sai gains the  displacement immunity from the start of the cast time, and loses it once her dash ends.\nRek'Sai can activate Void Rush either while  Burrowed or  Unburrowed.\nShe will always emerge as Unburrowed.\nIf Rek'Sai enters  resurrection during the cast time, Void Rush is canceled and goes on a 5 second cooldown.\nIf the resurrection occurs while  vanished, she will emerge and pounce the target immediately.\nVoid Rush will not deal damage if the target is  untargetable by the time Rek'Sai reaches them.\nAfter vanishing and then emerging, Rek'Sai will leave behind a temporary, cosmetic  Tunnel. She cannot interact with this Tunnel, and each entrance is destroyed 2.25 seconds after being spawned from when she vanished or emerged.\nA screeching noise made by Rek'Sai can be heard globally after Void Rush is cast (will be heard by enemies even if they don't have  sight of Rek'Sai and/or her destination).\nThe following table refers for interactions while Rek'Sai is performing Void Rush:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath\n\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll summoner spells are disabled\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
  "speed": "1400",
  "spellEffects": "spell",
  "spellshieldable": "True",
  "targeting": "Unit",
  "targetRange": "1500"
}
export default ability
