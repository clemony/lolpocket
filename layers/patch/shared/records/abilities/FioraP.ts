// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "P",
  "name": "Duelist's Dance",
  "affects": "Enemies",
  "angle": "90°",
  "blurb": "Innate:  Fiora challenges nearby enemy champions, calling out a direction from which she will try to strike their Vitals. A new Vital is called out after some time or if one is struck.",
  "damageType": "True damage",
  "effectRadius": "1200  1350 /  250",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Fiora identifies the Vitals of nearby visible enemy champions, marked as an arc around them in North-, East-, South- or Westward direction. Vitals take 1.75 seconds to become targetable and linger for 13.25 seconds afterwards while Fiora remains near the target, otherwise the Vital will disappear. After a Vital ends, Fiora identifies a new one on her target.</p>"
    },
    {
      "description": "Dealing damage in the direction of a Vital will trigger it to deal bonus true damage equal to 3% (+ 4% per 100 bonus AD) of target's maximum health, heal Fiora for 35 - 100 (based on level), and grant her 20% / 30% / 40% / 50% (based on Grand Challenge's Rank) bonus movement speed that decays over 1.85 seconds."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Fiora/ability-icon/p",
  "notes": "Vitals can be triggered by any source of damage Fiora deals, except those with  default damage and  reactive damage types.\nThe Vitals are visible to all units.\nA Vital's angle is fixed to the champion's model and doesn't interact with its orientation.\nVitals spawn directions alternate in a Northeast-Southwest pattern. Other than that, they have a 50% chance to spawn North or East, or South or West, respectively.\nPENDING FOR TEST: The direction of the first Vital upon Fiora and her enemy encountering one another in the game for the first time is always South- or Westward. This is regardless of whether Fiora is in the Blue or Red team.\nVitals will not trigger if the attack is  dodged or missed while Fiora is  blinded.\n Block will not prevent a trigger.\nIf the Vital is triggered by  Lunge, it can be  dodged, but it can't be  blocked and will trigger even if Fiora is  blinded.",
  "spellEffects": "Proc",
  "spellshieldable": "False",
  "targeting": "Passive"
}
  export default ability
