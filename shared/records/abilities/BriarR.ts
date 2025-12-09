// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Certain Death",
  "width": "320",
  "affects": "Enemies, Self",
  "castTime": "1 / 1.25",
  "cooldown": "120 / 100 / 80",
  "cost": "0",
  "damageType": "Magic damage",
  "effectRadius": "Global /  1500 /  575",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Briar kicks her pillory's hemolith in the target direction, briefly granting sight of its surroundings as it travels and marking the first enemy champion hit as her prey. The mark's application disrupts the target's ongoing channels. While the target is marked, they are revealed.</p>"
    },
    {
      "description": "If a target is hit, Briar cleanses herself from all crowd control and becomes immune to them over a cast time, afterwards dashing to them with displacement immunity. Upon arrival, she creates an explosion around the marked target that deals magic damage to them and nearby enemies and fears all non-marked targets for 1.5 seconds, during which they are slowed by 35%. She then enters a state of Hematomania.",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "150 / 250 / 350"
            },
            {
              "unit": "% AP",
              "values": "130"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Hematomania:</span> Briar gains all effects of Blood Frenzy as well as bonus armor and bonus magic resistance equal to 20% AD, life steal, and additional bonus movement speed.</p>",
      "leveling": [
        {
          "attribute": "Life Steal",
          "modifiers": [
            {
              "unit": "%",
              "values": "10 / 15 / 20"
            }
          ]
        },
        {
          "attribute": "Additional Bonus Movement Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "10 / 20 / 30"
            }
          ]
        }
      ]
    },
    {
      "description": "While in the empowered frenzy, Briar prioritizes attacking the marked target over all other units and regardless of range. If that target becomes invalid, she will shift back to her normal targeting priority until the marked target can be attacked again. Hematomania lasts until the mark is dispelled by any means, including Briar's or the target's death."
    },
    {
      "description": "Casting Chilling Scream removes the target's mark and ends Hematomania early. Head Rush's cast does not shift her targeting priority during Hematomania."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Briar/ability-icon/r",
  "notes": "Briar will track the target with the  dash if they change locations.\nShe will not stop tracking the target until she reaches them, as there is no maximum tracking distance.\nBriar lands 100 units in front of her target at the end of the dash.\nBriar will not initiate the second cast if she is being  suppressed, is under  resurrection, or is in the  Realm of Death when her target is hit by the missile in the normal realm.\nSince Certain Death cleanses herself from all crowd control when the first cast hits, she will be able to start the second cast due to removing the suppression effect.\nBriar will still dash to the target even if they die before she reaches them.\nBriar will transition from having  total crowd control immunity during the cast time of the dash, to having  displacement immunity during the dash.\nBriar will place herself onto the ground and interrupt  displacements affecting her upon starting the second cast time.\nHematomania's targeting priorities differ slightly from that of  Blood Frenzy's:\nShe will prioritize the marked target regardless of range and over all other units as long as it can be attacked.\nIf the marked target is not available, then she shifts her priority to the nearest other champion, then large monster or minion, and then any other unit.\nIf neither the marked target is valid or any other valid targets are close nearby, then she will prioritize targeting the nearest other champion, then large monster or minion, and then any other unit within a global radius.\nStarting the second cast interrupts any spells that Briar is  channeling.\nThe mark will expire if Hematomania's buff is dispelled.\nCasting  Blood Frenzy during Hematomania will not grant any additional bonuses nor will it override Hematomania's effects.\nGaining Hematomania while Blood Frenzy is active will override the previous buff.\nThe  disrupt is 'wrapped' into a status effect that causes the affected champion to display the \" Silenced\" UI on their health bar for 0.25 seconds, without actually applying the disabling effects of the  silence crowd control type (functions as an indicator of the target becoming disrupted). This however ensures that the disrupt is also prevented by effects that would negate  silences (such as  crowd control immunity).\nThis ability will cast from wherever the caster is at the start of the cast time.\nThe following table refers for interactions while Briar is in either the first or second cast time:\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection\n\nThe following table refers for interactions while Briar is dashing:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath\n\nThe following table refers for interactions while Briar is in Hematomania:\n\n\nAttacking\n\nUncontrollable\n\n\nAbilities\n\n Head Rush can only be cast on targets within its radius.  Chilling Scream interrupts the frenzy.  Certain Death is disabled.\n\n\nMovement\n\nUncontrollable\n\n\nItems\n\nUsable\n\nAll items are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
  "projectile": "TRUE",
  "resource": "Current health",
  "speed": "2000 / 2500 : 5000",
  "spellEffects": "spellaoe",
  "spellshieldable": "true",
  "targeting": "Direction"
}
export default ability
