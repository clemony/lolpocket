// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Soul Unbound",
  "affects": "Self, Enemies",
  "blurb": "Active:  Yone  dashes in the target direction, leaving his body behind and entering Spirit Form for a few seconds.",
  "castTime": "None / 0.225",
  "cooldown": "22 / 19 / 16 / 13 / 10",
  "cost": "0",
  "damageType": "True damage",
  "effectRadius": "Global",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Yone dashes a fixed distance in the target direction, including through terrain, discarding his body and entering Spirit Form for 5 seconds. Yone's body is untargetable and is sent the same distance behind the cast location, though not through terrain, and is reclaimed when Soul Unbound ends.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Spirit Form:</span> Yone becomes ghosted and gains 10% - 30% (based on seconds active) bonus movement speed. His damaging basic attacks and abilities against enemy champions apply a mark that stores a portion of the post-mitigation damage dealt to the target by his attacks and abilities.</p>",
      "leveling": [
        {
          "attribute": "Damage Stored",
          "modifiers": [
            {
              "unit": "% of damage dealt",
              "values": "25 / 27.5 / 30 / 32.5 / 35"
            }
          ]
        }
      ]
    },
    {
      "description": "Activation resets Way of the Hunter's current sword state. Soul Unbound can be recast after 0.5 seconds, and automatically does so after the duration."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Yone dashes back to his body with displacement immunity, ending Spirit Form and consuming the marks on each champion to deal true damage equal to the total amount of damage stored against each of them.</p>"
    },
    {
      "description": "The automatic recast is delayed if Yone is winding up a basic attack or is unable to recast Soul Unbound under any circumstances, which includes if he cannot move or cast abilities. Soul Unbound will also immediately recast upon death or entering resurrection."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Yone/ability-icon/e",
  "notes": "The marks store  physical damage,  magic damage, and  true damage.\nSoul Unbound stays on cooldown for the first 15 seconds of the game.\n Recall and  Teleport are disabled during Soul Unbound.\nOnly Yone's initial dash can be  interrupted.\nYone is  displacement immune during the recast's cast time.\nYone uses  Flow as his resource to indicate the remaining amount of time in centiseconds (100 centiseconds = 1 second) that Soul Unbound can be active for before the ability automatically recasts.\nWith 1 second remaining before the recast occurs automatically, a soft, dark vignette will pulse over the screen, accompanied by a distinct audio cue. This warning is only visible and audible to Yone.\nYone's body unit cannot be interacted with by any means. It will despawn as soon as Yone's dash back ends.\nSoul Unbound's recast, even when cast automatically, counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nSoul Unbound's recast does not interrupt Yone's last movement or attack order.\nYone will place himself onto the ground and interrupt  displacements affecting him upon recasting.\nSome examples of effects that can delay Soul Unbound's automatic recast:\nAttack windup\nCast time\n Channels (excluding  Hexflash)\n Lockouts\n Dashes\n Immobilizes,  Silence,  Ground, and  Stasis\n Devour\n Fate's Call\nYone instantly appears at his body's location the moment this effect ends.\n Realm Warp\nSoul Unbound's recast is disabled (cannot be manually nor automatically cast) while Yone is in the  Realm of Death or  The Hextech Ultimatum. The recast will be deferred until those effects end.\n The Hextech Ultimatum will specifically end if Yone recasts Soul Unbound.\nIf Yone uses  Mortal Steel at two Gathering Storm stacks to delay Soul Unbound's automatic recast, he will be able to basic attack once in a short time period before the automatic recast triggers.\nIf Yone  dies or enters  resurrection with Spirit Form, he will immediately initiate the recast and dash back to his body while dead or resurrecting.\nIf he dies during the recast, the dash back is not interrupted.\nHis death animation will play upon arriving to his body.\nThe marks do not store damage from items, runes and summoner spells.\nThe mark also automatically detonates without Yone having to recast when the marked champion dies or enters  resurrection.\nThe detonation damage cannot be dodged by becoming  untargetable.\nThe marks will not store damage dealt to  shields.\nIf the mark's damage is higher than the target's current health, the mark indicator will have a slightly different appearance.\nThis does not take into account effects that would amplify the damage of the mark, such as  Coup de Grace.\nThe following table refers for interactions while Yone is in cast time and dashing back to his body:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll summoner spells are disabled\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nN/A",
  "speed": "1200",
  "spellEffects": "aoe",
  "spellshieldable": "false",
  "targeting": "Direction / Auto"
}
export default ability
