// Updated Patch 15.23.1 - 11/30/2025 12:24:14 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Death Mark",
  "affects": "Self, Enemies",
  "blurb": "Active:  Zed becomes  untargetable while  dashing to the target enemy champion, then renders them Marked for Death for a short time, during which he is  ghosted. He leaves behind a  Shadow that will remain for a period and mimic  Razor Shuriken and  Shadow Slash.",
  "castTime": "none",
  "cooldown": "120 / 110 / 100",
  "cost": "0",
  "damageType": "Physical damage",
  "effectRadius": "Global",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Zed becomes untargetable and, after a 0.6-second delay, he dashes to 125 units beyond the target enemy champion from his position at the end of the delay over 0.35 seconds. Afterwards, he becomes targetable again, renders the target Marked for Death for 3 seconds, and gains ghosting for the same duration.</p>"
    },
    {
      "description": "Zed also spawns a Shadow at his casting position for 9 seconds which is able to mimic Razor Shuriken and Shadow Slash regardless of range. Death Mark can be recast after 0.5 seconds of his reappearance while the Shadow is active, though not in the last 1.25 seconds of its duration."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Marked for Death:</span> Zed stores a portion of all pre-mitigation physical damage and magic damage he and his Shadows deal to the target, detonating at the end of the duration to deal physical damage.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "unit": "% AD",
              "values": "100"
            },
            {
              "tooltip": "Scaling per rank:\n25 / 40 / 55% of damage stored",
              "unit": "% of damage stored",
              "values": "25 - 55"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Zed and the Shadow blink to swap places.</p>"
    },
    {
      "description": "If the target dies or is 1950 or more units away before the dash begins, Death Mark is cancelled, causing the ability to go on a 0.5-second cooldown, Zed to reappear at the cast location, and the Shadow he spawned to disappear."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Zed/ability-icon/r",
  "notes": "Zed gains a buff for 7.5 seconds that indicates and determines the duration in which he may recast Death Mark.\nThe buff is granted on-cast and lingers for 0.25 seconds after it expires.\nThe  Shadow is spawned the moment Death Mark is cast.\nZed will track the target if they change locations.\nHe will dash through the target's previous location while still applying the mark if they are 2200 or more units away.\nZed will become targetable, apply the mark, and gain the  ghosting as soon as his dash ends.\nThe mark will not be applied to the target if they are  untargetable by the time Zed's dash ends.\nZed will be ordered to basic attack his target after reappearing.\nDeath Mark's stored damage derives from all basic attacks, abilities, items, runes and buffs.\nDeath Mark's  Shadow is functionally the same as a regular one, but it lasts longer and can be swapped to regardless of range.\nThe range at which it mimics Zed's abilities does not change.\n Spell shield will only block the mark's application. They will not prevent Zed from initiating Death Mark against the target nor block the detonation from a mark that is already applied.\nIf Zed dies during Death Mark, the ability will cancel instantly and he will reappear at his current location. The cooldown is not refunded.\nIf he enters  resurrection before the dash, Death Mark does not cancel. If he enters it while dashing, the dash is interrupted.\nIf the  dash is interrupted, Zed stops, places himself to the ground (ends all displacements affecting him, but does not remove  airborne effects), and reappears prematurely at his current location. The mark will still be applied regardless.\nZed will remove  airborne effects from himself immediately upon starting the dash.\nOnce Zed begins the  dash, two  Shadows will also appear to be dashing through his target, each one spawning a certain distance behind the target (from the right and left). These shadows do not mimic abilities and disappear immediately after they stop dashing but they grant  sight of their surroundings.\nThese shadows have a tracking distance of 2200 and a dash speed of 1750.\nDeath Mark does not cancel if the target enters a  zombie state before the dash begins.\nIf the mark's post-mitigation damage is higher than the target's current health, a spinning shuriken will appear above the victim. This does not necessarily mean the target will die, as it does not consider  shields or forms of damage modifiers that are not respected by this predictive calculation.\n\nThe indicator shown in-game (base skin).\n\nThis following table refers for interactions while Zed is performing Death Mark:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash  Mark  Dash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
  "spellEffects": "Single target",
  "spellshieldable": "Special",
  "targeting": "Unit / Auto",
  "targetRange": "625"
}
export default ability
