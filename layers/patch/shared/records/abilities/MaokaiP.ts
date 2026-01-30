// Updated Patch 16.1 - 01/29/2026 04:26:53 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "P",
  "name": "Sap Magic",
  "affects": "Self",
  "blurb": "Innate: Periodically,  Maokai's next basic attack will  heal him for a portion of his maximum health.",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Periodically, Maokai empowers his next basic attack to have an uncancellable windup and heal him for 4% - 12.8% (based on level) maximum health after a 0.25-second delay.</p>"
    },
    {
      "description": "Each time Maokai casts an ability, hits at least one enemy champion or epic monster with Sapling Toss, or is struck by an enemy's ability, Sap Magic's cooldown is reduced by 4 seconds, modified to 1.5 if he is hit by a large monster's basic attack or ability."
    },
    {
      "description": "Sap Magic resets Maokai's basic attack timer, and will not trigger if he is above 95% maximum health."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Maokai/ability-icon/p",
  "notes": "Sap Magic does not occur if the attack is  dodged and/or missed if Maokai is  blinded. It will occur if it is  blocked.\nThe striking ability has to trigger spell effects such as  spell damage or  area damage for the cooldown to be reduced.\nIf Maokai possesses a  spell shield and it consumes an enemy ability, he will still receive the cooldown reduction.\nThe empowered attack will not trigger against structures nor wards.",
  "targeting": "Passive"
}
  export default ability
