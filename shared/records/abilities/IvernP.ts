// Updated Patch 15.24.1 - 12/26/2025 07:03:48 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Friend of the Forest",
  "affects": "Monsters",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Ivern cannot attack nor damage non-epic monsters. Instead, targeting a jungle camp initiates a 2.5 second channel that will plant a grove upon the camp. Placing a grove costs 94.5 - 0.14 (based on level) health and 90 - 0.37 (based on level) mana. The channel cannot be cancelled in the first 0.15 seconds and in the last 0.5 seconds.</p>"
    },
    {
      "description": "Ivern cannot place a grove while he is affected by cast-inhibiting crowd control or a lockout that disables abilities."
    },
    {
      "description": "The grove matures over 40 - 1 (based on level) seconds. When fully matured, Ivern can target the camp again to free it after a 0.5-second cast time, clearing the camp and receiving the full gold and full experience bounties. Using Smite on a monster within the grove will instantly free the camp regardless of maturity."
    },
    {
      "description": "If the camp's large monster has already been slain prior to planting a grove, Ivern will free the camp upon completing the channel at no cost. Similarly, the grove will instantly mature if the large monster is slain."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Ivern/ability-icon/p",
  "notes": "Freeing the  Krug camp will only grant the  gold and  experience of 1  Ancient Krug, 2  Krugs, and 3  Mini Krugs.\nIvern must be within  275 units of the large monster of the targeted camp to start channeling or collect a grove. The large monsters also must be  visible.\nIf Ivern cannot afford the cost to place a grove, Friend of the Forest is placed on a cooldown equal to the number of seconds it takes for his  health regeneration and/or  mana regeneration to restore him to the amount of health and/or mana needed to afford the cost.\nThe cooldown will update based on Ivern's current health and mana regeneration, as well as his current health and mana.\nFriend of the Forest can be used while Ivern or the camp is in combat and, once the grove is placed,  Smite can be used to instantly claim the camp.  Interrupting Ivern's channel is the only way to contest jungle camps, short of killing the camp during the channel time.\nFreeing a grove causes the monsters within the camp to be dealt 5000 true damage in the  internalraw damage source type by Ivern, despite his inability to damage them.\nFriend of the Forest will leave Ivern at 1 health if cast with exactly the required amount. Friend of the Forest cannot be cast with less, unlike other abilities with health costs.\nNon-epic monsters can attack Ivern if his allies enter combat with the monster and he manages to recieve aggro.(bug)\nIvern can be attacked by  Voidmites without being able to damage them back.(note)\nThe following table refers for interactions while Ivern is  channeling:\nIvern is unable to act during the first 0.15 and last 0.5 seconds of the channel.\n\n\nType\n\nChannel\n\n\nAttacking\n\nInterrupts\n\n\nAbilities\n\nInterrupts\n\n\nMovement\n\nInterrupts\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nDamaging effectsDeath Cast-inhibiting effects",
  "targeting": "Unit"
}
export default ability
