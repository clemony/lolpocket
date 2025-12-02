// Updated Patch 15.23.1 - 11/30/2025 12:24:11 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Deadly Plumage",
  "affects": "Self, Rakan",
  "blurb": "Active:  Xayah empowers herself for a few seconds, gaining  bonus attack speed and causing her basic attacks to strike a second time, dealing reduced damage.",
  "castTime": "none",
  "cooldown": "20 / 19 / 18 / 17 / 16",
  "cost": "60 / 55 / 50 / 45 / 40",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Xayah enters a frenzy for 4 seconds, gaining bonus attack speed and empowering her basic attacks to fire an additional smaller feather at the target on-hit that deals 25% damage of the triggering attack's damage.</p>",
      "leveling": [
        {
          "attribute": "Bonus Attack Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "35 / 40 / 45 / 50 / 55"
            }
          ]
        }
      ]
    },
    {
      "description": "Whenever Xayah hits an enemy champion with the strike, she gains 30% bonus movement speed for 1.5 seconds."
    },
    {
      "description": "If Rakan is nearby upon cast, he also becomes empowered, and gains the bonus movement speed at the same time as Xayah."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Xayah/ability-icon/w",
  "notes": "The additional missile is visually a smaller feather than the normal feather missiles that are fired by Xayah's basic attacks and does not technically count as a Feather for  Clean Cuts.\nThe additional missile is fired as soon as the triggering basic attack's missile has hit the target, or more accurately  on-hit of the triggering basic attack.\nSince the additional missile's damage is based on a percentage of the triggering attack's damage, it will also benefit from the increased damage of triggering attacks that  critically strike.\nThe additional missile itself however cannot  critically strike.\n Runaan's Hurricane's Wind's Fury interacts with Deadly Plumage by causing the additional bolts to fire their own additional missile that deals a percentage of the triggering bolt's damage.\nDeadly Plumage does not interact with  Guinsoo's Rageblade's Phantom Hit.\nThe empowered attack will not trigger against wards.\nThe additional missile is not fired if the triggering basic attack misses while Xayah is  blinded.\nPENDING FOR TEST: Interactions with  dodge and  block.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "3000",
  "spellEffects": "periodic",
  "targeting": "Auto"
}
export default ability
