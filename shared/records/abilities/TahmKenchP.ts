// Updated Patch 15.23.1 - 11/30/2025 12:24:05 PM CST

const ability: Ability = {
  "key": "P",
  "name": "An Acquired Taste",
  "affects": "Self",
  "blurb": "Innate:  Tahm Kench's  basic attacks and  Tongue Lash deal bonus magic damage based on his bonus health, and apply a  stack of An Acquired Taste against  champions that stacks up to a cap.",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Tahm Kench's basic attacks on-hit and Tongue Lash are empowered to deal 6 - 48 (based on level) (+ 1.5% AP per 100 bonus health) (+ 4% of his bonus health) bonus magic damage and apply a stack of An Acquired Taste against enemy champions for 5 seconds, refreshing on subsequent hits and stacking up to 3 times. Stacks expire one by one every 0.67 seconds when the duration ends.</p>"
    },
    {
      "description": "Tongue Lash and Devour gain additional effects against enemies with 3 stacks, consuming them all."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/TahmKench/ability-icon/p",
  "notes": "The passive bonus damage applies to turrets.",
  "spellEffects": "Proc",
  "targeting": "Passive"
}
export default ability
