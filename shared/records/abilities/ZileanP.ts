// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Time in a Bottle",
  "affects": "Allies",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Zilean generates 2 / 3.5 / 5 / 6 / 12 (based on level) experience (does not count towards his own level up) every 5 seconds. Time in a Bottle is on cooldown when the game starts and becomes disabled when everyone on Zilean's team including himself has reached level 18.</p>"
    },
    {
      "description": "When he has stored enough to level up an allied champion and grant the same amount of experience to himself, he can select them to channel for 1.2 seconds after a 0.5-second cast time. The channel is interrupted and disabled upon entering combat with enemy champions or taking damage from turrets, placing it on a 10-second cooldown. If Zilean interrupts it himself, it is placed on a 1-second cooldown, increased to 2 if he used a basic attack against a turret to do so. Additionally, if Zilean becomes affected by any form of crowd control, the channel is placed on a 10-second cooldown."
    },
    {
      "description": "A successful channel will grant an equal amount of experience to the ally to-level-up and Zilean, with a combined minimum of 15% of the stored experience."
    },
    {
      "description": "Zilean cannot initiate the channel while he is affected by cast-inhibiting crowd control or a lockout that disables abilities."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Zilean/ability-icon/p",
  "notes": "Time in a Bottle marks allied champions with two circles beneath them; the inner one represents how close they are to leveling up, turning golden when able to activate Time in a Bottle on them.\nThe target allied champion is not required to be out of combat to be leveled up by Time in a Bottle - only Zilean is.\nZilean only consumes the amount of  experience required to level up an allied champion. He retains the excess for later use.\nThe target allied champion is not required to be within range of Zilean for the channel to complete successfully, it will complete regardless of if they move to a far distance.\nThe channel from Time in a Bottle is not interrupted even if the allied champion suddenly levels up. However, no experience will be granted to either player, and the passive will not go on cooldown.\nThe following table refers for interactions while Zilean is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nInterrupts\n\n\nAbilities\n\nInterrupts\n\n\nMovement\n\nInterrupts\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
  "targeting": "Unit",
  "targetRange": "875"
}
export default ability
