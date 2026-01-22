// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Z-Drive Resonance",
  "affects": "Enemies / Self",
  "blurb": "Innate:  Ekko's  basic attacks  on-hit and damaging  abilities apply  stacks, the third stack deals bonus magic damage. If the target was a  champion, this grants  bonus movement speed to Ekko.",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Resonance:</span> Ekko's basic attacks on-hit and damaging abilities apply a stack of Resonance to enemies hit for 4 seconds, refreshing on subsequent hits and stacking up to 3 times. The third stack consumes them all to deal 30 - 140 (based on level) (+ 90% AP) bonus magic damage. Z-Drive Resonance deals 300% damage against monsters.</p>"
    },
    {
      "description": "Resonance cannot affect the same target more than once every few seconds."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Stolen Time:</span> Triggering Resonance against a champion grants Ekko 50% / 60% / 70% / 80% (based on level) bonus movement speed for 2 / 2.5 / 3 (based on level) seconds.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Ekko/ability-icon/p",
  "notes": "Ekko's basic attacks have different animations based on how many stacks his target has. His attack pattern is as follows:\nDownwards → Upwards → Sideways\nIf the target has already been affected by Resonance, Ekko's basic attack animations will kick or attack the target sideways.\nResonance stacks will not be applied nor consumed if the basic attack is  dodged or  blocked or if the attack  misses.",
  "onTargetCdStatic": "5",
  "spellEffects": "Single target",
  "spellshieldable": "True",
  "targeting": "Passive"
}
export default ability
