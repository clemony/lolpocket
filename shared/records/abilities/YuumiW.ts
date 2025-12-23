// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "W",
  "name": "You and Me!",
  "affects": "Allies",
  "castTime": "none",
  "cooldown": "0",
  "cost": "0",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> While Yuumi is attached, she is untargetable (except by turrets and inbound projectiles) and casts her abilities from the Anchor's position, empowering them with additional effects.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Yuumi channels for 0.25 seconds, then upon completion dashes to the target allied champion and attaches to them upon arrival, designating them as her Anchor. You and Me! can be recast after 0.5 seconds of the attachment.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast - Change of Plan:</span> Yuumi detaches from her Anchor and dashes to the target allied champion to attach to them, refreshing the recast. She will detach automatically if her Anchor dies or under certain circumstances. If recast without a valid target, Yuumi will detach and dash 250-units in the target direction, placing You and Me! on a 0.25-second cooldown if it is not already on cooldown.</p>"
    },
    {
      "description": "Yuumi will be knocked down by any immobilizing or polymorphing crowd control during the dash."
    },
    {
      "description": "Yuumi starts with a skill point in You and Me! and Prowling Projectile instead has 6 ranks."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Best Friend Bonus:</span> Yuumi gains heal and shield power and her Best Friend gains healing on-hit.You and Me! is placed on a 5-second cooldown if Yuumi becomes immobilized, grounded, or polymorphed.</p>",
      "leveling": [
        {
          "attribute": "Heal and Shield Power",
          "modifiers": [
            {
              "unit": "%",
              "values": "4 / 5 / 6 / 7 / 8"
            }
          ]
        },
        {
          "attribute": "Healing On-Hit",
          "modifiers": [
            {
              "values": "3 / 4 / 5 / 6 / 7"
            },
            {
              "unit": "% AP",
              "values": "3"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Yuumi/ability-icon/w",
  "notes": "The Best Friend's healing on-hit is affected by Yuumi's heal and shield power.\nYuumi will track the target if they change locations.\nShe will not stop tracking the target until she reaches them, as there is no maximum tracking distance.\nIf the target moves 2000 or more units away from Yuumi during the dash, it will be interrupted and You and Me! will be placed on full cooldown.\nThe 0.5-second cooldown will be incurred whenever Yuumi attaches to an Anchor, whether by the active or the recast.\nAttempting to recast You and Me! on an ally that is out of range will briefly glow a range indicator of the ability and indicate that the target is \"Out of Range!\".\nYou and Me! does not count as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nYou and Me! does not count as a buff for  Summon Aery.\nThe initial cast and recast of You and Me! have a  forgiveness radius of 175 units.\nThis behavior can override her direction-targeted  dash to discard any target.\nYuumi can channel the  Eye of the Herald while attached.\nYuumi will automatically detach in the following circumstances:\nWhen her Anchor starts a  Teleport channel.\nAfter the Anchor completes a  Recall channel.\nHer Anchor is sent to the  Realm of Death.\nShe is pulled by  Fate's Call.\nWhen she or her Anchor enters  resurrection.\nIf Yuumi is channeling You and Me! or already dashing towards an ally who enters  resurrection, then she will successfully attach to the resurrecting ally, and she will be able to heal/shield them during it.\nYuumi doesn't detach instantly when her Anchor dies. There's a small grace period in which she can recast You and Me! to attach to another champion without the  channel or dash in the target direction.\nYuumi can dash to targetable  zombie state allies (currently only  Sion's  Glory in Death), but she cannot attach when she reaches them.\nThe same goes for allies channeling  Teleport.\nWhile attached to the Anchor, Yuumi is considered in being at her Anchor's position, regardless of where she is visually placed near them. For example,  turret shots will appear as if they were hitting the Anchor, but in reality they're actually hitting Yuumi.\nHowever, for the purposes of You and Me!, such as casting it or being unattached for other reasons, Yuumi will be in the position where she visually is. For example, when she is in the blue team, dashing to a north-east ally is considerably slower than dashing to a south-west ally.\nHer  monster aggression transfers to the Anchor.\nEnemies are credited an assist on Yuumi if they damaged the Anchor at any point and she dies within the standard credit timer.\nYuumi will always be  visible if her Anchor can be seen, and she will always not be visible if her Anchor cannot be seen. These rules apply regardless of  reveal effects and  stealth.\nYuumi will not  vanish if her Anchor does.\nIf Yuumi is on the blue team, she will remain attached on the southwest side; if Yuumi is on the red team, she will remain on the northeast. While channeling  Final Chapter, she will be behind her Anchor.\nThe player's screen will briefly flash red if Yuumi is affected by a  immobilizing or  grounding effect, or if she forcibly detaches from her Anchor.\n Sleep does not count for knocking the dash down.(bug)\nThe Anchor's health bar will have a different frame to indicate the attached status:\n\nThe following table refers for interactions while Yuumi is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Teleport  Recall  Hexflash\n\n\nInterrupted by\n\n Flash\n\n\nInterrupted by\n\nDeath Grounding effects Immobilizing effects Cast-inhibiting effects\n\nThe following table refers for interactions while Yuumi is  attached:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nAllowed\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nAll the other item-actives are usable\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
  "speed": "1200 / 1300 / 1400 / 1500 / 1600",
  "targeting": "Unit / Direction",
  "targetRange": "700"
}
export default ability
