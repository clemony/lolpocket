// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Dirty Fighting",
  "affects": "Self, Enemies",
  "blurb": "Innate:  Akshan's  basic attack causes him to fire a second attack that deals reduced physical damage. If Akshan cancels the second attack, he gains a brief burst of  move speed, increased based on his  attack speed.",
  "damageType": "Other damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Whenever Akshan uses a basic attack, he fires an additional shot after a delay that deals 50% AD physical damage, increased to 100% AD against minions. Issuing an attack order on a different target before the additional shot has been launched causes Akshan to fire it at the new target. If the second shot is cancelled instead, he gains 20 - 75 (based on level) × (1 + 100% bonus attack speed) bonus movement speed decaying over 1 second.</p>"
    },
    {
      "description": "The additional shot applies on-hit effects, triggers on-attack effects, and can critically strike[ for (22.5% + 12%) bonus damage. ][ 100% base damage + 30% bonus critical damage. ]"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Akshan's basic attacks on-hit and ability hits apply a stack of Dirty Fighting to enemies for 5 seconds, refreshing on subsequent applications and stacking up to 3 times. The third stack against a target consumes them all to deal them 15 / 40 / 80 / 150 (based on level) (+ 60% AP) bonus magic damage; if the target is a champion, Akshan will also gain a 40 - 280 (based on level) (+ 35% bonus AD) shield for 2 seconds. The shield may be gained only once every few seconds.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Akshan/ability-icon/p",
  "notes": "If the first shot has killed its target, Akshan will automatically acquire another enemy within 200 units beyond his  basic attack range, else he can do so by issuing an attack order to a different target.\nApplies  basic damage for the second shot and  proc damage for the bonus damage.\nThe second shot:\nIs treated as a basic attack.\nCritically strikes independently from the first shot.\nCan be cancelled by inputting a different command right after using the first shot.\nCounts as a separate hit for effects such as  Electrocute,  Muramana's Shock, and  Eclipse's Ever Rising Moon.\nStarts the attack windup's cooldown after it is used, rather than when the first shot is.\nThe attack speed scaling on the movement speed buff includes the bonus attack speed gained from Akshan's innate attack speed growth.\nAt level 18, at minimum it grants 126 decaying movement speed.\nChanging targets for the second shot will also acquire the new target.\nThe second shot, if the first shot's target was killed, will prioritize  visible enemy champions, then  minions on  low health.\nThis ability's damage is calculated based on the caster's current stats and changes dynamically.",
  "projectile": "TRUE",
  "speed": "2000 / 5000",
  "spellEffects": "special",
  "spellshieldable": "false",
  "targeting": "Passive"
}
export default ability
