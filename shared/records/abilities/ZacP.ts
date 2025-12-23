// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "P",
  "name": "Cell Division",
  "affects": "Self",
  "blurb": "Innate - Goo:  Zac's abilities have a  health cost. Whenever Zac's abilities damage an enemy, he sheds a number of chunks on the ground that remain for a few seconds. Zac and enemy champions can collect the chunks; an enemy will destroy it, while Zac will  heal a portion of his maximum health.",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - The Secret Weapon:</span> Zac gains increased percentage size equal to 1.5% of his bonus health, capped at 35% increased size at 2333.33 bonus health. Zac's size also reduces based on his missing health, down to 70% total size while at 0% health.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Goo:</span> Whenever Zac damages at least one enemy with an ability, he sheds a number of chunks of himself to a nearby location, landing towards nearby visible enemy champions and lasting for 6 seconds.</p>\n<p class=\"ability-effect\"><span class=\"ability-header\"> Stretching Strikes:</span> 1 chunk for each strike hit (excluding the collision) on different targets, up to 2</p>\n<p class=\"ability-effect\"><span class=\"ability-header\"> Unstable Matter:</span> 1 chunk if it hits at least one target</p>\n<p class=\"ability-effect\"><span class=\"ability-header\"> Elastic Slingshot:</span> 1 chunk for each enemy champion hit</p>\n<p class=\"ability-effect\"><span class=\"ability-header\"> Let's Bounce!:</span> 1 chunk for each bounce that hits an enemy champion, up to 4</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Both Zac and enemy champions can interact with a chunk by being within 50 units of it:</span> an enemy will destroy it, while Zac will consume it to heal for 4% - 8% (based on level) of his maximum health.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Cell Division:</span> Periodically, upon taking fatal damage, Zac enters resurrection for 8 / 7 / 6 / 5 / 4 (based on level) seconds, instantly restoring 50% of his maximum health and becoming untargetable and unable to act for the duration. Zac then splits into four uncontrollable bloblets away from his location, though stopping at terrain. After 1.5 seconds of the bloblets being untargetable, they start moving toward Zac's location over the remaining duration. Any damage the bloblets receive, excluding damage dealt in excess of each bloblet's total maximum health, is also redirected to Zac as true damage. While in resurrection, Zac cannot take damage from sources other than the redirected damage from his bloblets.</p>"
    },
    {
      "description": "After the duration, Zac is revived with 10 - 50% maximum health. Zac will die once all bloblets are killed."
    },
    {
      "description": "See Pets for stats and details for bloblets."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Zac/ability-icon/p",
  "notes": "The damage directed to Zac is  internal raw damage.\nZac's health when the bloblets are sent out is set to what it would be if all bloblets recombined, and is actively updated when the bloblets take damage.\nZac's increased size does not consider his base stats.\nCell Division's chunks spawn in two versions:\nContestable: They will fall to the ground at a point which is roughly equidistant from Zac and the nearest  visible enemy champion within 1000 range of him (dropping slightly in Zac's favor). The location at which they fall to the ground is influenced by the direction in which Zac is currently facing. Cannot be interacted with for the first 0.25 seconds (except during  Let's Bounce!).\nUncontestable: They will fall to the ground near Zac and can be picked up immediately (version used by default).\nZac's  untargetability upon triggering Cell Division does not  destroy in-flight  projectiles.\n Chronoshift and  Guardian Angel will take priority over Cell Division.\n Spirit Visage and  Heal Power increases the healing of both chunks and bloblets.\n Ryze's  Realm Warp is able to individually teleport Zac or his bloblets during Cell Division.\nIf Zac is transported to a new location before the bloblets landed, they will travel to form at his new position, adjusting their speed accordingly. If Cell Division's duration permits during this time, Zac will be revived even if the bloblets fail to physically recombine.\nCell Division's bloblets can be targeted by  Teleport and  Syndra's  Force of Will.\nOther bloblets are not interrupted by the conditions above and will continue to recombine instinctively.\nIf Zac's health is higher than it is supposed to be when the bloblets converge on him, his health will be set to the correct value.\nThe following table refers for interactions while Zac is in resurrection:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll summoner spells are disabled\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
  "targeting": "Passive"
}
export default ability
