// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Ace in the Hole",
  "width": "80",
  "affects": "Enemies",
  "castTime": "0.375",
  "cooldown": "90",
  "cost": "100",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Caitlyn locks onto the target enemy champion and channels for 1 second, revealing them as well as revealing herself.</p>"
    },
    {
      "description": "Ace in the Hole is placed on a 5-second cooldown if canceled."
    },
    {
      "description": "Once Caitlyn completes the channel, she fires a homing bullet toward the target that deals physical damage to the first enemy champion it hits, increased by 0% - 50% (based on critical strike chance).",
      "leveling": [
        {
          "attribute": "Physical damage",
          "modifiers": [
            {
              "values": "300 / 475 / 650"
            },
            {
              "unit": "% bonus AD",
              "values": "100"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Caitlyn/ability-icon/r",
  "notes": "The following will cancel Ace in the Hole's channel (mana expenditure is not compensated):\nCaitlyn is  interrupted.\nThe target becomes  untargetable.\nCaitlyn or her target  dies.\nAce in the Hole reveals the target and Caitlyn through a buff that lasts for up to 4 seconds.\nThe buff is applied to the target from the start of the cast time.\nThe buff ends prematurely when the channel is canceled or the bullet hits an enemy.\nThe target is revealed for 1 second if the buff is ended prematurely.\nIt is not removed if the cast time is cancelled or the bullet missile is destroyed.(note)\nThe bullet missile will fail to hit the primary target if they are  untargetable upon arrival, dealing no damage.\nThe ability also goes on a 5-second  cooldown if Caitlyn enters  resurrection during the cast time.\nThe cast time does not end prematurely but the channel will be immediately canceled the moment the cast time completes.\nIf the target dies after the bullet has been fired, the shot will continue towards their corpse and may still hit other enemy champions.\nThe bullet has a  sight radius of 1500 attached to it.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).\nThis excludes losing sight of the target.\nThe following table refers for interactions while Caitlyn is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "3200",
  "spellEffects": "spell",
  "spellshieldable": "True",
  "targeting": "Unit",
  "targetRange": "3500"
}
export default ability
