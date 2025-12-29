// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Feline Friendship",
  "affects": "Self, Allies, Enemies",
  "blurb": "Innate: Periodically,  Yuumi's next  basic attack or  ability hit against enemy champions will  heal her. If she is  attached to an ally within a short time, they are healed as well.",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Periodically, Yuumi's next basic attack, which has an uncancelable windup, gains 50 bonus range and becomes non-projectile, ability hit against enemy champions, or Final Chapter hit on ally champions while attached, will heal her for 20 - 110 (based on level) (+ 25% AP). If she is attached to an ally or does so within 4 seconds, they are healed for the same amount.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> While attached to an ally, Yuumi grants them 2 permanent Friendship stacks whenever they kill enemy champions or minions. The ally with the highest Friendship stacks becomes Yuumi's Best Friend, which empowers her abilities with additional effects while she is attached to them.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Yuumi/ability-icon/p",
  "notes": "Feline Friendship will not be consumed if Yuumi isn't missing health, except when triggered by a basic attack. While  attached, it won't be consumed if both Yuumi and her anchor aren't missing health.\nEnemy hits with  Final Chapter won't trigger Feline Friendship.(note)\nFeline Friendship will apply to a basic attack already in flight.\nIf there are multiple allies who have equal Friendship stacks, the one Yuumi is currently attached to becomes her Best Friend.\nPENDING FOR TEST: Empowered attack interaction with parrying effects ( dodge,  block).\nIf Yuumi is  blinded, Feline Friendship won't be consumed.",
  "projectile": "FALSE",
  "targeting": "Passive"
}
export default ability
