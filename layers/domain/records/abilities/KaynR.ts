// Updated Patch 15.24.1 - 12/26/2025 07:03:51 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Umbral Trespass",
  "affects": "Enemies, Self",
  "blurb": "Passive:  Kayn marks enemy champions he has damaged for a few seconds.",
  "castTime": "none",
  "cooldown": "120 / 100 / 80",
  "cost": "100",
  "damageType": "Physical damage",
  "effectRadius": "300 / 500",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Kayn marks enemy champions he damaged in the last 3.15 seconds.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kayn vanishes and dashes to a marked enemy champion over 0.25 seconds, attaching himself to them at the end of the dash. After 0.5 seconds of his arrival, he channels for up to 2 seconds, during which the target is revealed. Umbral Trespass can be recast during the channel after 0.1 seconds have elapsed, and does so automatically after the duration or if it is interrupted.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> After a delay of 0.5 seconds to 0.75 seconds, Kayn deals physical damage to the target and dashes out from their body in the target direction, detaching himself from them and becoming targetable again at the end of the dash.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "150 / 250 / 350"
            },
            {
              "unit": "% bonus AD",
              "values": "150"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Shadow Assassin Bonus:</span> Umbral Trespass gains 200 bonus cast range and emerge range. Additionally, emerging will reset The Darkin Scythe's cooldown.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Darkin Bonus:</span> Umbral Trespass is modified to deal physical damage equal to 15% (+ 10% per 100 bonus AD) of the target's maximum health, and also heals Rhaast for 11.25% (+ 7.5% per 100 bonus AD) of the target's maximum health after the recast's delay.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Kayn/ability-icon/r",
  "notes": "Umbral Trespass'  recast delay lasts for an inconsistent period of time.(bug)\nThe initial cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade.\nThe recast (both manual and automatic) does not.\nThe ability activation happens when Kayn is attached to his target and the channel starts.\n Kassadin cannot reduce  Force Pulse's cooldown because Kayn is untargetable during the activation.\nThe ability will recast if Kayn is ordered a movement command.\nKayn will reappear from being  vanished as soon as the recast is cast, while remaining untargetable.\nUpon recast, Kayn will always damage his target from the east, regardless of the direction he chooses to dash in.\nKayn will arrive to the target after 0.25 seconds regardless of how far they move away from him during the dash.\nIf Umbral Trespass is targeted on an enemy with a  spell shield or a  Fiora with her  Riposte active, the ability will fail to cast entirely, being placed on full cooldown without triggering the active's effects (as well as on-cast effects).\nSpell shield will not block the damage from the recast.\nIf the target  dies, enters  resurrection, or is sent to the  Death Realm while Kayn is  attached, the channel will be cancelled and he will instantly detach and reappear on top of the target's location. This does not occur if Kayn is in the process of emerging from the target.\nIf those same conditions occur before the attachment, Kayn will reappear at the target's location at the end of his dash.\nUmbral Trespass cooldown will be refunded at the end of the  channel if any of these conditions occur during it.\nIf the target is a  clone that expires while Kayn is attached, Umbral Trespass will recast automatically.\nIf Kayn dies while  attached and the recast is available, Umbral Trespass'  damage is dealt immediately. If the recast is not available, Umbral Trespass'  damage is not dealt at all.\nEntering  resurrection while  attached does not deal Umbral Trespass'  damage regardless of if the recast is available or not.\nKayn will detach immediately in both cases.\nUmbral Trespass'  interactions with  crowd control:\nAll forms of  cast-inhibiting crowd control will interrupt the channel.\nUpon being cast, Kayn is  cleansed of  drowsiness effects.\nDuring Umbral Trespass, Kayn is immune to  fear.\nDespite being a movement channel, Umbral Trespass is not interrupted by  root.\n Root will not disable Umbral Trespass'  recast, despite it being a dash.\nAs  Rhaast, Umbral Trespass will grant the  heal automatically if the target dies during the channel.\nThe heal is not granted if the target dies before the channel starts.\nKayn will draw  turret aggro after the recast's dash, despite the damage being dealt to the enemy while he was untargetable.\nUntil the recast or after the duration, the ability will have had no effect on the target for the purposes of  Electrocute or the 'in-combat' status.\nThe damage is not blocked if the target is  untargetable at the time of the recast.\nWhile  dismounting,  Kled blocks the damage of Umbral Trespass.(bug)\nUmbral Trespass cannot be cast on targetable  zombie states such as  Sion during  Glory in Death.\nDuring Umbral Trespass, Kayn will not take the self-inflicted damage from  Death's Dance's Ignore Pain if the damage was sourced from a  turret.\nKayn will copy his target's total size for Umbral Trespass'  duration, even if their size is smaller than his.\nThe player's screen will direct to the target's position upon attaching.\nAs  Rhaast, an  alternate icon is used for the initial activation of Umbral Trespass.\nThe following table refers for interactions while Kayn is  channeling and dashing out of the victim:\nThe dash out is not interrupted by  cast-inhibiting crowd control.\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall\n\n\nInterrupted by\n\n Hexflash\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
  "resource": "Mana",
  "spellEffects": "spell",
  "spellshieldable": "Special",
  "targeting": "Unit / Direction",
  "targetRange": "550 / 750"
}
export default ability
