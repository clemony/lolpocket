// Updated Patch 16.1 - 01/29/2026 04:27:07 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "P",
  "name": "Absolution",
  "affects": "Self, Enemies",
  "blurb": "Innate - Weakened Soul:  Senna's  basic attacks  on-hit and  abilities against enemy  champions apply a  stack of Mist for a few seconds. Subsequent hits collect the Mist, dealing bonus physical damage based on the target's current health and rendering the target immune to further Mist applications for a few seconds.",
  "effectRadius": "2000",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Weakened Soul:</span> Senna's basic attacks on-hit and abilities mark enemy champions hit for 4 seconds. Subsequent attacks or ability hits against marked targets will consume the mark to grant Senna a stack of Mist and deal bonus physical damage equal to 1% - 10% (based on level) of the target's current health, rendering the target immune to being marked again for a few seconds. This damage applies life steal at 100% effectiveness.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Enemies that die near Senna may spawn a Mist Wraith from their corpse. A Mist Wraith lasts 8 seconds and Senna can basic attack or hit it with Piercing Darkness or Dawning Shadow to kill it instantly, granting her 8 and a stack of Mist.</p>\nEnemy champions and large monsters will spawn a Mist Wraith.\nEpic monsters will spawn 2 Mist Wraiths.\n Minions and lesser monsters that Senna kills have a 10% chance to spawn a Mist Wraith.\nLarge minions that Senna does not kill will always spawn a Mist Wraith, while lesser minions and lesser monsters that Senna does not kill have a 28% chance to spawn one.\nLesser minions executed by an allied champion's Support Quest item have a 8.4% chance to spawn a Mist Wraith."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Mist:</span> For each stack of Mist, Senna gains 0.75 bonus attack damage. For every 20 stacks, she also gains 20 bonus attack range and 10% critical strike chance. Additionally, every 1% critical strike chance in excess of 100% is converted into 0.35% life steal.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Relic Cannon:</span> Senna's basic attacks on-hit deal 20% AD bonus physical damage and grant her 10% / 15% / 20% (based on level) of the target's movement speed as bonus movement speed for 0.5 seconds. The damage applies life steal at 100% effectiveness.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Senna/ability-icon/p",
  "notes": "If a target's mark has a remaining duration less than 0.25 seconds, and Senna starts her basic attack windup on the target during this time, the mark's duration will be modified to 0.75 seconds. Subsequent windups on the marked target will refresh this modified duration if the previous attack windup did not complete.\nDespite Senna dealing 1 damage to Mist Wraiths, attacking them will calculate the attack's damage (including  critical strike modifiers) and any on-hit effects for the purposes of  life steal and  drain effects.\nRelic Cannon is only applied if the attack deals more than 0 damage.\nHence, it is not applied if the target is  invulnerable or Senna's basic attack's  attack damage is reduced to 0 or below.\nThe bonus damage is also not applied against structures (regardless of their vulnerability).\nDealing 0 damage is valid for marking and collecting Mist from champions, but dealing no damage at all is not.\nHence, Senna can mark and collect from  invulnerable enemies.\n Dodge prevents marking and collecting a Mist via Senna's basic attacks and  Piercing Darkness.\nPENDING FOR TEST:: Mist interaction with  block and  blind.\n Nunu & Willump spawn a wraith each.\nEnemies will not see newly spawned wraiths while Senna is not visible.\nA wraith can be hit by  Bard's  Cosmic Binding and it will interact with it the same way minions or monsters interact with Cosmic Binding but it will not take damage.\nMist Wraith has a spawn animation, but is targetable immediately.\nMist Wraith grants a small amount of  sight around itself.\n Runaan's Hurricane secondary bolts will ignore Mist Wraiths.\nAttacking a Mist Wraith will not consume Energized.\nExcluding the range increase and the bonus shielding on  Dawning Shadow, one stack of Mist is worth  46.25 ( +8 from Mist Wraith pickup ( 54.25 total)),  35.62125 if the critical chance is converted to life steal.\n 0.75 AD is worth  26.25.\n 0.5% critical strike chance is worth  20.\n 0.175% life steal is worth  9.37125.\nThe bonus on-hit damage applies an additional stack of  Black Cleaver's Carve.\n Critical strike chance gained from  Yun Tal Wildarrows' Practice Makes Lethal, Augments and  Stat bonuses do not interact with the life steal conversion.(bug)\nThe buff will be granted even when hitting units that have zero movement speed (from which Senna cannot gain any movement speed).\nAttacking structures is special-cased to not grant it at all, however.\nPinging Absolution in the HUD will send a chat message to the team that displays its stack count and her total  attack range accumulated.",
  "onTargetCdStatic": "6 / 5 / 4 (based on level)",
  "spellshieldable": "False",
  "targeting": "Passive"
}
  export default ability
