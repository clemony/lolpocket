// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "R",
  "name": "Dragon's Rage",
  "affects": "Enemies",
  "blurb": "Active:  Lee Sin  roots the target enemy  champion and roundhouse kicks them, dealing physical damage and  knocking them back.",
  "castTime": "0.25",
  "collisionRadius": "160",
  "cooldown": "110 / 85 / 60",
  "cost": "0",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Lee Sin roots the target enemy champion over the cast time, then roundhouse kicks them to deal physical damage and knock them back up to 800 units over 0.8 seconds, rendering them airborne for 1 second.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "175 / 400 / 625"
            },
            {
              "unit": "% bonus AD",
              "values": "200"
            }
          ]
        }
      ]
    },
    {
      "description": "Enemies that collide with the displaced enemy while it is airborne take the same damage plus bonus physical damage and are knocked up for 1 second.",
      "leveling": [
        {
          "attribute": "Collision Physical Damage",
          "modifiers": [
            {
              "values": "175 / 400 / 625"
            },
            {
              "unit": "% bonus AD",
              "values": "200"
            },
            {
              "tooltip": "Scaling per rank:\n12 / 15 / 18% of primary target's bonus health",
              "unit": "% of primary target's bonus health",
              "values": "12 - 18"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/LeeSin/ability-icon/r",
  "notes": "Applies  spell damage to the primary target and  area damage to secondary targets.\nThe spell indicator for this ability also displays the direction for the knock back relative to Lee Sin's position.\nIf the target of Dragon Rage  dies initially on the first hit there will be no displacement of any kind.\nThe  displacement's direction is decided at the moment of impact and not by Lee Sin and his target's relative locations at the start of the cast (the only way for Lee Sin to control where his target is displaced is by using  Flash before the cast time of Dragon's Rage ends).\nIf the  airborne debuff is removed from the target, its ability to collide with enemies is removed aswell, even if the target has not come to a stop yet.(note)\nThe airborne debuff and with it collision of the target remains for the normal duration even if its trajectory is  displaced by another source (i.e -  Headbutt).\nThe target may still collide with other enemies for the remaining airborne duration after they reach their destination, as the airborne debuff lasts longer than the displacement.\nThe knockback distance is intended to be 800, but due to a bug, this is reduced by up-to the sum of Lee Sin's and his target's  gameplay radius, depending on how far they are away from one another at the end of the cast time.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
  "spellEffects": "Special",
  "spellshieldable": "True",
  "targeting": "Unit",
  "targetRange": "375"
}
export default ability
